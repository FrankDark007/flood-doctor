import React, { useEffect, useState, useRef, CSSProperties } from 'react';
import { Menu, Droplets, Zap, FileCheck, Camera, Users, Award, CheckCircle2, Star, MessageSquare, Phone, UserCheck, BarChart3 } from 'lucide-react';
import './GoogleHomeCloneDev.css';

/**
 * GoogleHomeCloneDev - DEV ONLY page at /dev/google-home-clone/
 * Pass 0: Section map cleanup - match Google's section order exactly
 * Pass 1: Structural parity with Google Home. Placeholders OK.
 * Pass 2: Added scroll-based active card highlight for Row 4.
 * Pass 3: Added progress bar rows + mobile sticky CTA.
 */

// PASS 15: Extra Flood Doctor sections NOT on Google - permanently disabled for parity
const SHOW_EXTRA_SECTIONS = false;

// Progress row data - PASS 2: "Take charge of your first impression"
const progressRow1Items = [
  { title: 'Add your info', desc: 'Add information like your phone number and operating hours, so customers know what to expect.', icon: Phone },
  { title: 'Share photos and logos', desc: "Show your business's personality with photos, a cover image, your logo, and more to stand out to customers.", icon: Camera },
  { title: 'Add attributes', desc: 'Add attributes to show your business identifies as Black-owned, women-owned, veteran-owned, and is LGBTQ+ friendly so people can learn more about your business.', icon: Award },
];

// Progress row data - PASS 3: "Easily connect with customers"
const progressRow2Items = [
  { title: 'Create posts', desc: 'Add posts to your Business Profile to promote special offers, events, and updates to keep customers in the loop.', icon: FileCheck },
  { title: 'Reply to reviews', desc: 'Reply to public customer reviews to build trust with new and returning customers.', icon: MessageSquare },
  { title: 'Answer questions', desc: 'List helpful business info upfront and save time by posting answers to common questions. Even let customers answer questions, too.', icon: Users },
];

const GoogleHomeCloneDev: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeProgress1, setActiveProgress1] = useState(0);
  const [activeProgress2, setActiveProgress2] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  // PASS 9: Header interaction states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const progressRef1 = useRef<HTMLElement>(null);
  const progressRef2 = useRef<HTMLElement>(null);

  // Add/remove body class on mount/unmount to scope CSS
  useEffect(() => {
    document.body.classList.add('dev-google-home-clone');
    return () => {
      document.body.classList.remove('dev-google-home-clone');
    };
  }, []);

  // PASS 9: Escape key closes mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // PASS 9: Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Row 6 Testimonials: Auto-rotate carousel
  useEffect(() => {
    if (!document.body.classList.contains('dev-google-home-clone')) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // No auto-rotate for reduced motion

    let isPaused = false;
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveTestimonial((prev) => (prev + 1) % 3);
      }
    }, 4500);

    // Pause on hover/focus
    const section = testimonialsRef.current;
    const handlePause = () => { isPaused = true; };
    const handleResume = () => { isPaused = false; };

    if (section) {
      section.addEventListener('mouseenter', handlePause);
      section.addEventListener('mouseleave', handleResume);
      section.addEventListener('focusin', handlePause);
      section.addEventListener('focusout', handleResume);
    }

    return () => {
      clearInterval(interval);
      if (section) {
        section.removeEventListener('mouseenter', handlePause);
        section.removeEventListener('mouseleave', handleResume);
        section.removeEventListener('focusin', handlePause);
        section.removeEventListener('focusout', handleResume);
      }
    };
  }, []);

  // Row 4: IntersectionObserver for active card highlight
  useEffect(() => {
    // Guard: only run on dev page
    if (!document.body.classList.contains('dev-google-home-clone')) return;

    const cards = document.querySelectorAll('[data-ghc-card]');
    if (cards.length === 0) return;

    const observerOptions: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: '-40% 0px -40% 0px', // trigger when card is in middle 20% of viewport
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const card = entry.target as HTMLElement;
        const stepNum = parseInt(card.dataset.ghcCard || '1', 10);

        if (entry.isIntersecting) {
          // Remove is-active from all cards, add to this one
          cards.forEach((c) => c.classList.remove('is-active'));
          card.classList.add('is-active');
          setActiveStep(stepNum);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    cards.forEach((card) => observer.observe(card));

    // Set first card as active initially
    cards[0]?.classList.add('is-active');

    return () => observer.disconnect();
  }, []);

  // Row 7 FAQ: Smooth open/close animation
  useEffect(() => {
    // Guard: only run on dev page
    if (!document.body.classList.contains('dev-google-home-clone')) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const faqItems = document.querySelectorAll('.ghc-faq-item');
    if (faqItems.length === 0) return;

    const animationDuration = 250; // ms

    const handleToggle = (e: Event) => {
      const details = e.target as HTMLDetailsElement;
      const answer = details.querySelector('.ghc-faq-answer') as HTMLElement;
      if (!answer) return;

      // Cancel any existing animation
      answer.getAnimations().forEach((anim) => anim.cancel());

      if (details.open) {
        // Opening: animate from 0 to auto height
        const height = answer.scrollHeight;
        answer.style.overflow = 'hidden';
        answer.animate(
          [
            { height: '0px', opacity: 0 },
            { height: `${height}px`, opacity: 1 },
          ],
          { duration: animationDuration, easing: 'ease-out' }
        ).onfinish = () => {
          answer.style.overflow = '';
        };
      } else {
        // Closing: prevent default close, animate, then close
        e.preventDefault();
        const height = answer.scrollHeight;
        answer.style.overflow = 'hidden';
        answer.animate(
          [
            { height: `${height}px`, opacity: 1 },
            { height: '0px', opacity: 0 },
          ],
          { duration: animationDuration, easing: 'ease-out' }
        ).onfinish = () => {
          details.open = false;
          answer.style.overflow = '';
        };
      }
    };

    faqItems.forEach((item) => {
      item.addEventListener('toggle', handleToggle);
    });

    return () => {
      faqItems.forEach((item) => {
        item.removeEventListener('toggle', handleToggle);
      });
    };
  }, []);

  // Progress bar rows: IntersectionObserver + requestAnimationFrame + hover pause
  // PASS 26: Constant-velocity fill - duration based on content length (longer = more time)
  useEffect(() => {
    if (!document.body.classList.contains('dev-google-home-clone')) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // PASS 26: Calculate duration based on description length for constant velocity
    // Base rate: ~30ms per character gives ~3s for 100 chars, ~6s for 200 chars
    const MS_PER_CHAR = 30;
    const MIN_DURATION = 3000;
    const MAX_DURATION = 7000;

    const getDuration1 = (index: number) => {
      const desc = progressRow1Items[index]?.desc || '';
      return Math.min(MAX_DURATION, Math.max(MIN_DURATION, desc.length * MS_PER_CHAR));
    };
    const getDuration2 = (index: number) => {
      const desc = progressRow2Items[index]?.desc || '';
      return Math.min(MAX_DURATION, Math.max(MIN_DURATION, desc.length * MS_PER_CHAR));
    };

    let raf1: number | null = null;
    let raf2: number | null = null;
    let startTime1 = 0;
    let startTime2 = 0;
    let isVisible1 = false;
    let isVisible2 = false;
    let isPaused1 = false;
    let isPaused2 = false;
    let pausedProgress1 = 0;
    let pausedProgress2 = 0;
    let currentIndex1 = 0;
    let currentIndex2 = 0;

    const animate1 = (timestamp: number) => {
      if (!isVisible1 || isPaused1) return;
      const duration = getDuration1(currentIndex1);
      if (!startTime1) startTime1 = timestamp - (pausedProgress1 * duration);
      const elapsed = timestamp - startTime1;
      const progress = Math.min(elapsed / duration, 1);
      setProgress1(progress);

      if (progress >= 1) {
        currentIndex1 = (currentIndex1 + 1) % 3;
        setActiveProgress1(currentIndex1);
        setProgress1(0);
        startTime1 = 0;
        pausedProgress1 = 0;
      }
      raf1 = requestAnimationFrame(animate1);
    };

    const animate2 = (timestamp: number) => {
      if (!isVisible2 || isPaused2) return;
      const duration = getDuration2(currentIndex2);
      if (!startTime2) startTime2 = timestamp - (pausedProgress2 * duration);
      const elapsed = timestamp - startTime2;
      const progress = Math.min(elapsed / duration, 1);
      setProgress2(progress);

      if (progress >= 1) {
        currentIndex2 = (currentIndex2 + 1) % 3;
        setActiveProgress2(currentIndex2);
        setProgress2(0);
        startTime2 = 0;
        pausedProgress2 = 0;
      }
      raf2 = requestAnimationFrame(animate2);
    };

    // Pause/resume handlers for hover/focus
    const handlePause1 = () => {
      isPaused1 = true;
      const duration = getDuration1(currentIndex1);
      pausedProgress1 = (Date.now() - (startTime1 || Date.now())) / duration;
      if (raf1) cancelAnimationFrame(raf1);
    };
    const handleResume1 = () => {
      isPaused1 = false;
      startTime1 = 0; // Will be recalculated with pausedProgress1
      if (isVisible1 && !prefersReducedMotion) raf1 = requestAnimationFrame(animate1);
    };
    const handlePause2 = () => {
      isPaused2 = true;
      const duration = getDuration2(currentIndex2);
      pausedProgress2 = (Date.now() - (startTime2 || Date.now())) / duration;
      if (raf2) cancelAnimationFrame(raf2);
    };
    const handleResume2 = () => {
      isPaused2 = false;
      startTime2 = 0;
      if (isVisible2 && !prefersReducedMotion) raf2 = requestAnimationFrame(animate2);
    };

    // For reduced motion: just cycle without animation (use average duration)
    let interval1: ReturnType<typeof setInterval> | null = null;
    let interval2: ReturnType<typeof setInterval> | null = null;
    const AVG_DURATION = 4500;

    if (prefersReducedMotion) {
      interval1 = setInterval(() => {
        if (isVisible1 && !isPaused1) setActiveProgress1((prev) => (prev + 1) % 3);
      }, AVG_DURATION);
      interval2 = setInterval(() => {
        if (isVisible2 && !isPaused2) setActiveProgress2((prev) => (prev + 1) % 3);
      }, AVG_DURATION);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (target === progressRef1.current) {
            isVisible1 = entry.isIntersecting;
            if (entry.isIntersecting && !prefersReducedMotion && !isPaused1) {
              startTime1 = 0;
              pausedProgress1 = 0;
              raf1 = requestAnimationFrame(animate1);
            } else if (!entry.isIntersecting && raf1) {
              cancelAnimationFrame(raf1);
            }
          } else if (target === progressRef2.current) {
            isVisible2 = entry.isIntersecting;
            if (entry.isIntersecting && !prefersReducedMotion && !isPaused2) {
              startTime2 = 0;
              pausedProgress2 = 0;
              raf2 = requestAnimationFrame(animate2);
            } else if (!entry.isIntersecting && raf2) {
              cancelAnimationFrame(raf2);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (progressRef1.current) observer.observe(progressRef1.current);
    if (progressRef2.current) observer.observe(progressRef2.current);

    // Add hover/focus listeners to progress sections
    const section1 = progressRef1.current;
    const section2 = progressRef2.current;
    if (section1) {
      section1.addEventListener('mouseenter', handlePause1);
      section1.addEventListener('mouseleave', handleResume1);
      section1.addEventListener('focusin', handlePause1);
      section1.addEventListener('focusout', handleResume1);
    }
    if (section2) {
      section2.addEventListener('mouseenter', handlePause2);
      section2.addEventListener('mouseleave', handleResume2);
      section2.addEventListener('focusin', handlePause2);
      section2.addEventListener('focusout', handleResume2);
    }

    return () => {
      observer.disconnect();
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
      if (interval1) clearInterval(interval1);
      if (interval2) clearInterval(interval2);
      if (section1) {
        section1.removeEventListener('mouseenter', handlePause1);
        section1.removeEventListener('mouseleave', handleResume1);
        section1.removeEventListener('focusin', handlePause1);
        section1.removeEventListener('focusout', handleResume1);
      }
      if (section2) {
        section2.removeEventListener('mouseenter', handlePause2);
        section2.removeEventListener('mouseleave', handleResume2);
        section2.removeEventListener('focusin', handlePause2);
        section2.removeEventListener('focusout', handleResume2);
      }
    };
  }, []);

  // Handle click on progress items - reset progress with 120ms settle delay
  const handleProgressClick1 = (index: number) => {
    setProgress1(0); // Immediately reset fill
    setTimeout(() => {
      setActiveProgress1(index);
    }, 120); // 120ms settle delay
  };
  const handleProgressClick2 = (index: number) => {
    setProgress2(0);
    setTimeout(() => {
      setActiveProgress2(index);
    }, 120);
  };

  return (
    <div className="ghc-page-wrapper">
      {/* ===== PASS 24B: GBP SIGNED-OUT HEADER ===== */}
      <header className="ghc-header ghc-header-gbp" data-menu-open={mobileMenuOpen}>
        {/* Skip to content (accessibility) */}
        <a href="#main-content" className="ghc-skip-link">Skip to content</a>

        {/* Row 1: Google logo + primary nav */}
        <div className="ghc-header-row1">
          <div className="ghc-header-row1-inner">
            {/* Google G logo */}
            <a href="/" className="ghc-google-logo" aria-label="Google">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
            {/* Primary nav (desktop) */}
            <nav className="ghc-header-nav-primary">
              <a href="#" className="ghc-nav-link-primary">Where to start?</a>
              <a href="#" className="ghc-nav-link-primary">Solutions</a>
              <a href="#" className="ghc-nav-link-primary">Learning & insights</a>
              <a href="#" className="ghc-nav-link-primary">Get support</a>
            </nav>
            {/* User avatar placeholder (signed out = generic icon) */}
            <div className="ghc-header-user">
              <div className="ghc-user-avatar">
                <svg viewBox="0 0 24 24" width="32" height="32">
                  <path fill="#5f6368" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Product name + category nav + CTAs */}
        <div className="ghc-header-row2">
          <div className="ghc-header-row2-inner">
            {/* Left: Product name + category nav */}
            <div className="ghc-header-row2-left">
              {/* Hamburger (mobile) */}
              <button
                className="ghc-hamburger"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="ghc-mobile-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu />
              </button>
              <span className="ghc-product-name">Google Business Profile</span>
              {/* Category nav (desktop) */}
              <nav className="ghc-header-nav-category">
                <a href="#" className="ghc-nav-link-category">Retail</a>
                <a href="#" className="ghc-nav-link-category">Services</a>
                <a href="#" className="ghc-nav-link-category">Restaurants</a>
              </nav>
            </div>
            {/* Right: CTAs */}
            <div className="ghc-header-row2-right">
              <button className="ghc-btn-signin-outline">Sign in</button>
              <button className="ghc-btn-start">Start now</button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          id="ghc-mobile-menu"
          className="ghc-mobile-menu"
          aria-hidden={!mobileMenuOpen}
        >
          <div className="ghc-mobile-menu-header">
            <span className="ghc-product-name">Google Business Profile</span>
            <button
              className="ghc-mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <nav className="ghc-mobile-nav">
            <a href="#" className="ghc-mobile-nav-link">Where to start?</a>
            <a href="#" className="ghc-mobile-nav-link">Solutions</a>
            <a href="#" className="ghc-mobile-nav-link">Learning & insights</a>
            <a href="#" className="ghc-mobile-nav-link">Get support</a>
            <div className="ghc-mobile-nav-divider" />
            <a href="#" className="ghc-mobile-nav-link">Retail</a>
            <a href="#" className="ghc-mobile-nav-link">Services</a>
            <a href="#" className="ghc-mobile-nav-link">Restaurants</a>
          </nav>
          <div className="ghc-mobile-menu-footer">
            <button className="ghc-btn-signin-outline">Sign in</button>
            <button className="ghc-btn-start">Start now</button>
          </div>
        </div>

        {/* Mobile menu backdrop */}
        <div
          className="ghc-mobile-backdrop"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
      </header>

      {/* ===== HERO ===== */}
      <section id="main-content" className="ghc-hero" data-gbp-section="hero">
        <div className="ghc-page">
          <div className="ghc-grid">
            <div className="ghc-hero-2up">
              {/* Copy column */}
              <div className="ghc-hero-copy">
                <h1>
                  <span className="ghc-hero-h1-accent">Stand out</span>{' '}
                  <span className="ghc-hero-h1-main">on Google with a free Business Profile</span>
                </h1>
                <p className="ghc-hero-desc">
                  Turn people who find you on Google Search and Maps into new customers with a free Business Profile for your storefront or service area. Personalize your profile with photos, offers, posts, and more.
                </p>
                <div className="ghc-hero-ctas">
                  <a href="#" className="ghc-btn-primary">Start now</a>
                </div>
              </div>

              {/* Media column - PASS 24C: GBP-style phone mockup */}
              <div className="ghc-hero-media">
                <div className="ghc-hero-mediaInner">
                  {/* Confetti dots */}
                  <div className="ghc-hero-confetti">
                    <span className="ghc-dot ghc-dot-1" />
                    <span className="ghc-dot ghc-dot-2" />
                    <span className="ghc-dot ghc-dot-3" />
                    <span className="ghc-dot ghc-dot-4" />
                    <span className="ghc-dot ghc-dot-5" />
                    <span className="ghc-dot ghc-dot-6" />
                  </div>
                  <div className="ghc-hero-mediaFrame">
                    <div className="ghc-hero-phone ghc-hero-mediaAsset">
                      <div className="ghc-hero-phone-notch" />
                      <div className="ghc-hero-phone-screen">
                        {/* GBP Card Mock */}
                        <div className="ghc-gbp-card">
                          <div className="ghc-gbp-header">
                            <div className="ghc-gbp-avatar">
                              <svg viewBox="0 0 24 24" width="24" height="24">
                                <circle cx="12" cy="8" r="4" fill="#1a73e8"/>
                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="#1a73e8"/>
                              </svg>
                            </div>
                            <div className="ghc-gbp-info">
                              <span className="ghc-gbp-name">Daniel Voltage</span>
                              <span className="ghc-gbp-role">Owner of Detroit Voltage</span>
                            </div>
                          </div>
                          <div className="ghc-gbp-photos">
                            <div className="ghc-gbp-photo ghc-gbp-photo-1" />
                            <div className="ghc-gbp-photo ghc-gbp-photo-2" />
                            <div className="ghc-gbp-photo ghc-gbp-photo-3" />
                          </div>
                          <div className="ghc-gbp-details">
                            <div className="ghc-gbp-detail-row">
                              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#5f6368" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                              <span>402 Monroe St #201</span>
                            </div>
                            <div className="ghc-gbp-detail-row">
                              <svg viewBox="0 0 24 24" width="16" height="16"><path fill="#5f6368" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                              <span>Closed · Opens 9 AM</span>
                            </div>
                          </div>
                          <button className="ghc-gbp-cta">WEBSITE & QUOTE</button>
                        </div>
                      </div>
                      {/* Pause control */}
                      <button className="ghc-hero-pause" aria-label="Pause animation">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                          <rect x="6" y="4" width="4" height="16" rx="1" fill="#5f6368"/>
                          <rect x="14" y="4" width="4" height="16" rx="1" fill="#5f6368"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROW 3: TILES (Google "Free / Easy / Personalized" parity) ===== */}
      <section className="ghc-tiles" data-gbp-section="tiles">
        <div className="ghc-page">
          <div className="ghc-grid">
            <div className="ghc-tiles-col">
              <ul className="ghc-tiles-list">
                {/* Tile 1: Free - PASS 24D: Google-style filled tag icon */}
                <li className="ghc-tile">
                  <div className="ghc-tile-card">
                    <div className="ghc-tile-mediaWrap">
                      <div className="ghc-tile-icon-wrap">
                        <svg className="ghc-tile-icon-v2" viewBox="0 0 24 24" aria-hidden="true">
                          <path fill="#1a73e8" d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ghc-tile-copy">
                      <h2 className="ghc-tile-title">Free</h2>
                      <div className="ghc-tile-body"><p className="ghc-tile-p">Create a Business Profile at no cost</p></div>
                    </div>
                  </div>
                </li>
                {/* Tile 2: Easy - PASS 24D: Google-style filled sync/exchange icon */}
                <li className="ghc-tile">
                  <div className="ghc-tile-card">
                    <div className="ghc-tile-mediaWrap">
                      <div className="ghc-tile-icon-wrap">
                        <svg className="ghc-tile-icon-v2" viewBox="0 0 24 24" aria-hidden="true">
                          <path fill="#1a73e8" d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ghc-tile-copy">
                      <h2 className="ghc-tile-title">Easy</h2>
                      <div className="ghc-tile-body"><p className="ghc-tile-p">Manage your profile from Search and Maps</p></div>
                    </div>
                  </div>
                </li>
                {/* Tile 3: Personalized - PASS 24D: Google-style filled settings icon */}
                <li className="ghc-tile">
                  <div className="ghc-tile-card">
                    <div className="ghc-tile-mediaWrap">
                      <div className="ghc-tile-icon-wrap">
                        <svg className="ghc-tile-icon-v2" viewBox="0 0 24 24" aria-hidden="true">
                          <path fill="#1a73e8" d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ghc-tile-copy">
                      <h2 className="ghc-tile-title">Personalized</h2>
                      <div className="ghc-tile-body"><p className="ghc-tile-p">Add hours, photos, posts, and more</p></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROW 3B: PROGRESS ROW 1 - First Impression ===== */}
      <section className="ghc-progress-row" ref={progressRef1} data-gbp-section="atl1">
        <div className="ghc-page">
          <div className="ghc-grid">
            <div className="ghc-progress-col">
              <div className="ghc-progress-header">
                <h2 className="ghc-progress-title">Take charge of your first impression</h2>
                <p className="ghc-progress-subtitle">Highlight essential info and show what makes your business unique, right on your Business Profile.</p>
              </div>
              <div className="ghc-progress-content">
                <div className="ghc-progress-left">
                  {progressRow1Items.map((item, i) => {
                    const isActive = activeProgress1 === i;
                    return (
                      <button
                        key={i}
                        className={`ghc-progress-item ${isActive ? 'is-active' : ''}`}
                        style={{ '--fill': isActive ? progress1 : 0 } as CSSProperties}
                        onClick={() => handleProgressClick1(i)}
                        aria-pressed={isActive}
                      >
                        <div className="ghc-progress-bar">
                          <div className="ghc-progress-fill" />
                        </div>
                        <div className="ghc-progress-item-content">
                          <h3>{item.title}</h3>
                          {isActive && <p>{item.desc}</p>}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {/* PASS 24E: GBP-style photo grid card */}
                <div className="ghc-progress-right">
                  <div className="ghc-progress-visual ghc-progress-visual-v2">
                    <div className="ghc-atl1-card">
                      <div className="ghc-atl1-card-header">
                        <span className="ghc-atl1-card-title">Yolanda's Yogurt and Botana Bar</span>
                        <button className="ghc-atl1-card-edit" aria-label="Edit">
                          <svg viewBox="0 0 24 24" width="20" height="20">
                            <path fill="#5f6368" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                          </svg>
                        </button>
                      </div>
                      <div className="ghc-atl1-card-label">Photos</div>
                      <div className="ghc-atl1-photo-grid">
                        <div className="ghc-atl1-photo ghc-atl1-photo-main" />
                        <div className="ghc-atl1-photo-stack">
                          <div className="ghc-atl1-photo ghc-atl1-photo-sm" />
                          <div className="ghc-atl1-photo ghc-atl1-photo-sm" />
                        </div>
                        <div className="ghc-atl1-photo-stack">
                          <div className="ghc-atl1-photo ghc-atl1-photo-sm" />
                          <div className="ghc-atl1-photo ghc-atl1-photo-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROW 3C: PROGRESS ROW 2 - Connect with Customers ===== */}
      <section className="ghc-progress-row ghc-progress-row-alt" ref={progressRef2} data-gbp-section="atl2">
        <div className="ghc-page">
          <div className="ghc-grid">
            <div className="ghc-progress-col">
              <div className="ghc-progress-header">
                <h2 className="ghc-progress-title">Easily connect with customers</h2>
                <p className="ghc-progress-subtitle">Update customers with the latest via posts, offers, and more.</p>
              </div>
              <div className="ghc-progress-content">
                <div className="ghc-progress-left">
                  {progressRow2Items.map((item, i) => {
                    const isActive = activeProgress2 === i;
                    return (
                      <button
                        key={i}
                        className={`ghc-progress-item ${isActive ? 'is-active' : ''}`}
                        style={{ '--fill': isActive ? progress2 : 0 } as CSSProperties}
                        onClick={() => handleProgressClick2(i)}
                        aria-pressed={isActive}
                      >
                        <div className="ghc-progress-bar">
                          <div className="ghc-progress-fill" />
                        </div>
                        <div className="ghc-progress-item-content">
                          <h3>{item.title}</h3>
                          {isActive && <p>{item.desc}</p>}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {/* PASS 24F: GBP-style reviews card */}
                <div className="ghc-progress-right">
                  <div className="ghc-progress-visual ghc-progress-visual-v2">
                    <div className="ghc-atl2-card">
                      <div className="ghc-atl2-card-header">
                        <span className="ghc-atl2-card-title">Reviews</span>
                        <span className="ghc-atl2-rating">
                          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                            <path fill="#fbbc04" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                          <span>4.8</span>
                        </span>
                      </div>
                      <div className="ghc-atl2-reviews">
                        <div className="ghc-atl2-review">
                          <div className="ghc-atl2-review-header">
                            <div className="ghc-atl2-avatar" style={{background: '#ea4335'}}>J</div>
                            <div className="ghc-atl2-review-meta">
                              <span className="ghc-atl2-reviewer">James M.</span>
                              <div className="ghc-atl2-stars">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} viewBox="0 0 24 24" width="12" height="12">
                                    <path fill="#fbbc04" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="ghc-atl2-review-text">Excellent service! They responded within minutes and fixed everything.</p>
                        </div>
                        <div className="ghc-atl2-review">
                          <div className="ghc-atl2-review-header">
                            <div className="ghc-atl2-avatar" style={{background: '#4285f4'}}>S</div>
                            <div className="ghc-atl2-review-meta">
                              <span className="ghc-atl2-reviewer">Sarah K.</span>
                              <div className="ghc-atl2-stars">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} viewBox="0 0 24 24" width="12" height="12">
                                    <path fill="#fbbc04" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="ghc-atl2-review-text">Highly professional team. Would definitely recommend!</p>
                        </div>
                      </div>
                      <button className="ghc-atl2-reply-btn">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                          <path fill="#1a73e8" d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
                        </svg>
                        Reply to reviews
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROW 4: STICKY TEXT + SCROLLING CARDS (Flood Doctor Process) ===== */}
      {SHOW_EXTRA_SECTIONS && <section className="ghc-sticky-section">
        <div className="ghc-sticky-inner">
          {/* Left: Sticky text block */}
          <div className="ghc-sticky-left" data-ghc-sticky>
            <div className="ghc-sticky-text">
              <p className="ghc-sticky-label">Our process</p>
              <h2 className="ghc-sticky-title">From call to complete restoration</h2>
              <p className="ghc-sticky-description">
                We've refined our process over thousands of projects to minimize damage,
                maximize insurance coverage, and get your life back to normal as quickly as possible.
              </p>
              <p className="ghc-sticky-step-indicator">Step {activeStep} of 6</p>
            </div>
          </div>

          {/* Right: Scrolling cards */}
          <div className="ghc-sticky-right" ref={cardsContainerRef}>
            <div className="ghc-process-card" data-ghc-card="1">
              <div className="ghc-process-icon">
                <Zap />
              </div>
              <div className="ghc-process-content">
                <h3 className="ghc-process-title">1. Emergency dispatch</h3>
                <p className="ghc-process-description">
                  Call our 24/7 hotline and we'll dispatch a certified technician to your location within 60 minutes.
                </p>
              </div>
            </div>

            <div className="ghc-process-card" data-ghc-card="2">
              <div className="ghc-process-icon">
                <Camera />
              </div>
              <div className="ghc-process-content">
                <h3 className="ghc-process-title">2. Assessment & documentation</h3>
                <p className="ghc-process-description">
                  We thoroughly assess the damage, document everything with photos and moisture readings for your insurance claim.
                </p>
              </div>
            </div>

            <div className="ghc-process-card" data-ghc-card="3">
              <div className="ghc-process-icon">
                <FileCheck />
              </div>
              <div className="ghc-process-content">
                <h3 className="ghc-process-title">3. Insurance coordination</h3>
                <p className="ghc-process-description">
                  We work directly with your insurance adjuster, providing all required documentation and estimates.
                </p>
              </div>
            </div>

            <div className="ghc-process-card" data-ghc-card="4">
              <div className="ghc-process-icon">
                <Droplets />
              </div>
              <div className="ghc-process-content">
                <h3 className="ghc-process-title">4. Water extraction</h3>
                <p className="ghc-process-description">
                  Using industrial-grade equipment, we remove standing water and begin the drying process immediately.
                </p>
              </div>
            </div>

            <div className="ghc-process-card" data-ghc-card="5">
              <div className="ghc-process-icon">
                <Users />
              </div>
              <div className="ghc-process-content">
                <h3 className="ghc-process-title">5. Restoration & repair</h3>
                <p className="ghc-process-description">
                  Our team handles everything from structural repairs to finishing touches, restoring your property completely.
                </p>
              </div>
            </div>

            <div className="ghc-process-card" data-ghc-card="6">
              <div className="ghc-process-icon">
                <Award />
              </div>
              <div className="ghc-process-content">
                <h3 className="ghc-process-title">6. Final walkthrough</h3>
                <p className="ghc-process-description">
                  We conduct a final inspection with you to ensure everything meets our standards and your satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* ===== PASS 4/14: VERTICAL CARDS — "Show what you offer, from products to services" ===== */}
      <section className="ghc-offer-section" data-gbp-section="cards">
        <div className="ghc-page">
          <div className="ghc-offer-grid">
            {/* Left column: Heading + description (sticky on desktop) */}
            <div className="ghc-offer-header">
              <h2 className="ghc-offer-title">Show what you offer, from products to services</h2>
              <p className="ghc-offer-desc">Whether you're a restaurant, store, or service provider, your profile helps customers do business with you easily and directly with product inventory, ordering, bookings, quotes, and more.</p>
            </div>
            {/* Right column: 3 vertically stacked cards */}
            <div className="ghc-offer-cards">
              {/* Card 1: Accept food orders */}
              <div className="ghc-offer-card">
                <div className="ghc-offer-card-image ghc-offer-card-image--food">
                  <img
                    src="/images/gbp-clone/cards/accept-food-orders.png"
                    alt="Accept food orders interface showing menu and ordering options"
                    className="ghc-offer-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="ghc-offer-card-content">
                  <h3 className="ghc-offer-card-title">Accept food orders and more</h3>
                  <p className="ghc-offer-card-desc">Take orders for delivery and pickup and let customers make reservations. Even add your menu, so people can discover your best dishes.</p>
                  <a href="#" className="ghc-offer-card-link">Learn More</a>
                </div>
              </div>
              {/* Card 2: Be found for what you sell */}
              <div className="ghc-offer-card">
                <div className="ghc-offer-card-image ghc-offer-card-image--products">
                  <img
                    src="/images/gbp-clone/cards/be-found-sell.png"
                    alt="Product listings showing items available for sale"
                    className="ghc-offer-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="ghc-offer-card-content">
                  <h3 className="ghc-offer-card-title">Be found for what you sell</h3>
                  <p className="ghc-offer-card-desc">Be found by automatically listing your in-store products for free, right from your Business Profile.</p>
                  <a href="#" className="ghc-offer-card-link">Learn more</a>
                </div>
              </div>
              {/* Card 3: Offer your services */}
              <div className="ghc-offer-card">
                <div className="ghc-offer-card-image ghc-offer-card-image--services">
                  <img
                    src="/images/gbp-clone/cards/offer-services.png"
                    alt="Service offerings and quote request interface"
                    className="ghc-offer-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="ghc-offer-card-content">
                  <h3 className="ghc-offer-card-title">Offer your services</h3>
                  <p className="ghc-offer-card-desc">Show a list of your business services and provide online quotes, so customers get the info they need to choose you.</p>
                  <a href="#" className="ghc-offer-card-link">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PASS 5: TWO-UP MEDIA/TEXT — "Know how customers find your business" ===== */}
      <section className="ghc-twoup" data-gbp-section="know">
        <div className="ghc-page">
          <div className="ghc-grid">
            <div className="ghc-twoup-inner">
              <div className="ghc-twoup-copy">
                <h2 className="ghc-twoup-title">Know how customers find your business</h2>
                <p className="ghc-twoup-desc">Discover what keywords people search to find you, and get insights on calls, reviews, bookings, and more to understand how your business connects with customers.</p>
              </div>
              <div className="ghc-twoup-media">
                <div className="ghc-twoup-visual">
                  <div className="ghc-twoup-stats-card">
                    <div className="ghc-twoup-stats-header">
                      <span className="ghc-twoup-stats-label">Business Profile Performance</span>
                    </div>
                    <div className="ghc-twoup-stats-number">8,210</div>
                    <div className="ghc-twoup-stats-sublabel">Interactions this month</div>
                    <div className="ghc-twoup-chart-bars">
                      <div className="ghc-twoup-bar" style={{ height: '40%' }} />
                      <div className="ghc-twoup-bar" style={{ height: '60%' }} />
                      <div className="ghc-twoup-bar" style={{ height: '80%' }} />
                      <div className="ghc-twoup-bar" style={{ height: '55%' }} />
                      <div className="ghc-twoup-bar" style={{ height: '70%' }} />
                      <div className="ghc-twoup-bar" style={{ height: '90%' }} />
                    </div>
                    <div className="ghc-twoup-chart-labels">
                      <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PASS 6/18: CASE STUDY MODULE — "What success looks like" ===== */}
      {/* PASS 18: Match reference structure - blue bg, single card carousel, navigation */}
      <section className="ghc-case-studies ghc-case-studies--fill-blue" data-gbp-section="case-study">
        <div className="ghc-page">
          <div className="ghc-grid">
            <div className="ghc-case-studies-col">
              <h2 className="ghc-case-studies-title">What success looks like</h2>
              <div className="ghc-case-studies-carousel-wrapper">
                <div className="ghc-case-studies-carousel" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                  {/* Case Study 1: Detroit Voltage */}
                  <div className="ghc-case-study-card">
                    <div className="ghc-case-study-media">
                      <img
                        src="/images/gbp-clone/case-study/voltage.png"
                        alt="Detroit Voltage - electrical services business"
                        className="ghc-case-study-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="ghc-case-study-content">
                      <blockquote className="ghc-case-study-quote">
                        "I always asked customers, 'What made you call me?' and oftentimes they tell me, 'We reached out because of your Business Profile on Google.'"
                      </blockquote>
                      <p className="ghc-case-study-attribution">
                        Detroit Voltage<br />
                        <span className="ghc-case-study-location">Detroit, Michigan</span>
                      </p>
                      <a href="#" className="ghc-case-study-link">
                        <span className="ghc-case-study-link-icon">▶</span>
                        Watch Story
                      </a>
                    </div>
                  </div>
                  {/* Case Study 2: Yogolandia */}
                  <div className="ghc-case-study-card">
                    <div className="ghc-case-study-media">
                      <img
                        src="/images/gbp-clone/case-study/yogolandia.png"
                        alt="Yogolandia Yogurt and Botana Bar"
                        className="ghc-case-study-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="ghc-case-study-content">
                      <blockquote className="ghc-case-study-quote">
                        "Getting Yogolandia on Google was absolutely key. It truly legitimizes you as a business. It's free, there are photos, and we've gotten phenomenal reviews."
                      </blockquote>
                      <p className="ghc-case-study-attribution">
                        Yogolandia Yogurt and Botana Bar<br />
                        <span className="ghc-case-study-location">Chicago, Illinois</span>
                      </p>
                      <a href="#" className="ghc-case-study-link">
                        <span className="ghc-case-study-link-icon">▶</span>
                        Watch Story
                      </a>
                    </div>
                  </div>
                  {/* Case Study 3: Music store */}
                  <div className="ghc-case-study-card">
                    <div className="ghc-case-study-media">
                      <img
                        src="/images/gbp-clone/case-study/music.png"
                        alt="Music store business success story"
                        className="ghc-case-study-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="ghc-case-study-content">
                      <blockquote className="ghc-case-study-quote">
                        "Our Business Profile helps customers find us easily. The photos and reviews make a real difference in building trust before they even walk through the door."
                      </blockquote>
                      <p className="ghc-case-study-attribution">
                        Local Business Owner<br />
                        <span className="ghc-case-study-location">Austin, Texas</span>
                      </p>
                      <a href="#" className="ghc-case-study-link">
                        <span className="ghc-case-study-link-icon">▶</span>
                        Watch Story
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* PASS 18: Navigation controls */}
              <div className="ghc-case-studies-nav">
                <button
                  className="ghc-case-studies-nav-btn ghc-case-studies-nav-prev"
                  onClick={() => setActiveTestimonial(prev => Math.max(0, prev - 1))}
                  disabled={activeTestimonial === 0}
                  aria-label="Previous case study"
                >
                  <svg viewBox="0 0 24 24" className="ghc-case-studies-nav-icon">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
                  </svg>
                </button>
                <span className="ghc-case-studies-count">{activeTestimonial + 1} / 3</span>
                <button
                  className="ghc-case-studies-nav-btn ghc-case-studies-nav-next"
                  onClick={() => setActiveTestimonial(prev => Math.min(2, prev + 1))}
                  disabled={activeTestimonial === 2}
                  aria-label="Next case study"
                >
                  <svg viewBox="0 0 24 24" className="ghc-case-studies-nav-icon">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PASS 7: SECTION HEADER + CTA — "Show the best of your business" ===== */}
      <section className="ghc-section-header" data-gbp-section="cta">
        <div className="ghc-page">
          <div className="ghc-grid">
            <div className="ghc-section-header-col">
              <h2 className="ghc-section-header-title">Show the best of your business</h2>
              <p className="ghc-section-header-subtitle">Reach more customers in three simple steps with your free Business Profile.</p>
              <div className="ghc-section-header-cta">
                <a href="#" className="ghc-btn-primary">Start now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PASS 7: 3-STEP LIST — Claim / Personalize / Manage ===== */}
      <section className="ghc-steps-list" data-gbp-section="steps">
        <div className="ghc-page">
          <div className="ghc-grid">
            <div className="ghc-steps-col">
              <ul className="ghc-steps">
                <li className="ghc-step">
                  <div className="ghc-step-number">1</div>
                  <div className="ghc-step-content">
                    <h3 className="ghc-step-title"><strong>Claim</strong></h3>
                    <p className="ghc-step-desc">Create a Business Profile, or manage an existing profile on Search and Maps</p>
                  </div>
                </li>
                <li className="ghc-step">
                  <div className="ghc-step-number">2</div>
                  <div className="ghc-step-content">
                    <h3 className="ghc-step-title"><strong>Personalize</strong></h3>
                    <p className="ghc-step-desc">Add hours, photos, and other details and get discovered by customers near you</p>
                  </div>
                </li>
                <li className="ghc-step">
                  <div className="ghc-step-number">3</div>
                  <div className="ghc-step-content">
                    <h3 className="ghc-step-title"><strong>Manage</strong></h3>
                    <p className="ghc-step-desc">Share updates, respond to reviews, and connect with customers on Google</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROW 5: INSIGHTS / CHART (NOT ON GOOGLE - DISABLED) ===== */}
      {SHOW_EXTRA_SECTIONS && <section className="ghc-insights">
        <div className="ghc-insights-inner">
          {/* Left: Text content */}
          <div className="ghc-insights-text">
            <p className="ghc-insights-label">The data</p>
            <h2 className="ghc-insights-title">Every hour matters</h2>
            <p className="ghc-insights-description">
              Water damage costs increase exponentially the longer extraction is delayed.
              Our rapid response minimizes damage and keeps restoration costs down.
            </p>
            <ul className="ghc-insights-list">
              <li className="ghc-insights-item">
                <CheckCircle2 className="ghc-insights-check" />
                <span>48-hour response prevents 60% of secondary damage</span>
              </li>
              <li className="ghc-insights-item">
                <CheckCircle2 className="ghc-insights-check" />
                <span>Mold growth begins within 24–48 hours of water exposure</span>
              </li>
            </ul>
          </div>

          {/* Right: Chart mock */}
          <div className="ghc-insights-chart">
            <div className="ghc-chart-container">
              <div className="ghc-chart-header">
                <h3 className="ghc-chart-title">Restoration cost over time</h3>
                <p className="ghc-chart-subtitle">Average project cost by response delay</p>
              </div>
              <div className="ghc-chart-body">
                {/* Y-axis labels */}
                <div className="ghc-chart-yaxis">
                  <span>$15k</span>
                  <span>$10k</span>
                  <span>$5k</span>
                  <span>$0</span>
                </div>
                {/* Chart area placeholder */}
                <div className="ghc-chart-area">
                  <div className="ghc-chart-bar ghc-chart-bar-1" />
                  <div className="ghc-chart-bar ghc-chart-bar-2" />
                  <div className="ghc-chart-bar ghc-chart-bar-3" />
                  <div className="ghc-chart-bar ghc-chart-bar-4" />
                </div>
              </div>
              {/* X-axis labels */}
              <div className="ghc-chart-xaxis">
                <span>0–6 hrs</span>
                <span>6–24 hrs</span>
                <span>24–48 hrs</span>
                <span>48+ hrs</span>
              </div>
              {/* Legend */}
              <div className="ghc-chart-legend">
                <div className="ghc-legend-chip ghc-legend-low">
                  <span className="ghc-legend-dot" />
                  Low risk
                </div>
                <div className="ghc-legend-chip ghc-legend-med">
                  <span className="ghc-legend-dot" />
                  Moderate
                </div>
                <div className="ghc-legend-chip ghc-legend-high">
                  <span className="ghc-legend-dot" />
                  High risk
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* ===== ROW 6: TESTIMONIALS (NOT ON GOOGLE - DISABLED) ===== */}
      {SHOW_EXTRA_SECTIONS && <section className="ghc-testimonials" ref={testimonialsRef}>
        <div className="ghc-testimonials-inner">
          <div className="ghc-testimonials-header">
            <p className="ghc-testimonials-label">What our customers say</p>
            <h2 className="ghc-testimonials-title">Trusted by Northern Virginia homeowners</h2>
            <p className="ghc-testimonials-subtitle">
              Over 500 five-star reviews from families we've helped recover from water damage.
            </p>
          </div>

          {/* Carousel viewport */}
          <div className="ghc-testimonials-viewport">
            <div
              className="ghc-testimonials-track"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
            {/* Testimonial 1 */}
            <div className="ghc-testimonial-card">
              <div className="ghc-testimonial-stars">
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
              </div>
              <p className="ghc-testimonial-quote">
                "They arrived within 45 minutes of my call. The team was professional, explained everything clearly,
                and worked directly with my insurance. My basement was completely restored in under a week."
              </p>
              <div className="ghc-testimonial-author">
                <div className="ghc-testimonial-avatar">MJ</div>
                <div className="ghc-testimonial-info">
                  <p className="ghc-testimonial-name">Michael Johnson</p>
                  <p className="ghc-testimonial-location">McLean, VA</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="ghc-testimonial-card">
              <div className="ghc-testimonial-stars">
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
              </div>
              <p className="ghc-testimonial-quote">
                "After a pipe burst flooded our kitchen, Flood Doctor saved us. They handled all the insurance
                paperwork and kept us updated every step of the way. Highly recommend!"
              </p>
              <div className="ghc-testimonial-author">
                <div className="ghc-testimonial-avatar">SC</div>
                <div className="ghc-testimonial-info">
                  <p className="ghc-testimonial-name">Sarah Chen</p>
                  <p className="ghc-testimonial-location">Arlington, VA</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="ghc-testimonial-card">
              <div className="ghc-testimonial-stars">
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
                <Star className="ghc-star filled" />
              </div>
              <p className="ghc-testimonial-quote">
                "Outstanding service from start to finish. The technicians were knowledgeable and respectful
                of our home. They even helped us prevent future water damage with some great tips."
              </p>
              <div className="ghc-testimonial-author">
                <div className="ghc-testimonial-avatar">RP</div>
                <div className="ghc-testimonial-info">
                  <p className="ghc-testimonial-name">Robert Peterson</p>
                  <p className="ghc-testimonial-location">Fairfax, VA</p>
                </div>
              </div>
            </div>
            </div>{/* /track */}
          </div>{/* /viewport */}

          {/* Dots navigation */}
          <div className="ghc-testimonials-dots">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                className={`ghc-testimonial-dot ${activeTestimonial === idx ? 'is-active' : ''}`}
                onClick={() => setActiveTestimonial(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>}

      {/* ===== PASS 7: FAQ ACCORDION (Google-style single question) ===== */}
      <section className="ghc-faq" data-gbp-section="faq">
        <div className="ghc-faq-inner">
          <div className="ghc-faq-header">
            <div className="ghc-faq-header-row">
              <h2 className="ghc-faq-title">Your questions, answered</h2>
              <a href="#" className="ghc-faq-read-more">Read 15 more</a>
            </div>
            <div className="ghc-faq-controls">
              <button className="ghc-faq-toggle-all" aria-label="Toggle all panels">
                <span className="ghc-faq-toggle-text">Expand all</span>
                <svg className="ghc-faq-toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="ghc-faq-list">
            {/* Single FAQ - Google's exact question */}
            <details className="ghc-faq-item">
              <summary className="ghc-faq-question">
                Is a Business Profile on Google free?
              </summary>
              <div className="ghc-faq-answer">
                <p>
                  Yes, creating a Business Profile and listing your business on Google is free. Create your profile at no cost, and you can manage your business from Google Search and Maps to start reaching more customers.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ===== ROW 8: CTA BANNER (NOT ON GOOGLE - DISABLED) ===== */}
      {SHOW_EXTRA_SECTIONS && <section className="ghc-cta-banner">
        <div className="ghc-cta-banner-inner">
          <div className="ghc-cta-banner-text">
            <h2 className="ghc-cta-banner-title">Ready to get started?</h2>
            <p className="ghc-cta-banner-description">
              Our team is standing by 24/7. Get expert help within 60 minutes.
            </p>
            <p className="ghc-cta-banner-phone">
              Call now: <a href="tel:8774970007">(877) 497-0007</a>
            </p>
          </div>
          <div className="ghc-cta-banner-actions">
            <button className="ghc-cta-btn-primary">Get emergency help</button>
            <a href="#" className="ghc-cta-btn-secondary">Schedule assessment</a>
          </div>
        </div>
      </section>}

      {/* ===== PASS 8/16: GOOGLE-STYLE FOOTER (signed-out) ===== */}
      <footer className="ghc-footer" data-gbp-section="footer">
        <div className="ghc-footer-inner">
          {/* PASS 16: Social links section - "Follow us" */}
          <section className="ghc-footer-upper">
            <div className="ghc-footer-social">
              <p className="ghc-footer-social-title">Follow us</p>
              <ul className="ghc-footer-social-list">
                <li>
                  <a href="https://x.com/googleads" target="_blank" rel="noopener noreferrer" aria-label="Follow Google Ads on X" className="ghc-footer-social-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="ghc-footer-social-icon">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/googleads" target="_blank" rel="noopener noreferrer" aria-label="Follow Google Ads on YouTube" className="ghc-footer-social-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="ghc-footer-social-icon">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/GoogleAds/" target="_blank" rel="noopener noreferrer" aria-label="Follow Google Ads on Facebook" className="ghc-footer-social-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="ghc-footer-social-icon">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Footer columns nav */}
          <nav className="ghc-footer-nav" aria-label="Footer links">
            <div className="ghc-footer-columns">
              {/* Column 1: Products */}
              <div className="ghc-footer-column">
                <h3 className="ghc-footer-column-title">
                  <button className="ghc-footer-column-toggle" aria-expanded="false">
                    <span>Products</span>
                    <svg className="ghc-footer-column-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17z" fill="currentColor" />
                    </svg>
                  </button>
                </h3>
                <ul className="ghc-footer-links">
                  <li><a href="#">Google Ads</a></li>
                  <li><a href="#">YouTube Ads</a></li>
                  <li><a href="#">Merchant Center</a></li>
                  <li><a href="#">Business Profile</a></li>
                  <li><a href="#">Google Analytics</a></li>
                  <li><a href="#">Manufacturer Center</a></li>
                </ul>
              </div>

              {/* Column 2: Learning and support */}
              <div className="ghc-footer-column">
                <h3 className="ghc-footer-column-title">
                  <button className="ghc-footer-column-toggle" aria-expanded="false">
                    <span>Learning and support</span>
                    <svg className="ghc-footer-column-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17z" fill="currentColor" />
                    </svg>
                  </button>
                </h3>
                <ul className="ghc-footer-links">
                  <li><a href="#">Accelerate with Google</a></li>
                  <li><a href="#">Think with Google</a></li>
                  <li><a href="#">Google Ads Help Center</a></li>
                  <li><a href="#">Your guide to Merchant Center</a></li>
                  <li><a href="#">Your guide to Google Ads</a></li>
                  <li><a href="#">Google Advertiser Community</a></li>
                </ul>
              </div>

              {/* Column 3: Partners and developers */}
              <div className="ghc-footer-column">
                <h3 className="ghc-footer-column-title">
                  <button className="ghc-footer-column-toggle" aria-expanded="false">
                    <span>Partners and developers</span>
                    <svg className="ghc-footer-column-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17z" fill="currentColor" />
                    </svg>
                  </button>
                </h3>
                <ul className="ghc-footer-links">
                  <li><a href="#">Google Partners</a></li>
                  <li><a href="#">Google Developers site</a></li>
                  <li><a href="#">Google Ads Scripts</a></li>
                  <li><a href="#">Google Ads Remarketing Tags</a></li>
                  <li><a href="#">Google Ads API</a></li>
                </ul>
              </div>

              {/* Column 4: More solutions */}
              <div className="ghc-footer-column">
                <h3 className="ghc-footer-column-title">
                  <button className="ghc-footer-column-toggle" aria-expanded="false">
                    <span>More solutions</span>
                    <svg className="ghc-footer-column-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17z" fill="currentColor" />
                    </svg>
                  </button>
                </h3>
                <ul className="ghc-footer-links">
                  <li><a href="#">Workspace</a></li>
                  <li><a href="#">Chrome</a></li>
                  <li><a href="#">Google Cloud</a></li>
                  <li><a href="#">AdSense</a></li>
                  <li><a href="#">AdMob</a></li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Disclaimer */}
          <div className="ghc-footer-disclaimer">
            <p>Actual results will vary by advertiser.</p>
          </div>

          {/* Global footer section */}
          <section className="ghc-footer-global">
            {/* Google logo */}
            <div className="ghc-footer-logo">
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Google">
                <svg className="ghc-footer-google-logo" viewBox="0 0 74 24" aria-hidden="true">
                  <path fill="#4285F4" d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" />
                  <path fill="#EA4335" d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" />
                  <path fill="#FBBC05" d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54 0 2.02-1.36 3.5-3.1 3.5z" />
                  <path fill="#4285F4" d="M58 .24h2.51v17.57H58z" />
                  <path fill="#34A853" d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" />
                  <path fill="#EA4335" d="M38.17 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" />
                </svg>
              </a>
            </div>

            {/* Primary links */}
            <ul className="ghc-footer-global-links">
              <li><a href="https://www.google.com/intl/en/about" target="_blank" rel="noopener noreferrer">About Google</a></li>
              <li><a href="https://www.google.com/intl/en/about/products" target="_blank" rel="noopener noreferrer">Google products</a></li>
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a></li>
              <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms</a></li>
            </ul>

            {/* Secondary links (Help + Language) */}
            <ul className="ghc-footer-global-links ghc-footer-global-links--extra">
              <li>
                <a href="https://support.google.com/business/" target="_blank" rel="noopener noreferrer" className="ghc-footer-help-link">
                  <svg className="ghc-footer-help-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" fill="currentColor" />
                  </svg>
                  Help
                </a>
              </li>
              <li>
                <select className="ghc-footer-lang-selector" aria-label="Change language or region" defaultValue="us">
                  <option value="us">United States - English</option>
                  <option value="uk">United Kingdom - English</option>
                  <option value="ca-en">Canada - English</option>
                  <option value="au">Australia - English</option>
                </select>
              </li>
            </ul>
          </section>
        </div>
      </footer>

      {/* ===== MOBILE STICKY CTA ===== */}
      <div className="ghc-mobile-sticky-cta">
        <a href="tel:8774970007" className="ghc-btn-cta">
          Start now
        </a>
      </div>
    </div>
  );
};

export default GoogleHomeCloneDev;
