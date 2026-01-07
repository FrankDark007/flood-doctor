import React from 'react';
import { Clock, AlertTriangle, MapPin } from 'lucide-react';
import { EMERGENCY_DATA } from './constants';

const EmergencyHero: React.FC = () => {
  return (
    <section className="bg-slate-50 border-b border-gray-200 pb-6 pt-4 px-4 text-center">
      <div className="inline-flex items-center justify-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold mb-4 border border-yellow-200">
        <AlertTriangle className="w-4 h-4" />
        <span>We're dispatching now</span>
      </div>

      <h1 className="text-4xl font-extrabold text-slate-900 mb-2 leading-tight">
        Water Emergency?
      </h1>

      <p className="text-lg text-slate-600 font-medium mb-6">
        Live technician ready to help.
      </p>

      {/* Primary Hero CTA */}
      <a 
        href={EMERGENCY_DATA.phoneHref}
        className="block w-full bg-white border-2 border-blue-600 rounded-xl p-4 mb-4 shadow-sm active:bg-blue-50"
      >
        <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">
          24/7 Emergency Line
        </div>
        <div className="text-3xl font-black text-slate-900 tracking-tight">
          {EMERGENCY_DATA.phoneNumber}
        </div>
      </a>

      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-2 text-slate-700 font-semibold bg-white py-2 px-4 rounded-full inline-block border border-gray-200 shadow-sm">
          <Clock className="w-5 h-5 text-green-600" />
          <span>Arriving in <span className="text-green-700 font-bold underline decoration-2">{EMERGENCY_DATA.responseTime}</span></span>
        </div>
        
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
          <MapPin className="w-3 h-3" />
          Serving {EMERGENCY_DATA.serviceArea}
        </div>
      </div>
    </section>
  );
};

export default EmergencyHero;