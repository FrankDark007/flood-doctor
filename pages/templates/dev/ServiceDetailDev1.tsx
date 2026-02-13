import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ChevronRight,
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

// Google-style easing curve
const googleEase = [0.22, 1, 0.36, 1];

/**
 * ServiceDetailDev1 - Hero-Focused Layout
 *
 * Features:
 * - Full-width immersive hero with gradient overlay
 * - Trust badges prominently in hero
 * - Floating CTA card overlapping hero
 * - Horizontal process cards below hero
 * - Clean, Apple-inspired sections
 */

// Demo service data for development
const demoService: ServiceData = {
  id: 'water-damage-restoration',
  title: 'Water Damage Restoration',
  slug: 'water-damage-restoration',
  category: 'RESTORATION',
  audience: 'RESIDENTIAL',
  shortDescription: 'Professional water damage restoration with 60-minute emergency response.',
  heroIntro: 'Fast, professional water damage restoration when you need it most. Our IICRC-certified technicians respond within 60 minutes to minimize damage and restore your property.',
  metaDescription: 'Professional water damage restoration services in Northern Virginia. 24/7 emergency response, IICRC certified technicians. Call (877) 497-0007.',
  whatWeDo: [
    { title: 'Emergency Assessment', description: 'Our certified technicians arrive within 60 minutes to assess the damage using thermal cameras and moisture meters.', substeps: ['24/7 emergency response', 'Advanced detection equipment', 'Detailed damage report'] },
    { title: 'Water Extraction', description: 'Industrial-grade pumps remove standing water quickly, minimizing structural damage and preventing mold growth.', substeps: ['Commercial-grade equipment', 'Up to 10,000 gallons/hour', 'Prevents secondary damage'] },
    { title: 'Drying & Dehumidification', description: 'Strategic placement of air movers and dehumidifiers ensures complete moisture removal with daily monitoring.', substeps: ['Scientific drying protocols', 'Daily moisture readings', 'IICRC standards followed'] },
    { title: 'Restoration & Repair', description: 'From minor repairs to full reconstruction, we restore your property to pre-loss condition with quality materials.', substeps: ['Licensed contractors', 'Insurance coordination', 'Quality guarantee'] }
  ],
  faqs: [
    { question: 'How quickly should water damage be addressed?', answer: 'Within 24-48 hours. Mold can begin growing in as little as 24 hours, and structural damage worsens exponentially.' },
    { question: 'Does insurance cover water damage?', answer: 'Most homeowner policies cover water damage from sudden events like burst pipes or appliance failures.' },
    { question: 'What does restoration cost?', answer: 'Costs vary based on extent of damage, typically ranging from $1,000 to $5,000 for minor issues.' },
    { question: 'Can I stay home during restoration?', answer: 'In many cases, yes. For minor to moderate damage, you can usually stay.' }
  ]
};

interface ServiceDetailDev1Props {
  service?: ServiceData;
}

const ServiceDetailDev1: React.FC<ServiceDetailDev1Props> = ({ service = demoService }) => {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set([0]));
  const franchise = useFranchise();
  const isLocalPage = franchise.id !== 'hq';
  const cityName = isLocalPage ? franchise.name : '';
  const stateAbbr = isLocalPage ? (franchise.state || 'VA') : '';
  const serviceName = service?.title || 'Water Damage Restoration';

  const localizedServiceName = isLocalPage
    ? `${serviceName} in ${cityName}, ${stateAbbr}`
    : `${serviceName} in Fairfax & Northern Virginia`;

  const trustBadges = [
    { icon: Clock, label: '60-Min Response' },
    { icon: Shield, label: 'IICRC Certified' },
    { icon: Star, label: '4.9★ Rating' },
    { icon: Award, label: '24/7 Available' }
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

  const faqs = service?.faqs || [];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${serviceName}`}
        description={service?.metaDescription || ''}
      />

      {/* Full-Width Immersive Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt={serviceName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/95 via-[#0d1117]/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: googleEase }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
                <Link to="/" className="hover:text-white">Home</Link>
                <ChevronRight size={14} />
                <Link to="/services/" className="hover:text-white">Services</Link>
                <ChevronRight size={14} />
                <span className="text-white">{serviceName}</span>
              </nav>

              <motion.h1
                className="text-[48px] lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {localizedServiceName}
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {service?.heroIntro || service?.shortDescription}
              </motion.p>

              {/* Trust Badges */}
              <motion.div
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {trustBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                  >
                    <badge.icon size={16} className="text-[#34a853]" />
                    <span className="text-sm font-medium text-white">{badge.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link
                  to="/request/"
                  className="inline-flex items-center justify-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="tel:8774970007"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
                >
                  <Phone size={20} className="mr-2" />
                  (877) 497-0007
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating CTA Card */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: googleEase }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md ml-auto">
                <h3 className="text-2xl font-bold text-[#202124] mb-4">
                  Get Help Now
                </h3>
                <p className="text-[#5f6368] mb-6">
                  Our emergency team is standing by 24/7. Get a free assessment and quote within minutes.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Free damage assessment', 'Insurance claim assistance', 'Same-day service available'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#202124]">
                      <CheckCircle2 size={18} className="text-[#34a853]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/request/"
                  className="block w-full text-center bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold py-4 rounded-full transition-colors"
                >
                  Request Service
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps - Horizontal Cards */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] lg:text-[48px] font-bold text-[#202124] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-[#5f6368] max-w-2xl mx-auto">
              Our proven 4-step restoration process gets your property back to normal fast.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#202124] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#5f6368] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-[36px] lg:text-[44px] font-bold text-[#202124] mb-6">
                Why Choose Flood Doctor?
              </h2>
              <p className="text-lg text-[#5f6368] mb-8">
                When water damage strikes, you need a team you can trust. We combine cutting-edge technology with decades of experience to deliver results.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'IICRC Certified Technicians', desc: 'Industry-certified experts with ongoing training' },
                  { title: 'Direct Insurance Billing', desc: 'We work with all major insurance companies' },
                  { title: 'Guaranteed Satisfaction', desc: 'We stand behind every restoration project' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle2 size={24} className="text-[#34a853] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#202124] mb-1">{item.title}</h4>
                      <p className="text-[#5f6368]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Flood Doctor team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-[#1a73e8] text-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[36px] font-bold text-[#202124] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqs.has(idx);
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden"
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
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#f8f9fa] transition-colors"
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

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-[#1a73e8]">
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
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get a free estimate from Northern Virginia's most trusted restoration company.
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
              Get Free Estimate
            </Link>
            <Link
              to="tel:8774970007"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-colors"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        currentServiceId={service.id}
        category={service.category}
        audience={service.audience}
      />

      {/* Service Area Links */}
      <ServiceAreaLinks serviceTitle={service.title} serviceSlug={service.slug} />
    </main>
  );
};

export default ServiceDetailDev1;
