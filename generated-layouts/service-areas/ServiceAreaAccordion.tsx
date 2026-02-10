import React, { useState } from 'react';
import { serviceLocations } from './constants';
import { Region } from './types';
import { ChevronDown, MapPin, Star } from 'lucide-react';

export const ServiceAreaAccordion: React.FC = () => {
  const regions: Region[] = ['Northern VA', 'Washington DC', 'Maryland'];
  const [openRegion, setOpenRegion] = useState<Region>('Northern VA');

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Regional Directory</h2>
          <p className="mt-2 text-slate-600">Select your region to find local service centers.</p>
        </div>

        <div className="space-y-4">
          {regions.map((region) => {
            const isOpen = openRegion === region;
            const cities = serviceLocations.filter(c => c.region === region);
            
            return (
              <div 
                key={region} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-blue-200 shadow-lg bg-blue-50/30' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenRegion(region)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${isOpen ? 'text-blue-900' : 'text-slate-800'}`}>
                        {region}
                      </h3>
                      <p className="text-sm text-slate-500">{cities.length} service locations available</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
                </button>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {cities.map(city => (
                        <a 
                          key={city.id}
                          href={`/${city.slug}/`}
                          className="flex flex-col p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                        >
                           <div className="flex items-center justify-between mb-2">
                             <span className="font-semibold text-slate-800 group-hover:text-blue-700">{city.name}</span>
                             {city.proximity === 'Closest' && <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />}
                           </div>
                           <div className="flex items-center justify-between mt-auto">
                              <span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-md">{city.responseTime}</span>
                              <span className="text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                View
                              </span>
                           </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};