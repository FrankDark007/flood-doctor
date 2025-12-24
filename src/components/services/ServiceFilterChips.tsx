import React from 'react';
import { Check } from 'lucide-react';

interface ServiceFilterChipsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const ServiceFilterChips: React.FC<ServiceFilterChipsProps> = ({ categories, selected, onSelect }) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 -my-2">
      <div className="flex gap-2 min-w-max">
        {categories.map((cat) => {
          const isSelected = selected === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`
                inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 select-none
                ${isSelected
                  ? 'bg-[#e8f0fe] border-transparent text-[#1a73e8]'
                  : 'bg-white border-[#dadce0] text-[#3c4043] hover:bg-[#f8f9fa] hover:border-[#bdc1c6]'
                }
              `}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <Check size={16} className="mr-1.5 -ml-1 text-[#1a73e8]" strokeWidth={2.5} />
              )}
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceFilterChips;