import React from 'react';

const HeroHealthcare: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">ICRA Monitoring</span>
      </div>

      <div className="absolute inset-0 top-10 flex items-center justify-center bg-gray-50">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm w-48 text-center">
              <div className="text-[9px] text-gray-400 uppercase font-bold mb-2">Differential Pressure</div>
              
              <div className="bg-slate-900 rounded-lg p-3 font-mono text-3xl font-bold text-green-400 shadow-inner flex items-center justify-center gap-1">
                  <span>-0.025</span>
                  <span className="text-[10px] text-green-600 mt-2">inWC</span>
              </div>

              <div className="mt-3 flex justify-center gap-2">
                  <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[8px] font-bold text-gray-600">PASS</span>
                  </div>
                  <div className="flex items-center gap-1 opacity-20">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-[8px] font-bold text-gray-600">ALARM</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HeroHealthcare;