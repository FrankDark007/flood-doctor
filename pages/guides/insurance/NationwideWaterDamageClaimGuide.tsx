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
  Building,
  Award
} from 'lucide-react';

const NationwideWaterDamageClaimGuide: React.FC = () => {
  const steps = [
    {
      name: 'Report Your Claim via App or 1-877-On Your Side',
      text: 'File your water damage claim through the Nationwide mobile app or call 1-877-On Your Side (1-877-669-6877) 24/7. In the app, navigate to "Claims" → "Report a Claim." Provide: policy number, date/time of damage, description of what happened, and your contact info. Nationwide assigns claims quickly—typically within 24 hours you\'ll have a claim number and adjuster contact.',
      tip: 'The app allows immediate photo uploads. Start documenting before you call.',
      timeEstimate: '15-30 minutes',
      tools: ['Nationwide app', 'Policy number', 'Phone for backup']
    },
    {
      name: 'Document All Damage Comprehensively',
      text: 'Before cleanup, capture thorough documentation. Photograph: the water source, standing water depth (use a ruler), every affected room from multiple angles, damaged belongings with brand labels visible, and moisture on walls/ceilings. Create a narrated video walkthrough. Nationwide\'s app lets you upload directly to your claim file. Take 100+ photos—thorough documentation supports higher settlements.',
      tip: 'Include timestamps and write down what you photograph. Nationwide adjusters appreciate organized evidence.',
      timeEstimate: '30-60 minutes',
      tools: ['Smartphone camera', 'Ruler for depth', 'Nationwide app', 'Notepad']
    },
    {
      name: 'Mitigate Further Damage',
      text: 'Your Nationwide policy requires you to prevent additional damage. Stop the water source, extract standing water, remove wet materials, and set up ventilation. Save ALL receipts—Nationwide covers reasonable mitigation expenses. Do NOT make permanent repairs until the adjuster inspects. Document your mitigation efforts with photos showing the steps you took.',
      tip: 'Nationwide\'s "On Your Side" promise includes covering emergency mitigation. Don\'t wait for approval to prevent further damage.',
      timeEstimate: '1-4 hours',
      tools: ['Emergency supplies', 'Receipt folder', 'Camera']
    },
    {
      name: 'Review Your Nationwide Coverage',
      text: 'Check your Nationwide policy for coverage details. Standard coverages include: Dwelling (structure), Other Structures (detached garage, shed), Personal Property (belongings), and Loss of Use (living expenses). Nationwide offers both ACV and RCV options. Check for Water Backup endorsement (sewer/drain coverage) and Valuable Items coverage. Know your deductible amount.',
      tip: 'Nationwide\'s "Brand New Belongings" endorsement provides full replacement without depreciation—check if you have it.',
      timeEstimate: '30-60 minutes',
      tools: ['Policy declarations page', 'Nationwide app', 'Notepad']
    },
    {
      name: 'Prepare for Adjuster Inspection',
      text: 'Nationwide typically assigns an adjuster within 24-48 hours. They\'ll contact you to schedule an inspection. For significant damage, expect a field visit. For smaller claims, Nationwide may offer virtual inspection. Before inspection: organize all documentation. During: walk through ALL damage areas, point out hidden moisture (inside walls, under floors), and request moisture meter readings.',
      tip: 'Ask the adjuster to check with a moisture meter behind baseboards—hidden damage is often missed.',
      timeEstimate: '2-4 hours',
      tools: ['Organized documentation', 'Access to all areas', 'Notepad for questions']
    },
    {
      name: 'Get IICRC-Certified Restoration Estimates',
      text: 'Contact 2-3 IICRC-certified restoration companies for estimates. Choose companies using Xactimate—Nationwide adjusters use the same platform. Compare line-item estimates to the adjuster\'s assessment. Ask about experience with Nationwide claims and direct billing. Nationwide\'s Blue Ribbon Repair Network offers vetted contractors, but you can choose any qualified contractor.',
      tip: 'Contractors experienced with Nationwide know what documentation gets claims approved faster.',
      timeEstimate: '1-2 days',
      tools: ['Phone', 'Adjuster estimate for comparison']
    },
    {
      name: 'Compare Settlement to Estimates',
      text: 'Nationwide provides detailed settlement breakdowns. Compare line-by-line with your contractor\'s estimate. Look for: missed areas, incorrect measurements, underpriced materials, or excluded items. Nationwide typically issues ACV payment first; RCV depreciation is recoverable after repairs (if you have RCV coverage). Settlement payments usually arrive within 7-10 business days.',
      tip: 'Nationwide settlements are negotiable. If something seems low, request an itemized explanation.',
      timeEstimate: '2-4 hours',
      tools: ['Settlement statement', 'Contractor estimates', 'Calculator']
    },
    {
      name: 'Request Supplement If Needed',
      text: 'If the settlement is insufficient, request a supplement from Nationwide. Provide: detailed contractor estimates, photos of missed or additional damage, and a written explanation. Supplements are common in water damage claims when hidden damage is discovered during repairs. Your contractor can help prepare supplement documentation.',
      tip: 'Nationwide\'s "On Your Side" approach means supplements are handled cooperatively, not adversarially.',
      timeEstimate: '3-10 days',
      tools: ['Supplement request', 'Supporting photos', 'Contractor documentation']
    },
    {
      name: 'Complete Repairs and Recover Depreciation',
      text: 'After repairs are finished, submit final invoices to Nationwide to recover withheld depreciation (if you have RCV coverage). Upload through the app or mail to your adjuster. Include: contractor invoices, before/after photos, and completion documentation. Nationwide typically processes depreciation recovery within 10-14 days. Keep all records for 7+ years.',
      tip: 'Depreciation recovery is often 20-40% of your total settlement. Don\'t forget to claim it.',
      timeEstimate: 'Varies by project',
      tools: ['Final invoices', 'Before/after photos', 'Nationwide app']
    }
  ];

  const nationwideFeatures = [
    {
      title: 'On Your Side Claim Service',
      description: 'Nationwide\'s customer-first approach includes dedicated claim representatives who guide you through the entire process.',
      icon: Users
    },
    {
      title: 'Blue Ribbon Repair Network',
      description: 'Vetted contractor network offering guaranteed work. You\'re not required to use them, but they offer convenience and quality assurance.',
      icon: Award
    },
    {
      title: 'Brand New Belongings',
      description: 'Optional endorsement that replaces damaged items with new ones—no depreciation deducted. Great for electronics and appliances.',
      icon: Building
    },
    {
      title: 'Mobile Claim Management',
      description: 'Track your claim status, upload documents, chat with representatives, and receive payments through the Nationwide app.',
      icon: Smartphone
    }
  ];

  const faqs = [
    {
      question: 'Does Nationwide homeowners insurance cover water damage?',
      answer: 'Nationwide homeowners policies cover sudden and accidental water damage including: burst pipes, water heater failures, appliance overflows, storm damage, and accidental overflows. Standard exclusions: external flooding (requires separate flood policy), sewer backup (may require Water Backup endorsement), gradual leaks, and maintenance neglect. Check your policy for specific coverage details.'
    },
    {
      question: 'How do I file a water damage claim with Nationwide?',
      answer: 'File through: (1) Nationwide mobile app—navigate to "Claims" → "Report a Claim," (2) call 1-877-On Your Side (1-877-669-6877) 24/7, or (3) online at nationwide.com. Have your policy number, damage photos, and incident details ready. Nationwide assigns claims within 24 hours and provides a dedicated claim representative.'
    },
    {
      question: 'How long does Nationwide take to process water damage claims?',
      answer: 'Nationwide\'s typical timeline: Claim acknowledgment: same day. Adjuster assignment: 24-48 hours. Inspection: 3-7 days. Initial settlement: 7-14 days after inspection. Payment: 7-10 business days after approval. Total: 2-4 weeks for straightforward claims. Complex claims may take 4-8 weeks.'
    },
    {
      question: 'What is Nationwide\'s water damage deductible?',
      answer: 'Nationwide deductibles typically range from $500 to $2,500. Your deductible is subtracted from the settlement amount. Higher deductibles mean lower premiums. Some Nationwide policies offer "disappearing deductible" options that reduce your deductible for claim-free periods. Check your declarations page.'
    },
    {
      question: 'Should I use Nationwide\'s Blue Ribbon Repair Network?',
      answer: 'You can choose any contractor—you\'re not required to use Nationwide\'s network. Blue Ribbon contractors offer: guaranteed work, direct billing, and vetted qualifications. Get estimates from both your preferred contractor and the network to compare. Choose based on qualifications, reviews, and your comfort level.'
    },
    {
      question: 'What if Nationwide denies my water damage claim?',
      answer: 'If denied, request written explanation citing policy language. Common denial reasons: gradual damage (not sudden), flood without flood policy, or sewer backup without endorsement. You can: (1) Appeal with documentation, (2) Request supervisor review, (3) Contact Virginia Bureau of Insurance, (4) Hire a public adjuster for significant claims.'
    }
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to File a Nationwide Water Damage Insurance Claim',
    description: 'Complete guide for Nationwide policyholders filing water damage claims. Step-by-step process covering the app, On Your Side service, adjuster inspections, and maximizing your settlement.',
    image: 'https://flood.doctor/images/guides/nationwide-water-damage-claim.jpg',
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
      { label: 'Nationwide Claims', path: '/guides/insurance/nationwide-water-damage-claim/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Nationwide Water Damage Claim Guide: Step-by-Step Process"
        description="Complete guide for Nationwide policyholders filing water damage claims. Learn the On Your Side process, Blue Ribbon Network, adjuster tips, and how to maximize your settlement."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: 'Insurance', path: '/guides/insurance/' },
            { label: 'Nationwide Claims', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> Nationwide Insurance Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              Nationwide Water Damage Claim Process
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              Step-by-step guide for Nationwide policyholders. From filing your claim to depreciation recovery—Nationwide is "On Your Side" through the entire process.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-blue-600" />
                <span className="text-sm font-medium text-[#202124]">9 Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Clock size={18} className="text-blue-600" />
                <span className="text-sm font-medium text-[#202124]">12 min read</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                <Users size={18} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-700">On Your Side</span>
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

            {/* Nationwide Features */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-blue-600">
                Nationwide Claim Features
              </h2>
              <p className="text-[#5f6368] mb-8">
                Nationwide offers customer-focused claim features designed around their "On Your Side" philosophy.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {nationwideFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-[#dadce0] hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <feature.icon className="text-blue-600" size={20} />
                      </div>
                      <h3 className="font-medium text-[#202124]">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-[#5f6368] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-lg text-[#5f6368] leading-relaxed mb-4">
                Nationwide's "On Your Side" philosophy extends to their claims process. They're known for fair settlements and customer-friendly service. Their dedicated claim representatives work with you from initial report through final payment.
              </p>
              <p className="text-lg text-[#5f6368] leading-relaxed">
                This guide walks you through Nationwide's specific claims process, from filing through depreciation recovery. We work with Nationwide adjusters regularly in Northern Virginia and understand their requirements for fast approvals.
              </p>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-blue-600">
                9 Steps to File Your Nationwide Claim
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow these steps for optimal results. Nationwide's approach is customer-friendly throughout.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative bg-white border border-[#dadce0] rounded-3xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white items-center justify-center shrink-0 shadow-lg">
                        <span className="text-xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display text-xl font-medium text-[#202124] mb-3">
                          {step.name}
                        </h3>
                        <p className="text-[#5f6368] leading-relaxed mb-4">
                          {step.text}
                        </p>

                        <div className="bg-blue-50 rounded-xl p-4 mb-4">
                          <div className="flex items-start gap-3">
                            <Zap size={18} className="text-blue-600 mt-0.5 shrink-0" />
                            <div>
                              <span className="font-medium text-blue-700 text-sm">Pro Tip: </span>
                              <span className="text-sm text-blue-900">{step.tip}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#5f6368]">
                          <Clock size={16} className="text-blue-600" />
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
              <GoogleStyleFAQ data={faqs} title="Nationwide Water Damage Claim FAQ" className="border-none p-0" />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-blue-600 rounded-[32px] p-8 text-white shadow-lg">
                <h3 className="font-display text-xl font-medium mb-4">We Work with Nationwide Daily</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Our team coordinates with Nationwide adjusters regularly. We provide Xactimate estimates, complete documentation, and direct billing.
                </p>
                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-blue-600 border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                  {[
                    { icon: FileText, label: 'Xactimate estimates' },
                    { icon: Camera, label: 'Documentation support' },
                    { icon: DollarSign, label: 'Direct billing' },
                    { icon: Users, label: 'Adjuster coordination' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-blue-100">
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4 flex items-center gap-2">
                  <Smartphone size={18} className="text-blue-600" />
                  Nationwide Contact Info
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">24/7 Claims:</span>
                    <a href="tel:18776696877" className="text-blue-600 font-medium">1-877-On Your Side</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Mobile App:</span>
                    <span className="text-[#202124]">Nationwide</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Website:</span>
                    <a href="https://nationwide.com" className="text-blue-600" target="_blank" rel="noopener">nationwide.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h4 className="font-medium text-[#202124] mb-4">Claim Checklist</h4>
                <div className="space-y-3">
                  {[
                    'Policy number ready',
                    'Nationwide app installed',
                    'Photos of all damage',
                    'Video walkthrough',
                    'Water depth measurement',
                    'Mitigation receipts',
                    'Damaged items inventory',
                    'Contractor estimates'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#5f6368]">
                      <div className="w-5 h-5 rounded border border-[#dadce0] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-blue-600" />
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
                    <a key={i} href={link.href} className="flex items-center gap-3 text-sm text-[#5f6368] hover:text-blue-600 transition-colors group">
                      <ArrowRight size={16} className="text-[#dadce0] group-hover:text-blue-600" />
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            We're On Your Side Too
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We work directly with Nationwide adjusters throughout Northern Virginia. Focus on your family—we'll handle the documentation, estimates, and coordination.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-blue-600 border-none hover:bg-blue-50">
            <Phone size={20} className="mr-2" />
            Call 24/7: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NationwideWaterDamageClaimGuide;
