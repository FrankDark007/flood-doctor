import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  Star,
  Droplets,
  Wind,
  Wrench,
  Search
} from 'lucide-react';
import PageMeta from '../../../components/ui/PageMeta';
import { ServiceData } from '../../../types';
import ServiceAreaLinks from '../../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../../components/sections/RelatedServices';
import { useFranchise } from '@/hooks/useFranchise';

const googleEase = [0.22, 1, 0.36, 1];

/**
 * ServiceDetailDev10 - Interactive Tabs Layout
 *
 * Features:
 * - Hero with tab navigation
 * - Process steps as interactive tabs
 * - Content switches without page reload
 * - Modern SaaS-style design
 */

const demoService: ServiceData = {
  id: 'water-damage-restoration',
  title: 'Water Damage Restoration',
  slug: 'water-damage-restoration',
  category: 'RESTORATION',
  audience: 'RESIDENTIAL',
  shortDescription: 'Professional water damage restoration with 60-minute emergency response throughout Northern Virginia, DC, and Maryland.',
  heroIntro: 'Water damage doesn\'t wait for convenient times. Whether from a burst pipe, appliance failure, sewage backup, or storm flooding, water intrusion causes progressive damage to your home. Within hours, water saturates flooring, drywall, and insulation. Our IICRC-certified technicians respond 24/7, arriving with professional equipment to extract water, dry structures, and restore your home completely.',
  metaDescription: 'Expert water damage restoration in Northern Virginia. IICRC certified, 24/7 emergency response, insurance assistance. Call (877) 497-0007 for immediate flood cleanup.',
  whatWeDo: [
    {
      title: 'Emergency Dispatch',
      description: 'Your restoration begins with a single phone call to our 24/7 dispatch center. We gather essential information about your property location, water source, extent of visible damage, elapsed time since intrusion, and insurance details. We immediately dispatch the nearest available crew with an estimated arrival time—typically within 60 minutes anywhere in Northern Virginia. Our dispatch team provides pre-arrival guidance on protecting your property and documents initial conditions.',
      substeps: ['24/7 live dispatch', 'GPS-tracked crew assignment', '60-minute response guarantee', 'Pre-arrival guidance', 'Initial documentation']
    },
    {
      title: 'Damage Assessment',
      description: 'Upon arrival, our IICRC-certified technicians conduct a comprehensive damage assessment using advanced technology. We perform visual inspection of all affected areas, moisture mapping with infrared thermal cameras that reveal hidden moisture behind walls and under floors, moisture content readings in building materials with penetrating meters, and complete documentation with timestamped photographs. We determine water category (1, 2, or 3) and damage class to guide our restoration plan and provide insurance documentation.',
      substeps: ['Infrared thermal imaging', 'Penetrating moisture meters', 'Water category determination', 'Insurance documentation', 'Comprehensive restoration plan']
    },
    {
      title: 'Water Extraction',
      description: 'Standing water must be removed quickly to prevent structural damage and mold growth. Our extraction teams arrive equipped with truck-mounted extraction units capable of removing hundreds of gallons per hour, portable extractors for hard-to-reach areas and tight spaces, submersible pumps for basement flooding and deep water situations, weighted extraction tools for carpet and pad, and hard surface extractors for tile, laminate, and hardwood floors. We often extract hundreds of gallons within the first hour, preventing secondary damage.',
      substeps: ['Truck-mounted extraction', 'Submersible pumps', 'Carpet & hard surface tools', 'Content protection', 'Mold prevention']
    },
    {
      title: 'Structural Drying',
      description: 'After extraction, professional drying removes moisture absorbed into building materials. Our structural drying process uses Low-grain refrigerant (LGR) dehumidifiers for efficient moisture removal from the air, high-velocity air movers to accelerate evaporation from surfaces, desiccant dehumidifiers for extreme humidity conditions, Injectidry systems for wall cavity drying without demolition, and hardwood floor drying mats for wood floor preservation. We monitor drying progress daily with moisture meters and psychrometric calculations, ensuring structures reach dry standard before completing restoration.',
      substeps: ['LGR dehumidifiers', 'High-velocity air movers', 'Injectidry wall systems', 'Daily moisture monitoring', 'Psychrometric calculations']
    },
    {
      title: 'Sanitization',
      description: 'Once structures are dry, we thoroughly clean and sanitize all affected areas. This includes HEPA vacuuming of surfaces and contents to remove particulates, EPA-registered antimicrobial treatments to prevent mold growth and kill bacteria, professional odor removal using thermal fogging and hydroxyl generators, content cleaning and restoration services, and duct cleaning when HVAC systems are affected. For sewage backups (Category 3 water), we follow strict IICRC S500 protocols including removal of porous materials, complete sanitization, and third-party clearance testing when required.',
      substeps: ['HEPA air scrubbing', 'Antimicrobial treatment', 'Odor elimination', 'Content restoration', 'IICRC S500 protocols']
    },
    {
      title: 'Reconstruction',
      description: 'Final restoration returns your property to pre-loss condition with quality craftsmanship. Our licensed contractors handle drywall repair or replacement including taping, mudding, and texture matching, flooring installation for carpet, hardwood, tile, and laminate, painting and finishing with proper color matching, trim, molding, and baseboard restoration, cabinet and fixture repair or replacement, and complete room reconstruction when needed. We coordinate directly with your insurance company throughout the process, providing detailed documentation and managing claims to ensure maximum coverage.',
      substeps: ['Licensed contractors', 'Quality materials', 'Complete reconstruction', 'Color & texture matching', 'Insurance coordination']
    }
  ],
  faqs: [
    {
      question: 'How quickly can you respond to water emergencies?',
      answer: 'Flood Doctor maintains 24/7 emergency crews throughout Northern Virginia, DC, and Maryland. Our average response time is 60 minutes. We dispatch immediately upon receiving your call and provide an estimated arrival time. Our live dispatchers answer calls at all hours, and emergency crews are always available regardless of weather conditions or holidays.'
    },
    {
      question: 'Does insurance cover water damage restoration?',
      answer: 'Most homeowner\'s insurance policies cover sudden and accidental water damage from sources like burst pipes, appliance failures, and storm damage. Flood damage (rising water from external sources) requires separate flood insurance. Gradual damage from deferred maintenance is typically not covered. We help you understand your coverage, document damage thoroughly with timestamped photographs and moisture readings, and provide direct billing to your insurance carrier. We\'ve worked with every major insurance company.'
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'The restoration timeline depends on damage severity: Water extraction typically takes 1-4 hours depending on volume. Structural drying requires 3-5 days and is monitored daily with moisture meters. Cleaning and sanitization takes 1-2 days. Reconstruction varies based on scope, typically 1-4 weeks for most projects. Minor water damage may be complete in 4-5 days total, while major damage with reconstruction may require 2-4 weeks.'
    },
    {
      question: 'What equipment do you use for water extraction?',
      answer: 'We use professional-grade extraction and drying equipment including truck-mounted extraction units capable of removing hundreds of gallons per hour, portable extractors and submersible pumps for various water depths, LGR dehumidifiers removing 100+ pints per day, high-velocity air movers for accelerated evaporation, infrared thermal imaging cameras for hidden moisture detection, professional moisture meters, and HEPA air scrubbers for air quality.'
    },
    {
      question: 'Can you prevent mold after water damage?',
      answer: 'Yes, rapid response and proper drying prevent mold growth. Mold requires moisture to grow—if we dry your property within 24-48 hours and achieve dry standard in building materials, mold growth is prevented. We also apply EPA-registered antimicrobial treatments to inhibit mold even if drying takes longer due to extensive damage. Our certified technicians are trained in mold prevention protocols and monitor moisture levels throughout the drying process.'
    },
    {
      question: 'What should I do before you arrive?',
      answer: 'If safe to do so: Turn off the water source at your main shutoff valve if a plumbing failure is involved. Turn off electricity to affected areas at your breaker panel. Move valuables and furniture away from standing water if possible. Take photographs of damage for insurance documentation. Do not use household vacuums on standing water as this creates electrical hazards and can damage the vacuum. Our dispatch team will provide specific guidance for your situation.'
    },
    {
      question: 'How do I know if I need professional restoration?',
      answer: 'Professional restoration is recommended for: Water covering more than 10 square feet, water from unknown or contaminated sources, water that has been standing more than 24 hours, water affecting walls, cabinets, or structural materials, any sewage backup situation, rental or investment properties requiring documentation, and any situation involving insurance claims. We offer free damage assessments with no obligation throughout Northern Virginia.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'Flood Doctor serves all of Northern Virginia including Fairfax, Arlington, Alexandria, Loudoun, and Prince William counties. We also serve Washington DC and Maryland including Bethesda, Silver Spring, Rockville, Gaithersburg, and surrounding areas. Our crews are strategically positioned throughout the DMV region for rapid response anywhere in our service area. We can typically arrive within 60 minutes of your call.'
    }
  ]
};

const tabIcons = [Search, Droplets, Wind, Wrench, Shield, Star];

// Extended content for tabs layout
const introContent = {
  lead: 'Water damage restoration is a time-sensitive emergency that requires immediate professional intervention.',
  paragraphs: [
    'When water enters your home—whether from a burst pipe, roof leak, appliance failure, or flooding—it begins causing damage within minutes. Flooring absorbs water and begins warping. Drywall wicks moisture upward. Insulation becomes saturated and loses effectiveness. Without rapid response, what starts as a manageable situation quickly becomes a major restoration project.',
    'Flood Doctor LLC provides comprehensive water damage restoration services throughout Northern Virginia, Washington DC, and Maryland. Our IICRC-certified technicians are available 24/7, responding to emergencies with professional equipment and proven methodologies that follow IICRC S500 standards—the industry benchmark for water damage restoration.'
  ]
};

const trustStats = [
  { value: '60', unit: 'min', label: 'Average Response Time' },
  { value: '5,000+', unit: '', label: 'Properties Restored' },
  { value: '4.9', unit: '★', label: 'Google Rating' },
  { value: '15+', unit: 'yrs', label: 'Experience' }
];

const whyChooseUs = [
  {
    title: '60-Minute Response',
    description: 'Our average response time throughout Northern Virginia is 60 minutes. We maintain emergency crews positioned strategically across our service area, ready to dispatch immediately upon your call.'
  },
  {
    title: 'IICRC Certified',
    description: 'All Flood Doctor technicians hold IICRC certifications in Water Damage Restoration (WRT), Applied Structural Drying (ASD), and related specializations ensuring best practices.'
  },
  {
    title: 'Direct Insurance Billing',
    description: 'We simplify the insurance process with detailed documentation, timestamped photographs, moisture readings, itemized estimates, and direct billing to your carrier.'
  },
  {
    title: 'Complete Restoration',
    description: 'Unlike companies that only handle extraction, Flood Doctor provides full-service restoration from emergency response through final reconstruction. One company, complete accountability.'
  }
];

const damageTypes = [
  {
    title: 'Burst Pipes & Plumbing Failures',
    description: 'Frozen pipes in winter, corroded supply lines, and failed water heater tanks are leading causes of indoor flooding. A single burst pipe can release hundreds of gallons per hour, saturating flooring, walls, and belongings. Immediate shutoff and professional extraction prevent catastrophic structural damage.',
    icon: '🔧',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Appliance Malfunctions',
    description: 'Washing machines, dishwashers, refrigerators with ice makers, and water heaters fail without warning. Supply hoses deteriorate, drain pumps malfunction, and seals fail. These failures often occur while homeowners are away, allowing water to spread for hours before discovery.',
    icon: '🏠',
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Roof Leaks & Storm Damage',
    description: 'Severe storms, wind damage, and roof deterioration allow water intrusion from above. Attic spaces, ceilings, and interior walls absorb water that spreads throughout the structure. Hidden leaks may cause progressive damage for weeks before becoming visible.',
    icon: '🌧️',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    title: 'Sewage Backups',
    description: 'Sewer line blockages, municipal system overflows, and septic failures create Category 3 water damage—the most hazardous type. Sewage contains bacteria, viruses, and pathogens requiring specialized IICRC S500 protocols, personal protective equipment, and thorough sanitization.',
    icon: '⚠️',
    color: 'bg-red-50 border-red-200'
  }
];

interface ServiceDetailDev10Props {
  service?: ServiceData;
}

const ServiceDetailDev10: React.FC<ServiceDetailDev10Props> = ({ service = demoService }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const franchise = useFranchise();
  const isLocalPage = franchise.id !== 'hq';
  const cityName = isLocalPage ? franchise.name : 'Northern Virginia';
  const serviceName = service?.title || 'Water Damage Restoration';

  const processSteps = service?.whatWeDo?.slice(0, 6).map((step, idx) => {
    if (typeof step === 'string') {
      const colonIndex = step.indexOf(':');
      return {
        number: idx + 1,
        title: colonIndex > 0 ? step.substring(0, colonIndex).trim() : step,
        description: colonIndex > 0 ? step.substring(colonIndex + 1).trim() : '',
        substeps: [],
        icon: tabIcons[idx]
      };
    }
    return {
      number: idx + 1,
      title: step.title,
      description: step.description,
      substeps: step.substeps || [],
      icon: tabIcons[idx]
    };
  }) || [];

  const images = [
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${serviceName} | Flood Doctor`}
        description={service?.metaDescription || ''}
      />

      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#5f6368] mb-8">
            <Link to="/" className="hover:text-[#1a73e8]">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services/" className="hover:text-[#1a73e8]">Services</Link>
            <ChevronRight size={14} />
            <span className="text-[#202124]">{serviceName}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: googleEase }}
            >
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: Clock, label: '60-Min Response', color: 'bg-[#e8f0fe] text-[#1a73e8]' },
                  { icon: Shield, label: 'IICRC Certified', color: 'bg-[#e6f4ea] text-[#34a853]' },
                  { icon: Star, label: '4.9★ Rating', color: 'bg-[#fef7e0] text-[#ea8600]' }
                ].map((badge, idx) => (
                  <span key={idx} className={`flex items-center gap-2 ${badge.color} px-4 py-2 rounded-full text-sm font-medium`}>
                    <badge.icon size={14} />
                    {badge.label}
                  </span>
                ))}
              </div>

              <h1 className="text-[40px] lg:text-[52px] font-bold text-[#202124] leading-[1.1] mb-6">
                {serviceName}
              </h1>
              <p className="text-xl text-[#5f6368] leading-relaxed mb-8">
                {service?.heroIntro || service?.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/request/"
                  className="inline-flex items-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold px-8 py-4 rounded-full transition-colors"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  to="tel:8774970007"
                  className="inline-flex items-center border border-[#dadce0] hover:bg-[#f8f9fa] text-[#202124] font-semibold px-8 py-4 rounded-full transition-colors"
                >
                  <Phone size={18} className="mr-2 text-[#1a73e8]" />
                  (877) 497-0007
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt={serviceName}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[28px] lg:text-[36px] font-bold text-[#202124] mb-6">
                Understanding Water Damage Restoration
              </h2>
              <p className="text-xl text-[#5f6368] leading-relaxed mb-6">
                {introContent.lead}
              </p>
              {introContent.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-[#5f6368] leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              className="bg-[#f8f9fa] rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[#202124] mb-6">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {trustStats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-[#1a73e8]">
                      {stat.value}<span className="text-xl">{stat.unit}</span>
                    </div>
                    <div className="text-sm text-[#5f6368] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Causes Section */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#202124] mb-4">
              Common Causes of Water Damage
            </h2>
            <p className="text-lg text-[#5f6368] max-w-3xl mx-auto">
              Understanding what causes water damage helps you prevent future incidents and recognize when professional restoration is needed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {damageTypes.map((damage, idx) => (
              <motion.div
                key={idx}
                className={`${damage.color} border rounded-2xl p-6 hover:shadow-md transition-shadow`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{damage.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#202124] mb-2">
                      {damage.title}
                    </h3>
                    <p className="text-[#5f6368] leading-relaxed">
                      {damage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] lg:text-[44px] font-bold text-[#202124] mb-4">
              Our Restoration Process
            </h2>
            <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
              Our comprehensive six-step restoration process follows IICRC S500 standards for complete water damage recovery.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeTab === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all ${
                    isActive
                      ? 'bg-[#1a73e8] text-white shadow-lg'
                      : 'bg-[#f8f9fa] text-[#5f6368] hover:bg-[#e8f0fe] hover:text-[#1a73e8]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{step.title}</span>
                  <span className="sm:hidden">Step {step.number}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={images[activeTab]}
                    alt={processSteps[activeTab]?.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-12 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-xl font-bold">
                      {processSteps[activeTab]?.number}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#202124]">
                      {processSteps[activeTab]?.title}
                    </h3>
                  </div>

                  <p className="text-lg text-[#5f6368] leading-relaxed mb-8">
                    {processSteps[activeTab]?.description}
                  </p>

                  {processSteps[activeTab]?.substeps && processSteps[activeTab].substeps.length > 0 && (
                    <div className="grid sm:grid-cols-2 gap-3">
                      {processSteps[activeTab].substeps.map((substep, sidx) => (
                        <motion.div
                          key={sidx}
                          className="flex items-center gap-3 bg-[#f8f9fa] rounded-lg px-4 py-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: sidx * 0.05 }}
                        >
                          <CheckCircle2 size={18} className="text-[#34a853] flex-shrink-0" />
                          <span className="text-[#202124]">{substep}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tab Progress Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {processSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTab === idx ? 'bg-[#1a73e8] w-8' : 'bg-[#dadce0] hover:bg-[#9aa0a6]'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
              Why {cityName} Trusts Flood Doctor
            </h2>
            <p className="text-lg text-[#5f6368] max-w-3xl mx-auto">
              When water damage strikes, you need a restoration company with the experience, certifications, and commitment to restore your property completely. Here's why thousands of homeowners choose Flood Doctor.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, idx) => {
              const icons = [Clock, Shield, Star, CheckCircle2];
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={idx}
                  className="bg-[#f8f9fa] rounded-2xl p-8 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-[#e8f0fe] flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-[#1a73e8]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#202124] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#5f6368] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px]">
          <motion.h2
            className="text-[32px] lg:text-[40px] font-bold text-[#202124] text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {service?.faqs?.map((faq, idx) => {
              const isOpen = openFaqs.has(idx);
              return (
                <motion.div
                  key={idx}
                  className="bg-[#f8f9fa] rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <button
                    onClick={() => {
                      const newSet = new Set(openFaqs);
                      isOpen ? newSet.delete(idx) : newSet.add(idx);
                      setOpenFaqs(newSet);
                    }}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-[#202124]">{faq.question}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown size={20} className="text-[#5f6368]" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="px-6 pb-5 text-[#5f6368] leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1a73e8] to-[#1557b0]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] text-center">
          <motion.h2
            className="text-[36px] lg:text-[48px] font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Restore Your Property?
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get a free estimate from {cityName}'s most trusted restoration company.
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
              className="inline-flex items-center justify-center bg-white text-[#1a73e8] font-semibold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link
              to="tel:8774970007"
              className="inline-flex items-center justify-center bg-white/10 border border-white/30 text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-white/20 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call Now
            </Link>
          </motion.div>
        </div>
      </section>

      <RelatedServices
        currentServiceId={service.id}
        category={service.category}
        audience={service.audience}
      />

      <ServiceAreaLinks serviceTitle={service.title} serviceSlug={service.slug} />
    </main>
  );
};

export default ServiceDetailDev10;
