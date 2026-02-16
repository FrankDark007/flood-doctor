import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileText,
  Clock,
  Scale,
  Award,
  Users,
  MapPin,
  DollarSign,
  Search,
  MessageSquare,
  Building2,
  ArrowRight,
  BadgeCheck,
  ClipboardCheck
} from 'lucide-react';

const ChoosingRestorationCompany: React.FC = () => {
  const faqs = [
    {
      question: "What certifications should a water damage restoration company have?",
      answer: "Look for IICRC (Institute of Inspection, Cleaning and Restoration Certification) credentials, specifically Water Damage Restoration Technician (WRT) and Applied Structural Drying (ASD) certifications. These demonstrate industry-standard training in proper drying techniques, moisture detection, and microbial remediation. In Virginia, contractors must also hold a valid Class A or Class C Contractor's License."
    },
    {
      question: "Should I use my insurance company's preferred restoration vendor?",
      answer: "You have the legal right to choose any licensed contractor, regardless of insurance recommendations. Insurance 'preferred vendors' work for the carrier and may prioritize cost reduction over thorough restoration. Independent companies like Flood Doctor advocate for your interests, ensuring all damage is documented and repairs are completed to industry standards."
    },
    {
      question: "How quickly should a restoration company respond?",
      answer: "For water damage, response time is critical. Look for companies offering 24/7 emergency service with on-site arrival within 60-90 minutes. Water extraction should begin within 24 hours to prevent mold growth. Companies with slower response times increase your risk of secondary damage and mold remediation costs."
    },
    {
      question: "What questions should I ask before hiring a restoration company?",
      answer: "Ask about: IICRC certifications, Virginia contractor license number, insurance coverage (general liability and workers' comp), response time guarantees, drying process and timeline, equipment used, experience with your type of damage, insurance claims support, and references from recent jobs. A reputable company will answer these questions clearly and provide documentation."
    },
    {
      question: "How do I verify a restoration company's license in Virginia?",
      answer: "Visit the Virginia Department of Professional and Occupational Regulation (DPOR) website at dpor.virginia.gov and search the License Lookup tool. Enter the company name or license number to verify active status, disciplinary history, and insurance coverage. All Virginia contractors performing work over $1,000 must be licensed."
    },
    {
      question: "What's the difference between a free estimate and an insurance estimate?",
      answer: "A free estimate provides a general scope and cost range for repairs. An insurance estimate (typically using Xactimate software) is a detailed, line-item breakdown compatible with insurance claim systems. Reputable companies provide both: an initial assessment at no charge, and a formal insurance estimate once the scope is determined."
    },
    {
      question: "Should I get multiple restoration estimates?",
      answer: "Yes, but prioritize qualifications over price. The lowest bid often cuts corners—using inadequate equipment, shorter drying times, or incomplete moisture mapping. Compare certifications, equipment, drying protocols, and insurance claim support. For insurance claims, most adjusters accept estimates from any IICRC-certified contractor using Xactimate."
    },
    {
      question: "What are red flags when choosing a restoration company?",
      answer: "Warning signs include: no IICRC certifications, unlicensed or uninsured, pressure tactics or requiring payment upfront, lack of written estimates or contracts, no 24/7 emergency service, unwillingness to provide references, and claims of 'we work directly with your insurance' without explaining your rights. Avoid companies that guarantee insurance approval—only adjusters make coverage decisions."
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

  const essentialCertifications = [
    {
      name: "IICRC Water Damage Restoration (WRT)",
      icon: Award,
      description: "Industry-standard certification covering water extraction, structural drying, and microbial prevention. WRT-certified technicians understand moisture science and proper restoration protocols.",
      importance: "Critical",
      verify: "Ask for technician certification cards or verify at iicrc.org"
    },
    {
      name: "IICRC Applied Structural Drying (ASD)",
      icon: Award,
      description: "Advanced certification for complex drying scenarios. ASD-certified technicians use psychrometry, moisture mapping, and advanced equipment to dry structures efficiently.",
      importance: "Critical",
      verify: "Required for commercial jobs; highly recommended for residential"
    },
    {
      name: "Virginia Class A or C Contractor License",
      icon: BadgeCheck,
      description: "State-required license for contracting work over $1,000. Class A (unlimited), Class C (under $10,000). Unlicensed contractors cannot legally perform restoration work in Virginia.",
      importance: "Required by Law",
      verify: "Check dpor.virginia.gov License Lookup"
    },
    {
      name: "General Liability Insurance ($1M+)",
      icon: Shield,
      description: "Protects you from liability if the contractor damages your property or a worker is injured on-site. Minimum $1M coverage is industry standard.",
      importance: "Critical",
      verify: "Request certificate of insurance (COI) with your name as additional insured"
    },
    {
      name: "Workers' Compensation Insurance",
      icon: Users,
      description: "Protects you from liability for worker injuries. Required for Virginia contractors with employees. Uninsured contractors put you at risk for injury claims.",
      importance: "Critical",
      verify: "Request current workers' comp certificate from contractor's insurance carrier"
    },
    {
      name: "Xactimate Estimating Software",
      icon: FileText,
      description: "Industry-standard software used by 90% of insurance carriers. Companies using Xactimate produce estimates that match adjuster pricing, reducing claim disputes.",
      importance: "Highly Recommended",
      verify: "Ask if they use Xactimate for insurance estimates"
    }
  ];

  const questionsToAsk = [
    {
      category: "Credentials & Experience",
      icon: Award,
      questions: [
        "Are your technicians IICRC-certified? Which certifications?",
        "What is your Virginia contractor license number?",
        "How long have you been in business in Northern Virginia?",
        "How many water damage jobs have you completed in the past year?",
        "Can you provide references from recent jobs similar to mine?"
      ]
    },
    {
      category: "Response & Process",
      icon: Clock,
      questions: [
        "Do you offer 24/7 emergency service? What's your response time?",
        "What equipment do you use for water extraction and drying?",
        "How long will the drying process take for my situation?",
        "Do you use moisture meters and thermal imaging to detect hidden water?",
        "Will you provide daily monitoring and moisture readings logs?"
      ]
    },
    {
      category: "Insurance & Costs",
      icon: DollarSign,
      questions: [
        "Do you work with insurance companies? Do you use Xactimate?",
        "Will you meet with my insurance adjuster on-site?",
        "Do you offer direct insurance billing?",
        "What are your payment terms? Do you require upfront payment?",
        "Are there any hidden fees or charges I should know about?"
      ]
    },
    {
      category: "Documentation & Guarantees",
      icon: FileText,
      questions: [
        "Will you provide a written estimate and scope of work?",
        "How do you document the damage for insurance claims?",
        "Do you guarantee your work? What does the warranty cover?",
        "What happens if mold develops after your work is complete?",
        "Will I receive a certificate of completion and final moisture readings?"
      ]
    }
  ];

  const redFlags = [
    {
      flag: "No IICRC certifications or refuses to show credentials",
      severity: "Critical",
      why: "Uncertified technicians lack proper training in moisture science, drying protocols, and industry standards. This leads to incomplete drying, hidden moisture, and mold growth."
    },
    {
      flag: "Unlicensed or can't provide Virginia contractor license number",
      severity: "Critical",
      why: "Unlicensed contractors are operating illegally in Virginia. You have no recourse if work is substandard, and your insurance may deny claims tied to unlicensed work."
    },
    {
      flag: "No proof of liability or workers' comp insurance",
      severity: "Critical",
      why: "You become liable for property damage and worker injuries if the contractor is uninsured. Always request current certificates of insurance."
    },
    {
      flag: "Requires full payment upfront or large deposits",
      severity: "High Risk",
      why: "Reputable companies bill insurance directly or accept payment after work is complete. Upfront payment demands are often scams or indicate financial instability."
    },
    {
      flag: "Pressure tactics or 'today only' discounts",
      severity: "High Risk",
      why: "Legitimate emergency response doesn't require sales pressure. Take time to verify credentials and compare options before signing."
    },
    {
      flag: "Unwilling to provide written estimates or contracts",
      severity: "High Risk",
      why: "Verbal agreements lead to disputes over scope, cost, and quality. Always get detailed written estimates and signed contracts before work begins."
    },
    {
      flag: "Claims they 'work directly with your insurance' without explaining your rights",
      severity: "Moderate Risk",
      why: "This phrase often means they prioritize the insurance carrier's interests over yours. You have the right to choose any contractor—don't be misled."
    },
    {
      flag: "Can't or won't provide recent references",
      severity: "Moderate Risk",
      why: "Established companies readily provide references. Refusal suggests poor work quality, unresolved disputes, or lack of experience."
    }
  ];

  const comparisonChecklist = [
    { category: "Credentials", items: [
      "IICRC Water Damage Restoration (WRT) certification",
      "IICRC Applied Structural Drying (ASD) certification",
      "Valid Virginia Class A or C contractor license",
      "General liability insurance ($1M+ coverage)",
      "Workers' compensation insurance",
      "EPA Lead-Safe Certified (for homes built before 1978)"
    ]},
    { category: "Equipment & Process", items: [
      "Industrial extraction equipment (truck-mounted or portable)",
      "Commercial-grade dehumidifiers (refrigerant or desiccant)",
      "High-velocity air movers (minimum 3,000 CFM)",
      "Moisture detection tools (meters, thermal imaging)",
      "HEPA air scrubbers for air quality",
      "Antimicrobial treatment application"
    ]},
    { category: "Response & Service", items: [
      "24/7 emergency availability",
      "60-90 minute on-site response time",
      "Daily monitoring and documentation",
      "Clear communication throughout process",
      "Written estimates and contracts provided",
      "Final completion certificate and moisture readings"
    ]},
    { category: "Insurance Support", items: [
      "Xactimate software for estimates",
      "Direct insurance billing available",
      "Meets with adjuster on-site",
      "Helps with supplemental claims if needed",
      "Provides documentation for claim file",
      "Explains your rights as policyholder"
    ]}
  ];

  const localVsNational = [
    {
      aspect: "Response Time",
      local: "Faster—locally based crews respond in 60-90 minutes",
      national: "Slower—may dispatch from distant locations or subcontract locally",
      advantage: "local"
    },
    {
      aspect: "Personal Service",
      local: "Direct access to owners and project managers",
      national: "Corporate structure with national call centers",
      advantage: "local"
    },
    {
      aspect: "Local Knowledge",
      local: "Understands Northern VA building codes, flood zones, and local adjusters",
      national: "Standardized approach may not account for regional specifics",
      advantage: "local"
    },
    {
      aspect: "Resources",
      local: "May have limited equipment during large regional disasters",
      national: "Can mobilize equipment from other regions during disasters",
      advantage: "national"
    },
    {
      aspect: "Accountability",
      local: "Reputation tied to local community; invested in quality",
      national: "Brand reputation but individual franchise quality varies",
      advantage: "local"
    },
    {
      aspect: "Cost",
      local: "Competitive pricing; lower overhead costs",
      national: "Often higher due to franchise fees and national marketing costs",
      advantage: "local"
    }
  ];

  const estimateExpectations = [
    {
      stage: "Initial Assessment (Free)",
      timeframe: "Within 60-90 minutes of contact",
      whatToExpect: "Visual inspection, moisture detection, photo documentation, verbal estimate of scope and timeline. No commitment required."
    },
    {
      stage: "Detailed Scope & Estimate",
      timeframe: "Within 24 hours of assessment",
      whatToExpect: "Written estimate with line-item costs (preferably Xactimate), equipment list, drying timeline, and restoration plan. Should include moisture readings documentation."
    },
    {
      stage: "Insurance Estimate",
      timeframe: "After adjuster inspection (if applicable)",
      whatToExpect: "Formal Xactimate estimate matching insurance format, documentation package for claim file, supplemental claim preparation if needed."
    },
    {
      stage: "Final Invoice",
      timeframe: "Upon project completion",
      whatToExpect: "Itemized invoice matching estimate, completion certificate, final moisture readings, warranty documentation, photos of completed work."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Choosing a Restoration Company"
        description="Expert guide to choosing a water damage restoration company in Northern Virginia. Essential certifications (IICRC, VA license), questions to ask, red flags, insurance support, and comparison checklist."
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Choosing a Restoration Company', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <ClipboardCheck size={14} /> Homeowner Resource
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              How to Choose a Water Damage Restoration Company
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Choosing the right restoration contractor affects your insurance claim, your home's safety, and your long-term costs. This comprehensive guide covers essential certifications, critical questions to ask, red flags to avoid, and how to compare companies effectively.
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">

            {/* Why This Matters */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Why Your Restoration Company Choice Matters
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                The restoration company you hire directly impacts your claim settlement, your home's structural integrity, and your family's health. Here's what's at stake:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: DollarSign,
                    title: "Insurance Claim Success",
                    description: "Properly certified companies document damage thoroughly, use insurance-compatible estimating software, and advocate for full coverage. Unqualified contractors miss hidden damage, leading to underpaid claims."
                  },
                  {
                    icon: Shield,
                    title: "Mold Prevention",
                    description: "IICRC-certified technicians understand moisture science and proper drying. Inadequate drying leaves hidden moisture that becomes toxic mold within days—a problem costing $3,000-$10,000 to remediate."
                  },
                  {
                    icon: Building2,
                    title: "Structural Integrity",
                    description: "Water-damaged framing, subfloors, and insulation must be properly dried or replaced. Cutting corners leads to rot, wood decay, and structural failure—repairs costing tens of thousands down the road."
                  },
                  {
                    icon: Users,
                    title: "Liability Protection",
                    description: "Licensed and insured contractors protect you from liability. If an uninsured worker is injured on your property or equipment damages your home, you're financially responsible."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                      <item.icon size={24} />
                    </div>
                    <h3 className="font-medium text-text mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Essential Certifications */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Essential Certifications & Credentials
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                These certifications are non-negotiable for professional water damage restoration. Verify all credentials before signing a contract.
              </p>

              <div className="space-y-6">
                {essentialCertifications.map((cert, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shrink-0">
                        <cert.icon size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="font-display text-xl font-medium text-text">{cert.name}</h3>
                          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                            cert.importance === 'Critical' || cert.importance === 'Required by Law'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {cert.importance}
                          </span>
                        </div>
                        <p className="text-muted leading-relaxed mb-4">{cert.description}</p>
                        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 inline-flex items-start gap-3">
                          <Search size={18} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-sm font-medium text-text">{cert.verify}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Questions to Ask */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Critical Questions to Ask Before Hiring
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Use these questions to evaluate restoration companies. Reputable contractors will answer clearly and provide documentation.
              </p>

              <div className="space-y-6">
                {questionsToAsk.map((section, i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                        <section.icon size={20} />
                      </div>
                      <h3 className="font-display text-xl font-medium text-text">{section.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.questions.map((question, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Red Flags */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Red Flags to Avoid
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                These warning signs indicate unqualified, unethical, or illegal contractors. Walk away if you encounter these issues.
              </p>

              <div className="space-y-4">
                {redFlags.map((item, i) => (
                  <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                    <div className={`px-6 py-4 border-b ${
                      item.severity === 'Critical' ? 'bg-red-50/50 border-red-100' :
                      item.severity === 'High Risk' ? 'bg-orange-50/50 border-orange-100' :
                      'bg-yellow-50/50 border-yellow-100'
                    }`}>
                      <div className="flex items-start gap-3">
                        <AlertTriangle size={20} className={`mt-0.5 shrink-0 ${
                          item.severity === 'Critical' ? 'text-red-600' :
                          item.severity === 'High Risk' ? 'text-orange-600' :
                          'text-yellow-600'
                        }`} />
                        <div className="flex-1">
                          <span className={`font-medium ${
                            item.severity === 'Critical' ? 'text-red-900' :
                            item.severity === 'High Risk' ? 'text-orange-900' :
                            'text-yellow-900'
                          }`}>{item.flag}</span>
                          <span className={`ml-3 text-xs px-2 py-1 rounded-full ${
                            item.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                            item.severity === 'High Risk' ? 'bg-orange-100 text-orange-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {item.severity}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <div className="flex items-start gap-3">
                        <ArrowRight size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-muted text-sm">{item.why}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Virginia Licensing Requirements */}
            <section className="mb-24">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
                <div className="flex items-start gap-4">
                  <MapPin size={32} className="text-primary mt-1 shrink-0" />
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-medium text-text mb-4">
                      Virginia Contractor Licensing Requirements
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      Virginia law requires all contractors performing work valued over $1,000 to hold a valid Class A (unlimited) or Class C (projects under $10,000) contractor license issued by the Department of Professional and Occupational Regulation (DPOR).
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white rounded-xl p-5 border border-blue-100">
                        <h3 className="font-medium text-text mb-3 flex items-center gap-2">
                          <BadgeCheck size={18} className="text-green-600" />
                          How to Verify a License
                        </h3>
                        <ol className="space-y-2 text-sm text-muted">
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-primary">1.</span>
                            Visit dpor.virginia.gov
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-primary">2.</span>
                            Click "License Lookup"
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-primary">3.</span>
                            Search by company name or license number
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-primary">4.</span>
                            Verify active status, no disciplinary actions
                          </li>
                        </ol>
                      </div>

                      <div className="bg-white rounded-xl p-5 border border-blue-100">
                        <h3 className="font-medium text-text mb-3 flex items-center gap-2">
                          <XCircle size={18} className="text-red-600" />
                          Penalties for Unlicensed Work
                        </h3>
                        <ul className="space-y-2 text-sm text-muted">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                            Homeowner has no legal recourse for poor work
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                            Insurance may deny claims tied to unlicensed work
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                            No access to Virginia Contractor Transaction Recovery Fund
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                            Contract may be legally unenforceable
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-200">
                      <p className="text-sm text-text">
                        <strong>Flood Doctor's Virginia Contractor License:</strong> Class A #2705123456 (verify at dpor.virginia.gov)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Checklist */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Company Comparison Checklist
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Use this checklist to compare restoration companies side-by-side. Print this page or save it for reference during your evaluation.
              </p>

              <div className="space-y-6">
                {comparisonChecklist.map((category, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-medium text-text mb-4">{category.category}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.items.map((item, j) => (
                        <label key={j} className="flex items-start gap-3 cursor-pointer group">
                          <div className="w-5 h-5 rounded border-2 border-gray-300 group-hover:border-primary flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                            <CheckCircle2 size={12} className="text-primary opacity-0 group-hover:opacity-50 transition-opacity" />
                          </div>
                          <span className="text-sm text-text">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What to Expect from Estimates */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                What to Expect from Restoration Estimates
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Understanding the estimation process helps you evaluate company professionalism and identify lowball or inflated quotes.
              </p>

              <div className="space-y-6">
                {estimateExpectations.map((stage, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        <FileText size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <h3 className="font-medium text-text">{stage.stage}</h3>
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-medium">
                            <Clock size={12} />
                            {stage.timeframe}
                          </span>
                        </div>
                        <p className="text-sm text-muted">{stage.whatToExpect}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-amber-900 mb-2">Beware of Lowball Estimates</h4>
                    <p className="text-sm text-amber-800">
                      If one estimate is significantly lower than others (30%+), it's likely cutting corners. Common tactics include: inadequate drying time, minimal equipment deployment, skipping antimicrobial treatment, and incomplete moisture mapping. These shortcuts lead to mold growth and structural damage weeks or months later.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Local vs National Companies */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Local vs. National Restoration Companies
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Both local and national companies can provide quality service, but there are key differences to consider.
              </p>

              <div className="space-y-4">
                {localVsNational.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                      <h3 className="font-medium text-text">{item.aspect}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 divide-x divide-gray-100">
                      <div className={`p-6 ${item.advantage === 'local' ? 'bg-green-50/30' : 'bg-white'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={16} className="text-blue-600" />
                          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Local Company</span>
                        </div>
                        <p className="text-sm text-text">{item.local}</p>
                      </div>
                      <div className={`p-6 ${item.advantage === 'national' ? 'bg-green-50/30' : 'bg-white'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 size={16} className="text-purple-600" />
                          <span className="text-xs font-medium text-purple-600 uppercase tracking-wider">National Franchise</span>
                        </div>
                        <p className="text-sm text-text">{item.national}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <p className="text-sm text-text">
                  <strong>Bottom line:</strong> Certifications, insurance, and response time matter more than company size. A well-qualified local company often provides better value, faster response, and more personalized service than national franchises—but verify credentials either way.
                </p>
              </div>
            </section>

            {/* Understanding the Restoration Process */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Understanding the Restoration Process
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Professional water damage restoration follows a standardized IICRC process. Any company deviating from these steps is cutting corners.
              </p>

              <div className="bg-white border border-gray-100 rounded-3xl p-8">
                <ol className="space-y-6">
                  {[
                    {
                      title: "Emergency Contact & Assessment",
                      description: "24/7 availability, 60-90 minute response, initial damage assessment, and moisture mapping."
                    },
                    {
                      title: "Water Extraction",
                      description: "Remove standing water using truck-mounted or portable extractors. Critical to begin within 24 hours."
                    },
                    {
                      title: "Moisture Detection & Documentation",
                      description: "Use moisture meters and thermal imaging to find hidden water. Document with photos and readings."
                    },
                    {
                      title: "Structural Drying",
                      description: "Deploy dehumidifiers and air movers. Monitor daily until materials reach dry standard (3-7 days typical)."
                    },
                    {
                      title: "Cleaning & Antimicrobial Treatment",
                      description: "Clean affected areas, apply EPA-registered antimicrobials to prevent mold growth."
                    },
                    {
                      title: "Final Inspection & Clearance",
                      description: "Final moisture readings, completion certificate, post-drying inspection, documentation for insurance."
                    }
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-text mb-1">{step.title}</h3>
                        <p className="text-sm text-muted">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Choosing a Restoration Company FAQ"
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

                <h3 className="font-display text-xl font-medium mb-4 relative z-10">
                  Work With a Fully Certified Team
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6 relative z-10">
                  Flood Doctor technicians hold IICRC WRT and ASD certifications, carry full insurance, and use industry-standard equipment and processes.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "IICRC Certified Technicians",
                    "VA Licensed Contractor",
                    "$2M Liability Coverage",
                    "60-Minute Response Time",
                    "Direct Insurance Billing"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={16} className="shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>

              {/* Quick Verification Card */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4 flex items-center gap-2">
                  <Search size={18} className="text-primary" />
                  Quick Verification Links
                </h4>
                <div className="space-y-3">
                  <a
                    href="https://www.iicrc.org/find-a-professional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group"
                  >
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    IICRC Certification Lookup
                  </a>
                  <a
                    href="https://www.dpor.virginia.gov/LicenseLookup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group"
                  >
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    VA Contractor License Lookup
                  </a>
                  <a
                    href="https://www.bbb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group"
                  >
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Better Business Bureau
                  </a>
                </div>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/resources/insurance-claims-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Filing Insurance Claims
                  </a>
                  <a href="/resources/water-damage-cost-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Restoration Cost Guide
                  </a>
                  <a href="/resources/emergency-checklists/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Emergency Response Checklists
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
            Choose a Company You Can Trust
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't settle for unlicensed contractors or unqualified technicians. Call Flood Doctor for certified, professional water damage restoration.
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

export default ChoosingRestorationCompany;
