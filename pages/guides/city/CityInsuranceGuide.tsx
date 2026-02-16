import React from 'react';
import { useFranchise } from '@/hooks/useFranchise';
import { getArchetypeConfig, getArchetype } from '@/config/archetypeMapping';
import PageMeta from '@/components/ui/PageMeta';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import GoogleStyleFAQ from '@/components/sections/GoogleStyleFAQ';
import { generateBreadcrumbSchema, combineSchemas } from '@/utils/schema';
import {
  Phone,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Shield,
  FileText,
  Camera,
  DollarSign,
  ArrowRight,
  ClipboardList,
  MessageSquare,
  Users,
  Zap,
  Building,
  Home
} from 'lucide-react';

const CityInsuranceGuide: React.FC = () => {
  const franchise = useFranchise();
  const archetype = getArchetype(franchise.id);
  const archetypeConfig = getArchetypeConfig(franchise.id);
  const guideData = franchise.guideData?.insurance;

  // Fallback for HQ or cities without guideData
  const city = franchise.city || 'Northern Virginia';
  const phone = franchise.phone || '(877) 497-0007';
  const averageClaimRange = guideData?.averageClaimRange || '$5,000-$25,000';
  const commonClaimTypes = guideData?.commonClaimTypes || ['Burst pipes', 'Appliance failures', 'Storm damage'];
  const adjusterTips = guideData?.localAdjusterTips || [
    'Document damage thoroughly before any cleanup',
    'Get multiple restoration estimates',
    'Keep all receipts for emergency expenses'
  ];
  const documentationFocus = guideData?.documentationFocus || ['Photographs', 'Videos', 'Written inventory'];

  // Get neighborhoods
  const neighborhoods = franchise.localHooks?.neighborhoods?.slice(0, 4) || [];

  // Archetype-specific claim insights
  const archetypeInsights = {
    estate: `${city}'s luxury homes often have higher claim values (${averageClaimRange}) due to premium finishes, specialty spaces like wine cellars, and high-value contents. Document custom features thoroughly.`,
    historic: `Historic ${city} properties present unique claim challenges—restoration must often match original materials. Document pre-damage condition of historic features for accurate replacement cost valuation.`,
    urban: `${city} condo and townhome claims often involve HOA coordination and shared systems. Understand your master policy coverage versus your HO-6 policy responsibility before filing.`,
    suburban: `${city}'s suburban homes commonly file claims for basement flooding and sump pump failures. If you have a sewer/drain backup endorsement, document the water source carefully.`
  };

  // Build 7 insurance claim steps
  const steps = [
    {
      name: 'Document All Damage Immediately',
      text: `Before any cleanup begins in your ${city} home, create comprehensive documentation. Take 100+ photos and videos showing: the water source, standing water depth (use a ruler), all affected rooms from multiple angles, damaged belongings, and moisture on walls/ceilings. ${archetype === 'estate' ? 'For high-value items like art, antiques, and custom finishes, capture serial numbers and close-up details.' : archetype === 'historic' ? 'Document condition of original materials—plaster, hardwood, trim—that may require specialized restoration.' : 'Include timestamps on all photos and create a narrated video walkthrough.'}`,
      tip: `${city} homeowners who document thoroughly receive 15-30% higher claim settlements on average.`,
      timeEstimate: '30-60 minutes',
      icon: Camera
    },
    {
      name: 'Call Your Insurance Company',
      text: `Report the damage to your insurer within 24 hours. Have your policy number ready and provide: date/time of discovery, suspected cause, affected areas, and emergency steps taken. Request a claim number and adjuster contact. Ask specifically about coverage limits, deductible amounts, and whether emergency mitigation is covered.`,
      tip: 'File claims by phone, not online—you can ask questions and get immediate guidance.',
      timeEstimate: '15-30 minutes',
      icon: Phone
    },
    {
      name: 'Review Your Policy Coverage',
      text: `Understand what your ${city} homeowners policy covers. Standard policies typically cover sudden water damage (burst pipes, appliance failures). Check for: coverage limits, deductible amount, contents coverage, additional living expenses (ALE) if displacement needed, and any endorsements. ${archetype === 'urban' ? "For condos, understand the split between your HO-6 policy and the building's master policy." : archetype === 'estate' ? 'Verify you have adequate coverage for high-value items and specialty spaces.' : 'Note any exclusions for flood, sewer backup, or gradual damage.'}`,
      tip: 'Take photos of relevant policy pages for quick reference during the claims process.',
      timeEstimate: '30 minutes',
      icon: FileText
    },
    {
      name: 'Begin Emergency Mitigation',
      text: `Insurance requires you to mitigate (prevent further damage). This includes: stopping the water source, removing standing water, and protecting undamaged property. Save all receipts for emergency expenses—these are typically reimbursable. ${city} emergency restoration costs are usually covered even before adjuster approval when properly documented.`,
      tip: 'Call Flood Doctor for professional emergency mitigation—we work directly with all insurers.',
      timeEstimate: '1-4 hours',
      icon: Shield
    },
    {
      name: 'Create a Detailed Inventory',
      text: `List all damaged items with: description, approximate age, original purchase price, and estimated replacement cost. ${archetype === 'estate' ? 'For high-value items, include appraisals, receipts, or comparable current prices.' : ''} Group items by room and category. Include structural damage (drywall, flooring, cabinets) and contents (furniture, electronics, clothing). The more detail, the faster your claim processes.`,
      tip: 'Apps like Encircle or Sortly can help organize your inventory with photos and values.',
      timeEstimate: '2-4 hours',
      icon: ClipboardList
    },
    {
      name: 'Meet with the Insurance Adjuster',
      text: `When the adjuster visits your ${city} home, have your documentation ready: photos/videos, inventory list, receipts, and any contractor estimates. Walk through all affected areas together. Point out damage that may not be immediately visible (moisture in walls, affected electrical). Don't sign anything immediately—request time to review.`,
      tip: 'Have your restoration contractor present during the adjuster visit to ensure nothing is missed.',
      timeEstimate: '1-2 hours',
      icon: Users
    },
    {
      name: 'Review Settlement and Choose Restoration',
      text: `Review your claim settlement carefully against your documentation and estimates. If the settlement seems low, you can negotiate or request re-evaluation. In ${city}, average water damage claims range from ${averageClaimRange}. Choose an IICRC-certified restoration company—insurers work directly with qualified contractors for seamless billing.`,
      tip: 'Flood Doctor handles insurance billing directly—you typically pay only your deductible.',
      timeEstimate: 'Ongoing',
      icon: DollarSign
    }
  ];

  // Common claim types for this area
  const claimTypesWithCoverage = [
    { type: commonClaimTypes[0] || 'Burst pipes', covered: true, note: 'Covered if sudden' },
    { type: commonClaimTypes[1] || 'Appliance failures', covered: true, note: 'Water heaters, washers, dishwashers' },
    { type: commonClaimTypes[2] || 'Storm damage', covered: true, note: 'Wind-driven rain, roof leaks' },
    { type: 'Sewer backup', covered: false, note: 'Requires separate endorsement' },
    { type: 'External flooding', covered: false, note: 'Requires NFIP flood insurance' },
    { type: 'Gradual leaks', covered: false, note: 'Maintenance-related damage excluded' }
  ];

  // Build city-specific FAQs
  const faqs = [
    {
      question: `How much does water damage restoration cost in ${city}?`,
      answer: `${city} water damage restoration typically ranges from ${averageClaimRange} depending on severity, affected area, and water category. Minor damage (single room, clean water) may cost $2,500-5,000. Major flooding affecting multiple rooms or involving contaminated water can exceed $25,000. Most homeowners pay only their deductible ($500-$2,500) as insurance covers the rest.`
    },
    {
      question: `Does homeowners insurance cover water damage in ${city}?`,
      answer: `Most ${city} homeowners policies cover sudden and accidental water damage—burst pipes, appliance failures, storm damage. Standard policies typically do NOT cover: gradual damage from neglected maintenance, flooding from external sources (requires NFIP flood insurance), sewer/drain backups (requires endorsement), or damage resulting from lack of maintenance.`
    },
    {
      question: `How quickly should I file a water damage claim?`,
      answer: `File your claim within 24-48 hours of discovering damage. Most policies require "prompt" notification, and delays can complicate claims. Document everything immediately, then call your insurer. In ${city}'s humid climate, quick action also prevents secondary damage like mold, which may affect coverage.`
    },
    {
      question: `What if my insurance claim is denied?`,
      answer: `If your ${city} water damage claim is denied: 1) Request written explanation of denial reason, 2) Review your policy language carefully, 3) Provide additional documentation addressing the denial reason, 4) File a formal appeal with your insurer, 5) Consider hiring a public adjuster or consulting with an insurance attorney. Common denial reasons include coverage exclusions and maintenance-related causes.`
    },
    {
      question: `Does Flood Doctor work with insurance companies?`,
      answer: `Yes. We work directly with all major insurers serving ${city}. Our team handles documentation, provides detailed scopes of work that adjusters accept, and bills insurance directly in most cases. You typically pay only your deductible. We've processed thousands of claims and know how to maximize your settlement while minimizing your out-of-pocket costs.`
    },
    {
      question: `Should I get multiple estimates before filing a claim?`,
      answer: `Getting an estimate from a qualified restoration company before filing can help, but don't delay filing. Emergency mitigation should begin immediately to prevent further damage. We provide free damage assessments and can work with your adjuster to agree on scope. Having professional documentation strengthens your claim.`
    }
  ];

  // Generate HowTo schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `${city} Water Damage Insurance Claims Guide`,
    description: `Step-by-step guide for filing water damage insurance claims in ${city}, Virginia. Learn documentation requirements, coverage details, and how to maximize your settlement.`,
    image: 'https://flood.doctor/images/guides/insurance-claims.jpg',
    totalTime: 'P14D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '500-2500'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Insurance policy documents' },
      { '@type': 'HowToSupply', name: 'Smartphone for photos/video' },
      { '@type': 'HowToSupply', name: 'Measuring tape' },
      { '@type': 'HowToSupply', name: 'Inventory spreadsheet' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Camera or smartphone' },
      { '@type': 'HowToTool', name: 'Ruler for water depth documentation' },
      { '@type': 'HowToTool', name: 'Notepad for inventory' }
    ],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  };

  // FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  // Local business reference
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://${franchise.id === 'hq' ? '' : franchise.id + '.'}flood.doctor/#organization`,
    name: franchise.name || 'Flood Doctor',
    telephone: phone,
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: 'Virginia'
      }
    }
  };

  const pageSchema = combineSchemas(
    generateBreadcrumbSchema([
      { label: 'Guides', path: '/guides/' },
      { label: `${city} Insurance Claims`, path: '/guides/insurance-claims/' }
    ]),
    howToSchema,
    faqSchema,
    localBusinessSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${city} Water Damage Claims Guide`}
        description={`Complete insurance claims guide for ${city} homeowners. Average claims ${averageClaimRange}. Learn documentation, coverage, and how to maximize your water damage settlement.`}
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: `${city} Insurance Claims`, path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-xs font-bold uppercase tracking-wider mb-6">
              <FileText size={14} /> Insurance Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              {city} Water Damage Insurance Claims Guide
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              {archetypeInsights[archetype] || archetypeInsights.suburban}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">7 Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <DollarSign size={18} className="text-green-600" />
                <span className="text-sm font-medium text-[#202124]">{averageClaimRange} avg. claim</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Building size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">All Insurers</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Free Claim Assessment: {phone}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">

            {/* Coverage Overview */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                What's Covered vs. Not Covered
              </h2>
              <p className="text-[#5f6368] mb-8">
                Understanding your {city} homeowners policy coverage is essential before filing a claim.
              </p>

              <div className="space-y-4">
                {claimTypesWithCoverage.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${
                      item.covered
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    {item.covered ? (
                      <CheckCircle2 size={20} className="text-green-600 shrink-0" />
                    ) : (
                      <AlertTriangle size={20} className="text-red-600 shrink-0" />
                    )}
                    <div className="flex-1">
                      <span className="font-medium text-[#202124]">{item.type}</span>
                      <span className="text-sm text-[#5f6368] ml-2">— {item.note}</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      item.covered ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.covered ? 'TYPICALLY COVERED' : 'NOT COVERED'}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                7 Steps to File Your {city} Claim
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow this process to document properly and maximize your claim settlement.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-[#dadce0] rounded-3xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white items-center justify-center shrink-0 shadow-lg">
                        <step.icon size={28} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-bold text-[#1a73e8]">STEP {index + 1}</span>
                          <h3 className="font-display text-xl font-medium text-[#202124]">
                            {step.name}
                          </h3>
                        </div>
                        <p className="text-[#5f6368] leading-relaxed mb-4">
                          {step.text}
                        </p>

                        {/* Pro Tip */}
                        <div className="bg-[#e8f0fe] rounded-xl p-4 mb-4">
                          <div className="flex items-start gap-3">
                            <Zap size={18} className="text-[#1a73e8] mt-0.5 shrink-0" />
                            <div>
                              <span className="font-medium text-[#1a73e8] text-sm">Pro Tip: </span>
                              <span className="text-sm text-[#202124]">{step.tip}</span>
                            </div>
                          </div>
                        </div>

                        {/* Time */}
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

            {/* Documentation Focus */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                {city} Documentation Priorities
              </h2>
              <p className="text-[#5f6368] mb-8">
                Based on common {city} claims, focus your documentation on these areas.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {documentationFocus.map((focus, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-xl border border-[#dadce0]">
                    <Camera size={18} className="text-[#1a73e8] shrink-0" />
                    <span className="text-[#202124] font-medium">{focus}</span>
                  </div>
                ))}
                {adjusterTips.map((tip, i) => (
                  <div key={i + documentationFocus.length} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-[#202124] text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Carrier-Specific Guides */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                Insurance Company-Specific Guides
              </h2>
              <p className="text-[#5f6368] mb-8">
                Each insurer has unique processes. Find your carrier for tailored guidance.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'USAA', href: '/guides/insurance/usaa-water-damage-claim/', desc: 'Military families' },
                  { name: 'State Farm', href: '/guides/insurance/state-farm-water-damage-claim/', desc: 'Agent-first process' },
                  { name: 'Allstate', href: '/guides/insurance/allstate-water-damage-claim/', desc: 'QuickFoto claims' },
                  { name: 'Nationwide', href: '/guides/insurance/nationwide-water-damage-claim/', desc: 'On Your Side' },
                  { name: 'GEICO', href: '/guides/insurance/geico-water-damage-claim/', desc: 'Underwriter navigation' }
                ].map((carrier, i) => (
                  <a
                    key={i}
                    href={carrier.href}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#dadce0] hover:border-[#1a73e8] hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#e8f0fe] flex items-center justify-center shrink-0">
                      <Building size={20} className="text-[#1a73e8]" />
                    </div>
                    <div>
                      <span className="font-medium text-[#202124] group-hover:text-[#1a73e8]">{carrier.name}</span>
                      <p className="text-xs text-[#5f6368]">{carrier.desc}</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-[#dadce0] group-hover:text-[#1a73e8]" />
                  </a>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title={`${city} Insurance Claims FAQ`}
                className="border-none p-0"
              />
            </section>

            {/* What's Next Section */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                Ready to Start Your Claim?
              </h2>
              <p className="text-[#5f6368] mb-8">
                We work directly with insurance companies to maximize your settlement and minimize your stress.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <a href="/guides/emergency-response/" className="group bg-red-50 rounded-2xl p-6 border border-red-200 hover:shadow-lg transition-all hover:border-red-400">
                  <AlertTriangle size={24} className="text-red-600 mb-4" />
                  <h3 className="font-medium text-[#202124] mb-2 group-hover:text-red-700">Emergency Guide</h3>
                  <p className="text-sm text-[#5f6368]">Active water damage? Start here for immediate steps.</p>
                </a>
                <a href="/services/residential/restoration-services/water-damage-restoration/" className="group bg-blue-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all hover:border-blue-400">
                  <Shield size={24} className="text-[#1a73e8] mb-4" />
                  <h3 className="font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8]">Our Services</h3>
                  <p className="text-sm text-[#5f6368]">Professional restoration with direct insurance billing.</p>
                </a>
                <a href="/request/" className="group bg-green-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all hover:border-green-400">
                  <ClipboardList size={24} className="text-green-600 mb-4" />
                  <h3 className="font-medium text-[#202124] mb-2 group-hover:text-green-700">Free Assessment</h3>
                  <p className="text-sm text-[#5f6368]">Get a damage assessment to support your claim.</p>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* CTA */}
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-lg">
                <h3 className="font-display text-xl font-medium mb-4">
                  Free Claims Assistance
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  We handle insurance billing directly for {city} homeowners. Get a free damage assessment and let us navigate the claims process for you.
                </p>
                <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="secondary" fullWidth className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  {phone}
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                  {[
                    { icon: FileText, label: 'Direct insurance billing' },
                    { icon: Camera, label: 'Professional documentation' },
                    { icon: DollarSign, label: 'Maximize your settlement' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-blue-100">
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Claim Stats */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h4 className="font-medium text-[#202124] mb-4">
                  <DollarSign size={18} className="inline mr-2 text-green-600" />
                  {city} Claim Averages
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#5f6368]">Average Claim Value</p>
                    <p className="text-2xl font-bold text-[#202124]">{averageClaimRange}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#5f6368]">Common Claim Types</p>
                    <div className="mt-2 space-y-1">
                      {commonClaimTypes.map((type, i) => (
                        <div key={i} className="text-sm text-[#202124]">• {type}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white border border-[#dadce0] rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4">
                  <Home size={18} className="inline mr-2 text-[#1a73e8]" />
                  Our Services
                </h4>
                <div className="space-y-3">
                  {[
                    { href: '/services/residential/restoration-services/water-damage-restoration/', label: 'Water Damage Restoration' },
                    { href: '/services/residential/cleanup-services/mold-remediation/', label: 'Mold Remediation' },
                    { href: '/services/residential/restoration-services/basement-water-damage/', label: 'Basement Water Damage' },
                    { href: '/services/commercial/', label: 'Commercial Services' }
                  ].map((link, i) => (
                    <a key={i} href={link.href} className="flex items-center gap-3 text-sm text-[#5f6368] hover:text-[#1a73e8] transition-colors group">
                      <ArrowRight size={16} className="text-[#dadce0] group-hover:text-[#1a73e8]" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Related Guides */}
              <div className="bg-white border border-[#dadce0] rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4">Related Guides</h4>
                <div className="space-y-3">
                  {[
                    { href: '/guides/emergency-response/', label: `${city} Emergency Response` },
                    { href: '/guides/prevention/', label: `${city} Prevention Guide` },
                    { href: '/guides/water-damage-insurance-claim/', label: 'General Insurance Guide' },
                    { href: '/guides/insurance/', label: 'Carrier-Specific Guides' }
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
            {city} homeowners trust Flood Doctor for seamless insurance billing. We document, we communicate with adjusters, you pay only your deductible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
              <Phone size={20} className="mr-2" />
              Free Assessment: {phone}
            </Button>
            <Button to="/request/" variant="secondary" size="lg" className="hidden md:inline-flex bg-transparent text-white border-2 border-white hover:bg-white/10">
              Request Service Online
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CityInsuranceGuide;
