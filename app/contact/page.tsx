"use client";

import React, { useState } from "react";
import { artistData } from "../../data/artist";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    category: "Orchestral Commission",
    dateEstimate: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        institution: "",
        category: "Orchestral Commission",
        dateEstimate: "",
        message: ""
      });
    }, 1200);
  };

  return (
    <div className="pt-32 pb-24 md:pb-36 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-meta text-xs text-white/40">[ REPRESENTATION & BOOKING ]</span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="font-mono-meta text-xs text-amber-200/80">DIRECT INQUIRIES</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-display text-[clamp(44px,7vw,110px)] text-[#F4F2ED] uppercase tracking-tight leading-[0.88]">
              CONTACT &
              <br />
              REPRESENTATION
            </h1>

            <p className="font-mono-meta text-xs text-[#888888] max-w-md leading-relaxed">
              Inquiries regarding orchestral commissions, solo vocal recitals, festival bookings, site-specific installations, and press interviews.
            </p>
          </div>
        </div>

        {/* 2-Column Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Representation Agencies & Tech Rider */}
          <div className="lg:col-span-5 space-y-12">
            {/* Global Agencies */}
            <div className="space-y-6">
              <span className="font-mono-meta text-xs text-white/40 block">[ GLOBAL REPRESENTATION ]</span>
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                {artistData.representation.map((rep) => (
                  <div key={rep.region} className="py-5 space-y-1">
                    <span className="font-mono-meta text-[10px] text-amber-200/80 uppercase block">
                      {rep.region}
                    </span>
                    <h3 className="font-display text-lg text-white">{rep.agency}</h3>
                    <p className="font-mono-meta text-xs text-white/60">
                      Representative: {rep.contactName} ({rep.location})
                    </p>
                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => copyToClipboard(rep.email)}
                        className="font-mono-meta text-xs text-white hover:text-amber-200 underline"
                      >
                        {copiedEmail === rep.email ? "✓ COPIED" : rep.email}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Technical Rider Box */}
            <div className="border border-white/15 bg-white/5 p-6 space-y-4">
              <span className="font-mono-meta text-xs text-white/40 block">[ TECHNICAL & STAGE SPECS ]</span>
              <h4 className="font-display text-lg text-white">STAGE RIDER & AMBISONIC CHANNEL MATRIX</h4>
              <p className="font-mono-meta text-xs text-[#888888] leading-relaxed">
                Contains PA specifications, microphone placement for extended vocal techniques, and 16-channel spatialization guidelines.
              </p>
              <button
                onClick={() => alert("Technical Stage Rider 2026 (PDF) downloaded.")}
                className="w-full border border-white/30 py-2.5 font-mono-meta text-xs text-white hover:border-white hover:bg-white hover:text-black transition-colors"
              >
                DOWNLOAD TECHNICAL RIDER 2026 (PDF) ↓
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Inquiry Form */}
          <div className="lg:col-span-7 border border-white/15 bg-[#121212] p-8 sm:p-12">
            <span className="font-mono-meta text-xs text-amber-200/80 block mb-2">[ DIRECT INQUIRY ]</span>
            <h2 className="font-display text-2xl sm:text-3xl text-white uppercase mb-6">
              SUBMIT A PROPOSAL
            </h2>

            {status === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400 bg-emerald-950/40 text-emerald-300">
                  ✓
                </div>
                <h3 className="font-display text-2xl text-white">PROPOSAL TRANSMITTED</h3>
                <p className="font-mono-meta text-xs text-[#9E9E9E] max-w-md mx-auto">
                  Your message has been forwarded to Kairos Voss and our global management desk. We typically review and respond within 48 business hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-mono-meta text-xs text-white underline pt-4 inline-block"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="font-mono-meta text-[11px] text-white/70 block">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Marianne Weber"
                      className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-mono-meta text-[11px] text-white/70 block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. marianne@festival.org"
                      className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Institution */}
                  <div className="space-y-2">
                    <label className="font-mono-meta text-[11px] text-white/70 block">
                      ORGANIZATION / CONCERT HALL / FESTIVAL
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      placeholder="e.g. Lucerne Festival / Tonhalle"
                      className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Projected Date */}
                  <div className="space-y-2">
                    <label className="font-mono-meta text-[11px] text-white/70 block">
                      PROJECTED TIMEFRAME / SEASON
                    </label>
                    <input
                      type="text"
                      value={formData.dateEstimate}
                      onChange={(e) => setFormData({ ...formData, dateEstimate: e.target.value })}
                      placeholder="e.g. Autumn 2027 / Spring 2028"
                      className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Scope */}
                <div className="space-y-2">
                  <label className="font-mono-meta text-[11px] text-white/70 block">
                    PROJECT CATEGORY
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                  >
                    <option value="Orchestral Commission">Symphonic / Orchestral Commission</option>
                    <option value="Solo Recital">Solo Extended Vocal Recital</option>
                    <option value="Spatial Sound Installation">Site-Specific Spatial Installation</option>
                    <option value="Chamber Collaboration">Chamber Ensemble & Guest Soloist</option>
                    <option value="Press & Broadcast">Press / Radio / Video Interview</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="font-mono-meta text-[11px] text-white/70 block">
                    PROJECT PROPOSAL & SPECIFICATIONS *
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline the venue acoustics, orchestral size, desired duration, curation context, or commission terms..."
                    className="w-full border border-white/20 bg-black/60 p-4 text-sm text-white focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="font-mono-meta text-xs text-red-400">Please fill out all required fields.</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  data-cursor="SUBMIT"
                  className="w-full flex items-center justify-between bg-white text-black px-6 py-4 font-mono-meta text-xs font-bold tracking-widest hover:bg-amber-200 transition-colors"
                >
                  <span>{status === "submitting" ? "TRANSMITTING..." : "SUBMIT PROPOSAL"}</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
