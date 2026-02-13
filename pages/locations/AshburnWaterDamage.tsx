import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';

export default function AshburnWaterDamage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://ashburn.flood.doctor/water-damage",
        "name": "Flood Doctor - Ashburn Water Damage Restoration",
        "image": "https://flood.doctor/logo.png",
        "url": "https://ashburn.flood.doctor/water-damage",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.0438,
          "longitude": -77.4875
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Ashburn",
          "addressRegion": "VA",
          "postalCode": "20147",
          "addressCountry": "US"
        },
        "telephone": "(877) 497-0007",
        "priceRange": "$$",
        "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
        "areaServed": [
          "Ashburn Village",
          "Broadlands",
          "One Loudoun",
          "Brambleton",
          "Lansdowne"
        ],
        "serviceType": "Water Damage Restoration"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you respond to water emergencies in Ashburn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide 24/7 emergency water damage restoration services in Ashburn and can typically arrive within 60-90 minutes of your call. Our rapid response is critical to preventing secondary damage in Ashburn's newer construction homes."
            }
          },
          {
            "@type": "Question",
            "name": "Do you serve all Ashburn neighborhoods including One Loudoun and Brambleton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we serve all Ashburn communities including Ashburn Village, Broadlands, One Loudoun, Brambleton, and Lansdowne. Our team is familiar with both older and newer construction throughout Loudoun County."
            }
          },
          {
            "@type": "Question",
            "name": "What causes water damage in Ashburn's newer homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common causes in Ashburn include appliance failures, pipe bursts during winter freezes, HVAC condensation issues, and construction defects in rapidly built homes. Loudoun County's growth has led to many new builds that may have installation issues."
            }
          },
          {
            "@type": "Question",
            "name": "Will you work with my insurance for water damage claims?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We work directly with all major insurance companies and can help document damage, provide detailed estimates, and communicate with adjusters throughout the claims process to ensure you receive fair coverage."
            }
          },
          {
            "@type": "Question",
            "name": "How long does water damage restoration take in Ashburn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Timeline varies by severity, but most residential water damage projects in Ashburn take 3-7 days from extraction through complete drying. We use advanced monitoring equipment to ensure thorough drying before restoration begins."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Ashburn Water Damage Restoration | 24/7 Emergency Service | (877) 497-0007"
        description="24/7 emergency water damage restoration in Ashburn, VA. Serving Ashburn Village, Broadlands, One Loudoun, Brambleton & Lansdowne. Fast response, insurance approved. Call (877) 497-0007"
        schema={jsonLd}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] text-white py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ashburn Water Damage Restoration
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              24/7 emergency water damage restoration serving Ashburn Village, Broadlands, One Loudoun, Brambleton, and Lansdowne. Rapid response to protect your Loudoun County home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8774970007"
                className="bg-white text-[#1a73e8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition text-center"
              >
                Call (877) 497-0007
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1a73e8] transition text-center"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-red-600 text-white py-4 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg font-semibold">
              🚨 24/7 Emergency Response Available | Water Damage? Call Now: (877) 497-0007
            </p>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 lg:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Serving All Ashburn Communities
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              {['Ashburn Village', 'Broadlands', 'One Loudoun', 'Brambleton', 'Lansdowne'].map((area) => (
                <div key={area} className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="font-semibold text-gray-900">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert Water Damage Restoration in Ashburn, VA
              </h2>

              <p className="text-gray-700 mb-6">
                When water damage strikes your Ashburn home, every minute counts. Flood Doctor provides immediate emergency response to homes throughout Loudoun County, specializing in both newer construction communities like One Loudoun and Brambleton, as well as established neighborhoods such as Ashburn Village and Broadlands.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Water Damage Challenges in Ashburn's Growing Communities
              </h3>

              <p className="text-gray-700 mb-6">
                Ashburn and Loudoun County have experienced unprecedented growth, with thousands of new homes built in the past decade. This rapid construction brings unique water damage risks including:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>New construction plumbing failures and installation defects</li>
                <li>Appliance line connections in modern smart homes</li>
                <li>HVAC condensation issues in energy-efficient builds</li>
                <li>Winter pipe bursts during Virginia's cold snaps</li>
                <li>Basement flooding from rapid development affecting drainage</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Our Comprehensive Water Damage Services
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-xl text-gray-900 mb-3">Emergency Services</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 24/7 emergency water extraction</li>
                    <li>• Rapid response within 60-90 minutes</li>
                    <li>• Immediate damage assessment</li>
                    <li>• Emergency board-up and tarping</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-xl text-gray-900 mb-3">Restoration Services</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Complete water removal and drying</li>
                    <li>• Structural dehumidification</li>
                    <li>• Moisture detection and monitoring</li>
                    <li>• Content pack-out and storage</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Ashburn Homeowners Choose Flood Doctor
              </h3>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Local Expertise:</strong> Deep knowledge of Ashburn neighborhoods and construction types</li>
                <li><strong>Rapid Response:</strong> 24/7 availability with typical arrival in 60-90 minutes</li>
                <li><strong>Insurance Assistance:</strong> We work directly with all major insurance companies</li>
                <li><strong>Advanced Technology:</strong> Thermal imaging, moisture meters, and industrial dehumidifiers</li>
                <li><strong>Complete Restoration:</strong> From water extraction to final rebuild</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Common Water Damage Scenarios in Ashburn
              </h3>

              <p className="text-gray-700 mb-4">
                <strong>Basement Flooding:</strong> Many Ashburn homes feature finished basements vulnerable to groundwater seepage, sump pump failures, and foundation leaks exacerbated by Loudoun County's clay soil conditions.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Burst Pipes:</strong> Winter freezes can cause devastating pipe bursts, particularly in newer homes where plumbing may be installed near exterior walls or in unconditioned spaces.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Appliance Failures:</strong> Modern Ashburn homes feature numerous water-using appliances. Washing machine hoses, dishwasher leaks, and water heater failures are common emergency calls.
              </p>

              <p className="text-gray-700 mb-6">
                <strong>Roof Leaks:</strong> Storm damage and aging roofing materials can allow water intrusion, particularly problematic in multi-story homes common throughout Brambleton and Lansdowne.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Our Water Damage Restoration Process
              </h3>

              <div className="bg-[#1a73e8] bg-opacity-5 border-l-4 border-[#1a73e8] p-6 mb-8">
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Emergency Contact:</strong> Call (877) 497-0007 for immediate dispatch</li>
                  <li><strong>2. Rapid Response:</strong> Our team arrives within 60-90 minutes</li>
                  <li><strong>3. Damage Assessment:</strong> Comprehensive inspection and documentation</li>
                  <li><strong>4. Water Extraction:</strong> Industrial pumps and vacuums remove standing water</li>
                  <li><strong>5. Drying & Dehumidification:</strong> Advanced equipment ensures complete drying</li>
                  <li><strong>6. Cleaning & Sanitizing:</strong> Antimicrobial treatments prevent mold growth</li>
                  <li><strong>7. Restoration:</strong> Repair and rebuild damaged structures</li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Preventing Water Damage in Your Ashburn Home
              </h3>

              <p className="text-gray-700 mb-4">
                While we're here 24/7 for emergencies, prevention is always better than restoration:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Inspect washing machine hoses annually and replace every 5 years</li>
                <li>Install water leak detection systems in newer smart homes</li>
                <li>Maintain sump pumps with battery backup systems</li>
                <li>Insulate pipes in unconditioned spaces and exterior walls</li>
                <li>Clear gutters and ensure proper grading around your foundation</li>
                <li>Know your main water shutoff location</li>
              </ul>

              <div className="bg-gray-900 text-white p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">Need Emergency Water Damage Help?</h3>
                <p className="mb-6 text-lg">
                  Don't wait when water damage strikes. Our Ashburn team is standing by 24/7 to protect your home and belongings.
                </p>
                <a
                  href="tel:8774970007"
                  className="inline-block bg-[#1a73e8] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1557b0] transition"
                >
                  Call (877) 497-0007 Now
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 lg:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/residential/restoration-services/water-damage-restoration/" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-2">Water Damage Restoration</h3>
                <p className="text-gray-700">Comprehensive water damage repair and restoration services</p>
              </Link>
              <Link href="/services/residential/cleanup-services/mold-remediation/" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-2">Mold Remediation</h3>
                <p className="text-gray-700">Professional mold removal and prevention</p>
              </Link>
              <Link href="/services/emergency-services" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-2">Emergency Services</h3>
                <p className="text-gray-700">24/7 emergency response for water disasters</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How quickly can you respond to water emergencies in Ashburn?
                </h3>
                <p className="text-gray-700">
                  We provide 24/7 emergency water damage restoration services in Ashburn and can typically arrive within 60-90 minutes of your call. Our rapid response is critical to preventing secondary damage in Ashburn's newer construction homes.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you serve all Ashburn neighborhoods including One Loudoun and Brambleton?
                </h3>
                <p className="text-gray-700">
                  Yes, we serve all Ashburn communities including Ashburn Village, Broadlands, One Loudoun, Brambleton, and Lansdowne. Our team is familiar with both older and newer construction throughout Loudoun County.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What causes water damage in Ashburn's newer homes?
                </h3>
                <p className="text-gray-700">
                  Common causes in Ashburn include appliance failures, pipe bursts during winter freezes, HVAC condensation issues, and construction defects in rapidly built homes. Loudoun County's growth has led to many new builds that may have installation issues.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Will you work with my insurance for water damage claims?
                </h3>
                <p className="text-gray-700">
                  Absolutely. We work directly with all major insurance companies and can help document damage, provide detailed estimates, and communicate with adjusters throughout the claims process to ensure you receive fair coverage.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does water damage restoration take in Ashburn?
                </h3>
                <p className="text-gray-700">
                  Timeline varies by severity, but most residential water damage projects in Ashburn take 3-7 days from extraction through complete drying. We use advanced monitoring equipment to ensure thorough drying before restoration begins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#1a73e8] text-white py-20 lg:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ashburn's Trusted Water Damage Restoration Experts
            </h2>
            <p className="text-xl mb-8">
              Available 24/7 for emergency water damage throughout Loudoun County
            </p>
            <a
              href="tel:8774970007"
              className="inline-block bg-white text-[#1a73e8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Call (877) 497-0007
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
