"use client";

import { useInView } from "react-intersection-observer";
import { CheckCircle, Thermometer, Zap, Droplets } from "lucide-react";
import type { Service } from "@/lib/types";

const icons = {
  thermometer: Thermometer,
  zap: Zap,
  droplets: Droplets,
};

const visualStyles = [
  {
    bg: "linear-gradient(135deg, #0a1628 0%, #0d2144 50%, #071830 100%)",
    accent: "#3b82f6",
    pattern: "rgba(59,130,246,0.08)",
  },
  {
    bg: "linear-gradient(135deg, #0f1a0a 0%, #1a2e10 50%, #0c1a08 100%)",
    accent: "#2563a8",
    pattern: "rgba(11,180,170,0.08)",
  },
  {
    bg: "linear-gradient(135deg, #1a0f0a 0%, #2e1a10 50%, #1a0c08 100%)",
    accent: "#f59e0b",
    pattern: "rgba(245,158,11,0.08)",
  },
];

interface ServiceSectionProps {
  service: Service;
  index: number;
}

export default function ServiceSection({ service, index }: ServiceSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const IconComponent = icons[service.icon as keyof typeof icons] || Zap;
  const style = visualStyles[index % visualStyles.length];
  const imageRight = index % 2 === 0;

  return (
    <article
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      aria-labelledby={`service-section-${service.id}`}
    >
      {/* ── Visual panel ── */}
      <div
        className={`relative min-h-[340px] lg:min-h-[420px] flex items-center justify-center ${imageRight ? "lg:order-2" : "lg:order-1"}`}
        style={{ background: style.bg }}
        aria-hidden="true"
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${style.pattern} 1px, transparent 1px), linear-gradient(90deg, ${style.pattern} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Diagonal lines for depth */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 60px, ${style.pattern} 60px, ${style.pattern} 61px)`,
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${style.accent}18 0%, transparent 65%)`,
          }}
        />
        {/* Icon */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl"
            style={{
              background: `${style.accent}22`,
              border: `1px solid ${style.accent}50`,
              boxShadow: `0 0 60px ${style.accent}25`,
            }}
          >
            <IconComponent size={44} style={{ color: style.accent }} />
          </div>
          <span
            className="text-2xl font-bold tracking-wide"
            style={{ color: style.accent }}
          >
            {service.title}
          </span>
        </div>
        {/* Bottom accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, transparent, ${style.accent}, transparent)` }}
        />
      </div>

      {/* ── Text panel ── */}
      <div
        className={`bg-white p-10 lg:p-14 flex flex-col justify-center ${imageRight ? "lg:order-1" : "lg:order-2"}`}
      >
        <h2
          id={`service-section-${service.id}`}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          {service.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
        <ul className="space-y-3">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-gray-700">
              <CheckCircle
                size={17}
                className="text-primary shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-sm">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
