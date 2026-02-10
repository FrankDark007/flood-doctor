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
  Waves,
  Wind,
  Home,
  Droplets,
  CloudRain,
  Zap,
  FileText,
  Camera,
  Users,
  ThermometerSnowflake
} from 'lucide-react';

const AlexandriaFloodCleanup: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you respond to flood emergencies in Alexandria, VA?",
      answer: "We provide 24/7 emergency flood cleanup throughout Alexandria, including Old Town, Del Ray, Kingstowne, Mount Vernon, and Belle Haven. Our rapid response teams arrive within 60 minutes of your call. For active flooding emergencies, call (703) 665-0505 immediately—every minute of water exposure increases damage severity."
    },
    {
      question: "What's the difference between flood damage and water damage?",
      answer: "Flood damage is caused by rising water from outside sources (storms, river overflow, ground saturation). Water damage comes from internal sources (burst pipes, appliances). This distinction matters because standard homeowners insurance covers water damage but not flood damage—flood insurance requires a separate NFIP or private policy."
    },
    {
      question: "Does homeowners insurance cover flood cleanup in Alexandria?",
      answer: "No. Standard homeowners policies exclude flood damage. You need separate flood insurance through the National Flood Insurance Program (NFIP) or private carriers. However, water damage from burst pipes, appliance failures, or storm-driven rain through damaged roofs is typically covered by homeowners insurance."
    },
    {
      question: "What areas of Alexandria are most prone to flooding?",
      answer: "Low-lying areas near the Potomac River including Old Town waterfront, Belle Haven, Dyke Marsh, and parts of Mount Vernon are highest risk. Heavy storms can also overwhelm drainage systems in Kingstowne and Del Ray, causing localized flooding. Alexandria has designated Flood Zones A and AE requiring flood insurance for mortgaged properties."
    },
    {
      question: "Is floodwater dangerous? What contaminants does it contain?",
      answer: "Yes. Floodwater is Category 3 'black water' containing sewage, chemicals, pesticides, heavy metals, bacteria (E. coli, salmonella), and other hazardous materials. Direct contact can cause serious illness. Never wade through floodwater or attempt DIY cleanup—professional remediation with proper PPE and EPA-registered disinfectants is essential."
    },
    {
      question: "How long does flood cleanup take in Alexandria homes?",
      answer: "Timeline depends on flood severity and damage extent. Emergency water extraction takes 6-12 hours. Structural drying requires 5-10 days. Complete restoration including reconstruction can take 3-8 weeks. Historic Old Town homes may require longer due to plaster walls and preservation requirements."
    },
    {
      question: "Can you save my flooded belongings and furniture?",
      answer: "It depends on water category and exposure time. Hard, non-porous items can often be cleaned and disinfected. Porous materials (upholstered furniture, mattresses, carpeting) exposed to contaminated floodwater typically must be discarded per IICRC guidelines. We inventory, photograph, and assess all items to maximize salvage while ensuring occupant safety."
    },
    {
      question: "Do you work with flood insurance claims in Alexandria?",
      answer: "Yes. We have extensive experience with NFIP flood claims and private flood carriers. We document all damage with detailed photos, moisture readings, and Xactimate estimates. We can work directly with your insurance adjuster and provide all necessary documentation to support your claim."
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
    "@id": "https://alexandria.flood.doctor/flood-cleanup",
    "url": "https://alexandria.flood.doctor/flood-cleanup",
    "name": "Flood Doctor - Emergency Flood Cleanup Alexandria VA",
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
      "name": "Flood Cleanup Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Flood Water Extraction",
            "description": "24/7 rapid flood water removal in Alexandria, VA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flood Damage Restoration",
            "description": "Complete flood cleanup and structural drying"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sewage & Contamination Cleanup",
            "description": "Safe cleanup of contaminated floodwater"
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
      icon: Waves,
      title: "Emergency Water Extraction",
      description: "Truck-mounted extractors and submersible pumps remove standing floodwater within hours, minimizing damage progression."
    },
    {
      icon: Wind,
      title: "Structural Drying",
      description: "Industrial air movers and dehumidifiers create optimal drying conditions. Thermal imaging locates hidden moisture in walls and floors."
    },
    {
      icon: Shield,
      title: "Contamination Cleanup",
      description: "EPA-registered disinfectants and antimicrobial treatments eliminate bacteria, viruses, and other hazardous contaminants from floodwater."
    },
    {
      icon: Camera,
      title: "Damage Documentation",
      description: "Comprehensive photo documentation, moisture mapping, and detailed loss inventories for insurance claims."
    },
    {
      icon: Home,
      title: "Content Pack-Out",
      description: "Salvageable belongings moved to climate-controlled storage during restoration. Professional cleaning and deodorization."
    },
    {
      icon: FileText,
      title: "Complete Restoration",
      description: "Full reconstruction services including drywall, flooring, cabinets, and painting to restore your Alexandria home."
    }
  ];

  const floodCauses = [
    {
      icon: CloudRain,
      title: "Heavy Rainfall & Storms",
      description: "Alexandria averages 43 inches of rain annually. Intense storms overwhelm drainage systems causing flash flooding."
    },
    {
      icon: Waves,
      title: "Potomac River Overflow",
      description: "Tidal flooding and river overflow affect Old Town waterfront, Belle Haven, and low-lying areas during high water events."
    },
    {
      icon: ThermometerSnowflake,
      title: "Rapid Snowmelt",
      description: "Quick temperature rises after winter storms cause rapid runoff that exceeds drainage capacity."
    },
    {
      icon: Droplets,
      title: "Sump Pump Failures",
      description: "Power outages during storms disable sump pumps, allowing groundwater to flood basements."
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
    "Eisenhower Valley"
  ];

  const safetyWarnings = [
    {
      icon: AlertTriangle,
      warning: "Never Enter Standing Floodwater",
      description: "Floodwater may be electrically charged from downed power lines or submerged outlets."
    },
    {
      icon: AlertTriangle,
      warning: "Don't Use Contaminated Appliances",
      description: "Appliances exposed to floodwater can cause electrocution. Unplug at breaker before entry."
    },
    {
      icon: AlertTriangle,
      warning: "Avoid Contact with Sewage",
      description: "Floodwater contains raw sewage, chemicals, and biological hazards requiring PPE and professional cleanup."
    },
    {
      icon: AlertTriangle,
      warning: "Check for Structural Damage",
      description: "Flooding can compromise foundations, floors, and walls. Avoid unstable areas until inspected."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Emergency Flood Cleanup Alexandria VA | 24/7 Flood Response"
        description="Fast flood cleanup in Alexandria, VA. 24/7 emergency response for Old Town, Del Ray, Kingstowne & all Alexandria areas. IICRC certified. Call (703) 665-0505 now."
        schema={[faqSchema, localBusinessSchema]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 to-cyan-600 text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'Alexandria VA - Flood Cleanup', path: '#' }
            ]}
            theme="dark"
          />

          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} />
              Alexandria, Virginia
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              Emergency Flood Cleanup in Alexandria, VA
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              24/7 rapid response flood cleanup serving Old Town Alexandria, Del Ray, Kingstowne, and all Alexandria neighborhoods. IICRC certified with immediate dispatch.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button href="tel:7036650505" variant="secondary" size="lg" className="bg-white text-[#1a73e8] hover:bg-blue-50 border-none">
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
                { icon: Clock, text: "Available 24/7/365" }
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
                <Waves size={24} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-red-900 mb-2">
                  Active Flooding in Your Alexandria Home?
                </h2>
                <p className="text-red-700 mb-3">
                  Don't wait. Floodwater causes exponential damage every hour. Contaminated water poses serious health risks.
                </p>
                <p className="text-sm text-red-600 font-medium">
                  Available 24/7 including nights, weekends, and holidays.
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
                Professional Flood Cleanup & Restoration in Alexandria
              </h2>
              <div className="prose prose-lg max-w-none text-muted">
                <p>
                  Flooding is the most common and costly natural disaster in Alexandria, Virginia. Whether from Potomac River overflow, severe storms, or basement flooding, immediate professional response is critical to minimize damage and protect your family's health.
                </p>
                <p>
                  Flood Doctor provides comprehensive emergency flood cleanup services throughout Alexandria, including historic Old Town, Del Ray, Kingstowne, Mount Vernon, and Belle Haven. Our IICRC-certified water damage technicians respond within 60 minutes with industrial extraction equipment, structural drying systems, and EPA-approved disinfection protocols.
                </p>
                <p>
                  Floodwater is always Category 3 "black water"—contaminated with sewage, chemicals, bacteria, and hazardous materials. DIY cleanup is dangerous and ineffective. Our licensed technicians use proper personal protective equipment and professional-grade antimicrobials to safely restore your Alexandria home to pre-loss condition.
                </p>
              </div>
            </section>

            {/* Safety Warnings */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Critical Flood Safety Warnings
              </h2>
              <p className="text-muted text-lg mb-8">
                Floodwater poses immediate life-threatening hazards. Follow these safety protocols.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {safetyWarnings.map((item, i) => (
                  <div key={i} className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <item.icon size={20} className="text-red-600 shrink-0 mt-0.5" />
                      <h3 className="font-medium text-red-900">{item.warning}</h3>
                    </div>
                    <p className="text-sm text-red-700 ml-8">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Emergency Flood Cleanup Services
              </h2>
              <p className="text-muted text-lg mb-8">
                Complete flood restoration from emergency response through final reconstruction.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4">
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

            {/* Flood Causes */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Common Causes of Flooding in Alexandria
              </h2>
              <p className="text-muted text-lg mb-8">
                Alexandria's geography and climate create multiple flood risks for homeowners.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {floodCauses.map((cause, i) => (
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
                Our Flood Cleanup Process
              </h2>
              <p className="text-muted text-lg mb-8">
                Systematic emergency response protocol developed over 18+ years.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Emergency Contact & Rapid Dispatch",
                    description: "Call (703) 665-0505 any time. We dispatch an IICRC-certified crew to your Alexandria location within 60 minutes with industrial extraction equipment."
                  },
                  {
                    step: "2",
                    title: "Safety Assessment & Inspection",
                    description: "We assess structural safety, electrical hazards, and contamination levels. Document all damage with photos and moisture readings for insurance."
                  },
                  {
                    step: "3",
                    title: "Water Extraction & Removal",
                    description: "Truck-mounted extractors and submersible pumps remove standing water. Thousands of gallons can be extracted per hour."
                  },
                  {
                    step: "4",
                    title: "Contamination Cleanup",
                    description: "EPA-registered antimicrobials eliminate bacteria, viruses, and sewage contaminants. All surfaces disinfected per IICRC S500 standards."
                  },
                  {
                    step: "5",
                    title: "Structural Drying",
                    description: "Industrial air movers and dehumidifiers dry building materials. Thermal imaging locates hidden moisture. Daily monitoring ensures complete drying."
                  },
                  {
                    step: "6",
                    title: "Content Processing",
                    description: "Salvageable items cleaned, deodorized, and stored. Contaminated porous materials safely disposed of per EPA guidelines."
                  },
                  {
                    step: "7",
                    title: "Restoration & Reconstruction",
                    description: "Complete rebuild services: drywall, insulation, flooring, trim, painting, and all repairs to restore your home."
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

            {/* Service Areas */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Alexandria Neighborhoods We Serve
              </h2>

              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {neighborhoods.map((neighborhood, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-text">
                      <CheckCircle2 size={16} className="text-[#1a73e8] shrink-0" />
                      <span>{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
                <h4 className="font-medium text-amber-900 mb-2 flex items-center gap-2">
                  <MapPin size={18} />
                  High-Risk Flood Zones
                </h4>
                <p className="text-sm text-amber-800">
                  Properties in FEMA Flood Zones A and AE near the Potomac River (Old Town waterfront, Belle Haven, Dyke Marsh) are required to carry flood insurance for mortgaged properties. We have extensive experience working with NFIP and private flood carriers.
                </p>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Why Choose Flood Doctor for Emergency Flood Cleanup
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "True 24/7 Emergency Response",
                      description: "Our crews are on call around the clock. We answer the phone immediately and dispatch within 60 minutes—guaranteed."
                    },
                    {
                      title: "IICRC Certified Technicians",
                      description: "All technicians hold Water Damage Restoration (WRT) and Applied Structural Drying (ASD) certifications with Category 3 water training."
                    },
                    {
                      title: "Industrial Equipment Fleet",
                      description: "Truck-mounted extractors, trailer-mounted generators, and dozens of air movers and dehumidifiers for large-scale flooding."
                    },
                    {
                      title: "Contamination Specialists",
                      description: "Certified in sewage cleanup and biohazard remediation. We follow EPA and OSHA protocols for safe Category 3 water removal."
                    },
                    {
                      title: "Flood Insurance Experts",
                      description: "We work with NFIP and all private flood carriers. Detailed documentation and Xactimate estimates maximize claim approval."
                    },
                    {
                      title: "Historic Home Experience",
                      description: "Specialized expertise with Old Town Alexandria's historic properties, plaster walls, and architectural preservation requirements."
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
                title="Flood Cleanup FAQ"
                subtitle="Common questions about emergency flood cleanup in Alexandria, VA"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Emergency CTA */}
              <div className="bg-red-600 rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

                <div className="flex items-center gap-3 mb-4">
                  <Waves size={28} />
                  <h3 className="font-display text-2xl font-medium">
                    Flooding Now?
                  </h3>
                </div>

                <p className="text-red-100 mb-6 relative z-10">
                  Emergency crews standing by 24/7. We'll dispatch immediately to your Alexandria location.
                </p>

                <Button
                  href="tel:7036650505"
                  variant="secondary"
                  fullWidth
                  className="bg-white text-red-600 border-none hover:bg-red-50 mb-6"
                >
                  <Phone size={20} className="mr-2" />
                  Call (703) 665-0505
                </Button>

                <div className="space-y-3 relative z-10 text-sm">
                  <div className="flex items-center gap-3">
                    <Zap size={18} className="shrink-0" />
                    <span>60-minute response guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={18} className="shrink-0" />
                    <span>IICRC certified cleanup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={18} className="shrink-0" />
                    <span>Experienced crews ready now</span>
                  </div>
                </div>
              </div>

              {/* What to Do */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h4 className="font-medium text-text mb-4">If You're Flooding Now</h4>
                <div className="space-y-3 text-sm">
                  {[
                    "Evacuate if water is rising",
                    "Turn off power at breaker",
                    "Don't touch electrical items",
                    "Move valuables to higher floors",
                    "Take photos for insurance",
                    "Call (703) 665-0505 immediately"
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1a73e8] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-muted">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Coverage */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-medium text-text mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[#1a73e8]" />
                  24/7 Coverage Area
                </h4>
                <div className="space-y-2 text-sm text-muted">
                  <p>All Alexandria neighborhoods</p>
                  <p>Arlington County</p>
                  <p>Fairfax County</p>
                  <p>Prince William County</p>
                  <p>Washington DC</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Don't Let Floodwater Destroy Your Alexandria Home
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Every minute counts during a flood emergency. Our IICRC-certified teams are standing by with industrial equipment ready to deploy.
          </p>
          <Button
            href="tel:7036650505"
            variant="secondary"
            size="lg"
            className="bg-white text-[#1a73e8] border-none hover:bg-blue-50"
          >
            <Phone size={20} className="mr-2" />
            Emergency: (703) 665-0505
          </Button>
        </div>
      </div>

    </main>
  );
};

export default AlexandriaFloodCleanup;
