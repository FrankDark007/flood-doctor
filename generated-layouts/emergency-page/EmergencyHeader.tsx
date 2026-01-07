import React from 'react';
import { Phone } from 'lucide-react';
import { EMERGENCY_DATA } from './constants';

const EmergencyHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-red-600 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 max-w-[480px] mx-auto">
        {/* Text Logo */}
        <div className="font-black text-xl tracking-tight text-slate-900 leading-none">
          FLOOD<br />
          <span className="text-blue-700">DOCTOR</span>
        </div>

        {/* Header CTA - Always visible */}
        <a 
          href={EMERGENCY_DATA.phoneHref}
          className="flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-4 rounded-lg active:bg-red-700 transition-colors"
          aria-label="Call Emergency Number Now"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span>CALL NOW</span>
        </a>
      </div>
    </header>
  );
};

export default EmergencyHeader;