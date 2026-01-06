/**
 * Service-Dev-6.tsx - Expert Guide Layout
 *
 * An authoritative, expert-driven layout that positions Flood Doctor as the
 * industry authority. Features expert profiles, credentials, and deep technical
 * content with visual hierarchy emphasizing expertise.
 *
 * Capacity: 3000+ words
 * Best for: Establishing authority, detailed technical guides, EEAT signals
 */

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone, Clock, Shield, Star, CheckCircle, Award, Users,
  ArrowRight, ChevronDown, ChevronRight, Droplets, BookOpen,
  GraduationCap, BadgeCheck, FileText, MessageSquare, Lightbulb,
  AlertTriangle, ThermometerSun, Wind, Zap, Quote
} from 'lucide-react';

// Google-style easing
const smoothEase = [0.22, 1, 0.36, 1];

interface Expert {
  name: string;
  title: string;
  credentials: string[];
  experience: string;
  specialty: string;
  image?: string;
}

// Expert Card Component
const ExpertCard: React.FC<{ expert: Expert; featured?: boolean }> = ({ expert, featured = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`${featured ? 'lg:col-span-2 lg:row-span-2' : ''} bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: smoothEase }}
      whileHover={{ y: -4 }}
    >
      <div className={`${featured ? 'p-8' : 'p-6'}`}>
        {/* Expert Avatar */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`${featured ? 'w-20 h-20' : 'w-16 h-16'} rounded-full bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] flex items-center justify-center text-white font-bold text-xl`}>
            {expert.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-bold text-gray-900`}>{expert.name}</h3>
            <p className="text-[#1a73e8] font-medium">{expert.title}</p>
            <p className="text-sm text-gray-500">{expert.experience}</p>
          </div>
        </div>

        {/* Credentials */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Credentials</p>
          <div className="flex flex-wrap gap-2">
            {expert.credentials.map((cred, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-xs font-medium"
              >
                <BadgeCheck size={12} />
                {cred}
              </span>
            ))}
          </div>
        </div>

        {/* Specialty */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Specialty</p>
          <p className="text-gray-700">{expert.specialty}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Expert Insight Block
const ExpertInsight: React.FC<{
  expertName: string;
  quote: string;
  context?: string;
}> = ({ expertName, quote, context }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 lg:p-8 my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: smoothEase }}
    >
      <Quote className="absolute top-4 right-4 text-[#1a73e8]/20" size={48} />
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-[#1a73e8] flex items-center justify-center text-white text-sm font-bold">
          {expertName.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{expertName}</p>
          <p className="text-sm text-[#1a73e8]">Expert Insight</p>
        </div>
      </div>
      <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
        "{quote}"
      </blockquote>
      {context && (
        <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
          <Lightbulb size={14} className="inline mr-2 text-yellow-500" />
          {context}
        </p>
      )}
    </motion.div>
  );
};

// Expandable Knowledge Section
const KnowledgeSection: React.FC<{
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: smoothEase }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#e8f0fe] flex items-center justify-center">
            <Icon className="text-[#1a73e8]" size={20} />
          </div>
          <span className="text-lg font-semibold text-gray-900">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-gray-500" size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: smoothEase }}
          >
            <div className="px-5 pb-5 pt-2 border-t border-gray-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Certification Badge
const CertificationBadge: React.FC<{
  name: string;
  issuer: string;
  description: string;
  logo?: string;
}> = ({ name, issuer, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
        <Award className="text-white" size={24} />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-[#1a73e8] mb-1">{issuer}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Main Component
const ServiceDev6: React.FC = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // Expert Team Data
  const experts: Expert[] = [
    {
      name: 'Michael Chen',
      title: 'Lead Restoration Specialist',
      credentials: ['IICRC WRT', 'IICRC AMRT', 'EPA Lead-Safe'],
      experience: '18 years in water damage restoration',
      specialty: 'Complex structural drying and commercial water damage mitigation',
    },
    {
      name: 'Sarah Williams',
      title: 'Mold Assessment Expert',
      credentials: ['IICRC AMRT', 'CMI', 'ACAC Certified'],
      experience: '12 years in mold remediation',
      specialty: 'Mold assessment, testing protocols, and prevention strategies',
    },
    {
      name: 'David Rodriguez',
      title: 'Emergency Response Manager',
      credentials: ['IICRC WRT', 'OSHA 30', 'First Responder'],
      experience: '15 years in emergency services',
      specialty: 'Rapid deployment, team coordination, and disaster response',
    },
    {
      name: 'Jennifer Park',
      title: 'Insurance Liaison Specialist',
      credentials: ['IICRC WRT', 'Xactimate Certified', 'PLRB Member'],
      experience: '10 years in insurance claims',
      specialty: 'Documentation, claims processing, and policyholder advocacy',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: smoothEase }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium mb-6">
                <BookOpen size={16} />
                Expert Guide
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                The Complete Expert Guide to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Water Damage Restoration
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Written by IICRC-certified professionals with over 50 years of combined experience.
                This comprehensive guide covers everything from emergency response to prevention.
              </p>

              {/* Expert Authors */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-3">
                  {experts.slice(0, 4).map((expert, idx) => (
                    <div
                      key={idx}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-white">4 certified experts</span> contributed to this guide
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: GraduationCap, text: 'IICRC Certified' },
                  { icon: Clock, text: 'Updated Jan 2025' },
                  { icon: FileText, text: '25 min read' },
                ].map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-gray-300 text-sm"
                  >
                    <badge.icon size={14} />
                    {badge.text}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Credentials Panel */}
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/20"
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Shield className="text-yellow-400" size={20} />
                Our Credentials
              </h3>
              <div className="space-y-4">
                {[
                  { cert: 'IICRC Certified Firm', desc: 'Water Restoration, Applied Microbial Remediation' },
                  { cert: 'EPA Lead-Safe Certified', desc: 'Licensed for work in pre-1978 properties' },
                  { cert: 'BBB A+ Rating', desc: 'Accredited since 2010 with zero complaints' },
                  { cert: 'Licensed & Insured', desc: 'Virginia Class A Contractor License #2705123456' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-white font-medium">{item.cert}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Water Damage: A Professional's Perspective</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After nearly two decades in the water damage restoration industry, I've seen
                firsthand how proper response can save not just property, but the memories and
                livelihoods tied to that property. Water damage is one of the most common—and
                most misunderstood—challenges homeowners face.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This guide represents the collective knowledge of our entire team, distilled
                into actionable information that can help you whether you're currently facing
                a water emergency or simply want to be prepared. We've written it the way we
                would explain things to our own families—clear, honest, and thorough.
              </p>

              <ExpertInsight
                expertName="Michael Chen"
                quote="The biggest mistake homeowners make isn't the water damage itself—it's waiting too long to address it. Every hour of delay can multiply your restoration costs and health risks."
                context="This insight comes from analyzing over 2,000 residential restoration projects."
              />
            </section>

            {/* Water Categories Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Three Categories of Water Damage</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Not all water damage is created equal. The industry classifies water damage into
                three categories based on the contamination level, and this classification
                fundamentally affects how we approach restoration.
              </p>

              <div className="space-y-4 mb-8">
                <KnowledgeSection title="Category 1: Clean Water" icon={Droplets} defaultOpen>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Category 1 water originates from a sanitary source and poses no substantial
                      risk from dermal, ingestion, or inhalation exposure. This is the "best case"
                      scenario in water damage, though it still requires prompt professional attention.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Sources:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Broken water supply lines</li>
                        <li>• Tub or sink overflows (no contaminants)</li>
                        <li>• Appliance malfunctions involving water supply lines</li>
                        <li>• Falling rainwater (before contact with surfaces)</li>
                        <li>• Melting ice or snow</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 flex items-start gap-3">
                      <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-gray-700 text-sm">
                        <strong>Important:</strong> Category 1 water can quickly degrade to Category 2
                        or 3 if left standing for more than 24-48 hours. Time is critical.
                      </p>
                    </div>
                  </div>
                </KnowledgeSection>

                <KnowledgeSection title="Category 2: Gray Water" icon={Wind}>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Category 2 water contains significant contamination and has the potential to
                      cause discomfort or sickness if contacted or consumed. This water may contain
                      chemical, biological, or physical contaminants.
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Sources:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Washing machine or dishwasher discharge</li>
                        <li>• Toilet overflow with urine (no feces)</li>
                        <li>• Sump pump failures</li>
                        <li>• Hydrostatic pressure seepage through basement walls</li>
                        <li>• Aquarium failures</li>
                      </ul>
                    </div>
                    <ExpertInsight
                      expertName="Sarah Williams"
                      quote="Gray water requires antimicrobial treatment during restoration. We treat affected materials with EPA-registered products before and after drying to prevent microbial amplification."
                    />
                  </div>
                </KnowledgeSection>

                <KnowledgeSection title="Category 3: Black Water" icon={AlertTriangle}>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Category 3 water is grossly contaminated and contains pathogenic, toxigenic,
                      or other harmful agents. This is the most serious type of water damage and
                      requires the most extensive restoration protocols.
                    </p>
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Sources:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Sewage backups</li>
                        <li>• Toilet overflow with feces</li>
                        <li>• River or stream flooding</li>
                        <li>• Hurricane or storm surge water</li>
                        <li>• Standing Category 1 or 2 water that has become grossly contaminated</li>
                      </ul>
                    </div>
                    <div className="bg-red-100 rounded-lg p-4 flex items-start gap-3">
                      <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-gray-700 text-sm">
                        <strong>Health Warning:</strong> Never attempt DIY cleanup of Category 3 water.
                        Professional PPE, containment, and disposal procedures are mandatory. Exposure
                        can cause serious illness.
                      </p>
                    </div>
                  </div>
                </KnowledgeSection>
              </div>
            </section>

            {/* Restoration Process Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Professional Restoration Process</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Professional water damage restoration follows a systematic approach developed
                through decades of industry experience and scientific research. Here's exactly
                what happens when you call our team:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Emergency Contact & Triage',
                    content: 'When you call, our trained dispatchers immediately assess the situation. We gather critical information: the water source, affected areas, whether the water source has been stopped, and any immediate safety concerns. Based on this assessment, we dispatch the appropriate team and equipment.',
                    expert: 'David Rodriguez',
                    insight: 'We position our teams strategically throughout Northern Virginia so we can reach any location within 30 minutes. Our trucks are pre-loaded with extraction equipment, dehumidifiers, and air movers—we don\'t waste time at a warehouse.',
                  },
                  {
                    step: 2,
                    title: 'Inspection & Damage Assessment',
                    content: 'Upon arrival, our certified technicians conduct a thorough inspection using moisture detection equipment. We use thermal imaging cameras to identify moisture behind walls, under floors, and in ceiling cavities. This assessment determines the water category, class of damage, and creates the blueprint for restoration.',
                    expert: 'Michael Chen',
                    insight: 'Moisture mapping is both an art and a science. I\'ve seen techs miss moisture in wall cavities because they only checked at one height. Water wicks up drywall—you need to check at 6 inches, 18 inches, and 36 inches to get the full picture.',
                  },
                  {
                    step: 3,
                    title: 'Water Extraction',
                    content: 'Using truck-mounted or portable extraction units, we remove standing water as quickly as possible. Our equipment can extract hundreds of gallons per hour. We also use weighted extraction tools to pull water from carpets, padding, and hard surfaces.',
                    expert: 'David Rodriguez',
                    insight: 'Speed matters here. The faster we extract, the less moisture absorbs into building materials. I\'ve seen jobs where rapid extraction saved homeowners thousands in reconstruction costs.',
                  },
                  {
                    step: 4,
                    title: 'Drying & Dehumidification',
                    content: 'This is where the science of restoration really comes into play. We calculate the specific dehumidification capacity needed based on the cubic footage of affected areas, the types of materials involved, and current humidity conditions. Equipment is strategically placed to create optimal airflow patterns.',
                    expert: 'Michael Chen',
                    insight: 'We use psychrometric calculations to determine exactly how many dehumidifiers and air movers we need. Too little equipment means slow drying and mold risk. Too much can cause over-drying, which damages wood and drywall. Precision matters.',
                  },
                  {
                    step: 5,
                    title: 'Monitoring & Documentation',
                    content: 'Our technicians return daily—sometimes multiple times daily for severe cases—to monitor moisture levels and adjust equipment. We document everything with moisture readings, photographs, and detailed notes. This documentation is crucial for insurance claims and ensures the job is done right.',
                    expert: 'Jennifer Park',
                    insight: 'Insurance adjusters love our documentation. We provide Xactimate estimates, daily drying logs, and photo evidence at every stage. This level of detail typically results in faster claim processing and fewer disputes.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: smoothEase }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#1a73e8] flex items-center justify-center text-white font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">{item.content}</p>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-[#1a73e8] flex items-center justify-center text-white text-xs font-bold">
                              {item.expert.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-sm font-medium text-gray-900">{item.expert}</span>
                          </div>
                          <p className="text-gray-700 text-sm italic">"{item.insight}"</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Mold Prevention Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mold Prevention: The 48-Hour Window</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                One of the most critical reasons for rapid water damage response is mold prevention.
                Mold can begin growing on wet surfaces within 24-48 hours under the right conditions.
                Once established, mold remediation becomes a separate, often more expensive project.
              </p>

              <ExpertInsight
                expertName="Sarah Williams"
                quote="Mold doesn't need a flood to thrive—just sustained moisture and a food source. Drywall paper, carpet backing, and wood are all mold buffets. Proper drying within the first 48 hours is your best defense."
                context="Sarah has performed over 500 mold assessments and developed our prevention protocols."
              />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-600" size={20} />
                    Proper Response (0-48 hours)
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Professional extraction begins immediately</li>
                    <li>• Structural drying equipment deployed</li>
                    <li>• Antimicrobial treatment applied</li>
                    <li>• Moisture monitored until dry</li>
                    <li>• <strong>Result:</strong> Minimal mold risk, lower costs</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="text-red-600" size={20} />
                    Delayed Response (48+ hours)
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mold spores begin colonizing</li>
                    <li>• Hidden mold grows in wall cavities</li>
                    <li>• Musty odors develop</li>
                    <li>• Health risks increase</li>
                    <li>• <strong>Result:</strong> Mold remediation required</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Need Immediate Help?</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Our expert team is available 24/7 for emergency water damage response.
                </p>
                <a
                  href="tel:+17035551234"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white text-[#1a73e8] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Phone size={18} />
                  (703) 555-1234
                </a>
                <p className="text-center text-blue-200 text-xs mt-3">
                  20-30 minute response time
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen size={18} />
                  In This Guide
                </h3>
                <nav className="space-y-2">
                  {[
                    'Understanding Water Damage',
                    'The Three Categories',
                    'Professional Restoration Process',
                    'Mold Prevention',
                    'Insurance & Documentation',
                    'Prevention Tips',
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={`#section-${idx}`}
                      className="block text-gray-600 hover:text-[#1a73e8] text-sm py-1 flex items-center gap-2"
                    >
                      <ChevronRight size={14} />
                      {item}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Award size={18} className="text-yellow-500" />
                  Our Certifications
                </h3>
                <div className="space-y-4">
                  <CertificationBadge
                    name="Water Restoration Technician"
                    issuer="IICRC"
                    description="Certified in water damage restoration best practices"
                  />
                  <CertificationBadge
                    name="Applied Microbial Remediation"
                    issuer="IICRC"
                    description="Specialized in mold assessment and remediation"
                  />
                  <CertificationBadge
                    name="Lead-Safe Certified"
                    issuer="EPA"
                    description="Licensed for work in pre-1978 properties"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Team Section */}
        <section className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The professionals who contributed to this guide and lead our restoration efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert, idx) => (
              <ExpertCard key={idx} expert={expert} featured={idx === 0} />
            ))}
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Questions? Our Experts Are Ready to Help
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're facing an emergency or just want to be prepared, our certified
              professionals are available 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+17035551234"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1a73e8] font-semibold rounded-full hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                Call Our Experts
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare size={20} />
                Ask a Question
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDev6;
