import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { generateLocationPageSchema } from '../../utils/schema';

const McLeanFloodCleanup: React.FC = () => {
  const locationSchema = generateLocationPageSchema(
    {
      name: 'McLean, VA',
      description: '24/7 emergency flood cleanup and restoration in McLean, VA. Rapid water extraction, structural drying, serving Great Falls, Langley, Pimmit Hills, and Tysons. Call 703-665-0505.',
      address: {
        addressLocality: 'McLean',
        addressRegion: 'VA',
        addressCountry: 'US',
      },
      slug: '/locations/mclean-flood-cleanup/',
    },
    [
      { label: 'Locations', path: '/locations/' },
      { label: 'McLean Flood Cleanup', path: '/locations/mclean-flood-cleanup/' },
    ],
    [
      {
        question: 'What should I do immediately after flooding in my McLean home?',
        answer: 'First, ensure safety—turn off electricity if safe to do so. Avoid standing water. Call us immediately at 703-665-0505 for emergency response. Document damage with photos for insurance. Remove valuables from affected areas if possible. Do not use household vacuums on water.',
      },
      {
        question: 'How quickly can you respond to flood emergencies in McLean?',
        answer: 'We dispatch emergency teams immediately to McLean flood situations and typically arrive within 60 minutes. Our 24/7 response covers all McLean neighborhoods including Great Falls, Langley, Pimmit Hills, and Tysons.',
      },
      {
        question: 'Does insurance cover flood cleanup in McLean?',
        answer: 'Standard homeowners insurance covers sudden water damage from internal sources (burst pipes, appliance failures). Natural flooding requires separate flood insurance. We work with all major carriers serving McLean to document damage and maximize your claim coverage.',
      },
    ]
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Emergency Flood Cleanup in McLean, VA | 24/7 Fast Response"
        description="24/7 emergency flood cleanup in McLean, VA. Rapid water extraction and restoration serving Great Falls, Langley, Pimmit Hills & Tysons. Call 703-665-0505 now."
        structuredData={locationSchema}
      />

      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'McLean Flood Cleanup', path: '/locations/mclean-flood-cleanup/' },
            ]}
            theme="dark"
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            Emergency Flood Cleanup in McLean, VA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            Immediate flood response for McLean homes and businesses. 24/7 emergency service, rapid water extraction, complete restoration serving Great Falls, Langley, Pimmit Hills, and Tysons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:703-665-0505"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 703-665-0505 Now
            </a>
            <a
              href="/request-service/"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Request Emergency Service
            </a>
          </div>
        </div>
      </div>

      <div className="py-12 bg-red-50 border-y-2 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-red-900 mb-2">Flooding Emergency? Act Fast!</h2>
              <p className="text-red-800 text-lg">
                Every minute counts during flooding. Standing water causes exponential damage to McLean properties. Call <a href="tel:703-665-0505" className="font-bold underline">703-665-0505</a> immediately for emergency response. We typically arrive in under 60 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Dispatch</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">&lt;60</div>
              <div className="text-sm text-gray-600">Minute Response</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">IICRC</div>
              <div className="text-sm text-gray-600">Certified Teams</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Fast</div>
              <div className="text-sm text-gray-600">Insurance Claims</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              McLean's Emergency Flood Response Team
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Flooding devastates McLean properties faster than any other water damage. Whether from severe storms overwhelming drainage systems in Great Falls, burst pipes in Langley townhomes, sewer backups in Pimmit Hills, or appliance failures in Tysons condos—immediate professional response is critical.
              </p>
              <p>
                Our IICRC certified flood cleanup specialists maintain 24/7 emergency readiness. We dispatch fully-equipped trucks immediately upon your call, arriving at most McLean properties within 60 minutes with industrial water extraction equipment, structural drying systems, and comprehensive restoration capabilities.
              </p>
              <p>
                We understand McLean's unique flood risks—aging infrastructure in established neighborhoods, high water tables near the Potomac, storm surge flooding in low-lying areas, and modern construction challenges. Our team has successfully restored hundreds of McLean properties from flood damage.
              </p>
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">Emergency Response Guarantee</p>
              <p className="text-sm text-blue-800">
                Immediate dispatch · Under 60 minutes to McLean · IICRC certified · Licensed in Virginia
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Flood Cleanup Process</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-blue-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Immediate Response</h4>
                    <p className="text-gray-600 text-sm">
                      Call received, emergency team dispatched immediately. Arrive at your McLean property within 60 minutes with full equipment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-blue-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Water Extraction</h4>
                    <p className="text-gray-600 text-sm">
                      Industrial pumps and extractors remove standing water. Thousands of gallons removed per hour. Critical first step to minimize damage.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-blue-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Structural Drying</h4>
                    <p className="text-gray-600 text-sm">
                      Commercial dehumidifiers and air movers dry structure completely. Thermal imaging finds hidden moisture. Prevent mold growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-blue-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Complete Restoration</h4>
                    <p className="text-gray-600 text-sm">
                      Rebuild damaged areas. Replace flooring, drywall, trim. One company from emergency through final restoration.
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
            Common Flood Scenarios in McLean
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We've responded to every type of flooding emergency in McLean neighborhoods. Here's what we handle most frequently.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Storm & Heavy Rain</h3>
              <p className="text-gray-600 text-sm">
                Severe weather overwhelms drainage systems in Great Falls and low-lying McLean areas. Rapid runoff floods basements and crawlspaces. Our team responds immediately to extract water and prevent structural damage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Burst Pipes</h3>
              <p className="text-gray-600 text-sm">
                Frozen pipes in winter, aging infrastructure in Langley, and high water pressure cause catastrophic pipe failures. Thousands of gallons flood McLean homes in minutes. We extract water fast to minimize damage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sewer Backup</h3>
              <p className="text-gray-600 text-sm">
                Tree roots and aging sewer lines cause contaminated backups in Pimmit Hills and older McLean neighborhoods. Requires specialized cleanup and sanitization. Our certified teams handle hazardous category 3 water safely.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Water Heater Failure</h3>
              <p className="text-gray-600 text-sm">
                40-80 gallon water heaters flood McLean basements and utility rooms. Rapid extraction prevents damage to finished spaces, HVAC systems, and stored belongings. We respond 24/7 to water heater emergencies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Appliance Leaks</h3>
              <p className="text-gray-600 text-sm">
                Washing machines, dishwashers, and refrigerators flood Tysons condos and McLean townhomes. Supply line failures and drain backups damage multiple floors. Our emergency teams extract water and dry structures fast.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Roof & Gutter Flooding</h3>
              <p className="text-gray-600 text-sm">
                Clogged gutters and roof leaks direct water into Great Falls and Langley homes. Attic flooding damages insulation, ceilings, and walls. We provide comprehensive extraction, drying, and repairs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Flood Cleanup Questions from McLean Residents
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              What should I do immediately after flooding in my McLean home?
            </h3>
            <p className="text-gray-600">
              First, ensure safety—turn off electricity if safe to do so and avoid standing water. Call us immediately at 703-665-0505 for emergency response. Document damage with photos for insurance claims. Remove valuables from affected areas if possible. Do not use household vacuums on standing water as this poses electrical hazards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              How quickly can you respond to flood emergencies in McLean?
            </h3>
            <p className="text-gray-600">
              We dispatch emergency teams immediately upon receiving McLean flood calls and typically arrive within 60 minutes. Our trucks carry full water extraction and drying equipment for immediate action. We maintain 24/7 emergency readiness specifically for McLean and surrounding Northern Virginia communities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Does insurance cover flood cleanup in McLean?
            </h3>
            <p className="text-gray-600">
              Standard homeowners insurance covers sudden water damage from internal sources like burst pipes, water heater failures, and appliance malfunctions. Natural flooding from storms typically requires separate flood insurance. We work directly with all major insurance carriers serving McLean to document damage, provide detailed estimates, and maximize your claim coverage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              How long does flood cleanup take in McLean homes?
            </h3>
            <p className="text-gray-600">
              Water extraction begins immediately and typically completes within hours. Structural drying takes 3-7 days depending on materials affected and water volume. Complete restoration including repairs averages 1-3 weeks for most McLean flood scenarios. We provide detailed timelines after initial assessment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Can I stay in my McLean home during flood cleanup?
            </h3>
            <p className="text-gray-600">
              Depends on damage extent and water category. Clean water from supply lines usually allows occupancy during drying. Contaminated water from sewers or flooding requires evacuation. Extensive damage may make areas unsafe. We assess each McLean property individually and recommend safest approach for your family.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experiencing Flooding in Your McLean Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Every second counts during a flood emergency. Our team is ready to respond immediately. Call now for rapid water extraction and complete flood restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:703-665-0505"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              703-665-0505
            </a>
            <a
              href="/request-service/"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white text-lg"
            >
              Request Emergency Service
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            24/7 emergency dispatch · Under 60 minute response · IICRC certified · Licensed in Virginia
          </p>
        </div>
      </div>
    </main>
  );
};

export default McLeanFloodCleanup;
