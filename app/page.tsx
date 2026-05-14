import Image from "next/image";
import Link from "next/link";

import {
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Layers,
  ExternalLink,
  Download,
  ChevronRight,
} from "lucide-react";

import { ReactNode, ComponentType } from "react";

// ---------- Types ----------
type IconType = ComponentType<{ className?: string; size?: number | string }>;

// ---------- Section Component ----------
const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto scroll-mt-24"
  >
    {title && (
      <h2 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-12 flex items-center gap-4">
        <span className="w-8 h-[1px] bg-blue-500"></span>
        {title}
      </h2>
    )}
    {children}
  </section>
);

// ---------- Tech Card Component ----------
const TechCard = ({ title, icon: Icon }: { title: string; icon: IconType }) => (
  <div className="flex items-center gap-3 p-4 bg-[#111111] border border-[#222222] rounded-xl hover:border-blue-500/40 transition-all duration-300">
    <Icon className="w-5 h-5 text-slate-500" />
    <span className="text-sm font-medium text-slate-300">{title}</span>
  </div>
);

// ---------- Project Card Component ----------
const ProjectCard = ({
  title,
  tech,
  description,
  github,
  demo,
}: {
  title: string;
  tech: string;
  description: string;
  github: string;
  demo?: string;
}) => (
  <div className="group relative p-8 bg-[#111111] border border-[#222222] rounded-2xl hover:bg-[#151515] transition-all duration-300 overflow-hidden">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-blue-500/10 rounded-lg">
        <Server className="w-6 h-6 text-blue-500" />
      </div>
      <div className="flex gap-4">
        <Link
          href={github}
          target="_blank"
          aria-label={`Open ${title} GitHub repository`}
        >
          <Github className="w-5 h-5 text-slate-600 hover:text-white transition-colors" />
        </Link>
        {demo && (
          <Link
            href={demo}
            target="_blank"
            aria-label={`Open ${title} live demo`}
          >
            <ExternalLink className="w-5 h-5 text-slate-600 hover:text-white transition-colors" />
          </Link>
        )}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-xs font-mono text-blue-500/80 mb-4 uppercase tracking-widest">
      {tech}
    </p>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-500"></div>
  </div>
);

// ---------- Main Component ----------
export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">
            DAVID<span className="text-blue-500">.</span>SILVA
          </span>
          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-5">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] text-white">
              Backend <br />
              Developer<span className="text-blue-500">.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
              Backend developer focused on building scalable APIs,
              clean architectures and modern backend systems.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/10"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-[#333333] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-slate-500">
            <Link
              href="https://linkedin.com/in/davidws-dev"
              target="_blank"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5 hover:text-blue-500 transition-colors" />
            </Link>
            <Link
              href="https://github.com/davidws-dev"
              target="_blank"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative justify-self-center md:justify-self-end">
          <div className="w-72 h-72 md:w-96 md:h-96 relative z-10">
            <Image
              src="/images/CamisaAzulMelhorPerfil.jpg"
              alt="David Silva portrait"
              fill
              priority
              quality={90}
              className="object-cover rounded-3xl border border-white/10 transition-all duration-500 hover:border-blue-500/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-72 h-72 md:w-96 md:h-96 border border-blue-500/20 rounded-3xl"></div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-xl text-slate-300 leading-relaxed">
              Transitioning into tech with strong focus on backend
              development and software engineering fundamentals.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Based in Portugal, currently building backend projects
              focused on APIs, authentication systems, clean code and
              scalable application architecture.
            </p>

            {/* CV Downloads */}
            <div className="pt-4 flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500">
                Curriculum Vitae
              </span>
              <div className="flex gap-4">
                <a
                  href="/docs/CV_David_PT.pdf"
                  download
                  className="flex items-center gap-2 text-xs font-bold border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  PORTUGUÊS
                </a>
                <a
                  href="/docs/CV_David_EN.pdf"
                  download
                  className="flex items-center gap-2 text-xs font-bold border-b border-slate-700 pb-1 hover:text-slate-400 transition-colors"
                >
                  <Download className="w-3 h-3" />
                  ENGLISH
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="grid grid-cols-2 gap-4">
            <TechCard title="Java" icon={Server} />
            <TechCard title="Spring Boot" icon={Layers} />
            <TechCard title="PostgreSQL" icon={Database} />
            <TechCard title="Docker" icon={Layers} />
            <TechCard title="Git & GitHub" icon={Github} />
            <TechCard title="REST APIs" icon={ChevronRight} />
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Auth API"
            tech="Java • Spring Boot • PostgreSQL"
            description="JWT authentication API with role-based access control and secure token validation."
            github="https://github.com/davidws-dev"
          />
          <ProjectCard
            title="Task Management API"
            tech="Java • Spring Boot • Docker"
            description="RESTful backend service for task management with Dockerized PostgreSQL integration."
            github="https://github.com/davidws-dev"
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="bg-[#111111] p-12 rounded-3xl border border-[#222222] text-center space-y-8">
          <h3 className="text-3xl font-bold text-white">
            Let&apos;s build something robust.
          </h3>
          <p className="text-slate-400 max-w-md mx-auto">
            Available for backend opportunities in Portugal,
            focused on clean architecture, APIs and scalable
            systems.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 pt-4">
            <a
              href="mailto:hello@davidws.pt"
              className="flex items-center justify-center gap-3 text-slate-300 hover:text-blue-500 transition-colors uppercase text-[11px] tracking-widest font-bold"
            >
              <Mail className="w-4 h-4" />
              hello@davidws.pt
            </a>
            <Link
              href="https://linkedin.com/in/davidws-dev"
              target="_blank"
              className="flex items-center justify-center gap-3 text-slate-300 hover:text-blue-500 transition-colors uppercase text-[11px] tracking-widest font-bold"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/[0.05] text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold">
          © 2026 David Silva — Porto, Portugal
        </p>
      </footer>
    </main>
  );
}