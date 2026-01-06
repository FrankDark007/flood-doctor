import React from 'react';
import { MapPin, Building2, ArrowRight } from 'lucide-react';
import { CityData } from '../types';

interface CityMapProps {
  city: CityData;
}

const CityMap: React.FC<CityMapProps> = ({ city }) => {
  return (
    <section className="py-16 bg-white max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
        
        {/* Map Column - Lightweight Placeholder */}
        <div className="lg:col-span-2 min-h-[400px] bg-slate-50 relative group overflow-hidden">
          {/* Static Map Pattern / Image Placeholder */}
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/600?grayscale')] bg-cover bg-center mix-blend-multiply opacity-60 transition-transform duration-700 group-hover:scale-105" />
          
          {/* Overlay Grid for tech feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(26,115,232,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(26,115,232,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Interactive Element Overlays */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-full h-full rounded-full bg-blue-400 opacity-20 animate-ping"></span>
                  <MapPin className="w-5 h-5 text-[#1a73e8] relative z-10" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Area Center</p>
                  <p className="text-slate-800 font-bold">{city.name}, {city.state}</p>
                </div>
             </div>
          </div>

          <div className="absolute bottom-6 right-6 pointer-events-none">
             <div className="bg-slate-900/80 backdrop-blur text-white text-xs px-3 py-1.5 rounded-md">
               Map data ©{new Date().getFullYear()} Flood Doctor
             </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="p-8 lg:p-10 bg-white flex flex-col justify-between border-l border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <MapPin className="w-5 h-5 text-[#1a73e8]" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Service Coverage</h2>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></span>
                Zip Codes Served
              </h3>
              <div className="flex flex-wrap gap-2">
                {city.zipCodes.map((zip) => (
                  <span 
                    key={zip} 
                    className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-md text-slate-600 font-mono text-sm hover:border-blue-200 hover:text-[#1a73e8] hover:bg-blue-50 transition-colors cursor-default"
                  >
                    {zip}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Local Dispatch Office</h3>
              <div className="flex items-start gap-3 text-slate-700">
                <Building2 className="w-5 h-5 text-[#1a73e8] mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{city.officeLocation}</p>
                  <p className="text-sm text-slate-500 mt-1">
                    {city.distanceFromCenter}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Nearby Service Areas</h3>
             <ul className="space-y-2">
               {city.neighboringCities.map((neighbor) => (
                 <li key={neighbor}>
                   <a 
                     href={`/service-areas/${neighbor.toLowerCase().replace(/\s+/g, '-')}`}
                     className="flex items-center justify-between group p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
                   >
                     <span className="text-slate-600 font-medium group-hover:text-[#1a73e8]">{neighbor}</span>
                     <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all" />
                   </a>
                 </li>
               ))}
             </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CityMap;