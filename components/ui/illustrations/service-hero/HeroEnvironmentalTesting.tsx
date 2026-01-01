import React from 'react';

const HeroEnvironmentalTesting: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes drop { 0% { top: 0; opacity: 1; } 50% { top: 60%; opacity: 1; } 60% { top: 60%; opacity: 0; } 100% { top: 60%; opacity: 0; } }
        @keyframes reveal-check { 0%, 50% { opacity: 0; transform: scale(0.5); } 70% { opacity: 1; transform: scale(1.1); } 100% { opacity: 1; transform: scale(1); } }
        .animate-drop { animation: drop 2s infinite; }
        .animate-check { animation: reveal-check 2s infinite; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Lab Analysis</span>
      </div>

      <div className="absolute inset-0 top-10 flex items-center justify-center bg-slate-50">
          <div className="relative">
              {/* Pipette */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4 h-16 bg-gray-300 rounded-t border border-gray-400 z-10">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-blue-300/50"></div>
              </div>
              
              {/* Droplet */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full rounded-tr-none rotate-45 animate-drop"></div>

              {/* Slide/Dish */}
              <div className="w-32 h-12 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-center mt-12 relative overflow-hidden">
                  <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center animate-check">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="4" fill="none" className="text-green-500">
                          <polyline points="20 6 9 17 4 12" />
                      </svg>
                  </div>
              </div>
              
              <div className="text-center mt-2 text-[9px] font-mono text-gray-500">Sample #8841: CLEAR</div>
          </div>
      </div>
    </div>
  );
};

export default HeroEnvironmentalTesting;