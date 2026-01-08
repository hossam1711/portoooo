"use client";
import React from "react";
import { statsCards, StatCard } from "@/config/aboutData";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 animate-fadeInUp animation-delay-300">
      {statsCards.map((stat: StatCard, index: number) => (
        <div key={index} className="group relative">
          <div
            className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
          ></div>
          <div className="relative bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-xl p-4 border border-white/10 group-hover:border-slate-400/30 transition-all duration-300 text-center">
            <stat.icon className="w-6 h-6 mx-auto mb-2 text-white" />
            <p
              className="text-2xl font-black text-white mb-1"
            >
              {stat.value}
            </p>
            <p className="text-gray-300 text-xs font-semibold">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;