/**
 * Service-Dev-10.tsx - Tabbed Content Layout
 *
 * A modular layout with tabbed navigation allowing users to explore
 * different aspects of a service. Perfect for comprehensive service
 * pages with distinct sections.
 *
 * Capacity: 3000+ words
 * Best for: Multi-faceted services, comprehensive guides, segmented content
 */

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone, Clock, Shield, Star, CheckCircle, AlertTriangle,
  ArrowRight, Droplets, ThermometerSun, Wind, Users, Award,
  FileText, DollarSign, HelpCircle, Wrench, Home, Building2,
  Zap, MapPin, Calendar, ChevronRight, MessageSquare
} from 'lucide-react';

// Google-style easing
const smoothEase = [0.22, 1, 0.36, 1];

// Tab Button Component
const TabButton: React.FC<{
  label: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon: Icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
        isActive
          ? 'bg-[#1a73e8] text-white shadow-lg shadow-blue-500/20'
          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
};

// Content Card
const ContentCard: React.FC<{
  title: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  className?: string;
}> = ({ title, children, icon: Icon, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${className}`}>
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center mb-4">
          <Icon className="text-[#1a73e8]" size={24} />
        </div>
      )}
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  );
};

// FAQ Item
const FAQItem: React.FC<{
  question: string;
  answer: string;
}> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronRight
          className={`text-gray-500 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Pricing Tier
const PricingTier: React.FC<{
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}> = ({ name, price, description, features, highlighted = false }) => {
  return (
    <div
      className={`rounded-2xl p-6 ${
        highlighted
          ? 'bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] text-white'
          : 'bg-white border border-gray-200'
      }`}
    >
      <h3 className={`text-lg font-bold mb-1 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
        {name}
      </h3>
      <div className={`text-3xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-[#1a73e8]'}`}>
        {price}
      </div>
      <p className={`text-sm mb-4 ${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle
              size={16}
              className={`mt-0.5 flex-shrink-0 ${highlighted ? 'text-green-400' : 'text-green-500'}`}
            />
            <span className={`text-sm ${highlighted ? 'text-white' : 'text-gray-700'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Tab Content Components
const OverviewTab: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: smoothEase }}
      className="space-y-8"
    >
      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed">
          Water damage restoration is the process of returning a property to its pre-loss
          condition after water intrusion. Whether from a burst pipe, storm flooding, or
          appliance malfunction, water damage requires immediate professional attention to
          prevent lasting structural damage and mold growth.
        </p>
      </div>

      {/* Key Points Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContentCard title="What We Do" icon={Wrench}>
          <p>
            Our IICRC-certified technicians extract standing water, dry affected structures,
            remove damaged materials, and restore your property to pre-loss condition—often
            without major reconstruction.
          </p>
        </ContentCard>

        <ContentCard title="Response Time" icon={Clock}>
          <p>
            We guarantee 20-30 minute response times throughout Northern Virginia. Our
            strategically positioned teams and pre-loaded trucks mean we arrive ready to work.
          </p>
        </ContentCard>

        <ContentCard title="Insurance Assistance" icon={FileText}>
          <p>
            We handle insurance documentation from start to finish, including Xactimate
            estimates, daily moisture logs, and direct billing to your insurance company.
          </p>
        </ContentCard>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Why Northern Virginia Homeowners Choose Flood Doctor
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { stat: '2,500+', label: 'Restorations completed since 2008' },
            { stat: '4.9★', label: 'Average rating across 500+ reviews' },
            { stat: '20-30 min', label: 'Guaranteed response time' },
            { stat: '100%', label: 'Insurance claim success rate' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="text-3xl font-bold text-[#1a73e8]">{item.stat}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Long-form Content */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Understanding Water Damage</h3>
        <p className="text-gray-700 leading-relaxed">
          Water damage is categorized into three types based on the contamination level of the
          water source. Category 1 (clean water) comes from sanitary sources like supply lines
          and is the easiest to remediate. Category 2 (gray water) contains contaminants from
          sources like dishwashers or washing machines and requires antimicrobial treatment.
          Category 3 (black water) involves sewage or floodwater and requires specialized
          handling and disposal.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Beyond the water category, damage is also classified by the extent of saturation.
          Class 1 involves minimal saturation of a small area. Class 2 affects an entire room
          with moisture wicking up walls. Class 3 indicates ceiling, walls, and floors are
          saturated. Class 4 involves specialty drying situations like hardwood floors or
          plaster walls that require longer drying times.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The restoration process follows industry standards set by the IICRC (Institute of
          Inspection, Cleaning and Restoration Certification). These standards ensure consistent,
          effective restoration regardless of the specific situation. Every member of our team
          holds current IICRC certifications and follows these protocols precisely.
        </p>
      </div>
    </motion.div>
  );
};

const ProcessTab: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: smoothEase }}
      className="space-y-8"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed">
          Our restoration process follows IICRC S500 standards—the industry's gold standard
          for water damage restoration. Here's exactly what happens when you call.
        </p>
      </div>

      {/* Process Steps */}
      <div className="space-y-6">
        {[
          {
            step: 1,
            title: 'Emergency Contact',
            time: '0-5 minutes',
            description: 'When you call our 24/7 emergency line, our trained dispatchers gather critical information: water source, affected areas, and safety concerns. We dispatch the nearest available team immediately.',
            details: [
              'Assess water type and contamination level',
              'Determine affected area size',
              'Check for safety hazards',
              'Provide immediate guidance',
            ],
            icon: Phone,
          },
          {
            step: 2,
            title: 'Rapid Response Arrival',
            time: '20-30 minutes',
            description: 'Our fully-equipped response trucks arrive with industrial extraction equipment, commercial dehumidifiers, and air movers. We waste no time getting to work.',
            details: [
              'GPS-optimized routing',
              'Pre-loaded extraction equipment',
              'Industrial-grade tools',
              'Personal protective equipment',
            ],
            icon: Zap,
          },
          {
            step: 3,
            title: 'Inspection & Assessment',
            time: '30-60 minutes',
            description: 'Using moisture meters and thermal imaging cameras, we map the full extent of water damage—including hidden moisture in walls, under floors, and in ceiling cavities.',
            details: [
              'Thermal imaging for hidden moisture',
              'Moisture mapping documentation',
              'Water category identification',
              'Damage class determination',
            ],
            icon: Shield,
          },
          {
            step: 4,
            title: 'Water Extraction',
            time: '1-4 hours',
            description: 'Truck-mounted and portable extraction units remove standing water at rates up to 500 gallons per hour. We extract from carpets, padding, and structural cavities.',
            details: [
              'High-capacity extraction units',
              'Carpet and pad extraction',
              'Hardwood floor extraction',
              'Content protection and removal',
            ],
            icon: Droplets,
          },
          {
            step: 5,
            title: 'Drying & Dehumidification',
            time: '3-5 days',
            description: 'Strategic placement of commercial dehumidifiers and air movers creates optimal drying conditions. We use psychrometric calculations to determine exact equipment needs.',
            details: [
              'Commercial dehumidification',
              'Strategic air mover placement',
              'Daily moisture monitoring',
              'Equipment adjustment as needed',
            ],
            icon: Wind,
          },
          {
            step: 6,
            title: 'Cleaning & Sanitizing',
            time: 'Throughout',
            description: 'Affected areas and belongings are cleaned, sanitized, and treated with antimicrobial solutions to prevent mold and bacterial growth.',
            details: [
              'Antimicrobial treatment',
              'Content cleaning',
              'Odor removal',
              'Air filtration (HEPA)',
            ],
            icon: ThermometerSun,
          },
          {
            step: 7,
            title: 'Restoration Complete',
            time: 'Day 3-7',
            description: 'Once all materials reach acceptable moisture levels, we remove equipment and provide complete documentation for your records and insurance.',
            details: [
              'Final moisture verification',
              'Complete documentation package',
              'Certificate of completion',
              'Satisfaction guarantee',
            ],
            icon: CheckCircle,
          },
        ].map((process, idx) => (
          <div key={idx} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-xl bg-[#1a73e8] flex items-center justify-center text-white flex-shrink-0">
                <process.icon size={24} />
              </div>
              {idx < 6 && <div className="w-0.5 flex-1 bg-gray-200 my-2" />}
            </div>
            <div className="pb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-[#1a73e8] font-medium">Step {process.step}</span>
                <span className="text-sm text-gray-500">• {process.time}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
              <p className="text-gray-600 mb-4">{process.description}</p>
              <ul className="grid md:grid-cols-2 gap-2">
                {process.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-green-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const PricingTab: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: smoothEase }}
      className="space-y-8"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed">
          Water damage restoration costs vary based on the extent of damage, water category,
          and materials affected. Here's transparent pricing information to help you understand
          what to expect.
        </p>
      </div>

      {/* Cost Factors */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-semibold text-yellow-800 mb-1">Important Cost Factors</h4>
            <p className="text-yellow-700 text-sm">
              Every water damage situation is unique. Costs depend on affected square footage,
              water category, materials involved, and necessary repairs. We always provide a
              detailed estimate before starting work.
            </p>
          </div>
        </div>
      </div>

      {/* Service Tiers */}
      <div className="grid md:grid-cols-3 gap-6">
        <PricingTier
          name="Emergency Response"
          price="$500+"
          description="Immediate extraction and stabilization"
          features={[
            '20-30 min response',
            'Water extraction',
            'Moisture assessment',
            'Emergency tarping',
            'Source identification',
          ]}
        />
        <PricingTier
          name="Complete Restoration"
          price="$1,500+"
          description="Full extraction through drying"
          features={[
            'Everything in Emergency',
            'Commercial dehumidification',
            'Daily monitoring',
            'Antimicrobial treatment',
            'Insurance documentation',
            'Direct insurance billing',
          ]}
          highlighted
        />
        <PricingTier
          name="Full Recovery"
          price="$3,500+"
          description="Restoration plus reconstruction"
          features={[
            'Everything in Complete',
            'Content pack-out',
            'Mold remediation',
            'Structural repairs',
            'Flooring replacement',
            'Paint & finish work',
          ]}
        />
      </div>

      {/* Average Costs */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Average Costs by Water Category</h3>
        <div className="space-y-4">
          {[
            { category: 'Category 1 (Clean Water)', range: '$1,200 - $4,500', color: '#22c55e', example: 'Burst supply line, appliance leak' },
            { category: 'Category 2 (Gray Water)', range: '$2,500 - $7,500', color: '#f59e0b', example: 'Dishwasher overflow, washing machine' },
            { category: 'Category 3 (Black Water)', range: '$5,000 - $25,000+', color: '#ef4444', example: 'Sewage backup, flood water' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <div>
                  <span className="font-medium text-gray-900">{item.category}</span>
                  <p className="text-sm text-gray-500">{item.example}</p>
                </div>
              </div>
              <span className="text-lg font-bold" style={{ color: item.color }}>{item.range}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Info */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Insurance Coverage</h3>
        <p className="text-gray-700 mb-6">
          Most homeowner's insurance policies cover water damage from sudden and accidental
          events. We work directly with all major insurance carriers and handle claims
          documentation on your behalf.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-[#1a73e8] mb-1">80%</div>
            <div className="text-sm text-gray-600">of claims covered by insurance</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-[#1a73e8] mb-1">95%</div>
            <div className="text-sm text-gray-600">claim approval rate</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-[#1a73e8] mb-1">2-3 days</div>
            <div className="text-sm text-gray-600">average claim processing</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceAreasTab: React.FC = () => {
  const areas = [
    { name: 'McLean', response: '15-20 min' },
    { name: 'Great Falls', response: '20-25 min' },
    { name: 'Vienna', response: '15-20 min' },
    { name: 'Tysons', response: '15-20 min' },
    { name: 'Falls Church', response: '20-25 min' },
    { name: 'Arlington', response: '20-30 min' },
    { name: 'Fairfax', response: '20-25 min' },
    { name: 'Reston', response: '25-30 min' },
    { name: 'Herndon', response: '25-30 min' },
    { name: 'Oakton', response: '20-25 min' },
    { name: 'Burke', response: '25-30 min' },
    { name: 'Annandale', response: '20-25 min' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: smoothEase }}
      className="space-y-8"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed">
          Flood Doctor provides 24/7 emergency water damage restoration throughout Northern
          Virginia. Our strategically positioned teams ensure rapid response times across
          our entire service area.
        </p>
      </div>

      {/* Service Area Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {areas.map((area, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#1a73e8] hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-[#1a73e8]" size={18} />
              <span className="font-semibold text-gray-900">{area.name}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock size={14} />
              {area.response} response
            </div>
          </div>
        ))}
      </div>

      {/* Property Types */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Properties We Service</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center flex-shrink-0">
              <Home className="text-[#1a73e8]" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Residential</h4>
              <p className="text-sm text-gray-600">
                Single-family homes, townhouses, condos, and apartments. We handle everything
                from finished basements to multi-story water intrusion.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center flex-shrink-0">
              <Building2 className="text-[#1a73e8]" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Commercial</h4>
              <p className="text-sm text-gray-600">
                Office buildings, retail spaces, restaurants, and industrial facilities.
                Minimizing business disruption is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Expertise */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Local Expertise Matters</h3>
        <p className="text-gray-700 mb-6">
          As a Northern Virginia-based company, we understand the unique water damage challenges
          in our region. From clay soil drainage issues to older home plumbing, we've seen and
          solved it all.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Knowledge of local building codes and requirements',
            'Relationships with local insurance adjusters',
            'Understanding of regional soil and drainage patterns',
            'Familiarity with common home construction types',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={18} />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FAQTab: React.FC = () => {
  const faqs = [
    {
      question: 'How quickly can you respond to a water damage emergency?',
      answer: 'We guarantee 20-30 minute response times throughout Northern Virginia. Our teams are strategically positioned and our trucks are pre-loaded with equipment, so we can begin work immediately upon arrival.',
    },
    {
      question: 'Will my insurance cover water damage restoration?',
      answer: 'Most homeowner\'s insurance policies cover water damage from sudden and accidental events like burst pipes, appliance failures, and storm damage. We work directly with all major insurance carriers and handle claims documentation on your behalf. In our experience, approximately 80% of water damage claims are covered.',
    },
    {
      question: 'How long does the restoration process take?',
      answer: 'The timeline depends on the extent of damage. Extraction typically takes a few hours, but the drying process usually requires 3-5 days to ensure all materials reach acceptable moisture levels. We monitor daily and adjust as needed.',
    },
    {
      question: 'Do I need to leave my home during restoration?',
      answer: 'In most cases, no. Our equipment runs quietly and we can contain affected areas to minimize disruption. However, for severe Category 3 (black water) damage or if you have health sensitivities, we may recommend temporary relocation.',
    },
    {
      question: 'Can you save my hardwood floors?',
      answer: 'Often, yes. With rapid response and proper drying techniques, we can save hardwood floors that would otherwise need replacement. The key factors are how quickly we respond and how long the water has been present.',
    },
    {
      question: 'What if I find mold after water damage?',
      answer: 'If mold is discovered during restoration, we\'ll assess the extent and provide a separate remediation plan. Our technicians are also certified in mold remediation (IICRC AMRT) and can handle both issues.',
    },
    {
      question: 'Do you work with all insurance companies?',
      answer: 'Yes, we work with all major insurance carriers and have established relationships with most adjusters in our service area. We use Xactimate for estimates (the same software insurance companies use) and provide complete documentation packages.',
    },
    {
      question: 'What\'s the difference between your services and DIY cleanup?',
      answer: 'Consumer-grade equipment can\'t match the extraction power and drying capacity of commercial equipment. More importantly, we can detect hidden moisture that causes long-term damage and mold growth. Professional restoration typically costs less in the long run than DIY attempts that result in hidden damage.',
    },
    {
      question: 'Are your technicians certified?',
      answer: 'Yes, all our technicians hold current IICRC certifications including WRT (Water Restoration Technician) and AMRT (Applied Microbial Remediation Technician). We also maintain EPA Lead-Safe certification for work in older homes.',
    },
    {
      question: 'What should I do while waiting for your team to arrive?',
      answer: 'If safe to do so: turn off the water source, turn off electricity to affected areas, move valuables to dry areas, and document the damage with photos and video. We provide detailed guidance over the phone when you call.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: smoothEase }}
      className="space-y-8"
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed">
          Have questions about water damage restoration? Here are answers to the most
          common questions we receive from homeowners.
        </p>
      </div>

      {/* FAQ List */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 divide-y divide-gray-200 overflow-hidden">
        <div className="p-6">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] rounded-2xl p-8 text-white text-center">
        <MessageSquare className="mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
        <p className="text-blue-100 mb-6">
          Our experts are available 24/7 to answer your questions and provide guidance.
        </p>
        <a
          href="tel:+17035551234"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a73e8] font-semibold rounded-full hover:bg-blue-50 transition-colors"
        >
          <Phone size={18} />
          Call (703) 555-1234
        </a>
      </div>
    </motion.div>
  );
};

// Main Component
const ServiceDev10: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'process', label: 'Our Process', icon: Wrench },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'areas', label: 'Service Areas', icon: MapPin },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'process':
        return <ProcessTab />;
      case 'pricing':
        return <PricingTab />;
      case 'areas':
        return <ServiceAreasTab />;
      case 'faq':
        return <FAQTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-6">
              <Droplets size={16} />
              Professional Restoration Services
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Water Damage Restoration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Northern Virginia
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              IICRC-certified technicians available 24/7 with 20-30 minute response times.
              From emergency extraction to complete restoration—we handle it all.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { icon: Clock, text: '20-30 Min Response', bg: 'bg-yellow-500/20', color: 'text-yellow-400' },
                { icon: Shield, text: 'IICRC Certified', bg: 'bg-blue-500/20', color: 'text-blue-400' },
                { icon: Star, text: '4.9★ Rating', bg: 'bg-yellow-500/20', color: 'text-yellow-400' },
                { icon: Award, text: '15+ Years', bg: 'bg-green-500/20', color: 'text-green-400' },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${badge.bg} backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                >
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  <span className="text-white font-medium text-sm">{badge.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="tel:+17035551234"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a73e8] font-semibold rounded-full hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={20} />
              Call Now: (703) 555-1234
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                label={tab.label}
                icon={tab.icon}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {renderTabContent()}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Restore Your Property?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is standing by 24/7 to help. Call now for immediate response.
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
        </div>
      </section>
    </div>
  );
};

export default ServiceDev10;
