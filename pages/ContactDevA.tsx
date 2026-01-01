import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  HeadphonesIcon,
  Building2
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * ContactDevA - Google Support Expert Style
 *
 * Key patterns (from business.google.com/support/ads-expert):
 * - Multiple contact options prominently displayed
 * - Schedule callback feature
 * - Chat option
 * - Emergency vs. non-emergency differentiation
 * - FAQ quick links
 */

const ContactDevA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    urgency: 'standard',
    message: ''
  });

  const contactMethods = [
    {
      icon: Phone,
      title: '24/7 Emergency Line',
      subtitle: 'Immediate response for urgent situations',
      action: '(877) 497-0007',
      actionType: 'phone',
      highlight: true
    },
    {
      icon: Calendar,
      title: 'Schedule Callback',
      subtitle: 'We\'ll call you at your preferred time',
      action: 'Schedule Now',
      actionType: 'button'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      subtitle: 'Chat with a team member now',
      action: 'Start Chat',
      actionType: 'button'
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Response within 2 business hours',
      action: 'info@flood.doctor',
      actionType: 'email'
    }
  ];

  const quickAnswers = [
    { question: 'What should I do first after water damage?', link: '/resources/emergency-checklists/' },
    { question: 'Does insurance cover water damage?', link: '/resources/insurance-claims-guide/' },
    { question: 'How much does restoration cost?', link: '/resources/water-damage-cost-guide/' },
    { question: 'How long does the drying process take?', link: '/resources/faq/' }
  ];

  const officeHours = [
    { day: 'Emergency Line', hours: '24/7/365' },
    { day: 'Office Hours', hours: 'Mon-Fri: 8AM-6PM' },
    { day: 'Saturday', hours: '9AM-3PM' },
    { day: 'Sunday', hours: 'Emergency Only' }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Contact Flood Doctor | 24/7 Emergency Water Damage Restoration"
        description="Contact Flood Doctor for emergency water damage restoration in Northern Virginia. 24/7 response. Call (877) 497-0007 or request service online."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HeadphonesIcon size={16} />
              We're Here to Help
            </div>

            <h1 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-6">
              How can we help you?
            </h1>

            <p className="text-xl text-muted mb-10">
              Choose how you'd like to connect with our team. Emergency? Call us now for immediate dispatch.
            </p>

            {/* Emergency CTA */}
            <div className="bg-gradient-to-r from-rose-500 to-red-600 rounded-2xl p-6 text-white mb-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <AlertTriangle size={24} />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg">Water Emergency?</div>
                    <div className="text-white/80 text-sm">Technicians on standby 24/7</div>
                  </div>
                </div>
                <a
                  href="tel:8774970007"
                  className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  <Phone size={20} />
                  (877) 497-0007
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 ${
                  method.highlight
                    ? 'bg-primary text-white'
                    : 'bg-slate-50 hover:shadow-md transition-shadow'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  method.highlight ? 'bg-white/20' : 'bg-primary/10'
                }`}>
                  <method.icon className={method.highlight ? 'text-white' : 'text-primary'} size={24} />
                </div>
                <h3 className={`font-display text-lg font-semibold mb-1 ${
                  method.highlight ? 'text-white' : 'text-text'
                }`}>
                  {method.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  method.highlight ? 'text-white/70' : 'text-muted'
                }`}>
                  {method.subtitle}
                </p>
                {method.actionType === 'phone' && (
                  <a
                    href={`tel:${method.action.replace(/\D/g, '')}`}
                    className={`font-semibold hover:underline ${
                      method.highlight ? 'text-white' : 'text-primary'
                    }`}
                  >
                    {method.action}
                  </a>
                )}
                {method.actionType === 'email' && (
                  <a
                    href={`mailto:${method.action}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {method.action}
                  </a>
                )}
                {method.actionType === 'button' && (
                  <button className={`font-medium ${
                    method.highlight
                      ? 'text-white hover:text-white/80'
                      : 'text-primary hover:text-primary/80'
                  }`}>
                    {method.action} →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-text mb-6">
                Send us a message
              </h2>

              <form className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-text mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-text mb-2">
                    How urgent is your situation?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'emergency', label: 'Emergency', desc: 'Active water damage' },
                      { value: 'urgent', label: 'Urgent', desc: 'Need help today' },
                      { value: 'standard', label: 'Standard', desc: 'General inquiry' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: option.value })}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.urgency === option.value
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`font-medium ${
                          formData.urgency === option.value ? 'text-primary' : 'text-text'
                        }`}>
                          {option.label}
                        </div>
                        <div className="text-xs text-muted">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-text mb-2">
                    Tell us about your situation
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Describe your water damage or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-muted text-center mt-4">
                  We typically respond within 15 minutes during business hours.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Office Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-text mb-4 flex items-center gap-2">
                  <Building2 size={20} className="text-primary" />
                  Main Office
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-muted mt-0.5" />
                    <div>
                      <div className="text-text">123 Main Street</div>
                      <div className="text-muted">Fairfax, VA 22030</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-muted mt-0.5" />
                    <div>
                      {officeHours.map((item, idx) => (
                        <div key={idx} className="flex justify-between gap-4">
                          <span className="text-muted">{item.day}</span>
                          <span className="text-text font-medium">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Answers */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-text mb-4">
                  Quick Answers
                </h3>
                <div className="space-y-3">
                  {quickAnswers.map((qa, idx) => (
                    <a
                      key={idx}
                      href={qa.link}
                      className="block text-sm text-primary hover:underline"
                    >
                      {qa.question}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-text mb-4">
              Find Us
            </h2>
            <p className="text-muted">
              Serving all of Northern Virginia and Washington DC
            </p>
          </div>

          <div className="aspect-[21/9] rounded-2xl bg-slate-200 overflow-hidden">
            {/* Map placeholder */}
            <div className="h-full flex items-center justify-center">
              <MapPin size={48} className="text-muted" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactDevA;
