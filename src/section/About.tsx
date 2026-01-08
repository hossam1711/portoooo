"use client";
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import StatsCards from "../components/StatsCards";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import TeamCircle from "../components/TeamCircle";
import CompanyOverview from "@/components/CompanyOverview";

import {
  backgroundEffects,
  sectionDivider,
  animationStyles,
} from "../styles/theme";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-16 bg-white overflow-hidden"
    >
      {/* Background Effects */}
      {backgroundEffects}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div>
          <SectionHeader
            title="About Us"
            highlightText=""
            description="Lonia-Stack focuses on turning challenges into success by transforming ideas into tangible change."
            theme="light"
          />
        </div>
        <div> <CompanyOverview /></div>

        {/* Team Circle */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-[#20B2AA] to-[#4682B4] rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-black">
              Our Team
            </h2>
            <div className="h-1 w-16 bg-gradient-to-l from-[#20B2AA] to-[#4682B4] rounded-full"></div>
          </div>
          <TeamCircle />
        </div>

        {/* Stats Cards */}
        <div className="animate-fadeInUp animation-delay-300">
          <StatsCards />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-6 gap-8 animate-fadeInUp animation-delay-600">
          {/* Column - Education and Experience */}
          <div className="lg:col-span-6 space-y-6">
            <EducationCard />
            <ExperienceCard />
          </div>
        </div>
      </div>

      {/* Section Divider */}
      {sectionDivider}

      {/* Animation Styles */}
      <style jsx>{animationStyles}</style>
    </section>
  );
};

export default About;