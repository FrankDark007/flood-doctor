import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Flame,
  Bug,
  Wind,
  Sparkles,
  Hammer,
  Waves,
  Box,
  Building2,
  Home,
  CheckCircle2,
  Star,
  Clock,
  Shield
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * ServicesDevA - Premium Showcase Style (Apple Marketing)
 *
 * Key patterns:
 * - Full-width featured service hero
 * - Horizontally scrolling category sections
 * - Large image-driven cards with gradient overlays
 * - Smooth parallax and hover effects
 * - Premium, cinematic aesthetic
 */

const ServicesDevA: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial'>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const featuredService = {
    title: 'Water Damage Restoration',
    subtitle: '24/7 Emergency Response',
    description: 'From the moment water invades your property, every second counts. Our certified technicians arrive within 60 minutes with industrial-grade equipment to stop damage in its tracks.',
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
    link: '/services/residential/water-damage/',
    stats: [
      { value: '60', label: 'Minute Response' },
      { value: '10k+', label: 'Properties Saved' },
      { value: '4.9', label: 'Star Rating' }
    ]
  };

  const categories = [
    {
      id: 'restoration',
      title: 'Restoration',
      description: 'Full property restoration after water, fire, or storm damage',
      services: [
        { title: 'Water Damage', icon: Droplets, gradient: 'from-blue-500 to-cyan-400', link: '/services/residential/water-damage/' },
        { title: 'Fire & Smoke', icon: Flame, gradient: 'from-orange-500 to-red-400', link: '/services/residential/fire-smoke/' },
        { title: 'Storm Damage', icon: Wind, gradient: 'from-purple-500 to-indigo-400', link: '/services/residential/storm-damage/' },
        { title: 'Flood Cleanup', icon: Waves, gradient: 'from-teal-500 to-emerald-400', link: '/services/residential/flood-cleanup/' }
      ]
    },
    {
      id: 'remediation',
      title: 'Remediation',
      description: 'Specialized treatment for mold, asbestos, and biohazards',
      services: [
        { title: 'Mold Remediation', icon: Bug, gradient: 'from-emerald-500 to-green-400', link: '/services/residential/mold/' },
        { title: 'Sewage Cleanup', icon: Waves, gradient: 'from-amber-500 to-yellow-400', link: '/services/residential/sewage/' },
        { title: 'Biohazard', icon: Shield, gradient: 'from-red-500 to-rose-400', link: '/services/residential/biohazard/' }
      ]
    },
    {
      id: 'specialty',
      title: 'Specialty',
      description: 'Focused services for unique restoration needs',
      services: [
        { title: 'Content Restoration', icon: Box, gradient: 'from-violet-500 to-purple-400', link: '/services/residential/content/' },
        { title: 'Odor Removal', icon: Sparkles, gradient: 'from-pink-500 to-rose-400', link: '/services/residential/odor/' },
        { title: 'Reconstruction', icon: Hammer, gradient: 'from-slate-600 to-slate-400', link: '/services/residential/reconstruction/' }
      ]
    }
  ];

  const commercialServices = [
    { title: 'Office Buildings', icon: Building2, description: 'Minimal disruption to operations', link: '/services/commercial/' },
    { title: 'Retail & Restaurants', icon: Building2, description: 'Fast turnaround for business continuity', link: '/services/commercial/' },
    { title: 'Healthcare Facilities', icon: Shield, description: 'HIPAA-compliant restoration', link: '/services/commercial/' },
    { title: 'Industrial Sites', icon: Hammer, description: 'Large-scale damage mitigation', link: '/services/commercial/' }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Restoration Services | Water, Fire & Mold Restoration"
        description="Professional restoration services for water damage, fire damage, mold remediation, and more. 24/7 emergency response in Northern Virginia."
      />

      {/* Hero - Featured Service Showcase */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${featuredService.gradient}`}>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8">
                <Droplets size={16} />
                {featuredService.subtitle}
              </div>

              <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
                {featuredService.title}
              </h1>

              <p className="text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed max-w-lg">
                {featuredService.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  to={featuredService.link}
                  variant="primary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-8"
                >
                  Learn More
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button
                  href="tel:8774970007"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 h-14 px-8"
                >
                  <Phone size={18} className="mr-2" />
                  Emergency Line
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                {featuredService.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-display text-4xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Service Cards */}
            <div className="hidden lg:block relative h-[500px]">
              <div className="absolute top-0 right-0 w-64 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform rotate-3 hover:rotate-0 transition-transform">
                <Flame className="text-white mb-4" size={32} />
                <h3 className="font-semibold text-white mb-2">Fire & Smoke</h3>
                <p className="text-sm text-white/70">Complete remediation and odor removal</p>
              </div>
              <div className="absolute top-32 left-0 w-64 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform">
                <Bug className="text-white mb-4" size={32} />
                <h3 className="font-semibold text-white mb-2">Mold Remediation</h3>
                <p className="text-sm text-white/70">Safe removal and prevention</p>
              </div>
              <div className="absolute bottom-0 right-12 w-64 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform rotate-2 hover:rotate-0 transition-transform">
                <Wind className="text-white mb-4" size={32} />
                <h3 className="font-semibold text-white mb-2">Storm Damage</h3>
                <p className="text-sm text-white/70">Emergency response 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Explore Services</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'residential', label: 'Residential', icon: Home },
                { id: 'commercial', label: 'Commercial', icon: Building2 }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === tab.id
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-muted hover:bg-slate-200'
                  }`}
                >
                  {tab.icon && <tab.icon size={16} />}
                  {tab.label}
                </button>
              ))}
            </div>

            <Button href="tel:8774970007" variant="primary" size="sm">
              <Phone size={16} className="mr-2" />
              (877) 497-0007
            </Button>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {(activeCategory === 'all' || activeCategory === 'residential') && categories.map((category, categoryIdx) => (
        <section key={category.id} className="py-20 lg:py-28 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text mb-2">
                  {category.title}
                </h2>
                <p className="text-lg text-muted">{category.description}</p>
              </div>
              <Link
                to="/services/residential/"
                className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View all
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Horizontal Scroll Cards */}
            <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
              <div className="flex gap-6" style={{ width: 'max-content' }}>
                {category.services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.link}
                    className={`group relative w-80 h-96 rounded-3xl overflow-hidden bg-gradient-to-br ${service.gradient} flex-shrink-0`}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Icon */}
                    <div className="absolute top-8 left-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="text-white" size={32} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-display text-2xl font-semibold text-white mb-4">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/80 font-medium group-hover:gap-4 transition-all">
                        Learn more
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Commercial Section */}
      {(activeCategory === 'all' || activeCategory === 'commercial') && (
        <section className="py-20 lg:py-28 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                  <Building2 size={16} />
                  Commercial Services
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6">
                  Enterprise-grade
                  <br />
                  <span className="text-primary">restoration</span>
                </h2>
                <p className="text-xl text-white/60 leading-relaxed mb-8">
                  Specialized restoration for businesses of all sizes. Minimize downtime, protect assets, and maintain operations during the restoration process.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {['HIPAA Compliant', 'OSHA Certified', '24/7 Priority Response', 'Direct Insurance Billing'].map((badge) => (
                    <span key={badge} className="px-4 py-2 rounded-full bg-white/10 text-sm text-white/80">
                      {badge}
                    </span>
                  ))}
                </div>

                <Link to="/services/commercial/" className="inline-flex items-center justify-center font-display font-medium bg-white text-slate-900 hover:bg-gray-100 h-14 px-8 rounded-full transition-all">
                  Commercial Services
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {commercialServices.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.link}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <service.icon className="text-primary mb-4" size={28} />
                    <h3 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/50">{service.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trust Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: '60 min', label: 'Response Time' },
              { icon: Star, value: '4.9/5', label: 'Customer Rating' },
              { icon: Shield, value: 'IICRC', label: 'Certified' },
              { icon: CheckCircle2, value: '10,000+', label: 'Projects Completed' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <stat.icon className="text-primary" size={28} />
                </div>
                <div className="font-display text-3xl font-bold text-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6">
            Need help choosing a service?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Our restoration specialists can assess your situation and recommend the right services. Free consultations, 24/7.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="tel:8774970007"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 h-14 px-8"
            >
              <Phone size={20} className="mr-2" />
              (877) 497-0007
            </Button>
            <Button
              to="/request/"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 h-14 px-8"
            >
              Request Assessment
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesDevA;
