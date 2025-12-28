"use client";

import React from 'react';

export interface LogoItem {
  src: string;
  alt: string;
  title: string;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed: number; // pixels per second
  direction: 'left' | 'right';
  logoHeight: number;
  gap: number;
  pauseOnHover: boolean;
  fadeOut: boolean;
  ariaLabel: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed,
  direction,
  logoHeight,
  gap,
  pauseOnHover,
  fadeOut,
  ariaLabel,
}) => {
  if (logos.length === 0) return null;

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  // Calculate animation duration based on speed and total width
  const totalWidth = duplicatedLogos.length * (logoHeight + gap); // Approximate, assuming square logos
  const duration = totalWidth / speed;

  const animationName = direction === 'left' ? 'scrollLeft' : 'scrollRight';

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        maskImage: fadeOut
          ? 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
          : undefined,
        WebkitMaskImage: fadeOut
          ? 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
          : undefined,
      }}
      aria-label={ariaLabel}
    >
      <div
        className={`flex items-center ${pauseOnHover ? 'hover:pause' : ''}`}
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
          width: `${totalWidth * 2}px`, // Ensure enough width
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            title={logo.title}
            className="flex-shrink-0"
            style={{
              height: `${logoHeight}px`,
              width: `${logoHeight}px`,
              marginRight: `${gap}px`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoLoop;