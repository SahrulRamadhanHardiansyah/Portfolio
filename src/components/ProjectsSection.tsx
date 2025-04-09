
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      delay: index * 0.2,
    });
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col h-full glass glass-dark"
    >
      <div className="relative w-full aspect-video bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity flex items-center justify-center">
          <p className="text-center text-muted-foreground">{project.title} Screenshot</p>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 pt-0 flex gap-4 border-t border-border mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={16} />
          <span>Code</span>
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    gsap.from(titleRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with cart, checkout, and payment processing functionality.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A productivity tool for teams to organize projects, assign tasks, and track progress.",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "An application to record workouts, track progress, and visualize fitness data.",
      tags: ["React Native", "GraphQL", "TypeScript"],
      image: "",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="container-custom">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
