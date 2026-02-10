import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import ArticleAuthor, { generateAuthorSchema } from '../../components/ui/ArticleAuthor';
import MidArticleCTA from '../../components/ui/MidArticleCTA';
import RelatedArticles from '../../components/ui/RelatedArticles';
import {
  Phone,
  AlertTriangle,
  Clock,
  Droplets,
  Home,
  CheckCircle2,
  Wind,
  Wrench,
  Shield,
  Camera,
  DollarSign,
  TrendingUp,
  FileText,
  ArrowRight,
  Zap
} from 'lucide-react';

const BathroomWaterDamageGuide: React.FC = () => {
  const faqs = [
    {
      question: "What are the most common sources of bathroom water damage?",
      answer: "The three most common sources are toilet overflows (including supply line failures), shower pan and grout leaks behind tiles, and sink/vanity plumbing failures. Supply line bursts are particularly dangerous because they release gallons per minute until shut off. Hidden leaks behind tile and under floors often go undetected for months, causing extensive subfloor and structural damage."
    },
    {
      question: "How can I tell if there's hidden water damage behind my bathroom tiles?",
      answer: "Warning signs include soft or spongy flooring, discolored grout, loose tiles, musty odors, visible mold on grout lines, water stains on ceilings below the bathroom, and cracking or peeling paint on adjacent walls. If your bathroom is on an upper floor, check the ceiling below for brown stains or sagging. Professional moisture meters can detect hidden water that visual inspections miss."
    },
    {
      question: "Should I call a plumber or a water damage restoration company first?",
      answer: "Call both simultaneously if possible. A plumber fixes the source (burst pipe, leaking toilet, failed shower pan), while a restoration company handles water extraction, structural drying, and mold prevention. If you must prioritize, call the restoration company first for active flooding, and a plumber first for leaks that have been stopped. Flood Doctor coordinates with plumbers to ensure comprehensive service."
    },
    {
      question: "How much does bathroom water damage restoration cost in Northern Virginia?",
      answer: "Minor bathroom leaks (small overflow, caught quickly) cost $800-$2,500 for extraction and drying. Moderate damage requiring tile removal, subfloor repair, and vanity replacement ranges $3,500-$8,000. Severe damage involving structural repairs, extensive mold remediation, and full bathroom reconstruction can exceed $15,000-$30,000. Insurance typically covers sudden failures but not gradual leaks from poor maintenance."
    },
    {
      question: "Does homeowners insurance cover bathroom water damage?",
      answer: "Yes, if the damage is sudden and accidental—such as a burst supply line, toilet overflow from malfunction, or sudden pipe failure. Insurance typically excludes gradual leaks from worn caulk, poor maintenance, or slow drips that went unaddressed. Document everything immediately, notify your insurer within 24-48 hours, and begin mitigation to prevent claim denial for failure to minimize damage."
    },
    {
      question: "How long does it take for mold to grow after bathroom water damage?",
      answer: "Mold can begin growing within 24-48 hours in Northern Virginia's humid climate. Bathrooms are particularly vulnerable due to existing moisture and poor ventilation. Professional structural drying within the first 24 hours prevents mold growth. Once mold establishes, remediation costs increase significantly and insurance may deny coverage if delayed response is deemed negligent."
    },
    {
      question: "Can I keep using my bathroom during restoration?",
      answer: "Typically no, especially if significant water damage occurred. Using a bathroom during active drying interferes with dehumidifiers and air movers, extends drying time, and introduces new moisture. If the toilet or plumbing caused the damage, it must be repaired before use. Minor leaks may allow limited use, but professional guidance is essential. Most restoration timelines are 3-7 days for drying, then 1-3 weeks for repairs."
    },
    {
      question: "What's the difference between a shower pan leak and tile grout leak?",
      answer: "A shower pan leak occurs when the waterproof membrane under the tile fails, allowing water to seep through to the subfloor and walls. This requires removing tile and replacing the pan—a major repair. Grout leaks occur when grout deteriorates, allowing water to penetrate behind tiles. While less severe initially, untreated grout leaks eventually cause pan failures. Both require professional assessment with moisture meters to determine extent."
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flood Doctor",
    "description": "24/7 bathroom water damage restoration serving Northern Virginia",
    "telephone": "877-497-0007",
    "priceRange": "$$",
    "areaServed": [
      "Arlington, VA",
      "Alexandria, VA",
      "Fairfax, VA",
      "Loudoun County, VA",
      "Prince William County, VA",
      "Washington, DC"
    ],
    "availableLanguage": ["English", "Spanish"]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bathroom Water Damage: Leaks, Overflow & Restoration Guide",
    "description": "Comprehensive guide to bathroom water damage in Northern Virginia homes. Covers toilet overflows, shower leaks, supply line failures, hidden damage, emergency response, and professional restoration.",
    "author": {
      "@type": "Organization",
      "@name": "Flood Doctor"
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

  const emergencySteps = [
    {
      number: "01",
      title: "Shut Off Water Supply",
      icon: Droplets,
      content: "For toilet overflows, turn the valve at the base of the toilet clockwise. For burst supply lines, shut off the angle stop valve behind the toilet or under the sink. If flooding continues or you can't locate the valve, shut off the main water supply to your home immediately.",
      timeframe: "0-2 minutes"
    },
    {
      number: "02",
      title: "Stop the Source",
      icon: AlertTriangle,
      content: "If the toilet is overflowing due to a clog, do NOT flush again. Remove the tank lid and lift the float to stop water flow. For shower leaks, stop using the shower immediately. For supply line failures, confirm water is shut off and cannot resume flowing.",
      timeframe: "2-3 minutes"
    },
    {
      number: "03",
      title: "Turn Off Electricity",
      icon: Zap,
      content: "If water has reached electrical outlets, light fixtures, or is spreading beyond the bathroom, turn off power to the bathroom at the circuit breaker. Never use electrical devices in standing water. If the main panel is in standing water, evacuate and call 911.",
      timeframe: "3-5 minutes"
    },
    {
      number: "04",
      title: "Document Damage",
      icon: Camera,
      content: "Photograph and video all damage before cleanup. Capture the water source, standing water depth, affected areas, damaged flooring and walls, and any visible structural damage. Take 50-100 photos from multiple angles—insurance claims require extensive documentation.",
      timeframe: "5-15 minutes"
    },
    {
      number: "05",
      title: "Remove Standing Water",
      icon: Wind,
      content: "Use towels, mops, or a wet/dry vacuum to remove standing water quickly. The faster you extract water, the less damage to subfloors and walls. Do not use household vacuums—electrical shock hazard. If water has spread to other rooms or floors, call professionals immediately.",
      timeframe: "15-60 minutes"
    },
    {
      number: "06",
      title: "Call Professionals",
      icon: Phone,
      content: "Contact a water damage restoration company within the first hour. Bathroom water damage often involves hidden moisture behind tiles, under flooring, and inside walls. Professional equipment detects and dries all moisture, preventing mold and structural damage.",
      timeframe: "Within 1 hour"
    }
  ];

  const damageSourcesData = [
    {
      source: "Toilet Overflows & Supply Line Failures",
      severity: "HIGH",
      color: "red",
      icon: AlertTriangle,
      description: "Toilets cause bathroom flooding in two ways: clogs that cause overflows (typically sewage-contaminated water) and supply line failures that release clean water under pressure. Supply lines can burst due to age, freezing, or defects.",
      hiddenRisks: [
        "Sewage contamination requires specialized cleaning",
        "Water seeps under tile and penetrates subfloor rapidly",
        "Supply line bursts release 2-3 gallons per minute until shut off",
        "Wax ring failures allow sewage under flooring"
      ],
      prevention: [
        "Replace rubber supply lines with braided steel every 5 years",
        "Never flush inappropriate items (wipes, hygiene products)",
        "Annual toilet inspection for leaks and worn seals",
        "Install water leak detectors behind toilets"
      ]
    },
    {
      source: "Shower Pan & Tile Leaks",
      severity: "MODERATE-HIGH",
      color: "orange",
      icon: Droplets,
      description: "Shower pans are waterproof membranes under tile. When they fail—due to poor installation, cracks, or age—water penetrates the subfloor and walls. Grout deterioration allows water behind tiles, eventually causing pan failure.",
      hiddenRisks: [
        "Leak may go undetected for months or years",
        "Subfloor rot weakens floor structure",
        "Water travels down walls to lower levels",
        "Mold grows behind tiles in hidden cavities"
      ],
      prevention: [
        "Re-seal grout lines annually with quality sealant",
        "Replace deteriorating caulk around tub/shower edges",
        "Professional shower pan inspection every 3-5 years",
        "Address soft flooring or loose tiles immediately"
      ]
    },
    {
      source: "Sink & Vanity Plumbing Failures",
      severity: "MODERATE",
      color: "yellow",
      icon: Wrench,
      description: "Under-sink plumbing includes supply lines, P-traps, and drain connections. Failures occur from loose connections, corroded pipes, worn supply lines, or cracked P-traps. Water accumulates inside vanity cabinets, damaging cabinets and flooring.",
      hiddenRisks: [
        "Leaks occur inside closed cabinets, undetected for weeks",
        "Water damages vanity MDF/particleboard, requiring replacement",
        "Mold grows on damp cabinet interiors",
        "Water seeps through cabinet bottom to subfloor"
      ],
      prevention: [
        "Inspect under-sink plumbing quarterly for leaks or corrosion",
        "Replace supply lines every 5-7 years",
        "Tighten connections annually",
        "Install leak detector pans under sinks"
      ]
    },
    {
      source: "Bathtub Overflow & Drain Leaks",
      severity: "MODERATE",
      color: "blue",
      icon: Home,
      description: "Bathtub overflows from forgotten running water or clogged drains release large volumes. Drain assembly failures allow water to seep around the drain, penetrating the floor below. Overflow drain failures cause similar damage.",
      hiddenRisks: [
        "Water flows over tub edge onto floor for extended periods",
        "Penetrates flooring and ceilings below",
        "Drain seal failures go unnoticed until ceiling damage appears",
        "Continuous small leaks cause extensive hidden damage"
      ],
      prevention: [
        "Never leave running bathtubs unattended",
        "Test overflow drain annually by filling to overflow",
        "Re-caulk around tub edges when caulk cracks or separates",
        "Monitor ceilings below bathrooms for water stains"
      ]
    }
  ];

  const hiddenDamageSigns = [
    {
      sign: "Soft or Spongy Flooring",
      description: "Flooring that feels soft, spongy, or bounces when stepped on indicates water-damaged subfloor. This is especially common around toilets and tubs.",
      action: "Requires professional moisture testing and likely subfloor replacement."
    },
    {
      sign: "Discolored or Cracking Grout",
      description: "Grout that changes color (yellowing, darkening), cracks, or crumbles indicates water penetration. This allows water behind tiles to damage substrates.",
      action: "Professional assessment with moisture meter to determine extent. May require tile removal."
    },
    {
      sign: "Loose or Hollow-Sounding Tiles",
      description: "Tiles that move when stepped on or sound hollow when tapped indicate the tile has separated from the substrate due to water damage underneath.",
      action: "Immediate professional evaluation. Indicates significant hidden water damage."
    },
    {
      sign: "Musty Odor in Bathroom",
      description: "Persistent musty or moldy smell despite cleaning indicates hidden mold growth behind tiles, in walls, or under flooring.",
      action: "Mold remediation required. Source must be identified and repaired."
    },
    {
      sign: "Water Stains on Ceiling Below",
      description: "Brown, yellow, or discolored stains on the ceiling directly below a bathroom indicate active or past leaks penetrating the floor.",
      action: "Emergency professional response required. Active leak must be stopped immediately."
    },
    {
      sign: "Peeling Paint or Wallpaper",
      description: "Paint or wallpaper peeling on walls adjacent to bathrooms indicates moisture penetration through walls from shower/tub areas.",
      action: "Professional moisture testing and source identification required."
    },
    {
      sign: "Visible Mold on Grout or Caulk",
      description: "Black, green, or pink mold on grout lines or caulk edges indicates excessive moisture and potential hidden mold behind tiles.",
      action: "Clean surface mold, but investigate for hidden moisture and mold behind tiles."
    },
    {
      sign: "Warped or Damaged Baseboards",
      description: "Baseboards that warp, swell, or separate from walls indicate water damage at floor level, often from shower pan or flooring leaks.",
      action: "Professional moisture assessment and baseboard replacement after drying."
    }
  ];

  const professionalProcess = [
    {
      phase: "Emergency Response",
      timeframe: "0-2 hours",
      description: "Our certified technicians arrive within 60-90 minutes. We assess the damage, identify the source, extract standing water with industrial extractors, and begin emergency mitigation to prevent further damage.",
      equipment: ["Truck-mounted extractors", "Portable extraction units", "Moisture meters", "Thermal imaging cameras"]
    },
    {
      phase: "Moisture Detection & Documentation",
      timeframe: "2-4 hours",
      description: "Using moisture meters and thermal imaging, we detect all hidden water behind tiles, in walls, under flooring, and in ceilings below. We document everything with photos and detailed reports for insurance claims.",
      equipment: ["Penetrating moisture meters", "Non-invasive thermal cameras", "Hygrometers", "Photo documentation tools"]
    },
    {
      phase: "Structural Drying",
      timeframe: "3-7 days",
      description: "Industrial dehumidifiers and air movers run 24/7 to dry all structures to safe moisture levels. We monitor daily and adjust equipment placement as drying progresses. Bathroom use is typically restricted during this phase.",
      equipment: ["LGR dehumidifiers", "Axial air movers", "HEPA air scrubbers", "Daily moisture monitoring"]
    },
    {
      phase: "Mold Prevention & Treatment",
      timeframe: "Ongoing",
      description: "Quick drying prevents mold growth. If mold is present, we perform remediation using antimicrobial treatments, HEPA filtration, and containment to prevent cross-contamination. All work follows IICRC S520 mold remediation standards.",
      equipment: ["Antimicrobial treatments", "HEPA air scrubbers", "Containment barriers", "Personal protective equipment"]
    },
    {
      phase: "Reconstruction & Restoration",
      timeframe: "1-3 weeks",
      description: "Once structures are dry, we remove damaged materials (tile, subfloor, drywall, vanities) and reconstruct to pre-loss condition or better. This includes new tile, flooring, plumbing repairs, painting, and finishing work.",
      equipment: ["Tile installation tools", "Flooring systems", "Plumbing coordination", "Paint and finishing materials"]
    },
    {
      phase: "Insurance Coordination",
      timeframe: "Throughout",
      description: "We work directly with your insurance adjuster, provide detailed Xactimate estimates, handle all billing, and ensure maximum claim approval. You pay only your deductible for covered losses.",
      equipment: ["Xactimate estimating", "Insurance documentation", "Direct billing systems", "Claims advocacy"]
    }
  ];

  const subfloorConcerns = [
    {
      concern: "Subfloor Material Vulnerability",
      explanation: "Most bathroom subfloors are plywood or OSB (oriented strand board). Both materials rapidly absorb water, swell, delaminate, and lose structural integrity. OSB is particularly vulnerable—it can swell 20-30% when saturated.",
      solution: "Moisture testing determines if drying is possible or if replacement is required. Subfloors at >20% moisture content typically require replacement to prevent mold and structural failure."
    },
    {
      concern: "Mold Growth in Subfloor Cavities",
      explanation: "Water trapped between the subfloor and flooring, or between subfloor and ceiling below, creates ideal mold conditions. Standard drying equipment can't reach these cavities without removing flooring materials.",
      solution: "Professional assessment determines if tile, vinyl, or other flooring must be removed to allow subfloor drying and prevent mold growth."
    },
    {
      concern: "Floor Joist Damage",
      explanation: "Severe bathroom leaks can damage floor joists—the structural beams supporting the floor. Water-damaged joists lose load-bearing capacity and can lead to floor collapse if not addressed.",
      solution: "Structural inspection with moisture meters and visual assessment. Damaged joists require sister joisting or replacement by licensed contractors."
    },
    {
      concern: "Ceiling Damage Below Bathroom",
      explanation: "Bathroom water often penetrates the ceiling of the room below, causing staining, sagging, or collapse. Drywall, insulation, and paint require replacement once saturated.",
      solution: "Ceiling inspection and moisture testing below all water-damaged bathrooms. Drywall replacement, insulation replacement, and repainting after complete drying."
    }
  ];

  const costEstimates = [
    {
      category: "Minor Bathroom Water Damage",
      scope: "Small overflow, caught within 1 hour, limited to bathroom floor",
      costRange: "$800 - $2,500",
      includes: [
        "Emergency water extraction",
        "Structural drying (3-5 days)",
        "Moisture monitoring",
        "Minor cleaning and sanitizing"
      ],
      insuranceCoverage: "Typically fully covered minus deductible"
    },
    {
      category: "Moderate Bathroom Water Damage",
      scope: "Toilet supply line failure, water spread beyond bathroom, some tile/flooring damage",
      costRange: "$3,500 - $8,000",
      includes: [
        "Emergency extraction and containment",
        "Structural drying (5-7 days)",
        "Tile removal if needed",
        "Subfloor repair or replacement",
        "Vanity or toilet replacement",
        "Painting and finishing"
      ],
      insuranceCoverage: "Usually covered for sudden failures minus deductible"
    },
    {
      category: "Severe Bathroom Water Damage",
      scope: "Shower pan failure with months of hidden damage, or major overflow affecting multiple rooms/floors",
      costRange: "$15,000 - $30,000+",
      includes: [
        "Complete water extraction and drying",
        "Extensive tile and shower pan removal",
        "Subfloor and floor joist replacement",
        "Ceiling repairs in rooms below",
        "Mold remediation",
        "Complete bathroom reconstruction",
        "Plumbing repairs"
      ],
      insuranceCoverage: "Sudden failures typically covered; gradual leaks often denied"
    }
  ];

  const preventionChecklist = [
    {
      frequency: "Weekly",
      tasks: [
        "Check for new water stains on ceilings below bathrooms",
        "Inspect under sinks for moisture or leaks",
        "Look for soft spots on bathroom floors"
      ]
    },
    {
      frequency: "Monthly",
      tasks: [
        "Test toilet for hidden leaks (add food coloring to tank, wait 30 min, check bowl)",
        "Inspect caulk around tubs and showers for cracks or separation",
        "Check grout for deterioration or discoloration",
        "Verify bathroom ventilation fan works properly"
      ]
    },
    {
      frequency: "Every 6 Months",
      tasks: [
        "Inspect toilet supply lines for bulging, cracks, or corrosion",
        "Check for loose tiles or hollow sounds when tapped",
        "Clean and inspect sink P-traps and drain assemblies",
        "Test water pressure (high pressure stresses pipes)"
      ]
    },
    {
      frequency: "Annually",
      tasks: [
        "Professional plumbing inspection of all bathroom fixtures",
        "Re-seal grout lines with quality grout sealer",
        "Replace old caulk around tubs, showers, and sinks",
        "Consider replacing rubber supply lines with braided steel",
        "Professional shower pan inspection if shower is 10+ years old"
      ]
    },
    {
      frequency: "Every 5 Years",
      tasks: [
        "Replace all toilet and sink supply lines regardless of condition",
        "Professional shower pan integrity testing",
        "Consider bathroom plumbing re-piping if home built before 1990",
        "Upgrade to water leak detection systems with automatic shutoffs"
      ]
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Bathroom Water Damage: Leaks, Overflow & Restoration Guide | Northern Virginia"
        description="Expert guide to bathroom water damage in Northern Virginia. Covers toilet overflows, shower leaks, supply line failures, hidden damage behind tiles, emergency response, and professional restoration. Available 24/7: 877-497-0007"
        schema={[faqSchema, localBusinessSchema, articleSchema]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Blog', path: '/blog/' },
            { label: 'Bathroom Water Damage Guide', path: '#' }
          ]} />
        <ArticleAuthor datePublished="2025-01-02" readTime="10 min read" />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Droplets size={14} /> Restoration Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Bathroom Water Damage: Leaks, Overflow & Restoration Guide
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Bathrooms are the #1 source of residential water damage. From toilet overflows and supply line failures to hidden shower pan leaks, bathroom water damage causes thousands of dollars in repairs annually across Northern Virginia. This comprehensive guide covers emergency response, hidden damage detection, professional restoration, and prevention strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Call 24/7: (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg" className="hidden md:inline-flex">
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

            {/* Emergency Alert Banner */}
            <div className="bg-[#1a73e8] text-white p-6 rounded-2xl mb-12 shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Experiencing Bathroom Water Damage Right Now?</h2>
                  <p className="text-blue-100">24/7 emergency response across Northern Virginia • 60-90 minute arrival</p>
                </div>
                <Button href="tel:8774970007" variant="secondary" className="bg-white text-primary border-none hover:bg-blue-50 shrink-0">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>
            </div>

            {/* Understanding Bathroom Water Damage */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8]">
                Understanding Bathroom Water Damage in Northern Virginia Homes
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-4">
                According to the Insurance Institute for Business & Home Safety, bathrooms account for nearly 40% of all residential water damage claims. The combination of multiple plumbing fixtures, tile and grout surfaces, enclosed spaces, and daily water use creates numerous failure points.
              </p>
              <p className="text-lg text-muted leading-relaxed mb-4">
                Northern Virginia homes face additional challenges: hard water accelerates fixture wear, temperature fluctuations stress pipes, and older housing stock in areas like Old Town Alexandria and Arlington contains aging plumbing systems more prone to failure.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                The critical issue with bathroom water damage is that much of it remains hidden for weeks or months. Water behind tiles, under flooring, and inside walls causes extensive damage before visible signs appear. Professional detection and rapid response are essential to minimize costs and prevent mold growth.
              </p>
            </section>

            {/* Common Damage Sources */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8]">
                Common Sources of Bathroom Water Damage
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Bathroom water damage stems from four primary sources, each with unique risks and restoration requirements.
              </p>

              <div className="space-y-6">
                {damageSourcesData.map((item, i) => (
                  <div key={i} className={`bg-white border-2 border-${item.color}-200 rounded-2xl p-6`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 text-${item.color}-600 flex items-center justify-center shrink-0`}>
                        <item.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-medium text-text text-lg">{item.source}</h3>
                          <span className={`px-2 py-1 rounded-full bg-${item.color}-100 text-${item.color}-700 text-xs font-bold uppercase`}>
                            {item.severity}
                          </span>
                        </div>
                        <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className={`bg-${item.color}-50 rounded-lg p-4 mb-4 border border-${item.color}-100`}>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">Hidden Risks</h4>
                      <ul className="space-y-2">
                        {item.hiddenRisks.map((risk, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-gray-700">
                            <AlertTriangle size={12} className={`text-${item.color}-600 mt-0.5 shrink-0`} />
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <h4 className="text-xs font-bold text-green-900 uppercase tracking-wide mb-2">Prevention Strategies</h4>
                      <ul className="space-y-2">
                        {item.prevention.map((prev, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-green-800">
                            <CheckCircle2 size={12} className="text-green-600 mt-0.5 shrink-0" />
                            {prev}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          <MidArticleCTA variant="emergency" />

            {/* Emergency Response Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8]">
                Emergency Response: What to Do Immediately
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                When bathroom water damage occurs, your response in the first 60 minutes determines the extent and cost of restoration. Follow these steps in order.
              </p>

              <div className="space-y-6">
                {emergencySteps.map((step, i) => (
                  <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white items-center justify-center shrink-0 shadow-md">
                        <span className="text-lg font-bold">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon size={20} className="text-primary sm:hidden" />
                          <h3 className="font-medium text-text text-lg">{step.title}</h3>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Clock size={14} className="text-muted" />
                          <span className="text-sm text-muted">{step.timeframe}</span>
                        </div>
                        <p className="text-muted leading-relaxed">{step.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hidden Damage Signs */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8]">
                Signs of Hidden Water Damage Behind Tiles & Under Floors
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Bathroom water damage often occurs behind tiles, under flooring, and inside walls for months before becoming visible. Recognizing these warning signs enables early intervention, preventing extensive and costly repairs.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {hiddenDamageSigns.map((item, i) => (
                  <div key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                      <h3 className="font-medium text-amber-900 text-sm">{item.sign}</h3>
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed mb-3">{item.description}</p>
                    <div className="bg-white rounded-lg p-3 border border-amber-100">
                      <p className="text-xs font-medium text-gray-900"><strong>Action Required:</strong> {item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Restoration Process */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8]">
                Professional Bathroom Water Damage Restoration Process
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Bathroom water damage restoration follows IICRC S500 standards for water damage restoration and S520 standards for mold remediation. Here's what to expect when Flood Doctor responds to your bathroom emergency.
              </p>

              <div className="space-y-8">
                {professionalProcess.map((item, i) => (
                  <div key={i} className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                        {item.timeframe}
                      </span>
                    </div>
                    <h3 className="font-medium text-text text-xl mb-3">{item.phase}</h3>
                    <p className="text-muted leading-relaxed mb-4">{item.description}</p>
                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">Equipment & Methods</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {item.equipment.map((equip, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle2 size={12} className="text-blue-600 shrink-0" />
                            {equip}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Subfloor & Structural Concerns */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8]">
                Subfloor & Structural Damage Concerns
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Bathroom water damage frequently affects subfloors, floor joists, and ceilings below. Understanding these structural concerns helps homeowners appreciate why professional restoration is essential.
              </p>

              <div className="space-y-6">
                {subfloorConcerns.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-6">
                    <h3 className="font-medium text-text text-lg mb-3 flex items-center gap-2">
                      <Home className="text-primary" size={20} />
                      {item.concern}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">{item.explanation}</p>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <p className="text-sm text-blue-900"><strong>Professional Solution:</strong> {item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cost Estimates */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8]">
                Bathroom Water Damage Restoration Cost Estimates
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Bathroom water damage restoration costs vary based on damage severity, extent of hidden damage, and materials requiring replacement. These Northern Virginia estimates include emergency response, drying, and reconstruction.
              </p>

              <div className="space-y-6">
                {costEstimates.map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-text text-xl mb-2">{item.category}</h3>
                        <p className="text-sm text-muted mb-3">{item.scope}</p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <DollarSign className="text-green-600 inline-block mb-1" size={20} />
                        <div className="text-2xl font-bold text-green-700">{item.costRange}</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 mb-4 border border-green-100">
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">Includes</h4>
                      <ul className="space-y-1">
                        {item.includes.map((inc, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-gray-700">
                            <CheckCircle2 size={12} className="text-green-600 mt-0.5 shrink-0" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <p className="text-xs text-blue-900"><strong>Insurance Coverage:</strong> {item.insuranceCoverage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Prevention Checklist */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8]">
                Bathroom Water Damage Prevention Checklist
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Most bathroom water damage is preventable with regular maintenance and inspection. This checklist provides a comprehensive prevention schedule for Northern Virginia homeowners.
              </p>

              <div className="space-y-6">
                {preventionChecklist.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="text-primary" size={20} />
                      <h3 className="font-medium text-text text-lg">{item.frequency}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted">
                          <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Expert Insight Blockquote */}
            <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6 rounded-r-lg mb-16">
              <div className="flex items-start gap-4">
                <Shield className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-800 italic leading-relaxed mb-3">
                    "The majority of bathroom water damage we restore in Northern Virginia involves hidden moisture that homeowners didn't know existed for months. A small shower pan leak or slow supply line drip can cause $15,000+ in damage before visible signs appear. Professional moisture detection catches these issues early, saving tens of thousands in reconstruction costs."
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    — Flood Doctor, IICRC-Certified Water Damage Restoration Specialists
                  </p>
                </div>
              </div>
            </div>

            {/* External Resources */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Additional Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="https://www.iicrc.org/consumers/care/water-damage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">IICRC Water Damage Standards</div>
                    <div className="text-xs text-muted">Industry restoration guidelines</div>
                  </div>
                </a>
                <a
                  href="https://www.epa.gov/mold/mold-cleanup-your-home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">EPA Mold Cleanup Guide</div>
                    <div className="text-xs text-muted">Federal mold remediation standards</div>
                  </div>
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <RelatedArticles categories={['water-damage', 'insurance']} currentSlug="/blog/bathroom-water-damage-guide/" />

        <GoogleStyleFAQ
                data={faqs}
                title="Frequently Asked Questions"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Primary CTA Card */}
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <h3 className="font-display text-xl font-medium mb-4 relative z-10">
                  24/7 Bathroom Water Damage Response
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Emergency bathroom restoration across Northern Virginia. We respond within 60-90 minutes to minimize damage and begin professional drying immediately.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50 mb-6">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="space-y-4 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Response Time</div>
                      <div className="text-xs text-blue-200">60-90 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Shield size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">IICRC Certified</div>
                      <div className="text-xs text-blue-200">Industry standards</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Insurance Billing</div>
                      <div className="text-xs text-blue-200">Direct billing available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[24px] p-6 border border-blue-200">
                <h4 className="font-medium text-gray-900 mb-4">Bathroom Water Damage Statistics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-700">Bathroom damage claims</span>
                      <span className="text-lg font-bold text-blue-700">40%</span>
                    </div>
                    <div className="text-xs text-gray-600">Of all residential water damage</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-700">Mold growth timeline</span>
                      <span className="text-lg font-bold text-blue-700">24-48h</span>
                    </div>
                    <div className="text-xs text-gray-600">In Northern VA climate</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-700">Average claim cost</span>
                      <span className="text-lg font-bold text-blue-700">$5,000</span>
                    </div>
                    <div className="text-xs text-gray-600">For bathroom water damage</div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Northern Virginia Service Areas</h4>
                <div className="space-y-2 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    Arlington, VA
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    Alexandria, VA
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    Fairfax County, VA
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    Loudoun County, VA
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    Prince William County, VA
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    Washington, DC
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Bathroom Water Damage? We Respond Immediately
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our emergency restoration team provides 24/7 response across Northern Virginia. We arrive within 60-90 minutes to extract water, prevent mold, and begin professional restoration.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-blue-600 border-none hover:bg-blue-50">
            <Phone size={20} className="mr-2" />
            Call Emergency Line: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default BathroomWaterDamageGuide;
