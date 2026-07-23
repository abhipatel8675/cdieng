"use client";

import { useInView } from "react-intersection-observer";
import { Users, Building2, ShieldCheck } from "lucide-react";
import type { Differentiator } from "@/lib/types";

const icons: Record<string, React.ElementType> = {
  "one-team": Users,
  "under-one-roof": Building2,
  accountable: ShieldCheck,
};

const accentColors: Record<string, string> = {
  "one-team": "#1e3a5f",
  "under-one-roof": "#1a3d1a",
  accountable: "#0d2e2e",
};

function DifferentiatorItem({ diff }: { diff: Differentiator }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const IconComponent = icons[diff.id] ?? Users;
  const isRight = diff.imagePosition === "right";

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Text block */}
      <div className={isRight ? "lg:order-1" : "lg:order-2"}>
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
          {diff.subheading}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          {diff.heading}
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">{diff.description}</p>
      </div>

      {/* Visual block */}
      <div className={isRight ? "lg:order-2" : "lg:order-1"}>
        <div
          className="h-72 md:h-80 rounded-2xl flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${accentColors[diff.id] ?? "#101010"}, #101010)`,
          }}
          aria-label={diff.imageAlt}
          role="img"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(11,180,170,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(11,180,170,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 text-center px-8">
            <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4">
              <IconComponent size={34} className="text-primary" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{diff.subheading}</h3>
            <p className="text-white/60 text-sm">{diff.imageAlt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DifferentiatorSectionProps {
  differentiators: Differentiator[];
}

export default function DifferentiatorSection({
  differentiators,
}: DifferentiatorSectionProps) {
  return (
    <div className="space-y-16 md:space-y-24">
      {differentiators.map((diff) => (
        <DifferentiatorItem key={diff.id} diff={diff} />
      ))}
    </div>
  );
}
