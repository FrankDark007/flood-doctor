// components/archetypes/historic/CityPageHistoric.tsx
// Historic/Urban archetype template for Alexandria, Falls Church, Vienna
// Enhanced with premium visual components

import React from 'react';
import PageMeta from '../../ui/PageMeta';
import Breadcrumbs from '../../ui/Breadcrumbs';
import { ArchetypeContent } from '@/hooks/useArchetypeContent';
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

interface HistoricPageProps {
  content: ArchetypeContent;
  service?: string;
}

// Historic preservation badge component
const PreservationBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 bg-amber-900/20 border border-amber-700/30 rounded-full px-4 py-2 text-amber-100">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
    <span className="text-sm font-medium">Historic Preservation Specialists</span>
  </div>
);

// BAR Compliance Section
const BARComplianceSection: React.FC<{ cityName: string }> = ({ cityName }) => (
  <div className="py-16 bg-amber-50 border-y border-amber-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Board of Architectural Review Compliance
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            {cityName}'s historic districts require restoration work that maintains architectural integrity.
            Our teams understand BAR requirements and work within preservation guidelines while addressing water damage emergencies.
          </p>
          <ul className="space-y-3">
            {[
              'Documentation for BAR submissions',
              'Match original materials and finishes',
              'Coordinate with preservation consultants',
              'Maintain historic character during restoration'
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
          <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Historic District Expertise</h3>
          <p className="text-slate-600 mb-4">
            We've completed restoration projects in {cityName}'s most sensitive historic areas, working closely with preservation officers.
          </p>
          <a href="/resources/historic-restoration/" className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center">
            View Historic Restoration Guide
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Original Materials Care Section
const OriginalMaterialsSection: React.FC<{ cityName: string }> = ({ cityName }) => (
  <div className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Preserving Original Materials
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {cityName}'s historic homes feature irreplaceable craftsmanship. Our restoration techniques protect these treasures while addressing water damage.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: '🧱', title: 'Original Brick & Mortar', desc: 'Careful drying that prevents efflorescence and spalling' },
          { icon: '🪵', title: 'Heart Pine Floors', desc: 'Specialized techniques for irreplaceable antique wood' },
          { icon: '🏛️', title: 'Plaster & Lathe', desc: 'Preserve historic plaster rather than replace with drywall' },
          { icon: '🪟', title: 'Period Windows', desc: 'Protect original glass and wood sashes during restoration' }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CityPageHistoric: React.FC<HistoricPageProps> = ({ content, service = 'water-damage' }) => {
  const { franchise, cityName, neighborhoods, landmarks, commonIssues, architectureNotes, features } = content;

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "EmergencyService"],
    "additionalType": "https://schema.org/LocalBusiness",
    "@id": `https://${franchise.id}.flood.doctor/${service}`,
    "name": `Flood Doctor - Historic Property Water Damage Restoration ${cityName} VA`,
    "image": "https://flood.doctor/logo.png",
    "url": `https://${franchise.id}.flood.doctor/${service}`,
    "telephone": franchise.phone,
    "description": `24/7 emergency water damage restoration for ${cityName} historic properties. Specialists in original materials, BAR compliance, and preservation-focused drying. IICRC certified.`,
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
        title={`Historic Property Water Damage Restoration ${cityName}, VA | 24/7 Emergency`}
        description={`${cityName}'s trusted historic restoration specialists. Preservation-focused water damage response, original materials expertise, BAR compliance. Call ${franchise.phone}.`}
        structuredData={locationSchema}
      />

      {/* HISTORIC HERO - Warm heritage tones with animated background */}
      <AnimatedHeroBackground variant="historic" className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: `${cityName} Water Damage`, path: `/locations/${franchise.id}-water-damage/` },
            ]}
            theme="dark"
          />

          {/* HISTORIC-SPECIFIC: Preservation Badge */}
          <PreservationBadge />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6 tracking-tight">
            Historic Property Water Damage<br />
            <span className="text-amber-300">Restoration in {cityName}</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
            {architectureNotes} Our IICRC-certified teams specialize in preserving original materials while eliminating water damage and preventing mold.
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
              Request Preservation Assessment
            </a>
          </div>
        </div>
      </AnimatedHeroBackground>

      {/* HISTORIC STATS - Animated metrics */}
      <div className="py-12 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStats variant="cards" />
        </div>
      </div>

      {/* TRUST BADGES */}
      <div className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges variant="horizontal" />
        </div>
      </div>

      {/* BAR COMPLIANCE SECTION */}
      <BARComplianceSection cityName={cityName} />

      {/* ORIGINAL MATERIALS */}
      <OriginalMaterialsSection cityName={cityName} />

      {/* RESTORATION PROCESS */}
      <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Historic Restoration Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every step respects the historic character of your {cityName} property.
            </p>
          </div>
          <ProcessTimeline variant="horizontal" />
        </div>
      </div>

      {/* LOCAL CHALLENGES */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          {cityName} Historic Property Challenges We Solve
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-3xl">
          Our teams understand the unique water damage challenges facing {cityName}'s historic properties.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonIssues.map((issue, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{issue}</h3>
              <p className="text-sm text-slate-600">
                Our historic restoration specialists have extensive experience handling this in {cityName} properties.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* NEIGHBORHOODS */}
      <div className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Serving {cityName}'s Historic Neighborhoods
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Rapid response to all {cityName} communities, with specialized expertise in historic districts.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-amber-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-slate-800">{neighborhood}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why {cityName} Historic Property Owners Choose Flood Doctor
            </h2>
          </div>
          <ComparisonTable />
        </div>
      </div>

      {/* BEFORE/AFTER */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Historic Restoration Results
            </h2>
          </div>
          <BeforeAfterSlider
            beforeImage="/images/process-tiles/process-35-basement-flooding.jpeg"
            afterImage="/images/process-tiles/process-33-restoration-complete-exterior.png"
            title="Historic Property Restoration"
            description="Preserving character while eliminating water damage"
          />
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Complete Historic Restoration Services
            </h2>
          </div>
          <ServiceIconGrid variant="large" columns={3} />
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Questions from {cityName} Historic Property Owners
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              Can you match original plaster and finishes?
            </h3>
            <p className="text-slate-600">
              Yes. Our historic restoration team includes craftsmen trained in traditional plastering techniques. We can match lime plaster, horsehair plaster, and decorative finishes to maintain your {cityName} home's authentic character.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              Do you work with the Board of Architectural Review?
            </h3>
            <p className="text-slate-600">
              Absolutely. We understand {cityName}'s BAR requirements and can provide documentation, photos, and coordination with preservation officers to ensure all restoration work meets historic district guidelines.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              How do you protect original hardwood floors?
            </h3>
            <p className="text-slate-600">
              Our technicians use specialized low-velocity drying techniques that prevent cupping and warping in antique wood floors. We understand that original heart pine, oak, and other period flooring cannot be replaced—only preserved.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <EmergencyBadge size="lg" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Water Emergency at Your {cityName} Historic Property?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Our preservation-trained teams respond 24/7 to protect your irreplaceable historic home.
          </p>
          <a
            href={`tel:${franchise.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-amber-900 font-semibold rounded-lg hover:bg-amber-50 transition-colors shadow-xl text-lg"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {franchise.phone}
          </a>
          <p className="text-sm text-amber-200 mt-6">
            24/7 emergency response · Historic preservation specialists · IICRC certified · BAR compliance expertise
          </p>
        </div>
      </div>
    </main>
  );
};

export default CityPageHistoric;
