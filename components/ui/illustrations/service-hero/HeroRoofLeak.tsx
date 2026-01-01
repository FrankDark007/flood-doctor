import React from 'react';

const HeroRoofLeak: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Thermal Inspection</span>
      </div>

      <div className="absolute inset-0 top-10 bg-slate-50 relative">
          {/* Ceiling */}
          <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-300"></div>
          
          {/* Leak Path */}
          <div className="absolute top-0 left-1/2 w-0.5 h-1/3 bg-blue-400 opacity-50"></div>
          
          {/* Wet Spot (Visible) */}
          <div className="absolute top-[32%] left-1/2 -translate-x-1/2 w-12 h-2 bg-amber-200 rounded-full blur-sm"></div>

          {/* Thermal Lens */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-900 flex items-center justify-center">
              {/* Heatmap Blob */}
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 rounded-full blur-md opacity-80"></div>
              {/* Crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 border border-white/50"></div>
              </div>
              <div className="absolute bottom-4 text-[8px] font-mono text-white">WET DETECTED</div>
          </div>
      </div>
    </div>
  );
};

export default HeroRoofLeak;