import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProcessTimeline: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Restoration Timeline</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our streamlined process ensures your property is restored quickly and efficiently.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10">
            <div 
              className="h-full bg-[#1a73e8] transition-all duration-1000 ease-out delay-500"
              style={{ width: isVisible ? '100%' : '0%' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div 
                key={step.id} 
                className="relative flex flex-col items-center md:items-start group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Mobile Connecting Line */}
                {index !== PROCESS_STEPS.length - 1 && (
                  <div className="md:hidden absolute top-16 left-1/2 w-0.5 h-full -ml-[1px] bg-slate-200 -z-10" />
                )}

                {/* Circle Badge */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-[#1a73e8] shadow-lg mb-6 z-10 transition-transform duration-300 group-hover:scale-110">
                  <step.Icon className="w-8 h-8 text-[#1a73e8]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-[#1a73e8] text-white text-sm font-bold rounded-full border-4 border-white">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;