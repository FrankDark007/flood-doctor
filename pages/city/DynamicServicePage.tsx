// pages/city/DynamicServicePage.tsx
// Dynamic service page that loads city-specific content from TypeScript files
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServicePageRenderer, { ServicePageContent } from '../../components/city/ServicePageRenderer';
import { getCityInfo, SERVICE_FILES } from '../../utils/contentLoader';

// Import all service content statically for build-time optimization
// McLean
import { mcleanWaterDamageContent } from '../../src/content/cities/mclean/services/water-damage';

// Content registry - add more imports as needed
const contentRegistry: Record<string, Record<string, ServicePageContent>> = {
  mclean: {
    'water-damage': mcleanWaterDamageContent,
  },
  // Add other cities as needed
};

const DynamicServicePage: React.FC = () => {
  const params = useParams();
  // Extract city from URL path - works with routes like /city/mclean/water-damage
  const pathParts = window.location.pathname.split('/');
  const cityIndex = pathParts.indexOf('city') + 1;
  const city = params.city || pathParts[cityIndex] || '';
  const service = pathParts[cityIndex + 1] || '';
  const [content, setContent] = useState<ServicePageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cityInfo = getCityInfo(city || '');
  const serviceFile = SERVICE_FILES[service || ''] || service;

  useEffect(() => {
    async function loadContent() {
      if (!city || !service) {
        setError('City or service not specified');
        setLoading(false);
        return;
      }

      // Try static registry first
      if (contentRegistry[city]?.[serviceFile]) {
        setContent(contentRegistry[city][serviceFile]);
        setLoading(false);
        return;
      }

      // Dynamic import fallback
      try {
        const module = await import(`../../src/content/cities/${city}/services/${serviceFile}.ts`);
        const exportName = Object.keys(module).find(key => key.includes('Content'));
        if (exportName) {
          setContent(module[exportName] as ServicePageContent);
        } else {
          setError('Content not found in module');
        }
      } catch (err) {
        console.error('Failed to load content:', err);
        setError('Service page not found');
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, [city, service, serviceFile]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[#5f6368]">Loading...</div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#202124] mb-4">Page Not Found</h1>
          <p className="text-[#5f6368]">{error || 'The requested service page could not be found.'}</p>
        </div>
      </div>
    );
  }

  return (
    <ServicePageRenderer
      content={content}
      cityName={cityInfo.name}
      citySlug={city || ''}
    />
  );
};

export default DynamicServicePage;
