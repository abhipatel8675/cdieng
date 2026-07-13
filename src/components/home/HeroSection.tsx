"use client";

import { useState, useRef } from "react";
import { ChevronDown, Pause, Play } from "lucide-react";
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
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Video background */}
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

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/55" aria-hidden="true" />

      {/* Main content — left aligned, vertically centered */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1200px] w-full mx-auto px-6 pt-[60px]">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-wide uppercase mb-6">
            {COMPANY_INFO.name.toUpperCase()}
          </h1>
          <hr className="border-white/40 mb-6 w-72" />
          <p className="text-white/75 text-base md:text-lg">
            {COMPANY_INFO.tagline}
          </p>
        </div>
      </div>

      {/* Video control — bottom right */}
      <button
        onClick={handleToggleVideo}
        className="absolute bottom-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label={playing ? "Pause background video" : "Play background video"}
      >
        {playing ? (
          <Pause size={14} aria-hidden="true" />
        ) : (
          <Play size={14} aria-hidden="true" />
        )}
      </button>

      {/* Scroll chevron */}
      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
