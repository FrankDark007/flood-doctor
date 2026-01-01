import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterGroup {
  label: string;
  options: { value: string; label: string; count?: number }[];
}

interface FilterSidebarProps {
  filterGroups: FilterGroup[];
  onFilterChange?: (filters: Record<string, string[]>) => void;
  resultCount?: number;
}

/**
 * Filter Sidebar Component
 * Based on: business.google.com/us/resources/
 *
 * Features:
 * - Expandable filter groups
 * - Checkbox filters
 * - Result count display
 */
const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filterGroups,
  onFilterChange,
  resultCount,
}) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(filterGroups.map((g) => [g.label, true]))
  );
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleGroup = (label: string) => {
    setExpandedGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const toggleFilter = (group: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[group] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      const newFilters = { ...prev, [group]: updated };
      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  return (
    <aside className="w-full md:w-[280px] shrink-0">
      {/* Result Count */}
      {resultCount !== undefined && (
        <div className="mb-6">
          <span className="text-xs font-normal text-muted uppercase tracking-wide">
            FILTER BY:
          </span>
          <p className="text-sm text-muted mt-2">{resultCount} results</p>
        </div>
      )}

      {/* Filter Groups */}
      {filterGroups.map((group) => (
        <div key={group.label} className="border-b border-border py-4">
          <button
            onClick={() => toggleGroup(group.label)}
            className="w-full flex items-center justify-between text-left heading-section"
          >
            <span className="text-lg font-normal text-text">
              {group.label}
            </span>
            {expandedGroups[group.label] ? (
              <ChevronUp size={20} className="text-muted" />
            ) : (
              <ChevronDown size={20} className="text-muted" />
            )}
          </button>

          {expandedGroups[group.label] && (
            <div className="mt-4 space-y-3">
              {group.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group heading-section"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters[group.label]?.includes(option.value) || false}
                    onChange={() => toggleFilter(group.label, option.value)}
                    className="w-5 h-5 rounded border-border text-primary focus:ring-primary heading-section"
                  />
                  <span className="text-base text-muted group-hover:text-text transition-colors">
                    {option.label}
                    {option.count !== undefined && (
                      <span className="text-muted ml-1">({option.count})</span>
                    )}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
