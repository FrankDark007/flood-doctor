// components/graphics/AnimatedHeroBackground.tsx
// Premium animated hero backgrounds for different archetypes

import React from 'react';

interface AnimatedHeroBackgroundProps {
  variant: 'estate' | 'historic' | 'urban' | 'suburban' | 'water';
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
}

const AnimatedHeroBackground: React.FC<AnimatedHeroBackgroundProps> = ({
  variant,
  className = '',
  children,
  overlay = true
}) => {
  const getBackground = () => {
    switch (variant) {
      case 'estate':
        return (
          <>
            {/* Luxury gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
            {/* Animated gold accent lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
              <defs>
                <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
                  <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[...Array(5)].map((_, i) => (
                <line
                  key={i}
                  x1="0%"
                  y1={`${20 + i * 15}%`}
                  x2="100%"
                  y2={`${25 + i * 15}%`}
                  stroke="url(#goldLine)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="x1"
                    values="-100%;100%"
                    dur={`${8 + i * 2}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x2"
                    values="0%;200%"
                    dur={`${8 + i * 2}s`}
                    repeatCount="indefinite"
                  />
                </line>
              ))}
            </svg>
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </>
        );

      case 'historic':
        return (
          <>
            {/* Warm heritage gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-stone-800 to-stone-900" />
            {/* Brick pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
            {/* Vintage vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50" />
          </>
        );

      case 'urban':
        return (
          <>
            {/* Modern gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
            {/* Animated grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-15">
              <defs>
                <pattern id="urbanGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#urbanGrid)">
                <animate
                  attributeName="opacity"
                  values="0.15;0.25;0.15"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
            {/* Glowing orbs */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </>
        );

      case 'suburban':
        return (
          <>
            {/* Friendly gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-900" />
            {/* Subtle house pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M40 20l20 15v25H20V35l20-15zm0 5L25 37v18h30V37L40 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
            {/* Soft glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-sky-400/10 rounded-full blur-3xl" />
          </>
        );

      case 'water':
      default:
        return (
          <>
            {/* Water gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-800" />
            {/* Animated water waves */}
            <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 1, 2].map((i) => (
                <path
                  key={i}
                  d={`M0,${50 + i * 20} Q${25},${40 + i * 20} 50,${50 + i * 20} T100,${50 + i * 20} V100 H0 Z`}
                  fill="url(#waveGrad)"
                  opacity={0.3 - i * 0.1}
                >
                  <animate
                    attributeName="d"
                    values={`
                      M0,${50 + i * 20} Q${25},${40 + i * 20} 50,${50 + i * 20} T100,${50 + i * 20} V100 H0 Z;
                      M0,${50 + i * 20} Q${25},${60 + i * 20} 50,${50 + i * 20} T100,${50 + i * 20} V100 H0 Z;
                      M0,${50 + i * 20} Q${25},${40 + i * 20} 50,${50 + i * 20} T100,${50 + i * 20} V100 H0 Z
                    `}
                    dur={`${4 + i}s`}
                    repeatCount="indefinite"
                  />
                </path>
              ))}
            </svg>
            {/* Ripple effects */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-64 h-64 rounded-full border border-white/10"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 15}%`,
                    animation: `ripple ${6 + i * 2}s infinite ease-out`,
                    animationDelay: `${i * 2}s`
                  }}
                />
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {getBackground()}

      {/* Dark overlay for text readability */}
      {overlay && (
        <div className="absolute inset-0 bg-black/20" />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeroBackground;
