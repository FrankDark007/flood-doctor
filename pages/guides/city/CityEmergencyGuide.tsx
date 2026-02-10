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
  Droplets,
  Zap,
  MapPin,
  FileText,
  ArrowRight,
  Home,
  Wrench,
  Camera,
  Power
} from 'lucide-react';

const CityEmergencyGuide: React.FC = () => {
  const franchise = useFranchise();
  const archetype = getArchetype(franchise.id);
  const archetypeConfig = getArchetypeConfig(franchise.id);
  const guideData = franchise.guideData?.emergency;

  // Fallback for HQ or cities without guideData
  const city = franchise.city || 'Northern Virginia';
  const phone = franchise.phone || '(877) 497-0007';
  const responseTime = guideData?.responseTimeRange || '45-60 minutes';
  const criticalFirstStep = guideData?.criticalFirstStep || 'Turn off the main water valve immediately';
  const localTips = guideData?.localEmergencyTips || [
    'Know your main water shutoff location',
    'Have your insurance policy number ready',
    'Document all damage before cleanup begins'
  ];

  // Get top neighborhoods for this city
  const neighborhoods = franchise.localHooks?.neighborhoods?.slice(0, 4) || [];

  // Build city-specific 6 steps
  const steps = [
    {
      name: 'Stop the Water Source Immediately',
      text: `${criticalFirstStep}. For ${city} homes, this is typically located in the basement, utility room, or near the street at the water meter. If the flooding is from an appliance, disconnect its water supply line. For roof leaks, place buckets and cover with tarps if safely accessible.`,
      tip: `${city} response tip: Our team arrives in ${responseTime} with industrial equipment. Call now while you locate the shutoff.`,
      timeEstimate: '2-10 minutes',
      icon: Power,
      tools: ['Flashlight', 'Pipe wrench', 'Towels']
    },
    {
      name: 'Ensure Personal Safety',
      text: `Before entering standing water in your ${city} home, turn off electricity at the breaker panel if water is near outlets or appliances. Wear rubber boots and gloves. If you smell gas or see structural damage, evacuate immediately and call 911. Never enter water deeper than 6 inches without professional equipment.`,
      tip: 'Water and electricity are deadly. When in doubt, wait for our certified technicians.',
      timeEstimate: '5-15 minutes',
      icon: Shield,
      tools: ['Rubber boots', 'Rubber gloves', 'N95 mask', 'Flashlight']
    },
    {
      name: 'Call Flood Doctor Emergency Line',
      text: `Call ${phone} immediately. Our ${city} emergency response team is available 24/7 and typically arrives within ${responseTime}. Provide your address, describe the water source and affected areas, and we'll dispatch the nearest technician with professional extraction equipment.`,
      tip: 'Every hour of delay increases mold risk. Our initial assessment and emergency mitigation is often covered by insurance.',
      timeEstimate: '5 minutes',
      icon: Phone,
      tools: ['Phone', 'Address confirmation']
    },
    {
      name: 'Document Everything for Insurance',
      text: `Before any cleanup, thoroughly document the damage for your insurance claim. Take 50-100+ photos and videos showing: the water source, standing water depth (use a ruler), all affected rooms from multiple angles, damaged belongings, and moisture on walls/ceilings. ${city} homeowners who document thoroughly receive 15-30% higher settlements.`,
      tip: 'Create a narrated video walking through each room. Timestamp everything.',
      timeEstimate: '15-30 minutes',
      icon: Camera,
      tools: ['Smartphone', 'Ruler or tape measure', 'Notepad', 'Ziplock bags for damaged items']
    },
    {
      name: 'Begin Emergency Water Removal',
      text: `If safe and waiting for our team, begin removing standing water with whatever equipment you have. Use a wet/dry vacuum for smaller areas, mops and towels for puddles. Move furniture off wet carpet. Open windows if humidity outside is lower than inside. Do NOT use heat or fans until contamination level is assessed.`,
      tip: 'Our industrial extractors remove water 50x faster than consumer equipment. Focus on documentation while waiting.',
      timeEstimate: '30 minutes - 2 hours',
      icon: Droplets,
      tools: ['Wet/dry vacuum', 'Mops', 'Towels', 'Buckets']
    },
    {
      name: 'Prepare for Professional Restoration',
      text: `Clear a path from your door to the affected areas for our ${city} team. Gather insurance documents, policy number, and agent contact. Create a list of all damaged items. If you have pets, secure them in a dry area. Our technician will perform a thorough moisture assessment and provide a detailed scope of work within the first hour.`,
      tip: localTips[0] || 'Have your insurance policy number ready when our team arrives.',
      timeEstimate: '15-30 minutes',
      icon: FileText,
      tools: ['Insurance policy', 'ID', 'List of damaged items', 'Pet carriers if needed']
    }
  ];

  // Build city-specific FAQs
  const faqs = [
    {
      question: `How quickly can Flood Doctor respond to water damage in ${city}?`,
      answer: `Our ${city} emergency response team typically arrives within ${responseTime}. We have technicians positioned throughout Northern Virginia and maintain 24/7 dispatch. For ${neighborhoods.length > 0 ? neighborhoods.slice(0, 3).join(', ') : city}, response times are often faster during daytime hours.`
    },
    {
      question: `What should I do first when I discover water damage in my ${city} home?`,
      answer: `${criticalFirstStep}. Then ensure your personal safety by shutting off electricity if water is near outlets. Call us at ${phone} immediately - we're available 24/7. Begin documenting the damage with photos and videos while waiting for our team to arrive.`
    },
    {
      question: `Will my homeowners insurance cover water damage restoration in ${city}?`,
      answer: `Most ${city} homeowners policies cover sudden and accidental water damage like burst pipes, appliance failures, and storm damage. Coverage typically does NOT include gradual damage from neglected maintenance, flooding from external sources (requires separate flood insurance), or sewer backups without an endorsement. We work with all major insurers and can file claims directly.`
    },
    {
      question: `How much does emergency water damage restoration cost in ${city}?`,
      answer: `${city} water damage restoration typically ranges from ${franchise.guideData?.insurance?.averageClaimRange || '$5,000-$25,000'} depending on severity and affected area. Most homeowners pay only their deductible ($500-$2,500) as insurance covers the rest. We provide free damage assessments and detailed estimates before any work begins.`
    },
    {
      question: `What areas does Flood Doctor's ${city} team serve?`,
      answer: `Our ${city} team covers ${neighborhoods.length > 0 ? neighborhoods.join(', ') : 'all neighborhoods in the area'} and surrounding communities. We're IICRC-certified and equipped for residential and commercial water damage of any scale.`
    },
    {
      question: `Can I wait until morning to call about water damage?`,
      answer: `No - waiting even a few hours significantly increases damage and mold risk. In Northern Virginia's humidity, mold can begin growing within 24-48 hours. Every hour of standing water causes exponentially more damage to flooring, drywall, and structural components. Our 24/7 emergency line means you never have to wait.`
    }
  ];

  // Generate HowTo schema with city
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Emergency Water Damage Response in ${city}`,
    description: `Step-by-step emergency guide for ${city}, Virginia homeowners facing water damage. Learn immediate actions, safety procedures, and how to minimize damage while waiting for professional restoration.`,
    image: 'https://flood.doctor/images/guides/emergency-response.jpg',
    totalTime: 'PT2H',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Rubber boots and gloves' },
      { '@type': 'HowToSupply', name: 'Flashlight' },
      { '@type': 'HowToSupply', name: 'Smartphone for documentation' },
      { '@type': 'HowToSupply', name: 'Towels and mops' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Pipe wrench' },
      { '@type': 'HowToTool', name: 'Wet/dry vacuum' },
      { '@type': 'HowToTool', name: 'Ruler for measuring water depth' }
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

  // Local business schema reference
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
      { label: `${city} Emergency Response`, path: '/guides/emergency-response/' }
    ]),
    howToSchema,
    faqSchema,
    localBusinessSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`Emergency Water Damage Response in ${city} | ${responseTime} Response | Flood Doctor`}
        description={`${city} water damage emergency? Act now with our 6-step guide. ${responseTime} professional response available 24/7. Call ${phone} for immediate help.`}
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-white to-blue-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: `${city} Emergency Response`, path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle size={14} /> Emergency Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              Emergency Water Damage Response in {city}
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              Water damage happening right now? Follow these 6 critical steps while our {city} team is on the way. Our IICRC-certified technicians arrive in {responseTime} with industrial extraction equipment.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">6 Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Clock size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">{responseTime} Response</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle size={18} className="text-red-600" />
                <span className="text-sm font-medium text-red-700">Time-Critical</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone size={18} className="mr-2" />
                Call Now: {phone}
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
                  <h3 className="font-bold text-red-900 mb-2">Water Damage in {city} Right Now?</h3>
                  <p className="text-red-800 text-sm mb-4 leading-relaxed">
                    Every hour of delay increases mold risk and restoration costs. Our {city} emergency team arrives in {responseTime} with professional extraction equipment. Don't wait until morning.
                  </p>
                  <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="primary" size="sm" className="bg-red-600 hover:bg-red-700">
                    <Phone size={16} className="mr-2" />
                    Call {phone} Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-lg text-[#5f6368] leading-relaxed mb-4">
                When water damage strikes your {city} home, the first two hours are critical. Acting quickly—and correctly—can mean the difference between a $2,000 cleanup and a $20,000 restoration project. This emergency guide walks you through exactly what to do right now, step by step. For comprehensive restoration, see our <a href="/services/residential/restoration-services/water-damage-restoration/" className="text-[#1a73e8] hover:underline">water damage restoration services</a>.
              </p>
              <p className="text-lg text-[#5f6368] leading-relaxed">
                {archetype === 'estate' && 'For estate and luxury properties like those in ' + city + ', protecting high-value finishes and specialty spaces requires immediate professional response.'}
                {archetype === 'historic' && 'Historic ' + city + ' homes require careful handling to protect original materials and maintain preservation requirements.'}
                {archetype === 'urban' && 'In ' + city + "'s urban environment, water damage can quickly affect neighboring units—fast response prevents cascading damage."}
                {archetype === 'suburban' && city + "'s suburban homes often face basement flooding and sump pump failures—issues we specialize in addressing quickly. Learn more about our "}
                {archetype === 'suburban' && <a href="/services/residential/restoration-services/basement-water-damage/" className="text-[#1a73e8] hover:underline">basement water damage services</a>}
                {archetype === 'suburban' && '.'}
              </p>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-red-500">
                6 Emergency Steps for {city} Homeowners
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow these steps in order. Complete each one before moving to the next.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-[#dadce0] rounded-3xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white items-center justify-center shrink-0 shadow-lg">
                        <step.icon size={28} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-bold text-red-600">STEP {index + 1}</span>
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

                        {/* Time and Tools */}
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-sm text-[#5f6368]">
                            <Clock size={16} className="text-[#1a73e8]" />
                            <span>{step.timeEstimate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#5f6368]">
                            <Wrench size={16} className="text-[#1a73e8]" />
                            <span>{step.tools.join(', ')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Neighborhood Coverage */}
            {neighborhoods.length > 0 && (
              <section className="mb-16">
                <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                  {city} Neighborhoods We Serve
                </h2>
                <p className="text-[#5f6368] mb-8">
                  Our {city} team provides emergency response to all neighborhoods in the area.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {neighborhoods.map((neighborhood, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-[#f8f9fa] rounded-xl border border-[#dadce0]">
                      <MapPin size={18} className="text-[#1a73e8] shrink-0" />
                      <span className="text-[#202124] font-medium">{neighborhood}</span>
                      <span className="ml-auto text-sm text-[#5f6368]">{responseTime}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ Section */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title={`${city} Water Damage Emergency FAQ`}
                className="border-none p-0"
              />
            </section>

            {/* What's Next Section */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                What's Next?
              </h2>
              <p className="text-[#5f6368] mb-8">
                After emergency response, learn about prevention and insurance to protect your home long-term.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <a href="/guides/prevention/" className="group bg-green-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all hover:border-green-400">
                  <Shield size={24} className="text-green-600 mb-4" />
                  <h3 className="font-medium text-[#202124] mb-2 group-hover:text-green-700">Prevent Future Damage</h3>
                  <p className="text-sm text-[#5f6368]">8-step prevention guide tailored to {city} homes.</p>
                </a>
                <a href="/guides/insurance-claims/" className="group bg-blue-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all hover:border-blue-400">
                  <FileText size={24} className="text-[#1a73e8] mb-4" />
                  <h3 className="font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8]">File Insurance Claim</h3>
                  <p className="text-sm text-[#5f6368]">Maximize your claim with our 7-step guide.</p>
                </a>
                <a href="/services/residential/restoration-services/water-damage-restoration/" className="group bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0] hover:shadow-lg transition-all hover:border-[#1a73e8]">
                  <Wrench size={24} className="text-[#1a73e8] mb-4" />
                  <h3 className="font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8]">Our Restoration Services</h3>
                  <p className="text-sm text-[#5f6368]">Professional water damage restoration in {city}.</p>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Emergency CTA */}
              <div className="bg-red-600 rounded-[32px] p-8 text-white shadow-lg">
                <h3 className="font-display text-xl font-medium mb-4">
                  {city} 24/7 Emergency Line
                </h3>
                <p className="text-red-100 text-sm leading-relaxed mb-6">
                  Our IICRC-certified team arrives in {responseTime} with industrial extraction equipment. Available around the clock.
                </p>
                <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="secondary" fullWidth className="bg-white text-red-600 border-none hover:bg-red-50">
                  <Phone size={18} className="mr-2" />
                  {phone}
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                  {[
                    { icon: Clock, label: `${responseTime} response` },
                    { icon: Shield, label: 'IICRC certified' },
                    { icon: FileText, label: 'Direct insurance billing' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-red-100">
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Tips */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h4 className="font-medium text-[#202124] mb-4">
                  <MapPin size={18} className="inline mr-2 text-[#1a73e8]" />
                  {city} Emergency Tips
                </h4>
                <div className="space-y-3">
                  {localTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-[#5f6368]">
                      <CheckCircle2 size={14} className="text-[#1a73e8] mt-1 shrink-0" />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white border border-[#dadce0] rounded-2xl p-6">
                <h4 className="font-medium text-[#202124] mb-4">
                  <Wrench size={18} className="inline mr-2 text-[#1a73e8]" />
                  Our Services
                </h4>
                <div className="space-y-3">
                  {[
                    { href: '/services/residential/restoration-services/water-damage-restoration/', label: 'Water Damage Restoration' },
                    { href: '/services/residential/cleanup-services/mold-remediation/', label: 'Mold Remediation' },
                    { href: '/services/residential/restoration-services/basement-water-damage/', label: 'Basement Water Damage' },
                    { href: '/services/residential/cleanup-services/sewage-cleanup/', label: 'Sewage Cleanup' }
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
                    { href: '/guides/prevention/', label: `${city} Prevention Guide` },
                    { href: '/guides/insurance-claims/', label: `${city} Insurance Claims` },
                    { href: '/guides/water-damage-cleanup/', label: 'Water Damage Cleanup' },
                    { href: '/guides/mold-remediation/', label: 'Mold Remediation Guide' }
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
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Don't Wait — Every Hour Matters
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Water damage in {city} can lead to mold growth within 24-48 hours. Our emergency team is standing by to minimize damage and restore your home.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="secondary" size="lg" className="bg-white text-red-600 border-none hover:bg-red-50">
              <Phone size={20} className="mr-2" />
              Call Now: {phone}
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

export default CityEmergencyGuide;
