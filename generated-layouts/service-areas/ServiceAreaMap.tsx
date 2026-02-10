import React, { useState } from 'react';
import { serviceLocations, getPinColor } from './constants';
import { MapPin, Navigation, Clock, ChevronRight } from 'lucide-react';
import { ServiceLocation } from './types';

export const ServiceAreaMap: React.FC = () => {
  const [activeCity, setActiveCity] = useState<ServiceLocation | null>(null);

  const handlePinClick = (city: ServiceLocation) => {
    setActiveCity(city);
    // Optional: On mobile, smoother experience if we ensure the details are visible
    // But keeping strictly to layout improvements per request for now.
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
           <h2 className="text-3xl font-bold text-slate-900">Interactive Coverage Map</h2>
           <p className="mt-2 text-slate-600">Explore our service locations and proximity zones.</p>
        </div>

        {/* 
            Responsive Container:
            - Mobile/Tablet: Flex column (vertical stack), auto height
            - Desktop (lg): Flex row (side-by-side), fixed 600px height
        */}
        <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col lg:flex-row lg:h-[600px]">
          
          {/* Map Area */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-auto lg:flex-grow bg-slate-100 overflow-hidden group">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{
                    backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                 }}>
            </div>
            
            {/* Abstract decorative elements */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-slate-200 -rotate-12 transform origin-center opacity-50"></div>
            <div className="absolute top-0 right-1/3 w-2 h-full bg-slate-200 rotate-12 transform origin-center opacity-50"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full border-4 border-slate-200 opacity-30"></div>

            {/* Pins */}
            {serviceLocations.map((city) => (
              <button
                key={city.id}
                onClick={() => handlePinClick(city)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group/pin focus:outline-none z-10"
                style={{
                  left: `${city.coordinates?.x}%`,
                  top: `${city.coordinates?.y}%`
                }}
                aria-label={`Select ${city.name}`}
              >
                <div className="relative">
                  <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${getPinColor(city.proximity).split(' ')[0]}`}></span>
                  <div className={`relative inline-flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 rounded-full text-white shadow-lg ring-2 ring-white transition-transform duration-200 group-hover/pin:scale-125 ${getPinColor(city.proximity)}`}>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Tooltip - hidden on mobile to avoid clutter, visible on hover for desktop */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover/pin:opacity-100 transition-opacity z-20 pointer-events-none hidden sm:block">
                    {city.name}
                  </div>
                </div>
              </button>
            ))}

            {/* Proximity Key */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg text-[10px] sm:text-xs shadow-sm border border-slate-200 z-10">
               <div className="font-semibold mb-2 text-slate-800">Proximity Key</div>
               <div className="space-y-1">
                 <div className="flex items-center"><span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 mr-2"></span> Closest (40-60m)</div>
                 <div className="flex items-center"><span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-lime-500 mr-2"></span> Near (45-70m)</div>
                 <div className="flex items-center"><span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 mr-2"></span> Mid (50-75m)</div>
                 <div className="flex items-center"><span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-500 mr-2"></span> Farthest (55-80m)</div>
               </div>
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col lg:h-full relative z-20">
            {activeCity ? (
              <div className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-300 lg:overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">{activeCity.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activeCity.proximity === 'Closest' ? 'bg-emerald-100 text-emerald-700' :
                    activeCity.proximity === 'Near' ? 'bg-lime-100 text-lime-700' :
                    activeCity.proximity === 'Mid' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {activeCity.proximity}
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start p-4 bg-slate-50 rounded-xl">
                    <Clock className="w-5 h-5 text-slate-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-slate-500">Estimated Response</div>
                      <div className="text-lg font-semibold text-slate-900">{activeCity.responseTime}</div>
                      <div className="text-xs text-slate-400 mt-1">Dependent on traffic & weather</div>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-slate-50 rounded-xl">
                    <Navigation className="w-5 h-5 text-slate-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-slate-500">Region</div>
                      <div className="text-lg font-semibold text-slate-900">{activeCity.region}</div>
                    </div>
                  </div>

                  <a 
                    href={`/${activeCity.slug}/`}
                    className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors shadow-sm hover:shadow-md"
                  >
                    View {activeCity.name} Services
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 min-h-[200px] lg:h-full text-center text-slate-400">
                <MapPin className="w-12 h-12 mb-4 opacity-20" />
                <p className="text-lg font-medium text-slate-500">Select a location</p>
                <p className="text-sm mt-1">Tap a pin on the map to see details.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};