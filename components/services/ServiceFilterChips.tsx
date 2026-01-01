import React from 'react';
import { Check } from 'lucide-react';

interface ServiceFilterChipsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const ServiceFilterChips: React.FC<ServiceFilterChipsProps> = ({ categories, selected, onSelect }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-4 -my-4 mask-fade-sides">
      <div className="flex gap-2 min-w-max px-1">
        {categories.map((cat) => {
          const isSelected = selected === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`
                inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 select-none
                ${isSelected 
                  ? 'bg-blue-50/80 border-transparent text-primary' 
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                }
              `}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <Check size={16} className="mr-1.5 -ml-1 text-primary" strokeWidth={2.5} />
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