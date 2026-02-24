import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_NAME } from './constants';

const CTAGradient: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl overflow-hidden shadow-xl relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-8 text-center md:text-left">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Water Damage? <br className="hidden md:block" />
              We're Here to Help.
            </h2>
            <p className="text-blue-50 text-lg md:text-xl max-w-xl">
              {COMPANY_NAME} provides 24/7 emergency restoration services. Don't let water wait—act fast to minimize damage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href="/request/"
              className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              <span>Request Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAGradient;