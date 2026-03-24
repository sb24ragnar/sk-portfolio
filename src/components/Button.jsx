export default function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0b0d10]";

  const styles =
    variant === "primary"
      ? "border border-white/10 bg-white text-black hover:bg-slate-200 focus:ring-white"
      : "border border-white/10 bg-white/5 text-slate-200 backdrop-blur-sm hover:bg-white/10 hover:text-white focus:ring-white";

  const isExternal =
    typeof href === "string" &&
    (href.startsWith("http") || href.startsWith("mailto:"));

  return (
    <a
      className={`${base} ${styles}`}
      href={href}
      target={isExternal && href.startsWith("http") ? "_blank" : undefined}
      rel={isExternal && href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}