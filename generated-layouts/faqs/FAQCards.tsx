import React from 'react';
import { MessageCircle } from 'lucide-react';
import { waterDamageFAQs } from '../data';

/* 
  FAQ SCHEMA JSON-LD goes here (see FAQAccordion.tsx for format)
*/

const FAQCards: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-6">
        <div>
            <h2 className="text-3xl font-bold text-slate-900">Knowledge Base</h2>
            <p className="mt-2 text-slate-500">Quick answers to your most pressing restoration questions.</p>
        </div>
        <button className="mt-4 md:mt-0 text-brand-600 font-medium hover:text-brand-800 transition-colors text-sm">
            View all help topics &rarr;
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {waterDamageFAQs.map((faq) => (
          <div 
            key={faq.id} 
            className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <MessageCircle size={24} />
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-brand-700 transition-colors">
              {faq.question}
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm flex-grow">
              {faq.answer}
            </p>
            
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{faq.category}</span>
                <span className="text-brand-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity font-medium">Read more</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQCards;