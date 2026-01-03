// components/city/NeighborhoodPageRenderer.tsx
// Renders city-specific neighborhood page content from TypeScript content files
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Clock,
  Shield,
  Star,
  ArrowRight,
  MapPin,
  Home,
  CheckCircle,
  ExternalLink,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import PageMeta from '../ui/PageMeta';

// NeighborhoodPageContent interface matches src/content/cities/{city}/neighborhoods/*.ts
export interface NeighborhoodPageContent {
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  h1: string;
  heroSection: {
    headline: string;
    subheadline: string;
    responseTime: string;
    backgroundImage?: string;
  };
  neighborhoodIntro: {
    paragraph: string;
    housingTypes: string[];
    commonIssues: string[];
  };
  hyperLocalContent: {
    landmarks: string[];
    schools: string[];
    subdivisions: string[];
    localFacts: string[];
  };
  serviceList: Array<{
    name: string;
    description: string;
  }>;
  testimonialSection: {
    headline: string;
    testimonials: Array<{
      quote: string;
      author: string;
      location: string;
      service: string;
    }>;
  };
  emergencySection: {
    headline: string;
    localContacts: Array<{
      name: string;
      phone: string;
      url: string;
    }>;
    responseNote: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  breadcrumbs: Array<{
    label: string;
    url: string;
  }>;
}

interface NeighborhoodPageRendererProps {
  content: NeighborhoodPageContent;
  cityName: string;
  citySlug: string;
  phone: string;
}

const NeighborhoodPageRenderer: React.FC<NeighborhoodPageRendererProps> = ({
  content,
  cityName,
  citySlug,
  phone
}) => {
  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faq.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={content.meta.title}
        description={content.meta.description}
        structuredData={faqSchema}
      />

      {/* Breadcrumbs */}
      <nav className="bg-[#f8f9fa] border-b border-[#dadce0]">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px] py-3">
          <ol className="flex items-center gap-2 text-[14px] text-[#5f6368]">
            {content.breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-4 h-4" />}
                {idx === content.breadcrumbs.length - 1 ? (
                  <span className="text-[#202124] font-medium">{crumb.label}</span>
                ) : (
                  <Link to={crumb.url} className="hover:text-[#1a73e8] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">{cityName}</span>
            </div>

            <h1 className="text-[32px] sm:text-[40px] lg:text-[56px] font-normal tracking-[-0.5px] text-white mb-6">
              {content.h1}
            </h1>

            <p className="text-xl text-gray-300 mb-4">
              {content.heroSection.headline}
            </p>
            <p className="text-lg text-gray-400 mb-8">
              {content.heroSection.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-3 bg-[#1a73e8] hover:bg-blue-700 h-12 px-8 rounded-full font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                {phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 h-12 px-8 rounded-full font-semibold transition-all border border-white/20"
              >
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span>{content.heroSection.responseTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>IICRC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Intro */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {content.neighborhoodIntro.paragraph.split('\n\n').map((para, idx) => (
                  <p key={idx} className="text-[18px] lg:text-[20px] text-[#5f6368] mb-6 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Housing Types */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#dadce0]">
                <div className="flex items-center gap-2 mb-4">
                  <Home className="w-5 h-5 text-[#1a73e8]" />
                  <h3 className="text-[16px] font-semibold text-[#202124]">Housing Types</h3>
                </div>
                <ul className="space-y-2">
                  {content.neighborhoodIntro.housingTypes.map((type, idx) => (
                    <li key={idx} className="text-[14px] text-[#5f6368]">{type}</li>
                  ))}
                </ul>
              </div>

              {/* Common Issues */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <h3 className="text-[16px] font-semibold text-[#202124]">Common Issues</h3>
                </div>
                <ul className="space-y-2">
                  {content.neighborhoodIntro.commonIssues.map((issue, idx) => (
                    <li key={idx} className="text-[14px] text-amber-900">{issue}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hyper-Local Content */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] text-[#202124] mb-12">
            Serving Every Corner of {content.breadcrumbs[content.breadcrumbs.length - 1].label}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Landmarks */}
            <div className="bg-white rounded-xl p-6 border border-[#dadce0]">
              <h3 className="text-[14px] font-semibold text-[#5f6368] uppercase tracking-wide mb-4">Landmarks</h3>
              <ul className="space-y-2">
                {content.hyperLocalContent.landmarks.map((item, idx) => (
                  <li key={idx} className="text-[14px] text-[#202124]">{item}</li>
                ))}
              </ul>
            </div>

            {/* Schools */}
            <div className="bg-white rounded-xl p-6 border border-[#dadce0]">
              <h3 className="text-[14px] font-semibold text-[#5f6368] uppercase tracking-wide mb-4">Schools</h3>
              <ul className="space-y-2">
                {content.hyperLocalContent.schools.map((item, idx) => (
                  <li key={idx} className="text-[14px] text-[#202124]">{item}</li>
                ))}
              </ul>
            </div>

            {/* Subdivisions */}
            <div className="bg-white rounded-xl p-6 border border-[#dadce0]">
              <h3 className="text-[14px] font-semibold text-[#5f6368] uppercase tracking-wide mb-4">Subdivisions</h3>
              <ul className="space-y-2">
                {content.hyperLocalContent.subdivisions.map((item, idx) => (
                  <li key={idx} className="text-[14px] text-[#202124]">{item}</li>
                ))}
              </ul>
            </div>

            {/* Local Facts */}
            <div className="bg-white rounded-xl p-6 border border-[#dadce0]">
              <h3 className="text-[14px] font-semibold text-[#5f6368] uppercase tracking-wide mb-4">Quick Facts</h3>
              <ul className="space-y-2">
                {content.hyperLocalContent.localFacts.map((item, idx) => (
                  <li key={idx} className="text-[14px] text-[#202124]">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] text-[#202124] mb-12">
            Our Services in {content.breadcrumbs[content.breadcrumbs.length - 1].label}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {content.serviceList.map((service, idx) => (
              <div key={idx} className="bg-[#f8f9fa] rounded-xl p-6 border border-[#dadce0]">
                <h3 className="text-[18px] font-semibold text-[#202124] mb-3">{service.name}</h3>
                <p className="text-[16px] text-[#5f6368]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {content.testimonialSection.testimonials.length > 0 && (
        <section className="py-20 lg:py-28 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] text-[#202124] mb-12">
              {content.testimonialSection.headline}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {content.testimonialSection.testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 border border-[#dadce0]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-[16px] text-[#5f6368] italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-[14px]">
                    <div className="font-semibold text-[#202124]">— {testimonial.author}</div>
                    <div className="text-[#5f6368]">{testimonial.location} • {testimonial.service}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Emergency Contacts */}
      <section className="py-16 bg-red-50 border-y border-red-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <h2 className="text-[24px] font-semibold text-[#202124] mb-6">
            {content.emergencySection.headline}
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {content.emergencySection.localContacts.map((contact, idx) => (
              <a
                key={idx}
                href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-between bg-white rounded-lg p-4 border border-red-200 hover:border-red-400 transition-colors"
              >
                <div>
                  <div className="text-[14px] font-semibold text-[#202124]">{contact.name}</div>
                  <div className="text-[14px] text-[#1a73e8]">{contact.phone}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#5f6368]" />
              </a>
            ))}
          </div>

          <p className="text-[14px] text-red-900">{content.emergencySection.responseNote}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-[72px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] text-[#202124] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {content.faq.map((faq, idx) => (
              <div key={idx} className="bg-[#f8f9fa] rounded-xl p-6 border border-[#dadce0]">
                <h3 className="text-[18px] font-semibold text-[#202124] mb-3">{faq.question}</h3>
                <p className="text-[16px] text-[#5f6368] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[#1a73e8] to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] mb-6">
            Water Emergency in {content.breadcrumbs[content.breadcrumbs.length - 1].label}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {content.heroSection.responseTime}. Call now for immediate help.
          </p>
          <a
            href={`tel:${phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center justify-center gap-3 bg-white text-[#1a73e8] h-14 px-10 rounded-full font-bold text-xl hover:bg-blue-50 transition-all"
          >
            <Phone className="w-6 h-6" />
            {phone}
          </a>
        </div>
      </section>

      {/* Back to City */}
      <section className="py-8 bg-[#f8f9fa] border-t border-[#dadce0]">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <Link
            to={`/city/${citySlug}`}
            className="inline-flex items-center gap-2 text-[#1a73e8] font-medium hover:underline"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to {cityName} Water Damage Services
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NeighborhoodPageRenderer;
