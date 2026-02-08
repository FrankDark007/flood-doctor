import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  ArrowRight,
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
  Briefcase,
  Thermometer,
  FileSearch,
  Hotel,
  GraduationCap,
  Factory,
  Stethoscope,
  Activity,
  LucideIcon
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import { generateBreadcrumbSchema, combineSchemas, generateLocalBusinessSchema } from '../utils/schema';

// Google-style easing curve
const googleEase = [0.22, 1, 0.36, 1];

// === Animated Helper Components ===

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

interface AnimatedSectionHeaderProps {
  title: string;
  subtitle: string;
}

const AnimatedSectionHeader: React.FC<AnimatedSectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-4">
        {title}
      </h2>
      <p className="text-[18px] text-[#5f6368] max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

interface ServiceCardData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  link: string;
  image?: string;
  featured?: boolean;
}

interface AnimatedServiceCardGridProps {
  services: ServiceCardData[];
  variant?: 'image' | 'icon';
  iconBgColor?: string;
  iconColor?: string;
  columns?: 2 | 3 | 4;
}

const AnimatedServiceCardGrid: React.FC<AnimatedServiceCardGridProps> = ({
  services,
  variant = 'image',
  iconBgColor = 'bg-[#e8f0fe]',
  iconColor = 'text-[#1a73e8]',
  columns = 3
}) => {
  const gridCols = columns === 2 ? 'md:grid-cols-2' :
                   columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
                   'md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {services.map((service) => {
        const ServiceIcon = service.icon;
        return (
          <div
            key={service.id}
            className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <Link
              to={service.link}
              className={`group bg-white rounded-2xl overflow-hidden block h-full ${variant === 'icon' ? 'p-6 lg:p-8 border border-[#dadce0] hover:border-[#1a73e8]' : 'shadow-md'}`}
            >
              {/* Image for image variant */}
              {variant === 'image' && service.image && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              {/* Content */}
              <div className={variant === 'image' ? 'p-6' : ''}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${iconBgColor} flex items-center justify-center ${variant === 'icon' ? 'w-12 h-12 rounded-xl mb-5' : ''}`}
                  >
                    <ServiceIcon className={iconColor} size={variant === 'icon' ? 24 : 20} />
                  </div>
                  {variant === 'image' && service.subtitle && (
                    <span className="text-[12px] text-[#5f6368] uppercase tracking-wide">{service.subtitle}</span>
                  )}
                </div>
                <h3 className={`font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors ${variant === 'icon' ? 'text-[18px]' : 'text-[20px]'}`}>
                  {service.title}
                </h3>
                <p className="text-[14px] text-[#5f6368] mb-4 line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-[#1a73e8] text-[14px] font-medium">
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

// Animated Testimonial Section
interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  location: string;
}

interface AnimatedTestimonialSectionProps {
  testimonial: TestimonialData;
}

const AnimatedTestimonialSection: React.FC<AnimatedTestimonialSectionProps> = ({ testimonial }) => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px]">
        <div className="text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-[#fbbc04] fill-[#fbbc04]" size={20} />
            ))}
          </div>
          <blockquote className="text-[24px] lg:text-[28px] font-normal text-[#202124] leading-[1.4] mb-8">
            "{testimonial.quote}"
          </blockquote>
          <div className="text-[16px] text-[#5f6368]">
            <span className="font-medium text-[#202124]">{testimonial.author}</span>
            <span className="mx-2">·</span>
            <span>{testimonial.role}</span>
            <span className="mx-2">·</span>
            <span>{testimonial.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Trust Section
const AnimatedTrustSection: React.FC = () => {
  const badges = [
    { icon: Clock, title: '60-minute response', description: 'Guaranteed' },
    { icon: Shield, title: 'IICRC certified', description: 'Industry standard' },
    { icon: Star, title: '4.9/5 rating', description: '500+ reviews' },
    { icon: CheckCircle2, title: 'Licensed & insured', description: 'Full protection' }
  ];

  return (
    <section className="py-12 bg-[#f8f9fa] border-y border-[#dadce0]">
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-[#dadce0] flex items-center justify-center flex-shrink-0">
                <badge.icon className="text-[#1a73e8]" size={20} />
              </div>
              <div>
                <div className="text-[14px] font-medium text-[#202124]">{badge.title}</div>
                <div className="text-[12px] text-[#5f6368]">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Bottom CTA Section
const AnimatedBottomCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#1a73e8] relative overflow-hidden">
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px] text-center relative z-10">
        <h2 className="text-[36px] lg:text-[44px] font-normal text-white leading-[1.2] tracking-[-0.25px] mb-6">
          Ready to get started?
        </h2>
        <p className="text-[18px] text-white/80 mb-10">
          Free assessments. 60-minute response. Direct insurance billing.
        </p>
        {/* CTA Buttons */}
        <div className="hidden lg:flex flex-row justify-center gap-4">
          <a
            href="tel:8774970007"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
          >
            <Phone size={18} className="mr-2" />
            (877) 497-0007
          </a>
          <Link
            to="/request/"
            className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-medium px-8 h-12 rounded-full transition-colors"
          >
            Request estimate
          </Link>
        </div>
      </div>
    </section>
  );
};

// Cross-sell Section
interface AnimatedCrossSellSectionProps {
  isCommercial: boolean;
  serviceImages: Record<string, string>;
}

const AnimatedCrossSellSection: React.FC<AnimatedCrossSellSectionProps> = ({ isCommercial, serviceImages }) => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={isCommercial ? serviceImages.residential : serviceImages.commercial}
                alt={isCommercial ? 'Residential services' : 'Commercial services'}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f8f9fa] text-[#5f6368] text-sm mb-6">
              {isCommercial ? <Home size={14} /> : <Briefcase size={14} />}
              {isCommercial ? 'For Homeowners' : 'For Business'}
            </div>

            <h2 className="text-[32px] lg:text-[40px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-6">
              {isCommercial ? 'Residential restoration' : 'Commercial restoration'}
            </h2>

            <p className="text-[18px] text-[#5f6368] leading-[1.6] mb-8">
              {isCommercial
                ? 'Expert home restoration with the same quality and care. 24/7 emergency response for homeowners throughout Northern Virginia.'
                : 'Enterprise-grade restoration with minimal business disruption. HIPAA-compliant, OSHA-certified, and equipped for facilities of any size.'
              }
            </p>

            <Link
              to={isCommercial ? '/services/residential/' : '/services/commercial/'}
              className="inline-flex items-center text-[#1a73e8] font-medium hover:underline"
            >
              {isCommercial ? 'View residential services' : 'View commercial services'}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * ServicesHub - Google Business/Workspace Style Redesign
 *
 * Key changes from original:
 * - Light backgrounds (no dark hero)
 * - Real images instead of SVG patterns
 * - Lighter typography (font-normal headlines)
 * - Consistent Google spacing and colors
 * - Clean, minimal aesthetic
 */

interface ServicesHubProps {
  title?: string;
  subtitle?: string;
  filterAudience?: 'RESIDENTIAL' | 'COMMERCIAL';
}

const ServicesHub: React.FC<ServicesHubProps> = ({ title, subtitle, filterAudience }) => {
  const isCommercial = filterAudience === 'COMMERCIAL';

  // Service images from Unsplash
  const serviceImages = {
    water: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    fire: 'https://images.unsplash.com/photo-1486915309854-ab252002f5f3?w=600&q=80',
    storm: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600&q=80',
    mold: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
    sewage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    commercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    residential: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  };

  // RESIDENTIAL Services
  const residentialRestoration = useMemo(() => [
    {
      id: 'water',
      title: 'Water Damage Restoration',
      subtitle: 'Emergency extraction & drying',
      description: 'Every minute counts when water invades your home. Our crews arrive within 60 minutes with industrial extractors and drying equipment.',
      icon: Droplets,
      link: '/services/residential/restoration-services/water-damage-restoration/',
      image: serviceImages.water,
      featured: true,
    },
    {
      id: 'fire',
      title: 'Fire & Smoke Cleanup',
      subtitle: 'Complete remediation',
      description: 'From soot removal to odor elimination, we restore properties after fire damage.',
      icon: Flame,
      link: '/services/residential/cleanup-services/fire-smoke-cleanup/',
      image: serviceImages.fire,
    },
    {
      id: 'storm',
      title: 'Storm Damage',
      subtitle: '24/7 emergency response',
      description: 'Immediate response for wind, hail, and weather-related property damage.',
      icon: Wind,
      link: '/services/residential/restoration-services/storm-damage-restoration/',
      image: serviceImages.storm,
    }
  ], []);

  const residentialRemediation = useMemo(() => [
    { id: 'mold', title: 'Mold Remediation', description: 'Professional testing, containment, and safe removal for healthy indoor air.', icon: Bug, link: '/services/residential/cleanup-services/mold-remediation/' },
    { id: 'sewage', title: 'Sewage Cleanup', description: 'Category 3 black water cleanup with full sanitization and decontamination.', icon: Waves, link: '/services/residential/cleanup-services/sewage-cleanup/' },
    { id: 'biohazard', title: 'Biohazard', description: 'Safe handling and disposal of biohazardous materials.', icon: Shield, link: '/services/residential/cleanup-services/sewage-cleanup/' }
  ], []);

  const residentialSpecialty = useMemo(() => [
    { id: 'content', title: 'Content Restoration', description: 'Document drying, electronics recovery, and personal property restoration.', icon: Box, link: '/services/residential/cleanup-services/contents-cleaning-packout/' },
    { id: 'odor', title: 'Odor Removal', description: 'Hydroxyl, ozone, and thermal fogging for persistent odors.', icon: Sparkles, link: '/services/residential/cleanup-services/odor-removal/' },
    { id: 'reconstruction', title: 'Reconstruction', description: 'From drywall to complete rebuilds—we finish what we start.', icon: Hammer, link: '/services/residential/restoration-services/structural-drying/' }
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
      image: serviceImages.commercial,
      featured: true,
    },
    {
      id: 'com-flood',
      title: 'Commercial Flood Cleanup',
      subtitle: 'Industrial-scale extraction',
      description: 'Large-scale flood extraction for warehouses, offices, and industrial facilities.',
      icon: Waves,
      link: '/services/commercial/restoration-services/commercial-flood-cleanup/',
      image: serviceImages.water,
    },
    {
      id: 'com-large',
      title: 'Large Loss Restoration',
      subtitle: 'Catastrophic event recovery',
      description: 'Scalable disaster recovery for hospitals, universities, and high-rises.',
      icon: Building2,
      link: '/services/commercial/restoration-services/large-loss-restoration/',
      image: serviceImages.storm,
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
    role: 'Facility Manager',
    location: 'Arlington, VA'
  } : {
    quote: "The Flood Doctor team arrived within 45 minutes and immediately started extracting water. They saved our hardwood floors and handled our insurance claim from start to finish.",
    author: 'Jennifer Martinez',
    role: 'Homeowner',
    location: 'Vienna, VA'
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

      {/* Hero Section - Animated Google Style (Light Background) */}
      <motion.section
        className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: googleEase }}
            >
              {/* Breadcrumb */}
              <motion.nav
                className="flex items-center gap-2 text-sm text-[#5f6368] mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link to="/" className="hover:text-[#1a73e8]">Home</Link>
                <span>/</span>
                <Link to="/services/" className="hover:text-[#1a73e8]">Services</Link>
                <span>/</span>
                <span className="text-[#202124]">{isCommercial ? 'Commercial' : 'Residential'}</span>
              </motion.nav>

              {/* Audience Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                {isCommercial ? <Briefcase size={16} /> : <Home size={16} />}
                {isCommercial ? 'Commercial Services' : 'Residential Services'}
              </motion.div>

              <motion.h1
                className="text-[40px] lg:text-[56px] font-normal text-[#202124] leading-[1.1] tracking-[-0.5px] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: googleEase }}
              >
                {isCommercial
                  ? 'Enterprise restoration for your business'
                  : 'Professional restoration for your home'
                }
              </motion.h1>

              <motion.p
                className="text-[18px] lg:text-[20px] text-[#5f6368] leading-[1.6] mb-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: googleEase }}
              >
                {isCommercial
                  ? 'Minimize downtime with rapid commercial restoration. HIPAA-compliant, OSHA-certified, and equipped for facilities of any size.'
                  : 'Water, fire, mold, or storm—our certified technicians are ready 24/7 to restore your property and your peace of mind.'
                }
              </motion.p>

              {/* CTA Buttons - Hidden on mobile, sticky footer handles mobile CTA */}
              <motion.div
                className="hidden lg:flex flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: googleEase }}
              >
                <motion.a
                  href="tel:8774970007"
                  className="inline-flex items-center justify-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-8 h-12 rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/request/"
                    className="inline-flex items-center justify-center border border-[#dadce0] hover:bg-[#f8f9fa] text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
                  >
                    Request Service
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: googleEase }}
            >
              <motion.div
                className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#e8f0fe] p-6 lg:p-8"
                whileHover={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
              >
                <img
                  src={isCommercial ? serviceImages.commercial : serviceImages.residential}
                  alt={isCommercial ? 'Commercial restoration services' : 'Residential restoration services'}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Row - Animated */}
          <motion.div
            className="mt-16 pt-8 border-t border-[#dadce0]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '60 min', label: 'Response time' },
                { value: '10,000+', label: 'Projects completed' },
                { value: '4.9/5', label: 'Customer rating' },
                { value: '15+', label: 'Years experience' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1, ease: googleEase }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-[32px] font-normal text-[#202124] mb-1">{stat.value}</div>
                  <div className="text-[14px] text-[#5f6368]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 1: Restoration Services - Animated Image Cards */}
      <AnimatedSection className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <AnimatedSectionHeader
            title={isCommercial ? 'Emergency restoration services' : 'Restoration services'}
            subtitle={isCommercial
              ? 'Rapid response to minimize business interruption'
              : 'Emergency response when every minute matters'
            }
          />

          {/* Animated Cards Grid with Real Images */}
          <AnimatedServiceCardGrid
            services={restorationServices}
            variant="image"
            iconBgColor="bg-[#e8f0fe]"
            iconColor="text-[#1a73e8]"
          />
        </div>
      </AnimatedSection>

      {/* Testimonial Section - Animated Clean Style */}
      <AnimatedTestimonialSection testimonial={testimonial} />

      {/* Section 2: Cleanup Services - Animated Icon Cards */}
      <AnimatedSection className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <AnimatedSectionHeader
            title={isCommercial ? 'Cleanup services' : 'Remediation services'}
            subtitle="Specialized treatment following IICRC protocols for safe, thorough remediation."
          />

          <AnimatedServiceCardGrid
            services={cleanupServices}
            variant="icon"
            iconBgColor="bg-[#e6f4ea]"
            iconColor="text-[#137333]"
          />
        </div>
      </AnimatedSection>

      {/* Section 3: Specialty Services - Animated */}
      <AnimatedSection className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <AnimatedSectionHeader
            title={isCommercial ? 'Industry specialists' : 'Specialty services'}
            subtitle={isCommercial
              ? 'Vertical expertise for healthcare, hospitality, education, and industrial facilities.'
              : 'Focused solutions for unique restoration challenges.'
            }
          />

          <AnimatedServiceCardGrid
            services={specialtyServices}
            variant="icon"
            iconBgColor="bg-[#fce8e6]"
            iconColor="text-[#c5221f]"
            columns={isCommercial ? 4 : 3}
          />
        </div>
      </AnimatedSection>

      {/* Section 4: Technical Services (Commercial Only) - Animated */}
      {isCommercial && (
        <AnimatedSection className="py-20 lg:py-28 bg-white">
          <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
            <AnimatedSectionHeader
              title="Technical services"
              subtitle="Advanced diagnostics, consulting, and environmental testing for complex commercial projects."
            />

            <AnimatedServiceCardGrid
              services={commercialTechnical}
              variant="icon"
              iconBgColor="bg-[#fef7e0]"
              iconColor="text-[#b06000]"
            />
          </div>
        </AnimatedSection>
      )}

      {/* Cross-sell Section - Animated */}
      <AnimatedCrossSellSection
        isCommercial={isCommercial}
        serviceImages={serviceImages}
      />

      {/* Trust Section - Animated */}
      <AnimatedTrustSection />

      {/* Bottom CTA - Animated Google Blue */}
      <AnimatedBottomCTA />
    </main>
  );
};

export default ServicesHub;
