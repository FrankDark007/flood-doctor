import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import {
  ChevronDown,
  ArrowRight,
  FileText,
  Video,
  BookOpen,
  CheckSquare,
  Lightbulb,
  X
} from 'lucide-react';
import Button from '../components/ui/Button';

// Resource types for filtering
type ContentType = 'guide' | 'checklist' | 'article' | 'video' | 'tool';
type ServiceCategory = 'water-damage' | 'mold' | 'fire' | 'commercial' | 'insurance' | 'prevention';
type AudienceLevel = 'beginner' | 'intermediate' | 'expert';

interface Resource {
  id: string;
  title: string;
  description: string;
  contentType: ContentType;
  category: ServiceCategory;
  level: AudienceLevel;
  link: string;
  image?: string;
  featured?: boolean;
}

// Resource data
const RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'What to Do Immediately After Water Damage',
    description: 'Step-by-step emergency checklist for the first 24 hours after discovering water damage in your home.',
    contentType: 'checklist',
    category: 'water-damage',
    level: 'beginner',
    link: '/resources/emergency-checklists/',
    featured: true
  },
  {
    id: '2',
    title: 'Complete Insurance Claims Guide',
    description: 'Navigate the insurance claims process with confidence. Learn documentation requirements and timeline expectations.',
    contentType: 'guide',
    category: 'insurance',
    level: 'beginner',
    link: '/resources/insurance-guide/',
    featured: true
  },
  {
    id: '3',
    title: 'Understanding Mold Growth After Flooding',
    description: 'Learn why mold develops within 24-48 hours of water exposure and how professional remediation works.',
    contentType: 'article',
    category: 'mold',
    level: 'intermediate',
    link: '/resources/homeowner-guides/',
  },
  {
    id: '4',
    title: 'Preventing Frozen Pipe Bursts',
    description: 'Winterization tips and maintenance schedule to protect your plumbing during cold weather.',
    contentType: 'guide',
    category: 'prevention',
    level: 'beginner',
    link: '/resources/homeowner-guides/',
  },
  {
    id: '5',
    title: 'Commercial Water Damage Recovery',
    description: 'Minimize business interruption with strategic restoration planning and documentation.',
    contentType: 'guide',
    category: 'commercial',
    level: 'intermediate',
    link: '/resources/homeowner-guides/',
  },
  {
    id: '6',
    title: 'Fire Damage Assessment Checklist',
    description: 'What to document and avoid after a fire. Critical steps before restoration begins.',
    contentType: 'checklist',
    category: 'fire',
    level: 'beginner',
    link: '/resources/emergency-checklists/',
  },
  {
    id: '7',
    title: 'Understanding Moisture Mapping Technology',
    description: 'How we use infrared cameras and moisture meters to track drying progress.',
    contentType: 'article',
    category: 'water-damage',
    level: 'intermediate',
    link: '/resources/technology/',
  },
  {
    id: '8',
    title: 'Frequently Asked Questions',
    description: 'Answers to common questions about costs, timing, insurance, and the restoration process.',
    contentType: 'article',
    category: 'insurance',
    level: 'beginner',
    link: '/resources/faq/',
    featured: true
  },
  {
    id: '9',
    title: 'Our Communication Process',
    description: 'How we keep you informed throughout your restoration project with updates and documentation.',
    contentType: 'article',
    category: 'water-damage',
    level: 'beginner',
    link: '/resources/communication/',
  },
  {
    id: '10',
    title: 'Mold Prevention After Water Damage',
    description: 'Essential steps to prevent mold growth during and after the drying process.',
    contentType: 'guide',
    category: 'mold',
    level: 'beginner',
    link: '/resources/homeowner-guides/',
  },
  {
    id: '11',
    title: 'Working With Your Insurance Adjuster',
    description: 'Tips for documenting damage and communicating effectively with insurance representatives.',
    contentType: 'article',
    category: 'insurance',
    level: 'intermediate',
    link: '/resources/insurance-guide/',
  },
  {
    id: '12',
    title: 'Commercial Property Maintenance',
    description: 'Preventive measures and maintenance schedules for commercial property managers.',
    contentType: 'guide',
    category: 'commercial',
    level: 'expert',
    link: '/resources/homeowner-guides/',
  }
];

// Filter options
const CONTENT_TYPES = [
  { value: 'guide', label: 'Guides', icon: BookOpen },
  { value: 'checklist', label: 'Checklists', icon: CheckSquare },
  { value: 'article', label: 'Articles', icon: FileText },
  { value: 'video', label: 'Videos', icon: Video },
  { value: 'tool', label: 'Tools', icon: Lightbulb }
];

const SERVICE_CATEGORIES = [
  { value: 'water-damage', label: 'Water Damage' },
  { value: 'mold', label: 'Mold Remediation' },
  { value: 'fire', label: 'Fire & Smoke' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'insurance', label: 'Insurance' },
  { value: 'prevention', label: 'Prevention' }
];

const AUDIENCE_LEVELS = [
  { value: 'beginner', label: 'Getting Started' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'expert', label: 'Advanced' }
];

// Filter dropdown component
interface FilterDropdownProps {
  label: string;
  options: { value: string; label: string }[];
  selected: string[];
  onChange: (values: string[]) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter(v => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all
          ${selected.length > 0
            ? 'bg-[#e8f0fe] text-[#1a73e8] border border-[#1a73e8]'
            : 'bg-white text-[#3c4043] border border-[#dadce0] hover:bg-[#f8f9fa]'
          }
        `}
      >
        {label}
        {selected.length > 0 && (
          <span className="bg-[#1a73e8] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {selected.length}
          </span>
        )}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-[0_4px_8px_rgba(60,64,67,0.15),0_1px_3px_rgba(60,64,67,0.3)] border border-[#dadce0] py-2 min-w-[200px] z-50">
            {options.map(option => (
              <button
                key={option.value}
                onClick={() => toggleOption(option.value)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-[#f8f9fa] transition-colors"
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  selected.includes(option.value)
                    ? 'bg-[#1a73e8] border-[#1a73e8]'
                    : 'border-[#dadce0]'
                }`}>
                  {selected.includes(option.value) && (
                    <svg viewBox="0 0 24 24" className="w-3 h-3 text-white">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </div>
                <span className="text-[#202124]">{option.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Resource card component
const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  const contentTypeConfig = CONTENT_TYPES.find(t => t.value === resource.contentType);
  const Icon = contentTypeConfig?.icon || FileText;

  return (
    <Link
      to={resource.link}
      className="group bg-white rounded-[16px] border border-[#dadce0] overflow-hidden hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] transition-all duration-200"
    >
      {/* Card Image/Placeholder */}
      <div className="aspect-[16/9] bg-[#f8f9fa] flex items-center justify-center border-b border-[#dadce0]">
        <div className="w-16 h-16 rounded-full bg-[#e8f0fe] flex items-center justify-center">
          <Icon size={28} className="text-[#1a73e8]" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Content type badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-[#5f6368] uppercase tracking-wide">
            {contentTypeConfig?.label}
          </span>
          {resource.featured && (
            <span className="text-xs font-medium text-[#1a73e8] bg-[#e8f0fe] px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-medium text-[#202124] leading-6 mb-2 group-hover:text-[#1a73e8] transition-colors line-clamp-2">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#5f6368] leading-5 line-clamp-2 mb-4">
          {resource.description}
        </p>

        {/* Read more */}
        <div className="flex items-center text-[#1a73e8] font-medium text-sm">
          <span>Read more</span>
          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};

const ResourcesHub: React.FC = () => {
  const [contentTypeFilters, setContentTypeFilters] = useState<string[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [levelFilters, setLevelFilters] = useState<string[]>([]);

  // Filter resources
  const filteredResources = useMemo(() => {
    return RESOURCES.filter(resource => {
      if (contentTypeFilters.length > 0 && !contentTypeFilters.includes(resource.contentType)) {
        return false;
      }
      if (categoryFilters.length > 0 && !categoryFilters.includes(resource.category)) {
        return false;
      }
      if (levelFilters.length > 0 && !levelFilters.includes(resource.level)) {
        return false;
      }
      return true;
    });
  }, [contentTypeFilters, categoryFilters, levelFilters]);

  const hasActiveFilters = contentTypeFilters.length > 0 || categoryFilters.length > 0 || levelFilters.length > 0;

  const clearAllFilters = () => {
    setContentTypeFilters([]);
    setCategoryFilters([]);
    setLevelFilters([]);
  };

  // Active filter chips
  const activeFilters = [
    ...contentTypeFilters.map(v => ({ type: 'content', value: v, label: CONTENT_TYPES.find(t => t.value === v)?.label || v })),
    ...categoryFilters.map(v => ({ type: 'category', value: v, label: SERVICE_CATEGORIES.find(c => c.value === v)?.label || v })),
    ...levelFilters.map(v => ({ type: 'level', value: v, label: AUDIENCE_LEVELS.find(l => l.value === v)?.label || v }))
  ];

  const removeFilter = (type: string, value: string) => {
    if (type === 'content') {
      setContentTypeFilters(prev => prev.filter(v => v !== value));
    } else if (type === 'category') {
      setCategoryFilters(prev => prev.filter(v => v !== value));
    } else if (type === 'level') {
      setLevelFilters(prev => prev.filter(v => v !== value));
    }
  };

  return (
    <main className="flex-grow bg-white min-h-screen">
      <PageMeta
        title="Resources & Guides | Flood Doctor"
        description="Find guides, checklists, and answers for water damage, insurance claims, and home restoration."
      />

      {/* Hero Section - Google Resources Style */}
      <section className="bg-[#f8f9fa] border-b border-[#dadce0]">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[40px] md:leading-[52px] lg:leading-[64px] font-normal text-[#202124] mb-6">
              Find answers and inspiration
            </h1>
            <p className="text-lg text-[#3c4043] leading-7">
              Explore guides, checklists, and resources to help you navigate water damage restoration, insurance claims, and home maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar - Google Resources Style */}
      <section className="sticky top-[64px] bg-white border-b border-[#dadce0] z-30">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <FilterDropdown
              label="Content Type"
              options={CONTENT_TYPES}
              selected={contentTypeFilters}
              onChange={setContentTypeFilters}
            />
            <FilterDropdown
              label="Service"
              options={SERVICE_CATEGORIES}
              selected={categoryFilters}
              onChange={setCategoryFilters}
            />
            <FilterDropdown
              label="Experience Level"
              options={AUDIENCE_LEVELS}
              selected={levelFilters}
              onChange={setLevelFilters}
            />

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1 px-3 py-2 text-sm text-[#1a73e8] font-medium hover:bg-[#f8f9fa] rounded-full transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Active Filter Chips */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {activeFilters.map(filter => (
                <button
                  key={`${filter.type}-${filter.value}`}
                  onClick={() => removeFilter(filter.type, filter.value)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#e8f0fe] text-[#1a73e8] rounded-full text-sm font-medium hover:bg-[#d2e3fc] transition-colors"
                >
                  {filter.label}
                  <X size={14} />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Resource Grid */}
      <section className="py-8 lg:py-12">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16">
          {/* Results count */}
          <p className="text-sm text-[#5f6368] mb-6">
            Showing {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
          </p>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#f8f9fa] rounded-full flex items-center justify-center">
                <FileText size={28} className="text-[#5f6368]" />
              </div>
              <h3 className="text-lg font-medium text-[#202124] mb-2">No resources found</h3>
              <p className="text-sm text-[#5f6368] mb-4">Try adjusting your filters to find what you're looking for.</p>
              <button
                onClick={clearAllFilters}
                className="text-[#1a73e8] font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Help CTA Section */}
      <section className="bg-[#f8f9fa] border-t border-[#dadce0] py-16 lg:py-20">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16 text-center">
          <h2 className="text-[24px] lg:text-[28px] font-normal text-[#202124] mb-4">
            Still have questions?
          </h2>
          <p className="text-base text-[#3c4043] mb-8 max-w-lg mx-auto">
            Our team is available 24/7 to help you with any questions about water damage restoration.
          </p>
          <div className="hidden lg:flex justify-center gap-4">
            <Button to="/contact/" variant="secondary" size="md">
              Contact us
            </Button>
            <Button to="/resources/faq/" variant="primary" size="md">
              View FAQ
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile Spacer for global sticky CTA */}
      <div className="h-20 lg:hidden" />
    </main>
  );
};

export default ResourcesHub;
