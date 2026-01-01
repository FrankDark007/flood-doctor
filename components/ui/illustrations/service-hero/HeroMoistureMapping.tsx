import React from 'react';

const HeroMoistureMapping: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes scan-vertical { 0% { top: 0%; } 100% { top: 100%; } }
        .animate-scan { animation: scan-vertical 3s linear infinite; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Thermography Scan</span>
      </div>

      <div className="absolute inset-0 top-10 flex items-center justify-center bg-gray-900">
          {/* Blueprint / Building Grid */}
          <div className="relative w-full h-full opacity-30">
              <svg width="100%" height="100%">
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
          </div>

          {/* Hot Spot Blob */}
          <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full blur-xl opacity-80"></div>

          {/* Scan Line */}
          <div className="absolute left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_15px_#4ade80] animate-scan z-10"></div>

          {/* UI Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-mono text-green-400">
              <span>SCANNING...</span>
              <span>DETECTED: MOISTURE</span>
          </div>
      </div>
    </div>
  );
};

export default HeroMoistureMapping;