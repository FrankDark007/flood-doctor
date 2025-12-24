import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface IndustryTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
}

/**
 * Industry Tabs Component
 * Based on: workspace.google.com/industries/healthcare
 *
 * Features:
 * - Pill-shaped container
 * - Centered tabs
 * - Active state indicator
 */
const IndustryTabs: React.FC<IndustryTabsProps> = ({
  tabs,
  defaultTab,
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <nav className="sticky top-16 z-20 py-4 bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-center">
          <div className="inline-flex bg-subtle rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`
                  px-6 py-3 text-base font-medium rounded-full
                  transition-colors duration-200
                  ${
                    activeTab === tab.id
                      ? 'bg-white text-text shadow-sm'
                      : 'text-muted hover:text-text'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default IndustryTabs;
