/**
 * Service-Dev-5.tsx - Story/Timeline Layout
 *
 * A narrative-driven layout that tells the story of water damage restoration
 * through a visual timeline. Perfect for explaining processes and building
 * trust through transparency.
 *
 * Capacity: 2500+ words
 * Best for: Process explanation, before/after stories, case studies
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Phone, Clock, Shield, Star, CheckCircle, AlertTriangle,
  Droplets, Wind, ThermometerSun, FileCheck, Award, Users,
  ArrowRight, ChevronRight, Play, MapPin, Calendar
} from 'lucide-react';

// Google-style easing
const smoothEase = [0.22, 1, 0.36, 1];

interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ElementType;
  image?: string;
  highlight?: boolean;
}

// Timeline Event Component
const TimelineEventCard: React.FC<{
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
}> = ({ event, index, isLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = event.icon;

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center ${isLeft ? 'lg:flex-row-reverse' : ''} gap-8 lg:gap-12`}
      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 z-10">
        <motion.div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            event.highlight
              ? 'bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] text-white shadow-lg shadow-blue-500/30'
              : 'bg-white border-4 border-[#1a73e8] text-[#1a73e8]'
          }`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3, ease: smoothEase }}
        >
          <Icon size={20} />
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-3rem)] ${isLeft ? 'lg:text-right' : ''}`}>
        <motion.div
          className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 ${
            event.highlight ? 'ring-2 ring-[#1a73e8]/20' : ''
          }`}
          whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
          transition={{ duration: 0.3 }}
        >
          {/* Time Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium mb-4 ${isLeft ? 'lg:ml-auto' : ''}`}>
            <Clock size={14} />
            {event.time}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

          {/* Details List */}
          <ul className={`space-y-2 ${isLeft ? 'lg:text-left' : ''}`}>
            {event.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                {detail}
              </li>
            ))}
          </ul>

          {/* Optional Image */}
          {event.image && (
            <div className="mt-4 rounded-xl overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
            </div>
          )}
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
    </motion.div>
  );
};

// Story Section Component
const StorySection: React.FC<{
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, subtitle, children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      className={`mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: smoothEase }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
      {children}
    </motion.section>
  );
};

// Case Study Card
const CaseStudyCard: React.FC<{
  location: string;
  date: string;
  problem: string;
  solution: string;
  result: string;
  testimonial: string;
  author: string;
}> = ({ location, date, problem, solution, result, testimonial, author }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: smoothEase }}
    >
      <div className="flex flex-wrap gap-4 mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-gray-700 text-sm">
          <MapPin size={14} />
          {location}
        </span>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-gray-700 text-sm">
          <Calendar size={14} />
          {date}
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div>
          <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">The Problem</h4>
          <p className="text-gray-700">{problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Our Solution</h4>
          <p className="text-gray-700">{solution}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">The Result</h4>
          <p className="text-gray-700">{result}</p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white rounded-xl p-6 border-l-4 border-[#1a73e8]">
        <p className="text-lg text-gray-700 italic mb-4">"{testimonial}"</p>
        <p className="text-sm font-semibold text-gray-900">— {author}</p>
      </div>
    </motion.div>
  );
};

// Progress Indicator
const ProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#1a73e8] origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Main Component
const ServiceDev5: React.FC = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // Timeline Events
  const timelineEvents: TimelineEvent[] = [
    {
      id: 'call',
      time: 'Minute 0',
      title: 'Emergency Call Received',
      description: 'The moment you call Flood Doctor, our emergency response system activates. Our dispatchers are trained to gather critical information quickly.',
      details: [
        'Assess the type and severity of water damage',
        'Determine immediate safety concerns',
        'Dispatch the nearest available team',
        'Provide immediate over-the-phone guidance'
      ],
      icon: Phone,
      highlight: true
    },
    {
      id: 'dispatch',
      time: '5-10 Minutes',
      title: 'Team Dispatched',
      description: 'Our certified technicians are on their way with fully-equipped emergency response vehicles containing industrial-grade restoration equipment.',
      details: [
        'GPS-optimized routing for fastest arrival',
        'Pre-loaded with extraction equipment',
        'Commercial-grade dehumidifiers ready',
        'Moisture detection technology on board'
      ],
      icon: Users
    },
    {
      id: 'arrival',
      time: '20-30 Minutes',
      title: 'On-Site Arrival & Assessment',
      description: 'Our team arrives and immediately begins a comprehensive damage assessment using advanced moisture detection technology.',
      details: [
        'Thermal imaging to find hidden moisture',
        'Moisture mapping of affected areas',
        'Identify water source and category',
        'Document damage for insurance purposes'
      ],
      icon: Shield,
      highlight: true
    },
    {
      id: 'extraction',
      time: 'Hour 1-2',
      title: 'Water Extraction Begins',
      description: 'Using truck-mounted extraction units capable of removing hundreds of gallons per hour, we begin removing standing water immediately.',
      details: [
        'Remove up to 500 gallons per hour',
        'Extract water from carpets and padding',
        'Clear water from structural cavities',
        'Begin salvaging affected belongings'
      ],
      icon: Droplets
    },
    {
      id: 'drying',
      time: 'Hours 2-72',
      title: 'Structural Drying Phase',
      description: 'Strategic placement of commercial dehumidifiers and air movers creates optimal drying conditions to prevent mold growth.',
      details: [
        'Calculate precise equipment placement',
        'Monitor humidity levels continuously',
        'Adjust equipment as conditions change',
        'Document moisture readings daily'
      ],
      icon: Wind
    },
    {
      id: 'monitoring',
      time: 'Days 1-5',
      title: 'Daily Monitoring & Adjustment',
      description: 'Our technicians return daily to monitor progress, adjust equipment, and ensure the drying process stays on track.',
      details: [
        'Check moisture levels in all materials',
        'Verify equipment is functioning optimally',
        'Adjust airflow patterns as needed',
        'Update you on restoration progress'
      ],
      icon: ThermometerSun
    },
    {
      id: 'complete',
      time: 'Day 3-7',
      title: 'Restoration Complete',
      description: 'Once all materials reach acceptable moisture levels, we remove our equipment and provide complete documentation.',
      details: [
        'Final moisture verification testing',
        'Complete documentation package',
        'Insurance paperwork assistance',
        'Satisfaction guarantee follow-up'
      ],
      icon: FileCheck,
      highlight: true
    }
  ];

  return (
    <>
      <ProgressIndicator />

      <div className="min-h-screen bg-white">
        {/* Hero - Story Opening */}
        <section ref={heroRef} className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 rounded-full bg-blue-500/10"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${10 + (i % 3) * 30}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto px-4 relative">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: smoothEase }}
            >
              {/* Service Label */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Droplets size={16} />
                Water Damage Restoration
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                The Story of Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Restoration Journey
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                From the moment water invades your home to the final inspection,
                here's exactly what happens when you call Flood Doctor.
                Transparency builds trust—and trust is earned through results.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  { icon: Clock, text: '20-30 Min Response', color: 'yellow' },
                  { icon: Shield, text: 'IICRC Certified', color: 'blue' },
                  { icon: Star, text: '4.9★ Rating', color: 'yellow' },
                  { icon: Award, text: '15+ Years Experience', color: 'green' },
                ].map((badge, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-${badge.color}-500/20 backdrop-blur-sm`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  >
                    <badge.icon className={`w-4 h-4 text-${badge.color}-400`} />
                    <span className="text-white font-medium text-sm">{badge.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="tel:+17035551234"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1a73e8] to-[#0d47a1] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                Start Your Restoration Story
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* The Problem Section */}
        <StorySection
          title="When Water Strikes"
          subtitle="Understanding the urgency of water damage and why every minute counts"
          className="pt-20"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Water damage is more than an inconvenience—it's a race against time. The moment
                  water enters your home, a clock starts ticking. Within the first 24-48 hours,
                  moisture begins seeping into building materials, creating the perfect conditions
                  for mold growth, structural damage, and permanent property loss.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Whether it's a burst pipe at 2 AM, a flooded basement after a storm, or an
                  appliance leak that went unnoticed, the source matters less than the response.
                  Fast, professional extraction and drying can mean the difference between a
                  minor setback and a major renovation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This is why we've built our entire operation around speed without sacrificing
                  quality. Our 20-30 minute response time isn't a marketing promise—it's the
                  result of strategic technician positioning, fully-stocked emergency vehicles,
                  and a dispatch system designed for crisis response.
                </p>
              </div>

              {/* Damage Timeline */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="text-red-500" />
                  Water Damage Timeline
                </h3>
                <div className="space-y-4">
                  {[
                    { time: '0-1 Hours', damage: 'Water spreads rapidly, saturating floors and walls' },
                    { time: '1-24 Hours', damage: 'Drywall begins to swell, metal starts to tarnish' },
                    { time: '24-48 Hours', damage: 'Mold growth begins, odors develop' },
                    { time: '48-72 Hours', damage: 'Structural integrity compromised, mold spreads' },
                    { time: '1 Week+', damage: 'Major restoration required, potential health hazards' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        idx < 2 ? 'bg-yellow-500' : idx < 4 ? 'bg-orange-500' : 'bg-red-500'
                      }`} />
                      <div>
                        <span className="font-semibold text-gray-900">{item.time}:</span>
                        <span className="text-gray-600 ml-2">{item.damage}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </StorySection>

        {/* The Timeline Section */}
        <StorySection
          title="Your Restoration Timeline"
          subtitle="A step-by-step journey from emergency call to complete restoration"
        >
          <div className="max-w-6xl mx-auto px-4 relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a73e8] via-[#1a73e8] to-green-500 transform lg:-translate-x-1/2" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <TimelineEventCard
                  key={event.id}
                  event={event}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </StorySection>

        {/* Why This Matters Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Our Process Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every step in our restoration process is backed by science, industry standards,
                and over 15 years of hands-on experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'IICRC S500 Standards',
                  description: 'Our entire process follows the Institute of Inspection, Cleaning and Restoration Certification standards—the gold standard in water damage restoration.',
                  icon: Award,
                },
                {
                  title: 'Scientific Drying',
                  description: 'We use psychrometric calculations to determine exact equipment needs, ensuring optimal drying without over-drying that can damage materials.',
                  icon: ThermometerSun,
                },
                {
                  title: 'Continuous Monitoring',
                  description: 'Daily moisture readings and equipment adjustments ensure your property dries correctly, preventing secondary damage and mold growth.',
                  icon: FileCheck,
                },
                {
                  title: 'Insurance Documentation',
                  description: 'We photograph and document every step, providing your insurance company with the detailed records they need for claim processing.',
                  icon: Shield,
                },
                {
                  title: 'Certified Technicians',
                  description: 'Every member of our team holds current IICRC certifications and undergoes regular training on the latest restoration techniques.',
                  icon: Users,
                },
                {
                  title: 'Guaranteed Results',
                  description: 'We don\'t consider the job done until moisture levels meet industry standards and you\'re completely satisfied with the results.',
                  icon: CheckCircle,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: smoothEase }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center mb-4">
                    <item.icon className="text-[#1a73e8]" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Story - Case Study */}
        <StorySection
          title="A Real Restoration Story"
          subtitle="See how we helped a McLean family recover from basement flooding"
          className="pt-20"
        >
          <div className="max-w-5xl mx-auto px-4">
            <CaseStudyCard
              location="McLean, Virginia"
              date="March 2024"
              problem="A broken sump pump during a heavy rainstorm led to 6 inches of standing water in a finished basement. The homeowners discovered the flooding at 11 PM."
              solution="Our team arrived within 25 minutes, beginning extraction immediately. We removed over 800 gallons of water that night and set up strategic drying equipment by 2 AM."
              result="Complete drying achieved in 4 days. No mold growth detected. Insurance claim processed within 2 weeks. Total restoration completed without replacing any drywall."
              testimonial="I was panicking when I called at 11 PM, but the Flood Doctor team was calm and professional. They saved our basement—and probably thousands of dollars in repairs."
              author="Sarah M., McLean Homeowner"
            />
          </div>
        </StorySection>

        {/* Prevention Tips */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Preventing Future Water Damage
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                While we're always here when disaster strikes, prevention is the best protection.
                Here are expert tips from our restoration specialists.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: 'Monthly Checks',
                  tips: [
                    'Inspect washing machine hoses for bulges or cracks',
                    'Check under sinks for slow leaks or moisture',
                    'Test sump pump operation',
                    'Clear gutters and downspouts of debris'
                  ]
                },
                {
                  category: 'Seasonal Maintenance',
                  tips: [
                    'Service water heater annually',
                    'Winterize outdoor faucets before frost',
                    'Check roof for damaged shingles',
                    'Inspect basement walls for new cracks'
                  ]
                },
                {
                  category: 'Smart Upgrades',
                  tips: [
                    'Install water leak detectors near appliances',
                    'Upgrade to steel-braided supply lines',
                    'Add a battery backup to your sump pump',
                    'Consider a whole-home water shutoff system'
                  ]
                },
                {
                  category: 'Know Your Home',
                  tips: [
                    'Locate and label your main water shutoff',
                    'Know where all supply lines run',
                    'Keep our emergency number saved',
                    'Document your belongings for insurance'
                  ]
                },
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.category}</h3>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Your Story Starts With One Call
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Water damage doesn't wait—and neither do we. Call now for immediate response
                from certified restoration professionals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+17035551234"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1a73e8] font-semibold rounded-full hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={20} />
                  (703) 555-1234
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Free Estimate
                  <ArrowRight size={20} />
                </motion.a>
              </div>

              <p className="text-gray-400 text-sm mt-6">
                24/7 Emergency Response • IICRC Certified • Insurance Claim Assistance
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDev5;
