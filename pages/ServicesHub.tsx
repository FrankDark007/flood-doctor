import React, { useState, useMemo, memo } from 'react';
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
  Zap,
  Activity,
  Thermometer,
  FileSearch,
  Hotel,
  GraduationCap,
  Factory,
  Stethoscope
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import { generateBreadcrumbSchema, combineSchemas, generateLocalBusinessSchema } from '../utils/schema';
import Button from '../components/ui/Button';

/**
 * ServicesHub - Editorial/Magazine Style
 * Now audience-aware: shows different content for RESIDENTIAL vs COMMERCIAL
 */

// SVG Pattern Components for service card backgrounds - memoized to prevent re-renders
const WaterPatternSVG = memo(() => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0369a1" />
        <stop offset="50%" stopColor="#0891b2" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <pattern id="waterWaves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
        <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
      </pattern>
      <filter id="waterGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#waterGrad)"/>
    <rect width="100%" height="100%" fill="url(#waterWaves)"/>
    <circle cx="80" cy="80" r="40" fill="rgba(255,255,255,0.08)" filter="url(#waterGlow)"/>
    <circle cx="320" cy="150" r="60" fill="rgba(255,255,255,0.06)"/>
    <circle cx="150" cy="300" r="80" fill="rgba(255,255,255,0.05)"/>
    <circle cx="350" cy="350" r="30" fill="rgba(255,255,255,0.1)"/>
    <path d="M0 200 Q100 180 200 200 T400 200" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3"/>
    <path d="M0 250 Q100 230 200 250 T400 250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
    <path d="M0 300 Q100 280 200 300 T400 300" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2"/>
  </svg>
));
WaterPatternSVG.displayName = 'WaterPatternSVG';

const FirePatternSVG = memo(() => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="fireGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#dc2626" />
        <stop offset="40%" stopColor="#ea580c" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <filter id="fireGlow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#fireGrad)"/>
    <ellipse cx="100" cy="350" rx="60" ry="100" fill="rgba(255,255,255,0.08)" filter="url(#fireGlow)"/>
    <ellipse cx="200" cy="380" rx="80" ry="120" fill="rgba(255,255,255,0.06)"/>
    <ellipse cx="300" cy="360" rx="50" ry="90" fill="rgba(255,255,255,0.07)"/>
    <circle cx="50" cy="100" r="4" fill="rgba(255,255,255,0.3)"/>
    <circle cx="150" cy="60" r="3" fill="rgba(255,255,255,0.25)"/>
    <circle cx="280" cy="80" r="5" fill="rgba(255,255,255,0.2)"/>
    <circle cx="350" cy="120" r="3" fill="rgba(255,255,255,0.3)"/>
    <circle cx="120" cy="150" r="2" fill="rgba(255,255,255,0.35)"/>
    <path d="M0 150 Q50 140 100 150 T200 150 T300 150 T400 150" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
    <path d="M0 100 Q50 90 100 100 T200 100 T300 100 T400 100" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
  </svg>
));
FirePatternSVG.displayName = 'FirePatternSVG';

const StormPatternSVG = memo(() => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="stormGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4c1d95" />
        <stop offset="50%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#818cf8" />
      </linearGradient>
      <filter id="stormGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#stormGrad)"/>
    <ellipse cx="80" cy="80" rx="70" ry="40" fill="rgba(255,255,255,0.08)"/>
    <ellipse cx="140" cy="70" rx="50" ry="35" fill="rgba(255,255,255,0.06)"/>
    <ellipse cx="320" cy="100" rx="80" ry="45" fill="rgba(255,255,255,0.07)"/>
    <path d="M200 50 L180 150 L220 150 L190 280" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" filter="url(#stormGlow)"/>
    <path d="M280 80 L265 160 L295 160 L270 250" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3"/>
    <line x1="50" y1="200" x2="40" y2="240" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
    <line x1="100" y1="180" x2="90" y2="220" stroke="rgba(255,255,255,0.12)" strokeWidth="2"/>
    <line x1="150" y1="220" x2="140" y2="260" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
    <line x1="320" y1="200" x2="310" y2="240" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
    <line x1="360" y1="180" x2="350" y2="220" stroke="rgba(255,255,255,0.12)" strokeWidth="2"/>
    <path d="M0 300 Q100 290 150 300 Q200 310 250 300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
    <path d="M100 340 Q150 330 200 340 Q250 350 300 340" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
  </svg>
));
StormPatternSVG.displayName = 'StormPatternSVG';

// Commercial-specific pattern
const CommercialPatternSVG = memo(() => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="comGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a5f" />
        <stop offset="50%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#comGrad)"/>
    <rect x="50" y="150" width="80" height="200" fill="rgba(255,255,255,0.08)" rx="4"/>
    <rect x="160" y="100" width="80" height="250" fill="rgba(255,255,255,0.06)" rx="4"/>
    <rect x="270" y="180" width="80" height="170" fill="rgba(255,255,255,0.07)" rx="4"/>
    <line x1="0" y1="350" x2="400" y2="350" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
  </svg>
));
CommercialPatternSVG.displayName = 'CommercialPatternSVG';

interface ServicesHubProps {
  title?: string;
  subtitle?: string;
  filterAudience?: 'RESIDENTIAL' | 'COMMERCIAL';
}

const ServicesHub: React.FC<ServicesHubProps> = ({ title, subtitle, filterAudience }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const isCommercial = filterAudience === 'COMMERCIAL';

  // RESIDENTIAL Services
  const residentialRestoration = useMemo(() => [
    {
      id: 'water',
      title: 'Water Damage',
      subtitle: 'Emergency extraction & drying',
      description: 'Every minute counts when water invades your home. Our crews arrive within 60 minutes with industrial extractors and drying equipment.',
      icon: Droplets,
      link: '/services/residential/restoration-services/water-damage/',
      featured: true,
      PatternComponent: WaterPatternSVG
    },
    {
      id: 'fire',
      title: 'Fire & Smoke',
      subtitle: 'Complete remediation',
      description: 'From soot removal to odor elimination, we restore properties after fire damage.',
      icon: Flame,
      link: '/services/residential/cleanup-services/fire-smoke/',
      PatternComponent: FirePatternSVG
    },
    {
      id: 'storm',
      title: 'Storm Damage',
      subtitle: '24/7 emergency response',
      description: 'Immediate response for wind, hail, and weather-related property damage.',
      icon: Wind,
      link: '/services/residential/restoration-services/storm-damage/',
      PatternComponent: StormPatternSVG
    }
  ], []);

  const residentialRemediation = useMemo(() => [
    { id: 'mold', title: 'Mold Remediation', description: 'Professional testing, containment, and safe removal for healthy indoor air.', icon: Bug, link: '/services/residential/cleanup-services/mold/' },
    { id: 'sewage', title: 'Sewage Cleanup', description: 'Category 3 black water cleanup with full sanitization and decontamination.', icon: Waves, link: '/services/residential/cleanup-services/sewage/' },
    { id: 'biohazard', title: 'Biohazard', description: 'Safe handling and disposal of biohazardous materials.', icon: Shield, link: '/services/residential/cleanup-services/biohazard/' }
  ], []);

  const residentialSpecialty = useMemo(() => [
    { id: 'content', title: 'Content Restoration', description: 'Document drying, electronics recovery, and personal property restoration.', icon: Box, link: '/services/residential/specialty-services/content/' },
    { id: 'odor', title: 'Odor Removal', description: 'Hydroxyl, ozone, and thermal fogging for persistent odors.', icon: Sparkles, link: '/services/residential/cleanup-services/odor-removal/' },
    { id: 'reconstruction', title: 'Reconstruction', description: 'From drywall to complete rebuilds—we finish what we start.', icon: Hammer, link: '/services/residential/specialty-services/reconstruction/' }
  ], []);

  // COMMERCIAL Services
  const commercialRestoration = useMemo(() => [
    {
      id: 'com-water',
      title: 'Commercial Water Damage',
      subtitle: 'Minimize business interruption',
      description: 'Fast water restoration for businesses. We scale to handle any size loss, from office floods to retail leaks.',
      icon: Droplets,
      link: '/services/commercial/restoration-services/commercial-water-damage/',
      featured: true,
      PatternComponent: WaterPatternSVG
    },
    {
      id: 'com-flood',
      title: 'Commercial Flood Cleanup',
      subtitle: 'Industrial-scale extraction',
      description: 'Large-scale flood extraction for warehouses, offices, and industrial facilities.',
      icon: Waves,
      link: '/services/commercial/restoration-services/commercial-flood-cleanup/',
      PatternComponent: CommercialPatternSVG
    },
    {
      id: 'com-large',
      title: 'Large Loss Restoration',
      subtitle: 'Catastrophic event recovery',
      description: 'Scalable disaster recovery for hospitals, universities, and high-rises.',
      icon: Building2,
      link: '/services/commercial/restoration-services/large-loss-restoration/',
      PatternComponent: StormPatternSVG
    }
  ], []);

  const commercialCleanup = useMemo(() => [
    { id: 'com-sewage', title: 'Commercial Sewage', description: 'Category 3 cleanup with full sanitization for business facilities.', icon: Waves, link: '/services/commercial/cleanup-services/commercial-sewage-cleanup/' },
    { id: 'com-mold', title: 'Commercial Mold', description: 'Large-scale mold remediation with minimal business disruption.', icon: Bug, link: '/services/commercial/cleanup-services/commercial-mold-remediation/' },
    { id: 'com-fire', title: 'Commercial Fire & Smoke', description: 'Complete fire damage restoration for commercial properties.', icon: Flame, link: '/services/commercial/cleanup-services/commercial-fire-smoke-cleanup/' }
  ], []);

  const commercialSpecialty = useMemo(() => [
    { id: 'com-health', title: 'Healthcare Facilities', description: 'HIPAA-compliant, ICRA-certified restoration for medical facilities.', icon: Stethoscope, link: '/services/commercial/specialty-services/healthcare-facilities/' },
    { id: 'com-hospitality', title: 'Hospitality & Multi-Family', description: 'Hotels, apartments, and restaurants with guest-focused timelines.', icon: Hotel, link: '/services/commercial/specialty-services/hospitality-multifamily/' },
    { id: 'com-edu', title: 'Municipal & Education', description: 'Schools, universities, and government buildings restoration.', icon: GraduationCap, link: '/services/commercial/specialty-services/municipal-education/' },
    { id: 'com-ind', title: 'Industrial Facilities', description: 'Factories, warehouses, and manufacturing plant restoration.', icon: Factory, link: '/services/commercial/specialty-services/industrial-facilities/' }
  ], []);

  const commercialTechnical = useMemo(() => [
    { id: 'com-moisture', title: 'Moisture Mapping', description: 'Thermal imaging and psychrometric analysis for hidden moisture.', icon: Thermometer, link: '/services/commercial/technical-services/moisture-mapping-consulting/' },
    { id: 'com-iaq', title: 'Indoor Air Quality', description: 'Spore testing, air sampling, and IAQ assessments.', icon: Activity, link: '/services/commercial/technical-services/indoor-air-quality/' },
    { id: 'com-env', title: 'Environmental Testing', description: 'Asbestos, lead, and hazmat testing and consulting.', icon: FileSearch, link: '/services/commercial/technical-services/environmental-testing/' }
  ], []);

  // Select data based on audience
  const restorationServices = isCommercial ? commercialRestoration : residentialRestoration;
  const cleanupServices = isCommercial ? commercialCleanup : residentialRemediation;
  const specialtyServices = isCommercial ? commercialSpecialty : residentialSpecialty;

  const testimonial = useMemo(() => isCommercial ? {
    quote: "After a sprinkler malfunction flooded three floors, Flood Doctor had crews on-site within an hour. They worked around the clock so we could reopen in just 4 days.",
    author: 'Michael Chen',
    location: 'Arlington, VA',
    service: 'Commercial Water Damage'
  } : {
    quote: "The Flood Doctor team arrived within 45 minutes and immediately started extracting water. They saved our hardwood floors and handled our insurance claim from start to finish.",
    author: 'Jennifer Martinez',
    location: 'Vienna, VA',
    service: 'Water Damage Restoration'
  }, [isCommercial]);

  const heroContent = useMemo(() => isCommercial ? {
    label: 'Enterprise Restoration Services',
    title: <>Enterprise-grade<br /><span className="italic font-normal">restoration</span> for<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">your business.</span></>,
    description: 'Minimize downtime with rapid commercial restoration. HIPAA-compliant, OSHA-certified, and equipped for facilities of any size.'
  } : {
    label: 'Complete Restoration Services',
    title: <>When disaster strikes,<br /><span className="italic font-normal">we restore</span> what<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">matters most.</span></>,
    description: 'Water, fire, mold, or storm—our certified technicians are ready 24/7 to restore your property and your peace of mind.'
  }, [isCommercial]);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={title || (isCommercial ? "Commercial Restoration Services | Business Water & Fire Damage" : "Residential Services | Water, Fire & Mold Restoration")}
        description={subtitle || (isCommercial ? "Enterprise-grade commercial restoration services. Minimize business interruption with 24/7 emergency response in Northern Virginia." : "Professional restoration services for water damage, fire damage, mold remediation, and more. 24/7 emergency response in Northern Virginia.")}
        schema={combineSchemas(
          generateBreadcrumbSchema([
            { label: 'Services', path: '/services/' },
            { label: isCommercial ? 'Commercial' : 'Residential', path: isCommercial ? '/services/commercial/' : '/services/residential/' }
          ]),
          generateLocalBusinessSchema()
        )}
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
              <span className="text-white/60 text-sm tracking-widest uppercase">{heroContent.label}</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white mb-8 leading-[0.95]">
              {heroContent.title}
            </h1>

            <p className="text-xl lg:text-2xl text-white/60 mb-12 max-w-2xl leading-relaxed">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:8774970007"
                className="inline-flex items-center justify-center font-display font-medium bg-white text-slate-900 hover:bg-gray-100 h-16 px-10 text-lg rounded-full transition-all"
              >
                <Phone size={22} className="mr-3" />
                Emergency Line
              </a>
              <Link
                to="/request/"
                className="inline-flex items-center justify-center font-display font-medium border border-white/30 text-white hover:bg-white/10 h-16 px-10 text-lg rounded-full transition-all"
              >
                {isCommercial ? 'Request Quote' : 'Schedule Assessment'}
                <ArrowRight size={20} className="ml-3" />
              </Link>
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
              <p className="text-lg text-muted mt-2">
                {isCommercial ? 'Rapid response to minimize business interruption' : 'Emergency response when every minute matters'}
              </p>
            </div>
            <Link
              to={isCommercial ? '/services/commercial/restoration-services/' : '/services/residential/restoration-services/'}
              className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View all
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured Large Card */}
            {(() => {
              const featuredService = restorationServices[0];
              const FeaturedIcon = featuredService.icon;
              const FeaturedPattern = featuredService.PatternComponent;
              return (
                <Link
                  to={featuredService.link}
                  className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl p-8 lg:p-12 min-h-[400px] flex flex-col justify-end"
                  onMouseEnter={() => setHoveredCard(featuredService.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <FeaturedPattern />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-8 right-8">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <FeaturedIcon className="text-white" size={40} />
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
              );
            })()}

            {/* Smaller Cards */}
            {restorationServices.slice(1).map((service) => {
              const ServiceIcon = service.icon;
              const ServicePattern = service.PatternComponent;
              return (
                <Link
                  key={service.id}
                  to={service.link}
                  className="group relative overflow-hidden rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[200px]"
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <ServicePattern />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <ServiceIcon className="text-white" size={24} />
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
              );
            })}
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

      {/* Section 2: Cleanup/Remediation Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-emerald-500" />
                <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">02</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-4">
                {isCommercial ? 'Cleanup Services' : 'Remediation'}
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                {isCommercial
                  ? 'Mold, sewage, and fire damage require specialized commercial treatment. Our certified technicians follow IICRC protocols with minimal business disruption.'
                  : 'Mold, sewage, and biohazard contamination require specialized treatment. Our certified technicians follow IICRC protocols for safe, thorough remediation.'}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {cleanupServices.map((service, idx) => (
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
            {cleanupServices.map((service, idx) => (
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
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-4">
                {isCommercial ? 'Industry Specialists' : 'Specialty Services'}
              </h2>
              <p className="text-xl text-white/60 max-w-lg">
                {isCommercial
                  ? 'Vertical expertise for healthcare, hospitality, education, and industrial facilities.'
                  : 'Focused solutions for unique restoration challenges—from document recovery to complete reconstruction.'}
              </p>
            </div>
          </div>

          <div className={`grid gap-6 ${isCommercial ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
            {specialtyServices.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="group bg-slate-800 rounded-2xl p-6 lg:p-8 border border-slate-700 hover:bg-slate-700 hover:border-violet-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-violet-500/30 flex items-center justify-center mb-5 group-hover:bg-violet-500 group-hover:scale-110 transition-all">
                  <service.icon className="text-violet-400 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-violet-400 font-medium text-sm">
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Technical Services (Commercial Only) */}
      {isCommercial && (
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">04</span>
            </div>
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-4">
                  Technical Services
                </h2>
                <p className="text-lg text-muted max-w-lg">
                  Advanced diagnostics, consulting, and environmental testing for complex commercial projects.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {commercialTechnical.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="group bg-amber-50 rounded-2xl p-6 lg:p-8 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-amber-200"
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:scale-110 transition-all">
                    <service.icon className="text-amber-600 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text mb-2 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-amber-600 font-medium text-sm">
                    Learn more
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross-sell Section: Show opposite audience */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-slate-300" />
                <span className="text-muted text-sm font-semibold tracking-widest uppercase">
                  {isCommercial ? 'For Homeowners' : 'For Business'}
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-6">
                {isCommercial ? (
                  <>Residential<br /><span className="italic font-normal">restoration</span></>
                ) : (
                  <>Commercial<br /><span className="italic font-normal">restoration</span></>
                )}
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                {isCommercial
                  ? 'Expert home restoration with the same quality and care. 24/7 emergency response for homeowners throughout Northern Virginia.'
                  : 'Enterprise-grade restoration with minimal business disruption. HIPAA-compliant, OSHA-certified, and equipped for facilities of any size.'}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {(isCommercial
                  ? ['Water Damage', 'Fire & Smoke', 'Mold', 'Storm Damage', 'Content Restoration']
                  : ['Office Buildings', 'Healthcare', 'Retail', 'Industrial', 'Multi-Family', 'Education']
                ).map((type) => (
                  <span key={type} className="px-4 py-2 rounded-full bg-slate-100 text-sm text-text">
                    {type}
                  </span>
                ))}
              </div>

              <Link
                to={isCommercial ? '/services/residential/' : '/services/commercial/'}
                className="inline-flex items-center justify-center font-display font-medium bg-primary text-white hover:bg-primaryHover h-14 px-8 rounded-full transition-all"
              >
                {isCommercial ? 'Residential Services' : 'Commercial Services'}
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="aspect-square rounded-3xl relative overflow-hidden">
              <img
                src={isCommercial
                  ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                  : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"}
                alt={isCommercial ? "Residential home - restoration services" : "Commercial building - office restoration services"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
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
            <span className="italic font-normal">{isCommercial ? 'your facility?' : 'your property?'}</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Free assessments. 60-minute response. Direct insurance billing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center font-display font-medium bg-white text-primary hover:bg-gray-100 h-16 px-10 text-lg rounded-full transition-all"
            >
              <Phone size={22} className="mr-3" />
              (877) 497-0007
            </a>
            <Link
              to="/request/"
              className="inline-flex items-center justify-center font-display font-medium border-2 border-white text-white hover:bg-white/10 h-16 px-10 text-lg rounded-full transition-all"
            >
              Request Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesHub;
