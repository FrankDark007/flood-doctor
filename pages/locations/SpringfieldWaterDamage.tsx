import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { generateLocationPageSchema } from '../../utils/schema';

const SpringfieldWaterDamage: React.FC = () => {

  const faqs = [
    {
      question: "How quickly can you respond to water damage emergencies in Springfield, VA?",
      answer: "We provide 24/7 emergency water damage restoration services in Springfield, VA with rapid response times typically within 60-90 minutes. Our team serves the Springfield Mall area, Kingstowne, Franconia, Van Dorn, and West Springfield neighborhoods throughout Fairfax County."
    },
    {
      question: "What areas of Springfield and Fairfax County do you serve?",
      answer: "We serve all of Springfield including the Springfield Mall area, Kingstowne, Franconia, Van Dorn, West Springfield, and surrounding Fairfax County communities. Our team is strategically positioned to reach any location quickly for emergency water damage restoration."
    },
    {
      question: "Do you work with insurance companies in Springfield, VA?",
      answer: "Yes, we work directly with all major insurance providers serving Springfield and Fairfax County. We handle documentation, communicate with adjusters, and help streamline your water damage claim process to ensure proper coverage and fast restoration."
    },
    {
      question: "What types of water damage do you handle in Springfield?",
      answer: "We handle all types of water damage in Springfield including burst pipes, basement flooding, storm damage, sewage backups, appliance leaks, roof leaks, and more. Our certified technicians use advanced equipment for water extraction, drying, dehumidification, and complete restoration."
    },
    {
      question: "Are your water damage restoration services available 24/7 in Springfield?",
      answer: "Yes, our emergency water damage restoration services are available 24 hours a day, 7 days a week in Springfield, VA. Call (877) 497-0007 anytime for immediate assistance. We understand water damage doesn't wait for business hours and neither do we."
    }
  ];

  const schema = generateLocationPageSchema(
    { name: 'Springfield', address: { addressLocality: 'Springfield', addressRegion: 'VA', addressCountry: 'US' } },
    [{ label: 'Locations', path: '/locations/' }, { label: 'Springfield Water Damage', path: '/locations/springfield-water-damage/' }],
    faqs
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Springfield VA | 24/7 Emergency Service | (877) 497-0007"
        description="Expert water damage restoration in Springfield, VA. Serving Kingstowne, Franconia, West Springfield & Fairfax County. 24/7 emergency response. Call (877) 497-0007 now."
        schema={schema}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Damage Restoration in Springfield, VA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              24/7 Emergency Response | Serving Fairfax County | Fast & Reliable
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
                Get Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-red-600 text-white py-4 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg font-semibold">
              🚨 EMERGENCY? We're Available 24/7/365 | Call <a href="tel:8774970007" className="underline font-bold">(877) 497-0007</a> for Immediate Assistance
            </p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 lg:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Serving Springfield & Surrounding Areas
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
                  <p className="text-gray-600 mt-2">Fast emergency response to your location</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Complete Water Damage Restoration Services
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              From initial water extraction to final restoration, we handle every step of the recovery process in Springfield and throughout Fairfax County.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Water Extraction</h3>
                <p className="text-gray-600">
                  Rapid water removal using industrial-grade pumps and extractors to prevent further damage to your Springfield property.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">🌡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Structural Drying</h3>
                <p className="text-gray-600">
                  Advanced dehumidification and air movement systems to thoroughly dry walls, floors, and structural components.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Basement Flooding</h3>
                <p className="text-gray-600">
                  Specialized basement water removal and restoration services for Fairfax County homes and businesses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Burst Pipe Cleanup</h3>
                <p className="text-gray-600">
                  Fast response to pipe failures with water extraction, drying, and repair coordination.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">⛈️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Storm Damage Restoration</h3>
                <p className="text-gray-600">
                  Complete restoration after severe weather events affecting Springfield and surrounding areas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#1a73e8] text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Assistance</h3>
                <p className="text-gray-600">
                  Complete documentation and direct insurance company communication for seamless claims processing.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/services/water-damage"
                className="inline-block text-[#1a73e8] hover:text-[#1557b0] font-semibold text-lg"
              >
                Learn More About Our Water Damage Services →
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Springfield Residents Trust Flood Doctor
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#1a73e8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency Response</h3>
                  <p className="text-gray-600">
                    Water damage doesn't wait for business hours. We're available around the clock, every day of the year to serve Springfield and Fairfax County.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Technicians</h3>
                  <p className="text-gray-600">
                    IICRC-certified professionals with advanced training in water damage restoration and structural drying techniques.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Equipment</h3>
                  <p className="text-gray-600">
                    Industrial-grade water extractors, commercial dehumidifiers, air movers, and moisture detection technology.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Insurance Billing</h3>
                  <p className="text-gray-600">
                    We work directly with your insurance company to streamline the claims process and maximize your coverage.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">
                    Deep knowledge of Springfield area properties, common water damage issues, and Fairfax County building codes.
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
                    From water extraction through final repairs, we handle every aspect of restoration under one roof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Water Damage Restoration Process
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Fast, efficient, and thorough restoration from start to finish
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-[#1a73e8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Contact</h3>
                <p className="text-gray-600">
                  Call (877) 497-0007 and speak with a live professional who will dispatch our team immediately to your Springfield location.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1a73e8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inspection & Assessment</h3>
                <p className="text-gray-600">
                  Thorough inspection using moisture meters and thermal imaging to identify all affected areas and create a restoration plan.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1a73e8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Water Extraction & Drying</h3>
                <p className="text-gray-600">
                  Rapid water removal followed by strategic placement of commercial dehumidifiers and air movers for complete drying.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#1a73e8] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Restoration & Repair</h3>
                <p className="text-gray-600">
                  Complete restoration including repairs, reconstruction, and final cleaning to return your property to pre-loss condition.
                </p>
              </div>
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
                  How quickly can you respond to water damage emergencies in Springfield, VA?
                </h3>
                <p className="text-gray-600">
                  We provide 24/7 emergency water damage restoration services in Springfield, VA with rapid response times typically within 60-90 minutes. Our team serves the Springfield Mall area, Kingstowne, Franconia, Van Dorn, and West Springfield neighborhoods throughout Fairfax County.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What areas of Springfield and Fairfax County do you serve?
                </h3>
                <p className="text-gray-600">
                  We serve all of Springfield including the Springfield Mall area, Kingstowne, Franconia, Van Dorn, West Springfield, and surrounding Fairfax County communities. Our team is strategically positioned to reach any location quickly for emergency water damage restoration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you work with insurance companies in Springfield, VA?
                </h3>
                <p className="text-gray-600">
                  Yes, we work directly with all major insurance providers serving Springfield and Fairfax County. We handle documentation, communicate with adjusters, and help streamline your water damage claim process to ensure proper coverage and fast restoration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What types of water damage do you handle in Springfield?
                </h3>
                <p className="text-gray-600">
                  We handle all types of water damage in Springfield including burst pipes, basement flooding, storm damage, sewage backups, appliance leaks, roof leaks, and more. Our certified technicians use advanced equipment for water extraction, drying, dehumidification, and complete restoration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Are your water damage restoration services available 24/7 in Springfield?
                </h3>
                <p className="text-gray-600">
                  Yes, our emergency water damage restoration services are available 24 hours a day, 7 days a week in Springfield, VA. Call (877) 497-0007 anytime for immediate assistance. We understand water damage doesn't wait for business hours and neither do we.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 px-4 bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Water Damage Restoration in Springfield?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our emergency response team is standing by 24/7 to help you. Don't wait - water damage gets worse every hour.
            </p>
            <a
              href="tel:8774970007"
              className="inline-block bg-white text-[#1a73e8] px-10 py-5 rounded-lg font-bold text-xl hover:bg-blue-50 transition-colors"
            >
              Call (877) 497-0007 Now
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
                href="/locations/springfield-mold-removal"
                className="inline-block bg-gray-100 hover:bg-[#1a73e8] hover:text-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Mold Removal Springfield
              </a>
              <a
                href="/services/residential/restoration-services/water-damage-restoration/"
                className="inline-block bg-gray-100 hover:bg-[#1a73e8] hover:text-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Emergency Water Extraction
              </a>
              <a
                href="/services/flood-cleanup"
                className="inline-block bg-gray-100 hover:bg-[#1a73e8] hover:text-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Flood Cleanup
              </a>
              <a
                href="/services/residential/specialty-services/basement-flooding/"
                className="inline-block bg-gray-100 hover:bg-[#1a73e8] hover:text-white text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Basement Waterproofing
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SpringfieldWaterDamage;
