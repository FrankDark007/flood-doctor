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
  Star,
  ArrowRight,
  Droplets,
  HelpCircle,
  Search,
  ThumbsUp,
  ThumbsDown,
  MessageCircle
} from 'lucide-react';

/**
 * Service-Dev-4: FAQ-HEAVY LAYOUT
 *
 * Design: FAQ-centric with categorized questions and search
 * Best for: Question-based SEO, customer support pages
 * Content capacity: 2500+ words in FAQ format
 *
 * Features:
 * - Searchable FAQ
 * - Categorized questions
 * - Expandable answers
 * - Related questions
 * - Feedback mechanism
 * - Contact fallback
 */

const googleEase = [0.22, 1, 0.36, 1];

// FAQ Item component
const FAQItem: React.FC<{
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}> = ({ question, answer, isOpen, onToggle, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [helpful, setHelpful] = useState<boolean | null>(null);

  return (
    <motion.div
      ref={ref}
      className="border-b border-[#dadce0]"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={onToggle}
        className={`w-full py-6 flex items-start justify-between text-left group ${
          isOpen ? 'text-[#1a73e8]' : 'hover:text-[#1a73e8]'
        }`}
      >
        <div className="flex items-start gap-4">
          <HelpCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isOpen ? 'text-[#1a73e8]' : 'text-[#5f6368]'}`} />
          <span className="text-[18px] font-medium">{question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronDown size={24} className={isOpen ? 'text-[#1a73e8]' : 'text-[#5f6368]'} />
        </motion.div>
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
            <div className="pl-9 pb-6 pr-8">
              <div className="text-[16px] text-[#3c4043] leading-[1.8]">
                {answer}
              </div>
              {/* Feedback */}
              <div className="mt-6 pt-4 border-t border-[#e8e8e8] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-[14px] text-[#5f6368]">Was this helpful?</span>
                  <button
                    onClick={() => setHelpful(true)}
                    className={`p-2 rounded-lg transition-colors ${
                      helpful === true ? 'bg-[#e6f4ea] text-[#137333]' : 'hover:bg-[#f8f9fa] text-[#5f6368]'
                    }`}
                  >
                    <ThumbsUp size={18} />
                  </button>
                  <button
                    onClick={() => setHelpful(false)}
                    className={`p-2 rounded-lg transition-colors ${
                      helpful === false ? 'bg-[#fce8e6] text-[#c5221f]' : 'hover:bg-[#f8f9fa] text-[#5f6368]'
                    }`}
                  >
                    <ThumbsDown size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServiceDev4: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQs, setOpenFAQs] = useState<Set<string>>(new Set(['general-1']));

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'process', label: 'Process & Timeline' },
    { id: 'costs', label: 'Costs & Insurance' },
    { id: 'safety', label: 'Safety & Health' },
    { id: 'prevention', label: 'Prevention' }
  ];

  const faqs = [
    // General
    {
      id: 'general-1',
      category: 'general',
      question: 'What is water damage restoration?',
      answer: (
        <>
          <p className="mb-4">
            Water damage restoration is the professional process of returning a property to its pre-loss
            condition after water intrusion from floods, leaks, burst pipes, or other water-related incidents.
          </p>
          <p className="mb-4">
            The process involves several critical phases:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Emergency water extraction</strong> — Removing standing water as quickly as possible</li>
            <li><strong>Structural drying</strong> — Using air movers and dehumidifiers to dry materials</li>
            <li><strong>Cleaning & sanitization</strong> — Treating affected areas to prevent mold and bacteria</li>
            <li><strong>Restoration</strong> — Repairing or replacing damaged materials</li>
          </ul>
          <p>
            Professional restoration follows the IICRC S500 Standard, ensuring consistent, effective outcomes
            regardless of damage scope. This scientific approach uses moisture meters, thermal cameras, and
            psychrometric calculations to ensure complete drying.
          </p>
        </>
      )
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'How quickly should I respond to water damage?',
      answer: (
        <>
          <p className="mb-4">
            <strong>Immediately.</strong> Time is the most critical factor in water damage restoration. Here's why:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Within 1 hour:</strong> Water spreads rapidly, saturating materials</li>
            <li><strong>Within 24 hours:</strong> Drywall begins breaking down, metal starts corroding</li>
            <li><strong>Within 48 hours:</strong> Mold spores can begin colonizing on wet surfaces</li>
            <li><strong>Within 1 week:</strong> Structural damage accelerates, restoration costs increase exponentially</li>
          </ul>
          <p className="mb-4">
            Fast response can reduce restoration costs by up to 50% and significantly improve material
            salvageability. Carpet, for example, can often be saved if professionally extracted within 48 hours
            but typically requires replacement after 72 hours.
          </p>
          <p>
            Flood Doctor guarantees 60-minute response time, 24/7, throughout Northern Virginia. Call
            (877) 497-0007 at the first sign of water damage.
          </p>
        </>
      )
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'What areas does Flood Doctor serve?',
      answer: (
        <>
          <p className="mb-4">
            Flood Doctor serves all of Northern Virginia, Washington DC, and parts of Maryland with 60-minute
            response time capability.
          </p>
          <p className="mb-4">
            <strong>Virginia Coverage:</strong>
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {['Fairfax County', 'Arlington County', 'Alexandria', 'Loudoun County', 'Prince William County',
              'McLean', 'Vienna', 'Tysons', 'Reston', 'Herndon', 'Ashburn', 'Springfield', 'Falls Church',
              'Great Falls', 'Lorton'].map((area) => (
              <div key={area} className="flex items-center gap-2 text-[15px]">
                <CheckCircle2 size={14} className="text-[#137333]" />
                {area}
              </div>
            ))}
          </div>
          <p>
            Our strategic fleet positioning ensures we can reach any location in our service area within
            60 minutes—day or night.
          </p>
        </>
      )
    },
    // Process & Timeline
    {
      id: 'process-1',
      category: 'process',
      question: 'What is the water damage restoration process?',
      answer: (
        <>
          <p className="mb-4">
            Professional water damage restoration follows a systematic 6-step process:
          </p>
          <ol className="list-decimal list-inside space-y-4 mb-4">
            <li>
              <strong>Emergency Contact & Assessment</strong><br />
              <span className="text-[15px]">Our team responds within 60 minutes, assesses the damage using thermal
              cameras and moisture meters, and creates a detailed restoration plan.</span>
            </li>
            <li>
              <strong>Water Extraction</strong><br />
              <span className="text-[15px]">Industrial extractors remove standing water quickly—up to 10,000 gallons
              per hour with truck-mounted units.</span>
            </li>
            <li>
              <strong>Drying & Dehumidification</strong><br />
              <span className="text-[15px]">Strategic placement of air movers and dehumidifiers ensures complete
              moisture removal with daily monitoring.</span>
            </li>
            <li>
              <strong>Cleaning & Sanitization</strong><br />
              <span className="text-[15px]">Affected areas are cleaned and treated with antimicrobial agents to
              prevent mold and bacterial growth.</span>
            </li>
            <li>
              <strong>Restoration & Repairs</strong><br />
              <span className="text-[15px]">Final repairs restore your property to pre-loss condition, from minor
              cosmetic work to major reconstruction.</span>
            </li>
            <li>
              <strong>Final Walkthrough</strong><br />
              <span className="text-[15px]">We verify your satisfaction and ensure all work meets IICRC standards
              before project completion.</span>
            </li>
          </ol>
        </>
      )
    },
    {
      id: 'process-2',
      category: 'process',
      question: 'How long does water damage restoration take?',
      answer: (
        <>
          <p className="mb-4">
            Restoration timeline depends on the extent of damage, but here are typical timeframes:
          </p>
          <table className="w-full text-[15px] mb-4">
            <thead>
              <tr className="border-b border-[#dadce0]">
                <th className="text-left py-2 font-medium">Damage Level</th>
                <th className="text-left py-2 font-medium">Drying Time</th>
                <th className="text-left py-2 font-medium">Total Restoration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e8e8e8]">
                <td className="py-2">Minor (single room)</td>
                <td className="py-2">2-3 days</td>
                <td className="py-2">3-5 days</td>
              </tr>
              <tr className="border-b border-[#e8e8e8]">
                <td className="py-2">Moderate (multiple rooms)</td>
                <td className="py-2">3-5 days</td>
                <td className="py-2">1-2 weeks</td>
              </tr>
              <tr className="border-b border-[#e8e8e8]">
                <td className="py-2">Major (whole floor)</td>
                <td className="py-2">5-7 days</td>
                <td className="py-2">2-4 weeks</td>
              </tr>
              <tr>
                <td className="py-2">Severe (structural)</td>
                <td className="py-2">7+ days</td>
                <td className="py-2">4-8 weeks</td>
              </tr>
            </tbody>
          </table>
          <p>
            We provide detailed timeline estimates during initial assessment and keep you updated throughout
            the process via our client portal.
          </p>
        </>
      )
    },
    {
      id: 'process-3',
      category: 'process',
      question: 'Can I stay in my home during restoration?',
      answer: (
        <>
          <p className="mb-4">
            In most cases, <strong>yes</strong>. The ability to remain depends on several factors:
          </p>
          <p className="mb-2"><strong>You can likely stay if:</strong></p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-[15px]">
            <li>Damage is limited to one area and utilities are functional</li>
            <li>Water is Category 1 (clean water from sanitary sources)</li>
            <li>Equipment noise won't significantly impact daily life</li>
            <li>Air quality is safe (confirmed by testing if needed)</li>
          </ul>
          <p className="mb-2"><strong>Temporary relocation may be needed if:</strong></p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-[15px]">
            <li>Utilities are compromised or unsafe</li>
            <li>Category 3 (black water/sewage) contamination requires extensive treatment</li>
            <li>Large portions of the home require equipment placement</li>
            <li>Vulnerable family members (elderly, infants, immunocompromised) are present</li>
          </ul>
          <p>
            Our team will assess safety conditions and provide recommendations. Many insurance policies
            cover temporary relocation costs if needed.
          </p>
        </>
      )
    },
    // Costs & Insurance
    {
      id: 'costs-1',
      category: 'costs',
      question: 'How much does water damage restoration cost?',
      answer: (
        <>
          <p className="mb-4">
            Costs vary significantly based on damage extent, water category, and required repairs. Here are
            typical ranges for Northern Virginia:
          </p>
          <table className="w-full text-[15px] mb-4">
            <thead>
              <tr className="border-b border-[#dadce0]">
                <th className="text-left py-2 font-medium">Service</th>
                <th className="text-left py-2 font-medium">Cost Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e8e8e8]">
                <td className="py-2">Minor mitigation (single room)</td>
                <td className="py-2">$1,000 - $3,000</td>
              </tr>
              <tr className="border-b border-[#e8e8e8]">
                <td className="py-2">Moderate mitigation (multiple rooms)</td>
                <td className="py-2">$3,000 - $7,500</td>
              </tr>
              <tr className="border-b border-[#e8e8e8]">
                <td className="py-2">Major mitigation (basement/floor)</td>
                <td className="py-2">$7,500 - $15,000</td>
              </tr>
              <tr className="border-b border-[#e8e8e8]">
                <td className="py-2">Full restoration with repairs</td>
                <td className="py-2">$5,000 - $30,000+</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-4">
            <strong>Key factors affecting cost:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-[15px]">
            <li>Water category (clean, gray, or black water)</li>
            <li>Square footage affected</li>
            <li>Type of materials damaged</li>
            <li>Extent of structural damage</li>
            <li>After-hours emergency response</li>
          </ul>
          <p>
            Flood Doctor provides free on-site estimates and works directly with insurance companies to
            minimize out-of-pocket costs.
          </p>
        </>
      )
    },
    {
      id: 'costs-2',
      category: 'costs',
      question: 'Does homeowners insurance cover water damage?',
      answer: (
        <>
          <p className="mb-4">
            <strong>Most homeowner policies cover sudden and accidental water damage.</strong> Coverage typically includes:
          </p>
          <p className="mb-2 text-[#137333] font-medium">Usually Covered:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-[15px]">
            <li>Burst or frozen pipes</li>
            <li>Appliance malfunctions (water heater, washing machine)</li>
            <li>Accidental overflow from tubs, sinks, toilets</li>
            <li>Sudden roof leaks from storm damage</li>
            <li>Fire sprinkler discharge</li>
          </ul>
          <p className="mb-2 text-[#c5221f] font-medium">Usually NOT Covered:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-[15px]">
            <li>Flooding from external sources (requires separate flood insurance)</li>
            <li>Gradual leaks due to poor maintenance</li>
            <li>Sewer backup (may require endorsement)</li>
            <li>Mold remediation (limits often apply)</li>
          </ul>
          <p className="mb-4">
            <strong>Average Virginia claim:</strong> $11,500<br />
            <strong>Flood Doctor approval rate:</strong> 98%
          </p>
          <p>
            We handle direct insurance billing and documentation for all major carriers, making the claims
            process as smooth as possible.
          </p>
        </>
      )
    },
    {
      id: 'costs-3',
      category: 'costs',
      question: 'Do you work with my insurance company?',
      answer: (
        <>
          <p className="mb-4">
            <strong>Yes.</strong> Flood Doctor works directly with all major insurance carriers and handles
            the documentation process for you. Our services include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Initial claim documentation</strong> — Photos, moisture readings, damage scope</li>
            <li><strong>Direct adjuster communication</strong> — We meet with adjusters on-site</li>
            <li><strong>Xactimate pricing</strong> — Industry-standard software insurance companies trust</li>
            <li><strong>Supplemental claims</strong> — If additional damage is discovered during restoration</li>
            <li><strong>Direct billing</strong> — We bill insurance directly; you pay only your deductible</li>
          </ul>
          <p className="mb-4">
            <strong>Insurance companies we commonly work with:</strong>
          </p>
          <div className="grid grid-cols-2 gap-2 text-[15px]">
            {['State Farm', 'Allstate', 'USAA', 'Nationwide', 'Liberty Mutual', 'Travelers',
              'GEICO', 'Farmers', 'Erie', 'Amica'].map((carrier) => (
              <div key={carrier} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#137333]" />
                {carrier}
              </div>
            ))}
          </div>
        </>
      )
    },
    // Safety & Health
    {
      id: 'safety-1',
      category: 'safety',
      question: 'Is water damage dangerous to my health?',
      answer: (
        <>
          <p className="mb-4">
            Water damage can pose health risks depending on the water source and how long it's been standing:
          </p>
          <div className="space-y-4 mb-4">
            <div className="p-4 rounded-lg bg-[#e6f4ea]">
              <p className="font-medium text-[#137333] mb-1">Category 1 (Clean Water)</p>
              <p className="text-[15px]">Low health risk. Originates from sanitary sources. Safe for most people,
              but can degrade if not addressed within 48 hours.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#fef7e0]">
              <p className="font-medium text-[#b06000] mb-1">Category 2 (Gray Water)</p>
              <p className="text-[15px]">Moderate risk. May contain microorganisms causing discomfort or illness.
              Avoid direct contact; gloves recommended.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#fce8e6]">
              <p className="font-medium text-[#c5221f] mb-1">Category 3 (Black Water)</p>
              <p className="text-[15px]">High health risk. Contains pathogens, bacteria, and potentially toxic
              substances. Requires professional handling with full PPE.</p>
            </div>
          </div>
          <p className="mb-4">
            <strong>Additional health concerns:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-[15px]">
            <li><strong>Mold growth</strong> — Can cause respiratory issues, allergies, and asthma attacks</li>
            <li><strong>Bacteria/viruses</strong> — Particularly in Category 2-3 water</li>
            <li><strong>Electrical hazards</strong> — Water near electrical systems poses shock risk</li>
            <li><strong>Structural hazards</strong> — Weakened floors, walls may be unsafe</li>
          </ul>
        </>
      )
    },
    {
      id: 'safety-2',
      category: 'safety',
      question: 'Will I get mold from water damage?',
      answer: (
        <>
          <p className="mb-4">
            <strong>Mold growth is likely if water damage isn't addressed quickly.</strong> Mold spores are naturally
            present in all air and can colonize on wet surfaces within 24-48 hours under favorable conditions.
          </p>
          <p className="mb-4">
            <strong>Mold growth factors:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-[15px]">
            <li><strong>Moisture:</strong> Primary requirement—materials over 16% moisture content are at risk</li>
            <li><strong>Temperature:</strong> 68-86°F is optimal for most mold species</li>
            <li><strong>Time:</strong> Growth can begin in 24-48 hours</li>
            <li><strong>Food source:</strong> Paper, wood, drywall, carpet all provide nutrients</li>
          </ul>
          <p className="mb-4">
            <strong>How professional restoration prevents mold:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-[15px]">
            <li>Fast response removes the moisture mold needs to grow</li>
            <li>Industrial drying equipment reaches moisture in wall cavities and subfloors</li>
            <li>Antimicrobial treatments kill mold spores before colonization</li>
            <li>Moisture monitoring confirms materials reach safe levels</li>
          </ul>
          <p>
            If you suspect mold has already developed, Flood Doctor offers professional mold remediation
            following IICRC S520 standards.
          </p>
        </>
      )
    },
    // Prevention
    {
      id: 'prevention-1',
      category: 'prevention',
      question: 'How can I prevent water damage in my home?',
      answer: (
        <>
          <p className="mb-4">
            While not all water damage is preventable, these steps significantly reduce your risk:
          </p>
          <p className="mb-2 font-medium">Regular Maintenance:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-[15px]">
            <li>Inspect plumbing fixtures annually for leaks and corrosion</li>
            <li>Replace washing machine hoses every 5 years (use braided stainless steel)</li>
            <li>Flush water heater annually; replace units over 10 years old</li>
            <li>Clean gutters twice yearly; ensure downspouts direct water away from foundation</li>
            <li>Inspect roof after storms; repair damaged shingles promptly</li>
          </ul>
          <p className="mb-2 font-medium">Seasonal Precautions:</p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-[15px]">
            <li>Before winter: Disconnect outdoor hoses, insulate exposed pipes, know main shutoff location</li>
            <li>During freeze warnings: Let faucets drip, keep cabinet doors open for warmth</li>
            <li>Before travel: Turn off water supply, set thermostat no lower than 55°F</li>
          </ul>
          <p className="mb-2 font-medium">Smart Technology:</p>
          <ul className="list-disc list-inside space-y-1 text-[15px]">
            <li>Install water leak detectors near water heater, washing machine, under sinks</li>
            <li>Consider whole-home water shutoff systems that activate on leak detection</li>
            <li>Use smart water monitors to track unusual water usage patterns</li>
          </ul>
        </>
      )
    },
    {
      id: 'prevention-2',
      category: 'prevention',
      question: 'What should I do immediately if I discover water damage?',
      answer: (
        <>
          <p className="mb-4">
            Quick action in the first few hours can significantly reduce damage and restoration costs:
          </p>
          <ol className="list-decimal list-inside space-y-3 mb-4">
            <li>
              <strong>Stop the water source</strong> if safely possible. Turn off the supply valve for the
              affected fixture, or shut off your main water supply if needed.
            </li>
            <li>
              <strong>Turn off electricity</strong> in affected areas if water is near outlets, switches, or
              the electrical panel. Use your circuit breaker; don't touch anything in standing water.
            </li>
            <li>
              <strong>Call a professional</strong>. Flood Doctor responds within 60 minutes, 24/7.
              Call (877) 497-0007.
            </li>
            <li>
              <strong>Document the damage</strong>. Take photos and video for insurance purposes before
              cleanup begins.
            </li>
            <li>
              <strong>Move valuables</strong> to dry areas if you can do so safely. Prioritize irreplaceable
              items like photos, documents, and electronics.
            </li>
            <li>
              <strong>Don't use household vacuum</strong> on standing water—it's a shock hazard and will
              damage the vacuum.
            </li>
          </ol>
          <p>
            <strong>What NOT to do:</strong> Don't wait to see if it dries on its own. Don't use fans alone
            without dehumidification. Don't enter rooms with sagging ceilings or standing water near electrical.
          </p>
        </>
      )
    }
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    const newSet = new Set(openFAQs);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setOpenFAQs(newSet);
  };

  return (
    <main className="flex-grow bg-white">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#e8f0fe] to-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-[36px] sm:text-[44px] lg:text-[56px] font-normal text-[#202124] leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Water Damage Restoration FAQ
            </motion.h1>
            <motion.p
              className="text-[18px] lg:text-[20px] text-[#5f6368] mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Find answers to common questions about water damage, restoration process,
              costs, insurance, and more.
            </motion.p>

            {/* Search */}
            <motion.div
              className="relative max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5f6368]" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-[#dadce0] text-[16px] focus:outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-white border-b border-[#dadce0] sticky top-20 z-20">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-[14px] font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#1a73e8] text-white'
                    : 'bg-[#f8f9fa] text-[#5f6368] hover:bg-[#e8e8e8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 lg:py-16">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[900px]">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-[#dadce0] mx-auto mb-4" />
              <p className="text-[18px] text-[#5f6368] mb-4">No questions found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="text-[#1a73e8] font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="divide-y-0">
              {filteredFAQs.map((faq, idx) => (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQs.has(faq.id)}
                  onToggle={() => toggleFAQ(faq.id)}
                  index={idx}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[900px]">
          <div className="text-center">
            <MessageCircle className="w-12 h-12 text-[#1a73e8] mx-auto mb-4" />
            <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] mb-4">
              Still have questions?
            </h2>
            <p className="text-[18px] text-[#5f6368] mb-8 max-w-lg mx-auto">
              Our team is available 24/7 to answer your questions and provide immediate assistance
              for water damage emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:8774970007"
                className="inline-flex items-center justify-center gap-2 bg-[#1a73e8] text-white font-medium px-8 h-12 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={18} />
                (877) 497-0007
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 border border-[#dadce0] text-[#202124] font-medium px-8 h-12 rounded-full hover:bg-white transition-colors"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 lg:py-20 bg-[#1a73e8] text-white">
        <div className="mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[800px] text-center">
          <h2 className="text-[28px] lg:text-[36px] font-normal mb-4">
            Water Damage Emergency?
          </h2>
          <p className="text-[18px] text-white/80 mb-8">
            Don't wait—water damage spreads fast. Call now for immediate 60-minute response.
          </p>
          <motion.a
            href="tel:8774970007"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#1a73e8] font-medium px-10 h-14 rounded-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone size={20} />
            (877) 497-0007
          </motion.a>
        </div>
      </section>
    </main>
  );
};

export default ServiceDev4;
