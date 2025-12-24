import React from 'react';

const HeroStructuralDrying: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes flow-up { 0% { transform: translateY(10px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-10px); opacity: 0; } }
        .animate-flow { animation: flow-up 2s linear infinite; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Cavity Drying</span>
         <span className="text-[10px] font-bold text-blue-600">Airflow Active</span>
      </div>

      <div className="absolute inset-0 top-10 flex items-center justify-center p-6">
         <div className="relative w-full h-full border border-gray-200 rounded bg-gray-50 flex overflow-hidden">
             {/* Studs */}
             <div className="w-1/4 border-r border-gray-200 h-full relative"></div>
             <div className="w-1/4 border-r border-gray-200 h-full relative"></div>
             <div className="w-1/4 border-r border-gray-200 h-full relative"></div>
             <div className="w-1/4 h-full relative"></div>

             {/* Airflow Arrows Overlay */}
             <div className="absolute inset-0 flex justify-around items-end pb-4">
                 <svg width="20" height="40" className="animate-flow" style={{ animationDelay: '0s' }}>
                     <path d="M10 40 L10 10 M5 15 L10 5 L15 15" stroke="#3b82f6" strokeWidth="2" fill="none" />
                 </svg>
                 <svg width="20" height="40" className="animate-flow" style={{ animationDelay: '0.5s' }}>
                     <path d="M10 40 L10 10 M5 15 L10 5 L15 15" stroke="#3b82f6" strokeWidth="2" fill="none" />
                 </svg>
                 <svg width="20" height="40" className="animate-flow" style={{ animationDelay: '1.0s' }}>
                     <path d="M10 40 L10 10 M5 15 L10 5 L15 15" stroke="#3b82f6" strokeWidth="2" fill="none" />
                 </svg>
                 <svg width="20" height="40" className="animate-flow" style={{ animationDelay: '1.5s' }}>
                     <path d="M10 40 L10 10 M5 15 L10 5 L15 15" stroke="#3b82f6" strokeWidth="2" fill="none" />
                 </svg>
             </div>

             {/* Moisture Dots (Fading) */}
             <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>
             <div className="absolute top-20 right-10 w-2 h-2 bg-blue-400 rounded-full opacity-20"></div>
         </div>
         
         {/* Base Plate Injector */}
         <div className="absolute bottom-0 left-6 right-6 h-4 bg-blue-700 rounded-t-md"></div>
      </div>
    </div>
  );
};

export default HeroStructuralDrying;