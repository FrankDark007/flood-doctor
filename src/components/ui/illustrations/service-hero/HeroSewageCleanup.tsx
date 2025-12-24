import React from 'react';

const HeroSewageCleanup: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes check-pop { 0% { transform: scale(0); } 80% { transform: scale(1.2); } 100% { transform: scale(1); } }
        .animate-check { animation: check-pop 0.4s ease-out forwards; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Biohazard Control
         </span>
      </div>

      <div className="absolute inset-0 top-10 flex">
          {/* Left: Diagram */}
          <div className="w-2/3 p-4 border-r border-gray-100 relative">
              <div className="h-full border-2 border-dashed border-red-300 bg-red-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <span className="text-xs font-bold text-red-300 absolute top-2 left-2">CONTAMINATED</span>
                  <div className="w-16 h-20 bg-slate-800 rounded flex items-center justify-center z-10">
                      <div className="w-10 h-10 rounded-full border border-slate-600"></div>
                  </div>
                  {/* Airflow */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <path d="M 20 100 Q 80 100 120 90" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                  </svg>
              </div>
          </div>

          {/* Right: Checklist */}
          <div className="w-1/3 bg-gray-50 p-4 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white animate-check" style={{ animationDelay: '0.2s' }}>✓</div>
                  <span className="text-[9px] font-bold text-gray-600">Contain</span>
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white animate-check" style={{ animationDelay: '0.6s' }}>✓</div>
                  <span className="text-[9px] font-bold text-gray-600">Sanitize</span>
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                  <span className="text-[9px] font-bold text-gray-400">Verify</span>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HeroSewageCleanup;