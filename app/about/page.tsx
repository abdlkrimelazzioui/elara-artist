import React from "react";
import Link from "next/link";
import { artistData } from "../../data/artist";

export const metadata = {
  title: "Biography & Method — KAIROS VOSS",
  description: "Artistic biography, vocal research methodology, press quotes, and technical specifications of Kairos Voss."
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 md:pb-36 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-meta text-xs text-white/40">[ BIOGRAPHY & METHODOLOGY ]</span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="font-mono-meta text-xs text-amber-200/80">VOCAL RESEARCH</span>
          </div>

          <h1 className="font-display text-[clamp(44px,7vw,110px)] text-[#F4F2ED] uppercase tracking-tight leading-[0.88]">
            BIOGRAPHY &
            <br />
            ACOUSTIC METHOD
          </h1>
        </div>

        {/* Hero Section of About: Big Portrait + Core Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-white/10">
          <div className="lg:col-span-6 space-y-6">
            <div className="editorial-img-container aspect-[4/5] border border-white/15">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop"
                alt="Kairos Voss portrait in studio"
                className="editorial-img"
              />
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono-meta text-[11px] text-white/50">
              <span>PORTRAIT: STUDIO RESO-01, ZURICH</span>
              <span>47.3769° N</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-mono-meta text-xs text-amber-200/80 uppercase">
                Artistic Trajectory
              </span>
              <h2 className="font-display text-2xl sm:text-4xl text-white leading-tight">
                THE VOICE AS AN ORCHESTRAL ORGANISM
              </h2>
              <p className="text-base sm:text-lg text-[#B8B8B8] leading-relaxed">
                {artistData.bioSummary}
              </p>
            </div>

            {/* Manifesto Box */}
            <div className="border border-white/15 bg-white/5 p-6 sm:p-8 space-y-4">
              <span className="font-mono-meta text-xs text-white/50 block">THE FOUR PRINCIPLES</span>
              <ul className="space-y-3 font-mono-meta text-xs text-white/90">
                {artistData.manifesto.map((item, idx) => (
                  <li key={idx} className="leading-relaxed border-b border-white/5 pb-2 last:border-none">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Deep Biographical Chapters */}
        <div className="py-20 border-b border-white/10 space-y-16">
          <div className="max-w-3xl">
            <span className="font-mono-meta text-xs text-white/40 block mb-2">[ CHRONICLES ]</span>
            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase">
              ARTISTIC DEVELOPMENT
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {artistData.fullBio.map((bio, index) => (
              <div key={index} className="border-t border-white/10 pt-6 space-y-4">
                <span className="font-mono-meta text-xs text-amber-200/80 block">
                  {bio.sectionTitle}
                </span>
                <div className="space-y-3">
                  {bio.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm text-[#9E9E9E] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Reception / Press Quotes */}
        <div className="py-20 border-b border-white/10 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono-meta text-xs text-white/40 block mb-2">[ CRITICAL DISCOURSE ]</span>
              <h3 className="font-display text-3xl sm:text-4xl text-white uppercase">
                SELECTED PRESS REVIEWS
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artistData.pressQuotes.map((quote, idx) => (
              <div
                key={idx}
                className="border border-white/15 bg-[#121212] p-6 flex flex-col justify-between space-y-6"
              >
                <p className="font-editorial text-base sm:text-lg text-white/90 leading-snug">
                  “{quote.quote}”
                </p>
                <div className="border-t border-white/10 pt-4 flex items-center justify-between font-mono-meta text-xs">
                  <span className="text-white font-medium">{quote.publication}</span>
                  <span className="text-white/40">{quote.critic}, {quote.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical & Acoustic Apparatus */}
        <div className="py-20 border-b border-white/10 space-y-12">
          <div>
            <span className="font-mono-meta text-xs text-white/40 block mb-2">[ HARDWARE & SPATIAL CORE ]</span>
            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase">
              TECHNICAL SETUP & ACOUSTICS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artistData.technicalSetup.map((setup, idx) => (
              <div key={idx} className="border border-white/10 p-6 space-y-4 bg-white/[0.02]">
                <span className="font-mono-meta text-xs text-amber-200/80 uppercase block">
                  {setup.category}
                </span>
                <ul className="space-y-2 font-mono-meta text-xs text-white/70">
                  {setup.items.map((it, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-2">
                      <span className="text-white/30">―</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/projects"
            data-cursor="WORKS"
            className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 font-mono-meta text-xs font-bold tracking-widest hover:bg-amber-200 transition-colors"
          >
            <span>EXPLORE COMMISSIONED WORKS</span>
            <span className="transition-transform group-hover:translate-x-1.5">→</span>
          </Link>

          <Link
            href="/contact"
            className="font-mono-meta text-xs text-white/60 hover:text-white transition-colors"
          >
            CONTACT BOOKING & MANAGEMENT →
          </Link>
        </div>
      </div>
    </div>
  );
}
