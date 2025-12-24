import { NavSection } from '../types';

// Curated links for the Mega Menu
export const RESIDENTIAL_NAV: NavSection = {
  heading: 'Residential Services',
  link: '/services/residential/',
  items: [
    { label: 'Water Damage Restoration', path: '/services/residential/restoration-services/water-damage-restoration/' },
    { label: 'Flood Cleanup', path: '/services/residential/restoration-services/flood-cleanup/' },
    { label: 'Sewage Cleanup', path: '/services/residential/cleanup-services/sewage-cleanup/' },
    { label: 'Mold Remediation', path: '/services/residential/cleanup-services/mold-remediation/' },
    { label: 'Basement Flooding', path: '/services/residential/specialty-services/basement-flooding/' },
    { label: 'Structural Drying', path: '/services/residential/restoration-services/structural-drying/' },
  ]
};

export const COMMERCIAL_NAV: NavSection = {
  heading: 'Commercial Services',
  link: '/services/commercial/',
  items: [
    { label: 'Commercial Water Damage', path: '/services/commercial/restoration-services/commercial-water-damage/' },
    { label: 'Commercial Flood Cleanup', path: '/services/commercial/restoration-services/commercial-flood-cleanup/' },
    { label: 'Large Loss Restoration', path: '/services/commercial/restoration-services/large-loss-restoration/' },
    { label: 'Commercial Sewage Cleanup', path: '/services/commercial/cleanup-services/commercial-sewage-cleanup/' },
    { label: 'Commercial Mold Remediation', path: '/services/commercial/cleanup-services/commercial-mold-remediation/' },
    { label: 'Moisture Mapping', path: '/services/commercial/technical-services/moisture-mapping-consulting/' },
  ]
};

export const MAIN_NAV_ITEMS = [
  { label: 'Services', type: 'dropdown', dropdownId: 'services' },
  { label: 'Locations', type: 'dropdown', dropdownId: 'locations' },
  { label: 'About', path: '/about/', type: 'link' },
  { label: 'Blog', path: '/blog/', type: 'link' },
  { label: 'Dev', type: 'dropdown', dropdownId: 'dev' },
];

// Dev pages for visual inspection
export const DEV_NAV_ITEMS = [
  { label: 'Alt Homepage (Google Ads Clone)', path: '/home-alt/' },
  { label: 'Resources Hub', path: '/resources/' },
  { label: 'Residential Variant A', path: '/services/residential/variant-a/' },
  { label: 'Services Hub', path: '/services/' },
  { label: 'Reviews', path: '/reviews/' },
  { label: 'Contact', path: '/contact/' },
  { label: 'Request Service', path: '/request/' },
  { label: 'FAQ', path: '/resources/faq/' },
  { label: 'Insurance Guide', path: '/resources/insurance-guide/' },
];