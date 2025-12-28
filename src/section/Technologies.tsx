"use client";

import React, { useState, useEffect, useRef } from "react";

const technologies = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
  { name: "Sass / SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Frontend" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend" },
  { name: "Redux / Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", category: "State Management" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "Styling" },
  { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Animation" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
  { name: "Git / GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Styling",
  "State Management",
  "Animation",
  "Tools",
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const filteredTechs =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const speed = 1.5; // Increased speed for better visibility
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (!isPaused) {
        const deltaTime = currentTime - lastTime;
        const distance = (speed * deltaTime) / 16; // normalize to ~60fps
        
        slider.scrollLeft += distance;
        
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      
      lastTime = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [filteredTechs, isPaused]);

  return (
    <section
      id="technologies"
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Cutting-edge tools and frameworks we use
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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

        {/* AUTO SLIDER with pause on hover */}
        <div
          ref={sliderRef}
          className="overflow-x-hidden scroll-smooth"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-4 w-max pb-4" style={{ width: 'fit-content' }}>
            {/* Duplicate for seamless loop */}
            {[...filteredTechs, ...filteredTechs].map((tech, idx) => (
              <div key={idx} className="w-32 flex-shrink-0">
                <div className="bg-slate-700/40 backdrop-blur-md rounded-xl p-4 border border-slate-600/50 hover:bg-slate-600/50 transition-colors duration-300 h-32">
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
        </div>

        {/* Pause indicator */}
        {isPaused && (
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">Paused - Move mouse away to resume</span>
          </div>
        )}
      </div>
    </section>
  );
}