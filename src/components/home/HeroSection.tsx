"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Phone, Play, Pause } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const handleToggleVideo = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      void videoRef.current.play();
    }
    setPlaying((p) => !p);
  };

  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Video background ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay so text is always legible ── */}
      <div className="absolute inset-0 z-0 bg-black/60" aria-hidden="true" />

      {/* ── Teal-tinted gradient over video ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(5,14,26,0.75) 0%, rgba(9,24,41,0.55) 40%, rgba(10,33,51,0.45) 70%, rgba(12,42,32,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,180,170,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,180,170,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div
        className="relative z-10 w-full max-w-[1200px] mx-auto px-[30px] pt-20 pb-24 flex flex-col items-center text-center"
        style={{ animation: "heroSlideUp 0.8s ease-out 0.15s both" }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          MEP Engineering Experts
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-5xl">
          Fast,{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #2563a8 0%, #5b92c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Affordable
          </span>{" "}
          &amp; Reliable
          <br className="hidden sm:block" />{" "}
          <span className="text-white">MEP Experts</span>
        </h1>

        {/* Sub-copy */}
        <p className="text-white/65 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          Circa Domini International Inc. — Irvine, CA-based MEP engineering
          design and consulting. Delivering maximum value coast to coast since{" "}
          <span className="text-white/90 font-medium">{COMPANY_INFO.founded}</span>.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/cdi"
            className="inline-flex items-center gap-2.5 bg-primary text-white font-bold px-9 py-4 rounded-lg hover:bg-primary-hover active:scale-95 transition-all duration-200 text-base shadow-lg shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Learn About Us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-white/10 text-white font-semibold px-9 py-4 rounded-lg border border-white/25 hover:bg-white/20 hover:border-white/50 active:scale-95 transition-all duration-200 text-base backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Contact Us
          </Link>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="hidden md:inline-flex items-center gap-2 text-white/60 hover:text-primary text-sm font-medium transition-colors ml-2"
          >
            <Phone size={14} aria-hidden="true" />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>

      {/* ── Office badges ── */}
      <div
        className="absolute bottom-20 right-6 md:right-10 z-10 hidden lg:flex flex-col gap-2"
        style={{ animation: "heroFadeIn 1s ease-out 0.6s both" }}
        aria-hidden="true"
      >
        {["Irvine, CA", "Edison, NJ", "HCMC, VN"].map((loc) => (
          <div
            key={loc}
            className="bg-white/8 backdrop-blur border border-white/12 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full"
          >
            {loc}
          </div>
        ))}
      </div>

      {/* ── Video play/pause control ── */}
      <button
        onClick={handleToggleVideo}
        className="absolute bottom-7 right-6 md:right-10 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label={playing ? "Pause background video" : "Play background video"}
      >
        {playing ? (
          <Pause size={14} aria-hidden="true" />
        ) : (
          <Play size={14} aria-hidden="true" />
        )}
      </button>

      {/* ── Scroll chevron ── */}
      <a
        href="#stats"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-white/35 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
