import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  ChevronDown,
  Zap,
  AlertTriangle,
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
 * - FAQ accordion
 * - Local expertise callout
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

interface FAQItem {
  question: string;
  answer: string;
}

interface LocalExpertise {
  headline: string;
  paragraph: string;
  commonIssues: string[];
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
  heroImage?: string;

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
  serviceAreasCount?: number;

  // CTA
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaPhone?: { label: string; href: string };

  // Certifications
  certifications?: Certification[];

  // FAQ (T7)
  faq?: FAQItem[];

  // Local Expertise (T8)
  localExpertise?: LocalExpertise;
}

// T9: Animated counter hook using requestAnimationFrame + IntersectionObserver
function useCountUp(end: number, duration: number = 1800, visible: boolean = false): number {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!visible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const isDecimal = end % 1 !== 0;

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [visible, end, duration]);

  return count;
}

// Single stat counter component
const AnimatedStat: React.FC<{ stat: Stat; visible: boolean }> = ({ stat, visible }) => {
  const count = useCountUp(stat.value, 1800, visible);
  return (
    <div className="text-center">
      <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-muted">{stat.label}</div>
    </div>
  );
};

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
  heroImage,
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
  serviceAreasCount,
  ctaTitle = 'Ready to restore your property?',
  ctaSubtitle = 'Get a free assessment and see why thousands of Northern Virginia homeowners trust Flood Doctor.',
  ctaPhone = { label: '(877) 497-0007', href: 'tel:8774970007' },
  certifications = [
    { name: 'IICRC Certified', abbrev: 'IICRC' },
    { name: 'BBB A+ Rated', abbrev: 'BBB' },
    { name: 'EPA Lead-Safe', abbrev: 'EPA' },
    { name: 'Licensed & Insured', abbrev: 'L&I' }
  ],
  faq = [],
  localExpertise,
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // T9: IntersectionObserver for stats counter
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
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
              {/* T4: Urgency eyebrow */}
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

              {/* T1: Fixed hero phone CTA — force dark text on white bg with !important overrides */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={heroCTAPrimary.href}
                  className="inline-flex items-center justify-center font-display font-medium text-[16px] h-14 px-8 rounded-full bg-white text-slate-900 hover:bg-gray-100 shadow-lg shadow-white/20 transition-all duration-200"
                >
                  <Phone size={20} className="mr-2" />
                  {heroCTAPrimary.label}
                </a>
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

            {/* T3: Hero image replaces video when showVideo=false */}
            {showVideo ? (
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
            ) : heroImage ? (
              <div className="relative hidden lg:block">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={heroImage}
                    alt="Professional water damage restoration"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
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
            ) : null}
          </div>
        </div>
      </section>

      {/* T9: Stats Bar with real count-up animation */}
      {stats.length > 0 && (
        <section className="relative -mt-8 z-10" ref={statsRef}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <AnimatedStat key={idx} stat={stat} visible={statsVisible} />
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

      {/* T5: Features with rendered images */}
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
                    {feature.visual ? (
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                        <img
                          src={feature.visual}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-lg" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* T8: Local Expertise Callout */}
      {localExpertise && (
        <section className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
                <Shield size={16} />
                Local Expertise
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text mb-4">
                {localExpertise.headline}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-muted leading-relaxed">
                {localExpertise.paragraph}
              </p>
            </div>

            {localExpertise.commonIssues.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {localExpertise.commonIssues.map((issue, idx) => (
                  <div key={idx} className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-gray-100">
                    <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-text leading-relaxed">{issue}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className={`py-24 lg:py-32 ${localExpertise ? 'bg-slate-50' : ''}`}>
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
              <div className={`${localExpertise ? 'bg-white' : 'bg-slate-50'} rounded-3xl p-8 lg:p-12`}>
                <blockquote className="text-xl lg:text-2xl text-text leading-relaxed mb-8 font-display">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-text">{testimonials[activeTestimonial].author}</div>
                    <div className="text-sm text-muted flex items-center gap-2">
                      <MapPin size={14} />
                      {testimonials[activeTestimonial].location} &bull; {testimonials[activeTestimonial].project}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      aria-label="Next testimonial"
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
                    aria-label={`Go to testimonial ${idx + 1}`}
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

      {/* T6: Service Areas with neighborhood count + grid cards */}
      {serviceAreas.length > 0 && (
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MapPin size={16} />
                {serviceAreasCount ? `${serviceAreasCount} Neighborhoods Covered` : 'Service Area'}
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                {serviceAreasTitle}
              </h2>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-8">
                {serviceAreasSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-text">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button to="/locations/" variant="primary">
                Find Your Location
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* T7: FAQ Accordion */}
      {faq.length > 0 && (
        <section className="py-24 lg:py-32">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faq.map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                    aria-expanded={openFAQ === idx}
                  >
                    <span className="font-display font-medium text-text pr-4">{item.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-muted shrink-0 transition-transform duration-200 ${openFAQ === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFAQ === idx && (
                    <div className="px-5 pb-5 text-muted leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* T2: Fixed bottom CTA phone button — force dark text on white bg */}
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
            <a
              href={ctaPhone.href}
              className="inline-flex items-center justify-center font-display font-medium text-[16px] h-14 px-8 rounded-full bg-white text-slate-900 hover:bg-gray-100 shadow-lg shadow-white/20 transition-all duration-200"
            >
              <Phone size={20} className="mr-2" />
              {ctaPhone.label}
            </a>
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
