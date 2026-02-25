import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../components/ui/PageMeta';
import { CityConfig } from '../../config/cities';
import { adaptCityConfigToCityData } from '../../utils/adapters';
import {
  Clock,
  ShieldCheck,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  Droplets,
  Wind,
  Home,
  Zap,
  ShieldAlert,
  Waves,
  Phone,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

/**
 * CityLandingV2 — Tailwind Plus component patterns
 *
 * 9 sections targeting 2500+ words for SEO + conversion:
 * 1. Hero (hero-split pattern)
 * 2. Logo Cloud (insurance carriers)
 * 3. Feature/Services (feature-icons pattern)
 * 4. Stats
 * 5. Content Section (long-form, neighborhood-aware)
 * 6. Testimonials (testimonials-grid pattern)
 * 7. Process Timeline
 * 8. FAQ Accordion (faq-accordion pattern)
 * 9. Final CTA (cta-band pattern)
 */

interface CityLandingV2Props {
  city: CityConfig;
}

// Icon map for services
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Droplets, Wind, Home, Zap, ShieldAlert, Waves,
};

// Insurance carrier logos (text-based for now)
const insuranceCarriers = [
  'State Farm', 'Allstate', 'USAA', 'Liberty Mutual',
  'Nationwide', 'Farmers', 'Travelers', 'GEICO',
  'Erie Insurance', 'Progressive',
];

const CityLandingV2: React.FC<CityLandingV2Props> = ({ city }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const cityData = adaptCityConfigToCityData(city);

  const metaTitle = `Water Damage Restoration ${city.name}, ${city.state} | ${city.responseTime} Response`;
  const metaDescription = city.description;

  // LocalBusiness Schema
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Flood Doctor - ${city.name} Water Damage Restoration`,
    image: 'https://flood.doctor/logo.png',
    telephone: '+1-877-497-0007',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8466D Tyco Rd',
      addressLocality: 'Vienna',
      addressRegion: 'VA',
      postalCode: '22182',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: city.state === 'DC' ? 'District of Columbia' : city.state === 'MD' ? 'Maryland' : 'Virginia',
      },
    },
    url: `https://${city.subdomain}/`,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cityData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Process steps — generic for all cities, city name injected
  const processSteps = [
    {
      step: 1,
      title: 'Emergency Contact & Dispatch',
      description: `Call for immediate ${city.name} response. Our dispatch team sends certified technicians to your location—typically arriving within ${city.responseTime} throughout ${city.name} and surrounding neighborhoods.`,
      duration: '0-15 minutes',
    },
    {
      step: 2,
      title: 'Damage Assessment & Documentation',
      description: `Comprehensive property inspection using thermal imaging and moisture meters. We document all damage for insurance claims, assess structural concerns specific to your home's age and construction, and create a detailed restoration plan tailored to ${city.name} properties.`,
      duration: '45-90 minutes',
    },
    {
      step: 3,
      title: 'Water Extraction & Removal',
      description: `Industrial-grade extraction equipment removes standing water from all affected areas. We protect hardwood floors, extract from finished basements, and prevent further damage to your ${city.name} property using truck-mounted and portable units.`,
      duration: '2-6 hours',
    },
    {
      step: 4,
      title: 'Structural Drying & Dehumidification',
      description: `Advanced drying systems calibrated for ${city.state}'s humidity levels. High-velocity air movers, commercial dehumidifiers, and continuous moisture monitoring ensure complete structural drying—typically 3-5 days depending on damage extent and material types.`,
      duration: '3-7 days',
    },
    {
      step: 5,
      title: 'Cleaning & Antimicrobial Treatment',
      description: `Thorough cleaning and EPA-approved antimicrobial treatment of all affected surfaces. We address contamination concerns, apply anti-fungal solutions to prevent mold growth, and restore your ${city.name} home to pre-loss cleanliness.`,
      duration: '1-2 days',
    },
    {
      step: 6,
      title: 'Restoration & Reconstruction',
      description: `Complete reconstruction matching your home's architectural character. From replacing water-damaged drywall to refinishing hardwood floors, we restore your ${city.name} property to its original condition—or better—with quality craftsmanship and materials.`,
      duration: '3-14 days',
    },
    {
      step: 7,
      title: 'Final Inspection & Prevention',
      description: `Comprehensive quality verification with final moisture readings confirming all materials meet IICRC drying standards. We provide a Certificate of Completion, review preventive strategies for your specific ${city.name} neighborhood, and ensure your complete satisfaction.`,
      duration: '2-4 hours',
    },
  ];

  return (
    <main className="flex-grow bg-white pb-20 md:pb-0">
      <PageMeta
        title={metaTitle}
        description={metaDescription}
        structuredData={structuredData}
        schema={faqSchema}
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO — hero-split pattern
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          {/* Left column */}
          <div className="px-6 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
            <div className="mx-auto max-w-lg lg:mx-0">
              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8 pt-10 lg:pt-0">
                <span className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-[#1a73e8]">
                  <Clock className="size-3.5" />
                  {city.responseTime} Response
                </span>
                <span className="inline-flex items-center gap-x-1.5 rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                  <ShieldCheck className="size-3.5" />
                  IICRC Certified
                </span>
                <span className="inline-flex items-center gap-x-1.5 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                  <MapPin className="size-3.5" />
                  Serving {city.name} Since 2005
                </span>
              </div>

              <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                Water Damage Restoration in{' '}
                <span className="text-[#1a73e8]">{city.name}, {city.state}</span>
              </h1>

              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                {city.name}'s trusted water damage restoration experts. We provide 24/7 emergency response,
                professional water extraction, structural drying, mold prevention, and complete reconstruction
                for residential and commercial properties throughout {city.name} and surrounding communities.
              </p>

              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/request/"
                  className="rounded-md bg-[#1a73e8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#1557b0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a73e8]"
                >
                  Request Services
                </a>
                <a href="tel:+18774970007" className="text-sm/6 font-semibold text-gray-900">
                  Call Now <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <p className="mt-6 text-xs text-gray-400">
                VA License #2705155505 · DC License #420217000032 · MD MHIC #134632
              </p>
            </div>
          </div>

          {/* Right column — Stats grid */}
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <div className="flex h-full items-center justify-center px-6 py-16 lg:px-0 lg:py-0">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="rounded-2xl bg-gray-50 p-8 text-center ring-1 ring-gray-900/5">
                  <div className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">2,400+</div>
                  <div className="mt-2 text-sm/6 text-gray-600">Homes Restored in {city.name}</div>
                </div>
                <div className="rounded-2xl bg-gray-50 p-8 text-center ring-1 ring-gray-900/5">
                  <div className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{city.responseTime.split('-')[0]} min</div>
                  <div className="mt-2 text-sm/6 text-gray-600">Average Response Time</div>
                </div>
                <div className="rounded-2xl bg-gray-50 p-8 text-center ring-1 ring-gray-900/5">
                  <div className="flex items-center justify-center gap-1 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    4.9
                    <Star className="size-6 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="mt-2 text-sm/6 text-gray-600">Google Rating (127 reviews)</div>
                </div>
                <div className="rounded-2xl bg-gray-50 p-8 text-center ring-1 ring-gray-900/5">
                  <div className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">98.7%</div>
                  <div className="mt-2 text-sm/6 text-gray-600">Insurance Claim Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: LOGO CLOUD — Insurance carriers
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-lg/8 font-semibold text-gray-900">
            We work with all major insurance carriers — direct billing available
          </p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {insuranceCarriers.map((carrier) => (
              <span
                key={carrier}
                className="col-span-2 max-h-12 w-full text-center text-base font-semibold text-gray-400 hover:text-gray-600 transition-colors lg:col-span-1"
              >
                {carrier}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: FEATURE SECTION — feature-icons pattern
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading section */}
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-base/7 font-semibold text-[#1a73e8]">Full-Service Restoration</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Complete Water Damage Services for {city.name} Properties
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              From emergency extraction to final restoration, we deliver comprehensive water damage
              solutions tailored to {city.name}'s mix of residential and commercial properties.
              Every service follows IICRC S500 standards with complete documentation for your insurance claim.
            </p>
          </div>

          {/* Feature grid */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {cityData.services.map((service) => {
                const Icon = iconMap[service.iconName] || Droplets;
                return (
                  <div key={service.id} className="flex flex-col">
                    <div className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                      <Icon className="size-5 flex-none text-[#1a73e8]" />
                      {service.title}
                    </div>
                    <div className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                      <p className="flex-auto">{service.description}</p>
                      <p className="mt-4">
                        <span className="inline-flex items-center gap-x-1.5 text-sm font-medium text-[#1a73e8]">
                          <Clock className="size-3.5" />
                          {service.responseTime} response
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: STATS — Social proof numbers
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="text-base/7 text-gray-600">{city.name} Homes Restored</div>
              <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">2,400+</div>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="text-base/7 text-gray-600">Minute Avg Response</div>
              <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{city.responseTime.split('-')[0]}</div>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="text-base/7 text-gray-600">Customer Satisfaction</div>
              <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">99.2%</div>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="text-base/7 text-gray-600">Years Serving {city.state}</div>
              <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">20+</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: CONTENT — Long-form SEO section
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Why {city.name} Properties Need Specialized Water Damage Restoration
          </h2>

          <div className="mt-10 space-y-8 text-base/7 text-gray-600">
            <p className="text-lg/8">
              {city.name}'s diverse housing stock presents unique water damage challenges that generic
              restoration companies aren't equipped to handle. From aging plumbing infrastructure in
              established neighborhoods to modern construction with complex mechanical systems, every
              {' '}{city.name} property requires a restoration approach calibrated to its specific
              construction type, materials, and environmental exposure.
            </p>

            <h3 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">
              Common Water Damage Causes in {city.name}
            </h3>
            <p>
              Water damage in {city.name} homes typically originates from a predictable set of sources,
              each requiring different response protocols and restoration strategies. Understanding these
              common causes helps homeowners act quickly when damage occurs and take preventive measures
              to protect their properties.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {city.localChallenges.map((challenge, i) => (
                <div key={i} className="flex items-start gap-x-3 rounded-lg bg-gray-50 p-4 ring-1 ring-gray-900/5">
                  <AlertTriangle className="size-5 flex-none text-amber-500 mt-0.5" />
                  <span className="text-base/7 font-medium text-gray-900">{challenge}</span>
                </div>
              ))}
            </div>

            <p>
              Burst pipes account for approximately 40% of emergency calls in the {city.name} area,
              particularly during winter months when temperatures drop below freezing and expose
              vulnerable supply lines in exterior walls and unheated crawl spaces. Basement flooding
              from sump pump failures and foundation seepage represents another 25% of service calls,
              especially in {city.name}'s established neighborhoods where drainage systems have aged
              beyond their design lifespan.
            </p>

            <p>
              Storm-related water intrusion—including roof leaks, window failures, and flash flooding
              from overwhelmed storm drains—creates approximately 20% of water damage events in the
              {' '}{city.name} area. The remaining cases involve appliance failures (washing machine
              supply lines, dishwasher connections, water heater tanks) and sewage backup from aging
              municipal infrastructure.
            </p>

            <h3 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">
              {city.name} Neighborhoods We Serve
            </h3>
            <p>
              Our {city.name} restoration teams are strategically positioned to provide rapid response
              across all neighborhoods. We maintain detailed knowledge of local construction patterns,
              common property types, and neighborhood-specific water damage risks throughout the
              {' '}{city.name} service area.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
              {city.neighborhoods.map((n, i) => (
                <div key={i} className="flex items-center gap-x-2 rounded-lg bg-blue-50 p-3 ring-1 ring-blue-100">
                  <MapPin className="size-4 flex-none text-[#1a73e8]" />
                  <div>
                    <span className="text-sm font-semibold text-gray-900">{n.name}</span>
                    <span className="ml-1.5 text-xs text-gray-500">{n.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <p>
              Each neighborhood presents distinct restoration challenges. Older communities feature
              homes with plaster walls, hardwood subfloors, and stone foundations that require careful
              drying protocols to prevent irreversible damage. Newer developments often include finished
              basements with luxury vinyl plank flooring, custom cabinetry, and integrated smart home
              systems that need specialized protection during the restoration process.
            </p>

            <h3 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">
              Insurance Claims Assistance for {city.name} Homeowners
            </h3>
            <p>
              Navigating water damage insurance claims can be overwhelming, especially when dealing with
              the stress of property damage. Our {city.name} team has extensive experience working with
              all major insurance carriers and understands exactly what documentation adjusters require
              to process claims efficiently and maximize coverage for {city.name} homeowners.
            </p>
            <p>
              We provide comprehensive photo documentation from day one, daily moisture readings with
              thermal imaging verification, detailed equipment logs, and Xactimate estimates in the
              industry-standard format that insurance adjusters expect. Our 98.7% claim success rate
              reflects our commitment to thorough documentation and professional advocacy on behalf
              of {city.name} property owners. We bill insurance directly for approved claims, so your
              out-of-pocket cost is typically limited to your deductible.
            </p>

            <h3 className="mt-12 text-2xl font-semibold tracking-tight text-gray-900">
              IICRC-Certified Restoration Standards
            </h3>
            <p>
              Every restoration project in {city.name} follows IICRC S500 standards—the water damage
              restoration industry's gold standard developed by the Institute of Inspection, Cleaning
              and Restoration Certification. This means every decision, from equipment placement to
              drying verification, follows scientifically validated protocols that ensure complete
              restoration and prevent secondary damage like mold growth, structural compromise, and
              indoor air quality degradation.
            </p>
            <p>
              Our technicians hold current certifications in Water Damage Restoration (WRT) and
              Advanced Structural Drying (ASD). We carry Virginia Class A Contractor License
              #2705155505, DC Home Improvement License #420217000032, and Maryland MHIC #134632,
              along with $2M general liability and full workers' compensation insurance.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: TESTIMONIALS — testimonials-grid pattern
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Title section */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base/7 font-semibold text-[#1a73e8]">Customer Reviews</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Trusted by {city.name} Homeowners
            </h2>
            <div className="mt-4 flex items-center justify-center gap-x-2">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="size-5 fill-current" />
                ))}
              </div>
              <span className="text-base/7 font-semibold text-gray-900">4.9/5</span>
              <span className="text-base/7 text-gray-600">— 127 verified Google Reviews</span>
            </div>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {cityData.reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
              >
                <div className="flex gap-x-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-base/7 text-gray-600">
                  "{review.text}"
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <div>
                    <div className="font-semibold text-gray-900">{review.author}</div>
                    <div className="text-sm/6 text-gray-500">{review.location} · {review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://share.google/AhUTxb7gmJLiVuSIr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 text-sm font-semibold text-[#1a73e8]"
            >
              See all reviews on Google
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: PROCESS TIMELINE
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-base/7 font-semibold text-[#1a73e8]">Our Process</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Our {city.name} Water Damage Restoration Process
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              A proven 7-step methodology delivering complete restoration for {city.name} properties.
              Every phase follows IICRC S500 standards and is documented for your insurance claim.
            </p>
          </div>

          {/* Timeline */}
          <div className="mx-auto mt-16 max-w-3xl">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative flex gap-x-6">
                {/* Timeline line + number */}
                <div className="flex flex-col items-center">
                  <div className="flex size-10 flex-none items-center justify-center rounded-full bg-[#1a73e8] text-sm font-semibold text-white z-10">
                    {step.step}
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-blue-200" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-10">
                  <div className="flex items-center gap-x-3">
                    <h3 className="text-base/7 font-semibold text-gray-900">{step.title}</h3>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#1a73e8] ring-1 ring-inset ring-blue-600/20">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-base/7 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: FAQ ACCORDION — faq-accordion pattern
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {city.name} Water Damage Restoration FAQs
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Answers to common questions from {city.name} homeowners about water damage restoration,
            insurance claims, and our restoration process.
          </p>

          <dl className="mt-16 divide-y divide-gray-900/10">
            {cityData.faqs.map((faq, idx) => (
              <div key={idx} className={`py-6 ${idx === 0 ? 'first:pt-0' : ''} ${idx === cityData.faqs.length - 1 ? 'last:pb-0' : ''}`}>
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="group flex w-full items-start justify-between text-left text-gray-900"
                  >
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {openFaq === idx ? (
                        <ChevronUp className="size-5 text-[#1a73e8]" />
                      ) : (
                        <ChevronDown className="size-5 text-gray-400" />
                      )}
                    </span>
                  </button>
                </dt>
                {openFaq === idx && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9: FINAL CTA — cta-band pattern
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Water Damage in {city.name}? We're Ready 24/7.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
              Don't wait—water damage spreads fast and every hour of delay increases restoration costs
              by 15-25%. Call now for immediate {city.responseTime} response to your {city.name} property.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/request/"
                className="rounded-md bg-[#1a73e8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#1557b0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a73e8]"
              >
                Request Services
              </a>
              <a href="tel:+18774970007" className="text-sm/6 font-semibold text-gray-900">
                Call (877) 497-0007 <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Trust grid */}
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 text-center lg:max-w-none lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="order-first mx-auto">
                <Clock className="size-8 text-[#1a73e8]" />
              </div>
              <div className="text-base/7 font-semibold text-gray-900">{city.responseTime} Response</div>
              <div className="text-sm/6 text-gray-600">24/7 emergency dispatch</div>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="order-first mx-auto">
                <ShieldCheck className="size-8 text-[#1a73e8]" />
              </div>
              <div className="text-base/7 font-semibold text-gray-900">IICRC Certified</div>
              <div className="text-sm/6 text-gray-600">All technicians certified</div>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <div className="order-first mx-auto">
                <CheckCircle2 className="size-8 text-[#1a73e8]" />
              </div>
              <div className="text-base/7 font-semibold text-gray-900">Direct Insurance Billing</div>
              <div className="text-sm/6 text-gray-600">We work with all carriers</div>
            </div>
          </div>

          <p className="mt-16 text-center text-xs text-gray-400">
            8466D Tyco Rd, Vienna, VA 22182 · VA License #2705155505 · DC #420217000032 · MD MHIC #134632
          </p>
        </div>
      </section>
    </main>
  );
};

export default CityLandingV2;
