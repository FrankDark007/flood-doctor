// pages/city/DynamicServicePage.tsx
// Dynamic service page that loads city-specific content from TypeScript files
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServicePageRenderer, { ServicePageContent } from '../../components/city/ServicePageRenderer';
import { getCityInfo, SERVICE_FILES } from '../../utils/contentLoader';

// Import all service content statically for build-time optimization
// McLean
import {
  mcleanBasementFloodingContent,
  mcleanBurstPipeContent,
  mcleanFireDamageContent,
  mcleanFloodCleanupContent,
  mcleanMoldRemediationContent,
  mcleanSewageCleanupContent,
  mcleanStormDamageContent,
  mcleanWaterDamageContent,
} from '../../src/content/cities/mclean/services';

// Arlington
import {
  arlingtonBasementFloodingContent,
  arlingtonBurstPipeContent,
  arlingtonEmergencyWaterRemovalContent,
  arlingtonFireDamageContent,
  arlingtonFloodCleanupContent,
  arlingtonMoldRemediationContent,
  arlingtonSewageCleanupContent,
  arlingtonStormDamageContent,
  arlingtonWaterDamageContent,
} from '../../src/content/cities/arlington/services';

// Alexandria
import {
  alexandriaBasementFlooding,
  alexandriaBurstPipe,
  alexandriaFireDamage,
  alexandriaFloodCleanup,
  alexandriaMoldRemediationContent,
  alexandriaSewageCleanupContent,
  alexandriaStormDamageContent,
  alexandriaWaterDamage,
} from '../../src/content/cities/alexandria/services';

// Fairfax
import {
  fairfaxBasementFloodingContent,
  fairfaxBurstPipeContent,
  fairfaxFireDamageContent,
  fairfaxFloodCleanupContent,
  fairfaxMoldRemediationContent,
  fairfaxSewageCleanupContent,
  fairfaxStormDamageContent,
  fairfaxWaterDamageContent,
} from '../../src/content/cities/fairfax/services';

// Vienna
import {
  viennaBasementFlooding,
  viennaBurstPipe,
  viennaFireDamage,
  viennaFloodCleanup,
  viennaMoldRemediationContent,
  viennaSewageCleanupContent,
  viennaStormDamageContent,
  viennaWaterDamage,
} from '../../src/content/cities/vienna/services';

// Tysons
import {
  basementFloodingContent as tysonsBasementFloodingContent,
  burstPipeContent as tysonsBurstPipeContent,
  tysonsFireDamageContent,
  floodCleanupContent as tysonsFloodCleanupContent,
  tysonsMoldRemediationContent,
  tysonsSewageCleanupContent,
  tysonsStormDamageContent,
  waterDamageContent as tysonsWaterDamageContent,
} from '../../src/content/cities/tysons/services';

// Reston
import {
  restonBasementFloodingContent,
  restonBurstPipeContent,
  restonFireDamageContent,
  restonFloodCleanupContent,
  restonMoldRemediationContent,
  restonSewageCleanupContent,
  restonStormDamageContent,
  restonWaterDamageContent,
} from '../../src/content/cities/reston/services';

// Herndon
import {
  herndonBasementFloodingContent,
  herndonBurstPipeContent,
  herndonFireDamageContent,
  herndonFloodCleanupContent,
  herndonMoldRemediationContent,
  herndonSewageCleanupContent,
  herndonStormDamageContent,
  herndonWaterDamageContent,
} from '../../src/content/cities/herndon/services';

// Ashburn
import {
  ashburnBasementFloodingContent,
  ashburnBurstPipeContent,
  ashburnFireDamageContent,
  ashburnFloodCleanupContent,
  ashburnMoldRemediationContent,
  ashburnSewageCleanupContent,
  ashburnStormDamageContent,
  ashburnWaterDamageContent,
} from '../../src/content/cities/ashburn/services';

// Springfield
import {
  springfieldBasementFloodingContent,
  springfieldBurstPipeContent,
  springfieldFireDamageContent,
  springfieldFloodCleanupContent,
  springfieldMoldRemediationContent,
  springfieldSewageCleanupContent,
  springfieldStormDamageContent,
  springfieldWaterDamageContent,
} from '../../src/content/cities/springfield/services';

// Falls Church
import {
  fallschurchBasementFloodingContent,
  fallschurchBurstPipeContent,
  fallschurchFireDamageContent,
  fallschurchFloodCleanupContent,
  fallschurchMoldRemediationContent,
  fallschurchSewageCleanupContent,
  fallschurchStormDamageContent,
  fallschurchWaterDamageContent,
} from '../../src/content/cities/fallschurch/services';

// Great Falls
import {
  greatfallsBasementFloodingContent,
  greatfallsBurstPipeContent,
  greatfallsFireDamageContent,
  greatfallsFloodCleanupContent,
  greatfallsMoldRemediationContent,
  greatfallsSewageCleanupContent,
  greatfallsStormDamageContent,
  greatfallsWaterDamageContent,
} from '../../src/content/cities/greatfalls/services';

// Lorton
import {
  lortonBasementFloodingContent,
  lortonBurstPipeContent,
  lortonFireDamageContent,
  lortonFloodCleanupContent,
  lortonMoldRemediationContent,
  lortonSewageCleanupContent,
  lortonStormDamageContent,
  lortonWaterDamageContent,
} from '../../src/content/cities/lorton/services';

// Content registry - all 13 cities with 8 services each
const contentRegistry: Record<string, Record<string, ServicePageContent>> = {
  mclean: {
    'water-damage': mcleanWaterDamageContent,
    'basement-flooding': mcleanBasementFloodingContent,
    'burst-pipe': mcleanBurstPipeContent,
    'flood-cleanup': mcleanFloodCleanupContent,
    'mold-remediation': mcleanMoldRemediationContent,
    'sewage-cleanup': mcleanSewageCleanupContent,
    'storm-damage': mcleanStormDamageContent,
    'fire-damage': mcleanFireDamageContent,
  },
  arlington: {
    'water-damage': arlingtonWaterDamageContent,
    'basement-flooding': arlingtonBasementFloodingContent,
    'burst-pipe': arlingtonBurstPipeContent,
    'flood-cleanup': arlingtonFloodCleanupContent,
    'mold-remediation': arlingtonMoldRemediationContent,
    'sewage-cleanup': arlingtonSewageCleanupContent,
    'storm-damage': arlingtonStormDamageContent,
    'fire-damage': arlingtonFireDamageContent,
    'emergency-water-removal': arlingtonEmergencyWaterRemovalContent,
  },
  alexandria: {
    'water-damage': alexandriaWaterDamage as unknown as ServicePageContent,
    'basement-flooding': alexandriaBasementFlooding as unknown as ServicePageContent,
    'burst-pipe': alexandriaBurstPipe as unknown as ServicePageContent,
    'flood-cleanup': alexandriaFloodCleanup as unknown as ServicePageContent,
    'mold-remediation': alexandriaMoldRemediationContent,
    'sewage-cleanup': alexandriaSewageCleanupContent,
    'storm-damage': alexandriaStormDamageContent,
    'fire-damage': alexandriaFireDamage as unknown as ServicePageContent,
  },
  fairfax: {
    'water-damage': fairfaxWaterDamageContent,
    'basement-flooding': fairfaxBasementFloodingContent,
    'burst-pipe': fairfaxBurstPipeContent,
    'flood-cleanup': fairfaxFloodCleanupContent,
    'mold-remediation': fairfaxMoldRemediationContent,
    'sewage-cleanup': fairfaxSewageCleanupContent,
    'storm-damage': fairfaxStormDamageContent,
    'fire-damage': fairfaxFireDamageContent,
  },
  vienna: {
    'water-damage': viennaWaterDamage as unknown as ServicePageContent,
    'basement-flooding': viennaBasementFlooding as unknown as ServicePageContent,
    'burst-pipe': viennaBurstPipe as unknown as ServicePageContent,
    'flood-cleanup': viennaFloodCleanup as unknown as ServicePageContent,
    'mold-remediation': viennaMoldRemediationContent,
    'sewage-cleanup': viennaSewageCleanupContent,
    'storm-damage': viennaStormDamageContent,
    'fire-damage': viennaFireDamage as unknown as ServicePageContent,
  },
  tysons: {
    'water-damage': tysonsWaterDamageContent,
    'basement-flooding': tysonsBasementFloodingContent,
    'burst-pipe': tysonsBurstPipeContent,
    'flood-cleanup': tysonsFloodCleanupContent,
    'mold-remediation': tysonsMoldRemediationContent,
    'sewage-cleanup': tysonsSewageCleanupContent,
    'storm-damage': tysonsStormDamageContent,
    'fire-damage': tysonsFireDamageContent,
  },
  reston: {
    'water-damage': restonWaterDamageContent,
    'basement-flooding': restonBasementFloodingContent,
    'burst-pipe': restonBurstPipeContent,
    'flood-cleanup': restonFloodCleanupContent,
    'mold-remediation': restonMoldRemediationContent,
    'sewage-cleanup': restonSewageCleanupContent,
    'storm-damage': restonStormDamageContent,
    'fire-damage': restonFireDamageContent,
  },
  herndon: {
    'water-damage': herndonWaterDamageContent,
    'basement-flooding': herndonBasementFloodingContent,
    'burst-pipe': herndonBurstPipeContent,
    'flood-cleanup': herndonFloodCleanupContent,
    'mold-remediation': herndonMoldRemediationContent,
    'sewage-cleanup': herndonSewageCleanupContent,
    'storm-damage': herndonStormDamageContent,
    'fire-damage': herndonFireDamageContent,
  },
  ashburn: {
    'water-damage': ashburnWaterDamageContent,
    'basement-flooding': ashburnBasementFloodingContent,
    'burst-pipe': ashburnBurstPipeContent,
    'flood-cleanup': ashburnFloodCleanupContent,
    'mold-remediation': ashburnMoldRemediationContent,
    'sewage-cleanup': ashburnSewageCleanupContent,
    'storm-damage': ashburnStormDamageContent,
    'fire-damage': ashburnFireDamageContent,
  },
  springfield: {
    'water-damage': springfieldWaterDamageContent,
    'basement-flooding': springfieldBasementFloodingContent,
    'burst-pipe': springfieldBurstPipeContent,
    'flood-cleanup': springfieldFloodCleanupContent,
    'mold-remediation': springfieldMoldRemediationContent,
    'sewage-cleanup': springfieldSewageCleanupContent,
    'storm-damage': springfieldStormDamageContent,
    'fire-damage': springfieldFireDamageContent,
  },
  fallschurch: {
    'water-damage': fallschurchWaterDamageContent,
    'basement-flooding': fallschurchBasementFloodingContent,
    'burst-pipe': fallschurchBurstPipeContent,
    'flood-cleanup': fallschurchFloodCleanupContent,
    'mold-remediation': fallschurchMoldRemediationContent,
    'sewage-cleanup': fallschurchSewageCleanupContent,
    'storm-damage': fallschurchStormDamageContent,
    'fire-damage': fallschurchFireDamageContent,
  },
  greatfalls: {
    'water-damage': greatfallsWaterDamageContent,
    'basement-flooding': greatfallsBasementFloodingContent,
    'burst-pipe': greatfallsBurstPipeContent,
    'flood-cleanup': greatfallsFloodCleanupContent,
    'mold-remediation': greatfallsMoldRemediationContent,
    'sewage-cleanup': greatfallsSewageCleanupContent,
    'storm-damage': greatfallsStormDamageContent,
    'fire-damage': greatfallsFireDamageContent,
  },
  lorton: {
    'water-damage': lortonWaterDamageContent,
    'basement-flooding': lortonBasementFloodingContent,
    'burst-pipe': lortonBurstPipeContent,
    'flood-cleanup': lortonFloodCleanupContent,
    'mold-remediation': lortonMoldRemediationContent,
    'sewage-cleanup': lortonSewageCleanupContent,
    'storm-damage': lortonStormDamageContent,
    'fire-damage': lortonFireDamageContent,
  },
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
