"use client";

import React from "react";
import Link from "next/link";
import { artistData } from "../data/artist";

export default function AboutTeaser() {
  return (
    <section className="py-24 md:py-36 lg:py-44 border-b border-white/10 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Section Header Indicator */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
          <div className="flex items-center gap-4">
            <span className="font-mono-meta text-xs text-white/40">[ 02 / BIOGRAPHY ]</span>
            <span className="font-mono-meta text-xs text-white/80">THE ARTIST & METHOD</span>
          </div>
          <span className="font-mono-meta text-xs text-white/40 hidden sm:inline">
            ZURICH · BERLIN · WORLDWIDE
          </span>
        </div>

        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Artistic Portrait & Live Performance Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="editorial-img-container aspect-[4/5] border border-white/15">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
                alt="Kairos Voss in acoustic performance"
                className="editorial-img"
              />
            </div>

            {/* Micro Caption */}
            <div className="flex items-start justify-between border-t border-white/10 pt-4">
              <span className="font-mono-meta text-[10px] text-white/40">FIG. 01 — VOCAL PHONATION STUDY</span>
              <span className="font-mono-meta text-[10px] text-white/60">LUCERNE FESTIVAL</span>
            </div>
          </div>

          {/* Right Column: Heading, Bio, Accolades & Link */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="font-display text-[clamp(36px,5vw,72px)] text-[#F4F2ED] leading-[0.92] tracking-tight uppercase mb-8">
                EXPANDING THE ARCHITECTURE OF THE HUMAN VOCAL TRACT
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-[#B8B8B8] leading-relaxed mb-6 font-light">
                {artistData.bioSummary}
              </p>

              <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
                Trained in Renaissance choral polyphony before immersing in IRCAM electroacoustics, Voss dismantles the traditional paradigm of the singer as mere melodic narrator, forging a new acoustic idiom where multiphonics, subharmonic chant, and physical resonance coexist.
              </p>
            </div>

            {/* Accolades / Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-white/10">
              {artistData.accolades.map((acc, index) => (
                <div key={index} className="space-y-1">
                  <span className="font-display text-3xl sm:text-4xl text-white font-bold block">
                    {acc.number}
                  </span>
                  <span className="font-mono-meta text-[11px] text-white/90 block leading-tight font-semibold">
                    {acc.label}
                  </span>
                  <span className="font-mono-meta text-[9px] text-white/40 block leading-tight">
                    {acc.context}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link
                href="/about"
                data-cursor="BIOGRAPHY"
                className="group inline-flex items-center gap-4 text-sm font-mono-meta text-white font-bold tracking-widest hover:text-amber-300 transition-colors"
              >
                <span className="hover-underline">READ FULL BIOGRAPHY & METHOD</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>

              <a
                href="/contact"
                className="font-mono-meta text-xs text-white/50 hover:text-white transition-colors"
              >
                REQUEST PRESS KIT & RIDER ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
