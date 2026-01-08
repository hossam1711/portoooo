'use client';

import React, { useState, useEffect } from 'react';
import { slidesData } from '../config/projectsData';
import SectionHeader from '../components/SectionHeader';
import { sectionDivider } from '../styles/theme';
import '../styles/Accordion.css';



export default function ProjectsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [autoIndex, setAutoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoIndex(prev => (prev + 1) % slidesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentActive = hoveredIndex !== null ? hoveredIndex : autoIndex;

  return (
    <section id="projects" className="slider-container">
      <div className="mb-16">
        <SectionHeader
          title="Featured"
          highlightText="Projects"
          theme="light"
        />
      </div>

      <div className="accordion-slider">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentActive === index ? 'active' : ''}`}
            style={{ backgroundImage: slide.backgroundImage }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
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

      {/* Section Divider */}
      {sectionDivider}
    </section>
  );
}