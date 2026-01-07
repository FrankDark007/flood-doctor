import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { EMERGENCY_DATA } from './constants';

const EmergencyFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-8 pb-12 px-4 text-center">
      <div className="mb-6">
        <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
          Service Area
        </h4>
        <div className="flex items-center justify-center gap-2 text-lg font-medium">
          <MapPin className="w-5 h-5 text-red-500" />
          {EMERGENCY_DATA.serviceArea}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
          24/7 Dispatch Center
        </h4>
        <a href={EMERGENCY_DATA.phoneHref} className="text-2xl font-bold text-white block hover:text-gray-200">
          {EMERGENCY_DATA.phoneNumber}
        </a>
      </div>

      <div className="text-xs text-gray-500 border-t border-gray-800 pt-6">
        <p>&copy; {new Date().getFullYear()} {EMERGENCY_DATA.companyName}.</p>
        <p className="mt-1">Emergency Response Unit.</p>
      </div>

      {/* Sticky Bottom Bar for mobile scroll redundancy */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-2 sm:hidden z-40">
        <a 
          href={EMERGENCY_DATA.phoneHref}
          className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-bold py-3 rounded shadow-lg"
        >
          <Phone className="w-4 h-4 fill-white" />
          CALL {EMERGENCY_DATA.phoneNumber}
        </a>
      </div>
    </footer>
  );
};

export default EmergencyFooter;