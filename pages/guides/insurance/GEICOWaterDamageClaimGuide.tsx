import React from 'react';
import PageMeta from '../../../components/ui/PageMeta';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import Button from '../../../components/ui/Button';
import GoogleStyleFAQ from '../../../components/sections/GoogleStyleFAQ';
import { generateBreadcrumbSchema, combineSchemas } from '../../../utils/schema';
import {
  Phone,
  Clock,
  CheckCircle2,
  Camera,
  FileText,
  DollarSign,
  Shield,
  Zap,
  ArrowRight,
  Smartphone,
  Users,
  AlertTriangle,
  Car,
  Home
} from 'lucide-react';

const GEICOWaterDamageClaimGuide: React.FC = () => {
  const steps = [
    {
      name: 'Report Your Claim via GEICO App or 1-800-841-3000',
      text: 'GEICO homeowners insurance is underwritten by partner companies (Homesite, Stillwater, others). File through the GEICO mobile app or call 1-800-841-3000 24/7. In the app, select "Homeowners" → "Report a Claim." You\'ll need: your policy number, date/time of damage, and a description. GEICO routes claims to your underwriter, who assigns an adjuster within 24-48 hours.',
      tip: 'Note your underwriter\'s name during filing—you\'ll deal directly with them for the claim.',
      timeEstimate: '15-30 minutes',
      tools: ['GEICO app', 'Policy number', 'Phone for backup']
    },
    {
      name: 'Identify Your Underwriter',
      text: 'GEICO partners with several home insurance companies: Homesite, Stillwater, Markel American, and others. Your policy documents show your actual underwriter. This matters because each underwriter has slightly different processes. Check your declarations page for the underwriter name. You may deal with GEICO initially, then be transferred to your underwriter\'s claims team.',
      tip: 'Save your underwriter\'s direct claims number—you may need to contact them directly for status updates.',
      timeEstimate: '10-15 minutes',
      tools: ['Policy declarations page', 'Notepad']
    },
    {
      name: 'Document All Damage Thoroughly',
      text: 'Before cleanup, capture comprehensive documentation. Photograph: water source, standing water depth (use a ruler), every affected room from multiple angles, damaged belongings with brand labels, and moisture on walls/ceilings. Create a narrated video walkthrough. Upload photos to the claim portal (GEICO or underwriter). Take 100+ photos for maximum evidence supporting your settlement.',
      tip: 'Different underwriters have different portals. Follow the instructions you receive for photo uploads.',
      timeEstimate: '30-60 minutes',
      tools: ['Smartphone camera', 'Ruler for depth', 'Notepad for inventory']
    },
    {
      name: 'Mitigate Further Damage',
      text: 'Your policy requires you to prevent additional damage. Stop the water source, extract standing water, remove saturated materials, and set up fans/dehumidifiers. Save ALL receipts—mitigation costs are covered. Do NOT make permanent repairs before adjuster inspection. Document your mitigation efforts with photos. Most GEICO underwriters pre-approve emergency mitigation.',
      tip: 'Start mitigation immediately—don\'t wait for adjuster approval to prevent further damage.',
      timeEstimate: '1-4 hours',
      tools: ['Emergency supplies', 'Receipt folder', 'Camera']
    },
    {
      name: 'Review Your Coverage Details',
      text: 'Check your GEICO homeowners policy for coverage specifics. Standard coverages: Dwelling (structure), Personal Property (belongings), and Additional Living Expenses. Coverage limits and options vary by underwriter. Check for: Water Backup endorsement (sewer/drain), Replacement Cost vs. Actual Cash Value, and your deductible amount. GEICO policies are generally competitively priced with standard coverage.',
      tip: 'GEICO partners offer different coverage options. Know exactly what your policy includes before the adjuster visit.',
      timeEstimate: '30-60 minutes',
      tools: ['Policy documents', 'Highlighter', 'Notepad']
    },
    {
      name: 'Prepare for Adjuster Inspection',
      text: 'Your underwriter (not GEICO) assigns the adjuster. Expect contact within 24-72 hours. For significant damage, a field adjuster visits. For smaller claims, virtual inspection may be offered. Before inspection: organize documentation. During inspection: walk through ALL damage, point out hidden moisture (inside walls, under flooring), and request moisture meter readings. Get the adjuster\'s preliminary estimate.',
      tip: 'The adjuster works for your underwriter, not GEICO. Build rapport directly with them.',
      timeEstimate: '2-4 hours',
      tools: ['Organized documentation', 'Access to all areas', 'Notepad']
    },
    {
      name: 'Get IICRC-Certified Restoration Estimates',
      text: 'Contact 2-3 IICRC-certified restoration companies for estimates. Choose companies using Xactimate—adjusters use the same platform. Compare estimates to the adjuster\'s assessment. Ask about experience with your specific underwriter (Homesite, Stillwater, etc.) and direct billing capabilities. Different underwriters have different contractor networks.',
      tip: 'Ask specifically: "Have you worked with [underwriter name] claims?" Experience with your underwriter speeds processing.',
      timeEstimate: '1-2 days',
      tools: ['Phone', 'Adjuster estimate for comparison']
    },
    {
      name: 'Compare Settlement and Negotiate',
      text: 'Your underwriter provides the settlement offer—not GEICO directly. Compare line-by-line with contractor estimates. Look for: missed areas, incorrect measurements, underpriced materials, or excluded items. ACV payment typically comes first; RCV depreciation is recoverable after repairs. Settlements usually process within 7-14 days of approval. Negotiate through your underwriter.',
      tip: 'GEICO customer service can\'t modify settlements—work directly with your underwriter\'s claims department.',
      timeEstimate: '2-4 hours',
      tools: ['Settlement statement', 'Contractor estimates', 'Calculator']
    },
    {
      name: 'Complete Repairs and Recover Depreciation',
      text: 'After repairs are finished, submit final invoices to your underwriter to recover withheld depreciation (if you have RCV coverage). Submit through the underwriter\'s portal, not GEICO\'s. Include: contractor invoices, before/after photos, and completion documentation. Depreciation recovery typically processes within 10-14 days. Keep all records for 7+ years.',
      tip: 'Depreciation recovery is 20-40% of your settlement. Submit promptly after repairs complete.',
      timeEstimate: 'Varies by project',
      tools: ['Final invoices', 'Before/after photos', 'Underwriter portal access']
    }
  ];

  const geicoUnderwriters = [
    {
      name: 'Homesite Group',
      description: 'Largest GEICO partner. Claims: 1-888-231-5295. Known for efficient processing and digital-first approach.',
      icon: Home
    },
    {
      name: 'Stillwater Insurance',
      description: 'Claims: 1-800-849-0128. Strong in mid-Atlantic region. Generally straightforward claims process.',
      icon: Shield
    },
    {
      name: 'Markel American',
      description: 'Specialty insurer for higher-value homes. Claims: 1-800-431-1270. Thorough documentation requirements.',
      icon: FileText
    },
    {
      name: 'Other Partners',
      description: 'GEICO works with various regional insurers. Check your declarations page for your specific underwriter and claims contact.',
      icon: Car
    }
  ];

  const faqs = [
    {
      question: 'Does GEICO homeowners insurance cover water damage?',
      answer: 'GEICO homeowners policies (underwritten by partners like Homesite, Stillwater) cover sudden and accidental water damage including: burst pipes, water heater failures, appliance overflows, and storm damage. Standard exclusions: external flooding (requires separate flood policy), sewer backup (may require endorsement), gradual leaks, and maintenance neglect. Coverage specifics vary by underwriter.'
    },
    {
      question: 'How do I file a water damage claim with GEICO?',
      answer: 'File through: (1) GEICO mobile app—select "Homeowners" → "Report a Claim," (2) call 1-800-841-3000 24/7, or (3) contact your underwriter directly (Homesite, Stillwater, etc.). GEICO routes the claim to your underwriter, who handles the actual claims process. Have your policy number and damage photos ready.'
    },
    {
      question: 'Who is my GEICO homeowners insurance underwriter?',
      answer: 'GEICO partners with several home insurance companies: Homesite (most common), Stillwater, Markel American, and regional insurers. Your underwriter is listed on your declarations page and policy documents. The underwriter—not GEICO—handles claims, adjusters, and settlements. Know your underwriter for direct communication.'
    },
    {
      question: 'How long does GEICO take to process water damage claims?',
      answer: 'Timeline depends on your underwriter, but typically: Claim routed to underwriter: 24-48 hours. Adjuster assignment: 24-72 hours. Inspection: 3-7 days. Settlement offer: 7-14 days after inspection. Payment: 7-10 business days. Total: 2-4 weeks for straightforward claims. Complex claims may take longer.'
    },
    {
      question: 'What is the GEICO homeowners deductible?',
      answer: 'Deductibles vary by underwriter and policy, typically $500 to $2,500. Higher deductibles mean lower premiums. Your deductible is subtracted from the settlement. Check your declarations page for your specific deductible. Some underwriters offer deductible reduction programs for claim-free periods.'
    },
    {
      question: 'What if my GEICO homeowners claim is denied?',
      answer: 'If denied, the denial comes from your underwriter, not GEICO. Request written explanation with policy citations. Common denial reasons: gradual damage, flood without flood policy, sewer backup without endorsement. You can: (1) Appeal to your underwriter, (2) Request supervisor review, (3) Contact Virginia Bureau of Insurance, (4) Hire a public adjuster.'
    }
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to File a GEICO Water Damage Insurance Claim',
    description: 'Complete guide for GEICO homeowners policyholders filing water damage claims. Step-by-step process covering underwriter identification, claim filing, adjuster inspections, and maximizing your settlement.',
    image: 'https://flood.doctor/images/guides/geico-water-damage-claim.jpg',
    totalTime: 'P21D',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };

  const pageSchema = combineSchemas(
    generateBreadcrumbSchema([
      { label: 'Guides', path: '/guides/' },
      { label: 'Insurance Guides', path: '/guides/insurance/' },
      { label: 'GEICO Claims', path: '/guides/insurance/geico-water-damage-claim/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="GEICO Water Damage Claim Guide"
        description="Complete guide for GEICO homeowners policyholders filing water damage claims. Learn how to work with GEICO underwriters (Homesite, Stillwater), file claims, and maximize your settlement."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 via-white to-green-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: 'Insurance', path: '/guides/insurance/' },
            { label: 'GEICO Claims', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> GEICO Insurance Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              GEICO Water Damage Claim Process
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              Step-by-step guide for GEICO homeowners policyholders. Understand the underwriter relationship and navigate your claim efficiently—from Homesite to Stillwater and beyond.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-green-600" />
                <span className="text-sm font-medium text-[#202124]">9 Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Clock size={18} className="text-green-600" />
                <span className="text-sm font-medium text-[#202124]">12 min read</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertTriangle size={18} className="text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700">Know Your Underwriter</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Need Help? Call (877) 497-0007
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">

            {/* Important Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-xl shrink-0">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#202124] mb-2">Important: GEICO Uses Partner Underwriters</h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed">
                    GEICO doesn't underwrite homeowners insurance directly. They partner with companies like Homesite, Stillwater, and Markel American. Your claim is handled by your underwriter, not GEICO. Check your policy documents to identify your underwriter—this determines your exact claims process.
                  </p>
                </div>
              </div>
            </div>

            {/* Underwriters Section */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-green-600">
                GEICO Homeowners Underwriters
              </h2>
              <p className="text-[#5f6368] mb-8">
                Identify your underwriter from your policy documents. Each has a slightly different claims process.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {geicoUnderwriters.map((underwriter, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-[#dadce0] hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <underwriter.icon className="text-green-600" size={20} />
                      </div>
                      <h3 className="font-medium text-[#202124]">{underwriter.name}</h3>
                    </div>
                    <p className="text-sm text-[#5f6368] leading-relaxed">
                      {underwriter.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-lg text-[#5f6368] leading-relaxed mb-4">
                GEICO is known for auto insurance, but their homeowners policies are underwritten by partner companies. This means when you file a water damage claim, you're working with Homesite, Stillwater, or another underwriter—not GEICO directly.
              </p>
              <p className="text-lg text-[#5f6368] leading-relaxed">
                This guide helps you navigate this unique structure. We work with all of GEICO's underwriters in Northern Virginia and understand each company's specific requirements for fast claim processing.
              </p>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-green-600">
                9 Steps to File Your GEICO Homeowners Claim
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow these steps for optimal results. Understanding the underwriter relationship is key.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative bg-white border border-[#dadce0] rounded-3xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white items-center justify-center shrink-0 shadow-lg">
                        <span className="text-xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display text-xl font-medium text-[#202124] mb-3">
                          {step.name}
                        </h3>
                        <p className="text-[#5f6368] leading-relaxed mb-4">
                          {step.text}
                        </p>

                        <div className="bg-green-50 rounded-xl p-4 mb-4">
                          <div className="flex items-start gap-3">
                            <Zap size={18} className="text-green-600 mt-0.5 shrink-0" />
                            <div>
                              <span className="font-medium text-green-700 text-sm">Pro Tip: </span>
                              <span className="text-sm text-green-900">{step.tip}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#5f6368]">
                          <Clock size={16} className="text-green-600" />
                          <span>{step.timeEstimate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ data={faqs} title="GEICO Water Damage Claim FAQ" className="border-none p-0" />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-green-600 rounded-[32px] p-8 text-white shadow-lg">
                <h3 className="font-display text-xl font-medium mb-4">We Work with All GEICO Underwriters</h3>
                <p className="text-green-100 text-sm leading-relaxed mb-6">
                  Our team has experience with Homesite, Stillwater, Markel, and other GEICO partners. We provide Xactimate estimates and understand each underwriter's requirements.
                </p>
                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-green-600 border-none hover:bg-green-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                  {[
                    { icon: FileText, label: 'Xactimate estimates' },
                    { icon: Camera, label: 'Documentation support' },
                    { icon: DollarSign, label: 'Direct billing' },
                    { icon: Users, label: 'Underwriter coordination' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-green-100">
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4 flex items-center gap-2">
                  <Smartphone size={18} className="text-green-600" />
                  GEICO Contact Info
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">GEICO Claims:</span>
                    <a href="tel:18008413000" className="text-green-600 font-medium">1-800-841-3000</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Mobile App:</span>
                    <span className="text-[#202124]">GEICO Mobile</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Website:</span>
                    <a href="https://geico.com" className="text-green-600" target="_blank" rel="noopener">geico.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h4 className="font-medium text-[#202124] mb-4">Claim Checklist</h4>
                <div className="space-y-3">
                  {[
                    'Policy number ready',
                    'Underwriter identified',
                    'Photos of all damage',
                    'Video walkthrough',
                    'Water depth measurement',
                    'Mitigation receipts',
                    'Damaged items inventory',
                    'Contractor estimates'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#5f6368]">
                      <div className="w-5 h-5 rounded border border-[#dadce0] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-green-600" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#dadce0] rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4">Other Insurance Guides</h4>
                <div className="space-y-3">
                  {[
                    { href: '/guides/insurance/usaa-water-damage-claim/', label: 'USAA Claims' },
                    { href: '/guides/insurance/state-farm-water-damage-claim/', label: 'State Farm Claims' },
                    { href: '/guides/insurance/allstate-water-damage-claim/', label: 'Allstate Claims' },
                    { href: '/guides/water-damage-insurance-claim/', label: 'General Claim Guide' }
                  ].map((link, i) => (
                    <a key={i} href={link.href} className="flex items-center gap-3 text-sm text-[#5f6368] hover:text-green-600 transition-colors group">
                      <ArrowRight size={16} className="text-[#dadce0] group-hover:text-green-600" />
                      {link.label}
                    </a>
                  ))}
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
            15 Minutes Could Save Your Claim
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            We work with all GEICO underwriters throughout Northern Virginia. Focus on your family—we'll handle the documentation, estimates, and coordination with your underwriter.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-green-600 border-none hover:bg-green-50">
            <Phone size={20} className="mr-2" />
            Call 24/7: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default GEICOWaterDamageClaimGuide;
