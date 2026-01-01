import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  centered?: boolean;
}

/**
 * Tab Navigation Component
 * Based on: workspace.google.com
 *
 * Features:
 * - Pill-shaped container
 * - Animated active indicator
 * - Centered or left-aligned
 */
const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  defaultTab,
  onTabChange,
  centered = true,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className={`${centered ? 'flex justify-center' : ''}`}>
      <nav
        className="inline-flex bg-subtle rounded-full p-1 heading-section"
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              px-6 py-2.5 text-sm font-medium rounded-full
              transition-all duration-200
              ${activeTab === tab.id
                ? 'bg-white text-text shadow-sm'
                : 'text-muted hover:text-text'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
