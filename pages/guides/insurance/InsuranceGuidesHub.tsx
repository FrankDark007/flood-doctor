import React from 'react';
import PageMeta from '../../../components/ui/PageMeta';
import Breadcrumbs from '../../../components/ui/Breadcrumbs';
import Button from '../../../components/ui/Button';
import { generateBreadcrumbSchema } from '../../../utils/schema';
import {
  Phone,
  Shield,
  ArrowRight,
  FileText,
  Users,
  Smartphone,
  Car,
  Home,
  Star
} from 'lucide-react';

const InsuranceGuidesHub: React.FC = () => {
  const insuranceGuides = [
    {
      name: 'USAA',
      slug: 'usaa-water-damage-claim',
      description: 'Complete guide for military families. App-based filing, deployment scenarios, PCS timing, and USAA-specific claim strategies.',
      color: 'blue',
      icon: Shield,
      highlight: 'Military-Focused',
      phone: '1-800-531-USAA'
    },
    {
      name: 'State Farm',
      slug: 'state-farm-water-damage-claim',
      description: 'Agent-first approach guide. Leverage your local agent relationship, Select Service network, and State Farm-specific processes.',
      color: 'red',
      icon: Users,
      highlight: 'Agent-First',
      phone: '1-800-732-5246'
    },
    {
      name: 'Allstate',
      slug: 'allstate-water-damage-claim',
      description: 'QuickFoto Claim and Good Hands Repair Network guide. Digital-first filing and Allstate-specific settlement strategies.',
      color: 'indigo',
      icon: Smartphone,
      highlight: 'QuickFoto Claim',
      phone: '1-800-ALLSTATE'
    },
    {
      name: 'Nationwide',
      slug: 'nationwide-water-damage-claim',
      description: 'On Your Side claim guide. Blue Ribbon Repair Network, Brand New Belongings coverage, and Nationwide-specific processes.',
      color: 'blue',
      icon: Home,
      highlight: 'On Your Side',
      phone: '1-877-On Your Side'
    },
    {
      name: 'GEICO',
      slug: 'geico-water-damage-claim',
      description: 'Underwriter navigation guide. Understand Homesite, Stillwater, and other GEICO partners. Work with the right company.',
      color: 'green',
      icon: Car,
      highlight: 'Know Your Underwriter',
      phone: '1-800-841-3000'
    }
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; hover: string }> = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', hover: 'hover:border-blue-400' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', hover: 'hover:border-red-400' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', hover: 'hover:border-indigo-400' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', hover: 'hover:border-green-400' }
  };

  const pageSchema = generateBreadcrumbSchema([
    { label: 'Guides', path: '/guides/' },
    { label: 'Insurance Claim Guides', path: '/guides/insurance/' }
  ]);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Insurance Claim Guides by Company"
        description="Step-by-step water damage claim guides for USAA, State Farm, Allstate, Nationwide, and GEICO. Company-specific processes, tips, and strategies to maximize your settlement."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#e8f0fe] via-white to-[#e8f0fe] border-b border-[#dadce0] pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Guides', path: '/guides/' },
            { label: 'Insurance Claim Guides', path: '#' }
          ]} />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a73e8]/10 text-[#1a73e8] text-xs font-bold uppercase tracking-wider mb-6">
              <FileText size={14} /> Insurance Guides
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              Water Damage Claim Guides by Insurance Company
            </h1>
            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-8">
              Every insurance company has a different claims process. Our company-specific guides help you navigate your carrier's unique requirements, apps, and settlement strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Need Claim Help? (877) 497-0007
              </Button>
              <Button href="/guides/water-damage-insurance-claim/" variant="outline" size="lg">
                <FileText size={18} className="mr-2" />
                General Claim Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        {/* Insurance Company Cards */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-medium text-[#202124] mb-2 pb-4 border-b-4 border-[#1a73e8]">
            Choose Your Insurance Company
          </h2>
          <p className="text-[#5f6368] mb-12">
            Select your insurance carrier for a step-by-step claim guide tailored to their specific process.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceGuides.map((guide, index) => {
              const colors = colorClasses[guide.color];
              return (
                <a
                  key={index}
                  href={`/guides/insurance/${guide.slug}/`}
                  className={`group relative bg-white rounded-3xl border-2 ${colors.border} ${colors.hover} p-8 transition-all hover:shadow-xl`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                      <guide.icon className={colors.text} size={28} />
                    </div>
                    <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs font-bold rounded-full`}>
                      {guide.highlight}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-medium text-[#202124] mb-3">
                    {guide.name}
                  </h3>
                  <p className="text-[#5f6368] text-sm leading-relaxed mb-6">
                    {guide.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#dadce0]">
                    <span className="text-xs text-[#5f6368]">Claims: {guide.phone}</span>
                    <span className={`flex items-center gap-1 ${colors.text} text-sm font-medium group-hover:gap-2 transition-all`}>
                      Read Guide <ArrowRight size={16} />
                    </span>
                  </div>
                </a>
              );
            })}

            {/* General Guide Card */}
            <a
              href="/guides/water-damage-insurance-claim/"
              className="group relative bg-[#f8f9fa] rounded-3xl border-2 border-[#dadce0] hover:border-[#1a73e8] p-8 transition-all hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-[#1a73e8]/10 rounded-2xl flex items-center justify-center">
                  <FileText className="text-[#1a73e8]" size={28} />
                </div>
                <span className="px-3 py-1 bg-[#1a73e8]/10 text-[#1a73e8] text-xs font-bold rounded-full">
                  Universal
                </span>
              </div>

              <h3 className="font-display text-2xl font-medium text-[#202124] mb-3">
                General Insurance Guide
              </h3>
              <p className="text-[#5f6368] text-sm leading-relaxed mb-6">
                Don't see your carrier? Our comprehensive general guide covers the universal claims process that applies to all insurance companies.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#dadce0]">
                <span className="text-xs text-[#5f6368]">Works for any carrier</span>
                <span className="flex items-center gap-1 text-[#1a73e8] text-sm font-medium group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight size={16} />
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Why Company-Specific Guides */}
        <section className="mb-16">
          <div className="bg-[#e8f0fe] rounded-3xl p-8 md:p-12">
            <h2 className="font-display text-2xl font-medium text-[#202124] mb-6">
              Why Company-Specific Guides Matter
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow">
                  <Smartphone className="text-[#1a73e8]" size={24} />
                </div>
                <h3 className="font-medium text-[#202124] mb-2">Different Apps & Portals</h3>
                <p className="text-sm text-[#5f6368]">
                  USAA's app is different from State Farm's. Our guides show you exactly which buttons to tap and what information to provide.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow">
                  <Users className="text-[#1a73e8]" size={24} />
                </div>
                <h3 className="font-medium text-[#202124] mb-2">Different Processes</h3>
                <p className="text-sm text-[#5f6368]">
                  State Farm prioritizes agents. GEICO routes to underwriters. Knowing who to contact and when makes a difference.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow">
                  <Star className="text-[#1a73e8]" size={24} />
                </div>
                <h3 className="font-medium text-[#202124] mb-2">Different Features</h3>
                <p className="text-sm text-[#5f6368]">
                  QuickFoto Claim, Blue Ribbon Network, On Your Side—each carrier has unique features that can help your claim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6 border border-[#dadce0]">
              <div className="text-4xl font-bold text-[#1a73e8] mb-2">500+</div>
              <div className="text-sm text-[#5f6368]">Insurance claims assisted annually</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#dadce0]">
              <div className="text-4xl font-bold text-[#1a73e8] mb-2">15+</div>
              <div className="text-sm text-[#5f6368]">Insurance carriers we work with</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#dadce0]">
              <div className="text-4xl font-bold text-[#1a73e8] mb-2">24/7</div>
              <div className="text-sm text-[#5f6368]">Documentation support available</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#dadce0]">
              <div className="text-4xl font-bold text-[#1a73e8] mb-2">100%</div>
              <div className="text-sm text-[#5f6368]">Direct billing to major carriers</div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            We Handle All Insurance Companies
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            No matter who your carrier is, we work with them daily. Xactimate estimates, direct billing, adjuster coordination—we handle it all so you can focus on your family.
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

export default InsuranceGuidesHub;
