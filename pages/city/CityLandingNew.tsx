import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { CityConfig } from '../../config/cities';
import { adaptCityConfigToCityData } from '../../utils/adapters';

// Generated Layout Components
import CityHero from '../../generated-layouts/city-landing/CityHero';
import CityEmergencyBanner from '../../generated-layouts/city-landing/CityEmergencyBanner';
import CityProximity from '../../generated-layouts/city-landing/CityProximity';
import CityServices from '../../generated-layouts/city-landing/CityServices';
import CityTestimonials from '../../generated-layouts/city-landing/CityTestimonials';
import CityFAQ from '../../generated-layouts/city-landing/CityFAQ';

/**
 * CityLandingNew - Redesigned with Generated Components
 *
 * Uses Google AI Studio generated components for consistent,
 * conversion-optimized design with the Google aesthetic.
 * Preserves SEO schema and city-specific content.
 */

interface CityLandingNewProps {
  city: CityConfig;
}

const CityLandingNew: React.FC<CityLandingNewProps> = ({ city }) => {
  // Transform CityConfig to generated component format
  const cityData = adaptCityConfigToCityData(city);

  // SEO-CRITICAL: Meta title MUST include city name at the BEGINNING for local SEO
  const metaTitle = `Water Damage Restoration ${city.name}, ${city.state} | ${city.responseTime} Response`;
  const metaDescription = city.description;

  // LocalBusiness Schema for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Flood Doctor - ${city.name} Water Damage Restoration`,
    "image": "https://flood.doctor/logo.png",
    "telephone": "+1-877-497-0007",
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
      "@type": city.state === 'DC' ? 'City' : 'City',
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": city.state === 'DC' ? 'District of Columbia' : city.state === 'MD' ? 'Maryland' : 'Virginia'
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

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityData.faqs.map(faq => ({
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
        title={metaTitle}
        description={metaDescription}
        structuredData={structuredData}
        schema={faqSchema}
      />

      {/* Hero Section */}
      <CityHero city={cityData} />

      {/* Emergency Banner - Mobile sticky, desktop inline */}
      <CityEmergencyBanner city={cityData} />

      {/* Proximity / Response Time Section */}
      <CityProximity city={cityData} />

      {/* Services Grid */}
      <CityServices city={cityData} />

      {/* Testimonials */}
      <CityTestimonials city={cityData} />

      {/* FAQ Section */}
      <CityFAQ city={cityData} />

      {/* Final CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#1a73e8] to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Water Damage in {city.name}? We're Ready 24/7.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait—water damage spreads fast. Call now for immediate {city.responseTime} response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1a73e8] px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-lg"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (877) 497-0007
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

export default CityLandingNew;
