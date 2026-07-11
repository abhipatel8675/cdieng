"use client";

import { useInView } from "react-intersection-observer";
import {
  Zap,
  Timer,
  Target,
  Cpu,
  CheckSquare,
  TrendingUp,
} from "lucide-react";
import type { Value } from "@/lib/types";

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  timer: Timer,
  target: Target,
  cpu: Cpu,
  "check-square": CheckSquare,
  "trending-up": TrendingUp,
};

interface ValuesGridProps {
  values: Value[];
}

function ValueItem({
  value,
  index,
  inView,
}: {
  value: Value;
  index: number;
  inView: boolean;
}) {
  const IconComponent = iconMap[value.icon] || Zap;
  return (
    <div
      className={`flex items-start gap-6 py-8 transition-all duration-500 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
        <IconComponent size={20} className="text-primary" aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-1.5">{value.title}</h3>
        <p className="text-gray-600 leading-relaxed">{value.description}</p>
      </div>
    </div>
  );
}

export default function ValuesGrid({ values }: ValuesGridProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      role="list"
      aria-label="Core company values"
      className="divide-y divide-gray-200"
    >
      {values.map((value, i) => (
        <div key={value.title} role="listitem">
          <ValueItem value={value} index={i} inView={inView} />
        </div>
      ))}
    </div>
  );
}
