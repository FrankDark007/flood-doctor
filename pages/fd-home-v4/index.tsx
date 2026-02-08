
import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import MobileStickyCTA from '../../components/layout/MobileStickyCTA';
import { Hero } from './Hero';
import { ValueProps } from './ValueProps';
import { FeatureSection } from './FeatureSection';
import { ProductOfferings } from './ProductOfferings';
import { InsightsSection } from './InsightsSection';
import { SuccessStory } from './SuccessStory';
import { FinalSteps } from './FinalSteps';
import { FAQ } from './FAQ';

const FloodDoctorHomeV4: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ValueProps />

        {/* Feature Row 1: Our Restoration Process */}
        <FeatureSection
          layout="text-left"
          title="Professional Water Damage Restoration Process"
          subtitle="Our IICRC-certified technicians follow industry best practices to restore your property quickly and completely."
          listItems={[
            { title: "Emergency Assessment", desc: "We inspect the damage, identify water sources, classify the water type, and create a detailed restoration plan—all within the first hour of arrival." },
            { title: "Water Extraction & Drying", desc: "Industrial-grade pumps remove standing water while commercial dehumidifiers and air movers ensure complete structural drying to prevent mold growth." },
            {
              title: "Restoration & Repairs",
              desc: "From drywall replacement to flooring restoration, we handle complete repairs to return your property to pre-loss condition—coordinating with your insurance throughout."
            }
          ]}
          visualType="attributes"
        />

        {/* Feature Row 2: Why Choose Us */}
        <FeatureSection
          layout="text-right"
          title="Why Northern Virginia Trusts Flood Doctor"
          subtitle="When water damage strikes, you need a restoration company that responds fast and does the job right."
          listItems={[
            { title: "Local Expertise Since 2008", desc: "We know Northern Virginia—from McLean's luxury homes to Arlington's historic properties. Our teams are stationed throughout the region for rapid response." },
            { title: "Advanced Equipment & Techniques", desc: "Thermal imaging, moisture meters, and professional-grade drying equipment ensure thorough restoration that prevents secondary damage and mold growth." },
            { title: "Insurance Claims Specialists", desc: "We document everything, communicate directly with adjusters, and handle billing so you can focus on getting back to normal—not paperwork." }
          ]}
          visualType="posts"
        />

        <ProductOfferings />
        <InsightsSection />
        <SuccessStory />
        <FinalSteps />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default FloodDoctorHomeV4;
