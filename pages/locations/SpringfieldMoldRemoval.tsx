import React from 'react';
import PageMeta from '../../components/ui/PageMeta';

const SpringfieldMoldRemoval: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://springfield.flood.doctor/mold-removal",
        "name": "Flood Doctor - Mold Removal & Remediation Springfield VA",
        "image": "https://flood.doctor/logo.png",
        "url": "https://springfield.flood.doctor/mold-removal",
        "telephone": "(877) 497-0007",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Springfield Service Area",
          "addressLocality": "Springfield",
          "addressRegion": "VA",
          "postalCode": "22150",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 38.7891,
          "longitude": -77.1872
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
          "Springfield",
          "Kingstowne",
          "Franconia",
          "Van Dorn",
          "West Springfield",
          "Fairfax County"
        ],
        "description": "Professional mold removal and remediation services in Springfield, VA. Serving Springfield Mall area, Kingstowne, Franconia, and all of Fairfax County with 24/7 availability."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you respond to mold emergencies in Springfield, VA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer 24/7 emergency mold remediation services in Springfield, VA with same-day response available. Our certified technicians serve the Springfield Mall area, Kingstowne, Franconia, Van Dorn, West Springfield, and throughout Fairfax County."
            }
          },
          {
            "@type": "Question",
            "name": "What areas of Springfield do you provide mold removal services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide comprehensive mold removal and remediation throughout Springfield including the Springfield Mall area, Kingstowne, Franconia, Van Dorn, West Springfield, and all surrounding Fairfax County neighborhoods. Our team is equipped to handle residential and commercial mold issues."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer free mold inspections in Springfield, VA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide free mold inspections for Springfield and Fairfax County residents. Our certified inspectors use advanced moisture detection and air quality testing to identify mold growth, determine the extent of contamination, and create a comprehensive remediation plan."
            }
          },
          {
            "@type": "Question",
            "name": "Is mold dangerous to my family's health in Springfield homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, mold exposure can cause serious health issues including respiratory problems, allergic reactions, headaches, and aggravated asthma. Springfield's humid climate can promote mold growth, especially after water damage. Professional mold removal is essential to protect your family's health."
            }
          },
          {
            "@type": "Question",
            "name": "How long does mold remediation take in Springfield, VA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most mold remediation projects in Springfield take 1-5 days depending on the extent of contamination. Small areas may be completed in one day, while larger projects involving multiple rooms or structural mold may take longer. We provide detailed timelines during the inspection."
            }
          },
          {
            "@type": "Question",
            "name": "Will insurance cover mold removal in Springfield?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Insurance coverage for mold removal in Springfield depends on the cause. Mold resulting from covered water damage events like burst pipes is typically covered. We work directly with Fairfax County insurance providers to document the damage and help maximize your claim."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Removal in Springfield, VA"
        description="Expert mold removal & remediation in Springfield, VA. Serving Kingstowne, Franconia, West Springfield & Fairfax County. Free inspections. Call (877) 497-0007 today."
        schema={structuredData}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Mold Removal in Springfield, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Certified Remediation Specialists | Serving Fairfax County | Safe & Effective
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8774970007"
                className="inline-block bg-white text-[#1a73e8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors text-center"
              >
                Call Now: (877) 497-0007
              </a>
              <a
                href="#contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1a73e8] transition-colors text-center"
              >
                Free Mold Inspection
              </a>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-yellow-500 text-gray-900 py-4 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg font-semibold">
              ⚠️ Mold Problem? Available 24/7 | Call <a href="tel:8774970007" className="underline font-bold">(877) 497-0007</a> for Free Inspection
            </p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 lg:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Mold Remediation Across Springfield & Fairfax County
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Springfield Mall Area',
                'Kingstowne',
                'Franconia',
                'Van Dorn',
                'West Springfield',
                'Fairfax County'
              ].map((area) => (
                <div key={area} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#1a73e8]">
                  <h3 className="text-xl font-semibold text-gray-900">{area}</h3>
                  <p className="text-gray-600 mt-2">Professional mold removal services</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Comprehensive Mold Removal Services
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              From initial inspection through final clearance testing, we provide complete mold remediation services for Springfield and Fairfax County properties.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mold Inspection & Testing</h3>
                <p className="text-gray-600">
                  Comprehensive inspections using moisture meters, thermal imaging, and air quality testing to identify all mold contamination.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Containment & Air Filtration</h3>
                <p className="text-gray-600">
                  Professional containment barriers and HEPA air filtration to prevent mold spore spread during remediation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">🧹</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mold Removal & Cleaning</h3>
                <p className="text-gray-600">
                  Safe removal of mold-contaminated materials and antimicrobial treatment of affected surfaces.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">💨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dehumidification & Drying</h3>
                <p className="text-gray-600">
                  Industrial dehumidification to eliminate excess moisture and prevent future mold growth in your Springfield property.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Restoration & Reconstruction</h3>
                <p className="text-gray-600">
                  Complete restoration of removed materials including drywall, flooring, and structural components.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Remediation Verification</h3>
                <p className="text-gray-600">
                  Final air quality testing and clearance certificates to ensure your Fairfax County property is mold-free.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/services/residential/cleanup-services/mold-remediation/"
                className="inline-block text-[#1a73e8] hover:text-[#1557b0] font-semibold text-lg"
              >
                Learn More About Our Mold Remediation Process →
              </a>
            </div>
          </div>
        </section>

        {/* Health Risks */}
        <section className="py-20 lg:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Immediate Mold Removal is Critical
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Risks of Mold Exposure</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Respiratory problems and breathing difficulties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Allergic reactions and skin irritation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Asthma attacks and aggravated symptoms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Headaches, fatigue, and cognitive issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Immune system suppression</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Severe reactions in children and elderly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Damage from Mold</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Structural damage to walls and framing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Destroyed drywall, insulation, and flooring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Decreased property value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Musty odors throughout the home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Damage to personal belongings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Difficulty selling Springfield properties</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <p className="text-lg text-gray-800">
                <strong>Don't wait:</strong> Mold spreads rapidly in Springfield's humid climate. What starts as a small patch can become a major contamination in days. Call (877) 497-0007 for immediate professional assessment.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Springfield Chooses Flood Doctor for Mold Removal
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1a73e8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Mold Specialists</h3>
                  <p className="text-gray-600">
                    IICRC-certified technicians with advanced training in mold inspection, remediation, and indoor air quality management.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1a73e8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Detection Technology</h3>
                  <p className="text-gray-600">
                    Thermal imaging, moisture meters, and professional air quality testing to identify all mold contamination.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1a73e8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Safe Containment Protocols</h3>
                  <p className="text-gray-600">
                    Professional containment barriers and negative air pressure systems prevent mold spore spread during remediation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1a73e8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Insurance Coordination</h3>
                  <p className="text-gray-600">
                    We work directly with Fairfax County insurance companies to document damage and help maximize your coverage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1a73e8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Restoration</h3>
                  <p className="text-gray-600">
                    From mold removal through final reconstruction, we handle every aspect of restoration under one roof.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1a73e8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Guaranteed Results</h3>
                  <p className="text-gray-600">
                    Post-remediation air quality testing and clearance certificates to verify complete mold elimination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Mold Remediation Process
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Professional, thorough, and safe mold removal from start to finish
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Inspection</h3>
                <p className="text-gray-600">
                  Comprehensive assessment with moisture detection and air quality testing throughout your Springfield property.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1a73e8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Containment Setup</h3>
                <p className="text-gray-600">
                  Professional barriers and negative air pressure systems to isolate contaminated areas.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1a73e8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mold Removal</h3>
                <p className="text-gray-600">
                  Safe removal of contaminated materials and antimicrobial treatment of all affected surfaces.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1a73e8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cleaning & Drying</h3>
                <p className="text-gray-600">
                  HEPA vacuuming, air scrubbing, and dehumidification to eliminate moisture sources.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1a73e8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Restoration & Testing</h3>
                <p className="text-gray-600">
                  Complete restoration with final air quality testing to verify successful remediation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Signs of Mold */}
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Signs You Need Mold Removal in Springfield
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#1a73e8]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visible Signs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Black, green, or white patches on walls</li>
                  <li>• Discoloration on ceilings or floors</li>
                  <li>• Warped or bubbling drywall</li>
                  <li>• Stained or peeling wallpaper</li>
                  <li>• Visible growth in corners or grout</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#1a73e8]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Odor Indicators</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Persistent musty smell</li>
                  <li>• Earthy or damp odors</li>
                  <li>• Smell worsens in humid weather</li>
                  <li>• Odor stronger in basements</li>
                  <li>• Unidentified stale air</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#1a73e8]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Health Symptoms</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Increased allergy symptoms</li>
                  <li>• Respiratory irritation</li>
                  <li>• Persistent coughing or sneezing</li>
                  <li>• Headaches when at home</li>
                  <li>• Skin rashes or irritation</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                Experiencing any of these signs in your Springfield home?
              </p>
              <a
                href="tel:8774970007"
                className="inline-block bg-[#1a73e8] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1557b0] transition-colors"
              >
                Schedule Free Inspection: (877) 497-0007
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-24 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How quickly can you respond to mold emergencies in Springfield, VA?
                </h3>
                <p className="text-gray-600">
                  We offer 24/7 emergency mold remediation services in Springfield, VA with same-day response available. Our certified technicians serve the Springfield Mall area, Kingstowne, Franconia, Van Dorn, West Springfield, and throughout Fairfax County.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What areas of Springfield do you provide mold removal services?
                </h3>
                <p className="text-gray-600">
                  We provide comprehensive mold removal and remediation throughout Springfield including the Springfield Mall area, Kingstowne, Franconia, Van Dorn, West Springfield, and all surrounding Fairfax County neighborhoods. Our team is equipped to handle residential and commercial mold issues.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you offer free mold inspections in Springfield, VA?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide free mold inspections for Springfield and Fairfax County residents. Our certified inspectors use advanced moisture detection and air quality testing to identify mold growth, determine the extent of contamination, and create a comprehensive remediation plan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is mold dangerous to my family's health in Springfield homes?
                </h3>
                <p className="text-gray-600">
                  Yes, mold exposure can cause serious health issues including respiratory problems, allergic reactions, headaches, and aggravated asthma. Springfield's humid climate can promote mold growth, especially after water damage. Professional mold removal is essential to protect your family's health.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does mold remediation take in Springfield, VA?
                </h3>
                <p className="text-gray-600">
                  Most mold remediation projects in Springfield take 1-5 days depending on the extent of contamination. Small areas may be completed in one day, while larger projects involving multiple rooms or structural mold may take longer. We provide detailed timelines during the inspection.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Will insurance cover mold removal in Springfield?
                </h3>
                <p className="text-gray-600">
                  Insurance coverage for mold removal in Springfield depends on the cause. Mold resulting from covered water damage events like burst pipes is typically covered. We work directly with Fairfax County insurance providers to document the damage and help maximize your claim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 px-4 bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protect Your Springfield Home from Mold
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't let mold compromise your family's health or your property value. Get a free professional inspection today.
            </p>
            <a
              href="tel:8774970007"
              className="inline-block bg-white text-[#1a73e8] px-10 py-5 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors"
            >
              Call (877) 497-0007 for Free Inspection
            </a>
            <p className="mt-6 text-blue-100">
              Serving Springfield, Kingstowne, Franconia, West Springfield & All of Fairfax County
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 lg:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Related Services in Springfield
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/water-damage-restoration-springfield-va"
                className="inline-block bg-gray-100 hover:bg-[#1a73e8] hover:text-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Water Damage Restoration
              </a>
              <a
                href="/services/mold-inspection"
                className="inline-block bg-gray-100 hover:bg-[#1a73e8] hover:text-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Mold Inspection
              </a>
              <a
                href="/services/air-quality-testing"
                className="inline-block bg-gray-100 hover:bg-[#1a73e8] hover:text-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Air Quality Testing
              </a>
              <a
                href="/services/humidity-control"
                className="inline-block bg-gray-100 hover:bg-[#1a73e8] hover:text-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Humidity Control
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SpringfieldMoldRemoval;
