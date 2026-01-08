"use client";

import React, { useState, useEffect, useRef } from "react";
import { technologies, categories } from "../config/technologiesData";
import SectionHeader from "../components/SectionHeader";
import { sectionDivider } from "../styles/theme";



export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  const filteredTechs =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  // Duplicate للـ seamless loop
  const displayTechs = [...filteredTechs, ...filteredTechs, ...filteredTechs];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.5; // السرعة بالـ pixels

    const animate = () => {
      if (container) {
        scrollPositionRef.current += speed;

        // Reset عند الوصول للنص
        const itemWidth = 144; // w-32 = 128px + gap-4 = 16px
        const resetPoint = filteredTechs.length * itemWidth;

        if (scrollPositionRef.current >= resetPoint) {
          scrollPositionRef.current = 0;
        }

        container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [filteredTechs.length]);

  return (
    <section
      id="technologies"
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 ">
          <SectionHeader 
            title="Our Technology"
            highlightText="Stack"
            description="Cutting-edge tools and frameworks we use"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                scrollPositionRef.current = 0; // Reset position
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-slate-800 scale-105"
                  : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/70 border border-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4"
            ref={containerRef}
            style={{
              width: 'fit-content',
              willChange: 'transform'
            }}
          >
            {displayTechs.map((tech, idx) => (
              <div key={`${tech.name}-${idx}`} className="w-32 flex-shrink-0">
                <div className="bg-slate-700/40 backdrop-blur-md rounded-xl p-4 border border-slate-600/50 hover:bg-slate-600/50 hover:scale-105 transition-all duration-300 h-32">
                  <div className="flex flex-col items-center justify-center h-full space-y-2">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-9 h-9 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-white text-xs font-medium text-center line-clamp-2">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays للـ fade effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-800 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-800 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Section Divider */}
      {sectionDivider}
    </section>
  );
}