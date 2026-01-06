import React from 'react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK, COMPANY_NAME } from '../constants';

const CTADarkImmersive: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 md:px-6 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/flooddoctor/1920/1080" 
          alt="Restored home interior" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>Licensed • Bonded • Insured</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          When disaster strikes,<br />
          <span className="text-blue-500">we strike back.</span>
        </h2>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {COMPANY_NAME} utilizes military-grade drying technology to restore your property faster. Don't let water damage sit for another hour.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={PHONE_LINK}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-900/50"
          >
            <Phone className="w-5 h-5" />
            <span>Call {PHONE_NUMBER}</span>
          </a>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-700 transition-all duration-300">
            <span>Our Process</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-slate-500 text-sm mt-8">
          24/7 Live Answer • 60-Minute Response Time
        </p>
      </div>
    </section>
  );
};

export default CTADarkImmersive;