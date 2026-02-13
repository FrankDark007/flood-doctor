import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Clock,
  Award,
  Star,
  MapPin,
  Droplets,
  Flame,
  Bug,
  Wind,
  Quote,
  Heart,
  Home,
  LucideIcon
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';

/**
 * LandingPageC - Editorial/Magazine Style Template
 *
 * Usage: Import and pass props for custom content
 *
 * Key patterns:
 * - Bold headline hero with texture/gradient background
 * - Bento grid layout for features
 * - Large photo-driven service cards
 * - Story-driven testimonials with photos
 * - Local neighborhood spotlight cards
 * - Warm, approachable, community-focused aesthetic
 */

interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  link: string;
  featured?: boolean;
}

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  project: string;
}

interface Neighborhood {
  name: string;
  count: string;
  link: string;
}

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface LandingPageCProps {
  // Meta
  pageTitle?: string;
  pageDescription?: string;

  // Hero
  heroEyebrow?: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  heroCTAPrimary?: { label: string; href: string };
  heroCTASecondary?: { label: string; to: string };
  heroStats?: { value: string; label: string }[];

  // Services
  servicesTitle?: string;
  services?: Service[];

  // Values
  values?: Value[];

  // Testimonials
  testimonialsTitle?: string;
  testimonialsSubtitle?: string;
  testimonials?: Testimonial[];

  // Neighborhoods
  neighborhoodsEyebrow?: string;
  neighborhoodsTitle: React.ReactNode;
  neighborhoodsSubtitle?: string;
  neighborhoods?: Neighborhood[];

  // Process
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: ProcessStep[];

  // CTA
  ctaTitle: React.ReactNode;
  ctaSubtitle?: string;
}

const LandingPageC: React.FC<LandingPageCProps> = ({
  pageTitle = 'Emergency Water Damage Restoration & Flood Cleanup',
  pageDescription = '24/7 water damage restoration serving Northern Virginia families. 60-minute response, direct insurance billing, locally owned.',
  heroEyebrow = "Northern Virginia's Trusted Restoration Company",
  heroTitle = <>When water <br /><span className="italic font-normal">threatens</span> your home, <br />we're <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">here.</span></>,
  heroSubtitle = '24/7 emergency response. 60-minute arrival. Direct insurance billing. Restoring Northern Virginia homes since 2008.',
  heroCTAPrimary = { label: 'Call (877) 497-0007', href: 'tel:8774970007' },
  heroCTASecondary = { label: 'Free Estimate', to: '/request/' },
  heroStats = [
    { value: '10k+', label: 'Projects' },
    { value: '4.9', label: 'Rating' }
  ],
  servicesTitle = 'What we do',
  services = [
    {
      title: 'Water Damage Restoration',
      subtitle: 'Emergency response',
      description: 'From burst pipes to flooding, we extract water and restore your property fast.',
      icon: Droplets,
      color: 'bg-blue-500',
      gradient: 'from-blue-600 to-cyan-500',
      link: '/services/residential/restoration-services/water-damage-restoration/',
      featured: true
    },
    {
      title: 'Fire & Smoke Damage',
      subtitle: 'Complete remediation',
      description: 'Soot removal, odor elimination, and structural restoration.',
      icon: Flame,
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-red-500',
      link: '/services/residential/fire-smoke/'
    },
    {
      title: 'Mold Remediation',
      subtitle: 'Safe removal',
      description: 'Professional mold testing, removal, and prevention.',
      icon: Bug,
      color: 'bg-emerald-500',
      gradient: 'from-emerald-500 to-green-500',
      link: '/services/residential/mold/'
    },
    {
      title: 'Storm & Wind Damage',
      subtitle: 'Weather emergencies',
      description: 'Tarping, water extraction, and storm damage repair.',
      icon: Wind,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-indigo-500',
      link: '/services/residential/storm-damage/'
    }
  ],
  values = [
    { icon: Clock, title: '60-Minute Response', description: 'We arrive fast because every minute matters.' },
    { icon: Shield, title: 'Licensed & Insured', description: 'Full coverage and certified technicians.' },
    { icon: Heart, title: 'Family Owned', description: '15 years serving our neighbors.' },
    { icon: Award, title: '500+ 5-Star Reviews', description: 'Our reputation speaks for itself.' }
  ],
  testimonialsTitle = 'Stories from our neighbors',
  testimonialsSubtitle = 'Real families. Real emergencies. Real results.',
  testimonials = [
    {
      quote: "When our basement flooded at 3 AM, Flood Doctor was there within an hour. They saved our finished basement and handled everything with our insurance.",
      author: 'The Martinez Family',
      location: 'Vienna, VA',
      project: 'Basement Flood'
    },
    {
      quote: "Professional, courteous, and incredibly thorough. They kept us updated every day and finished ahead of schedule. Can't recommend them enough.",
      author: 'David & Lisa Chen',
      location: 'Arlington, VA',
      project: 'Kitchen Water Damage'
    }
  ],
  neighborhoodsEyebrow = 'Our Community',
  neighborhoodsTitle = <>Proudly serving <br /><span className="italic font-normal">Northern Virginia</span></>,
  neighborhoodsSubtitle = "From Arlington to Ashburn, we've helped over 10,000 families restore their homes. Our crews live in the neighborhoods we serve.",
  neighborhoods = [
    { name: 'Fairfax', count: '2,400+ projects', link: '/locations/fairfax/' },
    { name: 'Arlington', count: '1,800+ projects', link: '/locations/arlington/' },
    { name: 'Alexandria', count: '1,500+ projects', link: '/locations/alexandria/' },
    { name: 'McLean', count: '1,200+ projects', link: '/locations/mclean/' },
    { name: 'Reston', count: '900+ projects', link: '/locations/reston/' },
    { name: 'Ashburn', count: '800+ projects', link: '/locations/ashburn/' }
  ],
  processTitle = 'How it works',
  processSubtitle = 'From your first call to final walkthrough, we handle everything.',
  processSteps = [
    { step: '01', title: 'Call Us', description: '24/7 emergency line. Average hold time under 30 seconds.', icon: Phone },
    { step: '02', title: 'We Arrive', description: 'Technicians on-site within 60 minutes, day or night.', icon: Clock },
    { step: '03', title: 'We Restore', description: 'Water extraction, drying, and repairs handled seamlessly.', icon: Home },
    { step: '04', title: 'We Bill Insurance', description: 'Direct billing. Zero hassle. Maximum coverage.', icon: Shield }
  ],
  ctaTitle = <>Water damage won't wait. <br /><span className="italic font-normal">Neither should you.</span></>,
  ctaSubtitle = 'Free estimates. 60-minute response. Direct insurance billing.'
}) => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const featuredService = services.find(s => s.featured) || services[0];
  const otherServices = services.filter(s => !s.featured).slice(0, 3);

  return (
    <main className="flex-grow bg-white">
      <PageMeta title={pageTitle} description={pageDescription} />

      {/* Hero - Editorial Bold */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/90" />
          {/* Texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
          {/* Gradient orbs */}
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full">
          <div className="max-w-4xl">
            {/* Editorial eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-white/40" />
              <span className="text-white/60 text-sm tracking-widest uppercase">{heroEyebrow}</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white mb-8 leading-[0.95]">
              {heroTitle}
            </h1>

            <p className="text-xl lg:text-2xl text-white/60 mb-12 max-w-2xl leading-relaxed">
              {heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={heroCTAPrimary.href}
                variant="primary"
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-100 h-16 px-10 text-lg"
              >
                <Phone size={22} className="mr-3" />
                {heroCTAPrimary.label}
              </Button>
              <Button
                to={heroCTASecondary.to}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 h-16 px-10 text-lg"
              >
                {heroCTASecondary.label}
                <ArrowRight size={20} className="ml-3" />
              </Button>
            </div>
          </div>

          {/* Floating Stats Card */}
          {heroStats.length > 0 && (
            <div className="absolute bottom-8 right-8 hidden xl:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {heroStats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-display text-4xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bento Grid - Services & Features */}
      {services.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text">
                  {servicesTitle}
                </h2>
              </div>
              <Link
                to="/services/"
                className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                All services
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Bento Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Featured Service - Large */}
              <Link
                to={featuredService.link}
                className={`md:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br ${featuredService.gradient} p-8 lg:p-12 min-h-[400px] flex flex-col justify-end`}
                onMouseEnter={() => setHoveredService(0)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-8 right-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <featuredService.icon className="text-white" size={40} />
                  </div>
                </div>
                <div className="relative">
                  <div className="text-white/60 text-sm uppercase tracking-wider mb-2">{featuredService.subtitle}</div>
                  <h3 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">
                    {featuredService.title}
                  </h3>
                  <p className="text-white/80 text-lg mb-6 max-w-lg">
                    {featuredService.description}
                  </p>
                  <div className="flex items-center gap-2 text-white font-medium">
                    Learn more
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Other Services */}
              {otherServices.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className={`group relative overflow-hidden rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[200px] bg-gradient-to-br ${service.gradient}`}
                  onMouseEnter={() => setHoveredService(idx + 1)}
                  onMouseLeave={() => setHoveredService(null)}
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

            <div className="text-center mt-8 md:hidden">
              <Button to="/services/" variant="outline">
                View All Services
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Values Strip */}
      {values.length > 0 && (
        <section className="py-12 bg-slate-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">{value.title}</h3>
                    <p className="text-sm text-muted">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials - Story Style */}
      {testimonials.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={24} />
                ))}
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text mb-4">
                {testimonialsTitle}
              </h2>
              <p className="text-lg text-muted">
                {testimonialsSubtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl p-8 lg:p-10 relative overflow-hidden"
                >
                  <Quote className="absolute top-8 right-8 text-slate-200" size={48} />
                  <div className="relative">
                    <p className="text-xl lg:text-2xl text-text leading-relaxed mb-8 font-display">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white font-semibold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-text">{testimonial.author}</div>
                        <div className="text-sm text-muted flex items-center gap-2">
                          <MapPin size={14} />
                          {testimonial.location} • {testimonial.project}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button to="/reviews/" variant="outline" size="lg">
                Read All Reviews
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Local Neighborhoods */}
      {neighborhoods.length > 0 && (
        <section className="py-20 lg:py-28 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-white/40" />
                  <span className="text-white/60 text-sm tracking-widest uppercase">{neighborhoodsEyebrow}</span>
                </div>
                <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6">
                  {neighborhoodsTitle}
                </h2>
                <p className="text-xl text-white/60 leading-relaxed mb-8">
                  {neighborhoodsSubtitle}
                </p>
                <Button to="/locations/" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Find Your Location
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {neighborhoods.map((hood, idx) => (
                  <Link
                    key={idx}
                    to={hood.link}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin size={18} className="text-primary" />
                      <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                        {hood.name}
                      </h3>
                    </div>
                    <div className="text-sm text-white/50">{hood.count}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process - Editorial Cards */}
      {processSteps.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text mb-4">
                {processTitle}
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                {processSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 h-full hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                    <div className="text-5xl font-display font-bold text-slate-200 mb-4 group-hover:text-primary/20 transition-colors">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:border-primary transition-all">
                      <item.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA - Editorial */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
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
            {ctaTitle}
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            {ctaSubtitle}
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
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPageC;
