import React from 'react';

const HeroStormDamage: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes scan-down { 0% { top: 10%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 90%; opacity: 0; } }
        .animate-scan { animation: scan-down 3s linear infinite; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Assessment Sweep</span>
         <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[9px] font-bold rounded">Active Intrusion</span>
      </div>

      <div className="absolute inset-0 top-10 flex items-center justify-center bg-gray-50/30">
         <div className="relative w-64 h-48">
             {/* House Outline */}
             <svg viewBox="0 0 200 150" className="w-full h-full drop-shadow-sm">
                <path d="M20 60 L100 20 L180 60 V140 H20 V60 Z" fill="white" stroke="#334155" strokeWidth="2" />
                <path d="M20 60 L100 20 L180 60" fill="#f1f5f9" stroke="#334155" strokeWidth="1" />
                
                {/* Roof Impact */}
                <circle cx="70" cy="45" r="4" fill="#ef4444" />
                <path d="M70 45 L50 30" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                
                {/* Window */}
                <rect x="120" y="80" width="30" height="30" fill="#e2e8f0" stroke="#94a3b8" />
                <path d="M135 80 V110 M120 95 H150" stroke="#94a3b8" />
                
                {/* Water Entry */}
                <path d="M20 130 H180 V140 H20 Z" fill="#bfdbfe" />
             </svg>

             {/* Scan Line */}
             <div className="absolute left-0 right-0 h-0.5 bg-green-500 shadow-[0_0_8px_#22c55e] animate-scan opacity-0"></div>
         </div>
      </div>
    </div>
  );
};

export default HeroStormDamage;