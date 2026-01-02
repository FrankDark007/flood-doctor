import React, { useState } from 'react';
import {
  Phone,
  Award,
  Users,
  Shield,
  Heart,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Star,
  Quote,
  Target,
  Zap,
  BadgeCheck,
  Clock
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import { generateAboutPageSchema } from '../utils/schema';
import Button from '../components/ui/Button';

/**
 * About - Google Workspace Industry Page Style
 *
 * Key patterns (from workspace.google.com/industries/healthcare):
 * - Hero with product icons row
 * - Trust logos strip
 * - Bold mission statement
 * - Benefits accordion with illustration
 * - Customer testimonial quote block
 * - Tabbed success stories
 * - Resource cards
 */

const About: React.FC = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [activeStory, setActiveStory] = useState(0);

  // Trust indicators
  const trustBadges = [
    'IICRC Certified',
    'BBB A+ Rated',
    'EPA Lead-Safe',
    'HomeAdvisor Elite',
    'Angi Super Service'
  ];

  // Company values with expandable content
  const values = [
    {
      title: 'Emergency-First Mindset',
      description: 'When water damage strikes, minutes matter. Our entire operation is built around rapid response.',
      details: [
        '24/7 dispatch center with live operators',
        'GPS-tracked fleet for fastest routing',
        'Pre-staged equipment in vehicles',
        'Average arrival: 47 minutes'
      ]
    },
    {
      title: 'Technology-Driven Restoration',
      description: 'We invest in the latest equipment and techniques to deliver superior results.',
      details: [
        'Thermal imaging cameras',
        'Commercial dehumidification',
        'Hydroxyl generators for odor',
        'Real-time moisture monitoring'
      ]
    },
    {
      title: 'Insurance Expertise',
      description: 'We navigate the claims process so you don\'t have to. Direct billing with all major carriers.',
      details: [
        'Direct insurance billing',
        'Photo documentation',
        'Xactimate estimating',
        'Claim advocacy support'
      ]
    },
    {
      title: 'Community Commitment',
      description: 'We\'re not just a restoration company—we\'re your neighbors, invested in this community.',
      details: [
        'Local ownership since 2008',
        'Support local charities',
        'Emergency community response',
        'Training programs for veterans'
      ]
    }
  ];

  // Customer stories
  const stories = [
    {
      name: 'The Johnson Family',
      location: 'McLean, VA',
      service: 'Basement Flooding',
      quote: 'They arrived at 2 AM during a storm and had water extracted before sunrise. The team kept us informed every step of the way.',
      image: '/testimonials/johnson.jpg'
    },
    {
      name: 'Arlington Medical Center',
      location: 'Arlington, VA',
      service: 'Commercial Restoration',
      quote: 'Minimal disruption to our operations. They worked nights and weekends to get us back up and running in record time.',
      image: '/testimonials/amc.jpg'
    },
    {
      name: 'The Chen Residence',
      location: 'Fairfax, VA',
      service: 'Pipe Burst',
      quote: 'Our insurance claim was approved in full thanks to their thorough documentation. They made a nightmare situation manageable.',
      image: '/testimonials/chen.jpg'
    }
  ];

  // Leadership team
  const leadership = [
    { name: 'David Richardson', role: 'Founder & CEO', years: '15+ years in restoration', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
    { name: 'Maria Santos', role: 'Operations Director', years: 'IICRC Master Restorer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
    { name: 'James Mitchell', role: 'Commercial Division Lead', years: '12 years in commercial restoration', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="About Us - Flood Doctor Water Damage Restoration"
        description="Flood Doctor has served Northern Virginia for 15+ years with IICRC-certified water damage restoration, mold remediation, and 24/7 emergency response. Learn about our team."
        schema={generateAboutPageSchema()}
      />

      {/* Hero - Workspace Industry Style */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-emerald-50/30" />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Icons row - like Workspace */}
              <div className="flex items-center gap-3 mb-8">
                {[Shield, Award, Zap, Heart].map((Icon, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                ))}
              </div>

              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-text mb-6 leading-tight">
                Restoring properties.
                <br />
                <span className="text-primary">Rebuilding peace of mind.</span>
              </h1>

              <p className="text-xl text-muted leading-relaxed mb-8">
                Northern Virginia's most trusted water damage restoration company. Restoring properties and peace of mind since 2008.
              </p>

              <Button to="/request/" variant="primary" size="lg">
                Request Service
              </Button>
            </div>

            {/* Hero image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Flood Doctor restoration team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-y border-gray-100 bg-white/80 backdrop-blur-sm py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-center gap-3 text-sm text-muted flex-wrap">
              <span>Trusted by Northern Virginia homeowners</span>
              <span className="text-gray-300 hidden sm:inline">|</span>
              {trustBadges.map((badge, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years Serving NoVA' },
              { value: '10k+', label: 'Homes Restored' },
              { value: '60', label: 'Min Response Time' },
              { value: '4.9', label: 'Google Rating' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-5xl lg:text-6xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement - Bold Typography */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-medium text-text leading-relaxed">
            We exist to help homeowners and businesses recover from water damage quickly and completely—with expert care, transparent pricing, and the support you need to navigate insurance.
          </h2>
        </div>
      </section>

      {/* Testimonial Quote Block - Workspace Style */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 lg:p-16">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="flex items-center">
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="font-display text-3xl font-bold text-white">4.9/5</div>
                  <div className="text-sm text-white/60">500+ Reviews</div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Quote className="text-white/20 mb-4" size={48} />
                <blockquote className="text-xl lg:text-2xl text-white font-light leading-relaxed mb-6">
                  "Flood Doctor is the gold standard in water damage restoration. Professional, responsive, and genuinely caring. They made a terrible situation bearable."
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
                    alt="Sarah & Michael Thompson"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-white">Sarah & Michael Thompson</div>
                    <div className="text-sm text-white/60 flex items-center gap-2">
                      <MapPin size={14} />
                      Vienna, VA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Tabs - Workspace Style */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4 text-center">
            Stories from our customers
          </h2>
          <p className="text-lg text-muted text-center mb-12 max-w-2xl mx-auto">
            Real restoration projects from real Northern Virginia families and businesses.
          </p>

          {/* Tab navigation */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm flex-wrap justify-center gap-1">
              {stories.map((story, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStory(idx)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeStory === idx
                      ? 'bg-primary text-white'
                      : 'text-muted hover:text-text'
                  }`}
                >
                  {story.name}
                </button>
              ))}
            </div>
          </div>

          {/* Story content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
                alt="Water damage restoration project"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {stories[activeStory].service}
              </div>
              <blockquote className="text-xl lg:text-2xl text-text leading-relaxed mb-6">
                "{stories[activeStory].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80',
                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'][activeStory]}
                  alt={stories[activeStory].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-text">{stories[activeStory].name}</div>
                  <div className="text-sm text-muted">{stories[activeStory].location}</div>
                </div>
              </div>
              <Button to="/reviews/" variant="outline" className="mt-8">
                Read More Stories
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4 text-center">
            Our Story
          </h2>
          <p className="text-lg text-muted text-center mb-12 max-w-2xl mx-auto">
            From a small local operation to Northern Virginia's leading restoration company.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { year: '2008', title: 'Founded', description: 'Started with one truck and a commitment to excellence' },
              { year: '2012', title: 'Expanded', description: 'Grew to serve all of Northern Virginia' },
              { year: '2018', title: 'Commercial Division', description: 'Launched enterprise restoration services' },
              { year: '2024', title: 'Today', description: '50+ team members serving 10,000+ customers' }
            ].map((milestone, idx) => (
              <div key={idx} className="relative text-center">
                <div className="font-display text-5xl font-bold text-primary/20 mb-2">{milestone.year}</div>
                <h3 className="font-semibold text-text mb-2">{milestone.title}</h3>
                <p className="text-sm text-muted">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Accordion - Workspace Benefits Style */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-10 bg-primary rounded-full" />
            <h2 className="font-display text-3xl font-semibold text-text">What Drives Us</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Illustration */}
            <div className="lg:sticky lg:top-24">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 via-white to-emerald-50 shadow-sm overflow-hidden flex items-center justify-center">
                {React.createElement([Target, Zap, Shield, Heart][activeValue], {
                  size: 120,
                  className: 'text-primary/20'
                })}
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border-2 transition-all cursor-pointer ${
                    activeValue === idx
                      ? 'border-primary bg-white shadow-md'
                      : 'border-transparent bg-white hover:border-gray-200'
                  }`}
                  onClick={() => setActiveValue(idx)}
                >
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-text mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted text-sm">
                      {value.description}
                    </p>

                    {activeValue === idx && (
                      <ul className="mt-4 space-y-2">
                        {value.details.map((detail, i) => (
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

      {/* Why Choose Flood Doctor - Comparison Grid (AboutDevC style) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Why choose Flood Doctor?
            </h2>
            <p className="text-lg text-muted">
              See how we compare to other restoration companies.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-slate-100">
              <div className="p-4 lg:p-6" />
              <div className="p-4 lg:p-6 text-center bg-primary text-white font-semibold">
                Flood Doctor
              </div>
              <div className="p-4 lg:p-6 text-center text-muted font-medium">
                Other Companies
              </div>
            </div>

            {/* Rows */}
            {[
              {
                label: 'Response Time',
                us: '60-minute guaranteed response',
                others: '2-4 hour average response',
                icon: Clock
              },
              {
                label: 'Insurance',
                us: 'Direct insurance billing included',
                others: 'Bill customer, customer files claim',
                icon: Shield
              },
              {
                label: 'Certifications',
                us: 'IICRC certified technicians',
                others: 'Basic training only',
                icon: Award
              },
              {
                label: 'Project Management',
                us: 'Dedicated project manager',
                others: 'Different person each visit',
                icon: Users
              },
              {
                label: 'Equipment',
                us: 'Commercial-grade equipment',
                others: 'Consumer-grade equipment',
                icon: Zap
              },
              {
                label: 'Ownership',
                us: 'Locally owned since 2008',
                others: 'National franchise',
                icon: Heart
              }
            ].map((item, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                <div className="p-4 lg:p-6 flex items-center gap-3">
                  <item.icon className="text-primary flex-shrink-0" size={20} />
                  <span className="text-sm text-muted">{item.label}</span>
                </div>
                <div className="p-4 lg:p-6 flex items-center justify-center gap-2 bg-primary/5 border-x border-primary/10">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                  <span className="text-sm text-text font-medium">{item.us}</span>
                </div>
                <div className="p-4 lg:p-6 flex items-center justify-center">
                  <span className="text-sm text-muted">{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted">
              Experienced professionals dedicated to your restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-display text-lg font-semibold text-text">{person.name}</h3>
                <div className="text-primary text-sm font-medium mb-2">{person.role}</div>
                <div className="text-sm text-muted">{person.years}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet / Response Stats */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                Ready to respond, 24/7
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Our fleet of fully-equipped restoration vehicles is strategically positioned throughout Northern Virginia for rapid response anywhere in our service area.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '12', label: 'Response Vehicles' },
                  { value: '50+', label: 'Team Members' },
                  { value: '24/7', label: 'Dispatch Center' },
                  { value: '100%', label: 'Coverage Area' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Flood Doctor service vehicles and fleet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4 text-center">
            60-minute response throughout Northern Virginia
          </h2>
          <p className="text-lg text-muted text-center mb-12 max-w-2xl mx-auto">
            We serve all major communities in Fairfax, Arlington, Loudoun, and Prince William counties.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Alexandria', 'Arlington', 'Fairfax', 'McLean',
              'Tysons', 'Reston', 'Ashburn', 'Herndon',
              'Springfield', 'Falls Church', 'Leesburg', 'Manassas'
            ].map((city) => (
              <div key={city} className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm">
                <MapPin size={16} className="text-primary" />
                <span className="text-text font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Workspace Style */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            {[Shield, Award, Zap, Heart].map((Icon, idx) => (
              <div key={idx} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Icon className="text-white" size={20} />
              </div>
            ))}
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-6">
            Ready to restore your property?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of Northern Virginia homeowners who trust Flood Doctor.
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

export default About;
