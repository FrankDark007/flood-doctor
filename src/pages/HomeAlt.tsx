import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight, Phone, MessageSquare, Pause, Play, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import PageMeta from '../components/ui/PageMeta';

// TypeScript declaration for View Transitions API (not yet in all TS libs)
declare global {
  interface Document {
    startViewTransition?: (callback: () => void | Promise<void>) => {
      finished: Promise<void>;
      ready: Promise<void>;
      updateCallbackDone: Promise<void>;
    };
  }
  interface CSSStyleDeclaration {
    viewTransitionName?: string;
  }
}

// Animated Tab Button with SVG border progress - Google style using <rect> with pathLength
// The progress animation shows on the NEXT tab (the one about to become active), not the current active tab
interface AnimatedTabButtonProps {
  isActive: boolean;
  isNextActive: boolean; // TRUE if this tab is next in line to become active
  progress: number; // 0-100 - only used when isNextActive is true
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  tabId: string; // Unique ID for ARIA
  panelId: string; // ID of the controlled panel for aria-controls
}

const AnimatedTabButton: React.FC<AnimatedTabButtonProps> = ({
  isActive,
  isNextActive,
  progress,
  onClick,
  icon,
  label,
  tabId,
  panelId,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, borderRadius: 0 });

  // Measure button dimensions and border-radius
  useEffect(() => {
    const measureButton = () => {
      if (buttonRef.current) {
        const width = buttonRef.current.offsetWidth;
        const height = buttonRef.current.offsetHeight;
        const borderRadius = height / 2;
        setDimensions({ width, height, borderRadius });
      }
    };

    measureButton();
    const resizeObserver = new ResizeObserver(measureButton);
    if (buttonRef.current) {
      resizeObserver.observe(buttonRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [label]);

  // Calculate the perimeter of a rounded rectangle
  const calculatePathLength = (w: number, h: number, r: number) => {
    const horizontalStraight = Math.max(0, w - 2 * r);
    const verticalStraight = Math.max(0, h - 2 * r);
    return 2 * horizontalStraight + 2 * verticalStraight + 2 * Math.PI * r;
  };

  const pathLength = calculatePathLength(dimensions.width, dimensions.height, dimensions.borderRadius);
  const strokeDashoffset = pathLength * (1 - progress / 100);
  const showProgressAnimation = isNextActive && !isActive && dimensions.width > 0;

  return (
    <button
      ref={buttonRef}
      id={tabId}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      className="relative flex items-center justify-center whitespace-nowrap box-border transition-colors duration-200"
      style={{
        height: '52px',
        padding: '14px 24px',
        borderRadius: '1000px',
        borderWidth: '1px',
        borderStyle: 'solid',
        // Active: transparent border, dark bg, white text
        // Inactive: #e8eaed border, white bg, #5f6368 text
        borderColor: isActive ? 'transparent' : '#e8eaed',
        backgroundColor: isActive ? '#202124' : '#fff',
        color: isActive ? '#fff' : '#5f6368',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 1.5,
        fontFamily: '"Google Sans", Roboto, Arial, Helvetica, sans-serif',
        cursor: 'pointer',
        '--total-path-length': pathLength,
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = '#e8eaed';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = '#fff';
        }
      }}
    >
      {/* SVG Border Animation - shows on the NEXT tab */}
      {showProgressAnimation && (
        <svg
          className="absolute pointer-events-none"
          style={{
            left: '-1px',
            top: '0',
            width: 'calc(100% + 2px)',
            height: '52px',
            borderRadius: '1000px',
            fill: 'none',
            overflow: 'hidden',
          }}
        >
          <rect
            ref={rectRef}
            x="0"
            y="0"
            width="100%"
            height="52"
            rx="26"
            ry="26"
            fill="none"
            stroke="#202124"
            strokeWidth="4"
            pathLength={pathLength}
            strokeDasharray={pathLength}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 50ms linear' }}
          />
        </svg>
      )}

      {/* Icon - 24x24 with 11px margin-right */}
      <span
        style={{
          width: '24px',
          height: '24px',
          marginRight: '11px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fill: 'currentcolor',
        }}
      >
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
};

// Rotating headline words with colors and circle backgrounds - matches Google Ads exactly
const ROTATING_HEADLINES = [
  { text: 'Drive sales', color: '#1a73e8', circleBg: '#e8f0fe' },     // Blue
  { text: 'Stand out', color: '#c5221f', circleBg: '#fce8e6' },       // Red
  { text: 'Be found', color: '#f29900', circleBg: '#fef7e0' },        // Amber
  { text: 'Show up', color: '#1e8e3e', circleBg: '#e6f4ea' },         // Green
];

// Hero images that rotate with the headlines (from Google's CDN)
const HERO_IMAGES = [
  'https://www.gstatic.com/marketing-cms/assets/images/0e/eb/44d017894eb69cc6c1bfbf80f4e6/unnamed-18.png', // Shopping ad
  'https://www.gstatic.com/marketing-cms/assets/images/93/59/e34b7a0e4a7ca1b6f2fc7c5fac08/unnamed-19.png', // YouTube ad
  'https://www.gstatic.com/marketing-cms/assets/images/f0/0c/56a768bc4d6da75b0a2b0b1d0dc6/unnamed-20.png', // Search ad
  'https://www.gstatic.com/marketing-cms/assets/images/8e/1d/d47e2bd94dc9b0e5f6f9fa0e5a8c/unnamed-21.png', // Display ad
];

// SVG Icons for tabs - matching Google's icon style
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

// Service Tabs data - matches Google's Performance Max tabs exactly
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

// Goals with colored icons - matches Google exactly
const GOALS = [
  {
    icon: '📋',
    iconBg: '#fef7e0',
    iconColor: '#f9ab00',
    title: 'Maximize recovery speed',
    description: 'Get faster drying times and complete restoration.',
    link: '/services/residential/'
  },
  {
    icon: '📊',
    iconBg: '#e8f0fe',
    iconColor: '#1a73e8',
    title: 'Track moisture levels',
    description: 'Monitor progress with real-time moisture mapping.',
    link: '/resources/technology/'
  },
  {
    icon: '🏠',
    iconBg: '#fce8e6',
    iconColor: '#d93025',
    title: 'Protect your home',
    description: 'Prevent secondary damage and mold growth.',
    link: '/services/residential/mold-remediation/'
  },
  {
    icon: '📢',
    iconBg: '#f1f3f4',
    iconColor: '#5f6368',
    title: 'Insurance coordination',
    description: 'We handle claims documentation for you.',
    link: '/resources/insurance-guide/'
  },
  {
    icon: '📱',
    iconBg: '#e6f4ea',
    iconColor: '#1e8e3e',
    title: '24/7 emergency response',
    description: '60-minute arrival time, any time of day.',
    link: '/contact/'
  }
];

// Power/Features section - matches Google's "Power of Google" section
const FEATURES = [
  {
    title: 'Reach customers wherever they are',
    description: 'Show up at the right time across Northern Virginia, DC, and Maryland. Our fleet is strategically positioned for rapid 60-minute response to maximize your recovery speed.',
    visual: 'icons' // Grid of service area icons
  },
  {
    title: 'Track, learn, and optimize for results',
    description: 'Track moisture levels to get real-time progress updates. Our technology-driven approach helps you understand exactly what\'s happening and when your property will be dry.',
    visual: 'chart' // Conversions chart
  },
  {
    title: 'Stay in full control of your costs',
    description: 'Get transparent pricing, work directly with insurance, and adjust services at any time. We help you understand costs upfront and make the most of your coverage.',
    visual: 'budget' // Budget slider
  }
];

// Success stories - matches Google's carousel (with photos like Google Ads testimonials)
const SUCCESS_STORIES = [
  {
    stat: '60',
    statUnit: 'min',
    statLabel: 'response time',
    quote: '"Flood Doctor arrived within an hour and immediately started extracting water. Professional, efficient, and thorough."',
    author: 'Sarah M.',
    role: 'Homeowner',
    location: 'Arlington, VA',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face'
  },
  {
    stat: '100',
    statUnit: '%',
    statLabel: 'insurance covered',
    quote: '"They handled everything with my insurance company. I didn\'t have to worry about a single claim document."',
    author: 'Mike T.',
    role: 'Property Manager',
    location: 'Fairfax, VA',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face'
  },
  {
    stat: '3',
    statUnit: 'days',
    statLabel: 'full restoration',
    quote: '"Our basement was completely flooded. They had us back to normal in just three days. Incredible work."',
    author: 'Jennifer L.',
    role: 'Homeowner',
    location: 'Alexandria, VA',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face'
  },
  {
    stat: '4.9',
    statUnit: '★',
    statLabel: 'Google rating',
    quote: '"Highly recommend! The team was knowledgeable, courteous, and did an amazing job restoring our home."',
    author: 'David K.',
    role: 'Business Owner',
    location: 'Reston, VA',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face'
  }
];

// FAQ data
const FAQS = [
  {
    question: 'What types of water damage do you handle?',
    answer: 'We handle all types of water damage including burst pipes, flooding, sewage backups, storm damage, appliance leaks, and roof leaks. Our IICRC-certified technicians are trained to address Category 1 (clean water), Category 2 (gray water), and Category 3 (black water) damage.'
  },
  {
    question: 'How quickly can you respond to an emergency?',
    answer: 'We offer 24/7 emergency response with an average arrival time of 60 minutes in the Northern Virginia area. Our dispatch team is available around the clock, and our crews are strategically positioned throughout the region for rapid response.'
  },
  {
    question: 'Do you work with insurance companies?',
    answer: 'Yes, we work directly with all major insurance companies. We handle the documentation, communicate with adjusters, and can bill your insurance directly. This streamlines the claims process and reduces stress during an already difficult time.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve all of Northern Virginia including Arlington, Alexandria, Fairfax, Loudoun, and Prince William counties. We also serve Washington DC and parts of Maryland. Visit our locations page for a complete list of service areas.'
  }
];

// Tab rotation duration in milliseconds
const TAB_ROTATION_DURATION = 6000;

const HomeAlt: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [prevHeadlineIndex, setPrevHeadlineIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [tabProgress, setTabProgress] = useState(0);
  const [isTabAutoPlaying, setIsTabAutoPlaying] = useState(true);

  // Rotate headlines like Google Ads - track previous index for exit animation
  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => {
        setPrevHeadlineIndex(prev); // Track previous for exit animation
        return (prev + 1) % ROTATING_HEADLINES.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Auto-rotate tabs with progress animation
  useEffect(() => {
    if (!isTabAutoPlaying) return;

    // Progress animation - update every 50ms for smooth animation
    const progressInterval = setInterval(() => {
      setTabProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (50 / TAB_ROTATION_DURATION) * 100;
      });
    }, 50);

    // Tab rotation
    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SERVICE_TABS.length);
      setTabProgress(0);
    }, TAB_ROTATION_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(tabInterval);
    };
  }, [isTabAutoPlaying, activeTab]);

  // Handle manual tab click - reset progress and continue auto-play
  // Uses View Transitions API for smooth panel changes with fallback
  const handleTabClick = (index: number) => {
    const performUpdate = () => {
      setActiveTab(index);
      setTabProgress(0);
      // Briefly pause then resume auto-play
      setIsTabAutoPlaying(false);
      setTimeout(() => setIsTabAutoPlaying(true), 100);
    };

    // Check if View Transitions API is supported
    if (document.startViewTransition) {
      document.startViewTransition(() => performUpdate());
    } else {
      // Fallback for browsers without View Transitions support
      performUpdate();
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleAllFaqs = () => {
    if (expandedFaqs.length === FAQS.length) {
      setExpandedFaqs([]);
    } else {
      setExpandedFaqs(FAQS.map((_, i) => i));
    }
  };

  return (
    <main className="flex-grow bg-white">
      <PageMeta
        title="Emergency Water Damage Restoration | Flood Doctor"
        description="24/7 emergency water damage restoration in Northern Virginia. Fast response, insurance direct billing, IICRC certified. Call now for immediate help."
      />

      {/* Promo Banner - Pill-shaped like Google Ads */}
      <section className="py-1">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Pill-shaped banner container */}
          <button
            className="w-full flex items-center justify-center gap-3 px-7 py-1.5 mx-auto rounded-full bg-[#e8f0fe] hover:bg-[#d2e3fc] transition-colors cursor-pointer"
            style={{ height: '48px', maxWidth: 'fit-content' }}
            onClick={() => window.location.href = '/request/'}
          >
            <div className="flex items-center justify-center gap-4">
              {/* Icon - 36x36 */}
              <div className="w-9 h-9 flex-shrink-0" aria-hidden="true">
                <img
                  src="https://www.gstatic.com/marketing-cms/assets/images/ads/b0/43/758e11a2431593d15efc3ef7d717/bluehorn-unselected.png"
                  alt=""
                  width="36"
                  height="36"
                  className="w-9 h-9"
                />
              </div>

              {/* Copy text */}
              <span
                className="text-[16px] leading-6"
                style={{ color: '#1967d2' }}
              >
                <strong className="font-medium">New to Flood Doctor?</strong>{' '}
                Get a free assessment and earn same-day emergency response.
              </span>

              {/* CTA with arrow circle */}
              <span className="flex items-center gap-2 font-medium text-[16px] flex-shrink-0" style={{ color: '#1967d2' }}>
                <span>Schedule now</span>
                <span className="w-[28px] h-[28px] rounded-full bg-[#1a73e8] flex items-center justify-center">
                  <ArrowRight size={16} className="text-white" />
                </span>
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Hero Section - Google Ads style with drop animation */}
      <section
        className="relative overflow-visible bg-white"
        style={{ marginTop: '60px', marginBottom: '60px' }}
      >
        {/* CSS for drop animation */}
        <style>{`
          @keyframes dropIn {
            from {
              opacity: 0;
              transform: translateY(-100%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes dropOut {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(100%);
            }
          }
          .headline-enter {
            animation: dropIn 0.5s ease-out forwards;
          }
          .headline-exit {
            animation: dropOut 0.5s ease-out forwards;
          }
          .headline-hidden {
            opacity: 0;
            transform: translateY(-100%);
          }
        `}</style>

        {/* Main container */}
        <div className="relative max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero headline row - contains rotating text + circle positioned together */}
          <div className="relative flex flex-col items-center justify-center">

            {/* Mobile Circle - shown ABOVE text on smaller screens (like Google) */}
            <div
              className="lg:hidden relative mb-4"
              style={{
                width: '240px',
                height: '240px',
              }}
            >
              <div
                className="absolute inset-0 grid place-items-center"
                style={{
                  clipPath: 'circle(50%)',
                  backgroundColor: ROTATING_HEADLINES[headlineIndex].circleBg,
                  transition: 'background-color 0.3s linear',
                }}
              >
                {HERO_IMAGES.map((src, index) => (
                  <div
                    key={index}
                    className="transition-opacity duration-500"
                    style={{
                      gridColumnStart: 1,
                      gridRowStart: 1,
                      opacity: headlineIndex === index ? 1 : 0,
                    }}
                  >
                    <img
                      src={src}
                      alt=""
                      className="max-w-[190px] max-h-[170px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Headlines + Circle wrapper - uses position relative for circle positioning */}
            <div className="relative flex flex-row items-center justify-center w-full">

              {/* Animated Headlines Container - with overflow hidden for drop effect */}
              <div
                className="relative text-center lg:text-right"
                style={{ overflow: 'hidden', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {/* Visually hidden h1 for accessibility */}
                <h1 className="sr-only">
                  {ROTATING_HEADLINES[headlineIndex].text} with Flood Doctor
                </h1>

                {/* Grid container for stacked headlines */}
                <div className="relative grid" style={{ height: '120px' }}>
                  {ROTATING_HEADLINES.map((headline, index) => {
                    const isActive = headlineIndex === index;
                    const isExiting = prevHeadlineIndex === index && !isActive;

                    return (
                      <h2
                        key={index}
                        aria-hidden={!isActive}
                        className={`text-[48px] sm:text-[80px] lg:text-[120px] ${
                          isActive ? 'headline-enter' : isExiting ? 'headline-exit' : 'headline-hidden'
                        }`}
                        style={{
                          gridColumnStart: 1,
                          gridRowStart: 1,
                          position: 'relative',
                          zIndex: 2, // Above the circle
                          fontFamily: '"Google Sans Display", Arial, Helvetica, sans-serif',
                          fontWeight: 700,
                          lineHeight: 1,
                          letterSpacing: '-2.5px',
                          color: headline.color,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {headline.text}
                      </h2>
                    );
                  })}
                </div>
              </div>

              {/* Circular Animated Image - positioned to overlap on the right (LARGER like Google ~400px) */}
              <div
                className="relative flex-shrink-0 hidden lg:block"
                style={{
                  width: '400px',
                  height: '400px',
                  marginLeft: '-120px', // More overlap into headline area
                  marginTop: '-60px',
                }}
              >
                <div
                  className="absolute inset-0 grid place-items-center"
                  style={{
                    clipPath: 'circle(50%)',
                    backgroundColor: ROTATING_HEADLINES[headlineIndex].circleBg,
                    transition: 'background-color 0.3s linear',
                    zIndex: 1, // Behind the text
                  }}
                >
                  {/* All images stacked in same grid cell with opacity transition */}
                  {HERO_IMAGES.map((src, index) => (
                    <div
                      key={index}
                      className="transition-opacity duration-500"
                      style={{
                        gridColumnStart: 1,
                        gridRowStart: 1,
                        opacity: headlineIndex === index ? 1 : 0,
                      }}
                    >
                      <img
                        src={src}
                        alt=""
                        className="max-w-[320px] max-h-[280px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Static Text Row - "with Flood Doctor." - stays fixed */}
            <div className="w-full text-center relative mt-6 lg:mt-4">
              <p
                className="m-0 p-0 text-[40px] sm:text-[80px] lg:text-[110px] inline-block"
                style={{
                  fontFamily: '"Google Sans Display", Arial, Helvetica, sans-serif',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-2.5px',
                  color: '#3c4043',
                }}
              >
                with Flood Doctor<span className="text-[#3c4043]">.</span>
              </p>

              {/* Play/Pause Button - circular outline style like Google */}
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="hidden lg:inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#dadce0] bg-transparent hover:bg-[#f1f3f4] transition-colors ml-4 align-middle"
                style={{ verticalAlign: 'middle', marginBottom: '20px' }}
                aria-label={isAnimating ? 'Pause animation' : 'Play animation'}
              >
                {isAnimating ? (
                  <Pause size={18} className="text-[#5f6368]" />
                ) : (
                  <Play size={18} className="text-[#5f6368] ml-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Description Container */}
        <div
          className="text-center mx-7 sm:mx-10 lg:mx-[72px] xl:mx-auto xl:max-w-[1296px]"
          style={{ marginTop: '48px', marginBottom: '36px' }}
        >
          <div
            className="relative text-center"
            style={{
              fontFamily: '"Google Sans Text", Arial, Helvetica, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.55556,
              color: '#3c4043',
            }}
          >
            Whatever your restoration goal, get fast results with our 24/7 emergency response and certified technicians.
          </div>

          {/* CTA Buttons Container */}
          <div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 mt-9"
            style={{ minWidth: '185px' }}
          >
            {/* Primary CTA - Start now */}
            <Link
              to="/request/"
              className="inline-flex items-center justify-center sm:justify-around px-6 py-3 min-w-[96px] min-h-[48px] text-white bg-[#1a73e8] rounded-full border border-transparent transition-all duration-200 hover:bg-[#185abc] hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]"
              style={{
                fontFamily: '"Google Sans", Arial, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '0.5px',
                lineHeight: 1.5,
              }}
            >
              Start now
            </Link>

            {/* Secondary CTA - Chat */}
            <button
              className="inline-flex items-center justify-center gap-2 px-4 py-3 min-w-[96px] min-h-[48px] text-[#1a73e8] bg-white rounded-full border border-[#dadce0] transition-all duration-200 hover:bg-[#f6f9fe] hover:border-[#1a73e8] hover:text-[#174ea6]"
              style={{
                fontFamily: '"Google Sans", Arial, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '0.5px',
                lineHeight: 1.5,
              }}
            >
              <MessageSquare size={18} className="fill-current" />
              Chat with Flood Doctor
            </button>
          </div>
        </div>

        {/* Mobile Play/Pause Button */}
        <div className="absolute right-4 bottom-4 lg:hidden">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#dadce0] bg-white hover:bg-[#f1f3f4] transition-colors"
            aria-label={isAnimating ? 'Pause animation' : 'Play animation'}
          >
            {isAnimating ? (
              <Pause size={18} className="text-[#5f6368]" />
            ) : (
              <Play size={18} className="text-[#5f6368] ml-0.5" />
            )}
          </button>
        </div>
      </section>

      {/* Chat Section - Like Google's AI chat prompt */}
      <section className="bg-[#f8f9fa] py-12 lg:py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white rounded-[24px] p-8 lg:p-12 text-center shadow-[0_1px_2px_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)]">
            {/* AI Icon */}
            <div className="w-12 h-12 mx-auto mb-6 bg-gradient-to-br from-[#4285f4] via-[#9b72cb] to-[#d96570] rounded-full flex items-center justify-center">
              <MessageSquare size={24} className="text-white" />
            </div>

            <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4">
              Need help with your first steps? Chat with <span className="text-[#1a73e8]">Flood Doctor</span>
            </h2>
            <p className="text-base text-[#5f6368] max-w-[600px] mx-auto mb-8">
              Connect with our team and learn how we can help restore your property. Try asking a question or selecting a conversation starter below.
            </p>

            {/* Chat starters */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                'What should I do first after water damage?',
                'Do you work with my insurance?',
                'How fast can you arrive?'
              ].map((starter, i) => (
                <button
                  key={i}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[#dadce0] rounded-full text-sm text-[#202124] hover:bg-[#f8f9fa] hover:border-[#c4c7c5] transition-colors"
                >
                  <span>✨</span>
                  {starter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs Section - Matches Google's Performance Max section */}
      <section className="py-[60px]">
        {/* Responsive CSS for Google's grid system */}
        <style>{`
          .google-grid {
            display: grid;
            align-items: center;
            column-gap: 28px;
            grid-template-columns: repeat(4, minmax(5px, 1fr));
          }
          @media (min-width: 600px) {
            .google-grid {
              column-gap: 40px;
              grid-template-columns: repeat(10, minmax(5px, 1fr));
            }
          }
          @media (min-width: 1024px) {
            .google-grid {
              column-gap: 48px;
              grid-template-columns: repeat(12, minmax(5px, 1fr));
            }
          }
          @media (min-width: 1440px) {
            .google-grid {
              column-gap: 64px;
              grid-template-columns: repeat(10, minmax(5px, 1fr));
            }
          }
          .tab-list-container {
            grid-column: span 4;
            position: relative;
            width: calc(-16px + 100vw);
            left: 50%;
            transform: translateX(-50%);
          }
          @media (min-width: 600px) {
            .tab-list-container {
              grid-column: span 10;
            }
          }
          @media (min-width: 1024px) {
            .tab-list-container {
              grid-column: span 3;
              width: unset;
              left: unset;
              transform: none;
            }
          }
          .tab-list {
            display: grid;
            grid-auto-flow: column;
            gap: 16px;
            padding: 5px 28px;
            overflow: auto;
            max-width: min-content;
            scrollbar-width: none;
          }
          .tab-list::-webkit-scrollbar { display: none; }
          @media (min-width: 600px) {
            .tab-list {
              padding: 4px 40px;
              margin: 0 auto;
            }
          }
          @media (min-width: 1024px) {
            .tab-list {
              grid-auto-flow: row;
              gap: 20px;
              padding: 0;
              overflow: visible;
            }
          }
          .tab-panels {
            grid-column: span 4;
          }
          @media (min-width: 600px) {
            .tab-panels { grid-column: span 10; }
          }
          @media (min-width: 1024px) {
            .tab-panels { grid-column: span 9; }
          }
          @media (min-width: 1440px) {
            .tab-panels { grid-column: span 7; }
          }
          .tab-image {
            grid-column: span 4;
            border-radius: 24px;
            margin: 24px auto 0;
          }
          @media (min-width: 600px) {
            .tab-image { grid-column: span 10; }
          }
          @media (min-width: 1024px) {
            .tab-image { grid-column: span 7; margin: 0; }
          }
          @media (min-width: 1440px) {
            .tab-image { grid-column: span 6; }
          }
          .tab-copy {
            grid-column: span 4;
            width: 319px;
            text-align: center;
            margin: 24px auto 0;
          }
          @media (min-width: 600px) {
            .tab-copy {
              grid-column: span 8;
              width: 445px;
              margin-top: 36px;
            }
          }
          @media (min-width: 1024px) {
            .tab-copy {
              grid-column: span 5;
              width: 261px;
              text-align: start;
              margin: 0;
            }
          }
          @media (min-width: 1440px) {
            .tab-copy {
              grid-column: span 4;
              width: 274px;
            }
          }
          .tab-cta-container {
            margin: 36px 0 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            gap: 8px;
            min-width: 185px;
          }
          @media (min-width: 1024px) {
            .tab-cta-container {
              justify-content: flex-start;
            }
          }
          .section-title {
            grid-column: span 4;
            text-align: center;
            margin-bottom: 60px;
            font-family: "Google Sans Display", Arial, Helvetica, sans-serif;
            font-size: 48px;
            font-weight: 500;
            line-height: 1.28571;
            letter-spacing: normal;
            color: #202124;
          }
          @media (min-width: 600px) {
            .section-title {
              grid-column: span 10;
              line-height: 1.2;
              letter-spacing: -0.5px;
            }
          }
          @media (min-width: 1024px) {
            .section-title {
              grid-column: span 10;
              line-height: 1.16667;
            }
          }
          .tab-h3 {
            font-family: "Google Sans", Arial, Helvetica, sans-serif;
            font-size: 36px;
            font-weight: 400;
            line-height: 1.33333;
            letter-spacing: normal;
            color: #202124;
            margin: 0 0 16px;
          }
          @media (min-width: 600px) {
            .tab-h3 {
              line-height: 1.25;
              letter-spacing: -0.25px;
            }
          }
          @media (min-width: 1024px) {
            .tab-h3 {
              line-height: 1.22222;
            }
          }

          /* View Transitions API - Custom animations for tab panel changes */
          /* Cross-fade is the default, but we can customize here */
          ::view-transition-old(root),
          ::view-transition-new(root) {
            animation-duration: 0.3s;
            animation-timing-function: ease-in-out;
          }

          /* Optional: Slide animations for tab panels (uncomment to enable) */
          /*
          @keyframes slide-out-left {
            to {
              opacity: 0;
              transform: translateX(-20px);
            }
          }
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
          }
          ::view-transition-old(tab-panel) {
            animation: slide-out-left 0.3s ease-out forwards;
          }
          ::view-transition-new(tab-panel) {
            animation: slide-in-right 0.3s ease-out forwards;
          }
          */
        `}</style>

        <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid Container */}
          <div className="google-grid">
            {/* Section Title */}
            <h2 className="section-title">
              Flood Doctor gives you many ways to restore with <span className="text-[#1a73e8]">Water Damage</span>
            </h2>
          </div>

          {/* Tabs + Content Grid */}
          <div className="google-grid">
            {/* Tab List Container */}
            <div className="tab-list-container">
              <div className="tab-list" role="tablist" aria-label="Service categories">
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
                      tabId={`tab-${tab.id}`}
                      panelId={`panel-${tab.id}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Tab Panels Container */}
            <div className="tab-panels">
              {SERVICE_TABS.map((tab, index) => (
                <div
                  key={tab.id}
                  id={`panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  hidden={activeTab !== index}
                  className={`transition-all duration-500 ease-out ${
                    activeTab === index ? 'opacity-100 block' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    scrollMarginTop: 'calc(70px + 16px)',
                    viewTransitionName: `tab-panel-${tab.id}`, // For View Transitions API
                  }}
                >
                  {/* Inner Grid */}
                  <div className="google-grid">
                    {/* Image Container */}
                    <div className="tab-image">
                      <img
                        src={tab.image}
                        alt={tab.label}
                        style={{
                          borderRadius: '24px',
                          maxWidth: '100%',
                          height: 'auto',
                          display: 'inline-block',
                          verticalAlign: 'middle',
                        }}
                      />
                    </div>

                    {/* Copy Container */}
                    <div className="tab-copy">
                      <h3 className="tab-h3">
                        <span style={{ fontWeight: 500 }}>{tab.heading}</span>
                      </h3>

                      <p
                        style={{
                          fontFamily: '"Google Sans Text", Arial, Helvetica, sans-serif',
                          fontSize: '16px',
                          fontWeight: 400,
                          lineHeight: 1.5,
                          letterSpacing: '0.1px',
                          color: '#3c4043',
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        {tab.description}
                      </p>

                      {/* CTA Container */}
                      <div className="tab-cta-container">
                        <Link
                          to={tab.link}
                          className="group"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontFamily: '"Google Sans", Arial, Helvetica, sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: 1.5,
                            color: '#1a73e8',
                            textDecoration: 'none',
                            backgroundColor: 'transparent',
                            borderRadius: '4px',
                            transition: 'color 0.2s',
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = '#174ea6'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = '#1a73e8'; }}
                        >
                          {/* Arrow Circle */}
                          <span className="relative" style={{ width: '48px', height: '48px' }}>
                            <span
                              className="block transition-colors duration-200"
                              style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '1000px',
                                backgroundColor: '#1a73e8',
                              }}
                            />
                            <ArrowRight
                              size={24}
                              className="absolute"
                              style={{ top: '12px', left: '12px', color: '#fff' }}
                            />
                          </span>
                          <span>{tab.linkText}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section - With colored icon backgrounds like Google */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-6">
              Achieve all your goals in one place
            </h2>
            {/* Text link style like Google */}
            <Link
              to="/services/"
              className="text-sm font-medium text-[#1a73e8] hover:text-[#174ea6] hover:underline transition-colors"
            >
              Learn more
            </Link>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop - like Google */}
          <div className="mt-12 -mx-6 px-6 overflow-x-auto scrollbar-hide lg:overflow-visible lg:mx-0 lg:px-0">
            <div className="flex gap-4 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5 lg:gap-6">
              {GOALS.map((goal, index) => (
                <Link
                  key={index}
                  to={goal.link}
                  className="flex-shrink-0 w-[200px] lg:w-auto bg-white rounded-[16px] p-6 text-center hover:shadow-[0_1px_3px_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] transition-all duration-200 group"
                >
                  <div
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: goal.iconBg }}
                  >
                    {goal.icon}
                  </div>
                  <h3 className="text-base font-medium text-[#202124] mb-2 group-hover:text-[#1a73e8] transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-[#5f6368]">
                    {goal.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Power Section - Matches "The power of Google, for your business" */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124] text-center mb-16">
            The power of professionals, <span className="text-[#1a73e8]">for your property</span>
          </h2>

          <div className="space-y-16">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  {feature.visual === 'icons' && (
                    <div className="bg-[#f8f9fa] rounded-[24px] p-8 flex items-center justify-center">
                      {/* Service type icons - styled like Google's platform grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { icon: '💧', label: 'Water', bg: '#e8f0fe' },
                          { icon: '🔥', label: 'Fire', bg: '#fce8e6' },
                          { icon: '🦠', label: 'Mold', bg: '#e6f4ea' },
                          { icon: '🏢', label: 'Commercial', bg: '#fef7e0' },
                        ].map((item, i) => (
                          <div key={i} className="flex flex-col items-center gap-2">
                            <div
                              className="w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center text-2xl"
                              style={{ backgroundColor: item.bg }}
                            >
                              {item.icon}
                            </div>
                            <span className="text-xs text-[#5f6368]">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {feature.visual === 'chart' && (
                    <div className="bg-[#f8f9fa] rounded-[24px] p-8">
                      <div className="bg-white rounded-xl p-6 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)]">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm text-[#5f6368]">Moisture Reduction</div>
                          <div className="text-xs text-[#5f6368] bg-[#f8f9fa] px-2 py-1 rounded">Last 7 days</div>
                        </div>
                        <div className="text-3xl font-medium text-[#34a853] mb-6">-85%</div>
                        <svg className="w-full h-24" viewBox="0 0 200 80">
                          {/* Grid lines */}
                          <line x1="10" y1="20" x2="190" y2="20" stroke="#e8eaed" strokeWidth="1" />
                          <line x1="10" y1="40" x2="190" y2="40" stroke="#e8eaed" strokeWidth="1" />
                          <line x1="10" y1="60" x2="190" y2="60" stroke="#e8eaed" strokeWidth="1" />
                          {/* Area fill */}
                          <polygon
                            points="10,70 40,65 70,55 100,40 130,28 160,18 190,12 190,70 10,70"
                            fill="url(#chartGradient)"
                          />
                          {/* Line */}
                          <polyline
                            points="10,70 40,65 70,55 100,40 130,28 160,18 190,12"
                            fill="none"
                            stroke="#34a853"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {/* Gradient definition */}
                          <defs>
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#34a853" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#34a853" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="flex justify-between text-xs text-[#5f6368] mt-2">
                          <span>Day 1</span>
                          <span>Day 7</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {feature.visual === 'budget' && (
                    <div className="bg-[#f8f9fa] rounded-[24px] p-8">
                      <div className="bg-white rounded-xl p-6 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)]">
                        <div className="text-sm text-[#5f6368] mb-4">Insurance coverage</div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm text-[#5f6368]">$0</span>
                          <div className="flex-1 h-3 bg-[#e8eaed] rounded-full overflow-hidden">
                            <div className="h-full w-4/5 bg-gradient-to-r from-[#1a73e8] to-[#4285f4] rounded-full transition-all duration-500"></div>
                          </div>
                          <span className="text-sm text-[#5f6368]">Full</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-4 py-2 px-4 bg-[#e8f0fe] rounded-full">
                          <svg className="w-4 h-4 text-[#1a73e8]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-sm text-[#1a73e8] font-medium">
                            Most customers pay $0 out of pocket
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-[24px] font-medium text-[#202124] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#5f6368] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel - Matches Google's layout with light blue tint */}
      <section className="py-16 lg:py-24 bg-[#e8f4fd]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-6">
              What success looks like
            </h2>
            {/* Text link style like Google */}
            <Link
              to="/reviews/"
              className="text-sm font-medium text-[#1a73e8] hover:text-[#174ea6] hover:underline transition-colors"
            >
              View all success stories
            </Link>
          </div>

          {/* Carousel */}
          <div className="relative mt-12">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentStory * 100}%)` }}
              >
                {SUCCESS_STORIES.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_1px_2px_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] max-w-[900px] mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr]">
                        {/* Stat side with light blue tint */}
                        <div className="bg-[#e8f0fe] p-8 flex flex-col items-center justify-center text-center">
                          <div className="text-[56px] font-normal text-[#1a73e8] leading-none">
                            {story.stat}<span className="text-[32px]">{story.statUnit}</span>
                          </div>
                          <div className="text-sm text-[#5f6368] uppercase tracking-wide mt-2">
                            {story.statLabel}
                          </div>
                        </div>

                        {/* Quote side with photo */}
                        <div className="p-8 lg:p-10 flex flex-col lg:flex-row gap-6 items-start">
                          {/* Photo */}
                          <img
                            src={story.photo}
                            alt={story.author}
                            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                          />
                          <div>
                            <blockquote className="text-lg lg:text-xl text-[#202124] leading-relaxed mb-4">
                              {story.quote}
                            </blockquote>
                            <div className="text-sm">
                              <span className="font-medium text-[#202124]">{story.author}</span>
                              <span className="text-[#5f6368]">, {story.role}</span>
                            </div>
                            <div className="text-sm text-[#5f6368]">{story.location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setCurrentStory(Math.max(0, currentStory - 1))}
                disabled={currentStory === 0}
                className="w-10 h-10 rounded-full border border-[#dadce0] bg-white flex items-center justify-center text-[#5f6368] hover:bg-[#f8f9fa] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm text-[#5f6368]">
                {currentStory + 1} / {SUCCESS_STORIES.length}
              </span>
              <button
                onClick={() => setCurrentStory(Math.min(SUCCESS_STORIES.length - 1, currentStory + 1))}
                disabled={currentStory === SUCCESS_STORIES.length - 1}
                className="w-10 h-10 rounded-full border border-[#dadce0] bg-white flex items-center justify-center text-[#5f6368] hover:bg-[#f8f9fa] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124] mb-4">
            Let us help.
          </h2>
          <p className="text-base text-[#5f6368] mb-8">
            Get started with a free assessment. Create your restoration plan with a Flood Doctor expert.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="tel:8774970007"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#dadce0] rounded-[4px] text-[#202124] font-medium hover:bg-[#f8f9fa] transition-colors"
            >
              <Phone size={18} />
              (877) 497-0007
            </a>
            <Button to="/request/" variant="primary" size="md" className="rounded-[4px]">
              <MessageSquare size={18} className="mr-2" />
              Schedule assessment
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - With Expand All button */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124]">
              Frequently asked questions
            </h2>
            <button
              onClick={toggleAllFaqs}
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#5f6368] hover:text-[#202124] transition-colors"
            >
              {expandedFaqs.length === FAQS.length ? 'Collapse all' : 'Expand all'}
              <ChevronDown size={18} className={expandedFaqs.length === FAQS.length ? 'rotate-180' : ''} />
            </button>
          </div>

          <div className="border-t border-[#dadce0]">
            {FAQS.map((faq, index) => (
              <div key={index} className="border-b border-[#dadce0]">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-5 flex justify-between items-start gap-4 group"
                  aria-expanded={expandedFaqs.includes(index)}
                >
                  <span className={`text-base lg:text-lg font-medium transition-colors ${
                    expandedFaqs.includes(index) ? 'text-[#1a73e8]' : 'text-[#202124] group-hover:text-[#1a73e8]'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#5f6368] transition-transform duration-300 shrink-0 mt-1 ${
                      expandedFaqs.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedFaqs.includes(index) ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-base text-[#5f6368] leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Spacer for global sticky CTA */}
      <div className="h-20 lg:hidden" />
    </main>
  );
};

export default HomeAlt;
