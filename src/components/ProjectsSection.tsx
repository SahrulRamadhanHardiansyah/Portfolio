import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Code, Monitor, Layers, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

type ProjectCategory = "All" | "Website" | "Software Solutions" | "Android Development" | "Others";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: ProjectCategory | Exclude<ProjectCategory, "All">;
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
    <div ref={cardRef} className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col h-full glass glass-dark">
      <div className="relative w-full aspect-video bg-muted overflow-hidden">
        <img src={project.image} alt={`Screenshot of ${project.title}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <Badge variant="outline" className="bg-primary/10 px-3 py-1 text-xs text-center">
            {project.category}
          </Badge>
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-border flex gap-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Github size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const FilterButton = ({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) => (
  <Button variant={active ? "default" : "outline"} className={`rounded-full px-4 transition-all ${active ? "shadow-md" : ""}`} onClick={onClick}>
    {icon}
    <span>{children}</span>
  </Button>
);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = 6;

  const projects: Project[] = [
    {
      title: "PJMovies Website",
      description: "A movie Browse website where users can explore a vast collection of films, view details, and search for their favorites.",
      tags: ["React", "Node.js", "Restful APIs", "Tailwind CSS"],
      image: "/website-film.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/pjmovies",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Aplikasi List Bilangan Prima",
      description: "A simple C# application that generates and displays a list of prime numbers based on user input.",
      tags: ["C#"],
      image: "/list-bilangan-prima.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/Aplikasi-List-Bilangan-Prima",
      liveUrl: "#",
      category: "Software Solutions",
    },
    {
      title: "Aplikasi List Bilangan Ganjil Genap",
      description: "A C# desktop application designed to generate and list odd and even numbers.",
      tags: ["C#"],
      image: "/list-bilangan-ganjil-genap.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/Aplikasi-List-Bilangan-Ganjil-Genap",
      liveUrl: "#",
      category: "Software Solutions",
    },
    {
      title: "Aplikasi Konversi Suhu",
      description: "A straightforward C# application for converting temperatures between Celsius, Fahrenheit, and Kelvin.",
      tags: ["C#"],
      image: "/konversi-suhu.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/Aplikasi-Konversi-Suhu",
      liveUrl: "#",
      category: "Software Solutions",
    },
    {
      title: "Aplikasi Pemesanan Menu",
      description: "A desktop application for managing and placing menu orders, designed for a restaurant or cafe.",
      tags: ["C#"],
      image: "/menu-pesanan.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/Aplikasi-Pemesanan-Menu",
      liveUrl: "#",
      category: "Software Solutions",
    },
    {
      title: "Kalkulator BMI",
      description: "A simple and effective C# application to calculate Body Mass Index (BMI) based on height and weight.",
      tags: ["C#"],
      image: "/kalkulator-bmi.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/Kalkulator-BMI",
      liveUrl: "#",
      category: "Software Solutions",
    },
    {
      title: "Kalkulator Online",
      description: "A web-based calculator for performing basic arithmetic operations, built with PHP and styled with CSS.",
      tags: ["PHP", "CSS"],
      image: "/kalkulator-online.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/Ukk_Kalkulator4",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Galeri Online",
      description: "An online image gallery that allows users to view and manage photos, powered by PHP and a MySQL database.",
      tags: ["PHP", "Bootstrap", "MySQL"],
      image: "/galeri-online.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/Ukk_Galeri1",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Face Detection",
      description: "A Python script that utilizes the OpenCV library to detect human faces in images or a live video stream.",
      tags: ["Python", "OpenCV"],
      image: "/face-detection.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/Face-detection",
      liveUrl: "#",
      category: "Others",
    },
    {
      title: "Simple CRUD",
      description: "A basic Android application demonstrating Create, Read, Update, and Delete (CRUD) operations using Kotlin.",
      tags: ["Kotlin"],
      image: "/crud-simple.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/CRUDSimple",
      liveUrl: "#",
      category: "Android Development",
    },
    {
      title: "Fragment CRUD",
      description: "An Android app showcasing CRUD functionality implemented within Fragments for a modular UI, built with Kotlin.",
      tags: ["Kotlin"],
      image: "/crud-fragment.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/CRUD_Fragment",
      liveUrl: "#",
      category: "Android Development",
    },
    {
      title: "Siswa CRUD",
      description: "An Android application for managing student data (Siswa), featuring full CRUD capabilities.",
      tags: ["Kotlin"],
      image: "/crud-siswa.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/CRUD_Siswa",
      liveUrl: "#",
      category: "Android Development",
    },
    {
      title: "Hotel BindingSource",
      description: "A .NET desktop application for hotel management, using BindingSource to link UI with a SQL database via Entity Framework.",
      tags: ["C#", ".NET", "Entity Framework", "SSMS", "SQL"],
      image: "/hotel-binding-source.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/HotelBindingsource",
      liveUrl: "#",
      category: "Software Solutions",
    },
    {
      title: "Node Diary",
      description: "A C#/.NET desktop application for keeping a personal diary, with entries stored and managed in a SQL database.",
      tags: ["C#", ".NET", "Entity Framework", "SSMS", "SQL"],
      image: "/node-diary.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/NodeDiary",
      liveUrl: "#",
      category: "Software Solutions",
    },
    {
      title: "Lyrical Track Runner",
      description: "A web application that finds and displays song lyrics, allowing users to search for tracks. Built with React and Node.js.",
      tags: ["React.js", "Node.js", "Tailwind CSS"],
      image: "/lyric-runner.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/lyric-track-runner",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Harvest Valley",
      description: "A farming simulation game concept developed using the Godot game engine and its native GDScript language.",
      tags: ["Godot", "GDScript"],
      image: "/harvest-valley.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/Harvest-Valley",
      liveUrl: "#",
      category: "Others",
    },
    {
      title: "Next GSAP Navigation",
      description: "A demonstration of a creative website navigation menu animated with GSAP and ScrollTrigger in a Next.js project.",
      tags: ["Next.js", "GSAP", "ScrollTrigger", "CSS"],
      image: "/next-gsap-nav.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/next-gsap-nav",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Next Scroll Driven",
      description: "A Next.js project demonstrating how to create compelling scroll-driven animations using the GSAP library.",
      tags: ["Next.js", "GSAP", "ScrollTrigger", "CSS"],
      image: "/next-scroll-driven.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/next-scroll-driven",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Next Sticky Cards",
      description: "An implementation of a sticky card scrolling effect in Next.js, animated with GSAP for a smooth user experience.",
      tags: ["Next.js", "GSAP", "ScrollTrigger", "CSS"],
      image: "/next-sticky-card.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/next-sticky-cards",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Next Scroll Animation",
      description: "A collection of various scroll-triggered animations built with Next.js and GSAP to enhance website interactivity.",
      tags: ["Next.js", "GSAP", "ScrollTrigger", "CSS"],
      image: "/next-scroll-animation.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/next-scroll-animation",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "SMK Restaurant",
      description: "A comprehensive restaurant management system for a vocational school (SMK) project, built with C# and .NET.",
      tags: ["C#", ".NET", "Entity Framework", "SSMS", "SQL"],
      image: "/smk-restaurant.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/SMKRestaurant",
      liveUrl: "#",
      category: "Software Solutions",
    },
    {
      title: "Landing Page Cloud",
      description: "A modern and responsive landing page for a fictional cloud service company, crafted with HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "Javascript"],
      image: "/landing-page-cloud.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/LandingPageCloud",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Finance App",
      description: "An Android application for tracking personal finances, helping users to manage their income and expenses.",
      tags: ["Kotlin"],
      image: "/finance-app.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/FinanceApp",
      liveUrl: "#",
      category: "Android Development",
    },
    {
      title: "Next Text Reveal Animation",
      description: "A Next.js project showcasing a text reveal animation effect on scroll, created using GSAP and ScrollTrigger.",
      tags: ["Next.js", "GSAP", "ScrollTrigger", "CSS"],
      image: "/next-text-reveal.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/next-text-reveal-animation",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "GSAP Hover Animation",
      description: "A simple web page demonstrating interactive hover animations on various elements, powered by the GSAP library.",
      tags: ["HTML", "CSS", "GSAP"],
      image: "/gsap-hover-animation.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/gsap-hover-animation",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Website Jurusan",
      description: "An informational website for a school department (Jurusan), featuring smooth scroll reveal animations.",
      tags: ["HTML", "CSS", "Scroll Reveal"],
      image: "/web-jurusan.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/web-jurusan",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Website Kelas",
      description: "A simple website for a specific school class (Kelas), designed to share information and memories.",
      tags: ["HTML", "CSS", "Scroll Reveal"],
      image: "/website-kelas.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/WEBKELAS",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "AnimeList",
      description: "A full-stack app for creating a personal anime list, using a public API and a Prisma-managed database.",
      tags: ["Next.js", "Tailwind CSS", "Restful APIs", "GitHub", "MySQL", "Prisma"],
      image: "/anime-list.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/AnimeList",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "AnimeStream",
      description: "A website for streaming anime content, allowing users to search, browse, and watch their favorite shows.",
      tags: ["Next.js", "Tailwind CSS", "Restful APIs", "GitHub", "MySQL", "Prisma"],
      image: "/anime-stream.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/animestream",
      liveUrl: "#",
      category: "Website",
    },
    {
      title: "Orion Comics",
      description: "An online platform for reading comics, featuring a library of titles that users can browse and enjoy.",
      tags: ["Next.js", "Tailwind CSS", "Restful APIs", "GitHub", "MySQL", "Prisma"],
      image: "/orion-comic.png",
      githubUrl: "https://github.com/SahrulRamadhanHardiansyah/orioncomics",
      liveUrl: "#",
      category: "Website",
    },
  ];

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, projectsToShow);

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

  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  return (
    <section id="projects" ref={sectionRef} className="section bg-secondary/30 dark:bg-secondary/10">
      <div className="container-custom">
        <div ref={titleRef} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">Here are some of my recent projects that showcase my skills and problem-solving abilities.</p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <FilterButton active={activeFilter === "All"} onClick={() => setActiveFilter("All")} icon={<Layers size={16} className="mr-1" />}>
              All
            </FilterButton>
            <FilterButton active={activeFilter === "Website"} onClick={() => setActiveFilter("Website")} icon={<Monitor size={16} className="mr-1" />}>
              Website
            </FilterButton>
            <FilterButton active={activeFilter === "Software Solutions"} onClick={() => setActiveFilter("Software Solutions")} icon={<Code size={16} className="mr-1" />}>
              Software Solutions
            </FilterButton>
            <FilterButton active={activeFilter === "Android Development"} onClick={() => setActiveFilter("Android Development")} icon={<Smartphone size={16} className="mr-1" />}>
              Android Development
            </FilterButton>
            <FilterButton active={activeFilter === "Others"} onClick={() => setActiveFilter("Others")} icon={<Smartphone size={16} className="mr-1" />}>
              Others
            </FilterButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length > projectsToShow && (
          <div className="mt-12 text-center">
            <Button onClick={() => setShowAll((prevShowAll) => !prevShowAll)} variant="outline" className="px-6 py-3">
              {showAll ? "Show Less" : "Show All Projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
