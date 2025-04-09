
import { useEffect, useRef, FormEvent, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    tl.from(".contact-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".contact-subtitle",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".social-icons a",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        formRef.current?.elements,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!");
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section bg-background relative overflow-hidden"
    >
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center contact-title">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-8 text-center max-w-xl mx-auto contact-subtitle">
          Have a project in mind or just want to chat? Feel free to reach out. I'm
          always open to new opportunities and collaborations.
        </p>

        <div className="flex justify-center mb-8 social-icons space-x-4">
          <a
            href="#"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:example@example.com"
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-card p-6 rounded-xl shadow-md glass glass-dark"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-3 rounded-md bg-secondary text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-3 rounded-md bg-secondary text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="w-full p-3 rounded-md bg-secondary text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full p-3 rounded-md bg-secondary text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"} 
            <Send size={16} />
          </button>
        </form>
      </div>

      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
}
