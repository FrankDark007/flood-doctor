import React from 'react';
import PageMeta from '../../components/ui/PageMeta';

const FallsChurchWaterDamage: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flood Doctor Water Damage Restoration - Falls Church",
    "image": "https://flood.doctor/logo.png",
    "@id": "https://falls-church.flood.doctor/water-damage",
    "url": "https://falls-church.flood.doctor/water-damage",
    "telephone": "(877) 497-0007",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Falls Church",
      "addressLocality": "Falls Church",
      "addressRegion": "VA",
      "postalCode": "22046",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8823,
      "longitude": -77.1711
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
    "sameAs": [
      "https://www.facebook.com/flooddoctor",
      "https://twitter.com/flooddoctor"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is water damage common in Falls Church's older homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Falls Church has a significant number of homes built before 1980, many with aging plumbing systems, original pipe materials, and outdated waterproofing. The independent city's compact development and mature tree canopy can also contribute to foundation issues and drainage problems that lead to water intrusion."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve all of Falls Church City and surrounding areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 emergency water damage restoration throughout Falls Church City, Seven Corners, Bailey's Crossroads, Merrifield, and the Eden Center area. Our rapid response team can reach any location in the independent city within minutes."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to water emergencies in Falls Church?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 24/7 emergency response and can typically arrive at Falls Church properties within 60 minutes of your call. Quick response is critical to preventing secondary damage and mold growth in the area's older housing stock."
        }
      },
      {
        "@type": "Question",
        "name": "Will you work with my Falls Church insurance company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We work directly with all major insurance providers and assist Falls Church residents with the entire claims process, from documentation to final settlement. We provide detailed reports and photos to support your claim."
        }
      },
      {
        "@type": "Question",
        "name": "What areas of Falls Church do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all neighborhoods throughout Falls Church City including Seven Corners, Bailey's Crossroads, Merrifield, Eden Center area, and surrounding communities. No job is too large or small in the Falls Church area."
        }
      }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Falls Church VA | 24/7 Emergency Service | (877) 497-0007"
        description="Expert water damage restoration in Falls Church, VA. Serving Falls Church City, Seven Corners, Bailey's Crossroads & Merrifield. 24/7 emergency response. Call (877) 497-0007 now."
        schema={[localBusinessSchema, faqSchema]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] text-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Water Damage Restoration in Falls Church, VA
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                24/7 Emergency Response for Falls Church City & Surrounding Areas
              </p>
              <a
                href="tel:8774970007"
                className="inline-block bg-white text-[#1a73e8] px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                Call Now: (877) 497-0007
              </a>
              <p className="mt-4 text-lg">Available 24 Hours a Day, 7 Days a Week</p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Serving All of Falls Church & Nearby Communities</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">Falls Church City</div>
              <div className="p-4 bg-gray-50 rounded-lg">Seven Corners</div>
              <div className="p-4 bg-gray-50 rounded-lg">Bailey's Crossroads</div>
              <div className="p-4 bg-gray-50 rounded-lg">Merrifield</div>
              <div className="p-4 bg-gray-50 rounded-lg">Eden Center Area</div>
            </div>
          </div>
        </section>

        {/* Why Falls Church Needs Expert Water Damage Services */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Why Falls Church Properties Need Professional Water Damage Restoration</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Historic & Older Housing Stock</h3>
                <p className="text-gray-700 mb-4">
                  Falls Church, as an independent city in Virginia, features many homes built before 1980 with aging infrastructure. Original plumbing systems, outdated waterproofing, and vintage construction materials require specialized restoration techniques to preserve property value and structural integrity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Compact Urban Development</h3>
                <p className="text-gray-700 mb-4">
                  The city's dense development pattern means water damage can affect multiple units or neighboring properties. Our team understands the unique challenges of Falls Church's urban environment and provides containment strategies that protect your property and your neighbors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Drainage & Foundation Issues</h3>
                <p className="text-gray-700 mb-4">
                  Mature landscaping and established neighborhoods can experience drainage complications. Heavy rainfall, clogged gutters, and foundation settling are common in Seven Corners and Bailey's Crossroads areas, requiring immediate professional intervention.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Quick Response Critical</h3>
                <p className="text-gray-700 mb-4">
                  In Falls Church's humid climate, mold can begin growing within 24-48 hours of water exposure. Our 24/7 emergency response ensures we arrive quickly to prevent secondary damage and costly long-term repairs throughout the Eden Center area and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Complete Water Damage Restoration Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Emergency Water Extraction</h3>
                <p className="text-gray-700">
                  Rapid water removal using industrial-grade pumps and extractors. We respond immediately to basement floods, burst pipes, and storm damage throughout Falls Church City.
                </p>
                <a href="/services/water-extraction" className="text-[#1a73e8] hover:underline mt-4 inline-block">Learn more →</a>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Structural Drying</h3>
                <p className="text-gray-700">
                  Advanced drying equipment and moisture monitoring to ensure complete drying of walls, floors, and ceilings in Falls Church's older construction materials.
                </p>
                <a href="/services/structural-drying" className="text-[#1a73e8] hover:underline mt-4 inline-block">Learn more →</a>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Mold Prevention & Remediation</h3>
                <p className="text-gray-700">
                  Comprehensive mold inspection, testing, and removal services to protect your Falls Church home from hazardous mold growth after water damage.
                </p>
                <a href="/locations/falls-church-mold-removal" className="text-[#1a73e8] hover:underline mt-4 inline-block">Learn more →</a>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Sewage Cleanup</h3>
                <p className="text-gray-700">
                  Safe, thorough cleanup and sanitization of Category 3 water damage including sewage backups common in Merrifield and Seven Corners areas.
                </p>
                <a href="/services/residential/cleanup-services/sewage-cleanup/" className="text-[#1a73e8] hover:underline mt-4 inline-block">Learn more →</a>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Storm & Flood Damage</h3>
                <p className="text-gray-700">
                  Complete restoration after severe weather events, including water extraction, debris removal, and reconstruction services for Falls Church properties.
                </p>
                <a href="/services/storm-damage" className="text-[#1a73e8] hover:underline mt-4 inline-block">Learn more →</a>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Insurance Claim Assistance</h3>
                <p className="text-gray-700">
                  Full documentation, direct insurance billing, and claims support to streamline your water damage insurance claim process.
                </p>
                <a href="/services/insurance-claims" className="text-[#1a73e8] hover:underline mt-4 inline-block">Learn more →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Water Damage Restoration Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold mb-2">Emergency Contact</h3>
                <p className="text-gray-700">Call (877) 497-0007 anytime. We answer 24/7 and dispatch immediately to your Falls Church location.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold mb-2">Inspection & Assessment</h3>
                <p className="text-gray-700">Thorough property evaluation, moisture detection, and damage documentation for insurance purposes.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold mb-2">Water Removal & Drying</h3>
                <p className="text-gray-700">Industrial extraction equipment and commercial dehumidifiers remove all moisture and prevent mold growth.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold mb-2">Restoration & Repair</h3>
                <p className="text-gray-700">Complete reconstruction services to return your Falls Church property to pre-loss condition.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">Why is water damage common in Falls Church's older homes?</h3>
                <p className="text-gray-700">
                  Falls Church has a significant number of homes built before 1980, many with aging plumbing systems, original pipe materials, and outdated waterproofing. The independent city's compact development and mature tree canopy can also contribute to foundation issues and drainage problems that lead to water intrusion.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">Do you serve all of Falls Church City and surrounding areas?</h3>
                <p className="text-gray-700">
                  Yes, we provide 24/7 emergency water damage restoration throughout Falls Church City, Seven Corners, Bailey's Crossroads, Merrifield, and the Eden Center area. Our rapid response team can reach any location in the independent city within minutes.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">How quickly can you respond to water emergencies in Falls Church?</h3>
                <p className="text-gray-700">
                  We offer 24/7 emergency response and can typically arrive at Falls Church properties within 60 minutes of your call. Quick response is critical to preventing secondary damage and mold growth in the area's older housing stock.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">Will you work with my Falls Church insurance company?</h3>
                <p className="text-gray-700">
                  Absolutely. We work directly with all major insurance providers and assist Falls Church residents with the entire claims process, from documentation to final settlement. We provide detailed reports and photos to support your claim.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold mb-3">What areas of Falls Church do you cover?</h3>
                <p className="text-gray-700">
                  We serve all neighborhoods throughout Falls Church City including Seven Corners, Bailey's Crossroads, Merrifield, Eden Center area, and surrounding communities. No job is too large or small in the Falls Church area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-[#1a73e8] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Emergency Water Damage Restoration in Falls Church?</h2>
            <p className="text-xl mb-8">
              Don't wait - water damage worsens by the hour. Our Falls Church team is ready to respond immediately to protect your property and begin the restoration process.
            </p>
            <a
              href="tel:8774970007"
              className="inline-block bg-white text-[#1a73e8] px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Call (877) 497-0007 Now
            </a>
            <p className="mt-4 text-lg">24/7 Emergency Service • Fast Response • Insurance Accepted</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FallsChurchWaterDamage;
