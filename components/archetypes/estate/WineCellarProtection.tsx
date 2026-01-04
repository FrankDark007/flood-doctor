// components/archetypes/estate/WineCellarProtection.tsx
// Estate-specific component for wine cellar water damage expertise

import React from 'react';

interface WineCellarProtectionProps {
  cityName: string;
}

const WineCellarProtection: React.FC<WineCellarProtectionProps> = ({ cityName }) => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-800/50 text-purple-200 text-sm mb-4">
              <span className="mr-2">🍷</span> Estate Specialty
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Wine Cellar Protection & Restoration
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              {cityName}'s finest homes often feature climate-controlled wine cellars valued at $50,000 to $500,000+. When water threatens your collection, our specialists understand the urgency—and the stakes.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-white">Temperature-Sensitive Drying</span>
                  <p className="text-sm text-slate-400">We maintain cellar temperatures during restoration to prevent bottle damage.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-white">Humidity Control</span>
                  <p className="text-sm text-slate-400">Specialized dehumidification preserves cork integrity and label condition.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-white">Emergency Relocation Coordination</span>
                  <p className="text-sm text-slate-400">We partner with climate-controlled storage facilities for collections requiring temporary relocation.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-white">Insurance Documentation</span>
                  <p className="text-sm text-slate-400">Detailed appraisal-grade documentation for high-value collection claims.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={`/images/wine-cellar-restoration.jpg`}
              alt={`Wine cellar water damage protection in ${cityName} luxury homes`}
              className="rounded-lg shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = '/images/placeholder-wine-cellar.jpg';
              }}
            />
            <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-sm font-semibold">Collections Protected: 200+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineCellarProtection;
