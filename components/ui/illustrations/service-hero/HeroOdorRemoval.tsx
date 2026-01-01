import React from 'react';

const HeroOdorRemoval: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes fade-line { from { opacity: 1; } to { opacity: 0.3; } }
        .animate-fade { animation: fade-line 2s ease-out infinite alternate; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Molecular Treatment</span>
      </div>

      <div className="absolute inset-0 top-10 flex flex-col items-center justify-center p-6">
          {/* Stages */}
          <div className="w-full flex justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
              
              <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">✓</div>
                  <span className="text-[9px] font-bold text-gray-600">Clean</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] ring-4 ring-blue-50">2</div>
                  <span className="text-[9px] font-bold text-blue-600">Treat</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-[10px]">3</div>
                  <span className="text-[9px] font-bold text-gray-400">Verify</span>
              </div>
          </div>

          {/* Trend Line */}
          <div className="w-full bg-gray-50 rounded border border-gray-100 p-4">
              <div className="text-[9px] text-gray-400 mb-2">Odor Intensity</div>
              <svg viewBox="0 0 200 40" className="w-full h-10 overflow-visible">
                  <path d="M0 5 L 60 10 L 120 30 L 180 35" fill="none" stroke="#1a73e8" strokeWidth="2" />
                  <circle cx="120" cy="30" r="3" fill="#1a73e8" className="animate-fade" />
              </svg>
          </div>
      </div>
    </div>
  );
};

export default HeroOdorRemoval;