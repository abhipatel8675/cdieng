"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Thermometer, Zap, Droplets, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const icons = {
  thermometer: Thermometer,
  zap: Zap,
  droplets: Droplets,
};

const cardStyles = [
  {
    bg: "linear-gradient(145deg, #0d2a4a 0%, #0a1e38 100%)",
    accent: "#3b82f6",
  },
  {
    bg: "linear-gradient(145deg, #1a1200 0%, #2d1f00 100%)",
    accent: "#f59e0b",
  },
  {
    bg: "linear-gradient(145deg, #062020 0%, #0a2e2a 100%)",
    accent: "#2563a8",
  },
];

export default function ServicesPreview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className="py-20 md:py-28 bg-page-bg"
      aria-labelledby="services-preview-heading"
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto px-[30px]">
        <SectionHeading
          label="What We Do"
          title={
            <span id="services-preview-heading">
              Expert MEP{" "}
              <span className="text-primary">Engineering Services</span>
            </span>
          }
          subtitle="We provide end-to-end mechanical, electrical, and plumbing engineering solutions for commercial, residential, industrial, and specialty projects."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => {
            const IconComponent = icons[service.icon as keyof typeof icons] ?? Zap;
            const style = cardStyles[i % cardStyles.length];
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Card background */}
                <div
                  className="absolute inset-0"
                  style={{ background: style.bg }}
                  aria-hidden="true"
                />

                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: style.accent }}
                  aria-hidden="true"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse at top, ${style.accent}18 0%, transparent 70%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10 p-8 flex flex-col min-h-[340px]">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${style.accent}22`,
                      border: `1px solid ${style.accent}40`,
                    }}
                  >
                    <IconComponent
                      size={26}
                      style={{ color: style.accent }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      style={{ color: style.accent }}
                    >
                      Learn More
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            View All Services
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
