import React from 'react';
import { Phone, Calendar, CheckCircle } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, PHONE_LINK } from '../constants';

const CTASplit: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Fast Response Guarantee
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Restore Your Home, <span className="text-blue-600">Restore Your Peace of Mind.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              When disaster strikes, you need a partner you can trust. {COMPANY_NAME} brings industry-leading expertise to every job, big or small.
            </p>
            
            <ul className="space-y-3 pt-2">
              {['24/7 Emergency Dispatch', 'Licensed & Insured Experts', 'Direct Insurance Billing'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-3xl font-bold text-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <button className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-3xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              <Calendar className="w-5 h-5" />
              Schedule Assessment
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative order-1 lg:order-2 h-full min-h-[400px]">
          <div className="absolute inset-0 bg-blue-600 rounded-[32px] rotate-3 opacity-10"></div>
          <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/800/800" 
              alt="Flood restoration specialist working" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Emergency Line</p>
                  <p className="text-xl font-bold text-slate-900">{PHONE_NUMBER}</p>
                </div>
                <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASplit;