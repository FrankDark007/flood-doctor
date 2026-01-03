
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Shield, MapPin, CheckCircle, Star, ArrowRight, Building2, Zap, Users } from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';

const TysonsWaterDamage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flood Doctor - Tysons Water Damage Restoration",
    "@id": "https://tysons.flood.doctor/water-damage",
    "url": "https://tysons.flood.doctor/water-damage",
    "image": "https://flood.doctor/logo.png",
    "telephone": "+1-(877) 497-0007",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tysons",
      "addressRegion": "VA",
      "postalCode": "22102",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.9187,
      "longitude": -77.2311
    },
    "areaServed": [
      { "@type": "City", "name": "Tysons" },
      { "@type": "City", "name": "Tysons Corner" },
      { "@type": "City", "name": "McLean" },
      { "@type": "City", "name": "Vienna" }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Tysons VA | Commercial & Residential | Flood Doctor"
        description="Professional water damage restoration in Tysons, VA. 24/7 emergency service for high-rises, offices, and residences. IICRC certified. Call (877) 497-0007"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Tysons, Virginia</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Water Damage Restoration for <span className="text-blue-400">Tysons</span> Properties
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tysons' urban core demands rapid, professional water damage response. From Tysons Corner Center to The Boro, we restore commercial and residential properties with minimal disruption.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:8774970007"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <Phone className="w-6 h-6" />
                (877) 497-0007
              </a>
              <a
                href="tel:877-497-0007"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/20"
              >
                <Building2 className="w-5 h-5" />
                Commercial: 877-497-0007
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>30-Minute Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>IICRC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9★ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Tysons Properties Restored</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">30 min</div>
              <div className="text-gray-600">Emergency Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Commercial Water Damage Specialists for Tysons Business District
              </h2>
              <p className="text-gray-600 mb-6">
                Tysons is Northern Virginia's premier business hub. Water damage in commercial properties requires specialized equipment, rapid response, and minimal business interruption. Our commercial division handles:
              </p>
              <ul className="space-y-3">
                {[
                  "High-rise office building water damage",
                  "Retail space flooding (Tysons Corner, Tysons Galleria)",
                  "Restaurant and hospitality water emergencies",
                  "Data center and server room water intrusion",
                  "Medical office and healthcare facility restoration",
                  "Multi-story parking garage water damage"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services/commercial/"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold mt-6 hover:gap-3 transition-all"
              >
                View Commercial Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Commercial Emergency Line</h3>
              <p className="text-blue-100 mb-6">
                For Tysons businesses, every minute of downtime costs money. Our commercial team provides priority response with dedicated project managers.
              </p>
              <a
                href="tel:877-497-0007"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all w-full justify-center"
              >
                <Phone className="w-6 h-6" />
                877-497-0007
              </a>
              <div className="mt-6 pt-6 border-t border-blue-500">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  <div>
                    <div className="font-semibold">Dedicated Project Managers</div>
                    <div className="text-blue-200 text-sm">Single point of contact for your restoration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tysons Residential Water Damage Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luxury condos, townhomes, and single-family homes throughout Tysons deserve expert care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "High-Rise Condos",
                desc: "Specialized equipment for multi-story buildings. We coordinate with building management for efficient restoration.",
                areas: ["The Boro", "Tysons West", "Ovation at Park Crest"]
              },
              {
                title: "Townhomes",
                desc: "Complete restoration for Tysons townhome communities, including basement flood cleanup and structural drying.",
                areas: ["Tysons Woods", "Raglan Road", "Westpark"]
              },
              {
                title: "Single Family Homes",
                desc: "Full-service water damage restoration for homes in Tysons and surrounding Vienna neighborhoods.",
                areas: ["Tysons Pimmit", "Idylwood", "West Falls Church"]
              }
            ].map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.desc}</p>
                <div className="text-sm text-gray-500">
                  <strong>Serving:</strong> {type.areas.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tysons Water Damage? We're Ready 24/7.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let water damage disrupt your business or home. Call now for immediate response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all"
            >
              <Phone className="w-6 h-6" />
              Residential: (877) 497-0007
            </a>
            <a
              href="tel:877-497-0007"
              className="inline-flex items-center justify-center gap-3 bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all"
            >
              <Building2 className="w-6 h-6" />
              Commercial: 877-497-0007
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TysonsWaterDamage;
