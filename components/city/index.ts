// components/city/index.ts
// Export all city page components

export { default as ServicePageRenderer } from './ServicePageRenderer';
export type { ServicePageContent } from './ServicePageRenderer';

export { default as NeighborhoodPageRenderer } from './NeighborhoodPageRenderer';
export type { NeighborhoodPageContent } from './NeighborhoodPageRenderer';

export { default as CityBlogIndex } from './CityBlogIndex';
export { default as CityBlogArticle } from './CityBlogArticle';

// SEO-optimized city components
export { default as NeighborhoodResponseGrid, type Neighborhood } from './NeighborhoodResponseGrid';
export { default as LocalExpertiseCards, type Challenge } from './LocalExpertiseCards';
export { default as TestimonialSection, type Testimonial } from './TestimonialSection';
export { default as CityFAQSection, type FAQ } from './CityFAQSection';
export { default as TrustBadgeBar } from './TrustBadgeBar';
