export interface Service {
  icon: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    icon: "🏠",
    title: "We Help You Make Modern Interior",
    description:
      "We Will Help You To Make An Elegant And Luxurious Interior Designed By Professional Interior Designer.",
    imageUrl: "https://picsum.photos/id/1011/1200/800",
  },
  {
    icon: "💻",
    title: "Frontend Development",
    description:
      "Build interactive and fast user interfaces using React, Vue, and the latest technologies for modern web applications.",
    imageUrl: "https://picsum.photos/id/1026/1200/800",
  },
  {
    icon: "🖥️",
    title: "Backend Development",
    description:
      "Create powerful and secure backend systems using Node.js, Python, and various databases for scalable solutions.",
    imageUrl: "https://picsum.photos/id/201/1200/800",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Design exceptional user experiences and attractive interfaces that match your brand identity perfectly.",
    imageUrl: "https://picsum.photos/id/180/1200/800",
  },
  {
    icon: "🌐",
    title: "Full Stack Development",
    description:
      "Complete end-to-end solutions for all your digital projects with modern technologies and best practices.",
    imageUrl: "https://picsum.photos/id/119/1200/800",
  },
];