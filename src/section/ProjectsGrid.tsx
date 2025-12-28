'use client';

import React, { useState } from 'react';
import '../styles/Accordion.css';

const slidesData = [
  {
    backgroundImage: "url('https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
    number: '01',
    brand: 'BMW M3',
    name: 'BMW M3 Competition',
    subtitle: 'Twin-Turbo Inline-6 Performance',
    specs: [
      { label: 'Engine:', value: '3.0L Twin-Turbo Inline-6' },
      { label: 'Power:', value: '503 HP @ 6,250 RPM' },
      { label: 'Torque:', value: '650 Nm @ 2,750 RPM' },
      { label: 'Transmission:', value: '8-Speed Automatic' },
    ],
    badges: [
      '0-100: 3.9s',
      'Top Speed: 290 km/h',
      'Price: $73,400',
    ],
  },
  {
    backgroundImage: "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')",
    number: '02',
    brand: 'Lamborghini Huracán',
    name: 'Lamborghini Huracán',
    subtitle: 'Naturally Aspirated V10 Excellence',
    specs: [
      { label: 'Engine:', value: '5.2L V10 Naturally Aspirated' },
      { label: 'Power:', value: '610 HP @ 8,250 RPM' },
      { label: 'Torque:', value: '560 Nm @ 6,500 RPM' },
      { label: 'Transmission:', value: '7-Speed Dual-Clutch' },
    ],
    badges: [
      '0-100: 3.2s',
      'Top Speed: 325 km/h',
      'Price: $248,295',
    ],
  },
  {
    backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
    number: '03',
    brand: 'Ferrari SF90',
    name: 'Ferrari SF90 Stradale',
    subtitle: 'Plug-in Hybrid Revolution',
    specs: [
      { label: 'Engine:', value: '4.0L V8 Twin-Turbo + Electric' },
      { label: 'Power:', value: '1000 HP Combined' },
      { label: 'Torque:', value: '800 Nm @ 6,000 RPM' },
      { label: 'Transmission:', value: '8-Speed F1 DCT' },
    ],
    badges: [
      '0-100: 2.5s',
      'Top Speed: 340 km/h',
      'Price: $625,000',
    ],
  },
  {
    backgroundImage: "url('https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
    number: '04',
    brand: 'Porsche 911',
    name: 'Porsche 911 Turbo S',
    subtitle: 'Twin-Turbo Flat-Six Perfection',
    specs: [
      { label: 'Engine:', value: '3.8L Twin-Turbo Flat-6' },
      { label: 'Power:', value: '640 HP @ 6,750 RPM' },
      { label: 'Torque:', value: '800 Nm @ 2,500 RPM' },
      { label: 'Transmission:', value: '8-Speed PDK' },
    ],
    badges: [
      '0-100: 2.7s',
      'Top Speed: 330 km/h',
      'Price: $207,000',
    ],
  },
];

export default function ProjectsGrid() {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  return (
    <div className="slider-container">
      <div className="now-showing">Now in Showroom</div>

      <div className="accordion-slider">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${activeSlide === index ? 'active' : ''}`}
            style={{ backgroundImage: slide.backgroundImage }}
            onMouseEnter={() => setActiveSlide(index)}
            onMouseLeave={() => setActiveSlide(null)}
          >
            <div className="slide-content">
              <div className="slide-number">{slide.number}</div>
              <div className="car-brand">{slide.brand}</div>
              <div className="car-name">{slide.name}</div>
              <div className="car-subtitle">{slide.subtitle}</div>
              <div className="car-specs">
                {slide.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="spec-row">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
              <div className="performance-badges">
                {slide.badges.map((badge, badgeIndex) => (
                  <div key={badgeIndex} className="badge">
                    <div className="badge-icon"></div>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="add-button"></div>
          </div>
        ))}
      </div>

      <button className="navigation-arrows nav-prev">‹</button>
      <button className="navigation-arrows nav-next">›</button>
    </div>
  );
}