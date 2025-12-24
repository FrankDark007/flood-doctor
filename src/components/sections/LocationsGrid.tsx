import React from 'react';
import { ExternalLink } from 'lucide-react';
import { LocationData } from '../../types';

interface LocationsGridProps {
  locations: LocationData[];
  id?: string;
}

const LocationsGrid: React.FC<LocationsGridProps> = ({ locations, id }) => {
  return (
    <div id={id} className="py-12 md:py-20 lg:py-24 bg-subtle/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Service Locations</h2>
            <p className="text-lg text-gray-600">Local response teams stationed throughout Northern Virginia.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {locations.map((loc) => (
             loc.url ? (
                <a 
                  key={loc.title} 
                  href={loc.url} 
                  className="group flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl shadow-none hover:shadow-md hover:border-gray-300 transition-all duration-200"
                >
                  <span className="font-medium text-lg text-gray-900 group-hover:text-primary">{loc.title}</span>
                  <ExternalLink size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                </a>
             ) : (
                <div key={loc.title} className="p-6 bg-gray-50 border border-transparent rounded-xl flex items-center justify-between opacity-60">
                    <span className="font-medium text-lg text-gray-500">{loc.title}</span>
                </div>
             )
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsGrid;