import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import LazyFAQ from '../../components/ui/LazyFAQ';
import { generateBreadcrumbSchema, combineSchemas } from '../../utils/schema';
import {
  Phone,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Clock,
  DollarSign,
  ArrowRight,
  Droplets,
  Shield,
  Wrench,
  FileText,
  Power,
  ThermometerSnowflake,
  Camera,
  HomeIcon
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
    title: 'Shut Off the Water Supply Immediately',
    description: 'Stop the flooding at its source—every second counts.',
    details: [
      'Locate your main water shut-off valve (usually near the water meter)',
      'Common locations: basement, crawl space, near water heater, or outside near street',
      'Turn the valve clockwise until fully closed',
      'If you can\'t find main valve, shut off the street valve with a meter key',
      'For isolated pipes, use the nearest fixture shut-off valve',
      'Know your shut-off location BEFORE an emergency occurs'
    ],
    warning: 'If water is near electrical outlets, panels, or appliances, do NOT enter the area until power is shut off.',
    timeEstimate: '1-5 minutes'
  },
  {
    number: 2,
    title: 'Turn Off Electricity to Affected Areas',
    description: 'Prevent electrocution hazards before entering flooded areas.',
    details: [
      'Go to your electrical panel and locate breakers for affected areas',
      'Turn off breakers for any rooms with standing water',
      'If panel is in flooded area, call your utility company immediately',
      'Never wade through standing water to reach electrical panel',
      'Unplug electronics in affected areas after power is off',
      'Leave power off until a professional inspects'
    ],
    warning: 'Water and electricity are deadly. If you cannot safely reach your panel, evacuate and call 911 or your utility company.',
    timeEstimate: '2-5 minutes'
  },
  {
    number: 3,
    title: 'Open Faucets to Drain Remaining Water',
    description: 'Relieve pressure and empty pipes to minimize additional flooding.',
    details: [
      'Open all faucets (hot and cold) to drain water from the system',
      'Start with the lowest level of your home',
      'Flush all toilets to empty tanks and bowls',
      'Open outdoor spigots if accessible',
      'This reduces pressure and limits additional leakage',
      'Leave faucets open until completely drained'
    ],
    proTip: 'If the burst is on a hot water line, turn off your water heater first to prevent damage to the unit.',
    timeEstimate: '5-15 minutes'
  },
  {
    number: 4,
    title: 'Document the Damage for Insurance',
    description: 'Photograph everything before cleanup for your insurance claim.',
    details: [
      'Take photos and videos of the burst pipe location',
      'Document all water damage—walls, floors, belongings',
      'Photograph the water level on walls (shows extent of flooding)',
      'Capture serial numbers and model numbers of damaged items',
      'Note the time of discovery and when you took action',
      'Save any pieces of the burst pipe if accessible'
    ],
    proTip: 'Use your phone\'s video mode and narrate what you see. This creates a timestamped record that insurers value.',
    timeEstimate: '10-15 minutes'
  },
  {
    number: 5,
    title: 'Call Emergency Restoration',
    description: 'Professional water extraction and drying prevents mold growth.',
    details: [
      'Call a water damage restoration company immediately',
      'Reputable companies offer 24/7 emergency response',
      'Ask about their response time—under 60 minutes is ideal',
      'Confirm they\'re IICRC certified',
      'Ask if they work directly with insurance companies',
      'Get a verbal estimate before work begins if possible'
    ],
    proTip: 'Don\'t wait until morning—mold begins growing within 24-48 hours. Overnight delays dramatically increase restoration costs.',
    timeEstimate: '5 minutes to call'
  },
  {
    number: 6,
    title: 'Begin Water Removal',
    description: 'Remove standing water while waiting for professionals.',
    details: [
      'Use a wet/dry vacuum if available (never a regular vacuum)',
      'Mop and bucket to remove as much water as possible',
      'Push water toward floor drains if present',
      'Remove area rugs before they become waterlogged',
      'Lift furniture onto blocks or aluminum foil',
      'Do NOT use electrical appliances in standing water'
    ],
    warning: 'If flooding is more than a few inches deep, wait for professionals with proper equipment. Your safety comes first.',
    timeEstimate: '30-60 minutes'
  }
];

const faqs = [
  {
    question: 'How quickly can pipes burst cause damage?',
    answer: 'A burst pipe can release 400+ gallons of water per hour. In just 4-7 minutes, water can soak through drywall and reach electrical systems. Within 24 hours, mold begins to grow. Quick action is critical—every minute of delay increases damage exponentially.'
  },
  {
    question: 'What causes pipes to burst?',
    answer: 'The most common causes are: freezing (water expands 9% when frozen), corrosion in older pipes, high water pressure (over 80 PSI), tree root intrusion, and manufacturing defects. In Northern Virginia, freeze events are the leading cause during winter months.'
  },
  {
    question: 'Does homeowners insurance cover burst pipes?',
    answer: 'Yes, most homeowners policies cover sudden and accidental burst pipes and resulting water damage. However, damage from gradual leaks, lack of maintenance, or frozen pipes in unheated areas may be excluded. Document everything and contact your insurer immediately.'
  },
  {
    question: 'How do I prevent pipes from bursting in winter?',
    answer: 'Keep your home heated to at least 55°F, even when away. Let faucets drip during extreme cold. Insulate exposed pipes in attics, crawl spaces, and garages. Open cabinet doors to let warm air reach pipes. Disconnect and drain outdoor hoses before freezing weather.'
  },
  {
    question: 'Where is my main water shut-off valve?',
    answer: 'The main shut-off is typically located where the water line enters your home—often in the basement, crawl space, or utility area. In slab homes, check near the water heater or in the garage. There\'s also a street-side shut-off near your water meter that requires a meter key.'
  },
  {
    question: 'Can I fix a burst pipe myself?',
    answer: 'Temporary fixes like pipe clamps or repair sleeves can stop minor leaks, but burst pipes should be professionally repaired. Improper repairs can lead to future failures. Focus on stopping the water, documenting damage, and calling professionals for proper repair and restoration.'
  }
];

const BurstPipeGuide: React.FC = () => {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Handle a Burst Pipe Emergency',
    description: 'Emergency response guide for burst pipes. Learn how to stop the water, minimize damage, document for insurance, and get professional help fast.',
    image: 'https://flood.doctor/images/burst-pipe-emergency-guide.jpg',
    totalTime: 'PT2H',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '1000-5000'
    },
    supply: [
      { '@type': 'HowToSupply', name: 'Wet/dry vacuum (if available)' },
      { '@type': 'HowToSupply', name: 'Mop and buckets' },
      { '@type': 'HowToSupply', name: 'Towels' },
      { '@type': 'HowToSupply', name: 'Furniture blocks or aluminum foil' },
      { '@type': 'HowToSupply', name: 'Camera or smartphone for documentation' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Flashlight' },
      { '@type': 'HowToTool', name: 'Water meter key (for street shut-off)' },
      { '@type': 'HowToTool', name: 'Adjustable wrench' }
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
      { label: 'Burst Pipe Emergency', path: '/guides/burst-pipe-emergency/' }
    ]),
    howToSchema,
    faqSchema
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="How to Handle a Burst Pipe Emergency | Quick Response Guide"
        description="Emergency burst pipe response guide. Step-by-step instructions to stop the water, prevent damage, and get professional help. 24/7 emergency service in Northern Virginia."
        schema={pageSchema}
      />

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-2 font-medium">
            <Zap size={18} className="animate-pulse" />
            Pipe burst right now?
          </span>
          <a href="tel:8774970007" className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-50 transition-colors flex items-center gap-2">
            <Phone size={16} />
            Call (877) 497-0007 — 60-min response
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-white to-blue-50 border-b border-[#dadce0] pt-12 pb-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Guides', path: '/guides/' },
              { label: 'Burst Pipe Emergency', path: '/guides/burst-pipe-emergency/' }
            ]}
          />

          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} /> Emergency Response
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-medium text-[#202124] mb-6 leading-tight">
              How to Handle a Burst Pipe Emergency
            </h1>

            <p className="font-sans text-xl text-[#5f6368] leading-relaxed mb-8">
              A burst pipe can dump hundreds of gallons per hour into your home. The first 30 minutes of response determine whether you face a simple cleanup or major restoration. Here's exactly what to do.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-[#5f6368] mb-8">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                6 critical steps
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-[#1a73e8]" />
                8 min read
              </span>
              <span className="flex items-center gap-2">
                <Zap size={18} className="text-red-500" />
                Time-critical guide
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="tel:8774970007" variant="primary" size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone size={18} className="mr-2" />
                Call Emergency Line Now
              </Button>
              <Button to="/services/residential/restoration-services/water-damage-restoration/" variant="outline" size="lg">
                Our Emergency Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Time Warning */}
      <div className="bg-red-50 border-b border-red-200 py-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { time: '4-7 min', event: 'Water reaches drywall & electrical', icon: Droplets },
              { time: '24-48 hrs', event: 'Mold begins growing', icon: AlertTriangle },
              { time: '1 week', event: 'Structural damage accelerates', icon: HomeIcon },
              { time: '2+ weeks', event: 'Mold becomes health hazard', icon: Shield }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-red-200">
                <item.icon size={24} className="text-red-600 mx-auto mb-2" />
                <div className="text-red-600 font-bold text-lg">{item.time}</div>
                <div className="text-[#5f6368] text-sm">{item.event}</div>
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-display text-2xl font-medium text-[#202124]">
                          {step.title}
                        </h2>
                        {step.timeEstimate && (
                          <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">
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
                              <span className="font-bold text-red-700 text-sm uppercase tracking-wider">Safety Warning</span>
                              <p className="text-red-800 mt-1">{step.warning}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Connector Line */}
                  {step.number < steps.length && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-red-200 -mb-2" style={{ height: 'calc(100% - 3rem)' }} />
                  )}
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="font-display text-3xl font-medium text-[#202124] mb-8 pb-4 border-b-4 border-[#1a73e8]">
                Burst Pipe FAQs
              </h2>
              <LazyFAQ data={faqs} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white">
                <h3 className="font-medium text-xl mb-2">Pipe Burst Right Now?</h3>
                <p className="text-red-100 text-sm mb-4">
                  Our emergency team responds in 60 minutes across Northern Virginia. 24/7, including holidays.
                </p>
                <Button href="tel:8774970007" variant="secondary" size="lg" className="w-full bg-white text-red-600 border-none hover:bg-red-50">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>

              {/* Shut-Off Valve Finder */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-lg mb-4 flex items-center gap-2">
                  <Power size={20} className="text-[#1a73e8]" />
                  Find Your Shut-Off Valve
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { location: 'Basement/Crawl Space', description: 'Near water heater or where main line enters' },
                    { location: 'Utility Room', description: 'Near water heater or washing machine' },
                    { location: 'Garage', description: 'Often on the interior wall' },
                    { location: 'Near Street', description: 'Water meter box with shut-off (needs meter key)' }
                  ].map((item, i) => (
                    <div key={i} className="py-2 border-b border-[#dadce0] last:border-0">
                      <span className="text-[#202124] font-medium block">{item.location}</span>
                      <span className="text-[#5f6368] text-xs">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prevention Tips */}
              <div className="bg-white rounded-2xl p-6 border border-[#dadce0]">
                <h3 className="font-medium text-[#202124] text-lg mb-4 flex items-center gap-2">
                  <ThermometerSnowflake size={20} className="text-[#1a73e8]" />
                  Prevent Future Burst Pipes
                </h3>
                <ul className="space-y-3">
                  {[
                    'Keep home above 55°F, even when away',
                    'Insulate exposed pipes in cold areas',
                    'Let faucets drip during extreme cold',
                    'Open cabinet doors to expose pipes to heat',
                    'Disconnect garden hoses before winter',
                    'Know your shut-off valve location'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={14} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-[#5f6368]">{item}</span>
                    </li>
                  ))}
                </ul>
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
                  <Link to="/guides/water-damage-insurance-claim/" className="flex items-center gap-3 text-[#1a73e8] hover:underline">
                    <ArrowRight size={16} />
                    <span>Insurance Claim Guide</span>
                  </Link>
                  <Link to="/guides/basement-waterproofing/" className="flex items-center gap-3 text-[#1a73e8] hover:underline">
                    <ArrowRight size={16} />
                    <span>Basement Waterproofing Guide</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Don't Wait — Water Damage Escalates Fast
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Our IICRC-certified team responds in 60 minutes across Northern Virginia and DC. We work with all major insurance companies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-red-600 border-none hover:bg-red-50">
              <Phone size={20} className="mr-2" />
              Call Now: (877) 497-0007
            </Button>
            <Button to="/request/" variant="secondary" size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white/10">
              Request Emergency Service
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BurstPipeGuide;
