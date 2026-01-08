import Navbar from "../section/Navbar";
import Hero from "../section/Hero";
import About from "../section/About";
import Services from "../section/Services";
import Technologies from "../section/Technologies";
import ProjectsGrid from "../section/ProjectsGrid";
import ContactUs from "../section/contactUs";

import Footer from "../section/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Services />
      <ProjectsGrid />
      <ContactUs />
    
      <Footer />
    </div>
  );
}