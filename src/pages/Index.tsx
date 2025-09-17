import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import VisionSection from "@/components/sections/VisionSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import InfoSection from "@/components/sections/InfoSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'vision', 'architecture'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
      
      <HomeSection onNavigateToSection={scrollToSection} />
      <AboutSection />
      <VisionSection />
      <ArchitectureSection />
      <InfoSection />

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Contexta • AI Context Engineering Platform
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            Transforming AI interactions through intelligent context management
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;