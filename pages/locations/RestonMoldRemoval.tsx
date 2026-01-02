import React from 'react';
import PageMeta from '../../components/ui/PageMeta';

const RestonMoldRemoval: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://flood-doctor.com/locations/reston-mold-removal#business",
        "name": "Flood Doctor Mold Removal - Reston VA",
        "image": "https://flood-doctor.com/images/flood-doctor-logo.png",
        "url": "https://flood-doctor.com/locations/reston-mold-removal",
        "telephone": "(877) 497-0007",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Reston Town Center",
          "addressLocality": "Reston",
          "addressRegion": "VA",
          "postalCode": "20190",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 38.9586,
          "longitude": -77.3570
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
          "Reston Town Center",
          "Lake Anne",
          "South Lakes",
          "North Point",
          "Hunters Woods"
        ],
        "sameAs": [
          "https://www.facebook.com/flooddoctor",
          "https://twitter.com/flooddoctor"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I know if I have mold in my Reston home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common signs of mold in Reston homes include visible mold growth (often black, green, or white patches), musty odors, water stains on walls or ceilings, increased allergy symptoms, and condensation on windows. If you suspect mold, call (877) 497-0007 for a professional inspection."
            }
          },
          {
            "@type": "Question",
            "name": "Is mold common in Reston VA homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Reston's humid climate and proximity to water features make mold growth common, especially in older Lake Anne properties, poorly ventilated basements in South Lakes, and after water damage events. Regular inspections and prompt water damage repairs help prevent mold growth."
            }
          },
          {
            "@type": "Question",
            "name": "How long does mold remediation take in Reston properties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most residential mold remediation projects in Reston take 1-5 days depending on the extent of contamination. Small areas may be completed in one day, while larger infestations requiring reconstruction may take a week or more. We provide a detailed timeline after inspection."
            }
          },
          {
            "@type": "Question",
            "name": "Can I stay in my Reston home during mold removal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For small, contained mold removal projects, you may remain in your Reston home. However, larger remediation projects requiring containment barriers and negative air pressure typically require temporary relocation. We'll assess your specific situation and provide guidance on safety."
            }
          },
          {
            "@type": "Question",
            "name": "Does homeowners insurance cover mold remediation in Reston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Insurance coverage for mold in Reston depends on the cause. Mold resulting from sudden water damage (like burst pipes) is often covered, while mold from gradual issues or maintenance neglect typically isn't. We work with your insurance company to maximize coverage."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Removal Reston VA | Certified Mold Remediation | (877) 497-0007"
        description="Professional mold removal and remediation in Reston VA. Certified technicians, 24/7 service. Serving Reston Town Center, Lake Anne, South Lakes. Call (877) 497-0007."
        schema={schema}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Mold Removal in Reston VA
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Certified Mold Remediation | 24/7 Emergency Service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8774970007" className="bg-white text-[#1a73e8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                  Call Now: (877) 497-0007
                </a>
                <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1a73e8] transition">
                  Free Mold Inspection
                </a>
              </div>
              <p className="mt-6 text-blue-100">
                Serving Reston Town Center, Lake Anne, South Lakes, North Point & Hunters Woods
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#1a73e8] mb-2">24/7</div>
                <div className="text-gray-600">Emergency Availability</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1a73e8] mb-2">1,800+</div>
                <div className="text-gray-600">Reston Mold Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1a73e8] mb-2">4.9/5</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Certified Mold Remediation Specialists Serving Reston Virginia
                </h2>
                <p className="text-gray-700 mb-4">
                  Mold growth is a serious concern for Reston homeowners and businesses. Virginia's humid climate combined with Reston's proximity to lakes and water features creates ideal conditions for mold development. Flood Doctor provides comprehensive mold inspection, testing, remediation, and prevention services throughout Reston, VA.
                </p>
                <p className="text-gray-700 mb-4">
                  Our IICRC-certified mold remediation specialists understand the unique challenges facing Reston properties. From older Lake Anne townhomes with basement moisture issues to newer Reston Town Center condos dealing with HVAC-related mold, we've successfully remediated mold in every type of Reston property.
                </p>
                <p className="text-gray-700 mb-6">
                  Whether you're dealing with visible mold growth, musty odors, or health concerns related to indoor air quality, our team provides safe, effective mold removal that addresses the root cause and prevents future growth. We use advanced containment methods, HEPA filtration, and EPA-approved antimicrobial treatments to restore your Reston property to a healthy, mold-free condition.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Comprehensive Mold Remediation Process
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-[#1a73e8] pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">1. Mold Inspection & Assessment</h4>
                    <p className="text-gray-700">Thorough visual inspection and moisture mapping to identify all mold-affected areas in your Reston property. We use thermal imaging and moisture meters to detect hidden mold.</p>
                  </div>
                  <div className="border-l-4 border-[#1a73e8] pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">2. Mold Testing & Analysis</h4>
                    <p className="text-gray-700">Air quality testing and surface sampling sent to certified labs to identify mold species and contamination levels. This helps us develop the most effective remediation plan.</p>
                  </div>
                  <div className="border-l-4 border-[#1a73e8] pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">3. Containment & Air Filtration</h4>
                    <p className="text-gray-700">We establish physical barriers and negative air pressure to prevent mold spores from spreading to unaffected areas during remediation. HEPA air scrubbers continuously filter the air.</p>
                  </div>
                  <div className="border-l-4 border-[#1a73e8] pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">4. Mold Removal & Cleaning</h4>
                    <p className="text-gray-700">Safe removal of mold-contaminated materials and HEPA vacuuming of all surfaces. We use EPA-approved antimicrobial treatments to eliminate mold at the source.</p>
                  </div>
                  <div className="border-l-4 border-[#1a73e8] pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">5. Restoration & Prevention</h4>
                    <p className="text-gray-700">Repair and restoration of removed materials, plus moisture control solutions to prevent future mold growth in your Reston property.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Common Mold Issues in Reston Homes
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700"><strong>Basement Mold:</strong> High humidity and poor ventilation in Lake Anne and South Lakes basements create ideal mold conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700"><strong>Bathroom Mold:</strong> Inadequate ventilation in older Reston townhomes leads to persistent bathroom mold growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700"><strong>Attic Mold:</strong> Roof leaks and poor insulation in Hunters Woods and North Point properties cause attic mold</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700"><strong>HVAC Mold:</strong> Condensation in air conditioning systems spreads mold spores throughout Reston Town Center buildings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700"><strong>Water Damage Mold:</strong> Mold developing after flooding, pipe bursts, or appliance leaks in any Reston neighborhood</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Health Risks of Mold Exposure
                </h3>
                <p className="text-gray-700 mb-4">
                  Mold exposure can cause serious health problems for Reston residents, particularly those with allergies, asthma, or compromised immune systems. Common symptoms include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">•</span>
                      <span className="text-gray-700">Respiratory problems and coughing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">•</span>
                      <span className="text-gray-700">Nasal congestion and sinus issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">•</span>
                      <span className="text-gray-700">Eye, skin, and throat irritation</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">•</span>
                      <span className="text-gray-700">Headaches and fatigue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">•</span>
                      <span className="text-gray-700">Asthma attacks and allergic reactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">•</span>
                      <span className="text-gray-700">Difficulty breathing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Why Choose Flood Doctor for Reston Mold Removal?
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">IICRC-certified mold remediation specialists with extensive Reston experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">Advanced mold detection technology including thermal imaging and moisture meters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">Safe containment methods to protect your family and unaffected areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">EPA-approved antimicrobial treatments and HEPA filtration systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">Complete documentation for insurance claims and real estate transactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">Post-remediation verification testing to ensure complete mold removal</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Preventing Mold Growth in Reston Properties
                </h3>
                <p className="text-gray-700 mb-4">
                  The best defense against mold is prevention. Here are expert tips for Reston homeowners:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700">Control indoor humidity levels below 60% using dehumidifiers in basements and crawl spaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700">Ensure proper ventilation in bathrooms, kitchens, and laundry rooms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700">Fix water leaks and plumbing issues immediately to prevent moisture buildup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700">Clean gutters regularly to prevent water intrusion around foundations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700">Improve attic ventilation and insulation to prevent condensation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700">Schedule regular HVAC maintenance to prevent mold in air conditioning systems</span>
                  </li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-[#1a73e8] text-white p-8 rounded-lg mb-8 sticky top-4">
                  <h3 className="text-2xl font-bold mb-4">24/7 Mold Emergency</h3>
                  <p className="mb-6">Mold won't wait. Get professional help now.</p>
                  <a href="tel:8774970007" className="block bg-white text-[#1a73e8] text-center px-6 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition mb-4">
                    (877) 497-0007
                  </a>
                  <p className="text-sm text-blue-100 text-center">Free mold inspection available</p>

                  <div className="mt-8 pt-8 border-t border-blue-400">
                    <h4 className="font-bold mb-4">Reston Areas Served:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Reston Town Center</li>
                      <li>• Lake Anne</li>
                      <li>• South Lakes</li>
                      <li>• North Point</li>
                      <li>• Hunters Woods</li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-8 border-t border-blue-400">
                    <h4 className="font-bold mb-4">Related Services:</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="/services/mold-remediation" className="hover:underline">• Mold Remediation</a></li>
                      <li><a href="/services/water-damage-restoration" className="hover:underline">• Water Damage Restoration</a></li>
                      <li><a href="/services/air-quality-testing" className="hover:underline">• Air Quality Testing</a></li>
                      <li><a href="/services/basement-waterproofing" className="hover:underline">• Basement Waterproofing</a></li>
                      <li><a href="/services/dehumidification" className="hover:underline">• Dehumidification Services</a></li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-8 border-t border-blue-400">
                    <h4 className="font-bold mb-4">Certifications:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• IICRC Certified</li>
                      <li>• EPA Guidelines Compliant</li>
                      <li>• Licensed & Insured</li>
                      <li>• Background Checked</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions About Mold in Reston
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How do I know if I have mold in my Reston home?
                </h3>
                <p className="text-gray-700">
                  Common signs of mold in Reston homes include visible mold growth (often black, green, or white patches), musty odors, water stains on walls or ceilings, increased allergy symptoms, and condensation on windows. If you suspect mold, call (877) 497-0007 for a professional inspection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is mold common in Reston VA homes?
                </h3>
                <p className="text-gray-700">
                  Yes, Reston's humid climate and proximity to water features make mold growth common, especially in older Lake Anne properties, poorly ventilated basements in South Lakes, and after water damage events. Regular inspections and prompt water damage repairs help prevent mold growth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does mold remediation take in Reston properties?
                </h3>
                <p className="text-gray-700">
                  Most residential mold remediation projects in Reston take 1-5 days depending on the extent of contamination. Small areas may be completed in one day, while larger infestations requiring reconstruction may take a week or more. We provide a detailed timeline after inspection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can I stay in my Reston home during mold removal?
                </h3>
                <p className="text-gray-700">
                  For small, contained mold removal projects, you may remain in your Reston home. However, larger remediation projects requiring containment barriers and negative air pressure typically require temporary relocation. We'll assess your specific situation and provide guidance on safety.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Does homeowners insurance cover mold remediation in Reston?
                </h3>
                <p className="text-gray-700">
                  Insurance coverage for mold in Reston depends on the cause. Mold resulting from sudden water damage (like burst pipes) is often covered, while mold from gradual issues or maintenance neglect typically isn't. We work with your insurance company to maximize coverage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1a73e8] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't Let Mold Compromise Your Health or Property
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Call now for professional mold inspection and certified remediation services
            </p>
            <a href="tel:8774970007" className="inline-block bg-white text-[#1a73e8] px-10 py-5 rounded-lg font-bold text-2xl hover:bg-gray-100 transition">
              (877) 497-0007
            </a>
            <p className="mt-6 text-blue-100">
              Serving all of Reston VA | Free Mold Inspection | Insurance Claims Assistance
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RestonMoldRemoval;
