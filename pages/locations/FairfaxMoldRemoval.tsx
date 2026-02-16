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
  Eye,
  Wind,
  Home,
  Microscope,
  FileCheck
} from 'lucide-react';

const FairfaxMoldRemoval: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you start mold removal in Fairfax?",
      answer: "We provide same-day mold inspections and can begin containment and removal within 24 hours for Fairfax properties. Our IICRC-certified mold remediation specialists are available 24/7. Call (877) 497-0007 for immediate assessment."
    },
    {
      question: "What areas of Fairfax do you serve for mold removal?",
      answer: "We serve all of Fairfax County including Burke, Mantua, Fairfax Station, Fair Oaks, Annandale, West Springfield, and Fairfax City. Our Vienna location allows rapid response throughout Northern Virginia."
    },
    {
      question: "Do I need a mold inspection before remediation?",
      answer: "Yes, professional mold inspection identifies the extent of contamination, moisture sources, and affected materials. We provide thermal imaging, moisture mapping, and air quality testing to create a comprehensive remediation plan that satisfies insurance requirements."
    },
    {
      question: "Will my homeowners insurance cover mold removal in Fairfax?",
      answer: "Coverage depends on the cause. If mold resulted from a sudden covered event (burst pipe, storm damage), most Fairfax insurance policies cover remediation. Mold from long-term neglect or maintenance issues is typically excluded. We work with your insurer to maximize coverage."
    },
    {
      question: "What causes mold growth in Fairfax homes?",
      answer: "Common causes in Fairfax include basement moisture, poor ventilation in bathrooms, roof leaks, plumbing failures, HVAC condensation issues, and high humidity during Virginia summers. Many older homes in Burke and Mantua have inadequate vapor barriers in crawl spaces."
    },
    {
      question: "How much does mold remediation cost in Fairfax?",
      answer: "Typical mold remediation in Fairfax ranges from $1,500 to $6,000 depending on affected square footage and contamination severity. Small bathroom mold might cost $1,000-$2,000, while extensive basement mold can reach $8,000+. We provide free inspections and detailed estimates."
    },
    {
      question: "Is black mold dangerous?",
      answer: "Stachybotrys (black mold) can produce mycotoxins that cause respiratory issues, especially in children, elderly, and immunocompromised individuals. All mold should be professionally removed, but black mold requires enhanced containment and PPE protocols per IICRC S520 standards."
    },
    {
      question: "How long does mold remediation take in Fairfax?",
      answer: "Small areas (under 100 sq ft) typically take 1-3 days. Moderate contamination (100-300 sq ft) takes 3-5 days. Extensive mold or whole-house remediation can take 1-2 weeks. Timeline depends on containment requirements, drying time, and post-remediation verification testing."
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
    "name": "Flood Doctor - Fairfax Mold Removal",
    "image": "https://flood.doctor/logo.png",
    "@id": "https://fairfax.flood.doctor/mold-removal",
    "url": "https://fairfax.flood.doctor/mold-removal",
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

  const whyChooseUs = [
    {
      icon: Award,
      title: "IICRC Certified",
      description: "Certified mold remediation specialists following industry standards"
    },
    {
      icon: Microscope,
      title: "Advanced Testing",
      description: "Thermal imaging, air quality testing, and moisture mapping"
    },
    {
      icon: Shield,
      title: "Safe Containment",
      description: "HEPA filtration and negative air pressure prevent cross-contamination"
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Detailed reports and clearance testing for insurance and peace of mind"
    }
  ];

  const moldTypes = [
    {
      name: "Black Mold (Stachybotrys)",
      severity: "High Risk",
      color: "red",
      description: "Produces mycotoxins. Requires enhanced containment and professional removal. Common in water-damaged drywall and wood."
    },
    {
      name: "Green/Blue Mold (Penicillium)",
      severity: "Moderate Risk",
      color: "yellow",
      description: "Fast-spreading mold common in water damage and HVAC systems. Can trigger allergies and respiratory issues."
    },
    {
      name: "White Mold (Aspergillus)",
      severity: "Moderate Risk",
      color: "yellow",
      description: "Often mistaken for efflorescence. Common in basements, attics, and crawl spaces with high humidity."
    },
    {
      name: "Pink Mold (Serratia)",
      severity: "Low-Moderate Risk",
      color: "green",
      description: "Actually bacteria, not mold. Common in bathrooms and showers. Can cause urinary tract infections if not addressed."
    }
  ];

  const remediationProcess = [
    {
      number: "1",
      title: "Inspection & Testing",
      description: "Thermal imaging, moisture meters, and air quality sampling identify all mold sources and moisture problems."
    },
    {
      number: "2",
      title: "Containment Setup",
      description: "Physical barriers and negative air pressure with HEPA filtration prevent mold spores from spreading."
    },
    {
      number: "3",
      title: "Mold Removal",
      description: "HEPA vacuuming, antimicrobial treatment, and removal of contaminated porous materials (drywall, insulation)."
    },
    {
      number: "4",
      title: "Source Elimination",
      description: "Fix leaks, improve ventilation, and address moisture sources to prevent mold recurrence."
    },
    {
      number: "5",
      title: "Clearance Testing",
      description: "Post-remediation air quality testing confirms mold levels are back to normal. Documentation provided."
    }
  ];

  const warningSigns = [
    "Visible mold growth on walls, ceilings, or floors",
    "Musty, earthy odor in basement or bathrooms",
    "Water stains or discoloration on surfaces",
    "Peeling or bubbling paint and wallpaper",
    "Condensation on windows or walls",
    "Increased allergy symptoms or respiratory issues",
    "Recent water damage or flooding",
    "High humidity (above 60%) in your home"
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Removal in Fairfax, VA"
        description="Professional mold remediation in Fairfax, Burke, Mantua & Fair Oaks. IICRC certified. Safe containment. Insurance approved. Call (877) 497-0007 for free inspection."
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
          { label: 'Fairfax Mold Removal', href: '/locations/fairfax-mold-removal' }
        ]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={20} className="text-gray-400" />
              <span className="text-gray-300 font-medium">Serving Fairfax County, VA</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Mold Removal Services in Fairfax, VA
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              IICRC-certified mold remediation for Fairfax, Burke, Mantua, Fairfax Station, and Fair Oaks. Safe, effective mold removal with complete documentation for insurance claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="tel:7036650505"
                variant="primary"
                className="bg-primary hover:bg-blue-700 text-lg h-14 px-8 shadow-lg"
              >
                <Phone size={20} className="mr-2" />
                Call (877) 497-0007
              </Button>
              <Button
                href="/request-service"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg h-14 px-8"
              >
                Schedule Inspection
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-400" />
                <span>Free Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-400" />
                <span>IICRC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-400" />
                <span>Same-Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Signs Alert */}
      <div className="bg-yellow-50 border-y border-yellow-200 py-4">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle size={24} className="text-yellow-600" />
              <span className="font-medium text-gray-900">
                Think you have mold? <span className="text-primary">Early detection saves thousands.</span>
              </span>
            </div>
            <Button
              href="tel:7036650505"
              variant="primary"
              className="h-12 px-6"
            >
              <Phone size={18} className="mr-2" />
              Free Inspection
            </Button>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Mold Remediation Throughout Fairfax County
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Vienna-based team providing fast mold inspection and removal to every Fairfax neighborhood
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
              Certified Mold Removal Experts
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Professional mold remediation following IICRC S520 standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-200">
                  <item.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-text mb-2">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Warning Signs */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Eye size={48} className="text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
                Warning Signs of Mold in Your Fairfax Home
              </h2>
              <p className="text-lg text-muted">
                If you notice any of these signs, schedule a professional mold inspection immediately
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {warningSigns.map((sign, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-yellow-600 mt-0.5 shrink-0" />
                    <span className="text-text">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-2">
                  Don't wait for mold to spread
                </p>
                <p className="text-gray-700 text-sm">
                  Mold can double in size every 24-48 hours under ideal conditions. Early detection and professional remediation prevent extensive damage and health risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mold Types */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Common Mold Types in Fairfax Homes
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Professional identification and removal of all mold species
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {moldTypes.map((mold, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-text">{mold.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    mold.color === 'red' ? 'bg-red-100 text-red-700' :
                    mold.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {mold.severity}
                  </span>
                </div>
                <p className="text-muted">{mold.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Remediation Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Our Mold Remediation Process
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              IICRC S520-compliant mold removal for Fairfax properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {remediationProcess.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-lg font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
                {idx < remediationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Detail */}
      <div className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
              Complete Mold Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Microscope,
                title: "Mold Inspection",
                description: "Comprehensive inspection with thermal imaging, moisture mapping, and air quality testing to identify all mold sources."
              },
              {
                icon: Shield,
                title: "Containment & Removal",
                description: "HEPA-filtered negative air pressure containment prevents spore spread. Safe removal of all contaminated materials."
              },
              {
                icon: Wind,
                title: "Air Scrubbing",
                description: "HEPA air scrubbers remove airborne mold spores during and after remediation for safe breathing environment."
              },
              {
                icon: Home,
                title: "Moisture Control",
                description: "Fix leaks, improve ventilation, and address humidity issues to prevent mold recurrence in your Fairfax home."
              },
              {
                icon: FileCheck,
                title: "Clearance Testing",
                description: "Independent air quality testing confirms successful remediation. Documentation provided for insurance and records."
              },
              {
                icon: CheckCircle2,
                title: "Restoration",
                description: "Complete reconstruction of removed materials including drywall, insulation, flooring, and painting."
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

      {/* Local Expertise */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-6 text-center">
              Mold Experts Serving Fairfax Since 2010
            </h2>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <p className="text-lg text-text mb-6 leading-relaxed">
                Fairfax County's climate and housing stock create ideal conditions for mold growth. High summer humidity, basement moisture issues, and older homes in Burke and Mantua with inadequate ventilation contribute to recurring mold problems.
              </p>
              <p className="text-lg text-text mb-6 leading-relaxed">
                Our IICRC-certified team has remediated mold in hundreds of Fairfax homes, from small bathroom mold to extensive basement contamination. We understand local building codes, insurance requirements, and the unique challenges of Fairfax properties.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <div className="text-sm text-muted">Fairfax Mold Projects</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted">IICRC Certified Team</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted">Inspection Scheduling</div>
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
              Fairfax Mold Removal FAQs
            </h2>
            <GoogleStyleFAQ faqs={faqs} />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Suspect Mold in Your Fairfax Home?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a free mold inspection with our IICRC-certified specialists. Same-day appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="tel:7036650505"
              variant="primary"
              className="bg-primary hover:bg-blue-700 text-xl h-16 px-10 shadow-lg"
            >
              <Phone size={24} className="mr-3" />
              Call (877) 497-0007
            </Button>
          </div>
          <div className="mt-8 text-gray-300">
            <p className="font-medium">Free Inspections • Same-Day Service Available</p>
            <p className="text-sm">Serving Burke, Mantua, Fairfax Station, Fair Oaks & All of Fairfax County</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FairfaxMoldRemoval;
