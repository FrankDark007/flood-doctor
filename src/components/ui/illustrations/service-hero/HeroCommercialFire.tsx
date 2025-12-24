import React from 'react';

const HeroCommercialFire: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes wipe { 0% { width: 0%; } 100% { width: 100%; } }
        .animate-wipe { animation: wipe 3s ease-in-out infinite alternate; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Surface Restoration</span>
      </div>

      <div className="absolute inset-0 top-10 flex items-center justify-center p-8">
          <div className="relative w-full h-32 bg-gray-200 rounded-lg overflow-hidden border border-gray-300 shadow-inner">
              
              {/* Dirty Layer (Soot) */}
              <div className="absolute inset-0 bg-gray-800 opacity-80 flex items-center justify-center">
                  <span className="text-white/20 font-bold text-4xl transform -rotate-12">SOOT</span>
              </div>

              {/* Cleaning Mask (Revealing Clean Layer) */}
              <div className="absolute inset-0 bg-white animate-wipe overflow-hidden border-r-4 border-blue-400 shadow-[5px_0_10px_rgba(0,0,0,0.1)]">
                  <div className="w-full h-full flex items-center justify-center bg-white">
                      <div className="grid grid-cols-6 gap-2 w-full px-4 opacity-20">
                          {[...Array(18)].map((_, i) => (
                              <div key={i} className="h-4 bg-blue-200 rounded"></div>
                          ))}
                      </div>
                  </div>
              </div>
              
              {/* Spray Icon */}
              <div className="absolute bottom-2 right-2 bg-white/90 p-1.5 rounded shadow-sm border border-gray-100 z-10">
                  <div className="text-[9px] font-bold text-blue-600">CO2 Blasting</div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HeroCommercialFire;