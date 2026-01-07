import React from 'react';
import { Check, Info } from 'lucide-react';
import { PricingItem } from './types';

interface ServicePricingProps {
  pricing: PricingItem;
  onCtaClick: () => void;
}

const ServicePricing: React.FC<ServicePricingProps> = ({ pricing, onCtaClick }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-dark to-primary rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Value Prop */}
          <div className="p-8 md:p-12 text-white flex-1 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Transparent Pricing</h3>
            <p className="text-blue-100 mb-8 text-lg">
              We bill your insurance directly using industry-standard software (Xactimate). You only pay your deductible.
            </p>
            <div className="space-y-4">
               {pricing.features.map((feature, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                   <div className="bg-white/20 p-1 rounded-full">
                     <Check size={14} />
                   </div>
                   <span className="font-medium">{feature}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="bg-white p-8 md:p-12 md:w-80 lg:w-96 flex flex-col items-center justify-center text-center">
            <div className="text-slate-500 font-medium mb-1">Starting at</div>
            <div className="text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
              {pricing.price}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded mb-8">
              <Info size={12} />
              {pricing.disclaimer}
            </div>
            
            <button 
              onClick={onCtaClick}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg shadow-blue-500/20"
            >
              {pricing.ctaText}
            </button>
            <p className="mt-4 text-xs text-slate-400">
              No obligation. On-site estimate required.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicePricing;