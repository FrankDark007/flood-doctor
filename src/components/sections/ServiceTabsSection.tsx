import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedTabButton from '../ui/AnimatedTabButton';

// TypeScript declaration for View Transitions API
declare global {
  interface Document {
    startViewTransition?: (callback: () => void | Promise<void>) => {
      finished: Promise<void>;
      ready: Promise<void>;
      updateCallbackDone: Promise<void>;
    };
  }
}

// SVG Icons for tabs
const TabIcons = {
  'water-damage': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z"/>
    </svg>
  ),
  'flood': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M21.98 14H22c-.02-4-1.82-7.3-4.15-9.78l-1.42 1.42C18.4 7.72 19.86 10.53 19.98 14h2zM5.59 5.64l-1.42-1.42C1.82 6.7.02 10-.02 14h2.01c.13-3.47 1.59-6.28 3.6-8.36zM12 6c-3.87 0-7 3.13-7 7 0 2.38 1.19 4.47 3 5.74V22h2v-3h4v3h2v-3.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm1 10h-2v-4h2v4z"/>
    </svg>
  ),
  'mold': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M19.5 6c-1.31 0-2.37 1.01-2.48 2.3-1.88-.5-2.84-1.8-5.02-1.8-2.19 0-3.14 1.3-5.02 1.8C6.87 7.01 5.81 6 4.5 6 3.12 6 2 7.12 2 8.5c0 1.38 1.12 2.5 2.5 2.5.21 0 .41-.03.61-.08-.05.25-.11.49-.11.76 0 2.06 1.61 3.73 3.63 3.87C8.24 16.06 8 16.7 8 17.4V22h8v-4.6c0-.7-.24-1.34-.63-1.85 2.02-.14 3.63-1.81 3.63-3.87 0-.27-.06-.51-.11-.76.2.05.4.08.61.08 1.38 0 2.5-1.12 2.5-2.5S20.88 6 19.5 6z"/>
    </svg>
  ),
  'fire': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
    </svg>
  ),
  'sewage': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  'commercial': (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
    </svg>
  ),
};

// Service Tabs data
const SERVICE_TABS = [
  {
    id: 'water-damage',
    label: 'Water Damage',
    heading: 'Make the most of our expertise',
    description: 'With our water damage restoration, you get comprehensive service all-in-one. Powered by IICRC-certified technicians, reach complete recovery faster with industrial equipment and real-time moisture monitoring from a single team.',
    image: 'https://www.gstatic.com/marketing-cms/assets/images/ads/11/b5/199a273842149f015e646cde9f05/a.png',
    link: '/services/residential/water-damage-restoration/',
    linkText: 'Explore Water Damage'
  },
  {
    id: 'flood',
    label: 'Flood',
    heading: 'Start with extraction',
    description: 'Help restore your property by getting our emergency crew on-site within 60 minutes. We handle complete water removal, sanitization, and structural drying around the clock.',
    image: 'https://www.gstatic.com/marketing-cms/assets/images/ads/7c/eb/944ddcd84958b6dd9c3c94a1b740/media.png',
    link: '/services/residential/flood-cleanup/',
    linkText: 'Explore Flood Cleanup'
  },
  {
    id: 'mold',
    label: 'Mold',
    heading: 'Eliminate the threat',
    description: 'Build a healthier home with professional mold remediation. We identify, contain, and remove mold using HEPA filtration and antimicrobial treatments to protect your family.',
    image: 'https://www.gstatic.com/marketing-cms/assets/images/ads/fe/4f/6792810f4c598ede6a9c66cdf711/media.png',
    link: '/services/residential/mold-remediation/',
    linkText: 'Explore Mold Remediation'
  },
  {
    id: 'fire',
    label: 'Fire & Smoke',
    heading: 'Restore after disaster',
    description: 'Show up when you need it most with complete fire and smoke damage restoration. We handle soot removal, odor elimination, and structural repairs with insurance coordination.',
    image: 'https://www.gstatic.com/marketing-cms/assets/images/ads/9c/79/e915aa6741d38f09cb07ad04f8d6/media.png',
    link: '/services/residential/fire-smoke-restoration/',
    linkText: 'Explore Fire Restoration'
  },
  {
    id: 'sewage',
    label: 'Sewage',
    heading: 'Handle hazardous situations',
    description: 'Boost safety with professional sewage cleanup. We safely remove contaminated materials, sanitize affected areas, and restore your property to safe, livable conditions.',
    image: 'https://www.gstatic.com/marketing-cms/assets/images/ads/3e/e5/a8612f15419eb8b5bfac3c2bcf8f/media.png',
    link: '/services/residential/sewage-cleanup/',
    linkText: 'Explore Sewage Cleanup'
  },
  {
    id: 'commercial',
    label: 'Commercial',
    heading: 'Protect your business',
    description: 'Reach minimal downtime with our commercial restoration services. We work around your schedule to restore offices, retail spaces, and industrial facilities quickly.',
    image: 'https://www.gstatic.com/marketing-cms/assets/images/ads/7b/fe/622da4ca45a9944ac0cb73f60144/media.png',
    link: '/services/commercial/',
    linkText: 'Explore Commercial'
  }
];

const TAB_ROTATION_DURATION = 6000;

interface ServiceTabsSectionProps {
  title?: string;
  highlightWord?: string;
}

const ServiceTabsSection: React.FC<ServiceTabsSectionProps> = ({
  title = 'Flood Doctor gives you many ways to restore with',
  highlightWord = 'Water Damage'
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabProgress, setTabProgress] = useState(0);
  const [isTabAutoPlaying, setIsTabAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isTabAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setTabProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (50 / TAB_ROTATION_DURATION) * 100;
      });
    }, 50);

    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SERVICE_TABS.length);
      setTabProgress(0);
    }, TAB_ROTATION_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(tabInterval);
    };
  }, [isTabAutoPlaying, activeTab]);

  const handleTabClick = (index: number) => {
    const performUpdate = () => {
      setActiveTab(index);
      setTabProgress(0);
      setIsTabAutoPlaying(false);
      setTimeout(() => setIsTabAutoPlaying(true), 100);
    };

    if (document.startViewTransition) {
      document.startViewTransition(() => performUpdate());
    } else {
      performUpdate();
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <style>{`
        .service-tabs-grid {
          display: grid;
          align-items: center;
          column-gap: 28px;
          grid-template-columns: repeat(4, minmax(5px, 1fr));
        }
        @media (min-width: 600px) {
          .service-tabs-grid {
            column-gap: 40px;
            grid-template-columns: repeat(10, minmax(5px, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .service-tabs-grid {
            column-gap: 48px;
            grid-template-columns: repeat(12, minmax(5px, 1fr));
          }
        }
        .service-tab-list-container {
          grid-column: span 4;
          position: relative;
          width: calc(-16px + 100vw);
          left: 50%;
          transform: translateX(-50%);
        }
        @media (min-width: 600px) {
          .service-tab-list-container {
            grid-column: span 10;
          }
        }
        @media (min-width: 1024px) {
          .service-tab-list-container {
            grid-column: span 3;
            width: unset;
            left: unset;
            transform: none;
          }
        }
        .service-tab-list {
          display: grid;
          grid-auto-flow: column;
          gap: 16px;
          padding: 5px 28px;
          overflow: auto;
          max-width: min-content;
          scrollbar-width: none;
        }
        .service-tab-list::-webkit-scrollbar { display: none; }
        @media (min-width: 600px) {
          .service-tab-list {
            padding: 4px 40px;
            margin: 0 auto;
          }
        }
        @media (min-width: 1024px) {
          .service-tab-list {
            grid-auto-flow: row;
            gap: 20px;
            padding: 0;
            overflow: visible;
          }
        }
        .service-tab-panels {
          grid-column: span 4;
        }
        @media (min-width: 600px) {
          .service-tab-panels { grid-column: span 10; }
        }
        @media (min-width: 1024px) {
          .service-tab-panels { grid-column: span 9; }
        }
        .service-tab-image {
          grid-column: span 4;
          border-radius: 24px;
          margin: 24px auto 0;
        }
        @media (min-width: 600px) {
          .service-tab-image { grid-column: span 10; }
        }
        @media (min-width: 1024px) {
          .service-tab-image { grid-column: span 7; margin: 0; }
        }
        .service-tab-copy {
          grid-column: span 4;
          width: 319px;
          text-align: center;
          margin: 24px auto 0;
        }
        @media (min-width: 600px) {
          .service-tab-copy {
            grid-column: span 8;
            width: 445px;
            margin-top: 36px;
          }
        }
        @media (min-width: 1024px) {
          .service-tab-copy {
            grid-column: span 5;
            width: 261px;
            text-align: start;
            margin: 0;
          }
        }
        .service-section-title {
          grid-column: span 4;
          text-align: center;
          margin-bottom: 48px;
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: #202124;
        }
        @media (min-width: 600px) {
          .service-section-title {
            grid-column: span 10;
            font-size: 44px;
          }
        }
        @media (min-width: 1024px) {
          .service-section-title {
            grid-column: span 12;
            font-size: 48px;
          }
        }
      `}</style>

      <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="service-tabs-grid">
          <h2 className="service-section-title heading-section">
            {title} <span className="text-[#1a73e8]">{highlightWord}</span>
          </h2>
        </div>

        <div className="service-tabs-grid">
          <div className="service-tab-list-container">
            <div className="service-tab-list" role="tablist" aria-label="Service categories">
              {SERVICE_TABS.map((tab, index) => {
                const nextTabIndex = (activeTab + 1) % SERVICE_TABS.length;
                const isNextActive = index === nextTabIndex;

                return (
                  <AnimatedTabButton
                    key={tab.id}
                    isActive={activeTab === index}
                    isNextActive={isNextActive}
                    progress={isNextActive ? tabProgress : 0}
                    onClick={() => handleTabClick(index)}
                    icon={TabIcons[tab.id as keyof typeof TabIcons]}
                    label={tab.label}
                    tabId={`service-tab-${tab.id}`}
                    panelId={`service-panel-${tab.id}`}
                  />
                );
              })}
            </div>
          </div>

          <div className="service-tab-panels">
            {SERVICE_TABS.map((tab, index) => (
              <div
                key={tab.id}
                id={`service-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`service-tab-${tab.id}`}
                hidden={activeTab !== index}
                className={`transition-all duration-500 ease-out ${
                  activeTab === index ? 'opacity-100 block' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="service-tabs-grid">
                  <div className="service-tab-image">
                    <img
                      src={tab.image}
                      alt={tab.label}
                      className="rounded-3xl max-w-full h-auto"
                    />
                  </div>

                  <div className="service-tab-copy">
                    <h3 className="text-[28px] lg:text-[36px] font-medium text-[#202124] mb-4 leading-tight heading-section">
                      {tab.heading}
                    </h3>
                    <p className="text-base text-[#3c4043] leading-relaxed mb-8">
                      {tab.description}
                    </p>
                    <Link
                      to={tab.link}
                      className="inline-flex items-center gap-3 text-[#1a73e8] font-medium hover:text-[#174ea6] transition-colors group"
                    >
                      <span className="w-12 h-12 rounded-full bg-[#1a73e8] flex items-center justify-center group-hover:bg-[#174ea6] transition-colors">
                        <ArrowRight size={24} className="text-white" />
                      </span>
                      <span>{tab.linkText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTabsSection;
