/**
 * CityServiceDetail - Service Detail Page for City Subdomain Sites
 *
 * Uses city-specific content from src/content/cities/{city}/services/*.ts
 * when available (rich, SEO-optimized content). Falls back to the generic
 * ServiceDetailNew template for services without city-specific content.
 *
 * Route: /services/residential/:subcategory/:serviceSlug/
 *        /services/commercial/:subcategory/:serviceSlug/
 */

import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import { SERVICES } from '@/data/services';
import ServiceDetail from '@/pages/templates/ServiceDetailNew';
import ServicePageRenderer, { ServicePageContent } from '@/components/city/ServicePageRenderer';
import { SERVICE_FILES } from '@/utils/contentLoader';

// Static content registry — all 13 cities × 8 services
// Imported statically for build-time optimization (no dynamic import at runtime)

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
} from '@/src/content/cities/mclean/services';

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
} from '@/src/content/cities/arlington/services';

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
} from '@/src/content/cities/alexandria/services';

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
} from '@/src/content/cities/fairfax/services';

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
} from '@/src/content/cities/vienna/services';

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
} from '@/src/content/cities/tysons/services';

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
} from '@/src/content/cities/reston/services';

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
} from '@/src/content/cities/herndon/services';

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
} from '@/src/content/cities/ashburn/services';

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
} from '@/src/content/cities/springfield/services';

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
} from '@/src/content/cities/fallschurch/services';

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
} from '@/src/content/cities/greatfalls/services';

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
} from '@/src/content/cities/lorton/services';

// Content registry — keyed by cityId → serviceFileSlug → content
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

/**
 * Resolves a service slug from URL params to a content registry key.
 * URL slugs like "mold-remediation" map directly to registry keys.
 * Some slugs have aliases (e.g., "water-damage-restoration" → "water-damage").
 */
function resolveServiceKey(serviceSlug: string): string {
  return SERVICE_FILES[serviceSlug] || serviceSlug;
}

const CityServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const franchise = useCityFranchise();

  // Resolve the service slug to content registry key
  const serviceKey = resolveServiceKey(serviceSlug || '');
  const cityId = franchise.id;

  // Check if city-specific rich content exists AND has minimum required fields
  // Some old-format content (Alexandria, Tysons) has different schemas (heroSection/introduction)
  // that are incompatible with ServicePageRenderer — fall through to generic template
  const cityContent = contentRegistry[cityId]?.[serviceKey] || null;
  const isRenderable = cityContent &&
    cityContent.meta &&
    cityContent.h1 &&
    cityContent.introSection?.headline &&
    cityContent.processSection?.headline &&
    cityContent.finalCTA?.phone;

  if (isRenderable) {
    // Render rich city-specific content with ServicePageRenderer
    return (
      <ServicePageRenderer
        content={cityContent}
        cityName={franchise.city || franchise.name}
        citySlug={cityId}
      />
    );
  }

  // Fallback: find generic service and render with ServiceDetailNew
  const service = SERVICES.find(s => {
    const segments = s.slug.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return lastSegment === serviceSlug;
  });

  if (!service) {
    return <Navigate to="/services/" replace />;
  }

  return <ServiceDetail service={service} />;
};

export default CityServiceDetail;
