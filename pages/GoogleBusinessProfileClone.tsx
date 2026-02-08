import React, { useState, useEffect, useRef } from 'react';
import './GoogleBusinessProfileClone.css';

// ============================================================================
// TYPES
// ============================================================================

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface HeroContent {
  headline: string;
  highlightText: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: {
    src: string;
    alt: string;
  };
}

interface AnimatedTextItem {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
}

interface AnimatedTextListContent {
  headline: string;
  description: string;
  items: AnimatedTextItem[];
  theme: 'light' | 'dark';
  reverse?: boolean;
}

interface FooterColumn {
  header: string;
  links: { label: string; href: string; external?: boolean }[];
}

// ============================================================================
// CONTENT DATA
// ============================================================================

const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '#', active: true },
  { label: 'Retail', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Restaurants', href: '#' },
];

const HERO_CONTENT: HeroContent = {
  headline: 'on Google with a free Business Profile',
  highlightText: 'Stand out',
  description: 'List your business on Google with a free Business Profile. Turn people who find you on Search & Maps into new customers.',
  ctaText: 'Manage now',
  ctaHref: '#',
  image: {
    src: 'https://lh3.googleusercontent.com/gwe2-JI-FIR1fFCNaYqgQsNLNK5TL8ggZFJWAi5MCGB3FDT_i7WDhGp2L0KPPAnJlpXLFMa2Qwu3pCNXfKBR7Q=rw-e365-w750',
    alt: 'Google Business Profile on mobile device',
  },
};

const ANIMATED_TEXT_LIGHT: AnimatedTextListContent = {
  headline: 'Get found and grow your business',
  description: 'Your free Business Profile helps you manage how your business appears across Google products like Search and Maps.',
  theme: 'light',
  items: [
    {
      title: 'Add your business info',
      description: 'Help customers find you by sharing key details like your address, phone number, and hours of operation.',
      image: {
        src: 'https://lh3.googleusercontent.com/Bu3OVq4t9TZfO5PDbCPvqz0HmqGo0IWw0gJ5F_4TIx0QeTfRaxUyJcj5KZ3KqtGcGPdSI3_CtPvPVFCG-p99=rw-e365-w445',
        alt: 'Business info example',
      },
    },
    {
      title: 'Stand out with photos',
      description: 'Add photos to your profile to show customers what makes your business special.',
      image: {
        src: 'https://lh3.googleusercontent.com/NxrHV8KMt9HLo3fzfG0E0Jt1c7-CDhNKyUn0eS8E9qGEHj2RxCOqWJUPHHT9RgPBQm8RQnqK5J5wT5g=rw-e365-w445',
        alt: 'Photos example',
      },
    },
    {
      title: 'Manage reviews',
      description: 'Respond to customer reviews and build trust with your audience.',
      image: {
        src: 'https://lh3.googleusercontent.com/dKHR5WY8TJkVcL9RQYODgYs0n5Z3jkiJGvIVFHj3WBwMJ3HDqF2PnwjlHJGiRKNgX0K4RYL9Ks2VVpJI=rw-e365-w445',
        alt: 'Reviews example',
      },
    },
  ],
};

const ANIMATED_TEXT_DARK: AnimatedTextListContent = {
  headline: 'Connect with customers',
  description: 'Engage with customers directly from your Business Profile using built-in tools.',
  theme: 'dark',
  reverse: true,
  items: [
    {
      title: 'Message customers',
      description: 'Let customers message you directly from your Business Profile to answer questions and build relationships.',
      image: {
        src: 'https://lh3.googleusercontent.com/Bu3OVq4t9TZfO5PDbCPvqz0HmqGo0IWw0gJ5F_4TIx0QeTfRaxUyJcj5KZ3KqtGcGPdSI3_CtPvPVFCG-p99=rw-e365-w445',
        alt: 'Messaging example',
      },
    },
    {
      title: 'Create posts',
      description: 'Share updates, offers, and events to keep customers informed and engaged.',
      image: {
        src: 'https://lh3.googleusercontent.com/NxrHV8KMt9HLo3fzfG0E0Jt1c7-CDhNKyUn0eS8E9qGEHj2RxCOqWJUPHHT9RgPBQm8RQnqK5J5wT5g=rw-e365-w445',
        alt: 'Posts example',
      },
    },
    {
      title: 'Track performance',
      description: 'See insights about how customers find and interact with your business.',
      image: {
        src: 'https://lh3.googleusercontent.com/dKHR5WY8TJkVcL9RQYODgYs0n5Z3jkiJGvIVFHj3WBwMJ3HDqF2PnwjlHJGiRKNgX0K4RYL9Ks2VVpJI=rw-e365-w445',
        alt: 'Performance example',
      },
    },
  ],
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    header: 'Products',
    links: [
      { label: 'Google Ads', href: '#' },
      { label: 'YouTube Ads', href: '#' },
      { label: 'Merchant Center', href: '#' },
      { label: 'Business Profile', href: '#' },
      { label: 'Google Analytics', href: '#' },
      { label: 'Manufacturer Center', href: '#' },
    ],
  },
  {
    header: 'Learning and support',
    links: [
      { label: 'Accelerate with Google', href: '#' },
      { label: 'Think with Google', href: '#' },
      { label: 'Google Ads Help Center', href: '#', external: true },
      { label: 'Your guide to Merchant Center', href: '#', external: true },
      { label: 'Your guide to Google Ads', href: '#', external: true },
      { label: 'Google Advertiser Community', href: '#', external: true },
    ],
  },
  {
    header: 'Partners and developers',
    links: [
      { label: 'Google Partners', href: '#', external: true },
      { label: 'Google Developers site', href: '#', external: true },
      { label: 'Google Ads Scripts', href: '#', external: true },
      { label: 'Google Ads Remarketing Tags', href: '#', external: true },
      { label: 'Google Ads API', href: '#' },
    ],
  },
  {
    header: 'More solutions',
    links: [
      { label: 'Workspace', href: '#', external: true },
      { label: 'Chrome', href: '#', external: true },
      { label: 'Google Cloud', href: '#', external: true },
      { label: 'AdSense', href: '#', external: true },
      { label: 'AdMob', href: '#', external: true },
    ],
  },
];

const GLOBAL_FOOTER_LINKS = [
  { label: 'About Google', href: '#' },
  { label: 'Google products', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

// ============================================================================
// ICONS
// ============================================================================

const GoogleLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 74 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
    <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
    <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5z" fill="#4285F4"/>
    <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#FBBC05"/>
    <path d="M58 .24h2.51v17.57H58z" fill="#34A853"/>
    <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335"/>
  </svg>
);

const GoogleBusinessLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <GoogleLogo />
    <span style={{ fontSize: '18px', color: '#5f6368', fontWeight: 400 }}>Business</span>
  </div>
);

const MenuIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
);

const ChevronDownIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>
);

const ArrowForwardIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
  </svg>
);

// ============================================================================
// COMPONENTS
// ============================================================================

// Header Component
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`gbp-header ${scrolled ? 'gbp-header--scrolled' : ''}`}>
      <div className="gbp-header__bar gbp-header__bar--mobile">
        <div className="gbp-header__container">
          <div className="gbp-header__lockup">
            <button
              className="gbp-header__menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
            <a href="#" className="gbp-header__logo-link">
              <GoogleBusinessLogo className="gbp-header__logo" />
            </a>
          </div>
          <div className="gbp-header__cta">
            <a href="#" className="gbp-button gbp-button--primary gbp-button--small">
              Sign in
            </a>
          </div>
        </div>

        <nav className="gbp-header__subnav">
          <div className="gbp-header__subnav-container">
            <button className="gbp-header__subnav-dropdown">
              <span>Google Business Profile</span>
              <ChevronDownIcon />
            </button>
          </div>
        </nav>
      </div>

      <div className="gbp-header__bar gbp-header__bar--desktop">
        <div className="gbp-header__tier">
          <div className="gbp-header__container">
            <a href="#" className="gbp-header__logo-link">
              <GoogleBusinessLogo className="gbp-header__logo" />
            </a>
            <nav className="gbp-header__nav">
              <ul className="gbp-header__nav-list">
                {NAV_ITEMS.map((item, index) => (
                  <li key={index} className="gbp-header__nav-item">
                    <a
                      href={item.href}
                      className={`gbp-header__nav-link ${item.active ? 'gbp-header__nav-link--active' : ''}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="gbp-header__actions">
              <a href="#" className="gbp-button gbp-button--text">Sign in</a>
              <a href="#" className="gbp-button gbp-button--primary">Manage now</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section
const HeroSection: React.FC = () => {
  return (
    <section className="gbp-hero">
      <div className="gbp-hero__container">
        <div className="gbp-hero__grid">
          <div className="gbp-hero__content">
            <h1 className="gbp-hero__title">
              <span className="gbp-hero__highlight">{HERO_CONTENT.highlightText}</span>{' '}
              {HERO_CONTENT.headline}
            </h1>
            <p className="gbp-hero__description">
              {HERO_CONTENT.description}
            </p>
            <div className="gbp-hero__cta">
              <a href={HERO_CONTENT.ctaHref} className="gbp-button gbp-button--primary gbp-button--large">
                {HERO_CONTENT.ctaText}
                <ArrowForwardIcon />
              </a>
            </div>
          </div>
          <div className="gbp-hero__media">
            <div className="gbp-hero__image-container">
              <img
                src={HERO_CONTENT.image.src}
                alt={HERO_CONTENT.image.alt}
                className="gbp-hero__image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Animated Text List Section
const AnimatedTextListSection: React.FC<{ content: AnimatedTextListContent }> = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % content.items.length);
      }, 8000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, content.items.length]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const themeClass = content.theme === 'dark' ? 'gbp-atl--dark' : 'gbp-atl--light';
  const reverseClass = content.reverse ? 'gbp-atl--reverse' : '';

  return (
    <section
      ref={sectionRef}
      className={`gbp-atl ${themeClass} ${reverseClass}`}
    >
      <div className="gbp-atl__container">
        <div className="gbp-atl__header">
          <h2 className="gbp-atl__headline">{content.headline}</h2>
          <p className="gbp-atl__description">{content.description}</p>
        </div>

        <div className="gbp-atl__grid">
          <div className="gbp-atl__text-stack">
            {content.items.map((item, index) => (
              <div
                key={index}
                className={`gbp-atl__item ${activeIndex === index ? 'gbp-atl__item--active' : ''}`}
                onClick={() => handleItemClick(index)}
                role="button"
                tabIndex={0}
                aria-expanded={activeIndex === index}
              >
                <div className="gbp-atl__item-title">
                  {item.title}
                </div>
                <div className="gbp-atl__item-description">
                  {item.description}
                </div>
                <div className="gbp-atl__item-progress">
                  <div
                    className="gbp-atl__item-progress-bar"
                    style={{
                      animationPlayState: activeIndex === index && isAutoPlaying ? 'running' : 'paused',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="gbp-atl__media-stack">
            {content.items.map((item, index) => (
              <div
                key={index}
                className={`gbp-atl__media-item ${activeIndex === index ? 'gbp-atl__media-item--active' : ''}`}
              >
                {item.image && (
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="gbp-atl__media-image"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Banner Section
const CTABannerSection: React.FC = () => {
  return (
    <section className="gbp-cta-banner">
      <div className="gbp-cta-banner__container">
        <div className="gbp-cta-banner__content">
          <h2 className="gbp-cta-banner__headline">
            Ready to get started?
          </h2>
          <p className="gbp-cta-banner__description">
            Create your free Business Profile today and start reaching more customers.
          </p>
          <div className="gbp-cta-banner__actions">
            <a href="#" className="gbp-button gbp-button--primary gbp-button--large">
              Manage now
              <ArrowForwardIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is a Business Profile on Google free?',
      answer: 'Yes, creating a Business Profile and listing your business on Google is free. Create your profile at no cost, and you can manage your business from Google Search and Maps to start reaching more customers.',
    },
    {
      question: 'How do I create a Business Profile?',
      answer: 'To create a Business Profile, go to google.com/business and click "Manage now." You\'ll need to sign in with a Google account and then follow the steps to add your business information.',
    },
    {
      question: 'How long does it take to verify my business?',
      answer: 'Verification typically takes 1-2 weeks by postcard, but some businesses may qualify for instant verification by phone or email. The verification method available depends on your business type and location.',
    },
    {
      question: 'Can I manage multiple business locations?',
      answer: 'Yes, you can manage multiple locations from a single account. Businesses with 10 or more locations can use bulk location management tools to save time.',
    },
  ];

  return (
    <section className="gbp-faq">
      <div className="gbp-faq__container">
        <h2 className="gbp-faq__headline">Frequently asked questions</h2>
        <div className="gbp-faq__list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`gbp-faq__item ${openIndex === index ? 'gbp-faq__item--open' : ''}`}
            >
              <button
                className="gbp-faq__question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDownIcon />
              </button>
              <div className="gbp-faq__answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  const [expandedColumn, setExpandedColumn] = useState<number | null>(null);

  return (
    <footer className="gbp-footer">
      <div className="gbp-footer__upper">
        <div className="gbp-footer__container">
          <div className="gbp-footer__cta">
            <a href="#" className="gbp-button gbp-button--primary">
              Manage now
            </a>
          </div>
        </div>
      </div>

      <nav className="gbp-footer__links">
        <div className="gbp-footer__links-grid">
          {FOOTER_COLUMNS.map((column, colIndex) => (
            <div key={colIndex} className="gbp-footer__column">
              <h3 className="gbp-footer__column-header">
                <button
                  className="gbp-footer__column-toggle"
                  onClick={() => setExpandedColumn(expandedColumn === colIndex ? null : colIndex)}
                  aria-expanded={expandedColumn === colIndex}
                >
                  <span>{column.header}</span>
                  <ChevronDownIcon />
                </button>
              </h3>
              <ul className={`gbp-footer__column-list ${expandedColumn === colIndex ? 'gbp-footer__column-list--expanded' : ''}`}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="gbp-footer__link"
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <div className="gbp-footer__global">
        <div className="gbp-footer__container">
          <a href="https://www.google.com" className="gbp-footer__google-logo" aria-label="Google">
            <GoogleLogo />
          </a>
          <ul className="gbp-footer__global-links">
            {GLOBAL_FOOTER_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="gbp-footer__global-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

const GoogleBusinessProfileClone: React.FC = () => {
  return (
    <div className="gbp-page">
      <Header />
      <main className="gbp-main" id="page-content">
        <HeroSection />
        <AnimatedTextListSection content={ANIMATED_TEXT_LIGHT} />
        <AnimatedTextListSection content={ANIMATED_TEXT_DARK} />
        <CTABannerSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default GoogleBusinessProfileClone;
