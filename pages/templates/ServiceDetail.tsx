import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';
import { ServiceData } from '../../types';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../components/sections/RelatedServices';
import { useFranchise } from '@/hooks/useFranchise';

// Google-style easing curve
const googleEase = [0.22, 1, 0.36, 1];

/**
 * ServiceDetail - Google "How It Works" Layout
 *
 * Structure matches Google Ads pages:
 * 1. Hero (simplified, clean)
 * 2. Sticky sub-nav
 * 3. Process steps (alternating, colored image containers, small number badges)
 * 4. Mid-page CTA banner
 * 5. Expert section (image LEFT)
 * 6. Resources section (2 cards)
 * 7. FAQ (Google-style)
 * 8. Final CTA
 * 9. Related services
 * 10. Location links
 */

// === Animated Helper Components ===

interface ProcessSectionHeaderProps {
  title: string;
}

const ProcessSectionHeader: React.FC<ProcessSectionHeaderProps> = ({ title }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="process"
      className="pt-20 lg:pt-28 pb-8 lg:pb-12 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: googleEase }}
    >
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
        <div className="text-center">
          <motion.h2
            className="text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: googleEase }}
          >
            {title}
          </motion.h2>
        </div>
      </div>
    </motion.section>
  );
};

interface ProcessStepData {
  number: number;
  title: string;
  description: string;
  details: string[];
  bg: string;
  badgeBg: string;
  badgeText: string;
}

interface AnimatedProcessStepProps {
  step: ProcessStepData;
  index: number;
  images: string[];
}

const AnimatedProcessStep: React.FC<AnimatedProcessStepProps> = ({ step, index, images }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: googleEase }}
    >
      {/* Text Content */}
      <motion.div
        className={isReversed ? 'lg:order-2' : ''}
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: googleEase }}
      >
        {/* Number badge with spring animation */}
        <motion.div
          className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${step.badgeBg} ${step.badgeText} text-sm font-bold mb-4`}
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
        >
          {step.number}
        </motion.div>

        <h3 className="text-[28px] lg:text-[32px] font-normal text-[#202124] leading-[1.25] mb-4">
          {step.title}
        </h3>

        <p className="text-[16px] lg:text-[18px] text-[#5f6368] leading-[1.6] mb-6">
          {step.description}
        </p>

        {step.details.length > 0 && (
          <ul className="space-y-3">
            {step.details.map((detail, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-[#202124]"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
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
        transition={{ duration: 0.6, delay: 0.15, ease: googleEase }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className={`aspect-[4/3] rounded-3xl overflow-hidden ${step.bg} p-6 lg:p-8`}
          whileHover={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
        >
          <img
            src={images[index % 4]}
            alt={step.title}
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Animated CTA Section Component
interface AnimatedCTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'gray' | 'blue';
}

const AnimatedCTASection: React.FC<AnimatedCTASectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonHref,
  variant = 'gray'
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const bgColor = variant === 'blue' ? 'bg-[#1a73e8]' : 'bg-[#f8f9fa]';
  const textColor = variant === 'blue' ? 'text-white' : 'text-[#202124]';

  return (
    <motion.section
      ref={ref}
      className={`py-20 lg:py-28 ${bgColor} relative overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background elements for blue variant */}
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
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] relative z-10">
        <div className="text-center">
          <motion.h2
            className={`text-[36px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.25px] mb-8 ${textColor}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: googleEase }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className={`text-[18px] mb-10 ${variant === 'blue' ? 'text-white/80' : 'text-[#5f6368]'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to={buttonHref}
              className={`inline-flex items-center justify-center font-medium px-8 h-12 rounded-full transition-colors ${
                variant === 'blue'
                  ? 'bg-white hover:bg-gray-100 text-[#1a73e8]'
                  : 'bg-[#1a73e8] hover:bg-[#1557b0] text-white'
              }`}
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Animated FAQ Section Component
interface FAQItem {
  question: string;
  answer: string;
}

interface AnimatedFAQSectionProps {
  title: string;
  faqs: FAQItem[];
  openFaqs: Set<number>;
  setOpenFaqs: React.Dispatch<React.SetStateAction<Set<number>>>;
  allExpanded: boolean;
  setAllExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimatedFAQSection: React.FC<AnimatedFAQSectionProps> = ({
  title,
  faqs,
  openFaqs,
  setOpenFaqs,
  allExpanded,
  setAllExpanded
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="faq"
      className="py-20 lg:py-28 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: googleEase }}
        >
          <h2 className="text-[36px] font-normal text-[#202124] leading-[1.33] lg:leading-[1.22] tracking-[-0.25px]">
            {title}
          </h2>
        </motion.div>

        {/* Expand All Button */}
        <motion.div
          className="flex justify-end mb-5 border-b border-[#dadce0] pb-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={() => {
              if (allExpanded) {
                setOpenFaqs(new Set());
                setAllExpanded(false);
              } else {
                setOpenFaqs(new Set(faqs.map((_, i) => i)));
                setAllExpanded(true);
              }
            }}
            className="inline-flex items-center gap-2 text-[#1a73e8] hover:text-[#174ea6] hover:bg-[rgba(26,115,232,0.04)] text-[16px] font-medium py-3 px-3 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {allExpanded ? 'Collapse all' : 'Expand all'}
            <ChevronsUpDown size={18} />
          </motion.button>
        </motion.div>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, idx) => {
            const isOpen = openFaqs.has(idx);
            return (
              <motion.div
                key={idx}
                className="border-t border-[#dadce0] first:border-t-0"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <motion.button
                  onClick={() => {
                    const newSet = new Set(openFaqs);
                    if (isOpen) {
                      newSet.delete(idx);
                    } else {
                      newSet.add(idx);
                    }
                    setOpenFaqs(newSet);
                    setAllExpanded(newSet.size === faqs.length);
                  }}
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
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} className="text-[#1a73e8] flex-shrink-0 lg:w-9 lg:h-9" />
                  </motion.div>
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
                      <p className="pb-7 pr-10 lg:pr-[60px] text-[16px] text-[#5f6368] leading-[1.5] tracking-[0.1px]">
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

        {/* View More Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover={{ x: 4 }}>
            <Link
              to="/resources/faq/"
              className="inline-flex items-center px-4 py-3 rounded-full border border-transparent text-[#1a73e8] text-[16px] font-medium hover:bg-[rgba(26,115,232,0.04)] transition-colors"
            >
              View more FAQs
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Animated Resources Section Component
interface ResourceItem {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface AnimatedResourcesSectionProps {
  title: string;
  resources: ResourceItem[];
}

const AnimatedResourcesSection: React.FC<AnimatedResourcesSectionProps> = ({ title, resources }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="resources"
      className="py-20 lg:py-28 bg-[#f8f9fa]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: googleEase }}
        >
          <h2 className="text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-4">
            {title}
          </h2>
          <p className="text-[18px] text-[#5f6368] max-w-2xl mx-auto">
            Resources to help you prepare for, respond to, and recover from water damage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.15, ease: googleEase }}
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
            >
              <Link
                to={resource.link}
                className="bg-white rounded-2xl overflow-hidden block group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <motion.img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-[16px] text-[#5f6368] mb-4">
                    {resource.description}
                  </p>
                  <motion.span
                    className="inline-flex items-center text-[#1a73e8] font-medium text-[14px]"
                    whileHover={{ x: 4 }}
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-1" />
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Animated Expert Section Component
interface AnimatedExpertSectionProps {
  title: string;
}

const AnimatedExpertSection: React.FC<AnimatedExpertSectionProps> = ({ title }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    "We'll help you understand your damage and create a restoration plan",
    "We'll work directly with your insurance company on documentation",
    "We'll keep you updated throughout the entire restoration process"
  ];

  return (
    <motion.section
      ref={ref}
      id="expertise"
      className="py-20 lg:py-28 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image on LEFT */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: googleEase }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                alt="Flood Doctor restoration expert"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content on RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: googleEase }}
          >
            <motion.h2
              className="text-[32px] lg:text-[40px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {title}
            </motion.h2>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <CheckCircle2 className="text-[#1a73e8] mt-0.5 flex-shrink-0" size={20} />
                  </motion.div>
                  <span className="text-[16px] text-[#5f6368]">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ x: 8 }}
            >
              <Link
                to="/contact/"
                className="inline-flex items-center text-[#1a73e8] hover:text-[#174ea6] font-medium text-[16px]"
              >
                Schedule a consultation
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

interface ServiceDetailProps {
  service: ServiceData;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const [allExpanded, setAllExpanded] = useState(false);

  // Get current city from franchise context for LOCAL SEO
  const franchise = useFranchise();
  const isLocalPage = franchise.id !== 'hq';
  const cityName = isLocalPage ? franchise.name : '';
  const stateAbbr = isLocalPage ? (franchise.state || 'VA') : '';

  const serviceName = service?.title || 'Water Damage Restoration';

  // SEO-CRITICAL: H1 and title MUST include city name for local SEO
  const localizedServiceName = isLocalPage
    ? `${serviceName} in ${cityName}, ${stateAbbr}`
    : `${serviceName} in Fairfax & Northern Virginia`;

  const serviceTagline = isLocalPage
    ? `Professional ${serviceName.toLowerCase()} services for ${cityName} homeowners and businesses. 60-minute response time.`
    : (service?.heroIntro || service?.shortDescription || 'Professional restoration services for Northern Virginia homeowners.');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'How It Works' },
    { id: 'expertise', label: 'Our Expertise' },
    { id: 'resources', label: 'Resources' },
    { id: 'faq', label: 'FAQ' }
  ];

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Process steps with colored backgrounds - Google style
  // Badge colors match container backgrounds, text is darker shade
  const stepColors = [
    { bg: 'bg-[#e8f0fe]', badgeBg: 'bg-[#e8f0fe]', badgeText: 'text-[#1a73e8]' }, // Blue
    { bg: 'bg-[#fef7e0]', badgeBg: 'bg-[#fef7e0]', badgeText: 'text-[#b06000]' }, // Yellow/Amber
    { bg: 'bg-[#e6f4ea]', badgeBg: 'bg-[#e6f4ea]', badgeText: 'text-[#137333]' }, // Green
    { bg: 'bg-[#fce8e6]', badgeBg: 'bg-[#fce8e6]', badgeText: 'text-[#c5221f]' }  // Red
  ];

  // Parse whatWeDo - handles both string format "Title: Description" and object format
  const processSteps = service?.whatWeDo?.slice(0, 4).map((step, idx) => {
    // Handle string format: "Title: Description"
    if (typeof step === 'string') {
      const colonIndex = step.indexOf(':');
      if (colonIndex > 0) {
        return {
          number: idx + 1,
          title: step.substring(0, colonIndex).trim(),
          description: step.substring(colonIndex + 1).trim(),
          details: [],
          ...stepColors[idx % 4]
        };
      }
      return {
        number: idx + 1,
        title: step,
        description: '',
        details: [],
        ...stepColors[idx % 4]
      };
    }
    // Handle object format
    return {
      number: idx + 1,
      title: step.title,
      description: step.description,
      details: step.substeps || [],
      ...stepColors[idx % 4]
    };
  }) || [
    {
      number: 1,
      title: 'Emergency Assessment',
      description: 'Our certified technicians arrive within 60 minutes to assess the damage using thermal cameras and moisture meters.',
      details: ['24/7 emergency response', 'Advanced detection equipment', 'Detailed damage report'],
      ...stepColors[0]
    },
    {
      number: 2,
      title: 'Water Extraction',
      description: 'Industrial-grade pumps remove standing water quickly, minimizing structural damage and preventing mold growth.',
      details: ['Commercial-grade equipment', 'Up to 10,000 gallons/hour', 'Prevents secondary damage'],
      ...stepColors[1]
    },
    {
      number: 3,
      title: 'Drying & Dehumidification',
      description: 'Strategic placement of air movers and dehumidifiers ensures complete moisture removal with daily monitoring.',
      details: ['Scientific drying protocols', 'Daily moisture readings', 'IICRC standards followed'],
      ...stepColors[2]
    },
    {
      number: 4,
      title: 'Restoration & Repair',
      description: 'From minor repairs to full reconstruction, we restore your property to pre-loss condition with quality materials.',
      details: ['Licensed contractors', 'Insurance coordination', 'Quality guarantee'],
      ...stepColors[3]
    }
  ];

  // FAQ items
  const faqs = service?.faqs || [
    {
      question: 'How quickly should water damage be addressed?',
      answer: 'Within 24-48 hours. Mold can begin growing in as little as 24 hours, and structural damage worsens exponentially. We respond within 60 minutes to minimize damage and restoration costs.'
    },
    {
      question: 'Does homeowners insurance cover water damage restoration?',
      answer: 'Most homeowner policies cover water damage from sudden events like burst pipes or appliance failures. We work directly with all major insurance carriers and handle the paperwork for you.'
    },
    {
      question: 'What does water damage restoration cost?',
      answer: 'Costs vary based on the extent of damage, typically ranging from $1,000 to $5,000 for minor issues and up to $20,000+ for major flooding. We provide free estimates and work with your insurance.'
    },
    {
      question: 'Can I stay in my home during water damage restoration?',
      answer: 'In many cases, yes. For minor to moderate damage, you can usually stay. For severe damage or when drying equipment is needed throughout the home, temporary relocation may be recommended.'
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'Most properties are fully dried within 3-5 days. The complete restoration process, including repairs, typically takes 1-2 weeks depending on the extent of damage.'
    }
  ];

  // Resources for the resources section - with images like Google
  const resources = [
    {
      title: 'Water Damage Insurance Guide',
      description: 'Learn how to navigate the claims process and maximize your coverage.',
      link: '/resources/insurance-guide/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80'
    },
    {
      title: 'Emergency Action Checklist',
      description: 'What to do in the first 24 hours after discovering water damage.',
      link: '/resources/emergency-checklists/',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80'
    }
  ];

  // FAQ Schema for SEO
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : undefined;

  // SEO-CRITICAL: Meta title MUST include city name at the BEGINNING for local SEO
  const metaTitle = isLocalPage
    ? `${serviceName} ${cityName}, ${stateAbbr} | 24/7 Emergency | Flood Doctor`
    : `${serviceName} | Flood Doctor`;

  const metaDescription = isLocalPage
    ? `Professional ${serviceName.toLowerCase()} in ${cityName}, ${stateAbbr}. ${franchise.responseTime || '60-minute response'}. IICRC certified. Call ${franchise.phone || '(877) 497-0007'} for 24/7 emergency service.`
    : (service?.metaDescription || serviceTagline);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={metaTitle}
        description={metaDescription}
        schema={faqSchema}
      />

      {/* Hero Section - Animated, Google-style */}
      <motion.section
        id="overview"
        className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: googleEase }}
            >
              {/* Breadcrumb */}
              <motion.nav
                className="flex items-center gap-2 text-sm text-[#5f6368] mb-8 flex-wrap"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link to="/" className="hover:text-[#1a73e8]">Home</Link>
                <ChevronRight size={14} />
                <Link to="/services/" className="hover:text-[#1a73e8]">Services</Link>
                <ChevronRight size={14} />
                <Link to={`/services/${service?.audience?.toLowerCase() || 'residential'}/`} className="hover:text-[#1a73e8]">
                  {service?.audience === 'COMMERCIAL' ? 'Commercial' : 'Residential'}
                </Link>
                <ChevronRight size={14} />
                <span className="text-[#202124]">{serviceName}</span>
              </motion.nav>

              <motion.h1
                className="text-[40px] lg:text-[52px] font-normal text-[#202124] leading-[1.15] tracking-[-0.5px] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: googleEase }}
              >
                {localizedServiceName}
              </motion.h1>

              <motion.p
                className="text-[18px] lg:text-[20px] text-[#5f6368] leading-[1.6] mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: googleEase }}
              >
                {serviceTagline}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: googleEase }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/request/"
                    className="inline-flex items-center justify-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-8 h-12 rounded-full transition-colors"
                  >
                    Get started
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="tel:8774970007"
                    className="inline-flex items-center justify-center border border-[#dadce0] hover:bg-[#f8f9fa] text-[#1a73e8] font-medium px-8 h-12 rounded-full transition-colors"
                  >
                    <Phone size={18} className="mr-2" />
                    (877) 497-0007
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Google style with colored container */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: googleEase }}
            >
              <motion.div
                className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#e8f0fe] p-6 lg:p-8"
                whileHover={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt={`${serviceName} restoration services`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sticky Section Navigation - Google Workspace style with animation */}
      <motion.div
        className="sticky top-20 z-30 py-3 bg-white/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] flex justify-center">
          <nav className="inline-flex items-center gap-1 bg-white rounded-full px-2 py-1.5 shadow-lg shadow-black/5 ring-1 ring-gray-900/5">
            {sections.map((section, idx) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'text-[#1a73e8]'
                    : 'text-[#5f6368] hover:text-[#202124] hover:bg-[#f8f9fa]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + idx * 0.05 }}
              >
                {activeSection === section.id && (
                  <motion.div
                    className="absolute inset-0 bg-[#e8f0fe] rounded-full"
                    layoutId="activeNavSection"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Process Section Header - Animated */}
      <ProcessSectionHeader
        title={isLocalPage
          ? `${cityName} ${serviceName} Process - 4 Simple Steps`
          : 'Restore your property in 4 simple steps'}
      />

      {/* Process Steps - Animated Alternating Layout */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="space-y-20 lg:space-y-32">
            {processSteps.map((step, idx) => (
              <AnimatedProcessStep
                key={step.number}
                step={step}
                index={idx}
                images={[
                  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
                  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
                  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80'
                ]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA Banner - Animated Google style */}
      <AnimatedCTASection
        title={isLocalPage
          ? `Get ${serviceName} Help in ${cityName} Today`
          : 'Get started with Flood Doctor today'}
        buttonText="Request service"
        buttonHref="/request/"
        variant="gray"
      />

      {/* Expert Support Section - Animated, Image LEFT (Google style) */}
      <AnimatedExpertSection
        title={isLocalPage
          ? `${cityName}'s Trusted ${serviceName} Experts`
          : 'Partner with a Flood Doctor expert for your restoration'}
      />

      {/* Resources Section - Animated Google style 2-card grid */}
      <AnimatedResourcesSection
        title={isLocalPage
          ? `${serviceName} Resources for ${cityName} Homeowners`
          : 'Learn how to protect your property'}
        resources={resources}
      />

      {/* FAQ Accordion - Animated Google Style */}
      <AnimatedFAQSection
        title={isLocalPage
          ? `${serviceName} FAQ - ${cityName}, ${stateAbbr}`
          : 'Frequently asked questions'}
        faqs={faqs}
        openFaqs={openFaqs}
        setOpenFaqs={setOpenFaqs}
        allExpanded={allExpanded}
        setAllExpanded={setAllExpanded}
      />

      {/* Bottom CTA - Animated Google style */}
      <AnimatedCTASection
        title={isLocalPage
          ? `Need ${serviceName} in ${cityName}?`
          : 'Ready to restore your property?'}
        subtitle={isLocalPage
          ? `${cityName}'s #1 rated restoration company. ${franchise.responseTime || '60-minute response time'}. Call ${franchise.phone || '(877) 497-0007'} now.`
          : 'Get a free estimate and expert guidance. Our team responds within 60 minutes.'}
        buttonText="Request service"
        buttonHref="/request/"
        variant="blue"
      />

      {/* Related Services */}
      <RelatedServices
        currentServiceId={service.id}
        category={service.category}
        audience={service.audience}
      />

      {/* Service Area Links */}
      <ServiceAreaLinks serviceTitle={service.title} serviceSlug={service.slug} />
    </main>
  );
};

export default ServiceDetail;
