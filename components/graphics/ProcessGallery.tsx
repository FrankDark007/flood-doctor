// components/graphics/ProcessGallery.tsx
// Interactive process tile gallery using the user's custom images

import React, { useState } from 'react';

interface ProcessTile {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'assessment' | 'extraction' | 'drying' | 'remediation' | 'restoration' | 'documentation';
  step?: number;
}

interface ProcessGalleryProps {
  className?: string;
  variant?: 'grid' | 'carousel' | 'timeline';
  category?: ProcessTile['category'];
}

// Full process tile library using the user's images
const processTiles: ProcessTile[] = [
  // Phase 1: Assessment & Response
  { id: 'dispatch', title: 'Emergency Dispatch', description: '24/7 emergency response team deployment', image: '/images/process-tiles/process-01-emergency-dispatch.png', category: 'assessment', step: 1 },
  { id: 'assessment', title: 'Initial Assessment', description: 'Comprehensive damage evaluation & scope', image: '/images/process-tiles/process-03-initial-assessment.png', category: 'assessment', step: 2 },
  { id: 'moisture-map', title: 'Moisture Mapping', description: 'Thermal imaging & moisture detection', image: '/images/process-tiles/process-04-moisture-mapping.png', category: 'assessment', step: 3 },
  { id: 'containment', title: 'Containment Setup', description: 'Isolate affected areas to prevent spread', image: '/images/process-tiles/process-06-containment-setup.png', category: 'assessment', step: 4 },

  // Phase 2: Water Extraction
  { id: 'extraction', title: 'Water Extraction', description: 'Industrial pumps remove standing water', image: '/images/process-tiles/process-05-water-extraction.png', category: 'extraction', step: 5 },
  { id: 'demolition', title: 'Demolition & Removal', description: 'Remove unsalvageable materials safely', image: '/images/process-tiles/process-07-demolition-removal.png', category: 'extraction', step: 6 },
  { id: 'carpet', title: 'Carpet Removal', description: 'Extract or remove water-damaged carpeting', image: '/images/process-tiles/process-08-carpet-removal-2.png', category: 'extraction', step: 7 },
  { id: 'flooring-remove', title: 'Flooring Removal', description: 'Remove damaged flooring materials', image: '/images/process-tiles/process-18-flooring-removal.png', category: 'extraction', step: 8 },
  { id: 'drywall-remove', title: 'Drywall Removal', description: 'Cut and remove water-damaged drywall', image: '/images/process-tiles/process-19-drywall-removal.png', category: 'extraction', step: 9 },

  // Phase 3: Drying
  { id: 'air-movers', title: 'Air Movers', description: 'High-velocity fans circulate dry air', image: '/images/process-tiles/process-08-air-movers.png', category: 'drying', step: 10 },
  { id: 'dehumidifiers', title: 'Dehumidifiers', description: 'Industrial dehumidification equipment', image: '/images/process-tiles/process-09-dehumidifiers.png', category: 'drying', step: 11 },
  { id: 'air-scrubbers', title: 'Air Scrubbers', description: 'HEPA filtration for air quality', image: '/images/process-tiles/process-10-air-scrubbers.png', category: 'drying', step: 12 },
  { id: 'structural', title: 'Structural Drying', description: 'Deep drying of walls, floors, ceilings', image: '/images/process-tiles/process-14-structural-drying.png', category: 'drying', step: 13 },
  { id: 'hardwood', title: 'Hardwood Drying', description: 'Specialized wood floor drying systems', image: '/images/process-tiles/process-41-Hardwood-drying.png', category: 'drying', step: 14 },

  // Phase 4: Remediation
  { id: 'mold-inspect', title: 'Mold Inspection', description: 'Professional mold testing & assessment', image: '/images/process-tiles/Process-11-mold-inspection.png', category: 'remediation', step: 15 },
  { id: 'mold-remediate', title: 'Mold Remediation', description: 'Safe mold removal & treatment', image: '/images/process-tiles/process-12-mold-remediation.png', category: 'remediation', step: 16 },
  { id: 'antimicrobial', title: 'Antimicrobial Treatment', description: 'Disinfection & microbial prevention', image: '/images/process-tiles/process-13-antimicrobial-treatment.png', category: 'remediation', step: 17 },
  { id: 'sanitization', title: 'Sanitization', description: 'Deep cleaning & sanitization', image: '/images/process-tiles/process-21-sanitization.png', category: 'remediation', step: 18 },
  { id: 'odor', title: 'Odor Removal', description: 'Eliminate musty odors permanently', image: '/images/process-tiles/process-22-odor-removal.png', category: 'remediation', step: 19 },
  { id: 'hvac', title: 'HVAC Cleaning', description: 'Ductwork cleaning & treatment', image: '/images/process-tiles/process-20-hvac-cleaning.png', category: 'remediation', step: 20 },

  // Phase 5: Restoration
  { id: 'planning', title: 'Reconstruction Planning', description: 'Detailed restoration scope & timeline', image: '/images/process-tiles/process-23-reconstruction-planning.png', category: 'restoration', step: 21 },
  { id: 'insulation', title: 'Insulation Replacement', description: 'New insulation installation', image: '/images/process-tiles/process-24-insulation-replacement.png', category: 'restoration', step: 22 },
  { id: 'drywall-install', title: 'Drywall Installation', description: 'New drywall hung & secured', image: '/images/process-tiles/process-25-drywall-installation.png', category: 'restoration', step: 23 },
  { id: 'drywall-finish', title: 'Drywall Finishing', description: 'Mudding, taping & texturing', image: '/images/process-tiles/process-26-drywall-finishing.png', category: 'restoration', step: 24 },
  { id: 'painting', title: 'Painting', description: 'Prime & paint to match existing', image: '/images/process-tiles/process-27-painting.png', category: 'restoration', step: 25 },
  { id: 'flooring-install', title: 'Flooring Installation', description: 'New flooring materials installed', image: '/images/process-tiles/process-28-flooring-installation.png', category: 'restoration', step: 26 },
  { id: 'trim', title: 'Trim Installation', description: 'Baseboards, casings & moldings', image: '/images/process-tiles/process-29-trim-installation.png', category: 'restoration', step: 27 },

  // Phase 6: Documentation & Completion
  { id: 'inspection', title: 'Final Inspection', description: 'Quality assurance walkthrough', image: '/images/process-tiles/process-30-final-inspection.png', category: 'documentation', step: 28 },
  { id: 'insurance', title: 'Insurance Documentation', description: 'Complete claim documentation package', image: '/images/process-tiles/process-31-insurance-documentation.png', category: 'documentation', step: 29 },
  { id: 'moveback', title: 'Contents Move-Back', description: 'Return belongings to restored home', image: '/images/process-tiles/process-32-contents-moveback.png', category: 'documentation', step: 30 },
];

const categoryLabels: Record<ProcessTile['category'], string> = {
  assessment: 'Assessment',
  extraction: 'Extraction',
  drying: 'Drying',
  remediation: 'Remediation',
  restoration: 'Restoration',
  documentation: 'Completion'
};

const categoryColors: Record<ProcessTile['category'], string> = {
  assessment: 'from-amber-500 to-orange-600',
  extraction: 'from-blue-500 to-cyan-600',
  drying: 'from-sky-500 to-blue-600',
  remediation: 'from-emerald-500 to-teal-600',
  restoration: 'from-violet-500 to-purple-600',
  documentation: 'from-green-500 to-emerald-600'
};

const ProcessGallery: React.FC<ProcessGalleryProps> = ({
  className = '',
  variant = 'grid',
  category
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProcessTile['category'] | 'all'>(category || 'all');
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);

  const filteredTiles = selectedCategory === 'all'
    ? processTiles
    : processTiles.filter(tile => tile.category === selectedCategory);

  const categories = Object.keys(categoryLabels) as ProcessTile['category'][];

  if (variant === 'grid') {
    return (
      <div className={`${className}`}>
        {/* Category Filter */}
        {!category && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Steps
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? `bg-gradient-to-r ${categoryColors[cat]} text-white shadow-lg`
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        )}

        {/* Tile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredTiles.map((tile) => (
            <div
              key={tile.id}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredTile(tile.id)}
              onMouseLeave={() => setHoveredTile(null)}
            >
              {/* Image */}
              <img
                src={tile.image}
                alt={tile.title}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                hoveredTile === tile.id ? 'opacity-100' : 'opacity-70'
              }`} />

              {/* Step Number Badge */}
              {tile.step && (
                <div className={`absolute top-3 left-3 w-8 h-8 rounded-lg bg-gradient-to-br ${categoryColors[tile.category]} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                  {tile.step}
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-md text-xs font-medium bg-white/20 backdrop-blur-sm text-white`}>
                  {categoryLabels[tile.category]}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-300 transition-colors">
                  {tile.title}
                </h3>
                <p className={`text-white/80 text-sm transition-all duration-300 ${
                  hoveredTile === tile.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  {tile.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Timeline variant
  return (
    <div className={`${className}`}>
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-blue-500 to-green-500 transform -translate-x-1/2 hidden md:block" />

        <div className="space-y-8">
          {categories.map((cat, catIndex) => {
            const categoryTiles = processTiles.filter(t => t.category === cat);
            return (
              <div key={cat} className="relative">
                {/* Category Header */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`px-6 py-2 rounded-full bg-gradient-to-r ${categoryColors[cat]} text-white font-bold shadow-lg`}>
                    Phase {catIndex + 1}: {categoryLabels[cat]}
                  </div>
                </div>

                {/* Tiles in category */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                  {categoryTiles.map((tile) => (
                    <div
                      key={tile.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={tile.image}
                        alt={tile.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`w-7 h-7 rounded-lg bg-gradient-to-br ${categoryColors[cat]} flex items-center justify-center text-white text-xs font-bold`}>
                            {tile.step}
                          </span>
                          <h3 className="font-bold text-slate-900">{tile.title}</h3>
                        </div>
                        <p className="text-slate-600 text-sm">{tile.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessGallery;
