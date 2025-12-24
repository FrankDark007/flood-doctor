import React from 'react';

const HeroCommercialMold: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes particles { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(40px, -20px); opacity: 0; } }
        .animate-particle { animation: particles 2s linear infinite; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Air Filtration</span>
         <span className="ml-auto text-[9px] font-mono text-blue-600">HEPA Active</span>
      </div>

      <div className="absolute inset-0 top-10 flex items-center justify-center bg-slate-50">
          <div className="relative w-48 h-32">
              {/* Scrubber Unit */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-slate-800 rounded-lg shadow-xl flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full border-4 border-slate-600 relative">
                      <div className="absolute inset-0 border-t-4 border-blue-400 rounded-full animate-spin"></div>
                  </div>
              </div>

              {/* Ducting */}
              <div className="absolute bottom-10 right-20 w-32 h-12 bg-gray-300 rounded-l-full border-y border-l border-gray-400 opacity-50"></div>

              {/* Particles being sucked in */}
              <div className="absolute bottom-12 right-24 w-full h-full pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-green-500/60 rounded-full animate-particle"
                        style={{ 
                            left: `${Math.random() * 40}px`, 
                            top: `${Math.random() * 40}px`, 
                            animationDelay: `${i * 0.3}s` 
                        }}
                      ></div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default HeroCommercialMold;