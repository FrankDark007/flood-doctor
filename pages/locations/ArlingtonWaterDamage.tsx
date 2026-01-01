import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  CheckCircle2,
  Droplets,
  Home,
  AlertTriangle,
  Award,
  Users,
  Zap,
  ThumbsUp,
  ArrowRight,
  Star
} from 'lucide-react';

const ArlingtonWaterDamage: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you respond to water damage emergencies in Arlington, VA?",
      answer: "We provide 24/7 emergency water damage response throughout Arlington, including Ballston, Clarendon, Rosslyn, Crystal City, and Pentagon City. Our certified technicians typically arrive within 60-90 minutes of your call. We understand that every minute counts when water is actively damaging your property, which is why we maintain rapid response capabilities across all Arlington neighborhoods."
    },
    {
      question: "What types of water damage do you handle in Arlington?",
      answer: "We handle all categories of water damage in Arlington properties: burst pipes, appliance failures, basement flooding, sewage backups, storm damage, roof leaks, and HVAC condensate issues. Our team is equipped to manage everything from minor leaks in Clarendon townhomes to major flooding in Pentagon City high-rises."
    },
    {
      question: "Do you work with insurance companies for Arlington water damage claims?",
      answer: "Yes, we work directly with all major insurance carriers and bill insurance directly for Arlington residents. We use Xactimate, the same software your insurance adjuster uses, ensuring accurate estimates and faster claim approval. Our team handles the documentation and communication with your insurance company, so you only pay your deductible."
    },
    {
      question: "Are you licensed and certified for water damage restoration in Virginia?",
      answer: "Absolutely. All our technicians hold IICRC certifications in Water Damage Restoration and Applied Structural Drying. We're fully licensed, bonded, and insured to operate in Arlington County and throughout Northern Virginia. Our certifications are renewed annually through continuing education."
    },
    {
      question: "What areas of Arlington do you serve?",
      answer: "We serve all Arlington neighborhoods including Ballston, Clarendon, Rosslyn, Crystal City, Pentagon City, Columbia Pike, Shirlington, Cherrydale, Lyon Village, Lyon Park, Westover, Arlington Forest, Fairlington, Aurora Highlands, and all surrounding areas. No job is too far—if you're in Arlington County, we'll be there fast."
    },
    {
      question: "How much does water damage restoration cost in Arlington, VA?",
      answer: "Water damage restoration costs in Arlington typically range from $1,500 to $8,000 depending on the extent of damage, water category, and affected square footage. We provide free estimates and transparent pricing using industry-standard Xactimate software. Most homeowners only pay their insurance deductible when working with us."
    },
    {
      question: "Can you prevent mold after water damage in my Arlington home?",
      answer: "Yes, preventing mold is a critical part of our water damage restoration process. We begin drying within hours to keep your property in the safe zone (mold typically develops after 24-48 hours). We use commercial-grade dehumidifiers, air movers, and moisture meters to ensure complete drying. All affected areas receive antimicrobial treatment to inhibit mold growth."
    },
    {
      question: "Do you offer emergency services on nights and weekends in Arlington?",
      answer: "Yes, we operate 24/7/365 throughout Arlington. Water damage doesn't wait for business hours, and neither do we. Call 703-665-0505 anytime—day or night, weekend or holiday—and speak directly with our emergency dispatch team. We'll have a certified technician on-site as quickly as possible."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flood Doctor Water Damage Restoration - Arlington, VA",
    "image": "https://flooddoctor.com/images/logo.png",
    "@id": "https://flooddoctor.com/locations/arlington-water-damage/",
    "url": "https://flooddoctor.com/locations/arlington-water-damage/",
    "telephone": "703-665-0505",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Service Coverage Area",
      "addressLocality": "Arlington",
      "addressRegion": "VA",
      "postalCode": "22201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8816,
      "longitude": -77.0910
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/flooddoctor",
      "https://www.instagram.com/flooddoctor"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Arlington",
      "containedInPlace": {
        "@type": "State",
        "name": "Virginia"
      }
    }
  };

  const serviceAreas = [
    "Ballston",
    "Clarendon",
    "Rosslyn",
    "Crystal City",
    "Pentagon City",
    "Columbia Pike",
    "Shirlington",
    "Cherrydale",
    "Lyon Village",
    "Lyon Park",
    "Westover",
    "Arlington Forest"
  ];

  const services = [
    {
      icon: Droplets,
      title: "Emergency Water Extraction",
      description: "Rapid removal of standing water using truck-mounted and portable extraction equipment"
    },
    {
      icon: Home,
      title: "Structural Drying",
      description: "Industrial dehumidifiers and air movers to completely dry walls, floors, and ceilings"
    },
    {
      icon: Shield,
      title: "Mold Prevention",
      description: "Antimicrobial treatments and moisture monitoring to prevent mold growth"
    },
    {
      icon: CheckCircle2,
      title: "Content Restoration",
      description: "Pack-out, cleaning, and restoration of damaged furniture and belongings"
    }
  ];

  const trustSignals = [
    {
      icon: Award,
      title: "IICRC Certified",
      description: "All technicians certified in water damage restoration"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available anytime, day or night"
    },
    {
      icon: Shield,
      title: "Direct Insurance Billing",
      description: "We work with all major carriers"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Trusted by Arlington homeowners"
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration in Arlington, VA | 24/7 Emergency Service"
        description="Emergency water damage restoration in Arlington, VA. Serving Ballston, Clarendon, Rosslyn, Crystal City & Pentagon City. IICRC certified. Call 703-665-0505 for immediate help."
        schema={[faqSchema, localBusinessSchema]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'Arlington, VA', path: '#' }
            ]}
            className="text-white/80"
          />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} /> Arlington, Virginia
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-6 leading-tight">
              Water Damage Restoration in Arlington, VA
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              24/7 emergency water damage restoration serving all Arlington neighborhoods. IICRC certified technicians arrive within 60-90 minutes. Direct insurance billing available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="tel:703-665-0505" variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
                <Phone size={20} className="mr-2" />
                703-665-0505
              </Button>
              <Button to="/request/" variant="secondary" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Request Service Online
              </Button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl">
            {trustSignals.map((signal, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <signal.icon size={24} className="text-white mb-2" />
                <div className="text-sm font-medium text-white mb-1">{signal.title}</div>
                <div className="text-xs text-blue-100">{signal.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Content */}
          <div className="lg:col-span-8">

            {/* Intro */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Arlington's Trusted Water Damage Restoration Company
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  When water damage strikes your Arlington home or business, every minute counts. Whether you're dealing with a burst pipe in Ballston, basement flooding in Clarendon, or storm damage in Rosslyn, Flood Doctor provides rapid emergency response throughout Arlington County.
                </p>
                <p>
                  Our IICRC-certified technicians understand the unique challenges Arlington properties face—from historic homes in Lyon Village to modern high-rises in Crystal City and Pentagon City. We bring professional-grade equipment and proven restoration techniques to every job, no matter the size or complexity.
                </p>
                <p>
                  We're available 24/7/365 because water damage doesn't wait for business hours. One call to <a href="tel:703-665-0505" className="text-[#1a73e8] font-medium hover:underline">703-665-0505</a> connects you with our emergency dispatch team, and we'll have certified technicians on-site within 60-90 minutes anywhere in Arlington.
                </p>
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Complete Water Damage Restoration Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#1a73e8] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a73e8] flex items-center justify-center mb-4">
                      <service.icon size={24} />
                    </div>
                    <h3 className="font-medium text-gray-900 text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Areas */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Arlington Neighborhoods We Serve
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We provide water damage restoration services throughout Arlington County, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={16} className="text-[#1a73e8] shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-6 italic">
                Don't see your neighborhood? We serve all of Arlington County and surrounding areas. Call us to confirm coverage.
              </p>
            </section>

            {/* Why Choose Us */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Why Arlington Residents Choose Flood Doctor
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Certified Experts",
                    description: "Every technician holds IICRC certification in Water Damage Restoration and Applied Structural Drying. We're not handymen—we're restoration specialists."
                  },
                  {
                    title: "Rapid Response",
                    description: "We maintain equipment and staff throughout Northern Virginia to ensure 60-90 minute response times across all Arlington neighborhoods."
                  },
                  {
                    title: "Insurance Specialists",
                    description: "We work directly with your insurance carrier, using Xactimate for accurate estimates. Most customers only pay their deductible."
                  },
                  {
                    title: "Advanced Technology",
                    description: "Thermal imaging cameras, moisture meters, and commercial-grade drying equipment ensure we find and fix all damage—even hidden moisture."
                  },
                  {
                    title: "Mold Prevention Focus",
                    description: "We don't just dry your property—we monitor moisture levels continuously and apply antimicrobial treatments to prevent future mold growth."
                  },
                  {
                    title: "Transparent Pricing",
                    description: "No surprises. We provide detailed estimates before starting work and keep you informed of any changes throughout the restoration process."
                  }
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold text-sm">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{point.title}</h3>
                      <p className="text-sm text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Emergency Steps */}
            <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-start gap-3 mb-6">
                <AlertTriangle size={24} className="text-amber-600 shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-2xl font-medium text-amber-900 mb-2">
                    What to Do If You Have Water Damage Right Now
                  </h2>
                  <p className="text-amber-800">
                    Follow these steps immediately to minimize damage while help is on the way:
                  </p>
                </div>
              </div>
              <ol className="space-y-3 ml-9">
                <li className="text-gray-800">
                  <span className="font-medium">Call us first:</span> <a href="tel:703-665-0505" className="text-[#1a73e8] font-bold hover:underline">703-665-0505</a> — we'll advise you on immediate steps while dispatching a team
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Stop the water source</span> if safe (shut off main water, close supply valves, move items out of leak path)
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Document the damage</span> with photos and video for your insurance claim
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Don't delay</span> — mold can begin growing within 24-48 hours of water exposure
                </li>
              </ol>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Frequently Asked Questions"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* CTA Card */}
              <div className="bg-[#1a73e8] rounded-[32px] p-8 text-white shadow-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone size={24} />
                    <span className="text-sm font-bold uppercase tracking-wide">24/7 Emergency</span>
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-2">
                    Call Now for Immediate Help
                  </h3>
                  <p className="text-blue-100 text-sm mb-6">
                    Arlington's trusted water damage experts. Available anytime, anywhere in Arlington County.
                  </p>

                  <Button href="tel:703-665-0505" variant="secondary" fullWidth className="bg-white text-[#1a73e8] border-none hover:bg-blue-50 mb-4">
                    <Phone size={18} className="mr-2" />
                    703-665-0505
                  </Button>

                  <div className="text-xs text-blue-100 text-center">
                    Average response time: 60-90 minutes
                  </div>
                </div>
              </div>

              {/* Coverage Areas */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[#1a73e8]" />
                  Coverage Areas
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></div>
                    All Arlington neighborhoods
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></div>
                    Falls Church
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></div>
                    Alexandria
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></div>
                    Washington, DC
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></div>
                    Northern Virginia
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Award size={18} className="text-[#1a73e8]" />
                  Certifications
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">IICRC Water Damage Restoration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">IICRC Applied Structural Drying</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Licensed & Insured in Virginia</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">EPA Lead-Safe Certified</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-gray-900 mb-4">Related Services</h4>
                <div className="space-y-3">
                  <a href="/locations/arlington-mold-removal/" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a73e8] transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#1a73e8]" />
                    Arlington Mold Removal
                  </a>
                  <a href="/locations/arlington-flood-cleanup/" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a73e8] transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#1a73e8]" />
                    Arlington Flood Cleanup
                  </a>
                  <a href="/locations/arlington-basement-flooding/" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a73e8] transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#1a73e8]" />
                    Arlington Basement Flooding
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Arlington's Water Damage Restoration Experts
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            IICRC certified. 24/7 emergency service. Direct insurance billing. Call now for immediate help.
          </p>
          <Button href="tel:703-665-0505" variant="secondary" size="lg" className="bg-white text-green-700 border-none hover:bg-green-50">
            <Phone size={20} className="mr-2" />
            703-665-0505
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ArlingtonWaterDamage;
