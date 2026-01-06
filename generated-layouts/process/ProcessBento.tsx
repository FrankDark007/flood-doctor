import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProcessBento: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const Step1Icon = PROCESS_STEPS[0].Icon;
  const Step2Icon = PROCESS_STEPS[1].Icon;
  const Step3Icon = PROCESS_STEPS[2].Icon;
  const Step4Icon = PROCESS_STEPS[3].Icon;

  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-12">
           <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1a73e8] text-sm font-semibold mb-4">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Restoration <span className="text-slate-400">Simplified</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Step 1: Large Feature */}
          <div className="md:col-span-7 bg-blue-50 rounded-[24px] p-8 md:p-12 flex flex-col justify-between min-h-[320px] group transition-transform hover:-translate-y-1 duration-300">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-6xl font-bold text-[#1a73e8]/20 group-hover:text-[#1a73e8]/30 transition-colors">01</span>
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  <Step1Icon className="w-8 h-8 text-[#1a73e8]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{PROCESS_STEPS[0].title}</h3>
              <p className="text-slate-600 text-lg">{PROCESS_STEPS[0].description}</p>
            </div>
          </div>

          {/* Step 2: Dark Highlight */}
          <div className="md:col-span-5 bg-slate-900 rounded-[24px] p-8 md:p-12 flex flex-col justify-between min-h-[320px] text-white group transition-transform hover:-translate-y-1 duration-300 delay-75">
            <div>
               <div className="flex justify-between items-start mb-6">
                <span className="text-6xl font-bold text-white/10">02</span>
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                  <Step2Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{PROCESS_STEPS[1].title}</h3>
              <p className="text-slate-300">{PROCESS_STEPS[1].description}</p>
            </div>
             <div className="mt-8 flex items-center gap-2 text-[#1a73e8] font-medium">
               <span>Immediate Action</span> <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="md:col-span-6 bg-white border border-slate-200 rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start group hover:border-[#1a73e8]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
             <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                  <Step3Icon className="w-8 h-8 text-slate-700 group-hover:text-[#1a73e8]" />
             </div>
             <div>
               <div className="text-sm font-bold text-[#1a73e8] mb-1">Step 03</div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">{PROCESS_STEPS[2].title}</h3>
               <p className="text-slate-500">{PROCESS_STEPS[2].description}</p>
             </div>
          </div>

           {/* Step 4 */}
          <div className="md:col-span-6 bg-gradient-to-br from-[#1a73e8] to-blue-600 rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-blue-500/40">
             <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Step4Icon className="w-8 h-8 text-white" />
             </div>
             <div>
               <div className="text-sm font-bold text-blue-100 mb-1">Step 04</div>
               <h3 className="text-xl font-bold mb-2">{PROCESS_STEPS[3].title}</h3>
               <p className="text-blue-100">{PROCESS_STEPS[3].description}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessBento;