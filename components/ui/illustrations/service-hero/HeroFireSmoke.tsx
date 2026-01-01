import React from 'react';

const HeroFireSmoke: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes load-bar { from { width: 10%; } to { width: 75%; } }
        .animate-bar { animation: load-bar 1.5s ease-out forwards; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Soot & Odor Removal</span>
      </div>

      <div className="p-6 pt-16 h-full flex flex-col justify-between">
          
          {/* Room Visual */}
          <div className="flex-grow bg-gray-50 border border-gray-200 rounded-lg relative overflow-hidden mb-4">
              {/* Soot Particles */}
              <div className="absolute top-2 left-4 w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="absolute top-6 left-12 w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="absolute top-4 right-8 w-1 h-1 bg-gray-400 rounded-full"></div>
              
              {/* Scrubber */}
              <div className="absolute bottom-4 right-4 w-12 h-16 bg-slate-800 rounded"></div>
              
              {/* Airflow Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path d="M 20 20 Q 100 50 180 80" stroke="#cbd5e1" strokeWidth="1" fill="none" strokeDasharray="4 2" />
              </svg>
          </div>

          {/* Progress Bars */}
          <div className="space-y-3">
              <div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1">
                      <span>Soot Removal</span>
                      <span>75%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-600 rounded-full animate-bar"></div>
                  </div>
              </div>
              
              <div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1">
                      <span>Odor Reduction</span>
                      <span>In Progress</span>
                  </div>
                  <div className="flex items-end h-4 gap-1">
                      <div className="w-1 h-2 bg-green-400 rounded-sm"></div>
                      <div className="w-1 h-3 bg-green-400 rounded-sm"></div>
                      <div className="w-1 h-2 bg-green-400 rounded-sm"></div>
                      <div className="w-1 h-1 bg-gray-200 rounded-sm"></div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HeroFireSmoke;