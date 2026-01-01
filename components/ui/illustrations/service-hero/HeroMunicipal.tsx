import React from 'react';

const HeroMunicipal: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes border-trace {
          0% { stroke-dashoffset: 400; opacity: 0; }
          10% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        .animate-trace { stroke-dasharray: 400; stroke-dashoffset: 400; animation: border-trace 3s ease-out forwards; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Site Security</span>
      </div>

      <div className="absolute inset-0 top-10 p-6 flex flex-col justify-center items-center">
          <div className="relative w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              {/* Building Icon */}
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                  <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-9a4 4 0 00-8 0v9M8 7v2a2 2 0 01-2 2H4a2 2 0 01-2-2V7" />
              </svg>

              {/* Security Perimeter */}
              <div className="absolute -inset-4 border-2 border-blue-500 rounded-xl border-dashed"></div>
              <svg className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] overflow-visible">
                  <rect x="0" y="0" width="100%" height="100%" rx="12" fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-trace" />
              </svg>

              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-[8px] font-bold px-2 py-1 rounded shadow-md">
                  SECURE
              </div>
          </div>
          
          <div className="mt-6 flex gap-4 text-[9px] font-bold text-gray-500">
              <span className="flex items-center gap-1">✓ Background Checked</span>
              <span className="flex items-center gap-1">✓ Badged Crew</span>
          </div>
      </div>
    </div>
  );
};

export default HeroMunicipal;