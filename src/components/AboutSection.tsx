
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }).from(
      imageRef.current,
      {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
        <div ref={textRef} className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground mb-4">
            I'm a passionate Full-Stack Developer with 5+ years of experience
            creating web and mobile applications that deliver exceptional user
            experiences.
          </p>
          <p className="text-muted-foreground mb-4">
            With a focus on clean code, performance, and accessibility, I build
            solutions that are not only beautiful but also functional and
            scalable.
          </p>
          <p className="text-muted-foreground mb-6">
            When I'm not coding, you can find me hiking in the mountains,
            reading science fiction, or experimenting with new cooking recipes.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          ref={imageRef}
          className="md:w-1/2 aspect-square max-w-md w-full"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-500/20 to-purple-500/20 glass glass-dark flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-lg text-muted-foreground">
                Profile Image Placeholder
              </p>
              <p className="text-sm text-muted-foreground/70">
                Add your photo here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
