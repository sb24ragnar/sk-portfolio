export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0b0d10]">
      {/* soft matte glow */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-white/[0.04] blur-3xl animate-drift-a" />
      <div className="absolute top-1/4 -right-24 h-[28rem] w-[28rem] rounded-full bg-slate-400/[0.05] blur-3xl animate-drift-b" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-slate-500/[0.04] blur-3xl animate-drift-a" />

      {/* matte vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.025),transparent_35%)]" />

      {/* ultra-subtle texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* dark matte overlay */}
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}