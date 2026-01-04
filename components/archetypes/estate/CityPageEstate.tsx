// components/archetypes/estate/CityPageEstate.tsx
// Estate/Luxury archetype template for McLean, Great Falls
// Enhanced with premium visual components

import React from 'react';
import PageMeta from '../../ui/PageMeta';
import Breadcrumbs from '../../ui/Breadcrumbs';
import { ArchetypeContent } from '@/hooks/useArchetypeContent';
import WineCellarProtection from './WineCellarProtection';
import HighValueAssetCallout from './HighValueAssetCallout';
import DiscreteServiceBadge from './DiscreteServiceBadge';
// Premium visual components
import {
  AnimatedHeroBackground,
  AnimatedStats,
  TrustBadges,
  ProcessTimeline,
  ComparisonTable,
  BeforeAfterSlider,
  EmergencyBadge,
  ServiceIconGrid,
  ProcessGallery
} from '../../graphics';
import { archetypeImages } from '@/config/unsplashImages';

interface EstatePageProps {
  content: ArchetypeContent;
  service?: string;
}

const CityPageEstate: React.FC<EstatePageProps> = ({ content, service = 'water-damage' }) => {
  const { franchise, cityName, neighborhoods, landmarks, commonIssues, architectureNotes, features, hasWineCellarContent, hasEquestrianFacilities } = content;

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "EmergencyService"],
    "additionalType": "https://schema.org/LocalBusiness",
    "@id": `https://${franchise.id}.flood.doctor/${service}`,
    "name": `Flood Doctor - Water Damage Restoration ${cityName} VA`,
    "image": "https://flood.doctor/logo.png",
    "url": `https://${franchise.id}.flood.doctor/${service}`,
    "telephone": franchise.phone,
    "description": `24/7 emergency water damage restoration for ${cityName} luxury estates. Specialized in wine cellar protection, home theater restoration, and high-value asset safeguarding. IICRC certified.`,
    "areaServed": neighborhoods.slice(0, 5).map(n => ({ "@type": "Place", "name": n })),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": franchise.coordinates.lat,
      "longitude": franchise.coordinates.lng
    }
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`Luxury Estate Water Damage Restoration ${cityName}, VA | Discrete 24/7 Service`}
        description={`${cityName}'s premier water damage restoration for luxury estates. Wine cellar protection, home theater restoration, high-value asset safeguarding. Discrete unmarked vehicles. Call ${franchise.phone}.`}
        structuredData={locationSchema}
      />

      {/* ESTATE HERO - Animated background with premium styling */}
      <AnimatedHeroBackground variant="estate" className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: `${cityName} Water Damage`, path: `/locations/${franchise.id}-water-damage/` },
            ]}
            theme="dark"
          />

          {/* ESTATE-SPECIFIC: Discrete Service Badge */}
          <DiscreteServiceBadge />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6 tracking-tight">
            Luxury Estate Water Damage<br />
            <span className="text-amber-300">Restoration in {cityName}</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
            {architectureNotes} Our discrete, IICRC-certified teams specialize in protecting irreplaceable finishes, wine collections, and custom construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${franchise.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {franchise.phone}
            </a>
            <a
              href="/request-service/"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-colors border-2 border-white/50"
            >
              Request Discrete Service
            </a>
          </div>
        </div>
      </AnimatedHeroBackground>

      {/* ESTATE STATS - Animated luxury metrics */}
      <div className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStats variant="cards" />
        </div>
      </div>

      {/* TRUST BADGES - Certification display */}
      <div className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges variant="horizontal" />
        </div>
      </div>

      {/* ESTATE-SPECIFIC: Wine Cellar Protection Section */}
      {hasWineCellarContent && <WineCellarProtection cityName={cityName} />}

      {/* ESTATE-SPECIFIC: High-Value Asset Protection */}
      <HighValueAssetCallout cityName={cityName} commonIssues={commonIssues} />

      {/* RESTORATION PROCESS - Visual timeline */}
      <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Estate Restoration Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From initial response to final restoration, every step is handled with the discretion and precision {cityName} estate owners expect.
            </p>
          </div>
          <ProcessTimeline variant="horizontal" />
        </div>
      </div>

      {/* LOCAL CHALLENGES - From franchises.ts localHooks */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          {cityName} Estate Property Challenges We Solve
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-3xl">
          Our teams understand the unique water damage challenges facing {cityName}'s luxury properties.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonIssues.map((issue, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{issue}</h3>
              <p className="text-sm text-slate-600">
                Our estate specialists have extensive experience handling this exact situation in {cityName} luxury homes.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* NEIGHBORHOODS - From franchises.ts localHooks */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Serving {cityName}'s Premier Neighborhoods
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Rapid response to all {cityName} communities, with specialized expertise in estate properties.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-slate-800">{neighborhood}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LANDMARKS - From franchises.ts localHooks */}
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Near {cityName} Landmarks</h3>
        <div className="flex flex-wrap gap-3">
          {landmarks.map((landmark, index) => (
            <span key={index} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm">
              {landmark}
            </span>
          ))}
        </div>
      </div>

      {/* ESTATE FEATURES - From archetypeConfig */}
      <div className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Estate-Level Service Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EQUESTRIAN SECTION - Great Falls only */}
      {hasEquestrianFacilities && (
        <div className="py-16 bg-amber-50 border-y border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-3xl">🐴</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Equestrian Facility Specialists</h2>
                <p className="text-slate-600 max-w-2xl">
                  Great Falls' many equestrian properties require specialized water damage response. Our teams understand barn construction, arena drainage, tack room climate control, and the urgency of protecting your horses and equipment. We respond 24/7 to stables, riding arenas, and farm buildings.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WHY CHOOSE US - Comparison Table */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why {cityName} Estate Owners Choose Flood Doctor
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how our estate-focused service compares to standard restoration companies.
            </p>
          </div>
          <ComparisonTable />
        </div>
      </div>

      {/* BEFORE/AFTER - Visual restoration showcase */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Estate Restoration Results
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See the quality of our restoration work on {cityName} luxury properties.
            </p>
          </div>
          <BeforeAfterSlider
            beforeImage="/images/process-tiles/process-35-basement-flooding.jpeg"
            afterImage="/images/process-tiles/process-33-restoration-complete-exterior.png"
            title="Complete Estate Restoration"
            description="From severe water damage to pristine condition"
          />
        </div>
      </div>

      {/* FAQ Section - Estate-focused questions */}
      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Questions from {cityName} Estate Owners
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              Do you arrive in unmarked vehicles for privacy?
            </h3>
            <p className="text-slate-600">
              Yes. We understand that {cityName} estate owners value discretion. Our emergency response vehicles are unmarked white vans and trucks—no logos, no attention. Your neighbors won't know we're there unless you tell them.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              Can you protect my wine collection during water damage restoration?
            </h3>
            <p className="text-slate-600">
              Absolutely. Our wine cellar specialists understand temperature sensitivity, humidity requirements, and the value of your collection. We deploy specialized climate-controlled drying equipment and can coordinate with wine storage facilities if temporary relocation is needed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              How do you handle custom millwork and high-end finishes?
            </h3>
            <p className="text-slate-600">
              {cityName} estates often feature irreplaceable custom millwork, hand-painted finishes, and imported materials. Our technicians are trained to assess these elements before any drying equipment is placed. We use low-air-movement techniques near delicate surfaces and coordinate with your original craftsmen when restoration is needed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              What about private well and septic systems?
            </h3>
            <p className="text-slate-600">
              Many {cityName} estates operate on private well water and septic systems. When water damage involves these systems, we coordinate with licensed well and septic contractors to ensure complete system integrity. We understand the complexities of off-grid utilities that many estate properties face.
            </p>
          </div>
        </div>
      </div>

      {/* OUR SERVICES - Interactive service grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Complete Estate Restoration Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Full-service restoration for every type of property damage. Available 24/7 for {cityName} luxury homes.
            </p>
          </div>
          <ServiceIconGrid variant="large" columns={3} />
        </div>
      </div>

      {/* PROCESS GALLERY - Real restoration photos */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Restoration Process in Action
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we handle every step of the restoration process with professional care and attention to detail.
            </p>
          </div>
          <ProcessGallery variant="grid" />
        </div>
      </div>

      {/* ESTATE CTA - Premium feel with Emergency Badge */}
      <div className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 15L45 15L37 22L40 32L30 26L20 32L23 22L15 15L25 15Z' fill='%23fff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <EmergencyBadge size="lg" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Water Emergency at Your {cityName} Estate?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our discrete response teams are standing by 24/7. One call brings certified specialists to your property within 60 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${franchise.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-xl text-lg group"
            >
              <svg className="w-6 h-6 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {franchise.phone}
            </a>
          </div>
          <p className="text-sm text-slate-400 mt-6">
            24/7 discrete service · IICRC Master Restorers · Unmarked vehicles · Estate specialists since 2005
          </p>
        </div>
      </div>

      {/* PARTNERS Section */}
      {franchise.partners.length > 0 && (
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Our {cityName} Partner Network</h3>
          <div className="flex flex-wrap gap-4">
            {franchise.partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                {partner.name} ({partner.category})
              </a>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default CityPageEstate;
