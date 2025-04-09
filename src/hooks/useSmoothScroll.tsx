
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function useSmoothScroll() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetElement,
            offsetY: 50,
          },
          ease: "power3.inOut",
        });
      });
    });
    
    // Clean up
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);
}
