import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Award,
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
 * ServiceDetailDev7 - Stats-Driven Layout
 *
 * Features:
 * - Large animated stats in hero
 * - Counter animations
 * - Data visualization feel
 * - Social proof emphasized
 */

const demoService: ServiceData = {
  id: 'water-damage-restoration',
  title: 'Water Damage Restoration',
  slug: 'water-damage-restoration',
  category: 'RESTORATION',
  audience: 'RESIDENTIAL',
  shortDescription: 'Professional water damage restoration with 60-minute emergency response.',
  heroIntro: 'Trusted by thousands of homeowners across Northern Virginia. Our proven process delivers results.',
  metaDescription: 'Professional water damage restoration services.',
  whatWeDo: [
    { title: 'Emergency Response', description: 'On-site within 60 minutes with full equipment.', substeps: [] },
    { title: 'Water Extraction', description: 'Complete removal using commercial-grade pumps.', substeps: [] },
    { title: 'Structural Drying', description: 'Scientific drying with daily monitoring.', substeps: [] },
    { title: 'Full Restoration', description: 'Return to pre-loss condition guaranteed.', substeps: [] }
  ],
  faqs: [
    { question: 'How fast is your response?', answer: 'We arrive within 60 minutes, guaranteed.' },
    { question: 'Do you work with insurance?', answer: 'Yes, we handle all insurance paperwork.' },
    { question: 'What is your satisfaction rate?', answer: '98% of customers rate us 5 stars.' }
  ]
};

interface ServiceDetailDev7Props {
  service?: ServiceData;
}

const ServiceDetailDev7: React.FC<ServiceDetailDev7Props> = ({ service = demoService }) => {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const franchise = useFranchise();
  const isLocalPage = franchise.id !== 'hq';
  const cityName = isLocalPage ? franchise.name : 'Northern Virginia';
  const serviceName = service?.title || 'Water Damage Restoration';

  const mainStats = [
    { value: '5,247', label: 'Properties Restored', icon: TrendingUp, color: 'text-[#1a73e8]' },
    { value: '98%', label: 'Customer Satisfaction', icon: Users, color: 'text-[#34a853]' },
    { value: '60', unit: 'min', label: 'Average Response', icon: Clock, color: 'text-[#ea8600]' },
    { value: '15+', label: 'Years Experience', icon: Award, color: 'text-[#ea4335]' }
  ];

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
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${serviceName} | Flood Doctor`}
        description={service?.metaDescription || ''}
      />

      {/* Hero with Big Stats */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#5f6368] mb-8">
            <Link to="/" className="hover:text-[#1a73e8]">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services/" className="hover:text-[#1a73e8]">Services</Link>
            <ChevronRight size={14} />
            <span className="text-[#202124]">{serviceName}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: googleEase }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#e8f0fe] border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm text-[#5f6368]">
                  <strong className="text-[#202124]">500+</strong> 5-star reviews
                </span>
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

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: googleEase }}
            >
              {mainStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  >
                    <Icon size={24} className={`${stat.color} mb-3`} />
                    <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-1`}>
                      {stat.value}
                      {stat.unit && <span className="text-xl">{stat.unit}</span>}
                    </div>
                    <div className="text-sm text-[#5f6368]">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-[#1a73e8]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-white">
            {[
              { icon: Shield, text: 'IICRC Certified' },
              { icon: Clock, text: '24/7 Emergency' },
              { icon: Star, text: 'Top Rated' },
              { icon: CheckCircle2, text: 'Licensed & Insured' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon size={18} />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process with Progress Bar */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-[#5f6368]">
              Delivering results in 4 systematic steps
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="hidden lg:block mb-12">
            <div className="relative h-2 bg-[#e8f0fe] rounded-full">
              <motion.div
                className="absolute h-2 bg-[#1a73e8] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
              {processSteps.map((_, idx) => (
                <motion.div
                  key={idx}
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#1a73e8] border-4 border-white shadow"
                  style={{ left: `${(idx / (processSteps.length - 1)) * 100}%`, transform: 'translate(-50%, -50%)' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.3 }}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="lg:hidden w-12 h-12 rounded-full bg-[#1a73e8] text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#202124] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#5f6368]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
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
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: 'Incredible response time. They were at my house within 45 minutes!', author: 'John D.', location: 'Arlington' },
              { quote: 'Professional, thorough, and handled everything with my insurance.', author: 'Sarah M.', location: 'Alexandria' },
              { quote: 'They saved our basement and prevented thousands in damage.', author: 'Mike R.', location: 'Fairfax' }
            ].map((review, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#fbbf24] fill-[#fbbf24]" />
                  ))}
                </div>
                <p className="text-[#202124] mb-4">"{review.quote}"</p>
                <div className="text-sm text-[#5f6368]">
                  <strong className="text-[#202124]">{review.author}</strong> — {review.location}
                </div>
              </motion.div>
            ))}
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
            Common Questions
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
      <section className="py-20 lg:py-28 bg-[#1a73e8]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] text-center">
          <motion.h2
            className="text-[36px] lg:text-[48px] font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Join Our 5,000+ Happy Customers
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get your free estimate and see why we're {cityName}'s #1 rated restoration company.
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

      <RelatedServices
        currentServiceId={service.id}
        category={service.category}
        audience={service.audience}
      />

      <ServiceAreaLinks serviceTitle={service.title} serviceSlug={service.slug} />
    </main>
  );
};

export default ServiceDetailDev7;
