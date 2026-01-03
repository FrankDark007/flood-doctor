import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Droplets,
  Home,
  AlertTriangle,
  Building2,
  Award,
  Users,
  Zap
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import { CityConfig } from '../../config/cities';

interface CityLandingProps {
  city: CityConfig;
}

const CityLanding: React.FC<CityLandingProps> = ({ city }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Flood Doctor - ${city.name} Water Damage Restoration`,
    "image": "https://flood.doctor/logo.png",
    "telephone": "+1-877-497-0007",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8466D Tyco Rd",
      "addressLocality": "Vienna",
      "addressRegion": "VA",
      "postalCode": "22182",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.geo.lat,
      "longitude": city.geo.lng
    },
    "areaServed": {
      "@type": city.state === 'DC' ? 'City' : 'City',
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": city.state === 'DC' ? 'District of Columbia' : 'Virginia'
      }
    },
    "url": `https://${city.subdomain}/`,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$"
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`Water Damage Restoration ${city.name} ${city.state} | ${city.responseTime} Response | Flood Doctor`}
        description={city.description}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">{city.name}, {city.state}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {city.headline}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {city.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="tel:8774970007"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-600/30"
              >
                <Phone className="w-6 h-6" />
                (877) 497-0007
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/20"
              >
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>{city.responseTime} Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>IICRC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9★ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#1a73e8]">{city.responseTime.split('-')[0]}</div>
              <div className="text-gray-600 text-sm mt-1">Minute Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1a73e8]">24/7</div>
              <div className="text-gray-600 text-sm mt-1">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1a73e8]">15+</div>
              <div className="text-gray-600 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1a73e8]">100%</div>
              <div className="text-gray-600 text-sm mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why {city.name} Homeowners Choose Flood Doctor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Local expertise, rapid response, and professional restoration you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-[#1a73e8]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local to {city.name}</h3>
              <p className="text-gray-600">
                Headquartered in Vienna, we're close to {city.name} and know your neighborhoods.
                When you call, we're already nearby.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{city.responseTime} Response</h3>
              <p className="text-gray-600">
                {city.name}'s geography means we reach any address within {city.responseTime}.
                Fast response prevents secondary damage.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Experts</h3>
              <p className="text-gray-600">
                IICRC-certified technicians with 15+ years experience.
                We know water damage restoration inside and out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            {city.name} Neighborhoods We Serve
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-2 bg-gray-100 px-6 py-4 font-semibold text-gray-900">
                <div>Neighborhood</div>
                <div className="text-right">Response Time</div>
              </div>
              {city.neighborhoods.map((hood, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-2 px-6 py-4 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <div className="text-gray-900">{hood.name}</div>
                  <div className="text-right text-[#1a73e8] font-medium">{hood.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Challenges */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common Water Damage Causes in {city.name}
              </h2>
              <p className="text-gray-600 mb-8">
                We understand the unique water damage challenges {city.name} homeowners face.
                Our team is equipped to handle all types of water emergencies.
              </p>
              <ul className="space-y-4">
                {city.localChallenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our {city.name} Services</h3>
              <ul className="space-y-4">
                {[
                  { icon: Droplets, title: 'Emergency Water Extraction', desc: 'Industrial-grade pumps remove water fast' },
                  { icon: Home, title: 'Structural Drying', desc: 'Commercial dehumidifiers and air movers' },
                  { icon: AlertTriangle, title: 'Mold Prevention', desc: 'Antimicrobial treatments to prevent growth' },
                  { icon: Building2, title: 'Basement Flooding', desc: 'Specialized basement water damage restoration' },
                ].map((service, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-[#1a73e8]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{service.title}</div>
                      <div className="text-sm text-gray-600">{service.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to={`/city/${city.slug}/services`}
                className="mt-6 inline-flex items-center gap-2 text-[#1a73e8] font-semibold hover:gap-3 transition-all"
              >
                View All {city.name} Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {city.testimonials.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What {city.name} Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {city.testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold text-gray-900">— {testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#1a73e8] to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Water Damage in {city.name}? We're Ready 24/7.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait—water damage spreads fast. Call now for immediate {city.responseTime} response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1a73e8] px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-lg"
            >
              <Phone className="w-7 h-7" />
              (877) 497-0007
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            8466D Tyco Rd, Vienna, VA 22182 · DPOR License #2705155505 · IICRC Certified
          </p>
        </div>
      </section>

      {/* FAQ Schema */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">How fast can you get to my {city.name} home?</h3>
              <p className="text-gray-600">
                We're headquartered on Tyco Road in Vienna. Response time to any {city.name} address is {city.responseTime}, 24/7.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Do you handle insurance claims for {city.name} residents?</h3>
              <p className="text-gray-600">
                Yes. We work with all major insurers and provide the documentation adjusters expect. Most homeowners have coverage for sudden water damage.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Are you licensed in {city.state === 'DC' ? 'DC' : 'Virginia'}?</h3>
              <p className="text-gray-600">
                Yes. Flood Doctor holds Virginia DPOR License #2705155505 and is IICRC certified. We're fully licensed and insured for restoration work in {city.name}.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">What areas besides {city.name} do you serve?</h3>
              <p className="text-gray-600">
                We serve all of Northern Virginia, Washington DC, and Maryland. From our Vienna headquarters, we reach most locations within 30-45 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CityLanding;
