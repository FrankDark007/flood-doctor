
import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import VeoGenerator from '../components/tools/VeoGenerator';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const VideoGenerator: React.FC = () => {
  return (
    <main className="flex-grow bg-white min-h-screen">
      <PageMeta 
        title="AI Video Generator" 
        description="Generate custom marketing videos for Flood Doctor using Google Veo." 
      />
      
      <div className="bg-subtle border-b border-gray-100 pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
           <Breadcrumbs items={[{ label: 'Resources', path: '/resources/' }, { label: 'Video Generator', path: '#' }]} />
           
           <div className="max-w-3xl mt-8">
              <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6">
                 Video Asset Generator
              </h1>
              <p className="font-sans text-xl text-muted leading-relaxed">
                 Create professional, branded video clips for social media and the website using Google Veo.
                 Replicate the look of high-budget production with AI.
              </p>
           </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-20">
          <VeoGenerator />
      </div>
    </main>
  );
};

export default VideoGenerator;
