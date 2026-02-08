import { useState } from 'react';

const VIEWPORT_PRESETS = [
  { label: '375', width: 375 },
  { label: '768', width: 768 },
  { label: '1024', width: 1024 },
  { label: '1280', width: 1280 },
  { label: '1440', width: 1440 },
  { label: 'Full', width: 0 },
] as const;

export default function GbpCloneDevV3() {
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  const iframeSrc = '/gbp/business.google.com/us/business-profile/index.html';

  const isFullWidth = viewportWidth === 0;

  return (
    <>
      {/* Viewport Tester Toolbar */}
      <div
        style={{
          position: 'fixed',
          top: 12,
          left: 12,
          zIndex: 10000,
          display: 'flex',
          gap: 4,
          padding: 6,
          background: 'rgba(0, 0, 0, 0.85)',
          borderRadius: 6,
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}
      >
        {VIEWPORT_PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => setViewportWidth(preset.width)}
            style={{
              padding: '4px 10px',
              fontSize: 12,
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 500,
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              background:
                (preset.width === 0 && isFullWidth) ||
                (preset.width !== 0 && viewportWidth === preset.width)
                  ? '#1a73e8'
                  : '#3c4043',
              color: '#fff',
              transition: 'background 0.15s',
            }}
          >
            {preset.label}
          </button>
        ))}
        <span
          style={{
            padding: '4px 8px',
            fontSize: 11,
            fontFamily: 'monospace',
            color: '#9aa0a6',
            alignSelf: 'center',
          }}
        >
          {isFullWidth ? '100%' : `${viewportWidth}px`}
        </span>
      </div>

      {/* Iframe Container */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          justifyContent: 'center',
          background: isFullWidth ? '#fff' : '#202124',
        }}
      >
        <iframe
          src={iframeSrc}
          title="Google Business Profile Clone"
          style={{
            width: isFullWidth ? '100%' : viewportWidth,
            height: '100%',
            border: isFullWidth ? 'none' : '1px solid #3c4043',
            background: '#fff',
          }}
        />
      </div>
    </>
  );
}
