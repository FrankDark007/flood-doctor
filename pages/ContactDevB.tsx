import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Calendar,
  Video,
  FileText,
  Users,
  ArrowRight
} from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import Button from '../components/ui/Button';

/**
 * ContactDevB - Workspace Contact/Support Style
 *
 * Key patterns:
 * - Card-based contact options
 * - Schedule consultation prominently featured
 * - Video call option
 * - Department selection
 * - Resources section for self-service
 */

const ContactDevB: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('emergency');
  const [selectedTime, setSelectedTime] = useState('');

  const departments = [
    {
      id: 'emergency',
      name: 'Emergency Response',
      description: '24/7 water damage emergency dispatch',
      phone: '(877) 497-0007',
      response: 'Immediate'
    },
    {
      id: 'estimate',
      name: 'Free Estimates',
      description: 'Schedule a no-obligation inspection',
      phone: '(877) 497-0007',
      response: 'Same day'
    },
    {
      id: 'insurance',
      name: 'Insurance Questions',
      description: 'Help with claims and coverage',
      phone: '(877) 497-0007',
      response: '2 hours'
    },
    {
      id: 'commercial',
      name: 'Commercial Services',
      description: 'Business and property management',
      phone: '(877) 497-0007',
      response: '1 hour'
    }
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with a project manager',
      cta: '(877) 497-0007',
      ctaType: 'phone',
      available: 'Available 24/7'
    },
    {
      icon: Calendar,
      title: 'Schedule Consultation',
      description: 'Book a free on-site assessment',
      cta: 'Book Appointment',
      ctaType: 'button',
      available: 'Next available: Today'
    },
    {
      icon: Video,
      title: 'Video Assessment',
      description: 'Get advice via video call',
      cta: 'Start Video Call',
      ctaType: 'button',
      available: 'Mon-Fri 8am-6pm'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      cta: 'Start Chat',
      ctaType: 'button',
      available: 'Typically replies instantly'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const resources = [
    { title: 'Emergency Checklist', description: 'What to do while waiting for help', link: '/resources/emergency-checklists/', icon: FileText },
    { title: 'Insurance Guide', description: 'Navigate your claim with confidence', link: '/resources/insurance-claims-guide/', icon: FileText },
    { title: 'Cost Guide', description: 'Understand restoration pricing', link: '/resources/water-damage-cost-guide/', icon: FileText }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Contact Flood Doctor | Schedule Your Free Consultation"
        description="Contact Flood Doctor for water damage restoration. Schedule a free consultation, call 24/7, or chat with our team."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl lg:text-5xl font-semibold mb-6">
                Let's talk about your restoration needs
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Whether it's an emergency or you're planning ahead, we're here to help. Choose how you'd like to connect.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-400" size={20} />
                  <span className="text-white/80">Free estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-400" size={20} />
                  <span className="text-white/80">24/7 available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-400" size={20} />
                  <span className="text-white/80">No obligation</span>
                </div>
              </div>
            </div>

            {/* Quick contact card */}
            <div className="bg-white rounded-3xl p-8 text-text">
              <h2 className="font-display text-2xl font-semibold mb-6">
                Quick Contact
              </h2>
              <div className="space-y-4">
                <a
                  href="tel:8774970007"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-lg">(877) 497-0007</div>
                    <div className="text-sm text-muted">24/7 Emergency Line</div>
                  </div>
                </a>
                <a
                  href="mailto:info@flood.doctor"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                    <Mail className="text-muted" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-text">info@flood.doctor</div>
                    <div className="text-sm text-muted">Email us anytime</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-text mb-4">
              Choose how to connect
            </h2>
            <p className="text-lg text-muted">
              Multiple ways to reach us based on your preference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <option.icon className="text-primary group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold text-text mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted mb-4">
                  {option.description}
                </p>
                <div className="text-xs text-muted mb-4 flex items-center gap-1">
                  <Clock size={12} />
                  {option.available}
                </div>
                {option.ctaType === 'phone' ? (
                  <a
                    href={`tel:${option.cta.replace(/\D/g, '')}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    {option.cta}
                    <ArrowRight size={16} />
                  </a>
                ) : (
                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                    {option.cta}
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Department Selection */}
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-text mb-6">
                Who do you need to speak with?
              </h2>

              <div className="space-y-3">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      selectedDepartment === dept.id
                        ? 'border-primary bg-white shadow-md'
                        : 'border-transparent bg-white hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`font-semibold mb-1 ${
                          selectedDepartment === dept.id ? 'text-primary' : 'text-text'
                        }`}>
                          {dept.name}
                        </h3>
                        <p className="text-sm text-muted">{dept.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-text">{dept.phone}</div>
                        <div className="text-xs text-muted">Response: {dept.response}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule Callback */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-text">
                    Schedule a Callback
                  </h3>
                  <p className="text-sm text-muted">We'll call you at your preferred time</p>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-text mb-3">
                  Select a Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-2 rounded-lg text-sm font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-primary text-white'
                          : 'bg-slate-100 text-text hover:bg-slate-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              <Button variant="primary" className="w-full">
                Schedule Callback
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Service Resources */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-text mb-4">
              Help yourself to helpful resources
            </h2>
            <p className="text-muted">
              Find answers and guides while you wait.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.link}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow group"
              >
                <resource.icon className="text-primary mb-4" size={32} />
                <h3 className="font-display text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold mb-6">
                Visit Our Office
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Flood Doctor Headquarters</div>
                    <div className="text-white/60">123 Main Street, Suite 100</div>
                    <div className="text-white/60">Fairfax, VA 22030</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-white/60">Mon-Fri: 8AM-6PM</div>
                    <div className="text-white/60">Emergency: 24/7</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[16/9] rounded-2xl bg-white/10 overflow-hidden">
              {/* Map placeholder */}
              <div className="h-full flex items-center justify-center">
                <MapPin size={48} className="text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactDevB;
