import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { CityData } from '../types';

interface CityFAQProps {
  city: CityData;
}

const CityFAQ: React.FC<CityFAQProps> = ({ city }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <HelpCircle className="w-6 h-6 text-[#1a73e8]" />
          <h2 className="text-3xl font-bold text-slate-900 text-center">Common Questions in {city.name}</h2>
        </div>

        <div className="space-y-4">
          {city.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-200 ${isOpen ? 'border-[#1a73e8] shadow-md' : 'border-slate-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-semibold text-lg ${isOpen ? 'text-[#1a73e8]' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-[#1a73e8] shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-fadeIn">
                    {faq.answer}
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

export default CityFAQ;