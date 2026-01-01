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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Header */}
      {(title || subtitle) && (
          <div className="mb-10 max-w-3xl">
              {title && <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight leading-[1.1]">{title}</h1>}
              {subtitle && <p className="text-xl text-gray-500 leading-relaxed">{subtitle}</p>}
          </div>
      )}

      {/* Filter Row */}
      <div className="mb-12 sticky top-[80px] z-20 bg-white/95 backdrop-blur py-2 -mx-4 px-4 md:mx-0 md:px-0 md:static">
         <ServiceFilterChips 
            categories={categories} 
            selected={selectedCategory} 
            onSelect={setSelectedCategory} 
         />
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
          <div className="text-center py-20 bg-gray-50 rounded-3xl">
              <p className="text-gray-500">No services found for this category.</p>
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