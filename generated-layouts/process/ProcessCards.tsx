import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { Clock } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProcessCards: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50 border-t border-slate-200">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Project Roadmap</h2>
          <p className="mt-4 text-slate-500">Estimated timelines and milestones for your recovery.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {/* Progress Bar Background (Desktop) */}
           <div className="hidden lg:block absolute top-0 left-0 w-full h-2 bg-slate-200 rounded-full overflow-hidden transform translate-y-[-50%]"></div>
           
           {/* Active Progress Bar (Desktop) */}
            <div className="hidden lg:block absolute top-0 left-0 w-3/4 h-2 bg-[#1a73e8] rounded-full overflow-hidden transform translate-y-[-50%] opacity-20"></div>

          {PROCESS_STEPS.map((step, index) => (
            <div 
              key={step.id} 
              className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group border border-slate-100"
            >
              {/* Step Badge */}
              <div className="absolute -top-6 left-8 bg-[#1a73e8] text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                {step.id}
              </div>

              <div className="mt-8">
                 <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                       <step.Icon className="w-6 h-6 text-[#1a73e8]" />
                    </div>
                    {step.duration && (
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        {step.duration}
                      </div>
                    )}
                 </div>
                 
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                 <p className="text-slate-500 text-sm leading-relaxed mb-6">
                   {step.description}
                 </p>

                 {/* Mini Progress Bar Per Card */}
                 <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#1a73e8] h-full rounded-full" 
                      style={{ width: `${((index + 1) / 4) * 100}%` }}
                    />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessCards;