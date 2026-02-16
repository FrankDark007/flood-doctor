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
  DollarSign,
  Home,
  Droplets,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  FileText,
  Calculator,
  Info,
  ArrowRight,
  Layers,
  Wind,
  Hammer
} from 'lucide-react';

const WaterDamageRestorationCostFairfax: React.FC = () => {
  const faqs = [
    {
      question: "How much does water damage restoration cost in Fairfax County?",
      answer: "Water damage restoration in Fairfax County typically costs between $3,500 and $12,000 for most residential projects. Small incidents (one room, clean water) range from $1,200-$3,500, while extensive damage (multiple floors, category 3 water) can exceed $15,000-$30,000. The exact cost depends on damage extent, water category, affected materials, and labor complexity."
    },
    {
      question: "Does homeowners insurance cover water damage restoration costs?",
      answer: "Most homeowners insurance policies cover sudden and accidental water damage restoration costs, including emergency mitigation, structural drying, and repairs. You'll pay your deductible (typically $500-$2,500), and insurance covers the rest. However, gradual damage from neglected maintenance and flood damage (requiring separate flood insurance) are generally excluded."
    },
    {
      question: "What factors affect water damage restoration costs the most?",
      answer: "The biggest cost drivers are water category (clean, gray, or black water), extent of damage (square footage affected), affected materials (drywall vs. hardwood vs. tile), labor intensity (crawlspace access vs. finished basement), and secondary damage like mold growth. Category 3 sewage damage costs 2-3x more than clean water due to hazmat protocols."
    },
    {
      question: "How long does water damage restoration take in Fairfax County?",
      answer: "Most residential water damage restoration projects in Fairfax County take 3-7 days for structural drying and 1-3 weeks for complete restoration including repairs. However, extensive damage or mold remediation can extend timelines to 4-6 weeks. Emergency water extraction typically begins within 2-4 hours of your call."
    },
    {
      question: "Can I get a free estimate for water damage restoration in Fairfax?",
      answer: "Yes, Flood Doctor provides free on-site assessments and detailed estimates for all water damage restoration projects in Fairfax County. We use Xactimate estimating software—the same system insurance companies use—to create accurate, line-item estimates that support your insurance claim."
    },
    {
      question: "Are there hidden costs I should know about?",
      answer: "Reputable restoration companies like Flood Doctor provide transparent, detailed estimates with no hidden fees. However, unexpected costs can arise from hidden damage discovered during demolition (like mold behind walls or rotted framing), upgraded materials requests, or additional services like contents storage. We communicate any changes immediately and get your approval before proceeding."
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
    "headline": "How Much Does Water Damage Restoration Cost in Fairfax County?",
    "description": "Comprehensive pricing guide for water damage restoration in Fairfax County, Virginia. Average costs, factors affecting price, insurance coverage, and how to get accurate estimates.",
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

  const costRanges = [
    {
      category: "Minor Water Damage",
      range: "$1,200 - $3,500",
      icon: Droplets,
      description: "Single room affected, clean water source, minimal structural impact",
      examples: [
        "Small bathroom leak (toilet supply line)",
        "Kitchen sink overflow (single room)",
        "Water heater drip pan overflow",
        "Dishwasher supply line leak"
      ],
      timeline: "1-3 days for drying, 3-5 days total"
    },
    {
      category: "Moderate Water Damage",
      range: "$3,500 - $8,000",
      icon: Home,
      description: "Multiple rooms affected, clean or gray water, some material removal required",
      examples: [
        "Burst washing machine hose (main floor)",
        "Basement sump pump failure (moderate flooding)",
        "HVAC condensate line backup",
        "Bathtub overflow affecting floor below"
      ],
      timeline: "3-5 days for drying, 7-14 days total"
    },
    {
      category: "Extensive Water Damage",
      range: "$8,000 - $15,000",
      icon: Layers,
      description: "Whole floor or multiple levels affected, significant material removal and repairs",
      examples: [
        "Burst pipe affecting multiple floors",
        "Severe basement flooding (3-6 inches)",
        "Roof leak affecting attic and living spaces",
        "Water heater rupture (50+ gallons)"
      ],
      timeline: "5-7 days for drying, 2-3 weeks total"
    },
    {
      category: "Severe Water Damage",
      range: "$15,000 - $30,000+",
      icon: AlertTriangle,
      description: "Entire home affected, category 3 sewage, extensive structural damage or mold",
      examples: [
        "Sewage backup throughout basement",
        "Whole-home flooding from storm surge",
        "Long-term hidden leak with extensive mold",
        "Frozen pipes bursting in multiple locations"
      ],
      timeline: "7-10 days for drying, 4-6 weeks total"
    }
  ];

  const costFactors = [
    {
      factor: "Water Category",
      icon: Droplets,
      impact: "High",
      description: "Category 1 (clean water) is least expensive. Category 2 (gray water) costs 30-50% more. Category 3 (sewage/black water) costs 100-200% more due to hazmat protocols, PPE requirements, and disposal fees.",
      priceExample: "Cat 1: $3,500 | Cat 2: $5,000 | Cat 3: $8,500"
    },
    {
      factor: "Extent of Damage",
      icon: TrendingUp,
      impact: "High",
      description: "Square footage affected directly impacts equipment needs, labor hours, and material costs. A 500 sq ft basement flood costs significantly less than a 2,000 sq ft whole-floor incident.",
      priceExample: "500 sq ft: $3,500 | 1,500 sq ft: $8,000 | 3,000 sq ft: $15,000+"
    },
    {
      factor: "Affected Materials",
      icon: Layers,
      impact: "High",
      description: "Tile and concrete dry quickly and resist damage. Hardwood floors, drywall, and insulation absorb water and often require replacement. Finished basements cost more than unfinished due to material removal.",
      priceExample: "Concrete: Low | Drywall: Moderate | Hardwood: High | Carpeted: Very High"
    },
    {
      factor: "Labor Complexity",
      icon: Hammer,
      impact: "Moderate",
      description: "Crawlspaces, tight attics, and difficult-to-access areas increase labor costs. Multi-story homes require more equipment movement. Removal of heavy furniture, appliances, or contents adds cost.",
      priceExample: "Basement (easy access): Base rate | Crawlspace: +25-40% | Multi-floor: +30-50%"
    },
    {
      factor: "Speed of Response",
      icon: Clock,
      impact: "Moderate",
      description: "Quick response minimizes damage and costs. Delayed mitigation leads to mold growth, structural deterioration, and significantly higher repair costs. Response within 24 hours typically saves 30-40% versus waiting 3-5 days.",
      priceExample: "Quick response: $5,000 | Delayed (mold growth): $8,500+"
    },
    {
      factor: "Secondary Damage",
      icon: Wind,
      impact: "Variable",
      description: "Mold remediation adds $1,500-$5,000. Structural repairs to rotted framing, subflooring, or joists add $3,000-$10,000. Contents cleaning, pack-out, or storage adds $1,000-$5,000.",
      priceExample: "No secondary: Base | Mold remediation: +$2,500 | Structural repairs: +$5,000+"
    }
  ];

  const insuranceCoverage = [
    {
      title: "What Insurance Typically Covers",
      icon: CheckCircle2,
      color: "green",
      items: [
        "Emergency water extraction and mitigation",
        "Structural drying equipment rental and monitoring",
        "Removal and disposal of damaged materials",
        "Mold prevention treatments (if water damage was covered)",
        "Reconstruction and repairs to pre-loss condition",
        "Contents cleaning and restoration",
        "Alternative Living Expenses (ALE) if home is uninhabitable"
      ]
    },
    {
      title: "What Insurance Typically Excludes",
      icon: AlertTriangle,
      color: "red",
      items: [
        "Flood damage (requires separate NFIP or private flood policy)",
        "Gradual damage from slow leaks or deferred maintenance",
        "Mold from pre-existing moisture conditions",
        "Upgrades beyond 'like kind and quality' replacement",
        "Cosmetic improvements or enhancements",
        "Damage from foundation cracks or hydrostatic pressure",
        "Sewer backup (unless separate endorsement purchased)"
      ]
    }
  ];

  const savingTips = [
    {
      tip: "Act Immediately",
      description: "Every hour of delay increases restoration costs by 10-15%. Call a professional within the first hour to minimize damage escalation and keep costs low.",
      savings: "Potential savings: 30-40%"
    },
    {
      tip: "Document Thoroughly",
      description: "Take 50-100 photos and videos before any cleanup. Comprehensive documentation supports your insurance claim and reduces out-of-pocket costs by ensuring full coverage.",
      savings: "Increases claim payout by 15-30%"
    },
    {
      tip: "Choose Certified Professionals",
      description: "IICRC-certified companies use proven processes that prevent costly callbacks and secondary damage. Cheap, uncertified contractors often cause more expensive problems down the road.",
      savings: "Prevents $3,000-$8,000 in future repairs"
    },
    {
      tip: "Don't Skip Professional Drying",
      description: "Attempting DIY drying with household fans saves money upfront but leads to hidden mold and structural damage costing 3-5x more later. Professional equipment pays for itself.",
      savings: "Avoids $5,000-$15,000 in mold remediation"
    },
    {
      tip: "Review Insurance Annually",
      description: "Ensure you have adequate coverage limits, low deductibles, and endorsements for sewer backup. Spending $50-$150 more annually can save $5,000-$10,000 during a loss.",
      savings: "Reduces out-of-pocket by $5,000-$10,000"
    },
    {
      tip: "Get Multiple Estimates (But Choose Quality)",
      description: "Compare 2-3 detailed estimates from certified companies. The cheapest bid often means corners cut, leading to callbacks. Look for detailed Xactimate estimates and IICRC certification.",
      savings: "Ensures fair pricing, prevents callbacks"
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Cost in Fairfax"
        description="Detailed water damage restoration cost guide for Fairfax County homeowners. Average prices, cost factors, insurance coverage, and how to save money on restoration."
        schema={[faqSchema, articleSchema]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Blog', path: '/blog/' },
            { label: 'Cost Guide', path: '#' }
          ]} />
        <ArticleAuthor datePublished="2025-01-02" readTime="10 min read" />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <DollarSign size={14} /> Pricing Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              How Much Does Water Damage Restoration Cost in Fairfax County?
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Understanding water damage restoration costs helps you budget appropriately and avoid overpaying. This comprehensive guide breaks down average costs, pricing factors, insurance coverage, and how to get accurate estimates in Fairfax County.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Get Free Estimate
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

            {/* Quick Answer Box */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                  <Calculator className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Quick Answer: Average Costs in Fairfax County</h3>
                  <div className="text-blue-800 text-sm mb-4 leading-relaxed space-y-2">
                    <p><strong>Minor damage (one room):</strong> $1,200 - $3,500</p>
                    <p><strong>Moderate damage (multiple rooms):</strong> $3,500 - $8,000</p>
                    <p><strong>Extensive damage (whole floor):</strong> $8,000 - $15,000</p>
                    <p><strong>Severe damage (entire home/sewage):</strong> $15,000 - $30,000+</p>
                  </div>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Most homeowners insurance policies cover water damage restoration costs minus your deductible (typically $500-$2,500). Actual costs vary based on water category, square footage, affected materials, and damage extent.
                  </p>
                </div>
              </div>
            </div>

            {/* Cost Ranges by Severity */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Water Damage Restoration Costs by Severity
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                The extent of water damage is the primary driver of restoration costs. Here's what Fairfax County homeowners can expect to pay based on damage severity.
              </p>

              <div className="space-y-6">
                {costRanges.map((range, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        <range.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-display text-xl font-medium text-text">
                            {range.category}
                          </h3>
                          <span className="text-2xl font-bold text-primary">{range.range}</span>
                        </div>
                        <p className="text-sm text-muted mb-4">{range.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-2">Common Examples</h4>
                        <ul className="space-y-1">
                          {range.examples.map((example, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-muted">
                              <CheckCircle2 size={12} className="text-green-600 mt-0.5 shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="text-xs font-bold text-text uppercase tracking-wide mb-2">Typical Timeline</h4>
                        <p className="text-sm text-blue-900">{range.timeline}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Factors Affecting Cost */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                6 Factors That Affect Water Damage Restoration Costs
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Understanding these cost drivers helps you anticipate expenses and make informed decisions about your restoration project.
              </p>

              <div className="space-y-6">
                {costFactors.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-text text-lg">{item.factor}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.impact === 'High' ? 'bg-red-100 text-red-700' :
                            item.impact === 'Moderate' ? 'bg-orange-100 text-orange-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {item.impact} Impact
                          </span>
                        </div>
                        <p className="text-sm text-muted mb-3 leading-relaxed">{item.description}</p>
                        <div className="bg-gray-50 rounded-lg p-3 inline-flex items-center gap-2">
                          <DollarSign size={14} className="text-green-600" />
                          <span className="text-xs font-medium text-text">{item.priceExample}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          <MidArticleCTA variant="emergency" />

            {/* Insurance Coverage */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                What Does Homeowners Insurance Cover?
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Understanding your insurance coverage helps you anticipate out-of-pocket costs and maximize your claim settlement.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {insuranceCoverage.map((section, i) => (
                  <div key={i} className={`rounded-2xl p-6 border-2 ${
                    section.color === 'green' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-6">
                      <section.icon className={section.color === 'green' ? 'text-green-600' : 'text-red-600'} size={28} />
                      <h3 className={`font-bold text-lg ${section.color === 'green' ? 'text-green-900' : 'text-red-900'}`}>
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item, j) => (
                        <li key={j} className={`flex items-start gap-3 text-sm ${
                          section.color === 'green' ? 'text-green-900' : 'text-red-900'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                            section.color === 'green' ? 'bg-green-600' : 'bg-red-600'
                          }`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start gap-4">
                  <Shield className="text-primary shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-text mb-2">Flood Doctor Works Directly With Your Insurance</h4>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      We handle all insurance communication, documentation, and billing. Our Xactimate estimates match insurance industry standards, reducing disputes and speeding claim approval. Most clients pay only their deductible—we bill insurance directly for the remaining balance.
                    </p>
                    <a href="/resources/insurance-claims-guide/" className="text-primary text-sm font-medium hover:underline">
                      Read Our Complete Insurance Claims Guide →
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Cost-Saving Tips */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                6 Ways to Reduce Water Damage Restoration Costs
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Smart decisions during and after water damage can significantly reduce your total restoration costs.
              </p>

              <div className="space-y-4">
                {savingTips.map((item, i) => (
                  <div key={i} className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 text-green-700 p-2 rounded-lg shrink-0">
                        <DollarSign size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-green-900">{item.tip}</h3>
                          <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full whitespace-nowrap">
                            {item.savings}
                          </span>
                        </div>
                        <p className="text-sm text-green-800 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Getting an Accurate Estimate */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                How to Get an Accurate Estimate
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Quality restoration companies provide detailed, transparent estimates. Here's what to expect and what to ask for.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Request an On-Site Assessment</h4>
                      <p className="text-sm text-muted">Accurate estimates require in-person inspection. Beware of companies providing phone quotes—they can't see hidden damage, moisture intrusion, or structural issues that significantly impact costs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Calculator size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Ask for Detailed Line-Item Pricing</h4>
                      <p className="text-sm text-muted">Quality estimates break down costs by category: water extraction, equipment rental, labor, material removal, repairs, etc. This transparency helps you understand what you're paying for and compare estimates fairly.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Verify Xactimate Estimates</h4>
                      <p className="text-sm text-muted">Insurance companies use Xactimate estimating software. Companies that provide Xactimate estimates (like Flood Doctor) reduce disputes and speed claim approval because pricing matches insurance databases.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Confirm IICRC Certification</h4>
                      <p className="text-sm text-muted">IICRC (Institute of Inspection, Cleaning and Restoration Certification) is the industry gold standard. Certified companies follow proven protocols that prevent callbacks and ensure thorough restoration.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-primary p-3 rounded-xl shrink-0">
                      <Info size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-text mb-2">Understand What's Included vs. Extra</h4>
                      <p className="text-sm text-muted">Ask whether the estimate includes equipment rental, monitoring visits, material disposal, antimicrobial treatment, and repairs. Some companies quote low then add fees later. Get everything in writing.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button href="tel:8774970007" variant="primary" size="lg">
                  <Phone size={18} className="mr-2" />
                  Get Your Free Estimate
                </Button>
              </div>
            </section>

            {/* External Resources */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Additional Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="https://www.iicrc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">IICRC Restoration Standards</div>
                    <div className="text-xs text-muted">Industry certification & pricing guidelines</div>
                  </div>
                </a>

                <a
                  href="https://www.fema.gov/disaster/how-declared"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="text-primary" size={20} />
                  <div>
                    <div className="font-medium text-text text-sm">FEMA Disaster Assistance</div>
                    <div className="text-xs text-muted">Federal aid for major flood events</div>
                  </div>
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <RelatedArticles categories={['water-damage', 'insurance']} currentSlug="/blog/water-damage-restoration-cost-fairfax/" />

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
                  Get a Free Estimate
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Our certified technicians provide detailed, transparent estimates using industry-standard Xactimate software. No hidden fees, no pressure.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Calculator size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Xactimate Estimates</div>
                      <div className="text-xs text-blue-200">Insurance-approved pricing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Shield size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">IICRC Certified</div>
                      <div className="text-xs text-blue-200">Industry gold standard</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Direct Insurance Billing</div>
                      <div className="text-xs text-blue-200">You pay deductible only</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Average Cost Breakdown */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4">Average Cost Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted">Water extraction</span>
                    <span className="font-medium text-text">$400 - $1,200</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted">Structural drying (3-7 days)</span>
                    <span className="font-medium text-text">$800 - $2,500</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted">Material removal & disposal</span>
                    <span className="font-medium text-text">$500 - $2,000</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted">Antimicrobial treatment</span>
                    <span className="font-medium text-text">$200 - $600</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted">Reconstruction & repairs</span>
                    <span className="font-medium text-text">$1,500 - $8,000</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                    <span className="font-bold text-text">Typical Total</span>
                    <span className="font-bold text-primary text-lg">$3,500 - $12,000</span>
                  </div>
                </div>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/resources/insurance-claims-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Insurance Claims Guide
                  </a>
                  <a href="/resources/emergency-checklists/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Emergency Checklists
                  </a>
                  <a href="/services/residential/restoration-services/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Transparent Pricing, No Surprises
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a detailed, line-item estimate for your water damage restoration project. We explain every cost and work directly with your insurance.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-primary border-none hover:bg-blue-50">
            <Phone size={20} className="mr-2" />
            Call for Free Estimate: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default WaterDamageRestorationCostFairfax;
