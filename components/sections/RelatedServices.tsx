import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceData } from '../../types';
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
  if (related.length < 2) {
      const more = SERVICES
        .filter(s => s.audience === audience && s.id !== currentServiceId && !related.find(r => r.id === s.id))
        .slice(0, 4 - related.length);
      related.push(...more);
  }

  if (related.length === 0) return null;

  return (
    <div className="py-16 bg-subtle/30 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">Related Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(service => (
                <Link 
                    key={service.id} 
                    to={service.slug}
                    className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 block"
                >
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary mb-2 flex items-center justify-between">
                        {service.title}
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 text-primary" />
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2">
                        {service.shortDescription}
                    </p>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedServices;