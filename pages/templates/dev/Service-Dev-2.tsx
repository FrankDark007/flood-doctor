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
  Quote,
  Camera,
  Award,
  Users,
  Zap
} from 'lucide-react';

/**
 * Service-Dev-2: MAGAZINE LAYOUT
 *
 * Design: Multi-column editorial with rich visuals and pull quotes
 * Best for: Visually engaging service pages, brand storytelling
 * Content capacity: 2000+ words
 *
 * Features:
 * - Full-width hero image
 * - 2-3 column content grid
 * - Large pull quotes
 * - Image galleries
 * - Expert spotlights
 */

const googleEase = [0.22, 1, 0.36, 1];

// Animated wrapper
const AnimatedDiv: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children, className = '', delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: googleEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Large pull quote
const LargePullQuote: React.FC<{ quote: string }> = ({ quote }) => (
  <motion.div
    className="relative py-12 my-12"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Quote className="absolute top-0 left-0 w-16 h-16 text-[#1a73e8]/20" />
    <p className="text-[28px] lg:text-[36px] font-light text-[#202124] leading-[1.4] italic pl-8">
      {quote}
    </p>
  </motion.div>
);

// Image with caption
const ImageWithCaption: React.FC<{ src: string; alt: string; caption: string }> = ({ src, alt, caption }) => (
  <motion.figure
    className="my-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.5 }}
  >
    <div className="overflow-hidden rounded-2xl">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
    <figcaption className="mt-3 text-[14px] text-[#5f6368] italic">{caption}</figcaption>
  </motion.figure>
);

// Stat highlight
const StatHighlight: React.FC<{ value: string; label: string; color: string }> = ({ value, label, color }) => (
  <motion.div
    className="text-center p-6"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
  >
    <div className={`text-[48px] lg:text-[64px] font-bold ${color}`}>{value}</div>
    <div className="text-[16px] text-[#5f6368] mt-2">{label}</div>
  </motion.div>
);

const ServiceDev2: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      {/* Full-Width Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: googleEase }}
        >
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Water damage restoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 pb-16 lg:pb-24">
          <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
                <Link to="/" className="hover:text-white">Home</Link>
                <ChevronRight size={14} />
                <Link to="/services/" className="hover:text-white">Services</Link>
                <ChevronRight size={14} />
                <span className="text-white">Water Damage</span>
              </nav>

              <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-normal text-white leading-[1.1] tracking-[-1px] mb-6">
                Water Damage Restoration
              </h1>

              <p className="text-[20px] text-white/90 leading-[1.5] mb-8">
                Expert restoration that returns your property to its pre-loss condition.
                60-minute response, 24/7 availability.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="tel:8774970007"
                  className="inline-flex items-center gap-2 bg-[#1a73e8] text-white font-medium px-8 h-12 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={18} />
                  Call Now
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/request/"
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white font-medium px-8 h-12 rounded-full border border-white/30"
                  >
                    Get Estimate
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-[#f8f9fa] border-b border-[#dadce0]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatHighlight value="60" label="Minute Response" color="text-[#1a73e8]" />
            <StatHighlight value="24/7" label="Availability" color="text-[#137333]" />
            <StatHighlight value="10K+" label="Projects Completed" color="text-[#b06000]" />
            <StatHighlight value="4.9" label="Star Rating" color="text-[#ea4335]" />
          </div>
        </div>
      </section>

      {/* Magazine Content - Multi-Column */}
      <section className="py-16 lg:py-24">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          {/* Intro - Full Width */}
          <AnimatedDiv className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-[32px] lg:text-[44px] font-normal text-[#202124] mb-6">
              When Water Strikes, Time is Everything
            </h2>
            <p className="text-[20px] text-[#5f6368] leading-[1.7]">
              Water damage doesn't wait. Every minute standing water remains in your home,
              structural damage worsens and mold risk increases. Our certified technicians
              are strategically positioned throughout Northern Virginia to reach you within
              60 minutes—day or night.
            </p>
          </AnimatedDiv>

          {/* Two Column Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <AnimatedDiv>
              <h3 className="text-[28px] font-normal text-[#202124] mb-6 pb-4 border-b-2 border-[#1a73e8]">
                The Science of Restoration
              </h3>
              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                Professional water damage restoration follows the IICRC S500 Standard—the
                industry's definitive guide developed by the Institute of Inspection, Cleaning
                and Restoration Certification. This scientific approach ensures consistent,
                effective outcomes regardless of damage scope.
              </p>
              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                Our process begins with advanced detection. Thermal imaging cameras reveal
                hidden moisture in walls and ceilings. Penetrating moisture meters measure
                water content in structural materials. Hygrometers track atmospheric moisture
                levels throughout the drying process.
              </p>
              <p className="text-[17px] text-[#3c4043] leading-[1.8]">
                This data-driven approach means we don't guess—we measure. Daily readings
                confirm drying progress and guide equipment placement adjustments. You'll
                receive detailed reports through our client portal showing exactly how your
                restoration is progressing.
              </p>
            </AnimatedDiv>

            <AnimatedDiv delay={0.2}>
              <ImageWithCaption
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Moisture detection equipment"
                caption="Thermal imaging reveals hidden water damage invisible to the naked eye"
              />
            </AnimatedDiv>
          </div>

          {/* Pull Quote - Full Width */}
          <AnimatedDiv className="max-w-4xl mx-auto">
            <LargePullQuote
              quote="The first 24 hours after water damage are critical. Fast, professional response can reduce restoration costs by up to 50%."
            />
          </AnimatedDiv>

          {/* Three Column Process */}
          <div className="grid md:grid-cols-3 gap-8 my-16">
            {[
              {
                step: '01',
                title: 'Assessment',
                desc: 'Our certified technicians conduct a comprehensive inspection using thermal cameras and moisture meters to map the full extent of damage.',
                image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80'
              },
              {
                step: '02',
                title: 'Extraction',
                desc: 'Truck-mounted extraction units remove thousands of gallons per hour. Sub-surface extractors remove water from beneath flooring without removal.',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'
              },
              {
                step: '03',
                title: 'Restoration',
                desc: 'Industrial air movers and dehumidifiers dry the structure to IICRC standards. Then we restore everything to pre-loss condition.',
                image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80'
              }
            ].map((item, idx) => (
              <AnimatedDiv key={idx} delay={idx * 0.15}>
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden border border-[#dadce0] h-full"
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="text-[48px] font-bold text-[#e8f0fe]">{item.step}</span>
                    <h4 className="text-[22px] font-medium text-[#202124] -mt-6 mb-3">{item.title}</h4>
                    <p className="text-[15px] text-[#5f6368] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedDiv>
            ))}
          </div>

          {/* Two Column - Reversed */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <AnimatedDiv className="lg:order-2">
              <h3 className="text-[28px] font-normal text-[#202124] mb-6 pb-4 border-b-2 border-[#1a73e8]">
                Understanding Water Categories
              </h3>
              <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
                Not all water damage is created equal. The IICRC classifies water into three
                categories based on contamination level, each requiring different restoration
                approaches.
              </p>

              <div className="space-y-4">
                {[
                  { cat: 'Category 1', name: 'Clean Water', desc: 'Water from sanitary sources like supply lines. Lowest health risk, but can degrade to Category 2 within 48 hours if not addressed.', color: 'bg-[#e6f4ea] border-l-[#137333]' },
                  { cat: 'Category 2', name: 'Gray Water', desc: 'Water with significant contamination from sources like dishwasher overflow or washing machine discharge. May contain microorganisms.', color: 'bg-[#fef7e0] border-l-[#f9ab00]' },
                  { cat: 'Category 3', name: 'Black Water', desc: 'Grossly contaminated water from sewage backups or flooding. Contains pathogens and requires specialized handling and PPE.', color: 'bg-[#fce8e6] border-l-[#ea4335]' }
                ].map((cat, idx) => (
                  <motion.div
                    key={idx}
                    className={`p-4 rounded-r-xl border-l-4 ${cat.color}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-[12px] font-bold text-[#5f6368] uppercase tracking-wider">{cat.cat}</div>
                    <div className="text-[18px] font-medium text-[#202124] mb-1">{cat.name}</div>
                    <p className="text-[14px] text-[#5f6368]">{cat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedDiv>

            <AnimatedDiv delay={0.2} className="lg:order-1">
              <ImageWithCaption
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Professional restoration team"
                caption="Our IICRC-certified technicians are trained to handle all categories of water damage"
              />
            </AnimatedDiv>
          </div>

          {/* Expert Spotlight */}
          <AnimatedDiv className="bg-[#f8f9fa] rounded-2xl p-8 lg:p-12 my-16">
            <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                  <Users className="w-16 h-16 text-[#1a73e8]" />
                </div>
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-[#1a73e8] uppercase tracking-wider mb-2">
                  Expert Insight
                </h4>
                <p className="text-[20px] lg:text-[24px] text-[#202124] leading-[1.5] mb-4">
                  "The biggest mistake homeowners make is waiting. I've seen cases where a same-day
                  response saved 80% of the flooring, while a 48-hour delay required complete replacement.
                  Time truly is money in water damage restoration."
                </p>
                <div className="text-[16px] font-medium text-[#202124]">Mike Thompson</div>
                <div className="text-[14px] text-[#5f6368]">Lead Restoration Technician, Flood Doctor</div>
              </div>
            </div>
          </AnimatedDiv>

          {/* Long Form Content Section */}
          <AnimatedDiv className="max-w-3xl mx-auto mb-16">
            <h3 className="text-[28px] font-normal text-[#202124] mb-6 pb-4 border-b-2 border-[#1a73e8]">
              The Complete Restoration Journey
            </h3>

            <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
              When you call Flood Doctor, you're not just getting water removed—you're getting a complete
              restoration partner who will guide you through every step of the process. Here's what to
              expect from the moment you call until your property is fully restored.
            </p>

            <h4 className="text-[22px] font-medium text-[#202124] mt-10 mb-4">Initial Response (0-2 Hours)</h4>
            <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
              Our emergency line is staffed 24/7 by trained dispatchers who gather critical information:
              the water source, affected areas, and any safety concerns. While crews are en route, you'll
              receive guidance on immediate safety measures—turning off water if accessible, avoiding
              electrical hazards, and protecting valuables.
            </p>
            <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
              Upon arrival, our technicians conduct a rapid assessment to identify the water source and
              stop it if still active. We then perform a comprehensive inspection using thermal imaging
              and moisture meters to map the full extent of damage, including hidden moisture in walls
              and beneath flooring.
            </p>

            <h4 className="text-[22px] font-medium text-[#202124] mt-10 mb-4">Active Mitigation (Hours 2-24)</h4>
            <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
              With assessment complete, emergency extraction begins immediately. Our truck-mounted
              extractors remove standing water at rates exceeding 10,000 gallons per hour. Specialized
              sub-surface extractors remove water trapped beneath carpet and pad without requiring
              removal—saving both time and money.
            </p>
            <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
              Once extraction is complete, we position industrial air movers and dehumidifiers using
              calculated formulas based on the damage class and affected square footage. This strategic
              placement ensures optimal airflow patterns and drying efficiency. Equipment runs 24/7
              until the structure reaches dry standard.
            </p>

            <h4 className="text-[22px] font-medium text-[#202124] mt-10 mb-4">Monitoring & Drying (Days 2-5)</h4>
            <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
              Our technicians return daily to take moisture readings at multiple locations throughout
              the affected area. These readings are logged in our client portal where you can track
              your project's progress in real-time. Based on daily readings, we adjust equipment
              placement to address any areas that are drying slower than expected.
            </p>
            <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
              Most structures reach dry standard within 3-5 days with proper equipment placement.
              We don't rely on estimated timelines—we rely on measured moisture content. Equipment
              is removed only when readings confirm the structure is completely dry.
            </p>

            <h4 className="text-[22px] font-medium text-[#202124] mt-10 mb-4">Restoration & Repairs (Week 2+)</h4>
            <p className="text-[17px] text-[#3c4043] leading-[1.8] mb-6">
              With drying complete, restoration begins. Minor damage may require only carpet pad
              replacement and repainting. Moderate damage might include replacing baseboards, drywall
              sections, or refinishing hardwood floors. Major restoration can involve complete
              reconstruction of affected areas.
            </p>
            <p className="text-[17px] text-[#3c4043] leading-[1.8]">
              As a full-service restoration company, Flood Doctor handles everything from emergency
              response through final repairs. One company, one point of contact, one seamless experience.
              We coordinate directly with your insurance company throughout the process, handling
              documentation and supplemental claims as needed.
            </p>
          </AnimatedDiv>

          {/* Image Gallery */}
          <AnimatedDiv className="mb-16">
            <h3 className="text-[28px] font-normal text-[#202124] mb-8 text-center">
              Our Work in Action
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
                'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80',
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80'
              ].map((src, idx) => (
                <motion.div
                  key={idx}
                  className="aspect-square rounded-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#1a73e8] text-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[900px] text-center">
          <motion.h2
            className="text-[32px] lg:text-[44px] font-normal mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Water Damage? We're Ready.
          </motion.h2>
          <motion.p
            className="text-[20px] text-white/80 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            60-minute response, 24/7 availability. Call now for immediate assistance.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="tel:8774970007"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a73e8] font-medium px-10 h-14 rounded-full text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={20} />
              (877) 497-0007
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDev2;
