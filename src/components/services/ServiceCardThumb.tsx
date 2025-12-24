
import React from 'react';
import ServiceThumbVisual from '../ui/illustrations/service-thumbs';

interface ServiceCardThumbProps {
  visualKey?: string; // This will now come from thumbVisualKey
  className?: string;
}

const ServiceCardThumb: React.FC<ServiceCardThumbProps> = ({ visualKey, className = '' }) => {
  const baseClasses = `w-full h-full bg-white flex items-center justify-center overflow-hidden ${className}`;

  return (
    <div className={`relative bg-white ${baseClasses}`} role="img" aria-label={`Illustration for ${visualKey || 'service'}`}>
      <ServiceThumbVisual type={visualKey || 'default'} />
      
      {/* Optional "Illustrative" label for charts (specific keys only) */}
      {['water-damage-dash', 'moisture-mapping', 'iaq'].includes(visualKey || '') && (
         <div className="absolute bottom-2 right-2 text-[8px] text-gray-400 opacity-50">Illustrative</div>
      )}
    </div>
  );
};

export default ServiceCardThumb;
