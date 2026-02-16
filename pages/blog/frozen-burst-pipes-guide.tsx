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
  CheckCircle2,
  Camera,
  Shield,
  Droplets,
  Wind,
  Home,
  ThermometerSnowflake,
  Wrench,
  FileText,
  Users,
  MapPin,
  ArrowRight,
  Info,
  Snowflake,
  Thermometer,
  Zap,
  DollarSign
} from 'lucide-react';

// Animation Components
import { motion } from 'framer-motion';
import {
  AnimatedHeroContent,
  AnimatedSection,
  AnimatedSectionHeader,
  AnimatedCard,
  AnimatedList,
  AnimatedStep,
  AnimatedTimeline,
  AnimatedInfoBox,
  AnimatedStatGrid,
  AnimatedCheckList
} from '../../components/blog';

const FrozenBurstPipesGuide: React.FC = () => {
  const faqs = [
    {
      question: "Why are Northern Virginia homes particularly vulnerable to frozen pipes?",
      answer: "Northern Virginia experiences unpredictable freeze-thaw cycles rather than sustained cold, causing pipes to expand and contract repeatedly. Many NoVA homes built in the 1960s-1980s have inadequate pipe insulation in crawlspaces, exterior walls, and unheated basements. The region's clay soil also conducts cold into foundations, and older homes in Alexandria, Arlington, and Fairfax often have exposed plumbing in vulnerable areas."
    },
    {
      question: "At what temperature do pipes freeze?",
      answer: "Pipes begin freezing when exposed to temperatures of 20°F or below for extended periods (6+ hours). However, pipes in unheated areas can freeze at temperatures as high as 32°F if there's wind chill or poor insulation. Northern Virginia typically sees dangerous freezing conditions during January and February cold snaps, especially overnight when temperatures drop below 25°F."
    },
    {
      question: "What are the signs that my pipes are frozen?",
      answer: "Warning signs include no water or reduced water pressure from faucets, strange noises when turning on water (clanging or banging), frost visible on exposed pipes, bulging or cracked pipe sections, and odd smells from drains (ice blocking vents). If you notice these signs, act immediately—frozen pipes can burst within hours as ice expands."
    },
    {
      question: "What should I do immediately if a pipe bursts?",
      answer: "Turn off your main water supply immediately to stop flooding. Then shut off electricity to affected areas at the circuit breaker if water is near outlets. Call Flood Doctor at (877) 497-0007 for 24/7 emergency response—we typically arrive within 60-90 minutes. Document all damage with photos for insurance. Do not attempt to thaw or repair burst pipes yourself."
    },
    {
      question: "Will homeowners insurance cover frozen pipe damage?",
      answer: "Most homeowners insurance covers sudden burst pipe damage if you've maintained reasonable heat (typically above 55°F) and taken preventive measures. However, damage from neglected maintenance or vacant homes without heat may be denied. Always maintain heat, insulate vulnerable pipes, and document your prevention efforts. Contact your insurer within 24 hours of discovering damage."
    },
    {
      question: "How can I prevent pipes from freezing during Northern Virginia winters?",
      answer: "Keep your home heated above 55°F always, even when away. Insulate pipes in unheated areas with foam pipe sleeves. Let faucets drip during extreme cold (running water doesn't freeze). Open cabinet doors under sinks to allow warm air circulation. Seal air leaks in crawlspaces and basements. Disconnect outdoor hoses and drain exterior faucets before winter."
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
    "headline": "Frozen Pipes & Burst Pipe Emergency Guide for Northern Virginia Homeowners",
    "description": "Comprehensive guide to preventing frozen pipes and responding to burst pipe emergencies in Northern Virginia. Expert prevention tips, warning signs, emergency response steps, and professional restoration guidance.",
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
    "telephone": "(877) 497-0007",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "VA",
      "addressLocality": "Northern Virginia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8816,
      "longitude": -77.1045
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$"
  };

  const vulnerabilityReasons = [
    {
      icon: Thermometer,
      title: "Freeze-Thaw Temperature Cycles",
      description: "Northern Virginia experiences unpredictable temperature swings—32°F at night, 50°F during the day. This repeated freezing and thawing weakens pipes through expansion and contraction cycles, unlike consistent cold regions where pipes freeze once and stay frozen.",
      impact: "Pipes crack gradually over several freeze cycles, often bursting during a thaw when water pressure returns."
    },
    {
      icon: Home,
      title: "Older Housing Stock (1960s-1980s)",
      description: "Many NoVA homes in Alexandria, Arlington, and Fairfax were built before modern insulation codes. Crawlspaces are often poorly insulated, exterior walls lack adequate protection, and pipes run through unheated areas without proper wrapping.",
      impact: "Homes built before 1990 have 3x higher pipe burst rates during winter compared to newer construction."
    },
    {
      icon: MapPin,
      title: "Clay Soil Conducts Cold",
      description: "Northern Virginia's expansive clay soil conducts cold temperatures into basement foundations and crawlspaces. Unlike sandy or rocky soil that provides some insulation, clay transfers temperature efficiently, freezing pipes that run along or through foundations.",
      impact: "Basement rim joists and crawlspace pipes freeze even when outdoor temperatures are only moderately below freezing."
    },
    {
      icon: Wind,
      title: "Unheated Crawlspaces & Attics",
      description: "Common in NoVA split-level and ranch homes from the 1960s-1970s, unheated crawlspaces expose pipes to freezing air. Attic pipes serving second-floor bathrooms are particularly vulnerable during Arctic blasts when attic temperatures match outdoor conditions.",
      impact: "Crawlspace pipes account for 40% of residential pipe bursts in Northern Virginia during winter."
    }
  ];

  const preventionSteps = [
    {
      number: "01",
      title: "Maintain Minimum Heat (55°F Always)",
      icon: Thermometer,
      season: "October - April",
      content: "Never let your home drop below 55°F in winter, even when traveling. Set your thermostat to 'hold' mode rather than programmable schedules that reduce heat overnight or when away. This single action prevents 70% of frozen pipe incidents.",
      actionItems: [
        "Set thermostat to 58°F minimum if away",
        "Never shut off heat completely, even for vacation",
        "Install smart thermostat with remote monitoring",
        "Check battery backup if you have programmable stats"
      ],
      cost: "Free - $200 (smart thermostat)",
      effectiveness: "Prevents 70% of freeze incidents"
    },
    {
      number: "02",
      title: "Insulate Vulnerable Pipes Before Winter",
      icon: Shield,
      season: "Before November",
      content: "Wrap all exposed pipes in unheated areas with foam pipe insulation. Focus on crawlspaces, basements, exterior walls, attics, and garage areas. Use at least 1/2-inch thick foam sleeves; 3/4-inch provides better protection during extreme cold.",
      actionItems: [
        "Foam sleeves on all crawlspace pipes",
        "Wrap exterior wall pipes inside cabinets",
        "Insulate attic supply lines",
        "Heat tape on especially vulnerable sections"
      ],
      cost: "$50-$200 (DIY) or $300-$800 (professional)",
      effectiveness: "Reduces freeze risk by 60% in protected areas"
    },
    {
      number: "03",
      title: "Let Faucets Drip During Extreme Cold",
      icon: Droplets,
      season: "When temps drop below 25°F",
      content: "When temperatures forecast below 25°F overnight, let faucets drip at a pencil-lead width flow rate. Running water doesn't freeze. Focus on faucets served by pipes in exterior walls, crawlspaces, or other vulnerable locations.",
      actionItems: [
        "Both hot and cold water dripping slightly",
        "Kitchen and bathroom sinks on exterior walls",
        "Continue until temps rise above freezing",
        "Cost: approximately $1-3 per night in water"
      ],
      cost: "$1-3 per cold night",
      effectiveness: "Prevents freezing in active pipes during extreme cold"
    },
    {
      number: "04",
      title: "Open Cabinet Doors Under Sinks",
      icon: Home,
      season: "During cold weather",
      content: "Kitchen and bathroom sinks on exterior walls are freeze-prone because cabinets block warm room air from reaching pipes. Open cabinet doors during cold snaps to allow heat circulation around plumbing.",
      actionItems: [
        "Open all under-sink cabinets overnight",
        "Remove stored items blocking airflow",
        "Use small fan to circulate warm air if needed",
        "Especially important for island sinks"
      ],
      cost: "Free",
      effectiveness: "Protects sink supply lines during moderate freezes"
    },
    {
      number: "05",
      title: "Seal Crawlspace & Basement Air Leaks",
      icon: Wind,
      season: "Before winter (September-October)",
      content: "Cold air infiltration through foundation vents, rim joist gaps, and wall penetrations creates freezing conditions in crawlspaces. Seal these openings with foam insulation, close foundation vents in winter, and insulate rim joists.",
      actionItems: [
        "Close foundation vents November-March",
        "Spray foam rim joist gaps",
        "Seal pipe penetrations through walls",
        "Weather-strip basement doors and windows"
      ],
      cost: "$100-$500 (DIY) or $800-$2,000 (professional)",
      effectiveness: "Raises crawlspace temps 10-20°F, significantly reducing freeze risk"
    },
    {
      number: "06",
      title: "Disconnect & Drain Outdoor Faucets",
      icon: Wrench,
      season: "Before first freeze (late October)",
      content: "Outdoor faucets and hose bibs are extremely vulnerable to freezing. Disconnect all garden hoses, drain outdoor faucets completely, and shut off interior shut-off valves serving exterior faucets. Install insulated faucet covers.",
      actionItems: [
        "Disconnect all hoses by Halloween",
        "Shut off interior valves to exterior faucets",
        "Open exterior faucets to drain residual water",
        "Install foam faucet covers ($3-5 each)"
      ],
      cost: "$10-$30 for covers",
      effectiveness: "Prevents outdoor faucet bursts (most common freeze location)"
    }
  ];

  const frozenPipeSigns = [
    {
      sign: "No Water or Reduced Pressure",
      severity: "Critical",
      description: "Turning on a faucet produces no water or only a trickle, even though other faucets work normally. This indicates ice blockage in the supply line to that fixture.",
      action: "Locate the frozen section immediately. Keep the faucet open (ice expansion needs somewhere to go). Call a plumber if you cannot locate the freeze or safely thaw it."
    },
    {
      sign: "Frost on Exposed Pipes",
      severity: "Critical",
      description: "Visible frost or ice accumulation on exposed pipes in crawlspaces, basements, or exterior walls. The pipe interior is likely frozen solid.",
      action: "Do not use open flame or high heat to thaw. Use hair dryer, heat lamp, or warm towels. Start thawing from faucet side toward the freeze, not the other direction."
    },
    {
      sign: "Strange Noises from Pipes",
      severity: "High",
      description: "Clanging, banging, or gurgling sounds when turning on water indicate ice blockage causing pressure buildup or air pockets in the system.",
      action: "Shut off water immediately if noises persist. This can indicate imminent burst. Do not continue running water forcefully through blocked pipes."
    },
    {
      sign: "Bulging or Cracked Pipe Sections",
      severity: "Critical - Pre-Burst",
      description: "Visible bulging, splitting, or hairline cracks in pipe sections, especially at joints or bends. Ice expansion has already damaged the pipe—burst is imminent or occurring slowly.",
      action: "Turn off main water supply immediately. Place buckets under damaged sections. Call emergency plumber and water damage restoration company."
    },
    {
      sign: "Odd Smells from Drains",
      severity: "Moderate",
      description: "Strange odors from drains can indicate frozen vent pipes preventing proper drainage and venting. Less urgent than supply line freezes but still requires attention.",
      action: "Check attic and roof vents for ice blockage. Ensure drain traps have water (ice in vents can cause trap evaporation)."
    }
  ];

  const burstPipeEmergencySteps = [
    {
      number: "01",
      title: "Shut Off Main Water Supply IMMEDIATELY",
      icon: Droplets,
      timeframe: "0-60 seconds",
      urgency: "CRITICAL",
      content: "A 1/2-inch burst pipe releases 50+ gallons per minute. Every second counts. Locate your main water shut-off valve (basement, crawlspace, or outside near meter) and turn clockwise until fully closed. This stops all water flow instantly.",
      warning: "If you cannot locate your shut-off valve within 60 seconds, call your water company emergency line while containing water spread."
    },
    {
      number: "02",
      title: "Turn Off Electricity to Affected Areas",
      icon: Zap,
      timeframe: "1-2 minutes",
      urgency: "CRITICAL",
      content: "Water and electricity create deadly combinations. Turn off power to flooded areas at your circuit breaker. If your main electrical panel is in standing water, do NOT approach it—evacuate and call 911.",
      warning: "NEVER enter standing water if electrical outlets or appliances are submerged. Electrocution risk is severe."
    },
    {
      number: "03",
      title: "Call Emergency Services",
      icon: Phone,
      timeframe: "2-3 minutes",
      urgency: "IMMEDIATE",
      content: "Contact Flood Doctor immediately: (877) 497-0007. We provide 24/7 emergency response across Northern Virginia, typically arriving within 60-90 minutes. Then call your insurance company to report the loss and get your claim number.",
      warning: "Do not wait to 'see how bad it gets.' Professional water extraction prevents mold, structural damage, and costs that increase 10-15% every hour."
    },
    {
      number: "04",
      title: "Document Everything with Photos/Video",
      icon: Camera,
      timeframe: "5-10 minutes",
      urgency: "HIGH",
      content: "Before any cleanup, photograph the burst pipe source, all standing water, affected rooms, damaged belongings, and visible damage. Take 50-100 photos minimum. Use your phone's timestamp feature. Video walkthrough is also valuable.",
      warning: "Insufficient documentation is the #1 reason insurance claims are reduced or denied. Over-document rather than under-document."
    },
    {
      number: "05",
      title: "Begin Safe Water Removal (If Possible)",
      icon: Shield,
      timeframe: "10-30 minutes",
      urgency: "MODERATE",
      content: "If safe and water is clean (not sewage), use wet/dry shop vacuum, mops, and towels to remove standing water. Move furniture to dry areas. Remove soaked rugs. However, do NOT delay professional help to attempt DIY cleanup.",
      warning: "NEVER use regular household vacuums on water—severe electrical shock hazard. Only wet/dry vacuums rated for water extraction."
    },
    {
      number: "06",
      title: "Open Faucets to Drain System",
      icon: Droplets,
      timeframe: "After water shut-off",
      urgency: "MODERATE",
      content: "After shutting off main water, open all faucets to drain remaining water from pipes. This reduces pressure and additional leakage. Flush toilets to drain tanks. Open lowest faucets first to drain system completely.",
      warning: "Do not attempt to thaw frozen pipes until after burst pipe is professionally repaired. Additional thawing can cause more bursts."
    }
  ];

  const waterDamageTimeline = [
    {
      time: "0-1 Hours",
      severity: "Immediate",
      color: "from-red-500 to-red-600",
      events: [
        "Water spreads across floors into porous materials",
        "Drywall and insulation begin absorbing water",
        "Furniture finishes show water damage",
        "Electronics at severe risk if contacted",
        "Critical window for damage prevention"
      ]
    },
    {
      time: "1-24 Hours",
      severity: "Escalating",
      color: "from-orange-500 to-orange-600",
      events: [
        "Wood floors swell, warp, and cup",
        "Drywall begins sagging and crumbling",
        "Metal fixtures show early tarnish/rust",
        "Odors develop from standing water",
        "Mold spores begin activating in damp areas"
      ]
    },
    {
      time: "24-48 Hours",
      severity: "Critical",
      color: "from-amber-500 to-amber-600",
      events: [
        "Mold growth begins (visible within 48-72 hours)",
        "Structural wood shows rot indicators",
        "Insulation becomes saturated and useless",
        "Drywall deteriorates beyond repair in many areas",
        "Restoration costs increase 40-60%"
      ]
    },
    {
      time: "48+ Hours",
      severity: "Severe",
      color: "from-yellow-500 to-yellow-600",
      events: [
        "Extensive mold remediation required ($5,000-$15,000+)",
        "Structural repairs necessary (framing, subfloors)",
        "Complete material replacement in many areas",
        "Health risks from mold exposure increase",
        "Total costs often exceed $20,000-$50,000"
      ]
    }
  ];

  const professionalRestoration = [
    {
      phase: "Emergency Response (0-2 Hours)",
      icon: Clock,
      description: "Our IICRC-certified team arrives within 60-90 minutes across Northern Virginia. We perform immediate safety assessment, confirm water shut-off, begin emergency water extraction with truck-mounted equipment, and document all damage for insurance.",
      equipment: ["Truck-mounted extractors (100x faster than shop vacs)", "Industrial wet vacuums", "Submersible pumps for deep water"]
    },
    {
      phase: "Inspection & Moisture Detection (2-4 Hours)",
      icon: Camera,
      description: "We use thermal imaging cameras to detect hidden moisture in walls, ceilings, and floors. Moisture meters measure exact water content in materials. Hygrometers assess humidity levels. We classify water category (clean, gray, or black water) and determine complete restoration scope.",
      equipment: ["FLIR thermal imaging cameras", "Pin and pinless moisture meters", "Hygrometers and thermometers", "Comprehensive photo documentation"]
    },
    {
      phase: "Structural Drying (3-7 Days)",
      icon: Wind,
      description: "Industrial dehumidifiers and high-velocity air movers run 24/7 to dry all structural materials to safe moisture levels (typically under 15% wood moisture content). We monitor daily with moisture readings and adjust equipment placement as needed.",
      equipment: ["Industrial LGR dehumidifiers", "Axial and centrifugal air movers", "Desiccant dehumidifiers for severe cases", "Daily monitoring and adjustment"]
    },
    {
      phase: "Antimicrobial Treatment & Mold Prevention",
      icon: Shield,
      description: "Once materials are dry, we apply EPA-registered antimicrobial treatments to all affected surfaces. This prevents mold growth in the critical 24-72 hour window. HEPA air scrubbers remove airborne contaminants throughout the process.",
      equipment: ["EPA-registered antimicrobials", "HEPA air scrubbers", "Negative air machines for containment", "Professional-grade disinfectants"]
    },
    {
      phase: "Repair & Restoration (1-3 Weeks)",
      icon: Wrench,
      description: "After complete drying, we remove damaged materials that cannot be salvaged (often drywall, insulation, flooring). We coordinate plumbing repairs for the burst pipe. Then we rebuild and restore your home to pre-loss condition with matching materials.",
      equipment: ["Professional reconstruction crew", "Material matching services", "Licensed plumber coordination", "Final quality inspection"]
    },
    {
      phase: "Insurance Documentation & Billing",
      icon: FileText,
      description: "We provide complete documentation packages, work directly with your insurance adjuster, submit detailed Xactimate estimates (industry-standard software insurers use), and handle all billing directly with your carrier. You pay only your deductible in most cases.",
      equipment: ["Xactimate estimating software", "Comprehensive photo documentation", "Detailed scope of work reports", "Direct insurance billing"]
    }
  ];

  const insuranceCoverage = [
    {
      title: "What's Typically Covered",
      covered: true,
      items: [
        "Sudden burst pipe damage (if heat was maintained above 55°F)",
        "Emergency water extraction and mitigation",
        "Structural drying and dehumidification",
        "Damaged drywall, flooring, and structural materials",
        "Contents damage (furniture, electronics, belongings)",
        "Antimicrobial treatment and mold prevention",
        "Temporary repairs to prevent further damage",
        "Plumbing repair costs (often with limits)"
      ]
    },
    {
      title: "What's Often NOT Covered",
      covered: false,
      items: [
        "Neglected maintenance or lack of heat in home",
        "Gradual leaks or long-term seepage",
        "Damage in vacant homes without proper winterization",
        "Outdoor plumbing or irrigation systems (usually)",
        "Upgrades beyond pre-loss condition",
        "Preventive pipe replacement (not emergency repair)",
        "Mold growth if delayed reporting/mitigation",
        "Flood damage (requires separate flood insurance)"
      ]
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Frozen & Burst Pipes: Emergency Guide"
        description="Comprehensive guide to preventing frozen pipes and responding to burst pipe emergencies in Northern Virginia. Expert prevention strategies, warning signs, emergency response steps, and professional restoration process for NoVA homeowners."
        schema={[faqSchema, articleSchema, localBusinessSchema]}
      />

      {/* Hero Section - Animated */}
      <motion.div
        className="bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 border-b border-border pt-12 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Blog', path: '/blog/' },
            { label: 'Frozen & Burst Pipes Guide', path: '#' }
          ]} />
        <ArticleAuthor datePublished="2025-01-02" readTime="10 min read" />

          <AnimatedHeroContent className="max-w-3xl mt-8">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Snowflake size={14} /> Winter Emergency Guide
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Frozen Pipes & Burst Pipe Emergency Guide for Northern Virginia Homeowners
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Northern Virginia's freeze-thaw cycles create perfect conditions for frozen and burst pipes. This comprehensive guide covers prevention strategies before winter, warning signs to watch for, emergency response steps when pipes burst, and the professional restoration process to minimize damage.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button href="tel:8774970007" variant="primary" size="lg">
                  <Phone size={18} className="mr-2" />
                  24/7 Emergency: (877) 497-0007
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="hidden md:block">
                <Button to="/request/" variant="secondary" size="lg">
                  Request Service
                </Button>
              </motion.div>
            </div>
          </AnimatedHeroContent>
        </div>
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">

            {/* Winter Emergency Alert - Animated */}
            <AnimatedInfoBox
              icon={ThermometerSnowflake}
              title="Arctic Blast Forecast? Protect Your Pipes Now"
              variant="info"
              className="mb-12"
            >
              <p className="mb-4 leading-relaxed">
                When temperatures forecast below 25°F in Northern Virginia, frozen pipe risk increases dramatically. Pipes in crawlspaces, exterior walls, and unheated basements are most vulnerable. Take preventive action before the cold arrives—frozen pipes can burst within hours, releasing 50+ gallons per minute.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button href="tel:8774970007" variant="primary" size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Phone size={16} className="mr-2" />
                  Call for Emergency Protection
                </Button>
              </motion.div>
            </AnimatedInfoBox>

            {/* Why NoVA Homes Are Vulnerable - Animated */}
            <AnimatedSection className="mb-24">
              <motion.h2
                className="font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Why Northern Virginia Homes Are Particularly Vulnerable
              </motion.h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Northern Virginia's unique climate, older housing stock, and soil conditions create specific frozen pipe risks that homeowners must understand and address proactively.
              </p>

              <AnimatedList className="space-y-6">
                {vulnerabilityReasons.map((item, i) => (
                  <AnimatedCard key={i} delay={i * 0.1} className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <item.icon size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-medium text-text text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>
                        <motion.div
                          className="bg-red-50 rounded-lg p-3 border border-red-100"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <div className="flex items-start gap-2">
                            <AlertTriangle size={14} className="text-red-600 mt-0.5 shrink-0" />
                            <span className="text-xs text-red-900 font-medium">{item.impact}</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </AnimatedList>
            </AnimatedSection>

            {/* Prevention Before Winter - Animated */}
            <AnimatedSection className="mb-24">
              <motion.h2
                className="font-display text-3xl font-medium text-text mb-4 pb-3 border-b-4 border-[#1a73e8]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                6 Essential Prevention Steps Before Winter
              </motion.h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Preventing frozen pipes costs $100-$500 in proactive measures. Repairing burst pipe damage costs $5,000-$20,000+. These prevention strategies protect your Northern Virginia home throughout winter.
              </p>

              <div className="space-y-8">
                {preventionSteps.map((step, index) => (
                  <AnimatedStep
                    key={index}
                    number={step.number}
                    title={step.title}
                    icon={step.icon}
                    delay={index * 0.1}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Clock size={14} className="text-muted" />
                      <span className="text-sm text-muted">{step.season}</span>
                    </div>
                    <p className="text-muted leading-relaxed mb-4">
                      {step.content}
                    </p>

                    <motion.div
                      className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <h4 className="text-sm font-bold text-blue-900 mb-2">Action Items:</h4>
                      <AnimatedCheckList items={step.actionItems} />
                    </motion.div>

                    <div className="grid grid-cols-2 gap-3">
                      <motion.div
                        className="bg-green-50 rounded-lg p-3 border border-green-100"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-xs text-green-600 mb-1">Cost</div>
                        <div className="text-sm font-medium text-green-900">{step.cost}</div>
                      </motion.div>
                      <motion.div
                        className="bg-purple-50 rounded-lg p-3 border border-purple-100"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-xs text-purple-600 mb-1">Effectiveness</div>
                        <div className="text-sm font-medium text-purple-900">{step.effectiveness}</div>
                      </motion.div>
                    </div>
                  </AnimatedStep>
                ))}
              </div>
            </AnimatedSection>

          <MidArticleCTA variant="emergency" />

            {/* Warning Signs of Frozen Pipes - Animated */}
            <AnimatedSection className="mb-24">
              <AnimatedSectionHeader
                title="Critical Warning Signs Your Pipes Are Frozen"
                subtitle="Early detection prevents bursts. Monitor your plumbing for these signs during cold weather, especially after temperatures drop below 25°F overnight."
              />

              <AnimatedList className="space-y-4">
                {frozenPipeSigns.map((item, i) => (
                  <motion.div
                    key={i}
                    className={`border-l-4 rounded-xl p-5 ${
                      item.severity === 'Critical' ? 'border-red-500 bg-red-50' :
                      item.severity === 'Critical - Pre-Burst' ? 'border-red-600 bg-red-100' :
                      item.severity === 'High' ? 'border-orange-500 bg-orange-50' :
                      'border-yellow-500 bg-yellow-50'
                    }`}
                    initial={{ opacity: 0, x: -30, scale: 0.98 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase shrink-0 ${
                          item.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                          item.severity === 'Critical - Pre-Burst' ? 'bg-red-200 text-red-800' :
                          item.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 + i * 0.1 }}
                      >
                        {item.severity}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className={`font-medium mb-2 ${
                          item.severity === 'Critical' || item.severity === 'Critical - Pre-Burst' ? 'text-red-900' :
                          item.severity === 'High' ? 'text-orange-900' : 'text-yellow-900'
                        }`}>{item.sign}</h3>
                        <p className={`text-sm leading-relaxed mb-3 ${
                          item.severity === 'Critical' || item.severity === 'Critical - Pre-Burst' ? 'text-red-800' :
                          item.severity === 'High' ? 'text-orange-800' : 'text-yellow-800'
                        }`}>{item.description}</p>
                        <motion.div
                          className={`rounded-lg p-3 border ${
                            item.severity === 'Critical' || item.severity === 'Critical - Pre-Burst' ? 'bg-red-100 border-red-200' :
                            item.severity === 'High' ? 'bg-orange-100 border-orange-200' : 'bg-yellow-100 border-yellow-200'
                          }`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <div className="flex items-start gap-2">
                            <ArrowRight size={14} className={`mt-0.5 shrink-0 ${
                              item.severity === 'Critical' || item.severity === 'Critical - Pre-Burst' ? 'text-red-600' :
                              item.severity === 'High' ? 'text-orange-600' : 'text-yellow-600'
                            }`} />
                            <span className={`text-xs font-medium ${
                              item.severity === 'Critical' || item.severity === 'Critical - Pre-Burst' ? 'text-red-900' :
                              item.severity === 'High' ? 'text-orange-900' : 'text-yellow-900'
                            }`}>{item.action}</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatedList>
            </AnimatedSection>

            {/* Emergency Response When Pipes Burst - Animated */}
            <AnimatedSection className="mb-24">
              <AnimatedSectionHeader
                title="Emergency Response: What to Do When a Pipe Bursts"
                subtitle="A burst pipe releases 50+ gallons per minute. Follow these critical steps immediately to minimize damage and protect your home. Every minute counts."
              />

              <div className="space-y-8">
                {burstPipeEmergencySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-white border-2 border-gray-200 rounded-3xl p-8"
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{
                      boxShadow: '0 25px 50px -15px rgba(0,0,0,0.15)',
                      y: -4,
                      borderColor: step.urgency === 'CRITICAL' ? '#ef4444' : '#dadce0'
                    }}
                  >
                    <motion.div
                      className="absolute top-6 right-6"
                      initial={{ scale: 0, rotate: -20 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.3 + index * 0.1 }}
                    >
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        step.urgency === 'CRITICAL' ? 'bg-red-100 text-red-700' :
                        step.urgency === 'IMMEDIATE' ? 'bg-orange-100 text-orange-700' :
                        step.urgency === 'HIGH' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {step.urgency}
                      </span>
                    </motion.div>

                    <div className="flex items-start gap-6">
                      <motion.div
                        className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white items-center justify-center shrink-0 shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span className="text-xl font-bold">{step.number}</span>
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon size={20} className="text-primary sm:hidden" />
                          <h3 className="font-display text-xl font-medium text-text">
                            {step.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <Clock size={14} className="text-muted" />
                          <span className="text-sm text-muted">{step.timeframe}</span>
                        </div>
                        <p className="text-muted leading-relaxed mb-4">
                          {step.content}
                        </p>

                        <motion.div
                          className="bg-amber-50 rounded-xl p-4 border border-amber-200 inline-flex items-start gap-3 max-w-2xl"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <motion.div
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                          >
                            <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" />
                          </motion.div>
                          <span className="text-sm font-medium text-amber-900">{step.warning}</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Water Damage Timeline - Animated */}
            <AnimatedSection className="mb-24">
              <AnimatedSectionHeader
                title="Water Damage Timeline: Why Speed Matters"
                subtitle="Water damage from burst pipes escalates rapidly. Understanding this timeline shows why immediate professional response is critical—not optional."
              />

              <div className="space-y-6 relative">
                {/* Animated progress bar connecting timeline items */}
                <motion.div
                  className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-orange-500 via-amber-500 to-yellow-500 rounded-full hidden md:block"
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />

                {waterDamageTimeline.map((phase, i) => (
                  <motion.div
                    key={i}
                    className="border border-gray-200 rounded-2xl overflow-hidden md:ml-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)' }}
                  >
                    <motion.div
                      className={`bg-gradient-to-r ${phase.color} px-6 py-4 text-white`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.2 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        >
                          <Clock size={20} />
                        </motion.div>
                        <span className="font-bold text-lg">{phase.time}</span>
                        <motion.span
                          className="ml-auto text-sm opacity-90 px-3 py-1 bg-white/20 rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: 'spring', delay: 0.4 + i * 0.2 }}
                        >
                          {phase.severity} Damage
                        </motion.span>
                      </div>
                    </motion.div>
                    <div className="p-6 bg-white">
                      <ul className="space-y-3">
                        {phase.events.map((event, j) => (
                          <motion.li
                            key={j}
                            className="flex items-start gap-3 text-sm text-muted"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.2 + j * 0.05 }}
                          >
                            <motion.div whileHover={{ x: 4 }}>
                              <ArrowRight size={16} className="text-orange-500 mt-0.5 shrink-0" />
                            </motion.div>
                            {event}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ boxShadow: '0 15px 40px -10px rgba(26,115,232,0.2)' }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 1 }}
                  >
                    <Info className="text-primary shrink-0" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-text mb-2">Professional Response Prevents Escalation</h4>
                    <p className="text-sm text-muted leading-relaxed">
                      Flood Doctor's emergency response stops this timeline at the first stage. Our industrial equipment extracts water 100x faster than shop vacuums, thermal imaging finds hidden moisture, and 24/7 structural drying prevents mold growth. Most insurers pre-approve emergency mitigation because it saves them tens of thousands versus delayed response.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Professional Restoration Process - Animated */}
            <AnimatedSection className="mb-24">
              <AnimatedSectionHeader
                title="Professional Burst Pipe Restoration Process"
                subtitle="Understanding what happens when you call Flood Doctor helps you know what to expect and why professional restoration is essential for complete recovery."
              />

              <motion.div
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="space-y-6 relative">
                  {/* Connecting line */}
                  <motion.div
                    className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 to-blue-200 hidden md:block"
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {professionalRestoration.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4 relative z-10"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.div
                        className="bg-blue-100 text-primary p-3 rounded-xl shrink-0"
                        whileHover={{ scale: 1.15, rotate: 5, backgroundColor: '#1a73e8' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <motion.div
                          whileHover={{ color: '#ffffff' }}
                        >
                          <item.icon size={20} />
                        </motion.div>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-medium text-text mb-2">{item.phase}</h4>
                        <p className="text-sm text-muted mb-3 leading-relaxed">{item.description}</p>
                        <motion.div
                          className="bg-white rounded-lg p-3 border border-gray-200"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.12 }}
                          whileHover={{ boxShadow: '0 8px 25px -8px rgba(0,0,0,0.1)' }}
                        >
                          <div className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">Equipment & Services:</div>
                          <ul className="space-y-1">
                            {item.equipment.map((eq, j) => (
                              <motion.li
                                key={j}
                                className="flex items-start gap-2 text-xs text-gray-700"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                              >
                                <motion.div whileHover={{ scale: 1.2 }}>
                                  <CheckCircle2 size={12} className="text-primary mt-0.5 shrink-0" />
                                </motion.div>
                                {eq}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Insurance Coverage - Animated */}
            <AnimatedSection className="mb-24">
              <AnimatedSectionHeader
                title="Insurance Coverage for Burst Pipes"
                subtitle="Most homeowners insurance covers sudden burst pipe damage, but coverage has critical conditions and exclusions you must understand."
              />

              <div className="grid md:grid-cols-2 gap-6">
                {insuranceCoverage.map((section, i) => (
                  <motion.div
                    key={i}
                    className={`rounded-2xl p-6 border-2 ${
                      section.covered ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: section.covered
                        ? '0 20px 40px -15px rgba(34,197,94,0.25)'
                        : '0 20px 40px -15px rgba(239,68,68,0.25)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.3 + i * 0.1 }}
                      >
                        {section.covered ? (
                          <CheckCircle2 className="text-green-600" size={24} />
                        ) : (
                          <AlertTriangle className="text-red-600" size={24} />
                        )}
                      </motion.div>
                      <h3 className={`font-medium text-lg ${
                        section.covered ? 'text-green-900' : 'text-red-900'
                      }`}>{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <motion.li
                          key={j}
                          className={`flex items-start gap-2 text-sm ${
                            section.covered ? 'text-green-800' : 'text-red-800'
                          }`}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 + j * 0.04 }}
                        >
                          <motion.div whileHover={{ x: 3 }}>
                            <ArrowRight size={14} className={`mt-0.5 shrink-0 ${
                              section.covered ? 'text-green-600' : 'text-red-600'
                            }`} />
                          </motion.div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 bg-amber-50 rounded-2xl p-6 border border-amber-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ boxShadow: '0 15px 40px -10px rgba(245,158,11,0.2)' }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.5 }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <DollarSign className="text-amber-600 shrink-0" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-amber-900 mb-2">Critical Insurance Requirements</h4>
                    <ul className="space-y-2 text-sm text-amber-800">
                      {[
                        "Maintain heat above 55°F always (document thermostat settings)",
                        "Report damage within 24-48 hours of discovery",
                        "Take immediate action to prevent further damage (required by policy)",
                        "Document everything with photos before and during cleanup",
                        "Save all receipts and professional service invoices"
                      ].map((item, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + j * 0.08 }}
                        >
                          <ArrowRight size={14} className="text-amber-600 mt-0.5 shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* External Resources - Animated */}
            <AnimatedSection className="mb-24">
              <AnimatedSectionHeader
                title="Additional Resources"
              />
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: "https://www.iicrc.org/", title: "IICRC Water Damage Standards", desc: "Professional restoration guidelines" },
                  { href: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm.html", title: "Red Cross Winter Storm Prep", desc: "Winter emergency preparedness" },
                  { href: "https://www.epa.gov/mold", title: "EPA Mold Prevention", desc: "Federal mold & moisture resources" },
                  { href: "https://www.ready.gov/winter-weather", title: "Ready.gov Winter Weather", desc: "Federal emergency preparedness" }
                ].map((resource, i) => (
                  <motion.a
                    key={i}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      whileHover={{ x: 4, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <ArrowRight className="text-primary" size={20} />
                    </motion.div>
                    <div>
                      <div className="font-medium text-text text-sm">{resource.title}</div>
                      <div className="text-xs text-muted">{resource.desc}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>

            {/* FAQ Section - Animated */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <RelatedArticles categories={['water-damage', 'insurance']} currentSlug="/blog/frozen-burst-pipes-guide/" />

              <GoogleStyleFAQ
                data={faqs}
                title="Frequently Asked Questions"
                className="border-none p-0"
              />
            </motion.section>

          </div>

          {/* Sidebar - Animated */}
          <div className="lg:col-span-4">
            <motion.div
              className="sticky top-32 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >

              {/* Primary CTA Card - Animated */}
              <motion.div
                className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-google overflow-hidden relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02, boxShadow: '0 30px 60px -15px rgba(26,115,232,0.5)' }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                <h3 className="font-display text-xl font-medium mb-4 relative z-10">
                  24/7 Burst Pipe Emergency Response
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Frozen or burst pipes don't wait for business hours. Our IICRC-certified team responds across Northern Virginia within 60-90 minutes, 24/7/365.
                </p>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                    <Phone size={18} className="mr-2" />
                    (877) 497-0007
                  </Button>
                </motion.div>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                  {[
                    { icon: Clock, title: "Average Response", desc: "60-90 minutes" },
                    { icon: Shield, title: "IICRC Certified", desc: "Licensed & insured" },
                    { icon: FileText, title: "Insurance Billing", desc: "Direct billing available" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div
                        className="bg-white/20 p-2 rounded-lg"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                      >
                        <item.icon size={16} />
                      </motion.div>
                      <div>
                        <div className="text-xs text-white font-medium">{item.title}</div>
                        <div className="text-xs text-blue-200">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Winter Prep Checklist - Animated */}
              <motion.div
                className="bg-blue-50 rounded-[24px] p-6 border border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02, boxShadow: '0 15px 40px -10px rgba(26,115,232,0.2)' }}
              >
                <h4 className="font-medium text-blue-900 mb-4">Winter Prep Checklist</h4>
                <ul className="space-y-2 text-sm text-blue-900">
                  {[
                    "Maintain heat above 55°F always",
                    "Insulate pipes in crawlspaces/basements",
                    "Disconnect outdoor hoses by November",
                    "Let faucets drip when below 25°F",
                    "Seal crawlspace air leaks",
                    "Know location of main water shut-off"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div whileHover={{ scale: 1.2 }}>
                        <CheckCircle2 size={14} className="text-blue-600 mt-0.5 shrink-0" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Service Areas - Animated */}
              <motion.div
                className="bg-gray-50 rounded-[24px] p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02, boxShadow: '0 15px 40px -10px rgba(0,0,0,0.1)' }}
              >
                <h4 className="font-medium text-text mb-4">Northern Virginia Service Areas</h4>
                <div className="space-y-2 text-sm text-muted">
                  {["Fairfax County", "Arlington County", "Alexandria City", "Loudoun County", "Prince William County"].map((area, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                      whileHover={{ x: 4, color: '#1a73e8' }}
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                        <MapPin size={14} className="text-primary shrink-0" />
                      </motion.div>
                      {area}
                    </motion.div>
                  ))}
                  <motion.a
                    href="/locations/"
                    className="text-primary text-sm font-medium hover:underline mt-3 inline-flex items-center gap-1"
                    whileHover={{ x: 4 }}
                  >
                    View All Service Areas
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Related Resources - Animated */}
              <motion.div
                className="bg-white border border-gray-100 rounded-[24px] p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02, boxShadow: '0 15px 40px -10px rgba(0,0,0,0.1)' }}
              >
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  {[
                    { href: "/blog/burst-pipe-emergency-response/", label: "Burst Pipe Emergency Steps" },
                    { href: "/resources/emergency-checklists/", label: "Emergency Checklists" },
                    { href: "/resources/insurance-claims-guide/", label: "Insurance Claims Guide" },
                    { href: "/resources/water-damage-cost-guide/", label: "Water Damage Cost Guide" }
                  ].map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.href}
                      className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div whileHover={{ x: 4, scale: 1.1 }}>
                        <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                      </motion.div>
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom CTA Banner - Animated */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ x: [50, -50, 50], y: [30, -30, 30] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-medium text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Protect Your Northern Virginia Home This Winter
          </motion.h2>
          <motion.p
            className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Don't wait for the next Arctic blast. Our team provides 24/7 emergency response for frozen and burst pipes across Northern Virginia—typically arriving within 60-90 minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-primary border-none hover:bg-blue-50">
              <Phone size={20} className="mr-2" />
              Call 24/7: (877) 497-0007
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default FrozenBurstPipesGuide;
