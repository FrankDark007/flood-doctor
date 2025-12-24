import React from 'react';

const HeroLargeLoss: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Fleet Deployment</span>
         <span className="ml-auto text-[9px] font-mono text-gray-500">Job #9921</span>
      </div>

      <div className="absolute inset-0 top-10 bg-gray-50 flex flex-col items-center justify-center p-6">
          
          {/* Equipment Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6 w-full max-w-sm">
              {[...Array(4)].map((_, i) => (
                  <div key={`lgr-${i}`} className="flex flex-col items-center gap-1">
                      <div className="w-12 h-16 bg-blue-600 rounded-sm border-2 border-blue-800 relative">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-black rounded-b-sm"></div>
                          <div className="absolute bottom-2 left-2 right-2 h-6 bg-gray-900 rounded-sm"></div>
                      </div>
                      <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                  </div>
              ))}
              {[...Array(4)].map((_, i) => (
                  <div key={`fan-${i}`} className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 bg-blue-500 rounded-full border-2 border-blue-700 flex items-center justify-center relative">
                          <div className="w-8 h-8 rounded-full border border-blue-800 opacity-50"></div>
                          <div className="absolute bottom-0 w-8 h-1 bg-black"></div>
                      </div>
                      <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                  </div>
              ))}
          </div>

          <div className="flex gap-4 w-full max-w-sm">
              <div className="flex-1 bg-white p-3 rounded border border-gray-200 shadow-sm text-center">
                  <div className="text-[8px] text-gray-400 uppercase font-bold">LGR Units</div>
                  <div className="text-xl font-bold text-gray-900">48</div>
              </div>
              <div className="flex-1 bg-white p-3 rounded border border-gray-200 shadow-sm text-center">
                  <div className="text-[8px] text-gray-400 uppercase font-bold">Air Movers</div>
                  <div className="text-xl font-bold text-blue-600">126</div>
              </div>
          </div>

      </div>
    </div>
  );
};

export default HeroLargeLoss;