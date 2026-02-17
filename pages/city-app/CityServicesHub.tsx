/**
 * CityServicesHub - Services Hub for City Subdomain Sites
 *
 * CONTENT-GATED: Only shows services that have city content files.
 * Route: /services/
 */

import React, { useMemo } from 'react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import { getCityServiceMap } from '@/hooks/useCityApp';
import { SERVICES } from '@/data/services';
import ServiceArchiveGrid from '@/components/services/ServiceArchiveGrid';
import PageMeta from '@/components/ui/PageMeta';

const CityServicesHub: React.FC = () => {
  const franchise = useCityFranchise();

  const services = useMemo(() => {
    const allowedIds = new Set(getCityServiceMap().map(m => m.serviceId));
    return SERVICES.filter(s => allowedIds.has(s.id));
  }, []);

  return (
    <main className="flex-grow bg-white pb-24 md:pb-0">
      <PageMeta
        title={`Water Damage Restoration Services in ${franchise.city} | Flood Doctor`}
        description={`Emergency restoration, cleanup, and repair services for ${franchise.city}, ${franchise.state} homeowners and businesses.`}
      />
      <ServiceArchiveGrid
        services={services}
        title={`Water Damage Restoration Services in ${franchise.city}`}
        subtitle={`Emergency restoration, cleanup, and repair services for ${franchise.city}, ${franchise.state} homeowners and businesses.`}
      />
    </main>
  );
};

export default CityServicesHub;
