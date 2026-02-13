import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Phone,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  CheckCircle2,
  Star,
  Droplets,
  Shield,
  Zap,
  Search,
  Wind,
  Thermometer,
  AlertTriangle,
  Home,
  Building2,
  Stethoscope,
  Eye,
  Activity,
  Layers,
  Users,
  Award,
  Clock
} from 'lucide-react';

/**
 * LithoDev2: MOLD REMEDIATION SERVICES PAGE
 *
 * Layout: OUR SERVICES style from Litho React
 * Content: Professional mold remediation SEO content (~2,500 words)
 *
 * Sections:
 * 1. Breadcrumb header with title
 * 2. Two-column intro (Understanding mold)
 * 3. Numbered remediation process (7 steps)
 * 4. Service carousel with types of mold
 * 5. Feature boxes (Signs you need remediation)
 * 6. Pricing tables
 * 7. Testimonials
 * 8. Insurance company logos
 * 9. CTA footer
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

// Numbered service item
const NumberedService: React.FC<{
  number: string;
  title: string;
  description: string;
  delay?: number;
}> = ({ number, title, description, delay = 0 }) => (
  <motion.div
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <span className="text-[48px] font-light text-[#1a73e8]/20 group-hover:text-[#1a73e8]/40 transition-colors">
      {number}
    </span>
    <h3 className="text-[18px] font-semibold text-[#202124] mb-3 mt-2">{title}</h3>
    <p className="text-[14px] text-[#5f6368] leading-relaxed mb-4">{description}</p>
    <Link
      to="/services/residential/cleanup-services/mold-remediation/"
      className="text-[#1a73e8] text-[14px] font-medium flex items-center gap-2 hover:gap-3 transition-all"
    >
      Learn More <ArrowRight className="w-4 h-4" />
    </Link>
  </motion.div>
);

// Service card for carousel
const MoldTypeCard: React.FC<{
  title: string;
  color: string;
  description: string;
  delay?: number;
}> = ({ title, color, description, delay = 0 }) => (
  <motion.div
    className="bg-[#f8f9fa] rounded-2xl p-8 h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-4 h-4 rounded-full ${color}`} />
      <h3 className="text-[18px] font-semibold text-[#202124]">{title}</h3>
    </div>
    <p className="text-[14px] text-[#5f6368] leading-relaxed mb-4">{description}</p>
    <button className="text-[#1a73e8] text-[14px] font-medium hover:underline">
      learn more
    </button>
  </motion.div>
);

// Feature box
const FeatureBox: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    className="flex gap-5 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ea4335]/20 to-[#fbbc04]/20 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-[16px] font-semibold text-[#202124] mb-2">{title}</h3>
      <p className="text-[14px] text-[#5f6368] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// Pricing card
const PricingCard: React.FC<{
  tier: string;
  label: string;
  price: string;
  range: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}> = ({ tier, label, price, range, features, highlighted = false, delay = 0 }) => (
  <motion.div
    className={`rounded-2xl p-8 ${highlighted ? 'bg-[#1a73e8] text-white' : 'bg-white'} shadow-lg`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <span className={`text-[12px] uppercase tracking-wider ${highlighted ? 'text-white/70' : 'text-[#5f6368]'}`}>
      {tier}
    </span>
    <h3 className={`text-[14px] font-semibold uppercase mt-1 mb-4 ${highlighted ? 'text-white' : 'text-[#202124]'}`}>
      {label}
    </h3>
    <div className="flex items-baseline gap-1 mb-2">
      <span className={`text-[42px] font-light ${highlighted ? 'text-white' : 'text-[#202124]'}`}>
        {price}
      </span>
    </div>
    <span className={`text-[12px] uppercase ${highlighted ? 'text-white/70' : 'text-[#5f6368]'}`}>
      {range}
    </span>
    <ul className="mt-6 space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className={`text-[14px] flex items-center gap-2 ${highlighted ? 'text-white/90' : 'text-[#5f6368]'}`}>
          <CheckCircle2 className={`w-4 h-4 ${highlighted ? 'text-white' : 'text-[#34a853]'}`} />
          {feature}
        </li>
      ))}
    </ul>
    <Link
      to="/request/"
      className={`block text-center py-3 px-6 rounded-full text-[14px] font-medium transition-colors ${
        highlighted
          ? 'bg-white text-[#1a73e8] hover:bg-[#f8f9fa]'
          : 'bg-[#1a73e8] text-white hover:bg-[#1557b0]'
      }`}
    >
      Get Free Inspection
    </Link>
  </motion.div>
);

// Testimonial card
const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  location: string;
  delay?: number;
}> = ({ quote, name, location, delay = 0 }) => (
  <motion.div
    className="text-center px-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
      ))}
    </div>
    <p className="text-[14px] text-[#5f6368] leading-relaxed mb-6">"{quote}"</p>
    <p className="text-[14px] font-semibold text-[#202124] uppercase tracking-wider">{name}</p>
    <p className="text-[12px] text-[#5f6368]">{location}</p>
  </motion.div>
);

const LithoDev2: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const remediationSteps = [
    {
      number: '01',
      title: 'Inspection & Assessment',
      description: 'Visual inspection, moisture mapping with professional meters, thermal imaging to detect hidden moisture, and identification of mold extent and type.'
    },
    {
      number: '02',
      title: 'Containment',
      description: 'Plastic sheeting barriers isolating work area, negative air pressure using HEPA-filtered air scrubbers, and HVAC system sealing to prevent spore spread.'
    },
    {
      number: '03',
      title: 'Air Filtration',
      description: 'HEPA air scrubbers capturing particles down to 0.3 microns, negative air machines exhausting filtered air outside, protecting unaffected areas.'
    },
    {
      number: '04',
      title: 'Mold Removal',
      description: 'Removal of porous contaminated materials (drywall, insulation, carpet), cleaning of semi-porous materials, and treatment of non-porous surfaces.'
    },
    {
      number: '05',
      title: 'Cleaning & Treatment',
      description: 'HEPA vacuuming of all surfaces, antimicrobial treatment application, encapsulant on cleaned wood framing, and final air scrubbing.'
    },
    {
      number: '06',
      title: 'Moisture Source Correction',
      description: 'Identification and repair of plumbing leaks, roof failures, foundation moisture intrusion, condensation issues, and high indoor humidity sources.'
    },
    {
      number: '07',
      title: 'Clearance Testing',
      description: 'Visual inspection confirming no visible mold, moisture readings confirming dry conditions, air quality testing, and written clearance report.'
    },
  ];

  const moldTypes = [
    { title: 'Cladosporium', color: 'bg-[#202124]', description: 'Green or black, commonly grows on fabrics, wood surfaces, and HVAC systems. One of the most common indoor molds.' },
    { title: 'Penicillium', color: 'bg-[#1a73e8]', description: 'Blue or green appearance, spreads rapidly on water-damaged materials. Often found after flooding or leaks.' },
    { title: 'Aspergillus', color: 'bg-[#fbbc04]', description: 'Various colors, commonly found in HVAC ducts and insulation. Can cause respiratory issues in sensitive individuals.' },
    { title: 'Stachybotrys (Black Mold)', color: 'bg-[#202124]', description: 'Dark green/black, grows on high-cellulose materials after prolonged water exposure. Requires professional remediation.' },
    { title: 'Alternaria', color: 'bg-[#5f6368]', description: 'Dark green/brown, commonly found in showers, under sinks, and areas with chronic moisture. Causes allergic reactions.' },
  ];

  const signsFeatures = [
    { icon: <Eye className="w-5 h-5 text-[#ea4335]" />, title: 'Visible Mold Growth', description: 'Any visible mold larger than 10 square feet requires professional remediation. Smaller areas may hide larger problems.' },
    { icon: <Wind className="w-5 h-5 text-[#ea4335]" />, title: 'Musty Odors', description: 'Persistent musty or earthy smells, especially in basements, crawl spaces, or bathrooms, often indicate hidden mold growth.' },
    { icon: <Droplets className="w-5 h-5 text-[#ea4335]" />, title: 'Recent Water Damage', description: 'If your home experienced flooding or leaks not professionally dried within 48 hours, mold growth is likely present.' },
    { icon: <Stethoscope className="w-5 h-5 text-[#ea4335]" />, title: 'Health Symptoms', description: 'Unexplained respiratory symptoms, allergies, or headaches that improve when away from home may indicate mold.' },
    { icon: <Thermometer className="w-5 h-5 text-[#ea4335]" />, title: 'Condensation Problems', description: 'Persistent window condensation, wet walls, or high humidity indicates conditions favorable for mold growth.' },
    { icon: <AlertTriangle className="w-5 h-5 text-[#ea4335]" />, title: 'Visible Water Stains', description: 'Water stains on ceilings, walls, or floors indicate past or ongoing leaks that may have caused hidden mold.' },
  ];

  const pricingPlans = [
    {
      tier: 'Small area',
      label: '< 10 SQ FT',
      price: '$500',
      range: '- $1,500',
      features: ['Surface cleaning', 'Minor contamination', 'Single location', 'Basic documentation'],
    },
    {
      tier: 'Most common',
      label: '10-100 SQ FT',
      price: '$1,500',
      range: '- $5,000',
      features: ['Full containment', 'Material removal', 'Air filtration', 'Insurance coordination'],
      highlighted: true,
    },
    {
      tier: 'Large area',
      label: '100-300 SQ FT',
      price: '$3,000',
      range: '- $10,000',
      features: ['Multi-room treatment', 'HVAC cleaning', 'Clearance testing', 'Complete restoration'],
    },
  ];

  const testimonials = [
    { quote: 'Found black mold in our basement after a slow leak. Flood Doctor contained it properly and removed all contaminated drywall. No mold return in 2 years.', name: 'Patricia M.', location: 'Vienna, VA' },
    { quote: 'Professional, thorough, and honest. They told us what we actually needed instead of upselling. Mold is completely gone and they fixed the moisture source too.', name: 'Robert K.', location: 'McLean, VA' },
    { quote: 'The clearance testing gave us peace of mind. Air quality results showed the remediation was 100% successful. Worth every penny for our family\'s health.', name: 'Susan T.', location: 'Fairfax, VA' },
  ];

  const healthEffects = [
    'Coughing and wheezing',
    'Nasal congestion and sinus pressure',
    'Throat irritation',
    'Shortness of breath',
    'Sneezing and runny nose',
    'Red, itchy, watery eyes',
    'Skin rashes or hives',
    'Headaches',
  ];

  return (
    <main className="bg-[#f8f9fa]">
      {/* Breadcrumb Header */}
      <section className="bg-white py-8 border-b border-[#e8eaed]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-[32px] md:text-[42px] font-semibold text-[#202124]">Mold Remediation Services</h1>
              <p className="text-[14px] text-[#5f6368]">Northern Virginia • IICRC S520 Certified • Free Inspections</p>
            </div>
            <nav className="flex items-center gap-2 text-[14px]">
              <Link to="/" className="text-[#5f6368] hover:text-[#1a73e8]">Home</Link>
              <ChevronRight className="w-4 h-4 text-[#5f6368]" />
              <Link to="/services/" className="text-[#5f6368] hover:text-[#1a73e8]">Services</Link>
              <ChevronRight className="w-4 h-4 text-[#5f6368]" />
              <span className="text-[#202124]">Mold Remediation</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section className="bg-[#ea4335] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-[14px]">
              <strong>Mold threatens your family's health.</strong> Don't wait—get a free inspection today.
            </span>
            <a
              href="tel:8774970007"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#ea4335] rounded-full text-[14px] font-medium hover:bg-[#f8f9fa] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (877) 497-0007
            </a>
          </div>
        </div>
      </section>

      {/* Two Column Intro - Understanding Mold */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
                Understanding mold in your home
              </p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] leading-tight mb-6">
                Mold doesn't just damage your property—it threatens your family's health
              </h2>
              <p className="text-[16px] text-[#5f6368] leading-relaxed mb-6">
                When you discover mold in your Northern Virginia home, you need certified professionals who can safely remove the contamination and prevent it from returning. Flood Doctor provides comprehensive mold remediation throughout Northern Virginia, Washington DC, and Maryland, with IICRC-certified technicians trained in the latest removal techniques.
              </p>
              <p className="text-[16px] text-[#5f6368] leading-relaxed mb-8">
                We identify and address the moisture source causing your mold problem—because without fixing the cause, mold always returns. Whether you're dealing with visible mold growth after water damage or suspect hidden mold behind walls, our team provides thorough inspection, safe containment, complete removal, and prevention strategies.
              </p>

              {/* Mold requirements */}
              <div className="bg-[#f8f9fa] rounded-xl p-6 mb-8">
                <h4 className="text-[14px] font-semibold text-[#202124] mb-4">Mold requires three things to thrive:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Droplets className="w-5 h-5 text-[#1a73e8] mt-0.5" />
                    <div>
                      <span className="font-medium text-[#202124]">Moisture</span>
                      <span className="text-[#5f6368]"> — Humidity above 60% or direct water exposure</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-[#1a73e8] mt-0.5" />
                    <div>
                      <span className="font-medium text-[#202124]">Food source</span>
                      <span className="text-[#5f6368]"> — Wood, drywall, carpet, fabric, dust</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#1a73e8] mt-0.5" />
                    <div>
                      <span className="font-medium text-[#202124]">Time</span>
                      <span className="text-[#5f6368]"> — Mold can begin growing within 24-48 hours</span>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/services/"
                className="inline-flex items-center gap-2 text-[#1a73e8] text-[14px] font-medium hover:gap-3 transition-all"
              >
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600"
                  alt="Professional mold remediation technician"
                  className="rounded-2xl shadow-xl mb-8"
                />
              </motion.div>

              {/* Health effects box */}
              <div className="bg-[#fce8e6] rounded-xl p-6">
                <h4 className="text-[14px] font-semibold text-[#c5221f] mb-4 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" />
                  Health Effects of Mold Exposure
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {healthEffects.map((effect, index) => (
                    <div key={index} className="flex items-center gap-2 text-[13px] text-[#5f6368]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ea4335]" />
                      {effect}
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-[#5f6368] mt-4 italic">
                  At-risk: infants, elderly, those with asthma or weakened immune systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 7-Step Remediation Process */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
              IICRC S520 Standards
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] mb-4">
              Our 7-Step Mold Remediation Process
            </h2>
            <p className="text-[16px] text-[#5f6368] max-w-2xl mx-auto">
              Flood Doctor follows IICRC S520 standards for mold remediation, ensuring safe, effective, and documented removal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {remediationSteps.slice(0, 4).map((step, index) => (
              <NumberedService key={index} {...step} delay={index * 0.1} />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {remediationSteps.slice(4).map((step, index) => (
              <NumberedService key={index + 4} {...step} delay={(index + 4) * 0.1} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Types of Mold Carousel */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
                Common types of indoor mold
              </p>
              <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] leading-tight mb-6">
                All indoor mold should be remediated regardless of type
              </h2>
              <p className="text-[14px] text-[#5f6368] leading-relaxed mb-4">
                "Black mold" receives attention in media, but any significant mold growth poses health risks and indicates moisture problems requiring professional attention. Northern Virginia's humid summers and older housing stock create ideal conditions for mold growth.
              </p>
              <p className="text-[14px] text-[#5f6368] leading-relaxed mb-8">
                Basements, bathrooms, attics, and areas with past water damage are particularly vulnerable.
              </p>
              <div className="flex gap-4">
                <motion.button
                  className="w-12 h-12 rounded-full border-2 border-[#e8eaed] flex items-center justify-center text-[#5f6368] hover:border-[#1a73e8] hover:text-[#1a73e8] transition-colors"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="w-12 h-12 rounded-full border-2 border-[#e8eaed] flex items-center justify-center text-[#5f6368] hover:border-[#1a73e8] hover:text-[#1a73e8] transition-colors"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCarouselIndex(Math.min(2, carouselIndex + 1))}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="grid md:grid-cols-3 gap-6">
                {moldTypes.slice(carouselIndex, carouselIndex + 3).map((mold, index) => (
                  <MoldTypeCard key={index} {...mold} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DIY vs Professional */}
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] font-semibold text-white mb-2">When Professional Remediation Is Required</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-white/70">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ea4335]" /> Mold covers &gt;10 sq ft</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ea4335]" /> HVAC system affected</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ea4335]" /> Sewage caused the mold</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ea4335]" /> Structural materials affected</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ea4335]" /> Health sensitivities in home</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ea4335]" /> Mold returns after DIY</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Signs You Need Remediation */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
              Warning signs
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124]">
              Signs You Need Mold Remediation
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signsFeatures.map((feature, index) => (
              <FeatureBox key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Tables */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
              Transparent pricing
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#202124] mb-4">
              Mold Remediation Costs
            </h2>
            <p className="text-[14px] text-[#5f6368] max-w-2xl mx-auto">
              Costs vary based on contamination extent, location, and affected materials. We provide detailed estimates before work begins, with no hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
          </div>

          {/* Cost factors note */}
          <div className="mt-12 text-center">
            <p className="text-[14px] text-[#5f6368]">
              <strong>Factors affecting cost:</strong> Location (basement, attic, crawl space), material type, containment requirements, HVAC involvement, testing requirements.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#1a73e8] text-[14px] uppercase tracking-wider mb-4">
              Customer results
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

      {/* Insurance Coverage Info */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-[24px] font-semibold text-[#202124] mb-4">Insurance Coverage for Mold</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-[14px] font-semibold text-[#34a853] mb-2">✓ Typically Covered</h4>
                  <ul className="text-[14px] text-[#5f6368] space-y-1 ml-4">
                    <li>• Mold from a covered water event (burst pipe, storm)</li>
                    <li>• Remediation as part of larger water damage claim</li>
                    <li>• Testing required by insurance company</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#ea4335] mb-2">✗ Typically NOT Covered</h4>
                  <ul className="text-[14px] text-[#5f6368] space-y-1 ml-4">
                    <li>• Pre-existing mold or maintenance issues</li>
                    <li>• Mold discovered during renovation</li>
                    <li>• Flood-related mold (requires flood insurance)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[14px] text-[#5f6368] mb-4">
                Many policies include mold coverage caps ($5,000-$25,000). Flood Doctor works with insurance companies daily—we document findings thoroughly and communicate directly with adjusters.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                {['State Farm', 'Allstate', 'USAA', 'Nationwide', 'Liberty Mutual', 'Progressive'].map((name, index) => (
                  <motion.div
                    key={index}
                    className="text-[16px] font-semibold text-[#5f6368]"
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
          </div>
        </div>
      </AnimatedSection>

      {/* Service Area */}
      <AnimatedSection className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-[20px] font-semibold text-[#202124] mb-4">Service Area</h3>
          <p className="text-[14px] text-[#5f6368] max-w-4xl mx-auto leading-relaxed">
            <strong>Northern Virginia:</strong> Vienna, Fairfax, Arlington, Tysons, McLean, Falls Church, Annandale, Springfield, Alexandria, Reston, Herndon, Ashburn, Leesburg, Sterling, Manassas, Centreville, Chantilly, Burke, Lorton, Woodbridge, Great Falls, Oakton
          </p>
          <p className="text-[14px] text-[#5f6368] mt-2">
            <strong>Washington DC:</strong> All neighborhoods | <strong>Maryland:</strong> Bethesda, Silver Spring, College Park, and surrounding areas
          </p>
        </div>
      </AnimatedSection>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <motion.h2
                className="text-[24px] md:text-[32px] font-semibold text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Don't let mold threaten your family's health.
              </motion.h2>
              <p className="text-white/70 text-[14px]">
                Free inspections • IICRC S520 Certified • DPOR License #2705155505
              </p>
            </div>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="tel:8774970007"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#1a73e8] text-white rounded-full text-[14px] font-medium hover:bg-[#1557b0] transition-colors"
              >
                <Phone className="w-4 h-4" />
                (877) 497-0007
              </a>
            </motion.div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 text-[12px]">
              Flood Doctor LLC • 8466D Tyco Rd, Vienna, VA 22182 • Northern Virginia's Mold Remediation Experts
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LithoDev2;
