import React from 'react';
import { ArrowRight } from 'lucide-react';
import ServiceCardThumb from './ServiceCardThumb';
import { ServiceData } from '../../types';

interface ServiceCardProps {
  service: ServiceData;
  onClick: (service: ServiceData) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div
      onClick={() => onClick(service)}
      className="group relative flex flex-col bg-white rounded-[8px] overflow-hidden cursor-pointer transition-all duration-200 shadow-[0_1px_2px_0_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)] hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] h-full"
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
      {/* Thumbnail Area - Square aspect ratio like Google Store */}
      <div className="relative w-full aspect-square bg-[#f8f9fa] overflow-hidden">
        <ServiceCardThumb
          visualKey={service.thumbVisualKey}
          className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category label - subtle, above title */}
        <span className="text-xs font-medium text-[#5f6368] uppercase tracking-wide mb-1">
          {service.audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial'}
        </span>

        {/* Title - Google: 16px/24px medium weight */}
        <h3 className="text-base font-medium text-[#202124] leading-6 mb-2 group-hover:text-[#1a73e8] transition-colors">
          {service.title}
        </h3>

        {/* Description - 14px/20px */}
        <p className="text-sm text-[#5f6368] leading-5 line-clamp-2 mb-4 flex-grow">
          {service.shortDescription}
        </p>

        {/* Learn more link */}
        <div className="flex items-center text-[#1a73e8] font-medium text-sm">
          <span>Learn more</span>
          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
