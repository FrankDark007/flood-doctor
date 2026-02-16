
import React, { useState } from 'react';
import PageMeta from '../components/ui/PageMeta';
import { generateContactPageSchema } from '../utils/schema';
import Button from '../components/ui/Button';
import EmergencyServiceCard from '../components/ui/EmergencyServiceCard';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  MessageSquare, 
  FileText, 
  Briefcase, 
  CheckCircle2
} from 'lucide-react';

// Reusable Floating Input
const FloatingInput = ({ label, id, type = "text", required = false }: any) => (
  <div className="relative group">
    <input
      type={type}
      id={id}
      className="block px-4 pb-2.5 pt-5 w-full text-[16px] text-text bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer transition-colors placeholder-transparent"
      placeholder=" "
      required={required}
      aria-required={required}
    />
    <label
      htmlFor={id}
      className="absolute text-[15px] text-muted duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary bg-white px-1 pointer-events-none"
    >
      {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
    </label>
  </div>
);

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Contact Us for Emergency Service"
        description="Contact Flood Doctor for 24/7 emergency water damage restoration in Northern Virginia. Call (877) 497-0007 for immediate response. Free estimates available."
        schema={generateContactPageSchema()}
      />
      
      {/* 1. Header & Triage Section */}
      <div className="bg-subtle pt-16 pb-24 border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="font-display text-4xl md:text-5xl font-medium text-text mb-6">
                    How can we help?
                </h1>
                <p className="font-sans text-xl text-muted">
                    Select the option that best fits your needs so we can route you to the right team.
                </p>
            </div>

            {/* System Status Dashboard */}
            <div className="max-w-4xl mx-auto mb-12">
                <EmergencyServiceCard variant="expanded" />
            </div>

            {/* Triage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                {/* Emergency Card (Redesigned) */}
                <div className="bg-white p-8 rounded-[32px] shadow-google hover:shadow-google-hover transition-shadow border border-yellow-100 relative overflow-hidden group">
                    <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 bg-yellow-50 text-[#fbbc04] rounded-2xl flex items-center justify-center border border-yellow-100">
                            <AlertTriangle size={32} aria-hidden="true" />
                        </div>
                        <span className="bg-yellow-100 text-yellow-800 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                            Urgent Priority
                        </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Emergency Service</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Active water leak, flooding, or sewage backup? Our rapid response team is on standby 24/7.
                    </p>
                    <div className="mt-auto">
                        <Button 
                            href="tel:8774970007" 
                            variant="primary" 
                            fullWidth 
                            className="h-14 text-lg bg-red-600 hover:bg-red-700 shadow-none border-transparent"
                            aria-label="Call emergency dispatch at 877-497-0007"
                        >
                            Call (877) 497-0007
                        </Button>
                        <div className="mt-4 text-center text-xs font-medium flex items-center justify-center gap-1.5 text-gray-500">
                            <Clock size={14} className="text-green-600" aria-hidden="true" />
                            <span>Current wait time: <span className="text-green-700 font-bold">&lt; 1 minute</span></span>
                        </div>
                    </div>
                </div>

                {/* General Inquiry Card (Redesigned) */}
                <div className="bg-white p-8 rounded-[32px] shadow-google hover:shadow-google-hover transition-shadow border border-gray-200 relative overflow-hidden">
                    <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center border border-blue-100">
                            <MessageSquare size={32} aria-hidden="true" />
                        </div>
                        <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Non-Urgent
                        </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">General Inquiry</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Questions about our services, billing, or scheduling a non-emergency inspection?
                    </p>
                    <div className="mt-auto">
                        <Button 
                            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth'})} 
                            variant="secondary" 
                            fullWidth 
                            className="h-14 text-lg"
                            aria-label="Scroll to contact form"
                        >
                            Send a Message
                        </Button>
                        <div className="mt-4 text-center text-xs font-medium text-gray-500">
                            Typical response time: 4 hours
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* 2. Department Grid */}
      <div className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {[
                      { title: "Billing & Insurance", icon: FileText, desc: "Claims assistance and invoices", email: "billing@flood.doctor" },
                      { title: "Partnerships", icon: Briefcase, desc: "Property managers and agents", email: "partners@flood.doctor" },
                      { title: "Careers", icon: CheckCircle2, desc: "Join our restoration team", email: "careers@flood.doctor" }
                  ].map((dept, i) => (
                      <div key={i} className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors group cursor-pointer">
                          <div className="w-12 h-12 bg-gray-50 text-muted group-hover:text-primary group-hover:bg-white rounded-full flex items-center justify-center shrink-0 transition-colors">
                              <dept.icon size={24} aria-hidden="true" />
                          </div>
                          <div>
                              <h3 className="font-medium text-text">{dept.title}</h3>
                              <p className="text-sm text-muted mb-1">{dept.desc}</p>
                              <a 
                                href={`mailto:${dept.email}`} 
                                className="text-sm font-medium text-primary hover:underline"
                                aria-label={`Email ${dept.title} at ${dept.email}`}
                              >
                                {dept.email}
                              </a>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* 3. General Contact Form */}
      <div id="contact-form" className="py-20 bg-gray-50 border-t border-border">
          <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white rounded-[32px] shadow-sm border border-gray-200 overflow-hidden md:flex">
                  
                  {/* Left: Info */}
                  <div className="md:w-5/12 bg-text p-10 text-white flex flex-col justify-between">
                      <div>
                          <h3 className="font-display text-2xl font-medium mb-6">Headquarters</h3>
                          <p className="text-gray-300 leading-relaxed mb-8">
                              Serving Northern Virginia, Washington DC, and Maryland.
                          </p>
                          <div className="space-y-6">
                              <div className="flex items-start gap-4">
                                  <MapPin className="text-primary mt-1" aria-hidden="true" />
                                  <div>
                                      <div className="font-bold">Main Office</div>
                                      <div className="text-sm text-gray-400">
                                          8466D Tyco Rd<br/>
                                          Vienna, VA 22182
                                      </div>
                                  </div>
                              </div>
                              <div className="flex items-start gap-4">
                                  <Mail className="text-primary mt-1" aria-hidden="true" />
                                  <div>
                                      <div className="font-bold">Email</div>
                                      <div className="text-sm text-gray-400">help@flood.doctor</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mt-12 md:mt-0">
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Follow Us</div>
                          <div className="flex gap-4">
                              {/* Social Placeholders */}
                              <div role="button" aria-label="Follow us on Facebook" className="w-8 h-8 bg-white/10 rounded-full hover:bg-primary transition-colors cursor-pointer" tabIndex={0}></div>
                              <div role="button" aria-label="Follow us on Twitter" className="w-8 h-8 bg-white/10 rounded-full hover:bg-primary transition-colors cursor-pointer" tabIndex={0}></div>
                              <div role="button" aria-label="Follow us on LinkedIn" className="w-8 h-8 bg-white/10 rounded-full hover:bg-primary transition-colors cursor-pointer" tabIndex={0}></div>
                          </div>
                      </div>
                  </div>

                  {/* Right: Form */}
                  <div className="md:w-7/12 p-10">
                      {!formSubmitted ? (
                          <form onSubmit={handleFormSubmit} className="space-y-6">
                              <h3 className="font-display text-2xl font-medium text-text mb-6">Send us a message</h3>
                              <FloatingInput id="contact-name" label="Your Name" required />
                              <FloatingInput id="contact-email" label="Email Address" type="email" required />
                              <div className="relative group">
                                <textarea
                                  id="message"
                                  rows={4}
                                  className="block px-4 pb-2.5 pt-5 w-full text-[16px] text-text bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary focus:border-2 peer transition-colors placeholder-transparent resize-none"
                                  placeholder=" "
                                  required
                                  aria-required="true"
                                />
                                <label
                                  htmlFor="message"
                                  className="absolute text-[15px] text-muted duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary bg-white px-1 pointer-events-none"
                                >
                                  How can we help? <span className="text-red-500" aria-hidden="true">*</span>
                                </label>
                              </div>
                              <Button 
                                variant="primary" 
                                type="submit" 
                                className="h-12 px-8 w-full md:w-auto"
                                aria-label="Send message"
                              >
                                  Send Message
                              </Button>
                          </form>
                      ) : (
                          <div className="h-full flex flex-col items-center justify-center text-center py-10">
                              <div className="w-16 h-16 bg-green-600 text-green-100 rounded-full flex items-center justify-center mb-6">
                                  <CheckCircle2 size={32} aria-hidden="true" />
                              </div>
                              <h3 className="font-display text-2xl font-medium text-text mb-2">Message Sent</h3>
                              <p className="text-muted">Thanks for reaching out. Our team will get back to you shortly.</p>
                              <Button 
                                onClick={() => setFormSubmitted(false)} 
                                variant="outline" 
                                className="mt-8"
                                aria-label="Send another message"
                              >
                                  Send another
                              </Button>
                          </div>
                      )}
                  </div>

              </div>
          </div>
      </div>

    </main>
  );
};

export default Contact;
