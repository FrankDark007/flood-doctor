import React, { useState } from 'react';
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
  Shield,
  Quote,
  Zap
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * ServicesDevC - Editorial/Magazine Style
 *
 * Key patterns:
 * - Bold editorial typography with accent lines
 * - Category sections with bento grid layouts
 * - Mixed card sizes for visual hierarchy
 * - Story-driven content blocks
 * - Testimonial integration within sections
 * - Warm, community-focused aesthetic
 */

const ServicesDevC: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const restorationServices = [
    {
      id: 'water',
      title: 'Water Damage',
      subtitle: 'Emergency extraction & drying',
      description: 'Every minute counts when water invades your home. Our crews arrive within 60 minutes with industrial extractors and drying equipment.',
      icon: Droplets,
      gradient: 'from-blue-600 to-cyan-500',
      link: '/services/residential/water-damage/',
      featured: true
    },
    {
      id: 'fire',
      title: 'Fire & Smoke',
      subtitle: 'Complete remediation',
      description: 'From soot removal to odor elimination, we restore properties after fire damage.',
      icon: Flame,
      gradient: 'from-orange-500 to-red-400',
      link: '/services/residential/fire-smoke/'
    },
    {
      id: 'storm',
      title: 'Storm Damage',
      subtitle: '24/7 emergency response',
      description: 'Immediate response for wind, hail, and weather-related property damage.',
      icon: Wind,
      gradient: 'from-purple-500 to-indigo-400',
      link: '/services/residential/storm-damage/'
    }
  ];

  const remediationServices = [
    {
      id: 'mold',
      title: 'Mold Remediation',
      description: 'Professional testing, containment, and safe removal for healthy indoor air.',
      icon: Bug,
      link: '/services/residential/mold/'
    },
    {
      id: 'sewage',
      title: 'Sewage Cleanup',
      description: 'Category 3 black water cleanup with full sanitization and decontamination.',
      icon: Waves,
      link: '/services/residential/sewage/'
    },
    {
      id: 'biohazard',
      title: 'Biohazard',
      description: 'Safe handling and disposal of biohazardous materials.',
      icon: Shield,
      link: '/services/residential/biohazard/'
    }
  ];

  const specialtyServices = [
    {
      id: 'content',
      title: 'Content Restoration',
      description: 'Document drying, electronics recovery, and personal property restoration.',
      icon: Box,
      link: '/services/residential/content/'
    },
    {
      id: 'odor',
      title: 'Odor Removal',
      description: 'Hydroxyl, ozone, and thermal fogging for persistent odors.',
      icon: Sparkles,
      link: '/services/residential/odor/'
    },
    {
      id: 'reconstruction',
      title: 'Reconstruction',
      description: 'From drywall to complete rebuilds—we finish what we start.',
      icon: Hammer,
      link: '/services/residential/reconstruction/'
    }
  ];

  const testimonial = {
    quote: "The Flood Doctor team arrived within 45 minutes and immediately started extracting water. They saved our hardwood floors and handled our insurance claim from start to finish.",
    author: 'Jennifer Martinez',
    location: 'Vienna, VA',
    service: 'Water Damage Restoration'
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Restoration Services | Water, Fire & Mold Restoration"
        description="Professional restoration services for water damage, fire damage, mold remediation, and more. 24/7 emergency response in Northern Virginia."
      />

      {/* Hero - Editorial Bold */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-white/40" />
              <span className="text-white/60 text-sm tracking-widest uppercase">Complete Restoration Services</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white mb-8 leading-[0.95]">
              When disaster strikes,
              <br />
              <span className="italic font-normal">we restore</span> what
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">matters most.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/60 mb-12 max-w-2xl leading-relaxed">
              Water, fire, mold, or storm—our certified technicians are ready 24/7 to restore your property and your peace of mind.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href="tel:8774970007"
                variant="primary"
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-100 h-16 px-10 text-lg"
              >
                <Phone size={22} className="mr-3" />
                Emergency Line
              </Button>
              <Button
                to="/request/"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 h-16 px-10 text-lg"
              >
                Schedule Assessment
                <ArrowRight size={20} className="ml-3" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '60 min', label: 'Response Time' },
                { value: '10,000+', label: 'Projects Completed' },
                { value: '4.9/5', label: 'Customer Rating' },
                { value: '15+', label: 'Years Experience' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="font-display text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Restoration Services - Bento Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">01</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text">
                Restoration
              </h2>
              <p className="text-lg text-muted mt-2">Emergency response when every minute matters</p>
            </div>
            <Link
              to="/services/residential/"
              className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View all
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured Large Card */}
            <Link
              to={restorationServices[0].link}
              className={`md:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br ${restorationServices[0].gradient} p-8 lg:p-12 min-h-[400px] flex flex-col justify-end`}
              onMouseEnter={() => setHoveredCard(restorationServices[0].id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-8 right-8">
                {(() => {
                  const FeaturedIcon = restorationServices[0].icon;
                  return (
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <FeaturedIcon className="text-white" size={40} />
                    </div>
                  );
                })()}
              </div>
              <div className="relative">
                <div className="text-white/60 text-sm uppercase tracking-wider mb-2">{restorationServices[0].subtitle}</div>
                <h3 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">
                  {restorationServices[0].title}
                </h3>
                <p className="text-white/80 text-lg mb-6 max-w-lg">
                  {restorationServices[0].description}
                </p>
                <div className="flex items-center gap-2 text-white font-medium">
                  Learn more
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Smaller Cards */}
            {restorationServices.slice(1).map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className={`group relative overflow-hidden rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[200px] bg-gradient-to-br ${service.gradient}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                    Learn more
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Break */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
            <Quote className="absolute top-8 right-8 text-slate-100" size={64} />
            <div className="relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                ))}
              </div>
              <p className="font-display text-2xl lg:text-3xl text-text leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-text">{testimonial.author}</div>
                  <div className="text-sm text-muted">{testimonial.location} • {testimonial.service}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Remediation Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-emerald-500" />
                <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">02</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-4">
                Remediation
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Mold, sewage, and biohazard contamination require specialized treatment. Our certified technicians follow IICRC protocols for safe, thorough remediation.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {remediationServices.map((service, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                    <service.icon className="text-emerald-600" size={28} />
                  </div>
                  <div className="font-medium text-text text-sm">{service.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {remediationServices.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="group bg-slate-50 rounded-2xl p-6 lg:p-8 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:scale-110 transition-all">
                  <service.icon className="text-emerald-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-text mb-2 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm">
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Specialty Services */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-violet-400" />
            <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">03</span>
          </div>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-4">
                Specialty Services
              </h2>
              <p className="text-xl text-white/60 max-w-lg">
                Focused solutions for unique restoration challenges—from document recovery to complete reconstruction.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specialtyServices.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-5 group-hover:bg-violet-500 group-hover:scale-110 transition-all">
                  <service.icon className="text-violet-400 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-violet-400 font-medium text-sm">
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-slate-300" />
                <span className="text-muted text-sm font-semibold tracking-widest uppercase">For Business</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-6">
                Commercial
                <br />
                <span className="italic font-normal">restoration</span>
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Enterprise-grade restoration with minimal business disruption. HIPAA-compliant, OSHA-certified, and equipped for facilities of any size.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Office Buildings', 'Healthcare', 'Retail', 'Industrial', 'Multi-Family', 'Education'].map((type) => (
                  <span key={type} className="px-4 py-2 rounded-full bg-slate-100 text-sm text-text">
                    {type}
                  </span>
                ))}
              </div>

              <Button to="/services/commercial/" variant="primary" size="lg">
                Commercial Services
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>

            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 relative overflow-hidden">
              <div className="absolute inset-8 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center">
                <Building2 className="text-slate-400" size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: '60-Minute Response', description: 'Guaranteed arrival time' },
              { icon: Shield, title: 'IICRC Certified', description: 'Industry-leading standards' },
              { icon: Star, title: '4.9/5 Rating', description: '500+ verified reviews' },
              { icon: CheckCircle2, title: 'Licensed & Insured', description: 'Full coverage protection' }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <badge.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">{badge.title}</h3>
                  <p className="text-sm text-muted">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-cyan-500">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            Ready to restore
            <br />
            <span className="italic font-normal">your property?</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Free assessments. 60-minute response. Direct insurance billing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="tel:8774970007"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 h-16 px-10 text-lg"
            >
              <Phone size={22} className="mr-3" />
              (877) 497-0007
            </Button>
            <Button
              to="/request/"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 h-16 px-10 text-lg"
            >
              Request Assessment
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesDevC;
