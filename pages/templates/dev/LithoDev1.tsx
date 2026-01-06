import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Play,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Users,
  Camera,
  Briefcase,
  Clock,
  Lightbulb,
  PenTool,
  Target,
  Presentation,
  Star,
  ArrowRight,
  Droplets,
  Shield,
  Award,
  Headphones,
  ThermometerSun,
  Wind,
  Gauge,
  Zap,
  FileCheck,
  Home,
  Building2,
  AlertTriangle,
  MapPin
} from 'lucide-react';

/**
 * LithoDev1: OUR PROCESS LAYOUT - WATER DAMAGE RESTORATION
 *
 * Clone of: https://lithoreact.themezaa.com/page/our-process
 * Populated with: Water Damage Restoration SEO content (2,600+ words)
 */

const googleEase = [0.22, 1, 0.36, 1];

// Animated counter component
const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({
  end, duration = 2, suffix = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
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
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toString().padStart(4, '0')}{suffix}
    </span>
  );
};

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

// Service card component
const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <div className="w-14 h-14 rounded-xl bg-[#e8f0fe] flex items-center justify-center mb-6 text-[#1a73e8]">
      {icon}
    </div>
    <h3 className="text-[18px] font-semibold text-[#202124] mb-3">{title}</h3>
    <p className="text-[14px] text-[#5f6368] leading-relaxed mb-4">{description}</p>
    <button className="text-[#1a73e8] text-[14px] font-medium flex items-center gap-2 hover:gap-3 transition-all">
      Learn more <ArrowRight className="w-4 h-4" />
    </button>
  </motion.div>
);

// Process step component
const ProcessStep: React.FC<{
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}> = ({ number, icon, title, description, delay = 0 }) => (
  <motion.div
    className="flex gap-6"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-full bg-[#1a73e8] flex items-center justify-center text-white">
        {icon}
      </div>
    </div>
    <div>
      <span className="text-[12px] text-white/60 uppercase tracking-wider">{number}</span>
      <h4 className="text-[18px] font-semibold text-white mb-2">{title}</h4>
      <p className="text-[14px] text-white/80 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// FAQ Item component
const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-[#e8eaed]">
    <button
      onClick={onClick}
      className="w-full py-5 flex items-center justify-between text-left"
    >
      <span className="text-[16px] font-medium text-[#202124]">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
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
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-[14px] text-[#5f6368] leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Testimonial card
const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  location: string;
  delay?: number;
}> = ({ quote, name, location, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-2xl p-8 shadow-md"
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
    <div>
      <p className="text-[14px] font-semibold text-[#202124]">{name}</p>
      <p className="text-[12px] text-[#5f6368]">{location}</p>
    </div>
  </motion.div>
);

// Content section card
const ContentCard: React.FC<{
  title: string;
  items: string[];
  delay?: number;
}> = ({ title, items, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-2xl p-8 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-[18px] font-semibold text-[#202124] mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-[14px] text-[#5f6368]">
          <CheckCircle2 className="w-5 h-5 text-[#34a853] flex-shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const LithoDev1: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const services = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Immediate Water Extraction',
      description: 'Truck-mounted extraction units with high-capacity removal rates. Portable extractors for hard-to-reach areas. Submersible pumps for basement flooding.'
    },
    {
      icon: <ThermometerSun className="w-6 h-6" />,
      title: 'Advanced Moisture Detection',
      description: 'Infrared thermal cameras reveal moisture hidden behind walls. Penetrating moisture meters measure water content in building materials.'
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Structural Drying',
      description: 'Low-grain refrigerant (LGR) dehumidifiers for efficient moisture removal. High-velocity air movers to accelerate evaporation from all surfaces.'
    },
  ];

  const stats = [
    { value: 60, label: 'MINUTE RESPONSE TIME' },
    { value: 2847, label: 'HOMES RESTORED' },
    { value: 98, label: 'CUSTOMER SATISFACTION' },
    { value: 15, label: 'YEARS EXPERIENCE' },
  ];

  const processSteps = [
    {
      number: 'Step 1',
      icon: <Phone className="w-6 h-6" />,
      title: 'Emergency Contact & Dispatch',
      description: 'Our 24/7 dispatch center gathers essential information—location, source of water, extent of damage, elapsed time. We immediately dispatch the nearest crew with an estimated arrival time.'
    },
    {
      number: 'Step 2',
      icon: <Camera className="w-6 h-6" />,
      title: 'Inspection & Damage Assessment',
      description: 'Visual inspection of all affected areas, moisture mapping with infrared cameras, moisture content readings in building materials, documentation with photographs.'
    },
    {
      number: 'Step 3',
      icon: <Droplets className="w-6 h-6" />,
      title: 'Water Removal & Extraction',
      description: 'Truck-mounted extraction units, portable equipment, submersible pumps, weighted carpet extraction tools. Our goal is complete water removal within hours.'
    },
    {
      number: 'Step 4',
      icon: <Wind className="w-6 h-6" />,
      title: 'Drying & Dehumidification',
      description: 'LGR dehumidifiers remove moisture from air. High-velocity air movers accelerate evaporation. Daily monitoring confirms progress. Most residential damage requires 3-5 days.'
    },
    {
      number: 'Step 5',
      icon: <Shield className="w-6 h-6" />,
      title: 'Cleaning & Sanitization',
      description: 'HEPA vacuuming of surfaces and contents. Antimicrobial treatments. Odor removal and air quality restoration. Content cleaning and restoration.'
    },
    {
      number: 'Step 6',
      icon: <Home className="w-6 h-6" />,
      title: 'Restoration & Repairs',
      description: 'Drywall repair or replacement, flooring installation, painting and finishing, trim restoration, cabinet repair, complete room reconstruction when needed.'
    },
  ];

  const faqs = [
    {
      question: 'How quickly can you respond to water emergencies?',
      answer: 'Flood Doctor maintains 24/7 emergency crews throughout Northern Virginia. Our average response time is 60 minutes. We dispatch immediately upon receiving your call and provide an estimated arrival time.'
    },
    {
      question: 'Does insurance cover water damage restoration?',
      answer: "Most homeowner's insurance policies cover sudden and accidental water damage from sources like burst pipes, appliance failures, and storm damage. Flood damage (rising water from external sources) requires separate flood insurance. We help you understand your coverage and document damage for successful claims."
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'Extraction takes 1-4 hours depending on water volume. Structural drying requires 3-5 days with daily monitoring. Cleaning/sanitization takes 1-2 days. Reconstruction varies based on scope (1-4 weeks typical). Minor damage may be complete in 4-5 days; major damage with reconstruction may require 2-4 weeks.'
    },
    {
      question: 'Can you prevent mold after water damage?',
      answer: 'Yes, rapid response and proper drying prevent mold growth. Mold requires moisture to grow—if we dry your property within 24-48 hours and achieve dry standard in building materials, mold growth is prevented. We also apply antimicrobial treatments to inhibit mold even if drying takes longer.'
    },
    {
      question: 'What equipment do you use for water extraction?',
      answer: 'We use professional-grade extraction and drying equipment: truck-mounted extraction units (hundreds of gallons per hour capacity), portable extractors and submersible pumps, LGR dehumidifiers (100+ pints per day removal), high-velocity air movers, infrared thermal imaging cameras, professional moisture meters, and HEPA air scrubbers.'
    },
    {
      question: 'What should I do before you arrive?',
      answer: 'If safe to do so: Turn off the water source (main shutoff valve). Turn off electricity to affected areas. Move valuables and furniture away from water. Take photographs of damage. Do not use household vacuums on standing water.'
    },
  ];

  const testimonials = [
    {
      quote: 'Our basement flooded during a storm, and Flood Doctor had a crew there within an hour. They worked through the night to extract the water and saved our finished basement. Professional, courteous, and extremely knowledgeable.',
      name: 'Thomas H.',
      location: 'McLean, VA'
    },
    {
      quote: "A pipe burst while we were on vacation. We came home to major water damage. Flood Doctor handled everything—the water removal, the drying, the insurance claim, and the repairs. I can't thank them enough.",
      name: 'Patricia W.',
      location: 'Reston, VA'
    },
    {
      quote: 'The team at Flood Doctor saved us thousands of dollars by responding quickly and preventing mold damage. Their equipment and expertise are top-notch.',
      name: 'Linda S.',
      location: 'Vienna, VA'
    },
  ];

  const residentialServices = [
    'Carpet, pad, and flooring restoration or replacement',
    'Drywall and plaster repair',
    'Baseboard and trim restoration',
    'Cabinet drying and restoration',
    'Subfloor assessment and repair',
    'Sump pump evaluation',
  ];

  const commercialServices = [
    'Office buildings and professional suites',
    'Retail stores and shopping centers',
    'Restaurants and food service facilities',
    'Warehouses and industrial properties',
    'Medical and dental offices',
    'Schools and educational facilities',
  ];

  const waterDamageCauses = [
    'Frozen pipes during winter months',
    'Corroded pipes in older homes (pre-1980)',
    'Supply line failures at appliances',
    'Water heater tank failures',
    'Washing machine hose bursts',
    'Roof leaks and storm damage',
  ];

  return (
    <main className="bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] py-32 overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#1a73e8]/30 to-[#4285f4]/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.p
            className="text-[14px] text-white/60 uppercase tracking-[3px] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            24/7 Emergency Response
          </motion.p>
          <motion.h1
            className="text-[42px] md:text-[56px] font-light text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Water Damage Restoration<br />in Fairfax & Northern Virginia
          </motion.h1>
          <motion.p
            className="text-[18px] text-white/80 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            IICRC-certified technicians respond within 60 minutes. Professional extraction, structural drying, and complete restoration. Free damage assessment. Direct insurance billing.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/request/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1a73e8] text-white rounded-full text-[14px] font-semibold hover:bg-[#1557b0] transition-colors"
            >
              <Phone className="w-5 h-5" />
              (877) 497-0007
            </Link>
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-full text-[14px] font-semibold hover:bg-white/20 transition-colors"
            >
              Free Assessment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
                Why Time Matters
              </p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] leading-tight mb-6">
                Water damage doesn't wait for convenient times.
              </h2>
              <p className="text-[16px] text-[#5f6368] leading-relaxed mb-6">
                Whether from a burst pipe, appliance failure, sewage backup, or storm flooding, water intrusion causes progressive damage to your Northern Virginia home. Within hours, water saturates flooring, drywall, and insulation. Within days, mold begins growing in damp areas.
              </p>
              <p className="text-[16px] text-[#5f6368] leading-relaxed mb-8">
                Professional water damage restoration stops this progression and returns your property to pre-loss condition. Flood Doctor LLC provides comprehensive water damage restoration services throughout Fairfax County, Northern Virginia, Washington DC, and Maryland.
              </p>
              <div className="flex items-center gap-4 p-4 bg-[#e6f4ea] rounded-xl">
                <CheckCircle2 className="w-8 h-8 text-[#34a853]" />
                <div>
                  <p className="font-semibold text-[#202124]">IICRC Certified Technicians</p>
                  <p className="text-[14px] text-[#5f6368]">Industry-standard credentials for water damage restoration</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-[#5f6368] leading-relaxed mb-8">
                Every hour of delayed action increases damage severity and restoration costs. Our emergency crews are ready to respond to water damage calls throughout Northern Virginia at any time of day or night.
              </p>
              <button className="flex items-center gap-4 group mb-8">
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#1a73e8] flex items-center justify-center text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6 ml-1" fill="white" />
                </motion.div>
                <span className="text-[14px] font-medium text-[#202124] uppercase tracking-wider group-hover:text-[#1a73e8] transition-colors">
                  See Our Process
                </span>
              </button>

              {/* Equipment list */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold text-[#202124] mb-4">Our Extraction Equipment</h4>
                <ul className="space-y-2 text-[14px] text-[#5f6368]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a73e8]" /> Truck-mounted extraction units</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a73e8]" /> Portable extractors for hard-to-reach areas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a73e8]" /> Submersible pumps for deep water</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a73e8]" /> Weighted extraction tools for carpet</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#1a73e8]" /> Hard surface extractors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Cards */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
              Emergency Water Damage Services
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124]">
              Professional-Grade Equipment & Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Counter + Tagline */}
      <AnimatedSection className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-[72px] md:text-[96px] font-light text-[#1a73e8] tracking-tight">
            <AnimatedCounter end={60} />
          </div>
          <div>
            <h3 className="text-[24px] md:text-[28px] text-[#202124] font-semibold">
              Minute Average Response Time
            </h3>
            <p className="text-[16px] text-[#5f6368] max-w-md">
              Water damage worsens by the hour. Our dispatchers immediately contact the nearest available crew upon receiving your call.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Comprehensive Services Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
              Comprehensive Restoration
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] mb-4">
              From Emergency Response to Complete Reconstruction
            </h2>
            <p className="text-[16px] text-[#5f6368] max-w-3xl mx-auto">
              Flood Doctor provides complete water damage restoration—from initial emergency response through final reconstruction. We handle every aspect of your restoration project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ContentCard
              title="Residential Water Damage Repair"
              items={residentialServices}
              delay={0}
            />
            <ContentCard
              title="Commercial Property Restoration"
              items={commercialServices}
              delay={0.1}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Two Image Showcase */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600"
                  alt="Water damage restoration work"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -right-8 w-48 h-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300"
                  alt="Restoration team"
                  className="rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
            <div>
              <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
                Why Choose Flood Doctor?
              </p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] leading-tight mb-6">
                IICRC Certified Technicians & Direct Insurance Billing
              </h2>
              <p className="text-[16px] text-[#5f6368] leading-relaxed mb-6">
                All Flood Doctor technicians hold IICRC (Institute of Inspection Cleaning and Restoration Certification) credentials. This industry-standard certification ensures our team follows established best practices for water damage restoration, applied structural drying, mold remediation, and contents restoration.
              </p>
              <p className="text-[16px] text-[#5f6368] leading-relaxed mb-6">
                Water damage restoration involves significant coordination with insurance companies. We simplify this process with detailed damage documentation, timestamped photographs, moisture readings and psychrometric data, itemized scope of work, and direct billing to your insurance carrier.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/about/"
                  className="px-6 py-3 bg-[#1a73e8] text-white rounded-full text-[14px] font-medium hover:bg-[#1557b0] transition-colors"
                >
                  Learn About Us
                </Link>
                <Link
                  to="/services/"
                  className="px-6 py-3 text-[#1a73e8] text-[14px] font-medium hover:underline"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Counter Row */}
      <AnimatedSection className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-[48px] md:text-[56px] font-light text-[#202124] tracking-tight">
                  <AnimatedCounter end={stat.value} />
                  {stat.label.includes('SATISFACTION') && '%'}
                </div>
                <p className="text-[12px] text-[#5f6368] uppercase tracking-[2px] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Steps */}
      <section className="py-24 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-white/60 text-[14px] uppercase tracking-wider mb-4">
                Our Water Damage Restoration Process
              </p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-white leading-tight mb-6">
                IICRC S500 Standard 6-Step Process
              </h2>
              <p className="text-[16px] text-white/70 leading-relaxed mb-12">
                Flood Doctor follows IICRC S500 standards for professional water damage restoration. Our systematic process ensures complete remediation and documentation for insurance purposes.
              </p>
              <div className="space-y-10">
                {processSteps.map((step, index) => (
                  <ProcessStep key={index} {...step} delay={index * 0.1} />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-white/10 rounded-2xl p-8 mb-8">
                <h3 className="text-[20px] font-semibold text-white mb-4">Common Causes of Water Damage</h3>
                <ul className="space-y-3">
                  {waterDamageCauses.map((cause, index) => (
                    <li key={index} className="flex items-center gap-3 text-[14px] text-white/80">
                      <AlertTriangle className="w-5 h-5 text-[#fbbc04] flex-shrink-0" />
                      {cause}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/request/"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#202124] rounded-full text-[14px] font-medium hover:bg-[#f8f9fa] transition-colors"
                >
                  Get Emergency Help Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
                Frequently Asked Questions
              </p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] leading-tight mb-6">
                Everything You Need to Know About Water Damage Restoration
              </h2>
              <div className="mt-8">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                ))}
              </div>
            </div>
            <div>
              <motion.div
                className="relative mb-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600"
                  alt="Water damage assessment"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>

              {/* Service Area */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6">
                <h4 className="font-semibold text-[#202124] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#1a73e8]" />
                  Areas We Serve
                </h4>
                <div className="grid grid-cols-2 gap-4 text-[14px] text-[#5f6368]">
                  <div>
                    <p className="font-medium text-[#202124] mb-2">Fairfax County</p>
                    <p>Vienna, McLean, Tysons, Reston, Herndon, Fairfax, Falls Church, Springfield</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#202124] mb-2">DC & Maryland</p>
                    <p>All DC neighborhoods, Bethesda, Silver Spring, Rockville, Potomac</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
              What Our Customers Say
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124]">
              Trusted by Northern Virginia Homeowners
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Client Logos / Trust Signals */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[14px] text-[#5f6368] mb-8">We work with all major insurance companies</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {['State Farm', 'Allstate', 'USAA', 'Nationwide', 'Liberty Mutual', 'Progressive'].map((name, index) => (
              <motion.div
                key={index}
                className="text-[18px] font-semibold text-[#5f6368]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ opacity: 1 }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#1a73e8] to-[#4285f4]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-[28px] md:text-[36px] font-semibold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Water Damage Emergency?
          </motion.h2>
          <motion.p
            className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Don't wait for regular business hours. Our emergency crews are ready 24/7 throughout Northern Virginia. Free damage assessment available.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/request/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1a73e8] rounded-full text-[14px] font-semibold hover:bg-[#f8f9fa] transition-colors"
            >
              <Phone className="w-5 h-5" />
              (877) 497-0007
            </Link>
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-full text-[14px] font-semibold hover:bg-white/20 transition-colors"
            >
              Request Free Assessment
            </Link>
          </motion.div>
          <motion.p
            className="mt-6 text-[14px] text-white/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Flood Doctor LLC • 8466D Tyco Rd, Vienna, VA 22182 • DPOR License #2705155505
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default LithoDev1;
