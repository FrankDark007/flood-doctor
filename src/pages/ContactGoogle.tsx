import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const ContactGoogle: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Contact Us | Flood Doctor"
        description="Contact Flood Doctor for 24/7 emergency water damage restoration. Call (877) 497-0007 or schedule a free assessment online."
      />

      {/* Hero Section - Google Ads Expert Style */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Content */}
            <AnimatedSection>
              <h1
                className="text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] font-normal text-[#202124] mb-6"
                style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
              >
                Get expert help<br />
                <span className="text-[#1a73e8]">when you need it</span>
              </h1>
              <p className="text-lg text-[#5f6368] leading-relaxed mb-8">
                Our restoration experts are available 24/7 to answer your questions and provide immediate assistance. Call now for emergency service or schedule a free assessment.
              </p>

              {/* Contact Options */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:8774970007"
                  className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-[16px] hover:bg-[#e8eaed] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#e8f0fe] rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-[#1a73e8]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-medium text-[#202124] group-hover:text-[#1a73e8]">
                      (877) 497-0007
                    </div>
                    <div className="text-sm text-[#5f6368]">24/7 Emergency Hotline</div>
                  </div>
                  <ArrowRight size={20} className="text-[#5f6368] group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all" />
                </a>

                <Link
                  to="/request/"
                  className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-[16px] hover:bg-[#e8eaed] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#e6f4ea] rounded-full flex items-center justify-center">
                    <Calendar size={24} className="text-[#1e8e3e]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-medium text-[#202124] group-hover:text-[#1a73e8]">
                      Schedule Assessment
                    </div>
                    <div className="text-sm text-[#5f6368]">Free on-site evaluation</div>
                  </div>
                  <ArrowRight size={20} className="text-[#5f6368] group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all" />
                </Link>

                <a
                  href="mailto:help@flood.doctor"
                  className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-[16px] hover:bg-[#e8eaed] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#fef7e0] rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-[#f29900]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-medium text-[#202124] group-hover:text-[#1a73e8]">
                      help@flood.doctor
                    </div>
                    <div className="text-sm text-[#5f6368]">Email us anytime</div>
                  </div>
                  <ArrowRight size={20} className="text-[#5f6368] group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 text-sm text-[#5f6368]">
                <Clock size={16} />
                <span>Emergency services available 24/7 • Office hours: Mon-Fri 8am-6pm</span>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={200} animation="fade-in">
              <div className="bg-[#f8f9fa] rounded-[24px] p-8">
                <h2 className="text-2xl font-medium text-[#202124] mb-2">Send us a message</h2>
                <p className="text-[#5f6368] mb-6">We'll get back to you within 1 hour during business hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#202124] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#202124] mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent"
                        placeholder="you@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#202124] mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent"
                        placeholder="(555) 555-5555"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#202124] mb-1">
                      Service needed
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="water-damage">Water Damage Restoration</option>
                      <option value="mold">Mold Remediation</option>
                      <option value="flood">Flood Cleanup</option>
                      <option value="fire">Fire & Smoke Damage</option>
                      <option value="commercial">Commercial Services</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#202124] mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-[#dadce0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent resize-none"
                      placeholder="Tell us about your situation..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1a73e8] text-white font-medium rounded-full hover:bg-[#1557b0] transition-colors"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4"
                style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
              >
                What to expect
              </h2>
              <p className="text-lg text-[#5f6368]">
                Here's what happens when you contact us.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Quick response',
                desc: 'We answer calls within seconds, 24/7. For non-emergencies, expect a callback within 1 hour.'
              },
              {
                step: '2',
                title: 'Free assessment',
                desc: 'A certified technician will evaluate your situation and provide a detailed scope of work.'
              },
              {
                step: '3',
                title: 'Clear pricing',
                desc: 'You\'ll receive a transparent quote with no hidden fees. We work directly with your insurance.'
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-[16px] p-8 text-center h-full">
                  <div className="w-12 h-12 bg-[#e8f0fe] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-medium text-[#1a73e8]">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#202124] mb-2">{item.title}</h3>
                  <p className="text-base text-[#5f6368]">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1296px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2
                className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-6"
                style={{ fontFamily: '"Google Sans Display", "Google Sans", Arial, sans-serif' }}
              >
                Serving Northern Virginia
              </h2>
              <p className="text-lg text-[#5f6368] mb-6">
                With teams positioned throughout the region, we provide rapid response to all of Northern Virginia and surrounding areas.
              </p>

              <div className="space-y-3">
                {[
                  'Arlington, Alexandria, Fairfax',
                  'McLean, Tysons, Falls Church',
                  'Reston, Herndon, Ashburn',
                  'Great Falls, Springfield, Lorton',
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#34a853]" />
                    <span className="text-base text-[#202124]">{area}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-[#f8f9fa] rounded-[24px] p-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin size={24} className="text-[#1a73e8] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-[#202124] mb-1">Office Location</div>
                    <div className="text-[#5f6368]">
                      Northern Virginia Service Area<br />
                      Serving all of NOVA 24/7
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <Phone size={24} className="text-[#1a73e8] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-[#202124] mb-1">Phone</div>
                    <a href="tel:8774970007" className="text-[#1a73e8] hover:underline">(877) 497-0007</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-[#1a73e8] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-[#202124] mb-1">Email</div>
                    <a href="mailto:help@flood.doctor" className="text-[#1a73e8] hover:underline">help@flood.doctor</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactGoogle;
