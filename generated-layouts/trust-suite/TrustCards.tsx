import React from 'react';
import { TRUST_DATA, PRIMARY_COLOR } from '../constants';

const TrustCards: React.FC = () => {
  // Choosing a subset to display as cards
  const displayItems = TRUST_DATA.filter(item => 
    ['iicrc', 'license', 'bbb', 'service'].includes(item.id)
  );

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="group relative bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative background accent */}
                <div 
                    className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${PRIMARY_COLOR}15` }} // 15 is approx 8% opacity hex
                    >
                      <Icon size={24} style={{ color: PRIMARY_COLOR }} />
                    </div>
                    {item.id === 'bbb' && (
                       <span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                         A+ Rated
                       </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {item.label}
                  </h3>
                  
                  <div className="text-2xl font-extrabold mb-2" style={{ color: PRIMARY_COLOR }}>
                    {item.value}
                  </div>
                  
                  <p className="text-slate-500 text-sm mt-auto">
                    {item.subtext || 'Verified and trusted for your peace of mind.'}
                  </p>
                  
                  {/* Subtle link imitation */}
                  <div className="mt-4 flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span>Verify Credential</span>
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustCards;