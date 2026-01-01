import React from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS } from '../../data/locations';

const ServiceAreaLinks: React.FC = () => {
  // We use a subset for the footer of service pages to avoid overwhelming the user,
  // but enough to provide good internal linking signal.
  const featuredLocations = LOCATIONS.slice(0, 8);

  return (
    <div className="py-12 md:py-16 border-t border-[#dadce0] bg-white">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16">
        <h3 className="text-sm font-medium text-[#5f6368] uppercase tracking-wider mb-6">
          Serving Northern Virginia & Surrounding Areas
        </h3>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {featuredLocations.map((loc) => (
            loc.url ? (
              <a
                key={loc.title}
                href={loc.url}
                className="text-sm text-[#3c4043] hover:text-[#1a73e8] transition-colors heading-section"
              >
                {loc.title} Water Damage Restoration
              </a>
            ) : (
              <span key={loc.title} className="text-sm text-[#5f6368] cursor-default">
                {loc.title}
              </span>
            )
          ))}
          <Link to="/locations/" className="text-sm font-medium text-[#1a73e8] hover:underline">
            View All Service Areas &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaLinks;