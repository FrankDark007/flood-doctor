
import React, { useState, useEffect, useRef } from 'react';

const cards = [
  {
    title: "Water Damage Restoration",
    desc: "From burst pipes to storm flooding, we extract standing water, dry structural materials, and restore your property to pre-loss condition using industrial-grade equipment.",
    bgColor: "bg-[#e8f0fe]",
    type: 'services',
    link: "/services/water-damage-restoration"
  },
  {
    title: "Mold Remediation",
    desc: "Professional mold inspection, containment, and removal following IICRC S520 standards. We identify moisture sources and ensure complete remediation to protect your health.",
    bgColor: "bg-[#e6f4ea]",
    type: 'products',
    link: "/services/mold-remediation"
  },
  {
    title: "Fire & Smoke Damage",
    desc: "Comprehensive fire damage restoration including smoke and soot removal, odor elimination, structural cleaning, and complete reconstruction services.",
    bgColor: "bg-[#fef7e0]",
    type: 'food',
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

  const renderMockup = (type: string) => {
    switch (type) {
      case 'services':
        return (
          <div className="w-full h-full bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between mb-4">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-gray-900 google-sans text-xs">Detroit Voltage</span>
                <div className="flex items-center gap-1 text-[8px]"><span className="text-[#fbbc04]">★★★★★</span></div>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1621905235294-7500bed49cb3?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Service" />
              </div>
            </div>
            <div className="flex gap-4 text-[9px] text-[#1a73e8] font-bold border-b border-gray-100 pb-2 mb-4">
              <span className="border-b-2 border-[#1a73e8] pb-2">Overview</span>
            </div>
            <button className="w-full py-2 rounded-full border border-[#1a73e8] text-[#1a73e8] text-[9px] font-bold mb-6">REQUEST A QUOTE</button>
            <div className="flex items-start gap-3"><div className="w-3 h-3 bg-gray-100 rounded-full mt-1"></div><div className="flex-1 space-y-1.5"><div className="h-1.5 bg-gray-100 rounded w-full"></div><div className="h-1.5 bg-gray-50 rounded w-2/3"></div></div></div>
          </div>
        );
      case 'products':
        return (
          <div className="w-full h-full bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col">
            <div className="relative mb-4"><div className="h-7 bg-gray-50 border border-gray-100 rounded-full w-full px-3 flex items-center justify-end"><div className="w-3 h-3 text-gray-300">🔍</div></div></div>
            <div className="grid grid-cols-3 gap-2">
               {[0, 1, 2].map((idx) => (
                 <div key={idx} className="flex flex-col border border-gray-100 rounded-lg p-1.5"><div className="aspect-square bg-gray-50 rounded-md mb-1.5"></div><div className="h-1 bg-gray-100 w-3/4 mb-1"></div><div className="h-1 bg-gray-50 w-1/2"></div></div>
               ))}
            </div>
          </div>
        );
      case 'food':
        return (
          <div className="w-full h-full bg-white rounded-[2rem] p-0 shadow-sm border border-gray-100 flex flex-col overflow-hidden">
            <div className="h-28 bg-gray-100 relative"></div>
            <div className="p-4">
              <div className="mb-3"><span className="font-bold text-[10px] text-gray-900 google-sans">Bobby's BBQ</span><div className="text-[8px] text-yellow-400">★★★★★</div></div>
              <div className="grid grid-cols-2 gap-2"><button className="py-1.5 rounded-full border border-[#1a73e8] text-[#1a73e8] text-[8px] font-bold">PICKUP</button><button className="py-1.5 rounded-full border border-[#1a73e8] text-[#1a73e8] text-[8px] font-bold">DELIVERY</button></div>
            </div>
          </div>
        );
      default: return null;
    }
  };

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
                  <div className={`${card.bgColor} rounded-[12px] aspect-[1.6/1] mb-6 flex items-center justify-center p-6 lg:p-10 transition-opacity duration-500 ${activeCard === i ? 'opacity-100' : 'opacity-50'}`}>
                     <div className="w-full max-w-[280px] h-full shadow-lg rounded-[2rem] overflow-hidden">
                       {renderMockup(card.type)}
                     </div>
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
