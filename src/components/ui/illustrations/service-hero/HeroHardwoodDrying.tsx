import React from 'react';

const HeroHardwoodDrying: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes shrink-dot { from { r: 3; } to { r: 0; } }
        .animate-shrink { animation: shrink-dot 2s ease-out infinite; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Injection System</span>
         <span className="text-[10px] font-bold text-blue-600 ml-auto">Vacuum Active</span>
      </div>

      <div className="absolute inset-0 top-10 p-6 flex flex-col justify-center">
          {/* Floor Layers */}
          <div className="w-full h-12 bg-amber-100 border border-amber-200 rounded relative mb-1">
              <div className="absolute inset-0 flex divide-x divide-amber-200/50">
                  <div className="flex-1"></div><div className="flex-1"></div><div className="flex-1"></div>
              </div>
              {/* Injection Ports */}
              <div className="absolute inset-0 flex justify-around items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
          </div>
          
          {/* Subfloor */}
          <div className="w-full h-4 bg-stone-200 rounded mb-4"></div>

          {/* Moisture Dots */}
          <div className="flex justify-around px-8">
              <circle r="3" fill="#3b82f6" className="animate-shrink" />
              <circle r="3" fill="#3b82f6" className="animate-shrink" style={{ animationDelay: '0.5s' }} />
              <circle r="3" fill="#3b82f6" className="animate-shrink" style={{ animationDelay: '1s' }} />
          </div>

          <div className="mt-4 text-center">
              <span className="px-2 py-1 bg-green-50 text-green-700 text-[9px] font-bold rounded">Cupping Risk Reduced</span>
          </div>
      </div>
    </div>
  );
};

export default HeroHardwoodDrying;