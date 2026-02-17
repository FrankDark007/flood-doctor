/**
 * CityCommercialHub - Commercial Services Hub for City Subdomains
 * Route: /services/commercial/
 *
 * CONTENT-GATED: Only shows services that have city content files.
 * Uses getCityServiceMap() to filter SERVICES array.
 */
import React, { useMemo } from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import { getCityServiceMap } from '@/hooks/useCityApp';
import { SERVICES } from '@/data/services';
import ServiceArchiveGrid from '@/components/services/ServiceArchiveGrid';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageMeta from '@/components/ui/PageMeta';

const CityCommercialHub: React.FC = () => {
  const franchise = useCityFranchise();

  const services = useMemo(() => {
    const allowedIds = new Set(
      getCityServiceMap()
        .filter(m => m.audience === 'commercial')
        .map(m => m.serviceId)
    );
    return SERVICES.filter(s => s.audience === 'COMMERCIAL' && allowedIds.has(s.id));
  }, []);

  const breadcrumbs = [
    { label: 'Services', path: '/services/' },
    { label: 'Commercial', path: '#' },
  ];

  return (
    <main className="flex-grow bg-white pb-24 md:pb-0">
      <PageMeta
        title={`Commercial Services in ${franchise.city} | Flood Doctor`}
        description={`Scalable disaster recovery for ${franchise.city}, ${franchise.state} businesses and facilities.`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <ServiceArchiveGrid
        services={services}
        title={`Commercial Services in ${franchise.city}`}
        subtitle={`Scalable disaster recovery for ${franchise.city}, ${franchise.state} businesses and facilities.`}
        initialAudience="COMMERCIAL"
      />
    </main>
  );
};

export default CityCommercialHub;
