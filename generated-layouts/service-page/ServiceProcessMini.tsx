import React from 'react';
import { Search, Droplets, Wind, Home, ArrowRight } from 'lucide-react';
import { ProcessStep } from './types';

interface ServiceProcessMiniProps {
  steps: ProcessStep[];
}

const iconMap: Record<string, React.FC<any>> = {
  Search,
  Droplets,
  Wind,
  Home
};

const ServiceProcessMini: React.FC<ServiceProcessMiniProps> = ({ steps }) => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">How It Works</h2>
          <h3 className="text-3xl font-bold text-slate-900">Restoration Process</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-10 translate-y-4"></div>

          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || Home;
            return (
              <div key={index} className="relative group bg-white md:bg-transparent p-6 md:p-0 rounded-2xl border md:border-none border-slate-100 shadow-sm md:shadow-none">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 text-slate-400 group-hover:border-primary group-hover:text-primary transition-colors flex items-center justify-center shadow-lg shadow-slate-100/50 z-10">
                      <Icon size={28} />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>

                {/* Mobile Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:hidden text-slate-300">
                    <ArrowRight size={20} className="rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessMini;