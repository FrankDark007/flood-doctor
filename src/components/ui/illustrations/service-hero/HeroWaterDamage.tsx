import React from 'react';

const HeroWaterDamage: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes draw-chart { to { stroke-dashoffset: 0; } }
        .animate-chart { stroke-dasharray: 400; stroke-dashoffset: 400; animation: draw-chart 2s ease-out forwards; }
        @keyframes shrink-blob { 0% { r: 25; opacity: 0.5; } 100% { r: 10; opacity: 0.2; } }
        .animate-shrink { animation: shrink-blob 3s ease-in-out infinite alternate; }
      `}</style>
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Drying Dashboard</span>
         <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-[10px] font-bold text-green-700">Target Reached</span>
         </div>
      </div>

      <div className="absolute top-10 inset-0 p-6 flex flex-col gap-4">
         {/* Main Chart */}
         <div className="flex-grow relative border-l border-b border-gray-200">
             <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                 {/* Grid */}
                 <line x1="0" y1="30" x2="300" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                 <line x1="0" y1="70" x2="300" y2="70" stroke="#f1f5f9" strokeWidth="1" />
                 <line x1="0" y1="110" x2="300" y2="110" stroke="#f1f5f9" strokeWidth="1" />
                 
                 {/* Indoor RH */}
                 <path d="M0 40 C 50 40, 100 80, 150 90 S 250 120, 300 125" fill="none" stroke="#1a73e8" strokeWidth="3" strokeLinecap="round" className="animate-chart" />
                 
                 {/* Indoor GPP */}
                 <path d="M0 60 C 50 60, 100 80, 150 100 S 250 130, 300 135" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" />
                 
                 {/* Target Line */}
                 <line x1="0" y1="125" x2="300" y2="125" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 2" />
                 <text x="305" y="128" fontSize="8" fill="#22c55e" fontWeight="bold">GOAL</text>
             </svg>
         </div>

         {/* Bottom Tiles */}
         <div className="flex gap-4 h-20">
             {/* Moisture Map Tile */}
             <div className="w-1/3 bg-gray-50 rounded border border-gray-100 relative overflow-hidden">
                 <div className="absolute inset-0 grid grid-cols-2 gap-px bg-gray-200 p-px">
                     <div className="bg-white"></div>
                     <div className="bg-white relative flex items-center justify-center">
                         <circle cx="20" cy="20" r="25" fill="#3b82f6" className="animate-shrink" />
                     </div>
                     <div className="bg-white"></div>
                     <div className="bg-white"></div>
                 </div>
                 <div className="absolute bottom-1 left-2 text-[8px] font-bold text-gray-500">Map</div>
             </div>
             
             {/* Stats */}
             <div className="flex-grow flex items-center justify-around bg-blue-50/30 rounded border border-blue-100">
                 <div className="text-center">
                     <div className="text-[9px] text-gray-400 uppercase">Temp</div>
                     <div className="text-lg font-bold text-gray-800">72°</div>
                 </div>
                 <div className="text-center">
                     <div className="text-[9px] text-gray-400 uppercase">RH</div>
                     <div className="text-lg font-bold text-blue-600">42%</div>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default HeroWaterDamage;