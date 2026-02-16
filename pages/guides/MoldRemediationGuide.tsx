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
  Shield,
  Wind,
  Droplets,
  Eye,
  Zap,
  FileText,
  ArrowRight,
  XCircle
} from 'lucide-react';

const MoldRemediationGuide: React.FC = () => {
  const steps = [
    {
      name: 'Identify the Mold Problem',
      text: 'Look for visible mold growth (black, green, white, or gray patches), musty odors, and signs of water damage. Check common areas: bathrooms, kitchens, basements, around windows, and HVAC systems. Use a flashlight to inspect dark corners, behind furniture, and inside closets. Document all findings with photos.',
      tip: 'Mold often hides behind drywall, under flooring, and in HVAC ducts—visible mold may represent only 10% of the problem.',
      timeEstimate: '30-60 minutes',
      tools: ['Flashlight', 'Camera/smartphone', 'Moisture meter', 'Notepad']
    },
    {
      name: 'Assess the Scope and Decide DIY vs Professional',
      text: 'Measure the affected area. EPA guidelines state homeowners can handle mold under 10 square feet (roughly 3x3 feet). Larger areas, mold in HVAC systems, or any mold from sewage/flooding requires professional remediation. If anyone has respiratory issues or allergies, always hire professionals regardless of size.',
      tip: 'If you can smell mold but can\'t see it, the problem is likely larger than it appears—call a professional.',
      timeEstimate: '15-30 minutes',
      tools: ['Measuring tape', 'Notepad', 'Camera']
    },
    {
      name: 'Set Up Containment',
      text: 'Isolate the affected area to prevent mold spores from spreading. Seal doorways with 6-mil plastic sheeting and tape. Cover HVAC vents in the room. Close windows but set up a box fan in a window pointing outward to create negative pressure. Turn off central air/heat to prevent spore distribution.',
      tip: 'Disturbing mold without containment can spread millions of spores throughout your home.',
      timeEstimate: '30-45 minutes',
      tools: ['6-mil plastic sheeting', 'Painter\'s tape or duct tape', 'Box fan', 'Utility knife']
    },
    {
      name: 'Protect Yourself with Proper PPE',
      text: 'Before touching any mold, put on an N95 respirator (minimum), safety goggles without vents, long rubber gloves, and old clothes that cover arms and legs (dispose after). Never handle mold with bare skin or without respiratory protection—mold spores and mycotoxins can cause serious health effects.',
      tip: 'For larger jobs, upgrade to a P100 half-face respirator for better protection.',
      timeEstimate: '5-10 minutes',
      tools: ['N95 or P100 respirator', 'Safety goggles (non-vented)', 'Long rubber gloves', 'Disposable coveralls or old clothes', 'Shoe covers']
    },
    {
      name: 'Remove Mold from Hard Surfaces',
      text: 'For non-porous surfaces (tile, glass, metal, plastic), scrub with a solution of 1 cup bleach per gallon of water or undiluted white vinegar. Let the solution sit for 15 minutes, then scrub thoroughly with a stiff brush. Rinse with clean water and dry completely. Never mix bleach with ammonia or other cleaners.',
      tip: 'Bleach kills surface mold but doesn\'t penetrate porous materials—use it only on non-porous surfaces.',
      timeEstimate: '1-2 hours',
      tools: ['Bleach or vinegar', 'Bucket', 'Stiff scrub brush', 'Clean rags', 'Spray bottle']
    },
    {
      name: 'Remove and Dispose of Porous Materials',
      text: 'Porous materials (drywall, carpet, insulation, ceiling tiles) with mold growth cannot be cleaned—they must be removed and replaced. Cut drywall 12-24 inches beyond visible mold. Bag materials immediately in heavy-duty plastic bags. Double-bag everything and seal tightly before removal from the containment area.',
      tip: 'Mist materials with water before removal to minimize spore release into the air.',
      timeEstimate: '2-4 hours',
      tools: ['Utility knife or drywall saw', 'Heavy-duty garbage bags', 'Spray bottle with water', 'Pry bar']
    },
    {
      name: 'Treat the Area with Anti-Microbial',
      text: 'After removing mold, apply EPA-registered anti-microbial treatment to all surfaces in the affected area. This prevents regrowth. Allow the treatment to dry completely per manufacturer instructions. For wood framing, use a borate-based solution that penetrates and provides long-term protection.',
      tip: 'Generic anti-microbials are less effective than professional-grade products—consider Concrobium or Benefect.',
      timeEstimate: '1-2 hours',
      tools: ['EPA-registered anti-microbial (Concrobium, Benefect)', 'Pump sprayer', 'Borate solution for wood']
    },
    {
      name: 'Dry the Area Completely and Fix the Moisture Source',
      text: 'Run dehumidifiers and fans for 24-72 hours until moisture readings are below 15% for wood and 50% relative humidity. Critically: identify and fix the water source that caused the mold (leak, condensation, flooding). Without fixing the source, mold will return within weeks.',
      tip: 'Mold returns 100% of the time if you don\'t eliminate the moisture source.',
      timeEstimate: '24-72 hours',
      tools: ['Dehumidifier', 'Box fans', 'Moisture meter', 'Hygrometer']
    }
  ];

  const faqs = [
    {
      question: 'Can I remove mold myself or do I need a professional?',
      answer: 'According to EPA guidelines, homeowners can handle mold remediation if the affected area is less than 10 square feet (approximately 3x3 feet) and the mold is from clean water. Professional remediation is required for: areas larger than 10 sq ft, mold in HVAC systems, mold from contaminated water (sewage, flooding), hidden mold in walls or under flooring, or if occupants have respiratory conditions. When in doubt, get a professional assessment first.'
    },
    {
      question: 'How much does professional mold remediation cost in Northern Virginia?',
      answer: 'Professional mold remediation in Northern Virginia typically costs $500-$4,000 for small areas (under 100 sq ft), $4,000-$12,000 for moderate remediation (100-300 sq ft), and $12,000-$30,000+ for large-scale remediation including HVAC cleaning and reconstruction. Most homeowners insurance does NOT cover mold unless it results from a covered water damage event (burst pipe, sudden leak). Document the water source carefully.'
    },
    {
      question: 'Is bleach effective for killing mold?',
      answer: 'Bleach effectively kills mold on non-porous surfaces (tile, glass, plastic) but does NOT work on porous materials (drywall, wood, fabric). The water in bleach solution can actually feed mold growth in porous materials. For porous surfaces, the only solution is removal and replacement. For wood framing, use borate-based solutions that penetrate the material.'
    },
    {
      question: 'How quickly does mold grow after water damage?',
      answer: 'Mold can begin growing within 24-48 hours under ideal conditions (moisture above 60%, temperatures 60-80°F). In Northern Virginia\'s humid climate, this timeline can be even shorter during summer months. Visible mold colonies typically appear within 1-2 weeks. This is why water damage must be dried within 24-48 hours to prevent mold growth.'
    },
    {
      question: 'What are the health risks of mold exposure?',
      answer: 'Mold exposure can cause respiratory symptoms (coughing, wheezing, nasal congestion), eye and skin irritation, headaches, and fatigue. People with allergies, asthma, or compromised immune systems are at higher risk. Black mold (Stachybotrys) can produce mycotoxins linked to more severe health effects. If experiencing symptoms, leave the area and consult a doctor. Never attempt DIY remediation if you have respiratory issues.'
    }
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Handle Mold After Water Damage',
    description: 'Professional mold remediation guide. Learn to identify, contain, and remove mold safely. Includes when to DIY vs call professionals, safety requirements, and prevention strategies.',
    image: 'https://flood.doctor/images/guides/mold-remediation.jpg',
    totalTime: 'P3D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '100-500'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'N95 or P100 respirator' },
      { '@type': 'HowToSupply', name: '6-mil plastic sheeting' },
      { '@type': 'HowToSupply', name: 'EPA-registered anti-microbial' },
      { '@type': 'HowToSupply', name: 'Bleach or white vinegar' },
      { '@type': 'HowToSupply', name: 'Heavy-duty garbage bags' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Moisture meter' },
      { '@type': 'HowToTool', name: 'Dehumidifier' },
      { '@type': 'HowToTool', name: 'HEPA air scrubber (recommended)' },
      { '@type': 'HowToTool', name: 'Safety goggles and gloves' }
    ],
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
      { label: 'Mold Remediation', path: '/guides/mold-remediation/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Remediation After Water Damage"
        description="Professional mold remediation guide. Learn to identify, contain, and remove mold safely. When to DIY vs call professionals, safety requirements, and prevention strategies."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: 'Mold Remediation', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle size={14} /> Mold Remediation Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              How to Handle Mold After Water Damage
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              Professional mold remediation process explained step-by-step. Learn when you can handle mold yourself, when to call professionals, proper safety precautions, and how to prevent regrowth.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">7 Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Clock size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">12 min read</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle size={18} className="text-red-600" />
                <span className="text-sm font-medium text-red-700">Advanced Difficulty</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Need Professional Help? Call 24/7
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">

            {/* Warning Alert */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-xl shrink-0">
                  <AlertTriangle className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Important Safety Warning</h3>
                  <p className="text-amber-800 text-sm mb-4 leading-relaxed">
                    Mold exposure can cause serious health effects. Never attempt mold remediation if you have respiratory conditions, allergies, or a compromised immune system. Always wear proper PPE and ensure adequate ventilation.
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-lg text-[#5f6368] leading-relaxed mb-4">
                Mold is one of the most serious consequences of water damage. In Northern Virginia's humid climate, mold can begin growing within 24-48 hours of water exposure and spread rapidly if not addressed properly. While small areas of mold can sometimes be handled by homeowners, improper remediation can make the problem worse—spreading spores throughout your home.
              </p>
              <p className="text-lg text-[#5f6368] leading-relaxed">
                This guide covers the professional approach to mold remediation, helping you understand when you can safely handle the problem yourself and when to call in certified professionals.
              </p>
            </section>

            {/* DIY Size Limit */}
            <section className="mb-16">
              <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-[#dadce0]">
                <h2 className="font-display text-2xl font-medium text-[#202124] mb-4">
                  DIY Mold Removal: Know Your Limits
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="text-green-600" size={20} />
                      <span className="font-medium text-green-800">DIY Appropriate</span>
                    </div>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Area less than 10 sq ft (3x3 feet)</li>
                      <li>• On non-porous surfaces</li>
                      <li>• From clean water source</li>
                      <li>• No HVAC involvement</li>
                      <li>• No respiratory conditions</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="text-red-600" size={20} />
                      <span className="font-medium text-red-800">Call Professionals</span>
                    </div>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Area larger than 10 sq ft</li>
                      <li>• In HVAC systems/ducts</li>
                      <li>• From sewage or flooding</li>
                      <li>• Behind walls or under floors</li>
                      <li>• Anyone has health concerns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                7 Steps to Remediate Mold Safely
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow these steps exactly for safe and effective mold removal. Do not skip any safety precautions.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative bg-white border border-[#dadce0] rounded-3xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white items-center justify-center shrink-0 shadow-lg">
                        <span className="text-xl font-bold">{String(index + 1).padStart(2, '0')}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-display text-xl font-medium text-[#202124] mb-3">
                          {step.name}
                        </h3>
                        <p className="text-[#5f6368] leading-relaxed mb-4">
                          {step.text}
                        </p>

                        <div className="bg-amber-50 rounded-xl p-4 mb-4">
                          <div className="flex items-start gap-3">
                            <Zap size={18} className="text-amber-600 mt-0.5 shrink-0" />
                            <div>
                              <span className="font-medium text-amber-700 text-sm">Pro Tip: </span>
                              <span className="text-sm text-amber-900">{step.tip}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-sm text-[#5f6368]">
                            <Clock size={16} className="text-[#1a73e8]" />
                            <span>{step.timeEstimate}</span>
                          </div>
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
                <h3 className="font-display text-xl font-medium mb-4">Professional Mold Remediation</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  For mold areas larger than 10 sq ft or any mold in HVAC systems, professional remediation is required. Our IICRC-certified team follows ANSI/IICRC S520 standards.
                </p>
                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>

              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <h4 className="font-medium text-red-900 mb-3 flex items-center gap-2">
                  <Shield size={18} />
                  Required Safety Equipment
                </h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> N95/P100 respirator</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Non-vented safety goggles</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Long rubber gloves</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Disposable coveralls</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Shoe covers</li>
                </ul>
              </div>

              <div className="bg-white border border-[#dadce0] rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4">Related Guides</h4>
                <div className="space-y-3">
                  {[
                    { href: '/guides/water-damage-cleanup/', label: 'Water Damage Cleanup' },
                    { href: '/guides/water-damage-insurance-claim/', label: 'Insurance Claim Guide' },
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
            Mold Problem Bigger Than Expected?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Professional mold remediation ensures complete removal and prevents regrowth. Our certified team follows ANSI/IICRC S520 standards.
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

export default MoldRemediationGuide;
