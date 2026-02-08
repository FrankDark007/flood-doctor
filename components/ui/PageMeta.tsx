import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { getCanonicalBase } from '../../utils/subdomain';

interface PageMetaProps {
  // IMPORTANT: Pass a plain page title (e.g., "About Us").
  // DO NOT append " | Flood Doctor". The component appends the brand name automatically.
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: Record<string, any>; // Support for JSON-LD
  structuredData?: Record<string, any>; // Alias for schema
  noIndex?: boolean;
}

const PageMeta: React.FC<PageMetaProps> = ({
  title,
  description,
  image = `${siteConfig.SITE_URL}/og-image-default.jpg`,
  type = 'website',
  schema,
  structuredData,
  noIndex = false
}) => {
  const finalSchema = structuredData || schema;
  const location = useLocation();
  const normalizedTitle = title.trim();
  const hasBrand = normalizedTitle.toLowerCase().includes('flood doctor');
  const fullTitle = hasBrand ? normalizedTitle : `${normalizedTitle} | Flood Doctor`;

  // Use current origin for subdomains (e.g., https://mclean.flood.doctor)
  const baseUrl = getCanonicalBase();

  // Calculate Canonical URL based on config
  let pathname = location.pathname;

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
  const canonicalUrl = `${baseUrl}${cleanPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

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
    setMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // 4. Canonical Link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // 5. Open Graph (Facebook/LinkedIn)
    setMetaTag('og:title', fullTitle, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:url', canonicalUrl, 'property');
    setMetaTag('og:type', type, 'property');
    setMetaTag('og:site_name', 'Flood Doctor', 'property');
    setMetaTag('og:image', image, 'property');

    // 6. Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // 7. JSON-LD Schema
    const existingSchema = document.getElementById('json-ld-schema');
    if (finalSchema) {
      let script = existingSchema;
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(finalSchema);
    } else if (existingSchema) {
      existingSchema.remove();
    }

  }, [fullTitle, description, canonicalUrl, image, type, finalSchema, noIndex]);

  return null;
};

export default PageMeta;
