/**
 * Generated Layouts Lab
 * Dev-only page for testing generated-layouts components
 * Route: /dev/generated-layouts/
 */
import React, { useState, Suspense, lazy } from 'react';
import { ChevronDown, ChevronRight, Eye, EyeOff } from 'lucide-react';

// Lazy load components to avoid loading everything at once
const HeroInteractive = lazy(() => import('../generated-layouts/heroes/HeroInteractive'));
const HeroMagazine = lazy(() => import('../generated-layouts/heroes/HeroMagazine'));
const HeroTestimonial = lazy(() => import('../generated-layouts/heroes/HeroTestimonial'));

const CTAEmergency = lazy(() => import('../generated-layouts/ctas/CTAEmergency'));
const CTAGradient = lazy(() => import('../generated-layouts/ctas/CTAGradient'));
const CTASplit = lazy(() => import('../generated-layouts/ctas/CTASplit'));

const FAQAccordion = lazy(() => import('../generated-layouts/faqs/FAQAccordion').then(m => ({ default: m.FAQAccordion })));
const FAQCards = lazy(() => import('../generated-layouts/faqs/FAQCards').then(m => ({ default: m.FAQCards })));

const ServiceGridBento = lazy(() => import('../generated-layouts/service-grids/ServiceGridBento'));
const ServiceGridStandard = lazy(() => import('../generated-layouts/service-grids/ServiceGridStandard'));

const TrustBadgeBar = lazy(() => import('../generated-layouts/trust-suite/TrustBadgeBar').then(m => ({ default: m.TrustBadgeBar })));
const StatsGrid = lazy(() => import('../generated-layouts/trust-suite/StatsGrid').then(m => ({ default: m.StatsGrid })));

const ProcessTimeline = lazy(() => import('../generated-layouts/process/ProcessTimeline'));

// Component categories for the gallery
const COMPONENT_CATEGORIES = [
  {
    name: 'Heroes',
    components: [
      { name: 'HeroInteractive', Component: HeroInteractive, description: 'Zip code checker hero' },
      { name: 'HeroMagazine', Component: HeroMagazine, description: 'Magazine-style editorial hero' },
      { name: 'HeroTestimonial', Component: HeroTestimonial, description: 'Hero with testimonial focus' },
    ],
  },
  {
    name: 'CTAs',
    components: [
      { name: 'CTAEmergency', Component: CTAEmergency, description: 'Emergency call-to-action' },
      { name: 'CTAGradient', Component: CTAGradient, description: 'Gradient background CTA' },
      { name: 'CTASplit', Component: CTASplit, description: 'Split layout CTA' },
    ],
  },
  {
    name: 'FAQs',
    components: [
      { name: 'FAQAccordion', Component: FAQAccordion, description: 'Collapsible FAQ accordion' },
      { name: 'FAQCards', Component: FAQCards, description: 'FAQ in card grid layout' },
    ],
  },
  {
    name: 'Service Grids',
    components: [
      { name: 'ServiceGridBento', Component: ServiceGridBento, description: 'Bento-style service grid' },
      { name: 'ServiceGridStandard', Component: ServiceGridStandard, description: 'Standard service grid' },
    ],
  },
  {
    name: 'Trust Suite',
    components: [
      { name: 'TrustBadgeBar', Component: TrustBadgeBar, description: 'Trust badges horizontal bar' },
      { name: 'StatsGrid', Component: StatsGrid, description: 'Statistics grid display' },
    ],
  },
  {
    name: 'Process',
    components: [
      { name: 'ProcessTimeline', Component: ProcessTimeline, description: 'Step-by-step process timeline' },
    ],
  },
];

// Loading placeholder
function ComponentLoader() {
  return (
    <div className="flex items-center justify-center py-20 bg-gray-50 rounded-lg">
      <div className="animate-pulse text-gray-400">Loading component...</div>
    </div>
  );
}

// Error boundary for component rendering
function ComponentErrorFallback({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center py-20 bg-red-50 rounded-lg border border-red-200">
      <div className="text-red-600">Failed to load: {name}</div>
    </div>
  );
}

// Individual component preview card
function ComponentPreview({
  name,
  Component,
  description
}: {
  name: string;
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
  description: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          {expanded ? (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          )}
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {expanded ? (
            <EyeOff className="w-4 h-4 text-gray-400" />
          ) : (
            <Eye className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </div>

      {/* Component Preview */}
      {expanded && (
        <div className="relative">
          {hasError ? (
            <ComponentErrorFallback name={name} />
          ) : (
            <Suspense fallback={<ComponentLoader />}>
              <ErrorBoundary onError={() => setHasError(true)}>
                <div className="component-preview">
                  <Component />
                </div>
              </ErrorBoundary>
            </Suspense>
          )}
        </div>
      )}
    </div>
  );
}

// Simple error boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

// Category section
function CategorySection({
  name,
  components,
  defaultExpanded = false
}: {
  name: string;
  components: typeof COMPONENT_CATEGORIES[0]['components'];
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="mb-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 mb-4 text-xl font-bold text-gray-900 hover:text-primary transition-colors"
      >
        {expanded ? (
          <ChevronDown className="w-6 h-6" />
        ) : (
          <ChevronRight className="w-6 h-6" />
        )}
        {name}
        <span className="text-sm font-normal text-gray-500">({components.length})</span>
      </button>

      {expanded && (
        <div className="space-y-4 pl-8">
          {components.map((comp) => (
            <ComponentPreview
              key={comp.name}
              name={comp.name}
              Component={comp.Component}
              description={comp.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Main lab page
export default function GeneratedLayoutsLab() {
  const [expandAll, setExpandAll] = useState(false);

  const totalComponents = COMPONENT_CATEGORIES.reduce(
    (sum, cat) => sum + cat.components.length,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Generated Layouts Lab</h1>
              <p className="text-sm text-gray-500">
                {COMPONENT_CATEGORIES.length} categories • {totalComponents} components
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setExpandAll(!expandAll)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {expandAll ? 'Collapse All' : 'Expand All'}
              </button>
              <a
                href="/"
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors"
              >
                Back to Site
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-yellow-800 text-sm">
            <strong>Dev Mode:</strong> This page is for testing generated-layouts components.
            Click on a category to expand it, then click on a component to preview it.
          </p>
        </div>

        {COMPONENT_CATEGORIES.map((category) => (
          <CategorySection
            key={category.name}
            name={category.name}
            components={category.components}
            defaultExpanded={expandAll}
          />
        ))}
      </main>
    </div>
  );
}
