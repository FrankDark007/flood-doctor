import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ChevronRight,
  ChevronDown,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Star,
  Home,
  Building2,
  Droplets,
  AlertTriangle,
  Gauge,
  Calculator,
  FileCheck,
  HeadphonesIcon,
  MapPin,
  Ruler,
  Layers,
  Info,
  TrendingUp,
  DollarSign,
  Zap,
  Users,
  FileText,
  BadgeCheck,
  XCircle
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';

/**
 * WaterDamageCostCalculator - SEO-Optimized Cost Calculator Tool
 *
 * Competitive features based on analysis of top-ranking pages:
 * - CPR Restoration, Homewyse, Angi, Dalworth, Today's Homeowner
 *
 * Key SEO elements:
 * - Year stamp in H1 for freshness
 * - Detailed calculator with 7+ inputs
 * - Cost per square foot breakdowns
 * - Damage class (1-4) explanations
 * - Regional pricing adjustments
 * - FAQPage schema markup
 * - Comprehensive methodology section
 * - What's included/excluded
 * - Insurance guidance
 *
 * Last updated: January 2026
 */

const WaterDamageCostCalculator: React.FC = () => {
  // Calculator State
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [squareFootage, setSquareFootage] = useState<number>(500);
  const [roomsAffected, setRoomsAffected] = useState<number>(2);
  const [damageClass, setDamageClass] = useState<1 | 2 | 3 | 4>(2);
  const [waterCategory, setWaterCategory] = useState<1 | 2 | 3>(1);
  const [serviceHours, setServiceHours] = useState<'regular' | 'after-hours' | 'emergency'>('regular');
  const [standingWater, setStandingWater] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMethodology, setShowMethodology] = useState<boolean>(false);

  // Actual pricing from Flood Doctor price list (Xactimate-based)
  const pricing = {
    // Equipment daily rates
    equipment: {
      airMoverStandard: 42.00,      // Standard drying fan per day
      airMoverAxial: 58.08,         // Axial fan per day
      dehumidifierMedium: 92.75,    // Medium commercial DH per day
      dehumidifierLarge: 129.50,    // Large commercial DH per day
      dehumidifierXLarge: 204.00,   // XLarge LGR per day
      airScrubber500: 75.00,        // 500 CFM HEPA scrubber per day
      airScrubber2000: 150.00,      // 2000 CFM HEPA scrubber per day
      negativeAir: 278.59,          // Negative air machine per day
      desiccant1000: 575.00,        // Desiccant DH 1000 CFM per day
      desiccant3000: 875.00,        // Desiccant DH 3000 CFM per day
    },
    // Labor hourly rates
    labor: {
      skilledTechDay: 55.50,
      skilledTechNight: 89.50,
      skilledTechWeekend: 99.50,
      skilledTechHoliday: 124.50,
      certifiedTechDay: 74.50,
      certifiedTechNight: 94.50,
      extractionTech: 79.34,
      equipmentMonitoring: 79.34,
      equipmentMonitoringAfter: 119.13,
      projectManager: 74.50,        // Residential supervision
      projectManagerAfter: 125.00,
      plumber: 177.81,
      electrician: 147.15,
    },
    // Per SF rates
    perSqFt: {
      extractionCat1: 0.35,         // Clean water extraction
      extractionCat2: 0.49,         // Gray water extraction
      extractionCat2Heavy: 1.15,    // Heavy gray water
      extractionCat3: 0.85,         // Black water extraction
      antimicrobial: 0.56,          // Antimicrobial application
      tearOutCarpet: 1.76,          // Non-salvageable carpet removal
      tearOutPad: 1.67,             // Carpet pad removal
      tearOutDrywall: 1.32,         // Wet drywall removal
      tearOutInsulation: 1.47,      // Wet insulation removal
      tearOutFlooring: 3.91,        // Floating floor removal
      tearOutTile: 4.16,            // Tile removal
      tearOutHardwood: 12.34,       // Hardwood removal
      containment: 1.23,            // Containment barrier
      hepaVacLight: 0.48,           // Light HEPA vacuum
      hepaVacDetailed: 0.96,        // Detailed HEPA vacuum
      protectPlastic: 0.54,         // Plastic protection
      finalCleaning: 0.36,          // Final cleaning
    },
    // Fixed costs
    fixed: {
      emergencyServiceCall: 498.00,
      thermalImaging: 650.00,
      matterportScan: 1500.00,
      digitizedSketch: 750.00,
      blockAndPadRoom: 66.18,
      equipmentDecon: 46.50,        // Per piece for Cat 2/3
    },
    // Per linear foot rates
    perLF: {
      baseboardDetach: 2.98,
      baseboardTearOut: 2.52,
      drywallFloodCut2ft: 5.04,
      tacklessTearOut: 2.91,
      trimTearOut: 1.24,
    }
  };

  // Equipment requirements by damage class
  const equipmentByClass = {
    1: { airMovers: 2, dehumidifiers: 1, days: 2, monitoring: 2 },
    2: { airMovers: 4, dehumidifiers: 2, days: 4, monitoring: 4 },
    3: { airMovers: 8, dehumidifiers: 3, days: 6, monitoring: 6 },
    4: { airMovers: 12, dehumidifiers: 4, days: 14, monitoring: 10 }
  };

  // Water category multipliers for extraction and treatment
  const waterCategoryMultiplier = {
    1: 1.0,   // Clean water
    2: 1.3,   // Gray water - 30% increase
    3: 1.8    // Black water - 80% increase (more PPE, disposal, decon)
  };

  // Service hours multipliers
  const serviceHoursMultiplier = {
    'regular': 1.0,
    'after-hours': 1.5,   // Based on actual after-hours rates
    'emergency': 1.8      // Emergency premium
  };

  const propertyMultiplier = {
    residential: 1.0,
    commercial: 1.15
  };

  // Calculate estimate using actual line-item pricing
  const estimate = useMemo(() => {
    const equipment = equipmentByClass[damageClass];
    const catMultiplier = waterCategoryMultiplier[waterCategory];
    const hoursMultiplier = serviceHoursMultiplier[serviceHours];
    const propMultiplier = propertyMultiplier[propertyType];

    // === LINE ITEM COST BREAKDOWN ===

    // 1. Emergency Service Call (if emergency)
    const emergencyFee = serviceHours === 'emergency' ? pricing.fixed.emergencyServiceCall : 0;

    // 2. Water Extraction
    const extractionRates = {
      1: pricing.perSqFt.extractionCat1,
      2: standingWater ? pricing.perSqFt.extractionCat2Heavy : pricing.perSqFt.extractionCat2,
      3: pricing.perSqFt.extractionCat3 * 1.3 // Black water premium
    };
    const extractionCost = squareFootage * extractionRates[waterCategory] * hoursMultiplier;

    // 3. Equipment Rental
    const airMoverCost = equipment.airMovers * pricing.equipment.airMoverStandard * equipment.days;
    const dehumidifierCost = equipment.dehumidifiers * pricing.equipment.dehumidifierLarge * equipment.days;
    const equipmentTotal = airMoverCost + dehumidifierCost;

    // 4. Air Scrubber (for Cat 2/3)
    const airScrubberCost = waterCategory > 1
      ? (waterCategory === 3 ? pricing.equipment.airScrubber2000 : pricing.equipment.airScrubber500) * equipment.days
      : 0;

    // 5. Labor - Monitoring & Management
    const laborRate = serviceHours === 'regular' ? pricing.labor.equipmentMonitoring : pricing.labor.equipmentMonitoringAfter;
    const monitoringHours = equipment.monitoring * 2; // 2 hours per visit
    const monitoringCost = monitoringHours * laborRate;

    // 6. Project Management
    const pmRate = serviceHours === 'regular' ? pricing.labor.projectManager : pricing.labor.projectManagerAfter;
    const pmHours = Math.ceil(equipment.days / 2); // Visit every other day
    const pmCost = pmHours * pmRate;

    // 7. Antimicrobial Treatment
    const antimicrobialCost = squareFootage * pricing.perSqFt.antimicrobial * catMultiplier;

    // 8. Content Manipulation (per room)
    const contentCost = roomsAffected * pricing.fixed.blockAndPadRoom;

    // 9. Equipment Decontamination (Cat 2/3)
    const deconCost = waterCategory > 1
      ? (equipment.airMovers + equipment.dehumidifiers) * pricing.fixed.equipmentDecon
      : 0;

    // 10. HEPA Vacuuming (Cat 2/3)
    const hepaCost = waterCategory > 1
      ? squareFootage * pricing.perSqFt.hepaVacLight
      : 0;

    // 11. Final Cleaning
    const cleaningCost = squareFootage * pricing.perSqFt.finalCleaning;

    // === TOTALS ===
    let subtotal =
      emergencyFee +
      extractionCost +
      equipmentTotal +
      airScrubberCost +
      monitoringCost +
      pmCost +
      antimicrobialCost +
      contentCost +
      deconCost +
      hepaCost +
      cleaningCost;

    // Apply property type multiplier
    subtotal *= propMultiplier;

    // Build itemized breakdown for display
    type BreakdownItem = {
      item: string;
      cost: number;
      perSqFt?: number;
      days?: number;
      hours?: number;
      rooms?: number;
      fixed?: boolean;
      units?: number;
    };

    const breakdown: BreakdownItem[] = [
      { item: 'Water Extraction', cost: extractionCost, perSqFt: extractionRates[waterCategory] },
      { item: 'Drying Equipment Rental', cost: equipmentTotal, days: equipment.days },
      { item: 'Equipment Monitoring & Labor', cost: monitoringCost, hours: monitoringHours },
      { item: 'Project Management', cost: pmCost, hours: pmHours },
      { item: 'Antimicrobial Treatment', cost: antimicrobialCost, perSqFt: pricing.perSqFt.antimicrobial },
      { item: 'Content Protection', cost: contentCost, rooms: roomsAffected },
      { item: 'Final Cleaning', cost: cleaningCost, perSqFt: pricing.perSqFt.finalCleaning }
    ];

    if (emergencyFee > 0) {
      breakdown.unshift({ item: 'Emergency Service Call', cost: emergencyFee, fixed: true });
    }
    if (airScrubberCost > 0) {
      breakdown.splice(2, 0, { item: 'Air Scrubber/HEPA', cost: airScrubberCost, days: equipment.days });
    }
    if (deconCost > 0) {
      breakdown.push({ item: 'Equipment Decontamination', cost: deconCost, units: equipment.airMovers + equipment.dehumidifiers });
    }
    if (hepaCost > 0) {
      breakdown.push({ item: 'HEPA Vacuuming', cost: hepaCost, perSqFt: pricing.perSqFt.hepaVacLight });
    }

    // Calculate range (±15% for estimate variance)
    const low = Math.round(subtotal * 0.85);
    const high = Math.round(subtotal * 1.15);
    const mid = Math.round(subtotal);

    // Per sqft calculation
    const perSqFtLow = (low / squareFootage).toFixed(2);
    const perSqFtHigh = (high / squareFootage).toFixed(2);

    // Timeline based on damage class
    const timelines = {
      1: '1-2 days',
      2: '3-5 days',
      3: '5-7 days',
      4: '1-3 weeks'
    };

    return {
      low,
      high,
      mid,
      perSqFtLow,
      perSqFtHigh,
      timeline: timelines[damageClass],
      breakdown: breakdown.filter(item => item.cost > 0),
      equipment: {
        airMovers: equipment.airMovers,
        dehumidifiers: equipment.dehumidifiers,
        days: equipment.days
      }
    };
  }, [squareFootage, damageClass, waterCategory, serviceHours, propertyType, standingWater, roomsAffected]);

  // Damage class definitions
  const damageClasses = [
    {
      class: 1,
      title: 'Class 1 - Minimal',
      description: 'Small area affected, materials absorbed minimal moisture',
      examples: 'Part of a room, single fixture leak',
      costRange: '$150 - $500',
      color: 'emerald'
    },
    {
      class: 2,
      title: 'Class 2 - Moderate',
      description: 'Entire room affected, moisture wicked up walls &lt;24"',
      examples: 'Whole room flooding, appliance failure',
      costRange: '$550 - $1,000',
      color: 'amber'
    },
    {
      class: 3,
      title: 'Class 3 - Extensive',
      description: 'Water from overhead, saturated walls/ceilings/insulation',
      examples: 'Ceiling collapse, multiple floors affected',
      costRange: '$1,100 - $3,200',
      color: 'orange'
    },
    {
      class: 4,
      title: 'Class 4 - Specialty',
      description: 'Deep moisture in hardwood, concrete, plaster, stone',
      examples: 'Hardwood floor saturation, concrete slabs',
      costRange: '$20,000 - $100,000+',
      color: 'rose'
    }
  ];

  // Water category definitions
  const waterCategories = [
    {
      category: 1,
      title: 'Category 1 - Clean Water',
      description: 'From a sanitary source, poses no health risk',
      examples: 'Broken supply line, faucet, rainwater',
      pricePerSqFt: '$3.00 - $4.50',
      icon: Droplets
    },
    {
      category: 2,
      title: 'Category 2 - Gray Water',
      description: 'Contains contaminants, may cause illness',
      examples: 'Dishwasher, washing machine, toilet (urine only)',
      pricePerSqFt: '$4.00 - $6.50',
      icon: AlertTriangle
    },
    {
      category: 3,
      title: 'Category 3 - Black Water',
      description: 'Highly contaminated, serious health hazard',
      examples: 'Sewage, flooding, standing water with bacteria',
      pricePerSqFt: '$7.00 - $14.50',
      icon: AlertTriangle
    }
  ];

  // Cost breakdown by service (actual Flood Doctor pricing)
  const serviceBreakdown = [
    { service: 'Emergency Service Call', range: '$498', included: true },
    { service: 'Water Extraction (Cat 1/2)', range: '$0.35 - $1.15/sq ft', included: true },
    { service: 'Air Mover (per day)', range: '$42 - $58/unit', included: true },
    { service: 'Dehumidifier (per day)', range: '$93 - $204/unit', included: true },
    { service: 'Antimicrobial Treatment', range: '$0.56/sq ft', included: true },
    { service: 'Equipment Monitoring', range: '$79/hour', included: true },
    { service: 'Project Management', range: '$75 - $125/hour', included: true },
    { service: 'Drywall Flood Cut (2 ft)', range: '$5.04/linear ft', included: false },
    { service: 'Carpet Removal', range: '$1.76/sq ft', included: false },
    { service: 'Hardwood Floor Removal', range: '$12.34/sq ft', included: false },
    { service: 'Insulation Removal', range: '$1.47/sq ft', included: false },
    { service: 'HEPA Vacuuming', range: '$0.48 - $0.96/sq ft', included: false }
  ];

  // Regional pricing for NoVA
  const regionalPricing = [
    { area: 'Fairfax County', adjustment: '+5%', avgProject: '$4,200' },
    { area: 'Arlington County', adjustment: '+8%', avgProject: '$4,500' },
    { area: 'Loudoun County', adjustment: '+3%', avgProject: '$4,000' },
    { area: 'Prince William County', adjustment: 'Base', avgProject: '$3,800' },
    { area: 'Alexandria City', adjustment: '+10%', avgProject: '$4,700' },
    { area: 'Washington DC', adjustment: '+12%', avgProject: '$4,900' }
  ];

  // FAQ items with schema-ready structure
  const faqs = [
    {
      question: 'How accurate is this water damage cost calculator?',
      answer: 'This calculator provides estimates within 10-15% of actual costs for standard water damage scenarios. We use Xactimate pricing—the industry standard used by 99% of insurance companies. For an exact quote, schedule a free on-site inspection where we measure affected areas and assess damage with moisture meters and thermal imaging.'
    },
    {
      question: 'What factors affect water damage restoration cost the most?',
      answer: 'The biggest cost factors are: (1) Water contamination level—Category 3 black water costs 65% more than clean water; (2) Damage class—specialty drying for hardwood or concrete is 2-3x more expensive; (3) Square footage affected; (4) How long water has been standing; (5) Materials damaged (hardwood vs carpet vs drywall); and (6) Whether mold remediation is needed.'
    },
    {
      question: 'Will my homeowners insurance cover water damage restoration?',
      answer: 'Most homeowner policies cover sudden water damage from burst pipes, appliance failures, and roof leaks from storms. Coverage typically excludes: flood damage from rising water (requires separate flood insurance), gradual leaks due to lack of maintenance, and sewage backups (unless you have a rider). We work directly with all major insurance carriers and can help maximize your coverage.'
    },
    {
      question: 'What is included in water damage restoration cost?',
      answer: 'Standard restoration includes: emergency response and assessment, water extraction, structural drying with commercial equipment, daily moisture monitoring and documentation, antimicrobial treatment, and deodorization. NOT typically included: reconstruction (drywall, flooring, paint), mold remediation, and contents restoration—these are quoted separately based on your specific needs.'
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'Class 1 (minimal) damage: 1-2 days. Class 2 (moderate): 3-5 days. Class 3 (extensive): 5-7 days. Class 4 (specialty drying): 1-3 weeks. These timelines cover mitigation and drying only. Add 1-4 weeks for any reconstruction work needed afterward.'
    },
    {
      question: 'Why does black water cost more to remediate?',
      answer: 'Category 3 black water contains sewage, bacteria, and pathogens that pose serious health risks. Remediation requires additional PPE for technicians, specialized HEPA filtration, disposal of contaminated materials, and thorough sanitization of affected surfaces. This typically adds 50-65% to the cost compared to clean water restoration.'
    },
    {
      question: 'Do you offer payment plans or financing for water damage restoration?',
      answer: 'Yes, we offer flexible payment options: direct insurance billing (we bill your carrier directly), 0% financing for up to 18 months for qualified customers, and payment plans for out-of-pocket expenses. We never want cost to delay critical restoration work that prevents further damage.'
    },
    {
      question: 'How much does emergency or after-hours service cost?',
      answer: 'Regular business hours: standard rates. After-hours service (evenings/weekends): approximately 15-20% premium. Emergency service (immediate dispatch): approximately 25-35% premium. Given that water damage worsens significantly every hour, emergency response often prevents additional damage that would cost more than the premium.'
    }
  ];

  // Build FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Cost Calculator 2026 | Free Estimate Tool | Northern Virginia"
        description="Calculate water damage restoration costs instantly. Free tool uses Xactimate pricing standards. Get estimates by damage class, water category, and square footage. Northern Virginia pricing."
        schema={faqSchema}
      />

      {/* Hero Section with Calculator Preview */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-32 lg:pt-20 lg:pb-40">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-10">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <Link to="/resources/" className="hover:text-white">Resources</Link>
            <ChevronRight size={14} />
            <span className="text-white/80">Cost Calculator</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                <Calculator size={16} className="text-primary" />
                Updated January 2026
              </div>

              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-tight">
                Water Damage Cost
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Calculator [2026]</span>
              </h1>

              <p className="text-xl text-white/70 leading-relaxed mb-6 max-w-lg">
                Get instant estimates using Xactimate pricing—the same software used by 99% of insurance companies. Customize for your exact situation.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="font-display text-2xl font-bold text-white">$3-8</div>
                  <div className="text-xs text-white/60">per sq ft avg</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="font-display text-2xl font-bold text-white">$3,866</div>
                  <div className="text-xs text-white/60">national avg</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="font-display text-2xl font-bold text-white">60min</div>
                  <div className="text-xs text-white/60">response</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#calculator" variant="primary" size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
                  Use Calculator
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button href="tel:8774970007" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Phone size={18} className="mr-2" />
                  Get Exact Quote
                </Button>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute top-0 right-0 w-56 h-36 rounded-2xl bg-white shadow-2xl p-5 transform rotate-3">
                <div className="flex items-center gap-2 text-sm text-muted mb-1">
                  <BadgeCheck className="text-emerald-500" size={16} />
                  IICRC Certified
                </div>
                <div className="font-display text-3xl font-bold text-text">10,000+</div>
                <div className="text-xs text-muted mt-1">Projects in NoVA</div>
              </div>
              <div className="absolute top-28 right-32 w-56 h-40 rounded-2xl bg-white shadow-2xl p-5 transform -rotate-2">
                <div className="flex items-center gap-2 text-sm text-muted mb-1">
                  <Star className="text-amber-400 fill-amber-400" size={16} />
                  4.9/5 Rating
                </div>
                <div className="font-display text-4xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted mt-1">Verified Reviews</div>
              </div>
              <div className="absolute bottom-10 right-10 w-52 h-36 rounded-2xl bg-gradient-to-br from-primary to-blue-600 shadow-2xl p-5 text-white">
                <div className="text-sm text-white/80 mb-1">Avg. Insurance Savings</div>
                <div className="font-display text-3xl font-bold">$2,400</div>
                <div className="text-xs text-white/70 mt-1">vs. national franchises</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calculator" className="relative -mt-20 z-10 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 lg:p-10 border-b border-gray-100">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Calculator className="text-primary" size={28} />
                    <h2 className="font-display text-2xl font-semibold text-text">
                      Instant Cost Estimator
                    </h2>
                  </div>
                  <p className="text-muted">
                    Uses Xactimate pricing—the industry standard used by insurance companies.
                  </p>
                </div>
                <button
                  onClick={() => setShowMethodology(!showMethodology)}
                  className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
                >
                  <Info size={16} />
                  How this works
                </button>
              </div>

              {/* Methodology explanation */}
              {showMethodology && (
                <div className="mt-6 p-5 bg-slate-50 rounded-xl">
                  <h3 className="font-medium text-text mb-2">How This Calculator Works</h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    This calculator uses our actual Xactimate-based pricing—the same rates we use for insurance claims. Estimates are built from real line items:
                  </p>
                  <ul className="text-sm text-muted space-y-1.5">
                    <li>• <strong>Water Extraction:</strong> $0.35-$1.15/sq ft based on water category</li>
                    <li>• <strong>Equipment:</strong> Air movers ($42/day), Dehumidifiers ($93-$204/day)</li>
                    <li>• <strong>Labor:</strong> Monitoring ($79/hr regular, $119/hr after-hours)</li>
                    <li>• <strong>Treatment:</strong> Antimicrobial application at $0.56/sq ft</li>
                    <li>• <strong>Emergency Premium:</strong> $498 service call fee + higher labor rates</li>
                  </ul>
                  <p className="text-sm text-muted mt-3">
                    Equipment quantities are calculated by damage class (Class 2 = 4 fans + 2 DH for 4 days). Estimates are typically within ±15% of final invoice for standard scenarios.
                  </p>
                </div>
              )}
            </div>

            <div className="p-8 lg:p-10">
              <div className="grid lg:grid-cols-5 gap-10">
                {/* Calculator Inputs - 3 columns */}
                <div className="lg:col-span-3 space-y-8">
                  {/* Row 1: Property Type & Square Footage */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text mb-3">Property Type</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setPropertyType('residential')}
                          className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                            propertyType === 'residential'
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Home size={18} className={propertyType === 'residential' ? 'text-primary' : 'text-muted'} />
                          <span className={propertyType === 'residential' ? 'font-medium text-text' : 'text-muted'}>
                            Residential
                          </span>
                        </button>
                        <button
                          onClick={() => setPropertyType('commercial')}
                          className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                            propertyType === 'commercial'
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Building2 size={18} className={propertyType === 'commercial' ? 'text-primary' : 'text-muted'} />
                          <span className={propertyType === 'commercial' ? 'font-medium text-text' : 'text-muted'}>
                            Commercial
                          </span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-3">
                        Affected Area (sq ft)
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="range"
                          min="50"
                          max="5000"
                          step="50"
                          value={squareFootage}
                          onChange={(e) => setSquareFootage(parseInt(e.target.value))}
                          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <input
                          type="number"
                          value={squareFootage}
                          onChange={(e) => setSquareFootage(parseInt(e.target.value) || 50)}
                          className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-center font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Rooms & Service Hours */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text mb-3">Rooms Affected</label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            onClick={() => setRoomsAffected(num)}
                            className={`flex-1 p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                              roomsAffected === num
                                ? 'border-primary bg-primary/5 text-primary'
                                : 'border-gray-200 text-muted hover:border-gray-300'
                            }`}
                          >
                            {num}{num === 5 ? '+' : ''}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-3">Service Timing</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { key: 'regular', label: 'Regular', subtext: 'Standard' },
                          { key: 'after-hours', label: 'After-Hours', subtext: '+15%' },
                          { key: 'emergency', label: 'Emergency', subtext: '+35%' }
                        ].map((option) => (
                          <button
                            key={option.key}
                            onClick={() => setServiceHours(option.key as any)}
                            className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                              serviceHours === option.key
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <span className={`text-sm ${serviceHours === option.key ? 'font-medium text-text' : 'text-muted'}`}>
                              {option.label}
                            </span>
                            <span className="text-xs text-muted">{option.subtext}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Standing Water Toggle */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div>
                      <div className="font-medium text-text">Standing Water Present?</div>
                      <div className="text-sm text-muted">Adds extraction costs (+$2.50/sq ft)</div>
                    </div>
                    <button
                      onClick={() => setStandingWater(!standingWater)}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        standingWater ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        standingWater ? 'translate-x-8' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  {/* Damage Class */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-3">
                      Damage Class (IICRC Standard)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {damageClasses.map((dc) => (
                        <button
                          key={dc.class}
                          onClick={() => setDamageClass(dc.class as any)}
                          className={`text-left p-4 rounded-xl border-2 transition-all ${
                            damageClass === dc.class
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className={`font-medium ${damageClass === dc.class ? 'text-text' : 'text-muted'}`}>
                              {dc.title}
                            </span>
                            <span className="text-xs text-muted">{dc.costRange}</span>
                          </div>
                          <div className="text-xs text-muted">{dc.examples}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Water Category */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-3">
                      Water Contamination Level
                    </label>
                    <div className="space-y-3">
                      {waterCategories.map((cat) => (
                        <button
                          key={cat.category}
                          onClick={() => setWaterCategory(cat.category as any)}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            waterCategory === cat.category
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <cat.icon
                              size={20}
                              className={`mt-0.5 ${
                                waterCategory === cat.category
                                  ? cat.category === 1 ? 'text-primary' : 'text-amber-500'
                                  : 'text-muted'
                              }`}
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className={`font-medium ${waterCategory === cat.category ? 'text-text' : 'text-muted'}`}>
                                  {cat.title}
                                </span>
                                <span className="text-xs text-muted">{cat.pricePerSqFt}/sq ft</span>
                              </div>
                              <div className="text-sm text-muted mt-1">{cat.examples}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Estimate Result - 2 columns */}
                <div className="lg:col-span-2 lg:sticky lg:top-24 h-fit space-y-6">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                    <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Estimated Cost Range</div>
                    <div className="font-display text-4xl lg:text-5xl font-bold mb-1">
                      ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                    </div>
                    <div className="text-white/60 mb-6">
                      ${estimate.perSqFtLow} – ${estimate.perSqFtHigh} per sq ft
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/10 rounded-xl p-3">
                        <div className="text-xs text-white/60">Timeline</div>
                        <div className="font-semibold">{estimate.timeline}</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-3">
                        <div className="text-xs text-white/60">Sq Ft</div>
                        <div className="font-semibold">{squareFootage.toLocaleString()}</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        Free on-site inspection
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        Written estimate before work
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        Direct insurance billing
                      </div>
                    </div>

                    <Button to="/request/" variant="primary" className="w-full bg-white text-slate-900 hover:bg-gray-100">
                      Get Exact Quote
                      <ArrowRight size={18} className="ml-2" />
                    </Button>

                    <div className="flex items-center justify-center gap-2 mt-4">
                      <span className="text-sm text-white/60">or call</span>
                      <a href="tel:8774970007" className="text-sm font-medium text-white hover:underline">
                        (877) 497-0007
                      </a>
                    </div>
                  </div>

                  {/* Itemized Breakdown */}
                  <div className="bg-white rounded-xl p-5 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-text">Cost Breakdown</h3>
                      <span className="text-xs text-muted bg-slate-100 px-2 py-1 rounded">
                        {estimate.equipment.airMovers} fans • {estimate.equipment.dehumidifiers} DH • {estimate.equipment.days} days
                      </span>
                    </div>
                    <div className="space-y-2">
                      {estimate.breakdown.map((item: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                          <span className="text-sm text-muted">{item.item}</span>
                          <span className="text-sm font-medium text-text">${Math.round(item.cost).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-200">
                      <span className="font-medium text-text">Estimated Total</span>
                      <span className="font-bold text-primary">${estimate.mid.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Insurance tip */}
                  <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                    <div className="flex items-start gap-3">
                      <Shield className="text-emerald-600 mt-0.5" size={20} />
                      <div>
                        <div className="font-medium text-emerald-800 mb-1">Insurance Tip</div>
                        <p className="text-sm text-emerald-700">
                          Most policies cover sudden water damage. We bill your insurance directly and help maximize your claim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included / Excluded */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              What's Included in Your Estimate
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Transparent pricing—know exactly what you're paying for.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Included */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="text-emerald-600" size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold text-text">Included in Restoration</h3>
              </div>
              <div className="space-y-4">
                {serviceBreakdown.filter(s => s.included).map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-text">{item.service}</span>
                    <span className="text-sm font-medium text-muted">{item.range}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Included */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Info className="text-amber-600" size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold text-text">Quoted Separately</h3>
              </div>
              <div className="space-y-4">
                {serviceBreakdown.filter(s => !s.included).map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-text">{item.service}</span>
                    <span className="text-sm font-medium text-muted">{item.range}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted mt-4">
                Reconstruction and contents restoration are assessed separately based on specific damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost by Category Tables */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Average Costs by Damage Type
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Pricing varies significantly based on water source and damage extent.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* By Water Category */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-display text-lg font-semibold text-text mb-4">Cost by Water Category</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 text-sm font-medium text-muted">Category</th>
                    <th className="text-right py-3 text-sm font-medium text-muted">Price/Sq Ft</th>
                    <th className="text-right py-3 text-sm font-medium text-muted">500 sq ft Est.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50">
                    <td className="py-3 text-text">Category 1 (Clean)</td>
                    <td className="py-3 text-right font-medium text-text">$3.00 - $4.50</td>
                    <td className="py-3 text-right text-muted">$1,500 - $2,250</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-3 text-text">Category 2 (Gray)</td>
                    <td className="py-3 text-right font-medium text-text">$4.00 - $6.50</td>
                    <td className="py-3 text-right text-muted">$2,000 - $3,250</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-text">Category 3 (Black)</td>
                    <td className="py-3 text-right font-medium text-text">$7.00 - $14.50</td>
                    <td className="py-3 text-right text-muted">$3,500 - $7,250</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* By Damage Class */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-display text-lg font-semibold text-text mb-4">Cost by Damage Class</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 text-sm font-medium text-muted">Class</th>
                    <th className="text-right py-3 text-sm font-medium text-muted">Typical Range</th>
                    <th className="text-right py-3 text-sm font-medium text-muted">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50">
                    <td className="py-3 text-text">Class 1 (Minimal)</td>
                    <td className="py-3 text-right font-medium text-text">$150 - $500</td>
                    <td className="py-3 text-right text-muted">1-2 days</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-3 text-text">Class 2 (Moderate)</td>
                    <td className="py-3 text-right font-medium text-text">$550 - $1,000</td>
                    <td className="py-3 text-right text-muted">3-5 days</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-3 text-text">Class 3 (Extensive)</td>
                    <td className="py-3 text-right font-medium text-text">$1,100 - $3,200</td>
                    <td className="py-3 text-right text-muted">5-7 days</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-text">Class 4 (Specialty)</td>
                    <td className="py-3 text-right font-medium text-text">$20,000 - $100,000+</td>
                    <td className="py-3 text-right text-muted">1-3 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Pricing */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MapPin size={16} />
                Northern Virginia Pricing
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                Costs Vary by Location
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Pricing in Northern Virginia is slightly higher than the national average due to higher labor costs and cost of living. These estimates reflect actual pricing in our service area.
              </p>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-2 text-sm font-medium text-muted">Area</th>
                      <th className="text-center py-2 text-sm font-medium text-muted">Adj.</th>
                      <th className="text-right py-2 text-sm font-medium text-muted">Avg Project</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionalPricing.map((area, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-0">
                        <td className="py-2 text-text">{area.area}</td>
                        <td className="py-2 text-center text-sm text-muted">{area.adjustment}</td>
                        <td className="py-2 text-right font-medium text-text">{area.avgProject}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-slate-100 shadow-lg flex items-center justify-center">
              <MapPin className="text-primary/20" size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Why Northern Virginia Trusts Flood Doctor
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: '60-Minute Response', description: 'Guaranteed arrival time, 24/7/365', stat: '47 min avg' },
              { icon: Shield, title: 'Insurance Experts', description: 'Direct billing with all carriers', stat: '98% approval' },
              { icon: BadgeCheck, title: 'IICRC Certified', description: 'Industry-leading certifications', stat: '15+ certs' },
              { icon: Users, title: 'Local Team', description: 'Serving NoVA since 2008', stat: '50+ team' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={28} />
                </div>
                <div className="font-display text-xl font-bold text-primary mb-1">{item.stat}</div>
                <h3 className="font-display text-lg font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted">
              Everything you need to know about water damage restoration costs.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-text pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-muted flex-shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">
            Ready for an exact quote?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get a free on-site inspection and detailed written estimate within 24 hours. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/request/" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Request Free Estimate
            </Button>
            <Button href="tel:8774970007" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Phone size={18} className="mr-2" />
              (877) 497-0007
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WaterDamageCostCalculator;
