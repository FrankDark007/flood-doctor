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
  MapPin
} from 'lucide-react';

const StateFarmWaterDamageClaimGuide: React.FC = () => {
  const steps = [
    {
      name: 'Contact Your State Farm Agent First',
      text: 'Unlike other carriers, State Farm\'s agent-based model means your local agent is your first contact. Call your agent directly—they\'ll initiate the claim and guide you through the process. If after hours, call State Farm\'s 24/7 claims line at 1-800-732-5246. Your agent knows your policy details and can immediately confirm coverage. Have your policy number ready.',
      tip: 'Save your agent\'s direct cell number. Good agents respond to water damage calls within minutes, even on weekends.',
      timeEstimate: '15-30 minutes',
      tools: ['Agent contact info', 'Policy number', 'Phone']
    },
    {
      name: 'Document Everything Before Cleanup',
      text: 'Take comprehensive photos and videos of ALL damage BEFORE any cleanup. Photograph: the water source, standing water depth (use a ruler), every affected room from multiple angles, damaged belongings, and moisture on walls/ceilings. State Farm adjusters use these photos to validate claims. Create a written inventory of damaged items with estimated values and purchase dates if possible.',
      tip: 'State Farm\'s app allows photo uploads, but also save copies to your phone and cloud storage as backup.',
      timeEstimate: '30-60 minutes',
      tools: ['Smartphone camera', 'Ruler for water depth', 'State Farm app', 'Notepad for inventory']
    },
    {
      name: 'File the Claim via App, Web, or Agent',
      text: 'State Farm offers three filing options: (1) State Farm mobile app—tap "Claims" → "File a Claim," (2) statefarm.com claims portal, or (3) through your agent directly. The app is convenient, but your agent can ensure proper categorization. Provide: date/time of loss, description of damage, and photos. You\'ll receive a claim number immediately.',
      tip: 'File within 24-48 hours. State Farm tracks claim timing—delays can raise red flags.',
      timeEstimate: '20-45 minutes',
      tools: ['State Farm app', 'Policy documents', 'Damage photos']
    },
    {
      name: 'Mitigate Further Damage',
      text: 'Your State Farm policy requires you to take reasonable steps to prevent additional damage. Stop the water source, extract standing water, remove saturated materials, and set up fans/dehumidifiers. Save ALL receipts—State Farm covers reasonable mitigation expenses. Do NOT make permanent repairs until the adjuster inspects. Document your mitigation efforts with photos.',
      tip: 'State Farm pre-approves emergency mitigation. You don\'t need permission to prevent further damage.',
      timeEstimate: '1-4 hours',
      tools: ['Emergency supplies', 'Receipt folder', 'Camera']
    },
    {
      name: 'Prepare for State Farm Adjuster Inspection',
      text: 'State Farm assigns a field adjuster for most water damage claims. They\'ll contact you within 24-72 hours to schedule. Before the inspection: organize all photos, receipts, and inventory. During inspection: walk through ALL damage, including hidden areas (inside walls, under flooring). Point out moisture damage—ask about moisture meter readings. Get the adjuster\'s preliminary estimate before they leave.',
      tip: 'Request that the adjuster check behind walls with a moisture meter. Hidden damage is often missed.',
      timeEstimate: '2-4 hours',
      tools: ['Documentation organized', 'Access to all areas', 'Notepad for questions']
    },
    {
      name: 'Get IICRC-Certified Restoration Estimates',
      text: 'Contact 2-3 IICRC-certified restoration companies for estimates. Ensure they use Xactimate software—the same platform State Farm adjusters use. Compare their line-item estimates to the adjuster\'s assessment. Ask about direct insurance billing and experience working with State Farm. Get estimates in writing with detailed scope of work.',
      tip: 'Restoration companies with State Farm experience know what documentation adjusters need for approval.',
      timeEstimate: '1-2 days',
      tools: ['Phone', 'Adjuster estimate for comparison']
    },
    {
      name: 'Review Your State Farm Coverage',
      text: 'State Farm homeowners policies typically cover sudden/accidental water damage. Check your specific coverage: Dwelling (structure damage), Personal Property (belongings), Additional Living Expenses (hotel if uninhabitable). Exclusions usually include: flood (requires separate flood policy), sewer backup (requires endorsement), gradual leaks, and maintenance neglect. Know your deductible—State Farm offers various options.',
      tip: 'State Farm offers "Water Backup" endorsement for sewer/drain issues. Check if you have this coverage.',
      timeEstimate: '30-60 minutes',
      tools: ['Policy declarations page', 'Highlighter', 'Notepad']
    },
    {
      name: 'Compare Settlement Offer to Estimates',
      text: 'State Farm provides a detailed estimate broken into Dwelling, Personal Property, and ALE. Compare line-by-line with your restoration company\'s estimate. Look for: missed areas, incorrect measurements, lower material costs, or excluded items. ACV (Actual Cash Value) is paid initially; RCV (Replacement Cost Value) depreciation is recoverable after repairs if you have that coverage.',
      tip: 'State Farm settlements often come in phases. Don\'t panic if the first payment is ACV only.',
      timeEstimate: '2-4 hours',
      tools: ['Settlement breakdown', 'Contractor estimates', 'Calculator']
    },
    {
      name: 'Request Supplement If Settlement Is Low',
      text: 'If the State Farm settlement is insufficient, request a "supplement." This is an additional payment for overlooked or underestimated damage. Provide: detailed contractor estimates, photos of missed damage, and written explanation of discrepancies. Your agent can advocate for you with the claims department. State Farm supplements are common and not adversarial.',
      tip: 'Most contractors will help prepare supplement requests—they do this regularly with State Farm.',
      timeEstimate: '1-7 days',
      tools: ['Written supplement request', 'Supporting documentation', 'Agent contact']
    },
    {
      name: 'Complete Repairs and Recover Depreciation',
      text: 'After repairs are complete, submit final invoices to State Farm to recover withheld depreciation (if you have RCV coverage). Send receipts, contractor invoices, and before/after photos. State Farm typically processes depreciation recovery within 10-14 days. Maintain all records for 7+ years. Take final photos of completed work.',
      tip: 'Depreciation recovery can be 20-40% of your total claim. Don\'t leave this money on the table.',
      timeEstimate: 'Varies by project',
      tools: ['Final invoices', 'Before/after photos', 'Policy copy']
    }
  ];

  const coverageDetails = [
    {
      title: 'Dwelling Coverage (Coverage A)',
      description: 'Covers structural damage to your home—walls, floors, ceilings, built-in appliances. Typical limits: $200,000-$500,000+. Includes materials and labor for repairs.',
      icon: Home
    },
    {
      title: 'Personal Property (Coverage C)',
      description: 'Covers damaged belongings—furniture, electronics, clothing, appliances. Typically 50-70% of dwelling coverage. Document items with photos and receipts.',
      icon: FileText
    },
    {
      title: 'Additional Living Expenses (Coverage D)',
      description: 'Covers hotel, food, and extra expenses if your home is uninhabitable during repairs. Typically 20-30% of dwelling coverage. Keep all receipts.',
      icon: MapPin
    },
    {
      title: 'Water Backup Endorsement',
      description: 'Optional add-on covering sewer and drain backup damage. NOT included in standard policies. If you don\'t have it, sewer backup claims are denied.',
      icon: AlertTriangle
    }
  ];

  const faqs = [
    {
      question: 'Does State Farm homeowners insurance cover water damage?',
      answer: 'State Farm homeowners policies cover sudden and accidental water damage including: burst pipes, water heater failures, washing machine overflows, roof leaks from storms, and accidental overflows. Standard exclusions include: external flooding (requires separate flood insurance), sewer/drain backup (requires Water Backup endorsement), gradual leaks, and damage from neglected maintenance. Review your declarations page for your specific coverage.'
    },
    {
      question: 'How do I file a water damage claim with State Farm?',
      answer: 'You can file through three channels: (1) Contact your local State Farm agent directly (recommended), (2) Use the State Farm mobile app under "Claims," or (3) Call 1-800-732-5246 24/7. Your agent is typically the best first contact—they know your policy and can guide you through the process. Have your policy number and damage photos ready.'
    },
    {
      question: 'How long does State Farm take to process water damage claims?',
      answer: 'State Farm\'s typical timeline: Claim filed: immediate acknowledgment. Adjuster contact: 24-72 hours. Inspection: within 5-7 days. Initial settlement: 7-14 days after inspection. Payment: 5-7 business days after approval. Total: 2-4 weeks for straightforward claims. Complex claims with hidden damage or disputes may take 6-8 weeks.'
    },
    {
      question: 'What is State Farm\'s water damage deductible?',
      answer: 'State Farm offers various deductible options, typically $500, $1,000, $1,500, or $2,500. Higher deductibles mean lower premiums. Your deductible is subtracted from the settlement. Check your declarations page for your specific deductible. Some policies have separate wind/hail deductibles that don\'t apply to water damage.'
    },
    {
      question: 'Can I choose my own contractor with State Farm?',
      answer: 'Yes, you have the right to choose your own IICRC-certified contractor. State Farm has a "Select Service" network of preferred contractors who offer guaranteed work and direct billing, but you are NOT required to use them. Get estimates from both your preferred contractor and a Select Service provider to compare.'
    },
    {
      question: 'What if State Farm denies my water damage claim?',
      answer: 'If denied, request a written explanation with specific policy language cited. Common denial reasons include: gradual damage (not sudden), lack of coverage (flood or sewer without endorsement), or missed filing deadlines. You can: (1) Request reconsideration with additional documentation, (2) Ask your agent to advocate, (3) File a complaint with Virginia Bureau of Insurance, (4) Hire a public adjuster for significant claims.'
    }
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to File a State Farm Water Damage Insurance Claim',
    description: 'Complete step-by-step guide for State Farm policyholders filing water damage claims. Learn the agent-first approach, documentation requirements, adjuster process, and how to maximize your settlement.',
    image: 'https://flood.doctor/images/guides/state-farm-water-damage-claim.jpg',
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
      { label: 'State Farm Claims', path: '/guides/insurance/state-farm-water-damage-claim/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="State Farm Water Damage Claim Guide: Step-by-Step Process"
        description="Complete guide for State Farm policyholders filing water damage claims. Learn the agent-first approach, coverage details, adjuster tips, and how to maximize your settlement."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-white to-red-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: 'Insurance', path: '/guides/insurance/' },
            { label: 'State Farm Claims', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> State Farm Insurance Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              State Farm Water Damage Claim Process
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              Step-by-step guide for State Farm policyholders. From contacting your agent to recovering depreciation—everything you need to navigate your water damage claim successfully.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-red-600" />
                <span className="text-sm font-medium text-[#202124]">10 Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Clock size={18} className="text-red-600" />
                <span className="text-sm font-medium text-[#202124]">14 min read</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-lg border border-red-200">
                <Users size={18} className="text-red-600" />
                <span className="text-sm font-medium text-red-700">Agent-First Approach</span>
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

            {/* State Farm Key Insight */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-xl shrink-0">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#202124] mb-2">The Agent Advantage</h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed">
                    State Farm's agent-based model is your advantage. Unlike 1-800 carriers, your local agent knows your policy, can advocate for you with claims, and often has direct relationships with adjusters. Always contact your agent first—they can fast-track your claim and ensure proper handling from the start.
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-lg text-[#5f6368] leading-relaxed mb-4">
                State Farm is the largest home insurer in the United States, and their claims process reflects their agent-focused business model. Unlike direct carriers, your relationship with your local State Farm agent matters—they can advocate for you, expedite inspections, and help negotiate settlements.
              </p>
              <p className="text-lg text-[#5f6368] leading-relaxed">
                This guide walks you through State Farm's specific claims process, from initial agent contact through depreciation recovery. We work with State Farm adjusters regularly in Northern Virginia and know what they need to approve your claim quickly.
              </p>
            </section>

            {/* Coverage Cards */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-red-600">
                State Farm Coverage Types
              </h2>
              <p className="text-[#5f6368] mb-8">
                Understanding your coverage categories helps you track what's covered and maximize your claim.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {coverageDetails.map((coverage, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-[#dadce0] hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                        <coverage.icon className="text-red-600" size={20} />
                      </div>
                      <h3 className="font-medium text-[#202124]">{coverage.title}</h3>
                    </div>
                    <p className="text-sm text-[#5f6368] leading-relaxed">
                      {coverage.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-red-600">
                10 Steps to File Your State Farm Claim
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow these steps for optimal results with State Farm. Leverage your agent relationship throughout.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative bg-white border border-[#dadce0] rounded-3xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white items-center justify-center shrink-0 shadow-lg">
                        <span className="text-xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display text-xl font-medium text-[#202124] mb-3">
                          {step.name}
                        </h3>
                        <p className="text-[#5f6368] leading-relaxed mb-4">
                          {step.text}
                        </p>

                        <div className="bg-red-50 rounded-xl p-4 mb-4">
                          <div className="flex items-start gap-3">
                            <Zap size={18} className="text-red-600 mt-0.5 shrink-0" />
                            <div>
                              <span className="font-medium text-red-700 text-sm">Pro Tip: </span>
                              <span className="text-sm text-red-900">{step.tip}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#5f6368]">
                          <Clock size={16} className="text-red-600" />
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
              <GoogleStyleFAQ data={faqs} title="State Farm Water Damage Claim FAQ" className="border-none p-0" />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-red-600 rounded-[32px] p-8 text-white shadow-lg">
                <h3 className="font-display text-xl font-medium mb-4">We Work with State Farm Daily</h3>
                <p className="text-red-100 text-sm leading-relaxed mb-6">
                  Our team coordinates with State Farm adjusters regularly. We provide Xactimate estimates, complete documentation, and direct billing to streamline your claim.
                </p>
                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-red-600 border-none hover:bg-red-50">
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
                    <div key={i} className="flex items-center gap-3 text-sm text-red-100">
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4 flex items-center gap-2">
                  <Smartphone size={18} className="text-red-600" />
                  State Farm Contact Info
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">24/7 Claims:</span>
                    <a href="tel:18007325246" className="text-red-600 font-medium">1-800-732-5246</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Mobile App:</span>
                    <span className="text-[#202124]">State Farm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5f6368]">Website:</span>
                    <a href="https://statefarm.com" className="text-red-600" target="_blank" rel="noopener">statefarm.com</a>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h4 className="font-medium text-[#202124] mb-4">Claim Checklist</h4>
                <div className="space-y-3">
                  {[
                    'Agent contact info',
                    'Policy number',
                    'Photos of all damage',
                    'Video walkthrough',
                    'Water depth measurement',
                    'Mitigation receipts',
                    'Damaged items inventory',
                    'Contractor estimates'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#5f6368]">
                      <div className="w-5 h-5 rounded border border-[#dadce0] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-red-600" />
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
                    { href: '/guides/insurance/allstate-water-damage-claim/', label: 'Allstate Claims' },
                    { href: '/guides/insurance/nationwide-water-damage-claim/', label: 'Nationwide Claims' },
                    { href: '/guides/water-damage-insurance-claim/', label: 'General Claim Guide' }
                  ].map((link, i) => (
                    <a key={i} href={link.href} className="flex items-center gap-3 text-sm text-[#5f6368] hover:text-red-600 transition-colors group">
                      <ArrowRight size={16} className="text-[#dadce0] group-hover:text-red-600" />
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
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Let Us Handle Your State Farm Claim
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            We work directly with State Farm adjusters throughout Northern Virginia. Focus on your family—we'll handle the documentation, estimates, and coordination.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-red-600 border-none hover:bg-red-50">
            <Phone size={20} className="mr-2" />
            Call 24/7: (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default StateFarmWaterDamageClaimGuide;
