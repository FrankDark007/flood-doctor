/**
 * CityContact - Contact Page for City Subdomain Sites
 *
 * Shows contact information specific to the city franchise.
 * Route: /contact/
 */

import React from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import PageMeta from '@/components/ui/PageMeta';
import { Phone, Mail, Clock, MapPin, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CityContact: React.FC = () => {
  const franchise = useCityFranchise();

  const metaTitle = `Contact Flood Doctor ${franchise.city} | 24/7 Emergency Line`;
  const metaDescription = `Contact Flood Doctor in ${franchise.city}, ${franchise.state}. 24/7 emergency line: ${franchise.phone}. ${franchise.serviceAreaLabel}.`;

  return (
    <main className="flex-grow bg-white">
      <PageMeta title={metaTitle} description={metaDescription} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Contact Flood Doctor {franchise.city}
          </h1>
          <p className="text-xl text-gray-600">
            {franchise.serviceAreaLabel}
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Emergency Contact */}
            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Emergency?</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Water damage gets worse every minute. Call now for immediate response.
              </p>
              <a
                href={`tel:${franchise.phone}`}
                className="flex items-center justify-center gap-3 w-full py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {franchise.phone}
              </a>
              <p className="text-sm text-gray-500 text-center mt-4">
                Available 24/7 • 60-minute response
              </p>
            </div>

            {/* Non-Emergency Contact */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Non-Emergency</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Questions about our services or need a quote? We're here to help.
              </p>
              <Link
                to="/request/"
                className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
              >
                Request Service Online
              </Link>
              <div className="mt-6 space-y-3">
                <a
                  href="mailto:help@flood.doctor"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  help@flood.doctor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            {franchise.city} Service Area
          </h2>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Areas We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[...franchise.serviceArea.primary, ...franchise.serviceArea.secondary].map(area => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Hours of Operation
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Emergency Services:</span>
                    <span className="font-medium">24/7</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Office Hours:</span>
                    <span className="font-medium">Mon-Fri 8am-6pm</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Dispatch Note */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-500 text-sm">
                {franchise.dispatchNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      {franchise.emergencyContacts && franchise.emergencyContacts.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              {franchise.city} Emergency Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {franchise.emergencyContacts.map(contact => (
                <a
                  key={contact.name}
                  href={contact.url || `tel:${contact.phone}`}
                  target={contact.url ? '_blank' : undefined}
                  rel={contact.url ? 'noopener noreferrer' : undefined}
                  className="flex flex-col p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900">{contact.name}</span>
                  <span className="text-primary text-sm">{contact.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default CityContact;
