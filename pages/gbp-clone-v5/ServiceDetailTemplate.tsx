/**
 * ServiceDetailTemplate
 *
 * Reusable template for residential service detail pages.
 * Combines Google-style gbp-clone-v5 components with existing
 * ServiceTabs and ProcessFlow components.
 *
 * Page Section Order:
 * 1. Hero - Hero.tsx with floating trust elements
 * 2. FeatureTabs - Auto-cycling Google-style tabs
 * 3. Why Choose Flood Doctor - ServiceTabs (existing component)
 * 4. Our Process - ProcessFlow (existing component with isometric tiles)
 * 5. Getting Started - GettingStarted.tsx
 * 6. FAQ - FAQ.tsx with accordion
 * 7. Expert Partnership CTA - ExpertPartnership.tsx
 * 8. Related Services - RelatedTools.tsx
 */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageMeta from '../../components/seo/PageMeta';

// GBP Clone V5 Components
import { Hero, HeroContent } from './Hero';
import { FeatureTabs } from './FeatureTabs';
import { GettingStarted } from './GettingStarted';
import { FAQ } from './FAQ';
import { ExpertPartnership } from './ExpertPartnership';
import { RelatedTools } from './RelatedTools';

// Existing components to reuse
import ServiceTabs from '../../generated-layouts/service-page/ServiceTabs';
import ProcessFlow from '../../components/sections/ProcessFlow';

// Types and adapter
import { ServicePageContent, WhyChooseTab, ServiceHeroContent } from './types';
import { TabItem } from '../../generated-layouts/service-page/types';
import { getServicePageContent, adaptServiceToPageContent } from './adapter';

// Data
import { SERVICES } from '../../data/services';

/**
 * Map ServiceHeroContent to HeroContent for pixel-perfect Hero component
 */
function mapToHeroContent(hero: ServiceHeroContent): HeroContent {
  return {
    title: hero.headline || hero.title,
    subtitle: hero.description,
    ctaText: hero.ctaText,
    ctaHref: hero.ctaHref,
    heroImage: hero.heroImage,
    heroImageWebp: hero.heroImageWebp,
    heroImageAlt: hero.heroImageAlt,
  };
}

/**
 * Map WhyChooseTab to TabItem for ServiceTabs component
 */
function mapWhyChooseToTabItem(tabs: WhyChooseTab[]): TabItem[] {
  return tabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    title: tab.title,
    description: tab.description,
    listItems: tab.listItems,
    icon: tab.icon,
  }));
}

/**
 * Generate FAQ Schema for SEO
 */
function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Service Schema for SEO
 */
function generateServiceSchema(content: ServicePageContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: content.hero.title,
    description: content.meta.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Flood Doctor',
      telephone: content.hero.phone,
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 38.8462,
          longitude: -77.3064,
        },
        geoRadius: '50 mi',
      },
    },
    serviceType: content.hero.title,
  };
}

export interface ServiceDetailTemplateProps {
  /** Service slug - if not provided, will be read from URL params */
  slug?: string;
  /** Pre-loaded content - if not provided, will be loaded from adapter */
  content?: ServicePageContent;
}

export const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({
  slug: propSlug,
  content: propContent,
}) => {
  // Get slug from URL params if not provided via props
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const slug = propSlug || paramSlug || 'water-damage-restoration';

  // Get content from adapter if not provided
  const content = propContent || getServicePageContent(slug, SERVICES);

  // Handle missing service
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-gray-900 mb-2">Service Not Found</h1>
          <p className="text-gray-500">The requested service "{slug}" could not be found.</p>
        </div>
      </div>
    );
  }

  // Map WhyChooseTabs for ServiceTabs component
  const serviceTabItems = mapWhyChooseToTabItem(content.whyChooseTabs);

  // Generate schemas
  const faqSchema = generateFAQSchema(content.faqs);
  const serviceSchema = generateServiceSchema(content);

  // Inject schema scripts
  useEffect(() => {
    // FAQ Schema
    const faqScriptId = 'service-faq-schema';
    let faqScript = document.getElementById(faqScriptId);
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.id = faqScriptId;
      faqScript.type = 'application/ld+json';
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);

    // Service Schema
    const serviceScriptId = 'service-schema';
    let serviceScript = document.getElementById(serviceScriptId);
    if (!serviceScript) {
      serviceScript = document.createElement('script');
      serviceScript.id = serviceScriptId;
      serviceScript.type = 'application/ld+json';
      document.head.appendChild(serviceScript);
    }
    serviceScript.textContent = JSON.stringify(serviceSchema);

    return () => {
      // Cleanup on unmount
      const faqEl = document.getElementById(faqScriptId);
      const serviceEl = document.getElementById(serviceScriptId);
      if (faqEl) faqEl.remove();
      if (serviceEl) serviceEl.remove();
    };
  }, [faqSchema, serviceSchema]);

  return (
    <>
      {/* SEO Meta Tags */}
      <PageMeta
        title={content.meta.title.replace(' | Flood Doctor | Northern Virginia', '')}
        description={content.meta.description}
        path={`/services/residential/${content.serviceSlug}/`}
        image={content.hero.heroImage}
      />

      {/* Page Content */}
      <main className="min-h-screen bg-white">
        {/* 1. Hero Section - Pixel-perfect Google clone */}
        <Hero content={mapToHeroContent(content.hero)} />

        {/* 2. Feature Tabs - Google-style auto-cycling */}
        <FeatureTabs
          tabs={content.processTabs}
          autoPlayInterval={6000}
        />

        {/* 3. Why Choose Flood Doctor - Existing ServiceTabs component */}
        <ServiceTabs tabs={serviceTabItems} />

        {/* 4. Our Process - Existing ProcessFlow with isometric tiles */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <ProcessFlow serviceSlug={content.serviceSlug} />
          </div>
        </section>

        {/* 5. Getting Started */}
        <GettingStarted content={content.gettingStarted} />

        {/* 6. FAQ Section */}
        <FAQ
          faqs={content.faqs}
          title={`${content.hero.title} FAQ`}
          showExpandAll={true}
        />

        {/* 7. Expert Partnership CTA */}
        <ExpertPartnership content={content.expertPartnership} />

        {/* 8. Related Services */}
        {content.relatedServices.length > 0 && (
          <RelatedTools
            services={content.relatedServices}
            title="Related Restoration Services"
            subtitle="Explore other services that complement your restoration needs."
          />
        )}
      </main>
    </>
  );
};

export default ServiceDetailTemplate;
