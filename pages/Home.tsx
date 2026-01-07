import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateHomepageSchema } from '../utils/schema';
import { useSubdomainInfo } from '../utils/subdomain';
import { useFranchiseContext } from '../contexts/FranchiseContext';
import PageMeta from '../components/ui/PageMeta';

// Generated Layout Components
import HeroInteractive from '../generated-layouts/heroes/HeroInteractive';
import ServiceGridBento from '../generated-layouts/service-grids/ServiceGridBento';
import ProcessTimeline from '../generated-layouts/process/ProcessTimeline';
import TrustBadgeBar from '../generated-layouts/trust-suite/TrustBadgeBar';
import TestimonialCarousel from '../generated-layouts/testimonials/TestimonialCarousel';
import FAQAccordion from '../generated-layouts/faqs/FAQAccordion';
import CTAGradient from '../generated-layouts/ctas/CTAGradient';

// City-specific components (preserved from original)
import {
  NeighborhoodResponseGrid,
  LocalExpertiseCards,
  TestimonialSection,
  CityFAQSection,
} from '../components/city';

// Data adapters
import {
  adaptServicesToGrid,
  adaptTestimonials,
  HOMEPAGE_REVIEWS,
  type GridServiceData,
} from '../utils/adapters';

// Services data
import { SERVICES } from '../data/services';

/**
 * Home - Redesigned with Generated Components
 *
 * Uses Google AI Studio generated components for consistent,
 * conversion-optimized design with the Google aesthetic.
 */
const Home: React.FC = () => {
  const navigate = useNavigate();

  // Detect subdomain for city-specific content
  const { isSubdomain, cityName } = useSubdomainInfo();

  // Get full franchise data for city content
  const franchise = useFranchiseContext();

  // Dynamic location text based on subdomain
  const locationText = isSubdomain ? cityName : 'Northern Virginia';

  // Adapt services data for ServiceGridBento
  const gridServices = useMemo(() => {
    const adapted = adaptServicesToGrid(SERVICES, 6);
    return adapted;
  }, []);

  // Handle service click - navigate to service page
  const handleServiceClick = (service: GridServiceData) => {
    navigate(service.slug);
  };

  // Adapt franchise testimonials or use homepage defaults
  const reviews = useMemo(() => {
    if (isSubdomain && franchise.testimonials && franchise.testimonials.length > 0) {
      return adaptTestimonials(franchise.testimonials);
    }
    return HOMEPAGE_REVIEWS;
  }, [isSubdomain, franchise.testimonials]);

  // Homepage FAQ schema for SEO
  const homepageSchema = useMemo(() => generateHomepageSchema([
    {
      question: 'How quickly can you respond to water damage emergencies?',
      answer: `Flood Doctor guarantees 60-minute response time 24/7 throughout ${locationText} and surrounding areas. Our IICRC-certified technicians are available around the clock, 365 days a year.`
    },
    {
      question: `Who is the best water damage restoration company in ${locationText}?`,
      answer: `Flood Doctor has served ${locationText} for over 20 years with IICRC-certified technicians, 60-minute response times, and a 4.9-star rating. We hold Virginia License #2705155505 and provide 24/7 emergency service.`
    },
    {
      question: 'Do you work with insurance companies?',
      answer: 'Yes, Flood Doctor handles direct insurance billing and documentation for all major carriers. We have processed over 8,000 insurance claims with a 98% approval rate.'
    },
    {
      question: `What areas do you serve in ${locationText}?`,
      answer: isSubdomain
        ? `Flood Doctor serves ${cityName} and surrounding communities including all neighborhoods in the area. We have crews positioned throughout Northern Virginia for rapid response.`
        : 'Flood Doctor serves all of Northern Virginia including Fairfax County, Arlington County, Alexandria, Loudoun County, Prince William County, McLean, Vienna, Tysons, Reston, Herndon, Ashburn, Springfield, Falls Church, Great Falls, and Washington DC.'
    },
    {
      question: 'Are you licensed and certified for water damage restoration?',
      answer: 'Yes, Flood Doctor is fully licensed in Virginia (DPOR #2705155505), Washington DC (#420222000069), and Maryland (MHIC #139079). All technicians are IICRC-certified in Water Damage Restoration (WRT), Applied Structural Drying (ASD), and Mold Remediation.'
    },
    {
      question: `How much does water damage restoration cost in ${locationText}?`,
      answer: `Water damage restoration costs in ${locationText} typically range from $1,500-$10,000 depending on the extent of damage, water category, and affected square footage. Flood Doctor provides free estimates and works directly with your insurance company.`
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'Most water damage restoration projects take 3-5 days for the drying process, followed by any necessary repairs. Flood Doctor uses real-time moisture monitoring technology to track drying progress and ensure thorough restoration.'
    },
  ]), [locationText, cityName, isSubdomain]);

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={isSubdomain
          ? `Water Damage Restoration ${cityName} VA | 60-Min Response | 24/7`
          : "Water Damage Restoration Northern Virginia | 60-Min Response | 24/7"
        }
        description={isSubdomain
          ? `${cityName} water damage restoration with 60-minute response, 24/7. IICRC-certified technicians, direct insurance billing, real-time drying monitoring. Virginia License #2705155505. Call (877) 497-0007.`
          : "Northern Virginia water damage restoration with 60-minute response, 24/7. IICRC-certified technicians serving Fairfax, Arlington, Alexandria, McLean. Direct insurance billing. Virginia License #2705155505. Call (877) 497-0007."
        }
        schema={homepageSchema}
      />

      {/* Hero - Interactive Zip Code Checker */}
      <HeroInteractive />

      {/* Trust Badge Bar */}
      <TrustBadgeBar />

      {/* Services Grid - Bento Layout */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Restoration Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From water damage to fire restoration, we provide comprehensive solutions
              for residential and commercial properties throughout {locationText}.
            </p>
          </div>
          <ServiceGridBento
            services={gridServices}
            onServiceClick={handleServiceClick}
          />
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* City-specific: Neighborhood Response Grid */}
      {isSubdomain && franchise && (
        <NeighborhoodResponseGrid
          cityName={cityName}
          neighborhoods={franchise.neighborhoods || []}
        />
      )}

      {/* City-specific: Local Expertise Cards */}
      {isSubdomain && franchise && (
        <LocalExpertiseCards
          cityName={cityName}
          localFacts={franchise.localFacts || []}
        />
      )}

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Join thousands of satisfied homeowners who trust Flood Doctor
              for their water damage restoration needs.
            </p>
          </div>
          <TestimonialCarousel reviews={reviews} />
        </div>
      </section>

      {/* City-specific: Testimonials Section */}
      {isSubdomain && franchise.testimonials && franchise.testimonials.length > 0 && (
        <TestimonialSection
          testimonials={franchise.testimonials}
          cityName={cityName}
        />
      )}

      {/* FAQ Section */}
      {!isSubdomain && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <FAQAccordion />
          </div>
        </section>
      )}

      {/* City-specific: FAQ Section */}
      {isSubdomain && franchise.faqs && franchise.faqs.length > 0 && (
        <CityFAQSection
          faqs={franchise.faqs}
          cityName={cityName}
        />
      )}

      {/* Bottom CTA */}
      <CTAGradient />
    </main>
  );
};

export default Home;
