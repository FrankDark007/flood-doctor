import React from 'react';

const HeroFloodCleanup: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes fill-line { to { stroke-dashoffset: 0; } }
        .animate-line { stroke-dasharray: 400; stroke-dashoffset: 400; animation: fill-line 2s ease-out forwards; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Response Pipeline</span>
      </div>

      <div className="absolute inset-0 top-10 flex flex-col items-center justify-center">
         <svg viewBox="0 0 400 120" className="w-full max-w-sm">
             {/* Base Line */}
             <line x1="40" y1="60" x2="360" y2="60" stroke="#e5e7eb" strokeWidth="4" strokeLinecap="round" />
             
             {/* Active Line */}
             <path d="M40 60 L 280 60" stroke="#1a73e8" strokeWidth="4" strokeLinecap="round" className="animate-line" />

             {/* Nodes */}
             <g>
                 <circle cx="40" cy="60" r="8" fill="#1a73e8" />
                 <text x="40" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">Call</text>
                 
                 <circle cx="120" cy="60" r="8" fill="#1a73e8" />
                 <text x="120" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">Dispatch</text>
                 
                 <circle cx="200" cy="60" r="8" fill="#1a73e8" />
                 <text x="200" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">Extract</text>
                 
                 <circle cx="280" cy="60" r="10" fill="white" stroke="#1a73e8" strokeWidth="3" />
                 <text x="280" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1a73e8">Dry</text>
                 
                 <circle cx="360" cy="60" r="8" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                 <text x="360" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#94a3b8">Verify</text>
             </g>
         </svg>

         <div className="mt-8 flex gap-4">
             <div className="px-4 py-2 bg-blue-50 rounded-lg text-center">
                 <div className="text-[9px] text-blue-600 font-bold uppercase">Gallons Removed</div>
                 <div className="text-xl font-bold text-gray-900">2,450</div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default HeroFloodCleanup;