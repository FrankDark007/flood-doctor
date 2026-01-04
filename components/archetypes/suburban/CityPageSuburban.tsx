// components/archetypes/suburban/CityPageSuburban.tsx
// Suburban/Family archetype template for Fairfax, Springfield, Herndon, Ashburn, Lorton
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

interface SuburbanPageProps {
  content: ArchetypeContent;
  service?: string;
  showMilitaryBadge?: boolean; // For Springfield/Fort Belvoir area
}

// Family-Focused Badge
const FamilyFocusedBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-400/30 rounded-full px-4 py-2 text-green-100">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
    <span className="text-sm font-medium">Family-Focused Restoration</span>
  </div>
);

// Military Family Badge (for Springfield)
const MilitaryFamilyBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 text-blue-100 ml-3">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
    <span className="text-sm font-medium">Military Family Specialists</span>
  </div>
);

// Basement Flooding Section
const BasementFloodingSection: React.FC<{ cityName: string }> = ({ cityName }) => (
  <div className="py-16 bg-blue-50 border-y border-blue-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Basement Flooding Specialists
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            {cityName}'s suburban homes often feature finished basements, split-level designs, and below-grade living spaces.
            When water intrusion strikes, our teams act fast to protect your family's home.
          </p>
          <ul className="space-y-3">
            {[
              'Sump pump failure response',
              'Foundation crack water intrusion',
              'Finished basement restoration',
              'Mold prevention in below-grade spaces'
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Water Migrates Down</h3>
            <p className="text-slate-600 mb-6">
              In split-level and multi-story homes, water from upper floors quickly finds its way to basements.
              Our teams trace water to the source while simultaneously extracting from lower levels.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600">60min</div>
                <div className="text-xs text-slate-500">Avg Response Time</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs text-slate-500">Emergency Line</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Split-Level Home Section
const SplitLevelSection: React.FC<{ cityName: string }> = ({ cityName }) => (
  <div className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Split-Level & Multi-Story Home Expertise
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {cityName}'s neighborhoods feature many split-level, bi-level, and colonial homes.
          We understand how water travels through these unique floor plans.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Split-Level Homes',
            icon: '🏠',
            desc: 'Water migration between offset floors requires strategic extraction and drying placement.',
            issues: ['Kitchen to lower family room', 'Bathroom to basement below', 'Laundry room flooding']
          },
          {
            title: 'Colonial & Two-Story',
            icon: '🏡',
            desc: 'Second-floor bathroom or appliance failures can affect multiple rooms below.',
            issues: ['Ceiling water damage', 'Wall cavity moisture', 'Hardwood floor damage']
          },
          {
            title: 'Finished Basements',
            icon: '🛋️',
            desc: 'Below-grade living spaces require specialized drying to prevent mold and structural issues.',
            issues: ['Sump pump failures', 'Foundation seepage', 'High humidity concerns']
          }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
            <ul className="space-y-1 text-xs text-slate-500">
              {item.issues.map((issue, j) => (
                <li key={j} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Sump Pump Section
const SumpPumpSection: React.FC<{ cityName: string }> = ({ cityName }) => (
  <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4">Common Sump Pump Failure Causes</h4>
            <div className="space-y-3">
              {[
                { cause: 'Power outage during storm', percent: 35 },
                { cause: 'Pump mechanical failure', percent: 25 },
                { cause: 'Clogged intake or discharge', percent: 20 },
                { cause: 'Float switch malfunction', percent: 15 },
                { cause: 'Overwhelmed capacity', percent: 5 }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{item.cause}</span>
                    <span className="font-medium text-slate-900">{item.percent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Sump Pump Failure Response
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            When your sump pump fails in {cityName}, every minute counts.
            Our emergency teams arrive with portable extraction pumps to immediately remove standing water.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-red-800">Warning</h4>
                <p className="text-sm text-red-700">
                  Mold can begin growing within 24-48 hours of water exposure. Fast extraction is critical.
                </p>
              </div>
            </div>
          </div>
          <a href="/resources/sump-pump-guide/" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
            Read Our Sump Pump Emergency Guide
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const CityPageSuburban: React.FC<SuburbanPageProps> = ({ content, service = 'water-damage', showMilitaryBadge = false }) => {
  const { franchise, cityName, neighborhoods, landmarks, commonIssues, architectureNotes, features } = content;

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "EmergencyService"],
    "additionalType": "https://schema.org/LocalBusiness",
    "@id": `https://${franchise.id}.flood.doctor/${service}`,
    "name": `Flood Doctor - Suburban Home Water Damage Restoration ${cityName} VA`,
    "image": "https://flood.doctor/logo.png",
    "url": `https://${franchise.id}.flood.doctor/${service}`,
    "telephone": franchise.phone,
    "description": `24/7 emergency water damage restoration for ${cityName} homes. Basement flooding specialists, split-level expertise, and family-focused service. IICRC certified.`,
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
        title={`Suburban Home Water Damage Restoration ${cityName}, VA | 24/7 Emergency`}
        description={`${cityName}'s trusted home restoration specialists. Basement flooding, sump pump failures, split-level expertise. Call ${franchise.phone}.`}
        structuredData={locationSchema}
      />

      {/* SUBURBAN HERO - Warm, family-focused with animated background */}
      <AnimatedHeroBackground variant="suburban" className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: `${cityName} Water Damage`, path: `/locations/${franchise.id}-water-damage/` },
            ]}
            theme="dark"
          />

          {/* SUBURBAN-SPECIFIC: Family Badge + Optional Military Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <FamilyFocusedBadge />
            {showMilitaryBadge && <MilitaryFamilyBadge />}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6 tracking-tight">
            Home Water Damage<br />
            <span className="text-green-300">Restoration in {cityName}</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
            {architectureNotes} Our IICRC-certified teams specialize in basement flooding, split-level homes, and getting your family back to normal fast.
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
              Request Home Assessment
            </a>
          </div>
        </div>
      </AnimatedHeroBackground>

      {/* SUBURBAN STATS */}
      <div className="py-12 bg-green-50 border-b border-green-200">
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

      {/* BASEMENT FLOODING */}
      <BasementFloodingSection cityName={cityName} />

      {/* SPLIT-LEVEL HOMES */}
      <SplitLevelSection cityName={cityName} />

      {/* SUMP PUMP SECTION */}
      <SumpPumpSection cityName={cityName} />

      {/* RESTORATION PROCESS */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Home Restoration Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From emergency call to completed restoration, we keep your family informed every step of the way.
            </p>
          </div>
          <ProcessTimeline variant="horizontal" />
        </div>
      </div>

      {/* LOCAL CHALLENGES */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            {cityName} Home Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{issue}</h3>
                <p className="text-sm text-slate-600">
                  Our home restoration specialists handle this regularly in {cityName} neighborhoods.
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
            Serving {cityName}'s Family Neighborhoods
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-slate-800">{neighborhood}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BEFORE/AFTER */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Home Restoration Results
            </h2>
          </div>
          <BeforeAfterSlider
            beforeImage="/images/process-tiles/process-35-basement-flooding.jpeg"
            afterImage="/images/process-tiles/process-33-restoration-complete-exterior.png"
            title="Basement Flooding Restoration"
            description="From flooded basement to family-ready living space"
          />
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why {cityName} Families Choose Flood Doctor
            </h2>
          </div>
          <ComparisonTable />
        </div>
      </div>

      {/* SERVICES */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Complete Home Restoration Services
            </h2>
          </div>
          <ServiceIconGrid variant="large" columns={3} />
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Questions from {cityName} Homeowners
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              My basement flooded overnight—what should I do first?
            </h3>
            <p className="text-slate-600">
              First, ensure safety—don't enter standing water if there's any electrical risk. Then call us immediately.
              Our {cityName} teams respond 24/7 with portable pumps to begin extraction while you handle insurance calls.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              Can you save my finished basement carpeting and drywall?
            </h3>
            <p className="text-slate-600">
              It depends on how quickly we respond and the type of water. Category 1 (clean water) often allows carpet cleaning and drying.
              We always try to save materials when safe and cost-effective, but your family's health comes first.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">
              How do I prevent this from happening again?
            </h3>
            <p className="text-slate-600">
              After restoration, we provide a free consultation on prevention: battery backup for sump pumps, water sensors,
              foundation waterproofing, and other measures specific to your {cityName} home's vulnerabilities.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-green-800 to-blue-900 text-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <EmergencyBadge size="lg" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Water Emergency at Your {cityName} Home?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Our family-focused teams respond 24/7 to get your home back to normal fast.
          </p>
          <a
            href={`tel:${franchise.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-xl text-lg"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {franchise.phone}
          </a>
          <p className="text-sm text-green-200 mt-6">
            24/7 emergency response · Basement specialists · Family-focused service · IICRC certified
          </p>
        </div>
      </div>
    </main>
  );
};

export default CityPageSuburban;
