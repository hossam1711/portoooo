"use client";

import React, { useState, useRef, useEffect } from "react";

type Service = {
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
};

/* ================= SIDEBAR ================= */
type ServiceSidebarProps = {
  services: Service[];
  currentIndex: number;
  onServiceClick: (idx: number) => void;
};

const ServiceSidebar: React.FC<ServiceSidebarProps> = ({
  services,
  currentIndex,
  onServiceClick,
}) => {
  return (
    <div className="w-96 flex-shrink-0 sticky top-24">
      <ul className="space-y-3">
        {services.map((service, idx) => (
          <li
            key={idx}
            onClick={() => onServiceClick(idx)}
            className={`flex items-start gap-4 cursor-pointer transition-all duration-300 p-4 rounded-lg border-2 ${
              idx === currentIndex
                ? "bg-blue-50 border-blue- shadow-md"
                : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            <span
              className={`text-3xl transition-all duration-300 ${
                idx === currentIndex ? "scale-110" : ""
              }`}
            >
              {service.icon}
            </span>

            <h4
              className={`font-semibold transition-all ${
                idx === currentIndex ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {service.title}
            </h4>

            <span
              className={`ml-auto mt-2 w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ================= CARD ================= */
type ServiceCardProps = {
  services: Service[];
  currentIndex: number;
  setCurrentIndex: (idx: number) => void;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  services,
  currentIndex,
  setCurrentIndex,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAutoScroll = useRef(false);

  const SECTION_HEIGHT = 600;

  /* ===== on scroll ===== */
  const handleScroll = () => {
    if (!scrollRef.current || isAutoScroll.current) return;

    const index = Math.round(
      scrollRef.current.scrollTop / SECTION_HEIGHT
    );

    if (index !== currentIndex && index < services.length) {
      setCurrentIndex(index);
    }
  };

  /* ===== attach scroll ===== */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  /* ===== sync when sidebar click ===== */
  useEffect(() => {
    if (!scrollRef.current) return;

    isAutoScroll.current = true;

    scrollRef.current.scrollTo({
      top: currentIndex * SECTION_HEIGHT,
      behavior: "smooth",
    });

    const t = setTimeout(() => {
      isAutoScroll.current = false;
    }, 500);

    return () => clearTimeout(t);
  }, [currentIndex]);

  return (
    <div
      ref={scrollRef}
      className="relative h-[600px] overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
    >
      {/* Fake scroll height */}
      <div style={{ height: services.length * SECTION_HEIGHT }}>
        <div className="sticky top-0 h-[600px]">
          {/* 🔥 نفس الكارد بتاعك حرفيًا */}
          <div className="relative flex bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-2xl overflow-hidden shadow-2xl h-full border border-gray-700">

            {/* LEFT */}
            <div className="relative w-[45%] p-12 flex flex-col justify-center bg-gradient-to-br from-blue-600/10 to-purple-600/10">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-4xl text-slate-700">
                  {services[currentIndex].icon}
                </div>

                <h1 className="text-4xl font-bold text-white">
                  {services[currentIndex].title}
                </h1>

                <p className="text-gray-300 text-lg max-w-md">
                  {services[currentIndex].description}
                </p>

                <div className="flex gap-2 pt-4">
                  {services.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 rounded-full transition-all ${
                        i === currentIndex
                          ? "w-8 bg-blue-500"
                          : "w-1 bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-[55%] relative overflow-hidden">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                    i === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                  style={{ backgroundImage: `url(${s.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= SECTION ================= */
const ServicesSection = ({ services }: { services: Service[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto my-12 flex gap-8">
      <ServiceSidebar
        services={services}
        currentIndex={currentIndex}
        onServiceClick={setCurrentIndex}
      />

      <div className="flex-1">
        <ServiceCard
          services={services}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default ServicesSection;
