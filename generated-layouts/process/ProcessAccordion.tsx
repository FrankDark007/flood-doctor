import React, { useState } from 'react';
import { PROCESS_STEPS } from '../constants';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProcessAccordion: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(1);
  const [ref, isVisible] = useIntersectionObserver();

  const toggleStep = (id: number) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50">
      <div 
        ref={ref}
        className={`max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        {/* Left Side: Sticky Header */}
        <div className="md:w-1/3 md:sticky md:top-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Detailed<br/>Restoration<br/><span className="text-[#1a73e8]">Workflows</span>
          </h2>
          <p className="text-slate-600 mb-8">
            Click each step to learn how we systematically restore your property from inspection to final walkthrough.
          </p>
          <button className="px-6 py-3 bg-[#1a73e8] text-white font-semibold rounded-[24px] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
            Start Your Recovery
          </button>
        </div>

        {/* Right Side: Accordion */}
        <div className="md:w-2/3 w-full space-y-4">
          {PROCESS_STEPS.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <div 
                key={step.id}
                className={`bg-white rounded-[24px] overflow-hidden transition-all duration-300 ${
                  isActive ? 'shadow-xl ring-2 ring-[#1a73e8]/10' : 'shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleStep(step.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300
                      ${isActive ? 'bg-[#1a73e8] text-white' : 'bg-slate-100 text-slate-500'}
                    `}>
                      <span className="font-bold">{step.id}</span>
                    </div>
                    <h3 className={`text-lg font-bold transition-colors ${isActive ? 'text-[#1a73e8]' : 'text-slate-900'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{ maxHeight: isActive ? '200px' : '0px', opacity: isActive ? 1 : 0 }}
                >
                  <div className="p-6 pt-0 flex gap-6">
                    <div className="hidden sm:flex flex-shrink-0 items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[#1a73e8]">
                      <step.Icon className={`w-8 h-8 transition-all duration-500 ${isActive ? 'scale-110 rotate-3' : 'scale-100'}`} />
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                      <span className="block mt-3 text-sm font-medium text-[#1a73e8]">
                        Estimated Time: {step.duration}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessAccordion;