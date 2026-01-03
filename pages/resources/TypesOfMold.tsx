import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Shield,
  Search,
  Activity,
  Eye,
  Droplets,
  Wind
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';
import MoldIcon from '../../components/icons/MoldIcon';

const TypesOfMold: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Types of Mold Found in Homes",
    "description": "Guide to common household mold types including identification, health effects, and remediation requirements.",
    "author": {
      "@type": "Organization",
      "name": "Flood Doctor"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Flood Doctor"
    }
  };

  const commonMolds = [
    {
      name: 'Aspergillus',
      appearance: 'Yellow, green, white, gray, or brown. Powdery or cotton-like.',
      locations: ['HVAC systems', 'Walls and insulation', 'Paper and cardboard', 'Potted plant soil'],
      health: ['Allergic reactions', 'Respiratory infections', 'More dangerous for immunocompromised'],
      risk: 'Moderate',
      color: 'amber'
    },
    {
      name: 'Cladosporium',
      appearance: 'Olive-green to brown or black. Suede-like or velvety.',
      locations: ['Fabrics and upholstery', 'Wood surfaces', 'HVAC systems', 'Around windows'],
      health: ['Allergic reactions', 'Asthma trigger', 'Skin and eye irritation'],
      risk: 'Moderate',
      color: 'green'
    },
    {
      name: 'Penicillium',
      appearance: 'Blue, green, or blue-green. Fuzzy or powdery.',
      locations: ['Water-damaged materials', 'Wallpaper and drywall', 'Carpet and padding', 'HVAC ducts'],
      health: ['Strong allergic reactions', 'Chronic sinus infections', 'Can produce mycotoxins'],
      risk: 'Moderate',
      color: 'blue'
    },
    {
      name: 'Stachybotrys (Black Mold)',
      appearance: 'Black or dark greenish-black. Slimy when actively growing.',
      locations: ['Chronically wet drywall', 'Ceiling tiles', 'Wood with prolonged moisture', 'Paper products'],
      health: ['Respiratory problems', 'Chronic coughing', 'Headaches and fatigue', 'Mycotoxin production'],
      risk: 'High',
      color: 'gray'
    },
    {
      name: 'Alternaria',
      appearance: 'Dark green, brown, or gray with dark spots. Velvet-like.',
      locations: ['Showers and bathtubs', 'Under sinks', 'Around windows', 'Damp areas'],
      health: ['Upper respiratory infections', 'Allergic reactions', 'Asthma trigger'],
      risk: 'Moderate',
      color: 'emerald'
    },
    {
      name: 'Chaetomium',
      appearance: 'White to olive to brown over time. Cotton-like.',
      locations: ['Water-damaged drywall', 'Wallpaper', 'Ceiling tiles', 'Paper products'],
      health: ['Allergic reactions', 'Skin infections', 'May produce mycotoxins'],
      risk: 'Moderate-High',
      color: 'orange'
    },
  ];

  const moldComparison = [
    { type: 'Aspergillus', color: 'Yellow/green/white', locations: 'HVAC, walls', risk: 'Moderate' },
    { type: 'Cladosporium', color: 'Olive-green to brown', locations: 'Fabrics, wood', risk: 'Moderate' },
    { type: 'Penicillium', color: 'Blue/green', locations: 'Water damage', risk: 'Moderate' },
    { type: 'Stachybotrys', color: 'Black/dark green', locations: 'Chronically wet', risk: 'High' },
    { type: 'Alternaria', color: 'Dark green/brown', locations: 'Bathrooms, sinks', risk: 'Moderate' },
    { type: 'Chaetomium', color: 'White to brown', locations: 'Drywall, paper', risk: 'Moderate-High' },
  ];

  const healthSymptoms = [
    { system: 'Respiratory', symptoms: 'Coughing, wheezing, shortness of breath' },
    { system: 'Nasal', symptoms: 'Sneezing, runny nose, congestion' },
    { system: 'Eye', symptoms: 'Itching, redness, watering' },
    { system: 'Skin', symptoms: 'Rash, itching, irritation' },
    { system: 'General', symptoms: 'Headaches, fatigue, difficulty concentrating' },
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Types of Mold in Homes | Identification & Health Risks | Flood Doctor"
        description="Learn about common household mold types including black mold, Aspergillus, and Penicillium. Identification tips, health risks, and when to call professionals."
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <MoldIcon className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Homeowner Resource</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Common Types of Mold Found in Homes
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Over 100,000 mold species exist, but only a few dozen commonly appear in homes.
              Understanding these molds helps you assess potential health risks and determine
              appropriate remediation approaches.
            </p>
            <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-xl p-6">
              <p className="text-emerald-100 mb-2">
                <strong>Important:</strong> All indoor mold growth indicates a moisture problem
                that should be addressed. The specific species matters less than eliminating the
                moisture source and removing the mold.
              </p>
              <p className="text-emerald-200">
                Concerned about mold? Call <a href="tel:8774970007" className="underline font-bold">(877) 497-0007</a> for a free inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="py-12 bg-emerald-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Mold Identification Guide
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Mold Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Color</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Common Locations</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Health Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {moldComparison.map((mold, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{mold.type}</td>
                    <td className="py-3 px-4 text-gray-600">{mold.color}</td>
                    <td className="py-3 px-4 text-gray-600">{mold.locations}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        mold.risk === 'High' ? 'bg-red-100 text-red-700' :
                        mold.risk === 'Moderate-High' ? 'bg-orange-100 text-orange-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {mold.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Mold Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Six Most Common Household Molds
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {commonMolds.map((mold, idx) => (
              <div key={idx} className={`bg-${mold.color}-50 border border-${mold.color}-200 rounded-xl p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{idx + 1}. {mold.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    mold.risk === 'High' ? 'bg-red-100 text-red-700' :
                    mold.risk === 'Moderate-High' ? 'bg-orange-100 text-orange-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {mold.risk} Risk
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">Appearance:</p>
                  <p className="text-gray-600 text-sm">{mold.appearance}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Where Found:</p>
                    <ul className="space-y-1">
                      {mold.locations.map((loc, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <Search className="w-3 h-3 text-gray-400" />
                          {loc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Health Effects:</p>
                    <ul className="space-y-1">
                      {mold.health.map((effect, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <Activity className="w-3 h-3 text-red-400" />
                          {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Black Mold Truth */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            The Truth About "Black Mold"
          </h2>

          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-lg mb-4">What "Black Mold" Actually Means</h3>
            <p className="text-gray-300 mb-4">
              "Black mold" commonly refers to Stachybotrys chartarum, but many mold species appear black:
            </p>
            <div className="grid md:grid-cols-2 gap-2">
              {['Cladosporium', 'Aspergillus niger', 'Ulocladium', 'Chaetomium', 'Alternaria'].map((m, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400">
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                  {m} (can be black)
                </div>
              ))}
            </div>
            <p className="text-amber-400 font-semibold mt-4">
              Color alone does not identify mold species or toxicity.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Is Black Mold Dangerous?</h3>
            <p className="text-gray-300 mb-4">
              Stachybotrys produces mycotoxins that can cause health problems, but:
            </p>
            <ul className="space-y-2 text-gray-300">
              {[
                'All mold can cause health issues',
                '"Black" colored mold isn\'t necessarily Stachybotrys',
                'The amount of mold matters more than species',
                'Individual sensitivity varies greatly',
                'Any indoor mold should be removed',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 p-6 bg-emerald-900/50 border border-emerald-700 rounded-xl">
            <h3 className="font-bold text-emerald-400 mb-2">Bottom Line</h3>
            <p className="text-gray-300">
              Don't panic about "black mold" specifically, but do take all mold seriously.
              The approach is the same: <strong>Fix the moisture source → Remove the mold → Prevent recurrence</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Health Effects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Activity className="w-8 h-8 text-red-600" />
            Health Effects of Indoor Mold
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Common Symptoms</h3>
              <div className="space-y-3">
                {healthSymptoms.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-sm font-semibold text-gray-900">{item.system}</span>
                    </div>
                    <span className="text-gray-600 text-sm">{item.symptoms}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-3">Who's Most at Risk</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {[
                    'People with allergies',
                    'Asthma sufferers',
                    'Immunocompromised',
                    'Elderly and infants',
                    'Chronic lung conditions',
                    'Mold sensitivities',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-red-800 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-bold text-amber-900 mb-3">Signs Mold May Be Affecting Health</h3>
                <ul className="space-y-2 text-amber-800 text-sm">
                  {[
                    'Symptoms improve when away from home',
                    'Symptoms worsen in certain rooms',
                    'Multiple family members affected',
                    'Symptoms developed after water damage',
                    'Allergy/asthma treatments less effective',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identifying Mold */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Search className="w-8 h-8 text-blue-600" />
            Identifying Mold in Your Home
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Visual Clues</h3>
              <ul className="space-y-3">
                {[
                  { sign: 'Spots on surfaces', meaning: 'Active mold growth' },
                  { sign: 'Fuzzy/powdery patches', meaning: 'Established colonies' },
                  { sign: 'Discoloration', meaning: 'Current or past moisture' },
                  { sign: 'Water stains', meaning: 'History of water damage' },
                  { sign: 'Peeling paint/wallpaper', meaning: 'Moisture behind surface' },
                ].map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <span className="font-medium text-gray-900">{item.sign}:</span>
                    <span className="text-gray-600 ml-1">{item.meaning}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Smell Indicators</h3>
              <ul className="space-y-2">
                {[
                  'Musty, earthy odor',
                  'Stale, damp smell',
                  'Odor strongest in certain areas',
                  'Smell persists despite cleaning',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Wind className="w-4 h-4 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Where to Look</h3>
              <ul className="space-y-2">
                {[
                  'Behind drywall (hidden leaks)',
                  'Under sinks',
                  'Around windows',
                  'In bathrooms',
                  'In basements',
                  'Around HVAC',
                  'Behind furniture',
                  'In attics',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                    <Droplets className="w-4 h-4 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Shield className="w-8 h-8 text-emerald-600" />
            Preventing Mold Growth
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: 1, title: 'Control humidity', desc: 'Keep below 50%' },
              { num: 2, title: 'Fix leaks immediately', desc: 'Within 24 hours' },
              { num: 3, title: 'Improve ventilation', desc: 'Exhaust fans, air circulation' },
              { num: 4, title: 'Dry wet areas quickly', desc: 'Within 24-48 hours' },
              { num: 5, title: 'Use mold-resistant products', desc: 'In high-moisture areas' },
              { num: 6, title: 'Regular inspection', desc: 'Check prone areas monthly' },
            ].map((item) => (
              <div key={item.num} className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    {item.num}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Is all black mold toxic?",
                a: "No. Many mold species appear black, and not all produce significant toxins. However, all indoor mold growth indicates a moisture problem that should be addressed regardless of species."
              },
              {
                q: "Can I identify mold type by looking at it?",
                a: "Not reliably. Many molds look similar, and accurate identification requires laboratory analysis. Treatment is the same regardless—fix moisture, remove mold, prevent recurrence."
              },
              {
                q: "Which mold is the most dangerous?",
                a: "Stachybotrys (black mold) and certain Aspergillus species can produce mycotoxins, but any mold can cause health problems. The amount of exposure matters more than species."
              },
              {
                q: "Can I clean mold myself?",
                a: "Small areas (under 10 sq ft) on hard surfaces can be cleaned with proper precautions. Larger areas, porous materials, or any area after water damage should be handled professionally."
              },
              {
                q: "How long does mold take to grow after water damage?",
                a: "Mold can begin growing within 24-48 hours of water exposure. Visible colonies typically appear within 3-7 days under favorable conditions."
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Concerned About Mold in Your Home?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Call Flood Doctor for a free mold inspection. We'll identify the extent of growth,
            locate moisture sources, and provide a clear remediation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (877) 497-0007
            </a>
            <Link
              to="/services/mold-remediation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-400 transition-colors"
            >
              Mold Remediation Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-emerald-200 mt-6 text-sm">
            IICRC Certified Mold Remediation | 8466D Tyco Rd, Vienna, VA 22182
          </p>
        </div>
      </section>
    </main>
  );
};

export default TypesOfMold;
