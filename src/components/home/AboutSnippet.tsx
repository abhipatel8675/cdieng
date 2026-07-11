"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, CheckCircle, Building2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const highlights = [
  "Coast-to-coast project delivery",
  "Offices in CA, NJ and Vietnam",
  "3000+ completed projects",
  "Founded 2010 — 15+ years of excellence",
];

const officeChips = [
  { code: "CA", city: "Irvine" },
  { code: "NJ", city: "Edison" },
  { code: "VN", city: "HCMC" },
];

export default function AboutSnippet() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="about-snippet-heading">
      <div className="max-w-[1200px] mx-auto px-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ── Left: text ── */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Who We Are
            </span>
            <h2
              id="about-snippet-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5"
            >
              Premier MEP Design{" "}
              <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{COMPANY_INFO.mission}</p>

            <ul className="space-y-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-gray-700 text-sm">
                  <CheckCircle
                    size={17}
                    className="text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/cdi"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-primary-hover transition-colors shadow-md shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Learn About Us
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-primary font-semibold px-7 py-3.5 rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* ── Right: visual card ── */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-2xl overflow-hidden h-[420px] relative"
                style={{
                  background:
                    "linear-gradient(145deg, #071425 0%, #0a1e2f 40%, #062020 100%)",
                }}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(11,180,170,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,180,170,1) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                  }}
                  aria-hidden="true"
                />

                {/* Teal glow top-right */}
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(11,180,170,0.25) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10 text-center">
                  {/* Logo ring */}
                  <div className="w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center mb-5 shadow-xl shadow-primary/20">
                    <Building2 size={30} className="text-primary" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    Circa Domini International
                  </h3>
                  <p className="text-white/50 text-xs tracking-wide mb-8">
                    Est. {COMPANY_INFO.founded} · Irvine, California
                  </p>

                  {/* Office chips */}
                  <div className="flex gap-4 mb-8">
                    {officeChips.map((o) => (
                      <div
                        key={o.code}
                        className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl px-5 py-3"
                      >
                        <span className="text-xl font-bold text-primary">{o.code}</span>
                        <span className="text-white/50 text-[11px] mt-0.5">{o.city}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tagline */}
                  <p className="text-white/40 text-xs max-w-[220px] leading-relaxed">
                    Delivering innovation-driven MEP engineering across three time zones
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-5 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-primary leading-none">15+</div>
                <div className="text-[11px] text-gray-500 font-semibold mt-1 uppercase tracking-wide">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
