// components/city/ServicePageRenderer.tsx
// Renders city-specific service page content from TypeScript content files
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle,
  Clock,
  Shield,
  Star,
  ArrowRight,
  MapPin,
  Wrench,
  AlertCircle
} from 'lucide-react';
import PageMeta from '../ui/PageMeta';

// ServicePageContent interface matches src/content/cities/{city}/services/*.ts
export interface ServicePageContent {
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  h1: string;
  introSection: {
    headline: string;
    paragraphs: string[];
    localContext: string;
  };
  processSection: {
    headline: string;
    steps: Array<{
      number: number;
      title: string;
      description: string;
      timeframe: string;
    }>;
  };
  localChallenges: {
    headline: string;
    challenges: Array<{
      title: string;
      description: string;
      solution: string;
    }>;
  };
  equipmentSection: {
    headline: string;
    equipment: Array<{
      name: string;
      purpose: string;
      brand?: string;
    }>;
    localNote: string;
  };
  pricingSection: {
    headline: string;
    intro: string;
    factors: string[];
    cta: string;
  };
  serviceAreaSection: {
    headline: string;
    neighborhoods: string[];
    responseTime: string;
  };
  faqSection: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: string[];
  finalCTA: {
    headline: string;
    paragraph: string;
    phone: string;
    buttonText: string;
  };
}

interface ServicePageRendererProps {
  content: ServicePageContent;
  cityName: string;
  citySlug: string;
}

const ServicePageRenderer: React.FC<ServicePageRendererProps> = ({
  content,
  cityName,
  citySlug
}) => {
  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqSection.map(faq => ({
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">{cityName}</span>
            </div>

            <h1 className="text-[32px] sm:text-[40px] lg:text-[56px] font-normal tracking-[-0.5px] text-white mb-6">
              {content.h1}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {content.introSection.headline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`tel:${content.finalCTA.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center gap-3 bg-[#1a73e8] hover:bg-blue-700 h-12 px-8 rounded-full font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                {content.finalCTA.phone}
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
                <span>{content.serviceAreaSection.responseTime.split('.')[0]}</span>
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

      {/* Intro Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <div className="max-w-4xl">
            {content.introSection.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-[18px] lg:text-[20px] text-[#5f6368] mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="text-[16px] text-[#5f6368] italic border-l-4 border-[#1a73e8] pl-4 mt-8">
              {content.introSection.localContext}
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] text-[#202124] mb-12">
            {content.processSection.headline}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.processSection.steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-8 border border-[#dadce0]">
                <div className="w-12 h-12 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-[20px] font-semibold text-[#202124] mb-2">{step.title}</h3>
                <p className="text-[14px] text-[#1a73e8] font-medium mb-3">{step.timeframe}</p>
                <p className="text-[16px] text-[#5f6368]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Challenges Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] text-[#202124] mb-12">
            {content.localChallenges.headline}
          </h2>

          <div className="space-y-8">
            {content.localChallenges.challenges.map((challenge, idx) => (
              <div key={idx} className="bg-[#f8f9fa] rounded-2xl p-8 border border-[#dadce0]">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[20px] font-semibold text-[#202124] mb-2">{challenge.title}</h3>
                    <p className="text-[16px] text-[#5f6368] mb-4">{challenge.description}</p>
                    <div className="flex items-start gap-2 mt-4 pt-4 border-t border-[#dadce0]">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-[16px] text-[#202124]"><strong>Our Solution:</strong> {challenge.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] text-[#202124] mb-12">
            {content.equipmentSection.headline}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.equipmentSection.equipment.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-[#dadce0]">
                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-[#1a73e8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#202124]">
                      {item.name}
                      {item.brand && <span className="text-[#5f6368] font-normal ml-2">({item.brand})</span>}
                    </h3>
                    <p className="text-[14px] text-[#5f6368] mt-1">{item.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[16px] text-[#5f6368] italic mt-8 border-l-4 border-[#1a73e8] pl-4">
            {content.equipmentSection.localNote}
          </p>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] text-[#202124] mb-8">
            {content.serviceAreaSection.headline}
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {content.serviceAreaSection.neighborhoods.map((hood, idx) => (
              <Link
                key={idx}
                to={`/city/${citySlug}/neighborhoods/${hood.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-[#f8f9fa] hover:bg-[#e8eaed] rounded-full text-[#202124] text-[14px] border border-[#dadce0] transition-colors"
              >
                {hood}
              </Link>
            ))}
          </div>

          <p className="text-[16px] text-[#5f6368]">{content.serviceAreaSection.responseTime}</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
          <div className="max-w-3xl">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] text-[#202124] mb-6">
              {content.pricingSection.headline}
            </h2>

            <p className="text-[18px] text-[#5f6368] mb-8">{content.pricingSection.intro}</p>

            <ul className="space-y-3 mb-8">
              {content.pricingSection.factors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1a73e8] flex-shrink-0 mt-0.5" />
                  <span className="text-[16px] text-[#5f6368]">{factor}</span>
                </li>
              ))}
            </ul>

            <p className="text-[16px] text-[#202124] font-medium">{content.pricingSection.cta}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-[72px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] text-[#202124] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {content.faqSection.map((faq, idx) => (
              <div key={idx} className="bg-[#f8f9fa] rounded-xl p-6 border border-[#dadce0]">
                <h3 className="text-[18px] font-semibold text-[#202124] mb-3">{faq.question}</h3>
                <p className="text-[16px] text-[#5f6368] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#1a73e8] to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal tracking-[-0.5px] mb-6">
            {content.finalCTA.headline}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {content.finalCTA.paragraph}
          </p>
          <a
            href={`tel:${content.finalCTA.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center justify-center gap-3 bg-white text-[#1a73e8] h-14 px-10 rounded-full font-bold text-xl hover:bg-blue-50 transition-all"
          >
            <Phone className="w-6 h-6" />
            {content.finalCTA.phone}
          </a>
        </div>
      </section>

      {/* Related Services */}
      {content.relatedServices.length > 0 && (
        <section className="py-20 lg:py-24 bg-[#f8f9fa] border-t border-[#dadce0]">
          <div className="max-w-7xl mx-auto px-4 lg:px-[72px]">
            <h3 className="text-[20px] font-semibold text-[#202124] mb-6">Related Services in {cityName}</h3>
            <div className="flex flex-wrap gap-3">
              {content.relatedServices.map((service, idx) => (
                <Link
                  key={idx}
                  to={`/city/${citySlug}${service}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#e8eaed] rounded-full text-[#1a73e8] text-[14px] font-medium border border-[#dadce0] transition-colors"
                >
                  {service.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ServicePageRenderer;
