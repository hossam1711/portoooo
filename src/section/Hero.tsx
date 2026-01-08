"use client";

import { useState, useEffect } from "react";
import '../styles/Hero.css';

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * 0.25);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="hero-section">

        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content animate-fadeInLeft">
            <p className="hero-greeting">
              Hello, we are
              <span className="greeting-cursor">|</span>
            </p>
            
            <h1 className="hero-name">
              <span className="name-prefix">const</span>
              <span className="name-operator">=</span>
              <br />
              <span className="name-value">lonia-stack</span>
              <span className="name-suffix"> ;</span>
            </h1>

            <p className="hero-title">
              / Full Stack Developer & UI/UX Designer
            </p>

            <p className="hero-description">
              Passionate developer creating exceptional digital experiences with modern technologies.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary">
                Get In Touch
                <span>→</span>
              </button>
              
              <button className="btn btn-secondary">
                View Projects
                <span>&lt;/&gt;</span>
              </button>
            </div>
          </div>

          {/* Right Content - Tech Stack Circle */}
          <div className="hero-image-wrapper animate-fadeInRight">
            <div className="hero-image-container">
              {/* Main Circle */}
              <div className="main-circle"></div>
              
              {/* Center Icon */}
              <div className="center-icon">
                &lt;/&gt;
              </div>

              {/* React Badge */}
              <div className="floating-badge badge-1">
                <div className="badge-icon" style={{color: '#67e8f9'}}>
                  ⚛️
                </div>
                <div className="badge-content">
                  <div className="badge-title">React</div>
                  <div className="badge-libs">Redux, Router, Hooks</div>
                </div>
              </div>

               {/* JavaScript Badge */}
              <div className="floating-badge badge-3">
                <div className="badge-icon" style={{color: '#fbbf24'}}>
                  JS
                </div>
                <div className="badge-content">
                  <div className="badge-title">JavaScript</div>
                  <div className="badge-libs">ES6+, TypeScript, jQuery</div>
                </div>
              </div>

              {/* Node.js Badge */}
              <div className="floating-badge badge-2">
                <div className="badge-icon" style={{color: '#86efac'}}>
                  📦
                </div>
                <div className="badge-content">
                  <div className="badge-title">Node.js</div>
                  <div className="badge-libs">Express, Socket.io, MongoDB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}