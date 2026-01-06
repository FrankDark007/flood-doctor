import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  Star,
  Award
} from 'lucide-react';
import PageMeta from '../../../components/ui/PageMeta';
import { ServiceData } from '../../../types';
import ServiceAreaLinks from '../../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../../components/sections/RelatedServices';
import { useFranchise } from '@/hooks/useFranchise';

const googleEase = [0.22, 1, 0.36, 1];

/**
 * ServiceDetailDev8 - Full-Width Sections Layout
 *
 * Features:
 * - Edge-to-edge colored sections
 * - Bold alternating backgrounds
 * - Immersive full-bleed images
 * - Stripe/Linear style sections
 */

const demoService: ServiceData = {
  id: 'water-damage-restoration',
  title: 'Water Damage Restoration',
  slug: 'water-damage-restoration',
  category: 'RESTORATION',
  audience: 'RESIDENTIAL',
  shortDescription: 'Professional water damage restoration with 60-minute emergency response.',
  heroIntro: 'Fast, professional water damage restoration when disaster strikes. Our certified team is ready 24/7.',
  metaDescription: 'Professional water damage restoration services.',
  whatWeDo: [
    { title: 'Emergency Assessment', description: 'Comprehensive damage evaluation with thermal imaging and moisture mapping.', substeps: ['24/7 availability', 'Advanced detection'] },
    { title: 'Water Extraction', description: 'Industrial-grade extraction removes all standing water rapidly.', substeps: ['Commercial pumps', 'Fast removal'] },
    { title: 'Drying & Monitoring', description: 'Strategic dehumidification with daily moisture readings.', substeps: ['Scientific drying', 'Daily updates'] },
    { title: 'Full Restoration', description: 'Complete repairs to return your property to pre-loss condition.', substeps: ['Quality materials', 'Expert craftsmanship'] }
  ],
  faqs: [
    { question: 'How quickly do you respond?', answer: 'We guarantee 60-minute response time, 24/7.' },
    { question: 'Do you handle insurance claims?', answer: 'Yes, we work directly with all insurance providers.' },
    { question: 'What areas do you serve?', answer: 'We serve all of Northern Virginia and the DC metro area.' }
  ]
};

interface ServiceDetailDev8Props {
  service?: ServiceData;
}

const ServiceDetailDev8: React.FC<ServiceDetailDev8Props> = ({ service = demoService }) => {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const franchise = useFranchise();
  const isLocalPage = franchise.id !== 'hq';
  const cityName = isLocalPage ? franchise.name : 'Northern Virginia';
  const serviceName = service?.title || 'Water Damage Restoration';

  const processSteps = service?.whatWeDo?.slice(0, 4).map((step, idx) => {
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

  return (
    <main className="flex-grow">
      <PageMeta
        title={`${serviceName} | Flood Doctor`}
        description={service?.metaDescription || ''}
      />

      {/* Full-Width Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-[#0d1117]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt={serviceName}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: googleEase }}
            >
              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { icon: Clock, label: '60-Min Response' },
                  { icon: Shield, label: 'IICRC Certified' },
                  { icon: Star, label: '4.9★ Rating' }
                ].map((badge, idx) => (
                  <span key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                    <badge.icon size={14} />
                    {badge.label}
                  </span>
                ))}
              </motion.div>

              <h1 className="text-[52px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-6">
                {serviceName}
              </h1>
              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                {service?.heroIntro || service?.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/request/"
                  className="inline-flex items-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="tel:8774970007"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
                >
                  <Phone size={20} className="mr-2" />
                  (877) 497-0007
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Width Process Sections */}
      {processSteps.map((step, idx) => {
        const isEven = idx % 2 === 0;
        const bgColors = ['bg-white', 'bg-[#f8f9fa]', 'bg-white', 'bg-[#f8f9fa]'];
        const images = [
          'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80'
        ];

        return (
          <section key={idx} className={`py-20 lg:py-32 ${bgColors[idx]}`}>
            <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  className={!isEven ? 'lg:order-2' : ''}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: googleEase }}
                >
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1a73e8] text-white text-xl font-bold mb-6">
                    {step.number}
                  </span>
                  <h2 className="text-[32px] lg:text-[44px] font-bold text-[#202124] leading-[1.15] mb-6">
                    {step.title}
                  </h2>
                  <p className="text-xl text-[#5f6368] leading-relaxed mb-8">
                    {step.description}
                  </p>
                  {step.substeps && step.substeps.length > 0 && (
                    <div className="space-y-3">
                      {step.substeps.map((substep, sidx) => (
                        <div key={sidx} className="flex items-center gap-3 text-[#202124]">
                          <CheckCircle2 size={20} className="text-[#34a853]" />
                          <span className="text-lg">{substep}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>

                <motion.div
                  className={!isEven ? 'lg:order-1' : ''}
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: googleEase }}
                >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={images[idx]}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Full-Width Trust Section */}
      <section className="py-20 lg:py-28 bg-[#1a73e8]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] lg:text-[48px] font-bold text-white mb-4">
              Why {cityName} Trusts Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: '60 min', label: 'Response Time' },
              { icon: Award, value: '15+', label: 'Years Experience' },
              { icon: Star, value: '4.9', label: 'Google Rating' },
              { icon: Shield, value: '5,000+', label: 'Properties Restored' }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Icon size={32} className="text-white/60 mx-auto mb-4" />
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ - Full Width */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
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
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
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
                    <span className="font-medium text-[#202124] text-lg">{faq.question}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown size={24} className="text-[#5f6368]" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="px-6 pb-5 text-[#5f6368] leading-relaxed text-lg">
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

      {/* Final CTA - Full Width */}
      <section className="py-24 lg:py-32 bg-[#202124]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] text-center">
          <motion.h2
            className="text-[40px] lg:text-[56px] font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Restore?
          </motion.h2>
          <motion.p
            className="text-xl text-white/60 mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get your free estimate in 60 minutes or less.
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
              className="inline-flex items-center justify-center bg-[#1a73e8] text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#1557b0] transition-colors"
            >
              Get Free Estimate
            </Link>
            <Link
              to="tel:8774970007"
              className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
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

export default ServiceDetailDev8;
