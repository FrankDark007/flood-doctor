/**
 * DEV-ONLY Variant Gallery
 * Mounted at /__variants — never included in production builds or sitemaps.
 */
import React, { Suspense } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { variants, type VariantKind } from './registry';

const KIND_LABELS: Record<VariantKind, string> = {
  homepage: 'Homepages',
  'gbp-clone': 'GBP Clones',
  about: 'About Pages',
  contact: 'Contact Pages',
  'services-index': 'Services Index',
  'service-detail': 'Service Detail',
  'service-page': 'Service Pages',
  landing: 'Landing Pages',
  litho: 'Litho Style',
  gemini: 'Gemini Coded',
  hero: 'Hero Variants',
  city: 'City Landings',
  'dev-tool': 'Dev Tools',
  template: 'Templates',
};

const KIND_COLORS: Record<VariantKind, string> = {
  homepage: 'text-green-400 border-green-700',
  'gbp-clone': 'text-purple-400 border-purple-700',
  about: 'text-blue-400 border-blue-700',
  contact: 'text-blue-400 border-blue-700',
  'services-index': 'text-cyan-400 border-cyan-700',
  'service-detail': 'text-cyan-400 border-cyan-700',
  'service-page': 'text-cyan-400 border-cyan-700',
  landing: 'text-orange-400 border-orange-700',
  litho: 'text-rose-400 border-rose-700',
  gemini: 'text-yellow-400 border-yellow-700',
  hero: 'text-pink-400 border-pink-700',
  city: 'text-emerald-400 border-emerald-700',
  'dev-tool': 'text-gray-400 border-gray-600',
  template: 'text-indigo-400 border-indigo-700',
};

/* ── Gallery Index ── */
function Gallery() {
  // Group by kind
  const grouped = variants.reduce<Record<string, typeof variants>>((acc, v) => {
    const key = v.kind;
    if (!acc[key]) acc[key] = [];
    acc[key].push(v);
    return acc;
  }, {});

  const totalCount = variants.length;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline gap-4 mb-2">
          <h1 className="text-3xl md:text-4xl font-bold">Variant Gallery</h1>
          <span className="text-gray-500 text-lg">{totalCount} variants</span>
        </div>
        <p className="text-gray-400 mb-1">Click any variant to preview. Browser back to return here.</p>
        <p className="text-yellow-500 text-sm mb-8 font-mono">
          DEV ONLY — not in production builds or sitemaps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Object.entries(grouped).map(([kind, entries]) => {
            const colors = KIND_COLORS[kind as VariantKind] || 'text-gray-400 border-gray-600';
            const [textColor, borderColor] = colors.split(' ');
            return (
              <div key={kind} className={`bg-gray-800 rounded-lg p-4 border ${borderColor}`}>
                <h2 className={`text-sm font-semibold ${textColor} uppercase tracking-wider mb-3 pb-2 border-b border-gray-700`}>
                  {KIND_LABELS[kind as VariantKind] || kind}
                  <span className="text-gray-500 font-normal ml-2">({entries.length})</span>
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {entries.map((v) => (
                    <Link
                      key={v.slug}
                      to={`/__variants/${v.slug}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs bg-gray-700 hover:bg-blue-600 transition-colors"
                      title={v.notes || v.title}
                    >
                      {v.title}
                      {v.fullscreen && <span className="opacity-50 text-[10px]">FS</span>}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-xs text-gray-600">
          <p>FS = fullscreen (no header/footer wrapper). All variants lazy-loaded on click.</p>
        </div>
      </div>
    </div>
  );
}

/* ── Single Variant Viewer ── */
function VariantViewer() {
  const { slug } = useParams<{ slug: string }>();
  const entry = variants.find((v) => v.slug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Variant not found: {slug}</h1>
          <Link to="/__variants" className="text-blue-400 underline">← Back to gallery</Link>
        </div>
      </div>
    );
  }

  const Comp = entry.Component;

  // Fullscreen variants render without any wrapper
  if (entry.fullscreen) {
    return (
      <Suspense fallback={<Loader />}>
        <div className="relative">
          <DevBanner slug={entry.slug} title={entry.title} />
          <Comp />
        </div>
      </Suspense>
    );
  }

  // Standard variants get a minimal wrapper
  return (
    <Suspense fallback={<Loader />}>
      <div className="relative">
        <DevBanner slug={entry.slug} title={entry.title} />
        <Comp />
      </div>
    </Suspense>
  );
}

/* ── Dev Banner (floating back link) ── */
function DevBanner({ slug, title }: { slug: string; title: string }) {
  return (
    <div className="fixed top-2 right-2 z-[9999] bg-gray-900/90 text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-3 backdrop-blur-sm border border-gray-700">
      <span className="font-mono text-yellow-400">{slug}</span>
      <span className="text-gray-400 hidden md:inline">{title}</span>
      <Link to="/__variants" className="text-blue-400 hover:text-blue-300 underline">
        ← Gallery
      </Link>
    </div>
  );
}

/* ── Loader ── */
function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

/* ── Root: Routes for /__variants and /__variants/:slug ── */
export default function VariantsRoot() {
  return (
    <Routes>
      <Route index element={<Gallery />} />
      <Route path=":slug" element={<VariantViewer />} />
    </Routes>
  );
}
