import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK, COMPANY_NAME } from './constants';

const CTAMinimal: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-24 px-4 md:px-6 border-t border-slate-100 bg-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Let's get your home back to normal.
          </h2>
          <p className="text-xl text-slate-500 font-light">
            Simple pricing. Expert service. {COMPANY_NAME} is your partner in restoration.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:ring-4 hover:ring-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
            <span className="mr-2">Request Service</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="text-slate-400 text-sm">
            Need immediate help? <a href={PHONE_LINK} className="text-blue-600 font-semibold hover:underline decoration-2 underline-offset-2">{PHONE_NUMBER}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAMinimal;