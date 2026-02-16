import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  MapPin,
  AlertTriangle,
  Droplets,
  Wind,
  Zap,
  Flame,
  Shield,
  CheckCircle2,
  FileText,
  Wrench,
  Home,
  Battery,
  Heart,
  Users,
  Clock,
  Package,
  Flashlight,
  Radio,
  Smartphone,
  HardHat,
  Target,
  ArrowRight,
  Info,
  TrendingUp,
  DollarSign
} from 'lucide-react';

const EmergencyPreparednessNorthernVA: React.FC = () => {
  const faqs = [
    {
      question: "What natural disasters are most common in Northern Virginia?",
      answer: "Northern Virginia faces five primary natural disaster risks: flooding (most common, especially flash floods), severe thunderstorms with damaging winds, winter storms and ice, occasional tornadoes, and rare earthquakes. Flooding from the Potomac River, Occoquan Reservoir, and flash flooding from severe storms are the most frequent threats requiring emergency preparedness."
    },
    {
      question: "How do I create a family emergency plan?",
      answer: "A comprehensive family emergency plan includes: designated meeting locations (one near home, one outside neighborhood), out-of-state emergency contact, evacuation routes and destinations, special needs accommodations, pet care arrangements, important documents copies, communication plan if separated, and regular practice drills. Update annually and ensure all family members know the plan."
    },
    {
      question: "What should be in a 72-hour emergency kit?",
      answer: "Your kit should include: water (1 gallon/person/day for 3 days), non-perishable food, battery/hand-crank radio, flashlight and extra batteries, first aid kit, medications (7-day supply), important documents (waterproof container), cash, phone chargers/power banks, basic tools, and hygiene items. Customize for infants, elderly, pets, and medical needs."
    },
    {
      question: "Should I evacuate or shelter in place during a disaster?",
      answer: "This depends on the disaster type and official guidance. Evacuate immediately for: mandatory evacuation orders, nearby hazardous materials incidents, rapidly rising floodwater, or approaching wildfire. Shelter in place for: tornadoes, severe thunderstorms, winter storms, and some chemical releases. Always follow local emergency management directives and monitor emergency alerts."
    },
    {
      question: "How can I protect my home from flood damage?",
      answer: "Key flood protection measures: install sump pump with battery backup, grade soil away from foundation, seal basement walls and floors, install backflow preventer on sewer line, elevate utilities and appliances, clear gutters and downspouts, consider flood vents for crawl spaces, and purchase NFIP flood insurance (standard homeowners doesn't cover floods)."
    },
    {
      question: "What are Fairfax County's emergency notification systems?",
      answer: "Fairfax County uses multiple alert systems: Fairfax Alerts (opt-in for emergency notifications), Wireless Emergency Alerts (WEA - automatic to cell phones), Emergency Alert System (EAS - TV/radio), and social media (@fairfaxcounty). Register for Fairfax Alerts at fairfaxcounty.gov/alerts. Arlington and Loudoun counties have similar systems."
    },
    {
      question: "Where are emergency shelters located in Northern Virginia?",
      answer: "Emergency shelters are activated as needed during disasters and vary by location and event. Fairfax County uses public schools and community centers. Check county emergency management websites during events for current shelter locations. Pre-identify pet-friendly shelters (limited availability) and special needs shelters if required. Register in advance for special needs shelters."
    },
    {
      question: "How long does it take FEMA to respond after a disaster declaration?",
      answer: "After a Presidential Disaster Declaration, FEMA typically opens Disaster Recovery Centers within 3-7 days. Individual Assistance registration opens immediately at DisasterAssistance.gov or 1-800-621-3362. Inspections occur within 10 days of registration. Initial grant payments can take 2-4 weeks. However, full recovery assistance can take months. Don't wait for FEMA—begin emergency mitigation immediately and file insurance claims promptly."
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

  const regionalRisks = [
    {
      risk: "Flooding & Flash Floods",
      icon: Droplets,
      severity: "High",
      frequency: "Annual",
      areas: "Potomac River corridor, Occoquan Reservoir, Four Mile Run, Cameron Run, urban areas with poor drainage",
      season: "Year-round, peak spring/summer",
      description: "Northern Virginia experiences frequent flooding from heavy rainfall, river overflow, and poor urban drainage. Flash floods can occur within minutes during severe thunderstorms.",
      preparation: [
        "Purchase NFIP flood insurance (30-day waiting period)",
        "Know your FEMA flood zone at FEMA.gov/flood-maps",
        "Install sump pump with battery backup",
        "Keep important documents in waterproof container on upper floor",
        "Identify evacuation routes away from flood-prone areas"
      ]
    },
    {
      risk: "Severe Thunderstorms",
      icon: Wind,
      severity: "High",
      frequency: "10-15 events/year",
      areas: "All of Northern Virginia, especially Loudoun and Prince William counties",
      season: "April - September, peak July-August",
      description: "Severe thunderstorms bring damaging straight-line winds (60+ mph), large hail, lightning, and flash flooding. Power outages affecting thousands are common.",
      preparation: [
        "Trim trees and remove dead branches near structures",
        "Secure outdoor furniture, grills, and decorations",
        "Install whole-house surge protector",
        "Keep flashlights, battery radio, and power banks charged",
        "Identify interior room on lowest floor for shelter"
      ]
    },
    {
      risk: "Winter Storms & Ice",
      icon: AlertTriangle,
      severity: "Moderate-High",
      frequency: "2-4 major events/year",
      areas: "All of Northern Virginia, worse west/northwest (Loudoun, Fauquier)",
      season: "December - March",
      description: "Ice storms and heavy snow cause widespread power outages, impassable roads, frozen pipes, and roof damage. 2010 'Snowmageddon' and 2011 derecho remain cautionary examples.",
      preparation: [
        "Winterize home: insulate pipes, seal drafts, service heating system",
        "Stock 7-day supply of food, water, medications",
        "Purchase generator or backup power solution",
        "Keep rock salt, snow shovels, emergency supplies in vehicle",
        "Know how to shut off water main if pipes freeze"
      ]
    },
    {
      risk: "Tornadoes",
      icon: Wind,
      severity: "Moderate",
      frequency: "1-3 events/year (avg)",
      areas: "Most common in Loudoun, Prince William, Fauquier counties",
      season: "April - September",
      description: "Virginia averages 10-15 tornadoes per year, mostly EF0-EF1. Northern Virginia has experienced damaging tornadoes, including 2021 and 2023 events causing significant property damage.",
      preparation: [
        "Identify basement or interior room on lowest floor (no windows)",
        "Install weather radio with NOAA alerts",
        "Practice tornado drill with family",
        "Keep helmet, sturdy shoes, flashlight in shelter area",
        "Know difference between watch (conditions favorable) and warning (tornado spotted)"
      ]
    },
    {
      risk: "Power Outages",
      icon: Zap,
      severity: "Moderate",
      frequency: "Multiple times/year",
      areas: "All of Northern Virginia, especially tree-dense suburban areas",
      season: "Year-round, peak summer storms and winter ice",
      description: "Extended power outages from storms, trees on lines, and aging infrastructure affect tens of thousands annually. Outages lasting 24-72 hours are common after severe weather.",
      preparation: [
        "Purchase generator (whole-house or portable) with transfer switch",
        "Stock manual can opener, battery-powered fans, board games",
        "Fill bathtub with water before storms for flushing toilets",
        "Keep car gas tank above half (gas pumps require power)",
        "Preserve refrigerated medications with ice packs/coolers"
      ]
    },
    {
      risk: "Extreme Heat",
      icon: Flame,
      severity: "Moderate",
      frequency: "5-10 days >95°F/year",
      areas: "Urban heat islands: Arlington, Alexandria, Fairfax City",
      season: "June - September",
      description: "Heat waves with temperatures exceeding 95°F and high humidity create dangerous conditions, especially for elderly, children, and those without AC.",
      preparation: [
        "Ensure AC maintained and serviced before summer",
        "Identify cooling centers in your area",
        "Check on elderly neighbors during heat events",
        "Never leave children or pets in vehicles",
        "Stay hydrated and limit outdoor activity during peak heat"
      ]
    }
  ];

  const emergencyKit = [
    {
      category: "Water & Food",
      icon: Droplets,
      items: [
        "1 gallon water per person per day (3-day minimum)",
        "Non-perishable food (canned goods, energy bars, dried fruit)",
        "Manual can opener",
        "Baby formula and food if needed",
        "Pet food and water"
      ]
    },
    {
      category: "Power & Communication",
      icon: Battery,
      items: [
        "Battery or hand-crank radio (NOAA weather radio)",
        "Flashlights (one per person)",
        "Extra batteries (AA, AAA, D)",
        "Phone chargers and power banks (fully charged)",
        "Backup phone battery or solar charger"
      ]
    },
    {
      category: "First Aid & Medications",
      icon: Heart,
      items: [
        "First aid kit (bandages, antiseptic, gauze, tape)",
        "Prescription medications (7-day supply minimum)",
        "Over-the-counter medications (pain relievers, anti-diarrheal)",
        "Medical devices and supplies (glasses, hearing aids, insulin)",
        "Emergency contact list and medical information cards"
      ]
    },
    {
      category: "Tools & Supplies",
      icon: Wrench,
      items: [
        "Multi-tool or Swiss Army knife",
        "Duct tape and plastic sheeting",
        "Wrench or pliers (to turn off utilities)",
        "Local maps (GPS may not work)",
        "Whistle for signaling help"
      ]
    },
    {
      category: "Documents & Money",
      icon: FileText,
      items: [
        "Important documents in waterproof container (insurance policies, IDs, bank records)",
        "Cash (ATMs may not work during outages)",
        "Emergency contact information",
        "Copies of credit cards and important documents",
        "Property deed and home inventory photos"
      ]
    },
    {
      category: "Personal Items",
      icon: Users,
      items: [
        "Change of clothing and sturdy shoes per person",
        "Sleeping bags or blankets",
        "Personal hygiene items (soap, toothbrush, feminine supplies)",
        "N95 masks (disaster debris and air quality)",
        "Special needs items (infant supplies, disability accommodations)"
      ]
    }
  ];

  const homePreparedness = [
    {
      system: "Plumbing & Water",
      icon: Droplets,
      actions: [
        "Know location of main water shutoff valve",
        "Install water leak detection system with automatic shutoff",
        "Insulate pipes in unheated areas (attic, garage, crawl space)",
        "Install sump pump with battery backup and test quarterly",
        "Clear gutters and downspouts seasonally",
        "Install backflow preventer on sewer line"
      ],
      cost: "$500 - $2,500 for comprehensive upgrades"
    },
    {
      system: "Electrical & Power",
      icon: Zap,
      actions: [
        "Know location of main electrical panel and how to shut off power",
        "Install whole-house surge protector ($300-500)",
        "Consider generator (portable $500-1,500; whole-house $3,000-10,000)",
        "Test GFCI outlets monthly",
        "Keep flashlights in every room (avoid candles during outages)",
        "Charge power banks before predicted storms"
      ],
      cost: "$50 - $10,000 depending on solutions"
    },
    {
      system: "Structure & Exterior",
      icon: Home,
      actions: [
        "Trim trees and remove dead branches within 10 feet of home",
        "Inspect and repair roof annually (before storm season)",
        "Seal windows and doors; replace worn weather stripping",
        "Secure outdoor items (furniture, grills, trash cans) before storms",
        "Grade soil away from foundation (6-inch drop over 10 feet)",
        "Inspect chimney and fireplace annually"
      ],
      cost: "$200 - $5,000 for preventive maintenance"
    },
    {
      system: "HVAC & Heating",
      icon: Wind,
      actions: [
        "Service HVAC system annually (spring for AC, fall for heat)",
        "Replace HVAC filters every 1-3 months",
        "Know how to manually operate furnace if needed",
        "Install carbon monoxide detectors (one per floor)",
        "Have alternative heat source for winter outages (fireplace, kerosene heater)",
        "Never use gas oven or generator indoors (CO poisoning)"
      ],
      cost: "$100 - $500 annually for maintenance"
    }
  ];

  const localResources = [
    {
      county: "Fairfax County",
      emergency: "703-691-2131 (non-emergency)",
      alerts: "fairfaxcounty.gov/alerts",
      management: "fairfaxcounty.gov/emergencymanagement",
      utilities: "Dominion Energy: 1-866-366-4357"
    },
    {
      county: "Arlington County",
      emergency: "703-228-5050 (non-emergency)",
      alerts: "arlingtonva.us/subscribe",
      management: "arlingtonva.us/emergency",
      utilities: "Dominion Energy: 1-866-366-4357"
    },
    {
      county: "Loudoun County",
      emergency: "703-777-1021 (non-emergency)",
      alerts: "loudoun.gov/alert",
      management: "loudoun.gov/fire",
      utilities: "Dominion Energy: 1-866-366-4357"
    },
    {
      county: "Prince William County",
      emergency: "703-792-6500 (non-emergency)",
      alerts: "pwcva.gov/codered",
      management: "pwcva.gov/emergencymanagement",
      utilities: "Dominion Energy: 1-866-366-4357"
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Emergency Preparedness Guide"
        description="Comprehensive disaster preparedness guide for Northern Virginia. Regional risks, emergency kits, evacuation planning, and local resources for Fairfax, Arlington, Loudoun, and Prince William."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Emergency Preparedness Northern Virginia', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} /> Northern Virginia Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Emergency Preparedness Guide for Northern Virginia Homeowners
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              From Potomac River flooding to winter ice storms, Northern Virginia faces unique disaster risks. This comprehensive guide helps you prepare your home, family, and finances for emergencies specific to our region.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Call (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg">
                Emergency Services
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
              Why Emergency Preparedness Matters in Northern Virginia
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Northern Virginia's unique geography—proximity to the Potomac River, dense urban development, and variable terrain—creates specific disaster vulnerabilities. Flooding affects thousands of homes annually. Severe thunderstorms cause widespread power outages. Winter storms paralyze transportation and infrastructure.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Emergency preparedness isn't about paranoia; it's about readiness. FEMA estimates that 60% of American households don't have emergency plans or supplies. Yet disasters don't wait for convenience. Having a plan, supplies, and knowledge can mean the difference between minor inconvenience and catastrophic loss.
            </p>
            <p className="text-muted leading-relaxed">
              This guide provides actionable, region-specific preparedness strategies for Northern Virginia homeowners in Fairfax, Arlington, Loudoun, Prince William, and surrounding areas.
            </p>
          </div>
        </section>

        {/* Regional Risk Assessment */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              Northern Virginia's Primary Disaster Risks
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Understanding regional risks is the first step in emergency preparedness.
            </p>
          </div>

          <div className="space-y-8">
            {regionalRisks.map((risk, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500 text-white flex items-center justify-center shrink-0">
                    <risk.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="font-display text-2xl font-medium text-text">{risk.risk}</h3>
                      <div className="flex gap-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          risk.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {risk.severity} Severity
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {risk.frequency}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted mb-4">{risk.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                  <div>
                    <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                      <MapPin size={12} />
                      High-Risk Areas
                    </div>
                    <div className="text-gray-700">{risk.areas}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                      <Clock size={12} />
                      Peak Season
                    </div>
                    <div className="text-gray-700">{risk.season}</div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-3 flex items-center gap-2">
                    <Shield size={16} />
                    Preparation Actions
                  </h4>
                  <ul className="space-y-2">
                    {risk.preparation.map((action, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Kit */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-4 text-center">
            Build Your 72-Hour Emergency Kit
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto text-center mb-12">
            Every household should have supplies to sustain 72 hours without utilities or outside assistance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyKit.map((category, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <category.icon size={24} />
                  </div>
                  <h3 className="font-medium text-text">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-medium text-amber-900 mb-2">Kit Storage & Maintenance</h4>
                <p className="text-sm text-amber-800">
                  Store your kit in an easily accessible location known to all family members. Check every 6 months: rotate food/water, replace expired medications, update documents, refresh batteries, and adjust for seasonal needs (add hand warmers in winter, cooling items in summer).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Home Preparedness */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-8 text-center">
            Home Systems Preparedness Checklist
          </h2>

          <div className="space-y-6">
            {homePreparedness.map((system, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center shrink-0">
                    <system.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="font-medium text-text text-lg">{system.system}</h3>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        <DollarSign size={12} />
                        {system.cost}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                      {system.actions.map((action, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <ArrowRight size={14} className="text-primary mt-0.5 shrink-0" />
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Family Emergency Plan */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="font-display text-3xl font-medium mb-4 flex items-center gap-3">
                <Users size={32} />
                Create Your Family Emergency Plan
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                A written plan ensures everyone knows what to do when disaster strikes.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Communication Plan",
                    items: [
                      "Designate out-of-state emergency contact (local lines may be down)",
                      "Program ICE (In Case of Emergency) contacts in phones",
                      "Establish check-in procedures if separated",
                      "Share work/school emergency protocols",
                      "Know how to text (texts often work when calls don't)"
                    ]
                  },
                  {
                    title: "Meeting Locations",
                    items: [
                      "Primary: specific location near home (neighbor's house, landmark)",
                      "Secondary: outside neighborhood (library, community center, school)",
                      "Ensure all family members can find locations from memory",
                      "Account for different disaster scenarios (fire vs. flood)",
                      "Practice routes to meeting locations"
                    ]
                  },
                  {
                    title: "Evacuation Planning",
                    items: [
                      "Identify multiple evacuation routes from home and neighborhood",
                      "Designate evacuation destination (friend/family >50 miles away)",
                      "Create go-bag for each family member (ready in 15 minutes)",
                      "Plan for pets (most shelters don't allow pets)",
                      "Keep vehicle gas tank above half during storm season"
                    ]
                  },
                  {
                    title: "Special Considerations",
                    items: [
                      "Infants: extra formula, diapers, comfort items",
                      "Elderly: medications, mobility aids, medical records",
                      "Disabilities: accommodations, assistive devices, caregiver plan",
                      "Pets: carriers, food, medications, vet records, photos (for lost pet recovery)",
                      "Non-English speakers: translated emergency information"
                    ]
                  }
                ].map((section, i) => (
                  <div key={i} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="font-bold mb-3 text-blue-100">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-200">
                          <CheckCircle2 size={14} className="text-blue-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-500/20 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-bold mb-2 text-blue-100">Practice Your Plan</h4>
                <p className="text-sm text-gray-200">
                  Conduct family emergency drills twice per year. Practice evacuation routes, meeting locations, and communication procedures. Update plan annually or after major life changes (new baby, elderly parent moves in, address change).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Resources */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-8 text-center">
            Northern Virginia Emergency Resources
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {localResources.map((resource, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="font-medium text-text text-lg mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  {resource.county}
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500">Non-Emergency Line</div>
                    <a href={`tel:${resource.emergency.replace(/\D/g,'')}`} className="text-sm font-medium text-primary hover:underline">
                      {resource.emergency}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Emergency Alerts</div>
                    <a href={`https://${resource.alerts}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                      {resource.alerts}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Emergency Management</div>
                    <a href={`https://${resource.management}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                      {resource.management}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Utility Outages</div>
                    <div className="text-sm text-gray-700">{resource.utilities}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="font-medium text-text mb-2 flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                Statewide Resources
              </h4>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="text-xs text-gray-500">VA Emergency Management</div>
                  <a href="https://vaemergency.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    vaemergency.gov
                  </a>
                </div>
                <div>
                  <div className="text-xs text-gray-500">VA 511 Traffic</div>
                  <a href="tel:511" className="text-primary hover:underline">511</a> or <a href="https://511virginia.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">511virginia.org</a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="font-medium text-text mb-2 flex items-center gap-2">
                <Shield size={18} className="text-primary" />
                Federal Resources
              </h4>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="text-xs text-gray-500">FEMA Assistance</div>
                  <a href="https://disasterassistance.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    DisasterAssistance.gov
                  </a>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Red Cross Shelters</div>
                  <a href="tel:18007332767" className="text-primary hover:underline">1-800-733-2767</a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="font-medium text-text mb-2 flex items-center gap-2">
                <Zap size={18} className="text-primary" />
                Utilities
              </h4>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="text-xs text-gray-500">Dominion Energy</div>
                  <a href="tel:18663664357" className="text-primary hover:underline">1-866-366-4357</a>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Washington Gas</div>
                  <a href="tel:18007526633" className="text-primary hover:underline">1-800-752-6633</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <GoogleStyleFAQ
            data={faqs}
            title="Emergency Preparedness FAQ"
            className="border-none p-0"
          />
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Emergency Water Damage? We Respond 24/7
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            When disaster strikes, Flood Doctor provides rapid emergency response throughout Northern Virginia. Call now for immediate assistance.
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

export default EmergencyPreparednessNorthernVA;
