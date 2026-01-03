import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ThermometerSnowflake,
  AlertTriangle,
  CheckCircle,
  Droplets,
  Home,
  Flame,
  Clock,
  DollarSign,
  Shield,
  ArrowRight,
  Thermometer,
  Wind
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';

const WinterPipeProtection: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Prevent Frozen and Burst Pipes",
    "description": "Complete guide to protecting your pipes from freezing during winter in Northern Virginia.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Insulate Pipes",
        "text": "Insulate all pipes in unheated areas with foam sleeves or wrap"
      },
      {
        "@type": "HowToStep",
        "name": "Seal Air Leaks",
        "text": "Seal gaps and cracks near pipes that allow cold air in"
      },
      {
        "@type": "HowToStep",
        "name": "Maintain Heat",
        "text": "Keep thermostat at 55°F minimum, even when away"
      },
      {
        "@type": "HowToStep",
        "name": "Let Faucets Drip",
        "text": "During extreme cold, let faucets on exterior walls drip"
      }
    ]
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Winter Pipe Protection Guide | Prevent Frozen & Burst Pipes | Flood Doctor"
        description="Protect your pipes from freezing and bursting this winter. Expert tips on insulation, heating, and emergency response for Northern Virginia homeowners."
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <ThermometerSnowflake className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Homeowner Resource</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Winter Pipe Protection for Northern Virginia Homes
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Frozen pipes are one of the most common—and costly—winter disasters for homeowners.
              A single burst pipe can release 250+ gallons per hour, causing tens of thousands in damage.
            </p>
            <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Pipe already burst?</p>
                  <p className="text-red-200">Call <a href="tel:8774970007" className="underline font-bold">(877) 497-0007</a> — 60-minute emergency response 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Prevention Tips */}
      <section className="py-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            7 Ways to Prevent Frozen Pipes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: 1, text: 'Insulate pipes in unheated areas (attic, crawl space, garage)' },
              { num: 2, text: 'Seal air leaks near pipes' },
              { num: 3, text: 'Keep heat at 55°F+ even when away' },
              { num: 4, text: 'Open cabinet doors under sinks on cold nights' },
              { num: 5, text: 'Let faucets drip during extreme cold' },
              { num: 6, text: 'Disconnect outdoor hoses before first freeze' },
              { num: 7, text: 'Know your shutoff — locate main water valve now' },
            ].map((tip) => (
              <div key={tip.num} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center font-bold flex-shrink-0">
                  {tip.num}
                </div>
                <p className="text-gray-700 text-sm">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pipes Freeze */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-[#1a73e8] pb-4 inline-block">
            Why Pipes Freeze and Burst
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Science</h3>
              <ul className="space-y-3">
                {[
                  'Water expands 9% when it freezes',
                  'Frozen water creates pressure between ice blockage and closed faucet',
                  'Pressure builds until pipe ruptures',
                  "Pipes don't burst where ice forms—they burst where pressure releases"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 font-medium">
                  <strong>Key insight:</strong> It's not just temperature—wind chill affects pipes too.
                  A 35°F day with strong winds can freeze exposed pipes.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Freezing Risk by Temperature</h3>
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                <div className="grid grid-cols-2 bg-gray-100 px-6 py-4 font-semibold text-gray-900">
                  <div>Temperature</div>
                  <div>Risk Level</div>
                </div>
                {[
                  { temp: '32°F or below', risk: 'Risk begins', color: 'yellow' },
                  { temp: '28°F or below', risk: 'High risk for exposed pipes', color: 'orange' },
                  { temp: '20°F or below', risk: 'High risk for poorly insulated', color: 'red' },
                  { temp: '0°F or below', risk: 'Risk even for insulated pipes', color: 'red' },
                ].map((row, idx) => (
                  <div key={idx} className={`grid grid-cols-2 px-6 py-4 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="text-gray-900 font-medium">{row.temp}</div>
                    <div className={`font-medium ${
                      row.color === 'red' ? 'text-red-600' :
                      row.color === 'orange' ? 'text-orange-600' : 'text-yellow-600'
                    }`}>{row.risk}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">High-Risk Pipes</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Pipes in exterior walls',
                  'Pipes in unheated spaces (attic, crawl space, garage)',
                  'Outdoor faucets and hose bibs',
                  'Pipes near exterior doors or windows',
                  'Swimming pool supply lines'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preparing for Winter */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-[#1a73e8] pb-4 inline-block">
            Preparing for Winter
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Wind className="w-6 h-6 text-blue-500" />
                Outdoor Preparation
              </h3>
              <ul className="space-y-3">
                {[
                  'Disconnect all garden hoses',
                  'Drain outdoor faucets (if not frost-proof)',
                  'Shut off interior valves to outdoor faucets',
                  'Drain and winterize irrigation systems',
                  'Drain swimming pool lines',
                  'Install outdoor faucet covers ($5-10 each)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Home className="w-6 h-6 text-green-500" />
                Indoor Preparation
              </h3>
              <ul className="space-y-3">
                {[
                  'Identify all pipes in unheated areas',
                  'Insulate exposed pipes with foam sleeves',
                  'Seal air leaks around pipes entering house',
                  'Locate and label main water shutoff valve',
                  'Test shutoff valve (make sure it works)',
                  'Know where all supply shutoffs are located'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Insulation Options Table */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Pipe Insulation Options</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 font-semibold text-gray-900">Type</th>
                    <th className="py-3 pr-4 font-semibold text-gray-900">R-Value</th>
                    <th className="py-3 pr-4 font-semibold text-gray-900">Cost</th>
                    <th className="py-3 font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 pr-4 text-gray-700">Foam pipe sleeves</td>
                    <td className="py-3 pr-4 text-gray-700">R-2 to R-4</td>
                    <td className="py-3 pr-4 text-gray-700">$1-3/6ft</td>
                    <td className="py-3 text-gray-700">Easy DIY, straight runs</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-700">Fiberglass wrap</td>
                    <td className="py-3 pr-4 text-gray-700">R-3 to R-5</td>
                    <td className="py-3 pr-4 text-gray-700">$0.50-2/ft</td>
                    <td className="py-3 text-gray-700">Irregular shapes</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-700">Heat tape/cable</td>
                    <td className="py-3 pr-4 text-gray-700">N/A</td>
                    <td className="py-3 pr-4 text-gray-700">$15-50/25ft</td>
                    <td className="py-3 text-gray-700">High-risk areas</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-700">Spray foam</td>
                    <td className="py-3 pr-4 text-gray-700">R-6+</td>
                    <td className="py-3 pr-4 text-gray-700">$5-10/can</td>
                    <td className="py-3 text-gray-700">Gap filling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* During Cold Snaps */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-[#1a73e8] pb-4 inline-block">
            During Cold Snaps
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Thermometer className="w-6 h-6 text-blue-600" />
                When Temps Drop Below 28°F
              </h3>
              <ul className="space-y-3">
                {[
                  'Open cabinet doors under sinks (kitchen, bathroom)',
                  'Let faucets drip (cold AND hot in two-handle faucets)',
                  'Keep garage doors closed (if pipes in garage)',
                  'Maintain thermostat at 55°F minimum—even overnight',
                  'Keep interior doors open for heat circulation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>How much drip?</strong> A slow, steady drip (about 5 drops per second) is sufficient.
                  Running water doesn't freeze as easily, and the drip relieves pressure if ice does form.
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                When Temps Drop Below 20°F
              </h3>
              <ul className="space-y-3">
                {[
                  'Increase thermostat slightly',
                  'Add heat source near problem pipes',
                  'Check pipes periodically',
                  'Consider leaving lower cabinet doors open overnight',
                  'If leaving home, consider shutting off water entirely'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signs of Frozen Pipes */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-[#1a73e8] pb-4 inline-block">
            Signs of Frozen Pipes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Droplets, text: 'No water or reduced flow from faucets' },
              { icon: ThermometerSnowflake, text: 'Frost visible on exposed pipes' },
              { icon: AlertTriangle, text: 'Unusual sounds when turning on water' },
              { icon: AlertTriangle, text: 'Bulging or cracked visible pipes' },
              { icon: Droplets, text: 'Unexplained wet spots on walls, ceilings' },
            ].map((sign, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200">
                <sign.icon className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-700">{sign.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* If Pipes Burst */}
      <section className="py-16 lg:py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            If a Pipe Bursts — Immediate Actions
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <ol className="space-y-4">
                {[
                  { num: 1, title: 'Shut off main water', desc: 'Stop water flow immediately' },
                  { num: 2, title: 'Call Flood Doctor: (877) 497-0007', desc: 'Emergency response' },
                  { num: 3, title: 'Open faucets', desc: 'Relieve remaining pressure' },
                  { num: 4, title: 'Turn off electricity', desc: 'If water near electrical' },
                  { num: 5, title: 'Document damage', desc: 'Photos/video for insurance' },
                  { num: 6, title: 'Begin water removal', desc: 'If safe and equipment available' },
                ].map((step) => (
                  <li key={step.num} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white text-red-600 flex items-center justify-center font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-semibold">{step.title}</div>
                      <div className="text-red-100">{step.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-red-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Damage Per Hour</h3>
              <div className="space-y-4">
                {[
                  { pipe: '1/8" pipe crack', gallons: '250 gallons/hour' },
                  { pipe: '1/4" crack', gallons: '1,000 gallons/hour' },
                  { pipe: '1/2" pipe', gallons: '2,500 gallons/hour' },
                  { pipe: '3/4" main line', gallons: '5,000+ gallons/hour' },
                ].map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-red-500 pb-3">
                    <span className="text-red-100">{row.pipe}</span>
                    <span className="font-bold">{row.gallons}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg font-semibold text-center">
                A burst pipe can flood a basement in under 2 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'At what temperature do pipes freeze?',
                a: 'Pipes can freeze when temperatures reach 32°F, but significant risk begins around 28°F. Pipes in poorly insulated areas can freeze even at 35°F with wind chill.'
              },
              {
                q: 'Should I drip all my faucets?',
                a: 'Only faucets on exterior walls or connected to pipes running through unheated areas. A slow drip from both hot and cold handles is sufficient.'
              },
              {
                q: 'Will my pipes freeze if heat goes out?',
                a: 'They can. If power goes out, pipes in unheated spaces can freeze within hours depending on temperature. Open cabinets and consider draining if extended outage.'
              },
              {
                q: 'How much does a burst pipe cost to repair?',
                a: 'Pipe repair itself costs $150-$500. Water damage restoration ranges from $1,500-$25,000+ depending on how long water ran and area affected.'
              },
              {
                q: 'Should I shut off water when on vacation?',
                a: 'For trips during winter, consider it. Either shut off and drain (safest) or maintain heat at 55°F+, have someone check daily, and install leak sensors for alerts.'
              },
              {
                q: 'Can pipes freeze in one night?',
                a: 'Yes. Pipes in exterior walls or unheated spaces can freeze in just a few hours if temperatures drop suddenly. This is why monitoring forecasts is important.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#1a73e8] to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pipe Burst or Water Damage Emergency?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Call Flood Doctor for immediate 24/7 response. We'll stop the damage and restore your home.
          </p>
          <a
            href="tel:8774970007"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#1a73e8] px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-lg"
          >
            <Phone className="w-7 h-7" />
            (877) 497-0007
          </a>
          <p className="mt-6 text-blue-200 text-sm">
            8466D Tyco Rd, Vienna, VA 22182 · DPOR License #2705155505
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Emergency Checklist', href: '/resources/emergency-checklist/', desc: 'What to do when water damage strikes' },
              { title: 'Insurance Claims Guide', href: '/resources/insurance-claims-guide/', desc: 'Navigate your water damage claim' },
              { title: 'Burst Pipe Services', href: '/services/burst-pipes/', desc: 'Emergency burst pipe restoration' },
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                className="group bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#1a73e8] transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#1a73e8] font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WinterPipeProtection;
