import React from 'react';

const HeroBurstPipe: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes spray { 0% { transform: scale(0.8); opacity: 0.8; } 100% { transform: scale(1.5); opacity: 0; } }
        .animate-spray { animation: spray 1s ease-out infinite; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Source Control</span>
      </div>

      <div className="absolute inset-0 top-10 flex flex-col items-center justify-center bg-slate-50">
         
         {/* Pipe Assembly */}
         <div className="relative w-64 h-16 flex items-center">
             <div className="h-4 bg-slate-400 w-full rounded-full relative z-10"></div>
             
             {/* Burst */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                 <div className="w-8 h-8 bg-blue-400 rounded-full animate-spray absolute -top-4 -left-4"></div>
                 <div className="w-6 h-6 bg-blue-500 rounded-full animate-spray absolute -top-3 -left-3" style={{ animationDelay: '0.2s' }}></div>
                 <div className="w-3 h-6 bg-slate-800 rotate-12 relative z-30"></div>
             </div>

             {/* Shutoff Valve */}
             <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                 <div className="w-12 h-12 bg-white border-4 border-red-600 rounded-full shadow-md flex items-center justify-center">
                     <div className="w-2 h-6 bg-red-600"></div>
                     <div className="w-6 h-2 bg-red-600"></div>
                 </div>
                 <div className="mt-2 bg-white px-2 py-0.5 rounded shadow-sm text-[8px] font-bold text-red-600 uppercase border border-red-100">
                     VALVE OFF
                 </div>
             </div>
         </div>

         {/* Metric */}
         <div className="mt-8 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
             <span className="text-xs font-medium text-gray-600">Water Stopped: <span className="font-bold text-gray-900">0m 0s ago</span></span>
         </div>
      </div>
    </div>
  );
};

export default HeroBurstPipe;