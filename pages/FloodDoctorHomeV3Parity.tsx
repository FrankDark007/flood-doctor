/**
 * FloodDoctorHomeV3 Parity Harness
 * Side-by-side comparison tool for visual parity testing
 *
 * Features:
 * - Side-by-side and overlay modes
 * - Opacity slider (1-9 = 10-90%, 0 = 100%)
 * - Hold O to temporarily show reference at 100%
 * - Blend mode toggle: Normal vs Difference
 * - Viewport presets: 375, 768, 1024, 1280, 1440, Full
 * - Scroll sync between panes
 * - Persistent state in localStorage
 * - Snapshot detection with blocking warning
 */

import { useState, useEffect, useRef, useCallback } from 'react';

// ============================================
// TYPES
// ============================================

type ViewMode = 'side-by-side' | 'overlay';
type BlendMode = 'normal' | 'difference';

interface ParityState {
  viewMode: ViewMode;
  blendMode: BlendMode;
  opacity: number;
  viewportWidth: number;
}

// ============================================
// CONSTANTS
// ============================================

const VIEWPORT_PRESETS = [
  { label: '375', width: 375 },
  { label: '768', width: 768 },
  { label: '1024', width: 1024 },
  { label: '1280', width: 1280 },
  { label: '1440', width: 1440 },
  { label: 'Full', width: 0 },
] as const;

const STORAGE_KEY = 'fd-home-v3-parity-state';

const SNAPSHOT_URL = '/gbp/business.google.com/us/business-profile/index.html';
const REBUILD_URL = '/dev/fd-home-v3?__content=ref&__freeze=1';

const DEFAULT_STATE: ParityState = {
  viewMode: 'side-by-side',
  blendMode: 'normal',
  opacity: 50,
  viewportWidth: 1280,
};

// ============================================
// HOOKS
// ============================================

function usePersistedState(): [ParityState, (updates: Partial<ParityState>) => void] {
  const [state, setState] = useState<ParityState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_STATE, ...JSON.parse(saved) };
      }
    } catch {
      // Ignore parse errors
    }
    return DEFAULT_STATE;
  });

  const updateState = useCallback((updates: Partial<ParityState>) => {
    setState((prev) => {
      const next = { ...prev, ...updates };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  }, []);

  return [state, updateState];
}

// ============================================
// STYLES (inline for self-contained dev tool)
// ============================================

const styles = {
  container: {
    position: 'fixed' as const,
    inset: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    background: '#202124',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: '#e8eaed',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '8px 16px',
    background: '#292a2d',
    borderBottom: '1px solid #3c4043',
    flexWrap: 'wrap' as const,
    zIndex: 100,
  },
  toolbarGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  toolbarLabel: {
    fontSize: '12px',
    color: '#9aa0a6',
    fontWeight: 500,
  },
  button: {
    padding: '6px 12px',
    fontSize: '12px',
    fontWeight: 500,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.15s',
  },
  buttonActive: {
    background: '#1a73e8',
    color: '#fff',
  },
  buttonInactive: {
    background: '#3c4043',
    color: '#e8eaed',
  },
  slider: {
    width: '120px',
    accentColor: '#1a73e8',
  },
  sliderValue: {
    fontSize: '11px',
    color: '#9aa0a6',
    minWidth: '36px',
    textAlign: 'right' as const,
  },
  content: {
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
    position: 'relative' as const,
  },
  paneWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    background: '#202124',
    overflow: 'hidden',
  },
  pane: {
    background: '#fff',
    overflow: 'auto',
  },
  paneLabel: {
    position: 'absolute' as const,
    top: '8px',
    padding: '4px 8px',
    fontSize: '11px',
    fontWeight: 600,
    background: 'rgba(0,0,0,0.7)',
    color: '#fff',
    borderRadius: '4px',
    zIndex: 10,
    pointerEvents: 'none' as const,
  },
  iframe: {
    border: 'none',
    width: '100%',
    height: '100%',
  },
  warning: {
    position: 'fixed' as const,
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0,0,0,0.9)',
    zIndex: 1000,
  },
  warningBox: {
    background: '#292a2d',
    padding: '32px',
    borderRadius: '8px',
    maxWidth: '500px',
    textAlign: 'center' as const,
    border: '2px solid #f9ab00',
  },
  warningIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  warningTitle: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '12px',
    color: '#f9ab00',
  },
  warningText: {
    fontSize: '14px',
    color: '#9aa0a6',
    lineHeight: 1.5,
  },
  warningCode: {
    display: 'block',
    marginTop: '16px',
    padding: '12px',
    background: '#202124',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '13px',
    color: '#8ab4f8',
  },
  kbd: {
    display: 'inline-block',
    padding: '2px 6px',
    background: '#3c4043',
    borderRadius: '3px',
    fontSize: '11px',
    fontFamily: 'monospace',
  },
  shortcuts: {
    fontSize: '11px',
    color: '#9aa0a6',
    display: 'flex',
    gap: '12px',
    marginLeft: 'auto',
  },
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function FloodDoctorHomeV3Parity() {
  const [state, updateState] = usePersistedState();
  const [snapshotError, setSnapshotError] = useState(false);
  const [holdingO, setHoldingO] = useState(false);

  const leftIframeRef = useRef<HTMLIFrameElement>(null);
  const rightIframeRef = useRef<HTMLIFrameElement>(null);
  const syncingRef = useRef(false);

  const { viewMode, blendMode, opacity, viewportWidth } = state;
  const isFullWidth = viewportWidth === 0;

  // Effective opacity (100% when holding O)
  const effectiveOpacity = holdingO ? 100 : opacity;

  // ========================================
  // SNAPSHOT DETECTION
  // ========================================

  useEffect(() => {
    const checkSnapshot = async () => {
      try {
        const response = await fetch(SNAPSHOT_URL, { method: 'HEAD' });
        if (!response.ok) {
          setSnapshotError(true);
          return;
        }
        // Also check if it returns actual HTML (not SPA shell)
        const textResponse = await fetch(SNAPSHOT_URL);
        const text = await textResponse.text();
        if (!text.includes('Google Business Profile') && !text.includes('glue-header')) {
          setSnapshotError(true);
        }
      } catch {
        setSnapshotError(true);
      }
    };

    checkSnapshot();
  }, []);

  // ========================================
  // KEYBOARD SHORTCUTS
  // ========================================

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // 1-9 = 10-90% opacity
      if (e.key >= '1' && e.key <= '9') {
        updateState({ opacity: parseInt(e.key) * 10 });
        return;
      }

      // 0 = 100% opacity
      if (e.key === '0') {
        updateState({ opacity: 100 });
        return;
      }

      // O = hold for 100% reference
      if (e.key.toLowerCase() === 'o') {
        setHoldingO(true);
        return;
      }

      // S = toggle side-by-side
      if (e.key.toLowerCase() === 's') {
        updateState({ viewMode: 'side-by-side' });
        return;
      }

      // V = toggle overlay
      if (e.key.toLowerCase() === 'v') {
        updateState({ viewMode: 'overlay' });
        return;
      }

      // D = toggle difference blend
      if (e.key.toLowerCase() === 'd') {
        updateState({ blendMode: blendMode === 'normal' ? 'difference' : 'normal' });
        return;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'o') {
        setHoldingO(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [blendMode, updateState]);

  // ========================================
  // SCROLL SYNC
  // ========================================

  const syncScroll = useCallback((source: 'left' | 'right') => {
    if (syncingRef.current) return;

    const sourceFrame = source === 'left' ? leftIframeRef.current : rightIframeRef.current;
    const targetFrame = source === 'left' ? rightIframeRef.current : leftIframeRef.current;

    if (!sourceFrame?.contentWindow || !targetFrame?.contentWindow) return;

    try {
      const sourceDoc = sourceFrame.contentDocument;
      const targetDoc = targetFrame.contentDocument;

      if (!sourceDoc || !targetDoc) return;

      syncingRef.current = true;

      targetDoc.documentElement.scrollTop = sourceDoc.documentElement.scrollTop;
      targetDoc.documentElement.scrollLeft = sourceDoc.documentElement.scrollLeft;

      // Throttle to prevent feedback loop
      setTimeout(() => {
        syncingRef.current = false;
      }, 50);
    } catch {
      // Cross-origin restriction - can't sync
    }
  }, []);

  // Attach scroll listeners to iframes
  useEffect(() => {
    const attachScrollListener = (
      iframe: HTMLIFrameElement | null,
      source: 'left' | 'right'
    ) => {
      if (!iframe) return () => {};

      const handler = () => syncScroll(source);

      // Wait for iframe to load
      const onLoad = () => {
        try {
          iframe.contentDocument?.addEventListener('scroll', handler, { passive: true });
        } catch {
          // Cross-origin
        }
      };

      iframe.addEventListener('load', onLoad);

      return () => {
        iframe.removeEventListener('load', onLoad);
        try {
          iframe.contentDocument?.removeEventListener('scroll', handler);
        } catch {
          // Cross-origin
        }
      };
    };

    const cleanupLeft = attachScrollListener(leftIframeRef.current, 'left');
    const cleanupRight = attachScrollListener(rightIframeRef.current, 'right');

    return () => {
      cleanupLeft();
      cleanupRight();
    };
  }, [syncScroll]);

  // ========================================
  // RENDER
  // ========================================

  // Snapshot error blocking UI
  if (snapshotError) {
    return (
      <div style={styles.warning}>
        <div style={styles.warningBox}>
          <div style={styles.warningIcon}>⚠️</div>
          <div style={styles.warningTitle}>Snapshot not available</div>
          <div style={styles.warningText}>
            The Vite dev middleware may not be running, or the snapshot files are missing.
            <br /><br />
            Ensure you started the dev server with:
            <code style={styles.warningCode}>npm run dev</code>
            And that the snapshot exists at:
            <code style={styles.warningCode}>
              tools/snapshots/gbp/business.google.com/us/business-profile/index.html
            </code>
          </div>
        </div>
      </div>
    );
  }

  const paneWidth = isFullWidth ? '100%' : `${viewportWidth}px`;

  return (
    <div style={styles.container}>
      {/* Toolbar */}
      <div style={styles.toolbar}>
        {/* View Mode */}
        <div style={styles.toolbarGroup}>
          <span style={styles.toolbarLabel}>View:</span>
          <button
            style={{
              ...styles.button,
              ...(viewMode === 'side-by-side' ? styles.buttonActive : styles.buttonInactive),
            }}
            onClick={() => updateState({ viewMode: 'side-by-side' })}
          >
            Side-by-side
          </button>
          <button
            style={{
              ...styles.button,
              ...(viewMode === 'overlay' ? styles.buttonActive : styles.buttonInactive),
            }}
            onClick={() => updateState({ viewMode: 'overlay' })}
          >
            Overlay
          </button>
        </div>

        {/* Blend Mode (overlay only) */}
        {viewMode === 'overlay' && (
          <div style={styles.toolbarGroup}>
            <span style={styles.toolbarLabel}>Blend:</span>
            <button
              style={{
                ...styles.button,
                ...(blendMode === 'normal' ? styles.buttonActive : styles.buttonInactive),
              }}
              onClick={() => updateState({ blendMode: 'normal' })}
            >
              Normal
            </button>
            <button
              style={{
                ...styles.button,
                ...(blendMode === 'difference' ? styles.buttonActive : styles.buttonInactive),
              }}
              onClick={() => updateState({ blendMode: 'difference' })}
            >
              Difference
            </button>
          </div>
        )}

        {/* Opacity (overlay only) */}
        {viewMode === 'overlay' && (
          <div style={styles.toolbarGroup}>
            <span style={styles.toolbarLabel}>Opacity:</span>
            <input
              type="range"
              min="0"
              max="100"
              value={effectiveOpacity}
              onChange={(e) => updateState({ opacity: parseInt(e.target.value) })}
              style={styles.slider}
            />
            <span style={styles.sliderValue}>{effectiveOpacity}%</span>
          </div>
        )}

        {/* Viewport Presets */}
        <div style={styles.toolbarGroup}>
          <span style={styles.toolbarLabel}>Width:</span>
          {VIEWPORT_PRESETS.map((preset) => (
            <button
              key={preset.label}
              style={{
                ...styles.button,
                ...(viewportWidth === preset.width ? styles.buttonActive : styles.buttonInactive),
              }}
              onClick={() => updateState({ viewportWidth: preset.width })}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Keyboard Shortcuts */}
        <div style={styles.shortcuts}>
          <span><span style={styles.kbd}>1-9</span> opacity</span>
          <span><span style={styles.kbd}>O</span> hold=100%</span>
          <span><span style={styles.kbd}>S</span> side</span>
          <span><span style={styles.kbd}>V</span> overlay</span>
          <span><span style={styles.kbd}>D</span> diff</span>
        </div>
      </div>

      {/* Content Area */}
      <div style={styles.content}>
        {viewMode === 'side-by-side' ? (
          <>
            {/* Left Pane - Reference (Snapshot) */}
            <div style={styles.paneWrapper}>
              <div style={{ ...styles.pane, width: paneWidth, position: 'relative' }}>
                <span style={{ ...styles.paneLabel, left: '8px' }}>Reference (Snapshot)</span>
                <iframe
                  ref={leftIframeRef}
                  src={SNAPSHOT_URL}
                  style={styles.iframe}
                  title="Reference - Google Business Profile snapshot"
                />
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: '2px', background: '#3c4043' }} />

            {/* Right Pane - Rebuild */}
            <div style={styles.paneWrapper}>
              <div style={{ ...styles.pane, width: paneWidth, position: 'relative' }}>
                <span style={{ ...styles.paneLabel, right: '8px' }}>Rebuild (fd-home-v3)</span>
                <iframe
                  ref={rightIframeRef}
                  src={REBUILD_URL}
                  style={styles.iframe}
                  title="Rebuild - FloodDoctorHomeV3"
                />
              </div>
            </div>
          </>
        ) : (
          /* Overlay Mode */
          <div style={{ ...styles.paneWrapper, position: 'relative' }}>
            <div style={{ width: paneWidth, height: '100%', position: 'relative' }}>
              {/* Bottom Layer - Reference */}
              <iframe
                ref={leftIframeRef}
                src={SNAPSHOT_URL}
                style={{
                  ...styles.iframe,
                  position: 'absolute',
                  inset: 0,
                }}
                title="Reference - Google Business Profile snapshot"
              />

              {/* Top Layer - Rebuild with opacity */}
              <iframe
                ref={rightIframeRef}
                src={REBUILD_URL}
                style={{
                  ...styles.iframe,
                  position: 'absolute',
                  inset: 0,
                  opacity: effectiveOpacity / 100,
                  mixBlendMode: blendMode,
                }}
                title="Rebuild - FloodDoctorHomeV3"
              />

              {/* Labels */}
              <span style={{ ...styles.paneLabel, left: '8px', top: '8px' }}>
                Reference (bottom)
              </span>
              <span style={{ ...styles.paneLabel, right: '8px', top: '8px' }}>
                Rebuild @ {effectiveOpacity}%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
