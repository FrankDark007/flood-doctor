import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export interface Neighborhood {
  name: string;
  responseTime: string;
  tier: 'fast' | 'medium' | 'slow';
}

interface NeighborhoodResponseGridProps {
  neighborhoods: Neighborhood[];
  cityName: string;
}

// Response time tiers - realistic times based on 60-min guarantee
const tierColors = {
  fast: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    badge: 'bg-green-100 text-green-800',
    dot: 'bg-green-500'
  },
  medium: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-800',
    dot: 'bg-blue-500'
  },
  slow: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800',
    dot: 'bg-amber-500'
  }
};

/**
 * NeighborhoodResponseGrid - SEO-optimized grid showing response times
 * Uses H2 for section heading, proper semantic HTML for crawlers
 */
const NeighborhoodResponseGrid: React.FC<NeighborhoodResponseGridProps> = ({
  neighborhoods,
  cityName
}) => {
  if (!neighborhoods || neighborhoods.length === 0) return null;

  return (
    <section
      className="py-16 lg:py-20"
      aria-labelledby="neighborhood-response-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - H2 for SEO hierarchy */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MapPin size={16} />
            <span>Fast Response Coverage</span>
          </div>
          <h2
            id="neighborhood-response-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            Rapid Response Throughout {cityName}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our central dispatch ensures fast arrival to every {cityName} neighborhood.
            Response times based on typical traffic conditions.
          </p>
        </div>

        {/* Neighborhood Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {neighborhoods.map((neighborhood, index) => {
            const colors = tierColors[neighborhood.tier];
            return (
              <article
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-xl p-4 hover:shadow-md transition-shadow`}
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
              >
                <h3
                  className="font-semibold text-gray-900 text-sm md:text-base mb-2 truncate"
                  itemProp="name"
                >
                  {neighborhood.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${colors.dot} animate-pulse`}
                    aria-hidden="true"
                  />
                  <span className={`text-sm font-medium ${colors.text} flex items-center gap-1`}>
                    <Clock size={12} />
                    {neighborhood.responseTime}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Response Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${tierColors.fast.dot}`} />
            <span className="text-gray-600">Under 60 min</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${tierColors.medium.dot}`} />
            <span className="text-gray-600">60-90 min</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${tierColors.slow.dot}`} />
            <span className="text-gray-600">90+ min</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodResponseGrid;
