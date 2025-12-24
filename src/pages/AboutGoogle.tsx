import React from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import { CheckCircle2, MapPin, Clock, Shield, Users, Award, Phone } from 'lucide-react';

// Company stats
const STATS = [
  { value: '15', unit: 'K+', label: 'Projects completed' },
  { value: '24', unit: '/7', label: 'Emergency response' },
  { value: '60', unit: 'min', label: 'Average arrival time' },
  { value: '4.9', unit: '★', label: 'Customer rating' },
];

// Team values
const VALUES = [
  {
    icon: Clock,
    title: 'Rapid response',
    description: 'We understand emergencies don\'t wait. Our teams are strategically positioned across Northern Virginia for 60-minute response times.',
  },
  {
    icon: Shield,
    title: 'Certified expertise',
    description: 'All technicians are IICRC certified with ongoing training in the latest restoration techniques and safety protocols.',
  },
  {
    icon: Users,
    title: 'Customer first',
    description: 'We guide you through every step, from emergency response to insurance claims, making a stressful situation manageable.',
  },
  {
    icon: Award,
    title: 'Quality guaranteed',
    description: 'We stand behind our work with comprehensive warranties and follow-up inspections to ensure lasting results.',
  },
];

// Service areas
const SERVICE_AREAS = [
  'Arlington', 'Alexandria', 'Fairfax', 'Falls Church', 'McLean', 'Tysons',
  'Reston', 'Herndon', 'Ashburn', 'Great Falls', 'Springfield', 'Lorton'
];

const AboutGoogle: React.FC = () => {
  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="About Us | Flood Doctor"
        description="Learn about Flood Doctor - Northern Virginia's trusted water damage restoration company. 24/7 emergency response, IICRC certified technicians, and direct insurance billing."
      />

      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <AnimatedSection>
              <h1
                className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] font-normal text-[#202124] mb-6"
                style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
              >
                Restoring homes,<br />
                <span className="text-[#1a73e8]">rebuilding peace of mind</span>
              </h1>
              <p className="text-lg text-[#5f6368] leading-relaxed mb-8">
                Flood Doctor is Northern Virginia's premier water damage restoration company. We combine rapid emergency response with advanced technology and certified expertise to restore your property quickly and completely.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/request/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a73e8] text-white text-base font-medium rounded-full hover:bg-[#1557b0] transition-colors"
                >
                  Get started
                </Link>
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1a73e8] text-base font-medium rounded-full border border-[#dadce0] hover:bg-[#f8f9fa] transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection delay={200} animation="fade-in">
              <div className="aspect-[4/3] bg-[#f8f9fa] rounded-[24px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                  alt="Flood Doctor team"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f8f9fa] py-12 lg:py-16">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-[40px] lg:text-[56px] font-normal text-[#1a73e8] leading-none mb-2">
                  {stat.value}<span className="text-[24px] lg:text-[32px]">{stat.unit}</span>
                </div>
                <div className="text-sm text-[#5f6368]">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4"
                style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
              >
                Why choose Flood Doctor
              </h2>
              <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
                We're committed to excellence in every aspect of our service.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="flex gap-6 p-6 bg-[#f8f9fa] rounded-[16px] hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] hover:bg-white transition-all duration-200 h-full">
                    <div className="w-12 h-12 bg-[#e8f0fe] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-[#1a73e8]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#202124] mb-2">{value.title}</h3>
                      <p className="text-base text-[#5f6368] leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2
                className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-6"
                style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
              >
                Certified and insured
              </h2>
              <p className="text-lg text-[#5f6368] mb-8">
                Our certifications ensure you receive the highest quality service backed by industry-leading standards and best practices.
              </p>

              <div className="space-y-4">
                {[
                  'IICRC Certified Firm',
                  'Water Damage Restoration Technician (WRT)',
                  'Applied Structural Drying (ASD)',
                  'Mold Remediation Specialist',
                  'Fully Licensed & Insured',
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#34a853] flex-shrink-0" />
                    <span className="text-base text-[#202124]">{cert}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'IICRC', desc: 'Certified Firm' },
                  { label: 'BBB', desc: 'A+ Rating' },
                  { label: 'EPA', desc: 'Lead-Safe Certified' },
                  { label: 'OSHA', desc: 'Compliant' },
                ].map((badge, i) => (
                  <div key={i} className="bg-white rounded-[16px] p-6 text-center shadow-sm hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] transition-all duration-200">
                    <div className="text-2xl font-bold text-[#1a73e8] mb-1">{badge.label}</div>
                    <div className="text-sm text-[#5f6368]">{badge.desc}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4"
                style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
              >
                Serving Northern Virginia
              </h2>
              <p className="text-lg text-[#5f6368] max-w-2xl mx-auto">
                With teams positioned throughout the region, we provide rapid response across all of Northern Virginia.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICE_AREAS.map((area, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#f8f9fa] rounded-full">
                  <MapPin size={14} className="text-[#1a73e8]" />
                  <span className="text-sm text-[#202124]">{area}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#1a73e8]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-[28px] lg:text-[36px] font-normal text-white mb-4"
              style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
            >
              Ready to get started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Call us anytime for emergency service or schedule a free assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:8774970007"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a73e8] text-base font-medium rounded-full hover:bg-[#f8f9fa] transition-colors"
              >
                <Phone size={18} />
                (877) 497-0007
              </a>
              <Link
                to="/request/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white text-base font-medium rounded-full border-2 border-white hover:bg-white/10 transition-colors"
              >
                Schedule assessment
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default AboutGoogle;
