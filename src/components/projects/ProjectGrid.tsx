"use client";

import { useInView } from "react-intersection-observer";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

const bgGradients = [
  "from-slate-800 to-slate-900",
  "from-teal-900 to-slate-800",
  "from-blue-900 to-slate-900",
  "from-emerald-900 to-teal-900",
  "from-indigo-900 to-slate-900",
  "from-cyan-900 to-slate-800",
];

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Projects"
    >
      {projects.map((project, i) => (
        <article
          key={project.id}
          role="listitem"
          className={`group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${(i % 6) * 70}ms` }}
          aria-labelledby={`project-${project.id}-title`}
        >
          {/* Image placeholder */}
          <div
            className={`h-48 bg-gradient-to-br ${
              bgGradients[i % bgGradients.length]
            } relative overflow-hidden`}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(11,180,170,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(11,180,170,0.4) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <ArrowUpRight size={22} className="text-white/60" aria-hidden="true" />
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3
              id={`project-${project.id}-title`}
              className="font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors"
            >
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
              <MapPin size={12} className="shrink-0" aria-hidden="true" />
              {project.location}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
