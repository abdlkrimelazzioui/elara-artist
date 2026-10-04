"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-white/10 bg-[#0A0A0A]">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-white/20 h-full" />
        ))}
      </div>

      <div className="editorial-container relative z-10 my-auto w-full py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Huge Asymmetrical Typography & Manifest */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
            {/* Top Micro-Metadata */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-2.5 py-1 font-mono-meta text-[10px] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE CYCLE: 2026/2027
              </span>
              <span className="font-mono-meta text-[11px] text-white/50 tracking-widest">
                EXTENDED VOCALS · ACOUSTIC SPACE
              </span>
            </div>

            {/* Huge Multi-Line Display Headline */}
            <h1 className="font-display text-[clamp(44px,8vw,115px)] text-[#F4F2ED] leading-[0.88] tracking-tight uppercase">
              <span className="block hover:translate-x-2 transition-transform duration-500">
                VOICE.
              </span>
              <span className="block text-white/80 hover:translate-x-2 transition-transform duration-500">
                RESONANCE.
              </span>
              <span className="block text-white/95 hover:translate-x-2 transition-transform duration-500">
                STRUCTURE.
              </span>
            </h1>

            {/* Short Poetic Description */}
            <p className="max-w-xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#B8B8B8]">
              Sculpting the human vocal tract as a living symphonic instrument—from subterranean subharmonic drones to crystalline microtonal architecture.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                data-cursor="DISCOVER"
                className="group inline-flex items-center justify-between gap-6 border border-white bg-[#F4F2ED] text-[#0A0A0A] px-7 py-4 text-xs font-mono-meta font-bold tracking-widest transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                <span>EXPLORE WORKS</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>

              <Link
                href="/live"
                data-cursor="TOUR"
                className="inline-flex items-center gap-3 border border-white/20 bg-black/40 px-6 py-4 text-xs font-mono-meta tracking-widest text-[#F4F2ED] transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <span>PERFORMANCES</span>
                <span className="text-amber-400 font-mono-meta text-[10px]">[ 08 DATES ]</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Large Editorial Visual & Acoustic Metadata */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="editorial-img-container aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] max-w-md lg:max-w-none mx-auto border border-white/15">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                alt="Kairos Voss — Contemporary Vocalist & Composer"
                className="editorial-img"
              />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-[#0A0A0A]/90 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono-meta text-[9px] text-white/50 block">CURRENT PREMIERE</span>
                    <span className="font-mono-meta text-xs text-white font-medium">Symphony for Human Organ</span>
                  </div>
                  <span className="font-mono-meta text-[10px] text-amber-300 border border-amber-300/30 px-2 py-0.5">
                    TONHALLE ZÜRICH
                  </span>
                </div>
              </div>
            </div>

            {/* Side Coordinates */}
            <div className="hidden xl:flex items-center gap-3 absolute -right-16 top-1/2 -rotate-90 origin-center text-white/30 font-mono-meta text-[10px]">
              <span>47.3769° N, 8.5417° E</span>
              <span>—</span>
              <span>ARCHITECTURAL SOUND RESEARCH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Ticker */}
      <div className="editorial-container relative z-10 w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-mono-meta text-[10px] text-white/40 tracking-wider">
            SCROLL TO ENTER
          </span>
          <div className="h-[1px] w-12 bg-white/20 animate-pulse" />
        </div>

        <div className="flex items-center gap-8 font-mono-meta text-[11px] text-white/60">
          <span>ORCHESTRAL · SOLO · SPATIAL</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">ECM · ACT · SUB ROSA</span>
        </div>
      </div>
    </section>
  );
}
