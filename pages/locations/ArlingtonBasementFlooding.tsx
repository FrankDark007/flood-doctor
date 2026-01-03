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
  Wrench,
  Layers,
  TrendingDown,
  ArrowRight,
  Hammer,
  ShieldCheck
} from 'lucide-react';

const ArlingtonBasementFlooding: React.FC = () => {
  const faqs = [
    {
      question: "What causes basement flooding in Arlington, VA homes?",
      answer: "Arlington basement flooding is commonly caused by heavy rainfall overwhelming drainage systems, foundation cracks, failed sump pumps, sewer backups, broken water heaters, leaking HVAC condensate lines, and improper grading around the foundation. Arlington's clay-heavy soil and proximity to waterways like Four Mile Run increase flooding risk during severe weather."
    },
    {
      question: "How much does basement flooding repair cost in Arlington?",
      answer: "Basement flooding repair costs in Arlington typically range from $3,000 to $15,000 depending on water depth, contamination level, basement size, and affected materials. Minor flooding with clean water might cost $2,000-$4,000, while extensive sewage flooding in a finished basement can exceed $20,000. We provide free estimates and work with insurance to minimize your costs."
    },
    {
      question: "Is basement flooding covered by homeowners insurance in Virginia?",
      answer: "Coverage depends on the cause. Sudden internal flooding (burst pipes, water heater failure) is usually covered by standard homeowners insurance. External flooding from storms or groundwater typically requires separate flood insurance through FEMA. Sewer backup coverage is often an optional add-on. We work with both flood and homeowners insurance carriers."
    },
    {
      question: "How quickly can you respond to basement flooding in Arlington?",
      answer: "We provide 24/7 emergency response to basement flooding throughout Arlington with typical arrival times of 60-90 minutes. Our teams serve all neighborhoods including Ballston, Clarendon, Rosslyn, Crystal City, Pentagon City, and surrounding areas. Call (877) 497-0007 anytime for immediate dispatch."
    },
    {
      question: "Can you repair basement flooding damage permanently?",
      answer: "Yes. Beyond emergency water removal and drying, we offer permanent solutions including foundation waterproofing, sump pump installation and repair, French drain systems, exterior drainage improvements, crack sealing, and vapor barrier installation. Our goal is to prevent future flooding, not just clean up after it happens."
    },
    {
      question: "How long does basement flooding cleanup take in Arlington?",
      answer: "Emergency water extraction typically takes 1-2 days. Structural drying requires 3-7 days depending on water depth and materials affected. Complete restoration including repairs and waterproofing can take 2-4 weeks. We provide detailed timelines during your initial assessment."
    },
    {
      question: "Should I try to clean up basement flooding myself?",
      answer: "No. Basement flooding often involves contaminated water (especially if sewage-related), electrical hazards, and structural concerns. Professional equipment is necessary for complete water removal and drying. Improper cleanup leads to mold growth, structural damage, and health risks. Always call professionals for basement flooding."
    },
    {
      question: "Do you handle sewage backup in Arlington basements?",
      answer: "Yes, we're fully equipped and certified to handle Category 3 water (sewage and contaminated flood water) in basements. Our technicians use full PPE, EPA-approved antimicrobials, proper containment, and safe disposal methods. Sewage cleanup requires specialized protocols—never attempt this yourself."
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
    "name": "Flood Doctor Basement Flooding Repair - Arlington, VA",
    "image": "https://flood.doctor/logo.png",
    "@id": "https://arlington.flood.doctor/basement-flooding",
    "url": "https://arlington.flood.doctor/basement-flooding",
    "telephone": "(877) 497-0007",
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
    "areaServed": {
      "@type": "City",
      "name": "Arlington",
      "containedInPlace": {
        "@type": "State",
        "name": "Virginia"
      }
    }
  };

  const services = [
    {
      icon: Droplets,
      title: "Emergency Water Removal",
      description: "Rapid extraction of standing water using truck-mounted pumps and portable extractors"
    },
    {
      icon: Layers,
      title: "Structural Drying",
      description: "Industrial dehumidifiers and air movers completely dry walls, floors, and ceilings"
    },
    {
      icon: Wrench,
      title: "Sump Pump Services",
      description: "Installation, repair, and backup system setup to prevent future flooding"
    },
    {
      icon: ShieldCheck,
      title: "Foundation Waterproofing",
      description: "Interior and exterior waterproofing to permanently prevent basement water intrusion"
    }
  ];

  const preventionSolutions = [
    {
      title: "Sump Pump Installation",
      description: "Primary and battery backup systems to remove water before it floods your basement"
    },
    {
      title: "Foundation Waterproofing",
      description: "Interior sealants, exterior membranes, and vapor barriers to block water entry"
    },
    {
      title: "French Drain Systems",
      description: "Interior and exterior drainage systems to redirect groundwater away from your foundation"
    },
    {
      title: "Crack Repair & Sealing",
      description: "Permanent repair of foundation cracks using hydraulic cement and epoxy injection"
    },
    {
      title: "Grading & Drainage",
      description: "Exterior grading improvements and downspout extensions to direct water away from your home"
    },
    {
      title: "Backup Water Alarms",
      description: "Smart water detection systems that alert you to flooding before major damage occurs"
    }
  ];

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

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Basement Flooding Repair in Arlington, VA | 24/7 Emergency Service"
        description="Expert basement flooding repair in Arlington, VA. Emergency water removal, structural drying, waterproofing & permanent solutions. Call (877) 497-0007 now."
        schema={[faqSchema, localBusinessSchema]}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'Arlington Basement Flooding', path: '#' }
            ]}
            className="text-white/80"
          />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} /> Arlington, Virginia
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-6 leading-tight">
              Basement Flooding Repair in Arlington, VA
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              24/7 emergency basement flooding services in Arlington. Rapid water extraction, complete drying, and permanent waterproofing solutions. IICRC certified. Prevent future flooding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
                <Phone size={20} className="mr-2" />
                (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Get Free Estimate
              </Button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Clock size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">24/7 Emergency</div>
              <div className="text-xs text-blue-100">60-90 min response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Award size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">IICRC Certified</div>
              <div className="text-xs text-blue-100">Licensed specialists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <ShieldCheck size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">Waterproofing</div>
              <div className="text-xs text-blue-100">Permanent solutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Shield size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">Insurance Help</div>
              <div className="text-xs text-blue-100">Direct billing available</div>
            </div>
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
                Arlington's Basement Flooding Experts
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  A flooded basement is more than an inconvenience—it's a threat to your home's foundation, structural integrity, and your family's health. Whether you're dealing with a minor seep in your Ballston basement or catastrophic flooding in your Clarendon townhome, Flood Doctor provides comprehensive basement flooding services throughout Arlington County.
                </p>
                <p>
                  Arlington's location along the Potomac River, clay-heavy soil composition, and aging infrastructure make basement flooding a common problem. From historic neighborhoods like Lyon Village to modern developments in Crystal City and Pentagon City, we've helped thousands of Arlington homeowners recover from basement flooding and prevent recurrence.
                </p>
                <p>
                  Our IICRC-certified team provides complete basement flooding solutions: emergency water extraction, structural drying, mold prevention, and permanent waterproofing. We don't just clean up the mess—we fix the underlying problem so it doesn't happen again. Call <a href="tel:8774970007" className="text-[#1a73e8] font-medium hover:underline">(877) 497-0007</a> for 24/7 emergency service.
                </p>
              </div>
            </section>

            {/* Services */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Complete Basement Flooding Services
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

            {/* Common Causes */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Common Causes of Basement Flooding in Arlington
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Heavy Rainfall & Storm Flooding",
                    description: "Arlington's proximity to the Potomac and Four Mile Run means severe storms can overwhelm drainage systems, causing groundwater to seep through foundations."
                  },
                  {
                    title: "Sump Pump Failure",
                    description: "Sump pumps fail from power outages, mechanical breakdown, clogged discharge lines, or being undersized for the basement. Battery backup systems prevent flooding during power loss."
                  },
                  {
                    title: "Foundation Cracks & Leaks",
                    description: "Settlement, hydrostatic pressure, and freeze-thaw cycles create foundation cracks. Even hairline cracks can allow significant water intrusion during heavy rain."
                  },
                  {
                    title: "Sewer & Drain Backups",
                    description: "When Arlington's sewer system becomes overwhelmed during storms, raw sewage can back up through basement drains—a hazardous Category 3 water emergency."
                  },
                  {
                    title: "Poor Drainage & Grading",
                    description: "Improper grading around the foundation or clogged gutters direct water toward your basement instead of away from it."
                  },
                  {
                    title: "Failed Water Heaters & Appliances",
                    description: "Water heaters, washing machines, and HVAC systems in basements can fail catastrophically, releasing hundreds of gallons."
                  }
                ].map((cause, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-xs mt-1">
                      <TrendingDown size={14} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{cause.title}</h3>
                      <p className="text-sm text-gray-600">{cause.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Prevention Solutions */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Permanent Basement Waterproofing Solutions
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Don't just fix the damage—prevent it from happening again. We offer comprehensive waterproofing:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {preventionSolutions.map((solution, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                    <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1 text-sm">{solution.title}</h3>
                      <p className="text-xs text-gray-600">{solution.description}</p>
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
                    What to Do When Your Basement Floods
                  </h2>
                  <p className="text-amber-800">
                    Take these immediate steps to minimize damage and ensure safety:
                  </p>
                </div>
              </div>
              <ol className="space-y-3 ml-9">
                <li className="text-gray-800">
                  <span className="font-medium">Safety first:</span> Don't enter a flooded basement if water is near electrical outlets or you suspect electrical hazards
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Call for help:</span> <a href="tel:8774970007" className="text-[#1a73e8] font-bold hover:underline">(877) 497-0007</a> — our 24/7 emergency team will dispatch immediately
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Shut off power:</span> Turn off electricity to the basement at your breaker panel if you can do so safely from outside the flooded area
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Stop water source:</span> If flooding is from a broken pipe or appliance, shut off the water supply
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Document damage:</span> Take photos and video for your insurance claim before any cleanup begins
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Remove valuables:</span> If safe, move important items to upper floors
                </li>
                <li className="text-gray-800">
                  <span className="font-medium">Don't delay:</span> Every hour increases damage, mold risk, and costs
                </li>
              </ol>
            </section>

            {/* Service Areas */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Basement Flooding Services Throughout Arlington
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We provide emergency and preventive basement flooding services in all Arlington neighborhoods:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={16} className="text-[#1a73e8] shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Why Arlington Homeowners Trust Us for Basement Flooding
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Complete Solutions, Not Just Cleanup",
                    description: "We don't just remove water—we identify the cause and implement permanent solutions (waterproofing, sump pumps, drainage) to prevent recurrence."
                  },
                  {
                    title: "IICRC Certified Specialists",
                    description: "Our technicians hold Water Damage Restoration and Applied Structural Drying certifications. We follow industry best practices for safe, effective restoration."
                  },
                  {
                    title: "Advanced Equipment",
                    description: "Truck-mounted extractors, commercial dehumidifiers, thermal imaging, and moisture meters ensure complete water removal and drying."
                  },
                  {
                    title: "Mold Prevention Expertise",
                    description: "Basements are high-risk for mold. We use antimicrobial treatments and continuous monitoring to prevent mold growth during and after drying."
                  },
                  {
                    title: "Insurance Claim Support",
                    description: "We work with homeowners and flood insurance carriers, document damage thoroughly, and use Xactimate for accurate estimates and faster claim approval."
                  },
                  {
                    title: "One Company, Start to Finish",
                    description: "From emergency extraction through final waterproofing and reconstruction, one team handles your entire project. No handoffs, no confusion."
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

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Basement Flooding FAQ"
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
                    Basement Flooded?
                  </h3>
                  <p className="text-blue-100 text-sm mb-6">
                    Emergency water removal and permanent waterproofing solutions. Call now for immediate help.
                  </p>

                  <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-[#1a73e8] border-none hover:bg-blue-50 mb-4">
                    <Phone size={18} className="mr-2" />
                    (877) 497-0007
                  </Button>

                  <div className="text-xs text-blue-100 text-center">
                    60-90 min response • IICRC certified
                  </div>
                </div>
              </div>

              {/* Cost Estimate */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Hammer size={18} className="text-[#1a73e8]" />
                  Typical Costs
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Minor flooding cleanup</span>
                    <span className="font-medium text-gray-900">$2K-$4K</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Moderate flooding + drying</span>
                    <span className="font-medium text-gray-900">$5K-$10K</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Extensive damage + rebuild</span>
                    <span className="font-medium text-gray-900">$10K-$20K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Sump pump installation</span>
                    <span className="font-medium text-gray-900">$1K-$3K</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Estimates vary by damage extent. Most homeowners pay only their insurance deductible.
                </p>
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
                    <span className="text-gray-700">Waterproofing Specialists</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-gray-900 mb-4">Related Services</h4>
                <div className="space-y-3">
                  <a href="/locations/arlington-water-damage/" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a73e8] transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#1a73e8]" />
                    Arlington Water Damage Restoration
                  </a>
                  <a href="/locations/arlington-flood-cleanup/" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a73e8] transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#1a73e8]" />
                    Arlington Flood Cleanup
                  </a>
                  <a href="/locations/arlington-mold-removal/" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a73e8] transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#1a73e8]" />
                    Arlington Mold Removal
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
            Stop Basement Flooding for Good
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Emergency cleanup + permanent waterproofing solutions. Protect your home and your investment.
          </p>
          <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-green-700 border-none hover:bg-green-50">
            <Phone size={20} className="mr-2" />
            (877) 497-0007
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ArlingtonBasementFlooding;
