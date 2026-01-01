import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LocationData } from '../../types';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import AnimatedSection from '../../components/ui/AnimatedSection';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import { generateLocationPageSchema } from '../../utils/schema';
import { Phone, ArrowRight, CheckCircle2, MapPin, Clock, Shield, Users, Zap, BarChart3, CreditCard } from 'lucide-react';

interface LocationDetailProps {
  location: LocationData;
}

// Testimonials by area
const TESTIMONIALS = [
  {
    quote: "Flood Doctor arrived within an hour and had equipment running immediately. Professional team that truly cares.",
    author: "Sarah M.",
    role: "Homeowner",
    stat: "60min response",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "They handled everything with insurance. I didn't have to worry about a single document or phone call.",
    author: "Mike T.",
    role: "Property Manager",
    stat: "$0 out of pocket",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  }
];

// Services offered
const SERVICES_OFFERED = [
  { title: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/' },
  { title: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/' },
  { title: 'Mold Remediation', path: '/services/residential/cleanup-services/mold-remediation/' },
  { title: 'Fire & Smoke Cleanup', path: '/services/residential/cleanup-services/fire-smoke-cleanup/' },
  { title: 'Sewage Cleanup', path: '/services/residential/cleanup-services/sewage-cleanup/' },
  { title: 'Storm Damage', path: '/services/residential/restoration-services/storm-damage-restoration/' },
];

const LocationDetailGoogle: React.FC<LocationDetailProps> = ({ location }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Locations', path: '/locations/' },
    { label: location.title, path: '#' }
  ];

  // Build structured data schema (BreadcrumbList + LocalBusiness + FAQPage)
  const breadcrumbItems = [
    { label: 'Locations', path: '/locations/' },
    { label: location.title, path: location.slug }
  ];

  const combinedSchema = generateLocationPageSchema(
    {
      name: location.title,
      description: location.description,
      latitude: location.geo?.latitude,
      longitude: location.geo?.longitude,
      slug: location.slug,
      address: location.county ? {
        addressLocality: location.title,
        addressRegion: 'VA',
        addressCountry: 'US',
      } : undefined,
    },
    breadcrumbItems,
    location.faqs
  );

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`Water Damage Restoration ${location.title}, VA | Flood Doctor`}
        description={location.description || `24/7 emergency water damage restoration in ${location.title}, VA. Fast response, IICRC certified, direct insurance billing. Call (877) 497-0007.`}
        schema={combinedSchema}
        geo={{
          region: 'US-VA',
          placename: location.title,
          ...(location.geo?.latitude && location.geo?.longitude && {
            position: `${location.geo.latitude};${location.geo.longitude}`,
          }),
        }}
      />

      {/* Hero Section - Google Style */}
      <section className="bg-white">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-20">

            {/* Left: Content */}
            <AnimatedSection className="flex flex-col justify-center order-2 lg:order-1">
              <Breadcrumbs items={breadcrumbs} className="mb-6" />

              {/* Location badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e8f0fe] rounded-full text-[#1a73e8] text-sm font-medium mb-4 w-fit">
                <MapPin size={14} />
                {location.county}
              </div>

              {/* Headline */}
              <h1 className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] font-normal text-[#202124] mb-6 heading-hero">
                Water Damage Restoration in {location.title}
              </h1>

              {/* Subtext */}
              <p className="text-lg text-[#5f6368] leading-relaxed mb-8 max-w-lg">
                {location.description}
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href="tel:8774970007"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a73e8] text-white text-base font-medium rounded-full hover:bg-[#1557b0] transition-colors heading-section"
                >
                  <Phone size={18} />
                  Call now
                </a>
                <Link
                  to="/request/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1a73e8] text-base font-medium rounded-full border border-[#dadce0] hover:bg-[#f8f9fa] transition-colors heading-section"
                >
                  Schedule assessment
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#5f6368]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#34a853]" />
                  <span>{location.responseTime} response</span>
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

            {/* Right: Map/Location Visual */}
            <AnimatedSection delay={200} animation="fade-in" className="flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[500px] aspect-square">
                {/* Circular background */}
                <div className="absolute inset-0 bg-[#e8f0fe] rounded-full" />
                {/* Location Pin Graphic */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-[#1a73e8] rounded-full flex items-center justify-center">
                      <MapPin size={48} className="text-white" />
                    </div>
                    <div className="text-2xl font-medium text-[#202124] mb-1">{location.title}, VA</div>
                    <div className="text-[#5f6368]">{location.zip}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f8f9fa] py-12 lg:py-16">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection>
              <div className="flex flex-col items-center">
                <Clock size={32} className="text-[#1a73e8] mb-3" />
                <div className="text-[32px] lg:text-[40px] font-normal text-[#202124] leading-none mb-1">
                  {location.responseTime}
                </div>
                <div className="text-sm text-[#5f6368]">Avg. response time</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="flex flex-col items-center">
                <Shield size={32} className="text-[#1a73e8] mb-3" />
                <div className="text-[32px] lg:text-[40px] font-normal text-[#202124] leading-none mb-1">
                  100%
                </div>
                <div className="text-sm text-[#5f6368]">Licensed & insured</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="flex flex-col items-center">
                <Users size={32} className="text-[#1a73e8] mb-3" />
                <div className="text-[32px] lg:text-[40px] font-normal text-[#202124] leading-none mb-1">
                  {location.population}
                </div>
                <div className="text-sm text-[#5f6368]">Residents served</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="flex flex-col items-center">
                <CheckCircle2 size={32} className="text-[#1a73e8] mb-3" />
                <div className="text-[32px] lg:text-[40px] font-normal text-[#202124] leading-none mb-1">
                  4.9
                </div>
                <div className="text-sm text-[#5f6368]">Google rating</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4 heading-section">
                Why {location.title} chooses Flood Doctor
              </h2>
              <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
                Local expertise combined with professional-grade equipment and IICRC-certified technicians.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Rapid local response',
                desc: `Our ${location.title} team averages ${location.responseTime} response times. We know the area and can reach you fast.`
              },
              {
                icon: BarChart3,
                title: 'Real-time updates',
                desc: 'Track your restoration progress with live moisture readings and photo documentation through our customer portal.'
              },
              {
                icon: CreditCard,
                title: 'Insurance handled',
                desc: 'We work directly with your insurance company and handle all the paperwork. Most customers pay nothing out of pocket.'
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

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4 heading-section">
                Services in {location.title}
              </h2>
              <p className="text-lg text-[#5f6368]">
                Complete water damage restoration and related services.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_OFFERED.map((service, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <Link
                  to={service.path}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#dadce0] hover:border-[#1a73e8] hover:shadow-sm transition-all group heading-section"
                >
                  <span className="text-[#202124] font-medium">{service.title}</span>
                  <ArrowRight size={18} className="text-[#5f6368] group-hover:text-[#1a73e8] transition-colors" />
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300} className="text-center mt-8">
            <Link
              to="/services/"
              className="inline-flex items-center gap-2 text-[#1a73e8] font-medium hover:underline heading-section"
            >
              View all services
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4 heading-section">
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
                      className="w-12 h-12 rounded-full object-cover heading-section"
                    />
                    <div>
                      <div className="font-medium text-[#202124]">
                        {TESTIMONIALS[activeTestimonial].author}
                      </div>
                      <div className="text-sm text-[#5f6368]">
                        {TESTIMONIALS[activeTestimonial].role}, {location.title}
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
      {location.faqs && location.faqs.length > 0 && (
        <section className="py-16 lg:py-24 bg-[#f8f9fa]">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <GoogleStyleFAQ
              data={location.faqs}
              title={`${location.title} water damage FAQ`}
            />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4 heading-section">
              Need water damage help in {location.title}?
            </h2>
            <p className="text-lg text-[#5f6368] mb-8">
              Call now for immediate emergency response or schedule a free assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:8774970007"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a73e8] text-white text-base font-medium rounded-full hover:bg-[#1557b0] transition-colors heading-section"
              >
                <Phone size={18} />
                (877) 497-0007
              </a>
              <Link
                to="/request/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a73e8] text-base font-medium rounded-full border border-[#dadce0] hover:bg-[#f8f9fa] transition-colors heading-section"
              >
                Schedule assessment
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mobile spacer for global sticky CTA */}
      <div className="h-20 lg:hidden" />
    </main>
  );
};

export default LocationDetailGoogle;
