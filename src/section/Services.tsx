// app/services/page.tsx
"use client";

import ServiceCard from "@/components/ServiceCard";
import { services } from "@/config/servicesData";
import SectionHeader from "@/components/SectionHeader";
import { sectionDivider } from "../styles/theme";

export default function Services() {
  return (
   <section id="services" className="min-h-screen bg-gray-50 py-20">
     <div className="mb-16">
       <SectionHeader
         title="Our"
         highlightText="Services"
         description="Professional solutions tailored to your needs"
         theme="light"
       />
     </div>
     <ServiceCard services={services} />


     {/* Section Divider */}
     {sectionDivider}
   </section>
 );
}