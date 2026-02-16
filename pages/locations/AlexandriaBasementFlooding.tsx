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
  Droplets,
  Wind,
  Home,
  Wrench,
  CloudRain,
  Zap,
  FileText,
  Camera,
  PackageX,
  CircuitBoard,
  ThermometerSnowflake
} from 'lucide-react';

const AlexandriaBasementFlooding: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you respond to basement flooding in Alexandria, VA?",
      answer: "We provide 24/7 emergency basement flood cleanup throughout Alexandria, including Old Town, Del Ray, Kingstowne, Mount Vernon, and Belle Haven. Our crews respond within 60 minutes with submersible pumps, extractors, and industrial drying equipment. Call (703) 665-0505 immediately—basement flooding worsens exponentially each hour."
    },
    {
      question: "What causes basement flooding in Alexandria homes?",
      answer: "Common causes include heavy rainfall overwhelming drainage systems, sump pump failures during power outages, sewer backups, foundation cracks allowing groundwater intrusion, broken water heaters, washing machine failures, and frozen pipe bursts. Alexandria's clay soil and high water table increase basement flooding risk."
    },
    {
      question: "Does homeowners insurance cover basement flooding in Alexandria?",
      answer: "Coverage depends on the water source. Sudden internal failures (burst pipes, water heater leaks, appliance malfunctions) are typically covered. Groundwater seepage, sewer backups, and surface water intrusion usually require separate endorsements. Flood insurance covers rising water from outside. We document the source to maximize insurance approval."
    },
    {
      question: "How long does basement flood cleanup take?",
      answer: "Water extraction takes 4-8 hours depending on volume. Structural drying requires 5-7 days with proper air circulation. Complete restoration including drywall, flooring, and electrical repairs can take 2-4 weeks. Finished basements require longer timelines than unfinished spaces."
    },
    {
      question: "Can you save flooded basement contents and furnishings?",
      answer: "It depends on water category and exposure time. Clean water (Category 1) from supply lines allows salvage of most items. Contaminated water (Category 2/3) from sewage or ground sources requires disposal of porous materials per IICRC guidelines. We inventory everything, provide detailed documentation for insurance, and maximize salvage when safe."
    },
    {
      question: "Will my basement develop mold after flooding?",
      answer: "Without proper drying, mold can begin growing within 24-48 hours. Our IICRC-certified drying protocols use moisture meters, thermal imaging, and industrial dehumidifiers to achieve complete drying. We treat all surfaces with EPA-registered antimicrobials to prevent mold growth during the drying process."
    },
    {
      question: "Do you repair sump pumps and install backup systems?",
      answer: "Yes. As Virginia DPOR licensed contractors, we repair and replace failed sump pumps, install battery backup systems, and can add water-powered backup pumps that work during power outages. We also install basement flood alarms and automatic water shutoff systems for future protection."
    },
    {
      question: "Can you handle sewage backups in Alexandria basements?",
      answer: "Absolutely. We're certified in Category 3 water (sewage) remediation with proper personal protective equipment and EPA-registered biocidal treatments. Sewage cleanup requires complete removal of contaminated materials, professional disinfection, and air quality testing to ensure safe reoccupancy."
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
    "@id": "https://alexandria.flood.doctor/basement-flooding",
    "url": "https://alexandria.flood.doctor/basement-flooding",
    "name": "Flood Doctor - Basement Flooding Repair Alexandria VA",
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
      "name": "Basement Flooding Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Basement Water Extraction",
            "description": "24/7 rapid basement flood cleanup in Alexandria, VA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basement Structural Drying",
            "description": "Complete basement drying and moisture removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basement Restoration",
            "description": "Full basement reconstruction and waterproofing"
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
      icon: Droplets,
      title: "Emergency Water Extraction",
      description: "Submersible pumps and truck-mounted extractors remove standing basement water within hours, preventing structural damage."
    },
    {
      icon: Wind,
      title: "Basement Structural Drying",
      description: "Industrial air movers and commercial dehumidifiers dry concrete floors, walls, and framing. Moisture monitoring ensures complete drying."
    },
    {
      icon: Shield,
      title: "Sewage & Contamination Cleanup",
      description: "EPA-compliant Category 3 water removal with proper PPE, biocidal treatments, and safe disposal of contaminated materials."
    },
    {
      icon: Wrench,
      title: "Sump Pump Repair & Installation",
      description: "Repair failed pumps, install battery backup systems, and add water-powered backup pumps for power-outage protection."
    },
    {
      icon: Home,
      title: "Complete Basement Restoration",
      description: "Drywall replacement, flooring installation, electrical repairs, and painting to fully restore your finished basement."
    },
    {
      icon: CircuitBoard,
      title: "Waterproofing & Prevention",
      description: "Interior and exterior waterproofing, French drains, vapor barriers, and flood alarm installation to prevent recurrence."
    }
  ];

  const floodingCauses = [
    {
      icon: CloudRain,
      title: "Heavy Rainfall",
      description: "Alexandria's 43+ inches annual rainfall overwhelms drainage systems, causing groundwater to infiltrate basements through foundation cracks and floor drains."
    },
    {
      icon: Zap,
      title: "Sump Pump Failures",
      description: "Power outages during storms disable sump pumps. Pump mechanical failures, clogged discharge lines, and float switch malfunctions cause basement flooding."
    },
    {
      icon: PackageX,
      title: "Sewer Backups",
      description: "Municipal sewer overflows during heavy storms force sewage into basement floor drains, creating hazardous Category 3 water contamination."
    },
    {
      icon: ThermometerSnowflake,
      title: "Frozen Pipe Bursts",
      description: "Uninsulated basement pipes freeze during winter cold snaps. When they thaw or burst, thousands of gallons flood basements rapidly."
    }
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
    "Eisenhower Valley",
    "Cameron Station",
    "Carlyle"
  ];

  const preventionTips = [
    {
      title: "Install Sump Pump Backup",
      description: "Battery or water-powered backup systems keep pumps running during power outages—the most common failure point."
    },
    {
      title: "Test Sump Pump Monthly",
      description: "Pour water into sump pit to verify pump activates. Check discharge line for blockages. Replace pumps every 5-7 years."
    },
    {
      title: "Grade Property Away from Foundation",
      description: "Soil should slope 6 inches over first 10 feet. Poor grading directs rainwater toward basements instead of away."
    },
    {
      title: "Install Backflow Preventer",
      description: "One-way valves on sewer lines prevent municipal backups from entering your basement through floor drains."
    },
    {
      title: "Seal Foundation Cracks",
      description: "Even hairline cracks allow groundwater intrusion during heavy rain. Professional sealing prevents water entry."
    },
    {
      title: "Install Basement Flood Alarm",
      description: "Water sensors alert you to basement flooding immediately, allowing faster response and damage mitigation."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Basement Flooding Repair Alexandria, VA"
        description="Fast basement flood cleanup in Alexandria, VA. Emergency water extraction, drying & restoration for Old Town, Del Ray, Kingstowne & all Alexandria areas. Call (703) 665-0505."
        schema={[faqSchema, localBusinessSchema]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'Alexandria VA - Basement Flooding', path: '#' }
            ]}
            theme="dark"
          />

          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} />
              Alexandria, Virginia
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              Basement Flooding Repair in Alexandria, VA
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              24/7 emergency basement flood cleanup serving Old Town Alexandria, Del Ray, Kingstowne, and all Alexandria neighborhoods. IICRC certified with rapid extraction and drying.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button href="tel:7036650505" variant="secondary" size="lg" className="bg-white text-slate-800 hover:bg-slate-100 border-none">
                <Phone size={20} className="mr-2" />
                Emergency: (703) 665-0505
              </Button>
              <Button to="/request/" variant="outline" size="lg" className="hidden md:inline-flex border-white/30 text-white hover:bg-white/10">
                Request Service
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Zap, text: "60-Min Response" },
                { icon: Shield, text: "IICRC Certified" },
                { icon: Clock, text: "Available 24/7" }
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

        {/* Emergency Alert */}
        <div className="bg-red-50 border-l-4 border-red-600 rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <Droplets size={24} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-red-900 mb-2">
                  Basement Flooding Now?
                </h2>
                <p className="text-red-700 mb-2">
                  Don't delay. Water damages concrete, walls, electrical systems, and belongings rapidly. Mold begins in 24-48 hours.
                </p>
                <p className="text-sm text-red-600 font-medium">
                  We're available 24/7 with submersible pumps and industrial extraction equipment.
                </p>
              </div>
            </div>
            <Button href="tel:7036650505" size="lg" className="bg-red-600 text-white hover:bg-red-700 border-none whitespace-nowrap">
              <Phone size={20} className="mr-2" />
              Call Now
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-8">

            {/* Introduction */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-6">
                Professional Basement Flood Cleanup in Alexandria
              </h2>
              <div className="prose prose-lg max-w-none text-muted">
                <p>
                  Basement flooding is one of the most common and costly water damage emergencies facing Alexandria homeowners. Whether from sump pump failure, heavy rainfall, sewer backup, or burst pipes, basement flooding requires immediate professional response to prevent structural damage, electrical hazards, and mold growth.
                </p>
                <p>
                  Flood Doctor provides comprehensive emergency basement flood cleanup services throughout Alexandria, including historic Old Town, Del Ray, Kingstowne, Mount Vernon, and Belle Haven. Our IICRC-certified water damage technicians respond within 60 minutes with submersible pumps, industrial extractors, and commercial-grade drying equipment to remove water and prevent secondary damage.
                </p>
                <p>
                  Alexandria's clay soil, high water table, and proximity to the Potomac River create challenging basement moisture conditions. As Virginia DPOR licensed contractors (#2705155505), we don't just clean up basement flooding—we identify the source, repair damage, and implement waterproofing solutions to prevent recurrence.
                </p>
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Complete Basement Flooding Services
              </h2>
              <p className="text-muted text-lg mb-8">
                From emergency water removal through permanent waterproofing solutions.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
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

            {/* Common Causes */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Common Causes of Basement Flooding in Alexandria
              </h2>
              <p className="text-muted text-lg mb-8">
                Understanding flood causes helps prevent future basement water damage.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {floodingCauses.map((cause, i) => (
                  <div key={i} className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <cause.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-blue-900 mb-2">{cause.title}</h3>
                        <p className="text-sm text-blue-800">{cause.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Our Basement Flood Cleanup Process
              </h2>
              <p className="text-muted text-lg mb-8">
                Systematic emergency protocol for safe, complete basement restoration.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Emergency Response & Safety Assessment",
                    description: "We respond within 60 minutes. First priority is electrical safety—we verify power is off before entering flooded basements to prevent electrocution."
                  },
                  {
                    step: "2",
                    title: "Water Source Identification",
                    description: "We locate and stop the water source: repair sump pumps, shut off supply lines, or coordinate with city for sewer backups."
                  },
                  {
                    step: "3",
                    title: "Rapid Water Extraction",
                    description: "Submersible pumps remove standing water. Truck-mounted extractors pull water from carpeting, concrete, and porous materials."
                  },
                  {
                    step: "4",
                    title: "Content Removal & Inventory",
                    description: "We remove wet contents, photograph everything for insurance, and determine what can be salvaged versus discarded."
                  },
                  {
                    step: "5",
                    title: "Contamination Assessment",
                    description: "Water category determines cleanup protocol. Category 3 (sewage) requires complete removal of contaminated drywall and materials."
                  },
                  {
                    step: "6",
                    title: "Structural Drying",
                    description: "Industrial air movers and commercial dehumidifiers dry concrete floors, walls, and framing. Daily moisture monitoring ensures complete drying."
                  },
                  {
                    step: "7",
                    title: "Antimicrobial Treatment",
                    description: "EPA-registered antimicrobials prevent mold growth during drying. HEPA air scrubbers filter airborne contaminants."
                  },
                  {
                    step: "8",
                    title: "Restoration & Waterproofing",
                    description: "Complete rebuild: drywall, flooring, electrical, painting. We also install waterproofing systems, sump pump backups, and flood alarms to prevent recurrence."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white flex items-center justify-center shrink-0 font-bold">
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

            {/* Prevention */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Preventing Future Basement Flooding
              </h2>
              <p className="text-muted text-lg mb-8">
                Proactive measures dramatically reduce basement flooding risk in Alexandria homes.
              </p>

              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100">
                <div className="grid md:grid-cols-2 gap-6">
                  {preventionTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-text mb-1">{tip.title}</h3>
                        <p className="text-sm text-muted">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Service Areas */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Alexandria Areas We Serve
              </h2>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {neighborhoods.map((neighborhood, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-text">
                      <CheckCircle2 size={16} className="text-[#1a73e8] shrink-0" />
                      <span>{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Why Choose Flood Doctor for Basement Flooding
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Basement Flooding Specialists",
                      description: "Extensive experience with Alexandria's unique basement challenges: clay soil, high water tables, and aging drainage systems."
                    },
                    {
                      title: "Industrial Equipment Fleet",
                      description: "Submersible pumps handle 3,000+ GPH. Trailer-mounted generators ensure operation during power outages."
                    },
                    {
                      title: "Licensed Plumbing & Electrical",
                      description: "VA licensed contractors can repair sump pumps, install backup systems, and restore electrical damage—no subcontractors needed."
                    },
                    {
                      title: "Category 3 Water Certified",
                      description: "Sewage backup cleanup requires specialized training and equipment. Our technicians are certified for contaminated water removal."
                    },
                    {
                      title: "Waterproofing Solutions",
                      description: "We don't just clean up—we install interior/exterior waterproofing, French drains, and vapor barriers to prevent recurrence."
                    },
                    {
                      title: "Direct Insurance Billing",
                      description: "We work with all carriers, provide Xactimate estimates, and document water category to maximize claim approval."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#1a73e8] shrink-0 mt-0.5" />
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
                title="Basement Flooding FAQ"
                subtitle="Common questions about basement flood cleanup in Alexandria, VA"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Emergency CTA */}
              <div className="bg-[#1a73e8] rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

                <h3 className="font-display text-2xl font-medium mb-4 relative z-10">
                  Basement Flooding Emergency?
                </h3>
                <p className="text-blue-100 mb-6 relative z-10">
                  Immediate response with submersible pumps and extraction equipment. We're ready 24/7.
                </p>

                <Button
                  href="tel:7036650505"
                  variant="secondary"
                  fullWidth
                  className="bg-white text-[#1a73e8] border-none hover:bg-blue-50 mb-6"
                >
                  <Phone size={20} className="mr-2" />
                  (703) 665-0505
                </Button>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3 text-sm">
                    <Zap size={18} className="shrink-0" />
                    <span>60-minute response time</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Droplets size={18} className="shrink-0" />
                    <span>Rapid water extraction</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield size={18} className="shrink-0" />
                    <span>IICRC certified drying</span>
                  </div>
                </div>
              </div>

              {/* Immediate Actions */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h4 className="font-medium text-text mb-4">If Your Basement Is Flooding</h4>
                <div className="space-y-3 text-sm">
                  {[
                    "Turn off power at circuit breaker",
                    "Don't enter standing water",
                    "Move valuables to upper floors",
                    "Check sump pump operation",
                    "Take photos for insurance",
                    "Call (703) 665-0505 immediately"
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-muted">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Issues */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h4 className="font-medium text-amber-900 mb-4">Basement Flooding Signs</h4>
                <div className="space-y-2 text-sm text-amber-800">
                  {[
                    "Water pooling on floor",
                    "Sump pump running constantly",
                    "Musty basement odor",
                    "Efflorescence (white residue) on walls",
                    "Foundation cracks",
                    "Floor drain backing up"
                  ].map((sign, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                      <span>{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4">Licenses & Certifications</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted">VA DPOR #2705155505</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted">IICRC WRT & ASD</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted">Category 3 Water Certified</span>
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
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Don't Let Basement Flooding Damage Your Alexandria Home
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Every hour of standing water increases damage severity and mold risk. Our emergency crews are standing by 24/7 with industrial pumps and drying equipment.
          </p>
          <Button
            href="tel:7036650505"
            variant="secondary"
            size="lg"
            className="bg-white text-slate-800 border-none hover:bg-slate-100"
          >
            <Phone size={20} className="mr-2" />
            Emergency: (703) 665-0505
          </Button>
        </div>
      </div>

    </main>
  );
};

export default AlexandriaBasementFlooding;
