import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import ServiceArchiveGrid from '../components/services/ServiceArchiveGrid';
import { SERVICES } from '../data/services';
import Hero from '../components/sections/Hero';
import { ResidentialHeroAnimation, CommercialHeroAnimation } from '../components/graphics';

interface ServicesHubProps {
  title: string;
  subtitle: string;
  filterAudience?: 'RESIDENTIAL' | 'COMMERCIAL';
}

const ServicesHub: React.FC<ServicesHubProps> = ({ title, subtitle, filterAudience }) => {
  const filteredServices = filterAudience ? SERVICES.filter(service => service.audience === filterAudience) : SERVICES;
  const metaTitle = filterAudience ? `${title} | Northern Virginia` : 'All Restoration Services';

  // Determine Visual based on audience
  let HeroVisual = null;
  if (filterAudience === 'RESIDENTIAL') {
    HeroVisual = <ResidentialHeroAnimation />;
  } else if (filterAudience === 'COMMERCIAL') {
    HeroVisual = <CommercialHeroAnimation />;
  }

  return (
    <main className="flex-grow pb-24 md:pb-0 bg-white min-h-screen">
      <PageMeta title={metaTitle} description={subtitle} />
      
      {/* If specific audience page, show Hero with graphic */}
      {filterAudience && (
        <Hero 
          title={title} 
          subtitle={subtitle}
          visual={HeroVisual}
        />
      )}

      {/* 
          Using ServiceArchiveGrid which handles:
          - Hero-style text header (We might want to suppress title if we used Hero above, 
            but ServiceArchiveGrid logic combines title into filter area. 
            If we used Hero above, we might pass null/empty to Grid title to avoid duplication,
            OR just let Grid handle title if no Hero used (like "All Services").
      */}
      <ServiceArchiveGrid 
         services={filteredServices}
         title={!filterAudience ? title : undefined} // Only show title in Grid if not shown in Hero
         subtitle={!filterAudience ? subtitle : undefined}
         initialAudience={filterAudience}
      />
      
    </main>
  );
};

export default ServicesHub;