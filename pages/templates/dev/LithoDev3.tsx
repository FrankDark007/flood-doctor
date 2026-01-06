import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Play,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Shield,
  Clock,
  Award,
  Target,
  Zap,
  Wind,
  Thermometer,
  Home,
  Building2,
  Truck,
  AlertTriangle,
  FileText,
  MapPin,
  Star
} from 'lucide-react';

/**
 * LithoDev3: FLOOD CLEANUP SERVICES PAGE
 *
 * Layout: WHAT WE OFFER style from Litho React
 * Content: Professional flood cleanup SEO content (~2,800 words)
 *
 * Sections:
 * 1. Dark hero with scroll indicator
 * 2. Video intro section (Why choose us)
 * 3. 6-item service feature grid
 * 4. Stats + tabbed 6-step process
 * 5. Rotating text headline + checklist (services)
 * 6. Circular progress indicators (capabilities)
 * 7. Testimonials section
 * 8. Service areas
 * 9. FAQ accordion
 * 10. CTA footer
 */

const googleEase = [0.22, 1, 0.36, 1];

// Animated section wrapper
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children, className = '', delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: googleEase, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Animated counter
const AnimatedCounter: React.FC<{ end: number; suffix?: string }> = ({ end, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / 60;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Feature item
const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    className="flex gap-5"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center text-[#1a73e8]">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-[16px] font-semibold text-[#202124] mb-2">{title}</h3>
      <p className="text-[14px] text-[#5f6368] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// Tab content
const TabContent: React.FC<{
  image: string;
  stepNumber: string;
  title: string;
  description: string;
  bullets: string[];
}> = ({ image, stepNumber, title, description, bullets }) => (
  <motion.div
    className="grid lg:grid-cols-2 gap-12 items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="rounded-2xl shadow-xl w-full"
      />
      <div className="absolute top-4 left-4 bg-[#1a73e8] text-white text-[12px] font-semibold px-3 py-1 rounded-full">
        Step {stepNumber}
      </div>
    </div>
    <div>
      <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-2">IICRC S500 Standards</p>
      <h3 className="text-[24px] md:text-[28px] font-semibold text-[#202124] leading-tight mb-4">
        {title}
      </h3>
      <p className="text-[14px] text-[#5f6368] leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2 text-[14px] text-[#5f6368]">
            <CheckCircle2 className="w-4 h-4 text-[#34a853] mt-0.5 flex-shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
      <Link
        to="/request/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a73e8] text-white rounded-full text-[14px] font-medium hover:bg-[#1557b0] transition-colors"
      >
        Get Emergency Help
      </Link>
    </div>
  </motion.div>
);

// Circular progress
const CircularProgress: React.FC<{
  percentage: number;
  label: string;
  sublabel: string;
  delay?: number;
}> = ({ percentage, label, sublabel, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e8eaed"
            strokeWidth="6"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#1a73e8"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : {}}
            transition={{ duration: 1.5, delay, ease: googleEase }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[24px] font-semibold text-[#202124]">
            {isInView ? <AnimatedCounter end={percentage} suffix="%" /> : '0%'}
          </span>
        </div>
      </div>
      <p className="mt-4 text-[14px] font-semibold text-[#202124] text-center">{label}</p>
      <p className="text-[12px] text-[#5f6368] text-center">{sublabel}</p>
    </motion.div>
  );
};

// Testimonial card
const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  location: string;
  delay?: number;
}> = ({ quote, name, location, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-2xl p-8 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
      ))}
    </div>
    <p className="text-[14px] text-[#5f6368] leading-relaxed mb-6">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center text-[#1a73e8] font-semibold">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-[14px] font-semibold text-[#202124]">{name}</p>
        <p className="text-[12px] text-[#5f6368]">{location}</p>
      </div>
    </div>
  </motion.div>
);

// Rotating text component
const RotatingText: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className="relative inline-block min-w-[200px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="text-[#1a73e8]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// FAQ Item
const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay?: number;
}> = ({ question, answer, isOpen, onClick, delay = 0 }) => (
  <motion.div
    className="border-b border-[#e8eaed]"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
  >
    <button
      className="w-full py-5 flex items-center justify-between text-left"
      onClick={onClick}
    >
      <span className="text-[16px] font-medium text-[#202124] pr-8">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="w-5 h-5 text-[#5f6368]" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-[14px] text-[#5f6368] leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const LithoDev3: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const whyChooseUs = [
    { icon: <Clock className="w-5 h-5" />, title: '60-Minute Response Guarantee', description: 'Our dispatch center immediately contacts the nearest crew. Technicians arrive with everything needed to begin extraction.' },
    { icon: <Award className="w-5 h-5" />, title: 'IICRC-Certified Technicians', description: 'All technicians hold WRT, ASD, and AMRT certifications ensuring industry-standard best practices for every project.' },
    { icon: <Target className="w-5 h-5" />, title: '25+ Years DMV Experience', description: 'We\'ve handled thousands of flood emergencies—from sump pump failures to major storm events affecting entire neighborhoods.' },
    { icon: <FileText className="w-5 h-5" />, title: 'Direct Insurance Billing', description: 'Detailed damage documentation, moisture readings, psychrometric drying logs, and direct billing to your insurance company.' },
    { icon: <Thermometer className="w-5 h-5" />, title: 'Advanced Detection Technology', description: 'Thermal imaging cameras and moisture meters reveal hidden water behind walls that visual inspection cannot detect.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Licensed, Bonded & Insured', description: 'DPOR License #2705155505. Full liability coverage protects you throughout the restoration process.' },
  ];

  const processSteps = [
    {
      label: '1. EMERGENCY CONTACT',
      content: {
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600',
        stepNumber: '1',
        title: 'Emergency Contact & Rapid Deployment',
        description: 'Your flood cleanup begins with a single phone call. Our 24/7 dispatch center gathers essential information and immediately dispatches the nearest crew with an estimated arrival time.',
        bullets: [
          'Property location and accessibility',
          'Source and extent of flooding',
          'Elapsed time since flooding began',
          'Insurance information for documentation',
        ]
      }
    },
    {
      label: '2. INSPECTION',
      content: {
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
        stepNumber: '2',
        title: 'Inspection & Damage Assessment',
        description: 'Our technicians conduct thorough flood damage assessment using thermal imaging to find hidden water, documenting everything for your insurance claim.',
        bullets: [
          'Visual inspection of all affected areas',
          'Moisture mapping with thermal imaging',
          'Water category determination (clean, gray, black)',
          'Timestamped photographic documentation',
        ]
      }
    },
    {
      label: '3. EXTRACTION',
      content: {
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        stepNumber: '3',
        title: 'Water Extraction & Removal',
        description: 'Standing water removal begins immediately after assessment. Our goal is complete standing water removal within hours of arrival using truck-mounted and portable extraction equipment.',
        bullets: [
          'Truck-mounted extraction for main water removal',
          'Portable extraction for furniture and tight areas',
          'Submersible pumps for deep standing water',
          'Specialty tools for different flooring types',
        ]
      }
    },
    {
      label: '4. DRYING',
      content: {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
        stepNumber: '4',
        title: 'Drying & Dehumidification',
        description: 'Professional drying removes absorbed moisture from walls, floors, and structural materials. Most residential flood damage requires 3-5 days of monitored drying.',
        bullets: [
          'LGR dehumidifiers positioned throughout',
          'High-velocity air movers on wet surfaces',
          'Specialty equipment for wall cavities',
          'Daily moisture monitoring and documentation',
        ]
      }
    },
    {
      label: '5. SANITIZATION',
      content: {
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600',
        stepNumber: '5',
        title: 'Cleaning & Sanitization',
        description: 'Once structures are dry, we clean and sanitize all affected areas. HEPA vacuuming, antimicrobial treatments, odor removal, and air quality restoration.',
        bullets: [
          'HEPA vacuuming of surfaces and contents',
          'Antimicrobial treatments for contaminated areas',
          'Odor removal and air quality restoration',
          'Duct cleaning when necessary',
        ]
      }
    },
    {
      label: '6. RESTORATION',
      content: {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
        stepNumber: '6',
        title: 'Restoration & Repairs',
        description: 'Final restoration returns your property to pre-flood condition. Drywall repair, flooring installation, painting, and complete room reconstruction when needed.',
        bullets: [
          'Drywall repair or replacement',
          'Flooring installation',
          'Painting and finishing',
          'Full reconstruction services available',
        ]
      }
    },
  ];

  const services = [
    'Emergency water extraction',
    'Structural drying & dehumidification',
    'Basement flooding solutions',
    'Burst pipe repair & cleanup',
    'Sewage backup cleanup',
    'Storm damage restoration',
    'Mold prevention & remediation',
    'Content cleaning & restoration',
  ];

  const capabilities = [
    { percentage: 60, label: '60-Minute', sublabel: 'Response Time' },
    { percentage: 98, label: '98%', sublabel: 'Customer Satisfaction' },
    { percentage: 25, label: '25+ Years', sublabel: 'DMV Experience' },
    { percentage: 100, label: '24/7/365', sublabel: 'Emergency Service' },
  ];

  const testimonials = [
    { quote: 'Our basement flooded during a massive storm. Flood Doctor had a crew there within 45 minutes. They worked through the night extracting water and setting up equipment. Saved our finished basement and prevented what could have been major mold problems.', name: 'Michael T.', location: 'Great Falls, VA' },
    { quote: 'A sump pump failure during vacation left our basement under 8 inches of water. Flood Doctor handled everything while we were still away—water removal, drying, dealing with insurance. We came home to a completely restored basement.', name: 'Catherine L.', location: 'Reston, VA' },
    { quote: 'Fast, professional, and thorough. When our water heater burst at 3 AM, Flood Doctor was there by 4 AM. They knew exactly what to do and prevented damage to our hardwood floors. The insurance process was seamless.', name: 'David M.', location: 'Vienna, VA' },
  ];

  const serviceAreas = {
    'Fairfax County': 'Fairfax City, Vienna, Great Falls, McLean, Tysons, Reston, Herndon, Oak Hill, Centreville, Chantilly',
    'Arlington & Alexandria': 'All neighborhoods throughout both cities',
    'Loudoun County': 'Ashburn, Leesburg, Sterling, South Riding, Broadlands, Brambleton, Lansdowne',
    'Prince William': 'Manassas, Woodbridge, Lake Ridge, Dumfries, Gainesville, Bristow, Haymarket',
  };

  const faqs = [
    {
      question: 'How quickly can you respond to flood emergencies?',
      answer: 'Flood Doctor guarantees a 60-minute response time for emergency flood cleanup throughout Northern Virginia, DC, and Maryland. Our 24/7 dispatch center immediately contacts the nearest available crew upon receiving your call.'
    },
    {
      question: 'Will my insurance cover flood damage restoration?',
      answer: 'Coverage depends on the source. Homeowner\'s insurance typically covers "sudden and accidental" water damage from internal sources (burst pipes, appliances). Flood insurance (NFIP or private) covers rising water from external sources (storms, rivers). We help document damage for successful claims.'
    },
    {
      question: 'How long does the flood cleanup process take?',
      answer: 'Timeline varies: Water extraction takes 2-8 hours depending on volume. Structural drying requires 3-5 days (monitored daily). Cleaning/sanitization takes 1-2 days. Reconstruction may take 1-4 weeks depending on scope.'
    },
    {
      question: 'Can flood damage lead to mold growth?',
      answer: 'Yes. Mold can begin growing within 24-48 hours of water exposure. Rapid professional response—extracting water and beginning structural drying immediately—prevents mold growth. If flooding has been present more than 48 hours, mold inspection may be necessary.'
    },
    {
      question: 'Do you offer 24/7 emergency flood cleanup?',
      answer: 'Yes. Flood Doctor provides true 24/7/365 emergency flood cleanup. Our live dispatchers answer calls at all hours, and emergency crews are always available. We respond on nights, weekends, and holidays.'
    },
    {
      question: 'How much does flood cleanup cost in Northern Virginia?',
      answer: 'Costs depend on square footage affected, depth of water, water category, materials affected, and required reconstruction. Minor floods may cost $1,500-3,000. Major basement flooding with reconstruction can exceed $15,000-25,000. Most costs are covered by insurance.'
    },
  ];

  return (
    <main className="bg-[#f8f9fa]">
      {/* Dark Hero with Emergency Banner */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200)' }}
        />

        {/* Emergency banner */}
        <div className="absolute top-0 left-0 right-0 bg-[#ea4335] py-3">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-[14px] font-medium">Flood damage worsens every hour. Don't wait.</span>
            </div>
            <a
              href="tel:8774970007"
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#ea4335] rounded-full text-[14px] font-semibold hover:bg-[#f8f9fa] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now: (877) 497-0007
            </a>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 py-20 mt-12">
          <motion.p
            className="text-[14px] text-white/60 uppercase tracking-[3px] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Emergency Flood Cleanup • 60-Minute Response
          </motion.p>
          <motion.h1
            className="text-[36px] md:text-[56px] font-semibold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Flood Cleanup & Flood Damage<br />Restoration in Northern Virginia
          </motion.h1>
          <motion.p
            className="text-[16px] text-white/70 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            IICRC-certified technicians respond within 60 minutes with industrial extraction equipment, commercial dehumidifiers, and 25+ years of experience.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="tel:8774970007"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a73e8] text-white rounded-full text-[16px] font-medium hover:bg-[#1557b0] transition-colors"
            >
              <Phone className="w-5 h-5" />
              (877) 497-0007
            </a>
            <Link
              to="/request/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full text-[16px] font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Free Assessment
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Flood Doctor */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600"
                  alt="Flood Doctor team"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
              <motion.button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#1a73e8] flex items-center justify-center text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 ml-1" fill="white" />
              </motion.button>
            </div>
            <div>
              <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
                Why Choose Flood Doctor
              </p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] leading-tight mb-6">
                When flooding strikes, you need immediate professional response
              </h2>
              <p className="text-[16px] text-[#5f6368] leading-relaxed mb-6">
                Flood damage devastates Northern Virginia homes every year. Spring storms, summer hurricanes, frozen pipe bursts, and sudden plumbing failures send thousands of gallons of water into basements, living spaces, and commercial properties.
              </p>
              <p className="text-[16px] text-[#5f6368] leading-relaxed mb-8">
                Every minute counts. Standing water spreads across floors, seeps into walls, and destroys belongings by the hour. Flood Doctor guarantees a 60-minute response time throughout our Northern Virginia service area.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:8774970007"
                  className="px-6 py-3 bg-[#1a73e8] text-white rounded-full text-[14px] font-medium hover:bg-[#1557b0] transition-colors"
                >
                  Call Now
                </a>
                <Link
                  to="/services/"
                  className="px-6 py-3 text-[#1a73e8] text-[14px] font-medium hover:underline flex items-center gap-2"
                >
                  All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 6-Item Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {whyChooseUs.map((feature, index) => (
              <FeatureItem key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats + Tabbed 6-Step Process */}
      <AnimatedSection className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div>
              <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
                IICRC S500 Standards
              </p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] leading-tight">
                Our 6-Step Flood Cleanup Process
              </h2>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-[48px] font-light text-[#1a73e8]">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-[#202124]">Floods Restored</h4>
                <p className="text-[14px] text-[#5f6368]">Homes & businesses saved</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-[48px] font-light text-[#1a73e8]">
                60<span className="text-[24px]">min</span>
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-[#202124]">Response Time</h4>
                <p className="text-[14px] text-[#5f6368]">Guaranteed arrival</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-wrap gap-2 mb-8">
              {processSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                    activeTab === index
                      ? 'bg-[#1a73e8] text-white'
                      : 'bg-[#f8f9fa] text-[#5f6368] hover:bg-[#e8eaed]'
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <TabContent
                key={activeTab}
                {...processSteps[activeTab].content}
              />
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Checklist + Rotating Text */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
                alt="Water damage restoration"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <div>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] leading-tight mb-6">
                Flood cleanup with{' '}
                <RotatingText words={['speed', 'expertise', 'precision', 'care']} />
              </h2>
              <p className="text-[16px] text-[#5f6368] leading-relaxed mb-8">
                Rapid water removal is the foundation of effective flood cleanup. The longer water sits in your home, the more damage it causes—and the higher your restoration costs climb. Our comprehensive services address every aspect of flood damage.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-[14px] text-[#5f6368]"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#34a853] flex-shrink-0" />
                    {service}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Circular Progress Indicators */}
      <AnimatedSection className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] mb-4">
              Why Northern Virginia Trusts Flood Doctor
            </h2>
            <p className="text-[16px] text-[#5f6368] max-w-2xl mx-auto">
              Proven results backed by decades of experience and thousands of successful restorations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {capabilities.map((item, index) => (
              <CircularProgress key={index} {...item} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
              Customer Stories
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124]">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Service Areas */}
      <AnimatedSection className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
              Service Areas
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] mb-4">
              Serving Northern Virginia, DC & Maryland
            </h2>
            <p className="text-[16px] text-[#5f6368]">
              Fairfax County receives the fastest response times as our home base.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(serviceAreas).map(([region, cities], index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[#1a73e8]" />
                  <h3 className="text-[16px] font-semibold text-[#202124]">{region}</h3>
                </div>
                <p className="text-[13px] text-[#5f6368] leading-relaxed">{cities}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[14px] text-[#5f6368] mt-8">
            <strong>Washington DC:</strong> All neighborhoods | <strong>Maryland:</strong> Bethesda, Silver Spring, Rockville, Chevy Chase, Potomac
          </p>
        </div>
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
              Common Questions
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="bg-[#f8f9fa] rounded-2xl p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                {...faq}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-r from-[#1a73e8] to-[#4285f4]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70 text-[14px] uppercase tracking-wider mb-4">
              24/7 Emergency Response
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-white mb-4">
              Flood damage worsens every hour.
            </h2>
            <p className="text-white/80 text-[16px] max-w-2xl mx-auto mb-8">
              Every minute of delay increases damage and restoration costs. Our emergency crews are ready 24/7 throughout Northern Virginia, Washington DC, and Maryland.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="tel:8774970007"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a73e8] rounded-full text-[16px] font-semibold hover:bg-[#f8f9fa] transition-colors"
            >
              <Phone className="w-5 h-5" />
              (877) 497-0007
            </a>
            <Link
              to="/request/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-full text-[16px] font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Free Damage Assessment
            </Link>
          </motion.div>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-[12px]">
              Flood Doctor LLC • 8466D Tyco Rd, Vienna, VA 22182 • DPOR License #2705155505 • Licensed, Bonded & Insured
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LithoDev3;
