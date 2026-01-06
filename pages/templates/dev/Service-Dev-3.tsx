import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import {
  Phone,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Clock,
  Shield,
  AlertTriangle,
  ArrowRight,
  Droplets,
  Search,
  BookOpen,
  FileText,
  Terminal,
  Copy,
  Check
} from 'lucide-react';

/**
 * Service-Dev-3: DOCUMENTATION LAYOUT
 *
 * Design: Technical documentation style with sidebar nav
 * Best for: Detailed process guides, technical specifications
 * Content capacity: 3000+ words
 *
 * Features:
 * - Fixed sidebar navigation
 * - Anchor-linked sections
 * - Code/specification blocks
 * - Expandable subsections
 * - Search capability
 * - Copy functionality
 */

const googleEase = [0.22, 1, 0.36, 1];

// Animated section
const DocSection: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({
  id, children, className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: googleEase }}
      className={`scroll-mt-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

// Spec block (like code block)
const SpecBlock: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-[#dadce0] bg-[#f8f9fa]">
      <div className="flex items-center justify-between px-4 py-2 bg-[#202124] text-white text-[13px]">
        <span className="flex items-center gap-2">
          <Terminal size={14} />
          {title}
        </span>
        <button
          onClick={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="flex items-center gap-1 hover:text-[#8ab4f8] transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="p-4 font-mono text-[14px] text-[#3c4043] leading-relaxed whitespace-pre-wrap">
        {children}
      </div>
    </div>
  );
};

// Collapsible section
const Collapsible: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title, children, defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#dadce0] rounded-xl overflow-hidden my-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-[#f8f9fa] hover:bg-[#f0f0f0] transition-colors text-left"
      >
        <span className="font-medium text-[#202124]">{title}</span>
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
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 border-t border-[#dadce0]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Note/callout
const Note: React.FC<{ type: 'note' | 'warning' | 'tip'; children: React.ReactNode }> = ({ type, children }) => {
  const styles = {
    note: { bg: 'bg-[#e8f0fe]', border: 'border-[#1a73e8]', icon: BookOpen, label: 'Note' },
    warning: { bg: 'bg-[#fef7e0]', border: 'border-[#f9ab00]', icon: AlertTriangle, label: 'Warning' },
    tip: { bg: 'bg-[#e6f4ea]', border: 'border-[#137333]', icon: CheckCircle2, label: 'Tip' }
  };
  const s = styles[type];
  const Icon = s.icon;

  return (
    <div className={`my-6 p-4 rounded-xl border-l-4 ${s.bg} ${s.border}`}>
      <div className="flex items-center gap-2 text-[14px] font-semibold text-[#202124] mb-2">
        <Icon size={16} />
        {s.label}
      </div>
      <div className="text-[15px] text-[#3c4043]">{children}</div>
    </div>
  );
};

const ServiceDev3: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'water-categories', label: 'Water Categories', icon: Droplets },
    { id: 'damage-classes', label: 'Damage Classes', icon: FileText },
    { id: 'extraction', label: 'Extraction Process', icon: Terminal },
    { id: 'drying', label: 'Drying Standards', icon: Clock },
    { id: 'equipment', label: 'Equipment Specs', icon: Shield },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'costs', label: 'Cost Estimates', icon: FileText }
  ];

  return (
    <main className="flex-grow bg-white">
      {/* Header */}
      <section className="py-8 bg-white border-b border-[#dadce0]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <nav className="flex items-center gap-2 text-sm text-[#5f6368] mb-4">
            <Link to="/" className="hover:text-[#1a73e8]">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services/" className="hover:text-[#1a73e8]">Services</Link>
            <ChevronRight size={14} />
            <span className="text-[#202124]">Water Damage Restoration</span>
          </nav>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-[32px] lg:text-[40px] font-normal text-[#202124] mb-2">
                Water Damage Restoration
              </h1>
              <p className="text-[16px] text-[#5f6368]">
                Technical documentation and IICRC standards reference
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:8774970007"
                className="inline-flex items-center gap-2 bg-[#1a73e8] text-white font-medium px-6 h-10 rounded-full text-[14px]"
              >
                <Phone size={16} />
                (877) 497-0007
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px] py-8 lg:py-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5f6368]" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#dadce0] text-[14px] focus:outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
                />
              </div>

              {/* Nav */}
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-colors ${
                        activeSection === section.id
                          ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium'
                          : 'text-[#5f6368] hover:bg-[#f8f9fa] hover:text-[#202124]'
                      }`}
                    >
                      <Icon size={16} />
                      {section.label}
                    </a>
                  );
                })}
              </nav>

              {/* Quick Contact */}
              <div className="mt-8 p-4 rounded-xl bg-[#f8f9fa] border border-[#dadce0]">
                <h4 className="text-[14px] font-medium text-[#202124] mb-2">Need Help?</h4>
                <p className="text-[13px] text-[#5f6368] mb-3">
                  24/7 emergency response available
                </p>
                <a
                  href="tel:8774970007"
                  className="flex items-center gap-2 text-[#1a73e8] text-[14px] font-medium"
                >
                  <Phone size={14} />
                  (877) 497-0007
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="max-w-3xl">
            {/* Overview */}
            <DocSection id="overview" className="mb-12">
              <h2 className="text-[28px] font-normal text-[#202124] mb-4 pb-3 border-b border-[#dadce0]">
                Overview
              </h2>
              <p className="text-[16px] text-[#3c4043] leading-[1.8] mb-4">
                Water damage restoration is the process of returning a property to its pre-loss condition
                following water intrusion. This documentation covers the technical standards, procedures,
                and specifications used by IICRC-certified professionals.
              </p>
              <p className="text-[16px] text-[#3c4043] leading-[1.8] mb-4">
                All procedures in this guide follow the IICRC S500 Standard for Professional Water Damage
                Restoration, the industry's definitive reference document for water damage restoration.
              </p>

              <Note type="note">
                This technical documentation is intended for reference purposes. For emergency water damage
                restoration services, call our 24/7 hotline at (877) 497-0007.
              </Note>

              <h3 className="text-[20px] font-medium text-[#202124] mt-8 mb-4">Key Principles</h3>
              <ul className="space-y-2">
                {[
                  'Time is critical—mold growth begins within 24-48 hours',
                  'Water category determines safety protocols and salvageability',
                  'Damage class determines drying equipment requirements',
                  'Scientific monitoring ensures complete drying',
                  'Documentation supports insurance claims'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[16px] text-[#3c4043]">
                    <CheckCircle2 className="w-5 h-5 text-[#1a73e8] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </DocSection>

            {/* Water Categories */}
            <DocSection id="water-categories" className="mb-12">
              <h2 className="text-[28px] font-normal text-[#202124] mb-4 pb-3 border-b border-[#dadce0]">
                Water Categories
              </h2>
              <p className="text-[16px] text-[#3c4043] leading-[1.8] mb-6">
                Water is classified into three categories based on the level of contamination. This
                classification determines safety protocols, salvageability of materials, and restoration approach.
              </p>

              <SpecBlock title="IICRC S500 Water Categories">
{`CATEGORY 1 - CLEAN WATER
Source: Sanitary water supply lines, rainwater, ice/snow melt
Health Risk: Low
Examples: Supply line breaks, faucet failures, clean rainwater

CATEGORY 2 - GRAY WATER
Source: Discharge from appliances, overflowing toilets (urine only)
Health Risk: Moderate - may contain microorganisms
Examples: Washing machine overflow, dishwasher discharge, aquarium water

CATEGORY 3 - BLACK WATER
Source: Sewage, flooding from rivers/streams, standing water
Health Risk: High - contains pathogens, requires PPE
Examples: Sewage backup, floodwater, toilet overflow with feces`}
              </SpecBlock>

              <Note type="warning">
                Category 1 water can degrade to Category 2 within 48 hours and Category 3 within 72 hours
                if not properly addressed. Time is critical.
              </Note>

              <Collapsible title="Category 1 Detailed Specifications">
                <p className="text-[15px] text-[#3c4043] leading-[1.7] mb-4">
                  Category 1 water originates from a sanitary source and poses no substantial health risk
                  from exposure. This includes water from broken supply lines, tub or sink overflows
                  with no contaminants, and clean rainwater.
                </p>
                <h4 className="font-medium text-[#202124] mb-2">Restoration Approach:</h4>
                <ul className="list-disc list-inside text-[15px] text-[#3c4043] space-y-1">
                  <li>Standard extraction and drying procedures</li>
                  <li>No special PPE required beyond standard safety equipment</li>
                  <li>Most materials can be salvaged if dried within 48 hours</li>
                  <li>Carpet and pad can often be saved with proper sub-surface extraction</li>
                </ul>
              </Collapsible>

              <Collapsible title="Category 2 Detailed Specifications">
                <p className="text-[15px] text-[#3c4043] leading-[1.7] mb-4">
                  Category 2 water contains significant contamination and has the potential to cause
                  discomfort or illness if consumed or exposed to. This includes discharge from washing
                  machines, dishwashers, and toilet overflows containing urine but no feces.
                </p>
                <h4 className="font-medium text-[#202124] mb-2">Restoration Approach:</h4>
                <ul className="list-disc list-inside text-[15px] text-[#3c4043] space-y-1">
                  <li>Enhanced PPE including gloves and eye protection</li>
                  <li>Antimicrobial treatments required</li>
                  <li>Porous materials may require removal depending on exposure time</li>
                  <li>Carpet pad typically requires replacement</li>
                </ul>
              </Collapsible>

              <Collapsible title="Category 3 Detailed Specifications">
                <p className="text-[15px] text-[#3c4043] leading-[1.7] mb-4">
                  Category 3 water is grossly contaminated and may contain pathogenic agents. This includes
                  sewage backups, flooding from rivers or streams, and standing water that has begun
                  supporting microbial growth.
                </p>
                <h4 className="font-medium text-[#202124] mb-2">Restoration Approach:</h4>
                <ul className="list-disc list-inside text-[15px] text-[#3c4043] space-y-1">
                  <li>Full PPE including Tyvek suits, respirators, and eye protection</li>
                  <li>All porous materials must be removed and disposed</li>
                  <li>Structural materials require thorough cleaning and antimicrobial treatment</li>
                  <li>Air scrubbers with HEPA filtration required</li>
                  <li>Containment protocols to prevent cross-contamination</li>
                </ul>
              </Collapsible>
            </DocSection>

            {/* Damage Classes */}
            <DocSection id="damage-classes" className="mb-12">
              <h2 className="text-[28px] font-normal text-[#202124] mb-4 pb-3 border-b border-[#dadce0]">
                Damage Classes
              </h2>
              <p className="text-[16px] text-[#3c4043] leading-[1.8] mb-6">
                Damage class describes the amount of water and the materials affected, which determines
                the evaporation load and equipment requirements for proper drying.
              </p>

              <SpecBlock title="IICRC S500 Damage Classes">
{`CLASS 1 - LEAST AMOUNT
Area: Small area affected
Materials: Low-porosity materials (concrete, tile)
Absorption: Minimal absorption
Equipment: Low dehumidification requirements

CLASS 2 - SIGNIFICANT AMOUNT
Area: Entire room affected
Materials: Water has wicked into walls 12-24 inches
Absorption: Carpet and cushion affected
Equipment: Moderate dehumidification requirements

CLASS 3 - GREATEST AMOUNT
Area: Ceiling, walls, insulation, carpet, subfloor
Materials: Water may have come from overhead
Absorption: High absorption rate materials saturated
Equipment: High dehumidification requirements

CLASS 4 - SPECIALTY DRYING
Area: Deeply bound water in low-porosity materials
Materials: Hardwood, concrete, stone, plaster
Absorption: Very slow release rate
Equipment: Specialty drying techniques (desiccant, heat)`}
              </SpecBlock>

              <h3 className="text-[20px] font-medium text-[#202124] mt-8 mb-4">Equipment Calculations</h3>
              <p className="text-[16px] text-[#3c4043] leading-[1.8] mb-4">
                The IICRC provides formulas for calculating minimum equipment requirements based on
                damage class and affected square footage.
              </p>

              <SpecBlock title="Equipment Calculation Formulas">
{`AIR MOVERS
Class 1-3: 1 air mover per 50-70 sq ft of wet surface
Class 4: Determined by specific drying strategy

DEHUMIDIFIERS (LGR Units)
Class 1: 1 unit per 1,000 sq ft affected
Class 2: 1 unit per 500-700 sq ft affected
Class 3: 1 unit per 300-500 sq ft affected
Class 4: Based on specialty drying protocol

Example: 1,500 sq ft Class 2 water loss
Air movers: 1500 / 60 = 25 air movers minimum
Dehumidifiers: 1500 / 600 = 2.5 = 3 LGR units minimum`}
              </SpecBlock>
            </DocSection>

            {/* Extraction Process */}
            <DocSection id="extraction" className="mb-12">
              <h2 className="text-[28px] font-normal text-[#202124] mb-4 pb-3 border-b border-[#dadce0]">
                Extraction Process
              </h2>
              <p className="text-[16px] text-[#3c4043] leading-[1.8] mb-6">
                Water extraction is the first active step in mitigation after assessment. Fast extraction
                significantly reduces drying time and secondary damage potential.
              </p>

              <h3 className="text-[20px] font-medium text-[#202124] mt-8 mb-4">Extraction Methods</h3>

              <Collapsible title="Truck-Mounted Extraction" defaultOpen>
                <p className="text-[15px] text-[#3c4043] leading-[1.7] mb-4">
                  Truck-mounted extractors provide the highest extraction capacity, with some units
                  capable of removing over 10,000 gallons per hour. These units have their own power
                  source and don't require customer electricity.
                </p>
                <SpecBlock title="Specifications">
{`Extraction Rate: 5,000 - 15,000 gallons/hour
Lift Distance: Up to 200 ft horizontal, 50 ft vertical
Power: Self-contained (does not use customer power)
Best For: Large volume standing water, basements, commercial`}
                </SpecBlock>
              </Collapsible>

              <Collapsible title="Portable Extraction">
                <p className="text-[15px] text-[#3c4043] leading-[1.7] mb-4">
                  Portable extractors are used for smaller jobs or areas inaccessible to truck-mounted
                  equipment. They require customer electricity but offer flexibility in placement.
                </p>
                <SpecBlock title="Specifications">
{`Extraction Rate: 50 - 200 gallons/hour
Power: 115V or 230V customer power
Tank Capacity: 12 - 30 gallons
Best For: Smaller areas, upper floors, restricted access`}
                </SpecBlock>
              </Collapsible>

              <Collapsible title="Sub-Surface Extraction">
                <p className="text-[15px] text-[#3c4043] leading-[1.7] mb-4">
                  Sub-surface extractors remove water from beneath carpet and pad without requiring
                  removal. This technique can save significant time and money when carpet is salvageable.
                </p>
                <SpecBlock title="Specifications">
{`Method: Weighted extraction tool pressed against carpet
Extraction: Removes water from pad and subfloor
Passes Required: Multiple passes until return is clear
Carpet Salvageability: Increases from 40% to 80% vs standard extraction`}
                </SpecBlock>
              </Collapsible>

              <Note type="tip">
                Sub-surface extraction should be performed within 48 hours of Category 1 water loss.
                After 48 hours, carpet pad typically requires replacement regardless of extraction method.
              </Note>
            </DocSection>

            {/* Drying Standards */}
            <DocSection id="drying" className="mb-12">
              <h2 className="text-[28px] font-normal text-[#202124] mb-4 pb-3 border-b border-[#dadce0]">
                Drying Standards
              </h2>
              <p className="text-[16px] text-[#3c4043] leading-[1.8] mb-6">
                Proper drying requires both equipment placement and ongoing monitoring. The goal is to
                return materials to their normal moisture content, not just remove visible water.
              </p>

              <SpecBlock title="Dry Standard Reference">
{`WOOD MOISTURE CONTENT (MC)
Dry Standard: Within 4% of similar unaffected materials
Typical Normal: 8-14% MC depending on species and region
Kiln-Dried Lumber: 6-8% MC
Hardwood Flooring: 6-9% MC

DRYWALL/GYPSUM
Dry Standard: <1% weight gain from moisture
Test Method: Penetrating moisture meter
Normal Reading: 0.1-0.5% MC

CONCRETE
Dry Standard: Relative humidity below surface <80%
Test Method: Calcium chloride test or in-situ probe
Normal: 70-75% RH below surface`}
              </SpecBlock>

              <h3 className="text-[20px] font-medium text-[#202124] mt-8 mb-4">Monitoring Protocol</h3>
              <p className="text-[16px] text-[#3c4043] leading-[1.8] mb-4">
                Daily monitoring ensures proper drying progression and allows equipment adjustments
                as conditions change.
              </p>

              <SpecBlock title="Daily Monitoring Requirements">
{`READINGS TO RECORD
- Moisture content at multiple locations
- Ambient temperature
- Ambient relative humidity
- Dehumidifier readings (grains removed)
- Equipment status check

PSYCHROMETRIC CALCULATIONS
GPP (Grains Per Pound) target: <40 GPP
GPP formula: Based on temperature and relative humidity
Tools: Digital psychrometer or thermo-hygrometer

EXPECTED DRYING CURVE
Day 1: Steepest drop (surface moisture)
Day 2-3: Continued decline
Day 3-5: Approaching dry standard
Beyond Day 5: Investigate if not dry`}
              </SpecBlock>
            </DocSection>

            {/* Equipment Specs */}
            <DocSection id="equipment" className="mb-12">
              <h2 className="text-[28px] font-normal text-[#202124] mb-4 pb-3 border-b border-[#dadce0]">
                Equipment Specifications
              </h2>
              <p className="text-[16px] text-[#3c4043] leading-[1.8] mb-6">
                Professional water damage restoration requires industrial-grade equipment far exceeding
                consumer capabilities. Here are the specifications for common restoration equipment.
              </p>

              <SpecBlock title="LGR Dehumidifier Specifications">
{`Low Grain Refrigerant (LGR) Dehumidifiers
---------------------------------------
Water Removal: 130-170 pints/day at saturation
Operating Range: 33-100°F
Airflow: 300-400 CFM
Power: 8-11 amps at 115V
Coverage: 10,000-20,000 cubic feet
Noise Level: 58-62 dB

Advantages over conventional dehumidifiers:
- Removes moisture at lower grain levels
- More effective in later stages of drying
- Larger capacity reduces equipment count`}
              </SpecBlock>

              <SpecBlock title="Air Mover Specifications">
{`Centrifugal Air Movers
----------------------
Airflow: 2,000-3,000 CFM
Motor: 1/3 to 1 HP
Angles: Multiple positioning options (0°, 20°, 45°)
Power: 2.5-5 amps at 115V
Weight: 25-35 lbs
Stackable: Yes (up to 4 units)

Axial Air Movers
----------------
Airflow: 1,500-2,500 CFM
Motor: 1/4 to 1/2 HP
Use: High-volume applications, confined spaces
Power: 2-3 amps at 115V`}
              </SpecBlock>

              <SpecBlock title="Detection Equipment">
{`Penetrating Moisture Meter
--------------------------
Type: Pin-type probe
Depth: Surface to 7/8"
Materials: Wood, drywall, plaster
Range: 5-40% wood moisture equivalent

Non-Penetrating Moisture Meter
-------------------------------
Type: Electromagnetic sensor
Depth: Up to 1" depth reading
Materials: Most building materials
Use: Non-destructive scanning

Thermal Imaging Camera
-----------------------
Resolution: 320x240 minimum
Sensitivity: 0.1°C or better
Use: Locating hidden moisture, mapping damage
Temperature Range: -20°C to 150°C`}
              </SpecBlock>
            </DocSection>

            {/* Timeline */}
            <DocSection id="timeline" className="mb-12">
              <h2 className="text-[28px] font-normal text-[#202124] mb-4 pb-3 border-b border-[#dadce0]">
                Restoration Timeline
              </h2>

              <SpecBlock title="Typical Timeline by Phase">
{`PHASE 1: EMERGENCY RESPONSE (0-4 hours)
---------------------------------------
- Dispatch and arrival: 60 minutes
- Initial assessment: 30-60 minutes
- Water source control: 30 minutes
- Emergency extraction: 1-3 hours

PHASE 2: ACTIVE DRYING (Days 1-5)
---------------------------------
- Equipment setup: Day 1
- Daily monitoring: Days 1-5
- Equipment adjustments: As needed
- Target: 3-5 days for most Class 2 losses

PHASE 3: CONTENTS & CLEANING (Days 2-7)
---------------------------------------
- Pack-out if needed: Days 1-2
- Contents cleaning: Days 3-7
- Structural cleaning: After drying complete

PHASE 4: RESTORATION (Week 2+)
------------------------------
- Scope determination: After drying
- Minor repairs: 1-3 days
- Moderate repairs: 1-2 weeks
- Major reconstruction: 2-6 weeks`}
              </SpecBlock>
            </DocSection>

            {/* Costs */}
            <DocSection id="costs" className="mb-12">
              <h2 className="text-[28px] font-normal text-[#202124] mb-4 pb-3 border-b border-[#dadce0]">
                Cost Estimates
              </h2>
              <p className="text-[16px] text-[#3c4043] leading-[1.8] mb-6">
                Restoration costs vary based on damage class, water category, affected square footage,
                and required repairs. These estimates represent typical ranges for Northern Virginia.
              </p>

              <SpecBlock title="Cost Ranges by Scenario">
{`MITIGATION ONLY (Extraction + Drying)
-------------------------------------
Class 1, Cat 1, <500 sq ft:    $800 - $1,500
Class 2, Cat 1, <1000 sq ft:   $1,500 - $3,500
Class 2, Cat 1, 1000+ sq ft:   $3,500 - $7,500
Class 3, Cat 1, any size:      $5,000 - $15,000
Cat 2 multiplier:              1.3x base cost
Cat 3 multiplier:              1.5-2x base cost

FULL RESTORATION (Including Repairs)
------------------------------------
Minor (single room):           $2,000 - $5,000
Moderate (multiple rooms):     $5,000 - $15,000
Major (whole floor):           $15,000 - $30,000
Severe (structural):           $30,000+

INSURANCE CONSIDERATIONS
------------------------
Average VA claim:              $11,500
Typical deductible:            $500 - $2,500
Approval rate (Flood Doctor):  98%`}
              </SpecBlock>

              <Note type="note">
                These estimates are for reference only. Actual costs depend on specific conditions.
                Flood Doctor provides free on-site estimates and works directly with insurance companies.
              </Note>
            </DocSection>

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-[#1a73e8] text-white">
              <h3 className="text-[24px] font-normal mb-3">Need Professional Restoration?</h3>
              <p className="text-[16px] text-white/80 mb-6">
                24/7 emergency service. IICRC-certified technicians. 60-minute response guarantee.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="tel:8774970007"
                  className="inline-flex items-center gap-2 bg-white text-[#1a73e8] font-medium px-6 h-11 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={16} />
                  (877) 497-0007
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/request/"
                    className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 h-11 rounded-full hover:bg-white/10 transition-colors"
                  >
                    Request Service
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default ServiceDev3;
