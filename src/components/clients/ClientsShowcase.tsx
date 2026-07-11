"use client";

import { useInView } from "react-intersection-observer";
import { CLIENT_NAMES } from "@/lib/constants";

export default function ClientsShowcase() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      role="list"
      aria-label="Our clients"
    >
      {CLIENT_NAMES.map((name, i) => (
        <div
          key={name}
          role="listitem"
          className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-center justify-center text-center min-h-[80px] hover:border-primary/30 hover:shadow-md transition-all duration-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${(i % 8) * 60}ms` }}
          aria-label={name}
        >
          <span className="text-sm font-semibold text-gray-600 leading-tight">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
