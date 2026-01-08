import { IconType } from "react-icons";
import {
  FaUsers,
  FaLaptopCode,
  FaAward,
  FaRocket,
} from "react-icons/fa";

/* =======================
   Interfaces (كما هي)
======================= */

export interface StatCard {
  icon: IconType;
  label: string;
  value: string;
  subtitle: string;
  color: string;
}

export interface Training {
  title: string;
  organization: string;
  period: string;
  icon: IconType;
  color: string;
}

export interface Education {
  degree: string;
  field: string;
  university: string;
  year: string;
  grade: string;
  description: string;
}

export interface Certificate {
  title: string;
  field: string;
  organization: string;
  year: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

/* =======================
   Company Statistics
======================= */

export const statsCards: StatCard[] = [
  {
    icon: FaUsers,
    label: "Team",
    value: "6+",
    subtitle: "Skilled Professionals",
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    icon: FaLaptopCode,
    label: "Projects",
    value: "25+",
    subtitle: "Delivered Solutions",
    color: "from-[#4682B4] to-[#20B2AA]",
  },
  {
    icon: FaAward,
    label: "Clients",
    value: "4+",
    subtitle: "Trusted Partners",
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    icon: FaRocket,
    label: "Experience",
    value: "2+",
    subtitle: "Years in Market",
    color: "from-[#4682B4] to-[#20B2AA]",
  },
];

/* =======================
   Programs & Background
======================= */

export const trainings: Training[] = [
  {
    title: "Startup Incubation Program",
    organization: "Information Technology Institute (ITI)",
    period: "2025",
    icon: FaAward,
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    title: "Full-Stack Development Program",
    organization: "Education for Employment Egypt",
    period: "2025",
    icon: FaAward,
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    title: "UI/UX & Product Design",
    organization: "Digital Egypt Initiative",
    period: "2024",
    icon: FaAward,
    color: "from-[#20B2AA] to-[#4682B4]",
  },
];

/* =======================
   Company Background
======================= */

export const education: Education = {
  degree: "Startup Company",
  field: "Software Development & Digital Solutions",
  university: "Founded by ITI Graduates",
  year: "2024",
  grade: "High Performance",
  description:
    "A technology startup specialized in building scalable digital products, combining strong technical expertise with business-oriented solutions.",
};

/* =======================
   Certification / Trust
======================= */

export const certificate: Certificate = {
  title: "Technology Partner",
  field: "Web & Software Solutions",
  organization: "IBM SkillsBuild & Local Partners",
  year: "2025",
};

/* =======================
   Company Experience
======================= */

export const experience: Experience = {
  title: "Software Development Startup",
  company: "Tech Startup",
  period: "2024 – Present",
  description:
    "We design and develop high-quality web and mobile applications for startups and businesses, focusing on performance, scalability, and modern user experience.",
  technologies: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "AWS",
  ],
};

