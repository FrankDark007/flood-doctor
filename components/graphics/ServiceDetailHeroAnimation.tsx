import React from 'react';
import HeroVisual from '../ui/illustrations/service-hero';

interface ServiceDetailHeroProps {
  visualKey?: string;
  className?: string;
}

const ServiceDetailHeroAnimation: React.FC<ServiceDetailHeroProps> = ({ visualKey, className }) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Use the existing HeroVisual logic which maps keys to specific SVGs */}
      <HeroVisual visualKey={visualKey} />
    </div>
  );
};

export default ServiceDetailHeroAnimation;