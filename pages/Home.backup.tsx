import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { generateHomepageSchema } from '../utils/schema';
import { useSubdomainInfo } from '../utils/subdomain';
import { useFranchiseContext } from '../contexts/FranchiseContext';
import {
  Phone,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';

// V14 Components
import HeroV14 from '../components/sections/HeroV14';
import TrustBarV14 from '../components/sections/TrustBarV14';
import ProcessSectionV14 from '../components/sections/ProcessSectionV14';
import GoogleStyleFAQ, { FAQ_SCHEMA } from '../components/sections/GoogleStyleFAQ';
import HeroOrbitPhone from '../components/ui/illustrations/service-hero/HeroOrbitPhone';
import EmergencyServiceCard from '../components/ui/EmergencyServiceCard';

// City-specific components
import {
  NeighborhoodResponseGrid,
  LocalExpertiseCards,
  TestimonialSection,
  CityFAQSection,
  TrustBadgeBar
} from '../components/city';

/**
 * Home - V14 Google-Style Design
 *
 * Sections:
 * 1. Hero (HeroOrbitPhone visual, animated Google Business Profile)
 * 2. TrustBar (24/7, IICRC, Licensed, Insurance)
 * 3. ProcessSection (Animated SVG timeline)
 * 4. EmergencyServiceCard (Live status)
 * 5. FAQ Accordion
 * 6. Footer CTA
 * 7. Service Areas
 */

const Home: React.FC = () => {
  const { isSubdomain, cityName } = useSubdomainInfo();
  const franchise = useFranchiseContext();
  const locationText = isSubdomain ? cityName : 'Northern Virginia';

  // Homepage schema for SEO
  const homepageSchema = useMemo(() => generateHomepageSchema([
    { question: 'How quickly can you respond to water damage emergencies?', answer: `Flood Doctor guarantees 60-minute response time 24/7 throughout ${locationText} and surrounding areas. Our IICRC-certified technicians are available around the clock.` },
    { question: `Who is the best water damage restoration company in ${locationText}?`, answer: `Flood Doctor has served ${locationText} for over 20 years with IICRC-certified technicians, 60-minute response times, and a 4.9-star rating.` },
    { question: 'Do you work with insurance companies?', answer: 'Yes, Flood Doctor handles direct insurance billing and documentation. We have processed over 8,000 claims with a 98% approval rate.' },
    { question: 'Are you licensed and certified?', answer: 'Yes. Virginia DPOR #2705155505, DC #420222000069, Maryland MHIC #139079. IICRC Certified Firm.' }
  ]), [locationText]);

  // Combined schema with FAQ
  const combinedSchema = {
    ...homepageSchema,
    ...FAQ_SCHEMA
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={isSubdomain
          ? `Water Damage Restoration ${cityName} VA | 60-Min Response | 24/7`
          : "Water Damage Restoration Northern Virginia | 60-Min Response | 24/7"
        }
        description={isSubdomain
          ? `${cityName} water damage restoration with 60-minute response, 24/7. IICRC-certified technicians. Virginia License #2705155505. Call (877) 497-0007.`
          : "Northern Virginia water damage restoration with 60-minute response, 24/7. Serving Fairfax, Arlington, Alexandria, McLean. Call (877) 497-0007."
        }
        schema={combinedSchema}
      />

      {/* ========================================
          SECTION 1: V14 HERO
          Animated Google Business Profile phone mockup
          ======================================== */}
      <HeroV14
        title={
          <>
            Water damage?<br />
            <span className="text-primary">We're on it.</span>
          </>
        }
        subtitle={`24/7 emergency water damage restoration in ${locationText}. IICRC-certified technicians with 60-minute response time.`}
        visual={<HeroOrbitPhone />}
      />

      {/* ========================================
          SECTION 2: TRUST BAR
          24/7, IICRC, Licensed, Insurance
          ======================================== */}
      <TrustBarV14 />

      {/* City-specific sections */}
      {isSubdomain && <TrustBadgeBar compact />}
      {isSubdomain && franchise.neighborhoodResponseTimes?.length > 0 && (
        <NeighborhoodResponseGrid neighborhoods={franchise.neighborhoodResponseTimes} cityName={cityName} />
      )}
      {isSubdomain && franchise.challenges?.length > 0 && (
        <LocalExpertiseCards challenges={franchise.challenges} cityName={cityName} />
      )}

      {/* ========================================
          SECTION 3: PROCESS SECTION
          Animated 3-step SVG timeline
          ======================================== */}
      <ProcessSectionV14 />

      {/* ========================================
          SECTION 4: LIVE STATUS CARD
          Shows active crews and response time
          ======================================== */}
      <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span className="text-primary font-bold tracking-wide uppercase text-sm mb-4 block">
                Live Dispatch
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                Real-time crew availability
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8">
                Our dispatch system shows live crew positions and estimated arrival times. When you call, we route the nearest available team to your location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8774970007"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-colors group"
                >
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/request/"
                  className="inline-flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Request Service Online
                </Link>
              </div>
            </div>

            {/* Right: Emergency Card */}
            <div className="flex justify-center lg:justify-end">
              <EmergencyServiceCard variant="expanded" className="max-w-md w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* City-specific testimonials */}
      {isSubdomain && franchise.testimonials?.length > 0 && (
        <TestimonialSection testimonials={franchise.testimonials} cityName={cityName} />
      )}

      {/* ========================================
          SECTION 5: FAQ ACCORDION
          Google-style FAQ with schema
          ======================================== */}
      {!isSubdomain ? (
        <GoogleStyleFAQ title="Your questions, answered" />
      ) : (
        franchise.faqs?.length > 0 && (
          <CityFAQSection faqs={franchise.faqs} cityName={cityName} />
        )
      )}

      {/* ========================================
          SECTION 6: FOOTER CTA
          Final call to action
          ======================================== */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">
            Water emergency?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Our crews are standing by 24/7. Get help within 60 minutes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors text-lg group"
            >
              <Phone size={20} className="mr-2" />
              Call (877) 497-0007
            </a>
            <Link
              to="/request/"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Request Service
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 7: SERVICE AREAS
          ======================================== */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wide">Service Areas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 tracking-tight">
            Serving Northern Virginia & DC Metro
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {['Fairfax', 'Arlington', 'Alexandria', 'McLean', 'Vienna', 'Tysons', 'Reston', 'Herndon', 'Ashburn', 'Springfield', 'Falls Church', 'DC'].map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 px-4 py-3 bg-white text-sm text-gray-700 rounded-lg border border-gray-200 hover:border-primary/30 hover:bg-blue-50/50 transition-colors"
              >
                <CheckCircle2 size={16} className="text-green-500" />
                {area}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/locations/"
              className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
            >
              View all locations
              <ChevronDown size={16} className="rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
