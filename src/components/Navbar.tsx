"use client";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectorStyle, setSelectorStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About Our Team", href: "#" },
    { name: "Services", href: "#" },
    { name: "Clients", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "Mobile App", href: "#" },
  ];

  useEffect(() => {
    if (navRef.current && !isMenuOpen) {
      const activeLink = navRef.current.querySelectorAll('.nav-link')[activeIndex] as HTMLElement;
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        setSelectorStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [activeIndex, isMenuOpen]);

  return (
    <nav className="w-full px-4 py-3">
      <div className="flex items-center justify-between bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full shadow-lg px-6 py-3 relative">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 z-10">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <img src="/q.svg" alt="Logo" className="w-8 h-8" />
          </div>
        </a>

        {/* Desktop Menu */}
        <div 
          ref={navRef}
          className="hidden md:flex items-center gap-0 mx-auto relative"
        >
          {/* Animated Selector */}
          <div
            className="absolute h-full bg-white rounded-full transition-all duration-500 ease-in-out"
            style={{
              ...selectorStyle,
              top: 0,
              zIndex: 0,
            }}
          >
            {/* Left curve */}
            <div className="absolute -left-6 bottom-0 w-6 h-6 overflow-hidden">
              <div className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-slate-700"></div>
            </div>
            {/* Right curve */}
            <div className="absolute -right-6 bottom-0 w-6 h-6 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-12 h-12 rounded-full bg-slate-700"></div>
            </div>
          </div>

          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveIndex(index)}
              className={`nav-link relative px-5 py-3 text-sm font-medium transition-all duration-500 z-10 whitespace-nowrap ${
                activeIndex === index
                  ? 'text-slate-700'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0 z-10">
          <button className="bg-white text-slate-700 hover:bg-slate-100 px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors duration-300 z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden mt-4 bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl flex-col gap-2 py-6 px-4 shadow-2xl transition-all duration-300`}
      >
        {menuItems.map((item, index) => (
          <a
            key={item.name}
            className={`px-6 py-3 rounded-2xl text-base font-medium transition-all duration-300 text-center ${
              activeIndex === index
                ? 'bg-white text-slate-700'
                : 'text-white hover:bg-white/10'
            }`}
            href={item.href}
            onClick={() => {
              setActiveIndex(index);
              setIsMenuOpen(false);
            }}
          >
            {item.name}
          </a>
        ))}
        <button className="mt-2 bg-white text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-2xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          Contact
        </button>
      </div>
    </nav>
  );
}