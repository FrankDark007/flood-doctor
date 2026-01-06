import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQ {
  question: string;
  answer: string;
}

interface CityFAQSectionProps {
  faqs: FAQ[];
  cityName: string;
}

/**
 * CityFAQSection - SEO-optimized FAQ accordion with FAQPage schema markup
 * Uses H2 for section heading, proper FAQ schema for Google rich snippets
 */
const CityFAQSection: React.FC<CityFAQSectionProps> = ({
  faqs,
  cityName
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Inject FAQ schema on mount (safe approach)
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify(faqSchema);

    // Remove existing if present
    const existing = document.getElementById('faq-schema');
    if (existing) existing.remove();

    document.head.appendChild(script);

    return () => {
      const scriptEl = document.getElementById('faq-schema');
      if (scriptEl) scriptEl.remove();
    };
  }, [faqs]);

  return (
    <section
      className="py-16 lg:py-20 bg-gray-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header - H2 for SEO */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <HelpCircle size={16} />
            <span>Frequently Asked</span>
          </div>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            {cityName} Water Damage FAQs
          </h2>
          <p className="text-lg text-gray-600">
            Common questions from {cityName} homeowners about water damage restoration.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3
                    className="font-semibold text-gray-900 pr-4"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className="px-6 pb-5 pt-0">
                    <div className="h-px bg-gray-100 mb-4" />
                    <p
                      className="text-gray-600 leading-relaxed"
                      itemProp="text"
                    >
                      {faq.answer}
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

export default CityFAQSection;
