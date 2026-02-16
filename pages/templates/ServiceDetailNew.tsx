import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PageMeta from '../../components/ui/PageMeta';
import { ServiceData } from '../../types';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../components/sections/RelatedServices';
import { useFranchise } from '@/hooks/useFranchise';
import { adaptServiceToPageData } from '../../utils/adapters';
import { generateServicePageSchema } from '../../utils/schema';

// Generated Layout Components
import ServiceHeroCompact from '../../generated-layouts/service-page/ServiceHeroCompact';
import ServiceQuickFacts from '../../generated-layouts/service-page/ServiceQuickFacts';
import ServiceProblemSolution from '../../generated-layouts/service-page/ServiceProblemSolution';
import ServiceTabs from '../../generated-layouts/service-page/ServiceTabs';
import ServiceDetailedContent from '../../generated-layouts/service-page/ServiceDetailedContent';
import ServiceTestimonials from '../../generated-layouts/service-page/ServiceTestimonials';
import ServicePricing from '../../generated-layouts/service-page/ServicePricing';
import ServiceCTASticky from '../../generated-layouts/service-page/ServiceCTASticky';

// V14 Components
import ProcessFlow from '../../components/sections/ProcessFlow';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import EmergencyServiceCard from '../../components/ui/EmergencyServiceCard';
import ServiceDetailHeroAnimation from '../../components/graphics/ServiceDetailHeroAnimation';

// Hero Tile Mapping (for services with custom isometric tiles)
import { getHeroTileBySlug } from '../../data/serviceHeroTiles';

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
    ? `${serviceName} ${cityName}, ${stateAbbr} | 24/7 Emergency`
    : `${serviceName}`;

  const metaDescription = isLocalPage
    ? `Professional ${serviceName.toLowerCase()} in ${cityName}, ${stateAbbr}. ${franchise.responseTime || '60-minute response'}. IICRC certified. Call ${emergencyPhone} for 24/7 emergency service.`
    : (service?.metaDescription || pageData.subtitle);

  // Service + BreadcrumbList + FAQ schema
  const schema = generateServicePageSchema(
    {
      name: serviceName,
      description: metaDescription,
      slug: service.slug || '/',
      serviceType: 'Water Damage Restoration',
    },
    [
      { label: 'Services', path: '/services/' },
      { label: serviceName, path: service.slug || '/' },
    ],
    pageData.faqs.length > 0 ? pageData.faqs : undefined
  );

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

  // Extract service slug (last segment of URL path, without trailing slash)
  const serviceSlug = service.slug?.split('/').filter(Boolean).pop() || '';

  // Check if this service has a custom hero tile (isometric PNG instead of SVG)
  const heroTile = getHeroTileBySlug(serviceSlug);

  // Render hero visual: custom hero image (with WebP) or default SVG animation
  const heroVisual = heroTile ? (
    <picture>
      <source srcSet={heroTile.webp} type="image/webp" />
      <img
        src={heroTile.image}
        alt={heroTile.alt}
        className="w-full max-w-lg rounded-2xl shadow-xl"
        loading="eager"
      />
    </picture>
  ) : (
    <ServiceDetailHeroAnimation visualKey={service.heroVisualKey} className="w-full max-w-md" />
  );

  return (
    <main className="flex-grow bg-white pb-20 md:pb-0">
      <PageMeta
        title={metaTitle}
        description={metaDescription}
        schema={schema}
      />

      {/* Hero Section with V14 Visual */}
      <div ref={heroRef}>
        <ServiceHeroCompact
          title={isLocalPage ? `${serviceName} in ${cityName}` : pageData.title}
          titleHighlight={pageData.titleHighlight}
          subtitle={pageData.subtitle}
          badges={pageData.badges}
          emergencyPhone={emergencyPhone}
          onCtaClick={handleCtaClick}
          visual={heroVisual}
        />
      </div>

      {/* Quick Facts Bar */}
      <ServiceQuickFacts facts={pageData.quickFacts} />

      {/* Problem vs Solution Section */}
      <ServiceProblemSolution data={pageData.problemSolution} />

      {/* Tabbed Content (Technology, Insurance, Team, Guarantee) */}
      <ServiceTabs tabs={pageData.tabs} />

      {/* V14 Process Section with Service-Specific Isometric Graphics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* ProcessFlow now handles its own header with service-specific title */}
            <ProcessFlow serviceSlug={service.slug} />
          </div>
        </div>
      </section>

      {/* Two-Column Layout: Content + Emergency Sidebar */}
      <section className="py-12 md:py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">

            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Content Sections (if available) */}
              {pageData.detailedContent.length > 0 && (
                <ServiceDetailedContent sections={pageData.detailedContent} />
              )}

              {/* Testimonials */}
              <ServiceTestimonials testimonials={pageData.testimonials} />

              {/* Pricing / Free Inspection CTA */}
              <ServicePricing pricing={pageData.pricing} onCtaClick={handleCtaClick} />

              {/* V14 FAQ Section with Expand All */}
              <GoogleStyleFAQ
                data={pageData.faqs}
                title="Frequently asked questions"
                className="py-8 bg-white rounded-2xl border border-gray-100"
              />
            </div>

            {/* Sticky Sidebar with EmergencyServiceCard */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <EmergencyServiceCard variant="expanded" />

                {/* Quick CTA */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">Need immediate help?</h3>
                  <p className="text-sm text-gray-500 mb-4">Our technicians are standing by 24/7 for emergency service.</p>
                  <a
                    href={`tel:${emergencyPhone.replace(/\D/g,'')}`}
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primaryHover text-white py-3 px-4 rounded-full font-semibold transition-colors"
                  >
                    Call {emergencyPhone}
                  </a>
                  <button
                    onClick={handleCtaClick}
                    className="w-full mt-3 text-primary hover:text-primaryHover text-sm font-medium"
                  >
                    Or request online →
                  </button>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

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
