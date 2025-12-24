import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTabs from '../components/layout/SectionTabs';
import StepsSection from '../components/sections/StepsSection';
import FeatureSplitSection from '../components/sections/FeatureSplitSection';
import ProcessSection from '../components/sections/ProcessSection';
import ServicesGrid from '../components/sections/ServicesGrid';
import GoogleStyleFAQ, { FAQ_SCHEMA } from '../components/sections/GoogleStyleFAQ';
import TrustBar from '../components/sections/TrustBar';
import Section from '../components/ui/Section';
import AnimatedSection from '../components/ui/AnimatedSection';
import { SERVICES } from '../data/services';
import Button from '../components/ui/Button';
import PageMeta from '../components/ui/PageMeta';
import { ArrowRight } from 'lucide-react';

// Visuals
import DryingProgressCard from '../components/ui/DryingProgressCard';
import DispatchEtaCard from '../components/ui/illustrations/DispatchEtaCard';
import SupportChatCard from '../components/ui/illustrations/SupportChatCard';
import HeroOrbitPhone from '../components/ui/illustrations/service-hero/HeroOrbitPhone';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <main id="main-content" className="flex-grow bg-white">
      <PageMeta
        title="Emergency Water Damage Restoration & Flood Cleanup"
        description="24/7 Emergency water damage restoration in Northern Virginia. We arrive in 60 minutes. Licensed, insured, and trusted by thousands of homeowners."
        schema={FAQ_SCHEMA}
      />

      {/* Hero - Google style split layout */}
      <Hero
        title={<>Turn water damage into a fresh start</>}
        subtitle="24/7 emergency restoration for Northern Virginia homes and businesses. We arrive in 60 minutes with hospital-grade technology."
        visual={<HeroOrbitPhone />}
        background="white"
      />

      {/* Sticky Navigation */}
      <SectionTabs />

      {/* Trust Bar - Social proof */}
      <TrustBar />

      {/* How It Works - 3 Steps */}
      <Section background="gray" padding="lg">
        <AnimatedSection>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[36px] font-normal text-[#202124] mb-4 leading-[44px]">
              How it works
            </h2>
            <p className="text-base text-[#3c4043] max-w-2xl mx-auto leading-6">
              From your first call to complete restoration, we make the process simple.
            </p>
          </div>
        </AnimatedSection>
        <StepsSection />
      </Section>

      {/* Feature Sections - Alternating layouts */}
      <Section background="white" padding="lg">
        <AnimatedSection delay={100}>
          <FeatureSplitSection
            heading="Know exactly what's happening"
            description="Track moisture levels in real-time, see drying progress, and understand every step of the restoration with our transparent dashboard."
            visual={<DryingProgressCard />}
            bg="white"
            ctaLabel="Explore our technology"
            ctaLink="/resources/technology/"
          />
        </AnimatedSection>
      </Section>

      <Section background="gray" padding="lg">
        <AnimatedSection delay={100}>
          <FeatureSplitSection
            heading="Stay connected every step"
            description="Your dedicated project manager keeps you and your insurance adjuster informed. Get answers instantly and speed up your claim."
            visual={<SupportChatCard />}
            imageLeft={true}
            bg="subtle"
            ctaLabel="See how we communicate"
            ctaLink="/resources/communication/"
          />
        </AnimatedSection>
      </Section>

      <Section background="white" padding="lg" id="locations">
        <AnimatedSection delay={100}>
          <FeatureSplitSection
            heading="Rapid dispatch when it matters"
            description="Our fleet is stationed across Northern Virginia. Real-time tracking ensures the closest certified crew reaches you within 60 minutes."
            visual={<DispatchEtaCard />}
            bg="white"
            ctaLabel="View service locations"
            ctaLink="/locations/"
          />
        </AnimatedSection>
      </Section>

      {/* Technical Process */}
      <ProcessSection />

      {/* Services Grid */}
      <Section background="gray" padding="lg" id="services">
        <AnimatedSection>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[36px] font-normal text-[#202124] mb-4 leading-[44px]">
              Restoration services
            </h2>
            <p className="text-base text-[#3c4043] max-w-2xl mx-auto leading-6">
              From water extraction to mold remediation, we handle every aspect of property restoration.
            </p>
          </div>
        </AnimatedSection>

        <ServicesGrid services={featuredServices} />

        <AnimatedSection delay={300}>
          <div className="hidden lg:flex justify-center mt-12">
            <Button to="/services/" variant="outline" size="md">
              View all services
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </AnimatedSection>
      </Section>

      {/* FAQ Section */}
      <Section background="white" padding="lg" id="reviews">
        <AnimatedSection>
          <GoogleStyleFAQ />
        </AnimatedSection>
      </Section>

      {/* CTA Banner */}
      <Section background="gray" padding="lg">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-[36px] font-normal text-[#202124] mb-4 leading-[44px]">
              Ready to restore your property?
            </h2>
            <p className="text-base text-[#3c4043] mb-12 max-w-xl mx-auto leading-6">
              Call now for immediate 24/7 emergency response or schedule a free assessment.
            </p>
            <div className="hidden lg:flex flex-row items-center justify-center gap-4">
              <Button href="tel:8774970007" variant="primary" size="md">
                (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="md">
                Request Service
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Mobile Spacer for global sticky CTA */}
      <div className="h-20 lg:hidden" />
    </main>
  );
};

export default Home;
