
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
      {visualType === 'attributes' ? (
        /* Restoration Process Visuals — swap image per active step */
        <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl shadow-google">
          <img
            src="/images/hero-tiles/water-damage-emergency-assessment.png"
            className={`w-full h-auto object-cover absolute inset-0 transition-opacity duration-500 ${activeIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            alt="Water damage emergency assessment — technician using moisture meter to inspect residential wall damage"
          />
          <img
            src="/images/hero-tiles/water-extraction-drying.png"
            className={`w-full h-auto object-cover absolute inset-0 transition-opacity duration-500 ${activeIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            alt="Water extraction and structural drying — industrial dehumidifiers and air movers removing moisture from residential property"
          />
          <img
            src="/images/hero-tiles/water-damage-restoration-repairs.png"
            className={`w-full h-auto object-cover absolute inset-0 transition-opacity duration-500 ${activeIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            alt="Water damage restoration and repairs — technician installing new drywall to restore property to pre-loss condition"
          />
          {/* First image also serves as layout anchor for container height */}
          <img
            src="/images/hero-tiles/water-damage-emergency-assessment.png"
            className="w-full h-auto object-cover invisible"
            alt=""
            aria-hidden="true"
          />
        </div>
      ) : (
      <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl shadow-google">
          <img
            src="/images/hero-tiles/water-damage-restoration-local-experts-northern-virginia.png"
            className={`w-full h-auto object-cover absolute inset-0 transition-opacity duration-500 ${activeIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            alt="Local water damage restoration experts serving Northern Virginia since 2008 with fast emergency response"
          />
          <img
            src="/images/hero-tiles/professional-water-damage-drying-equipment-thermal-imaging.png"
            className={`w-full h-auto object-cover absolute inset-0 transition-opacity duration-500 ${activeIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            alt="Professional water damage drying equipment and thermal imaging camera used by IICRC-certified restoration technicians"
          />
          <img
            src="/images/hero-tiles/water-damage-insurance-claims-specialist-documentation.png"
            className={`w-full h-auto object-cover absolute inset-0 transition-opacity duration-500 ${activeIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            alt="Water damage insurance claims specialist reviewing documentation with homeowner to simplify restoration billing"
          />
          {/* First image also serves as layout anchor for container height */}
          <img
            src="/images/hero-tiles/water-damage-restoration-local-experts-northern-virginia.png"
            className="w-full h-auto object-cover invisible"
            alt=""
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-white py-20 lg:py-24">
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
