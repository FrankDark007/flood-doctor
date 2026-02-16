import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import LazyFAQ from '../../components/ui/LazyFAQ';
import { generateBreadcrumbSchema, combineSchemas } from '../../utils/schema';
import {
  Phone,
  Home,
  CheckCircle2,
  AlertTriangle,
  Clock,
  DollarSign,
  ArrowRight,
  Droplets,
  Shield,
  Wrench,
  FileText,
  Layers,
  CircleDot,
  ThermometerSun,
  Construction
} from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  details: string[];
  proTip?: string;
  warning?: string;
  timeEstimate?: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Assess Your Basement Water Problems',
    description: 'Identify the source and severity of water intrusion before choosing solutions.',
    details: [
      'Check for visible water stains on walls (high, low, or uniform)',
      'Inspect for efflorescence (white mineral deposits)',
      'Look for cracks in foundation walls and floor',
      'Note if water appears after rain vs. constantly (groundwater)',
      'Check exterior grade—soil should slope away from foundation',
      'Examine window wells for proper drainage'
    ],
    proTip: 'Take photos during active leaking to show contractors exactly where water enters. Mark spots with tape.',
    timeEstimate: '2-4 hours'
  },
  {
    number: 2,
    title: 'Address Exterior Grading and Drainage',
    description: 'Many basement water problems start outside—fix these first.',
    details: [
      'Ensure soil slopes away from foundation (6 inches drop per 10 feet)',
      'Clean and extend downspouts at least 6 feet from foundation',
      'Install splash blocks or underground drain extensions',
      'Clear debris from window wells and add gravel if needed',
      'Consider adding window well covers to prevent water pooling',
      'Remove landscape materials that trap moisture against foundation'
    ],
    proTip: 'A simple grading fix with a few bags of topsoil can prevent thousands in water damage. Start here before expensive interior solutions.',
    timeEstimate: '1-2 days'
  },
  {
    number: 3,
    title: 'Repair Foundation Cracks',
    description: 'Seal cracks to prevent water infiltration through foundation walls.',
    details: [
      'Clean cracks with wire brush and vacuum out debris',
      'For hairline cracks: use hydraulic cement or epoxy injection',
      'For larger cracks (>1/4"): polyurethane foam injection is more flexible',
      'For actively leaking cracks: hydraulic cement sets even underwater',
      'Monitor repaired cracks—new cracks may indicate structural issues',
      'Consider professional assessment for horizontal or stair-step cracks'
    ],
    warning: 'Horizontal cracks or stair-step cracks in block foundations may indicate structural problems. Have a structural engineer evaluate before waterproofing.',
    timeEstimate: '2-4 hours per crack'
  },
  {
    number: 4,
    title: 'Apply Interior Waterproof Coatings',
    description: 'Create a moisture barrier on interior basement walls.',
    details: [
      'Clean walls thoroughly—remove efflorescence, paint, dirt',
      'Fill small holes with hydraulic cement',
      'Apply waterproof coating with masonry brush (not roller)',
      'Work coating into pores—this isn\'t paint, it\'s a sealant',
      'Apply second coat after first dries completely',
      'Coat extends 3-4 inches onto floor for full coverage'
    ],
    proTip: 'Products like Drylok or RadonSeal can handle minor seepage but won\'t stop hydrostatic pressure. They\'re best for dampness, not active water flow.',
    timeEstimate: '1-2 days'
  },
  {
    number: 5,
    title: 'Install Interior French Drain System',
    description: 'Capture water before it spreads across your basement floor.',
    details: [
      'Break up concrete around perimeter (6" wide, 12" deep)',
      'Excavate trench below footing level',
      'Lay landscape fabric, then 2" gravel bed',
      'Install perforated drain pipe (holes down) sloped toward sump',
      'Cover with gravel, then new concrete or drain grate',
      'Connect all drains to sump pit'
    ],
    warning: 'Interior French drains require breaking concrete and proper waterproofing experience. DIY errors can cause more damage. Consider professional installation.',
    timeEstimate: '2-4 days (professional)'
  },
  {
    number: 6,
    title: 'Install or Upgrade Sump Pump System',
    description: 'The heart of basement waterproofing—actively removes collected water.',
    details: [
      'Size pump for your water volume (1/3 HP for most homes, 1/2 HP for high water tables)',
      'Install in proper sump pit (minimum 18" deep, 24" diameter)',
      'Ensure check valve prevents backflow',
      'Discharge pipe should exit 10+ feet from foundation',
      'Add battery backup system for power outages',
      'Consider water-powered backup as secondary failsafe'
    ],
    proTip: 'In Northern Virginia, power outages during storms are common—exactly when you need your pump most. Battery backup is not optional, it\'s essential.',
    timeEstimate: '4-8 hours'
  },
  {
    number: 7,
    title: 'Control Basement Humidity',
    description: 'Even without visible water, excess humidity causes mold and musty odors.',
    details: [
      'Run dehumidifier to maintain 30-50% relative humidity',
      'Choose unit sized for your space (50-70 pint for most basements)',
      'Set up continuous drain to floor drain or sump pit',
      'Ensure dryer vents outside, not into basement',
      'Add exhaust fan if basement has bathroom',
      'Consider encapsulating crawl space if applicable'
    ],
    proTip: 'A good dehumidifier running continuously costs about $15-20/month but prevents thousands in mold remediation costs.',
    timeEstimate: 'Ongoing'
  },
  {
    number: 8,
    title: 'Consider Exterior Waterproofing',
    description: 'The gold standard—stops water before it reaches your foundation.',
    details: [
      'Excavate around foundation to footing level',
      'Clean and repair foundation walls',
      'Apply waterproof membrane (not just damp-proofing)',
      'Install dimple board drainage mat',
      'Lay new French drain at footing level',
      'Backfill with gravel, then soil, ensuring proper grade'
    ],
    warning: 'Exterior waterproofing costs $100-300 per linear foot but is the most effective long-term solution. Get multiple quotes from foundation specialists.',
    timeEstimate: '3-7 days'
  },
  {
    number: 9,
    title: 'Maintain Your Waterproofing System',
    description: 'Regular maintenance prevents system failures during storms.',
    details: [
      'Test sump pump monthly (pour water in pit)',
      'Replace battery backup every 2-3 years',
      'Clean gutters twice yearly',
      'Inspect and extend downspouts as needed',
      'Check dehumidifier filter and drain monthly',
      'Monitor basement humidity with hygrometer',
      'Inspect foundation annually for new cracks'
    ],
    proTip: 'Set calendar reminders for monthly sump pump tests. The 2 minutes spent testing beats the 2 weeks of restoration after a failure.',
    timeEstimate: '30 min/month'
  }
];

const faqs = [
  {
    question: 'How much does basement waterproofing cost?',
    answer: 'Costs vary widely: exterior grading fixes ($500-2,000), interior sealants ($500-1,500 DIY), interior French drain and sump pump ($3,000-10,000), and full exterior waterproofing ($15,000-40,000+). Start with the cheapest solutions first—many basement water problems are solved with proper grading and gutter maintenance.'
  },
  {
    question: 'Does interior or exterior waterproofing work better?',
    answer: 'Exterior waterproofing is more effective because it stops water before it reaches your foundation. However, it\'s significantly more expensive. Interior systems (French drains + sump pump) manage water that enters rather than blocking it, but are more affordable and less disruptive. Many homes do well with interior systems combined with proper exterior grading.'
  },
  {
    question: 'Will waterproofing increase my home value?',
    answer: 'Yes. A dry basement can add $10,000-25,000 in usable living space value. More importantly, evidence of water damage decreases home value by 10-15%. Waterproofing protects your investment and makes the home more marketable.'
  },
  {
    question: 'How long does basement waterproofing last?',
    answer: 'Interior French drain systems typically last 25-30 years with proper maintenance. Sump pumps should be replaced every 7-10 years. Exterior waterproofing membranes can last 50+ years. Regular maintenance is key to longevity.'
  },
  {
    question: 'Can I waterproof my basement myself?',
    answer: 'Some tasks are DIY-friendly: exterior grading, gutter maintenance, applying interior sealants, and installing a basic sump pump. However, French drain installation, crack injection, and exterior excavation typically require professional experience and equipment. Improper DIY waterproofing can void warranties and cause additional damage.'
  },
  {
    question: 'Is basement waterproofing covered by insurance?',
    answer: 'Standard homeowners insurance typically does not cover waterproofing as it\'s considered maintenance. However, if water damage results from a covered peril (like a burst pipe), the restoration would be covered. Flood damage requires separate flood insurance. Some policies cover sump pump failures with additional endorsements.'
  }
];

const BasementWaterproofingGuide: React.FC = () => {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Waterproof Your Basement',
    description: 'Comprehensive guide to basement waterproofing including interior and exterior solutions, sump pumps, French drains, and humidity control.',
    image: 'https://flood.doctor/images/basement-waterproofing-guide.jpg',
    totalTime: 'P7D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '500-40000'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Hydraulic cement' },
      { '@type': 'HowToSupply', name: 'Waterproof coating (Drylok or similar)' },
      { '@type': 'HowToSupply', name: 'Gravel (drainage stone)' },
      { '@type': 'HowToSupply', name: 'Perforated drain pipe' },
      { '@type': 'HowToSupply', name: 'Landscape fabric' },
      { '@type': 'HowToSupply', name: 'Sump pump with check valve' },
      { '@type': 'HowToSupply', name: 'Battery backup system' },
      { '@type': 'HowToSupply', name: 'Dehumidifier (50-70 pint)' },
      { '@type': 'HowToSupply', name: 'Discharge pipe and fittings' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Wire brush' },
      { '@type': 'HowToTool', name: 'Shop vacuum' },
      { '@type': 'HowToTool', name: 'Masonry brush' },
      { '@type': 'HowToTool', name: 'Concrete saw or jackhammer (for French drain)' },
      { '@type': 'HowToTool', name: 'Level' },
      { '@type': 'HowToTool', name: 'Shovel' },
      { '@type': 'HowToTool', name: 'Hygrometer' },
      { '@type': 'HowToTool', name: 'Caulk gun' }
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
      { label: 'Basement Waterproofing', path: '/guides/basement-waterproofing/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Basement Waterproofing Guide"
        description="Step-by-step basement waterproofing guide covering interior and exterior solutions, sump pumps, French drains, and humidity control. Prevent basement flooding in Northern Virginia."
        schema={pageSchema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-[#dadce0] pt-12 pb-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Guides', path: '/guides/' },
              { label: 'Basement Waterproofing', path: '/guides/basement-waterproofing/' }
            ]}
          />

          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> Prevention Guide
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              How to Waterproof Your Basement
            </h1>

            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-8">
              A dry basement starts with understanding where water comes from and systematically addressing each entry point. This guide walks you through solutions from simple grading fixes to complete waterproofing systems.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-[#5f6368] mb-8">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#1a73e8]" />
                9 comprehensive steps
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-[#1a73e8]" />
                14 min read
              </span>
              <span className="flex items-center gap-2">
                <DollarSign size={18} className="text-[#1a73e8]" />
                $500 - $40,000+ depending on scope
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg">
                <Phone size={18} className="mr-2" />
                Get Professional Assessment
              </Button>
              <Button to="/request/" variant="outline" size="lg">
                Request Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Assessment Tool */}
      <div className="bg-[#fef7e0] border-b border-[#f9e7a0] py-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center">
              <AlertTriangle size={20} />
            </div>
            <div>
              <h2 className="font-medium text-[#202124] text-lg mb-2">Identify Your Problem First</h2>
              <p className="text-[#5f6368] mb-3">Not all wet basements need the same solution. Answer these questions:</p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-[#5f6368]">
                <li className="flex items-center gap-2">
                  <Droplets size={14} className="text-blue-500" />
                  Water enters only during/after rain → <span className="font-medium">Likely surface water problem</span>
                </li>
                <li className="flex items-center gap-2">
                  <Droplets size={14} className="text-blue-500" />
                  Water present constantly → <span className="font-medium">Likely high water table</span>
                </li>
                <li className="flex items-center gap-2">
                  <Droplets size={14} className="text-blue-500" />
                  Water at wall-floor joint → <span className="font-medium">Hydrostatic pressure</span>
                </li>
                <li className="flex items-center gap-2">
                  <Droplets size={14} className="text-blue-500" />
                  Water through wall cracks → <span className="font-medium">Foundation crack repair needed</span>
                </li>
              </ul>
            </div>
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
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-display text-2xl font-medium text-[#202124]">
                          {step.title}
                        </h2>
                        {step.timeEstimate && (
                          <span className="text-xs px-2 py-1 bg-[#e8f0fe] text-[#1a73e8] rounded-full font-medium">
                            {step.timeEstimate}
                          </span>
                        )}
                      </div>
                      <p className="text-[#5f6368] text-lg mb-4">
                        {step.description}
                      </p>

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
                              <span className="font-bold text-red-700 text-sm uppercase tracking-wider">Warning</span>
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
                Basement Waterproofing FAQs
              </h2>
              <LazyFAQ data={faqs} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Cost Comparison */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-lg mb-4 flex items-center gap-2">
                  <DollarSign size={20} className="text-[#1a73e8]" />
                  Solution Cost Comparison
                </h3>
                <div className="space-y-3">
                  {[
                    { solution: 'Grading & Gutters', cost: '$500 - $2,000', diy: true },
                    { solution: 'Interior Sealants', cost: '$500 - $1,500', diy: true },
                    { solution: 'Crack Injection', cost: '$300 - $600/crack', diy: false },
                    { solution: 'Sump Pump System', cost: '$1,000 - $3,000', diy: true },
                    { solution: 'Interior French Drain', cost: '$3,000 - $10,000', diy: false },
                    { solution: 'Exterior Waterproofing', cost: '$15,000 - $40,000+', diy: false }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-[#dadce0] last:border-0">
                      <div>
                        <span className="text-[#202124] text-sm font-medium">{item.solution}</span>
                        {item.diy && (
                          <span className="ml-2 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">DIY Possible</span>
                        )}
                      </div>
                      <span className="text-[#1a73e8] font-medium text-sm">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* When to Call Pro */}
              <div className="bg-white rounded-2xl p-6 border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-lg mb-4 flex items-center gap-2">
                  <Phone size={20} className="text-[#1a73e8]" />
                  Call a Professional When
                </h3>
                <ul className="space-y-3">
                  {[
                    'Horizontal or stair-step foundation cracks',
                    'Water table is above basement floor level',
                    'Sump pump runs constantly',
                    'Mold covers more than 10 sq ft',
                    'Foundation walls are bowing inward',
                    'Water entry during dry weather',
                    'Need to install interior French drain'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <AlertTriangle size={14} className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-[#5f6368]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] rounded-2xl p-6 text-white">
                <h3 className="font-medium text-lg mb-2">Need Professional Help?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Free basement assessment from IICRC-certified technicians. We identify the real problem before recommending solutions.
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
                  <Link to="/guides/water-damage-cleanup/" className="flex items-center gap-3 text-[#1a73e8] hover:underline">
                    <ArrowRight size={16} />
                    <span>Water Damage Cleanup Guide</span>
                  </Link>
                  <Link to="/guides/mold-remediation/" className="flex items-center gap-3 text-[#1a73e8] hover:underline">
                    <ArrowRight size={16} />
                    <span>Mold Remediation Guide</span>
                  </Link>
                  <Link to="/guides/flood-preparation/" className="flex items-center gap-3 text-[#1a73e8] hover:underline">
                    <ArrowRight size={16} />
                    <span>Flood Preparation Guide</span>
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
            Already Have Water in Your Basement?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            If you're dealing with active flooding or water damage, don't wait for waterproofing—call our 24/7 emergency team for immediate extraction and restoration.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
              <Phone size={20} className="mr-2" />
              Emergency: (877) 497-0007
            </Button>
            <Button to="/services/residential/specialty-services/basement-flooding/" variant="secondary" size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
              Basement Flooding Services
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BasementWaterproofingGuide;
