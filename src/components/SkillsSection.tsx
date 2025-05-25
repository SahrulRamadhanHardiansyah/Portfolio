import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Database, Layout, PaintBucket, Server, MonitorSmartphone, Gamepad2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function SkillCard({ title, description, icon, delay }: SkillCardProps) {
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
      delay: delay * 0.1,
    });
  }, [delay]);

  return (
    <div ref={cardRef} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow glass glass-dark">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const skills = [
    {
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, CSS/SCSS, Bootstrap, Tailwind CSS, Kotlin, Responsive Design",
      icon: <Layout size={32} />,
    },
    {
      title: "Backend Development",
      description: "Node.js, Express, Python, RESTful APIs, Authentication",
      icon: <Server size={32} />,
    },
    {
      title: "Fullstack Web Development",
      description: "Next.js, Node.js, PHP, Tailwind CSS, HTML, MySQL, and Prisma",
      icon: <Server size={32} />,
    },
    {
      title: ".NET Development",
      description: "Web API, Windows Forms App, Console App with C# in Microsoft Visual Studio",
      icon: <MonitorSmartphone size={32} />,
    },
    {
      title: "Mobile & Game Development",
      description: "Android app with Kotlin, Game development with Godot",
      icon: <Gamepad2 size={32} />,
    },
    {
      title: "Database Management",
      description: "MySQL, PostgreSQL, Firebase",
      icon: <Database size={32} />,
    },
    {
      title: "UI/UX Design",
      description: "Figma",
      icon: <PaintBucket size={32} />,
    },
    {
      title: "DevOps & Tools",
      description: "Git, GitHub, Docker, Vercel",
      icon: <Code size={32} />,
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="section bg-background">
      <div className="container-custom">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} title={skill.title} description={skill.description} icon={skill.icon} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
