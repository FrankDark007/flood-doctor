/**
 * PageMeta Component for SEO
 *
 * Dynamic page meta component that builds canonical URLs based on franchise subdomain.
 * Sets title, meta description, canonical, Open Graph, Twitter Card, and geo tags.
 *
 * Usage:
 *   <PageMeta
 *     title="Water Damage Restoration"
 *     description="24/7 water damage restoration in McLean, VA."
 *     path="/services/residential/restoration-services/water-damage-restoration/"
 *   />
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFranchiseContext } from '@/contexts/FranchiseContext';
import { siteConfig } from '@/config/site';

interface PageMetaProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'place';
  noIndex?: boolean;
}

export default function PageMeta({
  title,
  description,
  path,
  image,
  type = 'website',
  noIndex = false,
}: PageMetaProps) {
  const franchise = useFranchiseContext();
  const location = useLocation();

  // Build base URL based on franchise
  const baseUrl = franchise.isHQ
    ? 'https://flood.doctor'
    : `https://${franchise.id}.flood.doctor`;

  // Determine path with trailing slash handling
  let pathname = path || location.pathname;
  if (siteConfig.CANONICAL_TRAILING_SLASH) {
    if (!pathname.endsWith('/')) {
      pathname = `${pathname}/`;
    }
  } else {
    if (pathname.endsWith('/') && pathname !== '/') {
      pathname = pathname.slice(0, -1);
    }
  }

  const canonicalUrl = `${baseUrl}${pathname === '//' ? '/' : pathname}`;

  // Build title with brand
  const pageTitle = title
    ? `${title} | ${franchise.name}`
    : franchise.name;

  // Build description with city context
  const pageDescription = description || `24/7 water damage restoration and flood cleanup services in ${franchise.city}, ${franchise.state}. Fast response, IICRC certified. Call ${franchise.phone}.`;

  // Default OG image
  const ogImage = image || `${baseUrl}/og-image-default.jpg`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = pageTitle;

    // 2. Helper to set meta tags
    const setMetaTag = (
      name: string,
      content: string,
      attribute: 'name' | 'property' = 'name'
    ) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Standard SEO Meta Tags
    setMetaTag('description', pageDescription);

    // 4. Robots (for noIndex pages)
    if (noIndex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow');
    }

    // 5. Canonical Link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // 6. Open Graph Tags (Facebook/LinkedIn)
    setMetaTag('og:title', pageTitle, 'property');
    setMetaTag('og:description', pageDescription, 'property');
    setMetaTag('og:url', canonicalUrl, 'property');
    setMetaTag('og:type', type, 'property');
    setMetaTag('og:site_name', 'Flood Doctor', 'property');
    setMetaTag('og:image', ogImage, 'property');
    setMetaTag('og:locale', 'en_US', 'property');

    // 7. Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', pageTitle);
    setMetaTag('twitter:description', pageDescription);
    setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:site', '@flooddoc');

    // 8. Geo Tags (for local SEO)
    if (franchise.coordinates) {
      setMetaTag('geo.position', `${franchise.coordinates.lat};${franchise.coordinates.lng}`);
      setMetaTag('geo.placename', `${franchise.city}, ${franchise.state}`);
      setMetaTag('geo.region', `US-${franchise.state}`);
      setMetaTag('ICBM', `${franchise.coordinates.lat}, ${franchise.coordinates.lng}`);
    }

    // 9. Additional Local SEO Tags
    setMetaTag('author', 'Flood Doctor');
    setMetaTag('publisher', 'Flood Doctor');

    // Cleanup on unmount
    return () => {
      // Optional: Reset meta tags on page change if needed
    };
  }, [pageTitle, pageDescription, canonicalUrl, ogImage, type, noIndex, franchise]);

  return null;
}

/**
 * Export named for consistency with other SEO components
 */
export { PageMeta };
