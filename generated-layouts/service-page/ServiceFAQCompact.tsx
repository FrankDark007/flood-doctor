import React, { useState } from 'react';
import { Plus, Minus, ChevronRight } from 'lucide-react';
import { FAQItem } from './types';

interface ServiceFAQCompactProps {
  faqs: FAQItem[];
}

const ServiceFAQCompact: React.FC<ServiceFAQCompactProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-surface" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
            <p className="text-slate-500 mt-2">Everything you need to know about the restoration process.</p>
          </div>
          <button className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            View all FAQs <ChevronRight size={18} />
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-primary/30 shadow-md ring-1 ring-primary/10' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-primary text-white' : 'text-slate-400'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-slate-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQCompact;