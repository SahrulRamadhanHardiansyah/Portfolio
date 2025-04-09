
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useSmoothScroll();

  useEffect(() => {
    // Initialize GSAP scroll trigger for section animations
    const sections = document.querySelectorAll(".section");
    
    sections.forEach((section, index) => {
      const sectionId = section.getAttribute("id");
      
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleClass: { targets: `nav a[href="#${sectionId}"]`, className: "!text-primary" },
        // markers: true, // Uncomment for debugging
      });
      
      // Pin sections if needed (optional)
      if (index > 0) { // Don't pin the first section
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: false, // Set to true to enable section pinning
          pinSpacing: false,
          // markers: true, // Uncomment for debugging
        });
      }
    });
    
    return () => {
      // Clean up all ScrollTriggers on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;
