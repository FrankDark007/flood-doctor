/**
 * CityAbout - About Page for City Subdomain Sites
 *
 * Shows information about the Flood Doctor team serving this city.
 * Route: /about/
 */

import React from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import PageMeta from '@/components/ui/PageMeta';
import { Phone, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CityAbout: React.FC = () => {
  const franchise = useCityFranchise();

  const metaTitle = `About Flood Doctor ${franchise.city} | ${franchise.serviceAreaLabel}`;
  const metaDescription = `Meet the Flood Doctor team serving ${franchise.city}, ${franchise.state}. ${franchise.manager.bio}`;

  return (
    <main className="flex-grow bg-white">
      <PageMeta title={metaTitle} description={metaDescription} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            About Flood Doctor {franchise.city}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {franchise.serviceAreaLabel}. Trusted by homeowners and businesses
            throughout {franchise.city} and surrounding areas.
          </p>
        </div>
      </section>

      {/* Branch Manager Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {franchise.manager.image && (
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                  <img
                    src={franchise.manager.image}
                    alt={franchise.manager.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {franchise.manager.name}
                </h2>
                <p className="text-primary font-medium mb-4">
                  {franchise.manager.title}
                </p>
                <p className="text-gray-600 mb-4">
                  {franchise.manager.bio}
                </p>
                {franchise.manager.localTie && (
                  <p className="text-gray-500 italic">
                    {franchise.manager.localTie}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Info */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Serving {franchise.city} & Surrounding Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Areas */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Primary Service Area
              </h3>
              <p className="text-sm text-gray-500 mb-3">60-minute or less response</p>
              <div className="flex flex-wrap gap-2">
                {franchise.serviceArea.primary.map(area => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Secondary Areas */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                Extended Service Area
              </h3>
              <p className="text-sm text-gray-500 mb-3">60-90 minute response</p>
              <div className="flex flex-wrap gap-2">
                {franchise.serviceArea.secondary.map(area => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Dispatch Note */}
          <p className="text-center text-gray-500 mt-8 max-w-2xl mx-auto">
            {franchise.dispatchNote}
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">Available around the clock for water emergencies</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IICRC Certified</h3>
              <p className="text-gray-600">Industry-certified technicians and processes</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5-Star Rated</h3>
              <p className="text-gray-600">Hundreds of satisfied customers in {franchise.city}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Need Emergency Water Damage Help?
          </h2>
          <p className="text-blue-100 mb-8">
            Our {franchise.city} team is available 24/7 for emergency response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${franchise.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {franchise.phone}
            </a>
            <Link
              to="/request/"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors border-2 border-white/20"
            >
              Request Service Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CityAbout;
