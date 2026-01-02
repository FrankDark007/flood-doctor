/**
 * Google-style Typography System
 *
 * Based on Google Workspace/Business design patterns.
 * All text sizes include responsive breakpoints for consistent scaling.
 *
 * Breakpoints:
 * - Mobile (default): 0-639px
 * - sm: 640px+
 * - md: 768px+
 * - lg: 1024px+
 * - xl: 1280px+
 */

export const typography = {
  // Headlines - Google uses light weight (font-normal) for headers
  h1: {
    // Hero/Page titles - largest headlines
    className: 'text-[32px] sm:text-[40px] lg:text-[56px] font-normal leading-[1.1] tracking-[-0.5px]',
    // With default Google dark text color
    dark: 'text-[32px] sm:text-[40px] lg:text-[56px] font-normal text-[#202124] leading-[1.1] tracking-[-0.5px]',
    // For dark backgrounds
    light: 'text-[32px] sm:text-[40px] lg:text-[56px] font-normal text-white leading-[1.1] tracking-[-0.5px]',
  },

  h2: {
    // Section titles
    className: 'text-[28px] sm:text-[36px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.25px]',
    dark: 'text-[28px] sm:text-[36px] lg:text-[44px] font-normal text-[#202124] leading-[1.2] tracking-[-0.25px]',
    light: 'text-[28px] sm:text-[36px] lg:text-[44px] font-normal text-white leading-[1.2] tracking-[-0.25px]',
  },

  h3: {
    // Card titles, subsection headers
    className: 'text-[20px] sm:text-[24px] lg:text-[28px] font-medium leading-[1.3]',
    dark: 'text-[20px] sm:text-[24px] lg:text-[28px] font-medium text-[#202124] leading-[1.3]',
    light: 'text-[20px] sm:text-[24px] lg:text-[28px] font-medium text-white leading-[1.3]',
  },

  h4: {
    // Small headers, list item titles
    className: 'text-[18px] sm:text-[20px] font-medium leading-[1.4]',
    dark: 'text-[18px] sm:text-[20px] font-medium text-[#202124] leading-[1.4]',
    light: 'text-[18px] sm:text-[20px] font-medium text-white leading-[1.4]',
  },

  // Body text
  body: {
    // Standard paragraph text
    large: 'text-[18px] lg:text-[20px] leading-[1.6]',
    default: 'text-[16px] leading-[1.6]',
    small: 'text-[14px] leading-[1.5]',
    // With colors
    largeDark: 'text-[18px] lg:text-[20px] text-[#5f6368] leading-[1.6]',
    defaultDark: 'text-[16px] text-[#5f6368] leading-[1.6]',
    smallDark: 'text-[14px] text-[#5f6368] leading-[1.5]',
  },

  // Labels and captions
  label: {
    default: 'text-[12px] font-medium uppercase tracking-wide',
    large: 'text-[14px] font-medium',
  },

  // Links
  link: {
    default: 'text-[#1a73e8] hover:underline',
    dark: 'text-[#202124] hover:text-[#1a73e8]',
  },
} as const;

// Tailwind @apply-ready classes for index.css
export const typographyCSS = `
/* Google Typography System - Add to index.css with @apply */

.text-display-1 {
  @apply text-[32px] sm:text-[40px] lg:text-[56px] font-normal leading-[1.1] tracking-[-0.5px];
}

.text-display-2 {
  @apply text-[28px] sm:text-[36px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.25px];
}

.text-title-1 {
  @apply text-[20px] sm:text-[24px] lg:text-[28px] font-medium leading-[1.3];
}

.text-title-2 {
  @apply text-[18px] sm:text-[20px] font-medium leading-[1.4];
}

.text-body-lg {
  @apply text-[18px] lg:text-[20px] leading-[1.6];
}

.text-body {
  @apply text-[16px] leading-[1.6];
}

.text-body-sm {
  @apply text-[14px] leading-[1.5];
}

.text-label {
  @apply text-[12px] font-medium uppercase tracking-wide;
}
`;

// Google color palette for reference
export const colors = {
  text: {
    primary: '#202124',    // Main text
    secondary: '#5f6368',  // Muted text
    disabled: '#9aa0a6',   // Disabled text
  },
  accent: {
    blue: '#1a73e8',       // Primary accent
    blueHover: '#1557b0',  // Hover state
    green: '#137333',      // Success
    red: '#d93025',        // Error/danger
  },
  background: {
    primary: '#ffffff',    // Main background
    secondary: '#f8f9fa',  // Section backgrounds
    tertiary: '#e8f0fe',   // Light blue tint
  },
  border: {
    default: '#dadce0',    // Standard borders
    light: '#e8eaed',      // Subtle borders
  },
} as const;

export default typography;
