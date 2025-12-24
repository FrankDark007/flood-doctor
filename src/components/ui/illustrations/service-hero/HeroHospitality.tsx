import React from 'react';

const HeroHospitality: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Unit Turnover</span>
         <span className="ml-auto text-[9px] font-bold text-blue-600">Drying Active</span>
      </div>

      <div className="absolute inset-0 top-10 bg-white p-6">
          {/* Room Top-Down View */}
          <div className="w-full h-full border-2 border-gray-300 rounded flex flex-col relative bg-gray-50">
              
              {/* Bed */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-32 bg-white border border-gray-300 rounded shadow-sm">
                  <div className="w-full h-8 bg-gray-200 border-b border-gray-200"></div> {/* Pillows */}
              </div>

              {/* LGR Dehumidifier */}
              <div className="absolute bottom-4 left-4 w-12 h-8 bg-blue-600 rounded border border-blue-800 shadow-lg z-10 flex items-center justify-center">
                  <div className="text-[6px] text-white font-bold">LGR</div>
              </div>

              {/* Air Mover 1 */}
              <div className="absolute top-10 left-4 w-10 h-10 bg-blue-500 rounded-full border border-blue-700 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-blue-300 border-dashed"></div>
                  {/* Airflow Arrow */}
                  <svg width="20" height="20" className="absolute -right-4 top-0 rotate-45">
                      <path d="M0 10 H20 L15 5 M20 10 L15 15" stroke="#3b82f6" strokeWidth="2" fill="none" />
                  </svg>
              </div>

              {/* Air Mover 2 */}
              <div className="absolute top-10 right-4 w-10 h-10 bg-blue-500 rounded-full border border-blue-700 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-blue-300 border-dashed"></div>
                  {/* Airflow Arrow */}
                  <svg width="20" height="20" className="absolute -left-4 top-0 rotate-[135deg]">
                      <path d="M0 10 H20 L15 5 M20 10 L15 15" stroke="#3b82f6" strokeWidth="2" fill="none" />
                  </svg>
              </div>

          </div>
      </div>
    </div>
  );
};

export default HeroHospitality;