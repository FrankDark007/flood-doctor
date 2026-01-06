import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface Challenge {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

interface LocalExpertiseCardsProps {
  challenges: Challenge[];
  cityName: string;
}

/**
 * LocalExpertiseCards - SEO-optimized cards showing city-specific challenges
 * Uses H2 for section, H3 for each challenge - proper hierarchy for crawlers
 */
const LocalExpertiseCards: React.FC<LocalExpertiseCardsProps> = ({
  challenges,
  cityName
}) => {
  if (!challenges || challenges.length === 0) return null;

  // Dynamic icon lookup
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[iconName];
    return IconComponent ? <IconComponent size={24} className="text-primary" /> : null;
  };

  return (
    <section
      className="py-16 lg:py-20 bg-gray-50"
      aria-labelledby="local-expertise-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - H2 for SEO */}
        <div className="text-center mb-12">
          <h2
            id="local-expertise-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why {cityName} Properties Need Specialized Care
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every area has unique water damage challenges. Our teams are trained
            specifically for {cityName}'s property types and common issues.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {getIcon(challenge.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalExpertiseCards;
