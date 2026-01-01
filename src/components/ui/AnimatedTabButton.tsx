import React, { useRef, useEffect, useState } from 'react';

interface AnimatedTabButtonProps {
  isActive: boolean;
  isNextActive: boolean;
  progress: number; // 0-100
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  tabId: string;
  panelId: string;
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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, borderRadius: 0 });

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
      className="relative flex items-center justify-center whitespace-nowrap box-border transition-colors duration-200 heading-section"
      style={{
        height: '52px',
        padding: '14px 24px',
        borderRadius: '1000px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: isActive ? 'transparent' : '#e8eaed',
        backgroundColor: isActive ? '#202124' : '#fff',
        color: isActive ? '#fff' : '#5f6368',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: 1.5,
        fontFamily: 'var(--font-heading)',
        cursor: 'pointer',
      }}
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

export default AnimatedTabButton;
