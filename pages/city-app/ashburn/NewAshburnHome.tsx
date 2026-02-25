/**
 * NewAshburnHome - Custom Ashburn homepage using rich content data
 *
 * Replaces CityLandingNew for Ashburn only via CityHome dispatch.
 * Sources content from src/content/cities/ashburn/homepage.ts
 * instead of the generic CityConfig adapter.
 */

import React from 'react';
import { Phone, Clock, Shield, Home, Award, Users, ChevronDown, ChevronUp, AlertTriangle, MapPin, Wrench, Droplets, Wind, Flame, Bug } from 'lucide-react';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import { getAshburnHomepageData } from '@/src/content/cities/ashburn/homepage';
import { CityConfig } from '@/config/cities';
import PageMeta from '@/components/ui/PageMeta';

interface NewAshburnHomeProps {
  city: CityConfig;
}

// Icon mapping for whyChooseUs points
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  clock: Clock,
  home: Home,
  shield: Shield,
  certificate: Award,
  community: Users,
};

// Service icons for the services grid
const serviceIcons: Record<string, React.FC<{ className?: string }>> = {
  'Water Damage Restoration': Droplets,
  'Flood Cleanup': Droplets,
  'Mold Remediation': Bug,
  'Fire & Smoke Damage': Flame,
  'Storm Damage': Wind,
  'Emergency Services': AlertTriangle,
};

const NewAshburnHome: React.FC<NewAshburnHomeProps> = ({ city }) => {
  const franchise = useCityFranchise();
  const content = getAshburnHomepageData(franchise);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  // SEO: LocalBusiness schema
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "name": `Flood Doctor - ${city.name} Water Damage Restoration`,
    "image": "https://flood.doctor/logo.png",
    "telephone": franchise.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8466D Tyco Rd",
      "addressLocality": "Vienna",
      "addressRegion": "VA",
      "postalCode": "22182",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.geo.lat,
      "longitude": city.geo.lng
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": "Virginia"
      }
    },
    "url": `https://${city.subdomain}/`,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  // SEO: FAQ schema
  const faqSchema = {
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
    <main className="flex-grow bg-white pb-20 md:pb-0">
      <PageMeta
        title={`Water Damage Restoration ${city.name}, ${city.state} | ${city.responseTime} Response`}
        description={city.description}
        schema={{
          "@context": "https://schema.org",
          "@graph": [localBusinessSchema, faqSchema]
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden rounded-b-3xl shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/90 z-0" />
        <div className="relative z-10 px-4 pt-20 pb-16 md:pt-32 md:pb-24 max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium">
              <Clock className="w-4 h-4 text-[#4285f4]" />
              <span>{city.responseTime} Response Time</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium">
              <Shield className="w-4 h-4 text-[#34a853]" />
              <span>IICRC Certified</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            {content.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed">
            {content.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${franchise.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-[#ea4335] hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call {franchise.phone}
            </a>
            <a
              href="/request/"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30 transition-all"
            >
              Request Services
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-[#ea4335] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <p className="font-semibold text-sm sm:text-base">
              {content.emergencyCTA.headline} {content.emergencyCTA.subtext}
            </p>
          </div>
          <a
            href={`tel:${franchise.phone}`}
            className="inline-flex items-center gap-2 bg-white text-[#ea4335] px-6 py-2 rounded-full font-bold text-sm hover:bg-red-50 transition-all flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            {content.emergencyCTA.buttonText}
          </a>
        </div>
      </section>

      {/* Intro / Local Expertise Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            {content.introParagraph.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            {content.whyChooseUs.headline}
          </h2>
          <div className="w-20 h-1 bg-[#1a73e8] mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.whyChooseUs.points.map((point, i) => {
              const Icon = iconMap[point.icon] || Shield;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <div className="w-12 h-12 bg-[#1a73e8]/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#1a73e8]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Expertise Deep Dive */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {content.localExpertise.headline}
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                {content.localExpertise.paragraph.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500 italic border-l-4 border-[#1a73e8] pl-4">
                {content.localExpertise.architectureNote}
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#ea4335]" />
                Common Ashburn Water Issues
              </h3>
              <ul className="space-y-4">
                {content.localExpertise.commonIssues.map((issue, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1a73e8] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            Our Services in {city.name}
          </h2>
          <div className="w-20 h-1 bg-[#1a73e8] mx-auto mb-12 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Water Damage Restoration', desc: 'Complete water extraction, structural drying, and restoration for homes and businesses.' },
              { title: 'Flood Cleanup', desc: 'Emergency flood response with industrial pumps and dehumidifiers. Available 24/7.' },
              { title: 'Mold Remediation', desc: 'Professional mold testing, containment, and removal following IICRC S520 standards.' },
              { title: 'Fire & Smoke Damage', desc: 'Fire damage restoration including smoke odor removal and structural repairs.' },
              { title: 'Storm Damage', desc: 'Storm and wind damage repair including roof tarping and water intrusion mitigation.' },
              { title: 'Emergency Services', desc: `${city.responseTime} emergency response to all ${city.name} neighborhoods. Day or night.` },
            ].map((service, i) => {
              const Icon = serviceIcons[service.title] || Wrench;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                  <div className="w-12 h-12 bg-[#1a73e8]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1a73e8]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#1a73e8]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            {content.localTestimonialIntro}
          </h2>
          <div className="w-20 h-1 bg-[#1a73e8] mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.testimonials.map((testimonial, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-[#fbbc04]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-700 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-sm font-semibold text-slate-900">
                  {testimonial.author}
                </p>
                <p className="text-xs text-slate-500">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#1a73e8] mx-auto mb-12 rounded-full" />

          <div className="space-y-3">
            {content.faqSection.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#1a73e8] to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.emergencyCTA.headline}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {content.emergencyCTA.subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${franchise.phone}`}
              className="inline-flex items-center justify-center gap-3 bg-[#ea4335] hover:bg-red-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              {content.emergencyCTA.buttonText}
            </a>
            <a
              href="/request/"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1a73e8] px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-lg"
            >
              Request Services
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            8466D Tyco Rd, Vienna, VA 22182 · DPOR License #2705155505 · IICRC Certified
          </p>
        </div>
      </section>
    </main>
  );
};

export default NewAshburnHome;
