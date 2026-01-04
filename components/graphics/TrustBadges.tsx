// components/graphics/TrustBadges.tsx
// Professional certification and trust badges with animations

import React from 'react';

interface TrustBadgesProps {
  className?: string;
  variant?: 'horizontal' | 'grid' | 'compact';
  showLabels?: boolean;
}

const TrustBadges: React.FC<TrustBadgesProps> = ({
  className = '',
  variant = 'horizontal',
  showLabels = true
}) => {
  const badges = [
    {
      id: 'iicrc',
      title: 'IICRC Certified',
      subtitle: 'Water Restoration',
      color: 'blue',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <circle cx="24" cy="24" r="22" fill="url(#iicrcGrad)" stroke="#1e40af" strokeWidth="2"/>
          <path d="M15 24l6 6 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="iicrcGrad" x1="24" y1="2" x2="24" y2="46">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#1e40af"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'licensed',
      title: 'Virginia Licensed',
      subtitle: 'Class A Contractor',
      color: 'emerald',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <rect x="4" y="8" width="40" height="32" rx="4" fill="url(#licenseGrad)" stroke="#047857" strokeWidth="2"/>
          <path d="M12 20h24M12 28h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="36" cy="28" r="4" fill="white" opacity="0.5"/>
          <defs>
            <linearGradient id="licenseGrad" x1="24" y1="8" x2="24" y2="40">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#047857"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'insured',
      title: 'Fully Insured',
      subtitle: '$2M Coverage',
      color: 'violet',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path d="M24 4L6 12v12c0 11 8 20 18 24 10-4 18-13 18-24V12L24 4z" fill="url(#shieldGrad)" stroke="#6d28d9" strokeWidth="2"/>
          <path d="M17 24l5 5 9-9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="shieldGrad" x1="24" y1="4" x2="24" y2="40">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#6d28d9"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: '24-7',
      title: '24/7 Available',
      subtitle: 'Emergency Response',
      color: 'amber',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <circle cx="24" cy="24" r="20" fill="url(#clockGrad)" stroke="#d97706" strokeWidth="2"/>
          <circle cx="24" cy="24" r="3" fill="white"/>
          <path d="M24 14v10l7 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="clockGrad" x1="24" y1="4" x2="24" y2="44">
              <stop offset="0%" stopColor="#fbbf24"/>
              <stop offset="100%" stopColor="#d97706"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'local',
      title: 'Locally Owned',
      subtitle: 'Since 1999',
      color: 'rose',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path d="M24 4l-18 18h6v18h24V22h6L24 4z" fill="url(#homeGrad)" stroke="#be123c" strokeWidth="2"/>
          <rect x="20" y="28" width="8" height="12" fill="white" opacity="0.5"/>
          <defs>
            <linearGradient id="homeGrad" x1="24" y1="4" x2="24" y2="40">
              <stop offset="0%" stopColor="#fb7185"/>
              <stop offset="100%" stopColor="#be123c"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'guarantee',
      title: '100% Satisfaction',
      subtitle: 'Guaranteed',
      color: 'cyan',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <circle cx="24" cy="24" r="20" fill="url(#starGrad)" stroke="#0891b2" strokeWidth="2"/>
          <path d="M24 12l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" fill="white"/>
          <defs>
            <linearGradient id="starGrad" x1="24" y1="4" x2="24" y2="44">
              <stop offset="0%" stopColor="#22d3ee"/>
              <stop offset="100%" stopColor="#0891b2"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="w-12 h-12 transition-transform hover:scale-110"
            title={`${badge.title} - ${badge.subtitle}`}
          >
            {badge.icon}
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ${className}`}>
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
          >
            <div className="w-16 h-16 mb-3">
              {badge.icon}
            </div>
            {showLabels && (
              <>
                <h4 className="font-bold text-slate-900 text-sm text-center">{badge.title}</h4>
                <p className="text-slate-500 text-xs text-center">{badge.subtitle}</p>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`bg-slate-50 rounded-2xl p-6 ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex items-center gap-3 group"
          >
            <div className="w-14 h-14 transition-transform group-hover:scale-110">
              {badge.icon}
            </div>
            {showLabels && (
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{badge.title}</h4>
                <p className="text-slate-500 text-xs">{badge.subtitle}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
