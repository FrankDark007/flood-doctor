import React from 'react';
import { Droplets, ArrowRight } from 'lucide-react';
import { PHONE_LINK } from './constants';

const CTAFloating: React.FC = () => {
  return (
    <section className="w-full">
      {/* Upper Background - Simulating a previous dark section */}
      <div className="w-full bg-slate-900 pt-20 pb-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Don't Wait</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Moisture is the Enemy</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hidden moisture can cause mold growth in as little as 24 hours. Our advanced detection equipment finds what the eye misses.
          </p>
        </div>
      </div>

      {/* Floating Card Container */}
      <div className="px-4 -mt-24 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-2 md:p-3">
          <div className="border border-slate-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-white to-blue-50/50">
            
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex h-16 w-16 bg-blue-100 rounded-2xl items-center justify-center shrink-0 text-blue-600">
                <Droplets className="w-8 h-8" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-slate-900">
                  Ready to stop the damage?
                </h3>
                <p className="text-slate-600 max-w-md">
                  Get a comprehensive moisture inspection and action plan from our certified specialists today.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-auto">
               <a 
                 href={PHONE_LINK}
                 className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-700 hover:w-full md:hover:w-auto"
               >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="flex items-center gap-2 text-lg">
                  Get Emergency Help 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <p className="text-center text-xs text-slate-500 mt-3">
                No obligation estimate • 60-min response
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFloating;