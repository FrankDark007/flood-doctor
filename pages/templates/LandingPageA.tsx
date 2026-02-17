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
  User,
  Camera,
  LucideIcon
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';

/**
 * LandingPageA — Premium 2026 Landing Page Template
 *
 * Design language: Apple + Stripe + Linear
 * - Cinematic hero with real photography
 * - Project manager trust card
 * - Before/after gallery with comparison slider
 * - Full-bleed photo sections
 * - Asymmetric testimonial grid
 * - FAQ with sidebar proof card
 * - Animated stats with glassmorphism
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
  image?: string;
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

interface BeforeAfterItem {
  before: string;
  after: string;
  label: string;
}

interface ManagerCard {
  name: string;
  title: string;
  image: string;
  phone: { label: string; href: string };
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

  // Manager trust card (floats in hero)
  managerCard?: ManagerCard;

  // Stats
  stats?: Stat[];

  // Services
  servicesTitle?: string;
  servicesSubtitle?: string;
  services?: Service[];

  // Before/After Gallery
  beforeAfterTitle?: string;
  beforeAfterSubtitle?: string;
  beforeAfterItems?: BeforeAfterItem[];

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
  ctaBackgroundImage?: string;
  ctaDispatchText?: string;

  // Certifications
  certifications?: Certification[];

  // FAQ
  faq?: FAQItem[];

  // FAQ sidebar card
  faqSidebarCard?: ManagerCard;

  // Local Expertise
  localExpertise?: LocalExpertise;
  localExpertiseImage?: string;
}

// ── Animated counter hook ──────────────────────────────────────
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
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [visible, end, duration]);

  return count;
}

// ── Animated stat pill ─────────────────────────────────────────
const AnimatedStat: React.FC<{ stat: Stat; visible: boolean }> = ({ stat, visible }) => {
  const count = useCountUp(stat.value, 1800, visible);
  return (
    <div className="text-center px-2">
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 tabular-nums">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted uppercase tracking-wider font-medium">{stat.label}</div>
    </div>
  );
};

// ── Before/After slider component ──────────────────────────────
const BeforeAfterSlider: React.FC<{ item: BeforeAfterItem }> = ({ item }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
    const onTouchMove = (e: TouchEvent) => { if (isDragging.current) handleMove(e.touches[0].clientX); };
    const onUp = () => { isDragging.current = false; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [handleMove]);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-lg"
        onMouseDown={(e) => { isDragging.current = true; handleMove(e.clientX); }}
        onTouchStart={(e) => { isDragging.current = true; handleMove(e.touches[0].clientX); }}
      >
        {/* After (full width behind) */}
        <img src={item.after} alt="After restoration" className="absolute inset-0 w-full h-full object-cover" />

        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={item.before} alt="Before restoration" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }} />
        </div>

        {/* Divider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
            <div className="flex items-center gap-0.5">
              <ChevronLeft size={14} className="text-slate-700" />
              <ChevronRight size={14} className="text-slate-700" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium z-20">Before</div>
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-medium z-20">After</div>
      </div>
      <p className="text-sm text-muted mt-3 text-center font-medium">{item.label}</p>
    </div>
  );
};

// ── Main component ─────────────────────────────────────────────
const LandingPageA: React.FC<LandingPageAProps> = ({
  pageTitle = 'Emergency Water Damage Restoration & Flood Cleanup',
  pageDescription = '24/7 emergency water damage restoration in Northern Virginia. We arrive in 60 minutes. Licensed, insured, and trusted by 10,000+ homeowners.',
  heroEyebrow = '24/7 Emergency Response Available',
  heroTitle = <>Water damage? <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">We&rsquo;re on our way.</span></>,
  heroSubtitle = "Northern Virginia's most trusted restoration company. 60-minute response, direct insurance billing, zero stress.",
  heroCTAPrimary = { label: '(877) 497-0007', href: 'tel:8774970007' },
  heroCTASecondary = { label: 'Request Service', to: '/request/' },
  showVideo = true,
  videoLabel = 'Watch how we restore properties',
  heroImage,
  managerCard,
  stats = [
    { value: 60, suffix: ' min', label: 'Response Time' },
    { value: 10000, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 4.9, suffix: '/5', label: 'Customer Rating' }
  ],
  servicesTitle = 'Complete restoration services',
  servicesSubtitle = 'From emergency water extraction to full reconstruction, we handle every step.',
  services = [],
  beforeAfterTitle,
  beforeAfterSubtitle,
  beforeAfterItems,
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
  ctaBackgroundImage,
  ctaDispatchText = 'Crews available now \u2014 dispatching to your area',
  certifications = [
    { name: 'IICRC Certified', abbrev: 'IICRC' },
    { name: 'BBB A+ Rated', abbrev: 'BBB' },
    { name: 'EPA Lead-Safe', abbrev: 'EPA' },
    { name: 'Licensed & Insured', abbrev: 'L&I' }
  ],
  faq = [],
  faqSidebarCard,
  localExpertise,
  localExpertiseImage,
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // IntersectionObserver for stats counter
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

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  return (
    <main className="flex-grow bg-white">
      <PageMeta title={pageTitle} description={pageDescription} />

      {/* ═══════════════ HERO — Cinematic Split with Photo ═══════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background: dark gradient + optional photo */}
        <div className="absolute inset-0">
          {heroImage && !showVideo ? (
            <>
              <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          )}
          {/* Subtle grid overlay */}
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
          <div className="max-w-2xl">
            {/* Urgency eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {heroEyebrow}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 leading-[1.08] tracking-tight">
              {heroTitle}
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
              {heroSubtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={heroCTAPrimary.href}
                className="inline-flex items-center justify-center font-display font-semibold text-[16px] h-14 px-8 rounded-full bg-white text-slate-900 hover:bg-gray-100 shadow-lg shadow-white/20 transition-all duration-200 hover:scale-[1.02]"
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

            {/* Manager trust card */}
            {managerCard && (
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 max-w-md">
                <img
                  src={managerCard.image}
                  alt={managerCard.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-white text-sm">{managerCard.name}</div>
                  <div className="text-xs text-white/50">{managerCard.title}</div>
                </div>
                <a
                  href={managerCard.phone.href}
                  className="shrink-0 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center hover:bg-emerald-400 transition-colors"
                >
                  <Phone size={16} className="text-white" />
                </a>
              </div>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <div className="flex items-center gap-6 pt-8 mt-8 border-t border-white/10">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-1.5 backdrop-blur-sm">
                      <span className="text-xs font-bold text-white/80">{cert.abbrev}</span>
                    </div>
                    <div className="text-[10px] text-white/40 leading-tight">{cert.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS BAR — Glassmorphism ═══════════════ */}
      {stats.length > 0 && (
        <section className="relative -mt-10 z-10" ref={statsRef}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/5 border border-gray-100/80 p-6 sm:p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-x-0 lg:divide-x divide-gray-100">
                {stats.map((stat, idx) => (
                  <AnimatedStat key={idx} stat={stat} visible={statsVisible} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ SERVICES GRID — with hover photos ═══════════════ */}
      {services.length > 0 && (
        <section className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
                >
                  {/* Photo reveal on hover */}
                  {service.image && (
                    <div className="h-40 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="p-6 lg:p-7">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg shadow-primary/10`}>
                      <service.icon className="text-white" size={24} />
                    </div>

                    <h3 className="font-display text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-primary text-sm font-medium">
                      Learn more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ BEFORE/AFTER GALLERY ═══════════════ */}
      {beforeAfterItems && beforeAfterItems.length > 0 && (
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
                <Camera size={16} />
                Real Results
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text mb-4">
                {beforeAfterTitle || 'See the transformation'}
              </h2>
              {beforeAfterSubtitle && (
                <p className="text-lg text-muted max-w-2xl mx-auto">{beforeAfterSubtitle}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {beforeAfterItems.map((item, idx) => (
                <BeforeAfterSlider key={idx} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ FEATURES — Alternating with photos ═══════════════ */}
      {features.length > 0 && (
        <section className={`py-24 lg:py-32 ${!beforeAfterItems?.length ? 'bg-slate-50' : ''}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text mb-4">
                {featuresTitle}
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                {featuresSubtitle}
              </p>
            </div>

            <div className="space-y-20 lg:space-y-32">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? '' : ''}`}
                >
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-text mb-5">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    {feature.visual ? (
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-black/10 ring-1 ring-black/5">
                        <img
                          src={feature.visual}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-lg" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ LOCAL EXPERTISE — Full-bleed photo ═══════════════ */}
      {localExpertise && (
        <section className="relative py-24 lg:py-32 overflow-hidden">
          {/* Background image */}
          {localExpertiseImage && (
            <>
              <img src={localExpertiseImage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
            </>
          )}
          {!localExpertiseImage && <div className="absolute inset-0 bg-slate-900" />}

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm border border-white/10">
                <Shield size={16} />
                Local Expertise
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-semibold text-white mb-6">
                {localExpertise.headline}
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-10">
                {localExpertise.paragraph}
              </p>

              {localExpertise.commonIssues.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {localExpertise.commonIssues.map((issue, idx) => (
                    <div key={idx} className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80 leading-relaxed">{issue}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ TESTIMONIALS — Asymmetric Grid ═══════════════ */}
      {testimonials.length > 0 && (
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={24} />
                ))}
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-2">
                {testimonialsTitle}
              </h2>
              <p className="text-muted">Verified reviews from McLean homeowners</p>
            </div>

            {/* Card grid — first card is featured/large */}
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                    idx === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="text-amber-400 fill-amber-400" size={16} />
                    ))}
                  </div>
                  <blockquote className={`text-text leading-relaxed mb-6 ${idx === 0 ? 'text-lg lg:text-xl' : 'text-base'}`}>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="font-semibold text-text text-sm">{t.author}</div>
                      <div className="text-xs text-muted flex items-center gap-1.5">
                        <MapPin size={12} />
                        {t.location}
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-100 text-xs text-muted font-medium">
                      {t.project}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ SERVICE AREAS ═══════════════ */}
      {serviceAreas.length > 0 && (
        <section className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
                <MapPin size={16} />
                {serviceAreasCount ? `${serviceAreasCount} Neighborhoods Covered` : 'Service Area'}
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                {serviceAreasTitle}
              </h2>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
                {serviceAreasSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-200">
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

      {/* ═══════════════ FAQ — Sidebar layout with proof card ═══════════════ */}
      {faq.length > 0 && (
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* FAQ accordion — 2/3 width */}
              <div className="lg:col-span-2 space-y-3">
                {faq.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition-colors"
                      aria-expanded={openFAQ === idx}
                    >
                      <span className="font-display font-medium text-text pr-4">{item.question}</span>
                      <ChevronDown
                        size={18}
                        className={`text-muted shrink-0 transition-transform duration-200 ${openFAQ === idx ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openFAQ === idx && (
                      <div className="px-5 pb-5 text-muted leading-relaxed text-[15px]">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Sidebar proof card — 1/3 width */}
              <div className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  {faqSidebarCard && (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                      <div className="flex items-center gap-4 mb-5">
                        <img
                          src={faqSidebarCard.image}
                          alt={faqSidebarCard.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-display font-semibold text-text">{faqSidebarCard.name}</div>
                          <div className="text-sm text-muted">{faqSidebarCard.title}</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted leading-relaxed mb-5">
                        Have questions? I&rsquo;m here to help with your restoration project.
                      </p>
                      <a
                        href={faqSidebarCard.phone.href}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors"
                      >
                        <Phone size={16} />
                        {faqSidebarCard.phone.label}
                      </a>
                    </div>
                  )}

                  {/* Trust signals */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-amber-400 fill-amber-400" size={16} />
                      ))}
                    </div>
                    <div className="font-display font-semibold text-text mb-1">4.9 out of 5</div>
                    <div className="text-sm text-muted">Based on 200+ verified reviews</div>
                  </div>

                  {certifications.length > 0 && (
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                      <div className="text-sm font-medium text-text mb-3">Certifications</div>
                      <div className="grid grid-cols-2 gap-2">
                        {certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-muted">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                            {cert.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ BOTTOM CTA — with background photo ═══════════════ */}
      <section className="relative py-24 lg:py-32 text-white overflow-hidden">
        {ctaBackgroundImage ? (
          <>
            <img src={ctaBackgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-slate-900/70" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Dispatch pulse */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {ctaDispatchText}
          </div>

          <h2 className="font-display text-3xl lg:text-5xl font-semibold text-white mb-6">
            {ctaTitle}
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            {ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={ctaPhone.href}
              className="inline-flex items-center justify-center font-display font-semibold text-[16px] h-14 px-10 rounded-full bg-white text-slate-900 hover:bg-gray-100 shadow-lg shadow-white/20 transition-all duration-200 hover:scale-[1.02]"
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
