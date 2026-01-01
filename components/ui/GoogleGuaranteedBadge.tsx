import React from 'react';

const GoogleGuaranteedBadge: React.FC = () => {
  return (
    <div className="relative group">
      {/* Collapsed Badge (default) */}
      <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider cursor-pointer transition-all duration-200 group-hover:bg-green-100">
        <svg 
          width={14} 
          height={14} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path 
            d="M12 2L4 5.5V11.5C4 16.45 7.4 21.05 12 22C16.6 21.05 20 16.45 20 11.5V5.5L12 2Z" 
            fill="#1e8e3e"
          />
          <path 
            d="M10 14.2L7.5 11.7L8.55 10.65L10 12.1L15.45 6.65L16.5 7.7L10 14.2Z" 
            fill="#ffffff"
          />
        </svg>
        Google Guaranteed
      </span>

      {/* Expanded Card (on hover) */}
      <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-[280px]">
          <div className="flex items-start gap-3">
            {/* Large Shield SVG */}
            <svg 
              width={56} 
              height={64} 
              viewBox="0 0 56 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="flex-shrink-0"
            >
              {/* Outer shield */}
              <path 
                d="M28 0L0 10V30C0 47 12 62 28 64C44 62 56 47 56 30V10L28 0Z" 
                fill="#1e8e3e"
              />
              {/* Inner white border */}
              <path 
                d="M28 4L4 12.5V30C4 44.5 14.5 58 28 60C41.5 58 52 44.5 52 30V12.5L28 4Z" 
                fill="#1e8e3e"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Checkmark */}
              <path 
                d="M23 38L15 30L18 27L23 32L38 17L41 20L23 38Z" 
                fill="#ffffff"
              />
            </svg>

            {/* Text Content */}
            <div className="flex-1">
              <div className="font-bold text-gray-900 text-sm leading-tight tracking-tight">
                GOOGLE<br/>GUARANTEED
              </div>
              <p className="text-xs text-gray-500 mt-1.5 leading-snug">
                Professionals that are licensed, pre-screened, and insured.
              </p>
            </div>
          </div>
        </div>
        {/* Arrow pointer */}
        <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
      </div>
    </div>
  );
};

export default GoogleGuaranteedBadge;