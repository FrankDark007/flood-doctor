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
  Shield,
  Droplets,
  Zap,
  ThermometerSnowflake,
  Wind,
  FileText,
  ArrowRight
} from 'lucide-react';

const WaterDamageCleanupGuide: React.FC = () => {
  const steps = [
    {
      name: 'Ensure Your Safety First',
      text: 'Before entering any water-damaged area, turn off electricity at the breaker if water is near outlets or appliances. Wear rubber boots, gloves, and eye protection. If you smell gas or see structural damage, evacuate immediately and call 911. Never enter standing water deeper than 6 inches without professional equipment.',
      tip: 'Keep a flashlight and rubber boots near your electrical panel for emergencies.',
      timeEstimate: '5-10 minutes',
      tools: ['Rubber boots', 'Rubber gloves', 'Safety glasses', 'Flashlight', 'Face mask (N95)']
    },
    {
      name: 'Stop the Water Source',
      text: 'Locate and shut off the water source immediately. For burst pipes, turn off the main water valve (usually in the basement or near the water meter). For appliance failures, disconnect the specific supply line. For roof leaks, place buckets to contain water and cover the area with tarps if accessible.',
      tip: 'Know the location of your main water shutoff before emergencies happen.',
      timeEstimate: '2-15 minutes',
      tools: ['Pipe wrench', 'Buckets', 'Tarps', 'Towels']
    },
    {
      name: 'Document All Damage Thoroughly',
      text: 'Take comprehensive photos and videos BEFORE any cleanup. Capture the water source, standing water depth (use a ruler), all affected areas from multiple angles, damaged belongings, and visible moisture on walls/ceilings. Use your phone\'s timestamp feature. Take 50-100+ photos minimum—this documentation increases insurance settlements by 15-30%.',
      tip: 'Create a narrated video walking through each room describing the damage.',
      timeEstimate: '20-30 minutes',
      tools: ['Smartphone with camera', 'Ruler or measuring tape', 'Notepad for inventory', 'Plastic bags for damaged items']
    },
    {
      name: 'Remove Standing Water',
      text: 'Extract standing water as quickly as possible. Use a wet/dry vacuum for smaller areas (under 2 inches). For larger floods, use a submersible pump. Push water toward floor drains if available. Mop up remaining puddles and use towels to absorb moisture from hard-to-reach areas.',
      tip: 'Professional extraction equipment removes water 50x faster than consumer tools.',
      timeEstimate: '1-4 hours',
      tools: ['Wet/dry vacuum', 'Submersible pump (for deep water)', 'Mops', 'Towels', 'Squeegee']
    },
    {
      name: 'Remove Water-Damaged Materials',
      text: 'Remove saturated materials that cannot be saved. This includes wet carpet padding (always replace), damaged drywall (cut 12-24 inches above the water line), soaked insulation, and waterlogged furniture. Move salvageable items to a dry area. Wear an N95 mask as mold can begin forming within 24-48 hours.',
      tip: 'Carpet can sometimes be saved, but padding must always be replaced.',
      timeEstimate: '2-6 hours',
      tools: ['Utility knife', 'Pry bar', 'Drywall saw', 'Heavy-duty garbage bags', 'N95 mask']
    },
    {
      name: 'Increase Air Circulation and Dehumidification',
      text: 'Set up fans pointing toward windows and doors to increase airflow. Position dehumidifiers in affected areas (close windows when running dehumidifiers). Open interior doors and closets. If outdoor humidity is lower than indoor, open windows to assist drying. Monitor humidity levels—aim for below 50%.',
      tip: 'Rent commercial dehumidifiers and air movers for faster drying.',
      timeEstimate: 'Ongoing (3-7 days)',
      tools: ['Box fans or air movers', 'Dehumidifier (50+ pint capacity)', 'Hygrometer (humidity meter)', 'Extension cords']
    },
    {
      name: 'Clean and Disinfect All Surfaces',
      text: 'Once dry, clean all surfaces with a mixture of water and mild detergent. Then disinfect with a solution of 1 cup bleach per gallon of water (do NOT mix with ammonia-based products). Scrub walls, floors, and any salvaged items. Allow surfaces to dry completely before rebuilding.',
      tip: 'Never mix bleach with ammonia or other cleaners—this creates toxic gas.',
      timeEstimate: '2-4 hours',
      tools: ['Buckets', 'Bleach', 'Mild detergent', 'Scrub brushes', 'Spray bottles', 'Protective gloves']
    },
    {
      name: 'Monitor for Mold and Verify Complete Drying',
      text: 'Check all affected areas daily for mold growth (musty smell, visible spots, discoloration). Use a moisture meter to verify materials are dry (wood should be under 15% moisture). Monitor for 2-3 weeks after visible drying. If you detect mold or persistent moisture, contact a professional immediately.',
      tip: 'Hidden mold in wall cavities requires professional thermal imaging to detect.',
      timeEstimate: 'Ongoing (2-3 weeks)',
      tools: ['Moisture meter', 'Flashlight', 'Notepad for tracking', 'Camera for documentation']
    }
  ];

  const faqs = [
    {
      question: 'How quickly must I clean up water damage to prevent mold?',
      answer: 'Mold can begin growing within 24-48 hours in ideal conditions. In Northern Virginia\'s humid climate, this timeline can be even shorter during summer months. The first 24 hours are critical—every hour of delay increases mold risk exponentially. Professional extraction within 4 hours prevents approximately 80% of secondary damage.'
    },
    {
      question: 'Can I clean up water damage myself or do I need professionals?',
      answer: 'Minor water damage (clean water, under 100 sq ft, discovered within 2 hours) can often be handled with proper equipment and techniques. However, you should call professionals for: standing water over 2 inches, any sewage or gray water contamination, water affecting walls or HVAC systems, flooding lasting more than 24 hours, or when insurance claims are involved. Hidden moisture causes 70% of water damage costs—professionals have equipment to detect it.'
    },
    {
      question: 'What are the categories of water damage?',
      answer: 'Category 1 (Clean Water): From clean sources like supply lines or rain. Safe for DIY cleanup if addressed quickly. Category 2 (Gray Water): Contains contaminants—from dishwashers, washing machines, or toilet overflow without feces. Requires caution and protective equipment. Category 3 (Black Water): Highly contaminated—from sewage, flooding, or stagnant water. Requires professional hazmat protocols. Never attempt Category 3 cleanup yourself.'
    },
    {
      question: 'How much does water damage cleanup cost in Northern Virginia?',
      answer: 'DIY cleanup costs $200-$500 for equipment rental and supplies. Professional restoration ranges from $2,500-$5,000 for minor damage (under 500 sq ft, clean water), $5,000-$15,000 for moderate damage, and $15,000-$50,000+ for severe flooding or contaminated water. Most homeowners insurance covers sudden water damage, reducing out-of-pocket costs to your deductible ($500-$2,500).'
    },
    {
      question: 'Will my homeowners insurance cover water damage cleanup?',
      answer: 'Most policies cover sudden and accidental water damage (burst pipes, appliance failures, roof leaks from storms). Coverage typically does NOT include: gradual damage from neglected maintenance, flooding from external sources (requires separate flood insurance), sewer backups (requires endorsement), or damage from lack of heat causing frozen pipes. File claims within 24-48 hours and document everything.'
    }
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Clean Up Water Damage',
    description: 'Step-by-step guide to clean up water damage in your home. Learn emergency response procedures, extraction techniques, drying methods, and mold prevention from IICRC-certified professionals.',
    image: 'https://flood.doctor/images/guides/water-damage-cleanup.jpg',
    totalTime: 'P7D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '200-500'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Wet/dry vacuum' },
      { '@type': 'HowToSupply', name: 'Dehumidifier (50+ pint)' },
      { '@type': 'HowToSupply', name: 'Box fans or air movers' },
      { '@type': 'HowToSupply', name: 'Bleach and cleaning supplies' },
      { '@type': 'HowToSupply', name: 'Protective gear (gloves, boots, N95 mask)' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Moisture meter' },
      { '@type': 'HowToTool', name: 'Utility knife' },
      { '@type': 'HowToTool', name: 'Drywall saw' },
      { '@type': 'HowToTool', name: 'Smartphone for documentation' }
    ],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      itemListElement: step.tools.map(tool => ({
        '@type': 'HowToDirection',
        text: `Use: ${tool}`
      }))
    }))
  };

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

  const pageSchema = combineSchemas(
    generateBreadcrumbSchema([
      { label: 'Guides', path: '/guides/' },
      { label: 'Water Damage Cleanup', path: '/guides/water-damage-cleanup/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="How to Clean Up Water Damage: Step-by-Step Guide | Flood Doctor"
        description="Learn how to clean up water damage yourself. 8-step emergency response guide covering safety, extraction, drying, and mold prevention. Expert tips from IICRC-certified professionals."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: 'Water Damage Cleanup', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-xs font-bold uppercase tracking-wider mb-6">
              <Droplets size={14} /> Emergency Response Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              How to Clean Up Water Damage
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              Step-by-step emergency water damage cleanup guide from IICRC-certified professionals. Learn exactly what to do in the critical first 24-48 hours to prevent mold, minimize damage, and protect your home.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">8 Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Clock size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">10 min read</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertTriangle size={18} className="text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700">Moderate Difficulty</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Need Help Now? Call 24/7
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">

            {/* Emergency Alert */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl shrink-0">
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Water Damage Right Now? Act Immediately</h3>
                  <p className="text-red-800 text-sm mb-4 leading-relaxed">
                    Every hour of delay increases mold risk and restoration costs. Our emergency team arrives in 60 minutes across Northern Virginia—don't wait until tomorrow.
                  </p>
                  <Button href="tel:8774970007" variant="primary" size="sm" className="bg-red-600 hover:bg-red-700">
                    <Phone size={16} className="mr-2" />
                    Call Emergency Line Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-lg text-[#5f6368] leading-relaxed mb-4">
                Water damage is one of the most common—and most destructive—emergencies homeowners face. In Northern Virginia's humid climate, the window for preventing mold growth is just 24-48 hours. Acting quickly and following the right steps can mean the difference between a $2,000 cleanup and a $20,000 restoration project.
              </p>
              <p className="text-lg text-[#5f6368] leading-relaxed">
                This guide walks you through exactly what to do when water damage strikes, from ensuring your safety to verifying complete drying. While some situations require professional help, understanding the process helps you make informed decisions and potentially handle minor incidents yourself.
              </p>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                8 Steps to Clean Up Water Damage
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow these steps in order for the best results. Each step builds on the previous one.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-[#dadce0] rounded-3xl p-8 hover:shadow-lg transition-shadow"
                  >
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

                        {/* Time and Tools */}
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-sm text-[#5f6368]">
                            <Clock size={16} className="text-[#1a73e8]" />
                            <span>{step.timeEstimate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#5f6368]">
                            <span className="font-medium">Tools:</span>
                            <span>{step.tools.slice(0, 3).join(', ')}{step.tools.length > 3 ? '...' : ''}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* When to Call Professionals */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                When to Call Professional Restoration
              </h2>
              <p className="text-[#5f6368] mb-8">
                While this guide helps with minor water damage, some situations require professional help.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="text-green-600" size={24} />
                    <h3 className="font-medium text-[#202124]">DIY May Be Appropriate</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Clean water source (Category 1)',
                      'Under 2 inches of standing water',
                      'Affected area under 100 sq ft',
                      'Discovered within 2 hours',
                      'No wall/HVAC involvement'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#5f6368]">
                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="text-red-600" size={24} />
                    <h3 className="font-medium text-[#202124]">Call Professionals For</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Any sewage or contaminated water',
                      'Standing water over 2 inches',
                      'Flooding lasting 24+ hours',
                      'Water in walls or HVAC',
                      'Visible mold or musty odors',
                      'Insurance claim anticipated'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#5f6368]">
                        <AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Frequently Asked Questions"
                className="border-none p-0"
              />
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Emergency CTA */}
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-lg">
                <h3 className="font-display text-xl font-medium mb-4">
                  24/7 Emergency Response
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Water damage escalates quickly. Our IICRC-certified team arrives in 60 minutes with professional extraction equipment.
                </p>
                <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                  {[
                    { icon: Clock, label: '60-min response time' },
                    { icon: Shield, label: 'IICRC certified technicians' },
                    { icon: FileText, label: 'Direct insurance billing' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-blue-100">
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Checklist */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h4 className="font-medium text-[#202124] mb-4">Essential Tools Checklist</h4>
                <div className="space-y-3">
                  {[
                    'Wet/dry vacuum (rent if needed)',
                    'Dehumidifier (50+ pint capacity)',
                    'Box fans or air movers',
                    'Moisture meter',
                    'Rubber boots and gloves',
                    'N95 masks',
                    'Bleach and cleaning supplies',
                    'Heavy-duty garbage bags'
                  ].map((tool, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#5f6368]">
                      <div className="w-5 h-5 rounded border border-[#dadce0] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-[#1a73e8]" />
                      </div>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Guides */}
              <div className="bg-white border border-[#dadce0] rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4">Related Guides</h4>
                <div className="space-y-3">
                  {[
                    { href: '/guides/mold-remediation/', label: 'Mold Remediation Guide' },
                    { href: '/guides/water-damage-insurance-claim/', label: 'Insurance Claim Guide' },
                    { href: '/guides/burst-pipe-emergency/', label: 'Burst Pipe Emergency' },
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
            Don't Risk Mold and Structural Damage
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            While DIY cleanup works for minor incidents, professional extraction and drying prevents 80% of secondary damage. Our team is standing by 24/7.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
              <Phone size={20} className="mr-2" />
              Call 24/7: (877) 497-0007
            </Button>
            <Button to="/request/" variant="secondary" size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
              Request Service Online
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WaterDamageCleanupGuide;
