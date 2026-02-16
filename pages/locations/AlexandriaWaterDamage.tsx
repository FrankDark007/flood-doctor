import React from 'react';
import PageMeta from '../../components/ui/PageMeta';
import { generateLocationPageSchema } from '../../utils/schema';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import GoogleStyleFAQ from '../../components/sections/GoogleStyleFAQ';
import {
  Phone,
  Clock,
  Shield,
  Award,
  Droplets,
  Home,
  Zap,
  CheckCircle2,
  MapPin,
  Wrench,
  Users,
  FileCheck,
  AlertTriangle,
  Wind,
  Waves,
  ThermometerSnowflake
} from 'lucide-react';

const AlexandriaWaterDamage: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can you respond to water damage emergencies in Alexandria, VA?",
      answer: "We provide 24/7 emergency water damage restoration services throughout Alexandria, including Old Town, Del Ray, Kingstowne, Mount Vernon, and Belle Haven. Our average response time is 60 minutes or less. Call (703) 665-0505 immediately and we'll dispatch a certified restoration team to your location."
    },
    {
      question: "What areas of Alexandria do you serve?",
      answer: "We serve all Alexandria neighborhoods including Old Town Alexandria, Del Ray, Kingstowne, Mount Vernon, Belle Haven, Potomac Yard, Rosemont, Seminary Hill, and the West End. We also serve surrounding Northern Virginia communities including Arlington, Fairfax, and Prince William counties."
    },
    {
      question: "Does homeowners insurance cover water damage restoration in Alexandria?",
      answer: "Most Alexandria homeowners insurance policies cover sudden and accidental water damage such as burst pipes, appliance failures, and storm damage. However, gradual leaks and flood damage typically require separate coverage. We work directly with all major insurance carriers and can help document your claim."
    },
    {
      question: "How long does water damage restoration take in Alexandria homes?",
      answer: "Timeline varies based on damage severity. Emergency water extraction typically takes 3-4 hours. Structural drying takes 3-5 days depending on materials affected. Full restoration including repairs can take 1-3 weeks. We provide detailed timelines after our initial assessment."
    },
    {
      question: "What causes water damage in Alexandria, VA homes?",
      answer: "Common causes in Alexandria include burst pipes during winter freezes, aging plumbing in historic Old Town homes, basement flooding from heavy storms, sump pump failures, water heater leaks, and HVAC condensate line issues. Our team is experienced with the unique challenges of Alexandria's diverse housing stock."
    },
    {
      question: "Are you licensed and certified for water damage restoration in Virginia?",
      answer: "Yes. We hold Virginia DPOR Class-A Contractor License #2705155505, are IICRC certified in Water Damage Restoration (WRT), Applied Structural Drying (ASD), and hold all required Virginia and Alexandria business licenses. All technicians are background-checked and fully insured."
    },
    {
      question: "Can you help with water damage in historic Old Town Alexandria homes?",
      answer: "Absolutely. We specialize in restoring historic properties in Old Town Alexandria. Our team understands preservation requirements, works with historic materials, and coordinates with the Alexandria Board of Architectural Review when necessary. We've successfully restored dozens of 18th and 19th century homes."
    },
    {
      question: "Do you provide direct billing to insurance companies?",
      answer: "Yes. We work directly with all major insurance carriers serving Alexandria including State Farm, Allstate, USAA, Liberty Mutual, and Travelers. We provide Xactimate estimates, document all damage thoroughly, and can bill your insurance company directly to minimize your out-of-pocket costs."
    }
  ];

  const schema = generateLocationPageSchema(
    { name: 'Alexandria', address: { addressLocality: 'Alexandria', addressRegion: 'VA', addressCountry: 'US' } },
    [{ label: 'Locations', path: '/locations/' }, { label: 'Alexandria Water Damage', path: '/locations/alexandria-water-damage/' }],
    faqs
  );

  const services = [
    {
      icon: Droplets,
      title: "Emergency Water Extraction",
      description: "Rapid water removal using truck-mounted extractors and industrial pumps. Available 24/7 throughout Alexandria."
    },
    {
      icon: Wind,
      title: "Structural Drying & Dehumidification",
      description: "IICRC-certified structural drying protocols with thermal imaging and moisture monitoring."
    },
    {
      icon: Shield,
      title: "Mold Prevention & Remediation",
      description: "EPA-compliant mold assessment, containment, and removal to protect your Alexandria home."
    },
    {
      icon: Home,
      title: "Content Pack-Out & Storage",
      description: "Climate-controlled storage for your belongings during restoration with detailed inventory."
    },
    {
      icon: Wrench,
      title: "Complete Restoration & Repairs",
      description: "Full reconstruction services from drywall to flooring, returning your home to pre-loss condition."
    },
    {
      icon: FileCheck,
      title: "Insurance Claims Assistance",
      description: "Direct insurance billing with Xactimate estimates. We work with all major carriers."
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
    "Lincolnia",
    "Cameron Station"
  ];

  const commonCauses = [
    {
      icon: ThermometerSnowflake,
      title: "Frozen & Burst Pipes",
      description: "Winter freezes cause pipe bursts in Alexandria's older homes, especially in uninsulated crawl spaces."
    },
    {
      icon: Waves,
      title: "Basement Flooding",
      description: "Heavy storms overwhelm sump pumps and foundation drains, particularly in low-lying areas near the Potomac."
    },
    {
      icon: Home,
      title: "Aging Plumbing",
      description: "Historic Old Town homes often have outdated plumbing that fails unexpectedly."
    },
    {
      icon: AlertTriangle,
      title: "Appliance Failures",
      description: "Water heaters, washing machines, and dishwashers can leak or rupture without warning."
    }
  ];

  const trustSignals = [
    {
      icon: Award,
      text: "IICRC Certified Firm"
    },
    {
      icon: Shield,
      text: "VA DPOR #2705155505"
    },
    {
      icon: Clock,
      text: "60-Minute Response Time"
    },
    {
      icon: Users,
      text: "Serving Alexandria Since 2005"
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Water Damage Restoration Alexandria VA | 24/7 Emergency Response"
        description="Fast water damage restoration in Alexandria, VA. Serving Old Town, Del Ray, Kingstowne & all Alexandria neighborhoods. IICRC certified. Call (703) 665-0505 now."
        schema={schema}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bS0yNCAwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'Alexandria VA', path: '#' }
            ]}
            theme="dark"
          />

          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} />
              Alexandria, Virginia
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
              Water Damage Restoration in Alexandria, VA
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              24/7 emergency water damage restoration serving Old Town Alexandria, Del Ray, Kingstowne, and all Alexandria neighborhoods. IICRC certified with 60-minute response time.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button href="tel:7036650505" variant="secondary" size="lg" className="bg-white text-[#1a73e8] hover:bg-blue-50 border-none">
                <Phone size={20} className="mr-2" />
                (703) 665-0505
              </Button>
              <Button to="/request/" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Get Free Estimate
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustSignals.map((item, i) => (
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

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-20">

        {/* Emergency CTA Banner */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-red-900 mb-2">
                  Water Emergency in Alexandria?
                </h2>
                <p className="text-red-700">
                  Every minute counts. We're available 24/7 including nights, weekends, and holidays.
                </p>
              </div>
            </div>
            <Button href="tel:7036650505" variant="primary" size="lg" className="whitespace-nowrap">
              <Phone size={20} className="mr-2" />
              Call Now: (703) 665-0505
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Content Column */}
          <div className="lg:col-span-8">

            {/* Introduction */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-6">
                Alexandria's Trusted Water Damage Restoration Experts
              </h2>
              <div className="prose prose-lg max-w-none text-muted">
                <p>
                  When water damage strikes your Alexandria home, immediate professional response is critical. Flood Doctor provides comprehensive water damage restoration services throughout Alexandria, Virginia, including historic Old Town, Del Ray, Kingstowne, Mount Vernon, and Belle Haven neighborhoods.
                </p>
                <p>
                  Our IICRC-certified technicians understand the unique challenges of Alexandria's diverse housing stock—from 18th-century Old Town townhomes to modern Kingstowne developments. We respond within 60 minutes to extract water, prevent mold growth, and begin the restoration process using advanced moisture detection and drying technology.
                </p>
                <p>
                  As a Virginia DPOR Class-A licensed contractor (#2705155505), we handle everything from emergency water extraction to complete reconstruction. We work directly with all major insurance carriers, providing Xactimate estimates and documentation to streamline your claim process.
                </p>
              </div>
            </section>

            {/* Services Grid */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Comprehensive Water Damage Services in Alexandria
              </h2>
              <p className="text-muted text-lg mb-8">
                Full-service restoration from emergency response through final reconstruction.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a73e8] flex items-center justify-center mb-4">
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

            {/* Common Water Damage Causes */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Common Causes of Water Damage in Alexandria Homes
              </h2>
              <p className="text-muted text-lg mb-8">
                Alexandria's climate, aging infrastructure, and historic architecture create unique water damage risks.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {commonCauses.map((cause, i) => (
                  <div key={i} className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <cause.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-amber-900 mb-2">{cause.title}</h3>
                        <p className="text-sm text-amber-800">{cause.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Area */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Alexandria Neighborhoods We Serve
              </h2>
              <p className="text-muted text-lg mb-8">
                Fast response to every Alexandria, VA neighborhood and surrounding communities.
              </p>

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

              <div className="mt-6 text-sm text-muted">
                <p>
                  We also serve surrounding Northern Virginia communities including Arlington, Fairfax County, Prince William County, and Washington DC. If you're experiencing water damage anywhere in the DMV metro area, call (703) 665-0505 for immediate assistance.
                </p>
              </div>
            </section>

            {/* Our Process */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Our Water Damage Restoration Process
              </h2>
              <p className="text-muted text-lg mb-8">
                Systematic approach developed over 18+ years serving Alexandria homeowners.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Emergency Contact & Dispatch",
                    description: "Call (703) 665-0505 any time, day or night. We dispatch a certified crew to your Alexandria location within 60 minutes."
                  },
                  {
                    step: "2",
                    title: "Damage Assessment & Documentation",
                    description: "Comprehensive inspection using thermal imaging and moisture meters. We document all damage for insurance claims."
                  },
                  {
                    step: "3",
                    title: "Water Extraction & Removal",
                    description: "Rapid water removal using truck-mounted extractors and submersible pumps to prevent secondary damage."
                  },
                  {
                    step: "4",
                    title: "Structural Drying & Dehumidification",
                    description: "Industrial air movers and dehumidifiers create optimal drying conditions. Daily moisture monitoring ensures complete drying."
                  },
                  {
                    step: "5",
                    title: "Cleaning & Sanitization",
                    description: "EPA-registered antimicrobial treatments prevent mold growth. Contents cleaning and deodorization as needed."
                  },
                  {
                    step: "6",
                    title: "Restoration & Reconstruction",
                    description: "Complete rebuild services including drywall, flooring, painting, and trim work to restore your home to pre-loss condition."
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

            {/* Why Choose Us */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-text mb-4">
                Why Alexandria Homeowners Choose Flood Doctor
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Local Alexandria Expertise",
                      description: "Deep knowledge of Alexandria's historic homes, common water damage issues, and local building requirements."
                    },
                    {
                      title: "IICRC Certified Technicians",
                      description: "All technicians hold Water Damage Restoration (WRT) and Applied Structural Drying (ASD) certifications."
                    },
                    {
                      title: "Advanced Technology",
                      description: "Thermal imaging cameras, industrial-grade extractors, and real-time moisture monitoring systems."
                    },
                    {
                      title: "Direct Insurance Billing",
                      description: "We work with State Farm, Allstate, USAA, and all major carriers. Xactimate estimates accepted industry-wide."
                    },
                    {
                      title: "Virginia Licensed Contractor",
                      description: "VA DPOR Class-A License #2705155505. Fully insured with $2M general liability coverage."
                    },
                    {
                      title: "Transparent Pricing",
                      description: "Detailed written estimates with no hidden fees. We explain every line item and answer all your questions."
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

            {/* FAQ Section */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Frequently Asked Questions"
                subtitle="Common questions about water damage restoration in Alexandria, VA"
                className="border-none p-0"
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">

              {/* Primary CTA Card */}
              <div className="bg-[#1a73e8] rounded-3xl p-8 text-white shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

                <h3 className="font-display text-2xl font-medium mb-4 relative z-10">
                  24/7 Emergency Service
                </h3>
                <p className="text-blue-100 mb-6 relative z-10">
                  Water damage doesn't wait. Neither do we. Call now for immediate response in Alexandria.
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
                    <Clock size={18} className="shrink-0" />
                    <span>Open 24 hours, 7 days a week</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Zap size={18} className="shrink-0" />
                    <span>60-minute response guarantee</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield size={18} className="shrink-0" />
                    <span>IICRC certified restoration</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <h4 className="font-medium text-text mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[#1a73e8]" />
                  Service Coverage
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></div>
                    All Alexandria neighborhoods
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></div>
                    Arlington County
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></div>
                    Fairfax County
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></div>
                    Prince William County
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]"></div>
                    Washington DC
                  </div>
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
                    <span className="text-muted">IICRC Certified Firm</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted">EPA Lead-Safe Certified</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted">Fully Insured & Bonded</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
            Alexandria's Water Damage Restoration Experts
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't let water damage destroy your home. Our IICRC-certified team is standing by 24/7 to protect your Alexandria property.
          </p>
          <Button
            href="tel:7036650505"
            variant="secondary"
            size="lg"
            className="bg-white text-[#1a73e8] border-none hover:bg-blue-50"
          >
            <Phone size={20} className="mr-2" />
            Call (703) 665-0505 Now
          </Button>
        </div>
      </div>

    </main>
  );
};

export default AlexandriaWaterDamage;
