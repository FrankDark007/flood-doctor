// Animated Service Components - Scroll animations and micro-interactions
// For ServiceDetail, ServicesHub, and service-related pages

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { LucideIcon, CheckCircle2 } from 'lucide-react';

// Google-style easing
const googleEase = [0.22, 1, 0.36, 1];

// === Hero Components ===

interface AnimatedServiceHeroProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'image';
}

export const AnimatedServiceHero: React.FC<AnimatedServiceHeroProps> = ({
  children,
  className = '',
  variant = 'default'
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </motion.section>
  );
};

interface AnimatedHeroContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedServiceHeroContent: React.FC<AnimatedHeroContentProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: googleEase }}
    >
      {children}
    </motion.div>
  );
};

// === Section Components ===

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedServiceSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: googleEase }}
    >
      {children}
    </motion.section>
  );
};

// === Process Step Components ===

interface AnimatedProcessStepProps {
  number: number;
  title: string;
  description: string;
  details?: string[];
  bgColor: string;
  badgeBg: string;
  badgeText: string;
  image: string;
  isReversed?: boolean;
  delay?: number;
}

export const AnimatedProcessStep: React.FC<AnimatedProcessStepProps> = ({
  number,
  title,
  description,
  details = [],
  bgColor,
  badgeBg,
  badgeText,
  image,
  isReversed = false,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: googleEase }}
    >
      {/* Text Content */}
      <motion.div
        className={isReversed ? 'lg:order-2' : ''}
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.2, ease: googleEase }}
      >
        {/* Number badge */}
        <motion.div
          className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${badgeBg} ${badgeText} text-sm font-bold mb-4`}
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: delay + 0.3 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {number}
        </motion.div>

        <h3 className="text-[28px] lg:text-[32px] font-normal text-[#202124] leading-[1.25] mb-4">
          {title}
        </h3>

        <p className="text-[16px] lg:text-[18px] text-[#5f6368] leading-[1.6] mb-6">
          {description}
        </p>

        {details.length > 0 && (
          <ul className="space-y-3">
            {details.map((detail, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-[#202124]"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: delay + 0.4 + i * 0.1 }}
              >
                <motion.div whileHover={{ scale: 1.2 }}>
                  <CheckCircle2 size={20} className="text-[#1a73e8] flex-shrink-0" />
                </motion.div>
                <span className="text-[16px]">{detail}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>

      {/* Image with colored background container */}
      <motion.div
        className={isReversed ? 'lg:order-1' : ''}
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.15, ease: googleEase }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className={`aspect-[4/3] rounded-3xl overflow-hidden ${bgColor} p-6 lg:p-8`}
          whileHover={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// === Service Card Components ===

interface AnimatedServiceCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  link: string;
  iconBgColor?: string;
  iconColor?: string;
  delay?: number;
  featured?: boolean;
}

export const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({
  title,
  subtitle,
  description,
  icon: Icon,
  image,
  link,
  iconBgColor = 'bg-[#e8f0fe]',
  iconColor = 'text-[#1a73e8]',
  delay = 0,
  featured = false
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.a
      ref={ref}
      href={link}
      className="group bg-white rounded-2xl overflow-hidden block"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: googleEase }}
      whileHover={{
        y: -8,
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
        transition: { duration: 0.3 }
      }}
    >
      {/* Image */}
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            className={`w-10 h-10 rounded-lg ${iconBgColor} flex items-center justify-center`}
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Icon className={iconColor} size={20} />
          </motion.div>
          {subtitle && (
            <span className="text-[12px] text-[#5f6368] uppercase tracking-wide">{subtitle}</span>
          )}
        </div>
        <h3 className="text-[20px] font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">
          {title}
        </h3>
        <p className="text-[14px] text-[#5f6368] mb-4 line-clamp-2">
          {description}
        </p>
        <motion.span
          className="inline-flex items-center text-[#1a73e8] text-[14px] font-medium"
          whileHover={{ x: 4 }}
        >
          Learn more
          <motion.svg
            className="ml-1 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ x: 4 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.span>
      </div>
    </motion.a>
  );
};

// === Stats Grid ===

interface Stat {
  value: string;
  label: string;
}

interface AnimatedStatsRowProps {
  stats: Stat[];
  className?: string;
}

export const AnimatedStatsRow: React.FC<AnimatedStatsRowProps> = ({
  stats,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: idx * 0.1, ease: googleEase }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="text-[32px] lg:text-[40px] font-normal text-[#202124] mb-1"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
          >
            {stat.value}
          </motion.div>
          <div className="text-[14px] text-[#5f6368]">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// === Testimonial ===

interface AnimatedTestimonialProps {
  quote: string;
  author: string;
  role: string;
  location: string;
  className?: string;
}

export const AnimatedTestimonial: React.FC<AnimatedTestimonialProps> = ({
  quote,
  author,
  role,
  location,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: googleEase }}
    >
      <motion.div
        className="flex justify-center gap-1 mb-6"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            className="w-5 h-5 text-[#fbbc04] fill-[#fbbc04]"
            viewBox="0 0 20 20"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.08, type: 'spring' }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </motion.div>
      <motion.blockquote
        className="text-[24px] lg:text-[28px] font-normal text-[#202124] leading-[1.4] mb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        "{quote}"
      </motion.blockquote>
      <motion.div
        className="text-[16px] text-[#5f6368]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <span className="font-medium text-[#202124]">{author}</span>
        <span className="mx-2">·</span>
        <span>{role}</span>
        <span className="mx-2">·</span>
        <span>{location}</span>
      </motion.div>
    </motion.div>
  );
};

// === CTA Banner ===

interface AnimatedCTABannerProps {
  title: string;
  subtitle?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: 'blue' | 'white' | 'gray';
  className?: string;
}

export const AnimatedCTABanner: React.FC<AnimatedCTABannerProps> = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  variant = 'blue',
  className = ''
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const bgColor = variant === 'blue' ? 'bg-[#1a73e8]' :
                  variant === 'gray' ? 'bg-[#f8f9fa]' : 'bg-white';
  const textColor = variant === 'blue' ? 'text-white' : 'text-[#202124]';
  const subtitleColor = variant === 'blue' ? 'text-white/80' : 'text-[#5f6368]';

  return (
    <motion.section
      ref={ref}
      className={`py-20 lg:py-28 ${bgColor} relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background elements */}
      {variant === 'blue' && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{ x: [50, -50, 50], y: [30, -30, 30] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px] text-center relative z-10">
        <motion.h2
          className={`text-[36px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.25px] mb-6 ${textColor}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: googleEase }}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            className={`text-[18px] mb-10 ${subtitleColor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: googleEase }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href={primaryAction.href}
            className={`inline-flex items-center justify-center font-medium px-8 h-12 rounded-full transition-colors ${
              variant === 'blue'
                ? 'bg-white hover:bg-gray-100 text-[#1a73e8]'
                : 'bg-[#1a73e8] hover:bg-[#1557b0] text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {primaryAction.label}
          </motion.a>

          {secondaryAction && (
            <motion.a
              href={secondaryAction.href}
              className={`inline-flex items-center justify-center font-medium px-8 h-12 rounded-full transition-colors ${
                variant === 'blue'
                  ? 'border border-white/30 hover:bg-white/10 text-white'
                  : 'border border-[#dadce0] hover:bg-[#f8f9fa] text-[#1a73e8]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {secondaryAction.label}
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

// === Sticky Navigation ===

interface NavSection {
  id: string;
  label: string;
}

interface AnimatedStickyNavProps {
  sections: NavSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export const AnimatedStickyNav: React.FC<AnimatedStickyNavProps> = ({
  sections,
  activeSection,
  onSectionClick
}) => {
  return (
    <motion.div
      className="sticky top-20 z-30 py-3 bg-white/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] flex justify-center">
        <nav className="inline-flex items-center gap-1 bg-white rounded-full px-2 py-1.5 shadow-lg shadow-black/5 ring-1 ring-gray-900/5">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                activeSection === section.id
                  ? 'bg-[#e8f0fe] text-[#1a73e8]'
                  : 'text-[#5f6368] hover:text-[#202124] hover:bg-[#f8f9fa]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  className="absolute inset-0 bg-[#e8f0fe] rounded-full -z-10"
                  layoutId="activeSection"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

// === FAQ Accordion ===

interface FAQ {
  question: string;
  answer: string;
}

interface AnimatedFAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  className?: string;
}

export const AnimatedFAQAccordion: React.FC<AnimatedFAQAccordionProps> = ({
  faqs,
  title = 'Frequently asked questions',
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [openFaqs, setOpenFaqs] = React.useState<Set<number>>(new Set([0]));

  const toggleFaq = (idx: number) => {
    const newSet = new Set(openFaqs);
    if (openFaqs.has(idx)) {
      newSet.delete(idx);
    } else {
      newSet.add(idx);
    }
    setOpenFaqs(newSet);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: googleEase }}
    >
      <motion.h2
        className="text-[36px] font-normal text-[#202124] leading-[1.33] tracking-[-0.25px] text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>

      <div>
        {faqs.map((faq, idx) => {
          const isOpen = openFaqs.has(idx);
          return (
            <motion.div
              key={idx}
              className="border-t border-[#dadce0] first:border-t-0"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <motion.button
                onClick={() => toggleFaq(idx)}
                className={`w-full py-6 lg:py-7 flex items-center justify-between text-left hover:text-[#174ea6] transition-colors ${
                  isOpen ? 'text-[#174ea6]' : ''
                }`}
                whileHover={{ x: 4 }}
              >
                <span className={`text-[20px] font-normal leading-[1.4] mr-2 lg:mr-6 ${
                  isOpen ? 'text-[#174ea6]' : 'text-[#1a73e8]'
                }`}>
                  {faq.question}
                </span>
                <motion.svg
                  className="w-6 h-6 text-[#1a73e8] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 pr-10 lg:pr-[60px] text-[16px] text-[#5f6368] leading-[1.5]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        <div className="border-t border-[#dadce0]"></div>
      </div>
    </motion.div>
  );
};

// === Trust Badges ===

interface TrustBadge {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AnimatedTrustBadgesProps {
  badges: TrustBadge[];
  className?: string;
}

export const AnimatedTrustBadges: React.FC<AnimatedTrustBadgesProps> = ({
  badges,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}
    >
      {badges.map((badge, idx) => (
        <motion.div
          key={idx}
          className="flex items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: idx * 0.1, ease: googleEase }}
          whileHover={{ y: -4 }}
        >
          <motion.div
            className="w-10 h-10 rounded-lg bg-white border border-[#dadce0] flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.1, borderColor: '#1a73e8' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <badge.icon className="text-[#1a73e8]" size={20} />
          </motion.div>
          <div>
            <div className="text-[14px] font-medium text-[#202124]">{badge.title}</div>
            <div className="text-[12px] text-[#5f6368]">{badge.description}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default {
  AnimatedServiceHero,
  AnimatedServiceHeroContent,
  AnimatedServiceSection,
  AnimatedProcessStep,
  AnimatedServiceCard,
  AnimatedStatsRow,
  AnimatedTestimonial,
  AnimatedCTABanner,
  AnimatedStickyNav,
  AnimatedFAQAccordion,
  AnimatedTrustBadges
};
