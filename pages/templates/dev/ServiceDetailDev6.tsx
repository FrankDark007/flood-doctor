import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Play,
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
 * ServiceDetailDev6 - Video Hero Layout
 *
 * Features:
 * - Full-width video background hero with play button
 * - Overlay content on video
 * - Cinematic feel with dark theme
 * - Process as visual cards with hover effects
 */

const demoService: ServiceData = {
  id: 'water-damage-restoration',
  title: 'Water Damage Restoration',
  slug: 'water-damage-restoration',
  category: 'RESTORATION',
  audience: 'RESIDENTIAL',
  shortDescription: 'Professional water damage restoration with 60-minute emergency response.',
  heroIntro: 'Experience the difference of professional restoration. Our certified team uses state-of-the-art equipment to restore your property quickly and completely.',
  metaDescription: 'Professional water damage restoration services.',
  whatWeDo: [
    { title: 'Rapid Assessment', description: 'Thermal imaging and moisture detection identify all affected areas.', substeps: [] },
    { title: 'Water Removal', description: 'Industrial extraction equipment removes all standing water.', substeps: [] },
    { title: 'Complete Drying', description: 'Strategic air movers and dehumidifiers ensure thorough drying.', substeps: [] },
    { title: 'Full Restoration', description: 'Expert repairs return your property to pre-loss condition.', substeps: [] }
  ],
  faqs: [
    { question: 'What is your response time?', answer: 'We guarantee 60-minute response 24/7.' },
    { question: 'Do you handle insurance?', answer: 'Yes, we handle all insurance documentation and billing.' },
    { question: 'How long does restoration take?', answer: 'Most projects complete within 3-5 days.' }
  ]
};

interface ServiceDetailDev6Props {
  service?: ServiceData;
}

const ServiceDetailDev6: React.FC<ServiceDetailDev6Props> = ({ service = demoService }) => {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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
        description: colonIndex > 0 ? step.substring(colonIndex + 1).trim() : ''
      };
    }
    return { number: idx + 1, title: step.title, description: step.description };
  }) || [];

  return (
    <main className="flex-grow bg-[#0d1117]">
      <PageMeta
        title={`${serviceName}`}
        description={service?.metaDescription || ''}
      />

      {/* Video Hero */}
      <section className="relative min-h-screen flex items-center">
        {/* Video/Image Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt={serviceName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d1117]/80" />
        </div>

        {/* Play Button */}
        <motion.button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          onClick={() => setIsVideoPlaying(true)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
            <Play size={40} className="text-white ml-2" />
          </div>
        </motion.button>

        {/* Content Overlay */}
        <div className="relative z-10 mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] w-full py-20">
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 text-sm text-white/50 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services/" className="hover:text-white">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white">{serviceName}</span>
          </motion.nav>

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: googleEase }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Clock, label: '60-Min Response' },
                { icon: Shield, label: 'IICRC Certified' },
                { icon: Star, label: '4.9★ Rating' }
              ].map((badge, idx) => (
                <motion.span
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <badge.icon size={14} />
                  {badge.label}
                </motion.span>
              ))}
            </div>

            <h1 className="text-[48px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-6">
              {serviceName}
            </h1>
            <p className="text-xl lg:text-2xl text-white/70 leading-relaxed mb-10">
              {service?.heroIntro || service?.shortDescription}
            </p>

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
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all"
              >
                <Phone size={18} className="mr-2" />
                (877) 497-0007
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="text-white/50" />
        </motion.div>
      </section>

      {/* Process Cards - Dark Theme */}
      <section className="py-24 lg:py-32 bg-[#0d1117]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] lg:text-[48px] font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-white/60 max-w-xl mx-auto">
              A proven four-step approach to complete restoration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all cursor-default"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <span className="text-6xl font-bold text-white/10 absolute top-4 right-6">
                  {String(step.number).padStart(2, '0')}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#161b22] border-y border-white/10">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '60', unit: 'min', label: 'Response Time' },
              { value: '5000+', unit: '', label: 'Properties Restored' },
              { value: '15+', unit: 'yrs', label: 'Experience' },
              { value: '4.9', unit: '★', label: 'Google Rating' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                  <span className="text-[#1a73e8]">{stat.unit}</span>
                </div>
                <div className="text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Dark Theme */}
      <section className="py-24 lg:py-32 bg-[#0d1117]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px]">
          <motion.h2
            className="text-[36px] font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked
          </motion.h2>

          <div className="space-y-4">
            {service?.faqs?.map((faq, idx) => {
              const isOpen = openFaqs.has(idx);
              return (
                <motion.div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
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
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown size={20} className="text-white/50" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="px-6 pb-5 text-white/60 leading-relaxed">
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
      <section className="py-24 lg:py-32 bg-gradient-to-r from-[#1a73e8] to-[#0d47a1]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] text-center">
          <motion.h2
            className="text-[36px] lg:text-[52px] font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Restore?
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get a free estimate from {cityName}'s trusted restoration experts.
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
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Force white bg for remaining sections */}
      <div className="bg-white">
        <RelatedServices
          currentServiceId={service.id}
          category={service.category}
          audience={service.audience}
        />

        <ServiceAreaLinks serviceTitle={service.title} serviceSlug={service.slug} />
      </div>
    </main>
  );
};

export default ServiceDetailDev6;
