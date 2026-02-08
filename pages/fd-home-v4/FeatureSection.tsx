
import React, { useState, useEffect, useRef } from 'react';

interface ListItem {
  title: string;
  desc?: string;
}

interface FeatureSectionProps {
  layout: 'text-left' | 'text-right';
  title: string;
  subtitle: string;
  listItems: ListItem[];
  visualType: 'attributes' | 'posts';
}

const CYCLE_DURATION = 5000;

export const FeatureSection: React.FC<FeatureSectionProps> = ({ layout, title, subtitle, listItems, visualType }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const isLeft = layout === 'text-left';
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      const currentProgress = (elapsed / CYCLE_DURATION) * 100;

      if (currentProgress >= 100) {
        setActiveIndex((prev) => (prev + 1) % listItems.length);
        setProgress(0);
        startTimeRef.current = time;
      } else {
        setProgress(currentProgress);
      }
      timerRef.current = requestAnimationFrame(animate);
    };

    timerRef.current = requestAnimationFrame(animate);
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [listItems.length]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % listItems.length);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  // Content for Text Side (Desktop List + Mobile Carousel)
  const TextContent = (
    <div className={`col-span-4 md:col-span-8 lg:col-span-4 self-start lg:sticky lg:top-[calc(50vh-144px)] mb-12 lg:mb-0 order-2 lg:order-none`}>
      {/* Desktop List View */}
      <div className="hidden lg:flex flex-col">
        {listItems.map((item, i) => (
          <div 
            key={i} 
            className={`relative pl-[45px] lg:pl-[48px] cursor-pointer group transition-all duration-300 ${i !== 0 ? 'mt-8' : ''}`}
            onClick={() => handleItemClick(i)}
          >
            {/* Background progress line (#dadce0) */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#dadce0] z-[1]"></div>
            
            {/* Active progress line (#1a73e8) */}
            {activeIndex === i && (
              <div 
                className="absolute left-0 top-0 w-[2px] bg-[#1a73e8] z-[2] transition-all ease-linear"
                style={{ height: `${progress}%` }}
              ></div>
            )}
            
            <h4 className={`text-[28px] leading-[1.4] font-normal transition-all duration-300 origin-left google-sans ${
              activeIndex === i 
                ? 'text-[#202124] scale-100 opacity-100' 
                : 'text-[#5f6368] scale-[0.98] opacity-70 group-hover:text-[#202124] group-hover:opacity-100'
            }`}>
              {item.title}
            </h4>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-[16px] text-[#3c4043] leading-[1.5] font-normal tracking-[0.1px] mt-3">
                {item.desc || "Learn how to optimize your profile and reach more customers locally."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="flex flex-col items-center text-center lg:hidden mt-8">
        <h3 className="text-[24px] font-normal google-sans text-[#202124] mb-4">
          {listItems[activeIndex].title}
        </h3>
        <p className="text-[16px] text-[#5f6368] leading-relaxed mb-8 min-h-[80px]">
          {listItems[activeIndex].desc || "Learn how to optimize your profile."}
        </p>
        
        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-4">
          <div className="px-6 py-3 bg-[#f1f3f4] rounded-full text-sm font-medium text-[#3c4043] tracking-widest">
            {activeIndex + 1} / {listItems.length}
          </div>
          <button 
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-50 text-[#5f6368] transition-colors"
            aria-label="Next feature"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  const VisualContent = (
    <div className={`col-span-4 md:col-span-8 lg:col-span-5 flex justify-center items-center order-1 lg:order-none`}>
      <div className="relative w-full max-w-[320px] aspect-[9/19] bg-white rounded-[2.5rem] shadow-[0_0_0_8px_rgb(255,255,255),0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] border border-gray-100 overflow-hidden ring-1 ring-gray-50">
        
        {/* Status Bar Mockup */}
        <div className="h-8 bg-white w-full flex items-center justify-between px-6 z-20 relative">
            <span className="text-[10px] font-medium text-gray-800">9:30</span>
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-800 opacity-20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-800 opacity-20"></div>
                <div className="w-4 h-2.5 rounded-[2px] border border-gray-800 opacity-20"></div>
            </div>
        </div>

        {visualType === 'attributes' ? (
           /* "Take Charge" Visuals */
           <div className="flex flex-col h-full bg-white relative">
              {/* Common Header for Profile */}
              <div className="relative h-32 bg-gray-200">
                <img src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Cover" />
              </div>
              
              <div className="px-5 pt-4 pb-2">
                 <h2 className="text-[18px] font-normal google-sans text-[#202124] leading-tight">Cook's Arts & Crafts Shoppe LCC</h2>
                 <div className="flex items-center gap-1 mt-1 mb-4">
                    <span className="text-[12px] font-bold text-[#202124]">4.8</span>
                    <div className="flex text-[#fbbc04] text-[10px]">★★★★★</div>
                    <span className="text-[12px] text-[#5f6368]">(12)</span>
                 </div>

                 {/* Action Buttons Row */}
                 <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                     <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#1a73e8] hover:bg-blue-50">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                        </div>
                        <span className="text-[10px] text-[#1a73e8] font-medium">Call</span>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#1a73e8] hover:bg-blue-50">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                        </div>
                        <span className="text-[10px] text-[#1a73e8] font-medium">Directions</span>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#1a73e8] hover:bg-blue-50">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                        </div>
                        <span className="text-[10px] text-[#1a73e8] font-medium">Share</span>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                        <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#1a73e8] hover:bg-blue-50">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                        </div>
                        <span className="text-[10px] text-[#1a73e8] font-medium">Website</span>
                     </div>
                 </div>

                 {/* Tabs */}
                 <div className="flex gap-6 border-b border-gray-100 text-[13px] font-medium text-[#5f6368] mb-4 overflow-hidden">
                     <div className={`pb-2 border-b-[2px] ${activeIndex === 0 ? 'text-[#1a73e8] border-[#1a73e8]' : 'border-transparent'}`}>Overview</div>
                     <div className={`pb-2 border-b-[2px] ${activeIndex === 1 ? 'text-[#1a73e8] border-[#1a73e8]' : 'border-transparent'}`}>Updates</div>
                     <div className={`pb-2 border-b-[2px] ${activeIndex === 2 ? 'text-[#1a73e8] border-[#1a73e8]' : 'border-transparent'}`}>About</div>
                 </div>

                 {/* Dynamic Content Area */}
                 <div className="relative h-[200px]">
                    {/* Slide 1: Overview Info */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                        <div className="space-y-4">
                           <div className="flex gap-3 text-[12px] text-[#3c4043]">
                              <div className="w-5 h-5 flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="#1a73e8"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>
                              <span>123 Art Street, Design District</span>
                           </div>
                           <div className="flex gap-3 text-[12px] text-[#3c4043]">
                              <div className="w-5 h-5 flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="#1a73e8"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div>
                              <span><span className="text-[#188038] font-medium">Open</span> ⋅ Closes 8 PM</span>
                           </div>
                           <div className="flex gap-3 text-[12px] text-[#3c4043]">
                              <div className="w-5 h-5 flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="#1a73e8"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div>
                              <span>Send a message</span>
                           </div>
                        </div>
                    </div>

                    {/* Slide 2: Photos */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                        <div className="grid grid-cols-2 gap-2">
                           <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Photo 1"/>
                           </div>
                           <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1515549832467-8783363e19b6?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Photo 2"/>
                           </div>
                           <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Photo 3"/>
                           </div>
                           <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
                              <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Photo 4"/>
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-bold">+15</div>
                           </div>
                        </div>
                    </div>

                    {/* Slide 3: Attributes */}
                    <div className={`absolute bottom-0 left-0 right-0 transform transition-all duration-500 ${activeIndex === 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <div className="bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.1)] border border-gray-100 p-4 space-y-3">
                           <div className="text-[11px] font-bold text-[#5f6368] uppercase tracking-wider mb-2">From the business</div>
                           <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#EA4335] via-[#FBBC04] to-[#4285F4] flex items-center justify-center text-[10px] text-white">🏳️‍🌈</div>
                              <span className="text-[13px] text-[#202124]">LGBTQ+ friendly</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#1a73e8] flex items-center justify-center text-white text-[12px]">★</div>
                              <span className="text-[13px] text-[#202124]">Identifies as veteran-led</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#E37400] flex items-center justify-center text-white text-[12px]">♀</div>
                              <span className="text-[13px] text-[#202124]">Identifies as women-led</span>
                           </div>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        ) : (
           /* "Easily Connect" Visuals (Posts, Reviews, Q&A) */
           <div className="flex flex-col h-full bg-[#f8f9fa] relative">
              {/* Fake Chrome Header */}
              <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-gray-100">
                 <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1621905235294-7500bed49cb3?auto=format&fit=crop&q=80&w=100" alt="Avatar"/>
                 </div>
                 <div className="flex-1">
                    <div className="text-[12px] font-medium text-[#202124]">The Good Design Store</div>
                 </div>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6368"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </div>

              {/* Dynamic Content */}
              <div className="flex-1 p-4 relative overflow-hidden">
                {/* Slide 1: Post */}
                <div className={`absolute top-4 left-4 right-4 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-500 ${activeIndex === 0 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                   <div className="aspect-[4/3] relative">
                      <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Post"/>
                      <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full">1/2</div>
                   </div>
                   <div className="p-4">
                      <p className="text-[13px] text-[#3c4043] mb-4">New pillow cover colors in stock. Order now.</p>
                      <button className="w-full py-2 rounded-full border border-[#1a73e8] flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="#1a73e8"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                         <span className="text-[12px] font-bold text-[#1a73e8]">Order online</span>
                      </button>
                   </div>
                </div>

                {/* Slide 2: Review */}
                <div className={`absolute top-4 left-4 right-4 bg-white rounded-2xl shadow-sm border border-gray-200 p-4 transition-all duration-500 ${activeIndex === 1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-xs font-bold">J</div>
                      <div>
                         <div className="text-[12px] font-bold text-[#202124]">Julie S.</div>
                         <div className="text-[10px] text-[#5f6368]">Local Guide</div>
                      </div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" className="w-4 h-4 ml-auto opacity-50" alt="Google"/>
                   </div>
                   <div className="flex text-[#fbbc04] text-[12px] mb-2">★★★★★</div>
                   <p className="text-[13px] text-[#3c4043] mb-4 leading-relaxed">Such a beautiful selection of items! The staff was incredibly helpful in finding exactly what I needed.</p>
                   
                   <div className="bg-[#f8f9fa] rounded-lg p-3 border-l-2 border-[#1a73e8]">
                      <div className="text-[11px] font-bold text-[#202124] mb-1">Response from the owner</div>
                      <p className="text-[12px] text-[#5f6368]">Thank you Julie! We're so glad you found what you were looking for.</p>
                   </div>
                </div>

                {/* Slide 3: Q&A */}
                <div className={`absolute top-4 left-4 right-4 bg-white rounded-2xl shadow-sm border border-gray-200 p-4 transition-all duration-500 ${activeIndex === 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                   <div className="flex items-center gap-2 mb-4">
                      <div className="bg-[#1a73e8] text-white text-[10px] font-bold px-2 py-0.5 rounded">Q&A</div>
                      <span className="text-[12px] text-[#5f6368]">Questions and answers</span>
                   </div>
                   
                   <div className="space-y-4">
                      <div>
                         <div className="text-[13px] font-medium text-[#202124] mb-1">Do you offer gift wrapping?</div>
                         <div className="flex items-start gap-2">
                            <div className="mt-1 w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                               <img src="https://images.unsplash.com/photo-1621905235294-7500bed49cb3?auto=format&fit=crop&q=80&w=100" alt="Avatar" />
                            </div>
                            <div className="text-[12px] text-[#5f6368]">
                               <span className="font-medium text-[#202124]">The Good Design Store (Owner)</span>
                               <br/>Yes! We offer complimentary gift wrapping for all in-store purchases.
                            </div>
                         </div>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                         <button className="text-[12px] text-[#1a73e8] font-medium">Ask a question</button>
                      </div>
                   </div>
                </div>
              </div>

              {/* Fake Navigation/Pagination Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                 {[0,1,2].map(i => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${activeIndex === i ? 'bg-[#1a73e8]' : 'bg-gray-300'}`}></div>
                 ))}
              </div>
           </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="bg-white py-[48px] lg:py-[60px]">
      <div className="mx-[28px] md:mx-[40px] lg:mx-[72px] xl:mx-auto max-w-[1456px]">
        {/* Row 1: Centered Headers */}
        <div className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
          <h2 className="text-[#202124] text-[48px] font-medium leading-[1.16667] tracking-[-.5px] mb-6">
            {title}
          </h2>
          <div className="text-[#3c4043] text-[16px] font-normal leading-[1.5] tracking-[.1px] max-w-2xl mx-auto">
            {subtitle}
          </div>
        </div>

        {/* Row 2: Split Grid */}
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-[28px] md:gap-x-[40px] lg:gap-x-[48px] xl:gap-x-[64px] items-center">
          <div className="hidden lg:block lg:col-span-1"></div>
          {isLeft ? TextContent : VisualContent}
          <div className="hidden lg:block lg:col-span-1"></div>
          {isLeft ? VisualContent : TextContent}
          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};
