import React, { useState, useEffect } from 'react';
import { ServiceData } from '../../types';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ServiceDetailHeroAnimation from '../../components/graphics/ServiceDetailHeroAnimation';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import ServiceAreaLinks from '../../components/sections/ServiceAreaLinks';
import RelatedServices from '../../components/sections/RelatedServices';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import { CheckCircle2, AlertTriangle, Phone, ArrowRight } from 'lucide-react';

interface ServiceDetailProps {
  service: ServiceData;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  // Breadcrumbs construction
  const breadcrumbs = [
    { label: 'Services', path: '/services/' },
    {
      label: service.audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial',
      path: `/services/${service.audience.toLowerCase()}/`
    },
    { label: service.title, path: '#' }
  ];

  // Sticky Nav Logic
  const [activeSection, setActiveSection] = useState('overview');
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    { id: 'specs', label: 'Details' },
    { id: 'faq', label: 'FAQ' },
  ];

  // Handle scroll manually
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 128;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // FAQ Schema
  const faqSchema = service.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : undefined;

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={service.title}
        description={service.shortDescription}
        schema={faqSchema}
      />

      {/* Hero Section - Google Split Layout */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-20">

            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              {/* Breadcrumbs */}
              <div className="mb-6">
                <Breadcrumbs items={breadcrumbs} />
              </div>

              {/* H1 - Google: 60px/72px desktop */}
              <h1 className="text-[32px] md:text-[44px] lg:text-[48px] leading-[40px] md:leading-[52px] lg:leading-[56px] font-normal text-[#202124] mb-4">
                {service.heroHeading || service.title}
              </h1>

              {/* Body text - Google: 16px/24px */}
              <p className="text-base text-[#3c4043] leading-6 mb-8 max-w-md">
                {service.heroIntro || service.shortDescription}
              </p>

              {/* CTAs - Hidden on mobile, shown at bottom as sticky */}
              <div className="hidden lg:flex flex-row gap-3">
                <Button href="tel:8774970007" variant="primary" size="md">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
                <Button to="/request/" variant="secondary" size="md">
                  Request Service
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-[#dadce0] hidden lg:block">
                <div className="flex flex-wrap items-center gap-6 text-sm text-[#5f6368]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#34a853]" />
                    <span>60-min response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#34a853]" />
                    <span>IICRC Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#34a853]" />
                    <span>Insurance billing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <ServiceDetailHeroAnimation visualKey={service.heroVisualKey} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sticky Navigation - Google style: 64px, clean */}
      <div className="sticky top-[64px] z-30 bg-white border-b border-[#dadce0] hidden lg:block">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16">
          <nav className="flex items-center gap-8 h-12">
            {sections.map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`text-sm font-medium transition-colors h-full flex items-center border-b-2 -mb-px ${
                  activeSection === section.id
                    ? 'text-[#1a73e8] border-[#1a73e8]'
                    : 'text-[#5f6368] border-transparent hover:text-[#202124]'
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Overview Section */}
      <Section id="overview" background="gray" padding="lg">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-[24px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[44px] font-normal text-[#202124] mb-4">
              When to call for {service.title.toLowerCase()}
            </h2>
            {service.intro_whenToCall && (
              <p className="text-base text-[#3c4043] leading-6 max-w-2xl mx-auto">
                {service.intro_whenToCall}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Scenarios Grid - Google card style */}
        {service.whenToCall && (
          <AnimatedSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whenToCall.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[24px] p-6 hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] transition-all duration-200 heading-section"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#e8f0fe] rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} className="text-[#1a73e8]" />
                    </div>
                    <p className="text-base text-[#202124] leading-6 pt-2">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </Section>

      {/* Process Section */}
      <Section id="process" background="white" padding="lg">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-[24px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[44px] font-normal text-[#202124] mb-4">
              How it works
            </h2>
            <p className="text-base text-[#3c4043] leading-6 max-w-2xl mx-auto">
              Our proven restoration process ensures thorough, documented results.
            </p>
          </div>
        </AnimatedSection>

        {/* Process Steps - Google numbered card style */}
        {service.whatWeDo && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatWeDo.map((step, i) => {
              const [title, desc] = step.includes(':') ? step.split(':') : [step, ''];
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="bg-[#f8f9fa] rounded-[24px] p-8 h-full">
                    {/* Step number */}
                    <div className="w-12 h-12 bg-[#e8f0fe] rounded-full flex items-center justify-center mb-6">
                      <span className="text-[#1a73e8] text-[20px] font-medium">{i + 1}</span>
                    </div>
                    {/* H4 - Google: 20px/28px */}
                    <h3 className="text-[20px] font-medium text-[#202124] leading-7 mb-2">
                      {title.trim()}
                    </h3>
                    {desc && (
                      <p className="text-base text-[#3c4043] leading-6">
                        {desc.trim()}
                      </p>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        )}
      </Section>

      {/* Tech Specs & Safety - Alternating Feature Sections */}
      <Section id="specs" background="gray" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Tech Specs */}
          <AnimatedSection>
            <div>
              <h2 className="text-[24px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[44px] font-normal text-[#202124] mb-8">
                Technical details
              </h2>

              <div className="space-y-4">
                {service.whatToExpect && Object.entries(service.whatToExpect).map(([key, value]) => (
                  <div key={key} className="bg-white rounded-[24px] p-6">
                    <div className="text-sm font-medium text-[#5f6368] uppercase tracking-wide mb-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-base text-[#202124] leading-6">
                      {value}
                    </div>
                  </div>
                ))}
                <div className="bg-white rounded-[24px] p-6">
                  <div className="text-sm font-medium text-[#5f6368] uppercase tracking-wide mb-1">
                    Equipment Grade
                  </div>
                  <div className="text-base text-[#202124] leading-6">
                    Commercial LGR / HEPA Filtration
                  </div>
                </div>
                <div className="bg-white rounded-[24px] p-6">
                  <div className="text-sm font-medium text-[#5f6368] uppercase tracking-wide mb-1">
                    Certification
                  </div>
                  <div className="text-base text-[#202124] leading-6">
                    IICRC S500 / S520 Standards
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Safety Info */}
          {service.safety && (
            <AnimatedSection delay={100}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-[#fce8e6] rounded-full flex items-center justify-center">
                    <AlertTriangle size={20} className="text-[#d93025]" />
                  </div>
                  <h2 className="text-[24px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[44px] font-normal text-[#202124]">
                    Safety protocols
                  </h2>
                </div>

                <div className="space-y-3">
                  {service.safety.items.slice(0, 6).map((item, i) => (
                    <div key={i} className="bg-white rounded-[24px] p-5 flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#d93025] mt-2 shrink-0" />
                      <p className="text-base text-[#3c4043] leading-6">{item}</p>
                    </div>
                  ))}
                </div>

                {service.safety.kidsPets && (
                  <div className="mt-6 bg-white rounded-[24px] p-6 border-l-4 border-[#fbbc04]">
                    <h4 className="text-sm font-medium text-[#202124] mb-2">Family Safety Note</h4>
                    <p className="text-base text-[#3c4043] leading-6">{service.safety.kidsPets}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          )}

        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" background="white" padding="lg">
        <AnimatedSection>
          {service.faqs && (
            <GoogleStyleFAQ
              data={service.faqs}
              title={`${service.title} FAQ`}
            />
          )}
        </AnimatedSection>
      </Section>

      {/* Related Services */}
      <Section background="gray" padding="lg">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-[24px] md:text-[28px] lg:text-[36px] leading-[32px] md:leading-[36px] lg:leading-[44px] font-normal text-[#202124] mb-4">
              Related services
            </h2>
            <p className="text-base text-[#3c4043] leading-6 max-w-2xl mx-auto">
              Explore other restoration services we offer.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <RelatedServices
            currentServiceId={service.id}
            category={service.category}
            audience={service.audience}
          />
        </AnimatedSection>
      </Section>

      {/* Service Areas */}
      <ServiceAreaLinks />

      {/* Mobile Sticky CTA - Single pill button like Google */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#dadce0] px-4 py-3 lg:hidden z-40 pb-safe">
        <Button to="/request/" variant="primary" fullWidth className="h-12">
          Get started
        </Button>
      </div>

      {/* Mobile bottom spacer */}
      <div className="h-20 lg:hidden" />
    </main>
  );
};

export default ServiceDetail;
