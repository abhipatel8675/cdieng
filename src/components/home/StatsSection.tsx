import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";
import { BarChart2, Users, MapPin } from "lucide-react";

const icons = [BarChart2, Users, MapPin];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="bg-white py-16 border-b border-gray-100"
      aria-label="Company statistics"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {STATS.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex flex-col items-center py-10 px-6 text-center">
                <Icon size={36} className="text-gray-800 mb-4" aria-hidden="true" />
                <div className="text-5xl font-bold text-gray-900 mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
                </div>
                <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mt-1">
                  + {stat.label.toUpperCase()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
