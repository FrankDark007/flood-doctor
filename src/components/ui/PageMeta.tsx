import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../../config/site';

interface GeoMeta {
  region?: string;      // e.g., "US-VA"
  placename?: string;   // e.g., "Alexandria"
  position?: string;    // e.g., "38.8048;-77.0469"
}

interface PageMetaProps {
  // IMPORTANT: Pass a plain page title (e.g., "About Us").
  // DO NOT append " | Flood Doctor". The component appends the brand name automatically.
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: Record<string, any>; // Support for JSON-LD
  canonicalPath?: string; // Override for canonical URL (for short URL aliases)
  geo?: GeoMeta; // Geo meta tags for local SEO
}

const PageMeta: React.FC<PageMetaProps> = ({
  title,
  description,
  image = `${siteConfig.SITE_URL}/og-image-default.jpg`,
  type = 'website',
  schema,
  canonicalPath,
  geo,
}) => {
  const location = useLocation();

  // Calculate Canonical URL based on config (or use override)
  let pathname = canonicalPath || location.pathname;

  if (siteConfig.CANONICAL_TRAILING_SLASH) {
    if (!pathname.endsWith('/')) {
      pathname = `${pathname}/`;
    }
  } else {
    if (pathname.endsWith('/') && pathname !== '/') {
      pathname = pathname.slice(0, -1);
    }
  }

  const cleanPath = pathname === '//' ? '/' : pathname;
  const canonicalUrl = `${siteConfig.SITE_URL}${cleanPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = `${title} | Flood Doctor`;

    // 2. Helper to set meta tags
    const setMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Standard SEO
    setMetaTag('description', description);

    // 4. Canonical Link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // 5. Open Graph (Facebook/LinkedIn)
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:url', canonicalUrl, 'property');
    setMetaTag('og:type', type, 'property');
    setMetaTag('og:site_name', 'Flood Doctor', 'property');
    setMetaTag('og:image', image, 'property');

    // 6. Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // 7. Geo Meta Tags (for local SEO)
    if (geo) {
      if (geo.region) setMetaTag('geo.region', geo.region);
      if (geo.placename) setMetaTag('geo.placename', geo.placename);
      if (geo.position) setMetaTag('geo.position', geo.position);
      if (geo.position) setMetaTag('ICBM', geo.position.replace(';', ', '));
    }

    // 8. JSON-LD Schema
    if (schema) {
      let script = document.getElementById('json-ld-schema');
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    // Cleanup schema on unmount if it exists, to avoid pollution on other pages
    return () => {
       if (schema) {
         const script = document.getElementById('json-ld-schema');
         if (script) {
           script.textContent = ''; // Clear or remove
         }
       }
    };

  }, [title, description, canonicalUrl, image, type, schema, canonicalPath, geo]);

  return null;
};

export default PageMeta;