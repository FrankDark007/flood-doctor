import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { waterDamageFAQs } from './data';

/* 
  FAQ SCHEMA JSON-LD IMPLEMENTATION GUIDE
  ---------------------------------------
  To add SEO Schema, inject the following script into the head of your page 
  or inside a Helmet component, dynamically mapping your data:

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can you respond to emergencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We guarantee a 60-minute response time..."
        }
      },
      // ... map remaining FAQs
    ]
  }
  </script>
*/

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-2 bg-brand-50 rounded-full mb-4">
          <HelpCircle className="w-5 h-5 text-brand-600 mr-2" />
          <span className="text-brand-800 font-semibold text-sm tracking-wide uppercase">Common Questions</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Restoration Essentials</h2>
        <p className="mt-4 text-lg text-slate-600">Everything you need to know about our water damage recovery process.</p>
      </div>

      <div className="space-y-4">
        {waterDamageFAQs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={faq.id} 
              className={`border rounded-2xl transition-all duration-300 ease-out transform ${
                isOpen 
                  ? 'bg-brand-50/30 border-brand-200 shadow-xl shadow-brand-100/50 scale-[1.02]' 
                  : 'bg-white border-slate-200 hover:border-brand-200 hover:shadow-md hover:scale-[1.005]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className={`text-lg font-semibold pr-8 transition-colors duration-200 ${isOpen ? 'text-brand-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-all duration-300 ${
                  isOpen ? 'bg-brand-600 border-brand-600 text-white rotate-180' : 'bg-white border-slate-200 text-slate-400 rotate-0'
                }`}>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <div 
                id={`faq-answer-${faq.id}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden px-6">
                  <div className="pt-2 border-t border-brand-100/50 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQAccordion;