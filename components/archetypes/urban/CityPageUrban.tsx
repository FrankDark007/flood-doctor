// components/archetypes/urban/CityPageUrban.tsx
// High-Rise/Urban archetype template for Arlington, Tysons, Reston
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

interface UrbanPageProps {
  content: ArchetypeContent;
  service?: string;
}

// HOA Partnership Badge
const HOAPartnerBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 text-blue-100">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
    <span className="text-sm font-medium">HOA & Property Management Partners</span>
  </div>
);

// Multi-Unit Coordination Section
const MultiUnitCoordination: React.FC<{ cityName: string }> = ({ cityName }) => (
  <div className="py-16 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Multi-Unit Water Damage Coordination
          </h2>
          <p className="text-lg text-slate-300 mb-6">
            High-rise water damage affects multiple units simultaneously. Our {cityName} teams coordinate between affected residents, building management, and insurance providers for seamless restoration.
          </p>
          <ul className="space-y-3">
            {[
              'Immediate building management notification',
              'Coordinate access across affected units',
              'Central communication hub for all parties',
              'Insurance documentation per unit'
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
            <div className="text-sm text-slate-400">Avg Units per Incident</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">4hr</div>
            <div className="text-sm text-slate-400">Full Building Assessment</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
            <div className="text-sm text-slate-400">Point of Contact</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-sm text-slate-400">Building Manager Line</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// High-Rise Building Systems Section
const BuildingSystemsSection: React.FC<{ cityName: string }> = ({ cityName }) => (
  <div className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          High-Rise Building System Expertise
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {cityName}'s modern high-rises have complex building systems. Our technicians are trained in the unique challenges of multi-story water damage.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: '🏢', title: 'HVAC Systems', desc: 'Prevent water spread through central air systems' },
          { icon: '⚡', title: 'Electrical Panels', desc: 'Safe isolation and inspection of electrical rooms' },
          { icon: '🚗', title: 'Parking Garages', desc: 'Underground flooding and drainage issues' },
          { icon: '🔧', title: 'Mechanical Rooms', desc: 'Pump rooms, boiler areas, and utility spaces' }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Commercial/Residential Toggle
const PropertyTypeSection: React.FC<{ cityName: string }> = ({ cityName }) => (
  <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Serving All {cityName} Property Types
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-shadow">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Residential High-Rise</h3>
          <p className="text-slate-600 mb-6">
            Condos, apartments, and luxury residential towers throughout {cityName}. We coordinate with HOAs and property managers for seamless restoration.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Condo unit flooding</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Common area water damage</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>HOA coordination</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-shadow">
          <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Commercial Buildings</h3>
          <p className="text-slate-600 mb-6">
            Office towers, retail spaces, and mixed-use developments. Minimize business interruption with our rapid commercial response.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>Office building floods</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>Retail space damage</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>Business continuity planning</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const CityPageUrban: React.FC<UrbanPageProps> = ({ content, service = 'water-damage' }) => {
  const { franchise, cityName, neighborhoods, landmarks, commonIssues, architectureNotes, features } = content;

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "EmergencyService"],
    "additionalType": "https://schema.org/LocalBusiness",
    "@id": `https://${franchise.id}.flood.doctor/${service}`,
    "name": `Flood Doctor - High-Rise Water Damage Restoration ${cityName} VA`,
    "image": "https://flood.doctor/logo.png",
    "url": `https://${franchise.id}.flood.doctor/${service}`,
    "telephone": franchise.phone,
    "description": `24/7 emergency water damage restoration for ${cityName} high-rises and condos. Multi-unit coordination, HOA partnerships, and commercial expertise. IICRC certified.`,
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
        title={`High-Rise Water Damage Restoration ${cityName}, VA | 24/7 Emergency`}
        description={`${cityName}'s high-rise and condo water damage specialists. Multi-unit coordination, HOA partnerships, commercial expertise. Call ${franchise.phone}.`}
        structuredData={locationSchema}
      />

      {/* URBAN HERO - Modern gradient with animated background */}
      <AnimatedHeroBackground variant="urban" className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: `${cityName} Water Damage`, path: `/locations/${franchise.id}-water-damage/` },
            ]}
            theme="dark"
          />

          {/* URBAN-SPECIFIC: HOA Partner Badge */}
          <HOAPartnerBadge />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6 tracking-tight">
            High-Rise Water Damage<br />
            <span className="text-cyan-300">Restoration in {cityName}</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
            {architectureNotes} Our IICRC-certified teams specialize in multi-unit coordination, building system protection, and rapid high-rise response.
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
              Request Building Assessment
            </a>
          </div>
        </div>
      </AnimatedHeroBackground>

      {/* URBAN STATS */}
      <div className="py-12 bg-slate-100 border-b border-slate-200">
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

      {/* MULTI-UNIT COORDINATION */}
      <MultiUnitCoordination cityName={cityName} />

      {/* BUILDING SYSTEMS */}
      <BuildingSystemsSection cityName={cityName} />

      {/* PROPERTY TYPES */}
      <PropertyTypeSection cityName={cityName} />

      {/* RESTORATION PROCESS */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our High-Rise Restoration Process
            </h2>
          </div>
          <ProcessTimeline variant="horizontal" />
        </div>
      </div>

      {/* LOCAL CHALLENGES */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            {cityName} High-Rise Challenges We Solve
          </h2>
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
                  Our high-rise specialists handle this regularly in {cityName} buildings.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEIGHBORHOODS */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Serving {cityName}'s Urban Communities
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
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

      {/* COMPARISON TABLE */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why {cityName} Buildings Choose Flood Doctor
            </h2>
          </div>
          <ComparisonTable />
        </div>
      </div>

      {/* SERVICES */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Complete Building Restoration Services
            </h2>
          </div>
          <ServiceIconGrid variant="large" columns={3} />
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Questions from {cityName} Building Managers
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              Can you coordinate restoration across multiple affected units?
            </h3>
            <p className="text-slate-600">
              Absolutely. Our multi-unit coordination system ensures seamless communication between all affected residents, building management, and insurance adjusters. One point of contact manages the entire restoration.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              Do you have experience with HOA and property management requirements?
            </h3>
            <p className="text-slate-600">
              Yes. We work with {cityName}'s major HOAs and property management companies daily. We understand documentation requirements, communication protocols, and common area responsibilities.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <EmergencyBadge size="lg" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Water Emergency in Your {cityName} Building?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our high-rise specialists respond 24/7 with multi-unit coordination capabilities.
          </p>
          <a
            href={`tel:${franchise.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-xl text-lg"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {franchise.phone}
          </a>
          <p className="text-sm text-slate-400 mt-6">
            24/7 emergency response · Multi-unit coordination · HOA partnerships · IICRC certified
          </p>
        </div>
      </div>
    </main>
  );
};

export default CityPageUrban;
