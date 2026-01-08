"use client";
import React from "react";
import { MdWorkOutline } from "react-icons/md";
import { experience } from "../config/aboutData";

const ExperienceCard = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="h-1 w-8 bg-gradient-to-r from-[#20B2AA] to-[#4682B4] rounded-full"></div>
        <h2 className="text-2xl font-extrabold text-black">Experience</h2>
        <div className="h-1 flex-1 bg-gradient-to-r from-[#20B2AA] to-transparent rounded-full"></div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#20B2AA] to-[#4682B4] rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
        <div className="relative bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group-hover:border-slate-400/40 transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-start gap-4">
            <div className="relative w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <MdWorkOutline className="w-6 h-6 text-slate-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">
                {experience.title}
              </h3>
              <p className="text-white text-md font-semibold mb-1">
                {experience.company}
              </p>
              <p className="text-gray-400 text-md mb-2">{experience.period}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white/5 rounded-md text-xs font-bold text-gray-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
