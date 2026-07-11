"use client";

import { useInView } from "react-intersection-observer";
import { Award, GraduationCap, Briefcase } from "lucide-react";

interface Credential {
  icon: React.ElementType;
  label: string;
  value: string;
}

const credentials: Credential[] = [
  { icon: Award, label: "License", value: "CA PE#M 37036" },
  {
    icon: GraduationCap,
    label: "Education",
    value: "BS & MS Mechanical Engineering — MIT",
  },
  { icon: GraduationCap, label: "Business", value: "MBA — UCLA Anderson School" },
  {
    icon: Briefcase,
    label: "Prior Roles",
    value: "B/E Aerospace · Honeywell International",
  },
];

export default function LeadershipProfile() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Photo column */}
      <div className="flex justify-center lg:justify-start">
        <div className="relative">
          {/* Avatar placeholder */}
          <div
            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #0d2240 0%, #2563a8 100%)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center mb-4">
                <span className="text-4xl font-bold">DK</span>
              </div>
              <p className="text-sm text-white/70">Profile Photo</p>
            </div>
          </div>

          {/* Decorative badge */}
          <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-xl px-5 py-3 shadow-xl">
            <div className="text-xs font-semibold uppercase tracking-wide">Licensed PE</div>
            <div className="text-lg font-bold">CA#M 37036</div>
          </div>
        </div>
      </div>

      {/* Bio column */}
      <div>
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
          Our Leadership
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          David Kang, PE
        </h2>
        <p className="text-primary font-semibold text-lg mb-5">
          President & Chief Executive Officer
        </p>

        <p className="text-gray-600 leading-relaxed mb-5">
          David Kang leads CDI Engineering with extensive experience spanning aerospace
          and industrial sectors. His career includes strategic leadership roles at{" "}
          <strong className="text-gray-800">B/E Aerospace</strong> and{" "}
          <strong className="text-gray-800">Honeywell International</strong>, where he
          managed multi-billion dollar operations and drove significant organizational
          transformations.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          David brings a track record of excellence in strategic planning, design-to-cost
          initiatives, and new business development. Under his leadership, CDI has grown
          to serve clients coast-to-coast and internationally with an unwavering
          commitment to precision and client satisfaction.
        </p>

        {/* Credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {credentials.map((cred) => {
            const IconComponent = cred.icon;
            return (
              <div
                key={cred.value}
                className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <IconComponent size={15} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    {cred.label}
                  </p>
                  <p className="text-sm text-gray-800 font-medium mt-0.5">{cred.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
