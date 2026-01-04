// components/archetypes/estate/HighValueAssetCallout.tsx
// Estate-specific component for high-value asset protection messaging

import React from 'react';

interface HighValueAssetCalloutProps {
  cityName: string;
  commonIssues: string[];
}

const HighValueAssetCallout: React.FC<HighValueAssetCalloutProps> = ({ cityName, commonIssues }) => {
  const assetTypes = [
    {
      icon: "🎨",
      title: "Art Collections",
      description: "Museum-grade handling protocols for paintings, sculptures, and collectibles. We photograph and document before any restoration work begins.",
    },
    {
      icon: "🎹",
      title: "Musical Instruments",
      description: "Grand pianos, antique instruments, and music rooms require specialized low-humidity drying to prevent warping and damage.",
    },
    {
      icon: "🎬",
      title: "Home Theaters",
      description: "Professional-grade AV equipment, acoustic panels, and custom seating. We coordinate with your integrator for safe disconnection.",
    },
    {
      icon: "📚",
      title: "Libraries & Studies",
      description: "Rare books, antique furniture, and wood-paneled studies require careful moisture management to prevent irreversible damage.",
    },
    {
      icon: "💎",
      title: "Custom Millwork",
      description: "Hand-carved moldings, exotic wood floors, and bespoke cabinetry. Our craftsmen understand what can't be replaced.",
    },
    {
      icon: "🏛️",
      title: "Antique Furnishings",
      description: "Period furniture, Oriental rugs, and heirloom pieces require delicate handling and specialized drying techniques.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Protecting What Can't Be Replaced
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {cityName} estates contain irreplaceable assets. Our restoration approach prioritizes high-value items from the first moment of response—not as an afterthought.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assetTypes.map((asset, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{asset.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{asset.title}</h3>
              <p className="text-sm text-slate-600">{asset.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Insurance Documentation Specialists</h4>
              <p className="text-sm text-blue-800">
                High-value claims require meticulous documentation. We provide appraisal-grade photo records, moisture mapping, and detailed condition reports that insurance adjusters trust. Our documentation has supported claims exceeding $1M in {cityName} properties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighValueAssetCallout;
