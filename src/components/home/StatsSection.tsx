import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-dark py-16"
      aria-label="Company statistics"
    >
      {/* Subtle teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(11,180,170,0.07) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center py-8 sm:py-4 px-6 text-center group">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
              </div>
              <div className="w-8 h-0.5 bg-primary/40 rounded mb-2 group-hover:w-12 group-hover:bg-primary transition-all duration-300" aria-hidden="true" />
              <p className="text-white/60 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
