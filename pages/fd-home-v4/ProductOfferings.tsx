
import React, { useState, useEffect, useRef } from 'react';

const cards = [
  {
    title: "Water Damage Restoration",
    desc: "From burst pipes to storm flooding, we extract standing water, dry structural materials, and restore your property to pre-loss condition using industrial-grade equipment.",
    bgColor: "bg-[#e8f0fe]",
    image: "/images/cards/water-damage-restoration-emergency-service.png",
    alt: "Professional water damage restoration technician extracting standing water with industrial equipment in Northern Virginia home",
    link: "/services/residential/restoration-services/water-damage-restoration/"
  },
  {
    title: "Mold Remediation",
    desc: "Professional mold inspection, containment, and removal following IICRC S520 standards. We identify moisture sources and ensure complete remediation to protect your health.",
    bgColor: "bg-[#e6f4ea]",
    image: "/images/cards/mold-remediation-professional-inspection.png",
    alt: "IICRC-certified mold remediation specialist in protective equipment inspecting and treating mold with containment barriers",
    link: "/services/residential/cleanup-services/mold-remediation/"
  },
  {
    title: "Fire & Smoke Damage",
    desc: "Comprehensive fire damage restoration including smoke and soot removal, odor elimination, structural cleaning, and complete reconstruction services.",
    bgColor: "bg-[#fef7e0]",
    image: "/images/cards/fire-smoke-damage-restoration-cleanup.png",
    alt: "Fire and smoke damage restoration technicians cleaning and restoring residential property with professional equipment",
    link: "/services/fire-damage-restoration"
  }
];

export const ProductOfferings: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0% -30% 0%',
      threshold: 0.5
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setActiveCard(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <section ref={containerRef} className="bg-white py-20 lg:py-24">
      <div className="mx-[28px] md:mx-[40px] lg:mx-[72px] xl:mx-auto max-w-[1456px]">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-[28px] md:gap-x-[40px] lg:gap-x-[48px] xl:gap-x-[64px]">
          
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Left Side: Sticky Text Content at 50vh */}
          <div className="col-span-4 md:col-span-8 lg:col-span-4 self-start lg:sticky lg:top-[calc(50vh-144px)] mb-12 lg:mb-0">
            <h2 className="text-[#3c4043] text-[48px] font-medium leading-[1.16667] tracking-[-.5px] mb-4 lg:text-left text-center">
              Complete Restoration Services for Every Emergency
            </h2>
            <div className="pt-4 lg:pt-6">
              <span className="text-[#3c4043] text-[16px] leading-[1.5] font-normal tracking-[.1px] lg:text-left text-center block">
                From water extraction and structural drying to mold remediation and fire damage restoration—Flood Doctor provides comprehensive disaster recovery services throughout Northern Virginia and Washington, DC.
              </span>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Right Side: Scrolling Cards */}
          <div className="col-span-4 md:col-span-8 lg:col-span-5 flex flex-col gap-[36px] lg:gap-[60px] pb-12">
            {cards.map((card, i) => (
              <div 
                key={i} 
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`transition-all duration-500 ease-out ${
                  activeCard === i 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-50 scale-[0.98]'
                }`}
              >
                <div className={`relative bg-white rounded-[24px] p-[18px_18px_32px] flex flex-col min-h-[500px] border-2 transition-all duration-500 ${
                  activeCard === i ? 'border-[#dadce0]' : 'border-transparent'
                }`}>
                  <div className={`rounded-[12px] aspect-[1.6/1] mb-6 overflow-hidden transition-opacity duration-500 ${activeCard === i ? 'opacity-100' : 'opacity-50'}`}>
                     <img
                       src={card.image}
                       alt={card.alt}
                       className="w-full h-full object-cover"
                       loading="lazy"
                     />
                  </div>
                  
                  <div className="flex flex-col flex-1 px-0 lg:px-[22px] mt-6">
                    <h3 className="text-[#202124] text-[36px] font-medium leading-[1.22222] tracking-[-.25px] mb-4">
                      {card.title}
                    </h3>
                    <p className="text-[#3c4043] text-[18px] leading-[1.55556] font-normal mb-8 line-clamp-4">
                      {card.desc}
                    </p>
                    <div className="mt-auto pt-[15px] px-[11px]">
                      <a href="#" className="text-[#1a73e8] font-medium text-[16px] h-[48px] px-[13px] rounded-full inline-flex items-center justify-center transition-colors hover:bg-[#1a73e80a]">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};
