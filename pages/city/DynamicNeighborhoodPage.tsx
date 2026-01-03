// pages/city/DynamicNeighborhoodPage.tsx
// Dynamic neighborhood page that loads city-specific content from TypeScript files
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NeighborhoodPageRenderer, { NeighborhoodPageContent } from '../../components/city/NeighborhoodPageRenderer';
import { getCityInfo } from '../../utils/contentLoader';

// Import example content for static builds
import { langleyNeighborhoodContent } from '../../src/content/cities/mclean/neighborhoods/langley';

// Content registry - add more imports as needed
const contentRegistry: Record<string, Record<string, NeighborhoodPageContent>> = {
  mclean: {
    langley: langleyNeighborhoodContent as unknown as NeighborhoodPageContent,
  },
  // Add other cities as needed
};

interface RouteParams {
  city: string;
  neighborhood: string;
}

const DynamicNeighborhoodPage: React.FC = () => {
  const { city, neighborhood } = useParams<RouteParams>();
  const [content, setContent] = useState<NeighborhoodPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cityInfo = getCityInfo(city || '');

  useEffect(() => {
    async function loadContent() {
      if (!city || !neighborhood) {
        setError('City or neighborhood not specified');
        setLoading(false);
        return;
      }

      // Try static registry first
      if (contentRegistry[city]?.[neighborhood]) {
        setContent(contentRegistry[city][neighborhood]);
        setLoading(false);
        return;
      }

      // Dynamic import fallback
      try {
        const module = await import(`../../src/content/cities/${city}/neighborhoods/${neighborhood}.ts`);
        const exportName = Object.keys(module).find(key =>
          key.includes('Content') || key.includes('Neighborhood')
        );
        if (exportName) {
          setContent(module[exportName] as NeighborhoodPageContent);
        } else {
          setError('Content not found in module');
        }
      } catch (err) {
        console.error('Failed to load content:', err);
        setError('Neighborhood page not found');
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, [city, neighborhood]);

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
          <p className="text-[#5f6368]">{error || 'The requested neighborhood page could not be found.'}</p>
        </div>
      </div>
    );
  }

  return (
    <NeighborhoodPageRenderer
      content={content}
      cityName={cityInfo.name}
      citySlug={city || ''}
      phone={cityInfo.phone}
    />
  );
};

export default DynamicNeighborhoodPage;
