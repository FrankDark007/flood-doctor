import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ChevronDown,
  ArrowRight,
  Check
} from 'lucide-react';
import PageMeta from '../../../components/ui/PageMeta';
import { ServiceData } from '../../../types';
import ServiceAreaLinks from '../../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../../components/sections/RelatedServices';
import { useFranchise } from '@/hooks/useFranchise';

const googleEase = [0.22, 1, 0.36, 1];

/**
 * ServiceDetailDev5 - Minimalist Layout
 *
 * Features:
 * - Ultra-clean design with maximum whitespace
 * - Typography-focused hero
 * - Simple numbered list for process
 * - Elegant FAQ with smooth animations
 * - Apple-inspired aesthetic
 */

const demoService: ServiceData = {
  id: 'water-damage-restoration',
  title: 'Water Damage Restoration',
  slug: 'water-damage-restoration',
  category: 'RESTORATION',
  audience: 'RESIDENTIAL',
  shortDescription: 'Professional water damage restoration with 60-minute emergency response throughout Northern Virginia, DC, and Maryland.',
  heroIntro: 'Water damage doesn\'t wait for convenient times. Whether from a burst pipe, appliance failure, sewage backup, or storm flooding, water intrusion causes progressive damage within hours. Our IICRC-certified technicians respond 24/7 to extract water, dry structures, and restore your home completely.',
  metaDescription: 'Expert water damage restoration in Northern Virginia. IICRC certified, 24/7 emergency response, insurance assistance. Call (877) 497-0007 for immediate flood cleanup.',
  whatWeDo: [
    {
      title: 'Emergency Contact',
      description: 'Your restoration begins with a single phone call to our 24/7 dispatch center. We gather essential information and immediately dispatch the nearest available crew—typically arriving within 60 minutes anywhere in Northern Virginia.',
      substeps: []
    },
    {
      title: 'Damage Assessment',
      description: 'IICRC-certified technicians conduct comprehensive damage assessment using infrared thermal cameras, moisture meters, and complete photographic documentation. We determine water category and damage class to guide our restoration plan.',
      substeps: []
    },
    {
      title: 'Water Extraction',
      description: 'Standing water must be removed quickly to prevent structural damage and mold growth. Our truck-mounted extraction units, submersible pumps, and specialty tools remove hundreds of gallons per hour.',
      substeps: []
    },
    {
      title: 'Drying & Dehumidification',
      description: 'Professional drying removes moisture absorbed into building materials. LGR dehumidifiers, high-velocity air movers, and Injectidry systems ensure complete moisture removal. We monitor progress daily with moisture meters.',
      substeps: []
    },
    {
      title: 'Cleaning & Sanitization',
      description: 'Once dry, we thoroughly clean and sanitize all affected areas with HEPA air scrubbers, EPA-registered antimicrobial treatments, and professional odor elimination. For sewage backups, we follow strict IICRC S500 protocols.',
      substeps: []
    },
    {
      title: 'Restoration',
      description: 'Final restoration returns your property to pre-loss condition. Our licensed contractors handle drywall, flooring, painting, trim, and complete reconstruction. We coordinate directly with your insurance throughout.',
      substeps: []
    }
  ],
  faqs: [
    {
      question: 'How quickly can you respond to water emergencies?',
      answer: 'Flood Doctor maintains 24/7 emergency crews throughout Northern Virginia, DC, and Maryland. Our average response time is 60 minutes. We dispatch immediately upon receiving your call and provide an estimated arrival time.'
    },
    {
      question: 'Does insurance cover water damage restoration?',
      answer: 'Most homeowner\'s insurance policies cover sudden and accidental water damage from burst pipes, appliance failures, and storm damage. Flood damage requires separate flood insurance. We help you understand coverage and provide direct billing to your carrier.'
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'Timeline depends on severity: Extraction takes 1-4 hours. Structural drying requires 3-5 days with daily monitoring. Cleaning takes 1-2 days. Reconstruction varies by scope, typically 1-4 weeks. Minor damage may complete in 4-5 days.'
    },
    {
      question: 'What equipment do you use for water extraction?',
      answer: 'Professional-grade equipment including truck-mounted extraction units (hundreds of gallons per hour), LGR dehumidifiers (100+ pints per day), high-velocity air movers, infrared thermal cameras, moisture meters, and HEPA air scrubbers.'
    },
    {
      question: 'Can you prevent mold after water damage?',
      answer: 'Yes. Rapid response and proper drying prevent mold growth. If we dry your property within 24-48 hours and achieve dry standard in building materials, mold growth is prevented. We also apply antimicrobial treatments for additional protection.'
    },
    {
      question: 'What should I do before you arrive?',
      answer: 'If safe: Turn off water at main shutoff valve. Turn off electricity to affected areas. Move valuables away from water. Take photographs for insurance. Do not use household vacuums on standing water—this creates electrical hazards.'
    },
    {
      question: 'How do I know if I need professional restoration?',
      answer: 'Professional restoration is recommended for water covering more than 10 square feet, water from unknown or contaminated sources, water standing more than 24 hours, water affecting walls or structural materials, any sewage backup, or insurance claims.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'All of Northern Virginia including Fairfax, Arlington, Alexandria, Loudoun, and Prince William counties. Also Washington DC and Maryland including Bethesda, Silver Spring, Rockville. Our crews are strategically positioned for rapid response.'
    }
  ]
};

// Extended content for minimalist layout - emphasizes typography and readability
const introContent = {
  lead: 'Water damage restoration is a time-sensitive emergency that requires immediate professional intervention.',
  body: [
    'When water enters your home—whether from a burst pipe, roof leak, appliance failure, or flooding—it begins causing damage within minutes. Flooring absorbs water and begins warping. Drywall wicks moisture upward. Insulation becomes saturated and loses effectiveness.',
    'Without rapid response, what starts as a manageable situation quickly becomes a major restoration project. Professional intervention within the first 24-48 hours can prevent mold growth, structural damage, and significantly reduce restoration costs.',
    'Flood Doctor LLC provides comprehensive water damage restoration services throughout Northern Virginia, Washington DC, and Maryland. Our IICRC-certified technicians are available 24/7, responding to emergencies with professional equipment and proven methodologies that follow IICRC S500 standards.'
  ]
};

const damageCategories = [
  {
    title: 'Plumbing Failures',
    description: 'Frozen pipes, corroded pipes in older homes, water heater failures, and supply line bursts at appliances cause sudden water release that can dump hundreds of gallons per hour.'
  },
  {
    title: 'Appliance Malfunctions',
    description: 'Washing machine hose bursts, dishwasher pump failures, refrigerator ice maker leaks, and HVAC condensate clogs. These often occur when homeowners are away.'
  },
  {
    title: 'Storm & Flood Damage',
    description: 'Heavy rains overwhelm drainage systems causing basement flooding. Wind damages roofs allowing water intrusion. Our crews respond rapidly even during major weather events.'
  },
  {
    title: 'Sewage Backups',
    description: 'Main sewer line blockages from tree roots, municipal system overflows, and septic failures introduce hazardous Category 3 water requiring specialized cleanup protocols.'
  }
];

const testimonials = [
  {
    quote: 'Flood Doctor responded within 45 minutes and had our basement completely dried within 3 days. Professional, thorough, and worked directly with our insurance company.',
    author: 'Sarah M.',
    location: 'Alexandria, VA'
  },
  {
    quote: 'A pipe burst while we were on vacation. They handled everything—water removal, drying, insurance, and repairs. I can\'t thank them enough.',
    author: 'Patricia W.',
    location: 'Reston, VA'
  },
  {
    quote: 'Fast response, professional technicians, excellent communication. They saved us thousands by preventing mold damage.',
    author: 'Thomas H.',
    location: 'McLean, VA'
  }
];

interface ServiceDetailDev5Props {
  service?: ServiceData;
}

const ServiceDetailDev5: React.FC<ServiceDetailDev5Props> = ({ service = demoService }) => {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());
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
        description: colonIndex > 0 ? step.substring(colonIndex + 1).trim() : ''
      };
    }
    return { number: idx + 1, title: step.title, description: step.description };
  }) || [];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${serviceName}`}
        description={service?.metaDescription || ''}
      />

      {/* Minimal Hero */}
      <section className="min-h-[70vh] flex items-center">
        <div className="mx-auto max-w-4xl px-8 py-24 text-center">
          <motion.p
            className="text-[#1a73e8] font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {cityName} · 24/7 Emergency Service
          </motion.p>

          <motion.h1
            className="text-[48px] md:text-[64px] lg:text-[80px] font-bold text-[#202124] leading-[1.05] tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: googleEase }}
          >
            {serviceName}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#5f6368] leading-relaxed max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {service?.heroIntro || service?.shortDescription}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/request/"
              className="inline-flex items-center justify-center bg-[#202124] hover:bg-[#3c4043] text-white font-medium px-8 py-4 rounded-full transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              to="tel:8774970007"
              className="inline-flex items-center justify-center text-[#202124] font-medium px-8 py-4 rounded-full border border-[#dadce0] hover:bg-[#f8f9fa] transition-colors"
            >
              <Phone size={18} className="mr-2" />
              (877) 497-0007
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction - Typography Focused */}
      <section className="py-20 lg:py-28 border-t border-[#dadce0]">
        <div className="mx-auto max-w-3xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-medium text-[#202124] leading-relaxed mb-8">
              {introContent.lead}
            </p>
            <div className="space-y-6">
              {introContent.body.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-[#5f6368] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Causes - Minimal Cards */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-auto max-w-3xl px-8">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold text-[#202124] mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Common causes
          </motion.h2>

          <div className="space-y-6">
            {damageCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className="border-l-2 border-[#202124] pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-[#202124] mb-2">{category.title}</h3>
                <p className="text-[#5f6368] leading-relaxed">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Simple Numbered List */}
      <section className="py-24 lg:py-32 border-t border-[#dadce0]">
        <div className="mx-auto max-w-3xl px-8">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold text-[#202124] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our 6-step process
          </motion.h2>
          <motion.p
            className="text-lg text-[#5f6368] mb-16 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Flood Doctor follows IICRC S500 standards for professional water damage restoration. Our systematic approach ensures complete remediation.
          </motion.p>

          <div className="space-y-0">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="grid grid-cols-[60px_1fr] gap-6 py-8 border-b border-[#dadce0] last:border-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="text-[48px] font-light text-[#dadce0]">
                  {String(step.number).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-[#202124] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#5f6368] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Simple List */}
      <section className="py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="mx-auto max-w-3xl px-8">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold text-[#202124] mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why choose us
          </motion.h2>

          <div className="space-y-4">
            {[
              '60-minute emergency response',
              'IICRC-certified technicians',
              'Direct insurance billing',
              'State-of-the-art equipment',
              '15+ years of experience',
              '100% satisfaction guarantee'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="w-6 h-6 rounded-full bg-[#202124] flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-lg text-[#202124]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Elegant Accordion */}
      <section className="py-24 lg:py-32 border-t border-[#dadce0]">
        <div className="mx-auto max-w-3xl px-8">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold text-[#202124] mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Questions
          </motion.h2>

          <div className="space-y-0">
            {service?.faqs?.map((faq, idx) => {
              const isOpen = openFaqs.has(idx);
              return (
                <motion.div
                  key={idx}
                  className="border-b border-[#dadce0]"
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
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span className="text-lg font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} className="text-[#5f6368]" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="pb-6 text-[#5f6368] leading-relaxed">
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

      {/* Testimonials - Minimal Style */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-auto max-w-3xl px-8">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold text-[#202124] mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What customers say
          </motion.h2>

          <div className="space-y-8">
            {testimonials.map((testimonial, idx) => (
              <motion.blockquote
                key={idx}
                className="border-l-2 border-[#202124] pl-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <p className="text-xl text-[#202124] leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <footer className="text-[#5f6368]">
                  <strong>{testimonial.author}</strong> — {testimonial.location}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-24 lg:py-32 bg-[#202124]">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <motion.h2
            className="text-[36px] md:text-[48px] font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            className="text-xl text-white/70 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get a free estimate within 60 minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/request/"
              className="inline-flex items-center justify-center bg-white text-[#202124] font-medium px-10 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Get Free Estimate
              <ArrowRight className="ml-2" size={18} />
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

export default ServiceDetailDev5;
