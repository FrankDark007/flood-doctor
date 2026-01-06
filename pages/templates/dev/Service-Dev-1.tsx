import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Phone,
  ChevronRight,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  AlertTriangle,
  ArrowRight,
  Droplets,
  ThermometerSun,
  Wind,
  FileText,
  Users,
  Award
} from 'lucide-react';

/**
 * Service-Dev-1: LONG-FORM ARTICLE LAYOUT
 *
 * Design: Single-column editorial style with deep content sections
 * Best for: Comprehensive guides, SEO-heavy pages
 * Content capacity: 2500+ words easily
 *
 * Features:
 * - Wide reading column (max-w-3xl)
 * - Pull quotes for emphasis
 * - Inline callout boxes
 * - Table of contents sidebar
 * - Author/expert attribution
 */

const googleEase = [0.22, 1, 0.36, 1];

// Animated section wrapper
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children, className = '', delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: googleEase, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Pull quote component
const PullQuote: React.FC<{ quote: string; author?: string }> = ({ quote, author }) => (
  <motion.blockquote
    className="my-12 pl-6 border-l-4 border-[#1a73e8] bg-[#f8f9fa] py-6 pr-6 rounded-r-xl"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-[20px] lg:text-[24px] text-[#202124] font-normal italic leading-relaxed">
      "{quote}"
    </p>
    {author && (
      <cite className="block mt-4 text-[14px] text-[#5f6368] not-italic">
        — {author}
      </cite>
    )}
  </motion.blockquote>
);

// Callout box
const Callout: React.FC<{ type: 'warning' | 'tip' | 'info'; title: string; children: React.ReactNode }> = ({
  type, title, children
}) => {
  const styles = {
    warning: { bg: 'bg-[#fef7e0]', border: 'border-[#f9ab00]', icon: AlertTriangle, iconColor: 'text-[#f9ab00]' },
    tip: { bg: 'bg-[#e6f4ea]', border: 'border-[#137333]', icon: CheckCircle2, iconColor: 'text-[#137333]' },
    info: { bg: 'bg-[#e8f0fe]', border: 'border-[#1a73e8]', icon: Shield, iconColor: 'text-[#1a73e8]' }
  };
  const style = styles[type];
  const Icon = style.icon;

  return (
    <motion.div
      className={`my-8 p-6 rounded-xl ${style.bg} border-l-4 ${style.border}`}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-3">
        <Icon className={`w-5 h-5 ${style.iconColor}`} />
        <span className="font-semibold text-[#202124]">{title}</span>
      </div>
      <div className="text-[#3c4043] text-[15px] leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

const ServiceDev1: React.FC = () => {
  const tableOfContents = [
    { id: 'overview', label: 'Overview' },
    { id: 'causes', label: 'Common Causes' },
    { id: 'process', label: 'Restoration Process' },
    { id: 'timeline', label: 'Timeline & Costs' },
    { id: 'prevention', label: 'Prevention Tips' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <main className="flex-grow bg-white">
      {/* Hero - Editorial Style */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white border-b border-[#dadce0]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#5f6368] mb-8">
              <Link to="/" className="hover:text-[#1a73e8]">Home</Link>
              <ChevronRight size={14} />
              <Link to="/services/" className="hover:text-[#1a73e8]">Services</Link>
              <ChevronRight size={14} />
              <span className="text-[#202124]">Water Damage Restoration</span>
            </nav>

            {/* Category Tag */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Droplets size={14} />
              Comprehensive Guide
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-[36px] sm:text-[44px] lg:text-[56px] font-normal text-[#202124] leading-[1.1] tracking-[-0.5px] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The Complete Guide to Water Damage Restoration
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-[18px] lg:text-[22px] text-[#5f6368] leading-[1.5] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Everything homeowners need to know about water damage: causes, restoration process,
              costs, timeline, and prevention. Updated for 2024 with IICRC standards.
            </motion.p>

            {/* Meta info */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-[14px] text-[#5f6368]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="flex items-center gap-2">
                <Clock size={16} />
                15 min read
              </span>
              <span className="flex items-center gap-2">
                <FileText size={16} />
                Updated Jan 2024
              </span>
              <span className="flex items-center gap-2">
                <Award size={16} />
                IICRC Verified
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar TOC */}
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] py-12 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
          {/* Main Content Column */}
          <article className="max-w-3xl">
            {/* Overview Section */}
            <AnimatedSection id="overview" className="mb-16">
              <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-6 pb-4 border-b-4 border-[#1a73e8]">
                What is Water Damage Restoration?
              </h2>

              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                Water damage restoration is the process of returning a property to its pre-loss condition
                after sustaining water damage from floods, leaks, burst pipes, or other water-related incidents.
                The process involves several critical phases: emergency water extraction, structural drying,
                dehumidification, cleaning, sanitization, and restoration of damaged materials.
              </p>

              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                Professional water damage restoration follows the IICRC S500 Standard for Professional Water
                Damage Restoration, which establishes the procedural standards for water damage restoration.
                This ensures consistent, effective restoration outcomes regardless of the scope of damage.
              </p>

              <Callout type="warning" title="Time is Critical">
                Mold can begin growing within 24-48 hours of water exposure. The faster you respond to water
                damage, the less secondary damage occurs and the lower your overall restoration costs will be.
              </Callout>

              <p className="text-[17px] text-[#3c4043] leading-[1.8]">
                Understanding the water damage restoration process empowers homeowners to make informed decisions
                during what can be an overwhelming experience. This comprehensive guide walks you through every
                aspect of water damage restoration, from initial assessment to final repairs.
              </p>
            </AnimatedSection>

            {/* Causes Section */}
            <AnimatedSection id="causes" className="mb-16">
              <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-6 pb-4 border-b-4 border-[#1a73e8]">
                Common Causes of Water Damage
              </h2>

              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                Water damage can originate from numerous sources, each requiring different response strategies.
                Understanding the source helps determine the appropriate restoration approach and insurance coverage.
              </p>

              <h3 className="text-[22px] font-medium text-[#202124] mb-4 mt-8">Plumbing Failures</h3>
              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                The most common source of residential water damage is plumbing failure. This includes burst pipes,
                especially during winter freezes, failed supply lines to appliances, corroded pipes in older homes,
                and faulty plumbing connections. Northern Virginia's temperature fluctuations make pipe bursts
                particularly common during the transition from fall to winter.
              </p>

              <h3 className="text-[22px] font-medium text-[#202124] mb-4 mt-8">Appliance Malfunctions</h3>
              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                Water heaters, washing machines, dishwashers, and refrigerators with ice makers are common
                culprits. Supply line failures, drain clogs, and internal component failures can release
                gallons of water before detection. The average washing machine supply line failure releases
                600 gallons per hour.
              </p>

              <PullQuote
                quote="80% of water heater failures occur after the unit is 10 years old. Regular maintenance and proactive replacement can prevent catastrophic failures."
                author="IICRC Technical Advisory Council"
              />

              <h3 className="text-[22px] font-medium text-[#202124] mb-4 mt-8">Weather Events</h3>
              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                Heavy rains, flash flooding, hurricanes, and storm surges can overwhelm drainage systems
                and cause water intrusion. Northern Virginia experiences an average of 40+ inches of rainfall
                annually, making proper drainage essential. Basement flooding is particularly common in
                areas with high water tables or inadequate grading.
              </p>

              <h3 className="text-[22px] font-medium text-[#202124] mb-4 mt-8">Roof and Exterior Leaks</h3>
              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                Damaged shingles, compromised flashing, clogged gutters, and deteriorated seals around
                windows and doors allow water intrusion. These leaks often go undetected until significant
                damage has occurred within wall cavities or ceiling spaces.
              </p>

              <Callout type="info" title="Water Damage Categories">
                <p className="mb-2"><strong>Category 1 (Clean Water):</strong> Water from a sanitary source like supply lines or rainwater. Lowest health risk.</p>
                <p className="mb-2"><strong>Category 2 (Gray Water):</strong> Water with significant contamination like washing machine discharge or dishwasher overflow.</p>
                <p><strong>Category 3 (Black Water):</strong> Grossly contaminated water from sewage or flooding. Requires specialized handling.</p>
              </Callout>
            </AnimatedSection>

            {/* Process Section */}
            <AnimatedSection id="process" className="mb-16">
              <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-6 pb-4 border-b-4 border-[#1a73e8]">
                The Water Damage Restoration Process
              </h2>

              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-8">
                Professional water damage restoration follows a systematic approach developed over decades
                of industry experience and codified in the IICRC S500 standard. Here's what to expect during
                each phase of the restoration process.
              </p>

              {/* Step 1 */}
              <div className="mb-10 pl-6 border-l-2 border-[#dadce0]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a73e8] text-white text-sm font-bold">1</span>
                  <h3 className="text-[22px] font-medium text-[#202124]">Emergency Contact & Dispatch</h3>
                </div>
                <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-4">
                  The restoration process begins with your call to a professional restoration company.
                  A trained technician gathers information about the water source, affected areas, and
                  any safety concerns. Emergency crews are dispatched immediately—reputable companies
                  guarantee response times of 60 minutes or less, 24/7.
                </p>
                <p className="text-[17px] text-[#3c4043] leading-[1.8]">
                  During this initial contact, you'll receive guidance on immediate safety measures:
                  turning off the water source if accessible, avoiding electrical hazards, and protecting
                  valuables that can be safely moved.
                </p>
              </div>

              {/* Step 2 */}
              <div className="mb-10 pl-6 border-l-2 border-[#dadce0]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a73e8] text-white text-sm font-bold">2</span>
                  <h3 className="text-[22px] font-medium text-[#202124]">Inspection & Damage Assessment</h3>
                </div>
                <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-4">
                  Upon arrival, certified technicians conduct a thorough inspection using specialized
                  equipment including moisture meters, thermal imaging cameras, and hygrometers. This
                  assessment determines the water source, contamination category, damage class, and
                  scope of affected materials.
                </p>
                <p className="text-[17px] text-[#3c4043] leading-[1.8]">
                  The assessment produces a detailed scope of work document that outlines all necessary
                  restoration activities. This document serves as the basis for insurance claims and
                  ensures nothing is overlooked during restoration.
                </p>
              </div>

              {/* Step 3 */}
              <div className="mb-10 pl-6 border-l-2 border-[#dadce0]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a73e8] text-white text-sm font-bold">3</span>
                  <h3 className="text-[22px] font-medium text-[#202124]">Water Extraction</h3>
                </div>
                <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-4">
                  Powerful extraction equipment removes standing water as quickly as possible. Truck-mounted
                  extraction units can remove thousands of gallons per hour. Portable extractors reach areas
                  inaccessible to larger equipment. Specialized sub-surface extractors remove water from
                  carpet pad and subfloor without removing the carpet.
                </p>
                <p className="text-[17px] text-[#3c4043] leading-[1.8]">
                  Fast extraction is critical—every hour that water remains increases structural damage
                  exponentially and raises the risk of mold growth. Professional extraction removes
                  significantly more water than consumer-grade equipment.
                </p>
              </div>

              {/* Step 4 */}
              <div className="mb-10 pl-6 border-l-2 border-[#dadce0]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a73e8] text-white text-sm font-bold">4</span>
                  <h3 className="text-[22px] font-medium text-[#202124]">Drying & Dehumidification</h3>
                </div>
                <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-4">
                  After extraction, significant moisture remains in structural materials. Industrial air movers
                  create high-velocity airflow across wet surfaces, accelerating evaporation. Commercial
                  dehumidifiers capture this moisture from the air, preventing secondary damage and
                  condensation on unaffected materials.
                </p>
                <p className="text-[17px] text-[#3c4043] leading-[1.8]">
                  Technicians calculate the precise number and placement of equipment based on the damage
                  class and affected square footage. Daily moisture readings track drying progress and
                  guide equipment adjustments. Most structures reach dry standard within 3-5 days with
                  proper equipment placement.
                </p>
              </div>

              <Callout type="tip" title="What to Expect During Drying">
                Equipment runs 24/7 and may be noisy. Most homeowners can remain in the home during drying,
                though equipment placement may temporarily limit access to some areas. Your technician will
                work with you to minimize disruption.
              </Callout>

              {/* Step 5 */}
              <div className="mb-10 pl-6 border-l-2 border-[#dadce0]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a73e8] text-white text-sm font-bold">5</span>
                  <h3 className="text-[22px] font-medium text-[#202124]">Cleaning & Sanitization</h3>
                </div>
                <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-4">
                  Once dry, affected areas and contents require cleaning and sanitization. The approach
                  depends on the water contamination category. Category 1 water may only require surface
                  cleaning, while Category 2 and 3 water require antimicrobial treatments and may
                  necessitate removal of porous materials.
                </p>
                <p className="text-[17px] text-[#3c4043] leading-[1.8]">
                  Contents cleaning includes everything from furniture and electronics to documents and
                  photographs. Specialized techniques like ultrasonic cleaning, ozone treatment, and
                  thermal fogging address different contamination types and odors.
                </p>
              </div>

              {/* Step 6 */}
              <div className="pl-6 border-l-2 border-[#dadce0]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a73e8] text-white text-sm font-bold">6</span>
                  <h3 className="text-[22px] font-medium text-[#202124]">Restoration & Repairs</h3>
                </div>
                <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-4">
                  The final phase returns your property to pre-loss condition. Minor restoration may
                  involve replacing carpet pad, repainting, or replacing baseboards. Major restoration
                  can include reconstruction of entire rooms, replacing drywall and insulation,
                  refinishing hardwood floors, or rebuilding damaged structures.
                </p>
                <p className="text-[17px] text-[#3c4043] leading-[1.8]">
                  Full-service restoration companies handle the entire process from emergency response
                  through final repairs, providing a single point of contact and ensuring continuity
                  throughout your restoration project.
                </p>
              </div>
            </AnimatedSection>

            {/* Timeline & Costs Section */}
            <AnimatedSection id="timeline" className="mb-16">
              <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-6 pb-4 border-b-4 border-[#1a73e8]">
                Timeline & Cost Expectations
              </h2>

              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                Water damage restoration timelines and costs vary significantly based on the scope of
                damage, water category, affected materials, and extent of required repairs. Here's what
                to expect for typical scenarios.
              </p>

              {/* Cost table */}
              <div className="my-8 overflow-hidden rounded-xl border border-[#dadce0]">
                <table className="w-full">
                  <thead className="bg-[#f8f9fa]">
                    <tr>
                      <th className="px-6 py-4 text-left text-[14px] font-semibold text-[#202124]">Damage Level</th>
                      <th className="px-6 py-4 text-left text-[14px] font-semibold text-[#202124]">Timeline</th>
                      <th className="px-6 py-4 text-left text-[14px] font-semibold text-[#202124]">Cost Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[#dadce0]">
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">Minor (single room)</td>
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">3-5 days</td>
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">$1,000 - $3,000</td>
                    </tr>
                    <tr className="border-t border-[#dadce0] bg-[#f8f9fa]">
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">Moderate (multiple rooms)</td>
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">5-7 days</td>
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">$3,000 - $7,500</td>
                    </tr>
                    <tr className="border-t border-[#dadce0]">
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">Major (whole floor/basement)</td>
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">1-2 weeks</td>
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">$7,500 - $20,000</td>
                    </tr>
                    <tr className="border-t border-[#dadce0] bg-[#f8f9fa]">
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">Severe (structural damage)</td>
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">2-4 weeks</td>
                      <td className="px-6 py-4 text-[15px] text-[#3c4043]">$20,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <PullQuote
                quote="The average water damage insurance claim in Virginia is $11,500. Most homeowner policies cover sudden and accidental water damage with deductibles ranging from $500-$2,500."
              />

              <h3 className="text-[22px] font-medium text-[#202124] mb-4 mt-8">Factors Affecting Cost</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Water contamination category (clean, gray, or black water)',
                  'Square footage of affected area',
                  'Type of materials affected (carpet, hardwood, drywall, etc.)',
                  'Extent of structural damage requiring reconstruction',
                  'Emergency after-hours response requirements',
                  'Contents cleaning and pack-out needs'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-[17px] text-[#3c4043]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1a73e8] mt-1 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Prevention Section */}
            <AnimatedSection id="prevention" className="mb-16">
              <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-6 pb-4 border-b-4 border-[#1a73e8]">
                Water Damage Prevention Tips
              </h2>

              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                While not all water damage is preventable, regular maintenance and proactive measures
                significantly reduce your risk. Here are expert-recommended prevention strategies.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                {[
                  { icon: Droplets, title: 'Inspect Plumbing', desc: 'Check supply lines, faucets, and fixtures annually. Replace rubber hoses with braided stainless steel.' },
                  { icon: ThermometerSun, title: 'Winterize Pipes', desc: 'Insulate exposed pipes, disconnect outdoor hoses, and know where your main shutoff is located.' },
                  { icon: Wind, title: 'Maintain Gutters', desc: 'Clean gutters twice yearly. Ensure downspouts direct water away from foundation.' },
                  { icon: Shield, title: 'Install Detectors', desc: 'Water leak detectors near water heaters, washing machines, and under sinks provide early warning.' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="p-6 rounded-xl bg-[#f8f9fa] border border-[#dadce0]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <item.icon className="w-8 h-8 text-[#1a73e8] mb-4" />
                    <h4 className="text-[18px] font-medium text-[#202124] mb-2">{item.title}</h4>
                    <p className="text-[15px] text-[#5f6368]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* FAQ Section */}
            <AnimatedSection id="faq" className="mb-16">
              <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-8 pb-4 border-b-4 border-[#1a73e8]">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: 'How quickly should I respond to water damage?',
                    a: 'Within 24-48 hours is critical. Mold can begin growing in 24 hours, and structural damage worsens exponentially with time. Call a professional immediately.'
                  },
                  {
                    q: 'Does homeowners insurance cover water damage?',
                    a: 'Most policies cover sudden and accidental water damage (burst pipes, appliance failures). Gradual damage and flooding typically require separate coverage. We work with all major insurers.'
                  },
                  {
                    q: 'Can I stay in my home during restoration?',
                    a: 'In most cases, yes. For minor to moderate damage, you can remain while equipment runs. Severe damage or contaminated water may require temporary relocation for safety.'
                  },
                  {
                    q: 'How long does the restoration process take?',
                    a: 'Drying typically takes 3-5 days. Complete restoration including repairs varies from 1-4 weeks depending on damage extent. We provide timeline estimates during initial assessment.'
                  },
                  {
                    q: 'What certifications should a restoration company have?',
                    a: 'Look for IICRC certification (Water Damage Restoration Technician - WRT), proper licensing, insurance, and 24/7 availability. Flood Doctor holds all required certifications and Virginia License #2705155505.'
                  }
                ].map((faq, idx) => (
                  <motion.div
                    key={idx}
                    className="p-6 rounded-xl bg-[#f8f9fa]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="text-[18px] font-medium text-[#202124] mb-3">{faq.q}</h3>
                    <p className="text-[16px] text-[#5f6368] leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection className="p-8 lg:p-12 rounded-2xl bg-[#1a73e8] text-white text-center">
              <h2 className="text-[28px] lg:text-[32px] font-normal mb-4">
                Need Water Damage Restoration?
              </h2>
              <p className="text-[18px] text-white/80 mb-8">
                Our IICRC-certified team responds within 60 minutes, 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:8774970007"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1a73e8] font-medium px-8 h-12 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={18} />
                  (877) 497-0007
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/request/"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 h-12 rounded-full hover:bg-white/10 transition-colors"
                  >
                    Request Service
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
          </article>

          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="p-6 rounded-xl bg-[#f8f9fa] border border-[#dadce0]">
                <h4 className="text-[14px] font-semibold text-[#5f6368] uppercase tracking-wide mb-4">
                  Contents
                </h4>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-[15px] text-[#5f6368] hover:text-[#1a73e8] transition-colors py-1"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Quick Contact */}
              <div className="mt-6 p-6 rounded-xl bg-[#e8f0fe]">
                <h4 className="text-[16px] font-medium text-[#202124] mb-3">
                  Need Help Now?
                </h4>
                <p className="text-[14px] text-[#5f6368] mb-4">
                  24/7 emergency response. 60-minute arrival guarantee.
                </p>
                <a
                  href="tel:8774970007"
                  className="inline-flex items-center gap-2 text-[#1a73e8] font-medium text-[15px]"
                >
                  <Phone size={16} />
                  (877) 497-0007
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ServiceDev1;
