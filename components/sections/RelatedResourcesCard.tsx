import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';

interface RelatedResource {
  title: string;
  description: string;
  url: string;
}

interface RelatedResourcesCardProps {
  resources: RelatedResource[];
}

const RelatedResourcesCard: React.FC<RelatedResourcesCardProps> = ({ resources }) => {
  if (resources.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4 text-[#1a73e8] font-semibold">
        <FileText size={18} />
        <span className="text-sm uppercase tracking-wide">Related Resources</span>
      </div>

      <div className="space-y-3">
        {resources.map((resource, idx) => (
          <Link
            key={idx}
            to={resource.url}
            className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-[#1a73e8] transition-colors mb-1">
                  {resource.title}
                </p>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {resource.description}
                </p>
              </div>
              <ArrowRight
                size={14}
                className="flex-shrink-0 text-gray-400 group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all mt-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedResourcesCard;
