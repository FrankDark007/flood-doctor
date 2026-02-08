
import React, { useState } from 'react';
import { FAQ as FAQItem } from './types';

export interface FAQProps {
  /** FAQ items to display */
  faqs: FAQItem[];
  /** Section title (optional) */
  title?: string;
  /** Show expand all button (default: true) */
  showExpandAll?: boolean;
}

export const FAQ: React.FC<FAQProps> = ({
  faqs,
  title = 'Frequently asked questions',
  showExpandAll = true,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAll = () => {
    setAllExpanded(!allExpanded);
    setOpenIndex(null);
  };

  const isOpen = (index: number) => allExpanded || openIndex === index;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[900px] mx-auto px-7 md:px-10 lg:px-[72px]">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-[28px] lg:text-[36px] font-medium text-[#5f6368] leading-[1.2]">
            {title}
          </h2>
        </div>

        {/* Expand All Button */}
        {showExpandAll && (
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleAll}
              className="inline-flex items-center gap-2 text-[#1a73e8] text-[14px] font-medium hover:underline"
            >
              {allExpanded ? 'Collapse all' : 'Expand all'}
              <svg
                className={`w-5 h-5 transition-transform ${allExpanded ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-0 border-t border-[#dadce0]">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#dadce0]">
              <button
                onClick={() => toggleItem(i)}
                className="w-full py-5 flex items-center justify-between text-left"
              >
                <span className="text-[16px] lg:text-[18px] font-medium text-[#202124] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#5f6368] flex-shrink-0 transition-transform ${isOpen(i) ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen(i) ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-[15px] text-[#5f6368] leading-[1.7]">
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

export default FAQ;
