/**
 * CityResidentialHub - Residential Services Hub for City Subdomains
 * Route: /services/residential/
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

const CityResidentialHub: React.FC = () => {
  const franchise = useCityFranchise();

  const services = useMemo(() => {
    const allowedIds = new Set(
      getCityServiceMap()
        .filter(m => m.audience === 'residential')
        .map(m => m.serviceId)
    );
    return SERVICES.filter(s => s.audience === 'RESIDENTIAL' && allowedIds.has(s.id));
  }, []);

  const breadcrumbs = [
    { label: 'Services', path: '/services/' },
    { label: 'Residential', path: '#' },
  ];

  return (
    <main className="flex-grow bg-white pb-24 md:pb-0">
      <PageMeta
        title={`Residential Services in ${franchise.city} | Flood Doctor`}
        description={`Emergency restoration, cleanup, and specialty services for ${franchise.city}, ${franchise.state} homeowners.`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <ServiceArchiveGrid
        services={services}
        title={`Residential Services in ${franchise.city}`}
        subtitle={`Emergency restoration, cleanup, and specialty services for ${franchise.city}, ${franchise.state} homeowners.`}
        initialAudience="RESIDENTIAL"
      />
    </main>
  );
};

export default CityResidentialHub;
