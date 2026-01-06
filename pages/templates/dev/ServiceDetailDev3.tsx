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
  Star
} from 'lucide-react';
import PageMeta from '../../../components/ui/PageMeta';
import { ServiceData } from '../../../types';
import ServiceAreaLinks from '../../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../../components/sections/RelatedServices';
import { useFranchise } from '@/hooks/useFranchise';

const googleEase = [0.22, 1, 0.36, 1];

/**
 * ServiceDetailDev3 - Vertical Timeline Layout
 *
 * Features:
 * - Clean hero with floating badges
 * - Vertical timeline for process steps
 * - Connected dots with animated lines
 * - Testimonial spotlight
 */

const demoService: ServiceData = {
  id: 'water-damage-restoration',
  title: 'Water Damage Restoration',
  slug: 'water-damage-restoration',
  category: 'RESTORATION',
  audience: 'RESIDENTIAL',
  shortDescription: 'Professional water damage restoration with 60-minute emergency response throughout Northern Virginia, DC, and Maryland.',
  heroIntro: 'Water damage doesn\'t wait for convenient times. Whether from a burst pipe, appliance failure, sewage backup, or storm flooding, water intrusion causes progressive damage to your home. Within hours, water saturates flooring, drywall, and insulation. Within days, mold begins growing in damp areas. Our IICRC-certified technicians respond 24/7, arriving with professional equipment to extract water, dry structures, and restore your home completely.',
  metaDescription: 'Expert water damage restoration in Northern Virginia. IICRC certified, 24/7 emergency response, insurance assistance. Call (877) 497-0007 for immediate flood cleanup.',
  whatWeDo: [
    {
      title: 'Emergency Contact & Dispatch',
      description: 'Your restoration begins with a single phone call to our 24/7 dispatch center. We gather essential information about your property location, water source, extent of visible damage, elapsed time since intrusion, and insurance details. We immediately dispatch the nearest available crew with an estimated arrival time—typically within 60 minutes anywhere in Northern Virginia.',
      substeps: ['24/7 live dispatch', 'Immediate crew assignment', 'GPS-tracked arrival', 'Pre-arrival guidance']
    },
    {
      title: 'Inspection & Damage Assessment',
      description: 'Upon arrival, our IICRC-certified technicians conduct a comprehensive damage assessment using advanced technology. We perform visual inspection of all affected areas, moisture mapping with infrared thermal cameras, moisture content readings in building materials, and complete documentation with photographs. We determine water category (1, 2, or 3) and damage class to guide our restoration plan and provide documentation for your insurance claim.',
      substeps: ['Infrared thermal imaging', 'Penetrating moisture meters', 'Category determination', 'Insurance documentation']
    },
    {
      title: 'Water Removal & Extraction',
      description: 'Standing water must be removed quickly to prevent structural damage and mold growth. Our extraction teams arrive equipped with truck-mounted extraction units with high-capacity removal rates, portable extractors for hard-to-reach areas, submersible pumps for basement flooding, weighted extraction tools for carpet and pad, and hard surface extractors for tile and hardwood. We often extract hundreds of gallons within the first hour, with complete water removal within hours of arrival.',
      substeps: ['Truck-mounted extraction', 'Submersible pumps', 'Carpet & hard surface tools', 'Hundreds of gallons per hour']
    },
    {
      title: 'Drying & Dehumidification',
      description: 'After extraction, professional drying removes moisture absorbed into building materials. Our structural drying process uses Low-grain refrigerant (LGR) dehumidifiers for efficient moisture removal, high-velocity air movers to accelerate evaporation, desiccant dehumidifiers for extreme humidity, Injectidry systems for wall cavity drying, and hardwood floor drying mats. We monitor drying progress daily with moisture meters and psychrometric calculations, ensuring structures reach dry standard. Most residential water damage requires 3-5 days of professional drying.',
      substeps: ['LGR dehumidifiers', 'High-velocity air movers', 'Wall cavity drying', 'Daily monitoring & readings']
    },
    {
      title: 'Cleaning & Sanitization',
      description: 'Once structures are dry, we thoroughly clean and sanitize all affected areas. This includes HEPA vacuuming of surfaces and contents, EPA-registered antimicrobial treatments to prevent mold growth, professional odor removal and air quality restoration, content cleaning and restoration, and duct cleaning when necessary. For sewage backups (Category 3 water), we follow strict IICRC S500 protocols including removal of porous materials, complete sanitization, and third-party clearance testing when required.',
      substeps: ['HEPA air scrubbing', 'Antimicrobial treatments', 'Odor elimination', 'Content restoration']
    },
    {
      title: 'Restoration & Reconstruction',
      description: 'Final restoration returns your property to pre-loss condition with quality craftsmanship. Our licensed contractors handle drywall repair or replacement, flooring installation (carpet, hardwood, tile, laminate), painting and finishing, trim and molding restoration, cabinet and fixture repair, and complete room reconstruction when needed. We coordinate directly with your insurance company throughout the process, providing detailed documentation and managing claims to ensure maximum coverage for your restoration.',
      substeps: ['Licensed contractors', 'Quality materials', 'Complete reconstruction', 'Insurance coordination']
    }
  ],
  faqs: [
    {
      question: 'How quickly can you respond to water emergencies?',
      answer: 'Flood Doctor maintains 24/7 emergency crews throughout Northern Virginia, DC, and Maryland. Our average response time is 60 minutes. We dispatch immediately upon receiving your call and provide an estimated arrival time. Our live dispatchers answer calls at all hours, and emergency crews are always available.'
    },
    {
      question: 'Does insurance cover water damage restoration?',
      answer: 'Most homeowner\'s insurance policies cover sudden and accidental water damage from sources like burst pipes, appliance failures, and storm damage. Flood damage (rising water from external sources) requires separate flood insurance. Gradual damage from deferred maintenance is typically not covered. We help you understand your coverage, document damage thoroughly with timestamped photographs, and provide direct billing to your insurance carrier.'
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'The restoration timeline depends on damage severity: Water extraction takes 1-4 hours depending on volume. Structural drying requires 3-5 days and is monitored daily. Cleaning and sanitization takes 1-2 days. Reconstruction varies based on scope, typically 1-4 weeks. Minor water damage may be complete in 4-5 days, while major damage with reconstruction may require 2-4 weeks.'
    },
    {
      question: 'What equipment do you use for water extraction?',
      answer: 'We use professional-grade extraction and drying equipment including truck-mounted extraction units capable of removing hundreds of gallons per hour, portable extractors and submersible pumps, LGR dehumidifiers removing 100+ pints per day, high-velocity air movers, infrared thermal imaging cameras, professional moisture meters, and HEPA air scrubbers for air quality.'
    },
    {
      question: 'Can you prevent mold after water damage?',
      answer: 'Yes, rapid response and proper drying prevent mold growth. Mold requires moisture to grow—if we dry your property within 24-48 hours and achieve dry standard in building materials, mold growth is prevented. We also apply EPA-registered antimicrobial treatments to inhibit mold even if drying takes longer. Our certified technicians are trained in mold prevention protocols.'
    },
    {
      question: 'What should I do before you arrive?',
      answer: 'If safe to do so: Turn off the water source at your main shutoff valve. Turn off electricity to affected areas at your breaker panel. Move valuables and furniture away from standing water. Take photographs of damage for insurance documentation. Do not use household vacuums on standing water as this creates electrical hazards. Our dispatch team will provide specific guidance for your situation.'
    },
    {
      question: 'How do I know if I need professional restoration?',
      answer: 'Professional restoration is recommended for: Water covering more than 10 square feet, water from unknown or contaminated sources, water standing more than 24 hours, water affecting walls, cabinets, or structural materials, any sewage backup situation, rental or investment properties requiring documentation, and any situation involving insurance claims. We offer free damage assessments—no obligation.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'Flood Doctor serves all of Northern Virginia including Fairfax, Arlington, Alexandria, Loudoun, and Prince William counties. We also serve Washington DC and Maryland including Bethesda, Silver Spring, Rockville, and surrounding areas. Our crews are strategically positioned throughout the DMV region for rapid response anywhere in our service area.'
    }
  ]
};

// Extended content sections for rich page content
const serviceIntro = {
  title: 'Professional Water Damage Restoration',
  paragraphs: [
    'Water damage restoration is a time-sensitive emergency that requires immediate professional intervention. When water enters your home—whether from a burst pipe, roof leak, appliance failure, or flooding—it begins causing damage within minutes. Flooring absorbs water and begins warping. Drywall wicks moisture upward. Insulation becomes saturated and loses effectiveness. Without rapid response, what starts as a manageable situation quickly becomes a major restoration project.',
    'Flood Doctor LLC provides comprehensive water damage restoration services throughout Northern Virginia, Washington DC, and Maryland. Our IICRC-certified technicians are available 24/7, responding to emergencies with professional equipment and proven methodologies. We don\'t just remove water—we restore your property completely, handling everything from initial extraction through final reconstruction.',
    'Our systematic approach follows IICRC S500 standards, the industry benchmark for water damage restoration. Every project includes thorough documentation for insurance purposes, daily communication about progress, and a commitment to returning your property to pre-loss condition.'
  ]
};

const damageTypes = [
  {
    title: 'Burst Pipes & Plumbing Failures',
    description: 'Plumbing failures account for the majority of residential water damage claims. Frozen pipes during Northern Virginia winters, corroded pipes in older homes, high water pressure, supply line failures at appliances, and water heater tank corrosion all cause sudden water release that can dump hundreds of gallons per hour into your home.',
    icon: '🔧'
  },
  {
    title: 'Appliance Malfunctions',
    description: 'Household appliances cause significant water damage when they fail. Washing machine hose bursts, dishwasher pump failures, refrigerator ice maker line leaks, and HVAC condensate drain clogs are common culprits. These failures often occur when homeowners are away, allowing water to spread unchecked.',
    icon: '🧊'
  },
  {
    title: 'Storm & Flood Damage',
    description: 'Northern Virginia experiences severe storms, hurricanes, and flooding events that damage hundreds of homes annually. Heavy rains overwhelm drainage systems, causing basement flooding. Wind damages roofs, allowing water intrusion. Our crews respond rapidly even during major weather events.',
    icon: '⛈️'
  },
  {
    title: 'Sewage Backups',
    description: 'Sewage backups create hazardous Category 3 water conditions requiring specialized cleanup. Main sewer line blockages from tree roots, municipal system overflows, and septic failures introduce pathogens into your home. Our technicians follow strict safety protocols for contaminated water removal.',
    icon: '⚠️'
  }
];

const testimonials = [
  {
    quote: 'Our basement flooded during a storm, and Flood Doctor had a crew there within an hour. They worked through the night to extract the water and saved our finished basement. Professional, courteous, and extremely knowledgeable.',
    author: 'Thomas H.',
    location: 'McLean, VA',
    rating: 5
  },
  {
    quote: 'A pipe burst while we were on vacation. We came home to major water damage. Flood Doctor handled everything—the water removal, the drying, the insurance claim, and the repairs. I can\'t thank them enough.',
    author: 'Patricia W.',
    location: 'Reston, VA',
    rating: 5
  },
  {
    quote: 'The team at Flood Doctor saved us thousands of dollars by responding quickly and preventing mold damage. Their equipment and expertise are top-notch.',
    author: 'Linda S.',
    location: 'Vienna, VA',
    rating: 5
  }
];

const whyChooseUs = [
  {
    title: 'IICRC Certified Technicians',
    description: 'All Flood Doctor technicians hold IICRC certifications in Water Damage Restoration (WRT), Applied Structural Drying (ASD), and related specializations. This industry-standard certification ensures our team follows established best practices for every project.'
  },
  {
    title: 'Direct Insurance Billing',
    description: 'We simplify the insurance process with detailed damage documentation, timestamped photographs, moisture readings, itemized estimates, and direct billing to your carrier. We\'ve worked with every major insurance company and understand their documentation requirements.'
  },
  {
    title: '60-Minute Response Time',
    description: 'Water damage worsens every hour. Our average response time throughout Northern Virginia is 60 minutes. We maintain emergency crews positioned strategically across our service area, ready to dispatch immediately upon your call.'
  },
  {
    title: 'Complete Restoration Services',
    description: 'Unlike companies that only handle extraction, Flood Doctor provides full-service restoration from emergency response through final reconstruction. One company, one point of contact, complete accountability for your project.'
  }
];

interface ServiceDetailDev3Props {
  service?: ServiceData;
}

const ServiceDetailDev3: React.FC<ServiceDetailDev3Props> = ({ service = demoService }) => {
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
        substeps: []
      };
    }
    return { number: idx + 1, title: step.title, description: step.description, substeps: step.substeps || [] };
  }) || [];

  const timelineColors = [
    { dot: 'bg-[#1a73e8]', line: 'from-[#1a73e8]', card: 'border-l-[#1a73e8]' },
    { dot: 'bg-[#ea8600]', line: 'from-[#ea8600]', card: 'border-l-[#ea8600]' },
    { dot: 'bg-[#34a853]', line: 'from-[#34a853]', card: 'border-l-[#34a853]' },
    { dot: 'bg-[#9334e6]', line: 'from-[#9334e6]', card: 'border-l-[#9334e6]' },
    { dot: 'bg-[#00bcd4]', line: 'from-[#00bcd4]', card: 'border-l-[#00bcd4]' },
    { dot: 'bg-[#ea4335]', line: 'from-[#ea4335]', card: 'border-l-[#ea4335]' }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${serviceName} | Flood Doctor`}
        description={service?.metaDescription || ''}
      />

      {/* Hero Section */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-br from-[#f8f9fa] via-white to-[#e8f0fe]/30">
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
              <h1 className="text-[44px] lg:text-[56px] font-bold text-[#202124] leading-[1.1] mb-6">
                {serviceName}
              </h1>
              <p className="text-xl text-[#5f6368] leading-relaxed mb-8">
                {service?.heroIntro || service?.shortDescription}
              </p>

              {/* Floating Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Clock, label: '60-Min Response', color: 'bg-[#e8f0fe] text-[#1a73e8]' },
                  { icon: Shield, label: 'IICRC Certified', color: 'bg-[#e6f4ea] text-[#34a853]' },
                  { icon: Star, label: '4.9★ Rating', color: 'bg-[#fef7e0] text-[#ea8600]' }
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex items-center gap-2 ${badge.color} rounded-full px-4 py-2`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <badge.icon size={16} />
                    <span className="font-medium text-sm">{badge.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/request/"
                  className="inline-flex items-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  to="tel:8774970007"
                  className="inline-flex items-center border-2 border-[#1a73e8] text-[#1a73e8] font-semibold px-8 py-4 rounded-full hover:bg-[#e8f0fe] transition-colors"
                >
                  <Phone size={18} className="mr-2" />
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
              {/* Floating stat card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e6f4ea] flex items-center justify-center">
                    <CheckCircle2 className="text-[#34a853]" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#202124]">5,000+</div>
                    <div className="text-sm text-[#5f6368]">Properties Restored</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-8">
              {serviceIntro.title}
            </h2>
            <div className="space-y-6">
              {serviceIntro.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-[#5f6368] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
              Common Causes of Water Damage
            </h2>
            <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
              Understanding water damage sources helps homeowners respond quickly and prevent future incidents in {cityName}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {damageTypes.map((type, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#dadce0]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-3xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-[#202124] mb-3">
                  {type.title}
                </h3>
                <p className="text-[#5f6368] leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Timeline Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[900px]">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] lg:text-[44px] font-bold text-[#202124] mb-4">
              Our 6-Step Restoration Process
            </h2>
            <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
              Flood Doctor follows IICRC S500 standards for professional water damage restoration. Our systematic approach ensures complete remediation and returns your property to pre-loss condition.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a73e8] via-[#34a853] to-[#ea4335]" />

            {processSteps.map((step, idx) => {
              const color = timelineColors[idx % 4];
              return (
                <motion.div
                  key={idx}
                  className="relative pl-20 pb-12 last:pb-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-5 w-7 h-7 rounded-full ${color.dot} flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.2, type: 'spring' }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className={`bg-[#f8f9fa] rounded-2xl p-6 border-l-4 ${color.card}`}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-[#202124] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#5f6368] mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    {step.substeps && step.substeps.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {step.substeps.map((substep, sidx) => (
                          <span
                            key={sidx}
                            className="inline-flex items-center gap-1.5 text-sm bg-white px-3 py-1.5 rounded-full text-[#5f6368]"
                          >
                            <CheckCircle2 size={14} className="text-[#34a853]" />
                            {substep}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
              Why Choose Flood Doctor?
            </h2>
            <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
              Trusted by thousands of homeowners throughout {cityName} for professional water damage restoration services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#dadce0]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-[#1a73e8]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#202124] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#5f6368] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-[#5f6368]">
              Real reviews from homeowners we've helped in {cityName}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-[#f8f9fa] rounded-2xl p-6 lg:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#fbbf24] fill-[#fbbf24]" />
                  ))}
                </div>
                <blockquote className="text-[#202124] leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm text-[#5f6368]">
                  <strong className="text-[#202124]">{testimonial.author}</strong> — {testimonial.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px]">
          <motion.h2
            className="text-[32px] lg:text-[40px] font-bold text-[#202124] text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Questions & Answers
          </motion.h2>

          <div className="space-y-4">
            {service?.faqs?.map((faq, idx) => {
              const isOpen = openFaqs.has(idx);
              return (
                <motion.div
                  key={idx}
                  className="border border-[#dadce0] rounded-xl overflow-hidden"
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
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-[#f8f9fa] transition-colors"
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
                        <p className="px-6 pb-5 text-[#5f6368] leading-relaxed border-t border-[#dadce0] pt-4">
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
      <section className="py-20 lg:py-28 bg-[#1a73e8]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] text-center">
          <motion.h2
            className="text-[36px] lg:text-[48px] font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Start Your Restoration Today
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            60-minute response. Free estimates. 15+ years of trusted service in {cityName}.
          </motion.p>
          <motion.div
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
              <ArrowRight className="ml-2" size={20} />
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

export default ServiceDetailDev3;
