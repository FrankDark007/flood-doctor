import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/services';
import { ArrowRight } from 'lucide-react';

interface RelatedServicesProps {
  currentServiceId: string;
  category: string;
  audience: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentServiceId, category, audience }) => {
  // Filter services: Same audience, Same category, Exclude current
  const related = SERVICES
    .filter(s => s.audience === audience && s.category === category && s.id !== currentServiceId)
    .slice(0, 4);

  // If not enough, fallback to same audience
  if (related.length < 3) {
    const more = SERVICES
      .filter(s => s.audience === audience && s.id !== currentServiceId && !related.find(r => r.id === s.id))
      .slice(0, 4 - related.length);
    related.push(...more);
  }

  if (related.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {related.slice(0, 3).map(service => (
        <Link
          key={service.id}
          to={service.slug}
          className="group block bg-white p-8 rounded-[24px] text-center transition-all duration-200 hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)]"
        >
          {/* Title - Google: 20px/28px */}
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

export default RelatedServices;
