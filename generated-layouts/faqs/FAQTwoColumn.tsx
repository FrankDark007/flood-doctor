import React, { useState } from 'react';
import { ChevronRight, Droplets } from 'lucide-react';
import { waterDamageFAQs } from './data';

/* 
  FAQ SCHEMA JSON-LD goes here (see FAQAccordion.tsx for format)
*/

const FAQTwoColumn: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">Expert Answers</h2>
        <p className="mt-2 text-slate-500 text-lg">Select a topic on the left to learn more about our procedures.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:h-[600px]">
        {/* Left Column: Questions List */}
        <div className="lg:w-1/3 flex-shrink-0 space-y-2 overflow-y-auto pr-2 custom-scrollbar p-1">
          {waterDamageFAQs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={faq.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ease-out flex items-center justify-between group transform ${
                  isActive 
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30 scale-[1.02] translate-x-1' 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-transparent hover:border-slate-200 hover:translate-x-1'
                }`}
              >
                <span className="font-medium text-sm sm:text-base pr-4 line-clamp-2">
                  {faq.question}
                </span>
                <ChevronRight 
                  size={16} 
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    isActive ? 'opacity-100 translate-x-1' : 'opacity-40 group-hover:translate-x-1'
                  }`} 
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Answer Display */}
        <div className="lg:w-2/3 flex-grow">
          <div className="h-full bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden flex flex-col justify-center transform transition-all hover:shadow-2xl hover:shadow-slate-200/60 duration-500">
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

            <div className="relative z-10 animate-fade-in key={activeIndex}">
              <div className="inline-flex items-center gap-2 text-brand-600 font-bold tracking-wider text-xs uppercase mb-6 bg-brand-50 px-3 py-1 rounded-md">
                <Droplets size={14} />
                {waterDamageFAQs[activeIndex].category || 'General Info'}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                {waterDamageFAQs[activeIndex].question}
              </h3>
              
              <div className="w-16 h-1 bg-brand-500 rounded-full mb-8"></div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                {waterDamageFAQs[activeIndex].answer}
              </p>

              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center gap-4">
                 <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=1" alt="Support Agent" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=2" alt="Support Agent" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=3" alt="Support Agent" />
                 </div>
                 <span className="text-sm text-slate-400 font-medium">Still have questions? Call us 24/7.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQTwoColumn;