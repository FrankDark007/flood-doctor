import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { generateHomepageSchema } from '../utils/schema';
import { useSubdomainInfo } from '../utils/subdomain';
import { useFranchiseContext } from '../contexts/FranchiseContext';
import {
  Phone,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Star,
  Shield,
  Clock,
  FileCheck
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';

// V14 Components (kept for sections 4+)
import GoogleStyleFAQ, { FAQ_SCHEMA } from '../components/sections/GoogleStyleFAQ';
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
 * Home - V15 Google-Style Design (ResidentialVariantA Hero)
 *
 * Sections:
 * 1. Hero (Phone mockup with GBP profile, orbiting dots animation)
 * 2. Features Row (60-Min Response, Licensed, Insurance)
 * 3. Centered Value Prop (Fast Response Prevents Lasting Damage)
 * 4. EmergencyServiceCard (Live status)
 * 5. FAQ Accordion
 * 6. Footer CTA
 * 7. Service Areas
 */

const Home: React.FC = () => {
  const { isSubdomain, cityName } = useSubdomainInfo();
  const franchise = useFranchiseContext();
  const locationText = isSubdomain ? cityName : 'Northern Virginia';

  // Hero animation state
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!heroPaused) {
        setHeroSlide((prev) => (prev === 0 ? 1 : 0));
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [heroPaused]);

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
          SECTION 1: HERO (ResidentialVariantA Style)
          Phone mockup with GBP profile, orbiting dots
          ======================================== */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
        <div className="max-w-[1296px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Content */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <h1 className="text-[40px] lg:text-[60px] leading-[1.1] font-normal mb-6 tracking-tight text-[#202124]">
                <span className="font-bold text-[#1a73e8]">Water Damage</span> Restoration
              </h1>
              <p className="text-lg lg:text-[18px] leading-[28px] text-[#3c4043] mb-8">
                Turn a water emergency into a quick recovery with Flood Doctor's 60-minute response guarantee. We serve Northern Virginia, DC, and Maryland 24/7 with professional water extraction, structural drying, and complete restoration.
              </p>
              <div>
                <Link to="/request/" className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-[#1a73e8] text-white font-medium hover:bg-[#1557b0] transition-colors shadow-sm">
                  Request Services
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-6 relative flex justify-center items-center min-h-[500px]">

              {/* Orbiting Dots SVG */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
                <svg width="500" height="500" viewBox="0 0 500 500" className="animate-[spin_60s_linear_infinite]">
                   <circle cx="250" cy="250" r="220" stroke="#dadce0" strokeWidth="2" strokeDasharray="4 12" fill="none" />
                   <circle cx="250" cy="30" r="8" fill="#34a853" />
                   <circle cx="250" cy="470" r="8" fill="#fbbc04" />
                </svg>
              </div>

              {/* Phone Container */}
              <div className="relative w-[300px] h-[500px] bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] overflow-hidden z-10">

                {/* Slide 1: Business Profile */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${heroSlide === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                   {/* Phone Header Image */}
                   <div className="h-32 bg-blue-50 flex items-center justify-center">
                      <Shield size={48} className="text-[#1a73e8]" />
                   </div>
                   <div className="p-4">
                      <h3 className="text-lg font-medium text-[#202124]">Flood Doctor</h3>
                      <div className="flex items-center gap-1 text-sm mt-1">
                        <span className="font-bold">4.9</span>
                        <div className="flex text-[#fbbc04]"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                        <span className="text-gray-500">(127)</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Water Damage Restoration · Northern Virginia</div>

                      {/* Google Guaranteed Badge */}
                      <div className="mt-3 inline-flex items-center gap-2 bg-[#f0fdf4] px-2 py-1 rounded border border-[#e6f4ea]">
                         <div className="w-4 h-4 bg-[#34a853] rounded-full flex items-center justify-center text-white text-[8px] font-bold">✔</div>
                         <span className="text-[10px] font-medium text-[#1e8e3e]">Google Guaranteed</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-4 gap-2 mt-4 text-center">
                         {['CALL', 'DIRECTIONS', 'SAVE', 'WEBSITE'].map(act => (
                           <div key={act} className="flex flex-col items-center gap-1">
                              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#1a73e8]">
                                <div className="w-4 h-4 bg-current rounded-sm opacity-20"></div>
                              </div>
                              <span className="text-[8px] font-medium text-[#1a73e8]">{act}</span>
                           </div>
                         ))}
                      </div>

                      <div className="mt-4 p-3 border rounded-lg text-center text-[#1a73e8] font-medium text-sm">
                        REQUEST A QUOTE
                      </div>

                      <div className="mt-3 space-y-2">
                         <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Clock size={14} />
                            <span><span className="text-[#1e8e3e] font-bold">Open</span> · 24/7 Emergency Service</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Slide 2: Search Result */}
                <div className={`absolute inset-0 bg-white transition-opacity duration-700 ${heroSlide === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                   <div className="p-4 border-b border-gray-100">
                      <div className="flex justify-center text-xl font-medium mb-3">
                        <span className="text-[#4285f4]">G</span><span className="text-[#ea4335]">o</span><span className="text-[#fbbc04]">o</span><span className="text-[#4285f4]">g</span><span className="text-[#34a853]">l</span><span className="text-[#ea4335]">e</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm shadow-sm text-gray-700 flex justify-between">
                         <span>water damage near me</span>
                         <span className="text-[#4285f4]">🔍</span>
                      </div>
                   </div>
                   <div className="p-4">
                      {/* Map Snippet */}
                      <div className="h-24 bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-6 h-6 text-[#ea4335] drop-shadow-md">📍</div>
                         </div>
                      </div>
                      {/* Result Item */}
                      <div className="mb-4">
                         <div className="text-[#1a73e8] text-base font-medium">Flood Doctor</div>
                         <div className="flex items-center gap-1 text-xs mt-0.5">
                            <span className="text-[#fbbc04]">★★★★★</span> 4.9 (127)
                         </div>
                         <div className="text-xs text-gray-500 mt-1">Water damage restoration</div>
                         <div className="flex items-center gap-1 text-xs mt-1 text-[#1e8e3e]">
                            <span>✔ Google Guaranteed</span>
                         </div>
                      </div>
                   </div>
                </div>

              </div>

              {/* Pause/Play Control */}
              <button
                onClick={() => setHeroPaused(!heroPaused)}
                className="absolute bottom-0 right-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-[#1a73e8] transition-colors z-30"
              >
                {heroPaused ? '▶' : '||'}
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 2: FEATURES ROW
          60-Min Response, Licensed, Insurance
          ======================================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1296px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Clock, title: "60-Minute Response", desc: "Our crews arrive fast when water damage strikes, day or night." },
              { icon: Shield, title: "Licensed Contractor", desc: "Full repair services from a bonded, insured Virginia Class A contractor." },
              { icon: FileCheck, title: "Direct Insurance Billing", desc: "We handle the claims process and bill your carrier directly." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#e8f0fe] rounded-full flex items-center justify-center text-[#1a73e8] mb-6">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-normal text-[#202124] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#5f6368] leading-relaxed max-w-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 3: CENTERED VALUE PROP
          Fast Response Prevents Lasting Damage
          ======================================== */}
      <section className="py-20 lg:py-24 text-center bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[32px] md:text-[44px] font-normal leading-tight text-[#202124] mb-6">
            Fast Response Prevents Lasting Damage
          </h2>
          <p className="text-lg text-[#3c4043] leading-relaxed">
            Water spreads quickly through drywall, flooring, and structural framing. Every hour of delay increases restoration costs and mold risk. Our certified technicians begin mitigation within 60 minutes to protect your property.
          </p>
        </div>
      </section>

      {/* City-specific sections */}
      {isSubdomain && <TrustBadgeBar compact />}
      {isSubdomain && franchise.neighborhoodResponseTimes?.length > 0 && (
        <NeighborhoodResponseGrid neighborhoods={franchise.neighborhoodResponseTimes} cityName={cityName} />
      )}
      {isSubdomain && franchise.challenges?.length > 0 && (
        <LocalExpertiseCards challenges={franchise.challenges} cityName={cityName} />
      )}

      {/* ========================================
          SECTION 4: LIVE STATUS CARD
          Shows active crews and response time
          ======================================== */}
      <section className="py-20 lg:py-24 bg-gray-50 border-t border-gray-100">
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
      <section className="py-20 lg:py-24 bg-primary text-white">
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
      <section className="bg-white py-20 lg:py-24 border-t border-gray-100">
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
