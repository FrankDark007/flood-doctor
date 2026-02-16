import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import { generateArticleSchema, generateBreadcrumbSchema, combineSchemas } from '../../utils/schema';
import {
  Phone,
  Camera,
  FileText,
  ClipboardCheck,
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  MessageSquare,
  Scale,
  FileWarning,
  Droplets,
  Building2,
  Flame,
  Users,
  ArrowRight
} from 'lucide-react';

const InsuranceClaimsGuide: React.FC = () => {
  // FAQ data with schema-ready structure
  const faqs = [
    {
      question: "How long do I have to file a water damage insurance claim?",
      answer: "Most policies require you to report water damage 'promptly' or 'as soon as reasonably possible.' While specific deadlines vary by carrier, you should contact your insurance company within 24-48 hours of discovering the damage. Delaying can give insurers grounds to reduce or deny your claim."
    },
    {
      question: "Does homeowners insurance cover water damage?",
      answer: "Homeowners insurance typically covers sudden and accidental water damage, such as burst pipes, appliance malfunctions, or storm damage. However, it generally excludes gradual damage (slow leaks), flood damage (requires separate flood insurance), and damage from neglected maintenance. The key is whether the damage was sudden and unexpected."
    },
    {
      question: "What if my insurance claim is denied?",
      answer: "If your claim is denied, request a written explanation citing the specific policy language. You have the right to appeal the decision, hire a public adjuster, or consult an attorney. Many denials are overturned when proper documentation is provided or when the policy language is challenged."
    },
    {
      question: "Should I accept the first settlement offer from my insurance company?",
      answer: "Not necessarily. Initial offers are often lower than what you're entitled to. Review the estimate carefully, compare it to independent contractor quotes, and negotiate if the offer doesn't cover all necessary repairs. Flood Doctor can provide a detailed Xactimate estimate to support your case."
    },
    {
      question: "Can I choose my own water damage restoration company?",
      answer: "Yes. You have the legal right to hire any licensed restoration contractor, regardless of what your insurance company recommends. Insurance 'preferred vendors' work for the carrier, not you. Hiring an independent company like Flood Doctor means we advocate for your interests, not the insurance company's."
    },
    {
      question: "What is an insurance adjuster and what do they do?",
      answer: "An insurance adjuster is sent by your insurance company to assess the damage and estimate repair costs. They work for the insurance company, so their goal is to settle claims quickly and economically. A public adjuster, by contrast, works for you and typically gets 10-15% higher settlements."
    },
    {
      question: "Does water damage affect my insurance rates?",
      answer: "Filing a water damage claim may increase your premiums, but this varies by carrier, your claims history, and the cause of damage. 'Sudden and accidental' claims from events beyond your control (like burst pipes) typically have less impact than claims from maintenance neglect."
    },
    {
      question: "What is ACV vs. RCV in my insurance policy?",
      answer: "ACV (Actual Cash Value) pays for items at their current depreciated value. RCV (Replacement Cost Value) pays to replace items with new equivalents. RCV policies pay more but may issue payment in two parts: ACV upfront, and the depreciation 'holdback' after repairs are completed."
    }
  ];

  // Generate FAQ Schema
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
    headline: 'Water Damage Insurance Claims Guide',
    description: 'Complete guide to filing water damage insurance claims. Step-by-step process, documentation checklist, coverage info, and how to handle adjuster disputes.',
    slug: '/resources/insurance-claims-guide/',
    datePublished: '2025-01-01',
    articleSection: 'Resources'
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: 'Resources', path: '/resources/' },
    { label: 'Insurance Claims Guide', path: '/resources/insurance-claims-guide/' }
  ]);

  const pageSchema = combineSchemas(breadcrumbSchema, articleSchema, faqSchema);

  const claimsSteps = [
    {
      number: "01",
      title: "Document Everything Immediately",
      icon: Camera,
      content: "Before any cleanup begins, photograph and video all damage from multiple angles. Capture the water source, affected areas, damaged belongings, and moisture intrusion paths. This evidence is critical for your claim.",
      tip: "Use your phone's timestamp feature and take at least 50-100 photos covering every affected room."
    },
    {
      number: "02",
      title: "Report the Loss to Your Carrier",
      icon: Phone,
      content: "Call your insurance company's 24-hour claims line to report the damage. Provide the date and time of loss, a brief description, and request your claim number. Ask for the adjuster's name and direct contact information.",
      tip: "Write down your claim number immediately—you'll reference it in every communication."
    },
    {
      number: "03",
      title: "Mitigate Further Damage",
      icon: Shield,
      content: "Your policy requires you to prevent additional damage. This means stopping the water source, extracting standing water, and beginning the drying process. Do not wait for adjuster approval—emergency mitigation is covered.",
      tip: "Keep all receipts for emergency services. You can call Flood Doctor 24/7 at (877) 497-0007."
    },
    {
      number: "04",
      title: "Meet with the Insurance Adjuster",
      icon: ClipboardCheck,
      content: "Schedule the adjuster visit when you or your restoration contractor can be present. Walk them through all affected areas, including hidden damage behind walls. Provide your documentation and ensure they document moisture readings.",
      tip: "Don't let the adjuster rush through—hidden damage is often missed in quick inspections."
    },
    {
      number: "05",
      title: "Review and Negotiate the Estimate",
      icon: Scale,
      content: "Once you receive the insurance estimate, compare it against independent repair quotes. If the estimate is insufficient, submit a detailed supplemental claim with supporting documentation and contractor estimates.",
      tip: "Flood Doctor provides Xactimate estimates that match industry-standard insurance pricing."
    },
    {
      number: "06",
      title: "Complete Repairs and Close the Claim",
      icon: FileText,
      content: "After repairs are completed, submit all invoices and photos to your insurance company. If you have an RCV policy, request the depreciation holdback payment. Keep all documentation for at least 5 years.",
      tip: "Never sign a 'satisfaction of claim' form until you're fully satisfied with the settlement."
    }
  ];

  const coveredItems = [
    { icon: Droplets, text: "Burst or frozen pipes" },
    { icon: Building2, text: "Appliance malfunctions (water heater, washing machine)" },
    { icon: Flame, text: "Water damage from firefighting efforts" },
    { icon: AlertTriangle, text: "Sudden HVAC leaks or failures" },
    { icon: Shield, text: "Storm damage (wind-driven rain, ice dams)" },
    { icon: Users, text: "Vandalism causing water damage" },
  ];

  const notCoveredItems = [
    { text: "Flood damage (requires separate NFIP or private flood policy)" },
    { text: "Gradual leaks or seepage" },
    { text: "Damage from deferred maintenance" },
    { text: "Sewer backup (unless endorsement purchased)" },
    { text: "Mold from pre-existing moisture" },
    { text: "Foundation cracks from hydrostatic pressure" },
  ];

  const documentationChecklist = [
    "Photos/videos of all damage before cleanup",
    "Policy number and declarations page",
    "Claim number and adjuster contact info",
    "Receipts for emergency mitigation services",
    "List of damaged personal property with values",
    "Receipts for temporary living expenses (ALE)",
    "Repair estimates from licensed contractors",
    "Moisture readings and drying logs",
    "Communication log with dates and summaries",
    "Written correspondence from insurance company",
  ];

  const adjusterDisputes = [
    {
      dispute: "Adjuster says damage is from 'gradual leak' not covered",
      response: "Request proof of the timeline. Ask for the specific policy language they're citing. Document that you had no prior knowledge of the leak. Get a plumber's letter confirming the failure was sudden."
    },
    {
      dispute: "Estimate doesn't cover all damaged materials",
      response: "Provide detailed photos of hidden damage. Request a re-inspection with your contractor present. Submit a formal supplemental claim with line-item discrepancies noted."
    },
    {
      dispute: "Insurance wants to use cheaper materials than original",
      response: "Your policy likely guarantees 'like kind and quality' replacement. Document the original materials with photos or manufacturer specs. Cite the policy language requiring equivalent replacement."
    },
    {
      dispute: "Adjuster claims mold was pre-existing",
      response: "Mold can grow within 24-48 hours in wet conditions. Provide a timeline showing the water event and mold discovery. Get professional mold testing with a dated report."
    },
    {
      dispute: "They're only paying ACV, not replacement cost",
      response: "Check if you have RCV coverage. If so, you receive depreciation holdback after completing repairs. Submit completion photos and final invoices to trigger the additional payment."
    },
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Insurance Claims Guide"
        description="Complete guide to filing water damage insurance claims. Step-by-step process, documentation checklist, coverage info, and how to handle adjuster disputes."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-subtle border-b border-border pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/resources/' },
            { label: 'Insurance Claims Guide', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <FileWarning size={14} /> Insurance Resource
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6 leading-tight">
              Water Damage Insurance Claims Guide
            </h1>
            <p className="font-sans text-xl text-muted leading-relaxed mb-8">
              Filing a water damage claim can be overwhelming. This comprehensive guide walks you through the entire process—from first call to final payment—so you get the coverage you deserve.
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

            {/* Step-by-Step Claims Process */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Step-by-Step Claims Process
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Follow these six steps to maximize your water damage insurance claim and avoid common pitfalls.
              </p>

              <div className="space-y-8">
                {claimsSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-6">
                      {/* Step Number */}
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white items-center justify-center shrink-0 shadow-lg">
                        <span className="text-xl font-bold">{step.number}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <step.icon size={20} className="text-primary sm:hidden" />
                          <h3 className="font-display text-xl font-medium text-text">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted leading-relaxed mb-4">
                          {step.content}
                        </p>
                        <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 inline-flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-sm font-medium text-text">{step.tip}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Covered vs Not Covered */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                What's Covered vs. Not Covered
              </h2>
              <p className="text-muted text-lg mb-12 max-w-2xl">
                Understanding your policy is key. Here's what most homeowners policies include—and exclude.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Typically Covered */}
                <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="text-green-600" size={28} />
                    <h3 className="font-bold text-green-800 text-lg">Typically Covered</h3>
                  </div>
                  <ul className="space-y-4">
                    {coveredItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-green-900">
                        <item.icon size={18} className="text-green-600 mt-0.5 shrink-0" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Typically NOT Covered */}
                <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100">
                  <div className="flex items-center gap-3 mb-6">
                    <XCircle className="text-red-600" size={28} />
                    <h3 className="font-bold text-red-800 text-lg">Typically NOT Covered</h3>
                  </div>
                  <ul className="space-y-4">
                    {notCoveredItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-red-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Documentation Checklist */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Documentation Checklist
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Thorough documentation is your strongest asset. Use this checklist to build an airtight claim file.
              </p>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <div className="grid md:grid-cols-2 gap-4">
                  {documentationChecklist.map((item, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border-2 border-gray-300 group-hover:border-primary flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                        <CheckCircle2 size={12} className="text-primary opacity-0 group-hover:opacity-50 transition-opacity" />
                      </div>
                      <span className="text-sm text-text">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* How Flood Doctor Helps */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                How Flood Doctor Helps With Your Claim
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                We don't just restore your property—we advocate for you throughout the insurance process.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Camera,
                    title: "Professional Documentation",
                    description: "We photograph and document every aspect of the damage, creating a comprehensive evidence file that supports your claim."
                  },
                  {
                    icon: FileText,
                    title: "Xactimate Estimates",
                    description: "We use Xactimate—the same software insurance companies use—to create detailed, line-item estimates they can't easily dispute."
                  },
                  {
                    icon: MessageSquare,
                    title: "Adjuster Coordination",
                    description: "We meet with your adjuster on-site, walk them through the damage, and ensure hidden moisture and secondary damage are documented."
                  },
                  {
                    icon: Scale,
                    title: "Supplement Negotiation",
                    description: "If the initial estimate falls short, we prepare and submit supplemental claims with detailed justification for additional coverage."
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

            {/* Common Adjuster Disputes */}
            <section className="mb-24">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Common Adjuster Disputes & How to Handle Them
              </h2>
              <p className="text-muted text-lg mb-8 max-w-2xl">
                Insurance adjusters may push back on claims. Here's how to respond to common objections.
              </p>

              <div className="space-y-6">
                {adjusterDisputes.map((item, i) => (
                  <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                    <div className="bg-amber-50/50 px-6 py-4 border-b border-amber-100">
                      <div className="flex items-start gap-3">
                        <AlertTriangle size={20} className="text-amber-600 mt-0.5 shrink-0" />
                        <span className="font-medium text-amber-900">{item.dispute}</span>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <div className="flex items-start gap-3">
                        <ArrowRight size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-muted text-sm">{item.response}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Insurance Claims FAQ"
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
                  Need Help With Your Claim?
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 relative z-10">
                  Our team has filed thousands of water damage claims with every major carrier. We know what adjusters look for and how to document damage correctly.
                </p>

                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-primary border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">24/7 Emergency Response</div>
                      <div className="text-xs text-blue-200">Including holidays</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">Direct Insurance Billing</div>
                      <div className="text-xs text-blue-200">We handle the paperwork</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4">By The Numbers</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Average claim processing</span>
                    <span className="font-medium text-text">30-60 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Documentation photos needed</span>
                    <span className="font-medium text-text">50-100+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Claims denied on first attempt</span>
                    <span className="font-medium text-red-600">~10-15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted">Denials overturned on appeal</span>
                    <span className="font-medium text-green-600">~50%</span>
                  </div>
                </div>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-text mb-4">Related Resources</h4>
                <div className="space-y-3">
                  <a href="/resources/emergency-checklists/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Emergency Checklists
                  </a>
                  <a href="/resources/homeowner-guides/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Homeowner Guides
                  </a>
                  <a href="/resources/insurance-guide/" className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-primary" />
                    Navigating the Claims Process
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
            Don't Navigate Your Claim Alone
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We've helped thousands of homeowners get fair settlements. Call now for a free consultation about your water damage claim.
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

export default InsuranceClaimsGuide;
