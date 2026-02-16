import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { generateLocationPageSchema } from '../../utils/schema';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const McLeanBasementFlooding: React.FC = () => {

  const schema = generateLocationPageSchema(
    { name: 'McLean', address: { addressLocality: 'McLean', addressRegion: 'VA', addressCountry: 'US' } },
    [{ label: 'Locations', path: '/locations/' }, { label: 'McLean Basement Flooding', path: '/locations/mclean-basement-flooding/' }]
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Basement Flooding Repair McLean, VA"
        description="Expert basement flooding repair in McLean, VA. Emergency water extraction, structural drying, waterproofing. Serving Great Falls, Langley & Pimmit Hills. Call (877) 497-0007."
        schema={schema}
      />

      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'McLean Basement Flooding', path: '/locations/mclean-basement-flooding/' },
            ]}
            theme="dark"
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            Basement Flooding Repair in McLean, VA
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">
            24/7 emergency basement flooding response for McLean homes. Expert water extraction, structural drying, and waterproofing solutions serving Great Falls, Langley, Pimmit Hills, and Tysons.
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
              Request Emergency Service
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
              <div className="text-3xl font-bold text-blue-600 mb-2">Fast</div>
              <div className="text-sm text-gray-600">Water Extraction</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">IICRC</div>
              <div className="text-sm text-gray-600">Certified Experts</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Prevent</div>
              <div className="text-sm text-gray-600">Future Flooding</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              McLean Basement Flooding Specialists
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Basement flooding plagues McLean homeowners throughout the year. Heavy spring rains overwhelm drainage systems. High water tables near the Potomac seep through foundation walls. Aging sump pumps fail during storms. Winter freeze-thaw cycles crack foundations in Great Falls and Langley properties.
              </p>
              <p>
                Our IICRC certified specialists have restored hundreds of McLean basements from flooding damage. We understand the unique challenges facing your neighborhood—from historic homes in Chain Bridge with aging infrastructure to modern construction in Pimmit Hills and Tysons requiring different waterproofing approaches.
              </p>
              <p>
                We provide comprehensive basement flooding solutions—immediate emergency water extraction, thorough structural drying to prevent mold, complete restoration of finished spaces, and permanent waterproofing to prevent future flooding. One company handles your entire basement flooding problem.
              </p>
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-sm font-semibold text-blue-900 mb-2">Basement Protection Guarantee</p>
              <p className="text-sm text-blue-800">
                24/7 emergency response · Expert waterproofing · IICRC certified · Licensed in Virginia
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Basement Flooding Services</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Water Removal</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Industrial pumps extract standing water from McLean basements rapidly. Thousands of gallons removed per hour. Minimize damage to finished spaces and stored belongings.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Submersible pumps for deep water
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Truck-mounted extractors
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Structural Drying</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Commercial dehumidifiers and air movers dry concrete, drywall, insulation, and framing. Prevent mold growth. Thermal imaging ensures complete moisture removal.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Daily moisture monitoring
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Documentation for insurance
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Complete Restoration</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Rebuild damaged finished basements. Replace drywall, flooring, trim, and fixtures. Restore your McLean basement to pre-flood condition.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Licensed contractors
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Quality materials
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Waterproofing Solutions</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Prevent future McLean basement flooding with comprehensive waterproofing. Sump pumps, drainage systems, foundation sealing, and backup power.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Free waterproofing assessment
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Long-term protection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Why McLean Basements Flood
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Understanding why your McLean basement floods helps prevent future damage. Here are the most common causes we encounter.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Heavy Rainfall</h3>
              <p className="text-gray-600">
                McLean's clay soil has poor drainage. Heavy storms saturate ground around foundations. Water seeks basement entry through cracks, window wells, and foundation joints. Great Falls properties near streams face higher risk.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sump Pump Failure</h3>
              <p className="text-gray-600">
                Many McLean homes rely on sump pumps to prevent basement flooding. Pumps fail during storms when needed most—from power outages, mechanical failure, or overwhelmed capacity. Backup systems prevent this common cause.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Foundation Cracks</h3>
              <p className="text-gray-600">
                Aging Langley and Chain Bridge homes develop foundation cracks from settling and freeze-thaw cycles. Water finds these entry points during rain. Professional sealing prevents water intrusion and protects structural integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Poor Grading & Drainage</h3>
              <p className="text-gray-600">
                Improper grading slopes water toward McLean foundations instead of away. Clogged gutters overflow near foundations. Downspouts discharge too close to homes. French drains and regrading solve these drainage problems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Water Table</h3>
              <p className="text-gray-600">
                McLean's proximity to the Potomac River creates high groundwater levels in some areas. Water seeps through basement floors and walls via hydrostatic pressure. Interior drainage systems and sump pumps manage water table issues.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Plumbing Failures</h3>
              <p className="text-gray-600">
                Water heaters, washing machines, and supply lines fail in Pimmit Hills and Tysons basements. Sewer backups flood lower levels with contaminated water. Quick response and proper restoration prevent extensive damage and health hazards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          McLean Basement Flooding Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Why does my McLean basement keep flooding?
            </h3>
            <p className="text-gray-600">
              Common causes include poor drainage around your foundation, high water table near the Potomac, aging or undersized sump pumps, foundation cracks allowing water entry, clogged gutters directing water toward the foundation, and inadequate waterproofing. We provide free assessments to identify root causes and recommend permanent solutions for your McLean property.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              How fast can you respond to McLean basement flooding?
            </h3>
            <p className="text-gray-600">
              We dispatch emergency teams immediately upon receiving McLean basement flooding calls and typically arrive within 60 minutes with full water extraction equipment. Our 24/7 emergency service covers all McLean neighborhoods including Great Falls, Langley, Pimmit Hills, and Tysons. Rapid response minimizes damage and reduces restoration costs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Can you prevent future basement flooding in McLean?
            </h3>
            <p className="text-gray-600">
              Yes. After emergency cleanup, we assess your McLean property for waterproofing improvements. Solutions include sump pump installation or upgrades, battery backup systems, foundation crack sealing, interior drainage systems, exterior waterproofing, grading improvements, and downspout extensions. We create customized waterproofing plans to prevent future flooding.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Is basement flooding covered by insurance in McLean?
            </h3>
            <p className="text-gray-600">
              Coverage depends on the water source. Sudden internal failures like burst pipes and water heater leaks are typically covered by McLean homeowners policies. Groundwater seepage and surface water flooding usually require separate flood insurance. We work directly with all major insurance carriers to document damage, provide detailed estimates, and maximize your coverage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              How long does basement flood restoration take in McLean?
            </h3>
            <p className="text-gray-600">
              Water extraction begins immediately and usually completes within hours. Structural drying takes 3-7 days depending on water volume and materials affected. Unfinished basements dry faster than finished spaces. Complete restoration including reconstruction averages 1-3 weeks for most McLean basements. We provide detailed timelines after initial assessment.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            McLean Basement Flooding Emergency?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let standing water damage your McLean home. Our emergency teams respond immediately with professional water extraction, structural drying, and complete restoration.
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
              Request Emergency Service
            </a>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            24/7 emergency response · IICRC certified · Waterproofing solutions · Licensed in Virginia
          </p>
        </div>
      </div>
    </main>
  );
};

export default McLeanBasementFlooding;
