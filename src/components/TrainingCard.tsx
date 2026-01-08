"use client";
import React from "react";
import { Training } from "@/config/aboutData";

interface TrainingCardProps {
  training: Training;
  index: number;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ training, index }) => {
  return (
    <div key={index} className="relative group">
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${training.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`}
      ></div>
      <div className="relative bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group-hover:border-slate-400/40 transition-all duration-300 hover:scale-[1.02] h-full">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <training.icon className="w-5 h-5 text-slate-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white leading-tight mb-1">
              {training.title}
            </h3>
            <p className="text-white text-sm font-semibold mb-1">
              {training.organization}
            </p>
            <p className="text-gray-400 text-sm">{training.period}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;