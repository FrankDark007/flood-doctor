import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceData } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  services: ServiceData[];
  columns?: 2 | 3 | 4;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, columns = 3 }) => {
  if (services.length === 0) return null;

  // Google uses grid with 24px gap and cards with minmax(300px, 340px)
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {services.map((service) => (
        <Link
          key={service.id}
          to={service.slug}
          className="
            group block
            bg-white
            p-8
            rounded-[24px]
            text-center
            transition-all duration-200 ease-out
            hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)]
          "
        >
          {/* Title - Google uses 20px/28px for card titles */}
          <h3 className="text-[20px] font-medium text-[#202124] mb-2 leading-7 group-hover:text-[#1a73e8] transition-colors">
            {service.title}
          </h3>

          {/* Description - 16px/24px body text */}
          <p className="text-base text-[#3c4043] leading-6 mb-6 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Learn more link */}
          <div className="inline-flex items-center gap-1.5 text-base font-medium text-[#1a73e8]">
            Learn more
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesGrid;
