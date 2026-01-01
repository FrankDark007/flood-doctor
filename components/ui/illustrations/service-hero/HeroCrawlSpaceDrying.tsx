import React from 'react';

const HeroCrawlSpaceDrying: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes airflow { 0% { transform: translateX(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateX(40px); opacity: 0; } }
        .animate-air { animation: airflow 2s linear infinite; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Encapsulation & Drying</span>
      </div>

      <div className="absolute inset-0 top-10 p-6 flex flex-col justify-end">
          {/* House Floor */}
          <div className="absolute top-6 left-0 right-0 h-8 border-b-2 border-orange-200 bg-orange-50 flex items-end gap-8 px-8">
              <div className="w-2 h-6 bg-orange-200"></div>
              <div className="w-2 h-6 bg-orange-200"></div>
              <div className="w-2 h-6 bg-orange-200"></div>
              <div className="w-2 h-6 bg-orange-200"></div>
          </div>

          {/* Dehu */}
          <div className="relative mx-auto w-32 h-14 bg-blue-600 rounded shadow-md z-10 mb-2">
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full border border-blue-400 opacity-50"></div>
          </div>

          {/* Vapor Barrier */}
          <div className="h-4 bg-white border-t border-gray-300 w-full relative">
              <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
          </div>

          {/* Airflow */}
          <div className="absolute bottom-16 left-1/2 flex">
              <svg width="40" height="20" className="animate-air">
                  <path d="M0 10 H40" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 2" />
              </svg>
          </div>
      </div>
    </div>
  );
};

export default HeroCrawlSpaceDrying;