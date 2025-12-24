import React, { useState, useMemo } from 'react';
import { ServiceData } from '../../types';
import ServiceCard from './ServiceCard';
import ServiceFilterChips from './ServiceFilterChips';
import ServicePreviewModal from './ServicePreviewModal';

interface ServiceArchiveGridProps {
  services: ServiceData[];
  initialAudience?: 'RESIDENTIAL' | 'COMMERCIAL';
  initialCategory?: string;
  title?: string;
  subtitle?: string;
}

const ServiceArchiveGrid: React.FC<ServiceArchiveGridProps> = ({ 
  services, 
  initialAudience,
  initialCategory,
  title,
  subtitle
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract available audiences from the dataset passed in
  const hasResidential = services.some(s => s.audience === 'RESIDENTIAL');
  const hasCommercial = services.some(s => s.audience === 'COMMERCIAL');

  // If the page is specific (e.g. /residential/), we might not show audience chips
  const showAudienceFilter = !initialAudience && hasResidential && hasCommercial;

  // Build Filter Options
  const categories = ['All'];
  
  if (showAudienceFilter) {
      categories.push('Residential', 'Commercial');
  } else {
      // If scoped to audience, show service categories
      categories.push('Restoration Services', 'Cleanup Services', 'Specialty Services');
      if (initialAudience === 'COMMERCIAL' || (!initialAudience && hasCommercial)) {
          categories.push('Technical Services');
      }
  }

  // Filter Logic
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All') return services;

    // Audience filtering (if global page)
    if (selectedCategory === 'Residential') return services.filter(s => s.audience === 'RESIDENTIAL');
    if (selectedCategory === 'Commercial') return services.filter(s => s.audience === 'COMMERCIAL');

    // Category filtering
    // Convert display name "Restoration Services" -> "RESTORATION"
    const catMap: Record<string, string> = {
        'Restoration Services': 'RESTORATION',
        'Cleanup Services': 'CLEANUP',
        'Specialty Services': 'SPECIALTY',
        'Technical Services': 'TECHNICAL'
    };
    
    const targetCat = catMap[selectedCategory];
    if (targetCat) return services.filter(s => s.category === targetCat);

    return services;
  }, [services, selectedCategory]);

  const handleCardClick = (service: ServiceData) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300); // Clear after animation
  };

  return (
    <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-16 lg:py-24">

      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-12 max-w-3xl">
          {title && (
            <h1 className="text-[32px] md:text-[44px] lg:text-[48px] leading-[40px] md:leading-[52px] lg:leading-[56px] font-normal text-[#202124] mb-4">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-base text-[#3c4043] leading-6">{subtitle}</p>
          )}
        </div>
      )}

      {/* Filter Row */}
      <div className="mb-12 sticky top-[64px] z-20 bg-white/95 backdrop-blur py-3 -mx-4 px-4 md:mx-0 md:px-0 md:static border-b border-[#dadce0] md:border-none">
        <ServiceFilterChips
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* Card Grid - Google: 24px gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className="text-center py-20 bg-[#f8f9fa] rounded-[24px]">
          <p className="text-[#5f6368]">No services found for this category.</p>
        </div>
      )}

      {/* Preview Modal */}
      <ServicePreviewModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ServiceArchiveGrid;