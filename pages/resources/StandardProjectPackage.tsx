import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { generateBreadcrumbSchema, combineSchemas } from '../../utils/schema';
import { siteConfig } from '../../config/site';
import { SITE_INFO, SITE_PHONE, SERVICE_AREA } from '../../config/constants';
import {
  Package,
  CheckCircle2,
  XCircle,
  Clock,
  FileText,
  Camera,
  Droplets,
  Wind,
  Shield,
  AlertTriangle,
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Gauge,
  MapPin,
  Users,
  BadgeCheck,
  Info
} from 'lucide-react';

interface ServiceItem {
  text: string;
  detail?: string;
}

interface ServiceGroup {
  title: string;
  icon: React.ComponentType<any>;
  timeframe?: string;
  items: ServiceItem[];
}

interface NotIncludedCategory {
  title: string;
  items: string[];
}

interface DocumentationPhase {
  phase: string;
  timeframe: string;
  deliverables: Array<{
    name: string;
    description: string;
  }>;
}

// Schema definitions
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteConfig.SITE_URL}/resources/standard-project-package/#service`,
  name: 'Standard Water Damage Restoration Package',
  description: 'Complete emergency mitigation and structural drying to IICRC S500 standards. Includes water extraction, commercial drying equipment, daily monitoring, antimicrobial treatment, and documentation for insurance claims.',
  serviceType: 'Water Damage Restoration',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.SITE_URL}/#organization`,
    name: SITE_INFO.name,
    telephone: SITE_PHONE.display,
    priceRange: '$2,500-$25,000',
  },
  areaServed: SERVICE_AREA.regions.map((region: string) => ({
    '@type': 'State',
    name: region
  })),
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: `${siteConfig.SITE_URL}/request/`,
    servicePhone: SITE_PHONE.tel,
  },
  hoursAvailable: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    priceRange: '$2,500-$25,000',
    eligibleRegion: {
      '@type': 'State',
      name: 'Virginia'
    }
  },
  termsOfService: `${siteConfig.SITE_URL}/terms/`,
  serviceOutput: 'Dried structure meeting IICRC S500 standards with complete documentation for insurance claims'
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { label: 'Home', path: '/' },
  { label: 'Resources', path: '/resources/' },
  { label: 'Standard Project Package', path: '/resources/standard-project-package/' }
]);

// Service groups data
const serviceGroups: ServiceGroup[] = [
  {
    title: 'Emergency Mitigation',
    icon: AlertTriangle,
    timeframe: '0-4 hours',
    items: [
      { text: '24/7 emergency dispatch and arrival within 60 minutes' },
      { text: 'Initial damage assessment and classification', detail: 'IICRC water class 1-4, category 1-3' },
      { text: 'Source identification and containment', detail: 'If safe and accessible' },
      { text: 'Emergency board-up or tarp service', detail: 'If needed' },
      { text: 'Safety hazard documentation', detail: 'Electrical, structural, contamination' }
    ]
  },
  {
    title: 'Water Extraction & Removal',
    icon: Droplets,
    timeframe: '4-12 hours',
    items: [
      { text: 'Truck-mounted or portable extraction equipment' },
      { text: 'Standing water removal', detail: 'All depths' },
      { text: 'Carpet/pad water extraction', detail: 'If salvageable' },
      { text: 'Hardwood floor water extraction' },
      { text: 'Basement sump/sewage ejector pump operation' },
      { text: 'Wet debris removal and disposal' }
    ]
  },
  {
    title: 'Structural Drying & Monitoring',
    icon: Wind,
    timeframe: '3-7 days typical',
    items: [
      { text: 'Commercial air movers (fans) placement and rotation' },
      { text: 'Commercial dehumidifiers', detail: 'Refrigerant or desiccant based on conditions' },
      { text: 'Air scrubbers/HEPA filtration', detail: 'Airborne particulate control' },
      { text: 'Daily moisture readings with thermal imaging' },
      { text: 'Humidity monitoring and adjustment' },
      { text: 'Drying documentation logs', detail: 'Daily photos, moisture maps, equipment counts' },
      { text: 'Psychrometric calculations and drying goal verification' }
    ]
  },
  {
    title: 'Cleaning & Antimicrobial Treatment',
    icon: Shield,
    timeframe: 'Throughout project',
    items: [
      { text: 'HEPA vacuuming of affected areas' },
      { text: 'Anti-microbial spray application on all affected surfaces' },
      { text: 'Deodorization treatment', detail: 'Hydroxyl generators or ozone if needed' },
      { text: 'Surface cleaning and sanitization' },
      { text: 'Contents cleaning', detail: 'Light items, non-porous surfaces' }
    ]
  },
  {
    title: 'Containment & Protection',
    icon: Package,
    timeframe: 'Setup day 1',
    items: [
      { text: 'Plastic sheeting barriers', detail: 'To unaffected areas' },
      { text: 'Floor protection', detail: 'Ram board or carpet protection film' },
      { text: 'Negative air pressure setup', detail: 'If contaminated water' },
      { text: 'Dust control measures' }
    ]
  },
  {
    title: 'Documentation & Reporting',
    icon: FileText,
    timeframe: 'Throughout & final',
    items: [
      { text: 'Pre-mitigation photo/video documentation', detail: '100+ photos minimum' },
      { text: 'Daily progress photos and moisture readings' },
      { text: 'Equipment inventory logs', detail: 'What\'s running, where, how long' },
      { text: 'Moisture map diagrams', detail: 'Floor plans with readings' },
      { text: 'Psychrometric data logs' },
      { text: 'Certificate of Satisfactory Completion', detail: 'When dry' },
      { text: 'Final photo documentation showing dry conditions' },
      { text: 'Insurance-ready claim package', detail: 'Xactimate estimate + documentation' }
    ]
  }
];

// What's NOT included data
const notIncludedCategories: NotIncludedCategory[] = [
  {
    title: 'Reconstruction Services',
    items: [
      'Drywall removal, replacement, and finishing',
      'Flooring removal, replacement, installation (carpet, hardwood, tile, LVP)',
      'Paint and finish work',
      'Cabinetry repair or replacement',
      'Trim/baseboard replacement',
      'Door/window replacement'
    ]
  },
  {
    title: 'Specialized Restoration',
    items: [
      'Mold remediation (if growth exceeds 10 sq ft or in HVAC)',
      'Contents pack-out and storage',
      'Document/photo restoration',
      'Electronics restoration',
      'Art/antique restoration',
      'Structural repairs (framing, subfloor, foundation)'
    ]
  },
  {
    title: 'Upgrades & Optional Services',
    items: [
      'Preventive treatments (mold-resistant coatings)',
      'Indoor air quality testing',
      'Duct cleaning',
      'Carpet replacement with upgraded materials',
      'Waterproofing systems installation',
      'Sump pump installation or upgrade'
    ]
  },
  {
    title: 'Pre-existing Conditions',
    items: [
      'Prior water damage or mold growth unrelated to current event',
      'Deferred maintenance issues (rotted wood, prior leaks)',
      'Code upgrades required by permit (unless mandated by damage)'
    ]
  }
];

// Documentation deliverables data
const documentationPhases: DocumentationPhase[] = [
  {
    phase: 'Initial Assessment (Day 0)',
    timeframe: 'First 2-4 hours',
    deliverables: [
      {
        name: 'Pre-mitigation photo package',
        description: '100+ photos covering all affected areas, water source, damage extent, valuables, all rooms/angles'
      },
      {
        name: 'Pre-mitigation video walkthrough',
        description: 'Narrated, 5-15 minutes covering all damage'
      },
      {
        name: 'Moisture map diagram',
        description: 'Floor plan with initial readings marked'
      },
      {
        name: 'Water damage classification report',
        description: 'Category 1/2/3, Class 1/2/3/4'
      },
      {
        name: 'Safety hazard documentation',
        description: 'Electrical, structural, biological hazards'
      },
      {
        name: 'Equipment placement diagram',
        description: 'Showing air movers, dehumidifiers, containment'
      }
    ]
  },
  {
    phase: 'Daily During Active Drying (Days 1-7)',
    timeframe: 'Each day',
    deliverables: [
      {
        name: 'Moisture readings log',
        description: 'All affected areas, minimum 6 readings per room'
      },
      {
        name: 'Equipment inventory',
        description: 'Asset numbers, locations, runtime hours'
      },
      {
        name: 'Progress photos',
        description: 'Minimum 10 per day, time-stamped'
      },
      {
        name: 'Psychrometric calculations',
        description: 'Temperature, humidity, GPP, vapor pressure'
      }
    ]
  },
  {
    phase: 'Final Completion (Last Day)',
    timeframe: 'Project completion',
    deliverables: [
      {
        name: 'Certificate of Satisfactory Completion',
        description: 'Signed by certified technician'
      },
      {
        name: 'Final moisture readings log',
        description: 'All areas at or below drying goals'
      },
      {
        name: 'Final photo package',
        description: '50+ photos showing dry conditions'
      },
      {
        name: 'Final moisture map diagram',
        description: 'Floor plan with completion readings'
      },
      {
        name: 'Total equipment hours summary',
        description: 'Per asset, for insurance billing'
      },
      {
        name: 'Psychrometric data summary',
        description: 'Showing drying progression over time'
      }
    ]
  },
  {
    phase: 'Insurance Claim Package (Upon Request)',
    timeframe: 'Delivered within 24 hours',
    deliverables: [
      {
        name: 'Xactimate estimate',
        description: 'Line-item, industry-standard format'
      },
      {
        name: 'Complete photo documentation',
        description: 'Initial + daily + final compiled'
      },
      {
        name: 'All moisture logs and maps',
        description: 'Complete record from start to finish'
      },
      {
        name: 'Equipment inventory and runtime totals',
        description: 'Detailed billing support'
      },
      {
        name: 'IICRC certification proof',
        description: 'For technicians on job'
      },
      {
        name: 'Invoice and payment records',
        description: 'For your records and reimbursement'
      }
    ]
  }
];

// FAQ data
const faqs = [
  {
    question: 'How long does the Standard Package take from start to finish?',
    answer: 'Typical timeline: 4-10 days total. Emergency response within 60 minutes, initial extraction and setup in 4-8 hours, active drying 3-7 days, final verification 1 day. Class 1 (minor) dries in 2-3 days. Class 3 (severe) takes 5-7+ days. We monitor daily and adjust equipment until materials reach IICRC drying goals.'
  },
  {
    question: 'Is reconstruction included in the Standard Package?',
    answer: 'No. The Standard Package focuses on emergency mitigation and drying your property to safe, stable conditions. Reconstruction (drywall, flooring, paint, trim) is quoted separately after drying is complete. This allows insurance adjusters to assess dry conditions before finalizing rebuild scope. Approximately 70% of projects require some reconstruction—we provide detailed estimates once drying is verified.'
  },
  {
    question: 'What if mold is found during the project?',
    answer: 'Minor surface mold (under 10 sq ft) is treated with antimicrobial spray included in the Standard Package. Extensive mold growth (10+ sq ft) or mold inside HVAC systems requires separate mold remediation protocols and pricing. We\'ll notify you immediately if we find conditions requiring upgraded services. Most insurance policies cover mold if it resulted from the covered water damage event.'
  },
  {
    question: 'How much does the Standard Package cost?',
    answer: 'Pricing depends on square footage, damage class, water category, and drying duration. Typical range: Minor (Class 1, <500 sq ft, clean water): $2,500-$5,000. Moderate (Class 2, 500-1,000 sq ft, gray water): $5,000-$12,000. Severe (Class 3, 1,000+ sq ft, extensive damage): $12,000-$25,000+. Most homeowners insurance covers emergency mitigation. Your out-of-pocket cost is typically your deductible ($500-$2,500). We provide free estimates and work directly with insurance adjusters.'
  },
  {
    question: 'Will my insurance cover the Standard Package services?',
    answer: 'Most homeowners policies cover "sudden and accidental" water damage mitigation. Covered events include burst pipes, appliance failures, roof leaks from storms, and HVAC condensation. NOT typically covered: flooding from external sources (requires flood insurance), sewer backups (requires endorsement), gradual damage from neglected maintenance, or lack-of-heat frozen pipes. We help document your claim to maximize coverage.'
  },
  {
    question: 'Do I need to be present during the drying phase?',
    answer: 'Initial assessment requires your presence (60-90 minutes). During active drying, we need 24/7 equipment access but you don\'t need to be home for daily checks (15-30 minutes per visit). We\'ll text/call before arriving and provide daily updates with photos. Final verification requires your presence to review completion and sign off (30 minutes).'
  },
  {
    question: 'What happens to my wet belongings and furniture?',
    answer: 'Light surface cleaning of contents is included in the Standard Package. If items require deep cleaning, drying in controlled environment, or restoration, we offer contents pack-out services (quoted separately). Most furniture can remain on-site during drying if elevated. We\'ll advise during initial assessment which items need removal and which can stay.'
  },
  {
    question: 'How do you verify everything is completely dry?',
    answer: 'We use four verification methods: (1) Moisture meter readings of all materials (wood <15%, concrete <5%), (2) Thermal imaging showing no residual moisture, (3) Ambient humidity readings (<50%), (4) Visual inspection for staining or texture changes. You receive a Certificate of Satisfactory Completion with final readings documented. If materials don\'t meet IICRC standards, we keep drying at no additional equipment cost.'
  },
  {
    question: 'What if additional damage is discovered during drying?',
    answer: 'As materials dry, hidden damage sometimes becomes visible (wall cavities, subfloors, ceiling voids). We document all findings with photos and notify you immediately. Revised estimates are provided for approval before proceeding. Insurance adjusters expect supplements—approximately 40% of claims have revisions once walls are open. Our documentation ensures these changes are covered.'
  },
  {
    question: 'Can I stay in my home during the restoration?',
    answer: 'Most projects allow partial occupancy. We\'ll contain affected areas with plastic barriers and use air scrubbers to control dust/odors. Equipment noise (fans, dehumidifiers) runs 24/7—white noise machines help. Category 3 (black water) events may require temporary relocation for safety—check with your insurance about Additional Living Expenses coverage if displacement is needed.'
  },
  {
    question: 'Do you work with all insurance companies?',
    answer: 'Yes. We work with all major carriers (State Farm, Allstate, USAA, Liberty Mutual, Nationwide, Farmers, etc.) and provide Xactimate estimates in the industry-standard format adjusters expect. We can work on assignment (insurance pays us directly) or client-direct payment with reimbursement. We help bridge any gaps between adjuster estimates and actual scope needed.'
  },
  {
    question: 'What certifications do your technicians have?',
    answer: 'All field technicians are IICRC-certified in Water Damage Restoration (WRT). Lead technicians hold Advanced Structural Drying (ASD) certification. Our company holds Virginia Class A Contractor License #2705155505, DC Home Improvement License #420217000032, and Maryland MHIC #134632. We carry $2M general liability and workers\' compensation insurance.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

const StandardProjectPackage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <PageMeta
        title="Standard Water Damage Restoration Package"
        description="Complete scope definition for our standard water damage restoration service: emergency mitigation, structural drying, monitoring, and documentation. IICRC S500 compliant."
        canonicalUrl="/resources/standard-project-package/"
        schema={combineSchemas([serviceSchema, faqSchema, breadcrumbSchema])}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Resources', path: '/resources/' },
          { label: 'Standard Project Package', path: '/resources/standard-project-package/' }
        ]}
      />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-[#1a73e8] rounded-lg">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Standard Water Damage Restoration Package
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Complete emergency mitigation and structural drying to IICRC S500 standards.
                We extract standing water, stabilize your property within 24-48 hours, and return
                all structural materials to safe, dry conditions—documented at every step for your
                insurance claim.
              </p>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-[#1a73e8]" />
                <span className="font-semibold text-gray-900">Response Time</span>
              </div>
              <p className="text-2xl font-bold text-[#1a73e8]">60 Minutes</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="w-5 h-5 text-[#1a73e8]" />
                <span className="font-semibold text-gray-900">Typical Duration</span>
              </div>
              <p className="text-2xl font-bold text-[#1a73e8]">4-10 Days</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <BadgeCheck className="w-5 h-5 text-[#1a73e8]" />
                <span className="font-semibold text-gray-900">Standard</span>
              </div>
              <p className="text-2xl font-bold text-[#1a73e8]">IICRC S500</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Camera className="w-5 h-5 text-[#1a73e8]" />
                <span className="font-semibold text-gray-900">Documentation</span>
              </div>
              <p className="text-2xl font-bold text-[#1a73e8]">Complete</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <Link to="/request/">
              <Button size="lg" className="bg-[#1a73e8] hover:bg-[#1557b0]">
                Request Service Now
              </Button>
            </Link>
            <Link to="/request/">
              <Button size="lg" variant="outline" className="border-[#1a73e8] text-[#1a73e8]">
                Request Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-4 border-b-4 border-[#1a73e8]">
            What's Included
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Our Standard Package covers complete emergency mitigation and structural drying.
            Every service is performed to IICRC S500 standards and documented for your insurance claim.
          </p>

          <div className="space-y-8">
            {serviceGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-[#1a73e8] rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{group.title}</h3>
                        {group.timeframe && (
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {group.timeframe}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-3">
                        {group.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-gray-700">{item.text}</span>
                              {item.detail && (
                                <span className="text-sm text-gray-500 ml-1">({item.detail})</span>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's NOT Included Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-4 border-b-4 border-[#1a73e8]">
            What's NOT Included (Quoted Separately)
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            The Standard Package focuses on emergency mitigation and drying. The following services
            require separate assessment and pricing:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {notIncludedCategories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[#1a73e8] shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 font-medium mb-2">
                  Why is reconstruction quoted separately?
                </p>
                <p className="text-gray-600">
                  Insurance adjusters need to assess dry conditions before finalizing rebuild scope.
                  Approximately 70% of projects require some reconstruction—we provide detailed estimates
                  once drying is verified. This ensures accurate pricing and prevents disputes with
                  your insurance company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Assumptions Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-4 border-b-4 border-[#1a73e8]">
            Standard Assumptions
          </h2>

          <div className="space-y-8">
            {/* Property Access */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#1a73e8]" />
                Property Access
              </h3>
              <ul className="space-y-2 ml-7">
                <li className="text-gray-700">• 24/7 unobstructed access during active drying phase</li>
                <li className="text-gray-700">• Power available at all times for equipment operation</li>
                <li className="text-gray-700">• Utilities functioning (electricity, plumbing shut off if needed)</li>
                <li className="text-gray-700">• Safe working environment (no electrical hazards, structural stability)</li>
              </ul>
            </div>

            {/* Water Damage Classification */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-[#1a73e8]" />
                Water Damage Classification (IICRC S500)
              </h3>
              <div className="ml-7 space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-semibold text-gray-900 mb-1">Category 1 (Clean Water)</p>
                  <p className="text-gray-600">From supply lines, rainwater, or clean sources</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-gray-900 mb-1">Category 2 (Gray Water)</p>
                  <p className="text-gray-600">From dishwashers, washing machines, toilet overflow (no feces)</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="font-semibold text-gray-900 mb-1">Category 3 (Black Water)</p>
                  <p className="text-gray-600">Sewage, flooding, or stagnant water (requires hazmat protocols)</p>
                </div>
              </div>
            </div>

            {/* Damage Class */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Gauge className="w-5 h-5 text-[#1a73e8]" />
                Damage Class (IICRC S500)
              </h3>
              <div className="ml-7 grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Class 1</p>
                  <p className="text-sm text-gray-600">Minimal absorption, fast drying (2-3 days)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Class 2</p>
                  <p className="text-sm text-gray-600">Significant absorption, standard drying (3-5 days)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Class 3</p>
                  <p className="text-sm text-gray-600">Greatest absorption, longest drying (5-7+ days)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-900">Class 4</p>
                  <p className="text-sm text-gray-600">Specialty drying (hardwood, plaster, concrete)</p>
                </div>
              </div>
            </div>

            {/* Drying Goals */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-[#1a73e8]" />
                Drying Goals (IICRC S500 Standards)
              </h3>
              <ul className="space-y-2 ml-7">
                <li className="text-gray-700">• Wood moisture content: <strong>&lt;15%</strong> (measured with pin-type moisture meter)</li>
                <li className="text-gray-700">• Concrete moisture content: <strong>&lt;5%</strong> (measured with calcium chloride test or relative humidity probe)</li>
                <li className="text-gray-700">• Ambient relative humidity: <strong>&lt;50%</strong></li>
                <li className="text-gray-700">• Thermal imaging: No residual moisture signatures</li>
              </ul>
            </div>

            {/* Typical Timelines */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#1a73e8]" />
                Typical Timelines
              </h3>
              <div className="ml-7">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Emergency response</span>
                    <span className="font-semibold text-[#1a73e8]">30-90 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Initial extraction</span>
                    <span className="font-semibold text-[#1a73e8]">2-4 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Equipment setup</span>
                    <span className="font-semibold text-[#1a73e8]">2-4 hours</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Active drying phase</span>
                    <span className="font-semibold text-[#1a73e8]">3-7 days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-gray-700">Final verification</span>
                    <span className="font-semibold text-[#1a73e8]">1 day</span>
                  </div>
                </div>
                <div className="p-4 bg-[#1a73e8] text-white rounded-lg">
                  <p className="font-semibold text-lg">Total Project Duration: 4-10 days</p>
                  <p className="text-sm text-blue-100">From emergency response to certificate of completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Deliverables Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-4 border-b-4 border-[#1a73e8]">
            Required Documentation Deliverables
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Every project includes comprehensive documentation for your insurance claim.
            All deliverables are provided digitally and organized for easy submission.
          </p>

          <div className="space-y-6">
            {documentationPhases.map((phase, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <p className="text-sm text-gray-500 mt-1">{phase.timeframe}</p>
                  </div>
                  <Camera className="w-6 h-6 text-[#1a73e8]" />
                </div>

                <div className="space-y-3">
                  {phase.deliverables.map((deliverable, delivIdx) => (
                    <div key={delivIdx} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                      <FileText className="w-5 h-5 text-[#1a73e8] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{deliverable.name}</p>
                        <p className="text-sm text-gray-600">{deliverable.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Camera className="w-6 h-6 text-[#1a73e8] shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 font-medium mb-2">
                  Why is documentation so important?
                </p>
                <p className="text-gray-600">
                  Comprehensive documentation increases insurance settlements by 15-30% on average.
                  Photos, moisture logs, and equipment tracking prove the extent of damage and
                  justify the restoration work performed. Our documentation packages are designed
                  to exceed adjuster requirements and streamline your claim approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-4 border-b-4 border-[#1a73e8]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 mt-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#1a73e8] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1a73e8] to-[#1557b0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our Standard Package provides complete mitigation and drying to IICRC standards.
            We respond 24/7 and work directly with your insurance company.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request/">
              <Button size="lg" className="bg-white text-[#1a73e8] hover:bg-gray-100">
                Request Service Now
              </Button>
            </Link>
            <Link to="/request/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Services
              </Button>
            </Link>
            <Link to="/resources/cost-calculator/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <ArrowRight className="w-5 h-5 mr-2" />
                Cost Calculator
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-white">
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">60-Minute Response</p>
              <p className="text-sm text-blue-100">24/7 emergency dispatch</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur">
              <BadgeCheck className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">IICRC Certified</p>
              <p className="text-sm text-blue-100">All technicians certified</p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg backdrop-blur">
              <Users className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold mb-1">Insurance Assistance</p>
              <p className="text-sm text-blue-100">We work with all carriers</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-blue-100">
            Virginia License #2705155505 • DC License #420217000032 • Maryland MHIC #134632
          </p>
        </div>
      </section>
    </div>
  );
};

export default StandardProjectPackage;
