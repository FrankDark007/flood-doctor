import React from 'react';
import { TRUST_DATA, PRIMARY_COLOR } from '../constants';

const TrustBadgeBar: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 text-white py-3 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="flex items-center space-x-8 overflow-x-auto no-scrollbar mask-gradient"
          style={{ scrollBehavior: 'smooth' }}
        >
          {TRUST_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="flex-shrink-0 flex items-center space-x-2 group cursor-default"
              >
                <div 
                  className="p-1.5 rounded-full bg-opacity-20 transition-colors group-hover:bg-opacity-30"
                  style={{ backgroundColor: item.variant === 'primary' ? PRIMARY_COLOR : 'rgba(255,255,255,0.1)' }}
                >
                  <Icon size={16} className="text-white" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {item.value}
                  </span>
                </div>
                {/* Vertical Divider */}
                <div className="h-6 w-px bg-slate-700 ml-6 hidden md:block opacity-50 last:hidden" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBadgeBar;