/**
 * Schema.org JSON-LD utilities for SEO
 *
 * Implements structured data for:
 * - LocalBusiness (with license, service area)
 * - Organization (logo, social profiles)
 * - Service (per service page)
 * - FAQPage (per service/page)
 * - BreadcrumbList
 * - Review/AggregateRating
 *
 * Validated against Google Rich Results Test requirements.
 */

import { siteConfig } from '../config/site';
import { SITE_INFO, SITE_PHONE, CREDENTIALS, SERVICE_AREA, SOCIAL_LINKS, COMPANY_ADDRESS } from '../config/constants';

// ============================================================================
// Types
// ============================================================================

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface ReviewData {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  slug: string;
  serviceType?: string;
  areaServed?: string[];
  offers?: {
    priceRange?: string;
    priceCurrency?: string;
  };
}

export interface LocationSchemaInput {
  name: string;
  description?: string;
  latitude?: number;
  longitude?: number;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  slug?: string;
}

// ============================================================================
// Core Business Schemas
// ============================================================================

/**
 * Generate Organization schema with logo and social profiles
 * Use on: Homepage, About page
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.SITE_URL}/#organization`,
    name: SITE_INFO.name,
    legalName: SITE_INFO.legalName,
    url: siteConfig.SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${siteConfig.SITE_URL}/#logo`,
      url: `${siteConfig.SITE_URL}/logo.png`,
      contentUrl: `${siteConfig.SITE_URL}/logo.png`,
      width: 512,
      height: 512,
      caption: SITE_INFO.name,
    },
    image: `${siteConfig.SITE_URL}/og-image.jpg`,
    description: `${SITE_INFO.tagline}. Serving ${SERVICE_AREA.shorthand} with 24/7 emergency response.`,
    telephone: SITE_PHONE.display,
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.google,
      SOCIAL_LINKS.yelp,
      SOCIAL_LINKS.bbb,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_ADDRESS.street,
      addressLocality: COMPANY_ADDRESS.locality,
      addressRegion: COMPANY_ADDRESS.region,
      postalCode: COMPANY_ADDRESS.postalCode,
      addressCountry: COMPANY_ADDRESS.country,
    },
    foundingDate: SITE_INFO.foundingDate || '2005',
    slogan: SITE_INFO.slogan || "Northern Virginia's 24/7 Water Damage Experts",
    knowsAbout: [
      'Water damage restoration',
      'Flood cleanup',
      'Mold remediation',
      'Emergency water extraction',
      'Structural drying',
      'Insurance claims assistance'
    ],
    areaServed: SERVICE_AREA.regions.map(region => ({
      '@type': 'State',
      name: region,
    })),
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional License',
        name: CREDENTIALS.dpor.display,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Virginia Department of Professional and Occupational Regulation',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional License',
        name: CREDENTIALS.dc.display,
        recognizedBy: {
          '@type': 'Organization',
          name: 'DC Department of Licensing and Consumer Protection',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional License',
        name: CREDENTIALS.md.display,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Maryland Home Improvement Commission',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: CREDENTIALS.iicrc.display,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Institute of Inspection, Cleaning and Restoration Certification (IICRC)',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: CREDENTIALS.ria.display,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Restoration Industry Association (RIA)',
        },
      },
    ],
  };
}

/**
 * Generate LocalBusiness schema with license, service area, and full details
 * Use on: Homepage, Location pages
 */
export function generateLocalBusinessSchema(location?: LocationSchemaInput) {
  const businessName = location
    ? `${SITE_INFO.name} - ${location.name}`
    : SITE_INFO.name;

  const businessId = location
    ? `${siteConfig.SITE_URL}/#local-business-${location.name.toLowerCase().replace(/\s+/g, '-')}`
    : `${siteConfig.SITE_URL}/#local-business`;

  const businessUrl = location?.slug
    ? `${siteConfig.SITE_URL}${location.slug}`
    : siteConfig.SITE_URL;

  const description = location?.description
    || `24/7 emergency water damage restoration${location ? ` in ${location.name}` : ''}. Fast response, IICRC certified, direct insurance billing.`;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': businessId,
    name: businessName,
    description,
    url: businessUrl,
    telephone: SITE_PHONE.display,
    priceRange: '$$',
    image: `${siteConfig.SITE_URL}/og-image.jpg`,
    logo: `${siteConfig.SITE_URL}/logo.png`,

    // Address
    address: location?.address ? {
      '@type': 'PostalAddress',
      ...location.address,
    } : {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_ADDRESS.street,
      addressLocality: COMPANY_ADDRESS.locality,
      addressRegion: COMPANY_ADDRESS.region,
      postalCode: COMPANY_ADDRESS.postalCode,
      addressCountry: COMPANY_ADDRESS.country,
    },

    // Geo coordinates
    ...(location?.latitude && location?.longitude && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.latitude,
        longitude: location.longitude,
      },
    }),

    // Service area
    areaServed: location
      ? {
          '@type': 'City',
          name: location.name,
        }
      : SERVICE_AREA.regions.map(region => ({
          '@type': 'State',
          name: region,
        })),

    // Operating hours (24/7)
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],

    // Credentials/Licenses
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional License',
        name: CREDENTIALS.dpor.display,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Virginia DPOR',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: CREDENTIALS.iicrc.display,
        recognizedBy: {
          '@type': 'Organization',
          name: 'IICRC',
        },
      },
    ],

    // Payment accepted
    paymentAccepted: 'Cash, Credit Card, Check, Insurance',
    currenciesAccepted: 'USD',

    // Link to parent organization
    parentOrganization: {
      '@id': `${siteConfig.SITE_URL}/#organization`,
    },
  };
}

// ============================================================================
// Content Schemas
// ============================================================================

/**
 * Generate BreadcrumbList schema from breadcrumb items
 * Use on: All pages except homepage
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.SITE_URL,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `${siteConfig.SITE_URL}${item.path}`,
      })),
    ],
  };
}

/**
 * Generate Service schema for service pages
 * Use on: Service detail pages, service hub
 */
export function generateServiceSchema(service: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.SITE_URL}${service.slug}#service`,
    name: service.name,
    description: service.description,
    url: `${siteConfig.SITE_URL}${service.slug}`,

    // Service type categorization
    serviceType: service.serviceType || 'Water Damage Restoration',
    category: 'Home Services',

    // Provider reference
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.SITE_URL}/#local-business`,
      name: SITE_INFO.name,
      telephone: SITE_PHONE.display,
      url: siteConfig.SITE_URL,
    },

    // Area served
    areaServed: (service.areaServed || SERVICE_AREA.regions).map(region => ({
      '@type': 'State',
      name: region,
    })),

    // Availability
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },

    // Offers/Pricing
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: service.offers?.priceCurrency || 'USD',
      },
    },

    // Brand
    brand: {
      '@type': 'Brand',
      name: SITE_INFO.name,
    },
  };
}

/**
 * Generate FAQ schema from FAQ items
 * Use on: Pages with FAQ sections
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ============================================================================
// Review Schemas
// ============================================================================

/**
 * Generate AggregateRating schema
 * Use on: Homepage, Reviews page, Service pages
 */
export function generateAggregateRatingSchema(options?: {
  ratingValue?: number;
  reviewCount?: number;
  bestRating?: number;
  worstRating?: number;
}) {
  const {
    ratingValue = 4.9,
    reviewCount = 287,
    bestRating = 5,
    worstRating = 1,
  } = options || {};

  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.SITE_URL}/#local-business`,
      name: SITE_INFO.name,
    },
    ratingValue,
    reviewCount,
    bestRating,
    worstRating,
  };
}

/**
 * Generate individual Review schema
 * Use on: Reviews page, testimonial sections
 */
export function generateReviewSchema(review: ReviewData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.SITE_URL}/#local-business`,
      name: SITE_INFO.name,
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    ...(review.datePublished && { datePublished: review.datePublished }),
  };
}

/**
 * Generate multiple reviews with aggregate rating
 * Use on: Reviews page
 */
export function generateReviewsWithAggregateSchema(reviews: ReviewData[]) {
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.SITE_URL}/#local-business`,
    name: SITE_INFO.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: Math.round(avgRating * 10) / 10,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.reviewBody,
      ...(review.datePublished && { datePublished: review.datePublished }),
    })),
  };
}

// ============================================================================
// Composite Schema Generators
// ============================================================================

/**
 * Combine multiple schemas into a graph
 * Use when a page needs multiple schema types
 */
export function combineSchemas(...schemas: Array<Record<string, unknown>>) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map(schema => {
      // Remove duplicate @context from individual schemas
      const { '@context': _, ...rest } = schema;
      return rest;
    }),
  };
}

/**
 * Generate complete homepage schema
 * Includes: WebSite, Organization, LocalBusiness, AggregateRating, FAQPage
 */
export function generateHomepageSchema(faqs?: Array<{ question: string; answer: string }>) {
  const schemas: Array<Record<string, unknown>> = [
    generateWebSiteSchema(),
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateAggregateRatingSchema(),
  ];

  if (faqs && faqs.length > 0) {
    schemas.push(generateFAQSchema(faqs));
  }

  return combineSchemas(...schemas);
}

/**
 * Generate complete service page schema
 * Includes: BreadcrumbList, Service, FAQPage (if provided)
 */
export function generateServicePageSchema(
  service: ServiceSchemaInput,
  breadcrumbs: BreadcrumbItem[],
  faqs?: Array<{ question: string; answer: string }>
) {
  const schemas: Array<Record<string, unknown>> = [
    generateBreadcrumbSchema(breadcrumbs),
    generateServiceSchema(service),
  ];

  if (faqs && faqs.length > 0) {
    schemas.push(generateFAQSchema(faqs));
  }

  return combineSchemas(...schemas);
}

/**
 * Generate complete location page schema
 * Includes: BreadcrumbList, LocalBusiness, FAQPage (if provided)
 */
export function generateLocationPageSchema(
  location: LocationSchemaInput,
  breadcrumbs: BreadcrumbItem[],
  faqs?: Array<{ question: string; answer: string }>
) {
  const schemas: Array<Record<string, unknown>> = [
    generateBreadcrumbSchema(breadcrumbs),
    generateLocalBusinessSchema(location),
  ];

  if (faqs && faqs.length > 0) {
    schemas.push(generateFAQSchema(faqs));
  }

  return combineSchemas(...schemas);
}

/**
 * Generate About page schema
 * Includes: Organization, BreadcrumbList
 */
export function generateAboutPageSchema() {
  return combineSchemas(
    generateOrganizationSchema(),
    generateBreadcrumbSchema([{ label: 'About', path: '/about/' }])
  );
}

/**
 * Generate Reviews page schema
 * Includes: BreadcrumbList, LocalBusiness with reviews
 */
export function generateReviewsPageSchema(reviews: ReviewData[]) {
  return combineSchemas(
    generateBreadcrumbSchema([{ label: 'Reviews', path: '/reviews/' }]),
    generateReviewsWithAggregateSchema(reviews)
  );
}

/**
 * Generate Contact page schema
 * Includes: LocalBusiness, BreadcrumbList
 */
export function generateContactPageSchema() {
  return combineSchemas(
    generateLocalBusinessSchema(),
    generateBreadcrumbSchema([{ label: 'Contact', path: '/contact/' }])
  );
}

/**
 * Generate WebSite schema with SearchAction for sitelinks searchbox
 * Use on: Homepage
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.SITE_URL}/#website`,
    name: SITE_INFO.name,
    url: siteConfig.SITE_URL,
    description: `${SITE_INFO.tagline} in ${SERVICE_AREA.primary}`,
    publisher: {
      '@id': `${siteConfig.SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  };
}

// ============================================================================
// Article Schema
// ============================================================================

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  wordCount?: number;
  articleSection?: string;
}

/**
 * Generate Article schema for blog posts
 * Use on: Blog articles, guides, how-to pages
 */
export function generateArticleSchema(article: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteConfig.SITE_URL}${article.slug}#article`,
    headline: article.headline,
    description: article.description,
    url: `${siteConfig.SITE_URL}${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      '@id': `${siteConfig.SITE_URL}/#organization`,
      name: article.author || SITE_INFO.name,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.SITE_URL}/#organization`,
      name: SITE_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.SITE_URL}/logo.png`,
      },
    },
    image: article.image || `${siteConfig.SITE_URL}/og-image.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.SITE_URL}${article.slug}`,
    },
    ...(article.wordCount && { wordCount: article.wordCount }),
    ...(article.articleSection && { articleSection: article.articleSection }),
    inLanguage: 'en-US',
  };
}

/**
 * Generate complete blog article schema
 * Includes: Article, BreadcrumbList, FAQPage (if provided), LocalBusiness
 */
export function generateBlogArticleSchema(
  article: ArticleSchemaInput,
  faqs?: Array<{ question: string; answer: string }>
) {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Blog', path: '/blog/' },
    { label: article.headline.slice(0, 50), path: article.slug },
  ];

  const schemas: Array<Record<string, unknown>> = [
    generateArticleSchema(article),
    generateBreadcrumbSchema(breadcrumbs),
    generateLocalBusinessSchema(),
  ];

  if (faqs && faqs.length > 0) {
    schemas.push(generateFAQSchema(faqs));
  }

  return combineSchemas(...schemas);
}

/**
 * Generate HowTo schema for step-by-step guides
 * Use on: Process guides, DIY articles
 */
export function generateHowToSchema(input: {
  name: string;
  description: string;
  slug: string;
  steps: Array<{ name: string; text: string; image?: string }>;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${siteConfig.SITE_URL}${input.slug}#howto`,
    name: input.name,
    description: input.description,
    ...(input.totalTime && { totalTime: input.totalTime }),
    ...(input.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: input.estimatedCost.currency,
        value: input.estimatedCost.value,
      },
    }),
    step: input.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };
}
