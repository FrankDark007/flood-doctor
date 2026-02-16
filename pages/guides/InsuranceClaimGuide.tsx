import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import { generateBreadcrumbSchema, combineSchemas } from '../../utils/schema';
import {
  Phone,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Camera,
  FileText,
  DollarSign,
  Shield,
  Zap,
  ArrowRight,
  ClipboardList,
  Users
} from 'lucide-react';

const InsuranceClaimGuide: React.FC = () => {
  const steps = [
    {
      name: 'Document Everything Before Cleanup',
      text: 'Take comprehensive photos and videos of ALL damage BEFORE any cleanup or repairs. Capture the water source, standing water depth (use a ruler), affected rooms from multiple angles, damaged belongings, and visible moisture on walls/ceilings. Use timestamp features. Take 100+ photos minimum—thorough documentation increases settlements by 15-30%. Create a written inventory of damaged items with estimated values.',
      tip: 'Create a narrated video walking through each room—adjusters find this compelling evidence.',
      timeEstimate: '30-60 minutes',
      tools: ['Smartphone with camera', 'Ruler for water depth', 'Notepad for inventory', 'Receipts for valuable items']
    },
    {
      name: 'Stop the Damage and Mitigate',
      text: 'Your policy requires you to prevent further damage. Stop the water source, begin water extraction, and protect undamaged areas. Save receipts for any emergency supplies (pumps, fans, tarps). Do NOT make permanent repairs yet—only emergency mitigation. Take photos of your mitigation efforts.',
      tip: 'Failure to mitigate can reduce or void your claim. Document that you took reasonable steps.',
      timeEstimate: '1-4 hours',
      tools: ['Emergency supplies', 'Receipt storage folder', 'Camera']
    },
    {
      name: 'Report the Claim Within 24-48 Hours',
      text: 'Call your insurance company\'s claims hotline (check your policy or declarations page). Provide: policy number, date and time of loss, brief description of damage, emergency contact number. Get a claim number and adjuster contact info. Ask about coverage limits, deductible, and emergency mitigation pre-approval. Keep a log of all communications.',
      tip: 'Report promptly—delayed claims (30+ days) are often denied or reduced.',
      timeEstimate: '30-60 minutes',
      tools: ['Policy documents', 'Claim number notepad', 'Calendar for tracking deadlines']
    },
    {
      name: 'Review Your Policy Coverage',
      text: 'Read your policy carefully to understand coverage. Most policies cover sudden/accidental water damage (burst pipes, appliance failures). Exclusions typically include: groundwater flooding (requires separate flood insurance), sewer backups (requires endorsement), neglected maintenance damage, and gradual leaks. Know your coverage limits and deductible.',
      tip: 'Many policies have separate limits for dwelling, personal property, and additional living expenses.',
      timeEstimate: '1-2 hours',
      tools: ['Policy documents', 'Highlighter', 'Notepad for questions']
    },
    {
      name: 'Get Professional Restoration Estimates',
      text: 'Contact 2-3 IICRC-certified restoration companies for estimates. Professional companies use Xactimate software—the same platform insurance adjusters use—which increases settlement accuracy. Get detailed line-item estimates, not just totals. Ask if they offer direct insurance billing and documentation support.',
      tip: 'Restoration companies that work with insurance daily know how to document for maximum reimbursement.',
      timeEstimate: '1-2 days',
      tools: ['Phone', 'Notepad', 'Camera for follow-up photos']
    },
    {
      name: 'Meet with the Insurance Adjuster',
      text: 'When the adjuster visits, have your documentation ready: photos, videos, inventory list, receipts, and restoration estimates. Walk through all damage areas—don\'t assume they\'ll find everything. Point out hidden damage (inside walls, under flooring). Ask questions and take notes. Get the adjuster\'s estimate in writing before they leave.',
      tip: 'You can request a re-inspection if you believe damage was missed.',
      timeEstimate: '2-4 hours',
      tools: ['All documentation organized', 'Notepad', 'Camera for any new damage found']
    },
    {
      name: 'Review the Settlement Offer Carefully',
      text: 'Compare the insurance settlement to your restoration estimates. Settlements often come in two parts: Actual Cash Value (ACV) initially, and depreciation recovery after repairs are complete (if you have Replacement Cost Value coverage). Review line by line—look for missed items, incorrect measurements, or lowball material costs.',
      tip: 'You have the right to dispute any settlement. Don\'t sign a final release until you\'re satisfied.',
      timeEstimate: '2-4 hours',
      tools: ['Settlement statement', 'Restoration estimates for comparison', 'Calculator']
    },
    {
      name: 'Negotiate If Necessary',
      text: 'If the settlement is inadequate, you can negotiate. Write a formal dispute letter citing specific line items and providing supporting documentation (contractor estimates, photos, material costs). Request a second adjuster or supervisor review. For large disputes, consider hiring a public adjuster (they typically charge 10-15% of the claim increase).',
      tip: 'Most initial settlements are negotiable—40% of homeowners who negotiate receive higher payouts.',
      timeEstimate: 'Days to weeks',
      tools: ['Written dispute letter', 'Supporting documentation', 'Records of all communications']
    },
    {
      name: 'Complete Repairs and Collect Depreciation',
      text: 'After completing repairs with licensed contractors, submit final invoices to recover withheld depreciation (if you have Replacement Cost Value coverage). Keep ALL receipts and contracts. Submit documentation within your policy\'s timeframe (typically 180 days to 2 years). Take final photos showing completed repairs.',
      tip: 'Don\'t forget to claim depreciation recovery—this can be 20-40% of your total settlement.',
      timeEstimate: 'Varies by project',
      tools: ['Contractor invoices', 'Before/after photos', 'Claim file']
    },
    {
      name: 'Keep Complete Records for 7 Years',
      text: 'Maintain a complete claim file with: all photos/videos, written communications, claim documents, estimates and invoices, settlement statements, and repair documentation. Keep records for at least 7 years for tax purposes and potential future claims on the same property.',
      tip: 'Scan everything and store digitally in cloud storage for backup.',
      timeEstimate: 'Ongoing',
      tools: ['File folders or digital storage', 'Scanner', 'Cloud backup']
    }
  ];

  const faqs = [
    {
      question: 'Does homeowners insurance cover water damage?',
      answer: 'Most homeowners policies cover sudden and accidental water damage, including: burst pipes, appliance failures (water heater, washing machine), roof leaks from storm damage, and accidental overflows. Coverage typically does NOT include: external flooding (requires separate flood insurance), sewer backups (requires endorsement), gradual damage from neglected maintenance, groundwater seepage, or damage from lack of maintenance. Review your specific policy for coverage details.'
    },
    {
      question: 'How long do I have to file a water damage insurance claim?',
      answer: 'Most policies require prompt notification—typically within 24-72 hours for emergency claims and 30 days for non-emergency claims. However, you should report damage as soon as possible. Delayed claims (beyond 30 days) are often denied or reduced. Your policy also requires you to mitigate damage promptly—failure to do so can void coverage.'
    },
    {
      question: 'How much will insurance pay for water damage?',
      answer: 'Settlements depend on your coverage type, limits, and deductible. Actual Cash Value (ACV) policies pay replacement cost minus depreciation. Replacement Cost Value (RCV) policies pay full replacement cost after repairs are complete. Average water damage claims in Northern Virginia range from $3,000-$50,000 depending on severity. Your out-of-pocket cost is typically your deductible ($500-$2,500).'
    },
    {
      question: 'Should I use the insurance company\'s preferred contractor?',
      answer: 'You have the right to choose your own contractor—you are not required to use the insurance company\'s preferred vendors. However, preferred contractors may offer guaranteed work and direct billing convenience. Compare estimates from both your chosen contractor and the preferred vendor. Choose based on qualifications, reviews, and your comfort level, not just price.'
    },
    {
      question: 'What if my insurance claim is denied?',
      answer: 'If your claim is denied, request a written explanation citing specific policy language. You can: (1) Review the denial for errors or misinterpretations, (2) Submit additional documentation supporting your claim, (3) Request a re-inspection by a different adjuster, (4) File a complaint with your state insurance commissioner, (5) Hire a public adjuster or attorney for significant claims. Many initially denied claims are overturned with proper documentation.'
    }
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to File a Water Damage Insurance Claim',
    description: 'Step-by-step guide to filing and maximizing your water damage insurance claim. Learn documentation requirements, timelines, negotiation strategies, and how to get the settlement you deserve.',
    image: 'https://flood.doctor/images/guides/insurance-claim.jpg',
    totalTime: 'P30D',
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
      { label: 'Insurance Claim Guide', path: '/guides/water-damage-insurance-claim/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Filing a Water Damage Insurance Claim"
        description="Step-by-step guide to filing and maximizing your water damage insurance claim. Documentation tips, timelines, negotiation strategies, and how to get the settlement you deserve."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 via-white to-green-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: 'Insurance Claim Guide', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <FileText size={14} /> Insurance Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              How to File a Water Damage Insurance Claim
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              Maximize your insurance settlement with proper documentation, timelines, and negotiation strategies. This guide helps you navigate the claims process and get the compensation you deserve.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">10 Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Clock size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">15 min read</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-lg border border-yellow-200">
                <DollarSign size={18} className="text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700">Moderate Difficulty</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Need Documentation Help? Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">

            {/* Key Statistic */}
            <div className="bg-[#e8f0fe] border border-[#1a73e8]/20 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-[#1a73e8] p-3 rounded-xl shrink-0">
                  <DollarSign className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#202124] mb-2">Documentation Increases Settlements by 15-30%</h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed">
                    Homeowners who thoroughly document their damage before cleanup and work with IICRC-certified restoration companies receive significantly higher settlements. We handle insurance documentation daily and can help maximize your claim.
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-lg text-[#5f6368] leading-relaxed mb-4">
                Filing a water damage insurance claim can be overwhelming, especially while dealing with the stress of property damage. However, understanding the process and following these steps can mean the difference between a fair settlement and being significantly underpaid.
              </p>
              <p className="text-lg text-[#5f6368] leading-relaxed">
                This guide walks you through every step of the claims process, from initial documentation to final settlement collection. We've helped thousands of Northern Virginia homeowners navigate this process successfully.
              </p>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                10 Steps to File and Maximize Your Claim
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow these steps in order for the best results. Timing and documentation are critical.
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
                          <Clock size={16} className="text-[#1a73e8]" />
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
              <GoogleStyleFAQ data={faqs} title="Frequently Asked Questions" className="border-none p-0" />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-lg">
                <h3 className="font-display text-xl font-medium mb-4">We Handle Insurance Documentation</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Our team works with insurance companies daily. We provide Xactimate estimates, photo documentation, and direct billing to streamline your claim.
                </p>
                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                  {[
                    { icon: FileText, label: 'Xactimate estimates' },
                    { icon: Camera, label: 'Complete documentation' },
                    { icon: DollarSign, label: 'Direct insurance billing' },
                    { icon: Users, label: 'Adjuster coordination' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-blue-100">
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h4 className="font-medium text-[#202124] mb-4">Documentation Checklist</h4>
                <div className="space-y-3">
                  {[
                    'Photos of water source',
                    'Water depth measurement',
                    'All affected rooms (multiple angles)',
                    'Damaged belongings inventory',
                    'Mitigation efforts photos',
                    'Receipts for emergency supplies',
                    'Restoration company estimates',
                    'Written communications log'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#5f6368]">
                      <div className="w-5 h-5 rounded border border-[#dadce0] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-[#1a73e8]" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#dadce0] rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4">Related Guides</h4>
                <div className="space-y-3">
                  {[
                    { href: '/guides/water-damage-cleanup/', label: 'Water Damage Cleanup' },
                    { href: '/guides/mold-remediation/', label: 'Mold Remediation' },
                    { href: '/guides/basement-waterproofing/', label: 'Basement Waterproofing' }
                  ].map((link, i) => (
                    <a key={i} href={link.href} className="flex items-center gap-3 text-sm text-[#5f6368] hover:text-[#1a73e8] transition-colors group">
                      <ArrowRight size={16} className="text-[#dadce0] group-hover:text-[#1a73e8]" />
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
      <div className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Let Us Handle Your Insurance Claim
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We work directly with all major insurance carriers and provide the documentation needed to maximize your settlement. Focus on your family—we'll handle the paperwork.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
            <Phone size={20} className="mr-2" />
            Call 24/7: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default InsuranceClaimGuide;
