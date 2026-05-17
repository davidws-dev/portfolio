import Image from "next/image";
import Link from "next/link";

import {
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Code2,
  Download,
  GraduationCap,
  Briefcase,
  ExternalLink,   // ← adiciona esta linha
} from "lucide-react";

import { ReactNode, ComponentType } from "react";

// ---------- Types ----------

type IconType = ComponentType<{
  className?: string;
  size?: number | string;
}>;

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

// ---------- Tech Card ----------

const TechCard = ({
  title,
  icon: Icon,
}: {
  title: string;
  icon: IconType;
}) => (
  <div className="flex items-center gap-3 p-4 bg-[#111111] border border-[#222222] rounded-xl hover:border-blue-500/40 transition-all duration-300">
    <Icon className="w-5 h-5 text-slate-500" />
    <span className="text-sm font-medium text-slate-300">{title}</span>
  </div>
);

// ---------- Project Card ----------

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
        <Code2 className="w-6 h-6 text-blue-500" />
      </div>

      <div className="flex items-center gap-3">
        {demo && (
          <Link href={demo} target="_blank" aria-label={`Open ${title} live demo`}>
            <ExternalLink className="w-5 h-5 text-slate-600 hover:text-blue-400 transition-colors" />
          </Link>
        )}
        <Link href={github} target="_blank" aria-label={`Open ${title} GitHub repository`}>
          <Github className="w-5 h-5 text-slate-600 hover:text-white transition-colors" />
        </Link>
      </div>
    </div>

    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-xs font-mono text-blue-500/80 mb-4 uppercase tracking-widest">{tech}</p>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

    {demo && (
      <div className="mt-4">
        <Link
          href={demo}
          target="_blank"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-blue-500 hover:text-blue-400 transition-colors border-b border-blue-500/30 pb-0.5"
        >
          <ExternalLink className="w-3 h-3" />
          Live Demo
        </Link>
      </div>
    )}

    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-500"></div>
  </div>
);
// ---------- Main ----------

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] antialiased">
      {/* Navbar */}

      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">
            DAVID
            <span className="text-blue-500">.</span>
            SILVA
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
              href="#education"
              className="hover:text-white transition-colors"
            >
              Education
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
            <span className="text-xs uppercase tracking-[0.3em] text-blue-500 font-bold">
              Backend Development
            </span>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] text-white">
              Junior Backend <br />
              Developer
              <span className="text-blue-500">.</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
              Backend development student focused on Java,
              object-oriented programming and database systems,
              currently attending the CET in Information Systems
              Programming at ISLA Gaia.
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
              Contact
            </a>
          </div>

          {/* Social */}

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

        {/* Profile Image */}

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

      {/* About */}

      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-xl text-slate-300 leading-relaxed">
              Professional transitioning into software development
              after an extensive background in operations and
              logistics management.
            </p>

            <p className="text-slate-500 leading-relaxed">
              Currently building backend projects while strengthening
              software engineering fundamentals, object-oriented
              programming and database systems through practical
              development and technical education.
            </p>

            {/* CV */}

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

          {/* Stack */}

          <div className="grid grid-cols-2 gap-4">
            <TechCard title="Java" icon={Server} />
            <TechCard title="Spring Boot" icon={Server} />
            <TechCard title="SQL" icon={Database} />
            <TechCard title="PostgreSQL" icon={Database} />
            <TechCard title="Docker" icon={Code2} />
            <TechCard title="Git & GitHub" icon={Github} />
            <TechCard title="REST APIs" icon={Code2} />
            <TechCard title="HTML & CSS" icon={Code2} />
          </div>
        </div>
      </Section>

      {/* Projects */}

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="URL Shortener API"
            tech="Spring Boot • Java 17 • PostgreSQL • Docker • Railway"
            description="REST API for URL shortening with redirect, access tracking and optional expiration. Includes live demo page and auto-generated Swagger documentation. Deployed on Railway with PostgreSQL."
            github="https://github.com/davidws-dev/url-shortener-api"
            demo="https://url-shortener-api-production-d27f.up.railway.app"
    />

        <ProjectCard
        title="Portfolio Website"
        tech="Next.js • TypeScript • Tailwind CSS"
        description="Professional portfolio website developed to showcase technical profile and personal projects."
        github="https://github.com/davidws-dev"
    />

        <ProjectCard
          title="Task Management API"
          tech="Java • SQL • OOP"
          description="Backend application focused on task management, object-oriented programming and database integration."
          github="https://github.com/davidws-dev"
    />
  </div>
</Section>
      {/* Education */}

      <Section id="education" title="Education">
        <div className="bg-[#111111] border border-[#222222] rounded-3xl p-10 space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <GraduationCap className="w-6 h-6 text-blue-500" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">
                CET — Information Systems Programming
              </h3>

              <p className="text-slate-400">
                ISLA Gaia — In Progress
              </p>

              <p className="text-slate-500 leading-relaxed max-w-3xl">
                Technical education focused on object-oriented
                programming, algorithms, SQL databases, frontend and
                server-side web development, Git/GitHub, C#,
                information security and software development
                fundamentals.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience */}

      <Section id="experience" title="Experience">
        <div className="bg-[#111111] border border-[#222222] rounded-3xl p-10 space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Briefcase className="w-6 h-6 text-blue-500" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">
                Operations & Logistics Background
              </h3>

              <p className="text-slate-400">
                10+ years of professional experience
              </p>

              <p className="text-slate-500 leading-relaxed max-w-3xl">
                Previous experience in logistics operations,
                transportation planning and team coordination,
                bringing discipline, problem-solving mindset and
                operational organization into software development.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}

      <Section id="contact" title="Contact">
        <div className="bg-[#111111] p-12 rounded-3xl border border-[#222222] text-center space-y-8">
          <h3 className="text-3xl font-bold text-white">
            Let&apos;s build and learn.
          </h3>

          <p className="text-slate-400 max-w-md mx-auto">
            Currently focused on backend development, software
            engineering fundamentals and building practical projects
            in Portugal.
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