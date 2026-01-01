import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceData } from '../../types';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import AnimatedSection from '../../components/ui/AnimatedSection';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import RelatedServices from '../../components/sections/RelatedServices';
import ProcessInfographic from '../../components/sections/ProcessInfographic';
import { getProcessSteps } from '../../data/processTileMapping';
import { generateServicePageSchema } from '../../utils/schema';
import { Phone, ArrowRight, Play, CheckCircle2, ChevronRight, Zap, BarChart3, CreditCard } from 'lucide-react';

interface ServiceDetailProps {
  service: ServiceData;
}

// Stats data for services
const SERVICE_STATS: Record<string, Array<{value: string; unit: string; label: string}>> = {
  'water-damage-restoration': [
    { value: '60', unit: 'min', label: 'Average response time' },
    { value: '98', unit: '%', label: 'Insurance approval rate' },
    { value: '4.9', unit: '★', label: 'Customer rating' },
  ],
  'mold-remediation': [
    { value: '48', unit: 'hr', label: 'Average completion' },
    { value: '100', unit: '%', label: 'EPA compliant' },
    { value: '4.9', unit: '★', label: 'Customer rating' },
  ],
  'fire-smoke-cleanup': [
    { value: '24', unit: '/7', label: 'Emergency response' },
    { value: '95', unit: '%', label: 'Odor elimination' },
    { value: '4.8', unit: '★', label: 'Customer rating' },
  ],
  'basement-flooding': [
    { value: '45', unit: 'min', label: 'Pump-out start' },
    { value: '99', unit: '%', label: 'Mold prevention' },
    { value: '4.9', unit: '★', label: 'Customer rating' },
  ],
  'default': [
    { value: '24', unit: '/7', label: 'Emergency availability' },
    { value: '100', unit: '%', label: 'Satisfaction guaranteed' },
    { value: '15', unit: 'K+', label: 'Projects completed' },
  ]
};

// Testimonials
const TESTIMONIALS = [
  {
    quote: "Flood Doctor arrived within an hour and had equipment running immediately. Professional team that truly cares.",
    author: "Sarah M.",
    role: "Homeowner",
    location: "Arlington, VA",
    stat: "60min response",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "They handled everything with insurance. I didn't have to worry about a single document or phone call.",
    author: "Mike T.",
    role: "Property Manager",
    location: "Fairfax, VA",
    stat: "$0 out of pocket",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  }
];

// Feature images (using Unsplash for reliability)
const FEATURE_IMAGES = {
  assessment: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop',
  equipment: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop',
  monitoring: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop',
};

const ServiceDetailGoogle: React.FC<ServiceDetailProps> = ({ service }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Services', path: '/services/' },
    {
      label: service.audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial',
      path: `/services/${service.audience.toLowerCase()}/`
    },
    { label: service.title, path: '#' }
  ];

  // Get stats for this service type (extract slug name from full path)
  const slugName = service.slug.split('/').filter(Boolean).pop() || 'default';
  const stats = SERVICE_STATS[slugName as keyof typeof SERVICE_STATS] || SERVICE_STATS.default;

  // Get process steps from tile mapping for this service
  const processSteps = getProcessSteps(service.id);

  // Build structured data schema (BreadcrumbList + Service + FAQPage)
  const breadcrumbItems = [
    { label: 'Services', path: '/services/' },
    {
      label: service.audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial',
      path: `/services/${service.audience.toLowerCase()}/`
    },
    { label: service.title, path: service.slug }
  ];

  const combinedSchema = generateServicePageSchema(
    {
      name: service.title,
      description: service.shortDescription,
      slug: service.slug,
      serviceType: service.category === 'RESTORATION' ? 'Water Damage Restoration'
        : service.category === 'CLEANUP' ? 'Cleanup Services'
        : service.category === 'SPECIALTY' ? 'Specialty Services'
        : 'Technical Services',
    },
    breadcrumbItems,
    service.faqs
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${service.title} | Flood Doctor`}
        description={service.shortDescription}
        schema={combinedSchema}
        canonicalPath={service.slug}
      />

      {/* Hero Section - Google Style 50/50 Split */}
      <section className="bg-white">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-20">

            {/* Left: Content */}
            <AnimatedSection className="flex flex-col justify-center order-2 lg:order-1">
              <Breadcrumbs items={breadcrumbs} className="mb-6" />

              {/* Headline - Google: 48-60px */}
              <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] font-normal text-[#202124] mb-6 heading-hero">
                {service.heroHeading || service.title}
              </h1>

              {/* Subtext - Google: 18px */}
              <p className="text-lg text-[#5f6368] leading-relaxed mb-8 max-w-lg">
                {service.heroIntro || service.shortDescription}
              </p>

              {/* Dual CTAs - Google style */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href="tel:8774970007"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a73e8] text-white text-base font-medium rounded-full hover:bg-[#1557b0] transition-colors"
                >
                  <Phone size={18} />
                  Call now
                </a>
                <Link
                  to="/request/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1a73e8] text-base font-medium rounded-full border border-[#dadce0] hover:bg-[#f8f9fa] transition-colors"
                >
                  Schedule assessment
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#5f6368]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#34a853]" />
                  <span>60-min response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#34a853]" />
                  <span>IICRC Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#34a853]" />
                  <span>Direct insurance billing</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Hero Image */}
            <AnimatedSection delay={200} animation="fade-in" className="flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[500px] aspect-square">
                {/* Circular background */}
                <div className="absolute inset-0 bg-[#e8f0fe] rounded-full" />
                {/* Image */}
                <img
                  src={FEATURE_IMAGES.assessment}
                  alt={service.title}
                  className="relative z-10 w-full h-full object-contain p-8"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section - Google style big numbers */}
      <section className="bg-[#f8f9fa] py-12 lg:py-16">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-[40px] lg:text-[56px] font-normal text-[#1a73e8] leading-none mb-2">
                  {stat.value}<span className="text-[24px] lg:text-[32px]">{stat.unit}</span>
                </div>
                <div className="text-sm text-[#5f6368]">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition - 3 Column Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4 heading-section"
                
              >
                Why choose Flood Doctor
              </h2>
              <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
                Professional restoration backed by technology, certified experts, and a commitment to getting you back to normal fast.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Rapid response',
                desc: 'Our teams are strategically positioned for 60-minute response times across Northern Virginia.'
              },
              {
                icon: BarChart3,
                title: 'Real-time monitoring',
                desc: 'Track your restoration progress with live moisture readings and photo documentation.'
              },
              {
                icon: CreditCard,
                title: 'Insurance handled',
                desc: 'We work directly with your insurance company and handle all the paperwork for you.'
              }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#e8f0fe] rounded-full flex items-center justify-center">
                    <IconComponent size={28} className="text-[#1a73e8]" />
                  </div>
                  <h3 className="text-xl font-medium text-[#202124] mb-3">{item.title}</h3>
                  <p className="text-base text-[#5f6368] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Infographic - Visual step-by-step with isometric tiles */}
      <ProcessInfographic
        steps={processSteps}
        title="Our restoration process"
        subtitle="A proven, systematic approach tailored to your specific situation."
      />

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4 heading-section"
                
              >
                What our customers say
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="max-w-4xl mx-auto">
            <div className="bg-[#f8f9fa] rounded-[24px] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr]">
                {/* Stat side */}
                <div className="bg-[#e8f0fe] p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-[48px] font-normal text-[#1a73e8] leading-none mb-2">
                    {TESTIMONIALS[activeTestimonial].stat.split(' ')[0]}
                  </div>
                  <div className="text-sm text-[#5f6368]">
                    {TESTIMONIALS[activeTestimonial].stat.split(' ').slice(1).join(' ')}
                  </div>
                </div>

                {/* Quote side */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <img
                      src={TESTIMONIALS[activeTestimonial].photo}
                      alt={TESTIMONIALS[activeTestimonial].author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-[#202124]">
                        {TESTIMONIALS[activeTestimonial].author}
                      </div>
                      <div className="text-sm text-[#5f6368]">
                        {TESTIMONIALS[activeTestimonial].role}, {TESTIMONIALS[activeTestimonial].location}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-xl text-[#202124] leading-relaxed">
                    "{TESTIMONIALS[activeTestimonial].quote}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Testimonial dots */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeTestimonial === i ? 'bg-[#1a73e8]' : 'bg-[#dadce0]'
                  }`}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs && (
        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <GoogleStyleFAQ
              data={service.faqs.slice(0, 5)}
              title="Frequently asked questions"
            />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4 heading-section"
              
            >
              Ready to get started?
            </h2>
            <p className="text-lg text-[#5f6368] mb-8">
              Call now for immediate emergency response or schedule a free assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:8774970007"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a73e8] text-white text-base font-medium rounded-full hover:bg-[#1557b0] transition-colors"
              >
                <Phone size={18} />
                (877) 497-0007
              </a>
              <Link
                to="/request/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a73e8] text-base font-medium rounded-full border border-[#dadce0] hover:bg-[#f8f9fa] transition-colors"
              >
                Schedule assessment
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4 heading-section"
                
              >
                Related services
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <RelatedServices
              currentServiceId={service.id}
              category={service.category}
              audience={service.audience}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Mobile spacer for global sticky CTA */}
      <div className="h-20 lg:hidden" />
    </main>
  );
};

export default ServiceDetailGoogle;
