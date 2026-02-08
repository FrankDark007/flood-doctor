import React from 'react';
import { Award, Shield, Clock, Phone } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK } from './constants';

const CTATrustBar: React.FC = () => {
  return (
    <section className="w-full bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Trust Indicators Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-b lg:border-b-0 border-slate-100">
            
            <div className="flex items-center justify-center lg:justify-start gap-4 py-8 lg:py-10 px-4">
              <div className="shrink-0 text-blue-600">
                <Shield className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Licensed & Insured</h4>
                <p className="text-xs text-slate-500 mt-0.5">Full liability coverage</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 py-8 lg:py-10 px-4">
              <div className="shrink-0 text-blue-600">
                <Award className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">IICRC Certified</h4>
                <p className="text-xs text-slate-500 mt-0.5">Industry standard pros</p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 py-8 lg:py-10 px-4">
              <div className="shrink-0 text-blue-600">
                <Clock className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">60-Min Response</h4>
                <p className="text-xs text-slate-500 mt-0.5">On-site rapid arrival</p>
              </div>
            </div>

          </div>

          {/* CTA Action Area */}
          <div className="w-full lg:w-auto p-6 md:p-8 bg-slate-50 lg:bg-transparent">
            <div className="flex flex-col items-center gap-3">
              <a 
                href={PHONE_LINK} 
                className="w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
              <p className="text-xs text-slate-400 font-medium">
                Talk to a specialist now
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTATrustBar;