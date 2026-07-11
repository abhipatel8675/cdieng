import { type ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={`${alignClass} ${className}`}>
      {label && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
