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
  Calendar,
  ThermometerSnowflake,
  CloudRain,
  Leaf,
  Sun,
  Snowflake
} from 'lucide-react';

const CityPreventionGuide: React.FC = () => {
  const franchise = useFranchise();
  const archetype = getArchetype(franchise.id);
  const archetypeConfig = getArchetypeConfig(franchise.id);
  const guideData = franchise.guideData?.prevention;

  // Fallback for HQ or cities without guideData
  const city = franchise.city || 'Northern Virginia';
  const phone = franchise.phone || '(877) 497-0007';
  const housingTypes = guideData?.housingTypes || ['Single-family homes', 'Townhouses'];
  const seasonalRisks = guideData?.seasonalRisks || ['Spring thaws', 'Summer storms', 'Winter freezes'];
  const permitInfo = guideData?.localPermitInfo || 'Check with local building department for permit requirements';
  const commonIssues = guideData?.commonPreventionIssues || ['Sump pump maintenance', 'Gutter cleaning', 'Pipe insulation'];

  // Get neighborhoods
  const neighborhoods = franchise.localHooks?.neighborhoods?.slice(0, 6) || [];

  // Build archetype-specific intro
  const archetypeIntro = {
    estate: `${city}'s luxury homes feature complex plumbing systems, wine cellars, and high-value finishes that require proactive protection. This guide covers prevention strategies tailored to estate properties.`,
    historic: `${city}'s historic homes have unique vulnerabilities—aging pipes, original plaster, and preservation requirements. Learn how to protect your historic property from water damage.`,
    urban: `${city}'s urban environment presents unique challenges: multi-unit buildings, shared systems, and HOA considerations. This guide helps you prevent water damage in condos and townhomes.`,
    suburban: `${city}'s suburban homes commonly face basement flooding, sump pump failures, and appliance leaks. Learn prevention strategies for split-levels and family homes.`
  };

  // Build 8 prevention steps based on archetype and local data
  const steps = [
    {
      name: 'Inspect and Maintain Your Plumbing System',
      text: `For ${city} ${housingTypes[0]?.toLowerCase() || 'homes'}, schedule annual plumbing inspections. ${archetype === 'historic' ? 'Historic homes often have galvanized pipes that corrode over time—have a plumber assess pipe condition.' : archetype === 'estate' ? 'Estate homes with multiple water heaters and complex systems require comprehensive system checks.' : 'Check for signs of corrosion, leaks, or water stains under sinks and around fixtures.'}`,
      tip: 'Replace washing machine hoses every 3-5 years—they\'re the #1 cause of residential water damage.',
      timeEstimate: '1-2 hours annually',
      icon: Wrench,
      season: 'Spring'
    },
    {
      name: 'Maintain Gutters and Downspouts',
      text: `${city} experiences significant rainfall—clean gutters at least twice yearly (spring and fall). Ensure downspouts direct water at least 6 feet away from your foundation. ${archetype === 'suburban' ? 'For split-level homes, check gutters at multiple roof levels.' : archetype === 'estate' ? 'Large roof areas collect more water—consider installing gutter guards.' : 'Clean debris from valley flashings and check for proper drainage.'}`,
      tip: 'Install gutter guards to reduce maintenance and prevent ice dams in winter.',
      timeEstimate: '2-4 hours per cleaning',
      icon: CloudRain,
      season: 'Spring & Fall'
    },
    {
      name: 'Inspect Your Roof Annually',
      text: `After ${city}'s winter weather, inspect your roof for damaged or missing shingles, cracked flashing, and deteriorating seals around vents and chimneys. ${archetype === 'historic' ? 'Historic slate or tile roofs require specialized inspection—hire a qualified roofer familiar with traditional materials.' : 'Address any issues before spring rains arrive.'}`,
      tip: 'Use binoculars to inspect from the ground—walking on roofs can cause damage.',
      timeEstimate: '1 hour annually',
      icon: Home,
      season: 'Spring'
    },
    {
      name: 'Test and Maintain Sump Pump',
      text: `${commonIssues.includes('Sump pump maintenance') ? 'Sump pump failure is a leading cause of basement flooding in ' + city + '.' : 'If your home has a sump pump,'} Test monthly by pouring water into the pit until the pump activates. Install a battery backup—power outages often coincide with storms when you need it most. ${archetype === 'suburban' ? 'Suburban homes with finished basements should consider dual-pump systems.' : ''}`,
      tip: 'Replace sump pumps every 7-10 years, even if they still work—failure often happens suddenly.',
      timeEstimate: '15 minutes monthly',
      icon: Droplets,
      season: 'Year-round'
    },
    {
      name: 'Winterize Pipes and Outdoor Fixtures',
      text: `Before ${city}'s first freeze, disconnect garden hoses, shut off exterior faucets from inside, and insulate exposed pipes in unheated areas (garages, crawlspaces, attics). ${archetype === 'estate' ? 'Estate properties with pool houses, guest homes, or detached garages need separate winterization.' : archetype === 'historic' ? 'Historic homes often have pipes in exterior walls—consider adding insulation.' : 'Open cabinet doors during cold snaps to let warm air reach pipes.'}`,
      tip: 'Set thermostats no lower than 55°F when away—frozen pipes can burst within hours.',
      timeEstimate: '2-3 hours annually',
      icon: Snowflake,
      season: 'Fall'
    },
    {
      name: 'Install Water Detection Devices',
      text: `Place water sensors near water heaters, washing machines, dishwashers, and in basements. ${archetype === 'estate' ? 'Smart home water monitoring systems can detect leaks throughout large properties and automatically shut off the main valve.' : archetype === 'urban' ? 'For condos, sensors near shared walls can alert you to neighbor issues.' : 'Battery-powered sensors cost $20-50 and provide early warning.'} Connect to smart home systems for alerts when you're away.`,
      tip: 'The best sensor locations: behind toilets, under sinks, near the water heater, and by the washing machine.',
      timeEstimate: '30 minutes to install',
      icon: Shield,
      season: 'Any time'
    },
    {
      name: 'Maintain Appliances Properly',
      text: `Water heaters, dishwashers, washing machines, and refrigerators with ice makers are common leak sources. ${archetype === 'suburban' ? 'With multiple bathrooms in family homes, check all toilets for running water and tank leaks.' : ''} Replace water heater anode rods every 3-5 years. Check appliance supply lines annually and replace at first sign of wear.`,
      tip: 'Water heaters over 10 years old should be replaced before failure—sudden tank ruptures cause massive flooding.',
      timeEstimate: '1 hour quarterly',
      icon: Wrench,
      season: 'Quarterly'
    },
    {
      name: 'Grade Landscaping Away from Foundation',
      text: `Soil should slope away from your ${city} home at least 6 inches over 10 feet. ${archetype === 'estate' ? 'Large properties with extensive landscaping should have drainage engineers assess water flow.' : archetype === 'suburban' ? 'Suburban lots often settle over time—add soil to maintain proper grading.' : 'Check grading after landscaping projects and heavy rains.'} Consider French drains for persistently wet areas.`,
      tip: 'Mulch beds against foundations hold moisture—leave 6 inches of clearance or use gravel.',
      timeEstimate: '2-4 hours if adjustments needed',
      icon: Leaf,
      season: 'Spring'
    }
  ];

  // Seasonal checklist
  const seasonalChecklist = [
    { season: 'Spring', icon: Leaf, tasks: ['Clean gutters', 'Inspect roof', 'Test sump pump', 'Check grading'] },
    { season: 'Summer', icon: Sun, tasks: ['Check A/C condensate lines', 'Inspect irrigation systems', 'Monitor humidity levels'] },
    { season: 'Fall', icon: CloudRain, tasks: ['Clean gutters again', 'Winterize exterior', 'Service water heater', 'Test sump pump backup'] },
    { season: 'Winter', icon: Snowflake, tasks: ['Maintain heating', 'Monitor for ice dams', 'Keep pipes warm', 'Clear snow from drains'] }
  ];

  // Build city-specific FAQs
  const faqs = [
    {
      question: `What is the most common cause of water damage in ${city}?`,
      answer: `In ${city}, the most common causes are ${commonIssues.slice(0, 2).join(' and ').toLowerCase() || 'plumbing failures and appliance leaks'}. ${archetype === 'suburban' ? 'Basement flooding from sump pump failures during heavy rains is particularly common in suburban homes.' : archetype === 'historic' ? 'Aging plumbing systems in historic homes are prone to sudden failures.' : archetype === 'estate' ? 'Complex plumbing systems in luxury homes have more potential failure points.' : 'Urban condos often see damage from unit-to-unit water migration.'}`
    },
    {
      question: `How often should I have my ${city} home inspected for water damage risks?`,
      answer: `We recommend annual plumbing and roof inspections for ${city} homes. Additionally, check visible pipes monthly, test sump pumps quarterly, and inspect after any severe weather event. ${archetype === 'historic' ? 'Historic homes should have more frequent inspections due to aging systems.' : ''} Early detection prevents 80% of major water damage incidents.`
    },
    {
      question: `What permits are required for water damage prevention projects in ${city}?`,
      answer: `${permitInfo} Most preventive maintenance (gutter cleaning, sump pump replacement, leak repairs) doesn't require permits. However, re-piping, new drainage systems, and structural modifications typically do. ${archetype === 'historic' ? 'Historic district properties may require Board of Architectural Review approval for visible changes.' : ''} We can help navigate local requirements.`
    },
    {
      question: `Are smart water leak detectors worth it for ${city} homes?`,
      answer: `Absolutely. Smart water detectors cost $30-200 and can prevent thousands in damage by alerting you to leaks early—even when you're away. ${archetype === 'estate' ? 'For larger properties, whole-home water monitoring systems can automatically shut off the main valve when leaks are detected.' : 'Basic sensors near water heaters and washing machines provide excellent protection for the investment.'}`
    },
    {
      question: `How can I prevent frozen pipes in ${city}?`,
      answer: `${city} typically experiences freezing temperatures from December through February. Prevent frozen pipes by: insulating exposed pipes in unheated areas, keeping garage doors closed, opening cabinet doors during cold snaps, and maintaining thermostat at 55°F minimum when away. ${archetype === 'historic' ? 'Historic homes with pipes in exterior walls are especially vulnerable.' : ''} If leaving for extended periods, consider having us winterize your home.`
    },
    {
      question: `Does Flood Doctor offer preventive maintenance services in ${city}?`,
      answer: `Yes. We offer annual plumbing inspections, sump pump testing and maintenance, water heater assessments, and comprehensive water damage prevention audits for ${city} homeowners. Preventive service is far less expensive than emergency restoration. Call ${phone} to schedule an assessment.`
    }
  ];

  // Generate HowTo schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Protecting Your ${city} Home from Water Damage`,
    description: `Comprehensive water damage prevention guide for ${city}, Virginia homeowners. 8-step seasonal maintenance plan to prevent flooding, leaks, and water damage.`,
    image: 'https://flood.doctor/images/guides/prevention-guide.jpg',
    totalTime: 'P1Y',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '100-500'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Water leak sensors' },
      { '@type': 'HowToSupply', name: 'Pipe insulation' },
      { '@type': 'HowToSupply', name: 'Gutter guards (optional)' },
      { '@type': 'HowToSupply', name: 'Sump pump backup battery' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Ladder for gutter access' },
      { '@type': 'HowToTool', name: 'Flashlight for inspections' },
      { '@type': 'HowToTool', name: 'Garden hose for sump pump testing' }
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
      { label: `${city} Prevention Guide`, path: '/guides/prevention/' }
    ]),
    howToSchema,
    faqSchema,
    localBusinessSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`Protecting Your ${city} Home from Water Damage | Prevention Guide | Flood Doctor`}
        description={`Complete water damage prevention guide for ${city} homeowners. 8 steps to protect your ${housingTypes[0]?.toLowerCase() || 'home'} from flooding, leaks, and water damage year-round.`}
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: `${city} Prevention Guide`, path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> Prevention Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              Protecting Your {city} Home from Water Damage
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              {archetypeIntro[archetype] || archetypeIntro.suburban}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-green-600" />
                <span className="text-sm font-medium text-[#202124]">8 Prevention Steps</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Calendar size={18} className="text-green-600" />
                <span className="text-sm font-medium text-[#202124]">Seasonal Checklist</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Home size={18} className="text-green-600" />
                <span className="text-sm font-medium text-[#202124]">{housingTypes[0] || 'All Home Types'}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Schedule Assessment: {phone}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-8">

            {/* Seasonal Overview */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-green-500">
                Seasonal Prevention Calendar for {city}
              </h2>
              <p className="text-[#5f6368] mb-8">
                Water damage prevention is year-round work. Here's when to focus on each task.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {seasonalChecklist.map((season, i) => (
                  <div key={i} className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                        <season.icon size={20} className="text-green-600" />
                      </div>
                      <h3 className="font-medium text-[#202124]">{season.season}</h3>
                    </div>
                    <ul className="space-y-2">
                      {season.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#5f6368]">
                          <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Steps */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                8 Steps to Protect Your {city} Home
              </h2>
              <p className="text-[#5f6368] mb-12">
                Follow this comprehensive prevention plan to minimize water damage risk.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative bg-white border border-[#dadce0] rounded-3xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white items-center justify-center shrink-0 shadow-lg">
                        <step.icon size={28} />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-sm font-bold text-green-600">STEP {index + 1}</span>
                          <span className="text-xs px-2 py-1 bg-[#e8f0fe] text-[#1a73e8] rounded-full">{step.season}</span>
                        </div>
                        <h3 className="font-display text-xl font-medium text-[#202124] mb-3">
                          {step.name}
                        </h3>
                        <p className="text-[#5f6368] leading-relaxed mb-4">
                          {step.text}
                        </p>

                        {/* Pro Tip */}
                        <div className="bg-green-50 rounded-xl p-4 mb-4">
                          <div className="flex items-start gap-3">
                            <Zap size={18} className="text-green-600 mt-0.5 shrink-0" />
                            <div>
                              <span className="font-medium text-green-700 text-sm">Pro Tip: </span>
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

            {/* Common Issues */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                Common Water Damage Risks in {city}
              </h2>
              <p className="text-[#5f6368] mb-8">
                Focus your prevention efforts on these {city}-specific vulnerabilities.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {commonIssues.map((issue, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <AlertTriangle size={18} className="text-yellow-600 shrink-0" />
                    <span className="text-[#202124] font-medium">{issue}</span>
                  </div>
                ))}
                {seasonalRisks.map((risk, i) => (
                  <div key={i + commonIssues.length} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <CloudRain size={18} className="text-blue-600 shrink-0" />
                    <span className="text-[#202124] font-medium">{risk}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title={`${city} Water Damage Prevention FAQ`}
                className="border-none p-0"
              />
            </section>

            {/* What's Next Section */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
                Need Professional Help?
              </h2>
              <p className="text-[#5f6368] mb-8">
                From preventive assessments to emergency response, we're here to help {city} homeowners protect their property.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <a href="/guides/emergency-response/" className="group bg-red-50 rounded-2xl p-6 border border-red-200 hover:shadow-lg transition-all hover:border-red-400">
                  <AlertTriangle size={24} className="text-red-600 mb-4" />
                  <h3 className="font-medium text-[#202124] mb-2 group-hover:text-red-700">Emergency Response</h3>
                  <p className="text-sm text-[#5f6368]">Water damage now? Get our 6-step emergency guide.</p>
                </a>
                <a href="/services/residential/restoration-services/basement-water-damage/" className="group bg-blue-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all hover:border-blue-400">
                  <Droplets size={24} className="text-[#1a73e8] mb-4" />
                  <h3 className="font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8]">Basement Services</h3>
                  <p className="text-sm text-[#5f6368]">Professional basement waterproofing and restoration.</p>
                </a>
                <a href="/request/" className="group bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0] hover:shadow-lg transition-all hover:border-[#1a73e8]">
                  <FileText size={24} className="text-[#1a73e8] mb-4" />
                  <h3 className="font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8]">Schedule Assessment</h3>
                  <p className="text-sm text-[#5f6368]">Get a professional prevention assessment for your home.</p>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* CTA */}
              <div className="bg-green-600 rounded-[32px] p-8 text-white shadow-lg">
                <h3 className="font-display text-xl font-medium mb-4">
                  Prevention Assessment
                </h3>
                <p className="text-green-100 text-sm leading-relaxed mb-6">
                  Our IICRC-certified team can assess your {city} home for water damage risks and recommend targeted prevention measures.
                </p>
                <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="secondary" fullWidth className="bg-white text-green-600 border-none hover:bg-green-50">
                  <Phone size={18} className="mr-2" />
                  {phone}
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                  {[
                    { icon: CheckCircle2, label: 'Whole-home assessment' },
                    { icon: Shield, label: 'Risk identification' },
                    { icon: FileText, label: 'Prevention plan' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-green-100">
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Housing Types */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h4 className="font-medium text-[#202124] mb-4">
                  <Home size={18} className="inline mr-2 text-[#1a73e8]" />
                  {city} Home Types
                </h4>
                <div className="space-y-2">
                  {housingTypes.map((type, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#5f6368]">
                      <CheckCircle2 size={14} className="text-[#1a73e8]" />
                      {type}
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
                    { href: '/services/residential/restoration-services/basement-water-damage/', label: 'Basement Water Damage' },
                    { href: '/services/residential/cleanup-services/mold-remediation/', label: 'Mold Remediation' },
                    { href: '/services/residential/specialty-services/plumbing-leak-detection/', label: 'Leak Detection' }
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
                    { href: '/guides/insurance-claims/', label: `${city} Insurance Claims` },
                    { href: '/guides/basement-waterproofing/', label: 'Basement Waterproofing' },
                    { href: '/guides/flood-preparation/', label: 'Flood Preparation' }
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
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Prevention Costs Less Than Restoration
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            A $200 prevention assessment can save thousands in water damage restoration. Let our {city} team identify and address risks before they become emergencies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="secondary" size="lg" className="bg-white text-green-600 border-none hover:bg-green-50">
              <Phone size={20} className="mr-2" />
              Schedule Assessment: {phone}
            </Button>
            <Button to="/request/" variant="secondary" size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
              Request Online
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CityPreventionGuide;
