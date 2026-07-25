import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <div className="max-w-[640px] mx-auto px-4 sm:px-6">
      <Header />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
