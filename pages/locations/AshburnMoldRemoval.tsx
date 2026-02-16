import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';

export default function AshburnMoldRemoval() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://ashburn.flood.doctor/mold-removal",
        "name": "Flood Doctor - Ashburn Mold Removal & Remediation",
        "image": "https://flood.doctor/logo.png",
        "url": "https://ashburn.flood.doctor/mold-removal",
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
        "serviceType": "Mold Remediation and Removal"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How common is mold in Ashburn's newer homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mold is surprisingly common in Ashburn's newer construction due to rapid building schedules, modern energy-efficient designs that can trap moisture, and HVAC issues. Even new homes in communities like Brambleton and One Loudoun can experience mold growth from construction moisture or installation defects."
            }
          },
          {
            "@type": "Question",
            "name": "What are signs of mold in my Ashburn home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common signs include musty odors, visible black or green spots on walls or ceilings, water stains, increased allergy symptoms, condensation on windows, and peeling paint or wallpaper. Basements in Ashburn homes are particularly susceptible due to Loudoun County's clay soil and humidity."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide mold testing and inspection in Ashburn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer comprehensive mold inspections including visual assessments, moisture mapping, air quality testing, and surface sampling. Our certified inspectors can identify hidden mold behind walls and in crawl spaces common in Ashburn homes."
            }
          },
          {
            "@type": "Question",
            "name": "How long does mold remediation take in Ashburn homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most residential mold remediation projects in Ashburn take 1-5 days depending on the extent of contamination. Small areas may be completed in a day, while whole-basement remediation can take longer. We provide detailed timelines after inspection."
            }
          },
          {
            "@type": "Question",
            "name": "Is mold removal covered by homeowners insurance in Virginia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Coverage depends on the cause of mold growth. If mold results from a covered peril like a sudden pipe burst, it may be covered. However, mold from long-term neglect or maintenance issues typically isn't covered. We can help you document the source and work with your insurance company."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Removal in Ashburn, VA"
        description="Professional mold removal and remediation in Ashburn, VA. Serving Broadlands, One Loudoun, Brambleton, Lansdowne & Ashburn Village. Certified technicians, 24/7 service. Call (877) 497-0007"
        schema={jsonLd}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] text-white py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ashburn Mold Removal & Remediation
            </h1>
            <p className="text-xl mb-8 max-w-3xl">
              Certified mold remediation services for Ashburn, Broadlands, One Loudoun, Brambleton, and Lansdowne. Protecting your family's health with safe, effective mold removal.
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
                Free Mold Inspection
              </a>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-red-600 text-white py-4 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg font-semibold">
              🚨 24/7 Emergency Mold Response Available | Protect Your Family's Health: (877) 497-0007
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
                Professional Mold Remediation in Ashburn, VA
              </h2>

              <p className="text-gray-700 mb-6">
                Mold growth is a serious concern for Ashburn homeowners, threatening both property value and family health. Flood Doctor provides certified mold remediation services throughout Loudoun County, specializing in the unique challenges facing both established communities like Ashburn Village and rapidly growing areas such as Brambleton and One Loudoun.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Mold is Common in Ashburn Homes
              </h3>

              <p className="text-gray-700 mb-6">
                Loudoun County's rapid growth and construction boom has created unique mold challenges. Understanding these risk factors helps protect your home:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>New Construction Moisture:</strong> Rapidly built homes may not have fully dried before closing</li>
                <li><strong>Energy-Efficient Designs:</strong> Tight building envelopes can trap moisture without proper ventilation</li>
                <li><strong>Clay Soil Conditions:</strong> Loudoun County's clay soil retains water, affecting basements and crawl spaces</li>
                <li><strong>HVAC Installation Issues:</strong> Improper condensate drainage in newer systems</li>
                <li><strong>Finished Basements:</strong> Popular in Ashburn but vulnerable to moisture intrusion</li>
                <li><strong>High Humidity Summers:</strong> Virginia's humid climate creates ideal mold conditions</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Health Risks of Mold Exposure
              </h3>

              <p className="text-gray-700 mb-4">
                Mold exposure can cause serious health problems, particularly for children, elderly residents, and those with respiratory conditions. Common health effects include:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Allergic reactions and respiratory irritation</li>
                <li>Asthma attacks and breathing difficulties</li>
                <li>Chronic coughing and sneezing</li>
                <li>Skin and eye irritation</li>
                <li>Headaches and fatigue</li>
                <li>Immune system suppression in vulnerable individuals</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Our Comprehensive Mold Remediation Services
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-xl text-gray-900 mb-3">Inspection & Testing</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Visual mold inspections</li>
                    <li>• Thermal imaging moisture detection</li>
                    <li>• Air quality testing</li>
                    <li>• Surface sampling and analysis</li>
                    <li>• Hidden mold detection</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-xl text-gray-900 mb-3">Remediation Services</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Containment and air filtration</li>
                    <li>• Safe mold removal</li>
                    <li>• HEPA vacuuming</li>
                    <li>• Antimicrobial treatments</li>
                    <li>• Structural drying</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Common Mold Locations in Ashburn Homes
              </h3>

              <p className="text-gray-700 mb-4">
                <strong>Basements:</strong> The most common location for mold growth in Ashburn homes. Finished basements provide perfect conditions with organic materials, potential moisture intrusion, and often limited ventilation. We frequently service basement mold in Broadlands and Brambleton homes.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Bathrooms:</strong> Exhaust fan failures or inadequate ventilation lead to persistent moisture. Master bathrooms in newer Ashburn homes may experience mold growth around tubs, showers, and vanities.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Attics:</strong> Roof leaks, inadequate ventilation, or bathroom exhaust fans vented into attics create mold-friendly environments. Many Ashburn homes feature complex rooflines that can trap moisture.
              </p>

              <p className="text-gray-700 mb-4">
                <strong>Crawl Spaces:</strong> Ground moisture and poor ventilation make crawl spaces prime mold locations. Loudoun County's clay soil exacerbates moisture problems.
              </p>

              <p className="text-gray-700 mb-6">
                <strong>HVAC Systems:</strong> Condensation and dust accumulation in modern HVAC systems can foster mold growth, which then circulates throughout your home.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Our Mold Remediation Process
              </h3>

              <div className="bg-[#1a73e8] bg-opacity-5 border-l-4 border-[#1a73e8] p-6 mb-8">
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Initial Contact:</strong> Call (877) 497-0007 for consultation and scheduling</li>
                  <li><strong>2. Comprehensive Inspection:</strong> Visual assessment and moisture mapping</li>
                  <li><strong>3. Testing (if needed):</strong> Air and surface samples sent to certified lab</li>
                  <li><strong>4. Detailed Remediation Plan:</strong> Scope of work and timeline provided</li>
                  <li><strong>5. Containment Setup:</strong> Prevent cross-contamination during removal</li>
                  <li><strong>6. Air Filtration:</strong> HEPA filters capture airborne mold spores</li>
                  <li><strong>7. Mold Removal:</strong> Safe removal of contaminated materials</li>
                  <li><strong>8. Cleaning & Sanitizing:</strong> HEPA vacuuming and antimicrobial treatment</li>
                  <li><strong>9. Moisture Control:</strong> Address underlying moisture sources</li>
                  <li><strong>10. Final Verification:</strong> Post-remediation testing ensures success</li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Choose Flood Doctor for Mold Remediation
              </h3>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Certified Technicians:</strong> IICRC-certified mold remediation specialists</li>
                <li><strong>Local Expertise:</strong> Extensive experience with Ashburn and Loudoun County homes</li>
                <li><strong>Advanced Technology:</strong> Thermal imaging, moisture meters, and HEPA filtration</li>
                <li><strong>Safe Protocols:</strong> EPA and IICRC-compliant procedures</li>
                <li><strong>Insurance Assistance:</strong> Help with documentation and claims process</li>
                <li><strong>Complete Solutions:</strong> Address both mold and underlying moisture issues</li>
                <li><strong>Warranty Protection:</strong> Confidence in our remediation work</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Preventing Mold in Your Ashburn Home
              </h3>

              <p className="text-gray-700 mb-4">
                Prevention is the best approach to mold control. Follow these recommendations:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Maintain indoor humidity below 50% using dehumidifiers</li>
                <li>Ensure bathroom exhaust fans vent outside (not into attics)</li>
                <li>Run exhaust fans during and 20 minutes after showers</li>
                <li>Fix plumbing leaks immediately</li>
                <li>Ensure proper grading and gutter function around foundation</li>
                <li>Install vapor barriers in crawl spaces</li>
                <li>Regularly inspect and maintain HVAC systems</li>
                <li>Use mold-resistant products in moisture-prone areas</li>
                <li>Monitor basement humidity, especially in finished spaces</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Mold Remediation in New Construction
              </h3>

              <p className="text-gray-700 mb-6">
                Ashburn's building boom means many homeowners are dealing with mold in relatively new homes. Common issues in new construction include lumber that wasn't fully dried before installation, HVAC systems improperly sized or installed, and rapid construction schedules that don't allow proper drying time. We specialize in identifying and correcting these new-home mold issues while working with builders and warranty programs when applicable.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Black Mold vs. Other Mold Types
              </h3>

              <p className="text-gray-700 mb-6">
                While "black mold" (Stachybotrys chartarum) receives significant attention, all mold growth should be taken seriously. We encounter various mold species in Ashburn homes including Aspergillus, Penicillium, and Cladosporium. Proper identification through testing helps determine the appropriate remediation approach. Regardless of species, all mold requires professional removal to protect your health and property.
              </p>

              <div className="bg-gray-900 text-white p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">Concerned About Mold in Your Home?</h3>
                <p className="mb-6 text-lg">
                  Don't risk your family's health. Our certified mold remediation experts are available 24/7 for inspections and emergency response throughout Ashburn.
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
              <Link href="/services/residential/cleanup-services/mold-remediation/" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-2">Mold Remediation</h3>
                <p className="text-gray-700">Complete mold removal and prevention services</p>
              </Link>
              <Link href="/services/residential/restoration-services/water-damage-restoration/" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-2">Water Damage Restoration</h3>
                <p className="text-gray-700">Address water issues before mold develops</p>
              </Link>
              <Link href="/services/air-quality-testing" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#1a73e8] mb-2">Air Quality Testing</h3>
                <p className="text-gray-700">Professional indoor air quality assessments</p>
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
                  How common is mold in Ashburn's newer homes?
                </h3>
                <p className="text-gray-700">
                  Mold is surprisingly common in Ashburn's newer construction due to rapid building schedules, modern energy-efficient designs that can trap moisture, and HVAC issues. Even new homes in communities like Brambleton and One Loudoun can experience mold growth from construction moisture or installation defects.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What are signs of mold in my Ashburn home?
                </h3>
                <p className="text-gray-700">
                  Common signs include musty odors, visible black or green spots on walls or ceilings, water stains, increased allergy symptoms, condensation on windows, and peeling paint or wallpaper. Basements in Ashburn homes are particularly susceptible due to Loudoun County's clay soil and humidity.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you provide mold testing and inspection in Ashburn?
                </h3>
                <p className="text-gray-700">
                  Yes, we offer comprehensive mold inspections including visual assessments, moisture mapping, air quality testing, and surface sampling. Our certified inspectors can identify hidden mold behind walls and in crawl spaces common in Ashburn homes.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does mold remediation take in Ashburn homes?
                </h3>
                <p className="text-gray-700">
                  Most residential mold remediation projects in Ashburn take 1-5 days depending on the extent of contamination. Small areas may be completed in a day, while whole-basement remediation can take longer. We provide detailed timelines after inspection.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Is mold removal covered by homeowners insurance in Virginia?
                </h3>
                <p className="text-gray-700">
                  Coverage depends on the cause of mold growth. If mold results from a covered peril like a sudden pipe burst, it may be covered. However, mold from long-term neglect or maintenance issues typically isn't covered. We can help you document the source and work with your insurance company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#1a73e8] text-white py-20 lg:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ashburn's Certified Mold Remediation Experts
            </h2>
            <p className="text-xl mb-8">
              Protecting Loudoun County families with safe, effective mold removal
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
