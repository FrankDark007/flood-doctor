import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import { generateArticleSchema, generateBreadcrumbSchema, combineSchemas } from '../../utils/schema';
import {
  Phone,
  DollarSign,
  Droplets,
  Home,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Ruler,
  Layers,
  Wrench,
  FileText,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const WaterDamageCostGuide: React.FC = () => {
  const faqs = [
    {
      question: "How much does water damage restoration cost on average?",
      answer: "Water damage restoration typically costs between $1,300 and $5,600 for residential properties, with the national average around $3,300. However, costs can range from under $1,000 for minor incidents to $20,000+ for severe flooding with structural damage. The final cost depends on the water category, affected square footage, materials damaged, and whether mold remediation is needed."
    },
    {
      question: "Does insurance cover water damage restoration costs?",
      answer: "Most homeowners insurance covers sudden and accidental water damage, such as burst pipes or appliance failures. However, flood damage requires separate flood insurance, and gradual damage from maintenance neglect is typically excluded. Your out-of-pocket cost is usually just your deductible, which ranges from $500 to $2,500 for most policies."
    },
    {
      question: "Why is Category 3 water damage so expensive to clean up?",
      answer: "Category 3 (black water) contains sewage, chemicals, or other hazardous contaminants. Cleanup requires specialized PPE, containment procedures, antimicrobial treatments, and often complete removal of affected porous materials (drywall, carpet, insulation). These safety requirements and disposal costs can triple the price compared to clean water damage."
    },
    {
      question: "How much does it cost to dry out a flooded basement?",
      answer: "Basement water extraction and drying typically costs $3,000 to $10,000 depending on size and water depth. A small basement with 1-2 inches of clean water might cost $1,500-$3,000, while a finished basement with several feet of contaminated water could exceed $15,000 including content restoration."
    },
    {
      question: "What costs extra beyond the initial water damage estimate?",
      answer: "Common additional costs include: mold remediation ($1,500-$9,000), content pack-out and cleaning ($1,000-$5,000), structural repairs ($2,000-$10,000+), and temporary housing if you can't stay in your home. Always ask for a detailed scope of work that identifies what's included and what might be supplemental."
    },
    {
      question: "Is it cheaper to do water damage cleanup myself?",
      answer: "DIY cleanup for minor spills can save money, but improper drying often leads to mold growth within 24-72 hours, which costs far more to remediate. Professional equipment (commercial dehumidifiers, air movers, moisture meters) ensures complete drying. For anything beyond a small, contained spill of clean water, professional restoration typically saves money long-term."
    },
    {
      question: "How do restoration companies calculate their prices?",
      answer: "Most restoration companies use Xactimate, the insurance industry's standard pricing software. It provides line-item pricing based on local labor rates, material costs, and specific tasks required. This ensures consistency and makes it easier to work with insurance adjusters who use the same system."
    },
    {
      question: "Can I negotiate water damage restoration costs?",
      answer: "While Xactimate prices are standardized, you can discuss scope of work, payment terms, and whether certain items are truly necessary. For insurance claims, the negotiation happens between your contractor and the insurance adjuster. Having a restoration company that advocates for you (rather than the insurance company's preferred vendor) often results in better coverage."
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
    headline: 'Water Damage Restoration Cost Guide 2025',
    description: 'How much does water damage restoration cost? Complete pricing guide with cost ranges by damage severity, factors affecting price, and tips to reduce expenses.',
    slug: '/resources/water-damage-cost-guide/',
    datePublished: '2025-01-01',
    articleSection: 'Resources'
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: 'Resources', path: '/resources/' },
    { label: 'Cost Guide', path: '/resources/water-damage-cost-guide/' }
  ]);

  const pageSchema = combineSchemas(breadcrumbSchema, articleSchema, faqSchema);

  const costFactors = [
    {
      icon: Layers,
      title: "Water Category",
      description: "Clean water (Category 1) costs least. Gray water (Category 2) costs 20-40% more. Black water (Category 3) can triple costs due to hazmat protocols.",
      impact: "High Impact"
    },
    {
      icon: Ruler,
      title: "Affected Square Footage",
      description: "Larger areas require more equipment, longer drying times, and more labor. Costs typically range $3-$7 per square foot for extraction and drying.",
      impact: "High Impact"
    },
    {
      icon: Clock,
      title: "Time Before Mitigation",
      description: "Water left standing for 24+ hours causes secondary damage and mold risk, significantly increasing restoration costs.",
      impact: "High Impact"
    },
    {
      icon: Home,
      title: "Materials Affected",
      description: "Hardwood floors, custom cabinets, and finished basements cost more to restore than concrete or tile. Some materials must be replaced entirely.",
      impact: "Medium Impact"
    },
    {
      icon: Wrench,
      title: "Accessibility",
      description: "Water in wall cavities, under floors, or in crawl spaces requires more invasive techniques and equipment to properly dry.",
      impact: "Medium Impact"
    },
    {
      icon: Building2,
      title: "Property Type",
      description: "Commercial properties often have specialized requirements (data centers, medical facilities) that increase complexity and cost.",
      impact: "Medium Impact"
    }
  ];

  const costRanges = [
    {
      category: "Minor Water Damage",
      examples: "Small leak, limited to one room, clean water, caught quickly",
      range: "$1,000 - $3,000",
      includes: ["Water extraction", "1-3 day drying", "Basic monitoring"],
      color: "green"
    },
    {
      category: "Moderate Water Damage",
      examples: "Multiple rooms affected, appliance failure, or gray water",
      range: "$3,000 - $7,500",
      includes: ["Full extraction", "3-5 day drying", "Some material removal", "Antimicrobial treatment"],
      color: "yellow"
    },
    {
      category: "Significant Water Damage",
      examples: "Flooded basement, sewage backup, or delayed discovery",
      range: "$7,500 - $15,000",
      includes: ["Emergency extraction", "5-7+ day drying", "Extensive demo", "Content pack-out", "Mold prevention"],
      color: "orange"
    },
    {
      category: "Severe / Catastrophic",
      examples: "Major flooding, structural damage, category 3 water throughout",
      range: "$15,000 - $50,000+",
      includes: ["Full mitigation", "Structural drying", "Complete reconstruction", "Content restoration", "Mold remediation"],
      color: "red"
    }
  ];

  const serviceBreakdown = [
    { service: "Water Extraction", range: "$3 - $4 per sq ft", notes: "Removing standing water with truck-mounted or portable extractors" },
    { service: "Structural Drying", range: "$4 - $7 per sq ft", notes: "Industrial dehumidifiers and air movers for 3-5+ days" },
    { service: "Moisture Monitoring", range: "$75 - $150 per visit", notes: "Daily readings to track drying progress" },
    { service: "Drywall Removal", range: "$1 - $3 per sq ft", notes: "Flood cuts typically 2-4 feet up the wall" },
    { service: "Carpet Removal", range: "$1 - $2 per sq ft", notes: "Includes disposal; pad almost always replaced" },
    { service: "Antimicrobial Treatment", range: "$1 - $3 per sq ft", notes: "Required for Category 2 and 3 water" },
    { service: "Content Pack-Out", range: "$500 - $2,500", notes: "Moving and storing belongings during restoration" },
    { service: "Mold Remediation", range: "$15 - $30 per sq ft", notes: "If mold develops; containment and removal protocols" },
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Cost Guide 2025"
        description="How much does water damage restoration cost? Complete pricing guide with cost ranges by damage severity, factors affecting price, and tips to reduce expenses."
        schema={pageSchema}
      />

      {/* Hero */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Cost Guide', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/50 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <DollarSign size={14} /> Pricing Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Water Damage Restoration Cost Guide
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Understanding restoration costs helps you budget, evaluate estimates, and avoid overpaying. Here's what to expect based on real-world pricing data.
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

            {/* Quick Cost Overview */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Cost Ranges by Damage Severity
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Costs vary widely based on the extent of damage. Here's what to expect for different scenarios.
              </p>

              <div className="space-y-6">
                {costRanges.map((item, i) => (
                  <div key={i} className={`rounded-2xl border overflow-hidden ${
                    item.color === 'green' ? 'border-green-200 bg-green-50/30' :
                    item.color === 'yellow' ? 'border-yellow-200 bg-yellow-50/30' :
                    item.color === 'orange' ? 'border-orange-200 bg-orange-50/30' :
                    'border-red-200 bg-red-50/30'
                  }`}>
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-medium text-text text-lg">{item.category}</h3>
                          <p className="text-sm text-muted">{item.examples}</p>
                        </div>
                        <div className={`text-2xl font-bold ${
                          item.color === 'green' ? 'text-green-700' :
                          item.color === 'yellow' ? 'text-yellow-700' :
                          item.color === 'orange' ? 'text-orange-600' :
                          'text-red-600'
                        }`}>
                          {item.range}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.includes.map((inc, j) => (
                          <span key={j} className="inline-flex items-center gap-1 text-xs bg-white/60 px-2 py-1 rounded-full text-gray-600">
                            <CheckCircle2 size={12} className="text-gray-400" />
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Factors Affecting Cost */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                What Affects Restoration Costs
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                These six factors have the biggest impact on your final bill.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {costFactors.map((factor, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                        <factor.icon size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-text">{factor.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            factor.impact === 'High Impact'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {factor.impact}
                          </span>
                        </div>
                        <p className="text-sm text-muted">{factor.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Cost Breakdown */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Service-by-Service Cost Breakdown
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Here's what individual restoration services typically cost in the Northern Virginia area.
              </p>

              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-6 font-medium text-text">Service</th>
                        <th className="text-left py-4 px-6 font-medium text-text">Typical Cost</th>
                        <th className="text-left py-4 px-6 font-medium text-text hidden md:table-cell">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceBreakdown.map((item, i) => (
                        <tr key={i} className="border-b border-gray-100 last:border-0">
                          <td className="py-4 px-6 text-sm text-text font-medium">{item.service}</td>
                          <td className="py-4 px-6 text-sm text-primary font-medium">{item.range}</td>
                          <td className="py-4 px-6 text-sm text-muted hidden md:table-cell">{item.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs text-muted mt-4">
                * Prices based on Northern Virginia area rates. Your actual costs may vary based on specific conditions.
              </p>
            </section>

            {/* How to Reduce Costs */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                How to Minimize Restoration Costs
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Take these steps to reduce your out-of-pocket expenses.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Act immediately",
                    description: "Every hour of delay increases damage and cost. Call for emergency service as soon as you discover water damage—even at 2 AM."
                  },
                  {
                    title: "Stop the water source",
                    description: "If safe, shut off the water supply or stop the leak. Ongoing water flow dramatically increases the scope and cost of restoration."
                  },
                  {
                    title: "Document before cleanup",
                    description: "Take photos and video before any cleanup. Thorough documentation helps maximize your insurance claim and prevents disputes."
                  },
                  {
                    title: "Use your insurance properly",
                    description: "File your claim promptly and work with a restoration company that bills insurance directly. You typically only pay your deductible."
                  },
                  {
                    title: "Get multiple estimates (if time allows)",
                    description: "For non-emergency situations, compare 2-3 estimates. But don't delay emergency mitigation to shop around—that costs more in the end."
                  },
                  {
                    title: "Choose an independent contractor",
                    description: "Insurance-preferred vendors work for the carrier, not you. Independent restoration companies advocate for proper scope and coverage."
                  }
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-medium text-text mb-1">{tip.title}</h3>
                      <p className="text-sm text-muted">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Water Damage Cost FAQ"
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
                  Get a Free Estimate
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  We provide detailed, transparent estimates using Xactimate—the same software insurance companies use. No surprises.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Direct Insurance Billing</div>
                      <div className="text-xs text-blue-200">We work with all carriers</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-primary" />
                  Quick Cost Facts
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">National average cost</span>
                    <span className="font-medium text-text">$3,300</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Typical range</span>
                    <span className="font-medium text-text">$1,300 - $5,600</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Per sq ft (drying)</span>
                    <span className="font-medium text-text">$4 - $7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Mold adds</span>
                    <span className="font-medium text-red-600">+$1,500 - $9,000</span>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-amber-50 rounded-[24px] p-6 border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-900 mb-2">Delay = Higher Cost</h4>
                    <p className="text-sm text-amber-800">
                      Water damage costs increase 50-100% when mitigation is delayed beyond 24 hours due to secondary damage and mold growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related */}
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
                  <a href="/resources/restoration-timeline-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Restoration Timeline
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Transparent Pricing, No Surprises
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a detailed estimate before work begins. We use industry-standard pricing and work directly with your insurance.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-green-700 border-none hover:bg-green-50">
            <Phone size={20} className="mr-2" />
            Get Free Estimate
          </Button>
        </div>
      </div>
    </main>
  );
};

export default WaterDamageCostGuide;
