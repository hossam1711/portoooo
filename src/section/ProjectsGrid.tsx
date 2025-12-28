'use client';

import React, { useState } from 'react';
import '../styles/Accordion.css';

const slidesData = [
  {
    backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
    number: '01',
    brand: 'E-Commerce',
    name: 'Online Shopping Platform',
    subtitle: 'Full-Stack E-Commerce Solution',
    specs: [
      { label: 'Frontend:', value: 'React, Next.js' },
      { label: 'Backend:', value: 'Node.js, Express' },
      { label: 'Database:', value: 'MongoDB' },
      { label: 'Payment:', value: 'Stripe Integration' },
    ],
    badges: [
      'Responsive Design',
      'Secure Payments',
      'Real-time Inventory',
    ],
  },
  {
    backgroundImage: "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')",
    number: '02',
    brand: 'E-Learning',
    name: 'Interactive Learning Platform',
    subtitle: 'Modern Education Technology',
    specs: [
      { label: 'Frontend:', value: 'Vue.js, Nuxt.js' },
      { label: 'Backend:', value: 'Python, Django' },
      { label: 'Database:', value: 'PostgreSQL' },
      { label: 'Features:', value: 'Video Streaming, Quizzes' },
    ],
    badges: [
      'Interactive Courses',
      'Progress Tracking',
      'Mobile Compatible',
    ],
  },
  {
    backgroundImage: "url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
    number: '03',
    brand: 'Mobile App',
    name: 'Cross-Platform Mobile App',
    subtitle: 'React Native Development',
    specs: [
      { label: 'Framework:', value: 'React Native' },
      { label: 'Backend:', value: 'Firebase' },
      { label: 'Database:', value: 'Firestore' },
      { label: 'Features:', value: 'Push Notifications, Offline Mode' },
    ],
    badges: [
      'iOS & Android',
      'Real-time Sync',
      'Offline Support',
    ],
  },
  {
    backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
    number: '04',
    brand: 'Web Application',
    name: 'Business Management System',
    subtitle: 'Enterprise Web Solution',
    specs: [
      { label: 'Frontend:', value: 'Angular' },
      { label: 'Backend:', value: 'Java, Spring Boot' },
      { label: 'Database:', value: 'MySQL' },
      { label: 'Security:', value: 'JWT Authentication' },
    ],
    badges: [
      'Role-based Access',
      'Data Analytics',
      'API Integration',
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