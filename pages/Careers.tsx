import React, { useState } from 'react';
import PageMeta from '../components/ui/PageMeta';
import {
  Heart,
  Briefcase,
  Zap,
  GraduationCap,
  Clock,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Palmtree,
  Car,
  Quote,
  ChevronDown,
  Phone,
  Mail,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';
import Button from '../components/ui/Button';

const Careers: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    { icon: Heart, title: "Health & Wellness", desc: "100% covered medical, dental, and vision premiums for employees.", color: "#ea4335" },
    { icon: Zap, title: "Performance Bonuses", desc: "Monthly profit sharing based on team efficiency and client satisfaction.", color: "#fbbc04" },
    { icon: Briefcase, title: "Clear Growth Path", desc: "Defined milestones to move from Apprentice to Lead to Project Manager.", color: "#1a73e8" },
    { icon: GraduationCap, title: "Paid Certification", desc: "We cover all costs for your IICRC WRT, AMRT, and ASD certifications.", color: "#34a853" },
    { icon: Palmtree, title: "Paid Time Off", desc: "Generous PTO starting day one, plus paid holidays and sick days.", color: "#e040fb" },
    { icon: Car, title: "Company Vehicle", desc: "Take-home company vehicle with fuel card for lead techs and above.", color: "#ff6d00" }
  ];

  const jobs = [
    {
      title: "Lead Water Technician",
      location: "Arlington, VA",
      type: "Full-time",
      exp: "3+ years",
      desc: "Lead residential restoration projects, manage crew safety, and document losses via iPad."
    },
    {
      title: "Restoration Project Manager",
      location: "Fairfax, VA",
      type: "Full-time",
      exp: "5+ years",
      desc: "Oversee large loss projects, negotiate with adjusters using Xactimate, and ensure QC."
    },
    {
      title: "Mitigation Apprentice",
      location: "Ashburn, VA",
      type: "Entry Level",
      exp: "0-1 years",
      desc: "Learn the trade from the ground up. Paid training provided. Valid driver's license required."
    }
  ];

  const stats = [
    { value: "20+", label: "Years in Business", icon: Award },
    { value: "150+", label: "Projects Per Year", icon: TrendingUp },
    { value: "100%", label: "Certification Coverage", icon: ShieldCheck },
    { value: "24/7", label: "Emergency Response", icon: Clock }
  ];

  const careerSteps = [
    { title: "Apprentice", timeframe: "0–12 months", milestone: "IICRC WRT certification, learn equipment operation and safety protocols" },
    { title: "Technician", timeframe: "1–3 years", milestone: "ASD certification, run jobs independently, train new apprentices" },
    { title: "Lead Technician", timeframe: "3–5 years", milestone: "AMRT certification, manage multi-crew projects, company vehicle" },
    { title: "Project Manager", timeframe: "5+ years", milestone: "Full P&L responsibility, Xactimate expert, client relationship management" }
  ];

  const testimonials = [
    {
      quote: "I came in with zero restoration experience. Within 18 months I had my WRT and ASD certs, and I was running my own crew. The training here is no joke.",
      name: "Marcus T.",
      role: "Lead Technician",
      years: "4 years"
    },
    {
      quote: "What sold me was the culture. After a big storm we all pull together — there's no 'that's not my job' attitude. It feels like a real team.",
      name: "Sarah K.",
      role: "Project Manager",
      years: "6 years"
    },
    {
      quote: "I left a desk job to do something hands-on. Best decision I ever made. Every day is different, and you actually see the impact of your work on people's lives.",
      name: "David R.",
      role: "Restoration Technician",
      years: "2 years"
    }
  ];

  const faqs = [
    {
      q: "What's the pay range for technicians?",
      a: "Entry-level apprentices start at $18–22/hr. Certified technicians earn $25–35/hr depending on certifications and experience. Lead techs and PMs earn $60K–90K+ annually with bonuses."
    },
    {
      q: "What does a typical schedule look like?",
      a: "Standard hours are Monday–Friday, 7 AM to 4 PM. We run a rotating on-call schedule for emergency response (evenings/weekends), which comes with additional on-call pay."
    },
    {
      q: "Do I need prior restoration experience?",
      a: "Not for our Apprentice role. We provide full paid training through our Flood Doctor Academy. A valid driver's license and the ability to lift 50 lbs are the main requirements."
    },
    {
      q: "Is there drug testing?",
      a: "Yes. We conduct pre-employment drug screening and random testing throughout employment. We work in clients' homes and businesses — safety and trust are non-negotiable."
    },
    {
      q: "How long does certification training take?",
      a: "WRT certification typically takes 3–4 months of on-the-job training plus a 3-day course. Most technicians earn their ASD within the first year. We cover 100% of costs."
    },
    {
      q: "How fast can I advance?",
      a: "It depends on you. Our fastest promotion from Apprentice to Lead Tech took 26 months. Average is about 3 years. We have a clear, written progression path — no guessing."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Restoration Careers in Northern Virginia | Flood Doctor Jobs"
        description="Join Northern Virginia's top-rated restoration company. Competitive pay, full benefits, IICRC certification training. Technicians, project managers, and emergency responders wanted."
      />

      {/* 1. Custom Hero — no CTAs */}
      <section className="bg-[#f8f9fa] py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-text mb-6 leading-tight">
            Do work that matters.
          </h1>
          <p className="font-sans text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed mb-10">
            Join a team that helps people rebuild their lives after disaster strikes. We're looking for problem solvers, not just laborers.
          </p>
          <a
            href="#openings"
            className="inline-flex items-center gap-2 text-primary font-medium text-lg hover:underline transition-all"
          >
            View open positions <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* 2. By the Numbers Stats Row */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <s.icon size={24} />
                </div>
                <div className="font-display text-4xl md:text-5xl font-semibold text-text mb-2">{s.value}</div>
                <div className="font-sans text-muted text-sm uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits Grid (6 cards) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl font-medium text-text mb-4">Why build your career here?</h2>
            <p className="font-sans text-xl text-muted leading-relaxed">
              Restoration is hard work. We believe in compensating our team fairly, protecting their health, and investing in their future skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="relative bg-subtle rounded-2xl overflow-hidden hover:bg-white hover:shadow-google transition-all duration-300 border border-transparent hover:border-gray-100 group">
                <div className="h-1 w-full" style={{ backgroundColor: b.color }} />
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform" style={{ backgroundColor: `${b.color}10`, color: b.color }}>
                    <b.icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-text mb-3">{b.title}</h3>
                  <p className="font-sans text-muted leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Day in the Life */}
      <section className="py-20 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-text mb-6">A day in the life</h2>
              <p className="font-sans text-lg text-muted leading-relaxed mb-6">
                No two days look the same in restoration. One morning you're extracting water from a flooded basement in McLean. By afternoon you're setting up drying equipment in a Fairfax townhouse. The variety is what keeps it interesting.
              </p>
              <p className="font-sans text-lg text-muted leading-relaxed mb-8">
                You'll work with industrial-grade equipment, use moisture meters and thermal cameras, and learn the science behind structural drying. It's physically demanding, technically challenging, and genuinely rewarding — you're helping families get their homes back.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Hands-on work', 'Latest technology', 'Team environment', 'Real impact'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-text border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80"
                alt="Restoration technician working on-site"
                className="rounded-3xl w-full object-cover aspect-[4/3] shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-google p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="font-display font-medium text-text text-sm">Team of 25+</div>
                    <div className="text-muted text-xs">Northern Virginia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Training / Certification (existing blue section — preserved) */}
      <section className="py-20 bg-[#1a73e8] text-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                <ShieldCheck size={16} />
                <span>IICRC Certified Firm</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-medium mb-6 leading-tight">
                We invest in your expertise.
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
                We don't just send you out with a fan. Every technician undergoes our "Flood Doctor Academy" training, learning the science of psychrometry and structural drying before leading a job.
              </p>
              <Button href="/about/" variant="secondary" className="border-none bg-white text-primary hover:bg-blue-50">
                Learn about our standards
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary font-bold text-2xl">
                    A+
                  </div>
                  <div>
                    <div className="font-medium text-xl">Training Program</div>
                    <div className="text-blue-200">Industry-leading curriculum</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {['Water Restoration Technician (WRT)', 'Applied Structural Drying (ASD)', 'Applied Microbial Remediation (AMRT)'].map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                      <CheckCircle2 className="text-green-300 shrink-0" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Career Growth Timeline */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl font-medium text-text mb-4">Your growth path</h2>
            <p className="font-sans text-xl text-muted leading-relaxed">
              We don't believe in dead-end jobs. Every role has a clear next step with written milestones.
            </p>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />
              <div className="grid grid-cols-4 gap-6 relative">
                {careerSteps.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Step indicator */}
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-lg mb-6 relative z-10 shadow-lg">
                      {i + 1}
                    </div>
                    <h3 className="font-display text-xl font-medium text-text mb-1">{step.title}</h3>
                    <div className="text-primary font-medium text-sm mb-3">{step.timeframe}</div>
                    <p className="font-sans text-muted text-sm leading-relaxed">{step.milestone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden space-y-8">
            {careerSteps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-base shrink-0 shadow-lg">
                    {i + 1}
                  </div>
                  {i < careerSteps.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-2" />}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-lg font-medium text-text mb-1">{step.title}</h3>
                  <div className="text-primary font-medium text-sm mb-2">{step.timeframe}</div>
                  <p className="font-sans text-muted text-sm leading-relaxed">{step.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Employee Testimonials */}
      <section className="py-20 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl font-medium text-text mb-4">Hear from the team</h2>
            <p className="font-sans text-xl text-muted leading-relaxed">
              Real perspectives from people who've built their careers here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-google transition-shadow duration-300">
                <Quote size={24} className="text-primary/20 mb-4" />
                <p className="font-sans text-text leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-medium text-text text-sm">{t.name}</div>
                    <div className="text-muted text-xs">{t.role} · {t.years}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Open Positions */}
      <section id="openings" className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-display text-3xl font-medium text-text mb-12">Open Positions</h2>

          <div className="border border-gray-200 rounded-[32px] overflow-hidden">
            {jobs.map((job, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border-b border-gray-100 last:border-0 hover:bg-subtle transition-colors">
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl font-medium text-text mb-2 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
                    <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={16} /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.exp}</span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    {job.desc}
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8 shrink-0">
                  <Button href="mailto:careers@flood.doctor" variant="outline" className="rounded-full px-8">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-3xl p-12">
            <h3 className="font-display text-xl font-medium text-text mb-2">Don't see your role?</h3>
            <p className="text-muted mb-6">We are always open to meeting talented people.</p>
            <a href="mailto:careers@flood.doctor" className="text-primary font-medium hover:underline flex items-center justify-center gap-2">
              Email us your resume <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-20 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl font-medium text-text mb-4 text-center">Common questions</h2>
          <p className="font-sans text-xl text-muted leading-relaxed text-center mb-12">
            Answers to what candidates ask most.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-display font-medium text-text pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-muted shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="font-sans text-muted leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#1a73e8] to-[#1557b0] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-6">Ready to start?</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Send us your resume and we'll be in touch within 48 hours. No corporate runaround — you'll talk to the people you'd actually work with.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:careers@flood.doctor"
              className="inline-flex items-center gap-2 bg-white text-primary font-display font-medium px-8 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Mail size={18} />
              careers@flood.doctor
            </a>
            <a
              href="tel:+17035894369"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-display font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone size={18} />
              (703) 589-4369
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;