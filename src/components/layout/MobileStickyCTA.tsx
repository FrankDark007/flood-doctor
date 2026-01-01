import React from 'react';
import Button from '../ui/Button';

// Global mobile sticky CTA - Google style
// This is rendered once in App.tsx, so individual pages should NOT include their own mobile CTAs
// z-50 ensures it stays above Header (z-40) on mobile

const MobileStickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#dadce0] px-4 py-3 lg:hidden z-50 pb-safe">
      <Button to="/request/" variant="primary" fullWidth className="h-12 min-h-[48px]">
        Get started
      </Button>
    </div>
  );
};

export default MobileStickyCTA;
