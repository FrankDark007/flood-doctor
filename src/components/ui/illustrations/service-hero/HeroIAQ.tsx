import React from 'react';

const HeroIAQ: React.FC = () => {
  return (
    <div className="w-full aspect-[4/3] relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <style>{`
        @keyframes shrink-bar { 0% { height: 80%; } 100% { height: 20%; } }
        .animate-shrink { animation: shrink-bar 3s ease-out forwards; }
      `}</style>
      
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-gray-100 flex items-center px-4 bg-gray-50/50">
         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Air Quality Monitoring</span>
      </div>

      <div className="absolute inset-0 top-10 p-6 flex flex-col justify-center">
          <div className="flex items-end justify-around h-32 border-b border-gray-200 pb-2">
              <div className="w-8 bg-red-100 rounded-t relative group">
                  <div className="absolute bottom-0 w-full bg-red-500 rounded-t animate-shrink" style={{ height: '80%' }}></div>
                  <div className="absolute -bottom-6 w-full text-center text-[8px] font-bold text-gray-500">VOC</div>
              </div>
              <div className="w-8 bg-orange-100 rounded-t relative group">
                  <div className="absolute bottom-0 w-full bg-orange-500 rounded-t animate-shrink" style={{ height: '60%', animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-6 w-full text-center text-[8px] font-bold text-gray-500">PM2.5</div>
              </div>
              <div className="w-8 bg-yellow-100 rounded-t relative group">
                  <div className="absolute bottom-0 w-full bg-yellow-500 rounded-t animate-shrink" style={{ height: '50%', animationDelay: '1s' }}></div>
                  <div className="absolute -bottom-6 w-full text-center text-[8px] font-bold text-gray-500">CO2</div>
              </div>
          </div>
          
          <div className="mt-8 flex justify-center">
              <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full border border-green-200 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Improving Air Quality
              </span>
          </div>
      </div>
    </div>
  );
};

export default HeroIAQ;