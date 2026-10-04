"use client";

import React, { useState } from "react";
import { artistData } from "../data/artist";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Concert Booking",
    message: ""
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        category: "Concert Booking",
        message: ""
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-36 lg:py-44 border-b border-white/10 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div>
            <span className="font-mono-meta text-xs text-white/40 block mb-2">[ 07 / INQUIRIES ]</span>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] text-[#F4F2ED] uppercase tracking-tight leading-none">
              COMMISSIONS & BOOKINGS
            </h2>
          </div>
          <span className="font-mono-meta text-xs text-white/40">
            SEASON 2026/2027 ENQUIRIES OPEN
          </span>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Representation & Direct Emails */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-white uppercase mb-4">
                LET'S CREATE RESONANCE
              </h3>
              <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
                For orchestral commissions, solo appearances, site-specific acoustic installations, or masterclasses, reach out directly or contact our global representation offices.
              </p>
            </div>

            {/* Direct Representation Offices */}
            <div className="space-y-6 divide-y divide-white/10 border-t border-b border-white/10 py-6">
              {artistData.representation.map((rep) => (
                <div key={rep.region} className="pt-4 first:pt-0 space-y-1">
                  <span className="font-mono-meta text-[10px] text-amber-200/80 uppercase block">
                    {rep.region}
                  </span>
                  <p className="font-mono-meta text-sm text-white font-medium">{rep.agency}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono-meta text-xs text-white/50">{rep.contactName} ({rep.location})</span>
                    <button
                      onClick={() => handleCopyEmail(rep.email)}
                      className="font-mono-meta text-xs text-white/80 hover:text-white underline hover:no-underline"
                    >
                      {rep.email}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Rider Download */}
            <div className="border border-white/15 bg-white/5 p-4 flex items-center justify-between">
              <div>
                <span className="font-mono-meta text-[10px] text-white/40 block">TECHNICAL SPECIFICATION</span>
                <span className="font-mono-meta text-xs text-white font-medium">Stage & Ambisonic Rider 2026 (PDF)</span>
              </div>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Kairos Voss Technical Stage Rider 2026 downloaded.");
                }}
                className="font-mono-meta text-xs text-amber-300 hover:underline border border-amber-300/30 px-3 py-1.5"
              >
                DOWNLOAD ↓
              </a>
            </div>
          </div>

          {/* Right Column: Clean Editorial Form */}
          <div className="lg:col-span-7 border border-white/15 bg-[#121212] p-8 sm:p-10">
            {status === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400 bg-emerald-950/40 text-emerald-300">
                  ✓
                </div>
                <h4 className="font-display text-2xl text-white">TRANSMISSION RECEIVED</h4>
                <p className="font-mono-meta text-xs text-[#9E9E9E] max-w-md mx-auto">
                  Thank you for reaching out. The management team will review your inquiry and respond within 48 hours.
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
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="font-mono-meta text-[11px] text-white/70 block">
                      YOUR NAME / INSTITUTION *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova / Philharmonie"
                      className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="font-mono-meta text-[11px] text-white/70 block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. elena@concerts.org"
                      className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Inquiry Category */}
                <div className="space-y-2">
                  <label className="font-mono-meta text-[11px] text-white/70 block">
                    NATURE OF INQUIRY
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border border-white/20 bg-black/60 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                  >
                    <option value="Concert Booking">Concert / Festival Performance</option>
                    <option value="Orchestral Commission">Orchestral / Choral Commission</option>
                    <option value="Spatial Installation">Spatial Acoustic Sound Installation</option>
                    <option value="Press & Media">Press, Interview & Media</option>
                    <option value="Masterclass">Masterclass & Extended Vocal Workshop</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="font-mono-meta text-[11px] text-white/70 block">
                    PROJECT DETAILS / DATES / VENUE *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the proposed dates, venue acoustics, ensemble requirements, or commission scope..."
                    className="w-full border border-white/20 bg-black/60 p-4 text-sm text-white focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="font-mono-meta text-xs text-red-400">{errorMessage}</p>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  data-cursor="TRANSMIT"
                  className="group w-full flex items-center justify-between border border-white bg-white text-black px-6 py-4 font-mono-meta text-xs font-bold tracking-widest hover:bg-transparent hover:text-white transition-all duration-300"
                >
                  <span>{status === "submitting" ? "TRANSMITTING..." : "SEND INQUIRY"}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
