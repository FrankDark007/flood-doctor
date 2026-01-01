import React from 'react';

const HeroCommercialSewage: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes particle-flow {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(60px, 20px) scale(0.5); opacity: 0; }
        }
        @keyframes fan-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-particle { animation: particle-flow 2s linear infinite; }
        .animate-fan { animation: fan-spin 1s linear infinite; transform-origin: center; }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-particle, .animate-fan { animation: none; opacity: 0; }
        }
      `}</style>
      
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-gray-50/50 z-10">
         <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
             Biohazard Containment
         </span>
         <span className="text-[9px] font-mono text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200 shadow-sm">
             -0.05 inWC
         </span>
      </div>

      <div className="absolute inset-0 top-10 flex bg-white">
          
          {/* --- Zone A: Contaminated (Left) --- */}
          <div className="w-3/5 bg-red-50/50 relative overflow-hidden flex items-center justify-center border-r-4 border-gray-200">
              {/* Floating Particles */}
              <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute w-1.5 h-1.5 rounded-full bg-red-400 opacity-60 animate-particle"
                        style={{ 
                            left: `${20 + Math.random() * 40}%`, 
                            top: `${20 + Math.random() * 60}%`, 
                            animationDelay: `${i * 0.2}s` 
                        }}
                      ></div>
                  ))}
              </div>
              
              {/* Scrubber Intake */}
              <div className="relative z-10 w-24 h-24 bg-slate-800 rounded-lg shadow-xl flex items-center justify-center border border-slate-700">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[6px] font-bold px-1.5 py-0.5 rounded uppercase">
                      Negative Air
                  </div>
                  {/* Grill */}
                  <div className="w-16 h-16 rounded-full border-2 border-slate-600 relative overflow-hidden">
                      <div className="absolute inset-0 border-t-2 border-slate-600 rounded-full animate-fan opacity-50"></div>
                      <div className="absolute inset-0 border-r-2 border-slate-600 rounded-full animate-fan opacity-50" style={{ animationDirection: 'reverse' }}></div>
                  </div>
              </div>

              {/* Ducting passing through wall */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-10 bg-gray-300 border-y border-gray-400 z-0"></div>
          </div>

          {/* --- Zone B: Clean (Right) --- */}
          <div className="w-2/5 bg-white flex flex-col items-center justify-center p-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/20"></div> {/* Seal */}
              
              {/* Exhaust End */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-12 bg-blue-100 rounded-r-lg border border-blue-200 flex items-center justify-center">
                  <div className="space-y-1">
                      <div className="w-4 h-0.5 bg-blue-300"></div>
                      <div className="w-4 h-0.5 bg-blue-300"></div>
                      <div className="w-4 h-0.5 bg-blue-300"></div>
                  </div>
              </div>

              <div className="mt-8 text-center">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-2 border border-green-100">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                  </div>
                  <h4 className="text-[10px] font-bold text-gray-900 uppercase">HEPA Filtered</h4>
                  <p className="text-[8px] text-gray-500 mt-1">99.97% Efficiency</p>
              </div>
          </div>

          {/* Barrier Visual (Zipper) */}
          <div className="absolute left-[60%] top-0 bottom-0 w-4 -ml-2 flex flex-col items-center justify-center z-20">
              <div className="w-0.5 h-full bg-gray-300"></div>
              <div className="w-3 h-6 bg-red-600 rounded-sm shadow-md flex items-center justify-center">
                  <div className="w-1 h-3 bg-white/50 rounded-full"></div>
              </div>
          </div>

      </div>
    </div>
  );
};

export default HeroCommercialSewage;