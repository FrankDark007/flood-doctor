import React from 'react';

const HeroMoldRemediation: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes drift { 0% { transform: translateX(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateX(30px); opacity: 0; } }
        .animate-drift { animation: drift 2s linear infinite; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Negative Air Pressure</span>
         <span className="text-[10px] font-mono text-blue-600">-0.02 inWC</span>
      </div>

      <div className="absolute inset-0 top-10 p-6 flex items-center justify-center">
          <div className="relative w-full h-full border border-gray-200 bg-white rounded-lg overflow-hidden">
              {/* Containment Zone */}
              <div className="absolute inset-4 border-2 border-blue-500 border-dashed bg-blue-50/20 rounded flex items-center justify-between px-8">
                  
                  {/* Intake */}
                  <div className="flex flex-col gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 opacity-50 animate-drift"></div>
                      <div className="w-2 h-2 rounded-full bg-red-400 opacity-50 animate-drift" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-red-400 opacity-50 animate-drift" style={{ animationDelay: '1s' }}></div>
                  </div>

                  {/* Scrubber */}
                  <div className="w-20 h-24 bg-slate-800 rounded shadow-lg flex items-center justify-center z-10">
                      <div className="w-12 h-12 rounded-full border border-slate-600"></div>
                  </div>

                  {/* Exhaust */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-12 bg-blue-200 flex items-center justify-center border-l border-blue-300">
                      <span className="text-[8px] font-bold text-blue-800 -rotate-90">HEPA</span>
                  </div>
              </div>
          </div>
      </div>
      
      {/* Verification Badge */}
      <div className="absolute bottom-4 left-4 bg-white shadow-sm border border-green-100 px-2 py-1 rounded flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center text-[8px] text-white">✓</div>
          <span className="text-[9px] font-bold text-gray-600">Post-Remediation Verification</span>
      </div>
    </div>
  );
};

export default HeroMoldRemediation;