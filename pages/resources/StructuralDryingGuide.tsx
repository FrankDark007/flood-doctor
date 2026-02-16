import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import { generateArticleSchema, generateBreadcrumbSchema, combineSchemas } from '../../utils/schema';
import {
  Phone,
  Thermometer,
  Wind,
  Droplets,
  Gauge,
  Activity,
  Clock,
  Target,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  TrendingDown,
  Zap,
  BarChart3,
  FileText,
  Shield,
  Settings,
  ArrowRight,
  BookOpen,
  Microscope,
  Calculator
} from 'lucide-react';

const StructuralDryingGuide: React.FC = () => {
  const faqs = [
    {
      question: "What is structural drying in water damage restoration?",
      answer: "Structural drying is the science-based process of removing moisture from building materials (drywall, wood, concrete) after water damage. It uses controlled temperature, humidity, and airflow to restore materials to pre-loss moisture content levels, preventing mold growth, warping, and structural degradation."
    },
    {
      question: "How long does structural drying take?",
      answer: "Drying time depends on water damage class, materials affected, and environmental conditions. Class 1 typically takes 2-3 days. Class 2 takes 3-5 days. Class 3 takes 5-7 days. Class 4 (hardwood, concrete) can take 1-4 weeks. Professional monitoring ensures complete drying before equipment removal."
    },
    {
      question: "Can I dry water damage myself with fans and dehumidifiers?",
      answer: "Small, surface-level water damage (< 100 sq ft, Category 1) may be DIY-possible if caught immediately. However, most water damage requires professional equipment and expertise. Hidden moisture in wall cavities, under flooring, and in insulation cannot be detected or dried without specialized tools. Incomplete drying leads to mold and structural damage."
    },
    {
      question: "What is psychrometrics in water damage restoration?",
      answer: "Psychrometrics is the science of air-water vapor mixtures. Restoration technicians use psychrometric principles to measure temperature, relative humidity, and grains per pound (GPP) to calculate vapor pressure and evaporation potential. This data guides equipment placement and confirms when materials are dry."
    },
    {
      question: "What equipment is used for structural drying?",
      answer: "Professional drying uses air movers (create airflow across wet surfaces), dehumidifiers (remove moisture from air), axial fans (circulate air in large spaces), and specialty equipment like wall cavity drying systems, floor mat systems, and desiccant dehumidifiers. Moisture meters and thermal imaging detect hidden moisture."
    },
    {
      question: "How do you know when structural drying is complete?",
      answer: "Drying is complete when moisture meter readings match dry standard readings for each material type (established before water damage or from unaffected reference areas). Psychrometric readings should show stable, normal conditions. IICRC S500 requires three consecutive days of readings at or below dry standard before equipment removal."
    },
    {
      question: "Does structural drying prevent mold growth?",
      answer: "Yes, when done within 24-48 hours of water intrusion. Mold spores are everywhere but need moisture to grow. Rapid drying (< 48 hours) prevents germination. Professional drying also reduces humidity below 60% RH, the threshold for mold growth. Delayed or incomplete drying leads to mold colonization."
    },
    {
      question: "How much does professional structural drying cost?",
      answer: "Costs vary by class, affected area, and duration. Typical range: $1,500-$4,000 for Class 1-2 (small to medium), $4,000-$8,000 for Class 3 (large/saturated), and $8,000-$15,000+ for Class 4 (specialty drying). Most homeowners insurance covers professional drying as part of emergency mitigation."
    }
  ];

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

  const articleSchema = generateArticleSchema({
    headline: 'Structural Drying: How It Works',
    description: 'Complete guide to structural drying science. Learn psychrometrics, equipment, drying phases, and IICRC S500 standards. Understand how professionals restore water-damaged buildings.',
    slug: '/resources/structural-drying-guide/',
    datePublished: '2025-01-01',
    articleSection: 'Resources'
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: 'Resources', path: '/resources/' },
    { label: 'Structural Drying Guide', path: '/resources/structural-drying-guide/' }
  ]);

  const pageSchema = combineSchemas(breadcrumbSchema, articleSchema, faqSchema);

  const dryingPrinciples = [
    {
      icon: Thermometer,
      title: "Temperature Control",
      description: "Warmer air holds more moisture. Optimal drying occurs at 70-90°F. Raising temperature increases evaporation rate.",
      science: "For every 18°F increase, air can hold approximately twice as much moisture."
    },
    {
      icon: Droplets,
      title: "Humidity Reduction",
      description: "Lower relative humidity increases vapor pressure difference, accelerating evaporation from wet materials.",
      science: "Target &lt;50% RH during drying. Dehumidifiers remove moisture from air, maintaining low humidity."
    },
    {
      icon: Wind,
      title: "Airflow Maximization",
      description: "Air movement replaces saturated air at wet surfaces with drier air, sustaining evaporation.",
      science: "Strategic air mover placement creates laminar airflow across all wet surfaces."
    },
    {
      icon: Gauge,
      title: "Vapor Pressure Differential",
      description: "Moisture moves from high vapor pressure (wet materials) to low vapor pressure (dry air). Increasing this differential accelerates drying.",
      science: "Psychrometric calculations measure GPP and vapor pressure to optimize conditions."
    }
  ];

  const dryingPhases = [
    {
      number: "01",
      phase: "Assessment & Classification",
      icon: FileText,
      timeline: "Day 0 (0-4 hours)",
      activities: [
        "Identify water source and category (1, 2, or 3)",
        "Classify damage class (1, 2, 3, or 4)",
        "Map affected areas with moisture meters",
        "Establish dry standard readings from unaffected areas",
        "Document with photos, videos, and moisture maps",
        "Calculate psychrometric baseline (temp, RH, GPP)"
      ],
      goal: "Understand scope, create drying plan, document pre-loss conditions"
    },
    {
      number: "02",
      phase: "Water Extraction",
      icon: TrendingDown,
      timeline: "Day 0-1 (0-24 hours)",
      activities: [
        "Extract standing water with truck-mount or portable extractors",
        "Remove saturated porous materials (carpet pad, insulation)",
        "Extract water from carpets using weighted extraction",
        "Perform flood cuts on drywall if necessary (Category 2-3)",
        "Remove unsalvageable contents and debris",
        "Begin initial air movement to prevent category degradation"
      ],
      goal: "Remove bulk water quickly to minimize absorption and secondary damage"
    },
    {
      number: "03",
      phase: "Equipment Setup & Optimization",
      icon: Settings,
      timeline: "Day 1 (4-24 hours)",
      activities: [
        "Position air movers for maximum airflow coverage",
        "Deploy dehumidifiers based on affected area and class",
        "Install specialty equipment (wall cavity systems, floor mats)",
        "Create containment if needed to optimize drying conditions",
        "Take initial post-extraction moisture readings",
        "Record psychrometric data (temp, RH, GPP, dew point)"
      ],
      goal: "Create optimal drying environment with controlled temperature, humidity, airflow"
    },
    {
      number: "04",
      phase: "Active Drying & Monitoring",
      icon: Activity,
      timeline: "Days 2-7+ (ongoing)",
      activities: [
        "Daily moisture meter readings on all affected materials",
        "Daily psychrometric monitoring and logging",
        "Adjust equipment placement based on drying progress",
        "Add/remove equipment as moisture levels change",
        "Monitor for signs of secondary damage or mold",
        "Communicate progress to homeowner and insurance adjuster"
      ],
      goal: "Systematically reduce moisture content to dry standard levels"
    },
    {
      number: "05",
      phase: "Verification & Completion",
      icon: CheckCircle2,
      timeline: "Final 3 days",
      activities: [
        "Verify three consecutive days at or below dry standard",
        "Confirm psychrometric readings show stable, normal conditions",
        "Thermal imaging to verify no hidden moisture pockets",
        "Document final moisture readings with photos",
        "Remove equipment systematically",
        "Provide completion report with all documentation"
      ],
      goal: "Confirm complete drying and provide verification for insurance/reconstruction"
    }
  ];

  const equipmentGuide = [
    {
      name: "Air Movers (Axial Fans)",
      icon: Wind,
      purpose: "Create high-velocity airflow across wet surfaces to accelerate evaporation",
      specs: "2,500-3,500 CFM output; stackable; low-profile for under-furniture drying",
      usage: "Position 6-12 inches from wet surfaces at 45° angle; 1-2 per room (Class 1), 2-4 per room (Class 2), 4-6+ per room (Class 3)"
    },
    {
      name: "Refrigerant Dehumidifiers",
      icon: Droplets,
      purpose: "Remove moisture from air via condensation on cold coils; works best in warm temps (70°F+)",
      specs: "Standard or LGR (Low Grain Refrigerant) types; 100-200+ pints/day capacity",
      usage: "1 unit per 500-1000 sq ft (Class 1-2); 1 per 200-300 sq ft (Class 3+); LGR for faster drying"
    },
    {
      name: "Desiccant Dehumidifiers",
      icon: Target,
      purpose: "Remove moisture via chemical absorption; works in cold temps and low humidity situations",
      specs: "No compressor; effective at temps below 65°F; higher energy use",
      usage: "Class 4 situations, unheated spaces, deep-drying hardwood and concrete"
    },
    {
      name: "Moisture Meters",
      icon: Gauge,
      purpose: "Measure moisture content in materials (pin-type) or detect subsurface moisture (pinless)",
      specs: "Pin meters: invasive, precise. Pinless: non-invasive, broad area detection",
      usage: "Daily readings on all affected materials; compare to dry standard; track progress"
    },
    {
      name: "Thermal Imaging Cameras",
      icon: Thermometer,
      purpose: "Detect hidden moisture behind walls, under floors, in ceilings via temperature differential",
      specs: "IR cameras visualize temperature differences indicating wet vs. dry materials",
      usage: "Initial assessment, hidden moisture detection, verification of drying completion"
    },
    {
      name: "Psychrometers / Thermo-Hygrometers",
      icon: Calculator,
      purpose: "Measure temperature and relative humidity for psychrometric calculations",
      specs: "Digital devices; calculate GPP, dew point, vapor pressure from temp and RH readings",
      usage: "Daily ambient and material surface measurements; log data for drying documentation"
    }
  ];

  const psychrometricConcepts = [
    {
      term: "Relative Humidity (RH)",
      definition: "The amount of moisture in air relative to the maximum it can hold at a given temperature. Expressed as percentage.",
      importance: "Target &lt;50% RH during drying. Lower RH increases evaporation potential."
    },
    {
      term: "Grains Per Pound (GPP)",
      definition: "Absolute measure of moisture content in air. 7,000 grains = 1 pound of water.",
      importance: "GPP doesn't change with temperature, making it a better measure than RH for drying progress."
    },
    {
      term: "Specific Humidity",
      definition: "The ratio of water vapor mass to total air mass. Similar to GPP but expressed differently.",
      importance: "Helps calculate moisture load removed by dehumidifiers."
    },
    {
      term: "Dew Point",
      definition: "The temperature at which air becomes saturated and water vapor condenses into liquid.",
      importance: "Indicates moisture content independent of temperature. Lower dew point = drier air."
    },
    {
      term: "Vapor Pressure",
      definition: "The pressure exerted by water vapor in air. Moisture moves from high to low vapor pressure.",
      importance: "Vapor pressure differential drives evaporation from wet materials to air."
    },
    {
      term: "Psychrometric Chart",
      definition: "Graph showing relationships between temperature, RH, GPP, dew point, and vapor pressure.",
      importance: "Professional tool for calculating optimal drying conditions and tracking progress."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Structural Drying: How It Works"
        description="Complete guide to structural drying science. Learn psychrometrics, equipment, drying phases, and IICRC S500 standards. Understand how professionals restore water-damaged buildings."
        schema={pageSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Structural Drying Guide', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Microscope size={14} /> Technical Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              The Science of Structural Drying: How Professional Restoration Works
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Structural drying isn't just running fans and dehumidifiers. It's a precise science based on psychrometrics, material properties, and IICRC standards. This comprehensive guide explains how professionals restore water-damaged buildings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Call (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg">
                Professional Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">

        {/* Introduction */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl font-medium text-text mb-6">
              What is Structural Drying?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Structural drying is the controlled process of removing moisture from building materials after water damage. Unlike simply drying visible water, structural drying addresses moisture absorbed into porous materials like drywall, wood framing, insulation, concrete, and subflooring.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The goal is to restore materials to their pre-loss moisture content before mold growth begins (24-48 hours) and before structural damage occurs (warping, swelling, delamination). This requires understanding psychrometrics, material science, and proper equipment application.
            </p>
            <p className="text-muted leading-relaxed">
              Professional restoration follows the Institute of Inspection, Cleaning and Restoration Certification (IICRC) S500 Standard, which establishes protocols for water damage assessment, classification, drying procedures, and verification.
            </p>
          </div>
        </section>

        {/* Four Principles of Drying */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              The Four Principles of Structural Drying
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              All structural drying is based on manipulating four environmental factors to maximize evaporation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dryingPrinciples.map((principle, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center shrink-0">
                    <principle.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-text mb-2">{principle.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{principle.description}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-blue-100 mt-4">
                  <div className="flex items-start gap-2">
                    <Microscope size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-700"><strong>Science:</strong> {principle.science}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Drying Phases */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              The Five Phases of Professional Structural Drying
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From initial assessment to final verification, each phase is critical for complete restoration.
            </p>
          </div>

          <div className="space-y-8">
            {dryingPhases.map((phase, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                    <span className="text-xl font-bold">{phase.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="font-display text-2xl font-medium text-text flex items-center gap-3">
                        <phase.icon size={24} className="text-primary" />
                        {phase.phase}
                      </h3>
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-medium">
                        <Clock size={12} />
                        {phase.timeline}
                      </span>
                    </div>
                    <p className="text-muted mb-4">{phase.goal}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-4">Key Activities</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {phase.activities.map((activity, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Equipment Guide */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-4 text-center">
            Professional Drying Equipment
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto text-center mb-12">
            Understanding the tools professionals use and why they're essential for proper drying.
          </p>

          <div className="space-y-4">
            {equipmentGuide.map((equipment, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <equipment.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-text text-lg mb-2">{equipment.name}</h3>
                    <p className="text-sm text-muted mb-3">{equipment.purpose}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Technical Specs</div>
                        <div className="text-xs text-gray-700">{equipment.specs}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Typical Usage</div>
                        <div className="text-xs text-gray-700">{equipment.usage}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Psychrometric Concepts */}
        <section className="mb-24">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-5xl">
              <h2 className="font-display text-3xl font-medium mb-4 flex items-center gap-3">
                <BarChart3 size={32} />
                Understanding Psychrometrics
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Psychrometrics is the science that separates professional restoration from DIY attempts. Here are the key concepts technicians use to optimize drying:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {psychrometricConcepts.map((concept, i) => (
                  <div key={i} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="font-bold mb-2 text-blue-200">{concept.term}</h3>
                    <p className="text-sm text-gray-300 mb-3">{concept.definition}</p>
                    <div className="flex items-start gap-2 text-xs text-blue-100">
                      <Zap size={14} className="mt-0.5 shrink-0" />
                      <span><strong>Why it matters:</strong> {concept.importance}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-500/20 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-bold mb-3 text-blue-100 flex items-center gap-2">
                  <Calculator size={20} />
                  Real-World Example
                </h4>
                <p className="text-sm text-gray-200 leading-relaxed">
                  A room at 75°F and 60% RH contains approximately 65 GPP of moisture. The same room at 75°F and 40% RH contains approximately 43 GPP. The difference (22 GPP) represents moisture removed by dehumidifiers during drying. Professional technicians track GPP daily to measure progress and ensure complete drying.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why DIY Fails */}
        <section className="mb-24">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                <AlertTriangle size={32} className="text-amber-600" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-amber-900 mb-4">
                  Why DIY Drying Fails
                </h2>
                <p className="text-amber-800 leading-relaxed mb-6">
                  Homeowners often attempt DIY drying with box fans and consumer dehumidifiers. Here's why this rarely works for anything beyond small, surface-level spills:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "No moisture detection behind walls, under floors, in cavities",
                    "Insufficient equipment (commercial gear is 10-20x more powerful)",
                    "No psychrometric monitoring or optimization",
                    "Unknown dry standard—when to stop?",
                    "No thermal imaging to detect hidden moisture",
                    "Incomplete drying leads to mold growth within 48 hours",
                    "Insurance may deny claims for improper mitigation",
                    "Structural damage from prolonged moisture exposure"
                  ].map((reason, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-amber-900">
                      <XCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white rounded-xl border border-amber-200">
                  <p className="text-sm text-amber-900">
                    <strong>Bottom line:</strong> Professional drying costs $1,500-$8,000 on average and is typically covered by insurance. Failed DIY attempts lead to mold remediation ($5,000-$30,000) and structural repairs ($10,000+), often not covered due to improper mitigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drying Standards */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
            <h2 className="font-display text-2xl font-medium text-text mb-4 flex items-center gap-3">
              <Shield size={28} className="text-primary" />
              IICRC S500 Drying Standards
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              The IICRC S500 Standard for Professional Water Damage Restoration establishes industry protocols for structural drying:
            </p>

            <div className="space-y-3">
              {[
                "Moisture content must return to pre-loss levels (dry standard)",
                "Minimum three consecutive days at dry standard before equipment removal",
                "Daily psychrometric monitoring and documentation required",
                "Moisture mapping with photos and readings at each visit",
                "Equipment placement based on class, category, and psychrometric conditions",
                "Antimicrobial treatment for Category 2-3 water",
                "Final verification with moisture meters and thermal imaging"
              ].map((standard, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <ArrowRight size={16} className="text-primary mt-0.5 shrink-0" />
                  {standard}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-100/50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>IICRC Certification:</strong> Look for IICRC-certified technicians (WRT - Water Damage Restoration Technician or AMRT - Applied Microbial Remediation Technician). Certification ensures proper training in psychrometrics, equipment use, and S500 standards.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <GoogleStyleFAQ
            data={faqs}
            title="Structural Drying FAQ"
            className="border-none p-0"
          />
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Science-Based Drying by IICRC-Certified Technicians
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our team uses psychrometric science, commercial-grade equipment, and IICRC S500 protocols to ensure complete structural drying. Call 24/7 for rapid response.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-primary border-none hover:bg-blue-50">
            <Phone size={20} className="mr-2" />
            Call (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default StructuralDryingGuide;
