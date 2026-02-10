import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  Droplets,
  Wind,
  Home,
  Shield,
  Award,
  AlertTriangle,
  Zap,
  Users
} from 'lucide-react';

const FairfaxWaterDamage: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you respond to water damage in Fairfax?",
      answer: "We provide 24/7 emergency water damage restoration throughout Fairfax, VA and surrounding areas including Burke, Mantua, Fairfax Station, and Fair Oaks. Our average response time is under 60 minutes. Call (877) 497-0007 immediately for emergency dispatch."
    },
    {
      question: "What areas of Fairfax do you serve?",
      answer: "We serve all of Fairfax and surrounding communities including Burke, Mantua, Fairfax Station, Fair Oaks, Fairfax City, West Springfield, and Annandale. Our Vienna headquarters is centrally located for rapid response throughout Northern Virginia."
    },
    {
      question: "Do you work with insurance companies in Fairfax?",
      answer: "Yes, we work directly with all major insurance providers serving Fairfax County. We provide detailed documentation, Xactimate estimates, and direct billing to streamline your claim. Our IICRC-certified team knows exactly what insurers require for full claim approval."
    },
    {
      question: "What causes most water damage in Fairfax homes?",
      answer: "Common causes in Fairfax include burst pipes during winter freezes, failed sump pumps during heavy rain, water heater failures, appliance leaks, and basement flooding from severe storms. Our older housing stock in neighborhoods like Burke and Mantua can be especially vulnerable to plumbing failures."
    },
    {
      question: "How much does water damage restoration cost in Fairfax?",
      answer: "Costs typically range from $1,500 to $8,000 depending on severity, water category, and affected square footage. Most Fairfax homeowners pay only their insurance deductible ($500-$2,500). We provide free inspections and work directly with your insurance to maximize coverage."
    },
    {
      question: "Can you help with basement flooding in Fairfax?",
      answer: "Yes, basement flooding is one of our most common calls in Fairfax. We provide emergency water extraction, structural drying, moisture monitoring, and mold prevention. Many Fairfax basements are finished living spaces, so we take extra care to preserve flooring, drywall, and personal belongings."
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
    "name": "Flood Doctor - Fairfax Water Damage Restoration",
    "image": "https://flood.doctor/logo.png",
    "@id": "https://fairfax.flood.doctor/water-damage",
    "url": "https://fairfax.flood.doctor/water-damage",
    "telephone": "(877) 497-0007",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8466D Tyco Rd",
      "addressLocality": "Vienna",
      "addressRegion": "VA",
      "postalCode": "22182",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8462236,
      "longitude": -77.3063733
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
      "https://twitter.com/flooddoctor"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Fairfax",
        "sameAs": "https://en.wikipedia.org/wiki/Fairfax,_Virginia"
      },
      {
        "@type": "City",
        "name": "Burke"
      },
      {
        "@type": "City",
        "name": "Mantua"
      },
      {
        "@type": "City",
        "name": "Fairfax Station"
      },
      {
        "@type": "City",
        "name": "Fair Oaks"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Water Damage Restoration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Water Extraction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Structural Drying"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flood Cleanup"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mold Prevention"
          }
        }
      ]
    }
  };

  const serviceAreas = [
    "Burke",
    "Mantua",
    "Fairfax Station",
    "Fair Oaks",
    "Fairfax City",
    "West Springfield",
    "Annandale",
    "North Springfield"
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "60-Minute Response",
      description: "24/7 emergency dispatch serving all of Fairfax County"
    },
    {
      icon: Award,
      title: "IICRC Certified",
      description: "Industry-leading water damage restoration certification"
    },
    {
      icon: Shield,
      title: "Insurance Experts",
      description: "Direct billing and full claim documentation support"
    },
    {
      icon: Users,
      title: "Local Team",
      description: "Vienna-based professionals who know Fairfax neighborhoods"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Emergency Call",
      description: "Contact us 24/7 at (877) 497-0007. We dispatch immediately to your Fairfax location."
    },
    {
      number: "2",
      title: "Rapid Assessment",
      description: "Our team arrives within 60 minutes to assess damage and begin emergency water extraction."
    },
    {
      number: "3",
      title: "Water Removal",
      description: "Industrial extractors and pumps remove standing water quickly to prevent further damage."
    },
    {
      number: "4",
      title: "Drying & Monitoring",
      description: "Commercial dehumidifiers and air movers run 24/7. We monitor moisture levels daily."
    },
    {
      number: "5",
      title: "Restoration",
      description: "Once fully dry, we restore your property to pre-loss condition with professional repairs."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration in Fairfax, VA | 24/7 Emergency Service"
        description="Expert water damage restoration in Fairfax, Burke, Mantua & Fair Oaks. 60-min response. IICRC certified. Insurance approved. Call (877) 497-0007 now."
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: 'Fairfax Water Damage', href: '/locations/fairfax-water-damage' }
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-primary to-blue-700 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={20} className="text-blue-200" />
              <span className="text-blue-100 font-medium">Serving Fairfax County, VA</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Water Damage Restoration in Fairfax, VA
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed">
              24/7 emergency water extraction and flood cleanup for Fairfax, Burke, Mantua, Fairfax Station, and Fair Oaks. IICRC-certified professionals respond in 60 minutes or less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="tel:7036650505"
                variant="primary"
                className="bg-white text-primary hover:bg-gray-50 text-lg h-14 px-8 shadow-lg"
              >
                <Phone size={20} className="mr-2" />
                Call (877) 497-0007 Now
              </Button>
              <Button
                href="/request-service"
                variant="outline"
                className="hidden md:inline-flex border-2 border-white text-white hover:bg-white/10 text-lg h-14 px-8"
              >
                Request Service Online
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-300" />
                <span>60-Min Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-300" />
                <span>IICRC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-300" />
                <span>Insurance Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Alert Bar */}
      <div className="bg-yellow-50 border-y border-yellow-200 py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle size={24} className="text-yellow-600" />
              <span className="font-medium text-gray-900">
                Water emergency in Fairfax? <span className="text-primary">Every minute counts.</span>
              </span>
            </div>
            <Button
              href="tel:7036650505"
              variant="primary"
              className="h-12 px-6"
            >
              <Phone size={18} className="mr-2" />
              (877) 497-0007
            </Button>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Serving All of Fairfax County
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Our Vienna headquarters ensures rapid response to every Fairfax neighborhood
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-primary hover:shadow-md transition-all">
                <MapPin size={20} className="text-primary mx-auto mb-2" />
                <span className="font-medium text-text">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Why Fairfax Homeowners Choose Flood Doctor
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Trusted by thousands of Fairfax County residents for fast, professional water damage restoration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-text mb-2">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Our Water Damage Restoration Process
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Proven 5-step approach to complete water damage recovery in Fairfax
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-lg font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Complete Water Damage Services in Fairfax
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Droplets,
                title: "Emergency Water Extraction",
                description: "Powerful truck-mounted extractors remove standing water within minutes of arrival at your Fairfax property."
              },
              {
                icon: Wind,
                title: "Structural Drying",
                description: "Commercial dehumidifiers and air movers ensure complete drying to prevent mold growth and structural damage."
              },
              {
                icon: Home,
                title: "Complete Restoration",
                description: "Full reconstruction services including drywall, flooring, painting, and finishing to restore your home."
              },
              {
                icon: Shield,
                title: "Mold Prevention",
                description: "Antimicrobial treatments and thorough moisture monitoring prevent mold growth after water damage."
              },
              {
                icon: Zap,
                title: "Burst Pipe Cleanup",
                description: "Rapid response to frozen and burst pipes common in Fairfax winters, minimizing water damage."
              },
              {
                icon: AlertTriangle,
                title: "Sewage Backup",
                description: "Safe, certified cleanup of Category 3 contaminated water with proper PPE and disposal protocols."
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 border border-gray-200">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-text mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Knowledge Section */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-6 text-center">
              Local Experts Who Know Fairfax
            </h2>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <p className="text-lg text-text mb-6 leading-relaxed">
                Fairfax County's diverse housing stock—from historic homes in Burke to newer developments in Fair Oaks—requires specialized knowledge for effective water damage restoration. Our Vienna-based team understands the unique challenges of Fairfax properties.
              </p>
              <p className="text-lg text-text mb-6 leading-relaxed">
                We've restored hundreds of Fairfax homes after burst pipes, basement flooding, sump pump failures, and storm damage. Whether you're in Mantua, Fairfax Station, or downtown Fairfax City, we know your neighborhood and respond fast.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted">Fairfax Homes Restored</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">&lt;60</div>
                  <div className="text-sm text-muted">Minute Response Time</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted">Emergency Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-12 text-center">
              Fairfax Water Damage FAQs
            </h2>
            <GoogleStyleFAQ faqs={faqs} />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Water Damage Emergency in Fairfax?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Our certified restoration team is standing by 24/7 to respond to your Fairfax property within 60 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="tel:7036650505"
              variant="primary"
              className="bg-white text-primary hover:bg-gray-50 text-xl h-16 px-10 shadow-lg"
            >
              <Phone size={24} className="mr-3" />
              Call (877) 497-0007 Now
            </Button>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="font-medium">Available 24 hours a day, 7 days a week</p>
            <p className="text-sm">Serving Burke, Mantua, Fairfax Station, Fair Oaks & All of Fairfax County</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FairfaxWaterDamage;
