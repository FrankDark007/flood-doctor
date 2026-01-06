import React from 'react';
import { Droplets, CalendarCheck, ArrowRight } from 'lucide-react';
import { PHONE_LINK } from '../constants';

const CTAServiceSelect: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Emergency Card */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border-l-4 border-red-500">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <Droplets className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Emergency Service</h3>
            <p className="text-slate-500 mb-8 flex-1">
              Active flooding, burst pipes, or storm damage? We dispatch our rapid response team immediately to extract water and prevent mold.
            </p>
            <a 
              href={PHONE_LINK}
              className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors"
            >
              Call Emergency Line
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Scheduled Service Card */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border-l-4 border-blue-500">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <CalendarCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Schedule Inspection</h3>
            <p className="text-slate-500 mb-8 flex-1">
              Suspect a slow leak, mold growth, or need a post-restoration checkup? Schedule a comprehensive assessment at your convenience.
            </p>
            <button className="w-full inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-colors">
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTAServiceSelect;