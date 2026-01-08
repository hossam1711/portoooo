"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "../config/aboutData";

const EducationCard = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="h-1 w-8 bg-gradient-to-r from-[#20B2AA] to-[#4682B4] rounded-full"></div>
        <h2 className="text-2xl font-extrabold text-black">Your Technology Partner</h2>
        <div className="h-1 flex-1 bg-gradient-to-r from-[#4682B4] to-transparent rounded-full"></div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#20B2AA] to-[#4682B4] rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
        <div className="relative bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group-hover:border-slate-400/40 transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-start gap-3 mb-3">
            <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <FaGraduationCap className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                {education.degree}
              </h3>
              <p className="text-white text-md font-semibold">
                {education.field}
              </p>
              <p className="text-gray-400 text-sm">
                {education.university} • {education.year}
              </p>
              <p className="text-gray-400 text-sm">Grade • {education.grade}</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {education.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;