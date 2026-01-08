"use client";
import React, { useState } from 'react';
import { cards, TravelCardProps } from '../config/companyOverviewData';


const TravelCard: React.FC<TravelCardProps> = ({ icon, title, price, color, videoUrl, category, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    identity: {
      gradient: 'from-slate-500 to-slate-600',
      text: 'text-slate-500',
      border: 'border-slate-500',
      bg: 'bg-slate-500'
    },
    services: {
      gradient: 'from-slate-500 to-slate-600',
      text: 'text-slate-500',
      border: 'border-slate-500',
      bg: 'bg-slate-500'
    },
    goals: {
      gradient: 'from-slate-500 to-slate-600',
      text: 'text-slate-500',
      border: 'border-slate-500',
      bg: 'bg-slate-500'
    },
    principles: {
      gradient: 'from-slate-500 to-slate-600',
      text: 'text-slate-500',
      border: 'border-slate-500',
      bg: 'bg-slate-500'
    }
  };

  return (
    <div 
      className={`relative transition-all duration-1000 ease-in-out flex-shrink-0 ${
        isHovered ? 'w-[30rem]' : 'w-[15rem]'
      } h-[15rem]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'rgba(0,0,0,0.05)',
        boxShadow: isHovered 
          ? '-0.1rem 1.7rem 6.6rem -3.2rem rgba(0,0,0,0.75)'
          : '-0.1rem 1.7rem 6.6rem -3.2rem rgba(0,0,0,0.5)'
      }}
    >
      {/* Flip Card Container */}
      <div 
        className="absolute right-0 w-[15rem] h-[15rem] z-[100] transition-all duration-1000"
        style={{ 
          perspective: '100rem',
          visibility: 'hidden'
        }}
      >
        <div 
          className="relative w-full h-full transition-all duration-1000"
          style={{ 
            transformStyle: 'preserve-3d',
            transformOrigin: 'left',
            transform: isHovered ? 'rotateY(-180deg)' : 'rotateY(0deg)',
            visibility: 'visible'
          }}
        >
          {/* Front Card */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-white"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Top Section with Gradient */}
            <div 
              className={`flex flex-col items-center justify-center h-[12rem] bg-gradient-to-b ${colorClasses[color].gradient}`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%)'
              }}
            >
              <div
                className="w-[3.25rem] h-[3.25rem] fill-white"
                dangerouslySetInnerHTML={{ __html: icon }}
              />
              <h2 className="text-[1.7rem] mt-1 text-white font-normal">{title}</h2>
              <p className="text-[1.4rem] -mt-1 text-white">{price}</p>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-center h-[3rem]">
              <p className={`text-[1.5rem] font-extrabold ${colorClasses[color].text}`}>
                View me
              </p>
            </div>
          </div>

          {/* Back Card with Video */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-white"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <video 
              className="w-full h-full object-cover"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%)'
              }}
              autoPlay 
              muted 
              loop
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Inside Page */}
      <div 
        className="absolute right-0 w-[15rem] h-full bg-white p-4 z-[1] transition-all duration-1000"
        style={{
          boxShadow: isHovered 
            ? 'inset 1rem 0px 5rem -2.5rem rgba(0,0,0,0.1)'
            : 'inset 20rem 0px 5rem -2.5rem rgba(0,0,0,0.25)'
        }}
      >
        <div className="flex flex-col items-center text-center h-full">
          <h3 className={`text-[1.3rem] font-extrabold pb-4 w-full ${colorClasses[color].text}`}>
            {category}
          </h3>
          <p className="text-[1.2rem] text-gray-800 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function CompanyOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-center items-center w-full gap-12">
          {cards.map((card, index) => (
            <TravelCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}