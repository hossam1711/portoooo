"use client";

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Build interactive and fast user interfaces using React, Vue, and the latest technologies",
      image: "https://picsum.photos/id/1011/1200/800",
    },
    {
      icon: "🖥️",
      title: "Backend Development",
      description:
        "Create powerful and secure backend systems using Node.js, Python, and various databases",
      image: "https://picsum.photos/id/1026/1200/800",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "Develop native and cross-platform mobile applications for iOS and Android",
      image: "https://picsum.photos/id/201/1200/800",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Design exceptional user experiences and attractive interfaces that match your brand",
      image: "https://picsum.photos/id/167/1200/800",
    },
    {
      icon: "🗄️",
      title: "Database Solutions",
      description:
        "Manage and design efficient databases optimized for high performance",
      image: "https://picsum.photos/id/180/1200/800",
    },
    {
      icon: "🌐",
      title: "Full Stack Development",
      description:
        "Complete end-to-end solutions for all your digital projects",
      image: "https://picsum.photos/id/119/1200/800",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="upk-salf-item bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="upk-salf-image-wrap">
              <img
                className="upk-xanc-img w-full h-48 object-cover"
                src={service.image}
                alt={service.title}
              />
            </div>

            <div className="upk-salf-content-wrap p-4">
              <span className="service-icon text-2xl">{service.icon}</span>

              <h3 className="upk-salf-title text-xl font-bold mt-2">
                {service.title}
              </h3>

              <div className="upk-salf-desc text-gray-600 mt-2">
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
