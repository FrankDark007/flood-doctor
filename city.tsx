/**
 * City Entry Point
 *
 * This is the entry module for independent city subdomain builds.
 * Each city gets its own build with window.__FLOOD_DOCTOR_CITY__ pre-set in city.html.
 *
 * Unlike index.tsx which loads the main App, this loads CityApp which has
 * city-specific routing (/ is homepage, not /city/:cityId).
 */
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CityApp from './CityApp';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Verify city ID is set (should be injected at build time)
if (!window.__FLOOD_DOCTOR_CITY__) {
  console.error('[city.tsx] window.__FLOOD_DOCTOR_CITY__ not set! This build may be misconfigured.');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <CityApp />
  </React.StrictMode>
);
