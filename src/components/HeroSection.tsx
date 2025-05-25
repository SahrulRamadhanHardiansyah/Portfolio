import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState("");
  const texts = ["Sahrul Ramadhan H.", "Student", "Programmer", "Tech Enthusiast"];
  const typingSpeed = 120;

  useEffect(() => {
    let currentTextIndex = 0;
    let currentIndex = 0;
    let direction = 1;
    let isPaused = false;

    const typeLoop = () => {
      if (isPaused) return;

      const currentFullText = texts[currentTextIndex];

      if (direction === 1) {
        if (currentIndex <= currentFullText.length) {
          setDisplayText(currentFullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          isPaused = true;
          setTimeout(() => {
            direction = -1;
            isPaused = false;
          }, 1500);
        }
      } else {
        if (currentIndex >= 0) {
          setDisplayText(currentFullText.substring(0, currentIndex));
          currentIndex--;
        } else {
          isPaused = true;
          setTimeout(() => {
            direction = 1;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            currentIndex = 0;
            isPaused = false;
          }, 500);
        }
      }
    };

    const typingInterval = setInterval(typeLoop, typingSpeed);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline();

    tl.from(textRef.current?.children || [], {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="home" ref={sectionRef} className="section flex flex-col justify-center items-center relative overflow-hidden">
      <div className="container-custom">
        <div ref={textRef} className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 dark:text-white glow-text">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 inline-block min-h-[1.5em] glow-text">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">A passionate full-stack developer creating beautiful, functional websites and applications</p>
          <div>
            <a href="#about" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Learn more about me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="text-muted-foreground" />
      </div>

      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <style>{`
        .glow-text {
          text-shadow: 0 0 15px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3);
          animation: pulse-glow 3s infinite alternate;
        }

        @keyframes pulse-glow {
          0% {
            text-shadow: 0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3);
          }
          100% {
            text-shadow: 0 0 20px rgba(139, 92, 246, 0.7), 0 0 40px rgba(139, 92, 246, 0.5);
          }
        }
      `}</style>
    </section>
  );
}
