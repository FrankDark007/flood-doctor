import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  DollarSign,
  Scale,
  Building2,
  Flame,
  Wind,
  Droplets,
  MapPin,
  Users,
  ArrowRight,
  BookOpen,
  Info
} from 'lucide-react';

const VirginiaInsuranceGuide: React.FC = () => {
  const faqs = [
    {
      question: "Does Virginia require flood insurance?",
      answer: "Virginia does not require flood insurance statewide. However, if your home is in a FEMA-designated high-risk flood zone (A or V zones) and you have a federally backed mortgage, your lender will require National Flood Insurance Program (NFIP) coverage. Even outside high-risk zones, flooding is the #1 natural disaster nationwide, and flood insurance is highly recommended."
    },
    {
      question: "What is the difference between flood insurance and homeowners insurance?",
      answer: "Homeowners insurance covers sudden, accidental water damage from internal sources (burst pipes, appliance failures, storm roof leaks). Flood insurance covers rising water from external sources like rivers, heavy rain, storm surge, and snowmelt. Standard homeowners policies specifically exclude flood damage, requiring separate NFIP or private flood coverage."
    },
    {
      question: "How long does it take to file a disaster insurance claim in Virginia?",
      answer: "You should report damage to your insurance company within 24-48 hours. The adjuster typically inspects within 3-7 days. Initial claim settlements average 30-60 days, though complex claims can take 90+ days. FEMA Individual Assistance (if declared) can take several weeks to months for approval and payment."
    },
    {
      question: "What disasters are covered by Virginia homeowners insurance?",
      answer: "Most Virginia homeowners policies cover windstorm damage, hail, lightning, fire, theft, and sudden water damage from internal sources. Typically excluded: flood, earthquake (requires endorsement), sewer backup (requires endorsement), gradual damage, and maintenance-related issues. Review your declarations page for specifics."
    },
    {
      question: "Does Virginia law protect homeowners during insurance claims?",
      answer: "Yes. Virginia Code § 38.2-510 prohibits unfair claim settlement practices. The State Corporation Commission's Bureau of Insurance handles complaints. Virginia follows the 'valued policy law' for total losses and requires insurers to act in good faith. You have the right to hire a public adjuster or attorney if your claim is denied or undervalued."
    },
    {
      question: "Can my insurance company cancel my policy after a claim in Virginia?",
      answer: "In Virginia, insurers cannot cancel your policy mid-term except for non-payment, fraud, or material misrepresentation. However, they can choose not to renew your policy at the end of the term. Filing one claim rarely triggers non-renewal, but multiple claims within 3-5 years may increase premiums or lead to non-renewal."
    },
    {
      question: "What is the Virginia Property Insurance Association (VPIA)?",
      answer: "The VPIA is Virginia's insurer of last resort for coastal properties that cannot obtain coverage in the private market. It provides wind and hail coverage for properties in designated coastal areas. VPIA is more expensive than standard insurance and has higher deductibles, but ensures availability for high-risk coastal properties."
    },
    {
      question: "How do I qualify for FEMA Individual Assistance in Virginia?",
      answer: "FEMA Individual Assistance is only available after a Presidential Disaster Declaration. To qualify, you must: 1) Live in a declared disaster county, 2) Have uninsured or underinsured losses, 3) Register with FEMA within 60 days of declaration, and 4) Pass income/asset verification. FEMA assistance is a grant (not repaid) for essential needs, but does not cover all losses."
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

  const commonDisasters = [
    {
      icon: Wind,
      name: "Hurricanes & Tropical Storms",
      description: "Coastal Virginia faces hurricane risk June-November. Wind, storm surge, and flooding damage homes.",
      coverage: "Wind damage typically covered; flood requires separate policy",
      avgCost: "$8,000 - $50,000+",
      preparedness: "Hurricane shutters, backup power, evacuation plan"
    },
    {
      icon: Droplets,
      name: "Flooding & Flash Floods",
      description: "Northern Virginia's proximity to rivers and heavy rainfall create significant flood risk year-round.",
      coverage: "Requires NFIP or private flood insurance; not covered by homeowners",
      avgCost: "$15,000 - $100,000+",
      preparedness: "Sump pumps, backflow valves, elevation certificates"
    },
    {
      icon: Flame,
      name: "Fire & Wildfire",
      description: "Residential fires and rural wildfires cause extensive property damage and total losses.",
      coverage: "Fully covered by standard homeowners insurance",
      avgCost: "$20,000 - $200,000+",
      preparedness: "Smoke detectors, fire extinguishers, defensible space"
    },
    {
      icon: AlertTriangle,
      name: "Severe Thunderstorms",
      description: "Lightning strikes, hail, and high winds damage roofs, siding, and electrical systems.",
      coverage: "Covered under standard homeowners policies",
      avgCost: "$5,000 - $25,000",
      preparedness: "Trim trees, secure outdoor items, surge protectors"
    },
    {
      icon: Building2,
      name: "Winter Storms & Freezing",
      description: "Ice dams, frozen pipes, and roof collapse from snow load cause major winter damage.",
      coverage: "Sudden pipe bursts covered; gradual damage from ice dams often disputed",
      avgCost: "$3,000 - $20,000",
      preparedness: "Pipe insulation, roof raking, heat tape"
    },
    {
      icon: Shield,
      name: "Sewer & Water Backup",
      description: "Combined sewer systems in older Northern Virginia neighborhoods risk backup during heavy rain.",
      coverage: "Requires optional endorsement (typically $5,000-$10,000 limit)",
      avgCost: "$8,000 - $30,000",
      preparedness: "Backflow preventer, floor drains, sump pump"
    }
  ];

  const coverageEndorsements = [
    {
      name: "Flood Insurance (NFIP or Private)",
      why: "Standard policies exclude all flood damage. NFIP covers up to $250k structure, $100k contents.",
      cost: "$400-$2,000/year",
      recommended: "All homeowners, especially in flood zones A, AE, X"
    },
    {
      name: "Sewer Backup Endorsement",
      why: "Covers damage from sewer or drain backup. Base policies exclude this.",
      cost: "$40-$150/year",
      recommended: "Homes with basements, older neighborhoods, combined sewers"
    },
    {
      name: "Ordinance or Law Coverage",
      why: "Pays for code upgrades required during reconstruction after a loss.",
      cost: "$50-$200/year",
      recommended: "Older homes built before modern building codes"
    },
    {
      name: "Replacement Cost Coverage (Contents)",
      why: "Pays full replacement cost vs. depreciated value for personal property.",
      cost: "10-15% premium increase",
      recommended: "All homeowners with valuable belongings"
    },
    {
      name: "Equipment Breakdown / Water Backup",
      why: "Covers mechanical/electrical failures and water backup from sump pumps.",
      cost: "$50-$100/year",
      recommended: "Homes with sump pumps, HVAC, water heaters"
    },
    {
      name: "Earthquake Coverage",
      why: "Virginia has minor seismic activity; coverage is rarely purchased but available.",
      cost: "$100-$300/year",
      recommended: "Optional for comprehensive protection"
    }
  ];

  const claimSteps = [
    {
      number: "01",
      title: "Document Damage Immediately",
      icon: FileText,
      details: "Take photos/video, create written inventory, save receipts for emergency repairs. Do not discard damaged items until adjuster approves."
    },
    {
      number: "02",
      title: "Report to Insurance & FEMA (if applicable)",
      icon: Phone,
      details: "Call your insurance 24-hour claims line. If a federal disaster is declared, register with FEMA at DisasterAssistance.gov within 60 days."
    },
    {
      number: "03",
      title: "Mitigate Further Damage",
      icon: Shield,
      details: "Your policy requires you to prevent additional damage. Board windows, tarp roofs, extract water. Keep receipts—these are reimbursable."
    },
    {
      number: "04",
      title: "Meet Adjuster & Provide Documentation",
      icon: Users,
      details: "Schedule adjuster visit. Provide documentation, receipts, contractor estimates. Walk them through all damage, including hidden areas."
    },
    {
      number: "05",
      title: "Review Estimate & Negotiate if Needed",
      icon: Scale,
      details: "Compare adjuster estimate to independent contractor quotes. Submit supplemental claim if estimate is insufficient."
    },
    {
      number: "06",
      title: "Complete Repairs & Close Claim",
      icon: CheckCircle2,
      details: "Hire licensed contractors, complete work, submit invoices and completion photos. Request depreciation holdback if RCV policy."
    }
  ];

  const virginiaSpecifics = [
    {
      title: "FEMA Flood Zones in Virginia",
      description: "Northern Virginia, Coastal Virginia, and areas along the James, Rappahannock, and Potomac rivers have significant FEMA flood zones. Check your property's flood zone at FEMA's Flood Map Service Center.",
      action: "Order an elevation certificate ($400-$600) to potentially reduce NFIP premiums."
    },
    {
      title: "Virginia Wind Pool (VPIA)",
      description: "Coastal properties in Virginia Beach, Norfolk, and Eastern Shore may require VPIA coverage if private insurers decline wind coverage. VPIA provides named storm and wind coverage with higher deductibles (often 5%).",
      action: "Apply through a licensed insurance agent; VPIA is only available if you've been denied coverage."
    },
    {
      title: "Virginia Fair Access to Insurance Requirements (FAIR) Plan",
      description: "Virginia does not have a FAIR Plan. However, the VPIA serves a similar function for coastal wind coverage. For other perils, work with an independent agent to access surplus lines market.",
      action: "Contact the Virginia Bureau of Insurance at (804) 371-9741 for assistance finding coverage."
    },
    {
      title: "State Tax Deductions for Disaster Losses",
      description: "Virginia follows federal tax treatment of casualty losses. For federally declared disasters, you may deduct uninsured losses exceeding 10% of your adjusted gross income. Consult a tax professional.",
      action: "Save all receipts, estimates, and claim documentation for tax filings."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Virginia Homeowner's Guide to Disaster Insurance Claims | NFIP & FEMA"
        description="Complete guide for Virginia homeowners on disaster insurance claims. Coverage info for hurricanes, floods, fires, and winter storms. FEMA assistance, NFIP requirements, and claim filing steps."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Virginia Insurance Guide', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} /> Virginia Resource
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Virginia Homeowner's Guide to Disaster Insurance Claims
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              From hurricanes in Hampton Roads to flooding in Northern Virginia, understanding your insurance coverage and the claims process is essential. This comprehensive guide covers coverage, FEMA assistance, and how to file disaster claims in Virginia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Call (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg" className="hidden md:inline-flex">
                Request Service
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
              Understanding Disaster Insurance in Virginia
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Virginia homeowners face diverse disaster risks—from Atlantic hurricanes affecting coastal communities to severe flooding in Northern Virginia's river valleys. Each disaster type has different insurance implications, coverage requirements, and claim processes.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Standard homeowners insurance policies cover many perils (fire, wind, theft), but specifically exclude floods and earthquakes. Understanding what's covered, what requires additional endorsements, and how federal disaster assistance works is critical for protecting your home and finances.
            </p>
            <p className="text-muted leading-relaxed">
              This guide provides Virginia-specific information on insurance coverage, disaster preparedness, FEMA assistance, and step-by-step claim filing procedures.
            </p>
          </div>
        </section>

        {/* Common Disasters in Virginia */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-medium text-text mb-4">
              Common Disasters in Virginia & Insurance Coverage
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Virginia homeowners face six primary disaster types. Here's what you need to know about coverage and costs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {commonDisasters.map((disaster, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <disaster.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-text mb-2">{disaster.name}</h3>
                    <p className="text-sm text-muted">{disaster.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-2">
                    <Shield size={16} className="text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500">Coverage</div>
                      <div className="text-sm text-text">{disaster.coverage}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign size={16} className="text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500">Average Claim</div>
                      <div className="text-sm text-text">{disaster.avgCost}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-500">Preparedness</div>
                      <div className="text-sm text-text">{disaster.preparedness}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Essential Coverage Endorsements */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-4 text-center">
            Essential Coverage Endorsements for Virginia Homes
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto text-center mb-12">
            Standard homeowners policies don't cover everything. These endorsements fill critical gaps in coverage.
          </p>

          <div className="space-y-4">
            {coverageEndorsements.map((endorsement, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-text mb-2">{endorsement.name}</h3>
                    <p className="text-sm text-muted mb-2">{endorsement.why}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <DollarSign size={12} />
                        {endorsement.cost}
                      </span>
                      <span className="flex items-center gap-1">
                        <Info size={12} />
                        {endorsement.recommended}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    {endorsement.name.includes('Flood') || endorsement.name.includes('Sewer') || endorsement.name.includes('Replacement') ? (
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        <CheckCircle2 size={14} />
                        Highly Recommended
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                        <Info size={14} />
                        Recommended
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filing a Claim */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-4 text-center">
            How to File a Disaster Insurance Claim in Virginia
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto text-center mb-12">
            Follow these six steps to maximize your claim and avoid common pitfalls.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {claimSteps.map((step, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-medium text-text mb-2">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted">{step.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Virginia-Specific Info */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-medium text-text mb-8 text-center">
            Virginia-Specific Insurance Information
          </h2>

          <div className="space-y-6">
            {virginiaSpecifics.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-primary mt-1 shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-medium text-text mb-3">{item.title}</h3>
                    <p className="text-muted leading-relaxed mb-4">{item.description}</p>
                    <div className="flex items-start gap-2 bg-white rounded-xl p-4 border border-blue-100">
                      <ArrowRight size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-text">{item.action}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEMA Assistance Section */}
        <section className="mb-24">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl">
              <h2 className="font-display text-3xl font-medium mb-4 flex items-center gap-3">
                <Shield size={32} />
                FEMA Individual Assistance in Virginia
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                When the President declares a major disaster in Virginia, FEMA Individual Assistance may be available to homeowners with uninsured or underinsured losses. Here's how it works:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    What FEMA Covers
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0"></span>
                      Temporary housing (hotels, rental assistance)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0"></span>
                      Home repairs (essential items only)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0"></span>
                      Replacement of essentials (appliances, furniture)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0"></span>
                      Medical/dental costs caused by disaster
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0"></span>
                      Childcare and transportation
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <XCircle size={20} />
                    What FEMA Doesn't Cover
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                      Losses covered by insurance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                      Luxury or non-essential items
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                      Property in vacation/rental homes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                      Business losses
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                      Cosmetic repairs
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-500/20 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-bold mb-3 text-blue-100">How to Register for FEMA Assistance</h4>
                <ol className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-300">1.</span>
                    <span>Register online at DisasterAssistance.gov or call 1-800-621-3362 (TTY 1-800-462-7585)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-300">2.</span>
                    <span>Register within 60 days of the disaster declaration date</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-300">3.</span>
                    <span>Have ready: SSN, address of damaged property, insurance info, income documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-300">4.</span>
                    <span>FEMA inspector will schedule a visit to assess damage (usually within 10 days)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-300">5.</span>
                    <span>Decision letter arrives within 10 days of inspection; grants typically paid via direct deposit</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* How Flood Doctor Helps */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100">
            <h2 className="font-display text-2xl font-medium text-text mb-4">
              How Flood Doctor Helps With Insurance & FEMA Claims
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              We've worked with thousands of Virginia homeowners through disaster claims. Here's how we help:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Professional Documentation",
                  description: "Comprehensive photo/video evidence and detailed moisture mapping that satisfies insurance and FEMA requirements."
                },
                {
                  icon: Scale,
                  title: "Xactimate Estimates",
                  description: "Insurance-industry-standard estimates that adjusters recognize and accept, reducing disputes."
                },
                {
                  icon: Users,
                  title: "Adjuster Coordination",
                  description: "We meet with your adjuster on-site and advocate for complete coverage of all damage."
                },
                {
                  icon: Clock,
                  title: "Rapid Mitigation",
                  description: "24/7 emergency response to prevent further damage and comply with policy requirements."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white text-primary flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-text mb-1">{item.title}</h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <GoogleStyleFAQ
            data={faqs}
            title="Virginia Insurance & FEMA FAQ"
            className="border-none p-0"
          />
        </section>

      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Disaster Damage in Virginia? We're Here to Help
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Flood Doctor has helped thousands of Virginia homeowners navigate insurance and FEMA claims. Call 24/7 for immediate assistance.
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

export default VirginiaInsuranceGuide;
