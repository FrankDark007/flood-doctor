import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  CheckCircle2,
  Droplets,
  Home,
  AlertTriangle,
  Award,
  Truck,
  Wind,
  Zap,
  ArrowRight,
  CloudRain,
  Waves
} from 'lucide-react';

const ArlingtonFloodCleanup: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you respond to flooding emergencies in Arlington, VA?",
      answer: "We provide 24/7 emergency flood cleanup throughout Arlington with 60-90 minute response times. Our teams are strategically positioned to serve Ballston, Clarendon, Rosslyn, Crystal City, Pentagon City, and all Arlington neighborhoods. When flooding occurs, immediate response is critical—call (877) 497-0007 anytime for emergency dispatch."
    },
    {
      question: "What causes flooding in Arlington homes and businesses?",
      answer: "Common flood causes in Arlington include heavy storms overwhelming drainage systems, Potomac River flooding, burst pipes, sewer backups, foundation cracks, sump pump failures, and HVAC condensate overflow. Arlington's proximity to the Potomac and Four Mile Run makes some neighborhoods particularly vulnerable to flash flooding during severe weather."
    },
    {
      question: "Is flood damage covered by my Arlington homeowners insurance?",
      answer: "Standard homeowners insurance typically does NOT cover flooding from external sources (storms, river overflow). You need separate flood insurance through FEMA's National Flood Insurance Program (NFIP). However, internal flooding from burst pipes or appliance failures is usually covered by standard policies. We work with both flood and homeowners insurance carriers."
    },
    {
      question: "Do I need flood insurance in Arlington, VA?",
      answer: "While not all Arlington properties are in FEMA flood zones, flood insurance is recommended—especially near Four Mile Run, Donaldson Run, and low-lying areas near the Potomac. Properties in Special Flood Hazard Areas (SFHA) require flood insurance for mortgages. Even if you're not required to have it, consider coverage given Arlington's proximity to waterways."
    },
    {
      question: "What's included in emergency flood cleanup?",
      answer: "Our Arlington flood cleanup includes immediate water extraction, structural drying, debris removal, antimicrobial treatment, content pack-out and restoration, odor removal, and complete sanitization. For sewage-contaminated floods (Category 3), we follow strict EPA protocols for safe cleanup and disposal."
    },
    {
      question: "How long does flood cleanup take in Arlington?",
      answer: "Emergency water extraction typically takes 1-2 days. Complete structural drying requires 3-7 days depending on flood depth and affected materials. Reconstruction (if needed) can take 2-6 weeks. We provide detailed timelines during your initial assessment and keep you updated throughout the process."
    },
    {
      question: "Can you handle sewage backups and contaminated flood water?",
      answer: "Yes, we're certified and equipped to handle Category 3 water (sewage, flood water with contaminants). Our technicians use full PPE, containment protocols, EPA-approved antimicrobials, and proper disposal methods. Contaminated water requires specialized cleanup—never attempt this yourself."
    },
    {
      question: "What should I do immediately after flooding in my Arlington property?",
      answer: "First, call us at (877) 497-0007 for emergency dispatch. If safe, shut off electricity to flooded areas, stop the water source if possible, move valuables to dry areas, and document damage with photos. Do NOT enter water above ankle-deep or water that may be electrically charged. Our team will guide you through safe next steps when we arrive."
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
    "name": "Flood Doctor Emergency Flood Cleanup - Arlington, VA",
    "image": "https://flood.doctor/logo.png",
    "@id": "https://arlington.flood.doctor/flood-cleanup",
    "url": "https://arlington.flood.doctor/flood-cleanup",
    "telephone": "(877) 497-0007",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Service Coverage Area",
      "addressLocality": "Arlington",
      "addressRegion": "VA",
      "postalCode": "22201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8816,
      "longitude": -77.0910
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
    "areaServed": {
      "@type": "City",
      "name": "Arlington",
      "containedInPlace": {
        "@type": "State",
        "name": "Virginia"
      }
    }
  };

  const emergencyServices = [
    {
      icon: Truck,
      title: "Rapid Water Extraction",
      description: "Truck-mounted and portable pumps remove thousands of gallons per hour"
    },
    {
      icon: Wind,
      title: "Industrial Drying",
      description: "Commercial dehumidifiers and air movers for complete structural drying"
    },
    {
      icon: Shield,
      title: "Sanitization",
      description: "EPA-approved antimicrobial treatment for contaminated flood water"
    },
    {
      icon: Home,
      title: "Content Restoration",
      description: "Pack-out, cleaning, and restoration of salvageable belongings"
    }
  ];

  const serviceAreas = [
    "Ballston",
    "Clarendon",
    "Rosslyn",
    "Crystal City",
    "Pentagon City",
    "Columbia Pike",
    "Shirlington",
    "Cherrydale",
    "Lyon Village",
    "Lyon Park",
    "Westover",
    "Arlington Forest"
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Flood Cleanup in Arlington, VA"
        description="24/7 emergency flood cleanup in Arlington, VA. Rapid water extraction, structural drying & restoration. Serving all Arlington neighborhoods. Call (877) 497-0007 now."
        schema={[faqSchema, localBusinessSchema]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'Arlington Flood Cleanup', path: '#' }
            ]}
            className="text-white/80"
          />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} /> Emergency Service
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-6 leading-tight">
              Emergency Flood Cleanup in Arlington, VA
            </h1>
            <p className="text-xl text-red-100 leading-relaxed mb-8">
              When flooding strikes, every minute counts. 24/7 emergency response serving all Arlington neighborhoods. IICRC-certified teams arrive within 60-90 minutes with industrial extraction equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-red-600 border-none hover:bg-red-50">
                <Phone size={20} className="mr-2" />
                CALL NOW: (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Request Emergency Service
              </Button>
            </div>
          </div>

          {/* Emergency Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Clock size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">60-90 Min Response</div>
              <div className="text-xs text-red-100">Anywhere in Arlington</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Truck size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">Industrial Equipment</div>
              <div className="text-xs text-red-100">Rapid water extraction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Award size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">IICRC Certified</div>
              <div className="text-xs text-red-100">Licensed & insured</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Shield size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">Insurance Billing</div>
              <div className="text-xs text-red-100">Work with all carriers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Content */}
          <div className="lg:col-span-8">

            {/* Intro */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Arlington's Flood Cleanup Specialists
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Flooding is one of the most destructive events a property can experience. Whether your Arlington home has been hit by a severe storm, sewage backup, or catastrophic pipe failure, Flood Doctor provides immediate emergency flood cleanup throughout Arlington County.
                </p>
                <p>
                  Arlington's location along the Potomac River and proximity to Four Mile Run, Donaldson Run, and other waterways makes flooding a real risk during heavy rainfall. From historic neighborhoods in Clarendon and Ballston to modern developments in Crystal City and Pentagon City, we've helped Arlington property owners recover from floods of all sizes.
                </p>
                <p>
                  Our IICRC-certified flood cleanup teams respond 24/7/365 with truck-mounted extraction equipment, industrial drying systems, and complete restoration capabilities. We handle everything from initial water removal to final reconstruction—all while working directly with your insurance company. Call <a href="tel:8774970007" className="text-[#1a73e8] font-medium hover:underline">(877) 497-0007</a> for immediate emergency dispatch.
                </p>
              </div>
            </section>

            {/* Emergency Services */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Emergency Flood Cleanup Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {emergencyServices.map((service, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#1a73e8] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a73e8] flex items-center justify-center mb-4">
                      <service.icon size={24} />
                    </div>
                    <h3 className="font-medium text-gray-900 text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Flood Cleanup Process */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Our Flood Cleanup Process
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Emergency Contact & Dispatch",
                    description: "Call (877) 497-0007 anytime. We'll dispatch a certified team to your Arlington property within 60-90 minutes—even in the middle of the night."
                  },
                  {
                    step: "2",
                    title: "Damage Assessment",
                    description: "Our team conducts a thorough inspection, documents all damage for insurance, identifies water category, and creates a detailed restoration plan."
                  },
                  {
                    step: "3",
                    title: "Water Extraction",
                    description: "Using truck-mounted pumps and portable extractors, we remove standing water as quickly as possible. Thousands of gallons can be extracted per hour."
                  },
                  {
                    step: "4",
                    title: "Structural Drying",
                    description: "Industrial dehumidifiers and high-velocity air movers dry walls, floors, and ceilings. We monitor moisture levels daily to ensure complete drying."
                  },
                  {
                    step: "5",
                    title: "Sanitization & Treatment",
                    description: "EPA-approved antimicrobials kill bacteria and prevent mold growth. All contaminated materials are properly disposed of according to safety regulations."
                  },
                  {
                    step: "6",
                    title: "Restoration & Reconstruction",
                    description: "From minor repairs to complete rebuilding, we restore your property to pre-loss condition. One company handles everything from start to finish."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center shrink-0 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1 text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Emergency Steps */}
            <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-start gap-3 mb-6">
                <AlertTriangle size={24} className="text-amber-600 shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-2xl font-medium text-amber-900 mb-2">
                    What to Do During a Flooding Emergency
                  </h2>
                  <p className="text-amber-800">
                    Follow these critical steps to protect yourself and minimize damage:
                  </p>
                </div>
              </div>
              <ol className="space-y-3 ml-9">
                <li className="text-gray-800">
                  <span className="font-medium">Safety first:</span> Don't enter flooded areas if water is above ankle-deep or if electricity is on
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Call immediately:</span> <a href="tel:8774970007" className="text-[#1a73e8] font-bold hover:underline">(877) 497-0007</a> — we'll dispatch emergency crews and advise on next steps
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Shut off power:</span> Turn off electricity to flooded areas if you can access the breaker safely
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Stop water source:</span> If flooding is from internal plumbing, shut off the main water supply
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Document damage:</span> Take photos and videos for insurance before removing any water or belongings
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Move valuables:</span> If safe, move furniture and belongings to dry areas or upper floors
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Don't delay:</span> Mold begins growing within 24-48 hours. Immediate professional cleanup is essential
                </li>
              </ol>
            </section>

            {/* Service Areas */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Emergency Flood Services Throughout Arlington
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We provide 24/7 emergency flood cleanup in all Arlington neighborhoods:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={16} className="text-[#1a73e8] shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Why Choose Flood Doctor for Arlington Flood Cleanup
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "True 24/7 Emergency Service",
                    description: "Not an answering service—you'll speak directly with our emergency dispatch team who can deploy crews immediately, day or night."
                  },
                  {
                    title: "Rapid Response Times",
                    description: "We maintain equipment and teams throughout Northern Virginia specifically to ensure 60-90 minute response across all Arlington neighborhoods."
                  },
                  {
                    title: "Industrial-Grade Equipment",
                    description: "Truck-mounted water extractors, commercial dehumidifiers, and thermal imaging cameras ensure fast, thorough flood cleanup."
                  },
                  {
                    title: "IICRC Certified Specialists",
                    description: "Every technician holds Water Damage Restoration and Applied Structural Drying certifications. We're not generalists—we're flood cleanup experts."
                  },
                  {
                    title: "Complete Restoration Services",
                    description: "One company handles everything: emergency extraction, structural drying, mold prevention, content restoration, and final reconstruction."
                  },
                  {
                    title: "Insurance Claim Expertise",
                    description: "We work directly with flood insurance and homeowners insurance carriers, using Xactimate for accurate estimates and faster claim approval."
                  }
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold text-sm">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{point.title}</h3>
                      <p className="text-sm text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Flood Cleanup FAQ"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Emergency CTA Card */}
              <div className="bg-red-600 rounded-[32px] p-8 text-white shadow-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap size={24} />
                    <span className="text-sm font-bold uppercase tracking-wide">Emergency</span>
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-2">
                    Flooding Right Now?
                  </h3>
                  <p className="text-red-100 text-sm mb-6">
                    Don't wait. Every minute increases damage. Call now for immediate emergency dispatch.
                  </p>

                  <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-red-600 border-none hover:bg-red-50 mb-4">
                    <Phone size={18} className="mr-2" />
                    (877) 497-0007
                  </Button>

                  <div className="text-xs text-red-100 text-center">
                    Available 24/7/365 • 60-90 min response
                  </div>
                </div>
              </div>

              {/* Flood Risks */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <CloudRain size={18} className="text-[#1a73e8]" />
                  Arlington Flood Risks
                </h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <Waves size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>Potomac River flooding during storms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Waves size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>Four Mile Run overflow</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Waves size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>Flash flooding in low-lying areas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Waves size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>Overwhelmed storm drains</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Waves size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>Sewer backups during heavy rain</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Award size={18} className="text-[#1a73e8]" />
                  Emergency Response Team
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">IICRC Water Damage Restoration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">IICRC Applied Structural Drying</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Licensed & Insured in Virginia</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">EPA Safety Certified</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-gray-900 mb-4">Related Services</h4>
                <div className="space-y-3">
                  <a href="/water-damage-restoration-arlington-va/" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a73e8] transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#1a73e8]" />
                    Arlington Water Damage Restoration
                  </a>
                  <a href="/locations/arlington-mold-removal/" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a73e8] transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#1a73e8]" />
                    Arlington Mold Removal
                  </a>
                  <a href="/locations/arlington-basement-flooding/" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a73e8] transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#1a73e8]" />
                    Arlington Basement Flooding
                  </a>
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
            Need Emergency Flood Cleanup?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            24/7 emergency response. 60-90 minute arrival. IICRC certified teams. Call now.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-red-600 border-none hover:bg-red-50">
            <Phone size={20} className="mr-2" />
            (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ArlingtonFloodCleanup;
