import React from 'react';
import EmergencyHeader from './EmergencyHeader';
import EmergencyHero from './EmergencyHero';
import EmergencyActions from './EmergencyActions';
import EmergencyChecklist from './EmergencyChecklist';
import EmergencyTrust from './EmergencyTrust';
import EmergencyFooter from './EmergencyFooter';

const EmergencyPageLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      {/* 
        Max width constrained to 480px to force mobile-like layout on desktop 
        as this is designed strictly for emergency handheld usage.
      */}
      <div className="w-full max-w-[480px] bg-white shadow-2xl min-h-screen relative flex flex-col">
        <EmergencyHeader />
        
        <main className="flex-grow flex flex-col">
          <EmergencyHero />
          <EmergencyActions />
          <EmergencyChecklist />
          <EmergencyTrust />
        </main>

        <EmergencyFooter />
      </div>
    </div>
  );
};

export default EmergencyPageLayout;