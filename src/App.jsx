import BackgroundEffects from "./components/BackgroundEffects";
import Button from "./components/Button";
import SectionTitle from "./components/SectionTitle";
import ProjectCard from "./components/ProjectCard.jsx";

import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { skills } from "./data/skills";

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
    {children}
  </span>
);

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[#0b0d10] text-slate-100 transition-colors duration-500">
      <BackgroundEffects />

      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl transition-colors duration-500">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-white transition-colors duration-300 sm:text-xl"
            >
              {profile.name}
            </a>

            <div className="flex items-center gap-2">
              <Button href={profile.cvPath} variant="secondary">
                Download CV
              </Button>
              <Button href={profile.github}>GitHub</Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <main id="home" className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-slate-400">
                {profile.role}
              </p>

              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                {profile.tagline}
              </h1>

              <p className="mt-5 max-w-2xl text-slate-400">
                {profile.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#projects">View Projects</Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>Open to Graduate Roles</Pill>
                <Pill>UK • 2026 Graduate</Pill>
                <Pill>Technology • Data</Pill>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition duration-500">
                <h3 className="text-lg font-bold text-white">Quick Links</h3>

                <div className="mt-4 space-y-3 text-sm">
                  <a
                    className="block rounded-xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:bg-white/[0.06]"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="font-semibold text-white">GitHub</div>
                    <div className="text-slate-400">{profile.github}</div>
                  </a>

                  <a
                    className="block rounded-xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:bg-white/[0.06]"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="font-semibold text-white">LinkedIn</div>
                    <div className="text-slate-400">View profile</div>
                  </a>

                  <a
                    className="block rounded-xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:bg-white/[0.06]"
                    href={profile.cvPath}
                  >
                    <div className="font-semibold text-white">CV</div>
                    <div className="text-slate-400">Download PDF</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* Projects */}
      <section id="projects" className="py-14">
        <Container>
          <SectionTitle
            title="Projects"
            subtitle="One high-impact project presented clearly. More projects will be added as they are finalised."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-white/10 bg-white/[0.02] py-14 transition-colors duration-500"
      >
        <Container>
          <SectionTitle
            eyebrow="Toolkit"
            title="Skills"
            subtitle="Grouped for quick scanning by recruiters and hiring managers."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <h3 className="font-bold text-white">{group}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((i) => (
                    <Pill key={i}>{i}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14">
        <Container>
          <SectionTitle
            eyebrow="Get in touch"
            title="Contact"
            subtitle="For graduate roles, collaborations, or project discussions."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <a
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div className="font-bold text-white">LinkedIn</div>
              <div className="mt-1 text-slate-400">Connect with me</div>
            </a>

            <a
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="font-bold text-white">GitHub</div>
              <div className="mt-1 text-slate-400">Explore my repositories</div>
            </a>

            <a
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              href={`mailto:${profile.email}`}
            >
              <div className="font-bold text-white">Email</div>
              <div className="mt-1 text-slate-400">{profile.email}</div>
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            I'm open to connecting with fellow professionals, recruiters, and
            anyone interested in discussing technology, data, or potential
            collaborations. Feel free to reach out!
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 py-10 backdrop-blur-md">
        <Container>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} {profile.name}. Built with React +
              Tailwind.
            </p>

            <div className="flex gap-4 text-sm font-semibold">
              <a
                className="text-slate-300 transition-colors duration-300 hover:text-white"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="text-slate-300 transition-colors duration-300 hover:text-white"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="text-slate-300 transition-colors duration-300 hover:text-white"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}