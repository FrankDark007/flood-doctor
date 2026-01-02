import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';

export default function HerndonBasementFlooding() {
  const phoneNumber = '(877) 497-0007';
  const businessName = 'Flood Doctor';
  const serviceArea = ['Herndon', 'Reston', 'Sterling', 'Ashburn', 'Leesburg'];
  const neighborhoods = ['Downtown Herndon', 'Fox Mill', 'Franklin Farm', 'Worldgate'];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "image": "https://www.flood-doctor.com/logo.png",
    "@id": "https://www.flood-doctor.com",
    "url": "https://www.flood-doctor.com",
    "telephone": phoneNumber,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Herndon",
      "addressRegion": "VA",
      "postalCode": "20170",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.9695,
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
    "sameAs": [
      "https://www.facebook.com/flooddoctor",
      "https://twitter.com/flooddoctor"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287"
    },
    "areaServed": {
      "@type": "City",
      "name": "Herndon"
    },
    "service": {
      "@type": "Service",
      "name": "Basement Flooding Repair",
      "description": "Professional Basement Flooding Repair and Waterproofing Services in Herndon, VA"
    }
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Basement Flooding Repair Herndon VA | Waterproofing Experts"
        description="Expert basement flooding repair in Herndon, VA. Emergency water removal, complete restoration & waterproofing. Serving Fox Mill, Franklin Farm, Downtown Herndon. Call (877) 497-0007!"
        schema={schemaData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Basement Flooding Repair in Herndon, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              Complete Basement Restoration • Waterproofing Solutions • 24/7 Emergency Service
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105 text-center"
              >
                Call Now: {phoneNumber}
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-400 transition-all border-2 border-white text-center"
              >
                Schedule Inspection
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Permanent Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Lifetime Warranties Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white py-8 px-4 border-b">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-gray-700">
              <span className="font-semibold">Basement Flooding Solutions for:</span>{' '}
              {neighborhoods.join(' • ')} and all Herndon neighborhoods
            </p>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="bg-red-50 border-l-4 border-red-600 py-6 px-4 my-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Basement Flooding Emergency?
                </h2>
                <p className="text-red-800">
                  Our emergency crews are available 24/7. Fast response prevents extensive damage and mold growth.
                </p>
              </div>
              <a
                href={`tel:${phoneNumber}`}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-red-700 transition-all whitespace-nowrap"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Water Removal</h3>
              <p className="text-gray-600">
                Powerful pumps and extractors remove standing water from your basement quickly, minimizing damage to floors and belongings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Restoration</h3>
              <p className="text-gray-600">
                Full basement restoration including drywall, flooring, and finishing to restore your usable space completely.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Waterproofing</h3>
              <p className="text-gray-600">
                Permanent waterproofing solutions prevent future flooding, protecting your investment and peace of mind.
              </p>
            </div>
          </div>

          {/* About Basement Flooding */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Expert Basement Flooding Solutions for Herndon Homeowners
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Basement flooding is one of the most common and stressful problems facing Herndon homeowners. Whether
              you're dealing with a flooded basement in Downtown Herndon's older homes, water seepage issues in Fox Mill,
              foundation problems in Franklin Farm, or sump pump failures in Worldgate, our team provides complete
              basement flooding repair and permanent waterproofing solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Northern Virginia's clay soil, seasonal rainfall, and high water table create perfect conditions for
              basement flooding. Many Herndon homes experience recurring basement water problems during spring rains
              and summer storms. Our IICRC-certified specialists don't just clean up the water - we identify the root
              cause and implement lasting solutions to keep your basement dry.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Why Basements Flood in Herndon</h3>
              <p className="text-blue-800 mb-4">
                Herndon's location and soil composition make basement flooding particularly common:
              </p>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>Heavy clay soil prevents proper drainage around foundations</li>
                <li>Aging infrastructure in older neighborhoods like Downtown Herndon</li>
                <li>High water table levels especially during wet seasons</li>
                <li>Poor grading directing water toward foundations</li>
                <li>Inadequate or failing sump pump systems</li>
                <li>Foundation cracks from settling and age</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Basement Flooding Services Include:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Emergency Water Extraction</h4>
                  <p className="text-gray-600">Rapid removal of standing water with industrial pumps and extractors</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Structural Drying</h4>
                  <p className="text-gray-600">Complete drying of walls, floors, and framing using commercial equipment</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Mold Prevention & Remediation</h4>
                  <p className="text-gray-600">Antimicrobial treatments and complete mold removal if needed</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Interior Waterproofing</h4>
                  <p className="text-gray-600">Sealants, drainage systems, and sump pump installation</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Exterior Waterproofing</h4>
                  <p className="text-gray-600">Excavation, membrane application, and French drain installation</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Foundation Crack Repair</h4>
                  <p className="text-gray-600">Professional injection and sealing of foundation cracks</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Basement Finishing Restoration</h4>
                  <p className="text-gray-600">Complete rebuild of finished basements to original or better condition</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Sump Pump Systems</h4>
                  <p className="text-gray-600">Installation, replacement, and backup battery systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Causes */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Common Causes of Basement Flooding in Herndon
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Heavy Rain & Poor Drainage</h3>
                <p className="text-gray-700 mb-4">
                  Inadequate gutters, downspouts draining near foundations, and poor yard grading cause water to
                  pool around basements. Herndon's clay soil makes drainage problems particularly severe.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Sump Pump Failure</h3>
                <p className="text-gray-700 mb-4">
                  Power outages during storms, mechanical failures, and inadequate pump capacity allow water to
                  accumulate. Many Herndon homes lack backup sump pump systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Foundation Cracks & Settling</h3>
                <p className="text-gray-700 mb-4">
                  Natural settling, hydrostatic pressure, and aging foundations create cracks allowing water
                  seepage. Older homes in Downtown Herndon frequently experience this issue.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Window Well Flooding</h3>
                <p className="text-gray-700 mb-4">
                  Improperly installed or maintained window wells fill with rainwater, seeping through basement
                  windows and causing localized flooding and water damage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Sewer & Drain Backups</h3>
                <p className="text-gray-700 mb-4">
                  Municipal sewer overflows, tree root intrusion, and clogged drains cause sewage to back up
                  into basements through floor drains and toilets.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">High Water Table</h3>
                <p className="text-gray-700 mb-4">
                  Seasonal groundwater level increases put pressure on basement walls and floors, forcing water
                  through any available opening, especially during spring.
                </p>
              </div>
            </div>
          </div>

          {/* Waterproofing Solutions */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Permanent Basement Waterproofing Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Don't just clean up water damage - prevent it from happening again. We offer comprehensive waterproofing
              solutions tailored to your specific basement flooding issues:
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Interior Waterproofing Systems</h3>
                <p className="text-gray-700 mb-4">
                  Interior solutions are less invasive and typically more cost-effective, ideal for most Herndon homes:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Interior French Drains:</strong> Perimeter drainage systems collect water and direct it to sump pumps</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Sump Pump Installation:</strong> High-capacity pumps with battery backup systems ensure continuous operation</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Wall Sealants:</strong> Professional-grade waterproof coatings prevent moisture penetration</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Vapor Barriers:</strong> Moisture-blocking membranes on walls and floors reduce humidity</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Exterior Waterproofing Systems</h3>
                <p className="text-gray-700 mb-4">
                  Exterior waterproofing provides maximum protection by preventing water from reaching foundations:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Foundation Excavation:</strong> Expose foundation walls for proper waterproofing application</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Waterproof Membranes:</strong> Rubberized or polymer coatings create impermeable barriers</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Exterior French Drains:</strong> Footing drains collect and redirect water away from foundations</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Drainage Board:</strong> Dimpled membranes create air gaps and water channels along walls</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Foundation Crack Repair</h3>
                <p className="text-gray-700 mb-4">
                  Professional crack repair prevents water intrusion and structural deterioration:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Epoxy Injection:</strong> High-strength epoxy fills and seals structural cracks permanently</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Polyurethane Injection:</strong> Flexible foam expands to fill voids and stop active leaks</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Carbon Fiber Reinforcement:</strong> Structural stabilization for bowing or cracked walls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Basement Flooding Repair Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Emergency Response & Water Removal</h4>
                  <p className="text-gray-600">
                    For active flooding, we respond immediately to extract standing water with industrial pumps and
                    extractors. Fast response minimizes damage to your basement and belongings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Comprehensive Inspection & Assessment</h4>
                  <p className="text-gray-600">
                    We thoroughly inspect your basement, foundation, and drainage systems to identify all water entry
                    points and underlying causes. Moisture meters and thermal imaging reveal hidden problems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Drying & Dehumidification</h4>
                  <p className="text-gray-600">
                    Commercial dehumidifiers and air movers run continuously until your basement is completely dry.
                    We monitor moisture levels daily to prevent mold growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Mold Inspection & Remediation</h4>
                  <p className="text-gray-600">
                    If mold is present from previous flooding or current damage, our certified specialists safely remove
                    it and apply antimicrobial treatments to prevent recurrence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Waterproofing Solution Implementation</h4>
                  <p className="text-gray-600">
                    Based on your specific situation, we install interior or exterior waterproofing systems, repair
                    foundation cracks, upgrade sump pumps, and improve drainage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  6
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Basement Restoration & Finishing</h4>
                  <p className="text-gray-600">
                    We restore your basement to pre-damage condition or better, including drywall, flooring, trim,
                    painting, and any other finishing work needed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Basement Flooding Services Throughout Herndon & Northern VA
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide complete basement flooding repair and waterproofing services throughout Herndon and surrounding areas:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {serviceArea.map((area) => (
                <div key={area} className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Basement Flooding FAQs
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  How much does basement waterproofing cost in Herndon?
                </h3>
                <p className="text-gray-700">
                  Costs vary significantly based on basement size, water source, and solution type. Interior
                  waterproofing typically ranges from $3,000-$8,000, while exterior waterproofing costs $8,000-$15,000+.
                  We provide free inspections and detailed estimates. Many solutions qualify for insurance coverage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  How long does basement waterproofing take?
                </h3>
                <p className="text-gray-700">
                  Interior waterproofing systems typically take 2-5 days to install. Exterior waterproofing requires
                  5-10 days due to excavation work. Emergency water removal begins immediately, with drying taking
                  3-5 additional days before waterproofing installation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Do I need interior or exterior waterproofing?
                </h3>
                <p className="text-gray-700">
                  The best solution depends on your specific situation. Interior systems work well for most scenarios
                  and cost less. Exterior waterproofing provides maximum protection for severe problems or when
                  foundation repairs are needed. Our inspection determines the optimal approach for your basement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Will waterproofing prevent all future flooding?
                </h3>
                <p className="text-gray-700">
                  Professional waterproofing systems are highly effective when properly designed and installed.
                  We identify and address all water entry points, install appropriate drainage, and provide warranties
                  on our work. Regular maintenance of gutters, downspouts, and sump pumps ensures continued protection.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  What's the difference between a sump pump and backup sump pump?
                </h3>
                <p className="text-gray-700">
                  Primary sump pumps run on electricity and handle normal water removal. Backup systems use battery
                  power during outages (common during storms causing flooding) or activate if the primary pump fails.
                  We strongly recommend backup systems for Herndon homes with flood history.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  How do I prevent basement flooding before it happens?
                </h3>
                <p className="text-gray-700">
                  Keep gutters clean, extend downspouts 10+ feet from foundation, ensure proper yard grading,
                  test sump pumps quarterly, seal visible cracks promptly, and install a backup sump pump. Schedule
                  professional basement inspections every few years to catch problems early.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Stop Basement Flooding for Good
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Get expert basement flooding repair and permanent waterproofing solutions.
              Protect your Herndon home with our proven systems and lifetime warranties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-xl shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Call {phoneNumber}
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-500 text-white px-10 py-5 rounded-lg font-bold text-xl shadow-lg hover:bg-blue-400 transition-all border-2 border-white"
              >
                Free Waterproofing Estimate
              </Link>
            </div>
            <p className="mt-8 text-blue-100">
              Same-Day Service • Lifetime Warranties • Licensed & Insured • Financing Available
            </p>
          </div>
        </section>

        {/* Trust Signals Footer */}
        <section className="bg-gray-900 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Emergency Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">Lifetime</div>
                <div className="text-gray-300">Warranty Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-gray-300">Basements Waterproofed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">4.9★</div>
                <div className="text-gray-300">Customer Rating</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
