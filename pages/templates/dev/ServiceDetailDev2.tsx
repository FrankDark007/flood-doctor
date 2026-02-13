import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Wind,
  Wrench,
  Search,
  Clock,
  Shield,
  Star,
  MapPin
} from 'lucide-react';
import PageMeta from '../../../components/ui/PageMeta';
import { ServiceData } from '../../../types';
import ServiceAreaLinks from '../../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../../components/sections/RelatedServices';
import { useFranchise } from '@/hooks/useFranchise';

const googleEase = [0.22, 1, 0.36, 1];

/**
 * ServiceDetailDev2 - Cards Grid Layout
 *
 * Features:
 * - Compact hero with stats ribbon
 * - Process steps as icon cards in a grid
 * - Bento-style feature grid
 * - Testimonials carousel cards
 */

const demoService: ServiceData = {
  id: 'water-damage-restoration',
  title: 'Water Damage Restoration',
  slug: 'water-damage-restoration',
  category: 'RESTORATION',
  audience: 'RESIDENTIAL',
  shortDescription: 'Professional water damage restoration with 60-minute emergency response.',
  heroIntro: 'Fast, professional water damage restoration when you need it most.',
  metaDescription: 'Professional water damage restoration services in Northern Virginia.',
  whatWeDo: [
    { title: 'Emergency Assessment', description: 'Rapid damage evaluation using thermal imaging and moisture meters.', substeps: [] },
    { title: 'Water Extraction', description: 'Industrial pumps remove standing water to prevent further damage.', substeps: [] },
    { title: 'Drying & Dehumidification', description: 'Complete moisture removal using commercial-grade equipment.', substeps: [] },
    { title: 'Restoration & Repair', description: 'Full property restoration to pre-loss condition.', substeps: [] }
  ],
  faqs: [
    { question: 'How quickly should water damage be addressed?', answer: 'Within 24-48 hours to prevent mold growth.' },
    { question: 'Does insurance cover water damage?', answer: 'Most policies cover sudden water damage events.' },
    { question: 'What does restoration cost?', answer: 'Typically $1,000-$5,000 depending on extent.' }
  ]
};

const processIcons = [Search, Droplets, Wind, Wrench];

interface ServiceDetailDev2Props {
  service?: ServiceData;
}

const ServiceDetailDev2: React.FC<ServiceDetailDev2Props> = ({ service = demoService }) => {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const franchise = useFranchise();
  const isLocalPage = franchise.id !== 'hq';
  const cityName = isLocalPage ? franchise.name : 'Northern Virginia';
  const serviceName = service?.title || 'Water Damage Restoration';

  const stats = [
    { value: '60', unit: 'min', label: 'Response Time' },
    { value: '15+', unit: '', label: 'Years Experience' },
    { value: '4.9', unit: '★', label: 'Google Rating' },
    { value: '5000+', unit: '', label: 'Projects Completed' }
  ];

  const processSteps = service?.whatWeDo?.slice(0, 4).map((step, idx) => {
    if (typeof step === 'string') {
      const colonIndex = step.indexOf(':');
      return {
        number: idx + 1,
        title: colonIndex > 0 ? step.substring(0, colonIndex).trim() : step,
        description: colonIndex > 0 ? step.substring(colonIndex + 1).trim() : '',
        icon: processIcons[idx]
      };
    }
    return { number: idx + 1, title: step.title, description: step.description, icon: processIcons[idx] };
  }) || [];

  const features = [
    { title: 'Licensed & Insured', desc: 'Full coverage for your peace of mind', icon: Shield },
    { title: '24/7 Emergency', desc: 'Always available when you need us', icon: Clock },
    { title: 'Local Experts', desc: `Serving ${cityName} for 15+ years`, icon: MapPin },
    { title: 'Top Rated', desc: '4.9★ from 500+ reviews', icon: Star }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${serviceName}`}
        description={service?.metaDescription || ''}
      />

      {/* Compact Hero */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#f8f9fa] to-white">
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
              transition={{ duration: 0.6, ease: googleEase }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium rounded-full mb-4">
                {cityName} Service Area
              </span>
              <h1 className="text-[40px] lg:text-[52px] font-bold text-[#202124] leading-[1.1] mb-6">
                {serviceName}
              </h1>
              <p className="text-lg text-[#5f6368] leading-relaxed mb-8">
                {service?.heroIntro || service?.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/request/"
                  className="inline-flex items-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-6 py-3 rounded-full transition-colors"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  to="tel:8774970007"
                  className="inline-flex items-center border border-[#dadce0] hover:bg-[#f8f9fa] text-[#202124] font-medium px-6 py-3 rounded-full transition-colors"
                >
                  <Phone size={18} className="mr-2 text-[#1a73e8]" />
                  (877) 497-0007
                </Link>
              </div>
            </motion.div>

            {/* Stats Cards Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: googleEase }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-[#1a73e8]">
                    {stat.value}<span className="text-xl">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-[#5f6368] mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Cards Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
              Our Restoration Process
            </h2>
            <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
              From emergency response to complete restoration, our proven process delivers results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const colors = [
                { bg: 'bg-[#e8f0fe]', icon: 'text-[#1a73e8]', border: 'border-[#1a73e8]/20' },
                { bg: 'bg-[#fef7e0]', icon: 'text-[#ea8600]', border: 'border-[#ea8600]/20' },
                { bg: 'bg-[#e6f4ea]', icon: 'text-[#34a853]', border: 'border-[#34a853]/20' },
                { bg: 'bg-[#fce8e6]', icon: 'text-[#ea4335]', border: 'border-[#ea4335]/20' }
              ];
              const color = colors[idx % 4];

              return (
                <motion.div
                  key={idx}
                  className={`relative rounded-2xl p-6 ${color.bg} border ${color.border}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-[#202124]">
                    {step.number}
                  </div>
                  <Icon size={32} className={`${color.icon} mb-4`} />
                  <h3 className="text-xl font-semibold text-[#202124] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#5f6368]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
              Why Property Owners Choose Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#1a73e8]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#202124] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#5f6368]">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
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
                    <span className="font-medium text-[#202124] pr-4">{faq.question}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={20} className="text-[#5f6368]" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1a73e8] to-[#1557b0]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] text-center">
          <motion.h2
            className="text-[32px] lg:text-[44px] font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Water Damage? We're Here to Help.
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get your free assessment and quote within 60 minutes.
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
              className="inline-flex items-center justify-center bg-white text-[#1a73e8] font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
            >
              Request Service
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

export default ServiceDetailDev2;
