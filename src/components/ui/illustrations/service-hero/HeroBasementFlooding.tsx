import React from 'react';

const HeroBasementFlooding: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes drop-level { from { height: 60%; } to { height: 10%; } }
        .animate-drop { animation: drop-level 4s ease-out forwards; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Water Extraction</span>
         <span className="ml-auto flex items-center gap-1">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-[9px] font-bold text-green-700">Pumping</span>
         </span>
      </div>

      <div className="absolute inset-0 top-10 p-6 flex justify-center">
          <div className="relative w-full max-w-[200px] h-full border-x-2 border-b-2 border-gray-300 bg-gray-50">
              {/* Stairs */}
              <div className="absolute top-10 left-0 w-8 h-2 bg-gray-300"></div>
              <div className="absolute top-14 left-8 w-8 h-2 bg-gray-300"></div>
              <div className="absolute top-18 left-16 w-8 h-2 bg-gray-300"></div>

              {/* Water */}
              <div className="absolute bottom-0 left-0 right-0 bg-blue-400/30 border-t border-blue-400 animate-drop"></div>

              {/* Sump Pump */}
              <div className="absolute bottom-0 right-4 w-10 h-16 bg-slate-800 rounded-t-lg z-10 flex flex-col items-center">
                  <div className="w-1 h-full bg-slate-400 absolute bottom-16"></div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default HeroBasementFlooding;