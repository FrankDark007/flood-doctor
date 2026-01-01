import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const DEFAULT_FAQ_DATA = [
  {
    question: "How fast can you arrive for emergency water damage in the DMV?",
    answer: "In Northern Virginia, Maryland, and DC, our response time depends on traffic, weather, and call volume. For emergencies, we prioritize rapid dispatch and aim to get a crew moving as quickly as possible. The fastest way to start is to submit a request or call right away."
  },
  {
    question: "What should I do first when I find water damage?",
    answer: "If it is safe, stop the water source, shut off power to affected areas, and avoid using electrical outlets near wet materials. Move valuables to a dry area and take a few photos for documentation. Then request emergency service so we can start extraction and prevent additional damage."
  },
  {
    question: "What is the difference between water removal and water damage restoration?",
    answer: "Water removal is the immediate extraction of standing water. Water damage restoration includes extraction plus drying, dehumidification, monitoring, and documentation to bring materials back to a dry standard, and reduce the risk of mold and structural issues."
  },
  {
    question: "How long does it take to dry a home after a flood or leak?",
    answer: "Drying time depends on how much water, how long it was present, what materials are affected, and airflow conditions. Many projects take several days, but larger losses can take longer. The goal is controlled drying with documented progress, not rushing and leaving hidden moisture behind."
  },
  {
    question: "How do you verify the structure is actually dry?",
    answer: "We use moisture readings and environmental measurements to track drying progress and confirm materials meet a dry standard before equipment is removed. This typically includes documenting readings over time, not guessing based on how it looks or feels. If needed, we focus on harder-to-dry areas like wall cavities, subfloors, and framing."
  },
  {
    question: "Do you handle sewage backups and contaminated water?",
    answer: "Yes. Sewage backups and contaminated water require specialized cleanup, containment, and cleaning protocols to protect occupant safety. If you suspect sewage, do not enter the affected area without proper precautions, request emergency service immediately."
  },
  {
    question: "Do I need mold remediation after water damage?",
    answer: "Not always, but mold risk increases when moisture is trapped in materials or drying is delayed. Fast extraction and controlled drying reduce the chance of microbial growth. If growth is present or suspected, we recommend the safest next step based on what we find on-site."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the DMV, including Northern Virginia, Maryland, and DC, with local coverage across key NoVA cities. Visit our Locations page to see the full service area and city hubs."
  },
  {
    question: "What happens when your team arrives?",
    answer: "We start with a rapid assessment, identify affected materials, and begin water extraction if needed. Then we set up drying equipment, create a monitoring plan, and document conditions. You will know what we are doing, why we are doing it, and what to expect next."
  },
  {
    question: "How do I request emergency service?",
    answer: "Use the Request Services form for the fastest intake, or call our emergency line. Provide the address, what happened, when it started, and which areas are affected. Photos help, but do not delay requesting service to take them."
  }
];

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": DEFAULT_FAQ_DATA.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

interface FAQItem {
  question: string;
  answer: string;
}

interface GoogleStyleFAQProps {
  data?: FAQItem[];
  title?: string;
  className?: string;
}

const GoogleStyleFAQ: React.FC<GoogleStyleFAQProps> = ({ 
  data = DEFAULT_FAQ_DATA, 
  title = "Your questions, answered",
  className = "py-12 md:py-16 bg-white border-t border-gray-100"
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const allOpen = openIndices.length === data.length;

  const toggleAll = () => {
    if (allOpen) {
      setOpenIndices([]);
    } else {
      setOpenIndices(data.map((_, i) => i));
    }
  };

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        {title && (
            <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                {title}
            </h2>
            </div>
        )}

        <div className="max-w-3xl mx-auto">
          {/* Controls */}
          <div className="flex justify-end mb-2">
            <button 
              onClick={toggleAll}
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:bg-blue-50 px-3 py-1.5 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-expanded={allOpen}
              aria-label={allOpen ? "Collapse all questions" : "Expand all questions"}
            >
              {allOpen ? 'Collapse all' : 'Expand all'}
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${allOpen ? 'rotate-180' : ''}`} 
              />
            </button>
          </div>

          {/* List */}
          <div className="border-t border-gray-200">
            {data.map((item, index) => {
              const isOpen = openIndices.includes(index);
              return (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left py-5 group flex justify-between items-start gap-4 focus:outline-none focus:bg-gray-50 -mx-4 px-4 transition-colors rounded-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
                      {item.question}
                    </span>
                    <span className="pt-1 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0">
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} 
                      />
                    </span>
                  </button>
                  
                  <div 
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="text-gray-600 leading-relaxed pr-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GoogleStyleFAQ;