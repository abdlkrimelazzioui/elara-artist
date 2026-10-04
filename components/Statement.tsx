"use client";

import React from "react";

export default function Statement() {
  return (
    <section className="relative py-28 md:py-40 lg:py-48 bg-[#0A0A0A] border-b border-white/10 overflow-hidden">
      {/* Decorative ambient background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="editorial-container relative z-10">
        <div className="max-w-6xl">
          {/* Label Tag */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono-meta text-xs text-white/40 tracking-widest">[ 01 / STATEMENT ]</span>
            <div className="h-[1px] w-16 bg-white/20" />
            <span className="font-mono-meta text-[11px] text-amber-200/70 uppercase">Artistic Philosophy</span>
          </div>

          {/* Huge Editorial Statement */}
          <blockquote className="font-editorial text-[clamp(28px,4.8vw,68px)] font-light leading-[1.08] text-[#F4F2ED] tracking-tight">
            “Sound is not merely something perceived through the ear. It is a{" "}
            <span className="text-white font-medium underline decoration-white/30 decoration-1 underline-offset-8">
              physical matter
            </span>{" "}
            carved into time—an unbroken resonance between human breath and spatial reverberation.”
          </blockquote>

          {/* Supporting Footnote */}
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-white/10">
            <p className="font-mono-meta text-xs text-[#9E9E9E] max-w-lg leading-relaxed">
              Kairos Voss investigates the threshold where biological phonation transcends the lyrical, transforming acoustic space into a tactile instrument.
            </p>

            <div className="flex items-center gap-4">
              <span className="font-mono-meta text-[10px] text-white/40">ORIGIN</span>
              <span className="font-mono-meta text-xs text-white">ACOUSTIC SPATIAL LAB · ZURICH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
