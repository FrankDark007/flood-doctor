import React from 'react';
import PageMeta from '../../components/ui/PageMeta';

const FallsChurchMoldRemoval: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flood Doctor Mold Removal & Remediation - Falls Church",
    "image": "https://flood.doctor/logo.png",
    "@id": "https://falls-church.flood.doctor/mold-removal",
    "url": "https://falls-church.flood.doctor/mold-removal",
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
        "name": "Why is mold so common in Falls Church homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Falls Church's humid climate combined with the area's older housing stock creates ideal conditions for mold growth. Many homes built before 1980 have insufficient ventilation, aging HVAC systems, and moisture issues from outdated construction methods. Basements in Seven Corners and Bailey's Crossroads are particularly susceptible."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly should I address mold in my Falls Church property?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Immediately. Mold can spread rapidly and pose serious health risks to occupants. In Falls Church's humid environment, small mold problems can become major infestations within days. Our 24/7 emergency response ensures we can start remediation before the problem escalates."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide mold testing and inspection in Falls Church?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive mold testing and inspection services throughout Falls Church City, Merrifield, and surrounding areas. Our certified inspectors use advanced moisture meters, thermal imaging, and air quality testing to identify hidden mold and moisture sources."
        }
      },
      {
        "@type": "Question",
        "name": "Is mold removal covered by insurance in Falls Church?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coverage depends on the cause of the mold. Mold resulting from sudden water damage (like a burst pipe) is often covered, while mold from long-term neglect typically isn't. We work directly with Falls Church insurance companies and help document the source to maximize your claim potential."
        }
      },
      {
        "@type": "Question",
        "name": "What areas of Falls Church do you serve for mold removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide mold remediation services throughout all of Falls Church City including Seven Corners, Bailey's Crossroads, Merrifield, Eden Center area, and nearby communities. Our team responds 24/7 to both residential and commercial properties."
        }
      }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Removal Falls Church VA | Certified Mold Remediation | (877) 497-0007"
        description="Professional mold removal & remediation in Falls Church, VA. Certified experts serving Falls Church City, Seven Corners & Bailey's Crossroads. 24/7 emergency service. Call (877) 497-0007."
        schema={[localBusinessSchema, faqSchema]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] text-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mold Removal & Remediation in Falls Church, VA
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Certified Mold Specialists Serving Falls Church City & Surrounding Areas
              </p>
              <a
                href="tel:8774970007"
                className="inline-block bg-white text-[#1a73e8] px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                Call Now: (877) 497-0007
              </a>
              <p className="mt-4 text-lg">24/7 Emergency Mold Response Available</p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Protecting Falls Church Communities from Mold</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">Falls Church City</div>
              <div className="p-4 bg-gray-50 rounded-lg">Seven Corners</div>
              <div className="p-4 bg-gray-50 rounded-lg">Bailey's Crossroads</div>
              <div className="p-4 bg-gray-50 rounded-lg">Merrifield</div>
              <div className="p-4 bg-gray-50 rounded-lg">Eden Center Area</div>
            </div>
          </div>
        </section>

        {/* Why Falls Church Homes Are Vulnerable */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Why Falls Church Properties Face Mold Challenges</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Older Housing Stock</h3>
                <p className="text-gray-700 mb-4">
                  As an independent city with a rich history, Falls Church contains numerous homes built before modern moisture control standards. These older properties often feature inadequate ventilation, aging foundations, and outdated building materials that are particularly susceptible to mold growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Virginia's Humid Climate</h3>
                <p className="text-gray-700 mb-4">
                  Falls Church experiences high humidity levels throughout spring and summer months. Combined with temperature fluctuations, this creates perfect conditions for mold spores to colonize in basements, crawl spaces, and poorly ventilated areas common in Seven Corners and Bailey's Crossroads neighborhoods.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Basement & Foundation Issues</h3>
                <p className="text-gray-700 mb-4">
                  Many Falls Church homes, particularly in Merrifield and surrounding areas, have basements susceptible to water seepage and moisture intrusion. Older foundation construction and changing drainage patterns from urban development contribute to persistent dampness that fuels mold growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">HVAC & Ventilation Deficiencies</h3>
                <p className="text-gray-700 mb-4">
                  Aging HVAC systems and insufficient bathroom/kitchen ventilation in Falls Church's older homes create moisture accumulation problems. Without proper air circulation and humidity control, mold can develop in walls, ductwork, and hidden cavities throughout the property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Health Risks */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Health Risks of Mold Exposure</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <p className="text-gray-800">
                Mold exposure can cause serious health problems, especially for children, elderly residents, and those with respiratory conditions common in Falls Church households. Don't risk your family's health - call for professional mold remediation immediately.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-3 text-[#1a73e8]">Respiratory Issues</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Chronic coughing and wheezing</li>
                  <li>• Asthma attacks and complications</li>
                  <li>• Difficulty breathing</li>
                  <li>• Throat and lung irritation</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-3 text-[#1a73e8]">Allergic Reactions</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Sneezing and runny nose</li>
                  <li>• Red, itchy eyes</li>
                  <li>• Skin rashes and irritation</li>
                  <li>• Sinus congestion</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-3 text-[#1a73e8]">Other Symptoms</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Persistent headaches</li>
                  <li>• Fatigue and weakness</li>
                  <li>• Memory and concentration issues</li>
                  <li>• Immune system suppression</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Mold Remediation Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Mold Inspection & Testing</h3>
                <p className="text-gray-700 mb-4">
                  Thorough visual inspection, moisture mapping, thermal imaging, and air quality testing to identify all mold contamination and moisture sources in your Falls Church property.
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Certified mold inspectors</li>
                  <li>• Advanced detection equipment</li>
                  <li>• Laboratory analysis</li>
                  <li>• Detailed reporting</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Mold Removal & Remediation</h3>
                <p className="text-gray-700 mb-4">
                  Safe, effective removal of mold contamination using industry-leading protocols. Full containment, HEPA filtration, and proper disposal protect your Falls Church City home during remediation.
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Containment barriers</li>
                  <li>• HEPA air scrubbers</li>
                  <li>• Safe material removal</li>
                  <li>• Antimicrobial treatment</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Moisture Control & Prevention</h3>
                <p className="text-gray-700 mb-4">
                  Address the root cause of mold growth with comprehensive moisture control solutions designed for Falls Church's climate and older housing conditions.
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Dehumidification systems</li>
                  <li>• Vapor barriers installation</li>
                  <li>• Drainage improvements</li>
                  <li>• Ventilation upgrades</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Post-Remediation Verification</h3>
                <p className="text-gray-700 mb-4">
                  Independent clearance testing confirms successful mold removal and ensures your Seven Corners or Merrifield property is safe for occupancy.
                </p>
                <a href="/services/mold-testing" className="text-[#1a73e8] hover:underline mt-2 inline-block">Learn more →</a>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Water Damage Restoration</h3>
                <p className="text-gray-700 mb-4">
                  Rapid water extraction and drying services prevent mold growth after flooding, leaks, or water damage incidents throughout Falls Church.
                </p>
                <a href="/locations/falls-church-water-damage" className="text-[#1a73e8] hover:underline mt-2 inline-block">Learn more →</a>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#1a73e8]">Reconstruction Services</h3>
                <p className="text-gray-700 mb-4">
                  Complete restoration and rebuilding after mold removal, returning your Bailey's Crossroads property to pre-loss condition.
                </p>
                <a href="/services/reconstruction" className="text-[#1a73e8] hover:underline mt-2 inline-block">Learn more →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mold Remediation Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold mb-2">Emergency Call</h3>
                <p className="text-gray-700 text-sm">Contact us 24/7 at (877) 497-0007 for immediate Falls Church response.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold mb-2">Inspection</h3>
                <p className="text-gray-700 text-sm">Comprehensive mold assessment with advanced testing and moisture detection.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold mb-2">Containment</h3>
                <p className="text-gray-700 text-sm">Isolate affected areas to prevent mold spore spread during remediation.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold mb-2">Remediation</h3>
                <p className="text-gray-700 text-sm">Safe removal using HEPA filtration and professional protocols.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
                <h3 className="font-bold mb-2">Restoration</h3>
                <p className="text-gray-700 text-sm">Complete reconstruction and clearance testing to ensure safety.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Falls Church Residents Choose Flood Doctor</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-bold mb-2">Certified Specialists</h3>
                <p className="text-gray-700 text-sm">IICRC-certified mold remediation technicians with extensive Falls Church experience.</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="font-bold mb-2">24/7 Availability</h3>
                <p className="text-gray-700 text-sm">Emergency response any time, day or night, throughout Falls Church City.</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-bold mb-2">Safe Protocols</h3>
                <p className="text-gray-700 text-sm">EPA and OSHA-compliant procedures protect your family and property.</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-bold mb-2">Insurance Experts</h3>
                <p className="text-gray-700 text-sm">Direct insurance billing and claims assistance for Falls Church clients.</p>
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
                <h3 className="text-xl font-bold mb-3">Why is mold so common in Falls Church homes?</h3>
                <p className="text-gray-700">
                  Falls Church's humid climate combined with the area's older housing stock creates ideal conditions for mold growth. Many homes built before 1980 have insufficient ventilation, aging HVAC systems, and moisture issues from outdated construction methods. Basements in Seven Corners and Bailey's Crossroads are particularly susceptible.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">How quickly should I address mold in my Falls Church property?</h3>
                <p className="text-gray-700">
                  Immediately. Mold can spread rapidly and pose serious health risks to occupants. In Falls Church's humid environment, small mold problems can become major infestations within days. Our 24/7 emergency response ensures we can start remediation before the problem escalates.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">Do you provide mold testing and inspection in Falls Church?</h3>
                <p className="text-gray-700">
                  Yes, we offer comprehensive mold testing and inspection services throughout Falls Church City, Merrifield, and surrounding areas. Our certified inspectors use advanced moisture meters, thermal imaging, and air quality testing to identify hidden mold and moisture sources.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">Is mold removal covered by insurance in Falls Church?</h3>
                <p className="text-gray-700">
                  Coverage depends on the cause of the mold. Mold resulting from sudden water damage (like a burst pipe) is often covered, while mold from long-term neglect typically isn't. We work directly with Falls Church insurance companies and help document the source to maximize your claim potential.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold mb-3">What areas of Falls Church do you serve for mold removal?</h3>
                <p className="text-gray-700">
                  We provide mold remediation services throughout all of Falls Church City including Seven Corners, Bailey's Crossroads, Merrifield, Eden Center area, and nearby communities. Our team responds 24/7 to both residential and commercial properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-[#1a73e8] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Falls Church Home from Mold Today</h2>
            <p className="text-xl mb-8">
              Don't let mold compromise your family's health and your property value. Our certified mold specialists are available 24/7 to provide immediate inspection and remediation services throughout Falls Church.
            </p>
            <a
              href="tel:8774970007"
              className="inline-block bg-white text-[#1a73e8] px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Call (877) 497-0007 Now
            </a>
            <p className="mt-4 text-lg">Free Mold Inspection • Certified Specialists • Insurance Accepted</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FallsChurchMoldRemoval;
