import Navbar from "../section/Navbar";
import Hero from "../section/Hero";
import AboutTeam from "../section/AboutTeam";
import Services from "../section/Services";
import Technologies from "../section/Technologies";
import ProjectsGrid from "../section/ProjectsGrid";
import TimelineSlider from "../components/TimelindeSlider";
import ContactForm from "../section/ContactForm";
import Footer from "../section/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutTeam />
    <TimelineSlider />
      <Technologies />
      <Services />
      <ProjectsGrid />
      <ContactForm />
      <Footer />
    </div>
  );
}
