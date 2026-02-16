import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import LazyFAQ from '../../components/ui/LazyFAQ';
import { generateBreadcrumbSchema, combineSchemas } from '../../utils/schema';
import {
  Phone,
  CloudRain,
  CheckCircle2,
  AlertTriangle,
  Clock,
  DollarSign,
  ArrowRight,
  Droplets,
  Shield,
  Wrench,
  FileText,
  Package,
  Home,
  MapPin,
  Battery,
  Car,
  Users,
  Smartphone
} from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  details: string[];
  proTip?: string;
  warning?: string;
  checklistTitle?: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Assess Your Flood Risk',
    description: 'Understand your property\'s flood vulnerability before a storm hits.',
    details: [
      'Check FEMA flood maps (msc.fema.gov) for your property\'s flood zone',
      'Review your property\'s elevation relative to nearby streams and rivers',
      'Check if your street has a history of flooding during heavy rain',
      'Note if your basement has any previous water intrusion history',
      'Identify the lowest points of entry on your property',
      'Consider getting a professional flood risk assessment'
    ],
    proTip: 'In Northern Virginia, areas near the Potomac, Occoquan River, and Difficult Run are at higher risk. Even properties not in designated flood zones can flood during major storms.'
  },
  {
    number: 2,
    title: 'Prepare Your Home\'s Exterior',
    description: 'Prevent water from reaching your foundation before it becomes a problem.',
    details: [
      'Clean gutters and downspouts—debris causes overflow onto foundation',
      'Extend downspouts at least 6 feet away from foundation',
      'Check that yard slopes away from house (6" drop per 10 feet)',
      'Clear debris from storm drains near your property',
      'Install window well covers on basement windows',
      'Seal cracks in foundation, driveways, and sidewalks',
      'Trim trees to prevent storm damage to roof'
    ],
    checklistTitle: 'Exterior Prep Checklist'
  },
  {
    number: 3,
    title: 'Protect Your Basement',
    description: 'Your basement is your first line of defense—make sure it\'s ready.',
    details: [
      'Test sump pump by pouring water into pit—it should activate',
      'Install battery backup for sump pump (essential during power outages)',
      'Consider water alarm near sump pump and water heater',
      'Move valuables, documents, and electronics to higher floors',
      'Elevate washer, dryer, and water heater if possible',
      'Keep sandbags on hand for doorway protection',
      'Know how to shut off basement utilities quickly'
    ],
    warning: 'Most sump pump failures occur during storms when you need them most. A battery backup is not optional—it\'s essential.'
  },
  {
    number: 4,
    title: 'Build an Emergency Kit',
    description: 'Be prepared to shelter in place or evacuate at a moment\'s notice.',
    details: [
      'Water: 1 gallon per person per day for at least 3 days',
      'Non-perishable food for 3+ days',
      'Flashlights and extra batteries (not just candles)',
      'Battery-powered or hand-crank radio',
      'First aid kit with any prescription medications',
      'Phone chargers and portable battery packs',
      'Cash in small bills (ATMs may be down)',
      'Copies of important documents in waterproof container'
    ],
    proTip: 'Store your emergency kit in a waterproof container on an upper floor. Check and rotate supplies every 6 months.',
    checklistTitle: 'Emergency Kit Checklist'
  },
  {
    number: 5,
    title: 'Protect Important Documents',
    description: 'Safeguard irreplaceable documents before disaster strikes.',
    details: [
      'Store originals in a fireproof, waterproof safe on upper floor',
      'Create digital backups of all important documents',
      'Upload backups to secure cloud storage',
      'Keep a USB drive with copies in your emergency kit',
      'Include: insurance policies, deeds, IDs, medical records, photos',
      'Make copies of credit cards and contact numbers',
      'Document home contents with video walkthrough'
    ],
    proTip: 'Do a video walkthrough of every room showing belongings, serial numbers, and condition. Store this in the cloud. It\'s invaluable for insurance claims.'
  },
  {
    number: 6,
    title: 'Plan Your Evacuation Route',
    description: 'Know where you\'ll go and how you\'ll get there before you need to.',
    details: [
      'Identify 2-3 evacuation routes from your neighborhood',
      'Know which routes are flood-prone (avoid during storms)',
      'Designate meeting points for family members',
      'Identify shelter locations and pet-friendly options',
      'Keep vehicle gas tank at least half full during storm season',
      'Have a plan for elderly family members and those with disabilities',
      'Know how to turn off utilities before leaving'
    ],
    warning: 'Never drive through flooded roads. Just 6 inches of water can knock you down, and 2 feet can float a vehicle. Turn around, don\'t drown.'
  },
  {
    number: 7,
    title: 'Review Your Insurance Coverage',
    description: 'Standard homeowners insurance does NOT cover flooding—verify your coverage now.',
    details: [
      'Standard homeowners policies exclude flood damage',
      'Federal flood insurance has a 30-day waiting period',
      'Review policy limits and deductibles',
      'Document your belongings with photos and video',
      'Keep a copy of your policy in your emergency kit',
      'Know your insurance company\'s emergency contact number',
      'Understand what\'s covered vs. what requires separate policies'
    ],
    proTip: 'In Northern Virginia, even properties outside designated flood zones can flood. The average flood claim is $50,000+. Flood insurance typically costs $400-700/year—cheap compared to uninsured losses.'
  },
  {
    number: 8,
    title: 'Create a Communication Plan',
    description: 'Ensure your family can connect during and after a disaster.',
    details: [
      'Establish an out-of-area contact person as central communication point',
      'Ensure everyone has emergency contact numbers written down',
      'Text instead of call (texts often get through when calls can\'t)',
      'Follow local emergency management on social media',
      'Download FEMA app and sign up for local emergency alerts',
      'Have a battery-powered radio for updates if power/internet fail',
      'Teach children how to call 911 and recite their address'
    ],
    proTip: 'Register for Fairfax County\'s Community Emergency Alert Network (CEAN) or your local county\'s alert system. You\'ll get real-time evacuation orders and emergency information.'
  }
];

const faqs = [
  {
    question: 'Does homeowners insurance cover flood damage?',
    answer: 'No. Standard homeowners insurance excludes flood damage. You need a separate flood insurance policy through FEMA\'s National Flood Insurance Program (NFIP) or a private insurer. There\'s typically a 30-day waiting period, so don\'t wait until a storm is forecast to purchase.'
  },
  {
    question: 'How much does flood insurance cost in Northern Virginia?',
    answer: 'Costs vary based on flood zone, elevation, and coverage amounts. Typical costs range from $400-1,500 annually. Properties in high-risk zones (Zone A or V) pay more. Even low-risk properties can get coverage for $400-700/year. Given the average flood claim is $50,000+, it\'s a worthwhile investment.'
  },
  {
    question: 'What are the most flood-prone areas in Northern Virginia?',
    answer: 'Areas along the Potomac River, Occoquan River, Difficult Run, and Four Mile Run have higher flood risk. Communities like Old Town Alexandria, parts of Arlington near Four Mile Run, and low-lying areas in Fairfax County near streams are at elevated risk. Check FEMA flood maps for your specific address.'
  },
  {
    question: 'How do I know if I should evacuate?',
    answer: 'Evacuate if ordered by local authorities—they have information you don\'t. Also consider evacuating if: water is rising toward your home, you\'re in a flood zone during a major storm, you have medical needs requiring electricity, or your neighborhood has flooded before. When in doubt, leave early.'
  },
  {
    question: 'What should I do if I can\'t evacuate in time?',
    answer: 'Move to the highest floor of your home. Avoid attics unless you have roof access—people have drowned trapped in attics. Bring your phone, emergency kit, and important documents. Call 911 if you need rescue. Never try to walk or swim through floodwater—it\'s extremely dangerous.'
  },
  {
    question: 'How long after a flood before it\'s safe to return home?',
    answer: 'Wait for official clearance from local authorities. When you return: don\'t enter if water remains or structure looks damaged, check for gas leaks, have electricity turned off until an electrician inspects, and photograph everything for insurance before cleanup. Water may look clean but contains sewage and chemicals.'
  }
];

const FloodPreparationGuide: React.FC = () => {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Prepare Your Home for Flooding',
    description: 'Complete flood preparation guide for Northern Virginia homeowners. Protect your home, family, and belongings before storms hit.',
    image: 'https://flood.doctor/images/flood-preparation-guide.jpg',
    totalTime: 'P1D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '100-500'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Sandbags' },
      { '@type': 'HowToSupply', name: 'Battery backup for sump pump' },
      { '@type': 'HowToSupply', name: 'Water (1 gallon per person per day)' },
      { '@type': 'HowToSupply', name: 'Non-perishable food' },
      { '@type': 'HowToSupply', name: 'Flashlights and batteries' },
      { '@type': 'HowToSupply', name: 'First aid kit' },
      { '@type': 'HowToSupply', name: 'Portable phone chargers' },
      { '@type': 'HowToSupply', name: 'Waterproof document container' },
      { '@type': 'HowToSupply', name: 'Window well covers' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Battery-powered radio' },
      { '@type': 'HowToTool', name: 'Water alarm sensors' },
      { '@type': 'HowToTool', name: 'Ladder (for roof access if needed)' }
    ],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      itemListElement: step.details.map((detail, i) => ({
        '@type': 'HowToDirection',
        position: i + 1,
        text: detail
      }))
    }))
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const pageSchema = combineSchemas(
    generateBreadcrumbSchema([
      { label: 'Guides', path: '/guides/' },
      { label: 'Flood Preparation', path: '/guides/flood-preparation/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Home Flood Preparation Guide"
        description="Complete flood preparation guide for Northern Virginia homeowners. Protect your home before storms with our 8-step preparation checklist, emergency kit guide, and evacuation planning tips."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-[#dadce0] pt-12 pb-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Guides', path: '/guides/' },
              { label: 'Flood Preparation', path: '/guides/flood-preparation/' }
            ]}
          />

          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1a73e8] text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> Prevention Guide
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              How to Prepare Your Home for Flooding
            </h1>

            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-8">
              The time to prepare for flooding is before the storm, not during. This guide walks Northern Virginia homeowners through everything needed to protect your home, family, and belongings.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-[#5f6368] mb-8">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#1a73e8]" />
                8 comprehensive steps
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-[#1a73e8]" />
                11 min read
              </span>
              <span className="flex items-center gap-2">
                <DollarSign size={18} className="text-[#1a73e8]" />
                $100-500 in preparation supplies
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button to="/request/" variant="primary" size="lg">
                <Shield size={18} className="mr-2" />
                Get Home Assessment
              </Button>
              <Button href="tel:8774970007" variant="outline" size="lg">
                <Phone size={18} className="mr-2" />
                Questions? Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-[#f8f9fa] border-b border-[#dadce0] py-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '$50,000+', label: 'Average flood claim', icon: DollarSign },
              { stat: '30 days', label: 'Flood insurance waiting period', icon: Clock },
              { stat: '6 inches', label: 'Of water can knock you down', icon: Droplets },
              { stat: '2 feet', label: 'Of water can float a car', icon: Car }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-[#dadce0]">
                <item.icon size={24} className="text-[#1a73e8] mx-auto mb-2" />
                <div className="text-[#1a73e8] font-bold text-xl">{item.stat}</div>
                <div className="text-[#5f6368] text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Steps Column */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  {/* Step Number */}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="flex-grow">
                      <h2 className="font-display text-2xl font-medium text-[#202124] mb-2">
                        {step.title}
                      </h2>
                      <p className="text-[#5f6368] text-lg mb-4">
                        {step.description}
                      </p>

                      {step.checklistTitle && (
                        <div className="text-sm font-bold text-[#1a73e8] uppercase tracking-wider mb-2">
                          {step.checklistTitle}
                        </div>
                      )}

                      <ul className="space-y-2 mb-4">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-[#3c4043]">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {step.proTip && (
                        <div className="bg-[#e8f0fe] rounded-xl p-4 mb-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center flex-shrink-0">
                              <Wrench size={16} />
                            </div>
                            <div>
                              <span className="font-bold text-[#1a73e8] text-sm uppercase tracking-wider">Pro Tip</span>
                              <p className="text-[#202124] mt-1">{step.proTip}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {step.warning && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                          <div className="flex items-start gap-3">
                            <AlertTriangle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-red-700 text-sm uppercase tracking-wider">Critical</span>
                              <p className="text-red-800 mt-1">{step.warning}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Connector Line */}
                  {step.number < steps.length && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-[#dadce0] -mb-2" style={{ height: 'calc(100% - 3rem)' }} />
                  )}
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-8 pb-4 border-b-4 border-[#1a73e8]">
                Flood Preparation FAQs
              </h2>
              <LazyFAQ data={faqs} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Emergency Kit Essentials */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-lg mb-4 flex items-center gap-2">
                  <Package size={20} className="text-[#1a73e8]" />
                  Emergency Kit Essentials
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    'Water (1 gal/person/day × 3 days)',
                    '3+ days non-perishable food',
                    'Flashlights + extra batteries',
                    'Battery-powered radio',
                    'First aid kit',
                    'Prescription medications',
                    'Phone chargers + battery packs',
                    'Cash in small bills',
                    'Important documents',
                    'Change of clothes',
                    'Blankets or sleeping bags',
                    'Basic tools + duct tape'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-[#5f6368]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Local Resources */}
              <div className="bg-white rounded-2xl p-6 border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-lg mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-[#1a73e8]" />
                  Northern Virginia Resources
                </h3>
                <div className="space-y-3 text-sm">
                  <a href="https://msc.fema.gov/portal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1a73e8] hover:underline">
                    <ArrowRight size={14} />
                    FEMA Flood Map Service
                  </a>
                  <a href="https://www.fairfaxcounty.gov/alerts/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1a73e8] hover:underline">
                    <ArrowRight size={14} />
                    Fairfax County Alerts (CEAN)
                  </a>
                  <a href="https://www.arlingtonva.us/Government/Programs/Emergency/Alerts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1a73e8] hover:underline">
                    <ArrowRight size={14} />
                    Arlington Emergency Alerts
                  </a>
                  <a href="https://www.loudoun.gov/alerts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1a73e8] hover:underline">
                    <ArrowRight size={14} />
                    Loudoun County Alerts
                  </a>
                  <a href="https://www.floodsmart.gov" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1a73e8] hover:underline">
                    <ArrowRight size={14} />
                    National Flood Insurance Program
                  </a>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] rounded-2xl p-6 text-white">
                <h3 className="font-medium text-lg mb-2">Storm Coming?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  If flooding is imminent and you need sandbags, sump pump service, or emergency preparation help, our team is available 24/7.
                </p>
                <Button href="tel:8774970007" variant="secondary" size="md" className="w-full bg-white text-[#1a73e8] border-none hover:bg-blue-50">
                  <Phone size={16} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>

              {/* Related Guides */}
              <div className="bg-white rounded-2xl p-6 border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-lg mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-[#1a73e8]" />
                  Related Guides
                </h3>
                <div className="space-y-3">
                  <Link to="/guides/basement-waterproofing/" className="flex items-center gap-3 text-[#1a73e8] hover:underline">
                    <ArrowRight size={16} />
                    <span>Basement Waterproofing Guide</span>
                  </Link>
                  <Link to="/guides/water-damage-cleanup/" className="flex items-center gap-3 text-[#1a73e8] hover:underline">
                    <ArrowRight size={16} />
                    <span>Water Damage Cleanup Guide</span>
                  </Link>
                  <Link to="/guides/water-damage-insurance-claim/" className="flex items-center gap-3 text-[#1a73e8] hover:underline">
                    <ArrowRight size={16} />
                    <span>Insurance Claim Guide</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Already Dealing with Flood Damage?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            If flooding has already occurred, our 24/7 emergency team responds in 60 minutes across Northern Virginia. We handle water extraction, drying, and full restoration.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
              <Phone size={20} className="mr-2" />
              Emergency: (877) 497-0007
            </Button>
            <Button to="/services/residential/restoration-services/flood-cleanup/" variant="secondary" size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
              Flood Restoration Services
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FloodPreparationGuide;
