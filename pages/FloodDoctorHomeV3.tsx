/**
 * FloodDoctorHomeV3 - Production Flood Doctor Homepage
 * Rebuilt with parity to Google Business Profile layout
 *
 * ARCHITECTURE:
 * - Uses existing FD Header/Footer from components/layout/
 * - Only the BODY content is cloned from GBP layout
 * - Body content scoped under .fd-home-v3 .fd-gbp-body-v3
 *
 * Query Params:
 * - __content=ref|fd (default: ref in dev, fd in prod)
 * - __freeze=1 (disables animations for parity testing)
 * - __textIndex=N (forces tab index when freeze enabled)
 * - __maxSection=N (render only sections 1..N)
 */

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './FloodDoctorHomeV3.css';

// Existing FD layout components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Content imports
import { refContent } from '../content/fd-home-v3/ref';
import { fdContent } from '../content/fd-home-v3/fd';
import type {
  HomeV3Content,
  HeroContent,
  AnimatedTextListSection,
  ScrollingCardsSection,
  TwoUpSection,
  CaseStudiesSection,
  TilesSection,
  CTAHeaderSection,
  StepsSection,
  FAQSection,
} from '../content/fd-home-v3/types';

// ============================================
// HERO PHONE MOCKUP (GBP-style)
// ============================================

const HeroPhoneMockup = () => (
  <div className="fd-gbp-body-v3__hero-phone" aria-hidden="true">
    <div className="fd-gbp-body-v3__hero-phone-frame">
      {/* Phone screen content */}
      <div className="fd-gbp-body-v3__hero-phone-screen">
        {/* Search bar mockup */}
        <div className="fd-gbp-body-v3__hero-phone-search">
          <span className="fd-gbp-body-v3__hero-phone-search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#5f6368" strokeWidth="2"/>
              <line x1="16" y1="16" x2="21" y2="21" stroke="#5f6368" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="fd-gbp-body-v3__hero-phone-search-text">water damage restoration near me</span>
        </div>

        {/* Business card mockup */}
        <div className="fd-gbp-body-v3__hero-phone-card">
          <div className="fd-gbp-body-v3__hero-phone-card-header">
            <div className="fd-gbp-body-v3__hero-phone-card-avatar">FD</div>
            <div className="fd-gbp-body-v3__hero-phone-card-info">
              <div className="fd-gbp-body-v3__hero-phone-card-name">Flood Doctor</div>
              <div className="fd-gbp-body-v3__hero-phone-card-rating">
                <span className="fd-gbp-body-v3__hero-phone-stars">★★★★★</span>
                <span className="fd-gbp-body-v3__hero-phone-rating-count">4.9 (127)</span>
              </div>
              <div className="fd-gbp-body-v3__hero-phone-card-type">Water Damage Restoration</div>
            </div>
          </div>
          <div className="fd-gbp-body-v3__hero-phone-card-actions">
            <button className="fd-gbp-body-v3__hero-phone-action">
              <span>📞</span>
              <span>Call</span>
            </button>
            <button className="fd-gbp-body-v3__hero-phone-action">
              <span>🗺️</span>
              <span>Directions</span>
            </button>
            <button className="fd-gbp-body-v3__hero-phone-action">
              <span>🌐</span>
              <span>Website</span>
            </button>
          </div>
        </div>

        {/* Status indicator */}
        <div className="fd-gbp-body-v3__hero-phone-status">
          <span className="fd-gbp-body-v3__hero-phone-status-dot"></span>
          <span>Open 24 hours</span>
        </div>
      </div>
    </div>
  </div>
);

// ============================================
// HERO COMPONENT
// ============================================

interface HeroProps {
  content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="fd-gbp-body-v3__hero" data-parity="hero">
      <div className="fd-gbp-body-v3__hero-container">
        <div className="fd-gbp-body-v3__hero-grid">
          {/* Copy container - left on desktop, top on mobile */}
          <div className="fd-gbp-body-v3__hero-copy">
            <h1 className="fd-gbp-body-v3__hero-headline">
              {content.headline}
            </h1>
            <p className="fd-gbp-body-v3__hero-description">
              {content.subheadline}
            </p>
            <div className="fd-gbp-body-v3__hero-cta-container">
              <a
                href={content.ctaPrimary.href}
                className="fd-gbp-body-v3__btn fd-gbp-body-v3__btn--primary fd-gbp-body-v3__btn--hero"
              >
                {content.ctaPrimary.label}
              </a>
              {content.ctaSecondary && (
                <a
                  href={content.ctaSecondary.href}
                  className="fd-gbp-body-v3__btn fd-gbp-body-v3__btn--outline fd-gbp-body-v3__btn--hero"
                >
                  {content.ctaSecondary.label}
                </a>
              )}
            </div>
          </div>

          {/* Media container - right on desktop, bottom on mobile */}
          <div className="fd-gbp-body-v3__hero-media">
            <HeroPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// ANIMATED TEXT LIST COMPONENT
// Matches GBP ion-animated-text-list structure
// ============================================

// Navigation arrow icons for mobile carousel
const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

interface AnimatedTextListProps {
  section: AnimatedTextListSection;
  freezeMode: boolean;
  forcedIndex?: number;
}

const AnimatedTextList: React.FC<AnimatedTextListProps> = ({ section, freezeMode, forcedIndex }) => {
  const [activeIndex, setActiveIndex] = useState(forcedIndex ?? 0);
  const [progress, setProgress] = useState(0);
  const autoAdvanceMs = section.autoAdvanceMs ?? 8000;

  // Auto-advance logic (disabled in freeze mode)
  useEffect(() => {
    if (freezeMode) {
      setProgress(100);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance to next item
          setActiveIndex((idx) => (idx + 1) % section.items.length);
          return 0;
        }
        return prev + (100 / (autoAdvanceMs / 50)); // Update every 50ms
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [freezeMode, autoAdvanceMs, section.items.length]);

  // Handle forced index from query param
  useEffect(() => {
    if (forcedIndex !== undefined) {
      setActiveIndex(forcedIndex);
    }
  }, [forcedIndex]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveIndex((idx) => (idx - 1 + section.items.length) % section.items.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIndex((idx) => (idx + 1) % section.items.length);
    setProgress(0);
  };

  const activeItem = section.items[activeIndex];
  const themeClass = section.theme === 'dark' ? 'fd-gbp-body-v3__atl--dark' : 'fd-gbp-body-v3__atl--light';

  // Determine media aspect ratio based on theme
  // Snapshot has 445×445 images in carousel for light, 445×303 for dark
  const mediaAspect = section.theme === 'dark' ? '445 / 303' : '445 / 445';

  return (
    <section
      className={`fd-gbp-body-v3__atl ${themeClass}`}
      data-parity="animated-text-list"
      data-section-id={section.id}
    >
      <div className="fd-gbp-body-v3__atl-container">
        {/* Section title */}
        <h2 className="fd-gbp-body-v3__atl-title">{section.sectionTitle}</h2>

        <div className="fd-gbp-body-v3__atl-grid">
          {/* Text list with progress indicators (desktop) */}
          <div className="fd-gbp-body-v3__atl-list" role="tablist" aria-label={section.sectionTitle}>
            {section.items.map((item, index) => {
              const isActive = index === activeIndex;
              const progressValue = isActive ? progress : (index < activeIndex ? 100 : 0);

              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${section.id}-panel-${item.id}`}
                  className={`fd-gbp-body-v3__atl-item ${isActive ? 'fd-gbp-body-v3__atl-item--active' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  {/* Progress bar */}
                  <div className="fd-gbp-body-v3__atl-progress">
                    <div
                      className="fd-gbp-body-v3__atl-progress-bar"
                      style={{ width: `${progressValue}%` }}
                    />
                  </div>
                  <span className="fd-gbp-body-v3__atl-item-title">{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div
            id={`${section.id}-panel-${activeItem.id}`}
            role="tabpanel"
            aria-labelledby={activeItem.id}
            className="fd-gbp-body-v3__atl-content"
          >
            <div className="fd-gbp-body-v3__atl-content-inner">
              <h3 className="fd-gbp-body-v3__atl-content-title">{activeItem.title}</h3>
              <p className="fd-gbp-body-v3__atl-content-desc">{activeItem.description}</p>

              {/* CTA button */}
              {section.cta && (
                <a
                  href={section.cta.href}
                  className={`fd-gbp-body-v3__btn fd-gbp-body-v3__btn--${section.cta.variant} fd-gbp-body-v3__atl-cta`}
                >
                  {section.cta.label}
                </a>
              )}
            </div>
          </div>

          {/* MEDIA PANEL - matches GBP snapshot structure */}
          <div className="fd-gbp-body-v3__atl-media" style={{ aspectRatio: mediaAspect }}>
            {activeItem.image ? (
              <img src={activeItem.image.src} alt={activeItem.image.alt} />
            ) : (
              <div className="fd-gbp-body-v3__atl-media-placeholder" aria-hidden="true">
                {/* Placeholder maintaining exact aspect ratio */}
              </div>
            )}
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="fd-gbp-body-v3__atl-nav" aria-hidden="true">
          <button
            className="fd-gbp-body-v3__atl-nav-btn fd-gbp-body-v3__atl-nav-btn--prev"
            onClick={handlePrev}
            aria-label="Previous item"
          >
            <ChevronLeftIcon />
          </button>
          <div className="fd-gbp-body-v3__atl-dots">
            {section.items.map((item, index) => (
              <button
                key={item.id}
                className={`fd-gbp-body-v3__atl-dot ${index === activeIndex ? 'fd-gbp-body-v3__atl-dot--active' : ''}`}
                onClick={() => handleItemClick(index)}
                aria-label={`Go to ${item.title}`}
              />
            ))}
          </div>
          <button
            className="fd-gbp-body-v3__atl-nav-btn fd-gbp-body-v3__atl-nav-btn--next"
            onClick={handleNext}
            aria-label="Next item"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SCROLLING 3-UP CARDS COMPONENT
// Matches GBP ion-scrolling-3up-cards-list
// ============================================

interface ScrollingCardsProps {
  section: ScrollingCardsSection;
}

const ScrollingCards: React.FC<ScrollingCardsProps> = ({ section }) => {
  return (
    <section className="fd-gbp-body-v3__cards" data-parity="scrolling-cards">
      <div className="fd-gbp-body-v3__cards-container">
        {/* Header - sticky on desktop */}
        <div className="fd-gbp-body-v3__cards-header">
          <h2 className="fd-gbp-body-v3__cards-title">{section.sectionTitle}</h2>
          <p className="fd-gbp-body-v3__cards-description">{section.sectionDescription}</p>
          {section.cta && (
            <a
              href={section.cta.href}
              className={`fd-gbp-body-v3__btn fd-gbp-body-v3__btn--${section.cta.variant} fd-gbp-body-v3__cards-cta`}
            >
              {section.cta.label}
            </a>
          )}
        </div>

        {/* Cards list */}
        <div className="fd-gbp-body-v3__cards-list">
          {section.cards.map((card) => (
            <article key={card.id} className="fd-gbp-body-v3__card">
              <div className="fd-gbp-body-v3__card-image">
                <img src={card.image.src} alt={card.image.alt} loading="lazy" />
              </div>
              <div className="fd-gbp-body-v3__card-content">
                <h3 className="fd-gbp-body-v3__card-title">{card.title}</h3>
                <p className="fd-gbp-body-v3__card-desc">{card.description}</p>
                {card.cta && (
                  <a
                    href={card.cta.href}
                    className={`fd-gbp-body-v3__btn fd-gbp-body-v3__btn--${card.cta.variant} fd-gbp-body-v3__card-cta`}
                  >
                    {card.cta.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TWO-UP MEDIA/TEXT COMPONENT
// Matches GBP ion-twoup
// ============================================

interface TwoUpProps {
  section: TwoUpSection;
}

const TwoUp: React.FC<TwoUpProps> = ({ section }) => {
  const layoutClass = section.layout === 'image-left'
    ? 'fd-gbp-body-v3__twoup--image-left'
    : 'fd-gbp-body-v3__twoup--image-right';

  return (
    <section className={`fd-gbp-body-v3__twoup ${layoutClass}`} data-parity="twoup">
      <div className="fd-gbp-body-v3__twoup-container">
        {/* Image */}
        <div className="fd-gbp-body-v3__twoup-media">
          <img src={section.image.src} alt={section.image.alt} loading="lazy" />
          {/* Stats overlay */}
          {section.stats && section.stats.length > 0 && (
            <div className="fd-gbp-body-v3__twoup-stats">
              {section.stats.map((stat, index) => (
                <div key={index} className="fd-gbp-body-v3__twoup-stat">
                  <span className="fd-gbp-body-v3__twoup-stat-value">{stat.value}</span>
                  <span className="fd-gbp-body-v3__twoup-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Copy */}
        <div className="fd-gbp-body-v3__twoup-copy">
          <h2 className="fd-gbp-body-v3__twoup-headline">{section.headline}</h2>
          <p className="fd-gbp-body-v3__twoup-description">{section.description}</p>
        </div>
      </div>
    </section>
  );
};

// ============================================
// CASE STUDIES COMPONENT
// Matches GBP ion-case-study-module
// ============================================

interface CaseStudiesProps {
  section: CaseStudiesSection;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ section }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((idx) => (idx - 1 + section.caseStudies.length) % section.caseStudies.length);
  };

  const handleNext = () => {
    setActiveIndex((idx) => (idx + 1) % section.caseStudies.length);
  };

  return (
    <section className="fd-gbp-body-v3__case-studies" data-parity="case-studies">
      <div className="fd-gbp-body-v3__case-studies-container">
        <h2 className="fd-gbp-body-v3__case-studies-title">{section.sectionTitle}</h2>

        {/* Carousel */}
        <div className="fd-gbp-body-v3__case-studies-carousel">
          {section.caseStudies.map((caseStudy, index) => (
            <article
              key={caseStudy.id}
              className={`fd-gbp-body-v3__case-study ${index === activeIndex ? 'fd-gbp-body-v3__case-study--active' : ''}`}
              aria-hidden={index !== activeIndex}
            >
              <div className="fd-gbp-body-v3__case-study-image">
                <img src={caseStudy.image.src} alt={caseStudy.image.alt} loading="lazy" />
              </div>
              <div className="fd-gbp-body-v3__case-study-content">
                <blockquote className="fd-gbp-body-v3__case-study-quote">
                  "{caseStudy.quote}"
                </blockquote>
                <div className="fd-gbp-body-v3__case-study-meta">
                  <span className="fd-gbp-body-v3__case-study-company">{caseStudy.companyName}</span>
                  {caseStudy.attribution && (
                    <span className="fd-gbp-body-v3__case-study-attribution">— {caseStudy.attribution}</span>
                  )}
                </div>
                {caseStudy.stat && (
                  <div className="fd-gbp-body-v3__case-study-stat">
                    <span className="fd-gbp-body-v3__case-study-stat-value">{caseStudy.stat.value}</span>
                    <span className="fd-gbp-body-v3__case-study-stat-label">{caseStudy.stat.label}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Navigation */}
        {section.caseStudies.length > 1 && (
          <div className="fd-gbp-body-v3__case-studies-nav">
            <button
              className="fd-gbp-body-v3__case-studies-nav-btn"
              onClick={handlePrev}
              aria-label="Previous case study"
            >
              <ChevronLeftIcon />
            </button>
            <div className="fd-gbp-body-v3__case-studies-dots">
              {section.caseStudies.map((_, index) => (
                <button
                  key={index}
                  className={`fd-gbp-body-v3__case-studies-dot ${index === activeIndex ? 'fd-gbp-body-v3__case-studies-dot--active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
            <button
              className="fd-gbp-body-v3__case-studies-nav-btn"
              onClick={handleNext}
              aria-label="Next case study"
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================
// TILES COMPONENT (ion-standard-3up-stacked-list)
// Immediately after Hero
// ============================================

interface TilesProps {
  section: TilesSection;
}

const TileIcon: React.FC<{ name: string }> = ({ name }) => {
  // Simple SVG icons matching GBP style
  const icons: Record<string, React.ReactNode> = {
    chat: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    ),
  };
  return <span className="fd-gbp-body-v3__tile-icon">{icons[name] || icons.star}</span>;
};

const Tiles: React.FC<TilesProps> = ({ section }) => {
  return (
    <section className="fd-gbp-body-v3__tiles" data-parity="tiles">
      <div className="fd-gbp-body-v3__tiles-container">
        <div className="fd-gbp-body-v3__tiles-grid">
          {section.tiles.map((tile) => (
            <article key={tile.id} className="fd-gbp-body-v3__tile">
              <TileIcon name={tile.icon} />
              <h3 className="fd-gbp-body-v3__tile-title">{tile.title}</h3>
              <p className="fd-gbp-body-v3__tile-desc">{tile.description}</p>
              {tile.cta && (
                <a
                  href={tile.cta.href}
                  className={`fd-gbp-body-v3__btn fd-gbp-body-v3__btn--${tile.cta.variant} fd-gbp-body-v3__tile-cta`}
                >
                  {tile.cta.label}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// CTA HEADER COMPONENT (ion-section-header)
// After Case Studies
// ============================================

interface CTAHeaderProps {
  section: CTAHeaderSection;
}

const CTAHeader: React.FC<CTAHeaderProps> = ({ section }) => {
  return (
    <section className="fd-gbp-body-v3__cta-header" data-parity="cta-header">
      <div className="fd-gbp-body-v3__cta-header-container">
        <div className="fd-gbp-body-v3__cta-header-grid">
          <h2 className="fd-gbp-body-v3__cta-header-headline">{section.headline}</h2>
          {section.description && (
            <p className="fd-gbp-body-v3__cta-header-desc">{section.description}</p>
          )}
          {section.cta && (
            <a
              href={section.cta.href}
              className={`fd-gbp-body-v3__btn fd-gbp-body-v3__btn--${section.cta.variant} fd-gbp-body-v3__cta-header-btn`}
            >
              {section.cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

// ============================================
// STEPS COMPONENT (ion-standard-3up-stacked-list)
// After CTA Header
// ============================================

interface StepsProps {
  section: StepsSection;
}

const Steps: React.FC<StepsProps> = ({ section }) => {
  return (
    <section className="fd-gbp-body-v3__steps" data-parity="steps">
      <div className="fd-gbp-body-v3__steps-container">
        {section.sectionTitle && (
          <h2 className="fd-gbp-body-v3__steps-title">{section.sectionTitle}</h2>
        )}
        <div className="fd-gbp-body-v3__steps-grid">
          {section.steps.map((step) => (
            <article key={step.id} className="fd-gbp-body-v3__step">
              <span className="fd-gbp-body-v3__step-number">{step.stepNumber}</span>
              <h3 className="fd-gbp-body-v3__step-title">{step.title}</h3>
              <p className="fd-gbp-body-v3__step-desc">{step.description}</p>
            </article>
          ))}
        </div>
        {section.cta && (
          <div className="fd-gbp-body-v3__steps-cta-wrap">
            <a
              href={section.cta.href}
              className={`fd-gbp-body-v3__btn fd-gbp-body-v3__btn--${section.cta.variant} fd-gbp-body-v3__steps-cta`}
            >
              {section.cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================
// FAQ ACCORDION COMPONENT (ion-accordion)
// At end
// ============================================

interface FAQProps {
  section: FAQSection;
}

const FAQ: React.FC<FAQProps> = ({ section }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Anchor link for navigation */}
      <a id={section.anchorId} className="fd-gbp-body-v3__anchor" aria-hidden="true"></a>

      <section className="fd-gbp-body-v3__faq" data-parity="faq">
        <div className="fd-gbp-body-v3__faq-container">
          <div className="fd-gbp-body-v3__faq-grid">
            <h2 className="fd-gbp-body-v3__faq-title">{section.sectionTitle}</h2>
            <div className="fd-gbp-body-v3__faq-list" role="list">
              {section.items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.id}
                    className={`fd-gbp-body-v3__faq-item ${isOpen ? 'fd-gbp-body-v3__faq-item--open' : ''}`}
                    role="listitem"
                  >
                    <button
                      className="fd-gbp-body-v3__faq-question"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      onClick={() => handleToggle(index)}
                    >
                      <span>{item.question}</span>
                      <svg
                        className="fd-gbp-body-v3__faq-chevron"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <div
                      id={`faq-answer-${item.id}`}
                      className="fd-gbp-body-v3__faq-answer"
                      hidden={!isOpen}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================

interface FloodDoctorHomeV3Props {
  /** Force content mode, bypassing query param. Used for production route. */
  forcedContent?: 'fd' | 'ref';
}

export default function FloodDoctorHomeV3({ forcedContent }: FloodDoctorHomeV3Props) {
  const [searchParams] = useSearchParams();

  // Content selection: prop overrides query param (for production)
  const contentMode = forcedContent || searchParams.get('__content') || 'ref';
  const content: HomeV3Content = contentMode === 'fd' ? fdContent : refContent;

  // Freeze mode for parity testing
  const freezeMode = searchParams.get('__freeze') === '1';

  // Max section for incremental parity testing
  const maxSection = parseInt(searchParams.get('__maxSection') || '999', 10);

  // Root class with freeze modifier
  const rootClassName = `fd-home-v3 ${freezeMode ? 'fd-home-v3--freeze' : ''}`;

  return (
    <div className={rootClassName}>
      {/* FD Header (existing component) */}
      <Header />

      {/* GBP Body Clone - ONLY this section is cloned from GBP layout */}
      <main id="main-content" className="fd-gbp-body-v3" data-parity="main">
        {/* Page wrapper (equivalent of modules-lib__page) */}
        <div className="fd-gbp-body-v3__page">
          {/* 1. Hero (ion-hero) */}
          {maxSection >= 1 && (
            <Hero content={content.hero} />
          )}

          {/* 2. Tiles (ion-standard-3up-stacked-list) - immediately after Hero */}
          {maxSection >= 2 && content.tilesSection && (
            <Tiles section={content.tilesSection} />
          )}

          {/* 3-4. Animated Text List Sections (ATL1 light, ATL2 dark) */}
          {maxSection >= 3 && content.atlSections.map((atlSection, index) => (
            <AnimatedTextList
              key={atlSection.id}
              section={atlSection}
              freezeMode={freezeMode}
              forcedIndex={freezeMode ? parseInt(searchParams.get('__textIndex') || '0', 10) : undefined}
            />
          ))}

          {/* 5. Scrolling 3-up Cards (ion-scrolling-3up-cards-list) */}
          {maxSection >= 4 && content.scrollingCardsSection && (
            <ScrollingCards section={content.scrollingCardsSection} />
          )}

          {/* 6. Two-up Media/Text (ion-twoup) */}
          {maxSection >= 4 && content.twoUpSection && (
            <TwoUp section={content.twoUpSection} />
          )}

          {/* 7. Case Studies (ion-case-study-module) */}
          {maxSection >= 4 && content.caseStudiesSection && (
            <CaseStudies section={content.caseStudiesSection} />
          )}

          {/* 8. CTA Header (ion-section-header) - after Case Studies */}
          {maxSection >= 5 && content.ctaHeaderSection && (
            <CTAHeader section={content.ctaHeaderSection} />
          )}

          {/* 9. Steps (ion-standard-3up-stacked-list) - after CTA Header */}
          {maxSection >= 5 && content.stepsSection && (
            <Steps section={content.stepsSection} />
          )}

          {/* 10. FAQ (ion-accordion) - at end, includes anchor link */}
          {maxSection >= 6 && content.faqSection && (
            <FAQ section={content.faqSection} />
          )}
        </div>
      </main>

      {/* FD Footer (existing component) */}
      <Footer />
    </div>
  );
}
