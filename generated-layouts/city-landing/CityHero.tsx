import React from 'react';
import { MapPin, Clock, Phone, ShieldCheck } from 'lucide-react';
import { CityData } from './types';

interface CityHeroProps {
  city: CityData;
}

const CityHero: React.FC<CityHeroProps> = ({ city }) => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden rounded-b-3xl shadow-lg">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url(${city.heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/90 z-0" />

      <div className="relative z-10 px-4 pt-20 pb-16 md:pt-32 md:pb-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium">
            <Clock className="w-4 h-4 text-[#4285f4]" />
            <span>{city.responseTime} Response Time</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-[#34a853]" />
            <span>Serving {city.name} since {city.establishedYear}</span>
          </div>
        </div>

        {/* Dynamic H1 */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="text-[#4285f4]">{city.name}</span> Water Damage Restoration
        </h1>

        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8 leading-relaxed">
          Top-rated emergency flood cleanup and mold remediation. We are your local neighbors in {city.name}, {city.state}, ready to restore your home 24/7.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href={`tel:${city.phoneNumber}`} 
            className="flex items-center justify-center gap-3 bg-[#1a73e8] hover:bg-[#1557b0] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-900/20 active:scale-95"
          >
            <Phone className="w-5 h-5" />
            Call {city.phoneNumber}
          </a>
          <button className="flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg active:scale-95">
            <MapPin className="w-5 h-5 text-[#1a73e8]" />
            Check Service Area
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          * Licensed, Bonded & Insured in {city.state}
        </p>
      </div>
    </div>
  );
};

export default CityHero;