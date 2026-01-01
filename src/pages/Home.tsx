import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTabs from '../components/layout/SectionTabs';
import StepsSection from '../components/sections/StepsSection';
import FeatureSplitSection from '../components/sections/FeatureSplitSection';
import ProcessInfographic from '../components/sections/ProcessInfographic';
import { getProcessSteps } from '../data/processTileMapping';
import ServicesGrid from '../components/sections/ServicesGrid';
import GoogleStyleFAQ, { DEFAULT_FAQ_DATA } from '../components/sections/GoogleStyleFAQ';
import TrustBar from '../components/sections/TrustBar';
import Section from '../components/ui/Section';
import AnimatedSection from '../components/ui/AnimatedSection';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import StaggeredGrid from '../components/ui/StaggeredGrid';
import { SERVICES } from '../data/services';
import Button from '../components/ui/Button';
import PageMeta from '../components/ui/PageMeta';
import { ArrowRight, Clock, Award, Shield, Star } from 'lucide-react';
import { generateHomepageSchema } from '../utils/schema';

// Visuals
import DryingProgressCard from '../components/ui/DryingProgressCard';
import DispatchEtaCard from '../components/ui/illustrations/DispatchEtaCard';
import SupportChatCard from '../components/ui/illustrations/SupportChatCard';
import HeroOrbitPhone from '../components/ui/illustrations/service-hero/HeroOrbitPhone';

// Google Style Graphics
import {
  AssessmentDashboardGraphic,
  FleetMapGraphic,
  ProcessStepsGraphic,
  FloatingCirclesBackground,
} from '../components/graphics';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 6);

  // Generate comprehensive structured data for homepage
  // Includes: Organization, LocalBusiness, AggregateRating, FAQPage
  const homepageSchema = generateHomepageSchema(DEFAULT_FAQ_DATA);

  return (
    <main id="main-content" className="flex-grow bg-white relative overflow-hidden">
      <PageMeta
        title="Emergency Water Damage Restoration & Flood Cleanup"
        description="24/7 Emergency water damage restoration in Northern Virginia. We arrive in 60 minutes. Licensed, insured, and trusted by thousands of homeowners."
        schema={homepageSchema}
      />

      {/* Decorative Background */}
      <FloatingCirclesBackground className="opacity-50 z-0" />

      {/* Hero - Google style split layout */}
      <Hero
        title={<>Turn water damage into a fresh start</>}
        subtitle="24/7 emergency restoration for Northern Virginia homes and businesses. We arrive in 60 minutes with hospital-grade technology."
        visual={<HeroOrbitPhone />}
        background="white"
      />

      {/* Process Infographic - Right under hero with isometric tiles */}
      <ProcessInfographic
        steps={getProcessSteps('res-water')}
        title="Our restoration process"
        subtitle="A proven, systematic approach to complete restoration."
      />

      {/* Sticky Navigation */}
      <SectionTabs />

      {/* Trust Bar - Social proof */}
      <TrustBar />

      {/* Stats Section - Animated counters */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-16">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-[#e8f0fe] text-[#1a73e8] text-sm font-medium rounded-full mb-4">
                Trusted by thousands
              </span>
              <h2 className="text-[32px] lg:text-[44px] font-normal text-[#202124] leading-tight heading-section">
                Northern Virginia's restoration experts
              </h2>
            </div>
          </AnimatedSection>

          <StaggeredGrid className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" staggerDelay={150}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#e8f0fe] rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#1a73e8]" />
              </div>
              <div className="stat-number mb-2">
                <AnimatedCounter end={60} suffix=" min" />
              </div>
              <p className="text-sm text-[#5f6368]">Average response time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#e6f4ea] rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-[#34a853]" />
              </div>
              <div className="stat-number mb-2" style={{ color: '#34a853' }}>
                <AnimatedCounter end={15000} suffix="+" />
              </div>
              <p className="text-sm text-[#5f6368]">Properties restored</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#fef7e0] rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#f29900]" />
              </div>
              <div className="stat-number mb-2" style={{ color: '#f29900' }}>
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <p className="text-sm text-[#5f6368]">Years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#fce8e6] rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-[#ea4335]" />
              </div>
              <div className="stat-number mb-2" style={{ color: '#ea4335' }}>
                <AnimatedCounter end={4.9} decimals={1} />
              </div>
              <p className="text-sm text-[#5f6368]">Google rating</p>
            </div>
          </StaggeredGrid>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <Section background="gray" padding="lg">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-4 py-1.5 bg-white text-[#1a73e8] text-sm font-medium rounded-full mb-4 shadow-sm">
              Simple process
            </span>
            <h2 className="text-[32px] lg:text-[44px] font-normal text-[#202124] leading-tight heading-section">
              How it works
            </h2>
            <p className="text-lg text-[#5f6368] max-w-2xl mx-auto mt-4 leading-relaxed">
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

      {/* Services Grid */}
      <Section background="gray" padding="lg" id="services">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-4 py-1.5 bg-white text-[#1a73e8] text-sm font-medium rounded-full mb-4 shadow-sm">
              Full-service restoration
            </span>
            <h2 className="text-[32px] lg:text-[44px] font-normal text-[#202124] leading-tight heading-section">
              Restoration services
            </h2>
            <p className="text-lg text-[#5f6368] max-w-2xl mx-auto mt-4 leading-relaxed">
              From water extraction to mold remediation, we handle every aspect of property restoration.
            </p>
          </div>
        </AnimatedSection>

        <ServicesGrid services={featuredServices} />

        <AnimatedSection delay={400}>
          <div className="flex justify-center mt-16">
            <Button to="/services/" variant="secondary" size="lg" className="btn-ripple">
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

      {/* CTA Banner - Gradient background */}
      <section className="py-24 lg:py-32 hero-gradient-blue relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a73e8] opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#34a853] opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-[1296px] mx-auto px-6 lg:px-16 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-[36px] lg:text-[52px] font-normal text-[#202124] mb-6 leading-tight heading-section">
                Ready to restore your property?
              </h2>
              <p className="text-lg lg:text-xl text-[#5f6368] mb-10 leading-relaxed">
                Call now for immediate 24/7 emergency response or schedule a free assessment.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="tel:8774970007" variant="primary" size="lg" className="btn-ripple min-w-[200px]">
                  (877) 497-0007
                </Button>
                <Button to="/request/" variant="secondary" size="lg" className="btn-ripple min-w-[200px]">
                  Request Service
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
              <p className="mt-8 text-sm text-[#5f6368]">
                Free estimates • No obligation • Licensed & insured
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mobile Spacer for global sticky CTA */}
      <div className="h-20 lg:hidden" />
    </main>
  );
};

export default Home;
