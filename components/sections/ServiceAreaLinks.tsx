
import React from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS } from '../../data/locations';

interface ServiceAreaLinksProps {
  serviceTitle?: string;
  serviceSlug?: string;
}

const ServiceAreaLinks: React.FC<ServiceAreaLinksProps> = ({ serviceTitle, serviceSlug }) => {
  // We use a subset for the footer of service pages to avoid overwhelming the user,
  // but enough to provide good internal linking signal.
  const featuredLocations = LOCATIONS.slice(0, 8);

  return (
    <div className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
            Serving Northern Virginia & Surrounding Areas
        </h3>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
            {featuredLocations.map((loc) => {
                const linkLabel = serviceTitle 
                    ? `${loc.title} ${serviceTitle}` 
                    : `${loc.title} Water Damage Restoration`;
                
                // Construct URL: Base URL + Service Slug (if available)
                // If serviceSlug is provided, we append it to the subdomain URL to link deep.
                // Standardize slashes to avoid double slashing.
                let href = loc.url;
                if (loc.url && serviceSlug) {
                    const baseUrl = loc.url.endsWith('/') ? loc.url.slice(0, -1) : loc.url;
                    const path = serviceSlug.startsWith('/') ? serviceSlug : `/${serviceSlug}`;
                    href = `${baseUrl}${path}`;
                }

                return loc.url ? (
                    <a 
                        key={loc.title} 
                        href={href}
                        className="text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                        {linkLabel}
                    </a>
                ) : (
                    <span key={loc.title} className="text-sm text-gray-400 cursor-default">
                        {loc.title}
                    </span>
                );
            })}
            <Link to="/locations/" className="text-sm font-medium text-primary hover:underline">
                View All Service Areas &rarr;
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaLinks;
