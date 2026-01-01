import React from 'react';

/**
 * Google Material Design 3 Style Background Elements
 * Decorative backgrounds and patterns
 */

/**
 * Hero Section Wave Background
 * Subtle gradient wave for hero sections
 */
export const HeroWaveBackground: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1440 400"
    fill="none"
    preserveAspectRatio="none"
    className={className}
    style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0, left: 0 }}
  >
    <defs>
      <linearGradient id="heroWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285f4" stopOpacity="0.15" />
        <stop offset="50%" stopColor="#34a853" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#4285f4" stopOpacity="0.15" />
      </linearGradient>
    </defs>

    {/* Back wave - now visible */}
    <path
      d="M0,200 C360,280 720,120 1080,200 C1260,240 1380,200 1440,200 L1440,400 L0,400 Z"
      fill="url(#heroWaveGrad)"
    >
      <animate
        attributeName="d"
        dur="12s"
        repeatCount="indefinite"
        values="
          M0,200 C360,280 720,120 1080,200 C1260,240 1380,200 1440,200 L1440,400 L0,400 Z;
          M0,200 C360,120 720,280 1080,200 C1260,160 1380,200 1440,200 L1440,400 L0,400 Z;
          M0,200 C360,280 720,120 1080,200 C1260,240 1380,200 1440,200 L1440,400 L0,400 Z
        "
      />
    </path>

    {/* Middle wave */}
    <path
      d="M0,250 C300,290 600,210 900,250 C1100,280 1300,220 1440,250 L1440,400 L0,400 Z"
      fill="#e8f0fe"
      opacity="0.6"
    >
      <animate
        attributeName="d"
        dur="10s"
        repeatCount="indefinite"
        values="
          M0,250 C300,290 600,210 900,250 C1100,280 1300,220 1440,250 L1440,400 L0,400 Z;
          M0,250 C300,210 600,290 900,250 C1100,220 1300,280 1440,250 L1440,400 L0,400 Z;
          M0,250 C300,290 600,210 900,250 C1100,280 1300,220 1440,250 L1440,400 L0,400 Z
        "
      />
    </path>

    {/* Front wave */}
    <path
      d="M0,300 C240,340 480,260 720,300 C960,340 1200,260 1440,300 L1440,400 L0,400 Z"
      fill="#f8f9fa"
    >
      <animate
        attributeName="d"
        dur="8s"
        repeatCount="indefinite"
        values="
          M0,300 C240,340 480,260 720,300 C960,340 1200,260 1440,300 L1440,400 L0,400 Z;
          M0,300 C240,260 480,340 720,300 C960,260 1200,340 1440,300 L1440,400 L0,400 Z;
          M0,300 C240,340 480,260 720,300 C960,340 1200,260 1440,300 L1440,400 L0,400 Z
        "
      />
    </path>
  </svg>
);

/**
 * Floating Circles Background
 * Decorative circles for sections
 */
export const FloatingCirclesBackground: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1440 600"
    fill="none"
    className={className}
    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
  >
    {/* Large circles */}
    <circle cx="100" cy="100" r="200" fill="#4285f4" opacity="0.03">
      <animate attributeName="cy" values="100;120;100" dur="6s" repeatCount="indefinite" />
    </circle>
    <circle cx="1340" cy="500" r="250" fill="#34a853" opacity="0.03">
      <animate attributeName="cy" values="500;480;500" dur="8s" repeatCount="indefinite" />
    </circle>
    <circle cx="720" cy="300" r="180" fill="#fbbc04" opacity="0.02">
      <animate attributeName="r" values="180;200;180" dur="10s" repeatCount="indefinite" />
    </circle>

    {/* Medium circles */}
    <circle cx="200" cy="400" r="80" fill="#ea4335" opacity="0.04">
      <animate attributeName="cx" values="200;220;200" dur="7s" repeatCount="indefinite" />
    </circle>
    <circle cx="1200" cy="150" r="100" fill="#4285f4" opacity="0.04">
      <animate attributeName="cy" values="150;170;150" dur="5s" repeatCount="indefinite" />
    </circle>

    {/* Small accent circles */}
    <circle cx="400" cy="200" r="30" fill="#34a853" opacity="0.1">
      <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="900" cy="450" r="25" fill="#fbbc04" opacity="0.1">
      <animate attributeName="r" values="25;30;25" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="1100" cy="350" r="20" fill="#4285f4" opacity="0.1">
      <animate attributeName="r" values="20;25;20" dur="3.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/**
 * Grid Pattern Background
 * Subtle dotted grid for tech sections
 */
export const GridPatternBackground: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    className={className}
    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
  >
    <defs>
      <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="1" fill="#dadce0" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dotGrid)" />
  </svg>
);

/**
 * Water Ripple Background
 * Animated concentric circles
 */
export const WaterRippleBackground: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    className={className}
    style={{ position: 'absolute', pointerEvents: 'none' }}
  >
    {/* Slower, more elegant ripples */}
    <circle cx="200" cy="200" r="25" fill="none" stroke="#4285f4" strokeWidth="1.5" opacity="0">
      <animate attributeName="r" values="25;180" dur="8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0" dur="8s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="200" r="25" fill="none" stroke="#4285f4" strokeWidth="1.5" opacity="0">
      <animate attributeName="r" values="25;180" dur="8s" begin="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0" dur="8s" begin="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="200" r="25" fill="none" stroke="#4285f4" strokeWidth="1.5" opacity="0">
      <animate attributeName="r" values="25;180" dur="8s" begin="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0" dur="8s" begin="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="200" r="25" fill="none" stroke="#4285f4" strokeWidth="1.5" opacity="0">
      <animate attributeName="r" values="25;180" dur="8s" begin="6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0" dur="8s" begin="6s" repeatCount="indefinite" />
    </circle>
    {/* Center droplet */}
    <circle cx="200" cy="200" r="20" fill="#e8f0fe" />
    <circle cx="200" cy="200" r="12" fill="#4285f4" />
    <ellipse cx="196" cy="196" rx="4" ry="3" fill="white" opacity="0.6" />
  </svg>
);

/**
 * Gradient Mesh Background
 * Modern gradient for hero sections
 */
export const GradientMeshBackground: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1440 800"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
    className={className}
    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
  >
    <defs>
      <radialGradient id="meshBlue" cx="20%" cy="30%" r="50%">
        <stop offset="0%" stopColor="#4285f4" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#4285f4" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="meshGreen" cx="80%" cy="70%" r="50%">
        <stop offset="0%" stopColor="#34a853" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#34a853" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="meshYellow" cx="60%" cy="20%" r="40%">
        <stop offset="0%" stopColor="#fbbc04" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#fbbc04" stopOpacity="0" />
      </radialGradient>
    </defs>

    <rect width="100%" height="100%" fill="white" />
    <rect width="100%" height="100%" fill="url(#meshBlue)">
      <animate attributeName="opacity" values="1;0.7;1" dur="8s" repeatCount="indefinite" />
    </rect>
    <rect width="100%" height="100%" fill="url(#meshGreen)">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="10s" repeatCount="indefinite" />
    </rect>
    <rect width="100%" height="100%" fill="url(#meshYellow)">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="6s" repeatCount="indefinite" />
    </rect>
  </svg>
);

/**
 * Isometric Grid Background
 * 3D-style grid for tech pages
 */
export const IsometricGridBackground: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    className={className}
    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none', opacity: 0.3 }}
  >
    <defs>
      <pattern id="isoGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20 L20 10 L40 20 M20 10 V30 M0 20 L20 30 L40 20" stroke="#dadce0" strokeWidth="0.5" fill="none" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#isoGrid)" />
  </svg>
);

export default {
  HeroWaveBackground,
  FloatingCirclesBackground,
  GridPatternBackground,
  WaterRippleBackground,
  GradientMeshBackground,
  IsometricGridBackground,
};
