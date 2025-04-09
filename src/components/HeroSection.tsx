
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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
    <section
      id="home"
      ref={sectionRef}
      className="section flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="container-custom">
        <div ref={textRef} className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              John Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            A passionate full-stack developer creating beautiful, functional
            websites and applications
          </p>
          <div>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Learn more about me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="text-muted-foreground" />
      </div>

      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    </section>
  );
}
