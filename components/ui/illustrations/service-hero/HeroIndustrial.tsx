import React from 'react';

const HeroIndustrial: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes fan-spin-ind { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-fan-ind { transform-origin: center; animation: fan-spin-ind 1s linear infinite; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Production Recovery</span>
      </div>

      <div className="absolute inset-0 top-10 flex flex-col justify-end bg-slate-100">
          
          {/* Background Factory Elements */}
          <div className="absolute top-10 left-10 w-20 h-40 bg-slate-300 rounded-lg"></div>
          <div className="absolute top-10 right-20 w-20 h-40 bg-slate-300 rounded-lg"></div>

          {/* Drying Line */}
          <div className="relative h-24 bg-gray-200 border-t border-gray-300 flex items-end justify-around px-8 pb-4">
              
              {/* LGR */}
              <div className="w-16 h-24 bg-blue-700 rounded-t border-x border-t border-blue-800 relative z-10">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black"></div>
                  <div className="absolute bottom-4 left-2 right-2 h-8 bg-black opacity-30 rounded-sm"></div>
              </div>

              {/* Fan 1 */}
              <div className="w-16 h-16 bg-blue-600 rounded-full border-4 border-blue-800 relative z-10 mb-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-2 bg-slate-800 animate-fan-ind"></div>
                      <div className="w-2 h-12 bg-slate-800 animate-fan-ind"></div>
                  </div>
              </div>

              {/* Fan 2 */}
              <div className="w-16 h-16 bg-blue-600 rounded-full border-4 border-blue-800 relative z-10 mb-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-2 bg-slate-800 animate-fan-ind" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-2 h-12 bg-slate-800 animate-fan-ind" style={{ animationDelay: '0.5s' }}></div>
                  </div>
              </div>

          </div>
          
          {/* Airflow Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M 80 180 Q 150 150 250 180" stroke="#60a5fa" strokeWidth="2" fill="none" strokeDasharray="4 2" />
          </svg>

      </div>
    </div>
  );
};

export default HeroIndustrial;