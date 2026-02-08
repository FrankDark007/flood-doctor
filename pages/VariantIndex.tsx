import { Link } from 'react-router-dom';

export default function VariantIndex() {
  const variants = {
    'Component Showcase': [
      { path: '/dev/components/', name: 'CTA & Service Grid Variants', highlight: true },
    ],
    'Home Page Variants': [
      { path: '/dev/home-a/', name: 'Home A' },
      { path: '/dev/home-b/', name: 'Home B' },
      { path: '/dev/home-c/', name: 'Home C' },
    ],
    'Landing Pages': [
      { path: '/dev/landing-a/', name: 'Landing A' },
      { path: '/dev/landing-b/', name: 'Landing B' },
      { path: '/dev/landing-c/', name: 'Landing C' },
    ],
    'Service Detail (A/B/C)': [
      { path: '/dev/service-a/', name: 'Service A' },
      { path: '/dev/service-b/', name: 'Service B' },
      { path: '/dev/service-c/', name: 'Service C' },
    ],
    'Service Pages (1-10)': [
      { path: '/dev/service-1/', name: '1' },
      { path: '/dev/service-2/', name: '2' },
      { path: '/dev/service-3/', name: '3' },
      { path: '/dev/service-4/', name: '4' },
      { path: '/dev/service-5/', name: '5' },
      { path: '/dev/service-6/', name: '6' },
      { path: '/dev/service-7/', name: '7' },
      { path: '/dev/service-8/', name: '8' },
      { path: '/dev/service-9/', name: '9' },
      { path: '/dev/service-10/', name: '10' },
    ],
    'Service Detail (1-10)': [
      { path: '/dev/service-detail-1/', name: '1' },
      { path: '/dev/service-detail-2/', name: '2' },
      { path: '/dev/service-detail-3/', name: '3' },
      { path: '/dev/service-detail-4/', name: '4' },
      { path: '/dev/service-detail-5/', name: '5' },
      { path: '/dev/service-detail-6/', name: '6' },
      { path: '/dev/service-detail-7/', name: '7' },
      { path: '/dev/service-detail-8/', name: '8' },
      { path: '/dev/service-detail-9/', name: '9' },
      { path: '/dev/service-detail-10/', name: '10' },
    ],
    'Litho Style': [
      { path: '/dev/litho-1/', name: 'Litho 1' },
      { path: '/dev/litho-2/', name: 'Litho 2' },
      { path: '/dev/litho-3/', name: 'Litho 3' },
    ],
    'About Page Variants': [
      { path: '/dev/about-a/', name: 'About A' },
      { path: '/dev/about-b/', name: 'About B' },
      { path: '/dev/about-c/', name: 'About C' },
    ],
    'Contact Page Variants': [
      { path: '/dev/contact-a/', name: 'Contact A' },
      { path: '/dev/contact-b/', name: 'Contact B' },
      { path: '/dev/contact-c/', name: 'Contact C' },
    ],
    'Services Index Variants': [
      { path: '/dev/services-a/', name: 'Services A' },
      { path: '/dev/services-b/', name: 'Services B' },
      { path: '/dev/services-c/', name: 'Services C' },
    ],
    'Special Pages': [
      { path: '/dev/google-home-clone/', name: 'Google Home Clone' },
      { path: '/dev/generated-layouts/', name: 'Generated Layouts' },
      { path: '/services/residential/variant-a/', name: 'Residential Variant A' },
    ],
    'GBP Clone Versions': [
      { path: '/dev/gbp-clone-v3/', name: 'GBP V3' },
      { path: '/dev/gbp-clone/', name: 'GBP Clone' },
      { path: '/dev/keyword-planner/', name: 'GBP V5 (Keyword Planner)' },
    ],
    'FD Home Versions': [
      { path: '/dev/fd-home-v3', name: 'FD Home V3' },
      { path: '/dev/fd-home-v3-parity', name: 'FD Home V3 Parity' },
      { path: '/dev/fd-home-v4', name: 'FD Home V4' },
    ],
    'Gemini Coded': [
      { path: '/dev/gemini-water-damage/', name: 'Gemini Water Damage' },
      { path: '/dev/gemini-water-damage-v2/', name: 'Gemini Water Damage V2' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Flood Doctor Variant Index</h1>
        <p className="text-gray-400 mb-8">Click any variant to preview. Use browser back to return.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(variants).map(([category, links]) => (
            <div key={category} className="bg-gray-800 rounded-lg p-5">
              <h2 className="text-lg font-semibold text-blue-400 mb-3 border-b border-gray-700 pb-2">
                {category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-1.5 rounded text-sm transition-colors ${
                      'highlight' in link && link.highlight
                        ? 'bg-green-600 hover:bg-green-500 font-semibold'
                        : 'bg-gray-700 hover:bg-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 bg-green-900/30 border border-green-700 rounded-lg">
          <h2 className="text-lg font-semibold text-green-400 mb-2">Component Library (Now Integrated)</h2>
          <p className="text-sm text-gray-300">
            The CTA variants (10 components) and Service Grid variants (6 components) have been integrated.
            <Link to="/dev/components/" className="ml-2 text-green-400 underline hover:text-green-300">
              View Component Showcase →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
