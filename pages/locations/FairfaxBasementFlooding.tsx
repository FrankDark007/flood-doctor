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
  AlertTriangle,
  Shield,
  Award,
  Droplets,
  Wind,
  Home,
  Zap,
  Wrench,
  TrendingDown
} from 'lucide-react';

const FairfaxBasementFlooding: React.FC = () => {
  const faqs = [
    {
      question: "How fast can you respond to basement flooding in Fairfax?",
      answer: "We provide 24/7 emergency basement flooding response throughout Fairfax County. Our average response time is under 60 minutes with portable pumps and extraction equipment ready to deploy. Call (877) 497-0007 immediately for emergency dispatch to Burke, Mantua, Fairfax Station, or Fair Oaks."
    },
    {
      question: "What causes basement flooding in Fairfax homes?",
      answer: "Common causes include sump pump failures during heavy rain, sewer backups, foundation cracks, poor grading directing water toward the house, clogged gutters and downspouts, and severe storms. Many Fairfax basements in Burke and Mantua lack proper waterproofing or have aging sump pump systems."
    },
    {
      question: "How much does basement flood cleanup cost in Fairfax?",
      answer: "Basement flooding cleanup in Fairfax typically costs $3,000 to $12,000 depending on water depth, square footage, and whether the basement is finished. Unfinished basements with minimal water average $2,000-$4,000. Finished basements with significant flooding can reach $15,000+ including content restoration and reconstruction."
    },
    {
      question: "Will insurance cover basement flooding in Fairfax?",
      answer: "Coverage depends on the water source. Sudden plumbing failures (burst pipes, water heater leaks) are typically covered by homeowners insurance. Groundwater seepage and sewer backups require separate endorsements. Surface water flooding requires flood insurance. We work with all insurance types to maximize coverage."
    },
    {
      question: "How long does basement flood cleanup take?",
      answer: "Water extraction takes 1-2 days. Complete structural drying of basements typically takes 5-7 days due to concrete floors and limited airflow. Finished basements may require longer drying times. Full restoration (drywall, flooring, painting) can take 2-4 additional weeks."
    },
    {
      question: "Can you save my finished basement after flooding?",
      answer: "It depends on water category, depth, and duration. Clean water caught quickly can often save hardwood and laminate if dried within 24-48 hours. Drywall typically requires flood cuts (2-4 feet up). Carpet and padding usually need replacement. We assess all materials and recommend repair vs. replacement based on industry standards."
    },
    {
      question: "Do you provide emergency sump pump services in Fairfax?",
      answer: "Yes. If your sump pump failed and caused flooding, we can provide emergency pumping, install backup battery systems, and recommend permanent solutions. We work with trusted plumbers for sump pump replacement and can integrate waterproofing into your restoration plan."
    },
    {
      question: "How do you prevent mold after basement flooding?",
      answer: "Rapid water extraction, thorough structural drying with dehumidifiers, antimicrobial treatments on all affected surfaces, and moisture monitoring until readings return to normal. Basements are particularly prone to mold due to concrete and limited ventilation, so professional drying is critical."
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
    "name": "Flood Doctor - Fairfax Basement Flooding Repair",
    "image": "https://flood.doctor/logo.png",
    "@id": "https://fairfax.flood.doctor/basement-flooding",
    "url": "https://fairfax.flood.doctor/basement-flooding",
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
    ]
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

  const commonCauses = [
    {
      icon: Zap,
      title: "Sump Pump Failure",
      description: "Power outages, mechanical failure, or overwhelmed pumps during heavy rain are the #1 cause of basement flooding in Fairfax.",
      prevention: "Install battery backup and test monthly"
    },
    {
      icon: TrendingDown,
      title: "Foundation Cracks",
      description: "Hydrostatic pressure from saturated soil pushes water through cracks and joints in basement walls and floors.",
      prevention: "Seal cracks and improve exterior drainage"
    },
    {
      icon: Droplets,
      title: "Poor Grading",
      description: "Ground sloping toward your house directs rainwater straight to your foundation instead of away from it.",
      prevention: "Regrade landscape to slope away from home"
    },
    {
      icon: AlertTriangle,
      title: "Sewer Backup",
      description: "Municipal sewer overflows during heavy storms or tree root intrusion can cause sewage to backup into basement drains.",
      prevention: "Install backwater valve on main line"
    }
  ];

  const basementServices = [
    {
      icon: Droplets,
      title: "Emergency Water Extraction",
      description: "Submersible pumps and truck-mounted extractors remove standing water from basements quickly, regardless of depth."
    },
    {
      icon: Wind,
      title: "Basement-Specific Drying",
      description: "Specialized drying techniques for concrete floors, block walls, and below-grade spaces with limited airflow."
    },
    {
      icon: Shield,
      title: "Content Restoration",
      description: "Pack-out, cleaning, and storage of salvageable basement belongings including furniture, boxes, and equipment."
    },
    {
      icon: Home,
      title: "Finished Basement Repair",
      description: "Complete reconstruction of drywall, flooring, trim, and paint to restore finished living spaces."
    },
    {
      icon: Wrench,
      title: "Sump Pump Solutions",
      description: "Emergency pumping, battery backup installation, and coordination with plumbers for permanent repairs."
    },
    {
      icon: Award,
      title: "Waterproofing Referrals",
      description: "Partnerships with certified waterproofing contractors for long-term basement protection solutions."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Emergency Call & Dispatch",
      description: "Call (877) 497-0007 anytime. We dispatch immediately with portable pumps and extraction equipment for your Fairfax basement."
    },
    {
      number: "2",
      title: "Water Extraction",
      description: "Submersible pumps remove standing water. Truck-mounted extractors pull water from carpet, concrete, and porous materials."
    },
    {
      number: "3",
      title: "Content Protection",
      description: "Move salvageable items to dry areas or provide pack-out service for extensive basement flooding."
    },
    {
      number: "4",
      title: "Demolition (If Needed)",
      description: "Flood cuts on drywall (typically 2-4 feet up). Remove wet carpet, padding, and insulation that can't be saved."
    },
    {
      number: "5",
      title: "Structural Drying",
      description: "Commercial dehumidifiers and air movers run 24/7. Special attention to concrete and block walls. Daily moisture monitoring."
    },
    {
      number: "6",
      title: "Antimicrobial Treatment",
      description: "All affected surfaces treated to prevent mold growth. Critical for basements due to limited ventilation."
    },
    {
      number: "7",
      title: "Restoration",
      description: "Rebuild walls, install new flooring, paint, and restore your basement to pre-loss condition or better."
    }
  ];

  const preventionTips = [
    "Install battery backup sump pump system",
    "Test sump pump monthly during dry weather",
    "Clean gutters and extend downspouts 6+ feet from foundation",
    "Seal foundation cracks and gaps around basement windows",
    "Install window well covers to prevent water entry",
    "Regrade landscape to slope away from house",
    "Consider interior or exterior waterproofing systems",
    "Install backwater valve to prevent sewer backup"
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Basement Flooding Repair Fairfax, VA"
        description="Expert basement flood cleanup in Fairfax, Burke, Mantua & Fair Oaks. 60-min response. Finished basement restoration. Sump pump failure experts. Call (877) 497-0007."
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
          { label: 'Fairfax Basement Flooding', href: '/locations/fairfax-basement-flooding' }
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={20} className="text-blue-300" />
              <span className="text-blue-200 font-medium">Serving Fairfax County, VA</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Basement Flooding Repair in Fairfax, VA
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              24/7 emergency basement flood cleanup for Fairfax, Burke, Mantua, Fairfax Station, and Fair Oaks. Sump pump failures, finished basement restoration, and complete water damage repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="tel:7036650505"
                variant="primary"
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg h-14 px-8 shadow-lg"
              >
                <Phone size={20} className="mr-2" />
                Call (877) 497-0007 Now
              </Button>
              <Button
                href="/request-service"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg h-14 px-8"
              >
                Request Emergency Service
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-300" />
                <span>60-Min Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-300" />
                <span>Sump Pump Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-300" />
                <span>Finished Basement Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Alert */}
      <div className="bg-yellow-50 border-y border-yellow-200 py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle size={24} className="text-yellow-600" />
              <span className="font-medium text-gray-900">
                Basement flooding? <span className="text-primary">Water rises fast. Call immediately.</span>
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
              Basement Flood Service Throughout Fairfax
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Emergency response team available 24/7 for every Fairfax neighborhood
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

      {/* Common Causes */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Common Causes of Basement Flooding in Fairfax
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Understanding what causes basement flooding helps prevent future incidents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {commonCauses.map((cause, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-200">
                    <cause.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-text mb-2">{cause.title}</h3>
                    <p className="text-muted mb-3">{cause.description}</p>
                    <div className="flex items-start gap-2">
                      <Shield size={16} className="text-green-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-green-700 font-medium">{cause.prevention}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Complete Basement Flood Services
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              From emergency water removal to finished basement restoration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {basementServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 border border-blue-200">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-text mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Our Basement Flood Recovery Process
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Proven 7-step approach for complete basement restoration
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 flex gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-2xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prevention Tips */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield size={48} className="text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
                Prevent Future Basement Flooding
              </h2>
              <p className="text-lg text-muted">
                Expert recommendations to protect your Fairfax basement from future water damage
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {preventionTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-600 mt-0.5 shrink-0" />
                    <span className="text-text">{tip}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-gray-900 font-medium mb-2">
                  Free consultation during restoration
                </p>
                <p className="text-gray-700 text-sm">
                  During your basement flood cleanup, our team will identify the root cause and provide recommendations to prevent recurrence. We partner with trusted waterproofing contractors for permanent solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Finished Basements Section */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-6 text-center">
              Finished Basement Flooding Specialists
            </h2>
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
              <p className="text-lg text-text mb-6 leading-relaxed">
                Many Fairfax homes have finished basements serving as family rooms, home offices, or rental units. Flooding in finished basements is particularly devastating due to drywall, carpeting, and built-in features.
              </p>
              <p className="text-lg text-text mb-6 leading-relaxed">
                Our team specializes in finished basement restoration. We carefully assess what can be saved versus what requires replacement, work with your insurance to maximize coverage, and restore your basement to its original condition—or better.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                  <Home size={32} className="text-primary mx-auto mb-3" />
                  <div className="font-bold text-text mb-1">Material Assessment</div>
                  <div className="text-sm text-muted">Expert evaluation of flooring, drywall, trim</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                  <Shield size={32} className="text-primary mx-auto mb-3" />
                  <div className="font-bold text-text mb-1">Content Protection</div>
                  <div className="text-sm text-muted">Pack-out and cleaning of salvageable items</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                  <Award size={32} className="text-primary mx-auto mb-3" />
                  <div className="font-bold text-text mb-1">Quality Restoration</div>
                  <div className="text-sm text-muted">Professional reconstruction and finishing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-12 text-center">
              Fairfax Basement Flooding FAQs
            </h2>
            <GoogleStyleFAQ faqs={faqs} />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Basement Flooding Emergency?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our specialized basement flood team responds 24/7 throughout Fairfax County. We'll pump out your basement, dry everything thoroughly, and restore it completely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="tel:7036650505"
              variant="primary"
              className="bg-white text-blue-900 hover:bg-gray-100 text-xl h-16 px-10 shadow-lg"
            >
              <Phone size={24} className="mr-3" />
              Call (877) 497-0007 Now
            </Button>
          </div>
          <div className="mt-8 text-blue-200">
            <p className="font-medium">24/7 Emergency Response • Finished Basement Experts</p>
            <p className="text-sm">Serving Burke, Mantua, Fairfax Station, Fair Oaks & All of Fairfax County</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FairfaxBasementFlooding;
