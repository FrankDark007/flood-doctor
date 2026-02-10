import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Shield,
  Home,
  Waves,
  Droplets,
  TrendingUp,
  CheckCircle2,
  XCircle,
  DollarSign,
  Clock,
  AlertTriangle,
  Wrench,
  Activity,
  ArrowRight,
  Target,
  Wind
} from 'lucide-react';

const HomeWaterproofingGuide: React.FC = () => {
  const faqs = [
    {
      question: "What's the difference between interior and exterior waterproofing?",
      answer: "Interior waterproofing manages water that has already entered the foundation, using drainage systems (French drains, sump pumps) and vapor barriers to redirect it away from living spaces. Exterior waterproofing prevents water from entering in the first place by sealing the foundation exterior, improving drainage, and managing surface water. Exterior is more effective but also more expensive and disruptive since it requires excavation."
    },
    {
      question: "How much does basement waterproofing cost in Northern Virginia?",
      answer: "Interior waterproofing (drainage system + sump pump) typically costs $3,000-$8,000 for an average basement. Exterior excavation and waterproofing costs $8,000-$15,000+. Crawl space encapsulation runs $5,000-$15,000 depending on size and condition. Minor fixes like crack sealing or exterior grading may cost $500-$2,000. Costs vary based on foundation type, soil conditions, and accessibility."
    },
    {
      question: "Is crawl space encapsulation worth the cost?",
      answer: "Yes, especially in Northern Virginia's humid climate. Encapsulation prevents moisture intrusion that causes mold, wood rot, pest infestations, and HVAC inefficiency. Benefits include: lower energy costs (10-20% savings), improved air quality, mold prevention, and increased home value. Most homeowners see ROI within 5-7 years through energy savings alone, plus avoiding $5,000-$20,000 in future structural repairs."
    },
    {
      question: "Do I need a French drain or a sump pump?",
      answer: "Most effective basement waterproofing systems use both. French drains (interior or exterior perforated pipes) collect groundwater around the foundation and channel it to a collection point. The sump pump then removes the collected water away from the house. French drains alone can work if you have sufficient natural drainage slope, but a sump pump provides insurance against heavy rain and power backup systems prevent flooding during outages."
    },
    {
      question: "How do I know if my foundation needs waterproofing?",
      answer: "Key warning signs: recurring basement dampness or flooding, water stains on walls/floors, musty odors, efflorescence (white mineral deposits) on concrete, visible cracks in foundation, mold growth, high humidity (above 60%), and standing water after rain. In Northern Virginia, homes with basements in clay soil areas (common in Fairfax, Arlington, Loudoun) are especially vulnerable. Even homes without current issues benefit from preventive waterproofing."
    },
    {
      question: "Will waterproofing stop all basement flooding?",
      answer: "Properly installed waterproofing dramatically reduces flooding risk but can't guarantee 100% protection against extreme events (sewage backups, 100-year floods, plumbing failures). A comprehensive system with redundancy (interior drainage + exterior sealing + battery backup sump pump + backwater valve) provides the highest protection. Most systems come with transferable warranties (10-25 years) covering water intrusion."
    },
    {
      question: "Can I waterproof my basement myself?",
      answer: "Minor tasks (sealing small cracks, improving gutters/grading, applying interior sealants) are DIY-friendly. However, comprehensive waterproofing—installing French drains, excavating for exterior sealing, encapsulating crawl spaces—requires specialized equipment, expertise, and permits. Improper installation can worsen problems and void future insurance claims. Professional installation includes warranties and proper drainage calculations based on soil type and water table."
    },
    {
      question: "How long does waterproofing last?",
      answer: "Exterior waterproofing membranes last 10-15+ years; modern elastomeric coatings can last 20-30 years. Interior French drains and sump pumps last 15-25+ years with proper maintenance. Crawl space encapsulation (vapor barriers) lasts 20+ years. Sump pumps should be inspected annually and replaced every 7-10 years. Most professional systems include warranties: 10-year limited warranties are standard, while premium systems offer lifetime transferable warranties."
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

  const interiorVsExterior = [
    {
      type: "Interior Waterproofing",
      icon: Home,
      color: "blue",
      methods: [
        "Interior French drain system",
        "Sump pump installation",
        "Vapor barriers on walls/floors",
        "Interior crack injection",
        "Dehumidification systems"
      ],
      pros: [
        "Less expensive ($3,000-$8,000)",
        "No exterior excavation required",
        "Faster installation (1-3 days)",
        "Less landscape disruption",
        "Works year-round"
      ],
      cons: [
        "Manages water, doesn't prevent entry",
        "Doesn't protect foundation exterior",
        "Ongoing sump pump maintenance",
        "Won't solve exterior structural issues",
        "Relies on mechanical systems"
      ],
      bestFor: "Active leaks, budget constraints, winter emergencies, homes with limited exterior access"
    },
    {
      type: "Exterior Waterproofing",
      icon: Shield,
      color: "green",
      methods: [
        "Foundation excavation",
        "Waterproof membrane application",
        "Exterior French drain (footer drain)",
        "Foundation crack repair",
        "Drainage board installation"
      ],
      pros: [
        "Prevents water from entering",
        "Protects foundation long-term",
        "Addresses exterior cracks/damage",
        "Lasts 20-30+ years",
        "No interior space loss"
      ],
      cons: [
        "Expensive ($8,000-$15,000+)",
        "Requires major excavation",
        "Landscape disruption",
        "Weather-dependent installation",
        "Takes 5-10 days"
      ],
      bestFor: "New construction, major foundation issues, preventive protection, homes with chronic problems"
    }
  ];

  const waterproofingSolutions = [
    {
      icon: Waves,
      title: "Foundation Waterproofing",
      description: "External or internal membrane systems that create a moisture barrier on foundation walls.",
      methods: [
        "Elastomeric exterior coatings",
        "Bentonite clay waterproofing",
        "Rubberized asphalt membranes",
        "Cementitious waterproofing"
      ],
      cost: "$8,000-$15,000 (exterior), $2,000-$5,000 (interior)",
      lifespan: "20-30 years (exterior), 10-15 years (interior)",
      maintenance: "Minimal; inspect after major weather events"
    },
    {
      icon: Droplets,
      title: "Basement Drainage Systems",
      description: "Interior or exterior French drains that collect and redirect groundwater away from the foundation.",
      methods: [
        "Interior perimeter drain (along footer)",
        "Exterior footer drain",
        "Sump pump basin and discharge",
        "Battery backup sump pump"
      ],
      cost: "$3,000-$8,000 (interior), $5,000-$12,000 (exterior)",
      lifespan: "15-25+ years (drains), 7-10 years (pump)",
      maintenance: "Annual sump pump test; check discharge line"
    },
    {
      icon: Wind,
      title: "Crawl Space Encapsulation",
      description: "Complete moisture control system using vapor barriers, dehumidification, and sealed vents.",
      methods: [
        "6-20 mil vapor barrier installation",
        "Vent sealing and insulation",
        "Dehumidifier system",
        "Drainage matting under barrier"
      ],
      cost: "$5,000-$15,000 (varies by sq ft and condition)",
      lifespan: "20+ years (barrier), 10-15 years (dehumidifier)",
      maintenance: "Change dehumidifier filter; annual inspection"
    },
    {
      icon: TrendingUp,
      title: "Grading & Landscape Drainage",
      description: "Surface water management through proper slope, gutters, and drainage features.",
      methods: [
        "Soil regrading (6\" drop per 10 ft)",
        "Extended downspout systems",
        "Dry wells and catch basins",
        "Channel drains and swales"
      ],
      cost: "$500-$3,000 (grading), $1,000-$5,000 (drainage features)",
      lifespan: "5-10 years (may need regrading); 20+ years (hardscape)",
      maintenance: "Clean gutters quarterly; check slope annually"
    }
  ];

  const costComparison = [
    { solution: "Exterior Foundation Sealing", range: "$8,000-$15,000+", perFoot: "$80-$150/linear ft", ideal: "Chronic foundation water issues" },
    { solution: "Interior French Drain + Sump Pump", range: "$3,000-$8,000", perFoot: "$50-$80/linear ft", ideal: "Active basement seepage" },
    { solution: "Crawl Space Encapsulation", range: "$5,000-$15,000", perFoot: "$3-$7/sq ft", ideal: "Moisture, mold, energy loss" },
    { solution: "Exterior Grading & Drainage", range: "$1,500-$5,000", perFoot: "varies", ideal: "Surface water pooling near home" },
    { solution: "Crack Injection (Epoxy/Polyurethane)", range: "$400-$1,500", perFoot: "$300-$600/crack", ideal: "Isolated foundation cracks" },
    { solution: "Exterior Drainage (French Drain)", range: "$5,000-$12,000", perFoot: "$50-$100/linear ft", ideal: "High water table or slope issues" }
  ];

  const maintenanceSchedule = [
    {
      frequency: "Monthly",
      tasks: [
        "Test sump pump (pour water in basin)",
        "Check for new cracks or moisture signs",
        "Inspect crawl space dehumidifier operation"
      ]
    },
    {
      frequency: "Quarterly",
      tasks: [
        "Clean gutters and downspouts",
        "Check sump pump discharge line",
        "Inspect exterior grading for settling"
      ]
    },
    {
      frequency: "Annually",
      tasks: [
        "Professional sump pump inspection",
        "Dehumidifier filter replacement",
        "Foundation crack inspection",
        "Test battery backup sump pump",
        "Check vapor barrier condition (crawl space)"
      ]
    },
    {
      frequency: "Every 5-10 Years",
      tasks: [
        "Replace sump pump (avg 7-10 year lifespan)",
        "Regrade soil if settling occurs",
        "Inspect exterior membrane (if accessible)",
        "Update drainage systems as needed"
      ]
    }
  ];

  const northernVAConsiderations = [
    {
      title: "Clay Soil Challenges",
      description: "Northern Virginia's expansive clay soil (common in Fairfax, Arlington, Loudoun counties) swells when wet and shrinks when dry, creating foundation movement and cracks. Requires exterior drainage and possibly foundation underpinning in severe cases.",
      icon: Target
    },
    {
      title: "High Water Table Areas",
      description: "Properties near the Potomac River, Four Mile Run, and other waterways often have high seasonal water tables. Requires robust interior drainage systems with battery backup sump pumps and possible exterior footer drains.",
      icon: Waves
    },
    {
      title: "Freeze-Thaw Cycles",
      description: "Northern VA experiences 20-40 freeze-thaw cycles per winter, which widens foundation cracks and damages exterior waterproofing. Use flexible sealants and membranes rated for thermal cycling.",
      icon: Activity
    },
    {
      title: "Severe Weather Events",
      description: "Area experiences intense summer thunderstorms (3-6 inches/hour possible) and occasional hurricanes. Waterproofing systems should handle 2-3 inches of rain per hour; include overflow protection and backwater valves.",
      icon: AlertTriangle
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Complete Home Waterproofing Guide for Northern Virginia Homeowners"
        description="Comprehensive guide to basement waterproofing, crawl space encapsulation, foundation sealing, and drainage solutions. Costs, methods, and maintenance for Northern VA homes."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Home Waterproofing Guide', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> Comprehensive Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Complete Home Waterproofing Guide for Northern Virginia
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Protect your home from water damage with the right waterproofing methods. Compare interior vs. exterior solutions, basement drainage systems, crawl space encapsulation, and landscape drainage—with costs and maintenance requirements specific to Northern Virginia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Free Consultation
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

            {/* Interior vs Exterior */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Interior vs. Exterior Waterproofing
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Understanding the fundamental difference between these approaches helps you choose the right solution for your home.
              </p>

              <div className="space-y-8">
                {interiorVsExterior.map((method, i) => (
                  <div key={i} className={`rounded-3xl border-2 p-8 ${
                    method.color === 'blue' ? 'border-blue-200 bg-blue-50/30' : 'border-green-200 bg-green-50/30'
                  }`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        method.color === 'blue' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                      }`}>
                        <method.icon size={28} />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-medium text-text">{method.type}</h3>
                        <p className="text-sm text-muted">Best for: {method.bestFor}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium text-text mb-3 text-sm uppercase tracking-wide">Methods</h4>
                        <ul className="space-y-2">
                          {method.methods.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                              <Wrench size={14} className={`mt-0.5 shrink-0 ${method.color === 'blue' ? 'text-blue-500' : 'text-green-500'}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-text mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-green-600" /> Advantages
                        </h4>
                        <ul className="space-y-2">
                          {method.pros.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-text mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                          <XCircle size={14} className="text-orange-600" /> Limitations
                        </h4>
                        <ul className="space-y-2">
                          {method.cons.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Waterproofing Solutions */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Waterproofing Solutions & Methods
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Detailed breakdown of the most effective waterproofing methods, with costs and expected lifespan.
              </p>

              <div className="space-y-6">
                {waterproofingSolutions.map((solution, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        <solution.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-text text-lg mb-2">{solution.title}</h3>
                        <p className="text-sm text-muted mb-4">{solution.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Common Methods</div>
                        <ul className="space-y-1">
                          {solution.methods.map((method, j) => (
                            <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                              {method}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted flex items-center gap-2">
                            <DollarSign size={14} className="text-green-600" />
                            Typical Cost
                          </span>
                          <span className="text-sm font-medium text-text">{solution.cost}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted flex items-center gap-2">
                            <Clock size={14} className="text-blue-600" />
                            Lifespan
                          </span>
                          <span className="text-sm font-medium text-text">{solution.lifespan}</span>
                        </div>
                        <div className="flex items-start justify-between">
                          <span className="text-sm text-muted flex items-center gap-2">
                            <Wrench size={14} className="text-orange-600" />
                            Maintenance
                          </span>
                          <span className="text-sm font-medium text-text text-right max-w-[60%]">{solution.maintenance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cost Comparison */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Waterproofing Cost Comparison (Northern VA)
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Typical costs for waterproofing solutions in Northern Virginia. Actual costs vary based on foundation type, accessibility, and soil conditions.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text">Solution</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text">Total Range</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text">Per Unit</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text">Ideal For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {costComparison.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-4 text-sm font-medium text-text">{item.solution}</td>
                        <td className="px-4 py-4 text-sm text-green-700 font-medium">{item.range}</td>
                        <td className="px-4 py-4 text-sm text-gray-600">{item.perFoot}</td>
                        <td className="px-4 py-4 text-sm text-muted">{item.ideal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> Costs include labor, materials, and permits. Many companies offer free inspections and quotes. Financing options available for projects over $3,000. Insurance may cover waterproofing if related to covered water damage event.
                </p>
              </div>
            </section>

            {/* Northern VA Considerations */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Northern Virginia Specific Considerations
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Unique challenges in the Northern Virginia region that impact waterproofing decisions.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {northernVAConsiderations.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                        <item.icon size={20} />
                      </div>
                      <h3 className="font-medium text-text">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Maintenance */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Waterproofing Maintenance Schedule
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Regular maintenance extends system lifespan and ensures continued protection.
              </p>

              <div className="space-y-4">
                {maintenanceSchedule.map((schedule, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center">
                        <Clock size={20} />
                      </div>
                      <h3 className="font-medium text-text">{schedule.frequency}</h3>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {schedule.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 size={14} className="text-blue-400 mt-0.5 shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* When to Call Professionals */}
            <section className="mb-24">
              <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-medium text-red-900 mb-2">
                      When to Call Professional Waterproofing Contractors
                    </h2>
                    <p className="text-red-800">
                      These situations require professional assessment and installation for effective, long-lasting results.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Recurring basement flooding or seepage",
                    "Multiple foundation cracks (>1/4\" wide)",
                    "Standing water after every rain",
                    "Visible bowing or shifting in foundation",
                    "Musty odors or active mold growth",
                    "Water entering from multiple locations",
                    "Sump pump running constantly",
                    "Hydrostatic pressure (water pushing through floors)",
                    "Pre-sale home inspection issues",
                    "New construction waterproofing"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-red-900 bg-white/50 p-3 rounded-lg">
                      <AlertTriangle size={14} className="text-red-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Home Waterproofing FAQ"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* CTA Card */}
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-google overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <div className="flex items-center gap-2 mb-4">
                  <Shield size={20} />
                  <span className="text-sm font-medium">Expert Consultation</span>
                </div>

                <h3 className="font-display text-xl font-medium mb-4 relative z-10">
                  Free Waterproofing Assessment
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Not sure which waterproofing solution is right for your home? We provide free on-site assessments with moisture testing and customized recommendations.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>

              {/* Quick Cost Reference */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4 flex items-center gap-2">
                  <DollarSign size={18} className="text-green-600" />
                  Average Costs (Northern VA)
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Interior drainage</span>
                    <span className="font-medium text-text">$3K-$8K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Exterior excavation</span>
                    <span className="font-medium text-text">$8K-$15K+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Crawl encapsulation</span>
                    <span className="font-medium text-text">$5K-$15K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Grading/drainage</span>
                    <span className="font-medium text-text">$1.5K-$5K</span>
                  </div>
                </div>
              </div>

              {/* What We Offer */}
              <div className="bg-blue-50 rounded-[24px] p-6 border border-blue-100">
                <h4 className="font-medium text-text mb-4">Flood Doctor Waterproofing Services</h4>
                <ul className="space-y-3">
                  {[
                    "Free on-site moisture assessment",
                    "Interior & exterior waterproofing",
                    "Crawl space encapsulation",
                    "Sump pump installation & backup systems",
                    "Foundation crack repair",
                    "Lifetime transferable warranties"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-900">
                      <CheckCircle2 size={14} className="text-blue-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/resources/signs-of-water-damage/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Signs of Water Damage
                  </a>
                  <a href="/resources/mold-prevention-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Mold Prevention Guide
                  </a>
                  <a href="/resources/water-damage-cost-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Water Damage Cost Guide
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Protect Your Northern Virginia Home from Water Damage
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a free waterproofing assessment and customized solution for your home. We serve all of Northern Virginia with professional waterproofing services.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-blue-700 border-none hover:bg-blue-50">
            <Phone size={20} className="mr-2" />
            Schedule Free Assessment
          </Button>
        </div>
      </div>
    </main>
  );
};

export default HomeWaterproofingGuide;
