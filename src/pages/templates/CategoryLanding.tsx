import React from 'react';
import { ServiceAudience, ServiceCategory } from '../../types';
import { SERVICES } from '../../data/services';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ServiceArchiveGrid from '../../components/services/ServiceArchiveGrid';
import PageMeta from '../../components/ui/PageMeta';

interface CategoryLandingProps {
  audience: ServiceAudience;
  category: ServiceCategory;
  title: string;
  description: string;
}

const CategoryLanding: React.FC<CategoryLandingProps> = ({ audience, category, title, description }) => {
  // Filter services for this category
  const categoryServices = SERVICES.filter(s => s.audience === audience && s.category === category);
  
  const breadcrumbs = [
    { label: 'Services', path: '/services/' },
    { label: audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial', path: `/services/${audience.toLowerCase()}/` },
    { label: title, path: '#' } // Current page
  ];

  return (
    <main className="flex-grow bg-white pb-24 md:pb-0">
      <PageMeta title={title} description={description} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
         <Breadcrumbs items={breadcrumbs} />
      </div>

      <ServiceArchiveGrid 
         services={categoryServices}
         title={title}
         subtitle={description}
         // We pass initial category to pre-select, but since this page IS the category, 
         // we might just want to show "All" (meaning all in this category) or hide chips?
         // The Grid component defaults to 'All' which shows everything passed in `services`.
         // Since `categoryServices` is ALREADY filtered, showing 'All' is correct.
         initialAudience={audience}
      />

    </main>
  );
};

export default CategoryLanding;