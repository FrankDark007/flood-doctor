import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Wind,
  Droplets,
  Home,
  FlaskConical,
  Camera,
  FileText,
  Users,
  Microscope,
  Leaf,
  Bug
} from 'lucide-react';

const AlexandriaMoldRemoval: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you respond to mold emergencies in Alexandria, VA?",
      answer: "We provide 24/7 mold assessment and emergency containment services throughout Alexandria, including Old Town, Del Ray, Kingstowne, Mount Vernon, and Belle Haven. Our certified mold remediation specialists respond within 60 minutes. Call (703) 665-0505 immediately for toxic mold situations or visible growth."
    },
    {
      question: "Do I need mold testing before remediation in Alexandria?",
      answer: "Visible mold growth typically doesn't require testing—if you can see it, it needs removal. However, we recommend air quality testing for hidden mold, post-remediation clearance, or when musty odors exist without visible growth. Our certified technicians use lab analysis from accredited facilities."
    },
    {
      question: "Does homeowners insurance cover mold removal in Alexandria?",
      answer: "Coverage depends on the cause. Mold from sudden water damage (burst pipes, appliance failures) is typically covered. Mold from gradual leaks, poor maintenance, or flooding usually isn't. We document the source and timeline to maximize insurance approval. We work with all major carriers serving Alexandria."
    },
    {
      question: "Is black mold dangerous? Should I evacuate my Alexandria home?",
      answer: "Stachybotrys (black mold) produces mycotoxins that can cause respiratory issues, especially for children, elderly, or immunocompromised individuals. For extensive growth (>10 sq ft), consider temporary relocation during remediation. Small areas can be safely contained. Our team provides specific recommendations based on extent and occupant health."
    },
    {
      question: "How long does mold remediation take in Alexandria homes?",
      answer: "Timeline varies by extent: small isolated areas (1-2 days), bathroom/crawl space mold (2-4 days), whole-home remediation (5-10 days). Old Town Alexandria historic homes may take longer due to plaster walls and hidden cavities. Post-remediation testing adds 3-5 days for lab results."
    },
    {
      question: "What causes mold growth in Alexandria, VA homes?",
      answer: "Alexandria's humid summers, Potomac River proximity, and aging housing stock create ideal mold conditions. Common causes include basement moisture, poor ventilation in historic Old Town homes, HVAC condensation, roof leaks, and plumbing failures. Relative humidity above 60% promotes rapid mold growth."
    },
    {
      question: "Can you remove mold from historic Old Town Alexandria properties?",
      answer: "Yes. We specialize in mold remediation for historic Alexandria properties. Our methods preserve original plaster, trim, and architectural details while meeting Board of Architectural Review requirements. We've successfully remediated mold in dozens of 18th and 19th century Old Town homes."
    },
    {
      question: "How do you prevent mold from returning after remediation?",
      answer: "We address the moisture source—not just the mold. This includes fixing leaks, improving ventilation, installing dehumidifiers, and treating surfaces with antimicrobial sealers. We provide detailed prevention recommendations specific to your Alexandria home's construction and environment."
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
    "@id": "https://alexandria.flood.doctor/mold-removal",
    "url": "https://alexandria.flood.doctor/mold-removal",
    "name": "Flood Doctor - Mold Removal Alexandria VA",
    "image": "https://flood.doctor/logo.png",
    "telephone": "(703) 665-0505",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8466D Tyco Rd",
      "addressLocality": "Vienna",
      "addressRegion": "VA",
      "postalCode": "22182",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Alexandria",
        "containedIn": {
          "@type": "State",
          "name": "Virginia"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mold Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mold Inspection & Testing",
            "description": "Professional mold assessment and air quality testing in Alexandria"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mold Remediation",
            "description": "EPA-compliant mold removal and remediation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Moisture Control",
            "description": "Source identification and moisture mitigation"
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const services = [
    {
      icon: Microscope,
      title: "Mold Inspection & Testing",
      description: "Certified mold inspectors identify growth, collect air and surface samples, and provide lab-analyzed reports."
    },
    {
      icon: Shield,
      title: "Containment & Air Filtration",
      description: "Negative air pressure chambers with HEPA filtration prevent cross-contamination during removal."
    },
    {
      icon: Bug,
      title: "Safe Mold Removal",
      description: "EPA-compliant removal protocols using HEPA vacuums, antimicrobial treatments, and proper disposal."
    },
    {
      icon: Droplets,
      title: "Moisture Source Identification",
      description: "Thermal imaging and moisture meters locate hidden water sources causing mold growth."
    },
    {
      icon: Wind,
      title: "Structural Drying",
      description: "Complete moisture removal with dehumidifiers and air movers to prevent regrowth."
    },
    {
      icon: FlaskConical,
      title: "Post-Remediation Testing",
      description: "Clearance testing confirms successful remediation and safe reoccupancy of your Alexandria home."
    }
  ];

  const moldTypes = [
    {
      name: "Stachybotrys (Black Mold)",
      description: "Toxic mold that appears greenish-black on cellulose materials. Common in water-damaged drywall.",
      severity: "high"
    },
    {
      name: "Aspergillus",
      description: "Most common indoor mold. Appears in various colors. Can trigger allergies and respiratory issues.",
      severity: "medium"
    },
    {
      name: "Penicillium",
      description: "Blue or green mold often found on water-damaged materials and food. Spreads quickly.",
      severity: "medium"
    },
    {
      name: "Cladosporium",
      description: "Olive-green or brown mold that thrives in both warm and cool conditions. Found on fabrics and wood.",
      severity: "low"
    }
  ];

  const healthRisks = [
    "Respiratory problems and asthma attacks",
    "Allergic reactions (sneezing, runny nose, skin rash)",
    "Eye, nose, and throat irritation",
    "Chronic cough and wheezing",
    "Headaches and fatigue",
    "Worsening of existing lung conditions"
  ];

  const neighborhoods = [
    "Old Town Alexandria",
    "Del Ray",
    "Kingstowne",
    "Mount Vernon",
    "Belle Haven",
    "Potomac Yard",
    "Rosemont",
    "Seminary Hill",
    "West End Alexandria",
    "Eisenhower Valley"
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Mold Removal in Alexandria, VA"
        description="Professional mold removal in Alexandria, VA. EPA-compliant remediation for Old Town, Del Ray, Kingstowne & all Alexandria areas. IICRC certified. Call (703) 665-0505."
        schema={[faqSchema, localBusinessSchema]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'Alexandria VA - Mold Removal', path: '#' }
            ]}
            theme="dark"
          />

          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} />
              Alexandria, Virginia
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              Mold Removal Services in Alexandria, VA
            </h1>

            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
              EPA-compliant mold remediation serving Old Town Alexandria, Del Ray, Kingstowne, and all Alexandria neighborhoods. IICRC certified with certified mold inspectors on staff.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button href="tel:7036650505" variant="secondary" size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 border-none">
                <Phone size={20} className="mr-2" />
                (703) 665-0505
              </Button>
              <Button to="/request/" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Free Mold Inspection
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Shield, text: "IICRC Certified" },
                { icon: FlaskConical, text: "Lab-Tested Results" },
                { icon: Clock, text: "24/7 Response" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-20">

        {/* Emergency Banner */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-amber-900 mb-2">
                  Discovered Mold in Your Alexandria Home?
                </h2>
                <p className="text-amber-800">
                  Don't disturb it. Mold releases spores when touched. Call for professional assessment.
                </p>
              </div>
            </div>
            <Button href="tel:7036650505" variant="primary" size="lg" className="whitespace-nowrap">
              <Phone size={20} className="mr-2" />
              (703) 665-0505
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-8">

            {/* Introduction */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-6">
                Professional Mold Remediation in Alexandria, Virginia
              </h2>
              <div className="prose prose-lg max-w-none text-muted">
                <p>
                  Mold growth is a serious health and structural concern for Alexandria homeowners. Flood Doctor provides comprehensive mold inspection, testing, and EPA-compliant remediation services throughout Alexandria, including historic Old Town, Del Ray, Kingstowne, Mount Vernon, and Belle Haven.
                </p>
                <p>
                  Alexandria's proximity to the Potomac River, humid summers, and aging housing stock create ideal conditions for mold growth. Our IICRC-certified mold remediation specialists use advanced detection technology, proper containment protocols, and proven removal techniques to eliminate mold and prevent recurrence.
                </p>
                <p>
                  As a Virginia DPOR licensed contractor (#2705155505), we handle everything from small bathroom mold to extensive whole-home remediation. We work with all major insurance carriers and provide detailed documentation to support your claim.
                </p>
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Complete Mold Remediation Services
              </h2>
              <p className="text-muted text-lg mb-8">
                From initial inspection through post-remediation clearance testing.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                      <service.icon size={24} />
                    </div>
                    <h3 className="font-display text-xl font-medium text-text mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Mold Types */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Common Mold Types in Alexandria Homes
              </h2>
              <p className="text-muted text-lg mb-8">
                Understanding the type of mold helps determine remediation approach and health risks.
              </p>

              <div className="space-y-4">
                {moldTypes.map((mold, i) => (
                  <div
                    key={i}
                    className={`border-l-4 rounded-2xl p-6 ${
                      mold.severity === 'high'
                        ? 'bg-red-50 border-red-500'
                        : mold.severity === 'medium'
                        ? 'bg-amber-50 border-amber-500'
                        : 'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium text-text mb-2 flex items-center gap-2">
                          <Leaf size={18} className={
                            mold.severity === 'high'
                              ? 'text-red-600'
                              : mold.severity === 'medium'
                              ? 'text-amber-600'
                              : 'text-blue-600'
                          } />
                          {mold.name}
                        </h3>
                        <p className="text-sm text-muted">{mold.description}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          mold.severity === 'high'
                            ? 'bg-red-100 text-red-700'
                            : mold.severity === 'medium'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {mold.severity === 'high' ? 'High Risk' : mold.severity === 'medium' ? 'Moderate' : 'Low Risk'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Health Risks */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Health Risks of Mold Exposure
              </h2>
              <p className="text-muted text-lg mb-8">
                Mold exposure can cause serious health issues, especially for vulnerable populations.
              </p>

              <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {healthRisks.map((risk, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <AlertTriangle size={18} className="text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-red-900">{risk}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-red-200">
                  <p className="text-sm text-red-800">
                    <strong>High-Risk Groups:</strong> Children, elderly, pregnant women, and individuals with asthma, allergies, or compromised immune systems are especially vulnerable to mold-related health issues.
                  </p>
                </div>
              </div>
            </section>

            {/* Remediation Process */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Our Mold Remediation Process
              </h2>
              <p className="text-muted text-lg mb-8">
                EPA-compliant protocol developed over 18+ years serving Alexandria homeowners.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Inspection & Assessment",
                    description: "Certified inspector examines visible mold, moisture sources, and hidden growth areas using thermal imaging and moisture meters."
                  },
                  {
                    step: "2",
                    title: "Mold Testing & Lab Analysis",
                    description: "Air and surface samples collected and analyzed by accredited labs to identify mold species and concentration levels."
                  },
                  {
                    step: "3",
                    title: "Containment Setup",
                    description: "Physical barriers and negative air pressure systems isolate affected areas to prevent spore spread during removal."
                  },
                  {
                    step: "4",
                    title: "Air Filtration",
                    description: "HEPA air scrubbers continuously filter airborne spores, removing 99.97% of particles 0.3 microns or larger."
                  },
                  {
                    step: "5",
                    title: "Mold Removal & Cleaning",
                    description: "EPA-approved antifungal and antimicrobial treatments applied. Contaminated materials removed and properly disposed of."
                  },
                  {
                    step: "6",
                    title: "Drying & Dehumidification",
                    description: "Complete moisture removal to eliminate conditions that allow mold regrowth. Relative humidity reduced below 60%."
                  },
                  {
                    step: "7",
                    title: "Post-Remediation Testing",
                    description: "Independent clearance testing confirms successful remediation and safe air quality before reoccupancy."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-text mb-2">{item.title}</h3>
                        <p className="text-sm text-muted">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Areas */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Alexandria Areas We Serve
              </h2>

              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {neighborhoods.map((neighborhood, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-text">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span>{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Why Choose Flood Doctor for Mold Remediation
              </h2>

              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Certified Mold Specialists",
                      description: "IICRC Advanced Microbial Remediation Technician (AMRT) certified with specialized training in toxic mold removal."
                    },
                    {
                      title: "EPA-Compliant Protocols",
                      description: "We follow EPA mold remediation standards and IICRC S520 guidelines for safe, effective mold removal."
                    },
                    {
                      title: "Lab-Verified Results",
                      description: "All testing performed by accredited third-party labs. Post-remediation clearance ensures safe air quality."
                    },
                    {
                      title: "Historic Home Expertise",
                      description: "Specialized experience with Old Town Alexandria's plaster walls, wood lath, and preservation requirements."
                    },
                    {
                      title: "Insurance Coordination",
                      description: "We document mold source and damage timeline to maximize insurance coverage. Direct billing available."
                    },
                    {
                      title: "Lifetime Mold Warranty",
                      description: "When we address moisture sources and you follow prevention guidelines, mold won't return in remediated areas."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-text mb-1">{item.title}</h3>
                        <p className="text-sm text-muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Mold Removal FAQ"
                subtitle="Common questions about mold remediation in Alexandria, VA"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* CTA Card */}
              <div className="bg-emerald-600 rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

                <h3 className="font-display text-2xl font-medium mb-4 relative z-10">
                  Free Mold Inspection
                </h3>
                <p className="text-emerald-100 mb-6 relative z-10">
                  Certified mold inspector will assess your Alexandria property and provide detailed findings.
                </p>

                <Button
                  href="tel:7036650505"
                  variant="secondary"
                  fullWidth
                  className="bg-white text-emerald-700 border-none hover:bg-emerald-50 mb-6"
                >
                  <Phone size={20} className="mr-2" />
                  (703) 665-0505
                </Button>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3 text-sm">
                    <FlaskConical size={18} className="shrink-0" />
                    <span>Lab-verified testing available</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield size={18} className="shrink-0" />
                    <span>IICRC certified technicians</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="shrink-0" />
                    <span>EPA-compliant removal</span>
                  </div>
                </div>
              </div>

              {/* Warning Signs */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h4 className="font-medium text-text mb-4">Signs You Have Mold</h4>
                <div className="space-y-3 text-sm">
                  {[
                    "Visible growth (any color)",
                    "Musty or earthy odor",
                    "Water stains on walls/ceiling",
                    "Peeling wallpaper or paint",
                    "Increased allergy symptoms",
                    "Condensation on windows"
                  ].map((sign, i) => (
                    <div key={i} className="flex items-start gap-2 text-muted">
                      <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                      {sign}
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4">Certifications</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted">IICRC AMRT Certified</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted">VA DPOR #2705155505</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted">EPA Lead-Safe Certified</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted">Fully Insured</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Don't Let Mold Compromise Your Alexandria Home
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Professional mold remediation protects your family's health and your property value. Call now for a free inspection.
          </p>
          <Button
            href="tel:7036650505"
            variant="secondary"
            size="lg"
            className="bg-white text-emerald-700 border-none hover:bg-emerald-50"
          >
            <Phone size={20} className="mr-2" />
            Call (703) 665-0505 Now
          </Button>
        </div>
      </div>

    </main>
  );
};

export default AlexandriaMoldRemoval;
