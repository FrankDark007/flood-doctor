import React from 'react';
import { PhoneCall, AlertTriangle, Clock } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK } from '../constants';

const CTAEmergency: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl shadow-xl overflow-hidden relative">
        
        {/* Animated pulse background effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-white/5 rounded-full animate-pulse pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 gap-6">
          
          <div className="flex items-center gap-6 w-full lg:w-auto">
            <div className="hidden md:flex h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center shrink-0 border border-white/30">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                 <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-bold bg-white text-red-600 uppercase tracking-wider">
                   <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                   Crews Standing By
                 </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Emergency? We're on the way.
              </h2>
              <p className="text-red-100 font-medium text-sm md:text-base">
                Immediate dispatch for flooding and storm damage.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
             <div className="hidden xl:flex items-center gap-2 text-white/80 text-sm font-medium mr-4">
                <Clock className="w-4 h-4" />
                <span>Avg Response: &lt; 60 mins</span>
             </div>

             <a
              href={PHONE_LINK}
              className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white text-red-600 hover:text-red-700 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTAEmergency;