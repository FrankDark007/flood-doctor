import PageMeta from '../../components/ui/PageMeta';
import { Link } from 'react-router-dom';

export default function HerndonFloodCleanup() {
  const phoneNumber = '(877) 497-0007';
  const businessName = 'Flood Doctor';
  const serviceArea = ['Herndon', 'Reston', 'Sterling', 'Ashburn', 'Leesburg'];
  const neighborhoods = ['Downtown Herndon', 'Fox Mill', 'Franklin Farm', 'Worldgate'];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "image": "https://flood.doctor/logo.png",
    "@id": "https://herndon.flood.doctor/flood-cleanup",
    "url": "https://herndon.flood.doctor/flood-cleanup",
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
      "name": "Emergency Flood Cleanup",
      "description": "24/7 Emergency Flood Cleanup and Restoration Services in Herndon, VA"
    }
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Emergency Flood Cleanup Herndon VA | 24/7 Flood Restoration"
        description="24/7 emergency flood cleanup in Herndon, VA. Rapid water extraction, drying & restoration. Serving Downtown Herndon, Fox Mill, Franklin Farm. Call (877) 497-0007 now!"
        schema={schemaData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Emergency Flood Cleanup in Herndon, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              24/7 Rapid Response • Advanced Water Extraction • Complete Restoration
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105 text-center"
              >
                Emergency: {phoneNumber}
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-400 transition-all border-2 border-white text-center"
              >
                Get Immediate Help
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>30-Minute Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Industrial Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Insurance Assistance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white py-8 px-4 border-b">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-gray-700">
              <span className="font-semibold">Emergency Flood Service for:</span>{' '}
              {neighborhoods.join(' • ')} and all Herndon areas
            </p>
          </div>
        </section>

        {/* Emergency Alert */}
        <section className="bg-red-50 border-l-4 border-red-600 py-6 px-4 my-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Experiencing Flooding Right Now?
                </h2>
                <p className="text-red-800">
                  Our emergency flood cleanup crews are standing by 24/7. We'll be there in 30 minutes or less.
                </p>
              </div>
              <a
                href={`tel:${phoneNumber}`}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-red-700 transition-all whitespace-nowrap"
              >
                Call {phoneNumber}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Immediate Response</h3>
              <p className="text-gray-600">
                Our emergency flood teams are available 24/7/365 with guaranteed 30-minute arrival to your Herndon location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Powerful Extraction</h3>
              <p className="text-gray-600">
                Industrial-grade pumps and extraction equipment remove thousands of gallons quickly to minimize damage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Insurance Claims</h3>
              <p className="text-gray-600">
                Complete documentation and direct insurance billing make the claims process smooth and stress-free.
              </p>
            </div>
          </div>

          {/* About Flood Cleanup */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Expert Flood Cleanup & Restoration in Herndon, VA
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Flooding emergencies require immediate professional response. Whether caused by severe storms,
              burst pipes, sewer backups, or appliance failures, flood damage spreads rapidly throughout your
              Herndon property. Every minute counts when you're dealing with standing water in Downtown Herndon
              homes, flooded basements in Fox Mill, storm damage in Franklin Farm, or water intrusion in Worldgate
              commercial properties.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our IICRC-certified flood cleanup specialists respond immediately with industrial-strength equipment
              and proven restoration techniques. We extract water, dry structures completely, prevent mold growth,
              and restore your property to pre-loss condition.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Complete Flood Cleanup Services:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Emergency Water Removal</h4>
                  <p className="text-gray-600">Truck-mounted extractors and submersible pumps remove standing water fast</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Structural Drying</h4>
                  <p className="text-gray-600">Commercial dehumidifiers and air movers dry buildings thoroughly</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Sewage & Contaminated Water</h4>
                  <p className="text-gray-600">Specialized cleanup for Category 3 black water flooding</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Content Restoration</h4>
                  <p className="text-gray-600">Professional cleaning, pack-out, and storage of your belongings</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Sanitization & Deodorization</h4>
                  <p className="text-gray-600">Antimicrobial treatments and odor removal for safe environments</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Mold Prevention</h4>
                  <p className="text-gray-600">Anti-microbial applications prevent mold growth after flooding</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Carpet & Flooring Restoration</h4>
                  <p className="text-gray-600">Specialized drying and cleaning or complete replacement</p>
                </div>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-1">Full Reconstruction</h4>
                  <p className="text-gray-600">Complete rebuilding services from demolition to final touches</p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Flood Causes */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Common Causes of Flooding in Herndon Homes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Severe Weather & Storms</h3>
                <p className="text-gray-700 mb-4">
                  Heavy rainfall overwhelms drainage systems, causing water intrusion through windows, doors,
                  and foundations. Herndon experiences significant storm flooding during spring and summer months.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Burst Pipes & Plumbing Failures</h3>
                <p className="text-gray-700 mb-4">
                  Frozen pipes in winter, corroded plumbing in older Herndon homes, and failed water heaters can
                  release hundreds of gallons, flooding multiple levels rapidly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Sewer Backups</h3>
                <p className="text-gray-700 mb-4">
                  Municipal sewer overflows and blocked drain lines cause contaminated water to back up into homes,
                  creating hazardous conditions requiring specialized cleanup.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Appliance Malfunctions</h3>
                <p className="text-gray-700 mb-4">
                  Washing machines, dishwashers, water heaters, and refrigerators can fail without warning,
                  releasing large volumes of water that spread quickly through floors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Foundation Cracks & Seepage</h3>
                <p className="text-gray-700 mb-4">
                  Settlement cracks in foundations and poor grading allow groundwater and surface water to
                  seep into basements, especially during heavy rain events.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">HVAC Condensate Problems</h3>
                <p className="text-gray-700 mb-4">
                  Clogged drain lines, overflow pans, and malfunctioning air conditioning systems can cause
                  significant water damage, especially during Herndon's humid summers.
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Response Process */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Emergency Flood Cleanup Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Emergency Call & Dispatch</h4>
                  <p className="text-gray-600">
                    Call {phoneNumber} any time, day or night. We'll gather critical information about your
                    flooding situation and immediately dispatch our nearest Herndon emergency crew.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Rapid On-Site Arrival</h4>
                  <p className="text-gray-600">
                    Our team arrives within 30 minutes with industrial extraction and drying equipment.
                    We'll assess the damage, identify safety hazards, and begin water removal immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Water Extraction</h4>
                  <p className="text-gray-600">
                    Using truck-mounted extractors and powerful submersible pumps, we remove standing water
                    quickly. The faster water is removed, the less damage your property sustains.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Moisture Detection & Mapping</h4>
                  <p className="text-gray-600">
                    Thermal imaging cameras and moisture meters identify all affected areas, including hidden
                    moisture in walls, ceilings, and subfloors that could cause future problems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Drying & Dehumidification</h4>
                  <p className="text-gray-600">
                    Commercial-grade dehumidifiers and air movers run continuously, creating optimal drying
                    conditions. We monitor moisture levels daily until everything is completely dry.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  6
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Cleaning & Sanitization</h4>
                  <p className="text-gray-600">
                    All affected areas and salvageable contents are cleaned, sanitized, and deodorized using
                    professional antimicrobial treatments and air scrubbers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  7
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Restoration & Repairs</h4>
                  <p className="text-gray-600">
                    Our reconstruction team handles all repairs from minor fixes to major rebuilding, returning
                    your property to pre-flood condition or better.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Why Herndon Residents Trust Our Flood Cleanup Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-2">IICRC Certified Specialists</h3>
                  <p className="text-gray-700">
                    Our technicians hold certifications in water damage restoration and applied structural
                    drying, ensuring professional service that meets industry standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-2">Guaranteed Fast Response</h3>
                  <p className="text-gray-700">
                    We guarantee arrival within 30 minutes for emergency flood calls in Herndon and surrounding
                    areas. Our crews are strategically positioned for rapid deployment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-2">Advanced Equipment Fleet</h3>
                  <p className="text-gray-700">
                    Our trucks carry truck-mounted extractors, commercial dehumidifiers, air movers, moisture
                    detection equipment, and specialized tools for comprehensive flood restoration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-2">Complete Insurance Support</h3>
                  <p className="text-gray-700">
                    We document everything for insurance claims, communicate directly with adjusters, and can
                    bill insurance companies directly to minimize your out-of-pocket costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-2">Experienced Local Team</h3>
                  <p className="text-gray-700">
                    Years of experience serving Herndon means we understand local flooding patterns, building
                    types, and challenges specific to our area.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-2">Customer Satisfaction Focus</h3>
                  <p className="text-gray-700">
                    Our 4.9-star rating reflects our commitment to exceeding customer expectations. We don't
                    consider the job done until you're completely satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Coverage */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Emergency Flood Service Throughout Herndon & Beyond
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our emergency flood cleanup teams serve all of Herndon and surrounding Northern Virginia communities:
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
              Flood Cleanup Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  What should I do immediately after discovering flooding?
                </h3>
                <p className="text-gray-700">
                  First, ensure everyone's safety. If water is near electrical outlets or appliances, turn off
                  electricity at the breaker. Stop the water source if possible. Move valuables to higher ground.
                  Then call us immediately at {phoneNumber} - we're available 24/7 and will arrive within 30 minutes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  How quickly can you respond to a flooding emergency?
                </h3>
                <p className="text-gray-700">
                  We guarantee arrival within 30 minutes for emergency flood calls in Herndon and nearby areas.
                  Our crews are on call 24/7/365, including holidays and weekends. Call anytime for immediate assistance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Will my homeowner's insurance cover flood cleanup?
                </h3>
                <p className="text-gray-700">
                  Most homeowner's policies cover sudden and accidental water damage (burst pipes, appliance failures).
                  Gradual damage and surface water flooding typically require separate flood insurance. We work with
                  all major insurance companies and help document your claim properly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  How long does flood cleanup and restoration take?
                </h3>
                <p className="text-gray-700">
                  Timeline varies by severity. Water extraction begins immediately. Drying typically takes 3-5 days
                  for minor flooding, up to 2 weeks for severe flooding. Complete restoration including repairs can
                  take 1-4 weeks depending on damage extent. We'll provide a detailed timeline after assessment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Can you handle sewage and contaminated water flooding?
                </h3>
                <p className="text-gray-700">
                  Yes, our technicians are certified to handle Category 3 black water (sewage backups, contaminated
                  flood water). We use specialized equipment, protective gear, and EPA-approved antimicrobial treatments
                  to safely clean and restore your property.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Do I need to leave my home during flood cleanup?
                </h3>
                <p className="text-gray-700">
                  For most residential projects, you can remain in unaffected areas. Severe flooding, sewage backups,
                  or situations creating health hazards may require temporary relocation. We'll assess your specific
                  situation and advise accordingly, prioritizing your family's safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Flood Emergency? We're Here to Help 24/7
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Don't face flooding alone. Our expert team responds immediately to minimize damage
              and restore your Herndon property quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-xl shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Emergency: {phoneNumber}
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-500 text-white px-10 py-5 rounded-lg font-bold text-xl shadow-lg hover:bg-blue-400 transition-all border-2 border-white"
              >
                Get Immediate Help
              </Link>
            </div>
            <p className="mt-8 text-blue-100">
              IICRC Certified • 30-Min Response • Licensed & Insured • Direct Insurance Billing
            </p>
          </div>
        </section>

        {/* Trust Signals Footer */}
        <section className="bg-gray-900 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">30min</div>
                <div className="text-gray-300">Guaranteed Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300">Years Serving Herndon</div>
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
