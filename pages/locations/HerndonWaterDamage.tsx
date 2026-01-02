import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';

export default function HerndonWaterDamage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Flood Doctor - Water Damage Restoration Herndon VA",
        "image": "https://flooddoctor.com/logo.png",
        "@id": "https://flooddoctor.com/locations/herndon-water-damage",
        "url": "https://flooddoctor.com/locations/herndon-water-damage",
        "telephone": "(877) 497-0007",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Herndon",
          "addressLocality": "Herndon",
          "addressRegion": "VA",
          "postalCode": "20170",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 38.9696,
          "longitude": -77.3861
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
          "Downtown Herndon",
          "Worldgate",
          "McNair Farms",
          "Dulles Area"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you respond to water damage emergencies in Herndon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide 24/7 emergency water damage restoration services throughout Herndon, VA, including Downtown Herndon, Worldgate, McNair Farms, and the Dulles corridor. Our team typically arrives within 60 minutes of your call to (877) 497-0007."
            }
          },
          {
            "@type": "Question",
            "name": "Do you serve areas near Dulles Airport and the tech corridor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we serve all of Herndon including properties near Dulles International Airport and the Dulles tech corridor. Our proximity to these areas allows for rapid emergency response for both residential and commercial water damage situations."
            }
          },
          {
            "@type": "Question",
            "name": "What types of water damage do you handle in Herndon homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle all types of water damage in Herndon, VA, including burst pipes, flooding, sewage backups, storm damage, appliance leaks, and roof leaks. Our services include water extraction, structural drying, dehumidification, and complete restoration."
            }
          },
          {
            "@type": "Question",
            "name": "Will you work with my insurance company for water damage claims?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We work directly with all major insurance companies and assist Herndon homeowners throughout the entire claims process. We provide detailed documentation, photos, and moisture readings to support your water damage claim."
            }
          },
          {
            "@type": "Question",
            "name": "What areas of Herndon do you cover for water damage restoration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide comprehensive water damage restoration services throughout all Herndon neighborhoods including Downtown Herndon, Worldgate, McNair Farms, Dulles area, and surrounding communities. No job is too large or small."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Herndon VA | 24/7 Emergency Service | (877) 497-0007"
        description="Expert water damage restoration in Herndon, VA. Serving Downtown Herndon, Worldgate, McNair Farms & Dulles area. 24/7 emergency response. Call (877) 497-0007 now!"
        schema={schema}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Damage Restoration Herndon VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              24/7 Emergency Response | Serving Downtown Herndon, Worldgate, McNair Farms & Dulles Corridor
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8774970007"
                className="bg-white text-[#1a73e8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition text-center"
              >
                Call Now: (877) 497-0007
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
              🚨 EMERGENCY? We're Available 24/7/365 | Immediate Response Throughout Herndon
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Trusted Water Damage Restoration Experts in Herndon, Virginia
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              When water damage strikes your Herndon home or business, every minute counts. Flood Doctor provides rapid-response water damage restoration services throughout Herndon, VA, including Downtown Herndon, Worldgate, McNair Farms, and the Dulles Airport corridor.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our certified technicians understand the unique challenges facing Herndon properties, from aging infrastructure in historic Downtown Herndon to modern commercial complexes near the tech corridor. We're strategically located to serve all Herndon neighborhoods with immediate emergency response.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comprehensive Water Damage Services in Herndon
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Emergency Water Extraction',
                  description: 'Rapid removal of standing water using industrial-grade extraction equipment',
                },
                {
                  title: 'Structural Drying',
                  description: 'Advanced drying techniques to prevent structural damage and mold growth',
                },
                {
                  title: 'Flood Cleanup',
                  description: 'Complete flood remediation for Herndon homes affected by storms or plumbing failures',
                },
                {
                  title: 'Burst Pipe Repair',
                  description: 'Swift response to burst pipe emergencies common in Herndon winters',
                },
                {
                  title: 'Sewage Backup Cleanup',
                  description: 'Safe, sanitary cleanup of hazardous sewage contamination',
                },
                {
                  title: 'Moisture Detection',
                  description: 'Thermal imaging and moisture meters to identify hidden water damage',
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#1a73e8]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Herndon Neighborhoods We Serve
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#1a73e8] mb-4">Residential Areas</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Downtown Herndon historic homes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Worldgate neighborhoods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>McNair Farms communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Dulles residential corridor</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a73e8] mb-4">Commercial Properties</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Dulles tech corridor offices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Downtown Herndon businesses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Worldgate commercial centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Properties near Dulles Airport</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#1a73e8] text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Herndon Residents Trust Flood Doctor
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: '24/7 Availability',
                  description: 'Round-the-clock emergency response every day of the year',
                },
                {
                  title: 'Rapid Response',
                  description: 'Typically on-site within 60 minutes throughout Herndon',
                },
                {
                  title: 'Certified Technicians',
                  description: 'IICRC-certified water damage restoration specialists',
                },
                {
                  title: 'Insurance Assistance',
                  description: 'Direct billing and claims support with all major insurers',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Water Damage Restoration Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Emergency Contact', description: 'Call (877) 497-0007 for immediate dispatch' },
                { step: '2', title: 'Inspection & Assessment', description: 'Thorough evaluation of water damage extent' },
                { step: '3', title: 'Water Removal & Drying', description: 'Extraction and dehumidification process' },
                { step: '4', title: 'Restoration & Repair', description: 'Complete restoration to pre-loss condition' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#1a73e8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions - Herndon Water Damage
            </h2>
            <div className="space-y-6">
              {schema['@graph'][1].mainEntity.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.name}</h3>
                  <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Services in Herndon
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/locations/herndon-mold-removal" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-2 border-transparent hover:border-[#1a73e8]">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-3">Mold Removal Herndon</h3>
                <p className="text-gray-700">Professional mold remediation and prevention services</p>
              </Link>
              <Link href="/services/flood-cleanup" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-2 border-transparent hover:border-[#1a73e8]">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-3">Flood Cleanup</h3>
                <p className="text-gray-700">Complete flood damage restoration and recovery</p>
              </Link>
              <Link href="/services/emergency-water-extraction" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-2 border-transparent hover:border-[#1a73e8]">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-3">Emergency Water Extraction</h3>
                <p className="text-gray-700">Rapid water removal and damage mitigation</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Don't Wait - Water Damage Worsens Every Hour
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Serving all of Herndon, VA with 24/7 emergency water damage restoration. Our team is standing by to help restore your property.
            </p>
            <a
              href="tel:8774970007"
              className="bg-white text-[#1a73e8] px-12 py-5 rounded-lg font-bold text-2xl hover:bg-blue-50 transition inline-block"
            >
              Call Now: (877) 497-0007
            </a>
            <p className="mt-6 text-blue-100">
              Available 24/7/365 | Licensed & Insured | Insurance Approved
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
