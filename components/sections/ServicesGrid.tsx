
import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceData } from '../../types'; // Go up two levels to src/types
import ServiceCard from '../services/ServiceCard'; // Go up to components, then down to services
import Button from '../ui/Button'; // Go up to components, then down to ui

interface ServicesGridProps {
  services: ServiceData[];
  title?: string;
  id?: string;
  children?: React.ReactNode;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, title, id, children }) => {
  if (services.length === 0) return null;

  return (
    <div id={id} className="py-16 lg:py-20 bg-white">
      {/* Reduced max-width from 1440px to 6xl (~1150px) to shrink cards by roughly 20% */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Centered for impact */}
        {title && (
            <div className="mb-12 text-center max-w-2xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-medium text-text mb-4 tracking-tight">
                  {title}
                </h2>
                <p className="font-sans text-lg text-muted">
                  Professional restoration solutions engineered for speed and safety.
                </p>
            </div>
        )}

        {/* The Grid - Max 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link 
               key={service.id} 
               to={service.slug}
               className="block h-full"
               style={{ textDecoration: 'none' }} // Ensure no underline on the card container
            >
               {/* Pass the service data to the card. 
                 We use an empty onClick because the Link tag above handles the navigation.
               */}
               <ServiceCard service={service} onClick={() => {}} />
            </Link>
          ))}
        </div>

        {children && (
           <div className="mt-12 text-center">
             {children}
           </div>
        )}
      </div>
    </div>
  );
};

export default ServicesGrid;
