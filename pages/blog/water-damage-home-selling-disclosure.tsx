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
  FileText,
  ClipboardCheck,
  Home,
  Scale,
  Shield,
  CheckCircle2,
  XCircle,
  Clock,
  DollarSign,
  Search,
  UserCheck,
  FileCheck,
  AlertCircle,
  ArrowRight,
  Building2,
  MapPin,
  BadgeCheck
} from 'lucide-react';

const WaterDamageHomeSellingDisclosure: React.FC = () => {
  const faqs = [
    {
      question: "What water damage must be disclosed when selling a home in Virginia?",
      answer: "Virginia law requires disclosure of all known material defects, including water damage or prior water intrusion events. This includes past flooding, basement seepage, roof leaks, plumbing failures, foundation issues, mold remediation, and any current or past water-related structural damage. Even if the damage was repaired, disclosure is required if it was material (significant enough to affect the buyer's decision)."
    },
    {
      question: "Do I have to disclose old water damage that was professionally repaired?",
      answer: "Yes. Virginia law requires disclosure of all known material defects regardless of repair status. You must disclose the original problem, when it occurred, what repairs were completed, and who performed the work. Proper documentation of professional restoration protects both seller and buyer and typically doesn't reduce property value if repairs meet industry standards."
    },
    {
      question: "What happens if I don't disclose water damage when selling my Virginia home?",
      answer: "Failure to disclose known water damage exposes sellers to serious legal consequences including contract rescission (buyer cancels the sale and gets their deposit back), post-closing lawsuits for repair costs and damages, punitive damages for intentional concealment, and potential fraud charges. Virginia courts consistently rule in favor of buyers when sellers fail to disclose material defects."
    },
    {
      question: "Can I be held liable for water damage I didn't know about?",
      answer: "Generally no, but only if you truly had no knowledge of the problem. Virginia law requires disclosure of known defects. However, sellers are expected to conduct reasonable inspections. If a problem was obvious or should have been discovered during basic home maintenance, courts may find constructive knowledge. Pre-listing inspections protect sellers by documenting what was and wasn't known."
    },
    {
      question: "How does water damage disclosure affect my home's value in Northern Virginia?",
      answer: "Impact depends entirely on documentation quality. Properly disclosed and professionally repaired water damage with complete documentation (certified restoration, mold clearance, structural repairs) typically has minimal impact—often 0-3% value reduction. Undisclosed damage discovered during buyer inspections creates negotiation leverage for 10-20% reductions or deal cancellations. Professional certification is key."
    },
    {
      question: "What documentation should I provide when disclosing water damage?",
      answer: "Provide complete restoration documentation including the original damage assessment, moisture readings and thermal imaging, scope of work performed, all invoices and receipts, mold clearance testing results (if applicable), structural repair certifications, before and after photos, and contractor licenses and insurance certificates. IICRC-certified restoration documentation is gold standard and reassures buyers."
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
    "headline": "Water Damage Disclosure: What Virginia Home Sellers Must Know",
    "description": "Complete guide to water damage disclosure requirements for Virginia home sellers. Legal obligations, documentation needs, and how to protect yourself when selling.",
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
    "description": "Professional water damage restoration and documentation services for Northern Virginia home sellers",
    "areaServed": [
      "Fairfax County, VA",
      "Arlington County, VA",
      "Loudoun County, VA",
      "Alexandria, VA",
      "Prince William County, VA"
    ],
    "telephone": "(877) 497-0007",
    "priceRange": "$$"
  };

  const disclosureRequirements = [
    {
      category: "Past Water Events",
      icon: Clock,
      mustDisclose: [
        "Flooding from any source within past 10 years",
        "Basement or crawlspace seepage history",
        "Roof leaks that caused interior damage",
        "Plumbing failures (burst pipes, slab leaks)",
        "Appliance water damage events",
        "Foundation water intrusion"
      ],
      documentation: "Date of occurrence, cause, extent, repairs performed, contractor information"
    },
    {
      category: "Current Conditions",
      icon: Home,
      mustDisclose: [
        "Active water intrusion or leaks",
        "Basement moisture or dampness",
        "Roof condition and known vulnerabilities",
        "Drainage or grading problems",
        "Sump pump reliability issues",
        "Foundation cracks or seepage"
      ],
      documentation: "Current condition assessment, ongoing mitigation measures, maintenance records"
    },
    {
      category: "Mold History",
      icon: AlertTriangle,
      mustDisclose: [
        "Any mold remediation performed",
        "Known mold growth locations",
        "Causes of mold (water intrusion source)",
        "Remediation methods and results",
        "Post-remediation testing results",
        "Warranty or guarantees provided"
      ],
      documentation: "Remediation scope, clearance testing, before/after photos, contractor certifications"
    },
    {
      category: "Structural Impact",
      icon: Building2,
      mustDisclose: [
        "Wood rot or structural decay",
        "Floor or ceiling damage/repairs",
        "Foundation repairs related to water",
        "Drywall or insulation replacement",
        "Electrical repairs due to water",
        "HVAC system water damage"
      ],
      documentation: "Engineering reports, contractor assessments, building permits, inspection approvals"
    }
  ];

  const virginiaLegalFramework = [
    {
      law: "Virginia Residential Property Disclosure Act",
      requirement: "Sellers must complete standardized disclosure form addressing water intrusion, drainage, basement moisture, roof leaks, and structural issues",
      penalty: "Failure to provide form: up to $500 fine; fraudulent disclosures: contract rescission, damages, legal fees"
    },
    {
      law: "Common Law Duty to Disclose",
      requirement: "Even beyond the disclosure form, sellers must disclose all known material defects that substantially affect property value or desirability",
      penalty: "Lawsuits for fraud, misrepresentation, breach of contract; punitive damages possible"
    },
    {
      law: "\"As-Is\" Sales Still Require Disclosure",
      requirement: "Selling property 'as-is' does NOT eliminate disclosure obligations. Known material defects must still be disclosed even if no repairs will be made",
      penalty: "Same legal exposure as traditional sales; 'as-is' only limits repair obligations, not disclosure"
    }
  ];

  const buyerInspectionRights = [
    {
      stage: "Inspection Period (Typically 7-14 Days)",
      icon: Search,
      buyerActions: [
        "Hire professional home inspector",
        "Request specialized water damage inspection",
        "Conduct mold testing and air quality assessment",
        "Review disclosure documents thoroughly",
        "Investigate any disclosed water issues"
      ],
      sellerBestPractices: [
        "Provide all documentation upfront",
        "Grant access for thorough inspections",
        "Answer inspector questions honestly",
        "Provide utility records if requested",
        "Show repair documentation voluntarily"
      ]
    },
    {
      stage: "Inspection Negotiations",
      icon: FileText,
      buyerActions: [
        "Request repairs for undisclosed issues",
        "Negotiate price reduction for known problems",
        "Require additional testing or assessments",
        "Request professional repair certifications",
        "Option to walk away if material defects found"
      ],
      sellerBestPractices: [
        "Consider pre-inspection to avoid surprises",
        "Address known issues before listing",
        "Provide repair credits rather than DIY fixes",
        "Use licensed, insured contractors only",
        "Document all agreed-upon resolutions"
      ]
    }
  ];

  const documentationBestPractices = [
    {
      step: 1,
      title: "Pre-Sale Professional Inspection",
      description: "Commission a comprehensive moisture inspection before listing. Professional assessments identify hidden problems and provide documentation that you conducted reasonable due diligence.",
      benefits: ["Discover issues before buyers do", "Document what you knew and when", "Address problems proactively", "Strengthen legal position"],
      cost: "$200-$500 (Northern VA)"
    },
    {
      step: 2,
      title: "Complete Professional Restoration",
      description: "Never DIY water damage repairs for a home you're selling. Only use IICRC-certified restoration contractors who provide detailed documentation, certifications, and warranties.",
      benefits: ["Proper industry-standard repairs", "Transferable warranties", "Third-party certification", "Buyer confidence and trust"],
      cost: "Varies by scope; essential investment"
    },
    {
      step: 3,
      title: "Mold Clearance Testing",
      description: "After any water damage remediation, obtain independent third-party mold clearance testing. This verifies air quality meets safe standards and provides objective evidence of successful restoration.",
      benefits: ["Objective verification of safety", "Eliminates buyer health concerns", "Insurance claim support", "Legal protection from future claims"],
      cost: "$300-$600 (Northern VA)"
    },
    {
      step: 4,
      title: "Organize Documentation Package",
      description: "Create a comprehensive file with all water damage history, repairs, testing results, contractor information, warranties, and before/after photos. Provide to buyers upfront.",
      benefits: ["Demonstrates transparency", "Reduces buyer concern", "Expedites transactions", "Legal protection"],
      cost: "Time investment only"
    }
  ];

  const priceImpactScenarios = [
    {
      scenario: "Fully Documented Professional Restoration",
      description: "Water damage properly restored by IICRC-certified contractors with complete documentation, mold clearance, structural certifications, and transferable warranties.",
      valueImpact: "0-3% reduction",
      buyerConfidence: "High",
      saleability: "Excellent",
      details: "Buyers view as resolved issue with professional backing. Transparency and documentation minimize concern."
    },
    {
      scenario: "Disclosed, DIY Repairs, Limited Documentation",
      description: "Water damage disclosed but repairs performed by homeowner or unlicensed contractors. Minimal documentation of scope, methods, or completion.",
      valueImpact: "5-10% reduction",
      buyerConfidence: "Low to Moderate",
      saleability: "Challenging",
      details: "Buyers discount value due to repair quality uncertainty. May require re-doing work with certified contractors."
    },
    {
      scenario: "Disclosed, Unrepaired Water Damage",
      description: "Known water damage disclosed but not addressed. Selling 'as-is' with buyer responsible for remediation.",
      valueImpact: "10-20% reduction",
      buyerConfidence: "Low",
      saleability: "Difficult",
      details: "Buyers deduct estimated repair costs plus risk premium. May attract only investors or cash buyers."
    },
    {
      scenario: "Undisclosed, Discovered During Inspection",
      description: "Water damage not disclosed on property disclosure form but discovered by buyer's inspector.",
      valueImpact: "15-25% reduction or deal cancellation",
      buyerConfidence: "Very Low",
      saleability: "Deal at risk",
      details: "Buyers lose trust, assume worst-case scenario, demand significant concessions or walk away entirely."
    }
  ];

  const professionalCertificationValue = [
    {
      certification: "IICRC Water Damage Restoration",
      issuer: "Institute of Inspection, Cleaning and Restoration Certification",
      importance: "Industry gold standard for water damage restoration. Demonstrates contractor used proper protocols, equipment, and documentation standards.",
      buyerValue: "High"
    },
    {
      certification: "Mold Clearance Testing (Post-Remediation Verification)",
      issuer: "Independent Environmental Testing Lab",
      importance: "Third-party verification that mold remediation was successful and indoor air quality meets safe standards per EPA/IICRC guidelines.",
      buyerValue: "Critical"
    },
    {
      certification: "Structural Engineer Assessment (If Applicable)",
      issuer: "Licensed Professional Engineer (PE)",
      importance: "For significant water damage affecting structural elements, PE certification confirms repairs restored structural integrity.",
      buyerValue: "Essential for major damage"
    },
    {
      certification: "Building Permit & Inspection Approval",
      issuer: "Local Building Department",
      importance: "Formal documentation that repairs met local building codes and passed official inspections.",
      buyerValue: "High"
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Disclosure for Home Sellers"
        description="Complete guide to water damage disclosure laws for Virginia home sellers. Learn legal requirements, documentation needs, liability risks, and how proper restoration protects your sale."
        schema={[faqSchema, articleSchema, localBusinessSchema]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Blog', path: '/blog/' },
            { label: 'Water Damage Disclosure', path: '#' }
          ]} />
        <ArticleAuthor datePublished="2025-01-02" readTime="10 min read" />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Scale size={14} /> Legal Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Water Damage Disclosure: What Virginia Home Sellers Must Know
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Selling a home with current or past water damage requires careful legal compliance in Virginia. Understanding disclosure requirements, documentation standards, and buyer rights protects sellers from post-closing lawsuits while maintaining property value. This comprehensive guide covers Virginia law, best practices, and how professional restoration documentation safeguards your sale.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Get Documentation Help
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Clock size={16} />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">

            {/* Critical Alert */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl shrink-0">
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Legal Warning: Disclosure Is Not Optional</h3>
                  <p className="text-red-800 text-sm mb-4 leading-relaxed">
                    Virginia law requires disclosure of all known material defects, including water damage. Failure to disclose exposes sellers to lawsuits for fraud, contract rescission, and significant financial damages. Even if you're selling "as-is," disclosure obligations remain. Courts consistently rule in favor of buyers when sellers conceal water damage.
                  </p>
                  <p className="text-red-800 text-sm font-bold">
                    When in doubt, disclose. Transparency protects you legally and typically has minimal impact on sale price when paired with professional documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Virginia Legal Framework */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-2 pb-4 border-b-4 border-[#1a73e8]">
                Virginia's Legal Framework for Water Damage Disclosure
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Virginia law establishes clear disclosure requirements through statutory law and common law obligations. Understanding both protects sellers from post-closing liability.
              </p>

              <div className="space-y-6">
                {virginiaLegalFramework.map((item, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#1a73e8] transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1a73e8] text-white flex items-center justify-center shrink-0 font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-text text-lg mb-3">{item.law}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="text-xs font-bold text-[#1a73e8] uppercase tracking-wide mb-2">Requirement</h4>
                            <p className="text-sm text-text leading-relaxed">{item.requirement}</p>
                          </div>
                          <div className="bg-red-50 rounded-lg p-4">
                            <h4 className="text-xs font-bold text-red-700 uppercase tracking-wide mb-2">Penalty for Non-Compliance</h4>
                            <p className="text-sm text-red-900 leading-relaxed">{item.penalty}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-amber-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-amber-900 mb-2">What "Material Defect" Means</h4>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      A material defect is any condition that would significantly affect a buyer's decision to purchase or the price they'd pay. Water damage, mold, foundation issues, and structural problems are always considered material. Virginia courts apply a "reasonable buyer" standard—if a typical buyer would want to know about it, it's material.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* What Must Be Disclosed */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-2 pb-4 border-b-4 border-[#1a73e8]">
                What Water Damage Must Be Disclosed
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Virginia sellers must disclose all known water-related issues across four key categories. Complete disclosure includes the problem, timeline, cause, repairs performed, and current condition.
              </p>

              <div className="space-y-6">
                {disclosureRequirements.map((category, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-[#1a73e8] to-blue-600 px-6 py-4 text-white">
                      <div className="flex items-center gap-3">
                        <category.icon size={24} />
                        <h3 className="font-bold text-lg">{category.category}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-3">Must Disclose</h4>
                          <ul className="space-y-2">
                            {category.mustDisclose.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-muted">
                                <CheckCircle2 size={14} className="text-green-600 mt-0.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-100">
                          <h4 className="text-xs font-bold text-[#1a73e8] uppercase tracking-wide mb-2">Required Documentation</h4>
                          <p className="text-sm text-text leading-relaxed">{category.documentation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          <MidArticleCTA variant="emergency" />

            {/* Documentation Best Practices */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-2 pb-4 border-b-4 border-[#1a73e8]">
                4 Essential Documentation Steps for Sellers
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Proper documentation transforms water damage from a liability into a resolved issue that minimally impacts sale price. Follow this four-step process to protect your transaction and legal position.
              </p>

              <div className="space-y-8">
                {documentationBestPractices.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a73e8] to-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-2xl shadow-lg">
                        {item.step}
                      </div>
                      <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-medium text-text text-xl">{item.title}</h3>
                          <span className="text-xs font-bold text-[#1a73e8] bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                            {item.cost}
                          </span>
                        </div>
                        <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>
                        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                          <h4 className="text-xs font-bold text-green-900 uppercase tracking-wide mb-2">Benefits</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {item.benefits.map((benefit, j) => (
                              <li key={j} className="flex items-start gap-2 text-xs text-green-800">
                                <BadgeCheck size={12} className="text-green-600 mt-0.5 shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {i < documentationBestPractices.length - 1 && (
                      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Value Impact Analysis */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-2 pb-4 border-b-4 border-[#1a73e8]">
                How Disclosure & Documentation Affect Home Value
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                The quality of your disclosure and documentation dramatically impacts buyer confidence and sale price. Professional restoration with complete documentation minimizes value loss.
              </p>

              <div className="space-y-6">
                {priceImpactScenarios.map((item, i) => (
                  <div key={i} className={`border-2 rounded-2xl p-6 ${
                    i === 0 ? 'border-green-200 bg-green-50' :
                    i === 1 ? 'border-yellow-200 bg-yellow-50' :
                    i === 2 ? 'border-orange-200 bg-orange-50' :
                    'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-medium text-text text-lg flex-1">{item.scenario}</h3>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${
                          i === 0 ? 'text-green-700' :
                          i === 1 ? 'text-yellow-700' :
                          i === 2 ? 'text-orange-700' :
                          'text-red-700'
                        }`}>
                          {item.valueImpact}
                        </div>
                        <div className="text-xs text-muted">Value Impact</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="text-xs font-bold text-text uppercase tracking-wide mb-1">Buyer Confidence</div>
                        <div className={`text-sm font-medium ${
                          item.buyerConfidence === 'High' ? 'text-green-700' :
                          item.buyerConfidence.includes('Moderate') ? 'text-yellow-700' :
                          item.buyerConfidence === 'Low' ? 'text-orange-700' :
                          'text-red-700'
                        }`}>
                          {item.buyerConfidence}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="text-xs font-bold text-text uppercase tracking-wide mb-1">Saleability</div>
                        <div className={`text-sm font-medium ${
                          item.saleability === 'Excellent' ? 'text-green-700' :
                          item.saleability === 'Challenging' ? 'text-yellow-700' :
                          'text-red-700'
                        }`}>
                          {item.saleability}
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200 md:col-span-1">
                        <div className="text-xs font-bold text-text uppercase tracking-wide mb-1">Details</div>
                        <div className="text-xs text-muted leading-relaxed">{item.details}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <DollarSign className="text-[#1a73e8] shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-text mb-2">Key Insight: Documentation Protects Value</h4>
                    <p className="text-sm text-muted leading-relaxed">
                      Northern Virginia's competitive real estate market rewards transparency. Homes with professionally documented water damage restoration (IICRC certification, mold clearance, warranties) typically sell within 0-3% of comparable homes without issues. Undisclosed damage discovered during inspections creates 15-25% negotiation leverage or deal cancellations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Certifications */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-2 pb-4 border-b-4 border-[#1a73e8]">
                Professional Certifications That Protect Your Sale
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Third-party certifications provide objective verification that restoration was performed properly and the home is safe. These documents dramatically increase buyer confidence and reduce value impact.
              </p>

              <div className="space-y-4">
                {professionalCertificationValue.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shrink-0">
                        <BadgeCheck size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-text">{item.certification}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                            item.buyerValue === 'Critical' ? 'bg-red-100 text-red-700' :
                            item.buyerValue === 'Essential for major damage' ? 'bg-orange-100 text-orange-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {item.buyerValue}
                          </span>
                        </div>
                        <div className="text-xs text-[#1a73e8] font-medium mb-3">Issued by: {item.issuer}</div>
                        <p className="text-sm text-muted leading-relaxed">{item.importance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Buyer Inspection Rights */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-2 pb-4 border-b-4 border-[#1a73e8]">
                Understanding Buyer Inspection Rights
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Virginia buyers have extensive inspection rights during the due diligence period. Understanding this process helps sellers prepare and respond appropriately.
              </p>

              <div className="space-y-6">
                {buyerInspectionRights.map((item, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4 text-white">
                      <div className="flex items-center gap-3">
                        <item.icon size={24} />
                        <h3 className="font-bold text-lg">{item.stage}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-bold text-purple-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <UserCheck size={14} />
                            Buyer Actions
                          </h4>
                          <ul className="space-y-2">
                            {item.buyerActions.map((action, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-muted">
                                <ArrowRight size={14} className="text-purple-500 mt-0.5 shrink-0" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                          <h4 className="text-xs font-bold text-green-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <Shield size={14} />
                            Seller Best Practices
                          </h4>
                          <ul className="space-y-2">
                            {item.sellerBestPractices.map((practice, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-green-800">
                                <CheckCircle2 size={14} className="text-green-600 mt-0.5 shrink-0" />
                                {practice}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Expert Guidance Section */}
            <section className="mb-24">
              <div className="bg-gradient-to-br from-[#1a73e8] to-blue-600 rounded-3xl p-8 md:p-12 text-white">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
                    <BadgeCheck size={14} /> Expert Guidance
                  </div>
                  <h2 className="font-display text-3xl font-medium mb-4">
                    Flood Doctor: Pre-Sale Documentation Specialists
                  </h2>
                  <p className="text-blue-100 leading-relaxed mb-8">
                    Selling a home with water damage history? We provide comprehensive documentation packages that protect your legal position and maximize buyer confidence. Our IICRC-certified restoration, third-party mold clearance testing, and detailed reporting transform water damage from a liability into a professionally resolved issue.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <FileCheck className="shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-medium mb-1">Complete Documentation Packages</div>
                        <div className="text-sm text-blue-100">All reports, certifications, warranties buyers need</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ClipboardCheck className="shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-medium mb-1">Mold Clearance Testing</div>
                        <div className="text-sm text-blue-100">Independent third-party verification</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-medium mb-1">Transferable Warranties</div>
                        <div className="text-sm text-blue-100">Protection that follows the property</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-medium mb-1">IICRC Certification</div>
                        <div className="text-sm text-blue-100">Industry-recognized standards</div>
                      </div>
                    </div>
                  </div>
                  <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
                    <Phone size={18} className="mr-2" />
                    Get Pre-Sale Assessment: (877) 497-0007
                  </Button>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <RelatedArticles categories={['water-damage', 'insurance']} currentSlug="/blog/water-damage-home-selling-disclosure/" />

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
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-google overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <h3 className="font-display text-xl font-medium mb-4 relative z-10">
                  Selling with Water Damage History?
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Get professional documentation that protects your legal position and maximizes buyer confidence.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <FileCheck size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">IICRC Certification</div>
                      <div className="text-xs text-blue-200">Industry standard</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <ClipboardCheck size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Mold Clearance</div>
                      <div className="text-xs text-blue-200">Third-party testing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Shield size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Legal Protection</div>
                      <div className="text-xs text-blue-200">Complete documentation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclosure Checklist */}
              <div className="bg-amber-50 rounded-[24px] p-6 border border-amber-200">
                <h4 className="font-medium text-amber-900 mb-4 flex items-center gap-2">
                  <AlertTriangle size={18} />
                  Must Disclose Immediately
                </h4>
                <ul className="space-y-2 text-sm text-amber-900">
                  <li className="flex items-start gap-2">
                    <XCircle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    Any past flooding events
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    Mold remediation history
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    Foundation water intrusion
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    Structural water damage
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    Ongoing drainage issues
                  </li>
                </ul>
              </div>

              {/* Value Protection Tip */}
              <div className="bg-green-50 rounded-[24px] p-6 border border-green-200">
                <h4 className="font-medium text-green-900 mb-3 flex items-center gap-2">
                  <DollarSign size={18} />
                  Protect Your Sale Price
                </h4>
                <p className="text-sm text-green-800 leading-relaxed mb-4">
                  Homes with IICRC-certified restoration and complete documentation sell for 95-100% of comparable values. DIY repairs or poor documentation result in 10-20% discounts.
                </p>
                <div className="text-xs text-green-700 font-bold">
                  Professional certification pays for itself.
                </div>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/blog/homeowners-insurance-water-damage-virginia" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Insurance Coverage Guide
                  </a>
                  <a href="/blog/mold-growth-after-water-damage-timeline" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Mold Growth Timeline
                  </a>
                  <a href="/services/residential/restoration-services/water-damage-restoration/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Restoration Services
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Protect Your Sale with Professional Documentation
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Our IICRC-certified restoration and comprehensive documentation packages give buyers confidence and protect sellers from post-closing liability.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-indigo-600 border-none hover:bg-indigo-50">
            <Phone size={20} className="mr-2" />
            Schedule Pre-Sale Assessment: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default WaterDamageHomeSellingDisclosure;
