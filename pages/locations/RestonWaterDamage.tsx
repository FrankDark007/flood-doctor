import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { generateLocationPageSchema } from '../../utils/schema';

const RestonWaterDamage: React.FC = () => {

  const faqs = [
    {
      question: "How quickly can Flood Doctor respond to water damage emergencies in Reston VA?",
      answer: "We offer 24/7 emergency water damage response in Reston and typically arrive within 60 minutes. Our rapid response helps minimize damage to your property in Reston Town Center, Lake Anne, South Lakes, North Point, and Hunters Woods areas."
    },
    {
      question: "Does Flood Doctor serve all Reston VA neighborhoods?",
      answer: "Yes, we provide comprehensive water damage restoration services throughout Reston including Reston Town Center, Lake Anne, South Lakes, North Point, and Hunters Woods. Our team is familiar with the unique water damage challenges in each Reston community."
    },
    {
      question: "What types of water damage do you handle in Reston VA?",
      answer: "We handle all categories of water damage in Reston including burst pipes, flooding, sewage backups, appliance leaks, storm damage, and basement flooding. Our certified technicians use advanced equipment to restore your Reston property quickly and safely."
    },
    {
      question: "Will my insurance cover water damage restoration in Reston?",
      answer: "Most homeowner's insurance policies cover sudden water damage in Reston. We work directly with all major insurance companies and can help you navigate the claims process to ensure maximum coverage for your water damage restoration."
    },
    {
      question: "How long does water damage restoration take in Reston homes?",
      answer: "Water damage restoration timelines vary based on the extent of damage. Most Reston residential projects are completed within 3-5 days, though larger jobs may take longer. We provide a detailed timeline after our initial assessment of your property."
    }
  ];

  const schema = generateLocationPageSchema(
    { name: 'Reston', address: { addressLocality: 'Reston', addressRegion: 'VA', addressCountry: 'US' } },
    [{ label: 'Locations', path: '/locations/' }, { label: 'Reston Water Damage', path: '/locations/reston-water-damage/' }],
    faqs
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Reston VA | 24/7 Emergency Response | (877) 497-0007"
        description="Expert water damage restoration in Reston VA. 24/7 emergency response to Reston Town Center, Lake Anne, South Lakes. Call (877) 497-0007 for immediate help."
        schema={schema}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1a73e8] to-[#1557b0] text-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Water Damage Restoration in Reston VA
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                24/7 Emergency Response | 60-Minute Arrival Time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8774970007" className="bg-white text-[#1a73e8] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                  Call Now: (877) 497-0007
                </a>
                <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1a73e8] transition">
                  Get Free Quote
                </a>
              </div>
              <p className="mt-6 text-blue-100">
                Serving Reston Town Center, Lake Anne, South Lakes, North Point & Hunters Woods
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#1a73e8] mb-2">60 Min</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1a73e8] mb-2">2,500+</div>
                <div className="text-gray-600">Reston Jobs Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1a73e8] mb-2">4.9/5</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Trusted Water Damage Experts Serving Reston Virginia
                </h2>
                <p className="text-gray-700 mb-4">
                  When water damage strikes your Reston home or business, every minute counts. Flood Doctor provides rapid 24/7 emergency water damage restoration services throughout Reston, VA, including Reston Town Center, Lake Anne, South Lakes, North Point, and Hunters Woods neighborhoods.
                </p>
                <p className="text-gray-700 mb-4">
                  Our IICRC-certified technicians understand the unique challenges Reston properties face, from basement flooding in older Lake Anne homes to pipe bursts in newer Reston Town Center developments. We respond within 60 minutes with advanced water extraction equipment, industrial dehumidifiers, and thermal imaging technology to detect hidden moisture.
                </p>
                <p className="text-gray-700 mb-6">
                  Whether you're dealing with a burst pipe, sewage backup, storm flooding, or appliance leak, our team provides comprehensive water damage restoration that includes water extraction, structural drying, antimicrobial treatment, and full reconstruction services.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Water Damage Restoration Process
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-[#1a73e8] pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">1. Emergency Contact & Assessment</h4>
                    <p className="text-gray-700">Call (877) 497-0007 for immediate dispatch. We arrive within 60 minutes to assess damage and begin water extraction.</p>
                  </div>
                  <div className="border-l-4 border-[#1a73e8] pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">2. Water Removal & Extraction</h4>
                    <p className="text-gray-700">Using commercial-grade pumps and vacuums, we remove standing water from your Reston property quickly and efficiently.</p>
                  </div>
                  <div className="border-l-4 border-[#1a73e8] pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">3. Drying & Dehumidification</h4>
                    <p className="text-gray-700">Industrial dehumidifiers and air movers ensure complete drying of walls, floors, and hidden cavities to prevent mold growth.</p>
                  </div>
                  <div className="border-l-4 border-[#1a73e8] pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">4. Cleaning & Sanitizing</h4>
                    <p className="text-gray-700">We clean and sanitize all affected areas using EPA-approved antimicrobial treatments to eliminate bacteria and odors.</p>
                  </div>
                  <div className="border-l-4 border-[#1a73e8] pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">5. Restoration & Reconstruction</h4>
                    <p className="text-gray-700">From minor repairs to complete reconstruction, we restore your Reston property to pre-damage condition.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Common Water Damage Scenarios in Reston
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700"><strong>Burst Pipes:</strong> Common during Reston's cold winters, especially in older homes around Lake Anne</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700"><strong>Basement Flooding:</strong> Heavy rainfall can overwhelm sump pumps in South Lakes and Hunters Woods areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700"><strong>Sewage Backups:</strong> Aging infrastructure in parts of Reston can lead to sewage system failures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700"><strong>Appliance Leaks:</strong> Water heater, dishwasher, and washing machine failures in Reston Town Center condos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1a73e8] mr-2">•</span>
                    <span className="text-gray-700"><strong>Storm Damage:</strong> Severe weather and flash flooding affecting all Reston neighborhoods</span>
                  </li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-[#1a73e8] p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Why Choose Flood Doctor for Reston Water Damage?
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">24/7 emergency response with 60-minute arrival to all Reston neighborhoods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">IICRC-certified water damage restoration technicians</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">Direct insurance billing and claims assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">Advanced moisture detection and thermal imaging technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1a73e8] mr-2">✓</span>
                      <span className="text-gray-700">Complete restoration services from extraction to reconstruction</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-[#1a73e8] text-white p-8 rounded-lg mb-8 sticky top-4">
                  <h3 className="text-2xl font-bold mb-4">24/7 Emergency Service</h3>
                  <p className="mb-6">Water damage never waits. Neither do we.</p>
                  <a href="tel:8774970007" className="block bg-white text-[#1a73e8] text-center px-6 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition mb-4">
                    (877) 497-0007
                  </a>
                  <p className="text-sm text-blue-100 text-center">Average 60-minute response time</p>

                  <div className="mt-8 pt-8 border-t border-blue-400">
                    <h4 className="font-bold mb-4">Areas We Serve:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Reston Town Center</li>
                      <li>• Lake Anne</li>
                      <li>• South Lakes</li>
                      <li>• North Point</li>
                      <li>• Hunters Woods</li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-8 border-t border-blue-400">
                    <h4 className="font-bold mb-4">Our Services:</h4>
                    <ul className="space-y-2 text-sm">
                      <li><a href="/services/residential/restoration-services/water-damage-restoration/" className="hover:underline">• Water Damage Restoration</a></li>
                      <li><a href="/services/flood-cleanup" className="hover:underline">• Flood Cleanup</a></li>
                      <li><a href="/services/residential/cleanup-services/mold-remediation/" className="hover:underline">• Mold Remediation</a></li>
                      <li><a href="/services/residential/cleanup-services/sewage-cleanup/" className="hover:underline">• Sewage Cleanup</a></li>
                      <li><a href="/services/fire-damage-restoration" className="hover:underline">• Fire Damage Restoration</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions About Water Damage in Reston
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How quickly can Flood Doctor respond to water damage emergencies in Reston VA?
                </h3>
                <p className="text-gray-700">
                  We offer 24/7 emergency water damage response in Reston and typically arrive within 60 minutes. Our rapid response helps minimize damage to your property in Reston Town Center, Lake Anne, South Lakes, North Point, and Hunters Woods areas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Does Flood Doctor serve all Reston VA neighborhoods?
                </h3>
                <p className="text-gray-700">
                  Yes, we provide comprehensive water damage restoration services throughout Reston including Reston Town Center, Lake Anne, South Lakes, North Point, and Hunters Woods. Our team is familiar with the unique water damage challenges in each Reston community.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What types of water damage do you handle in Reston VA?
                </h3>
                <p className="text-gray-700">
                  We handle all categories of water damage in Reston including burst pipes, flooding, sewage backups, appliance leaks, storm damage, and basement flooding. Our certified technicians use advanced equipment to restore your Reston property quickly and safely.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Will my insurance cover water damage restoration in Reston?
                </h3>
                <p className="text-gray-700">
                  Most homeowner's insurance policies cover sudden water damage in Reston. We work directly with all major insurance companies and can help you navigate the claims process to ensure maximum coverage for your water damage restoration.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How long does water damage restoration take in Reston homes?
                </h3>
                <p className="text-gray-700">
                  Water damage restoration timelines vary based on the extent of damage. Most Reston residential projects are completed within 3-5 days, though larger jobs may take longer. We provide a detailed timeline after our initial assessment of your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-[#1a73e8] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't Let Water Damage Destroy Your Reston Property
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Call now for immediate 24/7 emergency water damage restoration services
            </p>
            <a href="tel:8774970007" className="inline-block bg-white text-[#1a73e8] px-10 py-5 rounded-lg font-bold text-2xl hover:bg-gray-100 transition">
              (877) 497-0007
            </a>
            <p className="mt-6 text-blue-100">
              Serving all of Reston VA | 60-Minute Response Time | Insurance Accepted
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RestonWaterDamage;
