
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [uiState, setUiState] = useState<'search' | 'results' | 'profile_empty' | 'profile_filled'>('search');
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Main Animation Loop
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let typeInterval: ReturnType<typeof setTimeout>;

    const typeText = (text: string, callback: () => void) => {
      let index = 0;
      const type = () => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
          typeInterval = setTimeout(type, 50 + Math.random() * 30);
        } else {
          callback();
        }
      };
      type();
    };

    const runSequence = () => {
      // RESET
      setUiState('search');
      setDisplayText('');
      
      // 1. Start Typing
      timeoutId = setTimeout(() => {
        typeText("Water Damage Services Near Me", () => {
          // 2. Show Results
          timeoutId = setTimeout(() => {
            setUiState('results');
            
            // 3. Transition to Empty Profile (Wait 2s)
            timeoutId = setTimeout(() => {
              setUiState('profile_empty');

              // 4. Fly-in Animation lasts ~1.5s. Transition to Filled state right when they land.
              timeoutId = setTimeout(() => {
                setUiState('profile_filled');
                
                // 5. Hold and Restart
                timeoutId = setTimeout(runSequence, 5000);
              }, 1400); 
            }, 2000);
          }, 600);
        });
      }, 1000);
    };

    runSequence();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(typeInterval);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col md:flex-row items-center gap-16 relative overflow-visible">
      
      <div className="flex-1 text-center md:text-left z-10">
        <h1 className="text-[48px] md:text-[56px] lg:text-[72px] font-bold text-[#202124] mb-8 leading-[1.1] tracking-tight">
          <span className="text-[#1a73e8]">Water Damage</span> Restoration in Northern Virginia
        </h1>
        <p className="text-[16px] lg:text-[18px] text-[#5f6368] mb-10 max-w-xl leading-[1.6]">
          24/7 emergency water damage restoration for homes and businesses across Northern Virginia and Washington, DC. IICRC-certified technicians respond within 60 minutes. Direct insurance billing available.
        </p>
        <a href="/request/" className="hidden md:inline-flex btn-blue px-10 py-3.5 rounded-full text-[16px] font-medium shadow-md text-center">
          Request Services
        </a>
      </div>

      <div className="flex-1 flex justify-center md:justify-end relative">
        
        {/* =========================================
            BACKGROUND ANIMATION RINGS
            Centered behind the phone area
           ========================================= */}
        <div className="absolute top-1/2 left-1/2 md:left-auto md:right-[150px] -translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-[800px] h-[800px] -z-10 pointer-events-none opacity-40">
           {/* Yellow Ring - Outer - Single Dot */}
           <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#fbbc04]">
                 {/* Single Solid Yellow Dot at top */}
                 <circle cx="50" cy="1" r="2.5" fill="currentColor" />
              </svg>
           </div>
           {/* Green Ring - Inner - Single Dot */}
           <div className="absolute inset-[100px] animate-spin-reverse-slower">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#34a853]">
                 {/* Single Solid Green Dot at bottom */}
                 <circle cx="50" cy="99" r="2.5" fill="currentColor" />
              </svg>
           </div>
        </div>

        {/* =========================================
            FLYING PHOTOS LAYER (Z-INDEX 50)
            These appear OUTSIDE the phone and fly IN
           ========================================= */}
        {(uiState === 'profile_empty' || uiState === 'profile_filled') && (
          <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
             
             {/* Left Bubble: Worker (Matches Main Image) */}
             <div className={`absolute w-32 h-32 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-white z-50 ${uiState === 'profile_empty' ? 'animate-fly-main' : 'opacity-0'}`}>
                <img src="https://lh3.googleusercontent.com/p/AF1QipMQKIyykDu-juQpBpRKvURzJet6hcu3w7V5hZjC=s1360-w1360-h1020-rw" className="w-full h-full object-cover" alt="Worker" />
             </div>

             {/* Right Bubble: Van (Matches Top Right Image) */}
             <div className={`absolute w-24 h-24 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-white z-50 ${uiState === 'profile_empty' ? 'animate-fly-secondary' : 'opacity-0'}`}>
                <img src="https://lh3.googleusercontent.com/p/AF1QipN-lLtPcfIHKaCBiZj2TyDRuiQ5fu9CTl5cXwcy=s1360-w1360-h1020-rw" className="w-full h-full object-cover" alt="Van" />
             </div>

          </div>
        )}

        {/* Phone Mockup Container */}
        <div className="relative bg-white rounded-[2.5rem] shadow-[0_0_0_8px_rgb(255,255,255),0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] border border-gray-100 flex flex-col overflow-hidden 
          w-[280px] h-[560px] 
          sm:w-[300px] sm:h-[600px] 
          md:w-[320px] md:h-[640px] 
          lg:w-[340px] lg:h-[680px] 
          xl:w-[360px] xl:h-[720px] 
          2xl:w-[380px] 2xl:h-[760px]
          transition-all duration-300 ease-in-out z-20 font-sans
        ">
          
          {/* 1. SEARCH SCREEN */}
          <div className={`absolute inset-0 bg-white flex flex-col items-center pt-32 px-6 transition-opacity duration-300 ${uiState === 'search' ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}>
             <div className="mb-8 transform scale-125">
                <svg viewBox="0 0 272 92" width="136" height="46">
                   <path fill="#4285F4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                   <path fill="#EA4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                   <path fill="#FBBC05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.33c-2.18 2.69-6.38 5.04-12.18 5.04-11.59 0-21.76-10.08-21.76-22.26 0-11.93 10.17-22.01 21.76-22.01 5.8 0 10 2.35 12.18 5.04h.33v-3.61h9.25zm-8.56 20.84c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                   <path fill="#4285F4" d="M225 3v65h-9.5V3h9.5z"/>
                   <path fill="#34A853" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.99 14.12l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                   <path fill="#EA4335" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.5 53.94.5 35.08S16.32.8 35.3.8c10.5 0 17.98 4.12 23.52 9.41l-6.63 6.64c-4.03-3.78-9.49-6.72-16.89-6.72-13.86 0-24.7 11.17-24.7 25.04 0 13.86 10.84 25.04 24.7 25.04 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.5.14z"/>
                </svg>
             </div>
             
             <div className="w-full bg-white rounded-full shadow-[0_2px_5px_1px_rgba(64,60,67,0.16)] border border-gray-200 h-12 flex items-center px-4 gap-3">
                <svg className="w-5 h-5 text-[#9aa0a6]" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                <div className="flex-1 text-[16px] text-[#202124] overflow-hidden whitespace-nowrap">
                   {displayText}
                   {uiState === 'search' && showCursor && <span className="text-[#1a73e8]">|</span>}
                </div>
                <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
             </div>
          </div>


          {/* 2. RESULTS SCREEN */}
          <div className={`absolute inset-0 bg-[#f8f9fa] flex flex-col transition-opacity duration-300 ${uiState === 'results' ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}>
              <div className="bg-white shadow-sm p-3 pb-0 z-10">
                 <div className="bg-white rounded-full shadow-[0_1px_6px_rgba(32,33,36,0.28)] h-11 flex items-center px-4 gap-3 mb-3">
                     <svg className="w-5 h-5 text-[#5f6368]" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                     <div className="flex-1 text-[15px] text-[#202124]">Water Damage Services...</div>
                     <svg className="w-5 h-5 text-[#5f6368]" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                 </div>
                 <div className="flex gap-4 px-1 pb-3 text-[13px] font-medium text-[#5f6368]">
                    <div className="text-[#1a73e8] border-b-[3px] border-[#1a73e8] pb-2">All</div>
                    <div className="pb-2">Maps</div>
                    <div className="pb-2">Images</div>
                 </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-48 bg-[#e8eaed] relative overflow-hidden shrink-0">
                 {/* CSS Map Grid */}
                 <div className="absolute inset-0 opacity-20" 
                      style={{
                        backgroundImage: 'linear-gradient(#9aa0a6 1px, transparent 1px), linear-gradient(90deg, #9aa0a6 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                      }}>
                 </div>
                 {/* Fake Roads */}
                 <div className="absolute top-1/2 left-0 right-0 h-4 bg-white transform -rotate-12 border-y border-gray-300"></div>
                 <div className="absolute top-0 bottom-0 left-1/3 w-3 bg-white transform rotate-12 border-x border-gray-300"></div>
                 
                 {/* Map Pin 1 */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-[#ea4335] drop-shadow-md" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                 </div>
                 {/* Map Pin 2 */}
                 <div className="absolute top-1/3 right-1/4 z-0">
                    <svg className="w-6 h-6 text-[#ea4335] opacity-70" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                 </div>
              </div>

              {/* List Results */}
              <div className="bg-white overflow-hidden flex flex-col h-full">
                  {/* Result 1 - Highlights */}
                  <div className="p-4 space-y-3 bg-[#f8f9fa] border-b border-gray-100">
                      <div className="flex gap-3 relative">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0 z-10">
                             <img src="https://lh3.googleusercontent.com/p/AF1QipN-lLtPcfIHKaCBiZj2TyDRuiQ5fu9CTl5cXwcy=s1360-w1360-h1020-rw" className="w-full h-full object-cover" alt="Business" />
                          </div>
                          <div className="flex-1 z-10">
                              <h3 className="text-[16px] text-[#202124] font-normal mb-1">Flood Doctor</h3>
                              <div className="flex items-center gap-1 mb-1">
                                  <span className="text-[13px] text-[#202124]">4.9</span>
                                  <div className="flex text-[#fbbc04] text-[12px] gap-0.5">★★★★★</div>
                                  <span className="text-[13px] text-[#5f6368]">(103)</span>
                              </div>
                              <div className="text-[13px] text-[#5f6368]">Water damage restoration</div>
                              <div className="text-[13px] text-[#188038]">Open 24 hours</div>
                          </div>
                      </div>
                  </div>

                  {/* Result 2 - Filler */}
                  <div className="p-4 space-y-3 bg-white border-b border-gray-100 opacity-60">
                      <div className="flex gap-3 relative">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0"></div>
                          <div className="flex-1">
                              <div className="h-4 bg-gray-200 w-32 rounded mb-2"></div>
                              <div className="h-3 bg-gray-100 w-24 rounded mb-2"></div>
                              <div className="h-3 bg-gray-100 w-40 rounded"></div>
                          </div>
                      </div>
                  </div>

                  {/* Result 3 - Filler */}
                  <div className="p-4 space-y-3 bg-white opacity-40">
                      <div className="flex gap-3 relative">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0"></div>
                          <div className="flex-1">
                              <div className="h-4 bg-gray-200 w-28 rounded mb-2"></div>
                              <div className="h-3 bg-gray-100 w-20 rounded mb-2"></div>
                              <div className="h-3 bg-gray-100 w-36 rounded"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* 3. PROFILE SCREEN (The Final Destination) */}
          <div className={`absolute inset-0 bg-white flex flex-col transition-opacity duration-700 ${uiState === 'profile_empty' || uiState === 'profile_filled' ? 'opacity-100 z-40' : 'opacity-0 z-0'}`}>
              
              {/* Header */}
              <div className="bg-white shadow-sm border-b border-gray-100 p-4 pt-12 z-20 sticky top-0">
                  <div className="bg-white shadow-[0_1px_6px_rgba(32,33,36,0.28)] rounded-full h-11 flex items-center px-4 gap-3 mb-2">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6368" className="flex-shrink-0"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                     <h2 className="flex-1 text-[15px] text-[#202124] truncate font-normal m-0">Water Damage Services Near Me</h2>
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a73e8" className="flex-shrink-0"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                  </div>
                  <div className="flex justify-center gap-2 mt-4 px-2 overflow-x-auto no-scrollbar">
                      <div className="px-4 py-1.5 rounded-full bg-[#e8f0fe] text-[#1a73e8] text-[13px] font-medium whitespace-nowrap">Water</div>
                      <div className="px-4 py-1.5 rounded-full bg-white text-[#3c4043] text-[13px] font-medium border border-[#dadce0]">Fire</div>
                      <div className="px-4 py-1.5 rounded-full bg-white text-[#3c4043] text-[13px] font-medium border border-[#dadce0]">Flood</div>
                  </div>
              </div>

              <div className="bg-white pb-8 h-full overflow-hidden flex flex-col">
                  {/* Business Info */}
                  <div className="p-4 pb-2">
                      <h1 className="text-[20px] font-normal text-[#202124] leading-tight mb-1">Flood Doctor</h1>
                      <div className="flex items-center gap-1 mb-2">
                          <span className="font-bold text-[13px] text-[#202124]">4.9</span>
                          <div className="flex text-[#fbbc04] text-[12px] gap-0.5">★★★★★</div>
                          <span className="text-[13px] text-[#5f6368]">(103)</span>
                      </div>
                      <h3 className="text-[13px] text-[#5f6368] mb-1">Highest Rated Water Damage Restoration</h3>
                      <div className="text-[13px] text-[#188038] font-medium mb-4">Open 24 hours</div>

                      <div className="flex flex-wrap gap-2 mb-6 relative z-30">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e6f4ea]">
                              <span className="text-[10px] font-bold text-[#137333]">GOOGLE GUARANTEED</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e8f0fe]">
                              <span className="text-[10px] font-bold text-[#1a73e8]">24/7 EMERGENCY SERVICE</span>
                          </div>
                      </div>
                  </div>

                  {/* PHOTO GRID */}
                  <div className="flex h-52 gap-1 mb-6 px-4 shrink-0 relative z-0">
                      
                      {/* Left: Main Image */}
                      {/* Starts empty (gray), then fills when uiState becomes filled */}
                      <div className={`w-[65%] h-full relative rounded-l-xl overflow-hidden transition-all duration-700 ${uiState === 'profile_filled' ? 'bg-transparent' : 'bg-gray-100'}`}>
                         <img 
                            src="https://lh3.googleusercontent.com/p/AF1QipMQKIyykDu-juQpBpRKvURzJet6hcu3w7V5hZjC=s1360-w1360-h1020-rw" 
                            className={`w-full h-full object-cover transition-opacity duration-500 ${uiState === 'profile_filled' ? 'opacity-100' : 'opacity-0'}`} 
                            alt="Main Work"
                          />
                      </div>
                      
                      {/* Right Column */}
                      <div className="flex-1 flex flex-col gap-1 h-full">
                         {/* Top Right */}
                         <div className={`h-1/2 relative rounded-tr-xl overflow-hidden transition-all duration-700 ${uiState === 'profile_filled' ? 'bg-transparent' : 'bg-gray-100'}`}>
                             <img 
                                src="https://lh3.googleusercontent.com/p/AF1QipN-lLtPcfIHKaCBiZj2TyDRuiQ5fu9CTl5cXwcy=s1360-w1360-h1020-rw" 
                                className={`w-full h-full object-cover transition-opacity duration-500 ${uiState === 'profile_filled' ? 'opacity-100' : 'opacity-0'}`} 
                                alt="Work 2"
                             />
                         </div>
                         {/* Bottom Right */}
                         <div className={`h-1/2 relative rounded-br-xl overflow-hidden transition-all duration-700 ${uiState === 'profile_filled' ? 'bg-transparent' : 'bg-gray-100'}`}>
                             <img 
                                src="https://lh3.googleusercontent.com/p/AF1QipPJ3f6WGZzsqGzpkQFYLcLxCLrUkh_kcz2CqHbt=s1360-w1360-h1020-rw" 
                                className={`w-full h-full object-cover transition-opacity duration-500 delay-300 ${uiState === 'profile_filled' ? 'opacity-100' : 'opacity-0'}`} 
                                alt="Work 3"
                             />
                         </div>
                      </div>
                  </div>

                  {/* Review Summary (Static) */}
                  <div className="border-t-[8px] border-[#f1f3f4] mb-6 shrink-0"></div>
                  <div className="px-4 mb-2 shrink-0">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[16px] font-medium text-[#202124]">Review summary</h3>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="flex flex-col items-center">
                              <div className="text-[48px] font-normal text-[#202124] leading-none">4.9</div>
                              <div className="flex text-[#fbbc04] text-[10px] mt-1 gap-0.5">★★★★★</div>
                          </div>
                          <div className="flex-1 space-y-1.5">
                              {[95, 12, 4, 1, 2].map((w, i) => (
                                  <div key={i} className="flex items-center gap-3">
                                      <span className="text-[11px] text-[#5f6368] w-2 font-medium">{5-i}</span>
                                      <div className="flex-1 h-2 bg-[#f1f3f4] rounded-full overflow-hidden">
                                          <div className="h-full bg-[#fbbc04] rounded-full" style={{width: `${w}%`}}></div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
