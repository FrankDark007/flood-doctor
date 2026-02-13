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
  MapPin,
  AlertTriangle,
  Star
} from 'lucide-react';

const USAAWaterDamageClaimGuide: React.FC = () => {
  const steps = [
    {
      name: 'Open a Claim via USAA Mobile App or Call 1-800-531-USAA',
      text: 'USAA members can file water damage claims 24/7 through the USAA mobile app or by calling 1-800-531-USAA (8722). The app is fastest—tap "File a Claim," select "Property," then "Water Damage." Have your policy number ready. USAA assigns claims within 24 hours, often same-day. You\'ll receive your claim number and adjuster assignment via text and email.',
      tip: 'The USAA app lets you upload photos directly during filing—start documenting before you call.',
      timeEstimate: '15-30 minutes',
      tools: ['USAA mobile app', 'Policy number', 'Phone for backup']
    },
    {
      name: 'Document All Damage with Photos and Video',
      text: 'Before any cleanup, capture comprehensive documentation. USAA\'s app allows unlimited photo uploads directly to your claim. Photograph: the water source, standing water depth (use a ruler), every affected room from multiple angles, damaged belongings with close-ups, wall/ceiling discoloration, and any visible mold. Create a video walkthrough with narration explaining what happened.',
      tip: 'USAA adjusters appreciate thorough documentation—upload 100+ photos. More evidence means faster, higher settlements.',
      timeEstimate: '30-60 minutes',
      tools: ['Smartphone camera', 'Ruler for water depth', 'USAA app for uploads']
    },
    {
      name: 'Mitigate Further Damage Immediately',
      text: 'Your USAA policy requires you to prevent additional damage. Stop the water source, extract standing water, and protect undamaged belongings. Save ALL receipts for emergency supplies (shop vacs, fans, tarps, sandbags). USAA covers reasonable mitigation expenses. Do NOT make permanent repairs yet—only emergency measures. Document your mitigation efforts with photos.',
      tip: 'USAA reimburses mitigation costs quickly. Submit receipts through the app for faster processing.',
      timeEstimate: '1-4 hours',
      tools: ['Emergency supplies', 'Receipt storage', 'Camera']
    },
    {
      name: 'Schedule Your USAA Adjuster Inspection',
      text: 'USAA typically contacts you within 24-48 hours to schedule an inspection. For significant damage, they send a field adjuster. For smaller claims, you may use the USAA virtual inspection (video call with adjuster). During the inspection, walk through ALL damage areas—don\'t assume they\'ll find hidden damage in walls or under flooring. Ask about moisture detection in walls.',
      tip: 'Request a field adjuster for claims over $10,000—virtual inspections often miss hidden damage.',
      timeEstimate: '1-3 days wait, 2-4 hours inspection',
      tools: ['All documentation organized', 'Access to all affected areas', 'Notepad for questions']
    },
    {
      name: 'Get IICRC-Certified Restoration Estimates',
      text: 'Contact 2-3 IICRC-certified restoration companies for estimates. Choose companies that use Xactimate software—the same platform USAA adjusters use. This ensures estimate line items match USAA\'s pricing database. Ask if they offer direct USAA billing and have experience with military families\' unique scheduling needs (PCS, deployment, TDY).',
      tip: 'Flood Doctor has extensive experience with USAA claims and offers direct billing. We understand military family schedules.',
      timeEstimate: '1-2 days',
      tools: ['Phone', 'Camera for follow-up documentation']
    },
    {
      name: 'Review Your USAA Coverage and Deductible',
      text: 'USAA homeowners and renters policies cover sudden/accidental water damage (burst pipes, appliance failures, storm damage). Standard exclusions: flood (requires separate NFIP or USAA flood policy), sewer backup (requires endorsement), gradual leaks, and maintenance neglect. Check your coverage limits for dwelling, personal property, and ALE (Additional Living Expenses). Most USAA deductibles are $500-$2,500.',
      tip: 'USAA members often have better coverage limits than standard carriers. Review your declarations page.',
      timeEstimate: '30-60 minutes',
      tools: ['Policy documents', 'USAA app (view coverage)', 'Notepad']
    },
    {
      name: 'Compare Settlement Offer to Restoration Estimates',
      text: 'USAA provides settlement estimates through their adjuster. Compare line-by-line with your restoration company\'s Xactimate estimate. Look for: missed areas, incorrect square footage, lowball material costs, or omitted items. USAA often issues ACV (Actual Cash Value) payment first, with depreciation recovery available after repairs are complete if you have RCV (Replacement Cost Value) coverage.',
      tip: 'USAA settlements are generally fair, but always compare. Document any discrepancies in writing.',
      timeEstimate: '2-4 hours',
      tools: ['Settlement statement', 'Restoration estimates', 'Calculator']
    },
    {
      name: 'Request Reconsideration If Needed',
      text: 'If the USAA settlement seems low, you can request reconsideration. Upload additional documentation through the app or contact your adjuster directly. USAA member advocates are available if you disagree with the standard adjuster. For claims over $25,000, consider requesting a senior adjuster review. USAA\'s appeals process is member-friendly compared to other carriers.',
      tip: 'USAA rarely requires formal disputes—a phone call with additional evidence often resolves differences.',
      timeEstimate: '1-7 days',
      tools: ['Additional documentation', 'Phone', 'Written summary of discrepancies']
    },
    {
      name: 'Complete Repairs and Recover Depreciation',
      text: 'After repairs are complete, submit final invoices to USAA to recover withheld depreciation (if you have RCV coverage). Upload receipts and contractor invoices through the USAA app. USAA typically processes depreciation recovery within 7-14 days. Take before/after photos to document completed work. Maintain records for 7+ years.',
      tip: 'Don\'t forget depreciation recovery—it can be 20-40% of your total settlement.',
      timeEstimate: 'Varies by project',
      tools: ['Final invoices', 'Before/after photos', 'USAA app']
    }
  ];

  const militaryScenarios = [
    {
      title: 'PCS During a Water Damage Claim',
      description: 'If you\'re PCSing during an active claim, notify USAA immediately. They can adjust timelines, coordinate with your new location, and work directly with your restoration company. Obtain all documentation before leaving. USAA can mail checks to your new address or deposit directly.',
      icon: MapPin
    },
    {
      title: 'Damage While Deployed',
      description: 'USAA understands deployment realities. Authorize a trusted person (spouse, family member) to handle claim decisions via Power of Attorney. USAA\'s app allows secure document sharing. Virtual inspections work well for deployed service members. Priority processing is available for deployment situations.',
      icon: Shield
    },
    {
      title: 'Base Housing Water Damage',
      description: 'For privatized base housing (like Balfour Beatty, Lincoln Military), damage is typically the housing company\'s responsibility. For on-base quarters, contact your installation housing office. USAA renters insurance covers YOUR belongings, not the structure. Document your damaged personal property separately.',
      icon: Users
    },
    {
      title: 'TDY During Claim Process',
      description: 'If you\'re TDY during an active claim, USAA can schedule virtual inspections and coordinate directly with your restoration company. Grant temporary authority to a family member for in-person access. USAA\'s mobile-first approach works well for members on travel.',
      icon: Smartphone
    }
  ];

  const faqs = [
    {
      question: 'Does USAA homeowners insurance cover water damage?',
      answer: 'Yes, USAA homeowners policies cover sudden and accidental water damage including: burst pipes, water heater failures, washing machine overflows, roof leaks from storms, and accidental toilet/tub overflows. Standard exclusions include: external flooding (requires separate flood insurance), sewer backup (requires endorsement), gradual leaks, and damage from neglected maintenance. USAA often provides broader coverage than standard carriers.'
    },
    {
      question: 'How do I file a water damage claim with USAA?',
      answer: 'File through the USAA mobile app (fastest), usaa.com, or call 1-800-531-USAA (8722) 24/7. Via app: tap "File a Claim" → "Property" → "Water Damage." You\'ll need your policy number and damage photos. USAA assigns claims within 24 hours and provides your claim number and adjuster contact immediately. The app allows direct photo/video uploads to your claim file.'
    },
    {
      question: 'How long does USAA take to process water damage claims?',
      answer: 'USAA typically processes water damage claims faster than industry average. Initial contact: 24-48 hours. Adjuster inspection: 3-7 days. Initial settlement offer: 7-14 days after inspection. Payment: 3-5 business days after approval. Total timeline: 2-4 weeks for straightforward claims. Complex claims with hidden damage may take 4-8 weeks.'
    },
    {
      question: 'Does USAA cover water damage during deployment?',
      answer: 'Yes, your USAA coverage continues during deployment. If you discover damage while deployed, file a claim through the app or have your authorized family member call. USAA offers priority processing for deployed service members. You can authorize someone via Power of Attorney to make claim decisions. Virtual inspections are available if in-person isn\'t possible.'
    },
    {
      question: 'What is the USAA water damage deductible?',
      answer: 'USAA deductibles vary by policy but typically range from $500 to $2,500. Your deductible is subtracted from the settlement amount. For example: $15,000 damage with a $1,000 deductible = $14,000 settlement. Check your declarations page for your specific deductible. Some USAA members have "decreasing deductibles" that reduce over time without claims.'
    },
    {
      question: 'Can I choose my own contractor with USAA?',
      answer: 'Yes, you can choose your own IICRC-certified restoration company. You are NOT required to use USAA\'s contractor network. However, USAA\'s network contractors may offer guaranteed work and direct billing. We recommend getting estimates from both your preferred contractor and USAA\'s recommendation, then choosing based on qualifications and your comfort level.'
    }
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to File a USAA Water Damage Insurance Claim',
    description: 'Complete guide for USAA members filing water damage claims. Step-by-step process covering the USAA app, adjuster inspections, military-specific scenarios like PCS and deployment, and maximizing your settlement.',
    image: 'https://flood.doctor/images/guides/usaa-water-damage-claim.jpg',
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
      { label: 'USAA Claims', path: '/guides/insurance/usaa-water-damage-claim/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="USAA Water Damage Claim Guide: Step-by-Step for Military Families"
        description="Complete guide for USAA members filing water damage claims. Learn the USAA app process, military-specific scenarios (PCS, deployment), adjuster tips, and how to maximize your settlement."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: 'Insurance', path: '/guides/insurance/' },
            { label: 'USAA Claims', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> USAA Insurance Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              USAA Water Damage Claim Process
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              Step-by-step guide for USAA members. From filing through the app to handling claims during PCS or deployment—everything military families need to navigate water damage insurance.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">9 Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Clock size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">12 min read</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                <Shield size={18} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Military-Focused</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                USAA Claim Help: (877) 497-0007
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">

            {/* USAA Quick Facts */}
            <div className="bg-[#e8f0fe] border border-[#1a73e8]/20 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-[#1a73e8] p-3 rounded-xl shrink-0">
                  <Star className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#202124] mb-2">USAA Claims: What Members Need to Know</h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed mb-4">
                    USAA consistently ranks highest in customer satisfaction for claims handling. Their mobile app, member advocates, and understanding of military life make the process smoother than most carriers.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#1a73e8]" />
                      <span className="text-[#202124]">24/7 claims line</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#1a73e8]" />
                      <span className="text-[#202124]">Mobile app filing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#1a73e8]" />
                      <span className="text-[#202124]">Virtual inspections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#1a73e8]" />
                      <span className="text-[#202124]">Deployment support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-lg text-[#5f6368] leading-relaxed mb-4">
                Filing a water damage claim with USAA is more straightforward than most insurance companies—but knowing the right steps still matters. As a USAA member, you have access to superior tools like the mobile app, virtual inspections, and member advocates that can make your claim process significantly easier.
              </p>
              <p className="text-lg text-[#5f6368] leading-relaxed">
                This guide covers the complete USAA claims process, including scenarios unique to military families: handling claims during PCS, managing damage while deployed, and navigating base housing situations. We've helped hundreds of military families in Northern Virginia maximize their USAA settlements.
              </p>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                9 Steps to File Your USAA Water Damage Claim
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow these steps for the best results with USAA. Their member-first approach makes this process easier than most carriers.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative bg-white border border-[#dadce0] rounded-3xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white items-center justify-center shrink-0 shadow-lg">
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
                            <Zap size={18} className="text-[#1a73e8] mt-0.5 shrink-0" />
                            <div>
                              <span className="font-medium text-[#1a73e8] text-sm">Pro Tip: </span>
                              <span className="text-sm text-blue-900">{step.tip}</span>
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

            {/* Military-Specific Scenarios */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                Military-Specific Claim Scenarios
              </h2>
              <p className="text-[#5f6368] mb-8">
                USAA understands military life. Here's how to handle common situations unique to service members.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {militaryScenarios.map((scenario, index) => (
                  <div key={index} className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#1a73e8] rounded-xl flex items-center justify-center">
                        <scenario.icon className="text-white" size={20} />
                      </div>
                      <h3 className="font-medium text-[#202124]">{scenario.title}</h3>
                    </div>
                    <p className="text-sm text-[#5f6368] leading-relaxed">
                      {scenario.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ data={faqs} title="USAA Water Damage Claim FAQ" className="border-none p-0" />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-lg">
                <h3 className="font-display text-xl font-medium mb-4">We Work with USAA Daily</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Flood Doctor has extensive experience with USAA claims. We provide Xactimate estimates, direct billing, and understand military family schedules.
                </p>
                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                  {[
                    { icon: FileText, label: 'Xactimate estimates' },
                    { icon: Camera, label: 'USAA documentation support' },
                    { icon: DollarSign, label: 'Direct USAA billing' },
                    { icon: Users, label: 'PCS/deployment flexibility' }
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
                  <Smartphone size={18} className="text-[#1a73e8]" />
                  USAA Contact Info
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Claims Line:</span>
                    <a href="tel:18005318722" className="text-[#1a73e8] font-medium">1-800-531-USAA</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Mobile App:</span>
                    <span className="text-[#202124]">USAA Mobile</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Website:</span>
                    <a href="https://usaa.com" className="text-[#1a73e8]" target="_blank" rel="noopener">usaa.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h4 className="font-medium text-[#202124] mb-4">USAA Claim Checklist</h4>
                <div className="space-y-3">
                  {[
                    'Policy number ready',
                    'USAA app installed',
                    'Photos of all damage',
                    'Video walkthrough',
                    'Water depth measurement',
                    'Mitigation receipts',
                    'Damaged items inventory',
                    'Contractor estimates'
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
                <h4 className="font-medium text-[#202124] mb-4">Other Insurance Guides</h4>
                <div className="space-y-3">
                  {[
                    { href: '/guides/insurance/state-farm-water-damage-claim/', label: 'State Farm Claims' },
                    { href: '/guides/insurance/allstate-water-damage-claim/', label: 'Allstate Claims' },
                    { href: '/guides/insurance/nationwide-water-damage-claim/', label: 'Nationwide Claims' },
                    { href: '/guides/water-damage-insurance-claim/', label: 'General Claim Guide' }
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

      {/* Military-Focused CTA */}
      <div className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Serving Those Who Serve
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We work with military families across Northern Virginia daily. Whether you're at Fort Belvoir, the Pentagon, or anywhere in the DMV, we understand your schedule and work directly with USAA.
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

export default USAAWaterDamageClaimGuide;
