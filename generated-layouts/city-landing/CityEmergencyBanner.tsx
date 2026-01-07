import React from 'react';
import { Phone, Siren } from 'lucide-react';
import { CityData } from './types';

interface CityEmergencyBannerProps {
  city: CityData;
}

const CityEmergencyBanner: React.FC<CityEmergencyBannerProps> = ({ city }) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 z-50 bg-red-600 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.2)] md:relative md:bg-white md:text-slate-900 md:shadow-none md:border-b md:border-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="relative">
             <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75 md:bg-red-200"></div>
             <div className="relative bg-white text-red-600 p-2 rounded-full md:bg-red-100">
               <Siren className="w-5 h-5 md:w-6 md:h-6" />
             </div>
          </div>
          <div>
            <p className="font-bold text-sm md:text-lg leading-tight">
              Water Emergency in {city.name}?
            </p>
            <p className="text-xs md:text-sm text-red-100 md:text-red-600 font-medium hidden sm:block">
              Technician available in your area now
            </p>
          </div>
        </div>

        <a 
          href={`tel:${city.phoneNumber}`} 
          className="flex items-center gap-2 bg-white text-red-600 px-5 py-2.5 rounded-full font-bold text-sm md:text-base md:bg-red-600 md:text-white md:hover:bg-red-700 transition-colors shadow-sm whitespace-nowrap"
        >
          <Phone className="w-4 h-4 md:w-5 md:h-5 fill-current" />
          <span className="hidden sm:inline">Call Dispatch:</span> {city.phoneNumber}
        </a>

      </div>
    </div>
  );
};

export default CityEmergencyBanner;