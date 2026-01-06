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
  Home,
  Headphones
} from 'lucide-react';

const AllstateWaterDamageClaimGuide: React.FC = () => {
  const steps = [
    {
      name: 'File Your Claim via Allstate App or 1-800-ALLSTATE',
      text: 'File your water damage claim through the Allstate mobile app (fastest) or call 1-800-ALLSTATE (1-800-255-7828) 24/7. In the app, tap "Claims" → "File a Claim" → "Water Damage." You\'ll need: policy number, date/time of damage, and brief description. Allstate assigns claims within 24 hours. If you have an Allstate agent, they\'ll receive notification and can assist.',
      tip: 'The Allstate app lets you upload photos instantly—start documenting before you file.',
      timeEstimate: '15-30 minutes',
      tools: ['Allstate mobile app', 'Policy number', 'Phone for backup']
    },
    {
      name: 'Document All Damage Thoroughly',
      text: 'Before any cleanup, capture comprehensive documentation. Photograph: water source, standing water depth (use a ruler), every affected room from multiple angles, damaged belongings, moisture on walls/ceilings, and brand labels on damaged appliances. Create a video walkthrough with narration. Allstate\'s QuickFoto Claim feature lets you upload directly to your claim—take 100+ photos for maximum evidence.',
      tip: 'Allstate uses AI to analyze photos. Clear, well-lit images with damage clearly visible speed up processing.',
      timeEstimate: '30-60 minutes',
      tools: ['Smartphone camera', 'Ruler for depth', 'Allstate app', 'Notepad for inventory']
    },
    {
      name: 'Prevent Further Damage (Mitigation)',
      text: 'Your Allstate policy requires you to take reasonable steps to prevent additional damage. Stop the water source, extract standing water, move undamaged belongings, and set up ventilation. Save ALL receipts—Allstate covers reasonable mitigation costs. Do NOT make permanent repairs before the adjuster inspects. Document your mitigation efforts with photos and timestamps.',
      tip: 'Allstate pre-approves emergency mitigation. You don\'t need permission to prevent further damage.',
      timeEstimate: '1-4 hours',
      tools: ['Emergency supplies', 'Receipt folder', 'Camera']
    },
    {
      name: 'Review Your Allstate Coverage',
      text: 'Check your policy for coverage types: Dwelling (structure), Personal Property (belongings), and Additional Living Expenses. Allstate offers both ACV (Actual Cash Value) and RCV (Replacement Cost Value) options—RCV pays more but requires completion of repairs. Check for endorsements: Water Backup coverage (sewer/drain), Scheduled Personal Property (high-value items). Know your deductible.',
      tip: 'Many Allstate policies have Water Backup coverage included—check your declarations page carefully.',
      timeEstimate: '30-60 minutes',
      tools: ['Policy declarations page', 'Allstate app (view coverage)', 'Notepad']
    },
    {
      name: 'Prepare for Your Allstate Adjuster',
      text: 'Allstate assigns adjusters within 24-48 hours. For significant claims, expect a field adjuster. For smaller claims, Allstate may use virtual inspection via video call. Before inspection: organize all photos, receipts, and inventory. During inspection: walk through ALL damage—point out hidden areas (inside walls, under flooring). Request moisture meter readings. Get the adjuster\'s preliminary estimate.',
      tip: 'Allstate\'s "Good Hands Repair Network" contractors can assess alongside the adjuster—consider requesting this.',
      timeEstimate: '2-4 hours',
      tools: ['Documentation organized', 'Access to all areas', 'Notepad']
    },
    {
      name: 'Get IICRC-Certified Restoration Estimates',
      text: 'Contact 2-3 IICRC-certified restoration companies for estimates. Choose companies using Xactimate software—Allstate adjusters use the same platform. Compare line-item estimates to the adjuster\'s assessment. Ask about experience with Allstate claims and direct billing options. Allstate\'s Good Hands Repair Network offers pre-vetted contractors, but you can choose your own.',
      tip: 'Contractors experienced with Allstate know what documentation they need to approve supplemental payments.',
      timeEstimate: '1-2 days',
      tools: ['Phone', 'Adjuster estimate for comparison']
    },
    {
      name: 'Compare Your Settlement Offer',
      text: 'Allstate provides detailed settlement breakdowns by coverage type. Compare line-by-line with your contractor\'s estimate. Look for: missed areas, incorrect square footage, underpriced materials, or excluded items. ACV payment comes first; RCV depreciation is recoverable after repairs are completed (if you have RCV coverage). Settlement typically arrives within 10-14 days of approval.',
      tip: 'Allstate settlements are negotiable. Don\'t accept the first offer if it seems low—request a re-review.',
      timeEstimate: '2-4 hours',
      tools: ['Settlement breakdown', 'Contractor estimates', 'Calculator']
    },
    {
      name: 'Request Supplemental Payment If Needed',
      text: 'If the Allstate settlement is insufficient for proper repairs, request a "supplement." Provide: detailed contractor estimates showing additional work needed, photos of missed damage, and written explanation. Allstate adjusters regularly process supplements—it\'s a normal part of the claims process. Your agent (if you have one) can help advocate for additional payment.',
      tip: 'Hidden damage behind walls often requires supplements. Don\'t be afraid to request them.',
      timeEstimate: '3-10 days',
      tools: ['Supplement request letter', 'Supporting documentation', 'Contractor support']
    },
    {
      name: 'Complete Repairs and Recover Depreciation',
      text: 'After repairs are finished, submit final invoices to Allstate to recover withheld depreciation (if you have RCV coverage). Upload through the app or mail to your adjuster. Include: contractor invoices, before/after photos, and proof of completed work. Allstate typically processes depreciation recovery within 10-14 days. Keep all records for 7+ years.',
      tip: 'Depreciation recovery can be 25-40% of your total settlement. Don\'t forget to claim it.',
      timeEstimate: 'Varies by project',
      tools: ['Final invoices', 'Before/after photos', 'Allstate app']
    }
  ];

  const allstateFeatures = [
    {
      title: 'QuickFoto Claim',
      description: 'Allstate\'s photo-based claims system uses AI to analyze damage photos and speed up initial assessments. Upload directly through the app for faster processing.',
      icon: Camera
    },
    {
      title: 'Good Hands Repair Network',
      description: 'Allstate\'s vetted contractor network offers guaranteed work and direct billing. You\'re not required to use them, but they can simplify the repair process.',
      icon: Home
    },
    {
      title: 'Virtual Inspections',
      description: 'For smaller claims, Allstate offers video-call inspections with adjusters. Convenient but may miss hidden damage—request in-person for significant losses.',
      icon: Smartphone
    },
    {
      title: '24/7 Claim Support',
      description: 'Allstate\'s claims team is available around the clock. Track claim status, upload documents, and chat with representatives through the app.',
      icon: Headphones
    }
  ];

  const faqs = [
    {
      question: 'Does Allstate homeowners insurance cover water damage?',
      answer: 'Allstate homeowners policies cover sudden and accidental water damage including: burst pipes, water heater failures, appliance overflows, roof leaks from storms, and toilet/tub overflows. Standard exclusions include: external flooding (requires separate flood policy), sewer backup (may require endorsement), gradual leaks, and maintenance neglect. Many Allstate policies include Water Backup coverage—check your declarations page.'
    },
    {
      question: 'How do I file a water damage claim with Allstate?',
      answer: 'File through: (1) Allstate mobile app (fastest)—tap "Claims" → "File a Claim," (2) call 1-800-ALLSTATE (1-800-255-7828) 24/7, or (3) contact your Allstate agent. The app offers QuickFoto Claim for fast photo uploads. Have your policy number, damage photos, and incident details ready. You\'ll receive a claim number and adjuster assignment within 24 hours.'
    },
    {
      question: 'How long does Allstate take to pay water damage claims?',
      answer: 'Allstate\'s typical timeline: Claim acknowledgment: immediate. Adjuster assignment: 24-48 hours. Inspection: 3-7 days. Initial settlement offer: 7-14 days after inspection. Payment: 5-7 business days after approval. Total: 2-4 weeks for straightforward claims. Complex claims with hidden damage or disputes may take 4-8 weeks.'
    },
    {
      question: 'What is Allstate\'s water damage deductible?',
      answer: 'Allstate deductibles typically range from $500 to $2,500, depending on your policy selection. Higher deductibles mean lower premiums. Your deductible is subtracted from the settlement amount. Check your declarations page for your specific deductible. Some Allstate policies offer "deductible rewards" that reduce your deductible for claim-free periods.'
    },
    {
      question: 'Should I use Allstate\'s Good Hands Repair Network?',
      answer: 'You have the right to choose any contractor—you\'re not required to use Allstate\'s network. Good Hands Repair Network offers: pre-vetted contractors, guaranteed work, and direct billing to Allstate. However, get estimates from both your preferred contractor and the network to compare. Choose based on qualifications, reviews, and your comfort level.'
    },
    {
      question: 'What if Allstate denies my water damage claim?',
      answer: 'If denied, request a written explanation citing specific policy language. Common denial reasons: gradual damage (not sudden), flood damage without flood policy, or sewer backup without endorsement. You can: (1) Appeal with additional documentation, (2) Request manager review, (3) Contact Virginia Bureau of Insurance, (4) Hire a public adjuster for significant claims. Many denials are overturned with proper evidence.'
    }
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to File an Allstate Water Damage Insurance Claim',
    description: 'Complete guide for Allstate policyholders filing water damage claims. Step-by-step process covering the Allstate app, QuickFoto Claim, adjuster inspections, and maximizing your settlement.',
    image: 'https://flood.doctor/images/guides/allstate-water-damage-claim.jpg',
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
      { label: 'Allstate Claims', path: '/guides/insurance/allstate-water-damage-claim/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Allstate Water Damage Claim Guide: Step-by-Step Process | Flood Doctor"
        description="Complete guide for Allstate policyholders filing water damage claims. Learn the QuickFoto Claim process, Good Hands Repair Network, adjuster tips, and how to maximize your settlement."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: 'Insurance', path: '/guides/insurance/' },
            { label: 'Allstate Claims', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> Allstate Insurance Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              Allstate Water Damage Claim Process
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              Step-by-step guide for Allstate policyholders. From QuickFoto Claim to depreciation recovery—everything you need to navigate your water damage claim with "Good Hands" support.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-indigo-600" />
                <span className="text-sm font-medium text-[#202124]">9 Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Clock size={18} className="text-indigo-600" />
                <span className="text-sm font-medium text-[#202124]">12 min read</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-lg border border-indigo-200">
                <Camera size={18} className="text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">QuickFoto Claim</span>
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

            {/* Allstate Features */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-indigo-600">
                Allstate Claim Features
              </h2>
              <p className="text-[#5f6368] mb-8">
                Allstate offers several digital tools to streamline your claim. Here's what's available:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {allstateFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-[#dadce0] hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <feature.icon className="text-indigo-600" size={20} />
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
                Allstate is one of the largest home insurers in America, known for their "You're in Good Hands" promise. Their claims process combines digital convenience (QuickFoto Claim, mobile app) with traditional adjuster inspections for significant losses.
              </p>
              <p className="text-lg text-[#5f6368] leading-relaxed">
                This guide walks you through Allstate's specific claims process, from initial filing through depreciation recovery. We work with Allstate adjusters regularly in Northern Virginia and understand what they need for fast approvals.
              </p>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-indigo-600">
                9 Steps to File Your Allstate Claim
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow these steps for optimal results with Allstate. Leverage their digital tools for faster processing.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative bg-white border border-[#dadce0] rounded-3xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white items-center justify-center shrink-0 shadow-lg">
                        <span className="text-xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display text-xl font-medium text-[#202124] mb-3">
                          {step.name}
                        </h3>
                        <p className="text-[#5f6368] leading-relaxed mb-4">
                          {step.text}
                        </p>

                        <div className="bg-indigo-50 rounded-xl p-4 mb-4">
                          <div className="flex items-start gap-3">
                            <Zap size={18} className="text-indigo-600 mt-0.5 shrink-0" />
                            <div>
                              <span className="font-medium text-indigo-700 text-sm">Pro Tip: </span>
                              <span className="text-sm text-indigo-900">{step.tip}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#5f6368]">
                          <Clock size={16} className="text-indigo-600" />
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
              <GoogleStyleFAQ data={faqs} title="Allstate Water Damage Claim FAQ" className="border-none p-0" />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-indigo-600 rounded-[32px] p-8 text-white shadow-lg">
                <h3 className="font-display text-xl font-medium mb-4">We Work with Allstate Daily</h3>
                <p className="text-indigo-100 text-sm leading-relaxed mb-6">
                  Our team coordinates with Allstate adjusters regularly. We provide Xactimate estimates, complete documentation, and direct billing to streamline your claim.
                </p>
                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-indigo-600 border-none hover:bg-indigo-50">
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
                    <div key={i} className="flex items-center gap-3 text-sm text-indigo-100">
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4 flex items-center gap-2">
                  <Smartphone size={18} className="text-indigo-600" />
                  Allstate Contact Info
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">24/7 Claims:</span>
                    <a href="tel:18002557828" className="text-indigo-600 font-medium">1-800-ALLSTATE</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Mobile App:</span>
                    <span className="text-[#202124]">Allstate Mobile</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Website:</span>
                    <a href="https://allstate.com" className="text-indigo-600" target="_blank" rel="noopener">allstate.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h4 className="font-medium text-[#202124] mb-4">Claim Checklist</h4>
                <div className="space-y-3">
                  {[
                    'Policy number ready',
                    'Allstate app installed',
                    'Photos of all damage',
                    'Video walkthrough',
                    'Water depth measurement',
                    'Mitigation receipts',
                    'Damaged items inventory',
                    'Contractor estimates'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#5f6368]">
                      <div className="w-5 h-5 rounded border border-[#dadce0] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-indigo-600" />
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
                    { href: '/guides/insurance/nationwide-water-damage-claim/', label: 'Nationwide Claims' },
                    { href: '/guides/water-damage-insurance-claim/', label: 'General Claim Guide' }
                  ].map((link, i) => (
                    <a key={i} href={link.href} className="flex items-center gap-3 text-sm text-[#5f6368] hover:text-indigo-600 transition-colors group">
                      <ArrowRight size={16} className="text-[#dadce0] group-hover:text-indigo-600" />
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
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            You're in Good Hands with Our Support
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            We work directly with Allstate adjusters throughout Northern Virginia. Focus on your family—we'll handle the documentation, estimates, and coordination.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-indigo-600 border-none hover:bg-indigo-50">
            <Phone size={20} className="mr-2" />
            Call 24/7: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default AllstateWaterDamageClaimGuide;
