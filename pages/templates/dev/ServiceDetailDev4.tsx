import React, { useState, useEffect } from 'react';
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
  Award,
  Home,
  FileText,
  Wrench
} from 'lucide-react';
import PageMeta from '../../../components/ui/PageMeta';
import { ServiceData } from '../../../types';
import ServiceAreaLinks from '../../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../../components/sections/RelatedServices';
import { useFranchise } from '@/hooks/useFranchise';

const googleEase = [0.22, 1, 0.36, 1];

/**
 * ServiceDetailDev4 - Split Screen Layout
 *
 * Features:
 * - Persistent sticky sidebar with CTA
 * - Main content area with scrolling sections
 * - Visual separation between info and action
 * - Progress indicator in sidebar
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
      description: 'Upon arrival, our IICRC-certified technicians conduct a comprehensive damage assessment using advanced technology. We perform visual inspection of all affected areas, moisture mapping with infrared thermal cameras, moisture content readings in building materials, and complete documentation with photographs. We determine water category (1, 2, or 3) and damage class to guide our restoration plan.',
      substeps: ['Infrared thermal imaging', 'Penetrating moisture meters', 'Category determination', 'Insurance documentation']
    },
    {
      title: 'Water Removal & Extraction',
      description: 'Standing water must be removed quickly to prevent structural damage and mold growth. Our extraction teams arrive equipped with truck-mounted extraction units with high-capacity removal rates, portable extractors for hard-to-reach areas, submersible pumps for basement flooding, and hard surface extractors for tile and hardwood. We often extract hundreds of gallons within the first hour.',
      substeps: ['Truck-mounted extraction', 'Submersible pumps', 'Carpet & hard surface tools', 'Hundreds of gallons per hour']
    },
    {
      title: 'Drying & Dehumidification',
      description: 'After extraction, professional drying removes moisture absorbed into building materials. Our structural drying process uses Low-grain refrigerant (LGR) dehumidifiers for efficient moisture removal, high-velocity air movers to accelerate evaporation, and Injectidry systems for wall cavity drying. We monitor drying progress daily with moisture meters and psychrometric calculations.',
      substeps: ['LGR dehumidifiers', 'High-velocity air movers', 'Wall cavity drying', 'Daily monitoring']
    },
    {
      title: 'Cleaning & Sanitization',
      description: 'Once structures are dry, we thoroughly clean and sanitize all affected areas. This includes HEPA vacuuming of surfaces and contents, EPA-registered antimicrobial treatments to prevent mold growth, professional odor removal and air quality restoration. For sewage backups (Category 3 water), we follow strict IICRC S500 protocols.',
      substeps: ['HEPA air scrubbing', 'Antimicrobial treatments', 'Odor elimination', 'Content restoration']
    },
    {
      title: 'Restoration & Reconstruction',
      description: 'Final restoration returns your property to pre-loss condition with quality craftsmanship. Our licensed contractors handle drywall repair or replacement, flooring installation, painting and finishing, trim and molding restoration, and complete room reconstruction when needed. We coordinate directly with your insurance company throughout the process.',
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
      answer: 'Most homeowner\'s insurance policies cover sudden and accidental water damage from sources like burst pipes, appliance failures, and storm damage. Flood damage (rising water from external sources) requires separate flood insurance. Gradual damage from deferred maintenance is typically not covered. We help you understand your coverage, document damage thoroughly, and provide direct billing to your insurance carrier.'
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'The restoration timeline depends on damage severity: Water extraction takes 1-4 hours depending on volume. Structural drying requires 3-5 days and is monitored daily. Cleaning and sanitization takes 1-2 days. Reconstruction varies based on scope, typically 1-4 weeks. Minor water damage may be complete in 4-5 days, while major damage with reconstruction may require 2-4 weeks.'
    },
    {
      question: 'What equipment do you use for water extraction?',
      answer: 'We use professional-grade extraction and drying equipment including truck-mounted extraction units capable of removing hundreds of gallons per hour, portable extractors and submersible pumps, LGR dehumidifiers removing 100+ pints per day, high-velocity air movers, infrared thermal imaging cameras, professional moisture meters, and HEPA air scrubbers.'
    },
    {
      question: 'Can you prevent mold after water damage?',
      answer: 'Yes, rapid response and proper drying prevent mold growth. Mold requires moisture to grow—if we dry your property within 24-48 hours and achieve dry standard in building materials, mold growth is prevented. We also apply EPA-registered antimicrobial treatments to inhibit mold even if drying takes longer.'
    },
    {
      question: 'What should I do before you arrive?',
      answer: 'If safe to do so: Turn off the water source at your main shutoff valve. Turn off electricity to affected areas at your breaker panel. Move valuables and furniture away from standing water. Take photographs of damage for insurance documentation. Do not use household vacuums on standing water as this creates electrical hazards.'
    },
    {
      question: 'How do I know if I need professional restoration?',
      answer: 'Professional restoration is recommended for: Water covering more than 10 square feet, water from unknown or contaminated sources, water standing more than 24 hours, water affecting walls, cabinets, or structural materials, any sewage backup situation, rental or investment properties, and any situation involving insurance claims.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'Flood Doctor serves all of Northern Virginia including Fairfax, Arlington, Alexandria, Loudoun, and Prince William counties. We also serve Washington DC and Maryland including Bethesda, Silver Spring, Rockville, and surrounding areas. Our crews are strategically positioned throughout the DMV region for rapid response anywhere in our service area.'
    }
  ]
};

// Extended content for split-screen layout
const overviewContent = {
  intro: 'Water damage restoration is a time-sensitive emergency that requires immediate professional intervention. When water enters your home—whether from a burst pipe, roof leak, appliance failure, or flooding—it begins causing damage within minutes. Flooring absorbs water and begins warping. Drywall wicks moisture upward. Insulation becomes saturated and loses effectiveness.',
  whyProfessional: 'Without rapid response, what starts as a manageable situation quickly becomes a major restoration project. Flood Doctor LLC provides comprehensive water damage restoration services throughout Northern Virginia, Washington DC, and Maryland. Our IICRC-certified technicians are available 24/7, responding to emergencies with professional equipment and proven methodologies.',
  approach: 'Our systematic approach follows IICRC S500 standards, the industry benchmark for water damage restoration. Every project includes thorough documentation for insurance purposes, daily communication about progress, and a commitment to returning your property to pre-loss condition.'
};

const damageTypes = [
  {
    title: 'Burst Pipes & Plumbing Failures',
    description: 'Plumbing failures account for the majority of residential water damage claims. Frozen pipes during Northern Virginia winters, corroded pipes in older homes, high water pressure, supply line failures at appliances, and water heater tank corrosion all cause sudden water release that can dump hundreds of gallons per hour into your home.'
  },
  {
    title: 'Appliance Malfunctions',
    description: 'Household appliances cause significant water damage when they fail. Washing machine hose bursts, dishwasher pump failures, refrigerator ice maker line leaks, and HVAC condensate drain clogs are common culprits. These failures often occur when homeowners are away, allowing water to spread unchecked.'
  },
  {
    title: 'Storm & Flood Damage',
    description: 'Northern Virginia experiences severe storms, hurricanes, and flooding events that damage hundreds of homes annually. Heavy rains overwhelm drainage systems, causing basement flooding. Wind damages roofs, allowing water intrusion. Our crews respond rapidly even during major weather events.'
  },
  {
    title: 'Sewage Backups',
    description: 'Sewage backups create hazardous Category 3 water conditions requiring specialized cleanup. Main sewer line blockages from tree roots, municipal system overflows, and septic failures introduce pathogens into your home. Our technicians follow strict safety protocols for contaminated water removal.'
  }
];

const whyChooseUs = [
  {
    title: 'IICRC Certified Technicians',
    description: 'All Flood Doctor technicians hold IICRC certifications in Water Damage Restoration (WRT), Applied Structural Drying (ASD), and related specializations. This ensures our team follows established best practices.'
  },
  {
    title: 'Direct Insurance Billing',
    description: 'We simplify the insurance process with detailed damage documentation, timestamped photographs, moisture readings, itemized estimates, and direct billing to your carrier.'
  },
  {
    title: '60-Minute Response Time',
    description: 'Water damage worsens every hour. Our average response time throughout Northern Virginia is 60 minutes. We maintain emergency crews positioned strategically across our service area.'
  },
  {
    title: 'Complete Restoration Services',
    description: 'Unlike companies that only handle extraction, Flood Doctor provides full-service restoration from emergency response through final reconstruction. One company, complete accountability.'
  }
];

const testimonials = [
  {
    quote: 'Our basement flooded during a storm, and Flood Doctor had a crew there within an hour. They worked through the night to extract the water and saved our finished basement.',
    author: 'Thomas H.',
    location: 'McLean, VA'
  },
  {
    quote: 'A pipe burst while we were on vacation. Flood Doctor handled everything—the water removal, the drying, the insurance claim, and the repairs. I can\'t thank them enough.',
    author: 'Patricia W.',
    location: 'Reston, VA'
  }
];

interface ServiceDetailDev4Props {
  service?: ServiceData;
}

const ServiceDetailDev4: React.FC<ServiceDetailDev4Props> = ({ service = demoService }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const franchise = useFranchise();
  const isLocalPage = franchise.id !== 'hq';
  const cityName = isLocalPage ? franchise.name : 'Northern Virginia';
  const serviceName = service?.title || 'Water Damage Restoration';

  const sections = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'causes', label: 'Common Causes', icon: FileText },
    { id: 'process', label: 'Our Process', icon: Wrench },
    { id: 'why-us', label: 'Why Choose Us', icon: Award },
    { id: 'faq', label: 'FAQ', icon: FileText }
  ];

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

  // Track active section on scroll
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-100px 0px -50% 0px'
    });

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${serviceName}`}
        description={service?.metaDescription || ''}
      />

      {/* Breadcrumb */}
      <div className="bg-[#f8f9fa] border-b border-[#dadce0]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] py-4">
          <nav className="flex items-center gap-2 text-sm text-[#5f6368]">
            <Link to="/" className="hover:text-[#1a73e8]">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services/" className="hover:text-[#1a73e8]">Services</Link>
            <ChevronRight size={14} />
            <span className="text-[#202124]">{serviceName}</span>
          </nav>
        </div>
      </div>

      {/* Split Layout */}
      <div className="lg:grid lg:grid-cols-[1fr_380px]">
        {/* Main Content */}
        <div className="border-r border-[#dadce0]">
          {/* Overview Section */}
          <section id="overview" className="py-16 lg:py-24">
            <div className="px-7 sm:px-10 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: googleEase }}
              >
                <span className="inline-block px-3 py-1 bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium rounded-full mb-4">
                  {cityName}
                </span>
                <h1 className="text-[40px] lg:text-[52px] font-bold text-[#202124] leading-[1.1] mb-6">
                  {serviceName}
                </h1>
                <p className="text-xl text-[#5f6368] leading-relaxed mb-8 max-w-2xl">
                  {service?.heroIntro || service?.shortDescription}
                </p>

                {/* Trust badges inline */}
                <div className="flex flex-wrap gap-6 mb-10">
                  {[
                    { icon: Clock, text: '60-Min Response' },
                    { icon: Shield, text: 'IICRC Certified' },
                    { icon: Star, text: '4.9★ Google Rating' },
                    { icon: Award, text: '15+ Years Experience' }
                  ].map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#5f6368]">
                      <badge.icon size={18} className="text-[#1a73e8]" />
                      <span className="text-sm font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>

                {/* Hero image */}
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-12">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                    alt={serviceName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Extended overview content */}
                <div className="prose prose-lg max-w-none space-y-6">
                  <h2 className="text-2xl font-bold text-[#202124] mb-4">
                    Professional Water Damage Restoration
                  </h2>
                  <p className="text-[#5f6368] leading-relaxed">
                    {overviewContent.intro}
                  </p>
                  <p className="text-[#5f6368] leading-relaxed">
                    {overviewContent.whyProfessional}
                  </p>
                  <p className="text-[#5f6368] leading-relaxed">
                    {overviewContent.approach}
                  </p>

                  <h3 className="text-xl font-bold text-[#202124] mt-8 mb-4">
                    What Sets Us Apart in {cityName}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Licensed, bonded, and insured professionals (DPOR #2705155505)',
                      'Direct billing with all major insurance companies',
                      'State-of-the-art equipment including thermal imaging and LGR dehumidifiers',
                      'Comprehensive documentation with timestamped photographs',
                      'IICRC-certified technicians trained in latest restoration techniques',
                      'Complete reconstruction services under one roof'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#5f6368]">
                        <CheckCircle2 size={20} className="text-[#34a853] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Common Causes Section */}
          <section id="causes" className="py-16 lg:py-24 bg-[#f8f9fa]">
            <div className="px-7 sm:px-10 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
                  Common Causes of Water Damage
                </h2>
                <p className="text-lg text-[#5f6368] mb-8 max-w-2xl">
                  Understanding water damage sources helps homeowners respond quickly and prevent future incidents in {cityName}.
                </p>
              </motion.div>

              <div className="space-y-6">
                {damageTypes.map((type, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-[#dadce0]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold text-[#202124] mb-3">{type.title}</h3>
                    <p className="text-[#5f6368] leading-relaxed">{type.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="py-16 lg:py-24">
            <div className="px-7 sm:px-10 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
                  Our 6-Step Restoration Process
                </h2>
                <p className="text-lg text-[#5f6368] mb-12 max-w-2xl">
                  Flood Doctor follows IICRC S500 standards for professional water damage restoration. Our systematic approach ensures complete remediation and returns your property to pre-loss condition.
                </p>
              </motion.div>

              <div className="space-y-8">
                {processSteps.map((step, idx) => {
                  const colors = ['bg-[#1a73e8]', 'bg-[#ea8600]', 'bg-[#34a853]', 'bg-[#9334e6]', 'bg-[#00bcd4]', 'bg-[#ea4335]'];
                  return (
                    <motion.div
                      key={idx}
                      className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="flex items-start gap-6">
                        <div className={`w-10 h-10 rounded-xl ${colors[idx]} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                          {step.number}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-[#202124] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#5f6368] mb-4">
                            {step.description}
                          </p>
                          {step.substeps && step.substeps.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {step.substeps.map((substep, sidx) => (
                                <span key={sidx} className="text-sm bg-[#f8f9fa] px-3 py-1.5 rounded-full text-[#5f6368]">
                                  {substep}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section id="why-us" className="py-16 lg:py-24 bg-[#f8f9fa]">
            <div className="px-7 sm:px-10 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
                  Why Choose Flood Doctor?
                </h2>
                <p className="text-lg text-[#5f6368] mb-8 max-w-2xl">
                  Trusted by thousands of homeowners throughout {cityName} for professional water damage restoration services.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
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
                        <h3 className="text-lg font-semibold text-[#202124] mb-2">{item.title}</h3>
                        <p className="text-[#5f6368] text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#202124]">What Our Customers Say</h3>
                {testimonials.map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-xl p-6 border border-[#dadce0]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-[#fbbf24] fill-[#fbbf24]" />
                      ))}
                    </div>
                    <p className="text-[#5f6368] leading-relaxed mb-3">"{testimonial.quote}"</p>
                    <p className="text-sm text-[#202124] font-medium">{testimonial.author} — {testimonial.location}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-16 lg:py-24">
            <div className="px-7 sm:px-10 lg:px-16">
              <motion.h2
                className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Frequently Asked Questions
              </motion.h2>

              <div className="space-y-4 max-w-2xl">
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
        </div>

        {/* Sticky Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-24 p-8">
            {/* Navigation */}
            <nav className="mb-8">
              <p className="text-xs font-medium text-[#5f6368] uppercase tracking-wider mb-4">
                On this page
              </p>
              <div className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        isActive ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#5f6368] hover:bg-[#f8f9fa]'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{section.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* CTA Card */}
            <div className="bg-[#1a73e8] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">
                Need Help Now?
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Our emergency team responds within 60 minutes, 24/7.
              </p>
              <Link
                to="/request/"
                className="block w-full text-center bg-white text-[#1a73e8] font-semibold py-3 rounded-full mb-3 hover:bg-gray-100 transition-colors"
              >
                Get Free Estimate
              </Link>
              <Link
                to="tel:8774970007"
                className="flex items-center justify-center gap-2 text-white/90 hover:text-white py-2 transition-colors"
              >
                <Phone size={16} />
                <span>(877) 497-0007</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 p-4 bg-[#f8f9fa] rounded-xl">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#fbbf24] fill-[#fbbf24]" />
                ))}
                <span className="text-sm font-medium text-[#202124] ml-1">4.9</span>
              </div>
              <p className="text-xs text-[#5f6368]">Based on 500+ Google reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#dadce0] p-4 z-50">
        <div className="flex gap-3">
          <Link
            to="/request/"
            className="flex-1 text-center bg-[#1a73e8] text-white font-semibold py-3 rounded-full"
          >
            Get Estimate
          </Link>
          <Link
            to="tel:8774970007"
            className="flex items-center justify-center border border-[#dadce0] text-[#1a73e8] font-semibold px-6 py-3 rounded-full"
          >
            <Phone size={18} />
          </Link>
        </div>
      </div>

      <RelatedServices
        currentServiceId={service.id}
        category={service.category}
        audience={service.audience}
      />

      <ServiceAreaLinks serviceTitle={service.title} serviceSlug={service.slug} />
    </main>
  );
};

export default ServiceDetailDev4;
