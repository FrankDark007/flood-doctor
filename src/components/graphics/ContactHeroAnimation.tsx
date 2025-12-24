import React from 'react';

const ContactHeroAnimation = () => (
  <svg viewBox="0 0 800 400" role="img" aria-label="Contact Us" className="w-full h-auto">
    <defs>
      <filter id="contact-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" floodOpacity="0.1"/>
      </filter>
      <linearGradient id="contact-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8f0fe"/>
        <stop offset="100%" stopColor="#ffffff"/>
      </linearGradient>
    </defs>
    
    <rect width="800" height="400" fill="url(#contact-grad)" rx="24"/>
    
    {/* Phone Element */}
    <g transform="translate(250, 100)" filter="url(#contact-shadow)">
      <rect width="120" height="200" rx="16" fill="#1a73e8"/>
      <rect x="10" y="10" width="100" height="180" rx="8" fill="#ffffff"/>
      {/* Screen */}
      <circle cx="60" cy="60" r="20" fill="#e8f0fe"/>
      <path d="M50 60 L60 70 L70 50" stroke="#1a73e8" strokeWidth="3" fill="none"/>
      <rect x="30" y="100" width="60" height="8" rx="4" fill="#f1f3f4"/>
      <rect x="30" y="120" width="40" height="8" rx="4" fill="#f1f3f4"/>
      <rect x="80" y="150" width="30" height="30" rx="15" fill="#34a853"/>
    </g>
    
    {/* Message Bubble */}
    <g transform="translate(400, 80)" filter="url(#contact-shadow)">
      <path d="M0 0 H200 A20 20 0 0 1 220 20 V100 A20 20 0 0 1 200 120 H20 L0 140 V20 A20 20 0 0 1 0 0 Z" fill="#ffffff"/>
      <text x="30" y="50" fontSize="16" fontWeight="bold" fill="#202124" fontFamily="system-ui">Need Help?</text>
      <text x="30" y="80" fontSize="12" fill="#5f6368" fontFamily="system-ui">We answer 24/7.</text>
    </g>
  </svg>
);

export default ContactHeroAnimation;