import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Play,
  Shield,
  Clock,
  Award,
  CheckCircle2,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Zap,
  LucideIcon
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';

/**
 * LandingPageA - Apple/Google Marketing Style Template
 *
 * Usage: Import and pass props for custom content
 *
 * Key patterns:
 * - Full-width cinematic hero with dramatic typography
 * - Animated counter stats bar
 * - Feature spotlights with large visuals
 * - Testimonial carousel
 * - Trust/certification badges
 * - Premium, minimal aesthetic
 */

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  link: string;
}

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  project: string;
}

interface Feature {
  title: string;
  description: string;
  visual?: string;
}

interface Certification {
  name: string;
  abbrev: string;
}

interface LandingPageAProps {
  // Meta
  pageTitle?: string;
  pageDescription?: string;

  // Hero
  heroEyebrow?: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  heroCTAPrimary?: { label: string; href: string };
  heroCTASecondary?: { label: string; to: string };
  showVideo?: boolean;
  videoLabel?: string;

  // Stats
  stats?: Stat[];

  // Services
  servicesTitle?: string;
  servicesSubtitle?: string;
  services?: Service[];

  // Features
  featuresTitle?: string;
  featuresSubtitle?: string;
  features?: Feature[];

  // Testimonials
  testimonialsTitle?: string;
  testimonials?: Testimonial[];

  // Service Areas
  serviceAreasTitle?: string;
  serviceAreasSubtitle?: string;
  serviceAreas?: string[];

  // CTA
  ctaTitle?: string;
  ctaSubtitle?: string;

  // Certifications
  certifications?: Certification[];
}

const LandingPageA: React.FC<LandingPageAProps> = ({
  pageTitle = 'Emergency Water Damage Restoration & Flood Cleanup',
  pageDescription = '24/7 emergency water damage restoration in Northern Virginia. We arrive in 60 minutes. Licensed, insured, and trusted by 10,000+ homeowners.',
  heroEyebrow = '24/7 Emergency Response Available',
  heroTitle = <>Water damage? <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">We're on our way.</span></>,
  heroSubtitle = "Northern Virginia's most trusted restoration company. 60-minute response, direct insurance billing, zero stress.",
  heroCTAPrimary = { label: '(877) 497-0007', href: 'tel:8774970007' },
  heroCTASecondary = { label: 'Request Service', to: '/request/' },
  showVideo = true,
  videoLabel = 'Watch how we restore properties',
  stats = [
    { value: 60, suffix: ' min', label: 'Response Time' },
    { value: 10000, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 4.9, suffix: '/5', label: 'Customer Rating' }
  ],
  servicesTitle = 'Complete restoration services',
  servicesSubtitle = 'From emergency water extraction to full reconstruction, we handle every step.',
  services = [],
  featuresTitle = 'Why homeowners choose us',
  featuresSubtitle = 'Technology-driven restoration with a personal touch.',
  features = [
    { title: 'Real-Time Moisture Monitoring', description: 'Track drying progress with our digital dashboard. See moisture levels, equipment status, and estimated completion time—updated daily.' },
    { title: 'Direct Insurance Billing', description: 'We work with all major insurance carriers and handle the paperwork. You focus on your family—we handle the claim.' },
    { title: 'Certified Technicians', description: 'Every technician is IICRC certified, background-checked, and trained in the latest restoration science. Your property is in expert hands.' }
  ],
  testimonialsTitle = 'Trusted by 10,000+ homeowners',
  testimonials = [
    { quote: "Flood Doctor arrived within 45 minutes of my call at 2 AM. They saved our hardwood floors and worked directly with our insurance. Couldn't have asked for better service.", author: 'Jennifer M.', location: 'Arlington, VA', rating: 5, project: 'Burst Pipe Restoration' },
    { quote: "After our basement flooded, I was overwhelmed. The Flood Doctor team took over completely—from water extraction to dealing with our insurance adjuster. True professionals.", author: 'Michael R.', location: 'Fairfax, VA', rating: 5, project: 'Basement Flood Recovery' },
    { quote: "The daily updates and moisture readings gave us peace of mind throughout the process. We knew exactly what was happening and when we'd be back to normal.", author: 'Sarah K.', location: 'McLean, VA', rating: 5, project: 'Kitchen Water Damage' }
  ],
  serviceAreasTitle = 'Serving Northern Virginia & Washington DC',
  serviceAreasSubtitle = 'Our fleet of response vehicles covers all of Northern Virginia with 60-minute response times, 24 hours a day.',
  serviceAreas = ['Fairfax', 'Arlington', 'Alexandria', 'McLean', 'Reston', 'Ashburn', 'Loudoun', 'DC Metro'],
  ctaTitle = 'Ready to restore your property?',
  ctaSubtitle = 'Get a free assessment and see why thousands of Northern Virginia homeowners trust Flood Doctor.',
  certifications = [
    { name: 'IICRC Certified', abbrev: 'IICRC' },
    { name: 'BBB A+ Rated', abbrev: 'BBB' },
    { name: 'EPA Lead-Safe', abbrev: 'EPA' },
    { name: 'Licensed & Insured', abbrev: 'L&I' }
  ]
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCountersVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  return (
    <main className="flex-grow bg-white">
      <PageMeta title={pageTitle} description={pageDescription} />

      {/* Hero - Cinematic Full-Width */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
          </div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {heroEyebrow}
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 leading-[1.1]">
                {heroTitle}
              </h1>

              <p className="text-xl lg:text-2xl text-white/60 mb-10 max-w-xl leading-relaxed">
                {heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  href={heroCTAPrimary.href}
                  variant="primary"
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-gray-100 text-lg h-14 px-8"
                >
                  <Phone size={20} className="mr-2" />
                  {heroCTAPrimary.label}
                </Button>
                <Button
                  to={heroCTASecondary.to}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 text-lg h-14 px-8"
                >
                  {heroCTASecondary.label}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>

              {certifications.length > 0 && (
                <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-2">
                        <span className="text-xs font-bold text-white/80">{cert.abbrev}</span>
                      </div>
                      <div className="text-xs text-white/40">{cert.name}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {showVideo && (
              <div className="relative hidden lg:block">
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden shadow-2xl border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform group">
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                        <Play size={32} className="text-slate-900 ml-1 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between">
                    <span className="text-white text-sm">{videoLabel}</span>
                    <span className="text-white/60 text-xs">2:30</span>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="text-emerald-600" size={28} />
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-text">10,000+</div>
                      <div className="text-sm text-muted">Properties Restored</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {stats.length > 0 && (
        <section className="relative -mt-8 z-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">
                      {countersVisible ? stat.value : 0}{stat.suffix}
                    </div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      {services.length > 0 && (
        <section className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap size={16} />
                Our Services
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text mb-4">
                {servicesTitle}
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                {servicesSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="group relative overflow-hidden rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-slate-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="text-white" size={32} />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    Learn more
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button to="/services/" variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {features.length > 0 && (
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text mb-4">
                {featuresTitle}
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                {featuresSubtitle}
              </p>
            </div>

            <div className="space-y-24">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <h3 className="font-display text-2xl lg:text-4xl font-semibold text-text mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted leading-relaxed mb-8">
                      {feature.description}
                    </p>
                    <Button to="/resources/technology/" variant="outline">
                      Learn More
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={28} />
                ))}
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text">
                {testimonialsTitle}
              </h2>
            </div>

            <div className="relative">
              <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
                <blockquote className="text-xl lg:text-2xl text-text leading-relaxed mb-8 font-display">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-text">{testimonials[activeTestimonial].author}</div>
                    <div className="text-sm text-muted flex items-center gap-2">
                      <MapPin size={14} />
                      {testimonials[activeTestimonial].location} • {testimonials[activeTestimonial].project}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === activeTestimonial ? 'w-8 bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-10">
              <Button to="/reviews/" variant="outline">
                Read All Reviews
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Service Areas */}
      {serviceAreas.length > 0 && (
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <MapPin size={16} />
                  Service Area
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                  {serviceAreasTitle}
                </h2>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  {serviceAreasSubtitle}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {serviceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-text">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      {area}
                    </div>
                  ))}
                </div>

                <Button to="/locations/" variant="primary">
                  Find Your Location
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>

              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-emerald-50 shadow-lg" />
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6">
            {ctaTitle}
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            {ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="tel:8774970007"
              variant="secondary"
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 text-lg h-14 px-8"
            >
              <Phone size={20} className="mr-2" />
              (877) 497-0007
            </Button>
            <Button
              to="/request/"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg h-14 px-8"
            >
              Schedule Free Estimate
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPageA;
