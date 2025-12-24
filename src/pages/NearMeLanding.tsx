import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';
import { MapPin, Clock, Phone } from 'lucide-react';
import { LOCATIONS } from '../data/locations';

const NearMeLanding: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="Water Damage Restoration Near Me | 24/7 Emergency Service" 
        description="Looking for water damage restoration near you? Flood Doctor arrives in 60 minutes or less. Licensed, insured, and top-rated in Northern Virginia." 
      />
      
      <div className="bg-white pt-12 pb-20 border-b border-gray-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-bold uppercase tracking-wide mb-6">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 Crews Available Now
             </div>
             <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                 Water Damage Restoration <span className="text-primary">Near You</span>
             </h1>
             <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                 We are your local emergency response team. Arriving at your doorstep in Northern Virginia within 60 minutes.
             </p>
             <div className="hidden md:flex flex-col sm:flex-row justify-center gap-4">
                 <Button to="/request/" variant="primary" className="h-14 px-8 text-lg">
                    Request Service
                 </Button>
                 <Button href="tel:8774970007" variant="secondary" className="h-14 px-8 text-lg">
                    Call (877) 497-0007
                 </Button>
             </div>
         </div>
      </div>

      <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Clock size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">60 Minute Response</h3>
                      <p className="text-gray-600">Our trucks are fully loaded and stationed locally for rapid deployment.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <MapPin size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Experts</h3>
                      <p className="text-gray-600">We know the local building codes, climate, and common housing issues.</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                      <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Phone size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Live Support</h3>
                      <p className="text-gray-600">Speak directly to a project manager, not an answering service.</p>
                  </div>
              </div>

              <div className="mt-20">
                  <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">Service Areas</h2>
                  <div className="flex flex-wrap justify-center gap-4">
                      {LOCATIONS.map(loc => (
                          <span key={loc.title} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm">
                              {loc.title}
                          </span>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </main>
  );
};

export default NearMeLanding;