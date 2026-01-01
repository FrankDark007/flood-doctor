
import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTabs from '../components/layout/SectionTabs';
import StepsSection from '../components/sections/StepsSection';
import FeatureSplitSection from '../components/sections/FeatureSplitSection';
import ProcessSection from '../components/sections/ProcessSection';
import ServicesGrid from '../components/sections/ServicesGrid';
import GoogleStyleFAQ, { FAQ_SCHEMA } from '../components/sections/GoogleStyleFAQ';
import TrustBar from '../components/sections/TrustBar';
import { SERVICES } from '../data/services';
import Button from '../components/ui/Button';
import PageMeta from '../components/ui/PageMeta';
import EmergencyServiceCard from '../components/ui/EmergencyServiceCard';

// Visuals
import DryingProgressCard from '../components/ui/DryingProgressCard';
import DispatchEtaCard from '../components/ui/illustrations/DispatchEtaCard';
import SupportChatCard from '../components/ui/illustrations/SupportChatCard';
import HeroOrbitPhone from '../components/ui/illustrations/service-hero/HeroOrbitPhone';

const Home: React.FC = () => {
  // Show top 6 services to keep the home page focused (Product Catalogue feel)
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <main id="main-content" className="flex-grow bg-white">
      <PageMeta 
        title="Emergency Water Damage Restoration & Flood Cleanup" 
        description="24/7 Emergency water damage restoration in Northern Virginia. We arrive in 60 minutes. Licensed, insured, and trusted by thousands of homeowners." 
        schema={FAQ_SCHEMA}
      />

      {/* 1. Hero: Split layout with large visual (Google Store style) */}
      <Hero 
        title={<>24/7 <span className="text-primary">Water Damage Restoration</span></>}
        subtitle="Serving Northern Virginia, Maryland, and DC. We combine rapid dispatch with hospital-grade technology to dry your home faster."
        visual={<HeroOrbitPhone />}
      />
      
      {/* Mobile Only: Live Status Dashboard */}
      <div className="md:hidden px-6 -mt-6 mb-10 relative z-20">
        <EmergencyServiceCard />
      </div>
      
      {/* 2. Sticky Navigation Bar */}
      <SectionTabs />

      {/* 3. Trust Indicators (Social Proof) */}
      <TrustBar />

      {/* 4. High-Level "How it Works" (The 3-Step Setup) */}
      <div className="bg-subtle/50">
        <StepsSection />
      </div>

      {/* 5. Feature Deep Dives (Alternating Layouts) */}
      {/* Feature A: Technology/Data */}
      <FeatureSplitSection 
        heading="Know exactly what's happening with your property"
        description="Discover moisture levels in real-time, get insights on drying progress, and understand how the restoration is proceeding with our transparent dashboard."
        visual={<DryingProgressCard />}
        bg="white"
        ctaLabel="Learn about our technology"
        ctaLink="/resources/technology/"
      />

      {/* Feature B: Communication */}
      <FeatureSplitSection 
        heading="Easily connect with your project manager"
        description="Update your insurance adjuster and get answers to your questions instantly. We keep everyone in the loop to speed up your claim."
        visual={<SupportChatCard />}
        imageLeft={true}
        bg="subtle"
        ctaLabel="See how we communicate"
        ctaLink="/resources/communication/"
      />

       {/* Feature C: Logistics/Speed - Wrapped with ID for "Locations" Navigation */}
      <div id="locations">
        <FeatureSplitSection 
          heading="Rapid dispatch when every minute counts"
          description="Our fleet is stationed across Northern Virginia. We track our trucks in real-time to ensure the closest certified crew reaches you within 60 minutes."
          visual={<DispatchEtaCard />}
          bg="white"
          ctaLabel="View our service locations"
          ctaLink="/locations/"
        />
      </div>

      {/* 6. Technical Process (The "Engineered" view) */}
      <ProcessSection />

      {/* 7. Service Catalogue (The "Product Grid") - ID 'services' is already handled by the component prop */}
      <ServicesGrid 
        id="services" 
        services={featuredServices} 
        title="Restoration Services"
      >
         <div className="flex justify-center pt-8">
            <Button to="/services/" variant="outline" className="h-12 px-8 text-base font-medium">
                View full service directory
            </Button>
         </div>
      </ServicesGrid>

      {/* 8. Support / FAQ - Wrapped with ID for 'Reviews' link */}
      <div id="reviews">
        <GoogleStyleFAQ />
      </div>

      {/* Mobile Spacer */}
      <div className="h-24 md:hidden"></div>
      
    </main>
  );
};

export default Home;
