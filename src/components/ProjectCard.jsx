import Button from "./Button";

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
    {children}
  </span>
);

export default function ProjectCard({
  title,
  impact,
  stack,
  highlights,
  links,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="mt-1 text-slate-400">{impact}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>

        <ul className="mt-2 space-y-2 text-sm text-slate-300">
          {highlights.map((h, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-3">
          {links?.github ? (
            <Button href={links.github} variant="secondary">
              GitHub
            </Button>
          ) : null}
          {links?.report ? (
            <Button href={links.report} variant="secondary">
              Report
            </Button>
          ) : null}
          {links?.demo ? (
            <Button href={links.demo} variant="secondary">
              Demo
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}