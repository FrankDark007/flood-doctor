import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PageMeta from '../../components/ui/PageMeta';
import { ServiceData } from '../../types';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../components/sections/RelatedServices';
import { useFranchise } from '@/hooks/useFranchise';
import { adaptServiceToPageData } from '../../utils/adapters';

// Generated Layout Components
import ServiceHeroCompact from '../../generated-layouts/service-page/ServiceHeroCompact';
import ServiceQuickFacts from '../../generated-layouts/service-page/ServiceQuickFacts';
import ServiceProblemSolution from '../../generated-layouts/service-page/ServiceProblemSolution';
import ServiceTabs from '../../generated-layouts/service-page/ServiceTabs';
import ServiceProcessMini from '../../generated-layouts/service-page/ServiceProcessMini';
import ServiceDetailedContent from '../../generated-layouts/service-page/ServiceDetailedContent';
import ServiceTestimonials from '../../generated-layouts/service-page/ServiceTestimonials';
import ServicePricing from '../../generated-layouts/service-page/ServicePricing';
import ServiceFAQCompact from '../../generated-layouts/service-page/ServiceFAQCompact';
import ServiceCTASticky from '../../generated-layouts/service-page/ServiceCTASticky';

/**
 * ServiceDetailNew - Redesigned with Generated Components
 *
 * Uses Google AI Studio generated components for consistent,
 * conversion-optimized design with the Google aesthetic.
 * Preserves SEO and franchise context support.
 */

interface ServiceDetailNewProps {
  service: ServiceData;
}

const ServiceDetailNew: React.FC<ServiceDetailNewProps> = ({ service }) => {
  const navigate = useNavigate();
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Get current city from franchise context for LOCAL SEO
  const franchise = useFranchise();
  const isLocalPage = franchise.id !== 'hq';
  const cityName = isLocalPage ? franchise.name : '';
  const stateAbbr = isLocalPage ? (franchise.state || 'VA') : '';

  const emergencyPhone = franchise.phone || '(877) 497-0007';

  // Transform service data to generated component format
  const pageData = adaptServiceToPageData(service, cityName, emergencyPhone);

  // SEO-CRITICAL: Meta title MUST include city name at the BEGINNING for local SEO
  const serviceName = service?.title || 'Water Damage Restoration';
  const metaTitle = isLocalPage
    ? `${serviceName} ${cityName}, ${stateAbbr} | 24/7 Emergency | Flood Doctor`
    : `${serviceName} | Flood Doctor`;

  const metaDescription = isLocalPage
    ? `Professional ${serviceName.toLowerCase()} in ${cityName}, ${stateAbbr}. ${franchise.responseTime || '60-minute response'}. IICRC certified. Call ${emergencyPhone} for 24/7 emergency service.`
    : (service?.metaDescription || pageData.subtitle);

  // FAQ Schema for SEO
  const faqSchema = pageData.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : undefined;

  // Track when hero scrolls out of view to show sticky CTA
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCTA(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-100px 0px 0px 0px"
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleCtaClick = useCallback(() => {
    navigate('/request/');
  }, [navigate]);

  return (
    <main className="flex-grow bg-white pb-20 md:pb-0">
      <PageMeta
        title={metaTitle}
        description={metaDescription}
        schema={faqSchema}
      />

      {/* Hero Section */}
      <div ref={heroRef}>
        <ServiceHeroCompact
          title={isLocalPage ? `${serviceName} in ${cityName}` : pageData.title}
          subtitle={pageData.subtitle}
          badges={pageData.badges}
          emergencyPhone={emergencyPhone}
          onCtaClick={handleCtaClick}
        />
      </div>

      {/* Quick Facts Bar */}
      <ServiceQuickFacts facts={pageData.quickFacts} />

      {/* Problem vs Solution Section */}
      <ServiceProblemSolution data={pageData.problemSolution} />

      {/* Tabbed Content (Technology, Insurance, Team, Guarantee) */}
      <ServiceTabs tabs={pageData.tabs} />

      {/* Process Steps */}
      <ServiceProcessMini steps={pageData.process} />

      {/* Detailed Content Sections (if available) */}
      {pageData.detailedContent.length > 0 && (
        <ServiceDetailedContent sections={pageData.detailedContent} />
      )}

      {/* Testimonials */}
      <ServiceTestimonials testimonials={pageData.testimonials} />

      {/* Pricing / Free Inspection CTA */}
      <ServicePricing pricing={pageData.pricing} onCtaClick={handleCtaClick} />

      {/* FAQ Section */}
      <ServiceFAQCompact faqs={pageData.faqs} />

      {/* Related Services */}
      <RelatedServices
        currentServiceId={service.id}
        category={service.category}
        audience={service.audience}
      />

      {/* Service Area Links */}
      <ServiceAreaLinks serviceTitle={service.title} serviceSlug={service.slug} />

      {/* Sticky Bottom CTA (appears when hero scrolls out) */}
      <ServiceCTASticky
        isVisible={showStickyCTA}
        emergencyPhone={emergencyPhone}
        onCtaClick={handleCtaClick}
      />
    </main>
  );
};

export default ServiceDetailNew;
