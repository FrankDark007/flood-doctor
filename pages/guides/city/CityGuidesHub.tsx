import React from 'react';
import { useFranchise } from '@/hooks/useFranchise';
import { getArchetype } from '@/config/archetypeMapping';
import PageMeta from '@/components/ui/PageMeta';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import { generateBreadcrumbSchema, combineSchemas } from '@/utils/schema';
import {
  Phone,
  AlertTriangle,
  Shield,
  FileText,
  Droplets,
  Bug,
  CloudRain,
  Wrench,
  Snowflake,
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle2,
  Building
} from 'lucide-react';

const CityGuidesHub: React.FC = () => {
  const franchise = useFranchise();
  const archetype = getArchetype(franchise.id);

  const city = franchise.city || 'Northern Virginia';
  const phone = franchise.phone || '(877) 497-0007';
  const responseTime = franchise.guideData?.emergency?.responseTimeRange || '45-60 minutes';

  // City-specific guides (NEW - top priority)
  const cityGuides = [
    {
      title: `Emergency Water Damage Response in ${city}`,
      description: `Critical first steps when water damage strikes your ${city} home. ${responseTime} professional response available 24/7.`,
      href: '/guides/emergency-response/',
      icon: AlertTriangle,
      color: 'red',
      badge: 'EMERGENCY',
      featured: true
    },
    {
      title: `Protecting Your ${city} Home from Water Damage`,
      description: `8-step prevention plan tailored to ${city}'s housing types and seasonal weather patterns.`,
      href: '/guides/prevention/',
      icon: Shield,
      color: 'green',
      badge: 'PREVENTION'
    },
    {
      title: `${city} Water Damage Insurance Claims`,
      description: `Navigate insurance claims with ${city}-specific guidance. Average claims ${franchise.guideData?.insurance?.averageClaimRange || '$5,000-$25,000'}.`,
      href: '/guides/insurance-claims/',
      icon: FileText,
      color: 'blue',
      badge: 'INSURANCE'
    }
  ];

  // Generic guides (existing - also available)
  const genericGuides = [
    {
      title: 'How to Clean Up Water Damage',
      description: '8-step emergency water damage cleanup guide with professional tips for safety, extraction, drying, and mold prevention.',
      href: '/guides/water-damage-cleanup/',
      icon: Droplets,
      color: 'blue'
    },
    {
      title: 'Mold Remediation Guide',
      description: '7-step process to safely identify, contain, and remove mold. Includes when to DIY vs. call professionals.',
      href: '/guides/mold-remediation/',
      icon: Bug,
      color: 'orange'
    },
    {
      title: 'Filing Water Damage Insurance Claims',
      description: '10-step guide to document damage, file claims, and maximize your insurance settlement.',
      href: '/guides/water-damage-insurance-claim/',
      icon: FileText,
      color: 'indigo'
    },
    {
      title: 'Basement Waterproofing Guide',
      description: '9-step guide to waterproof your basement and prevent future flooding and moisture problems.',
      href: '/guides/basement-waterproofing/',
      icon: CloudRain,
      color: 'teal'
    },
    {
      title: 'Burst Pipe Emergency Response',
      description: '6-step emergency response for burst pipes. Stop the water, minimize damage, get help fast.',
      href: '/guides/burst-pipe-emergency/',
      icon: Snowflake,
      color: 'cyan'
    },
    {
      title: 'Flood Preparation Checklist',
      description: '8-step preparation guide to protect your home before flooding strikes.',
      href: '/guides/flood-preparation/',
      icon: Shield,
      color: 'purple'
    }
  ];

  // Insurance carrier guides
  const insuranceGuides = [
    { name: 'USAA', href: '/guides/insurance/usaa-water-damage-claim/' },
    { name: 'State Farm', href: '/guides/insurance/state-farm-water-damage-claim/' },
    { name: 'Allstate', href: '/guides/insurance/allstate-water-damage-claim/' },
    { name: 'Nationwide', href: '/guides/insurance/nationwide-water-damage-claim/' },
    { name: 'GEICO', href: '/guides/insurance/geico-water-damage-claim/' }
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' }
  };

  // Page schema
  const pageSchema = combineSchemas(
    generateBreadcrumbSchema([
      { label: 'Guides', path: '/guides/' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `Water Damage Guides for ${city}`,
      description: `Comprehensive water damage guides for ${city}, Virginia homeowners. Emergency response, prevention, insurance claims, and more.`,
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: cityGuides.length + genericGuides.length,
        itemListElement: [...cityGuides, ...genericGuides].map((guide, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'HowTo',
            name: guide.title,
            description: guide.description,
            url: `https://${franchise.id === 'hq' ? '' : franchise.id + '.'}flood.doctor${guide.href}`
          }
        }))
      }
    }
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`Water Damage Guides: ${city}`}
        description={`Complete water damage guide library for ${city} homeowners. Emergency response (${responseTime}), prevention tips, insurance claims help, and professional restoration guides.`}
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} /> {city} Guides
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              Water Damage Guides for {city}
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-6">
              Expert guides tailored for {city}, Virginia homeowners. From emergency response to prevention and insurance claims—everything you need to protect your home and navigate water damage.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <CheckCircle2 size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">9 Guides</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Clock size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">{responseTime} Response</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[#dadce0]">
                <Shield size={18} className="text-[#1a73e8]" />
                <span className="text-sm font-medium text-[#202124]">IICRC Certified</span>
              </div>
            </div>

            <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg">
              <Phone size={18} className="mr-2" />
              24/7 Emergency: {phone}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">

        {/* City-Specific Guides Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={24} className="text-[#1a73e8]" />
            <h2 className="font-display text-3xl font-medium text-[#202124]">
              {city}-Specific Guides
            </h2>
          </div>
          <p className="text-[#5f6368] mb-8 max-w-2xl">
            Tailored for {city} homeowners with local response times, area-specific risks, and neighborhood coverage.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {cityGuides.map((guide, index) => {
              const colors = colorClasses[guide.color] || colorClasses.blue;
              return (
                <a
                  key={index}
                  href={guide.href}
                  className={`group relative bg-white rounded-3xl border-2 ${guide.featured ? 'border-red-300 shadow-lg' : 'border-[#dadce0]'} p-8 hover:shadow-xl transition-all hover:border-[#1a73e8]`}
                >
                  {guide.badge && (
                    <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text}`}>
                      {guide.badge}
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}>
                    <guide.icon size={28} className={colors.text} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-[#202124] mb-3 group-hover:text-[#1a73e8] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center text-[#1a73e8] text-sm font-medium">
                    Read Guide
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* General Guides Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Droplets size={24} className="text-[#1a73e8]" />
            <h2 className="font-display text-3xl font-medium text-[#202124]">
              General Water Damage Guides
            </h2>
          </div>
          <p className="text-[#5f6368] mb-8 max-w-2xl">
            Comprehensive how-to guides for water damage cleanup, mold remediation, and home protection.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genericGuides.map((guide, index) => {
              const colors = colorClasses[guide.color] || colorClasses.blue;
              return (
                <a
                  key={index}
                  href={guide.href}
                  className="group bg-white rounded-3xl border border-[#dadce0] p-8 hover:shadow-lg transition-all hover:border-[#1a73e8]"
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                    <guide.icon size={24} className={colors.text} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center text-[#1a73e8] text-sm font-medium">
                    Read Guide
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Insurance Carrier Guides */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Building size={24} className="text-[#1a73e8]" />
            <h2 className="font-display text-3xl font-medium text-[#202124]">
              Insurance Company Guides
            </h2>
          </div>
          <p className="text-[#5f6368] mb-8 max-w-2xl">
            Carrier-specific claim guides with step-by-step processes for the top insurance companies.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {insuranceGuides.map((carrier, index) => (
              <a
                key={index}
                href={carrier.href}
                className="group flex items-center gap-3 bg-white rounded-xl border border-[#dadce0] p-4 hover:shadow-md transition-all hover:border-[#1a73e8]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#e8f0fe] flex items-center justify-center shrink-0">
                  <Building size={20} className="text-[#1a73e8]" />
                </div>
                <span className="font-medium text-[#202124] group-hover:text-[#1a73e8]">{carrier.name}</span>
                <ArrowRight size={14} className="ml-auto text-[#dadce0] group-hover:text-[#1a73e8]" />
              </a>
            ))}
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] rounded-[32px] p-12 text-center">
          <h2 className="font-display text-3xl font-medium text-white mb-4">
            Water Damage Emergency in {city}?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Our IICRC-certified team arrives in {responseTime} with industrial extraction equipment. Available 24/7.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href={`tel:${phone.replace(/[^0-9]/g, '')}`} variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
              <Phone size={20} className="mr-2" />
              Call Now: {phone}
            </Button>
            <Button to="/request/" variant="secondary" size="lg" className="hidden md:inline-flex bg-transparent text-white border-2 border-white hover:bg-white/10">
              Request Service Online
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
};

export default CityGuidesHub;
