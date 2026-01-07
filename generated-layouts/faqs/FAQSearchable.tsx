import React, { useState, useMemo } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import { waterDamageFAQs } from './data';

/* 
  FAQ SCHEMA JSON-LD goes here (see FAQAccordion.tsx for format)
*/

const FAQSearchable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const filteredFAQs = useMemo(() => {
    if (!searchQuery) return waterDamageFAQs;
    const lowerQuery = searchQuery.toLowerCase();
    return waterDamageFAQs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lowerQuery) ||
        faq.answer.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const clearSearch = () => {
      setSearchQuery('');
      setOpenIndex(null);
  };

  return (
    <section className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">How can we help?</h2>
        <div className="mt-6 relative max-w-lg mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-10 py-4 bg-white border border-slate-200 rounded-2xl leading-5 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm shadow-sm transition-shadow"
            placeholder="Search for answers (e.g., 'cost', 'drying time')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-slate-400 hover:text-slate-600"
            >
                <X size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden">
        {filteredFAQs.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {filteredFAQs.map((faq) => {
              const isOpen = openIndex === faq.id;
              return (
                <div key={faq.id} className={`transition-colors duration-200 ${isOpen ? 'bg-brand-50/50' : 'hover:bg-slate-50'}`}>
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-left font-medium ${isOpen ? 'text-brand-700' : 'text-slate-700'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`ml-4 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
            <div className="p-12 text-center text-slate-500">
                <p className="text-lg font-medium text-slate-900">No results found</p>
                <p className="mt-1">Try adjusting your search terms or browse our categories.</p>
                <button 
                    onClick={clearSearch} 
                    className="mt-4 text-brand-600 font-semibold hover:underline"
                >
                    Clear Search
                </button>
            </div>
        )}
      </div>
      
      <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            Can't find what you're looking for? <a href="#" className="text-brand-600 font-medium hover:underline">Contact our support team</a>.
          </p>
      </div>
    </section>
  );
};

export default FAQSearchable;