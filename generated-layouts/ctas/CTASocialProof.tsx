import React from 'react';
import { Star, Quote, Phone } from 'lucide-react';
import { PHONE_LINK, COMPANY_NAME } from './constants';

const CTASocialProof: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Header Stats */}
          <div className="space-y-2">
            <div className="flex gap-1 justify-center">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-slate-500 font-medium tracking-wide text-sm uppercase">
              Rated 4.9/5 by 500+ Local Homeowners
            </p>
          </div>

          {/* Testimonial */}
          <div className="relative max-w-3xl">
            <Quote className="absolute -top-6 -left-6 w-12 h-12 text-blue-100 rotate-180" />
            <h2 className="text-2xl md:text-4xl font-medium text-slate-900 leading-snug">
              "We woke up to 2 inches of water in our basement. {COMPANY_NAME} arrived within 45 minutes and saved our hardwood floors. <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">Highly recommended!</span>"
            </h2>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/user1/100/100" alt="Sarah J." className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-900">Sarah Jenkins</div>
                <div className="text-xs text-slate-500">Homeowner, Alexandria VA</div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="w-full max-w-xl bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-slate-900">Have a similar issue?</h3>
              <p className="text-slate-500 text-sm">Our experts are ready to help you now.</p>
            </div>
            <a 
              href={PHONE_LINK}
              className="whitespace-nowrap inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call for Help
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASocialProof;