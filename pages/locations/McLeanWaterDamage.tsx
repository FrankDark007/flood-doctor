import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const McLeanWaterDamage: React.FC = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mclean.flood.doctor/water-damage",
    "name": "Flood Doctor - Water Damage Restoration McLean VA",
    "image": "https://flood.doctor/logo.png",
    "url": "https://mclean.flood.doctor/water-damage",
    "telephone": "+1-877-497-0007",
    "description": "24/7 emergency water damage restoration in McLean, VA. IICRC certified technicians serving Great Falls, Langley, Pimmit Hills, and Tysons. Fast response, direct insurance billing.",
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
        title="Water Damage Restoration in McLean, VA | 24/7 Emergency Response"
        description="Emergency water damage restoration in McLean, VA. IICRC certified, fast response to Great Falls, Langley, Pimmit Hills & Tysons. Call (877) 497-0007 for immediate help."
        structuredData={locationSchema}
      />

      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'McLean Water Damage', path: '/locations/mclean-water-damage/' },
            ]}
            theme="dark"
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            Water Damage Restoration in McLean, VA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            24/7 emergency response for McLean homeowners. IICRC certified technicians serving Great Falls, Langley, Pimmit Hills, and Tysons.
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
              Request Service Online
            </a>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Response</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">&lt;60</div>
              <div className="text-sm text-gray-600">Minute Arrival</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">IICRC</div>
              <div className="text-sm text-gray-600">Certified Teams</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Insurance Direct Bill</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              McLean's Trusted Water Damage Experts
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                When water damage strikes your McLean home, every minute matters. Our IICRC certified technicians provide immediate emergency response to all McLean neighborhoods, from the historic estates of Great Falls to the modern homes of Tysons.
              </p>
              <p>
                We understand the unique challenges McLean homeowners face—from aging infrastructure in established neighborhoods like Langley to modern construction concerns in Pimmit Hills. Our team brings decades of experience restoring McLean properties to pre-loss condition.
              </p>
              <p>
                Available 24 hours a day, 7 days a week, we dispatch teams immediately upon your call. Most McLean properties receive service within 60 minutes, minimizing damage and reducing restoration costs.
              </p>
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">McLean Service Guarantee</p>
              <p className="text-sm text-blue-800">
                Fast response · IICRC certified · Direct insurance billing · Licensed & insured in Virginia
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our McLean Services</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Water Extraction</h4>
                <p className="text-gray-600 text-sm">
                  Immediate removal of standing water using industrial-grade pumps and extractors. Critical first step to prevent further damage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Structural Drying</h4>
                <p className="text-gray-600 text-sm">
                  Advanced drying systems target hidden moisture in walls, floors, and ceilings. Thermal imaging ensures complete moisture removal.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Mold Prevention</h4>
                <p className="text-gray-600 text-sm">
                  Rapid response and thorough drying prevent mold growth. EPA-approved antimicrobial treatments protect your McLean home.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Complete Restoration</h4>
                <p className="text-gray-600 text-sm">
                  Full reconstruction services from drywall to flooring. One company, complete solution—from emergency to final restoration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Serving All McLean Neighborhoods
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Great Falls</h3>
              <p className="text-gray-600 mb-4">
                Emergency water damage restoration for Great Falls estates and luxury properties. Experience with high-end finishes and custom construction.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Basement flooding specialists
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hardwood floor restoration
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom home experience
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Langley & Chain Bridge</h3>
              <p className="text-gray-600 mb-4">
                Fast response to established neighborhoods with historic charm. Expert care for older plumbing systems and traditional construction.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pipe burst repairs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Plaster wall restoration
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Historic preservation methods
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pimmit Hills & Tysons</h3>
              <p className="text-gray-600 mb-4">
                Rapid water damage response for townhomes, condos, and single-family homes. Experience with modern construction and HOA requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Townhome specialists
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  HOA approved methods
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Multi-unit coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Common Questions from McLean Homeowners
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              How fast can you respond to water damage emergencies in McLean?
            </h3>
            <p className="text-gray-600">
              We dispatch teams immediately to McLean properties and typically arrive within 60 minutes of your call. Our 24/7 emergency response covers all McLean neighborhoods including Great Falls, Langley, Pimmit Hills, and Tysons.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Do you work with insurance companies in McLean?
            </h3>
            <p className="text-gray-600">
              Yes. We work directly with all major insurance providers serving McLean homeowners. We document damage thoroughly, provide detailed estimates, and communicate directly with adjusters to ensure smooth claims processing. Most McLean clients only pay their deductible.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              What areas of McLean do you serve?
            </h3>
            <p className="text-gray-600">
              We serve all McLean neighborhoods including Great Falls, Langley, Pimmit Hills, Tysons, Chain Bridge, and surrounding areas in Fairfax County. Our central Northern Virginia location ensures rapid response to any McLean address.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              What makes your team qualified for McLean water damage restoration?
            </h3>
            <p className="text-gray-600">
              Our technicians hold IICRC certifications in Water Damage Restoration and Applied Structural Drying. We're licensed and insured in Virginia, carry full liability coverage, and follow EPA guidelines for safe restoration. Our team has restored hundreds of McLean properties since 2000.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              How long does water damage restoration take in McLean homes?
            </h3>
            <p className="text-gray-600">
              Timeline depends on damage severity. Emergency water extraction happens immediately. Structural drying typically takes 3-5 days. Complete restoration including repairs averages 1-2 weeks for most McLean properties. We provide detailed timelines after initial assessment.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Water Damage Emergency in McLean?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait—water damage worsens by the hour. Call now for immediate response to your McLean property.
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
              Request Service Online
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            24/7 emergency response · IICRC certified · Licensed & insured in Virginia
          </p>
        </div>
      </div>
    </main>
  );
};

export default McLeanWaterDamage;
