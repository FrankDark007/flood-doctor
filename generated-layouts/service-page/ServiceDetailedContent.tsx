import React, { useState, useEffect } from 'react';
import { ContentSection } from './types';
import { ChevronDown } from 'lucide-react';

interface ServiceDetailedContentProps {
  sections: ContentSection[];
  openIndex?: number | null;
  onSectionChange?: (index: number | null) => void;
}

const ServiceDetailedContent: React.FC<ServiceDetailedContentProps> = ({ sections, openIndex: controlledIndex, onSectionChange }) => {
  const [internalIndex, setInternalIndex] = useState<number | null>(0);

  // Use controlled index when provided, otherwise internal
  const openIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  // Sync internal state when controlled index changes
  useEffect(() => {
    if (controlledIndex !== undefined) {
      setInternalIndex(controlledIndex);
    }
  }, [controlledIndex]);

  const handleToggle = (index: number) => {
    const isOpen = openIndex === index;
    const newIndex = isOpen ? null : index;
    setInternalIndex(newIndex);
    onSectionChange?.(newIndex);
  };

  if (sections.length === 0) return null;

  return (
    <div className="space-y-4">
      {sections.map((section, idx) => (
        <div
          key={idx}
          id={`section-${idx}`}
          className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === idx
              ? 'bg-white border-[#1a73e8]/20 shadow-lg'
              : 'bg-white border-gray-200 shadow-sm hover:border-gray-300'
          }`}
          style={{ scrollMarginTop: '100px' }}
        >
          <button
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`section-${idx}-content`}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
          >
            <div className="flex items-center gap-4">
              <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0 transition-all duration-300 ${
                openIndex === idx
                  ? 'bg-[#1a73e8] text-white'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
              }`}>
                {idx + 1}
              </span>
              <h3 id={`section-${idx}-heading`} className={`text-xl md:text-2xl font-semibold transition-colors ${
                openIndex === idx ? 'text-gray-900' : 'text-gray-700'
              }`}>
                {section.heading}
              </h3>
            </div>
            <div className={`p-2 rounded-full transition-all duration-300 ${
              openIndex === idx ? 'bg-[#1a73e8]/10 text-[#1a73e8] rotate-180' : 'text-gray-400 bg-gray-50'
            }`}>
              <ChevronDown size={20} />
            </div>
          </button>

          <div
            id={`section-${idx}-content`}
            role="region"
            aria-labelledby={`section-${idx}-heading`}
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === idx ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 md:p-8 pt-0 prose prose-slate max-w-none prose-lg text-gray-600 leading-relaxed border-t border-dashed border-gray-100 mt-2">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceDetailedContent;
