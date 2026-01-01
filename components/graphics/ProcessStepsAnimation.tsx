import React from 'react';

const ProcessStepsAnimation = () => (
  <svg viewBox="0 0 800 200" role="img" className="w-full h-auto">
    <rect width="800" height="200" fill="transparent"/>
    
    {/* Step 1 */}
    <g transform="translate(100, 50)">
      <circle cx="50" cy="50" r="40" fill="#e8f0fe"/>
      <text x="50" y="60" textAnchor="middle" fontSize="28" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">1</text>
      <text x="50" y="120" textAnchor="middle" fontSize="14" fontWeight="500" fill="#202124" fontFamily="system-ui">Call</text>
    </g>
    
    {/* Connector with animation */}
    <line x1="190" y1="100" x2="280" y2="100" stroke="#1a73e8" strokeWidth="2" strokeDasharray="8 4">
      <animate attributeName="stroke-dashoffset" values="0;-24" dur="1s" repeatCount="indefinite"/>
    </line>
    
    {/* Step 2 */}
    <g transform="translate(280, 50)">
      <circle cx="50" cy="50" r="40" fill="#e6f4ea"/>
      <text x="50" y="60" textAnchor="middle" fontSize="28" fontWeight="500" fill="#34a853" fontFamily="system-ui">2</text>
      <text x="50" y="120" textAnchor="middle" fontSize="14" fontWeight="500" fill="#202124" fontFamily="system-ui">Assess</text>
    </g>
    
    <line x1="370" y1="100" x2="460" y2="100" stroke="#34a853" strokeWidth="2" strokeDasharray="8 4">
      <animate attributeName="stroke-dashoffset" values="0;-24" dur="1s" repeatCount="indefinite"/>
    </line>
    
    {/* Step 3 */}
    <g transform="translate(460, 50)">
      <circle cx="50" cy="50" r="40" fill="#fef7e0"/>
      <text x="50" y="60" textAnchor="middle" fontSize="28" fontWeight="500" fill="#b06000" fontFamily="system-ui">3</text>
      <text x="50" y="120" textAnchor="middle" fontSize="14" fontWeight="500" fill="#202124" fontFamily="system-ui">Restore</text>
    </g>
    
    <line x1="550" y1="100" x2="640" y2="100" stroke="#fbbc04" strokeWidth="2" strokeDasharray="8 4">
      <animate attributeName="stroke-dashoffset" values="0;-24" dur="1s" repeatCount="indefinite"/>
    </line>
    
    {/* Step 4 */}
    <g transform="translate(640, 50)">
      <circle cx="50" cy="50" r="40" fill="#e8f0fe"/>
      <text x="50" y="60" textAnchor="middle" fontSize="28" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">4</text>
      <text x="50" y="120" textAnchor="middle" fontSize="14" fontWeight="500" fill="#202124" fontFamily="system-ui">Recover</text>
    </g>
  </svg>
);

export default ProcessStepsAnimation;