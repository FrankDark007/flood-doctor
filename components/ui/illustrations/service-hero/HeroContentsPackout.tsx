import React from 'react';

const HeroContentsPackout: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Digital Inventory</span>
         <span className="ml-auto text-[9px] font-mono text-gray-400">#4920</span>
      </div>

      <div className="absolute inset-0 top-10 p-6 flex flex-col gap-3">
          {/* Item 1 */}
          <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded"></div>
                  <div>
                      <div className="text-[10px] font-bold text-gray-800">Living Rm Sofa</div>
                      <div className="text-[8px] text-gray-400">Box #42</div>
                  </div>
              </div>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[8px] font-bold rounded-full">PACKED</span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded"></div>
                  <div>
                      <div className="text-[10px] font-bold text-gray-800">Oriental Rug</div>
                      <div className="text-[8px] text-gray-400">ID #109</div>
                  </div>
              </div>
              <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[8px] font-bold rounded-full">CLEANED</span>
          </div>

          {/* Progress */}
          <div className="mt-auto">
              <div className="flex justify-between text-[9px] text-gray-500 mb-1">
                  <span>Processing</span>
                  <span>42 / 150 Items</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[28%]"></div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HeroContentsPackout;