import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Award,
  Users,
  Shield,
  Clock,
  Heart,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Building2,
  Star,
  Play
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * AboutDevA - Google Workspace "About" Style Layout
 *
 * Key patterns:
 * - Hero with company mission statement
 * - Stats bar with key metrics
 * - Story/timeline section
 * - Team/leadership highlights
 * - Values grid
 * - Community involvement
 * - Certifications showcase
 */

const AboutDevA: React.FC = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '10,000+', label: 'Projects Completed' },
    { value: '500+', label: '5-Star Reviews' },
    { value: '60', label: 'Min Response Time' }
  ];

  const values = [
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'We treat your emergency like our own. 60-minute response, 24/7, because water damage waits for no one.'
    },
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'Transparent pricing, honest assessments, and no upselling. We recommend only what\'s truly needed.'
    },
    {
      icon: Heart,
      title: 'Customer Obsession',
      description: 'Every decision starts with: "What\'s best for the customer?" Your satisfaction drives everything we do.'
    },
    {
      icon: Award,
      title: 'Excellence in Craft',
      description: 'IICRC-certified technicians with ongoing training. We invest in our team so they can invest in your property.'
    }
  ];

  const timeline = [
    { year: '2008', title: 'Founded in Fairfax', description: 'Started with one truck and a commitment to serve Northern Virginia homeowners.' },
    { year: '2012', title: 'IICRC Certified', description: 'Achieved industry-leading certifications for water damage and mold remediation.' },
    { year: '2016', title: 'Expanded Fleet', description: 'Grew to 10 response vehicles covering all of Northern Virginia and DC.' },
    { year: '2020', title: 'Commercial Division', description: 'Launched dedicated commercial services for businesses and property managers.' },
    { year: '2024', title: '10,000+ Projects', description: 'Reached milestone of 10,000 successful restorations with 4.9 average rating.' }
  ];

  const certifications = [
    { name: 'IICRC Certified Firm', logo: '/logos/iicrc.png' },
    { name: 'BBB A+ Rated', logo: '/logos/bbb.png' },
    { name: 'EPA Lead-Safe', logo: '/logos/epa.png' },
    { name: 'HomeAdvisor Elite', logo: '/logos/homeadvisor.png' },
    { name: 'Angi Super Service', logo: '/logos/angi.png' }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="About Flood Doctor | Northern Virginia's Trusted Restoration Company"
        description="Learn about Flood Doctor's 15+ years of water damage restoration expertise serving Northern Virginia and Washington DC."
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              <Building2 size={16} />
              About Flood Doctor
            </div>

            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-tight">
              Restoring properties.
              <br />
              <span className="text-primary">Rebuilding peace of mind.</span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              For over 15 years, Flood Doctor has been Northern Virginia's most trusted water damage restoration company. We combine cutting-edge technology with genuine care for our community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/request/" className="inline-flex items-center justify-center font-display font-medium bg-white text-slate-900 hover:bg-gray-100 h-14 px-8 rounded-full transition-all">
                Request Service
              </Link>
              <Button to="/reviews/" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Read Our Reviews
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-medium text-text leading-relaxed">
            We believe that when disaster strikes, every homeowner deserves a restoration partner who responds immediately, communicates clearly, and delivers exceptional results—without the stress of navigating insurance alone.
          </h2>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-10 bg-primary rounded-full" />
            <h2 className="font-display text-3xl font-semibold text-text">Our Story</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-8 items-start">
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center font-display font-bold text-primary z-10">
                      {item.year.slice(2)}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-2xl p-6 shadow-sm">
                    <div className="text-sm text-primary font-medium mb-1 lg:hidden">{item.year}</div>
                    <h3 className="font-display text-xl font-semibold text-text mb-2">
                      <span className="hidden lg:inline text-primary mr-2">{item.year}</span>
                      {item.title}
                    </h3>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              The principles that guide every project and interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-text mb-3">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                Meet the team behind your restoration
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Our technicians aren't just certified experts—they're your neighbors. Many have lived in Northern Virginia for decades and take pride in serving their community.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-text">Background-checked and drug-tested</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-text">IICRC certified with ongoing training</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="text-text">Uniformed and clearly identified</span>
                </li>
              </ul>
              <Button to="/careers/" variant="outline">
                Join Our Team
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl bg-slate-200 shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play size={32} className="text-primary ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-lg text-muted">
              Industry-leading credentials you can trust.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {certifications.map((cert, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  {/* Logo placeholder */}
                </div>
                <div className="text-sm text-muted">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MapPin size={16} />
                Service Area
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-6">
                Proudly serving Northern Virginia & DC
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                From Arlington to Loudoun, Fairfax to Prince William—our fleet of response vehicles covers all of Northern Virginia and Washington DC with 60-minute response times.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Fairfax County', 'Arlington County', 'Loudoun County', 'Prince William', 'Alexandria', 'Washington DC'].map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-text">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-square rounded-2xl bg-slate-200 shadow-sm">
              {/* Map placeholder */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-6">
            Ready to work with Northern Virginia's best?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Get a free estimate and see why 10,000+ property owners trust Flood Doctor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/request/" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Request Service
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

export default AboutDevA;
