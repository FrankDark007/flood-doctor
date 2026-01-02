import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Clock,
  Award,
  CheckCircle2,
  Star,
  MapPin,
  Droplets,
  Flame,
  Bug,
  Wind,
  Quote,
  Heart,
  Home,
  AlertTriangle,
  Zap,
  ThumbsUp
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import Button from '../../components/ui/Button';

export interface KeywordLandingConfig {
  // SEO & Meta
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;

  // Location specifics (optional)
  location?: string;
  locationSlug?: string;
  neighborhoods?: { name: string; count: string; link: string }[];

  // Service focus
  primaryService: 'water-damage' | 'flood' | 'mold' | 'fire' | 'storm' | 'emergency';

  // Content customization
  heroTagline?: string;
  valueProps?: { icon: any; title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
}

const defaultNeighborhoods = [
  { name: 'Fairfax', count: '2,400+ projects', link: '/locations/fairfax/' },
  { name: 'Arlington', count: '1,800+ projects', link: '/locations/arlington/' },
  { name: 'Alexandria', count: '1,500+ projects', link: '/locations/alexandria/' },
  { name: 'McLean', count: '1,200+ projects', link: '/locations/mclean/' },
  { name: 'Reston', count: '900+ projects', link: '/locations/reston/' },
  { name: 'Ashburn', count: '800+ projects', link: '/locations/ashburn/' }
];

const defaultValues = [
  { icon: Clock, title: '60-Minute Response', description: 'We arrive fast because every minute matters.' },
  { icon: Shield, title: 'Licensed & Insured', description: 'Full coverage and certified technicians.' },
  { icon: Heart, title: 'Family Owned', description: '15 years serving our neighbors.' },
  { icon: Award, title: '500+ 5-Star Reviews', description: 'Our reputation speaks for itself.' }
];

const KeywordLandingTemplate: React.FC<{ config: KeywordLandingConfig }> = ({ config }) => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const neighborhoods = config.neighborhoods || defaultNeighborhoods;
  const values = config.valueProps || defaultValues;

  const services = [
    {
      title: 'Water Damage Restoration',
      subtitle: 'Emergency response',
      description: 'From burst pipes to flooding, we extract water and restore your property fast.',
      icon: Droplets,
      gradient: 'from-blue-600 to-cyan-500',
      link: '/services/residential/water-damage/',
      featured: config.primaryService === 'water-damage' || config.primaryService === 'flood'
    },
    {
      title: 'Fire & Smoke Damage',
      subtitle: 'Complete remediation',
      description: 'Soot removal, odor elimination, and structural restoration.',
      icon: Flame,
      gradient: 'from-orange-500 to-red-500',
      link: '/services/residential/fire-smoke/'
    },
    {
      title: 'Mold Remediation',
      subtitle: 'Safe removal',
      description: 'Professional mold testing, removal, and prevention.',
      icon: Bug,
      gradient: 'from-emerald-500 to-green-500',
      link: '/services/residential/mold/'
    },
    {
      title: 'Storm & Wind Damage',
      subtitle: 'Weather emergencies',
      description: 'Tarping, water extraction, and storm damage repair.',
      icon: Wind,
      gradient: 'from-purple-500 to-indigo-500',
      link: '/services/residential/storm-damage/'
    }
  ];

  const testimonials = [
    {
      quote: "When our basement flooded at 3 AM, Flood Doctor was there within an hour. They saved our finished basement and handled everything with our insurance.",
      author: 'The Martinez Family',
      location: config.location || 'Vienna, VA',
      project: 'Basement Flood'
    },
    {
      quote: "Professional, courteous, and incredibly thorough. They kept us updated every day and finished ahead of schedule. Can't recommend them enough.",
      author: 'David & Lisa Chen',
      location: config.location || 'Arlington, VA',
      project: 'Kitchen Water Damage'
    }
  ];

  const locationText = config.location ? ` in ${config.location}` : ' in Northern Virginia';

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title={config.title}
        description={config.metaDescription}
      />

      {/* Hero - Editorial Bold */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/90" />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full">
          <div className="max-w-4xl">
            {/* Editorial eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-white/40" />
              <span className="text-white/60 text-sm tracking-widest uppercase">
                {config.heroTagline || `Trusted ${config.keyword} Company`}
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white mb-8 leading-[0.95]">
              {config.h1.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="italic font-normal">{config.h1.split(' ').slice(2, 4).join(' ')}</span>
              <br />
              {config.h1.split(' ').slice(4).length > 0 && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">
                  {config.h1.split(' ').slice(4).join(' ')}
                </span>
              )}
            </h1>

            <p className="text-xl lg:text-2xl text-white/60 mb-12 max-w-2xl leading-relaxed">
              {config.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="tel:8774970007"
                variant="primary"
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-100 h-16 px-10 text-lg"
              >
                <Phone size={22} className="mr-3" />
                Call (877) 497-0007
              </Button>
              <Button
                to="/request/"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 h-16 px-10 text-lg"
              >
                Free Estimate
                <ArrowRight size={20} className="ml-3" />
              </Button>
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute bottom-8 right-8 hidden xl:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-white">10k+</div>
                  <div className="text-sm text-white/60">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-white">4.9</div>
                  <div className="text-sm text-white/60">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Keyword Focused */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
              Why Choose Flood Doctor for {config.keyword}?
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              When you need professional {config.keyword.toLowerCase()}{locationText},
              trust the company with 15+ years of experience and thousands of satisfied customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: '60-Minute Response', description: 'Our teams are strategically positioned to reach you fast, any time of day.' },
              { icon: Shield, title: 'IICRC Certified', description: 'All technicians are certified by the Institute of Inspection, Cleaning & Restoration.' },
              { icon: ThumbsUp, title: 'Insurance Experts', description: 'We work directly with your insurance company to maximize your claim.' },
              { icon: Award, title: 'Guaranteed Work', description: 'Our restoration work is backed by our satisfaction guarantee.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid - Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text">
                Our {config.keyword} Services
              </h2>
            </div>
            <Link
              to="/services/"
              className="hidden md:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              All services
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured Service - Large */}
            <Link
              to={services[0].link}
              className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 lg:p-12 min-h-[400px] flex flex-col justify-end"
              onMouseEnter={() => setHoveredService(0)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-8 right-8">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Droplets className="text-white" size={40} />
                </div>
              </div>
              <div className="relative">
                <div className="text-white/60 text-sm uppercase tracking-wider mb-2">{services[0].subtitle}</div>
                <h3 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-4">
                  {services[0].title}
                </h3>
                <p className="text-white/80 text-lg mb-6 max-w-lg">
                  {services[0].description}
                </p>
                <div className="flex items-center gap-2 text-white font-medium">
                  Learn more
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Other Services */}
            {services.slice(1).map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className={`group relative overflow-hidden rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[200px] bg-gradient-to-br ${service.gradient}`}
                onMouseEnter={() => setHoveredService(idx + 1)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                    Learn more
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="py-12 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <value.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">{value.title}</h3>
                  <p className="text-sm text-muted">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Story Style */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-amber-400 fill-amber-400" size={24} />
              ))}
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text mb-4">
              {config.location ? `${config.location} Families Trust Us` : 'Stories from our neighbors'}
            </h2>
            <p className="text-lg text-muted">
              Real families. Real emergencies. Real results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-8 lg:p-10 relative overflow-hidden"
              >
                <Quote className="absolute top-8 right-8 text-slate-200" size={48} />
                <div className="relative">
                  <p className="text-xl lg:text-2xl text-text leading-relaxed mb-8 font-display">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-text">{testimonial.author}</div>
                      <div className="text-sm text-muted flex items-center gap-2">
                        <MapPin size={14} />
                        {testimonial.location} • {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/reviews/" variant="outline" size="lg">
              Read All Reviews
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Local Neighborhoods */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-white/40" />
                <span className="text-white/60 text-sm tracking-widest uppercase">Our Service Area</span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-6">
                {config.keyword}
                <br />
                <span className="italic font-normal">{config.location || 'Northern Virginia'}</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                From Arlington to Ashburn, we've helped over 10,000 families restore their homes.
                Our crews live in the neighborhoods we serve.
              </p>
              <Button to="/locations/" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Find Your Location
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {neighborhoods.map((hood, idx) => (
                <Link
                  key={idx}
                  to={hood.link}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={18} className="text-primary" />
                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                      {hood.name}
                    </h3>
                  </div>
                  <div className="text-sm text-white/50">{hood.count}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process - Editorial Cards */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-semibold text-text mb-4">
              Our {config.keyword} Process
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              From your first call to final walkthrough, we handle everything.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Call Us', description: '24/7 emergency line. Average hold time under 30 seconds.', icon: Phone },
              { step: '02', title: 'We Arrive', description: 'Technicians on-site within 60 minutes, day or night.', icon: Clock },
              { step: '03', title: 'We Restore', description: 'Water extraction, drying, and repairs handled seamlessly.', icon: Home },
              { step: '04', title: 'We Bill Insurance', description: 'Direct billing. Zero hassle. Maximum coverage.', icon: Shield }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 h-full hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                  <div className="text-5xl font-display font-bold text-slate-200 mb-4 group-hover:text-primary/20 transition-colors">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:border-primary transition-all">
                    <item.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {config.faqs && config.faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-12 text-center">
              Common Questions About {config.keyword}
            </h2>
            <div className="space-y-6">
              {config.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-lg text-text mb-3">{faq.question}</h3>
                  <p className="text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA - Editorial */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-cyan-500">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            Need {config.keyword}?
            <br />
            <span className="italic font-normal">Call now.</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Free estimates. 60-minute response. Direct insurance billing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="tel:8774970007"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 h-16 px-10 text-lg"
            >
              <Phone size={22} className="mr-3" />
              (877) 497-0007
            </Button>
            <Button
              to="/request/"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 h-16 px-10 text-lg"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KeywordLandingTemplate;
