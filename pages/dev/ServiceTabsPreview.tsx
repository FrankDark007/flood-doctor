import React from 'react';
import ServiceTabs from '../../generated-layouts/service-page/ServiceTabs';
import { SERVICE_DATA } from '../../generated-layouts/service-page/constants';

const ServiceTabsPreview: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white text-center py-3 text-sm font-medium">
        DEV PREVIEW — ServiceTabs (Google Ads Pill Style)
      </div>
      <ServiceTabs tabs={SERVICE_DATA.tabs} autoPlayInterval={5000} />
    </div>
  );
};

export default ServiceTabsPreview;
