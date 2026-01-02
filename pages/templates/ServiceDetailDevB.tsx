import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ChevronRight,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Star,
  Award,
  Droplets,
  ThermometerSun,
  Wind,
  Wrench,
  Quote,
  MapPin,
  BadgeCheck
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';
import { ServiceData } from '../../types';
import { SERVICES } from '../../data/services';

/**
 * ServiceDetailDevB - Google Workspace Industry Page Inspired Layout
 *
 * Key patterns from Workspace Healthcare page:
 * - Hero with trust logos
 * - Bold statement heading
 * - Benefits with expandable accordion/tabs
 * - Customer testimonial quote blocks
 * - Tabbed success stories
 * - Resource cards carousel
 */

interface ServiceDetailDevBProps {
  service?: ServiceData;
}

const ServiceDetailDevB: React.FC<ServiceDetailDevBProps> = ({ service }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);

  const demoService = service || SERVICES[0];
  const serviceName = demoService?.title || 'Water Damage Restoration';
  const serviceTagline = demoService?.heroIntro || 'Professional water damage restoration services for Northern Virginia homeowners.';

  // Trust logos/certifications
  const certifications = [
    { name: 'IICRC Certified', logo: '/logos/iicrc.png' },
    { name: 'BBB A+ Rated', logo: '/logos/bbb.png' },
    { name: 'EPA Lead-Safe', logo: '/logos/epa.png' },
    { name: 'HomeAdvisor Elite', logo: '/logos/homeadvisor.png' }
  ];

  // Benefits with expandable details - Workspace accordion style
  const benefitCategories = [
    {
      title: 'Rapid Emergency Response',
      description: 'Minimize damage with our 60-minute response guarantee. Our dispatchers coordinate the nearest available crew.',
      icon: Clock,
      details: [
        '24/7/365 emergency hotline',
        'GPS-tracked technician dispatch',
        'Average arrival time: 47 minutes',
        'Immediate water extraction begins'
      ]
    },
    {
      title: 'Advanced Drying Technology',
      description: 'Commercial-grade equipment removes moisture completely, preventing mold and structural damage.',
      icon: Wind,
      details: [
        'Thermal imaging detection',
        'Industrial dehumidifiers',
        'Air scrubbers for air quality',
        'Daily moisture monitoring'
      ]
    },
    {
      title: 'Certified Restoration Experts',
      description: 'IICRC-certified technicians with specialized training in water damage, mold remediation, and structural repair.',
      icon: BadgeCheck,
      details: [
        'Water Damage Restoration (WRT)',
        'Applied Structural Drying (ASD)',
        'Mold Remediation Technician',
        'Ongoing education requirements'
      ]
    },
    {
      title: 'Complete Insurance Support',
      description: 'We handle the paperwork. Direct billing to all major carriers with documentation that maximizes your claim.',
      icon: Shield,
      details: [
        'Direct insurance billing',
        'Photo documentation',
        'Moisture mapping reports',
        'Claim advocacy support'
      ]
    }
  ];

  // Testimonials - Workspace quote block style
  const testimonials = [
    {
      quote: "They arrived within 45 minutes of my call. The water was already an inch deep in my basement. By morning, it was completely extracted and the drying process had begun.",
      author: 'Sarah M.',
      location: 'Arlington, VA',
      service: 'Basement Flooding',
      rating: 5
    },
    {
      quote: "What impressed me most was their communication. My project manager called with updates every day and explained exactly what was happening at each stage.",
      author: 'Michael R.',
      location: 'Fairfax, VA',
      service: 'Water Damage Restoration',
      rating: 5
    },
    {
      quote: "They dealt with my insurance company directly. I didn't have to fight for anything—they documented everything properly and my claim was approved in full.",
      author: 'Jennifer L.',
      location: 'McLean, VA',
      service: 'Storm Damage',
      rating: 5
    }
  ];

  // Service process tabs
  const processTabs = [
    {
      title: 'Assessment',
      icon: ThermometerSun,
      content: {
        headline: 'Comprehensive damage assessment using advanced technology',
        description: 'Our technicians use thermal cameras and moisture meters to detect water in walls, floors, and ceilings—even in areas that appear dry.',
        points: [
          'Infrared thermal imaging identifies hidden moisture',
          'Moisture mapping documents affected areas',
          'Category and class determination',
          'Detailed scope of work created'
        ]
      }
    },
    {
      title: 'Extraction',
      icon: Droplets,
      content: {
        headline: 'Industrial water removal at 10,000+ gallons per hour',
        description: 'Truck-mounted and portable extractors remove standing water quickly, minimizing secondary damage and reducing drying time.',
        points: [
          'Truck-mounted extraction units',
          'Submersible pumps for deep water',
          'Carpet and pad extraction',
          'Hard surface water removal'
        ]
      }
    },
    {
      title: 'Drying',
      icon: Wind,
      content: {
        headline: 'Scientific drying protocols for complete moisture removal',
        description: 'Strategic placement of air movers and dehumidifiers creates optimal drying conditions. Daily monitoring ensures complete restoration.',
        points: [
          'Commercial dehumidification',
          'High-velocity air movers',
          'Specialty drying systems',
          'Daily psychrometric readings'
        ]
      }
    },
    {
      title: 'Restoration',
      icon: Wrench,
      content: {
        headline: 'Complete restoration to pre-loss condition',
        description: 'From minor repairs to full reconstruction, our licensed contractors restore your property. One team handles everything.',
        points: [
          'Drywall and painting',
          'Flooring replacement',
          'Structural repairs',
          'Contents restoration'
        ]
      }
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={`${serviceName} | Flood Doctor`}
        description={demoService?.metaDescription || serviceTagline}
      />

      {/* Hero Section - Workspace style with trust strip */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-emerald-50/30" />

        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-20 lg:pt-20 lg:pb-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services/" className="hover:text-primary">Services</Link>
            <ChevronRight size={14} />
            <span className="text-text">{serviceName}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Service badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Droplets size={16} />
                {demoService.audience === 'RESIDENTIAL' ? 'Residential' : 'Commercial'} Service
              </div>

              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-text mb-6 leading-tight">
                {serviceName}
              </h1>

              <p className="text-xl text-muted leading-relaxed mb-8 max-w-lg">
                {serviceTagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/request/" variant="primary" size="lg">
                  Get Free Estimate
                </Button>
                <Button href="tel:8774970007" variant="outline" size="lg">
                  <Phone size={18} className="mr-2" />
                  (877) 497-0007
                </Button>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-100 to-slate-100 shadow-xl overflow-hidden">
                {/* Image placeholder */}
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl shadow-lg p-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-primary">60</div>
                  <div className="text-xs text-muted">Min Response</div>
                </div>
                <div className="text-center border-x border-gray-100">
                  <div className="font-display text-2xl font-bold text-primary">4.9</div>
                  <div className="text-xs text-muted">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted">Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip - Workspace style */}
        <div className="border-y border-gray-100 bg-white/80 backdrop-blur-sm py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              <span className="text-sm text-muted">Certified by:</span>
              {certifications.map((cert, idx) => (
                <div key={idx} className="h-8 w-24 bg-gray-200 rounded opacity-50" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bold Statement - Workspace style */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-medium text-text leading-relaxed">
            When water damage strikes, every minute counts. Our certified technicians arrive within 60 minutes, 24/7, with commercial-grade equipment that extracts up to 10,000 gallons per hour.
          </h2>
        </div>
      </section>

      {/* Benefits Accordion - Workspace style */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-10 bg-primary rounded-full" />
            <h2 className="font-display text-3xl font-semibold text-text">
              Why Choose Flood Doctor
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Visual */}
            <div className="lg:sticky lg:top-24">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 via-white to-emerald-50 shadow-sm overflow-hidden">
                {/* Dynamic illustration based on active benefit */}
                <div className="h-full flex items-center justify-center">
                  {React.createElement(benefitCategories[activeBenefit].icon, {
                    size: 120,
                    className: 'text-primary/20'
                  })}
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {benefitCategories.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border-2 transition-all cursor-pointer ${
                    activeBenefit === idx
                      ? 'border-primary bg-white shadow-md'
                      : 'border-transparent bg-white hover:border-gray-200'
                  }`}
                  onClick={() => setActiveBenefit(idx)}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        activeBenefit === idx ? 'bg-primary text-white' : 'bg-slate-100 text-muted'
                      }`}>
                        <benefit.icon size={24} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-display text-lg font-semibold text-text mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-muted text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>

                    {activeBenefit === idx && (
                      <ul className="mt-6 pl-16 space-y-2">
                        {benefit.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-text">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Block - Workspace quote style */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-16">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Logo/badge area */}
              <div className="flex items-center">
                <div className="bg-white/10 rounded-2xl p-6 inline-flex items-center gap-4">
                  <Star className="text-amber-400" size={32} />
                  <div>
                    <div className="font-display text-3xl font-bold text-white">4.9</div>
                    <div className="text-sm text-white/60">500+ Reviews</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="lg:col-span-2">
                <Quote className="text-white/20 mb-4" size={48} />
                <blockquote className="text-xl lg:text-2xl text-white font-light leading-relaxed mb-6">
                  "{testimonials[0].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20" />
                  <div>
                    <div className="font-medium text-white">{testimonials[0].author}</div>
                    <div className="text-sm text-white/60 flex items-center gap-2">
                      <MapPin size={14} />
                      {testimonials[0].location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Tabs - Workspace tabbed section style */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Our Restoration Process
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A proven 4-step approach that restores your property quickly and completely.
            </p>
          </div>

          {/* Tab navigation */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm">
              {processTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeTab === idx
                      ? 'bg-primary text-white'
                      : 'text-muted hover:text-text'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-text mb-4">
                {processTabs[activeTab].content.headline}
              </h3>
              <p className="text-lg text-muted leading-relaxed mb-8">
                {processTabs[activeTab].content.description}
              </p>
              <ul className="space-y-4">
                {processTabs[activeTab].content.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={16} className="text-primary" />
                    </div>
                    <span className="text-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-slate-100 shadow-sm overflow-hidden">
              {/* Process step image placeholder */}
            </div>
          </div>
        </div>
      </section>

      {/* More Testimonials Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-text">
              What Our Customers Say
            </h2>
            <Link to="/reviews/" className="text-primary font-medium flex items-center gap-2 hover:underline">
              View All Reviews
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-text leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-medium text-text text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="mx-auto mb-6 opacity-80" size={48} />
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
            It's the right time to restore your property
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of Northern Virginia homeowners who've trusted Flood Doctor with their restoration needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/request/" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get Free Estimate
            </Button>
            <Button href="tel:8774970007" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Phone size={18} className="mr-2" />
              (877) 497-0007
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailDevB;
