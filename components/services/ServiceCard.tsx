
import React from 'react';
import { 
  ArrowRight, 
  Droplets, 
  Flame, 
  Leaf, 
  Wind, 
  CloudLightning, 
  Sparkles, 
  Activity, 
  Hammer, 
  Zap, 
  Waves, 
  Box
} from 'lucide-react';
import ServiceCardThumb from './ServiceCardThumb';
import { ServiceData } from '../../types';

interface ServiceCardProps {
  service: ServiceData;
  onClick: (service: ServiceData) => void;
}

const getServiceIcon = (service: ServiceData) => {
  const t = service.title.toLowerCase();
  if (t.includes('fire') || t.includes('smoke')) return Flame;
  if (t.includes('mold')) return Leaf;
  if (t.includes('storm')) return CloudLightning;
  if (t.includes('water') || t.includes('flood') || t.includes('leak') || t.includes('burst') || t.includes('drying')) return Droplets;
  if (t.includes('sewage')) return Waves;
  if (t.includes('odor') || t.includes('air')) return Wind;
  if (t.includes('content') || t.includes('pack')) return Box;
  if (t.includes('clean')) return Sparkles;
  
  switch (service.category) {
    case 'TECHNICAL': return Activity;
    case 'RESTORATION': return Hammer;
    case 'CLEANUP': return Sparkles;
    case 'SPECIALTY': return Zap;
    default: return Zap;
  }
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const Icon = getServiceIcon(service);

  return (
    <div 
      onClick={() => onClick(service)}
      className="group relative flex flex-col bg-subtle rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-google-hover border border-transparent hover:border-border h-full"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(service);
        }
      }}
      aria-label={`View details for ${service.title}`}
    >
      {/* Top Thumbnail Area - 16:9 Aspect Ratio */}
      <div className="relative w-full aspect-[16/9] bg-white overflow-hidden">
        <ServiceCardThumb 
          visualKey={service.thumbVisualKey} 
          className="w-full h-full transform transition-transform duration-700 group-hover:scale-105" 
        />
        
        {/* Category Chip (Floating) */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-sm text-text border border-gray-100 shadow-sm">
            {service.audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial'}
          </span>
        </div>
      </div>

      {/* Content Area - Compact Padding */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-2.5">
          <div className="p-1.5 rounded-full bg-white border border-gray-200 text-primary shrink-0">
             <Icon size={16} strokeWidth={2} />
          </div>
          <h3 className="font-display text-[17px] font-medium text-text leading-tight group-hover:text-primary transition-colors">
             {service.title}
          </h3>
        </div>
        
        <p className="font-sans text-[13px] text-muted leading-relaxed line-clamp-3 mb-4 flex-grow">
          {service.shortDescription}
        </p>

        {/* Action Area */}
        <div className="flex items-center text-primary font-medium text-sm group/btn">
          <span>Learn more</span>
          <ArrowRight size={16} className="ml-1.5 transition-transform group-hover/btn:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
