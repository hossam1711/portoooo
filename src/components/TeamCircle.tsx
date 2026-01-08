'use client';

import { useState, useEffect, useRef } from 'react';
import { team } from '../config/team';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  img: string;
}

export default function TeamCircle() {
  const [selected, setSelected] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const teamMembers: TeamMember[] = team;

  const handleClick = (id: number) => {
    setSelected(selected === id ? null : id);
  };

  // عندما نضغط في أي مكان خارج الصور
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const target = e.target as HTMLElement;
      if (!containerRef.current.contains(target)) {
        setSelected(null); // إعادة الصورة المختارة للمكان الأصلي
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div ref={containerRef} className="relative grid place-content-center py-10">
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400"
        rel="stylesheet"
      />

      <div style={{ '--total': 6 } as React.CSSProperties} className="relative w-[500px] h-[500px] flex items-center justify-center">
        <div className="absolute w-32 h-32 bg-slate-700 border border-white/40 rounded-full flex items-center justify-center uppercase font-thin tracking-wider text-white text-lg z-10">
          The Team
        </div>

        {teamMembers.map((member, index) => {
          const total = teamMembers.length;
          const i = index + 1;
          const d = i / total;
          const rOffset = -0.25;
          const rAmount = 1;
          const r = rAmount * d + rOffset;
          const radius = selected === member.id ? 0 : 180;

          return (
            <div
              key={member.id}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                transform: `rotate(${r}turn) translate(${radius}px) rotate(${-r}turn)`,
                zIndex: selected === member.id ? 50 : 10,
              }}
            >
              <div
                className={`w-20 h-20 rounded-full bg-white/20 text-sky-500 text-xl flex items-center justify-center relative ring-4 ring-white/5 cursor-pointer transition-all duration-700 ease-in-out ${
                  selected === member.id ? 'scale-[2] z-50' : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // منع الحدث من الانتقال للـ document
                  handleClick(member.id);
                }}
              >
                <img
                  src={`https://i.pravatar.cc/300?img=${member.img}`}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover transition-all duration-700 ease-in-out"
                />
                <svg
                  viewBox="0 0 300 300"
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] -z-10 transition-all duration-700 ease-in-out ${
                    selected === member.id ? 'opacity-100 scale-[2.25] rotate-45' : 'opacity-0'
                  }`}
                >
                  <text fill="currentColor" fontSize="14" fontWeight="bold">
                    <textPath xlinkHref="#circlePath">
                      {member.name} - {member.role}
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* SVG path for text */}
      <svg width="0" height="0">
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -70, 0 a 70,70 0 0,1 140,0 a 70,70 0 0,1 -140,0"
          />
        </defs>
      </svg>
    </div>
  );
}
