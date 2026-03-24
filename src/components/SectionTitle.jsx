export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-slate-400">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-2 max-w-3xl text-slate-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}