import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Info,
  Settings,
  HelpCircle,
  FileText,
  Star,
  MessageSquare
} from 'lucide-react';
import PageMeta from '../../../components/ui/PageMeta';
import { ServiceData } from '../../../types';
import ServiceAreaLinks from '../../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../../components/sections/RelatedServices';
import { useFranchise } from '@/hooks/useFranchise';

const googleEase = [0.22, 1, 0.36, 1];

/**
 * ServiceDetailDev9 - Sidebar Navigation Layout
 *
 * Features:
 * - Persistent left sidebar with navigation
 * - Documentation-style layout
 * - Easy section jumping
 * - Clean reading experience
 */

const demoService: ServiceData = {
  id: 'water-damage-restoration',
  title: 'Water Damage Restoration',
  slug: 'water-damage-restoration',
  category: 'RESTORATION',
  audience: 'RESIDENTIAL',
  shortDescription: 'Professional water damage restoration with 60-minute emergency response throughout Northern Virginia, DC, and Maryland.',
  heroIntro: 'Water damage doesn\'t wait for convenient times. Whether from a burst pipe, appliance failure, sewage backup, or storm flooding, water intrusion causes progressive damage to your home. Within hours, water saturates flooring, drywall, and insulation. Within days, mold begins growing. Our IICRC-certified technicians respond 24/7, arriving with professional equipment to extract water, dry structures, and restore your home completely.',
  metaDescription: 'Expert water damage restoration in Northern Virginia. IICRC certified, 24/7 emergency response, insurance assistance. Call (877) 497-0007 for immediate flood cleanup.',
  whatWeDo: [
    {
      title: 'Emergency Contact & Dispatch',
      description: 'Your restoration begins with a single phone call to our 24/7 dispatch center. We gather essential information about your property location, water source, extent of visible damage, and insurance details. We immediately dispatch the nearest available crew—typically within 60 minutes anywhere in Northern Virginia.',
      substeps: ['24/7 live dispatch', 'Immediate crew assignment', 'GPS-tracked arrival', 'Pre-arrival guidance']
    },
    {
      title: 'Inspection & Damage Assessment',
      description: 'Upon arrival, our IICRC-certified technicians conduct a comprehensive damage assessment using infrared thermal cameras, moisture meters, and complete photographic documentation. We determine water category (1, 2, or 3) and damage class to guide our restoration plan and provide insurance documentation.',
      substeps: ['Infrared thermal imaging', 'Penetrating moisture meters', 'Category determination', 'Insurance documentation']
    },
    {
      title: 'Water Removal & Extraction',
      description: 'Standing water must be removed quickly to prevent structural damage and mold growth. Our extraction teams use truck-mounted extraction units with high-capacity removal rates, portable extractors for hard-to-reach areas, submersible pumps for basement flooding, and hard surface extractors for tile and hardwood.',
      substeps: ['Truck-mounted extraction', 'Submersible pumps', 'Carpet & hard surface tools', 'Hundreds of gallons per hour']
    },
    {
      title: 'Drying & Dehumidification',
      description: 'After extraction, professional drying removes moisture absorbed into building materials. Our structural drying process uses LGR dehumidifiers for efficient moisture removal, high-velocity air movers to accelerate evaporation, and Injectidry systems for wall cavity drying. We monitor progress daily with moisture meters.',
      substeps: ['LGR dehumidifiers', 'High-velocity air movers', 'Wall cavity drying', 'Daily monitoring']
    },
    {
      title: 'Cleaning & Sanitization',
      description: 'Once structures are dry, we thoroughly clean and sanitize all affected areas with HEPA air scrubbers, EPA-registered antimicrobial treatments, and professional odor elimination. For sewage backups (Category 3 water), we follow strict IICRC S500 protocols including removal of porous materials and third-party testing.',
      substeps: ['HEPA air scrubbing', 'Antimicrobial treatments', 'Odor elimination', 'Content restoration']
    },
    {
      title: 'Restoration & Reconstruction',
      description: 'Final restoration returns your property to pre-loss condition with quality craftsmanship. Our licensed contractors handle drywall repair or replacement, flooring installation, painting and finishing, trim and molding restoration, and complete room reconstruction when needed. We coordinate directly with your insurance throughout.',
      substeps: ['Licensed contractors', 'Quality materials', 'Complete reconstruction', 'Insurance coordination']
    }
  ],
  faqs: [
    {
      question: 'How quickly can you respond to water emergencies?',
      answer: 'Flood Doctor maintains 24/7 emergency crews throughout Northern Virginia, DC, and Maryland. Our average response time is 60 minutes. We dispatch immediately upon receiving your call and provide an estimated arrival time. Our live dispatchers answer calls at all hours.'
    },
    {
      question: 'Does insurance cover water damage restoration?',
      answer: 'Most homeowner\'s insurance policies cover sudden and accidental water damage from burst pipes, appliance failures, and storm damage. Flood damage (rising water from external sources) requires separate flood insurance. We help you understand coverage, document damage thoroughly, and provide direct billing to your carrier.'
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'Timeline depends on severity: Extraction takes 1-4 hours. Structural drying requires 3-5 days with daily monitoring. Cleaning takes 1-2 days. Reconstruction varies by scope, typically 1-4 weeks. Minor damage may complete in 4-5 days, while major damage with reconstruction may require 2-4 weeks.'
    },
    {
      question: 'What equipment do you use for water extraction?',
      answer: 'Professional-grade equipment including truck-mounted extraction units (hundreds of gallons per hour), LGR dehumidifiers (100+ pints per day), high-velocity air movers, infrared thermal cameras, professional moisture meters, and HEPA air scrubbers.'
    },
    {
      question: 'Can you prevent mold after water damage?',
      answer: 'Yes. Rapid response and proper drying prevent mold growth. Mold requires moisture—if we dry your property within 24-48 hours and achieve dry standard in building materials, mold growth is prevented. We also apply EPA-registered antimicrobial treatments for additional protection.'
    },
    {
      question: 'What should I do before you arrive?',
      answer: 'If safe: Turn off water at main shutoff valve. Turn off electricity to affected areas. Move valuables away from water. Take photographs for insurance. Do not use household vacuums on standing water as this creates electrical hazards. Our dispatch team will provide specific guidance.'
    },
    {
      question: 'How do I know if I need professional restoration?',
      answer: 'Professional restoration is recommended for water covering more than 10 square feet, water from unknown or contaminated sources, water standing more than 24 hours, water affecting walls or structural materials, any sewage backup, or insurance claims. We offer free assessments.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'All of Northern Virginia including Fairfax, Arlington, Alexandria, Loudoun, and Prince William counties. Also Washington DC and Maryland including Bethesda, Silver Spring, Rockville. Our crews are strategically positioned for rapid response anywhere in the DMV region.'
    }
  ]
};

// Extended content for documentation-style layout
const overviewContent = {
  intro: 'Water damage restoration is a time-sensitive emergency that requires immediate professional intervention. When water enters your home—whether from a burst pipe, roof leak, appliance failure, or flooding—it begins causing damage within minutes.',
  details: [
    'Flooring absorbs water and begins warping. Drywall wicks moisture upward. Insulation becomes saturated and loses effectiveness. Without rapid response, what starts as a manageable situation quickly becomes a major restoration project.',
    'Flood Doctor LLC provides comprehensive water damage restoration services throughout Northern Virginia, Washington DC, and Maryland. Our IICRC-certified technicians are available 24/7, responding to emergencies with professional equipment and proven methodologies.',
    'Our systematic approach follows IICRC S500 standards, the industry benchmark for water damage restoration. Every project includes thorough documentation for insurance purposes, daily communication about progress, and a commitment to returning your property to pre-loss condition.'
  ]
};

const damageTypes = [
  {
    title: 'Burst Pipes & Plumbing',
    description: 'Plumbing failures account for the majority of residential water damage claims. Frozen pipes during Northern Virginia winters, corroded pipes in older homes, high water pressure, and water heater failures all cause sudden water release.'
  },
  {
    title: 'Appliance Malfunctions',
    description: 'Washing machine hose bursts, dishwasher pump failures, refrigerator ice maker leaks, and HVAC condensate drain clogs. These often occur when homeowners are away, allowing water to spread unchecked.'
  },
  {
    title: 'Storm & Flood Damage',
    description: 'Heavy rains overwhelm drainage systems, causing basement flooding. Wind damages roofs, allowing water intrusion. Our crews respond rapidly even during major weather events affecting the Northern Virginia area.'
  },
  {
    title: 'Sewage Backups',
    description: 'Sewage backups create hazardous Category 3 water conditions requiring specialized cleanup. Main sewer line blockages from tree roots, municipal system overflows, and septic failures all require professional remediation.'
  }
];

const whyChooseUsData = [
  {
    title: '60-Minute Response',
    description: 'Our average response time throughout Northern Virginia is 60 minutes. We maintain emergency crews positioned strategically across our service area, ready to dispatch immediately upon your call.'
  },
  {
    title: 'IICRC Certified',
    description: 'All Flood Doctor technicians hold IICRC certifications in Water Damage Restoration (WRT), Applied Structural Drying (ASD), and related specializations. Industry-standard certification ensures best practices.'
  },
  {
    title: 'Direct Insurance Billing',
    description: 'We simplify the insurance process with detailed damage documentation, timestamped photographs, moisture readings, itemized estimates, and direct billing to your carrier.'
  },
  {
    title: 'Complete Restoration',
    description: 'Unlike companies that only handle extraction, Flood Doctor provides full-service restoration from emergency response through final reconstruction. One company, one point of contact.'
  },
  {
    title: 'Advanced Equipment',
    description: 'Professional-grade truck-mounted extraction, LGR dehumidifiers, thermal imaging cameras, and HEPA air scrubbers ensure thorough, efficient restoration.'
  },
  {
    title: '15+ Years Experience',
    description: 'Trusted by thousands of homeowners throughout Northern Virginia. Licensed, bonded, and insured. DPOR License #2705155505.'
  }
];

interface ServiceDetailDev9Props {
  service?: ServiceData;
}

const ServiceDetailDev9: React.FC<ServiceDetailDev9Props> = ({ service = demoService }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const franchise = useFranchise();
  const isLocalPage = franchise.id !== 'hq';
  const cityName = isLocalPage ? franchise.name : 'Northern Virginia';
  const serviceName = service?.title || 'Water Damage Restoration';

  const sections = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'causes', label: 'Common Causes', icon: FileText },
    { id: 'process', label: 'Our 6-Step Process', icon: Settings },
    { id: 'why-us', label: 'Why Choose Us', icon: Star },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
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

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-100px 0px -60% 0px'
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
        title={`${serviceName} | Flood Doctor`}
        description={service?.metaDescription || ''}
      />

      <div className="lg:grid lg:grid-cols-[280px_1fr]">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block border-r border-[#dadce0] bg-[#f8f9fa]">
          <div className="sticky top-20 p-6">
            <div className="mb-8">
              <h2 className="font-semibold text-[#202124] mb-1">{serviceName}</h2>
              <p className="text-sm text-[#5f6368]">{cityName}</p>
            </div>

            <nav className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm transition-colors ${
                      isActive
                        ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium'
                        : 'text-[#5f6368] hover:bg-white hover:text-[#202124]'
                    }`}
                  >
                    <Icon size={18} />
                    {section.label}
                  </button>
                );
              })}
            </nav>

            {/* Sidebar CTA */}
            <div className="mt-8 p-4 bg-[#1a73e8] rounded-xl text-white">
              <p className="font-medium mb-3">Need help now?</p>
              <Link
                to="tel:8774970007"
                className="flex items-center gap-2 text-sm mb-2"
              >
                <Phone size={14} />
                (877) 497-0007
              </Link>
              <Link
                to="/request/"
                className="block text-center bg-white text-[#1a73e8] font-medium py-2 rounded-lg mt-3 text-sm hover:bg-gray-100 transition-colors"
              >
                Request Service
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="min-h-screen">
          {/* Overview Section */}
          <section id="overview" className="py-16 lg:py-20 border-b border-[#dadce0]">
            <div className="px-7 sm:px-10 lg:px-16 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: googleEase }}
              >
                <span className="inline-block px-3 py-1 bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium rounded-full mb-6">
                  24/7 Emergency Service
                </span>
                <h1 className="text-[36px] lg:text-[48px] font-bold text-[#202124] leading-[1.1] mb-6">
                  {serviceName}
                </h1>
                <p className="text-xl text-[#5f6368] leading-relaxed mb-8">
                  {service?.heroIntro || service?.shortDescription}
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    to="/request/"
                    className="inline-flex items-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-6 py-3 rounded-full transition-colors"
                  >
                    Get Free Estimate
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                  <Link
                    to="tel:8774970007"
                    className="inline-flex items-center border border-[#dadce0] hover:bg-[#f8f9fa] text-[#202124] font-medium px-6 py-3 rounded-full transition-colors lg:hidden"
                  >
                    <Phone size={18} className="mr-2" />
                    Call Now
                  </Link>
                </div>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                    alt={serviceName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Extended Overview Content */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-[#202124] mb-4">About Water Damage Restoration</h2>
                  <p className="text-lg text-[#5f6368] leading-relaxed mb-4">
                    {overviewContent.intro}
                  </p>
                  {overviewContent.details.map((paragraph, idx) => (
                    <p key={idx} className="text-[#5f6368] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Common Causes Section */}
          <section id="causes" className="py-16 lg:py-20 border-b border-[#dadce0] bg-[#f8f9fa]">
            <div className="px-7 sm:px-10 lg:px-16 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[28px] lg:text-[36px] font-bold text-[#202124] mb-4">
                  Common Causes of Water Damage
                </h2>
                <p className="text-lg text-[#5f6368] mb-10">
                  Understanding water damage sources helps {cityName} homeowners respond quickly and prevent future incidents.
                </p>
              </motion.div>

              <div className="space-y-6">
                {damageTypes.map((type, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-xl p-6 border border-[#dadce0]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-[#202124] mb-2">{type.title}</h3>
                    <p className="text-[#5f6368] leading-relaxed">{type.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="py-16 lg:py-20 border-b border-[#dadce0]">
            <div className="px-7 sm:px-10 lg:px-16 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[28px] lg:text-[36px] font-bold text-[#202124] mb-4">
                  Our 6-Step Restoration Process
                </h2>
                <p className="text-lg text-[#5f6368] mb-10">
                  Flood Doctor follows IICRC S500 standards for professional water damage restoration. Our systematic approach ensures complete remediation and returns your property to pre-loss condition.
                </p>
              </motion.div>

              <div className="space-y-8">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#202124] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#5f6368] mb-4">
                        {step.description}
                      </p>
                      {step.substeps && step.substeps.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {step.substeps.map((substep, sidx) => (
                            <span key={sidx} className="inline-flex items-center gap-1.5 text-sm bg-[#f8f9fa] px-3 py-1.5 rounded-full text-[#5f6368]">
                              <CheckCircle2 size={14} className="text-[#34a853]" />
                              {substep}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section id="why-us" className="py-16 lg:py-20 border-b border-[#dadce0] bg-[#f8f9fa]">
            <div className="px-7 sm:px-10 lg:px-16 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[28px] lg:text-[36px] font-bold text-[#202124] mb-4">
                  Why Choose Flood Doctor
                </h2>
                <p className="text-lg text-[#5f6368] mb-10">
                  Trusted by thousands of homeowners throughout {cityName} for professional water damage restoration services.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {whyChooseUsData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 border border-[#dadce0]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <CheckCircle2 size={24} className="text-[#34a853] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#202124] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#5f6368] leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-16 lg:py-20 border-b border-[#dadce0]">
            <div className="px-7 sm:px-10 lg:px-16 max-w-4xl">
              <motion.h2
                className="text-[28px] lg:text-[36px] font-bold text-[#202124] mb-10"
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
                        className="w-full px-5 py-4 flex items-center justify-between text-left bg-white hover:bg-[#f8f9fa] transition-colors"
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
                            <p className="px-5 pb-4 text-[#5f6368] leading-relaxed">
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

          {/* Contact Section */}
          <section id="contact" className="py-16 lg:py-20 bg-[#1a73e8]">
            <div className="px-7 sm:px-10 lg:px-16 max-w-4xl">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[28px] lg:text-[36px] font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Contact us for a free estimate. We respond within 60 minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/request/"
                    className="inline-flex items-center justify-center bg-white text-[#1a73e8] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Request Service
                  </Link>
                  <Link
                    to="tel:8774970007"
                    className="inline-flex items-center justify-center bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Phone size={18} className="mr-2" />
                    (877) 497-0007
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
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

export default ServiceDetailDev9;
