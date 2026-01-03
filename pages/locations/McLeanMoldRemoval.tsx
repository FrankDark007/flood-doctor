import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const McLeanMoldRemoval: React.FC = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mclean.flood.doctor/mold-removal",
    "name": "Flood Doctor - Mold Removal McLean VA",
    "image": "https://flood.doctor/logo.png",
    "url": "https://mclean.flood.doctor/mold-removal",
    "telephone": "+1-877-497-0007",
    "description": "Professional mold removal and remediation in McLean, VA. EPA-approved methods, IICRC certified, serving Great Falls, Langley, Pimmit Hills, and Tysons.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "McLean",
      "addressRegion": "VA",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "City", "name": "McLean" },
      { "@type": "City", "name": "Great Falls" },
      { "@type": "City", "name": "Tysons" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Removal Services in McLean, VA | IICRC Certified Specialists"
        description="Professional mold removal and remediation in McLean, VA. EPA-approved methods, IICRC certified. Serving Great Falls, Langley, Pimmit Hills & Tysons. Call (877) 497-0007."
        structuredData={locationSchema}
      />

      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'McLean Mold Removal', path: '/locations/mclean-mold-removal/' },
            ]}
            theme="dark"
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            Mold Removal Services in McLean, VA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Safe, effective mold remediation for McLean homes. EPA-approved methods, IICRC certified specialists serving Great Falls, Langley, Pimmit Hills, and Tysons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (877) 497-0007
            </a>
            <a
              href="/request-service/"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Schedule Free Inspection
            </a>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">EPA</div>
              <div className="text-sm text-gray-600">Approved Methods</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">IICRC</div>
              <div className="text-sm text-gray-600">Certified Technicians</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Free</div>
              <div className="text-sm text-gray-600">Inspection & Estimate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Safe</div>
              <div className="text-sm text-gray-600">Family & Pet Friendly</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              McLean's Mold Remediation Specialists
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Mold growth threatens McLean homes throughout the year. High humidity in summer, condensation in winter, and water intrusion from aging infrastructure create ideal conditions for mold in Great Falls estates, Langley townhomes, and Pimmit Hills properties.
              </p>
              <p>
                Our IICRC certified mold remediation specialists use EPA-approved protocols to safely remove mold contamination and address underlying moisture issues. We understand McLean's unique climate challenges and building types—from historic homes in Chain Bridge to modern condos in Tysons.
              </p>
              <p>
                Every McLean mold project begins with thorough inspection using thermal imaging and moisture meters. We identify all contaminated areas, determine mold species if needed, and create detailed remediation plans that meet EPA guidelines and Virginia regulations.
              </p>
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">Safe Mold Removal Guarantee</p>
              <p className="text-sm text-blue-800">
                EPA-approved methods · IICRC certified · Post-remediation testing · Licensed in Virginia
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mold Removal Process</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Free Inspection</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive assessment using thermal imaging and moisture detection. Identify all affected areas and contamination extent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Containment</h4>
                    <p className="text-gray-600 text-sm">
                      Seal affected areas with negative air pressure systems. Prevent mold spores from spreading to clean areas during remediation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Safe Removal</h4>
                    <p className="text-gray-600 text-sm">
                      EPA-approved removal methods. HEPA filtration captures airborne spores. Proper disposal of contaminated materials.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prevention & Restoration</h4>
                    <p className="text-gray-600 text-sm">
                      Fix moisture sources. Apply antimicrobial treatments. Restore affected areas. Post-remediation testing available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Common Mold Problems in McLean Homes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We've remediated mold in hundreds of McLean properties. Here are the most common issues we encounter in your neighborhoods.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Basement Mold</h3>
              <p className="text-gray-600 mb-4">
                Great Falls and Langley homes frequently experience basement mold from foundation moisture, poor ventilation, and seasonal flooding. High water tables and aging waterproofing contribute to chronic dampness.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Foundation waterproofing
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Dehumidification systems
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Drainage improvements
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Attic & Crawlspace Mold</h3>
              <p className="text-gray-600 mb-4">
                Insufficient ventilation and roof leaks cause attic mold in McLean homes. Crawlspace moisture from ground vapor affects Pimmit Hills and Tysons properties with inadequate barriers.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ventilation improvements
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Vapor barrier installation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Insulation replacement
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bathroom & Kitchen Mold</h3>
              <p className="text-gray-600 mb-4">
                Poor ventilation and minor plumbing leaks cause persistent mold in McLean bathrooms and kitchens. Tile grout, under-sink cabinets, and window frames are common problem areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Exhaust fan upgrades
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Plumbing leak repairs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Waterproofing solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          McLean Mold Removal Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              How do I know if I have mold in my McLean home?
            </h3>
            <p className="text-gray-600">
              Common signs include musty odors, visible discoloration on walls or ceilings, water stains, condensation on windows, and respiratory symptoms that improve when away from home. We provide free mold inspections for all McLean properties to accurately assess contamination.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Is mold removal covered by insurance in McLean?
            </h3>
            <p className="text-gray-600">
              Coverage depends on the cause. Mold resulting from sudden water damage (burst pipes, storms) is typically covered by McLean homeowners policies. Mold from neglect or maintenance issues may not be covered. We work directly with McLean homeowners and their insurance providers to determine coverage and maximize claims.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              How long does mold remediation take in McLean homes?
            </h3>
            <p className="text-gray-600">
              Most McLean mold removal projects take 2-5 days depending on contamination extent. Small isolated areas may be completed in 1-2 days. Large-scale remediation involving multiple rooms or structural components can take up to a week. We provide detailed timelines after initial inspection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Is mold dangerous for my family in McLean?
            </h3>
            <p className="text-gray-600">
              Mold exposure can cause respiratory issues, allergic reactions, and other health problems, especially for children, elderly, and those with compromised immune systems. Some mold species produce mycotoxins that pose serious health risks. Professional removal protects your McLean family's health.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Can I remove mold myself in my McLean home?
            </h3>
            <p className="text-gray-600">
              Small surface mold (less than 10 square feet) can sometimes be cleaned by homeowners. However, mold often grows behind walls, in HVAC systems, and other hidden areas. Improper removal spreads spores and worsens contamination. EPA recommends professional remediation for areas larger than 10 square feet or when health issues are present.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Concerned About Mold in Your McLean Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Free inspection and estimate. EPA-approved removal methods. IICRC certified specialists. Call now for safe, effective mold remediation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (877) 497-0007
            </a>
            <a
              href="/request-service/"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white text-lg"
            >
              Schedule Free Inspection
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            EPA-approved methods · IICRC certified · Licensed & insured in Virginia
          </p>
        </div>
      </div>
    </main>
  );
};

export default McLeanMoldRemoval;
