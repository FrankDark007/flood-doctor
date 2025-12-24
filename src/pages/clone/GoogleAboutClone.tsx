import React from 'react';
import { Phone, MapPin, Calendar, FileText } from 'lucide-react';
import {
  CloneHero,
  CloneCardGrid,
  CloneFeatureSection,
} from '../../components/clone/google-about-clone';

/**
 * Google About Clone Page
 *
 * This page demonstrates the Flood Doctor brand using design DNA
 * extracted from Google's About page (about.google).
 *
 * Layout pattern:
 * - Hero with left-aligned content, right visual
 * - 3-column card grid
 * - Alternating two-column feature sections
 * - Clean section backgrounds (white/subtle gray)
 */
const GoogleAboutClone: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <CloneHero
        title="Professional Water Damage Restoration"
        subtitle="Northern Virginia's trusted experts for emergency water damage, flood cleanup, and mold remediation. Available 24/7 with rapid response times."
        ctaText="Get Emergency Help"
        ctaHref="/contact/"
      />

      {/* Card Grid Section */}
      <CloneCardGrid />

      {/* Feature Section 1 - Image Left */}
      <CloneFeatureSection
        eyebrow="24/7 Emergency Response"
        title="Rapid Response When You Need It Most"
        description="Our certified technicians arrive within 60 minutes of your call. We use advanced moisture detection and industrial drying equipment to minimize damage and restore your property quickly."
        ctaText="Call Now"
        ctaHref="tel:+17035551234"
        imageSide="left"
        bgColor="subtle"
      >
        {/* Custom visual for emergency response */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-50 to-amber-50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-4">
              <Phone size={40} className="text-red-600" />
            </div>
            <p className="text-2xl font-display font-medium text-text">60 min</p>
            <p className="text-muted">Response Time</p>
          </div>
        </div>
      </CloneFeatureSection>

      {/* Feature Section 2 - Image Right */}
      <CloneFeatureSection
        eyebrow="Service Area"
        title="Serving Northern Virginia & DC"
        description="From Arlington to Fairfax, Loudoun to Prince William, we provide comprehensive water damage restoration services across the greater Washington DC metropolitan area."
        ctaText="View Locations"
        ctaHref="/locations/"
        imageSide="right"
        bgColor="white"
      >
        {/* Custom visual for service area */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-4">
              <MapPin size={40} className="text-primary" />
            </div>
            <p className="text-2xl font-display font-medium text-text">50+ Cities</p>
            <p className="text-muted">In Our Coverage Area</p>
          </div>
        </div>
      </CloneFeatureSection>

      {/* Feature Section 3 - Image Left */}
      <CloneFeatureSection
        eyebrow="Insurance Coordination"
        title="We Work With Your Insurance"
        description="Our team handles the insurance documentation process, providing detailed moisture reports, photo documentation, and direct billing to make your claim process seamless."
        ctaText="Learn More"
        ctaHref="/resources/insurance-guide/"
        imageSide="left"
        bgColor="subtle"
      >
        {/* Custom visual for insurance */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
              <FileText size={40} className="text-green-600" />
            </div>
            <p className="text-2xl font-display font-medium text-text">Direct Billing</p>
            <p className="text-muted">To Your Insurance</p>
          </div>
        </div>
      </CloneFeatureSection>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-normal text-text mb-4">
            Ready to Restore Your Property?
          </h2>
          <p className="text-lg text-muted mb-8">
            Contact us today for a free assessment. We're available 24/7 for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17035551234"
              className="
                inline-flex items-center justify-center gap-2
                h-[50px] px-6
                bg-primary hover:bg-primary-hover
                text-white text-base font-medium
                rounded-[48px]
                transition-all duration-200
                hover:shadow-[0_1px_3px_0_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)]
              "
            >
              <Phone size={18} />
              Call (703) 555-1234
            </a>
            <a
              href="/contact/"
              className="
                inline-flex items-center justify-center gap-2
                h-[50px] px-6
                bg-white hover:bg-subtle
                text-primary text-base font-medium
                border border-border hover:border-muted
                rounded-[48px]
                transition-all duration-200
              "
            >
              <Calendar size={18} />
              Schedule Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleAboutClone;
