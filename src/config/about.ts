import { IconType } from "react-icons";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

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

export const statsCards: StatCard[] = [
  {
    icon: FaGraduationCap,
    label: "Degree",
    value: "BIS",
    subtitle: "Business Information Systems",
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    icon: FaAward,
    label: "Trainings",
    value: "4+",
    subtitle: "Professional Programs",
    color: "from-[#4682B4] to-[#20B2AA]",
  },
  {
    icon: FaCertificate,
    label: "Certified",
    value: "IBM",
    subtitle: "Web Development",
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    icon: FaLaptopCode,
    label: "Projects",
    value: "10+",
    subtitle: "Completed Works",
    color: "from-[#4682B4] to-[#20B2AA]",
  },
];

export const trainings: Training[] = [
  {
    title: "ITI - Frontend & Cross Platform",
    organization: "Information Technology Institute",
    period: "July 2025 - Nov 2025",
    icon: FaAward,
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    title: "EFE Egypt - Full Stack",
    organization: "Education for Employment Egypt",
    period: "Mar 2025 - May 2025",
    icon: FaAward,
    color: "from-[#4682B4] to-[#20B2AA]",
  },
  {
    title: "UI/UX Design",
    organization: "Assiut Oil Refining Company",
    period: "Jan 2025 - Mar 2025",
    icon: FaAward,
    color: "from-[#20B2AA] to-[#4682B4]",
  },
  {
    title: "Frontend - React.js",
    organization: "Digital Egypt Pioneers Initiative",
    period: "Oct 2024 - May 2025",
    icon: FaAward,
    color: "from-[#4682B4] to-[#20B2AA]",
  },
];

export const education: Education = {
  degree: "Bachelor's Degree",
  field: "Business Information Systems (BIS)",
  university: "Assiut University",
  year: "2024",
  grade: "Very Good",
  description: "Foundation in IT, programming, database management, and business technology integration.",
};

export const certificate: Certificate = {
  title: "Professional Certificate",
  field: "Web Development Fundamentals",
  organization: "IBM SkillsBuild",
  year: "2025",
};

export const experience: Experience = {
  title: "Freelance Frontend Developer",
  company: "Self-employed",
  period: "November 2025 – Present",
  description: "Building responsive, user-friendly web interfaces using React.js and modern web technologies with focus on performance and design.",
  technologies: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "JavaScript",
  ],
};