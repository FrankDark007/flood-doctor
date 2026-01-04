// components/archetypes/estate/DiscreteServiceBadge.tsx
// Estate-specific badge highlighting discrete/unmarked vehicle service

import React from 'react';

const DiscreteServiceBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20">
      <svg className="w-4 h-4 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
      <span>Discrete Service · Unmarked Vehicles · Complete Privacy</span>
    </div>
  );
};

export default DiscreteServiceBadge;
