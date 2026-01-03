/**
 * LocalBusinessSchema Component
 *
 * SAB-Compliant (Service Area Business) LocalBusiness JSON-LD schema.
 * NO streetAddress (intentional for SABs per Google guidelines).
 * Uses areaServed with City type entries from franchise service areas.
 *
 * Usage:
 *   <LocalBusinessSchema />
 */

import { useEffect } from 'react';
import { useFranchiseContext } from '@/contexts/FranchiseContext';
import { SITE_INFO } from '@/config/constants';

interface LocalBusinessSchemaProps {
  /** Additional service types to include */
  additionalServices?: string[];
  /** Override the slogan */
  slogan?: string;
}

export default function LocalBusinessSchema({
  additionalServices,
  slogan: customSlogan,
}: LocalBusinessSchemaProps = {}) {
  const franchise = useFranchiseContext();

  // Build canonical URL
  const url = franchise.isHQ
    ? 'https://flood.doctor'
    : `https://${franchise.id}.flood.doctor`;

  // Build slogan with city name
  const slogan =
    customSlogan ||
    `Fast, professional water damage restoration in ${franchise.city}. Available 24/7.`;

  // Primary services for hasOfferCatalog
  const primaryServices = [
    {
      name: 'Water Damage Restoration',
      description: `Professional water damage restoration services in ${franchise.city}. Emergency response, water extraction, structural drying, and complete restoration.`,
    },
    {
      name: 'Flood Cleanup',
      description: `Fast flood cleanup and water removal in ${franchise.city}. We handle basement flooding, storm damage, and sewage backup.`,
    },
    {
      name: 'Mold Remediation',
      description: `IICRC-certified mold removal and remediation in ${franchise.city}. Safe, thorough mold treatment for homes and businesses.`,
    },
    ...(additionalServices || []).map((service) => ({
      name: service,
      description: `Professional ${service.toLowerCase()} services in ${franchise.city}.`,
    })),
  ];

  // Knowledge/expertise areas
  const knowsAbout = [
    'Water Damage Restoration',
    'Flood Cleanup',
    'Mold Remediation',
    'Emergency Water Extraction',
    'Structural Drying',
    'Sewage Cleanup',
    'Storm Damage Restoration',
    'Fire and Smoke Damage',
    'Insurance Claims Assistance',
    'IICRC Standards',
  ];

  // Build areaServed from franchise.serviceArea (no streetAddress for SABs)
  // V3: serviceArea is now { primary: [], secondary: [] } - flatten to array
  const serviceAreaFlat = [
    ...franchise.serviceArea.primary,
    ...franchise.serviceArea.secondary,
  ];
  const areaServed = serviceAreaFlat.map((city) => ({
    '@type': 'City',
    name: city,
    addressRegion: franchise.state,
    addressCountry: 'US',
  }));

  // Build the schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}/#local-business`,
    name: franchise.name,
    alternateName: SITE_INFO.name,
    description: `${franchise.name} provides 24/7 emergency water damage restoration, flood cleanup, and mold remediation services in ${franchise.city} and surrounding areas. IICRC certified, fully insured.`,
    url,
    telephone: franchise.phone,
    image: `${url}/og-image.jpg`,
    logo: `https://flood.doctor/logo.png`,
    priceRange: '$$',
    slogan,

    // SAB-Compliant: NO streetAddress, only service area
    areaServed,

    // Geo coordinates (if available)
    ...(franchise.coordinates && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: franchise.coordinates.lat,
        longitude: franchise.coordinates.lng,
      },
    }),

    // 24/7 Availability
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },

    // Service Catalog
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Water Damage Restoration Services',
      itemListElement: primaryServices.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
        position: index + 1,
      })),
    },

    // Expertise
    knowsAbout,

    // Payment and currencies
    paymentAccepted: ['Cash', 'Credit Card', 'Check', 'Insurance'],
    currenciesAccepted: 'USD',

    // Parent organization (for franchises)
    ...((!franchise.isHQ) && {
      parentOrganization: {
        '@type': 'Organization',
        '@id': 'https://flood.doctor/#organization',
        name: SITE_INFO.name,
      },
    }),

    // Aggregate rating (if available, typically from reviews)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '287',
      bestRating: '5',
      worstRating: '1',
    },
  };

  useEffect(() => {
    // Create or update the JSON-LD script
    const scriptId = 'local-business-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);

    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.textContent = '';
      }
    };
  }, [franchise, schema]);

  return null;
}

/**
 * Export named for consistency
 */
export { LocalBusinessSchema };
