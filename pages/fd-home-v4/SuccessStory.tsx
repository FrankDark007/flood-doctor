
import React from 'react';

export const SuccessStory: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-[#202124] text-center mb-16">What Our Customers Say</h2>
      <div className="bg-[#f8f9fa] rounded-[3rem] overflow-hidden flex flex-col md:flex-row">
        <div className="flex-1 p-16 flex flex-col justify-center items-center text-center">
          <blockquote className="text-2xl font-bold text-[#202124] mb-8 leading-relaxed max-w-md italic">
            "Our basement flooded at 2 AM during a storm. Flood Doctor arrived within an hour, worked through the night, and saved our finished basement. Their team was professional, thorough, and handled our insurance claim seamlessly."
          </blockquote>
          <div className="text-sm font-bold text-[#202124]">Michael & Sarah R.</div>
          <div className="text-xs text-[#5f6368] mb-8">McLean, Virginia</div>
          <div className="flex items-center gap-2">
            <div className="flex text-[#fbbc04] text-lg">★★★★★</div>
            <span className="text-sm text-[#5f6368]">5.0 on Google</span>
          </div>
        </div>
        <div className="flex-1 relative aspect-video md:aspect-auto bg-gradient-to-br from-[#1a73e8] to-[#174ea6] flex items-center justify-center">
          <div className="text-center text-white p-8">
            <div className="text-6xl font-bold mb-2">4.9</div>
            <div className="flex justify-center text-[#fbbc04] text-2xl mb-2">★★★★★</div>
            <div className="text-lg opacity-90">Average Rating</div>
            <div className="text-sm opacity-75 mt-1">Based on 100+ Google Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};
