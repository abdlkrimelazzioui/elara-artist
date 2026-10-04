"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { artistData } from "../data/artist";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [zurichTime, setZurichTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("de-CH", {
        timeZone: "Europe/Zurich",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      setZurichTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] text-[#F4F2ED] border-t border-white/10 pt-20 pb-12">
      <div className="editorial-container">
        {/* Top Big Monogram & Back-to-top */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-16 gap-8">
          <div>
            <span className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white block">
              KAIROS VOSS
            </span>
            <span className="font-mono-meta text-xs text-white/50 tracking-widest mt-2 block">
              CONTEMPORARY VOCALIST · COMPOSER · SOUND ARCHITECT
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Zurich Local Time */}
            <div className="border border-white/15 px-4 py-2 bg-white/5">
              <span className="font-mono-meta text-[10px] text-white/40 block">STUDIO ZURICH TIME</span>
              <span className="font-mono-meta text-xs text-white font-bold">{zurichTime || "12:00:00 CET"}</span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              data-cursor="TOP"
              className="flex items-center gap-2 border border-white/20 px-4 py-2.5 font-mono-meta text-xs text-white hover:border-white hover:bg-white hover:text-black transition-colors"
            >
              <span>BACK TO TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        {/* Middle Navigation & Social Columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 py-14 border-b border-white/10">
          {/* Main Navigation */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono-meta text-[10px] text-white/40 block">EXPLORE</span>
            <ul className="space-y-2.5 font-mono-meta text-xs">
              <li>
                <Link href="/" className="text-white/80 hover:text-white hover-underline">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white hover-underline">
                  Biography & Method
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/80 hover:text-white hover-underline">
                  Works & Commissions
                </Link>
              </li>
              <li>
                <Link href="/music" className="text-white/80 hover:text-white hover-underline">
                  Discography & Audio
                </Link>
              </li>
              <li>
                <Link href="/live" className="text-white/80 hover:text-white hover-underline">
                  Live Performances
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white hover-underline">
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Platforms */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono-meta text-[10px] text-white/40 block">STREAMING & NETWORKS</span>
            <ul className="space-y-2.5 font-mono-meta text-xs">
              {artistData.socials.map((soc) => (
                <li key={soc.name}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white hover-underline inline-flex items-center gap-1"
                  >
                    <span>{soc.name}</span>
                    <span className="text-[9px] text-white/40">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Representation Brief */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <span className="font-mono-meta text-[10px] text-white/40 block">REPRESENTATION</span>
            <p className="font-mono-meta text-xs text-white/80 leading-relaxed">
              Aura Sound Arts International (Europe & Worldwide)
              <br />
              <a href="mailto:elena@aurasoundarts.com" className="text-amber-200/80 hover:underline">
                elena@aurasoundarts.com
              </a>
            </p>
            <p className="font-mono-meta text-xs text-white/80 leading-relaxed pt-2">
              Resonance Artists Guild (Americas & Asia)
              <br />
              <a href="mailto:marcus@resonanceguild.org" className="text-amber-200/80 hover:underline">
                marcus@resonanceguild.org
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-meta text-[11px] text-white/40">
          <div>
            © {currentYear} KAIROS VOSS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white">
              IMPRINT
            </Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white">
              PRIVACY POLICY
            </Link>
            <span>/</span>
            <span>DESIGN & ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
