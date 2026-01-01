import React, { useState, useRef } from 'react';
import PageMeta from '../components/ui/PageMeta';
import { 
  ShieldCheck, Heart, MapPin, Award, Users, Clock, 
  Pause, Play, Phone, FileText, Zap, Star 
} from 'lucide-react';

// --- 1. HERO WRAPPER ---
const HeroSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const marqueeItems = [
    { label: "IICRC CERTIFIED", icon: ShieldCheck },
    { label: "ANGIE'S LIST", icon: Star },
    { label: "BEST OF HOUZZ", icon: Award },
    { label: "EPA LEAD-SAFE", icon: ShieldCheck },
    { label: "RIA MEMBER", icon: Users },
    { label: "BBB ACCREDITED", icon: FileText },
    { label: "24/7 EMERGENCY", icon: Clock },
  ];

  const fullMarquee = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="pt-[60px] md:pt-[80px] pb-[60px]">
        <div className="text-center max-w-[800px] mx-auto mb-[60px]">
          <h1 className="font-display text-[40px] md:text-[60px] leading-[1.2] font-normal text-[#202124] tracking-[-0.5px] mb-[16px]">
             Restoring Homes, <br/> Rebuilding Lives
          </h1>
          <p className="font-sans text-[18px] text-[#3c4043] leading-[1.55] max-w-2xl mx-auto">
            We are Northern Virginia's trusted local experts for emergency water damage and disaster recovery.
          </p>
        </div>

        <div className="relative w-full overflow-hidden bg-white rounded-[4px] h-[445px] flex items-center justify-center mb-[80px] group border border-[#dadce0]">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="https://www.gstatic.com/marketing-cms/ads/c7/f4/7125d53e4223b68375c9e31b40c7/808-header-lhs-build-a-1-1-250521-1644.mp4"
            />
            {/* Overlay Marquee inside the video container to mimic Google's style */}
            <div className={`absolute top-8 left-0 flex gap-16 md:gap-24 whitespace-nowrap will-change-transform px-4 opacity-30 ${isPaused ? 'pause-animation' : 'animate-marquee'}`}>
               {fullMarquee.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <item.icon size={32} className="text-white" strokeWidth={2} />
                    <span className="font-display text-xl font-bold text-white tracking-tight uppercase">
                      {item.label}
                    </span>
                  </div>
               ))}
            </div>

            <button 
                onClick={togglePlay}
                className="absolute bottom-[18px] right-[14px] w-[48px] h-[48px] flex items-center justify-center rounded-full z-10 hover:bg-black/5 transition-all focus:outline-none cursor-pointer"
                aria-label={isPaused ? "Play animation" : "Pause animation"}
            >
                <div className="w-[28px] h-[28px] bg-[rgba(32,33,36,0.75)] rounded-full flex items-center justify-center backdrop-blur-sm">
                {isPaused ? (
                    <Play size={12} className="fill-white text-white ml-0.5" />
                ) : (
                    <Pause size={12} className="fill-white text-white" />
                )}
                </div>
            </button>
            <style>{`
                @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                animation: marquee 60s linear infinite;
                }
                .pause-animation {
                animation-play-state: paused;
                }
            `}</style>
        </div>
    </div>
  );
};

// --- 2. WINNERS CARD GRID (9 Cards, Real Images, No Hover) ---
const WinnersSection = () => {
  
  // These paths will look for a public/assets folder. 
  // In the preview, these might be broken images, but the code is correct for a real deployment.
  const starIcon = "/assets/star.png";
  const pencilIcon = "/assets/pencil.png";
  const profileIcon = "/assets/profile.png";
  const bulbIcon = "/assets/bulb.png";

  const cards = [
    {
      category: "EXCELLENCE - SERVICE",
      title: "24/7 Live Calls",
      desc: "No answering services. When you call, you speak to a real restoration expert ready to dispatch a crew immediately.",
      image: starIcon 
    },
    {
      category: "EXCELLENCE - SPEED",
      title: "60-Minute Response",
      desc: "Water damage gets worse by the minute. We guarantee to be on-site in Northern Virginia in under an hour.",
      image: bulbIcon 
    },
    {
      category: "IMPACT - FINANCIAL",
      title: "Direct Insurance Billing",
      desc: "We work for YOU, not the insurance company. We handle the paperwork and bill them directly so you don't have to.",
      image: pencilIcon
    },
    {
      category: "TRUST - CERTIFIED",
      title: "IICRC Certified Firm",
      desc: "Every technician holds advanced certifications in Water Restoration (WRT) and Applied Structural Drying (ASD).",
      image: profileIcon
    },
    {
      category: "SAFETY - EPA",
      title: "Lead-Safe Certified",
      desc: "We are EPA certified to conduct lead-based paint renovation, repair, and painting activities safely.",
      image: bulbIcon
    },
    {
      category: "COMMUNITY - LOCAL",
      title: "Locally Owned",
      desc: "Not a franchise. We live in NoVA and care deeply about our neighbors and our local reputation.",
      image: starIcon
    },
    {
      category: "QUALITY - GUARANTEE",
      title: "Workmanship Warranty",
      desc: "We stand behind every job with a comprehensive workmanship warranty for your peace of mind.",
      image: pencilIcon
    },
    {
      category: "TECHNOLOGY - ADVANCED",
      title: "Hospital-Grade Equipment",
      desc: "We use industrial HEPA scrubbers and thermal imaging cameras to ensure your home is truly clean.",
      image: bulbIcon
    },
    {
      category: "REPUTATION - TRUSTED",
      title: "5-Star Rated",
      desc: "Hundreds of verified 5-star reviews across Google, Yelp, and Angi prove our commitment to excellence.",
      image: starIcon
    }
  ];

  return (
    <div className="mb-[100px]">
      <div className="text-center mb-[80px]">
        <h2 className="font-display text-[40px] leading-[1.2] font-normal text-[#202124] m-0">
          Why Neighbors Choose Flood Doctor
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {cards.map((card, i) => (
          // CARD: No hover effect. Border #dadce0. Radius 24px. Flex col. White bg.
          <div key={i} className="flex flex-col border border-[#dadce0] rounded-[24px] bg-white h-full overflow-hidden">
            
            {/* Image Area: Padding 24px 24px 16px */}
            <div className="pt-[24px] px-[24px] pb-[16px]">
               {/* Exact Height 80px */}
               <img 
                 src={card.image} 
                 alt="" 
                 className="h-[80px] w-auto object-contain block"
                 // Fallback to ensure layout holds even if image breaks
                 onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `<div style="height:80px; width:80px; background:#f1f3f4; border-radius:8px;"></div>`;
                 }}
               />
            </div>

            {/* Content Area: Padding 24px 24px 0 */}
            <div className="px-[24px] pb-[24px] pt-0 flex flex-col flex-1">
                
                {/* Eyebrow: 11px, weight 500, spacing .5px, #5f6368 */}
                <div className="font-sans text-[11px] font-medium tracking-[0.5px] leading-[1.45] text-[#5f6368] uppercase m-0">
                    {card.category}
                </div>

                {/* Headline: 20px, weight 400, leading 1.4, #202124, 8px margin */}
                <h3 className="font-display text-[20px] font-normal leading-[1.4] text-[#202124] mt-[8px] mb-0 line-clamp-2">
                    {card.title}
                </h3>

                {/* Body: 16px, weight 400, leading 1.5, #3c4043, 8px margin, line-clamp-4 */}
                <p className="font-sans text-[16px] font-normal leading-[1.5] tracking-[.1px] text-[#3c4043] mt-[8px] line-clamp-4">
                    {card.desc}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 3. TEAM SECTION ---
const TeamSection = () => {
  const [activeTab, setActiveTab] = useState<'leadership' | 'techs'>('leadership');

  const leadership = [
    { name: "Kevin Freemore", title: "SVP Media, Tech and Data, 4As", icon: Users },
    { name: "Michael Donnelly", title: "EVP – AI, MarTech, ANA", icon: FileText },
    { name: "Tricia White", title: "Director, Global Client Solutions", icon: ShieldCheck },
    { name: "Alicia Carey", title: "Managing Director, Agency", icon: Heart },
  ];

  const techs = [
    { name: "Chris Evans", title: "Lead Water Technician", icon: Zap },
    { name: "Alex T.", title: "IICRC Restoration Tech", icon: Award },
    { name: "Jordan M.", title: "Mold Remediation Specialist", icon: ShieldCheck },
    { name: "Sam K.", title: "Emergency Response Team", icon: Clock },
  ];

  const list = activeTab === 'leadership' ? leadership : techs;

  return (
    <div className="py-[60px]">
      <div className="text-center mb-[36px]">
         <h2 className="font-display text-[40px] leading-[1.2] font-normal text-[#202124] m-0">
            Meet the Team
         </h2>
      </div>
      
      <div className="flex justify-center w-full border-b-[4px] border-[#f1f3f4] mb-[48px]">
        <div className="flex w-full justify-center">
            <button 
              onClick={() => setActiveTab('leadership')}
              className={`
                flex-1 basis-0 max-w-[600px] 
                mr-[54px] -ml-[10px] py-[28px] 
                text-[16px] font-medium text-center relative outline-none transition-colors
                ${activeTab === 'leadership' ? 'text-[#202124]' : 'text-[#5f6368] hover:text-[#202124]'}
              `}
            >
              Leadership
              {activeTab === 'leadership' && (
                <div className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#1a73e8] z-10" />
              )}
            </button>

            <button 
              onClick={() => setActiveTab('techs')}
              className={`
                flex-1 basis-0 max-w-[600px] 
                mr-[54px] -ml-[10px] py-[28px] 
                text-[16px] font-medium text-center relative outline-none transition-colors
                ${activeTab === 'techs' ? 'text-[#202124]' : 'text-[#5f6368] hover:text-[#202124]'}
              `}
            >
              Technicians
              {activeTab === 'techs' && (
                <div className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#1a73e8] z-10" />
              )}
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[32px] md:gap-x-[64px]">
        {list.map((person, i) => (
          <div key={i} className="group">
            <div className="flex items-center gap-[24px] bg-[#f8f9fa] rounded-[20px] px-[24px] py-[16px] min-h-[94px]
                            transition-shadow duration-200 
                            hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]">
              
              <div className="w-[80px] h-[80px] min-w-[80px] bg-white rounded-[12px] flex items-center justify-center text-gray-300 overflow-hidden shrink-0 border border-[#dadce0]">
                 <person.icon size={40} strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col justify-center flex-1">
                <h3 className="font-display text-[20px] text-[#202124] font-normal leading-[1.4] mb-[4px]">
                    {person.name}
                </h3>
                <p className="font-sans text-[16px] text-[#5f6368] font-normal leading-[1.5] m-0">
                    {person.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- MAIN PAGE ---
const About: React.FC = () => {
  const stats = [
    { label: "Years Serving NoVA", value: "15+" },
    { label: "Homes Restored", value: "5k+" },
    { label: "Avg Response Time", value: "60m" },
    { label: "Google Rating", value: "4.9" },
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="About Us" 
        description="Locally owned and operated restoration experts serving Northern Virginia since 2010." 
      />
      
      {/* 1. Hero */}
      <div className="mx-[28px] md:mx-[72px] max-w-[1296px] 2xl:mx-auto">
          <HeroSection />
      </div>

      {/* 2. Stats Bar (Flex) */}
      <div className="border-y border-gray-100 bg-white py-[60px] mb-[100px]">
        <div className="mx-[28px] md:mx-[72px] max-w-[1296px] 2xl:mx-auto">
           <div className="flex flex-wrap justify-between gap-[40px]">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left min-w-[140px]">
                   <div className="font-display text-[60px] leading-[1.2] font-normal text-[#1a73e8] mb-2 tracking-[-0.5px]">
                      {stat.value}
                   </div>
                   <div className="font-sans text-[14px] font-bold text-[#5f6368] uppercase tracking-wider">
                      {stat.label}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* 3. Winners & Team */}
      <div className="mx-[28px] md:mx-[72px] max-w-[1296px] 2xl:mx-auto py-[80px]">
          <WinnersSection />
          <TeamSection />
      </div>

    </main>
  );
};

export default About;