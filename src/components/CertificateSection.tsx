import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

interface Certificate {
  title: string;
  issuer: string;
  tags: string[];
  image: string;
}

function CertificateCard({ certificate, index }: { certificate: Certificate; index: number }) {
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
        <img src={certificate.image} alt={`Certificate for ${certificate.title}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Issued by: <strong>{certificate.issuer}</strong>
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
          {certificate.tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CertificateSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const certificatesToShow = 6;

  const certificates: Certificate[] = [
    {
      title: "Introduction HTML",
      issuer: "Sololearn",
      tags: ["HTML"],
      image: "/sertifikat/introduction-html.png",
    },
    {
      title: "Introduction CSS",
      issuer: "Sololearn",
      tags: ["CSS"],
      image: "/sertifikat/introduction-css.png",
    },
    {
      title: "Introduction Javascript",
      issuer: "Sololearn",
      tags: ["Javascript"],
      image: "/sertifikat/introduction-javascript.png",
    },
    {
      title: "Javascript Dasar",
      issuer: "Skilvul",
      tags: ["Javascript"],
      image: "/sertifikat/javascript-skilvul.png",
    },
    {
      title: "Introduction Python",
      issuer: "Sololearn",
      tags: ["Python"],
      image: "/sertifikat/introduction-python.png",
    },
    {
      title: "Introduction SQL",
      issuer: "Sololearn",
      tags: ["SQL"],
      image: "/sertifikat/introduction-sql.png",
    },
    {
      title: "Introduction C++",
      issuer: "Sololearn",
      tags: ["C++"],
      image: "/sertifikat/introduction-c++.png",
    },
    {
      title: "Introduction C#",
      issuer: "Sololearn",
      tags: ["C#"],
      image: "/sertifikat/introduction-csharp.png",
    },
    {
      title: "Coding For Data",
      issuer: "Sololearn",
      tags: ["SQL"],
      image: "/sertifikat/data.png",
    },
    {
      title: "Javascript Intermediate",
      issuer: "Sololearn",
      tags: ["Javascript"],
      image: "/sertifikat/javascript-intermediate.png",
    },
    {
      title: "Python Intermediate",
      issuer: "Sololearn",
      tags: ["Python"],
      image: "/sertifikat/python-intermediate.png",
    },
    {
      title: "SQL Intermediate",
      issuer: "Sololearn",
      tags: ["SQL"],
      image: "/sertifikat/sql_intermediate.png",
    },
    {
      title: "C# Intermediate",
      issuer: "Sololearn",
      tags: ["C#"],
      image: "/sertifikat/csharp-intermediate.png",
    },
    {
      title: "Web Development",
      issuer: "Sololearn",
      tags: ["HTML", "CSS", "Javascript"],
      image: "/sertifikat/web-dev.png",
    },
    {
      title: "Python Development",
      issuer: "Sololearn",
      tags: ["Python"],
      image: "/sertifikat/python-dev.png",
    },
    {
      title: "Pemrograman Dengan Python",
      issuer: "Dicoding",
      tags: ["Python"],
      image: "/sertifikat/dicoding-python.png",
    },
    {
      title: "Visualisasi Data Dengan Python",
      issuer: "Dicoding",
      tags: ["Python", "Matplotlib", "Seaborn"],
      image: "/sertifikat/dicoding-visualisasi.png",
    },
    {
      title: "UBIG LKS ITSSB Bootcamp 2025",
      issuer: "UBIG",
      tags: ["C#", "WEB API", ".NET", "Entity Framework", "Kotlin", "SQL"],
      image: "/sertifikat/UBIG_1.png",
    },
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, certificatesToShow);

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

  return (
    <section id="certificates" ref={sectionRef} className="section">
      <div className="container-custom">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Licenses & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A collection of certifications I've earned to validate my skills and knowledge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCertificates.map((cert, index) => (
            <CertificateCard key={cert.title} certificate={cert} index={index} />
          ))}
        </div>

        {certificates.length > certificatesToShow && (
          <div className="mt-12 text-center">
            <Button onClick={() => setShowAll((prevShowAll) => !prevShowAll)} variant="outline" className="px-6 py-3">
              {showAll ? "Show Less" : "Show All Certificates"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
