import React from 'react';

const HeroCommercialFloodCleanup: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes blade-spin-fast { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes water-recede { 0% { transform: translateY(0); opacity: 0.8; } 100% { transform: translateY(20px); opacity: 0.2; } }
        .animate-blade { transform-origin: center; animation: blade-spin-fast 0.3s linear infinite; }
        .animate-water { animation: water-recede 4s ease-out forwards; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50 z-10">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Large Scale Extraction</span>
      </div>

      <div className="absolute inset-0 top-10 flex flex-col justify-end bg-slate-50 overflow-hidden">
          
          {/* Background Wall/Depth */}
          <div className="absolute top-0 w-full h-1/3 bg-gray-100 border-b border-gray-200"></div>
          
          {/* Water Layer on Floor */}
          <div className="absolute bottom-0 w-full h-2/3 bg-blue-100 origin-bottom transform">
              <div className="absolute inset-0 bg-blue-400/20 animate-water"></div>
          </div>

          {/* Fan Bank - 3 Fans */}
          <div className="flex justify-center gap-4 items-end pb-8 z-10 px-4">
              
              {/* Fan 1 (Left, angled right) */}
              <div className="relative w-24 h-24 transform rotate-y-12 opacity-90">
                  <path d="M10 10 Q 30 0 50 10 T 90 50 L 90 80 L 10 80 Z" fill="#2563eb" />
                  <circle cx="50" cy="45" r="28" fill="#3b82f6" />
                  <g transform="translate(50, 45)">
                      <g className="animate-blade" style={{ animationDelay: '0.1s' }}>
                          <path d="M0 0 L 0 -22 Q 10 -22 18 -10 Z" fill="#1e293b" opacity="0.6" />
                          <path d="M0 0 L 18 10 Q 18 20 0 22 Z" fill="#1e293b" opacity="0.6" />
                          <path d="M0 0 L -18 10 Q -24 0 -10 -20 Z" fill="#1e293b" opacity="0.6" />
                      </g>
                      <circle r="28" fill="none" stroke="#1e3a8a" strokeWidth="2" />
                  </g>
                  <path d="M20 70 L 10 85 H 90 L 80 70" fill="none" stroke="#1e293b" strokeWidth="2" />
              </div>

              {/* Fan 2 (Center, forward) */}
              <div className="relative w-32 h-32 z-20 -mb-2">
                  <path d="M15 15 Q 40 0 65 15 T 115 65 L 115 105 L 15 105 Z" fill="#2563eb" />
                  <circle cx="65" cy="60" r="36" fill="#3b82f6" />
                  <g transform="translate(65, 60)">
                      <g className="animate-blade">
                          <path d="M0 0 L 0 -28 Q 12 -28 22 -12 Z" fill="#1e293b" opacity="0.6" />
                          <path d="M0 0 L 22 12 Q 22 24 0 28 Z" fill="#1e293b" opacity="0.6" />
                          <path d="M0 0 L -22 12 Q -28 0 -12 -24 Z" fill="#1e293b" opacity="0.6" />
                      </g>
                      <circle r="36" fill="none" stroke="#1e3a8a" strokeWidth="2" />
                  </g>
                  <path d="M25 90 L 15 110 H 115 L 105 90" fill="none" stroke="#1e293b" strokeWidth="3" />
              </div>

              {/* Fan 3 (Right, angled left) */}
              <div className="relative w-24 h-24 transform -rotate-y-12 opacity-90">
                  <path d="M10 10 Q 30 0 50 10 T 90 50 L 90 80 L 10 80 Z" fill="#2563eb" />
                  <circle cx="50" cy="45" r="28" fill="#3b82f6" />
                  <g transform="translate(50, 45)">
                      <g className="animate-blade" style={{ animationDelay: '0.2s' }}>
                          <path d="M0 0 L 0 -22 Q 10 -22 18 -10 Z" fill="#1e293b" opacity="0.6" />
                          <path d="M0 0 L 18 10 Q 18 20 0 22 Z" fill="#1e293b" opacity="0.6" />
                          <path d="M0 0 L -18 10 Q -24 0 -10 -20 Z" fill="#1e293b" opacity="0.6" />
                      </g>
                      <circle r="28" fill="none" stroke="#1e3a8a" strokeWidth="2" />
                  </g>
                  <path d="M20 70 L 10 90 H 90 L 80 70" fill="none" stroke="#1e293b" strokeWidth="2" />
              </div>

          </div>
          
          <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded border border-gray-200 shadow-sm text-[9px] font-mono text-blue-800">
              High Velocity Airflow
          </div>
      </div>
    </div>
  );
};

export default HeroCommercialFloodCleanup;