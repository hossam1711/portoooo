"use client";

import React, { useEffect, useRef } from 'react';

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
  const sliderRef = useRef<HTMLDivElement>(null);

  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    const scrollSpeed = direction === 'left' ? speed : -speed;

    const animate = () => {
      slider.scrollLeft += scrollSpeed;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a short delay to ensure page is loaded
    const timeoutId = setTimeout(startAnimation, 1000);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationId);
    };
  }, [speed, direction]);

  if (logos.length === 0) return null;

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
        ref={sliderRef}
        className={`flex items-center overflow-hidden ${pauseOnHover ? 'hover:pause' : ''}`}
        style={{
          width: '100%',
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
    </div>
  );
};

export default LogoLoop;