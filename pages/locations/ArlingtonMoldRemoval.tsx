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
  MapPin,
  CheckCircle2,
  AlertCircle,
  Home,
  AlertTriangle,
  Award,
  Wind,
  Search,
  Trash2,
  ArrowRight,
  FlaskConical
} from 'lucide-react';

const ArlingtonMoldRemoval: React.FC = () => {
  const faqs = [
    {
      question: "How much does mold removal cost in Arlington, VA?",
      answer: "Mold removal costs in Arlington typically range from $1,500 to $6,000 depending on the extent of contamination, affected square footage, and location of mold growth. Small areas under 100 sq ft might cost $1,500-$3,000, while extensive mold in multiple rooms or HVAC systems can exceed $10,000. We provide free mold inspections and transparent estimates for all Arlington properties."
    },
    {
      question: "Do you offer mold testing and inspection in Arlington?",
      answer: "Yes, we provide comprehensive mold inspections throughout Arlington including Ballston, Clarendon, Rosslyn, Crystal City, and Pentagon City. Our certified inspectors use moisture meters, thermal imaging, and air quality testing to identify all mold growth—including hidden mold in wall cavities, crawl spaces, and attics. Testing helps us create an accurate remediation plan."
    },
    {
      question: "Is mold removal covered by homeowners insurance in Virginia?",
      answer: "Mold coverage depends on the cause. If mold results from a covered peril (like a sudden burst pipe), most Arlington homeowners insurance policies will cover remediation. However, mold from gradual leaks or maintenance neglect is typically excluded. We work with your insurance carrier to document the cause and maximize coverage when applicable."
    },
    {
      question: "How long does mold remediation take in Arlington homes?",
      answer: "Most Arlington mold remediation projects take 3-7 days depending on the extent of contamination. Small, contained areas might be completed in 1-2 days, while whole-house remediation with HVAC cleaning can take up to two weeks. We provide detailed timelines during your initial inspection."
    },
    {
      question: "What are signs of mold in my Arlington home?",
      answer: "Common signs include musty odors, visible black or green spots on walls/ceilings, water stains, peeling paint, warped floors, condensation on windows, and allergy symptoms that worsen indoors. Arlington's humid climate makes basements, bathrooms, and crawl spaces particularly susceptible. If you suspect mold, call for a professional inspection."
    },
    {
      question: "Can I remove mold myself in Arlington?",
      answer: "DIY mold removal is only safe for very small areas (under 10 sq ft) of surface mold. Larger contamination requires professional remediation with containment barriers, negative air pressure, PPE, and proper disposal. Improper DIY attempts often spread mold spores throughout your home, making the problem worse and more expensive to fix."
    },
    {
      question: "Are your mold remediation technicians certified in Virginia?",
      answer: "Yes, all our mold remediation technicians hold IICRC Applied Microbial Remediation certification and follow EPA and IICRC S520 protocols. We're licensed and insured to perform mold remediation throughout Arlington County and Northern Virginia. Our certifications are renewed annually through continuing education."
    },
    {
      question: "Do you guarantee your mold removal work in Arlington?",
      answer: "Yes, we guarantee that treated areas will be free of visible mold and meet clearance testing standards. After remediation, we conduct post-remediation verification (clearance testing) to confirm successful removal. We also provide recommendations to prevent future mold growth and offer moisture control solutions."
    }
  ];



  const remediationProcess = [
    {
      icon: Search,
      title: "Inspection & Testing",
      description: "Comprehensive mold inspection with moisture mapping, air quality testing, and thermal imaging to locate all contamination"
    },
    {
      icon: Shield,
      title: "Containment",
      description: "Physical barriers and negative air pressure prevent mold spores from spreading to unaffected areas during removal"
    },
    {
      icon: Trash2,
      title: "Removal & Cleaning",
      description: "HEPA vacuuming, antimicrobial treatment, and removal of contaminated porous materials (drywall, insulation, carpet)"
    },
    {
      icon: FlaskConical,
      title: "Clearance Testing",
      description: "Post-remediation air quality testing confirms successful mold removal and safe re-occupancy"
    }
  ];

  const schema = generateLocationPageSchema(
    { name: 'Arlington', address: { addressLocality: 'Arlington', addressRegion: 'VA', addressCountry: 'US' } },
    [{ label: 'Locations', path: '/locations/' }, { label: 'Arlington Mold Removal', path: '/locations/arlington-mold-removal/' }],
    faqs
  );

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
        title="Mold Removal in Arlington, VA"
        description="Professional mold removal and remediation in Arlington, VA. Serving Ballston, Clarendon, Rosslyn & all Arlington neighborhoods. IICRC certified. Call (877) 497-0007."
        schema={schema}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white pt-12 pb-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Locations', path: '/locations/' },
              { label: 'Arlington Mold Removal', path: '#' }
            ]}
            className="text-white/80"
          />

          <div className="max-w-3xl mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin size={14} /> Arlington, Virginia
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-6 leading-tight">
              Mold Removal Services in Arlington, VA
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              IICRC-certified mold remediation serving all Arlington neighborhoods. Professional testing, safe removal, and guaranteed results. Protect your family's health with expert mold removal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="tel:8774970007" variant="secondary" size="lg" className="bg-white text-[#1a73e8] border-none hover:bg-blue-50">
                <Phone size={20} className="mr-2" />
                (877) 497-0007
              </Button>
              <Button to="/request/" variant="secondary" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Schedule Inspection
              </Button>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Award size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">IICRC Certified</div>
              <div className="text-xs text-blue-100">Mold remediation specialists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <FlaskConical size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">Lab Testing</div>
              <div className="text-xs text-blue-100">Professional air quality analysis</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <Shield size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">EPA Protocols</div>
              <div className="text-xs text-blue-100">Safe, compliant removal</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <CheckCircle2 size={24} className="text-white mb-2" />
              <div className="text-sm font-medium text-white mb-1">Guaranteed Work</div>
              <div className="text-xs text-blue-100">Clearance testing included</div>
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
                Arlington's Trusted Mold Remediation Experts
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Mold growth in your Arlington home isn't just unsightly—it's a health hazard that requires professional remediation. Whether you've discovered mold in your Ballston townhome's basement, noticed musty odors in your Clarendon condo, or found water damage in your Rosslyn apartment, Flood Doctor provides certified mold removal services throughout Arlington County.
                </p>
                <p>
                  Arlington's proximity to the Potomac River and humid Mid-Atlantic climate creates ideal conditions for mold growth. Basements, crawl spaces, bathrooms, and HVAC systems are particularly vulnerable. Our IICRC-certified technicians understand local mold challenges and use EPA-approved protocols to safely remove contamination and prevent recurrence.
                </p>
                <p>
                  We serve all Arlington neighborhoods including Crystal City, Pentagon City, Columbia Pike, Shirlington, and beyond. Call <a href="tel:8774970007" className="text-[#1a73e8] font-medium hover:underline">(877) 497-0007</a> for a free mold inspection and transparent estimate.
                </p>
              </div>
            </section>

            {/* Remediation Process */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Our Mold Remediation Process
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {remediationProcess.map((step, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#1a73e8] transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a73e8] flex items-center justify-center shrink-0">
                        <step.icon size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-[#1a73e8] bg-blue-50 px-2 py-0.5 rounded-full">STEP {i + 1}</span>
                        </div>
                        <h3 className="font-medium text-gray-900 text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Warning Signs */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Signs You Need Mold Removal in Arlington
              </h2>
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                <div className="flex items-start gap-3 mb-6">
                  <AlertTriangle size={24} className="text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-amber-900 mb-2 text-lg">
                      Don't Ignore These Warning Signs
                    </h3>
                    <p className="text-amber-800 text-sm">
                      Call for a professional mold inspection if you notice any of these symptoms:
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 ml-9">
                  {[
                    "Musty or earthy odors",
                    "Visible black, green, or white spots",
                    "Water stains on walls or ceilings",
                    "Peeling or bubbling paint",
                    "Warped or discolored drywall",
                    "Condensation on windows",
                    "Allergy symptoms indoors",
                    "Previous water damage",
                    "High humidity (above 60%)",
                    "Persistent dampness"
                  ].map((sign, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-800">
                      <AlertCircle size={16} className="text-amber-600 shrink-0" />
                      <span className="text-sm">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Service Areas */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-medium text-gray-900 mb-6">
                Mold Removal Throughout Arlington County
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We provide professional mold remediation services in all Arlington neighborhoods:
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
                Why Arlington Homeowners Trust Us for Mold Removal
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "IICRC Certified Specialists",
                    description: "Every technician holds Applied Microbial Remediation certification and follows EPA/IICRC S520 mold remediation standards."
                  },
                  {
                    title: "Comprehensive Testing",
                    description: "We use moisture meters, thermal imaging, and laboratory air quality analysis to identify all mold—including hidden growth in walls and HVAC systems."
                  },
                  {
                    title: "Safe Containment Protocols",
                    description: "Physical barriers, negative air pressure, and HEPA filtration prevent mold spores from spreading during remediation."
                  },
                  {
                    title: "Complete Removal",
                    description: "We don't just clean surface mold. Contaminated materials (drywall, insulation, carpet) are properly removed and disposed of according to EPA guidelines."
                  },
                  {
                    title: "Clearance Testing Included",
                    description: "Post-remediation verification ensures successful mold removal and confirms your home is safe for re-occupancy."
                  },
                  {
                    title: "Moisture Control Solutions",
                    description: "We identify and fix the moisture source that caused mold growth—dehumidification, waterproofing, ventilation improvements, and drainage solutions."
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

            {/* Health Impact */}
            <section className="mb-16 bg-red-50 rounded-2xl p-8 border border-red-200">
              <h2 className="font-display text-2xl font-medium text-red-900 mb-4">
                Health Risks of Mold Exposure
              </h2>
              <div className="prose prose-sm max-w-none text-red-900 leading-relaxed space-y-3">
                <p>
                  Mold exposure can cause serious health problems, particularly for children, elderly individuals, and those with respiratory conditions or weakened immune systems. Common symptoms include:
                </p>
                <ul className="space-y-2">
                  <li>Respiratory issues (coughing, wheezing, difficulty breathing)</li>
                  <li>Allergic reactions (sneezing, runny nose, skin rashes)</li>
                  <li>Asthma attacks or worsening asthma symptoms</li>
                  <li>Eye, nose, and throat irritation</li>
                  <li>Headaches and fatigue</li>
                  <li>Immune system suppression</li>
                </ul>
                <p className="font-medium">
                  If you or your family members are experiencing these symptoms and you suspect mold, call for professional testing immediately. Don't wait—mold problems only get worse over time.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <GoogleStyleFAQ
                data={faqs}
                title="Mold Removal FAQ"
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
                    <span className="text-sm font-bold uppercase tracking-wide">Free Inspection</span>
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-2">
                    Schedule Mold Testing
                  </h3>
                  <p className="text-blue-100 text-sm mb-6">
                    Professional mold inspection with air quality testing. Same-day service available throughout Arlington.
                  </p>

                  <Button href="tel:8774970007" variant="secondary" fullWidth className="bg-white text-[#1a73e8] border-none hover:bg-blue-50 mb-4">
                    <Phone size={18} className="mr-2" />
                    (877) 497-0007
                  </Button>

                  <div className="text-xs text-blue-100 text-center">
                    IICRC certified • EPA protocols
                  </div>
                </div>
              </div>

              {/* Mold Facts */}
              <div className="bg-gray-50 rounded-[24px] p-6 border border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle size={18} className="text-[#1a73e8]" />
                  Mold Facts
                </h4>
                <div className="space-y-4 text-sm text-gray-700">
                  <div className="pb-3 border-b border-gray-200">
                    <div className="font-medium text-gray-900 mb-1">Growth Speed</div>
                    <div className="text-gray-600">Mold can start growing within 24-48 hours of water exposure</div>
                  </div>
                  <div className="pb-3 border-b border-gray-200">
                    <div className="font-medium text-gray-900 mb-1">Hidden Danger</div>
                    <div className="text-gray-600">Most mold grows in hidden areas: walls, crawl spaces, HVAC ducts</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Health Risk</div>
                    <div className="text-gray-600">Can cause respiratory issues and allergic reactions</div>
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
                    <span className="text-gray-700">IICRC Applied Microbial Remediation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">EPA/IICRC S520 Protocols</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Licensed & Insured in Virginia</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lab-Certified Air Quality Testing</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white border border-gray-100 rounded-[24px] p-6">
                <h4 className="font-medium text-gray-900 mb-4">Related Services</h4>
                <div className="space-y-3">
                  <a href="/water-damage-restoration-arlington-va/" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#1a73e8] transition-colors group">
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#1a73e8]" />
                    Arlington Water Damage Restoration
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
            Protect Your Family from Mold
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            IICRC-certified mold remediation. Safe, guaranteed removal. Free inspection. Call now.
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

export default ArlingtonMoldRemoval;
