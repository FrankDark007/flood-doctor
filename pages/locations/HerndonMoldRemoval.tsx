import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';

export default function HerndonMoldRemoval() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Flood Doctor - Mold Removal & Remediation Herndon VA",
        "image": "https://flood.doctor/logo.png",
        "@id": "https://herndon.flood.doctor/mold-removal",
        "url": "https://herndon.flood.doctor/mold-removal",
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
            "name": "How quickly can you respond to mold emergencies in Herndon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer 24/7 emergency mold inspection and remediation services throughout Herndon, VA, including Downtown Herndon, Worldgate, McNair Farms, and the Dulles corridor. Our certified mold specialists can typically arrive within 60 minutes of your call to (877) 497-0007."
            }
          },
          {
            "@type": "Question",
            "name": "What causes mold growth in Herndon homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mold thrives in Herndon's humid climate, especially after water damage, flooding, or plumbing leaks. Common causes include basement moisture, poor ventilation, roof leaks, and HVAC condensation. Our team identifies the moisture source and eliminates it to prevent future mold growth."
            }
          },
          {
            "@type": "Question",
            "name": "Do you serve commercial properties near the Dulles tech corridor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide comprehensive mold remediation for both residential and commercial properties throughout Herndon, including offices and facilities in the Dulles tech corridor, Downtown Herndon businesses, and properties near Dulles Airport."
            }
          },
          {
            "@type": "Question",
            "name": "Is mold dangerous to my family's health?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mold exposure can cause respiratory issues, allergies, and other health problems, especially for children, elderly individuals, and those with compromised immune systems. We use EPA-approved methods and containment procedures to safely remove mold and protect your family's health."
            }
          },
          {
            "@type": "Question",
            "name": "Will you work with my insurance for mold remediation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We work directly with insurance companies and assist Herndon homeowners throughout the claims process. We provide detailed documentation, air quality testing results, and photo evidence to support your mold remediation claim."
            }
          },
          {
            "@type": "Question",
            "name": "What areas of Herndon do you cover for mold removal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide complete mold inspection, testing, and remediation services throughout all Herndon neighborhoods including Downtown Herndon, Worldgate, McNair Farms, Dulles area, and surrounding communities in Fairfax County."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Removal Herndon VA | Certified Remediation | 24/7 Service | (877) 497-0007"
        description="Professional mold removal & remediation in Herndon, VA. Serving Downtown Herndon, Worldgate, McNair Farms & Dulles area. Certified specialists. Call (877) 497-0007!"
        schema={schema}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mold Removal & Remediation Herndon VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Certified Mold Specialists | Serving Downtown Herndon, Worldgate, McNair Farms & Dulles Tech Corridor
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
                Free Mold Inspection
              </a>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-red-600 text-white py-4 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg font-semibold">
              🚨 MOLD EMERGENCY? 24/7 Availability | Immediate Response Across Herndon
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Expert Mold Remediation Services in Herndon, Virginia
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Mold growth threatens your Herndon property and your family's health. Flood Doctor provides comprehensive mold inspection, testing, and remediation services throughout Herndon, VA, including Downtown Herndon, Worldgate, McNair Farms, and the Dulles Airport corridor.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our certified mold remediation specialists understand the unique challenges of Herndon's humid climate and older housing stock in historic neighborhoods. From basement mold in Downtown Herndon homes to commercial mold issues in the tech corridor, we deliver safe, effective solutions backed by advanced technology and EPA-approved methods.
            </p>
            <p className="text-lg text-gray-700">
              Don't let mold compromise your indoor air quality. Our team provides thorough inspections, laboratory testing, complete remediation, and prevention strategies to keep your Herndon property mold-free.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Complete Mold Services in Herndon
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Mold Inspection',
                  description: 'Thorough visual inspection and moisture detection using thermal imaging',
                },
                {
                  title: 'Mold Testing',
                  description: 'Air quality sampling and laboratory analysis to identify mold species',
                },
                {
                  title: 'Mold Remediation',
                  description: 'Safe removal and disposal following IICRC and EPA guidelines',
                },
                {
                  title: 'Containment',
                  description: 'Advanced containment barriers to prevent cross-contamination',
                },
                {
                  title: 'Air Filtration',
                  description: 'HEPA air scrubbers to capture airborne mold spores during remediation',
                },
                {
                  title: 'Restoration',
                  description: 'Complete repair and restoration of affected areas to pre-loss condition',
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

        {/* Health Risks */}
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Health Risks of Mold Exposure
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <p className="text-lg text-gray-800">
                <strong>Warning:</strong> Mold exposure can cause serious health issues. If you see or smell mold in your Herndon home, contact our certified specialists immediately at (877) 497-0007.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#1a73e8] mb-4">Common Symptoms</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    <span>Respiratory problems and difficulty breathing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    <span>Allergic reactions and skin irritation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    <span>Persistent coughing and sneezing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    <span>Headaches and fatigue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    <span>Eye, nose, and throat irritation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a73e8] mb-4">High-Risk Groups</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    <span>Infants and young children</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    <span>Elderly individuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    <span>People with asthma or allergies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    <span>Individuals with weakened immune systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    <span>Those with chronic respiratory conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="bg-gray-50 py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Herndon Communities We Serve
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#1a73e8] mb-4">Residential Mold Services</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Downtown Herndon historic properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Worldgate residential communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>McNair Farms neighborhoods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Dulles corridor homes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Properties near Dulles Airport</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a73e8] mb-4">Commercial Mold Solutions</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Dulles tech corridor office buildings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Downtown Herndon commercial spaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Retail centers and shopping complexes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Medical facilities and professional offices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">✓</span>
                    <span>Restaurants and hospitality properties</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#1a73e8] text-white py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Flood Doctor for Mold Remediation in Herndon
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Certified Specialists',
                  description: 'IICRC-certified mold remediation technicians with advanced training',
                },
                {
                  title: 'Advanced Technology',
                  description: 'Thermal imaging, moisture meters, and HEPA filtration systems',
                },
                {
                  title: '24/7 Emergency Service',
                  description: 'Round-the-clock availability for urgent mold situations',
                },
                {
                  title: 'Insurance Coordination',
                  description: 'Complete documentation and direct billing with insurers',
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
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Mold Remediation Process
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: '1', title: 'Inspection', description: 'Comprehensive mold assessment and moisture mapping' },
                { step: '2', title: 'Testing', description: 'Air quality sampling and lab analysis' },
                { step: '3', title: 'Containment', description: 'Isolation of affected areas to prevent spread' },
                { step: '4', title: 'Remediation', description: 'Safe mold removal using EPA-approved methods' },
                { step: '5', title: 'Verification', description: 'Post-remediation testing and clearance' },
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

        {/* Prevention Tips */}
        <section className="bg-gray-50 py-20 lg:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Preventing Mold in Your Herndon Property
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Control indoor humidity levels below 60%',
                'Fix water leaks and plumbing issues immediately',
                'Ensure proper ventilation in bathrooms and kitchens',
                'Use dehumidifiers in basements and crawl spaces',
                'Clean and maintain HVAC systems regularly',
                'Direct water away from foundation with proper grading',
                'Inspect roof and gutters for leaks and damage',
                'Address condensation issues around windows',
              ].map((tip, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow">
                  <span className="text-[#1a73e8] text-2xl mr-3">✓</span>
                  <p className="text-gray-700 text-lg">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions - Herndon Mold Removal
            </h2>
            <div className="space-y-6">
              {schema['@graph'][1].mainEntity.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#1a73e8]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.name}</h3>
                  <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-gray-50 py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Services in Herndon
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/locations/herndon-water-damage" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-2 border-transparent hover:border-[#1a73e8]">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-3">Water Damage Restoration</h3>
                <p className="text-gray-700">Emergency water extraction and structural drying services</p>
              </Link>
              <Link href="/services/residential/specialty-services/basement-flooding/" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-2 border-transparent hover:border-[#1a73e8]">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-3">Basement Waterproofing</h3>
                <p className="text-gray-700">Prevent moisture and mold with professional waterproofing</p>
              </Link>
              <Link href="/services/air-quality-testing" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-2 border-transparent hover:border-[#1a73e8]">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-3">Air Quality Testing</h3>
                <p className="text-gray-700">Comprehensive indoor air quality assessment and solutions</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white py-20 lg:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Don't Let Mold Compromise Your Health
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional mold inspection, testing, and remediation throughout Herndon, VA. Our certified specialists are available 24/7 to protect your property and family.
            </p>
            <a
              href="tel:8774970007"
              className="bg-white text-[#1a73e8] px-12 py-5 rounded-lg font-bold text-2xl hover:bg-blue-50 transition inline-block"
            >
              Call Now: (877) 497-0007
            </a>
            <p className="mt-6 text-blue-100">
              Free Mold Inspection | Certified Specialists | Insurance Approved
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
