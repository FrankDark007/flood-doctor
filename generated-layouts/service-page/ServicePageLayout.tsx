import React, { useState, useEffect, useRef } from 'react';
import { ServicePageData } from '../types';
import ServiceHeroCompact from './ServiceHeroCompact';
import ServiceQuickFacts from './ServiceQuickFacts';
import ServiceProblemSolution from './ServiceProblemSolution';
import ServiceTabs from './ServiceTabs';
import ServiceProcessMini from './ServiceProcessMini';
import ServiceDetailedContent from './ServiceDetailedContent';
import ServiceTestimonials from './ServiceTestimonials';
import ServicePricing from './ServicePricing';
import ServiceFAQCompact from './ServiceFAQCompact';
import ServiceCTASticky from './ServiceCTASticky';

interface ServicePageLayoutProps {
  data: ServicePageData;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ data }) => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky CTA when hero is NOT intersecting (scrolled past)
        setShowStickyCTA(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0, 
        rootMargin: "-100px 0px 0px 0px" // Trigger slightly after the top
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleConsultationClick = () => {
    // Scroll to contact form or open modal
    console.log("Open consultation modal");
    alert("This would open the booking modal or scroll to a contact form.");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 pb-20 md:pb-0">
      
      {/* Navigation Placeholder */}
      <nav className="h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-white sticky top-0 z-40">
        <div className="font-extrabold text-xl text-primary tracking-tight">FLOOD DOCTOR</div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
           <a href="#" className="hover:text-primary">Services</a>
           <a href="#" className="hover:text-primary">About</a>
           <a href="#" className="hover:text-primary">Insurance</a>
           <a href="#" className="hover:text-primary">Reviews</a>
        </div>
        <a href={`tel:${data.emergencyPhone}`} className="text-sm font-bold text-slate-800 flex items-center gap-2">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
           24/7: {data.emergencyPhone}
        </a>
      </nav>

      <main className="flex-grow">
        <div ref={heroRef}>
          <ServiceHeroCompact 
            title={data.title}
            subtitle={data.subtitle}
            badges={data.badges}
            emergencyPhone={data.emergencyPhone}
            onCtaClick={handleConsultationClick}
          />
        </div>

        <ServiceQuickFacts facts={data.quickFacts} />
        
        <ServiceProblemSolution data={data.problemSolution} />
        
        <ServiceTabs tabs={data.tabs} />

        <ServiceProcessMini steps={data.process} />
        
        <ServiceDetailedContent sections={data.detailedContent} />

        <ServiceTestimonials testimonials={data.testimonials} />

        <ServicePricing pricing={data.pricing} onCtaClick={handleConsultationClick} />
        
        <ServiceFAQCompact faqs={data.faqs} />

        {/* Footer Placeholder */}
        <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
          <div className="container mx-auto">
             <div className="mb-4 text-white font-bold text-lg">FLOOD DOCTOR</div>
             <p>&copy; {new Date().getFullYear()} Flood Doctor. All rights reserved.</p>
             <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
             </div>
          </div>
        </footer>
      </main>

      <ServiceCTASticky 
        isVisible={showStickyCTA} 
        emergencyPhone={data.emergencyPhone}
        onCtaClick={handleConsultationClick}
      />
    </div>
  );
};

export default ServicePageLayout;