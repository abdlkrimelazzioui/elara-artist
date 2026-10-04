"use client";

import React from "react";

export default function QuoteSection() {
  return (
    <section className="py-28 md:py-44 lg:py-52 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden">
      <div className="editorial-container text-center max-w-5xl mx-auto space-y-10">
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="font-mono-meta text-xs text-amber-200/80 uppercase tracking-widest">
            ARTISTIC DICTUM
          </span>
          <div className="h-[1px] w-12 bg-white/20" />
        </div>

        <h2 className="font-display text-[clamp(38px,6.5vw,96px)] text-[#F4F2ED] leading-[0.92] tracking-tight uppercase">
          “THE HUMAN VOCAL TRACT IS NOT MERELY AN INSTRUMENT. IT IS AN UNCHARTED CONTINENT.”
        </h2>

        <div className="pt-4">
          <span className="font-mono-meta text-xs text-white/50 block">
            — KAIROS VOSS · ACOUSTIC MANIFESTO
          </span>
        </div>
      </div>
    </section>
  );
}
