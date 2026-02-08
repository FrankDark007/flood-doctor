
import React, { useState } from 'react';

const faqs = [
  {
    question: "How quickly can you respond to a water damage emergency?",
    answer: "We offer 24/7 emergency response with an average arrival time of 60 minutes throughout Northern Virginia and Washington, DC. Our crews are stationed strategically across the region to ensure fast response times, day or night."
  },
  {
    question: "Will my homeowner's insurance cover water damage restoration?",
    answer: "Most homeowner's insurance policies cover sudden and accidental water damage, such as burst pipes or appliance failures. We work directly with all major insurance companies, handle claims documentation, and can bill your insurance directly to minimize your out-of-pocket costs."
  },
  {
    question: "How long does the water damage restoration process take?",
    answer: "The timeline depends on the extent of damage. Water extraction typically takes 1-2 days, while structural drying usually requires 3-5 days. We use moisture meters and thermal imaging to ensure complete drying before any repairs begin, preventing future mold growth."
  },
  {
    question: "Can water damage cause mold growth?",
    answer: "Yes, mold can begin growing within 24-48 hours of water exposure. That's why fast response is critical. Our IICRC-certified technicians use professional drying equipment and antimicrobial treatments to prevent mold growth. If mold is already present, we offer complete mold remediation services."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#202124] mb-12">Frequently Asked Questions About Water Damage Restoration</h2>
        <div className="flex justify-end mb-4">
           <a href="/resources" className="text-[#1a73e8] text-sm font-bold flex items-center gap-1 hover:underline">
             View All Resources <span className="text-xs">↗</span>
           </a>
        </div>
        <div className="border-t border-gray-200">
           {faqs.map((faq, index) => (
             <div 
               key={index}
               className="py-6 border-b border-gray-200 cursor-pointer group"
               onClick={() => toggleIndex(index)}
             >
               <div className="flex justify-between items-center">
                 <span className={`text-[#1a73e8] font-medium text-lg transition-colors ${openIndex === index ? 'text-[#174ea6]' : ''}`}>
                   {faq.question}
                 </span>
                 <span className={`text-[#1a73e8] text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                   ↓
                 </span>
               </div>
               <div 
                 className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
               >
                 <p className="text-[#3c4043] leading-relaxed">
                   {faq.answer}
                 </p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
