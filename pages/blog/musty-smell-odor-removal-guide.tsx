import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  AlertTriangle,
  Clock,
  Wind,
  Thermometer,
  Eye,
  Shield,
  Home,
  CheckCircle2,
  XCircle,
  Activity,
  Droplets,
  MapPin,
  ArrowRight,
  Info,
  Layers,
  Zap,
  Search,
  TestTube
} from 'lucide-react';

const MustySmellOdorRemovalGuide: React.FC = () => {
  const faqs = [
    {
      question: "Why does my house smell musty after water damage?",
      answer: "Musty odors after water damage are caused by microbial volatile organic compounds (MVOCs) released by mold and mildew growth. When water saturates building materials, mold spores germinate within 24-48 hours and produce these characteristic odors. The smell indicates active microbial growth that requires professional remediation, not just surface cleaning."
    },
    {
      question: "Can I eliminate water damage odors with air fresheners or deodorizers?",
      answer: "No. Air fresheners and consumer deodorizers only mask odors temporarily without addressing the source. Professional odor elimination requires removing contaminated materials, eliminating moisture sources, and using specialized equipment like hydroxyl generators, ozone machines, or thermal fogging to neutralize odor molecules at the molecular level."
    },
    {
      question: "How long does it take to eliminate odors after water damage?",
      answer: "Timeline depends on damage severity and contamination type. Minor mold odors may clear in 24-48 hours with hydroxyl treatment. Moderate sewage odors typically require 3-5 days of combined treatments. Severe smoke or Category 3 water odors may take 7-14 days with comprehensive remediation, material removal, and advanced oxidation."
    },
    {
      question: "What's the difference between hydroxyl and ozone odor treatment?",
      answer: "Hydroxyl generators are safe for occupied spaces, work continuously, and eliminate odors through oxidation without harmful byproducts. Ozone machines are more aggressive but require complete evacuation during treatment, can damage materials, and pose health risks. Hydroxyl is preferred for most residential applications; ozone is reserved for severe cases under controlled conditions."
    },
    {
      question: "Are lingering odors after cleanup a sign of hidden water damage?",
      answer: "Yes. Persistent musty odors after visible cleanup often indicate hidden moisture or mold growth behind walls, under flooring, in HVAC systems, or within insulation. Professional moisture mapping using thermal imaging and moisture meters can locate hidden problems that standard inspections miss."
    },
    {
      question: "Does homeowners insurance cover odor removal after water damage?",
      answer: "If odor results from a covered water damage event and you mitigated promptly, most policies cover professional odor remediation as part of restoration costs. However, odors from gradual leaks, maintenance neglect, or excluded causes typically aren't covered. Documentation of the original event and professional treatment is essential."
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Musty Smell After Water Damage: Complete Odor Elimination Guide",
    "description": "Comprehensive guide to eliminating odors after water damage in Northern Virginia. Learn about odor sources, professional removal methods, hidden damage detection, and prevention strategies.",
    "author": {
      "@type": "Organization",
      "name": "Flood Doctor"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Flood Doctor",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flood.doctor/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flood Doctor",
    "image": "https://flood.doctor/logo.png",
    "telephone": "877-497-0007",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "VA",
      "addressLocality": "Northern Virginia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8816,
      "longitude": -77.1945
    },
    "url": "https://flood.doctor",
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": [
      "Fairfax County",
      "Arlington County",
      "Alexandria",
      "Loudoun County",
      "Prince William County"
    ]
  };

  const odorSources = [
    {
      type: "Mold and Mildew Odors",
      icon: Activity,
      description: "The most common water damage odor",
      smell: "Earthy, musty, stale basement smell",
      cause: "Mold and mildew release microbial volatile organic compounds (MVOCs) as they metabolize organic materials. These gases create the characteristic musty smell even when visible mold isn't present.",
      locations: [
        "Behind drywall and within wall cavities",
        "Under carpets and padding",
        "In HVAC ducts and systems",
        "Beneath flooring and subflooring",
        "Inside insulation materials"
      ],
      healthRisk: "Moderate to High",
      urgency: "High"
    },
    {
      type: "Sewage and Gray Water Odors",
      icon: Droplets,
      description: "Category 2 and 3 water contamination",
      smell: "Rotten, sulfurous, fecal odor",
      cause: "Sewage contains bacteria, organic waste, and sulfur compounds that produce extremely offensive odors. Gray water from appliances contains detergents and organic matter that decomposes quickly.",
      locations: [
        "Basement after sewage backup",
        "Bathrooms with toilet overflows",
        "Areas affected by appliance leaks",
        "Crawlspaces with plumbing failures"
      ],
      healthRisk: "Severe",
      urgency: "Critical"
    },
    {
      type: "Stagnant Water Odors",
      icon: Wind,
      description: "Water that remained too long before cleanup",
      smell: "Swampy, stale, pond-like odor",
      cause: "Standing water develops bacterial growth within 24-48 hours. Organic matter decomposes, creating sulfur compounds and other volatile gases. Virginia's warm temperatures accelerate this process.",
      locations: [
        "Basements after flooding",
        "Crawlspaces with poor drainage",
        "Areas with slow water extraction",
        "Hidden water behind walls"
      ],
      healthRisk: "Moderate",
      urgency: "High"
    },
    {
      type: "Smoke and Fire Odors",
      icon: Zap,
      description: "Often combined with water damage from firefighting",
      smell: "Burnt, acrid, chemical odor",
      cause: "Smoke particles penetrate porous materials and are then driven deeper by water used during firefighting. The combination creates persistent odors that bond to surfaces at the molecular level.",
      locations: [
        "Throughout entire structure after fires",
        "HVAC systems and ductwork",
        "Furniture and textiles",
        "Wood framing and subfloors"
      ],
      healthRisk: "High",
      urgency: "High"
    },
    {
      type: "Chemical and Petroleum Odors",
      icon: TestTube,
      description: "From contaminated floodwater or fuel spills",
      smell: "Gasoline, oil, chemical smell",
      cause: "Floodwater can carry petroleum products, industrial chemicals, or heating oil into homes. These substances off-gas volatile organic compounds and penetrate building materials.",
      locations: [
        "Basements after flooding",
        "Areas near oil tank failures",
        "Garages with petroleum storage",
        "Industrial or commercial spaces"
      ],
      healthRisk: "High",
      urgency: "Critical"
    }
  ];

  const professionalMethods = [
    {
      method: "Hydroxyl Generators",
      icon: Shield,
      description: "Safe, effective oxidation for occupied spaces",
      howItWorks: "Hydroxyl generators produce hydroxyl radicals (OH) that break down odor molecules through advanced oxidation. Unlike ozone, hydroxyls are safe for people, pets, and materials while treatment is ongoing.",
      effectiveness: "High for organic odors",
      applications: [
        "Mold and mildew odor elimination",
        "Biological contamination smells",
        "General musty odor removal",
        "Continuous treatment during restoration"
      ],
      advantages: [
        "Safe for occupied spaces",
        "No material damage",
        "Effective on wide range of odors",
        "Can run during other restoration work"
      ],
      timeline: "24-72 hours continuous operation",
      cost: "Included in restoration services"
    },
    {
      method: "Ozone Treatment",
      icon: Wind,
      description: "Aggressive oxidation for severe odors",
      howItWorks: "Ozone machines generate O3 molecules that oxidize and neutralize odor-causing compounds. Extremely effective but requires complete evacuation of people, pets, and plants during treatment.",
      effectiveness: "Very high for stubborn odors",
      applications: [
        "Severe smoke odors after fires",
        "Category 3 sewage contamination",
        "Long-term neglected odors",
        "Final treatment for persistent smells"
      ],
      advantages: [
        "Penetrates all porous materials",
        "Eliminates molecular-level odors",
        "Highly effective on smoke and sewage",
        "Reaches inaccessible areas"
      ],
      timeline: "4-48 hours, requires evacuation",
      cost: "$200-$800 per treatment"
    },
    {
      method: "Thermal Fogging",
      icon: Thermometer,
      description: "Heated deodorization for deep penetration",
      howItWorks: "Specialized equipment heats deodorant solutions into a fine fog that penetrates porous materials just like smoke and odor particles did originally. The heated particles neutralize odors where they hide.",
      effectiveness: "Excellent for smoke and fire odors",
      applications: [
        "Post-fire smoke odor removal",
        "Deep material deodorization",
        "Contents and furniture treatment",
        "Final odor sealing treatment"
      ],
      advantages: [
        "Penetrates like original contamination",
        "Effective on smoke-damaged materials",
        "Reaches hidden areas",
        "Works on contents and structure"
      ],
      timeline: "2-6 hours application + settling time",
      cost: "$300-$1,000 per treatment"
    },
    {
      method: "Air Scrubbers with HEPA/Carbon",
      icon: Layers,
      description: "Mechanical filtration and chemical absorption",
      howItWorks: "Industrial air scrubbers use HEPA filters to capture particulates and activated carbon filters to absorb odor molecules and volatile organic compounds from the air.",
      effectiveness: "Moderate, prevents spread",
      applications: [
        "During active remediation",
        "Containing odors during work",
        "Improving indoor air quality",
        "Removing airborne contaminants"
      ],
      advantages: [
        "Prevents odor migration",
        "Improves air quality during work",
        "Removes particulates and VOCs",
        "Safe for continuous operation"
      ],
      timeline: "Continuous during restoration (3-7 days)",
      cost: "Included in remediation services"
    },
    {
      method: "Antimicrobial Fogging",
      icon: Droplets,
      description: "Kills odor-causing bacteria and mold",
      howItWorks: "EPA-registered antimicrobial solutions are dispersed as fine fog, coating all surfaces and killing bacteria, mold, and fungi that produce odors. Treats both surfaces and airborne contaminants.",
      effectiveness: "High for biological odors",
      applications: [
        "Sewage contamination treatment",
        "Mold remediation support",
        "Bacterial odor elimination",
        "Final disinfection after cleanup"
      ],
      advantages: [
        "Kills odor source organisms",
        "Prevents future growth",
        "Reaches all surfaces",
        "EPA-registered for safety"
      ],
      timeline: "2-4 hours application + drying",
      cost: "$200-$600 per treatment"
    },
    {
      method: "Encapsulation and Sealing",
      icon: Shield,
      description: "Physical barrier against remaining odors",
      howItWorks: "After cleaning, specialized sealers create barriers that trap any remaining odor molecules in substrates. Prevents continued off-gassing from materials that can't be removed.",
      effectiveness: "Moderate, prevents release",
      applications: [
        "Subfloors after sewage exposure",
        "Framing after fire damage",
        "Areas where removal isn't feasible",
        "Final step in comprehensive treatment"
      ],
      advantages: [
        "Prevents continued odor release",
        "Cost-effective vs. replacement",
        "Permanent solution for sealed areas",
        "Allows salvage of structural materials"
      ],
      timeline: "1-2 days application + curing",
      cost: "$150-$500 depending on area"
    }
  ];

  const hiddenProblemSigns = [
    {
      sign: "Persistent Musty Smell After Cleanup",
      description: "Odors that return or never fully disappear despite thorough cleaning indicate hidden mold growth or trapped moisture in inaccessible areas.",
      whatItMeans: "Moisture or microbial growth behind walls, under flooring, or in HVAC systems",
      action: "Thermal imaging and moisture mapping required"
    },
    {
      sign: "Odors That Worsen in Humid Weather",
      description: "Smells that intensify during rainy days or high humidity periods suggest moisture-activated mold growth in wall cavities or structural materials.",
      whatItMeans: "Active mold growth responding to humidity changes",
      action: "Comprehensive mold inspection and humidity control"
    },
    {
      sign: "Smells Concentrated in Specific Rooms",
      description: "Localized odors that don't spread throughout the home point to specific areas with hidden damage, often near plumbing or exterior walls.",
      whatItMeans: "Hidden water damage or plumbing leak in that area",
      action: "Targeted inspection with moisture meters and cameras"
    },
    {
      sign: "Odors Coming from HVAC Vents",
      description: "Musty smells blown through heating and cooling systems indicate mold growth in ductwork, air handlers, or contaminated insulation.",
      whatItMeans: "Microbial contamination in HVAC system",
      action: "Professional HVAC inspection and cleaning required"
    },
    {
      sign: "Different Smells in Different Areas",
      description: "Multiple distinct odors (musty in basement, sewage smell near bathroom) suggest several separate water damage sources requiring investigation.",
      whatItMeans: "Multiple damage sources or contamination types",
      action: "Whole-house assessment and moisture testing"
    },
    {
      sign: "Odors That Return After Deodorizing",
      description: "Smells that disappear with air fresheners but quickly return indicate you're masking the problem rather than eliminating the source.",
      whatItMeans: "Active contamination source not addressed",
      action: "Stop masking, start professional source identification"
    }
  ];

  const airQualityTesting = [
    {
      test: "Mold Spore Air Sampling",
      icon: Wind,
      description: "Captures airborne mold spores to identify types and concentrations",
      when: "Persistent musty odors without visible mold, post-remediation verification",
      process: "Air samples collected from affected areas and outdoors for baseline comparison. Lab analysis identifies mold species and spore counts.",
      interpretation: "Indoor spore counts exceeding outdoor baseline by 10x+ indicate active growth. Presence of toxic species (Stachybotrys, Aspergillus) requires immediate action.",
      cost: "$150-$500 per location tested"
    },
    {
      test: "VOC (Volatile Organic Compound) Testing",
      icon: TestTube,
      description: "Measures chemical odor compounds in indoor air",
      when: "Chemical smells, petroleum odors, or concerns about air quality",
      process: "Air samples analyzed for specific volatile organic compounds. Identifies chemicals from building materials, mold MVOCs, or contamination.",
      interpretation: "Elevated MVOC levels confirm microbial activity. High chemical VOCs may indicate contamination or poor ventilation.",
      cost: "$200-$600 per sample"
    },
    {
      test: "Thermal Imaging Inspection",
      icon: Eye,
      description: "Non-invasive detection of hidden moisture and temperature anomalies",
      when: "Suspected hidden water damage, post-remediation verification",
      process: "Infrared cameras identify temperature differentials indicating moisture, poor insulation, or air leaks. No demolition required.",
      interpretation: "Cool spots indicate moisture retention. Warm spots may show air leaks or insulation problems affecting humidity.",
      cost: "$200-$400 for whole-home scan"
    },
    {
      test: "Moisture Content Testing",
      icon: Droplets,
      description: "Measures moisture levels in building materials",
      when: "Any odor concern, during active drying, verification after treatment",
      process: "Moisture meters measure water content in wood, drywall, concrete. Non-invasive surface scanning and invasive probe testing for accuracy.",
      interpretation: "Wood >15% moisture supports mold growth. Drywall >1% considered wet. Concrete >4% requires continued drying.",
      cost: "Included in restoration assessment"
    }
  ];

  const preventionStrategies = [
    {
      strategy: "Immediate Water Damage Response",
      icon: Clock,
      description: "The single most effective odor prevention strategy is addressing water damage within 24 hours. Professional extraction and drying prevent mold growth and the odors it produces.",
      actions: [
        "Call restoration company within 1 hour of water damage",
        "Extract standing water within 2-4 hours",
        "Begin structural drying immediately with industrial equipment",
        "Apply antimicrobial treatments during drying process"
      ],
      effectiveness: "Prevents 95%+ of odor problems"
    },
    {
      strategy: "Humidity Control",
      icon: Thermometer,
      description: "Northern Virginia's summer humidity exceeds 70%, creating ideal conditions for mold and odors. Maintaining humidity below 50% prevents microbial growth even in previously damaged areas.",
      actions: [
        "Run dehumidifiers in basements year-round",
        "Monitor humidity with hygrometers (target 30-50%)",
        "Use bathroom and kitchen exhaust fans during use",
        "Ensure HVAC systems properly dehumidify"
      ],
      effectiveness: "Reduces mold/odor risk 60-70%"
    },
    {
      strategy: "Proper Ventilation",
      icon: Wind,
      description: "Stagnant air allows moisture accumulation and odor concentration. Strategic ventilation moves moisture outside and dilutes odor compounds before they become problems.",
      actions: [
        "Open windows regularly for cross-ventilation (when outdoor humidity &lt;60%)",
        "Ensure crawlspace vents are unobstructed",
        "Add exhaust fans to high-moisture areas",
        "Use ceiling fans to prevent air stagnation"
      ],
      effectiveness: "Improves air quality and prevents odors"
    },
    {
      strategy: "Source Elimination",
      icon: Home,
      description: "Odors return if moisture sources aren't fixed. Identify and repair all water intrusion points to prevent recurring problems.",
      actions: [
        "Repair roof leaks immediately",
        "Fix plumbing leaks within 24 hours",
        "Improve foundation drainage and grading",
        "Seal basement walls and floors against moisture"
      ],
      effectiveness: "Prevents odor recurrence"
    },
    {
      strategy: "Regular HVAC Maintenance",
      icon: Layers,
      description: "HVAC systems circulate air throughout your home. Contaminated systems spread odors everywhere. Regular maintenance prevents this distribution.",
      actions: [
        "Change HVAC filters monthly during heavy use",
        "Professional duct cleaning every 3-5 years",
        "Annual HVAC inspection and servicing",
        "Address condensate drain issues immediately"
      ],
      effectiveness: "Prevents odor distribution"
    },
    {
      strategy: "Professional Post-Remediation Verification",
      icon: CheckCircle2,
      description: "After water damage restoration, professional testing confirms complete moisture removal and odor elimination before reconstruction.",
      actions: [
        "Request final moisture readings before reconstruction",
        "Consider air quality testing for major events",
        "Document all readings for insurance and records",
        "Don't rush reconstruction—verify drying first"
      ],
      effectiveness: "Ensures complete resolution"
    }
  ];

  const eliminationTimeline = [
    {
      scenario: "Minor Mold Odor (Small Area)",
      timeframe: "24-48 Hours",
      process: "Source removal, antimicrobial treatment, hydroxyl generator operation",
      factors: "Limited contamination, good ventilation, low humidity",
      result: "Complete odor elimination with source remediation"
    },
    {
      scenario: "Moderate Musty Odor (Multiple Rooms)",
      timeframe: "3-5 Days",
      process: "Material removal, structural drying, antimicrobial fogging, continuous hydroxyl treatment",
      factors: "Extent of contamination, hidden moisture, humidity control",
      result: "Significant improvement within 48 hours, complete elimination by day 5"
    },
    {
      scenario: "Sewage Contamination Odor",
      timeframe: "5-7 Days",
      process: "Complete material removal, disinfection, structural drying, ozone treatment, sealing",
      factors: "Contamination depth, porous materials affected, temperature",
      result: "Biological odor elimination requires complete source removal first"
    },
    {
      scenario: "Smoke + Water Damage Combination",
      timeframe: "7-14 Days",
      process: "Material removal, thermal fogging, hydroxyl treatment, ozone shock treatment, sealing",
      factors: "Smoke penetration depth, water intrusion extent, material types",
      result: "Multiple treatment modalities required for complete elimination"
    },
    {
      scenario: "Long-Term Neglected Odor",
      timeframe: "2-4 Weeks",
      process: "Extensive demolition, complete remediation, multiple treatment cycles, reconstruction with sealed materials",
      factors: "Depth of contamination, structural material involvement, HVAC contamination",
      result: "May require extensive material replacement and repeated treatments"
    }
  ];

  const diyLimitations = [
    {
      limitation: "Surface-Level Treatment Only",
      why: "Consumer products (baking soda, vinegar, Febreze) only address surface odors. They cannot penetrate wall cavities, subflooring, or HVAC systems where water damage odors originate.",
      risk: "Masking symptoms while mold continues growing hidden"
    },
    {
      limitation: "No Source Identification Equipment",
      why: "Without moisture meters, thermal imaging, and air quality testing equipment, you can't locate hidden water damage causing odors. Treating visible areas leaves the actual problem untouched.",
      risk: "Continued odor return and ongoing mold growth"
    },
    {
      limitation: "Inadequate Drying Capability",
      why: "Box fans and portable dehumidifiers lack the power to dry structural materials thoroughly. Industrial equipment moves 10-20x more air and removes 100+ gallons of moisture daily.",
      risk: "Incomplete drying leads to recurring odors and mold"
    },
    {
      limitation: "No Access to Professional Equipment",
      why: "Hydroxyl generators, ozone machines, thermal foggers, and HEPA air scrubbers are industrial equipment unavailable to consumers. Rental equipment lacks proper training for effective use.",
      risk: "Ineffective treatment or equipment misuse dangers"
    },
    {
      limitation: "Cannot Safely Treat Severe Odors",
      why: "Category 3 water (sewage) and smoke-damaged materials require hazmat protocols, PPE, and EPA-registered antimicrobials. DIY cleanup poses serious health risks.",
      risk: "Exposure to pathogens and toxic compounds"
    },
    {
      limitation: "No Quality Verification",
      why: "Without air quality testing equipment, you can't verify odor elimination or confirm safe moisture levels. Your nose adapts to smells, giving false confidence.",
      risk: "Incomplete treatment and ongoing health exposure"
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Musty Smell After Water Damage: Complete Odor Elimination Guide [2025]"
        description="Comprehensive guide to eliminating musty odors and smells after water damage in Northern Virginia. Professional removal methods, hidden problem detection, air quality testing, and prevention strategies."
        schema={[faqSchema, articleSchema, localBusinessSchema]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Blog', path: '/blog/' },
            { label: 'Odor Removal Guide', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Wind size={14} /> Odor Elimination
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Musty Smell After Water Damage: Complete Odor Elimination Guide
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              That persistent musty smell after water damage isn't just unpleasant—it signals active mold growth and hidden moisture problems. This comprehensive guide covers odor sources, professional elimination methods, hidden damage detection, and prevention strategies for Northern Virginia homeowners.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                24/7 Response
              </Button>
              <Button to="/request/" variant="secondary" size="lg">
                Request Service
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">

            {/* Critical Understanding Alert */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-xl shrink-0">
                  <AlertTriangle className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Odors Signal Active Problems</h3>
                  <p className="text-amber-800 text-sm mb-4 leading-relaxed">
                    Musty odors after water damage aren't just unpleasant—they indicate active mold growth, hidden moisture, or microbial contamination requiring professional remediation. Air fresheners and deodorizers only mask symptoms. True odor elimination requires identifying and treating the source with specialized equipment and techniques.
                  </p>
                </div>
              </div>
            </div>

            {/* Odor Sources Section */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4 border-b-4 border-[#1a73e8] pb-2">
                Why Water Damage Causes Persistent Odors
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Understanding odor sources helps you recognize what you're dealing with and why professional treatment is necessary.
              </p>

              <div className="space-y-6">
                {odorSources.map((source, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <source.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-text text-lg mb-1">{source.type}</h3>
                          <p className="text-sm text-muted italic mb-2">{source.description}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ml-4 ${
                        source.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
                        source.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {source.urgency}
                      </span>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-2">What It Smells Like</h4>
                      <p className="text-sm text-muted mb-3">{source.smell}</p>
                      <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-2">Why This Happens</h4>
                      <p className="text-sm text-muted">{source.cause}</p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-2">Common Locations</h4>
                      <ul className="space-y-1">
                        {source.locations.map((loc, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-blue-800">
                            <MapPin size={10} className="text-blue-600 mt-0.5 shrink-0" />
                            {loc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Methods Section */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4 border-b-4 border-[#1a73e8] pb-2">
                Professional Odor Removal Methods
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                IICRC-certified restoration companies use advanced technologies that eliminate odors at the molecular level, not just mask them.
              </p>

              <div className="space-y-8">
                {professionalMethods.map((method, i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <method.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-text text-lg">{method.method}</h3>
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold whitespace-nowrap">
                            {method.effectiveness}
                          </span>
                        </div>
                        <p className="text-sm text-muted mb-3">{method.description}</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 mb-4 border border-gray-100">
                      <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-2">How It Works</h4>
                      <p className="text-sm text-muted leading-relaxed">{method.howItWorks}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-2">Best Applications</h4>
                        <ul className="space-y-1">
                          {method.applications.map((app, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-blue-800">
                              <CheckCircle2 size={10} className="text-blue-600 mt-0.5 shrink-0" />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-green-100">
                        <h4 className="text-xs font-bold text-green-900 uppercase tracking-wide mb-2">Key Advantages</h4>
                        <ul className="space-y-1">
                          {method.advantages.slice(0, 4).map((adv, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-green-800">
                              <CheckCircle2 size={10} className="text-green-600 mt-0.5 shrink-0" />
                              {adv}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div>
                        <span className="text-xs font-bold text-text uppercase tracking-wide">Timeline: </span>
                        <span className="text-sm text-muted">{method.timeline}</span>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-text uppercase tracking-wide">Cost: </span>
                        <span className="text-sm text-muted">{method.cost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hidden Problems Section */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4 border-b-4 border-[#1a73e8] pb-2">
                When Odors Indicate Hidden Problems
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Persistent or recurring odors often signal hidden water damage, mold growth, or moisture sources that standard cleaning can't address.
              </p>

              <div className="space-y-4">
                {hiddenProblemSigns.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg shrink-0 bg-orange-100 text-orange-600">
                        <Search size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-text mb-2">{item.sign}</h3>
                        <p className="text-sm text-muted mb-3 leading-relaxed">{item.description}</p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                            <h4 className="text-xs font-bold text-orange-900 uppercase tracking-wide mb-1">What It Means</h4>
                            <p className="text-xs text-orange-800">{item.whatItMeans}</p>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">Required Action</h4>
                            <p className="text-xs text-blue-800">{item.action}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Air Quality Testing Section */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4 border-b-4 border-[#1a73e8] pb-2">
                Air Quality Testing for Odor Investigation
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Professional testing identifies odor sources, confirms contamination types, and verifies successful remediation.
              </p>

              <div className="space-y-6">
                {airQualityTesting.map((test, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <test.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-text mb-1">{test.test}</h3>
                        <p className="text-sm text-muted italic">{test.description}</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 mb-4 border border-purple-100">
                      <h4 className="text-xs font-bold text-purple-900 uppercase tracking-wide mb-2">When to Use</h4>
                      <p className="text-sm text-purple-800">{test.when}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-2">Process</h4>
                        <p className="text-xs text-muted leading-relaxed">{test.process}</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-2">Interpretation</h4>
                        <p className="text-xs text-blue-800 leading-relaxed">{test.interpretation}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <span className="text-xs font-bold text-text uppercase tracking-wide mr-2">Typical Cost: </span>
                      <span className="text-sm text-muted">{test.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Elimination Timeline Section */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4 border-b-4 border-[#1a73e8] pb-2">
                Timeline for Complete Odor Elimination
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Odor removal timelines vary based on contamination severity, source type, and treatment methods required.
              </p>

              <div className="space-y-4">
                {eliminationTimeline.map((item, i) => (
                  <div key={i} className="border-2 border-gray-200 rounded-2xl overflow-hidden">
                    <div className={`px-6 py-4 ${
                      i === 0 ? 'bg-green-100' :
                      i === 1 ? 'bg-blue-100' :
                      i === 2 ? 'bg-yellow-100' :
                      i === 3 ? 'bg-orange-100' :
                      'bg-red-100'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-lg text-gray-900">{item.scenario}</div>
                          <div className="text-sm font-medium text-gray-700">Timeline: {item.timeframe}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-2">Treatment Process</h4>
                          <p className="text-xs text-muted leading-relaxed">{item.process}</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-2">Key Factors</h4>
                          <p className="text-xs text-blue-800 leading-relaxed">{item.factors}</p>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                        <h4 className="text-xs font-bold text-green-900 uppercase tracking-wide mb-2">Expected Result</h4>
                        <p className="text-xs text-green-800 leading-relaxed">{item.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* DIY Limitations Section */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4 border-b-4 border-[#1a73e8] pb-2">
                Why DIY Odor Removal Often Fails
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Consumer products and home remedies can't match professional odor elimination for water damage scenarios.
              </p>

              <div className="space-y-4">
                {diyLimitations.map((item, i) => (
                  <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <XCircle className="text-red-600 shrink-0 mt-0.5" size={20} />
                      <div className="flex-1">
                        <h3 className="font-medium text-red-900 mb-2">{item.limitation}</h3>
                        <p className="text-sm text-red-800 mb-3 leading-relaxed">{item.why}</p>
                        <div className="bg-red-100 rounded-lg p-3 border border-red-200">
                          <p className="text-xs font-bold text-red-900 uppercase tracking-wide mb-1">Risk</p>
                          <p className="text-xs text-red-900">{item.risk}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start gap-4">
                  <Info className="text-primary shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-text mb-2">Professional Advantage</h4>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      IICRC-certified restoration companies combine multiple treatment modalities—source removal, antimicrobial treatment, advanced oxidation, structural drying, and air quality verification—to achieve complete odor elimination. This comprehensive approach addresses both symptoms and causes, preventing odor return.
                    </p>
                    <Button href="tel:8774970007" variant="primary" size="sm">
                      <Phone size={16} className="mr-2" />
                      Call for Professional Assessment
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Prevention Strategies Section */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4 border-b-4 border-[#1a73e8] pb-2">
                Preventing Odor Return After Remediation
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Once professional treatment eliminates odors, these strategies prevent their return.
              </p>

              <div className="space-y-6">
                {preventionStrategies.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                        <item.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-text">{item.strategy}</h3>
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold whitespace-nowrap">
                            {item.effectiveness}
                          </span>
                        </div>
                        <p className="text-sm text-muted mb-4">{item.description}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-2">Action Steps</h4>
                      <ul className="space-y-2">
                        {item.actions.map((action, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-muted">
                            <CheckCircle2 size={12} className="text-green-600 mt-0.5 shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Frequently Asked Questions About Odor Removal"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Primary CTA Card */}
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-google overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <h3 className="font-display text-xl font-medium mb-4 relative z-10">
                  Professional Odor Elimination
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Don't mask odors—eliminate them permanently. Our IICRC-certified team uses hydroxyl generators, ozone treatment, and thermal fogging to remove odors at the molecular level.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Shield size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Advanced Oxidation</div>
                      <div className="text-xs text-blue-200">Hydroxyl and ozone treatment</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Eye size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Source Detection</div>
                      <div className="text-xs text-blue-200">Thermal imaging and testing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Quality Verification</div>
                      <div className="text-xs text-blue-200">Air quality testing included</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warning Signs */}
              <div className="bg-orange-50 rounded-[24px] p-6 border border-orange-200">
                <h4 className="font-medium text-orange-900 mb-4">Call Immediately If:</h4>
                <ul className="space-y-2 text-sm text-orange-900">
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-orange-600 mt-0.5 shrink-0" />
                    Musty smell persists after cleanup
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-orange-600 mt-0.5 shrink-0" />
                    Odors worsen in humid weather
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-orange-600 mt-0.5 shrink-0" />
                    Smells coming from HVAC vents
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-orange-600 mt-0.5 shrink-0" />
                    Different odors in different rooms
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle size={14} className="text-orange-600 mt-0.5 shrink-0" />
                    Odors return after deodorizing
                  </li>
                </ul>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/blog/mold-after-water-damage-virginia/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Mold After Water Damage
                  </a>
                  <a href="/blog/hidden-water-damage-signs-arlington/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Hidden Water Damage Signs
                  </a>
                  <a href="/blog/emergency-water-damage-response-virginia/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Emergency Response Guide
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Eliminate Odors Permanently with Professional Treatment
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't just mask water damage odors. Our advanced hydroxyl, ozone, and thermal fogging treatments eliminate odors at the source for permanent results.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-blue-600 border-none hover:bg-blue-50">
            <Phone size={20} className="mr-2" />
            Call 24/7: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default MustySmellOdorRemovalGuide;
