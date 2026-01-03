import React from 'react';

interface MoldIconProps {
  className?: string;
  size?: number;
}

// Custom mold spore icon - represents organic mold growth pattern
const MoldIcon: React.FC<MoldIconProps> = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Central spore */}
    <circle cx="12" cy="12" r="3" />
    {/* Surrounding spores - organic mold pattern */}
    <circle cx="12" cy="5" r="2" />
    <circle cx="17.5" cy="8" r="2" />
    <circle cx="17.5" cy="16" r="2" />
    <circle cx="12" cy="19" r="2" />
    <circle cx="6.5" cy="16" r="2" />
    <circle cx="6.5" cy="8" r="2" />
    {/* Connection lines showing growth pattern */}
    <line x1="12" y1="9" x2="12" y2="7" />
    <line x1="14.6" y1="10.2" x2="15.8" y2="9.3" />
    <line x1="14.6" y1="13.8" x2="15.8" y2="14.7" />
    <line x1="12" y1="15" x2="12" y2="17" />
    <line x1="9.4" y1="13.8" x2="8.2" y2="14.7" />
    <line x1="9.4" y1="10.2" x2="8.2" y2="9.3" />
  </svg>
);

export default MoldIcon;
