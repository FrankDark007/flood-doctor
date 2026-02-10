import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Droplets,
  AlertTriangle,
  CheckCircle,
  Home,
  Clock,
  DollarSign,
  Shield,
  ArrowRight,
  Settings,
  CloudRain,
  Waves,
  Wrench,
  ThermometerSnowflake
} from 'lucide-react';
import PageMeta from '../../components/ui/PageMeta';

const BasementFloodingPrevention: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Prevent Basement Flooding",
    "description": "Complete guide to preventing basement flooding including drainage, sump pumps, and waterproofing.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Maintain Sump Pump",
        "text": "Test monthly, clean pit, install battery backup"
      },
      {
        "@type": "HowToStep",
        "name": "Improve Drainage",
        "text": "Grade away from house, extend downspouts 6+ feet"
      },
      {
        "@type": "HowToStep",
        "name": "Seal Foundation",
        "text": "Repair cracks, consider waterproofing if needed"
      },
      {
        "@type": "HowToStep",
        "name": "Prevent Backups",
        "text": "Install backflow valve, maintain plumbing"
      }
    ]
  };

  const floodingCauses = [
    { cause: 'Heavy rain (groundwater rise)', frequency: 'Most common', prevention: 'Sump pump, drainage' },
    { cause: 'Sump pump failure', frequency: 'Very common', prevention: 'Backup systems, maintenance' },
    { cause: 'Sewer backup', frequency: 'Common', prevention: 'Backflow valve' },
    { cause: 'Foundation cracks', frequency: 'Common', prevention: 'Sealing, waterproofing' },
    { cause: 'Poor grading', frequency: 'Common', prevention: 'Regrade, drainage' },
    { cause: 'Gutter overflow', frequency: 'Common', prevention: 'Cleaning, extensions' },
  ];

  const backupSystems = [
    { type: 'Battery backup', works: 'Runs pump on battery', cost: '$200-$600' },
    { type: 'Water-powered backup', works: 'Uses water pressure', cost: '$300-$800' },
    { type: 'Generator', works: 'Powers pump (and more)', cost: '$500-$15,000' },
    { type: 'Dual pump', works: 'Second pump as backup', cost: '$300-$500' },
  ];

  const waterproofingMethods = [
    { method: 'Sealants', where: 'Interior/exterior surface', cost: '$500-$2,000', best: 'Minor dampness' },
    { method: 'Waterproof coatings', where: 'Exterior foundation', cost: '$2,000-$8,000', best: 'Moderate moisture' },
    { method: 'Exterior membrane', where: 'Full exterior', cost: '$10,000-$25,000', best: 'Serious issues' },
    { method: 'Interior drain tile', where: 'Interior perimeter', cost: '$8,000-$15,000', best: 'High water table' },
    { method: 'French drain', where: 'Around foundation', cost: '$5,000-$15,000', best: 'Heavy drainage' },
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Basement Flooding Prevention | Stop Water Before It Starts | Flood Doctor"
        description="Prevent basement flooding with proven strategies. Learn about sump pumps, drainage, waterproofing, and what to do when water enters. Northern Virginia experts."
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <Droplets className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Homeowner Resource</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Basement Flooding Prevention Guide
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Basement flooding is the most common and costly home water damage issue.
              A flooded basement can cost $3,000-$25,000+ to restore. The good news:
              most basement flooding is preventable with proper maintenance and preparation.
            </p>
            <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Already flooded?</p>
                  <p className="text-red-200">Call <a href="tel:8774970007" className="underline font-bold">(877) 497-0007</a> — We specialize in basement flood cleanup.</p>
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
            8 Ways to Prevent Basement Flooding
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: 1, text: 'Install/maintain sump pump with battery backup' },
              { num: 2, text: 'Grade soil away from house — 6" drop in first 10 feet' },
              { num: 3, text: 'Clean gutters regularly — prevents overflow near foundation' },
              { num: 4, text: 'Extend downspouts 6+ feet from house' },
              { num: 5, text: 'Seal foundation cracks' },
              { num: 6, text: 'Install window well covers' },
              { num: 7, text: 'Check for plumbing leaks monthly' },
              { num: 8, text: 'Consider waterproofing for persistent problems' },
            ].map((tip) => (
              <div key={tip.num} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {tip.num}
                  </div>
                  <p className="text-gray-700 text-sm">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Basements Flood */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <CloudRain className="w-8 h-8 text-blue-600" />
            Why Basements Flood
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Understanding the causes helps you target your prevention efforts effectively.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Cause</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Frequency</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Prevention</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {floodingCauses.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{item.cause}</td>
                    <td className="py-3 px-4 text-gray-600">{item.frequency}</td>
                    <td className="py-3 px-4 text-blue-600 font-medium">{item.prevention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-900 mb-3">Northern Virginia Factors</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-amber-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>High water table — many areas have shallow groundwater</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Clay soil — poor drainage, holds water</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Older homes — original waterproofing degraded</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Heavy storms — flash flooding overwhelms systems</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sump Pump Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Settings className="w-8 h-8 text-blue-600" />
            Sump Pump Essentials
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Your first line of defense. A properly functioning sump pump is essential for most Northern Virginia homes.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Maintenance Checklist */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Sump Pump Maintenance Checklist</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Monthly</h4>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      'Pour water into pit to test operation',
                      'Listen for smooth operation',
                      'Verify water discharges away from house',
                      'Check float switch moves freely',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Seasonally</h4>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      'Clean debris from pit',
                      'Test backup system',
                      'Check discharge line for obstructions',
                      'Inspect check valve',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Annually</h4>
                  <ul className="space-y-2 text-gray-600">
                    {[
                      'Full system inspection',
                      'Replace backup battery (every 2-3 years)',
                      'Consider professional service',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Backup Systems */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Backup Systems</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Most sump pump failures happen during storms when power often fails. Backup is essential.
              </p>

              <div className="space-y-3">
                {backupSystems.map((system, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{system.type}</p>
                      <p className="text-sm text-gray-600">{system.works}</p>
                    </div>
                    <span className="font-semibold text-blue-600">{system.cost}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium text-sm">
                  <strong>Recommended:</strong> Primary pump + battery backup at minimum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waterproofing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            Foundation Waterproofing Options
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Method</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Where Applied</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Cost</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {waterproofingMethods.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.method}</td>
                    <td className="py-3 px-4 text-gray-600">{item.where}</td>
                    <td className="py-3 px-4 text-blue-600 font-semibold">{item.cost}</td>
                    <td className="py-3 px-4 text-gray-600">{item.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">Signs You Need Waterproofing</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                'Water seeping through walls',
                'Efflorescence (white powder on concrete)',
                'Damp or wet walls without visible leak',
                'Musty smell',
                'Mold growth on walls',
                'Standing water after rain',
                'Cracks with active water entry',
              ].map((sign, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Prevention */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Seasonal Prevention Checklist
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                season: 'Spring',
                icon: CloudRain,
                color: 'green',
                risk: 'High Risk Season',
                items: [
                  'Inspect sump pump after winter',
                  'Test backup battery',
                  'Check discharge line for frost damage',
                  'Clear gutters of debris',
                  'Check grading after freeze/thaw',
                ]
              },
              {
                season: 'Summer',
                icon: Waves,
                color: 'blue',
                risk: 'Storm Season',
                items: [
                  'Maintain sump pump during storms',
                  'Monitor for heavy rains',
                  'Check for condensation',
                  'Ensure dehumidifier working',
                ]
              },
              {
                season: 'Fall',
                icon: Home,
                color: 'amber',
                risk: 'Prep Season',
                items: [
                  'Clean gutters before leaves fall',
                  'Verify discharge won\'t freeze',
                  'Extend downspouts if needed',
                  'Check window well covers',
                ]
              },
              {
                season: 'Winter',
                icon: ThermometerSnowflake,
                color: 'cyan',
                risk: 'Freeze Risk',
                items: [
                  'Keep heat on in basement',
                  'Monitor for ice dams',
                  'Keep discharge clear of snow',
                  'Test backup before trips',
                ]
              },
            ].map((s) => (
              <div key={s.season} className={`bg-white rounded-xl p-6 shadow-sm border-t-4 border-${s.color}-500`}>
                <div className="flex items-center gap-2 mb-2">
                  <s.icon className={`w-5 h-5 text-${s.color}-600`} />
                  <h3 className="font-bold text-gray-900">{s.season}</h3>
                </div>
                <p className={`text-xs font-medium text-${s.color}-600 mb-4`}>{s.risk}</p>
                <ul className="space-y-2">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-4 h-4 border border-gray-300 rounded mt-0.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* If Flooded */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            If Your Basement Floods
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Immediate Actions</h3>
              <ol className="space-y-3">
                {[
                  { step: 1, text: 'Don\'t enter if electrical hazard present' },
                  { step: 2, text: 'Turn off electricity to basement if safe' },
                  { step: 3, text: 'Call Flood Doctor: (877) 497-0007' },
                  { step: 4, text: 'Stop water source if identifiable' },
                  { step: 5, text: 'Document damage with photos/video' },
                  { step: 6, text: 'Don\'t throw anything away until documented' },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <span className="text-gray-700 pt-0.5">{item.text}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Typical Cleanup Costs</h3>
              <div className="space-y-3">
                {[
                  { type: 'Unfinished, minor flooding', cost: '$1,500-$4,000' },
                  { type: 'Unfinished, significant', cost: '$3,000-$8,000' },
                  { type: 'Finished, minor flooding', cost: '$5,000-$12,000' },
                  { type: 'Finished, significant', cost: '$10,000-$25,000+' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">{item.type}</span>
                    <span className="font-bold text-gray-900">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What's the most common cause of basement flooding?",
                a: "Sump pump failure during heavy rain, followed by poor drainage (gutters, grading) and sewer backup. These three causes account for most basement floods."
              },
              {
                q: "How much does basement waterproofing cost?",
                a: "Interior drainage systems cost $8,000-$15,000. Exterior waterproofing costs $10,000-$25,000. Simple crack sealing may cost $500-$2,000."
              },
              {
                q: "How often should I test my sump pump?",
                a: "Monthly. Pour water into the pit until the pump activates. Verify it pumps water out and shuts off properly."
              },
              {
                q: "Should I have battery backup for my sump pump?",
                a: "Yes. Most sump pump failures happen during storms when power often fails. Battery backup or water-powered backup is essential."
              },
              {
                q: "Is basement flooding covered by insurance?",
                a: "It depends on the cause. Sudden plumbing failures: yes. Groundwater flooding: no (requires flood insurance). Sewer backup: only with endorsement."
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Basement Flooding Emergency?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Call Flood Doctor for immediate response. We specialize in basement water extraction,
            drying, and restoration across Northern Virginia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8774970007"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (877) 497-0007
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              Request Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-blue-200 mt-6 text-sm">
            8466D Tyco Rd, Vienna, VA 22182 | DPOR License #2705155505
          </p>
        </div>
      </section>
    </main>
  );
};

export default BasementFloodingPrevention;
