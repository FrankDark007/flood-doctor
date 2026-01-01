import React, { useState, useEffect } from 'react';
import { Shield, Star, Clock } from 'lucide-react';

const HeroOrbitPhone: React.FC = () => {
  // --- ANIMATION STATE ---
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!heroPaused) {
        setHeroSlide((prev) => (prev === 0 ? 1 : 0));
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [heroPaused]);

  return (
    <div className="relative flex justify-center items-center min-h-[500px] w-full">
      
      {/* Orbiting Dots SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
        <svg width="500" height="500" viewBox="0 0 500 500" className="animate-[spin_60s_linear_infinite]">
           <circle cx="250" cy="250" r="220" stroke="#dadce0" strokeWidth="2" strokeDasharray="4 12" fill="none" />
           <circle cx="250" cy="30" r="8" fill="#34a853" />
           <circle cx="250" cy="470" r="8" fill="#fbbc04" />
        </svg>
      </div>

      {/* Phone Container */}
      <div className="relative w-[300px] h-[500px] bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] overflow-hidden z-10 border border-gray-100">
        
        {/* Slide 1: Business Profile */}
        <div className={`absolute inset-0 transition-opacity duration-700 bg-white ${heroSlide === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
           {/* Phone Header Image */}
           <div className="h-32 bg-blue-50 flex items-center justify-center">
              <Shield size={48} className="text-[#1a73e8]" />
           </div>
           <div className="p-4">
              <h3 className="text-lg font-medium text-[#202124]">Flood Doctor</h3>
              <div className="flex items-center gap-1 text-sm mt-1">
                <span className="font-bold">4.9</span>
                <div className="flex text-[#fbbc04]"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                <span className="text-gray-500">(127)</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Water Damage Restoration · Northern Virginia</div>
              
              {/* Google Guaranteed Badge */}
              <div className="mt-3 inline-flex items-center gap-2 bg-[#f0fdf4] px-2 py-1 rounded border border-[#e6f4ea]">
                 <div className="w-4 h-4 bg-[#34a853] rounded-full flex items-center justify-center text-white text-[8px] font-bold">✔</div>
                 <span className="text-[10px] font-medium text-[#1e8e3e]">Google Guaranteed</span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-4 gap-2 mt-4 text-center">
                 {['CALL', 'DIRECTIONS', 'SAVE', 'WEBSITE'].map(act => (
                   <div key={act} className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#1a73e8]">
                        <div className="w-4 h-4 bg-current rounded-sm opacity-20"></div>
                      </div>
                      <span className="text-[8px] font-medium text-[#1a73e8]">{act}</span>
                   </div>
                 ))}
              </div>

              <div className="mt-4 p-3 border rounded-lg text-center text-[#1a73e8] font-medium text-sm">
                REQUEST A QUOTE
              </div>

              <div className="mt-3 space-y-2">
                 <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Clock size={14} />
                    <span><span className="text-[#1e8e3e] font-bold">Open</span> · 24/7 Emergency Service</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Slide 2: Search Result */}
        <div className={`absolute inset-0 bg-white transition-opacity duration-700 ${heroSlide === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
           <div className="p-4 border-b border-gray-100">
              <div className="flex justify-center text-xl font-medium mb-3">
                <span className="text-[#4285f4]">G</span><span className="text-[#ea4335]">o</span><span className="text-[#fbbc04]">o</span><span className="text-[#4285f4]">g</span><span className="text-[#34a853]">l</span><span className="text-[#ea4335]">e</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm shadow-sm text-gray-700 flex justify-between items-center">
                 <span>water damage near me</span>
                 <span className="text-[#4285f4]">🔍</span>
              </div>
           </div>
           <div className="p-4">
              {/* Map Snippet */}
              <div className="h-24 bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 text-[#ea4335] drop-shadow-md text-2xl">📍</div>
                 </div>
              </div>
              {/* Result Item */}
              <div className="mb-4">
                 <div className="text-[#1a73e8] text-base font-medium">Flood Doctor</div>
                 <div className="flex items-center gap-1 text-xs mt-0.5">
                    <span className="text-[#fbbc04]">★★★★★</span> 4.9 (127)
                 </div>
                 <div className="text-xs text-gray-500 mt-1">Water damage restoration</div>
                 <div className="flex items-center gap-1 text-xs mt-1 text-[#1e8e3e]">
                    <span>✔ Google Guaranteed</span>
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* Pause/Play Control */}
      <button 
        onClick={() => setHeroPaused(!heroPaused)}
        className="absolute bottom-0 right-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-[#1a73e8] transition-colors z-30"
        aria-label={heroPaused ? "Play animation" : "Pause animation"}
      >
        {heroPaused ? '▶' : '||'}
      </button>

    </div>
  );
};

export default HeroOrbitPhone;