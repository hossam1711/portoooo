import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutTeam from "../components/AboutTeam";
import Services from "../components/Services";
import ProjectsGrid from "../components/ProjectsGrid";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutTeam />
      <Services />
      <ProjectsGrid />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
