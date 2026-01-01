import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Shield,
  Award,
  Zap,
  Truck,
  Wind,
  Droplets,
  FileText,
  Home
} from 'lucide-react';

const FairfaxFloodCleanup: React.FC = () => {
  const faqs = [
    {
      question: "How fast can you respond to flood emergencies in Fairfax?",
      answer: "We provide 24/7 emergency flood cleanup throughout Fairfax County with response times under 60 minutes. Our rapid deployment team is always on standby for Burke, Mantua, Fairfax Station, Fair Oaks, and all Fairfax communities. Call 703-665-0505 immediately for emergency dispatch."
    },
    {
      question: "What should I do immediately after flooding in my Fairfax home?",
      answer: "First, ensure safety—turn off electricity if safe to do so and avoid standing water. Call 703-665-0505 immediately. Document damage with photos for insurance. Move valuables to higher ground if possible. Do not attempt major cleanup yourself, as contaminated floodwater requires professional handling and PPE."
    },
    {
      question: "Does flood insurance cover cleanup costs in Fairfax?",
      answer: "If you have a separate flood insurance policy (NFIP or private), it covers flood damage cleanup and restoration. Standard homeowners insurance does not cover flooding. We work directly with NFIP adjusters and all major flood insurers to streamline your claim and maximize coverage."
    },
    {
      question: "How long does flood cleanup take in Fairfax?",
      answer: "Water extraction takes 1-2 days. Complete structural drying takes 3-7 days depending on water depth and affected materials. Full restoration (reconstruction) can take 2-4 weeks. We work as quickly as possible while ensuring thorough drying to prevent mold growth."
    },
    {
      question: "What causes flooding in Fairfax homes?",
      answer: "Common causes include severe storms and flash flooding, sump pump failures during heavy rain, sewer backups, burst pipes, and proximity to flood zones near creeks and streams. Many Fairfax neighborhoods near Accotink Creek and other waterways are particularly vulnerable during severe weather."
    },
    {
      question: "Is floodwater dangerous to clean up myself?",
      answer: "Yes. Floodwater often contains sewage, chemicals, bacteria, and other contaminants (Category 3 black water). Professional cleanup requires PPE, antimicrobial treatments, and proper disposal of contaminated materials. DIY cleanup risks serious health hazards and insurance claim denial."
    },
    {
      question: "How much does flood cleanup cost in Fairfax?",
      answer: "Flood cleanup typically costs $5,000 to $20,000+ depending on water depth, square footage, and contamination level. Basement flooding averages $8,000-$15,000. With flood insurance, you typically pay only your deductible. We provide free assessments and detailed estimates for insurance claims."
    },
    {
      question: "Can you help with my flood insurance claim in Fairfax?",
      answer: "Yes. We work directly with NFIP adjusters and private flood insurers daily. We provide detailed photo documentation, moisture readings, Xactimate estimates, and all required paperwork. Our advocacy helps maximize your claim approval and speeds up the process significantly."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flood Doctor - Fairfax Emergency Flood Cleanup",
    "image": "https://flood.doctor/images/logo.png",
    "@id": "https://flood.doctor/locations/fairfax-flood-cleanup",
    "url": "https://flood.doctor/locations/fairfax-flood-cleanup",
    "telephone": "703-665-0505",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8466D Tyco Rd",
      "addressLocality": "Vienna",
      "addressRegion": "VA",
      "postalCode": "22182",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8462236,
      "longitude": -77.3063733
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Fairfax",
        "sameAs": "https://en.wikipedia.org/wiki/Fairfax,_Virginia"
      },
      {
        "@type": "City",
        "name": "Burke"
      },
      {
        "@type": "City",
        "name": "Mantua"
      },
      {
        "@type": "City",
        "name": "Fairfax Station"
      },
      {
        "@type": "City",
        "name": "Fair Oaks"
      }
    ]
  };

  const serviceAreas = [
    "Burke",
    "Mantua",
    "Fairfax Station",
    "Fair Oaks",
    "Fairfax City",
    "West Springfield",
    "Annandale",
    "North Springfield"
  ];

  const emergencyServices = [
    {
      icon: Truck,
      title: "Rapid Water Extraction",
      description: "Truck-mounted extractors remove thousands of gallons within hours. Portable pumps for basement flooding."
    },
    {
      icon: Wind,
      title: "Commercial Drying",
      description: "Industrial dehumidifiers and air movers running 24/7 to achieve complete structural drying."
    },
    {
      icon: Shield,
      title: "Contamination Control",
      description: "Antimicrobial treatments and safe disposal of Category 3 floodwater contamination."
    },
    {
      icon: FileText,
      title: "Insurance Documentation",
      description: "Complete photo documentation, moisture readings, and estimates for flood insurance claims."
    }
  ];

  const responseProcess = [
    {
      number: "1",
      title: "Emergency Call",
      description: "Contact 703-665-0505 immediately. We dispatch emergency crews within minutes to your Fairfax location."
    },
    {
      number: "2",
      title: "Arrival & Assessment",
      description: "Team arrives in under 60 minutes with extraction equipment. Safety assessment and damage documentation begins."
    },
    {
      number: "3",
      title: "Water Extraction",
      description: "Truck-mounted extractors and portable pumps remove standing floodwater quickly to minimize damage."
    },
    {
      number: "4",
      title: "Content Protection",
      description: "Salvageable belongings moved to dry areas. Pack-out service available for extensive flooding."
    },
    {
      number: "5",
      title: "Structural Drying",
      description: "Commercial dehumidifiers and air movers run continuously. Daily moisture monitoring until fully dry."
    },
    {
      number: "6",
      title: "Antimicrobial Treatment",
      description: "Professional disinfection of all affected surfaces to eliminate bacteria and prevent mold growth."
    },
    {
      number: "7",
      title: "Restoration",
      description: "Complete reconstruction including drywall, flooring, painting, and finishing to pre-loss condition."
    }
  ];

  const floodDangers = [
    {
      title: "Sewage Contamination",
      description: "Floodwater often contains raw sewage with E. coli, hepatitis, and other pathogens requiring professional cleanup."
    },
    {
      title: "Chemical Hazards",
      description: "Pesticides, fertilizers, oil, and other chemicals wash into floodwater, creating toxic contamination."
    },
    {
      title: "Structural Damage",
      description: "Standing water weakens foundations, compromises structural integrity, and damages electrical systems."
    },
    {
      title: "Rapid Mold Growth",
      description: "Mold begins growing within 24-48 hours in wet materials. Professional drying prevents costly remediation."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Emergency Flood Cleanup in Fairfax, VA | 24/7 Response"
        description="24/7 emergency flood cleanup in Fairfax, Burke, Mantua & Fair Oaks. 60-min response. IICRC certified. Flood insurance experts. Call 703-665-0505 now."
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: 'Fairfax Flood Cleanup', href: '/locations/fairfax-flood-cleanup' }
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={20} className="text-yellow-300" />
              <span className="text-red-100 font-bold uppercase tracking-wide">Emergency Service</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Emergency Flood Cleanup in Fairfax, VA
            </h1>
            <p className="text-xl md:text-2xl text-red-50 mb-8 leading-relaxed">
              24/7 emergency flood response for Fairfax, Burke, Mantua, Fairfax Station, and Fair Oaks. IICRC-certified team arrives in 60 minutes with industrial extraction equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="tel:7036650505"
                variant="primary"
                className="bg-white text-red-700 hover:bg-gray-100 text-xl h-16 px-10 shadow-2xl font-bold"
              >
                <Phone size={24} className="mr-3" />
                CALL 703-665-0505 NOW
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm bg-red-800/50 backdrop-blur-sm rounded-xl p-4 inline-flex">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-yellow-300" />
                <span className="font-bold">60-Minute Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-300" />
                <span className="font-bold">Available 24/7/365</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Alert Bar */}
      <div className="bg-yellow-400 border-y border-yellow-500 py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-center gap-3 text-center">
            <AlertTriangle size={24} className="text-gray-900" />
            <span className="font-bold text-gray-900 text-lg">
              FLOOD EMERGENCY? Every second counts. Call 703-665-0505 for immediate dispatch.
            </span>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              24/7 Flood Response Throughout Fairfax County
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Emergency crews stationed in Vienna for rapid deployment to every Fairfax neighborhood
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-red-500 hover:shadow-md transition-all">
                <MapPin size={20} className="text-red-600 mx-auto mb-2" />
                <span className="font-medium text-text">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Speed Matters */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Clock size={48} className="text-red-600 mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
                Why Immediate Flood Response Matters
              </h2>
              <p className="text-lg text-muted">
                The first 24 hours determine the extent of damage and restoration costs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {floodDangers.map((danger, idx) => (
                <div key={idx} className="bg-red-50 rounded-2xl p-8 border border-red-200">
                  <h3 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2">
                    <AlertTriangle size={24} className="text-red-600" />
                    {danger.title}
                  </h3>
                  <p className="text-gray-700">{danger.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-yellow-50 rounded-xl border-2 border-yellow-400 text-center">
              <p className="text-gray-900 font-bold text-lg mb-2">
                Professional flood cleanup within 60 minutes prevents these dangers
              </p>
              <p className="text-gray-700">
                Our emergency response team extracts water, applies antimicrobial treatments, and begins structural drying immediately to minimize damage and health risks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Emergency Flood Services
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Complete flood cleanup and restoration for Fairfax properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyServices.map((service, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-200">
                  <service.icon size={32} className="text-red-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-text mb-2">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Response Process */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Our Emergency Flood Response Process
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Proven 7-step approach to complete flood recovery
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {responseProcess.map((step, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 flex gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-red-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flood Insurance Help */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <FileText size={48} className="text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
                Flood Insurance Claim Experts
              </h2>
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <p className="text-lg text-text mb-6 leading-relaxed">
                Navigating NFIP (National Flood Insurance Program) and private flood insurance claims can be complex. Our team works directly with flood insurance adjusters daily and understands exactly what documentation they require.
              </p>
              <p className="text-lg text-text mb-6 leading-relaxed">
                We provide comprehensive photo documentation, detailed moisture readings, Xactimate estimates matching insurance standards, and all required paperwork to streamline your claim approval.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <CheckCircle2 size={32} className="text-primary mx-auto mb-3" />
                  <div className="font-bold text-text mb-1">Direct Billing</div>
                  <div className="text-sm text-muted">We bill insurance directly to simplify the process</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <CheckCircle2 size={32} className="text-primary mx-auto mb-3" />
                  <div className="font-bold text-text mb-1">Full Documentation</div>
                  <div className="text-sm text-muted">Complete records for claim approval</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <CheckCircle2 size={32} className="text-primary mx-auto mb-3" />
                  <div className="font-bold text-text mb-1">Claim Advocacy</div>
                  <div className="text-sm text-muted">We fight for maximum coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment & Capabilities */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Industrial Flood Cleanup Equipment
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Professional-grade equipment for rapid water extraction and drying
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Truck,
                title: "Truck-Mounted Extractors",
                description: "Powerful vacuum systems extract thousands of gallons per hour directly from your Fairfax property to our trucks."
              },
              {
                icon: Droplets,
                title: "Submersible Pumps",
                description: "High-capacity pumps for basement flooding and deep standing water removal in Fairfax homes."
              },
              {
                icon: Wind,
                title: "Commercial Dehumidifiers",
                description: "Industrial LGR dehumidifiers remove moisture from air and materials to prevent mold and structural damage."
              },
              {
                icon: Home,
                title: "High-Velocity Air Movers",
                description: "Strategic placement of powerful fans accelerates evaporation and ensures complete structural drying."
              },
              {
                icon: Shield,
                title: "Moisture Detection Tools",
                description: "Thermal imaging, moisture meters, and hygrometers for precise moisture mapping and monitoring."
              },
              {
                icon: Award,
                title: "Professional PPE",
                description: "Full hazmat suits, respirators, and protective equipment for safe contaminated water cleanup."
              }
            ].map((equipment, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-red-500 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-200">
                  <equipment.icon size={28} className="text-red-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-text mb-3">{equipment.title}</h3>
                <p className="text-muted leading-relaxed">{equipment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-12 text-center">
              Fairfax Flood Cleanup FAQs
            </h2>
            <GoogleStyleFAQ faqs={faqs} />
          </div>
        </div>
      </div>

      {/* Final Emergency CTA */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold mb-6 animate-pulse">
            <Zap size={20} />
            EMERGENCY FLOOD SERVICE
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Flooding Emergency in Fairfax?
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
            Our emergency response team is available 24/7/365. We'll arrive at your Fairfax property in 60 minutes or less with full extraction equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="tel:7036650505"
              variant="primary"
              className="bg-white text-red-700 hover:bg-gray-100 text-2xl h-20 px-12 shadow-2xl font-bold"
            >
              <Phone size={28} className="mr-3" />
              CALL 703-665-0505 NOW
            </Button>
          </div>
          <div className="mt-8 text-red-100">
            <p className="font-bold text-lg mb-2">Available Right Now • 24 Hours a Day • 7 Days a Week</p>
            <p className="text-sm">Emergency Response: Burke, Mantua, Fairfax Station, Fair Oaks & All of Fairfax County</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FairfaxFloodCleanup;
