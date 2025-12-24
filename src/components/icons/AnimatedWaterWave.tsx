import React from 'react';

interface AnimatedWaterWaveProps {
  className?: string;
  color?: string;
  height?: number;
  speed?: 'slow' | 'normal' | 'fast';
}

/**
 * Animated Water Wave SVG
 * Used as decorative element or background
 */
export const AnimatedWaterWave: React.FC<AnimatedWaterWaveProps> = ({
  className = '',
  color = '#1a73e8',
  height = 120,
  speed = 'normal',
}) => {
  const durations = {
    slow: '12s',
    normal: '8s',
    fast: '5s',
  };

  return (
    <svg
      className={className}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      style={{ height, width: '100%' }}
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Back wave - slowest */}
      <path
        fill={`${color}15`}
        d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z"
      >
        <animate
          attributeName="d"
          dur={durations[speed]}
          repeatCount="indefinite"
          values="
            M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z;
            M0,60 C360,0 720,120 1080,60 C1260,30 1380,60 1440,60 L1440,120 L0,120 Z;
            M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z
          "
        />
      </path>

      {/* Middle wave */}
      <path
        fill={`${color}25`}
        d="M0,80 C240,40 480,100 720,80 C960,60 1200,100 1440,80 L1440,120 L0,120 Z"
      >
        <animate
          attributeName="d"
          dur={`calc(${durations[speed]} * 0.8)`}
          repeatCount="indefinite"
          values="
            M0,80 C240,40 480,100 720,80 C960,60 1200,100 1440,80 L1440,120 L0,120 Z;
            M0,80 C240,100 480,40 720,80 C960,100 1200,60 1440,80 L1440,120 L0,120 Z;
            M0,80 C240,40 480,100 720,80 C960,60 1200,100 1440,80 L1440,120 L0,120 Z
          "
        />
      </path>

      {/* Front wave - fastest */}
      <path
        fill="url(#waveGradient)"
        d="M0,90 C180,110 360,70 540,90 C720,110 900,70 1080,90 C1260,110 1380,90 1440,90 L1440,120 L0,120 Z"
      >
        <animate
          attributeName="d"
          dur={`calc(${durations[speed]} * 0.6)`}
          repeatCount="indefinite"
          values="
            M0,90 C180,110 360,70 540,90 C720,110 900,70 1080,90 C1260,110 1380,90 1440,90 L1440,120 L0,120 Z;
            M0,90 C180,70 360,110 540,90 C720,70 900,110 1080,90 C1260,70 1380,90 1440,90 L1440,120 L0,120 Z;
            M0,90 C180,110 360,70 540,90 C720,110 900,70 1080,90 C1260,110 1380,90 1440,90 L1440,120 L0,120 Z
          "
        />
      </path>
    </svg>
  );
};

/**
 * Animated Water Droplet
 * Pulsing/dripping effect for icons
 */
export const AnimatedWaterDroplet: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 48, color = '#1a73e8', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="dropletGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.8" />
        <stop offset="100%" stopColor={color} stopOpacity="1" />
      </linearGradient>
    </defs>

    <path
      fill="url(#dropletGradient)"
      d="M24 4L12 20C9.5 24 8 28.5 8 32C8 40.84 15.16 48 24 48C32.84 48 40 40.84 40 32C40 28.5 38.5 24 36 20L24 4Z"
    >
      <animate
        attributeName="d"
        dur="2s"
        repeatCount="indefinite"
        values="
          M24 4L12 20C9.5 24 8 28.5 8 32C8 40.84 15.16 48 24 48C32.84 48 40 40.84 40 32C40 28.5 38.5 24 36 20L24 4Z;
          M24 6L13 20C10.5 24 9 28.5 9 31C9 39.84 15.66 47 24 47C32.34 47 39 39.84 39 31C39 28.5 37.5 24 35 20L24 6Z;
          M24 4L12 20C9.5 24 8 28.5 8 32C8 40.84 15.16 48 24 48C32.84 48 40 40.84 40 32C40 28.5 38.5 24 36 20L24 4Z
        "
      />
    </path>

    {/* Highlight */}
    <ellipse cx="18" cy="28" rx="4" ry="6" fill="white" opacity="0.3">
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="0.3;0.5;0.3"
      />
    </ellipse>
  </svg>
);

/**
 * Animated Ripple Effect
 * Expanding circles from center
 */
export const AnimatedRipple: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 200, color = '#1a73e8', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
    <circle cx="100" cy="100" r="10" fill={color}>
      <animate attributeName="r" dur="2s" values="10;80;10" repeatCount="indefinite" />
      <animate attributeName="opacity" dur="2s" values="1;0;1" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="100" r="10" fill={color}>
      <animate attributeName="r" dur="2s" begin="0.5s" values="10;80;10" repeatCount="indefinite" />
      <animate attributeName="opacity" dur="2s" begin="0.5s" values="1;0;1" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="100" r="10" fill={color}>
      <animate attributeName="r" dur="2s" begin="1s" values="10;80;10" repeatCount="indefinite" />
      <animate attributeName="opacity" dur="2s" begin="1s" values="1;0;1" repeatCount="indefinite" />
    </circle>
    <circle cx="100" cy="100" r="15" fill={color} />
  </svg>
);

/**
 * Animated Loading Spinner
 * Water-themed loading indicator
 */
export const AnimatedWaterSpinner: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 48, color = '#1a73e8', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <g>
      <circle cx="24" cy="8" r="4" fill={color} opacity="0.3" />
      <circle cx="36" cy="12" r="4" fill={color} opacity="0.4" />
      <circle cx="40" cy="24" r="4" fill={color} opacity="0.5" />
      <circle cx="36" cy="36" r="4" fill={color} opacity="0.6" />
      <circle cx="24" cy="40" r="4" fill={color} opacity="0.7" />
      <circle cx="12" cy="36" r="4" fill={color} opacity="0.8" />
      <circle cx="8" cy="24" r="4" fill={color} opacity="0.9" />
      <circle cx="12" cy="12" r="4" fill={color} opacity="1" />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 24 24"
        to="360 24 24"
        dur="1s"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);

export default AnimatedWaterWave;
