// pages/VisualComponentsDemo.tsx
// Demo page showcasing all premium visual components

import React from 'react';
import {
  WaterDropletIcon,
  EmergencyBadge,
  TrustBadges,
  ProcessTimeline,
  ProcessGallery,
  AnimatedStats,
  ComparisonTable,
  BeforeAfterSlider,
  AnimatedHeroBackground,
  ServiceIconGrid
} from '../components/graphics';

const VisualComponentsDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section with Animated Background */}
      <AnimatedHeroBackground variant="water" className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <WaterDropletIcon size={80} />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Premium Visual Components
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            High-end SVG animations, graphics, and interactive elements for the Flood Doctor website
          </p>
        </div>
      </AnimatedHeroBackground>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Emergency Badge */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Emergency Badge (Animated)</h2>
          <div className="flex flex-wrap gap-8 items-center justify-center bg-slate-800 rounded-2xl p-12">
            <EmergencyBadge size="sm" />
            <EmergencyBadge size="md" />
            <EmergencyBadge size="lg" />
          </div>
        </section>

        {/* Trust Badges */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Trust Badges</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Grid Variant</h3>
              <TrustBadges variant="grid" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Horizontal Variant</h3>
              <TrustBadges variant="horizontal" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Compact Variant</h3>
              <TrustBadges variant="compact" />
            </div>
          </div>
        </section>

        {/* Animated Stats */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Animated Statistics</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Hero Variant</h3>
              <AnimatedStats variant="hero" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Cards Variant</h3>
              <AnimatedStats variant="cards" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Inline Variant</h3>
              <AnimatedStats variant="inline" />
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Process Timeline</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Horizontal</h3>
              <ProcessTimeline variant="horizontal" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Vertical</h3>
              <ProcessTimeline variant="vertical" className="max-w-3xl" />
            </div>
          </div>
        </section>

        {/* Service Icon Grid */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Service Icons</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Large Cards</h3>
              <ServiceIconGrid variant="large" columns={3} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Standard Cards</h3>
              <ServiceIconGrid variant="cards" columns={3} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Minimal</h3>
              <ServiceIconGrid variant="minimal" columns={2} />
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Comparison Table</h2>
          <ComparisonTable />
        </section>

        {/* Process Gallery */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Process Gallery (Your Custom Tiles)</h2>
          <ProcessGallery variant="grid" />
        </section>

        {/* Before/After Slider */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Before/After Slider</h2>
          <div className="max-w-2xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/process-tiles/process-35-basement-flooding.jpeg"
              afterImage="/images/process-tiles/process-33-restoration-complete-exterior.png"
              title="Basement Flooding Restoration"
              description="Complete restoration from flood damage to finished basement"
            />
          </div>
        </section>

        {/* Hero Backgrounds */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Animated Hero Backgrounds</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedHeroBackground variant="estate" className="h-48 rounded-xl">
              <div className="flex items-center justify-center h-full text-white font-bold">
                Estate Archetype
              </div>
            </AnimatedHeroBackground>
            <AnimatedHeroBackground variant="historic" className="h-48 rounded-xl">
              <div className="flex items-center justify-center h-full text-white font-bold">
                Historic Archetype
              </div>
            </AnimatedHeroBackground>
            <AnimatedHeroBackground variant="urban" className="h-48 rounded-xl">
              <div className="flex items-center justify-center h-full text-white font-bold">
                Urban Archetype
              </div>
            </AnimatedHeroBackground>
            <AnimatedHeroBackground variant="suburban" className="h-48 rounded-xl">
              <div className="flex items-center justify-center h-full text-white font-bold">
                Suburban Archetype
              </div>
            </AnimatedHeroBackground>
          </div>
        </section>

        {/* Water Droplet Icons */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Water Droplet Icons</h2>
          <div className="flex items-end justify-center gap-8 bg-slate-800 rounded-2xl p-12">
            <WaterDropletIcon size={32} />
            <WaterDropletIcon size={48} />
            <WaterDropletIcon size={64} />
            <WaterDropletIcon size={80} />
            <WaterDropletIcon size={96} />
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-white py-12 text-center">
        <p className="text-slate-400">
          Visual Component Library for Flood Doctor
        </p>
        <p className="text-slate-500 text-sm mt-2">
          50+ process tiles • Premium SVG animations • Interactive components
        </p>
      </div>
    </div>
  );
};

export default VisualComponentsDemo;
