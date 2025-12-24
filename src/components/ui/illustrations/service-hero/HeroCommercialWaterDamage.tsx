import React from 'react';

const HeroCommercialWaterDamage: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes extract-move {
          0% { transform: translateX(0); }
          50% { transform: translateX(120px); }
          100% { transform: translateX(0); }
        }
        @keyframes floor-dry {
          0% { width: 40px; }
          50% { width: 160px; }
          100% { width: 40px; }
        }
        @keyframes suction-pulse {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50% { transform: scaleY(0.8); opacity: 0.8; }
        }
        .animate-rover { animation: extract-move 6s ease-in-out infinite; }
        .animate-floor { animation: floor-dry 6s ease-in-out infinite; }
        .animate-suction { animation: suction-pulse 0.5s linear infinite; transform-origin: bottom; }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-rover, .animate-floor, .animate-suction { animation: none; }
        }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-gray-50/50 z-10">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Weighted Extraction</span>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-[9px] font-mono text-blue-600 font-bold">Suction Active</span>
         </div>
      </div>

      <div className="absolute inset-0 top-10 flex flex-col justify-center bg-slate-50">
          
          {/* Floor Perspective */}
          <div className="relative w-3/4 h-32 mx-auto perspective-[500px]">
              {/* Wet Floor (Background) */}
              <div className="absolute inset-0 bg-blue-100 border border-blue-200 rounded transform rotateX(40deg) origin-bottom shadow-inner"></div>
              
              {/* Dry Path Mask Container */}
              <div className="absolute top-0 left-20 bottom-0 overflow-hidden transform rotateX(40deg) origin-bottom">
                  <div className="h-full bg-white opacity-80 animate-floor border-r border-blue-300"></div>
              </div>

              {/* Rover Extractor Unit */}
              <div className="absolute bottom-4 left-10 animate-rover z-20">
                  {/* Hose */}
                  <svg className="absolute -top-12 -left-20 w-32 h-20 pointer-events-none" style={{ overflow: 'visible' }}>
                      <path d="M 80 40 C 60 40, 20 20, 0 0" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
                  </svg>

                  {/* Machine Body */}
                  <div className="w-24 h-20 bg-slate-800 rounded-lg shadow-2xl relative border-t border-slate-600">
                      {/* Control Panel */}
                      <div className="absolute top-0 left-0 right-0 h-6 bg-slate-700 rounded-t-lg flex items-center justify-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      </div>
                      
                      {/* Rider/Operator Seat Hint */}
                      <div className="absolute -top-6 left-6 w-12 h-8 bg-slate-900 rounded-t-md"></div>

                      {/* Side Decal */}
                      <div className="absolute top-8 left-2 w-16 h-8 bg-slate-700 rounded flex items-center justify-center">
                          <div className="w-10 h-1 bg-blue-500 rounded-full"></div>
                      </div>

                      {/* Suction Base */}
                      <div className="absolute -bottom-2 left-0 right-0 h-4 bg-blue-600 rounded-b-lg flex justify-center items-end overflow-hidden">
                          {/* Suction Particles */}
                          <div className="flex gap-1 mb-1">
                              <div className="w-1 h-2 bg-white rounded-full animate-suction"></div>
                              <div className="w-1 h-3 bg-white rounded-full animate-suction" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-1 h-2 bg-white rounded-full animate-suction" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-1 h-3 bg-white rounded-full animate-suction" style={{ animationDelay: '0.3s' }}></div>
                          </div>
                      </div>
                  </div>
                  
                  {/* Wheels */}
                  <div className="absolute bottom-0 -left-2 w-6 h-6 bg-black rounded-full border-2 border-slate-600"></div>
                  <div className="absolute bottom-0 -right-2 w-6 h-6 bg-black rounded-full border-2 border-slate-600"></div>
              </div>
          </div>

          {/* Stats Bar */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-8">
              <div className="text-center">
                  <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Efficiency</div>
                  <div className="text-lg font-bold text-gray-800">1,200 <span className="text-[10px] text-gray-500 font-normal">sq ft/hr</span></div>
              </div>
              <div className="text-center">
                  <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Recovery</div>
                  <div className="text-lg font-bold text-blue-600">95% <span className="text-[10px] text-blue-400 font-normal">Water</span></div>
              </div>
          </div>

      </div>
    </div>
  );
};

export default HeroCommercialWaterDamage;