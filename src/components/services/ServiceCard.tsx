"use client";

import { useInView } from "react-intersection-observer";
import { Thermometer, Zap, Droplets, CheckCircle } from "lucide-react";
import type { Service } from "@/lib/types";

const icons = {
  thermometer: Thermometer,
  zap: Zap,
  droplets: Droplets,
};

const cardAccents = ["#1e3a5f", "#1a2e1a", "#0d3333"];

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const IconComponent = icons[service.icon as keyof typeof icons] || Zap;

  return (
    <article
      ref={ref}
      className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
      aria-labelledby={`service-${service.id}-title`}
    >
      {/* Header */}
      <div
        className="h-48 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${cardAccents[index % 3]}, #101010)` }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,180,170,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(11,180,170,0.4) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
            <IconComponent size={30} className="text-primary" aria-hidden="true" />
          </div>
          <h2
            id={`service-${service.id}-title`}
            className="text-2xl font-bold text-white"
          >
            {service.title}
          </h2>
        </div>
      </div>

      {/* Body */}
      <div className="p-7">
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
        <ul className="space-y-2.5">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-sm text-gray-700">
              <CheckCircle
                size={16}
                className="text-primary shrink-0 mt-0.5"
                aria-hidden="true"
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
