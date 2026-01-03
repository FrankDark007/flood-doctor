import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Droplets,
  Wind,
  Flame,
  Home,
  AlertTriangle,
  Waves,
  ThermometerSnowflake,
  ArrowRight,
  Shield,
  Clock,
  Star
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import { CityConfig } from '../../config/cities';
import MoldIcon from '../../components/icons/MoldIcon';

interface CityServicesHubProps {
  city: CityConfig;
}

const services = [
  {
    slug: 'water-damage-restoration',
    title: 'Water Damage Restoration',
    shortTitle: 'Water Damage',
    description: 'Emergency water extraction, structural drying, and complete restoration.',
    icon: Droplets,
    color: 'blue',
  },
  {
    slug: 'flood-cleanup',
    title: 'Flood Cleanup',
    shortTitle: 'Flood Cleanup',
    description: 'Rapid response flood cleanup with industrial-grade equipment.',
    icon: Waves,
    color: 'cyan',
  },
  {
    slug: 'mold-remediation',
    title: 'Mold Remediation',
    shortTitle: 'Mold Removal',
    description: 'Professional mold inspection, removal, and prevention services.',
    icon: MoldIcon,
    color: 'green',
  },
  {
    slug: 'basement-flooding',
    title: 'Basement Flooding',
    shortTitle: 'Basement Flooding',
    description: 'Specialized basement water damage restoration and waterproofing.',
    icon: Home,
    color: 'indigo',
  },
  {
    slug: 'sewage-cleanup',
    title: 'Sewage Cleanup',
    shortTitle: 'Sewage Cleanup',
    description: 'Safe sewage and black water cleanup with sanitization.',
    icon: AlertTriangle,
    color: 'amber',
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage Restoration',
    shortTitle: 'Storm Damage',
    description: 'Complete storm and weather damage restoration services.',
    icon: Wind,
    color: 'gray',
  },
  {
    slug: 'fire-damage',
    title: 'Fire & Smoke Damage',
    shortTitle: 'Fire Damage',
    description: 'Fire damage restoration, smoke removal, and odor elimination.',
    icon: Flame,
    color: 'red',
  },
  {
    slug: 'burst-pipes',
    title: 'Burst Pipe Repair',
    shortTitle: 'Burst Pipes',
    description: 'Emergency burst and frozen pipe water damage restoration.',
    icon: ThermometerSnowflake,
    color: 'sky',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
  gray: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' },
  red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
  sky: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200' },
};

const CityServicesHub: React.FC<CityServicesHubProps> = ({ city }) => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`Restoration Services in ${city.name}, ${city.state} | Flood Doctor`}
        description={`Professional water damage, mold remediation, and restoration services in ${city.name}, ${city.state}. ${city.responseTime} response. IICRC certified. Call (877) 497-0007.`}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-medium mb-3">{city.name}, {city.state}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Residential Restoration Services in {city.name}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional water damage, mold remediation, and disaster restoration services
              for {city.name} homeowners. {city.responseTime} emergency response, 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:8774970007"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <Phone className="w-6 h-6" />
                (877) 497-0007
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
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
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our {city.name} Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive restoration services for {city.name} homes and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const colors = colorClasses[service.color];
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/city/${city.slug}/services/${service.slug}`}
                  className={`group p-6 rounded-2xl border ${colors.border} ${colors.bg} hover:shadow-lg transition-all`}
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1a73e8] transition-colors">
                    {service.shortTitle} in {city.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#1a73e8] font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why {city.name} Homeowners Trust Flood Doctor
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <strong className="text-gray-900">{city.responseTime} Response Time</strong>
                    <p className="text-gray-600">Fastest response in {city.name} from our local headquarters</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <strong className="text-gray-900">IICRC Certified Technicians</strong>
                    <p className="text-gray-600">Industry-certified professionals with 15+ years experience</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <strong className="text-gray-900">Insurance Claim Assistance</strong>
                    <p className="text-gray-600">We work directly with your insurance company</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <strong className="text-gray-900">Local {city.name} Experts</strong>
                    <p className="text-gray-600">We know {city.name} neighborhoods and their unique challenges</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Emergency Service in {city.name}?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is standing by 24/7 to respond to water damage emergencies
                anywhere in {city.name} and surrounding areas.
              </p>
              <a
                href="tel:8774970007"
                className="block w-full bg-[#1a73e8] text-white text-center py-4 rounded-xl font-bold text-xl hover:bg-blue-700 transition-all"
              >
                (877) 497-0007
              </a>
              <p className="text-center text-gray-500 text-sm mt-4">
                Available 24/7 · {city.responseTime} Response
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#1a73e8] to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Restore Your {city.name} Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait—water damage spreads fast. Call now for immediate service.
          </p>
          <a
            href="tel:8774970007"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#1a73e8] px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all"
          >
            <Phone className="w-7 h-7" />
            (877) 497-0007
          </a>
        </div>
      </section>
    </main>
  );
};

export default CityServicesHub;
