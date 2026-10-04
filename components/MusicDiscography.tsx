"use client";

import React, { useState } from "react";
import Link from "next/link";
import { releasesData, Release, Track } from "../data/releases";

export default function MusicDiscography() {
  const [hoveredRelease, setHoveredRelease] = useState<Release | null>(releasesData[0]);
  const [activeTrack, setActiveTrack] = useState<{ release: Release; track: Track } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  const handlePlayTrack = (release: Release, track: Track) => {
    if (activeTrack?.track.title === track.title && isPlaying) {
      setIsPlaying(false);
    } else {
      setActiveTrack({ release, track });
      setIsPlaying(true);
      setProgress(15);
    }
  };

  return (
    <section className="py-24 md:py-36 lg:py-44 border-b border-white/10 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div>
            <span className="font-mono-meta text-xs text-white/40 block mb-2">[ 04 / DISCOGRAPHY ]</span>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] text-[#F4F2ED] uppercase tracking-tight leading-none">
              RELEASES & RECORDINGS
            </h2>
          </div>
          <Link
            href="/music"
            data-cursor="ALL MUSIC"
            className="group inline-flex items-center gap-3 font-mono-meta text-xs text-white tracking-widest hover:text-amber-200 transition-colors"
          >
            <span>FULL CATALOG ({releasesData.length})</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </div>

        {/* 2-Column Discography: Left List, Right Dynamic Hover Preview & Player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Release List */}
          <div className="lg:col-span-7 divide-y divide-white/10">
            {releasesData.map((release) => {
              const isSelected = hoveredRelease?.catalogNumber === release.catalogNumber;
              const isCurrentlyPlayingThis = activeTrack?.release.catalogNumber === release.catalogNumber && isPlaying;

              return (
                <div
                  key={release.catalogNumber}
                  onMouseEnter={() => setHoveredRelease(release)}
                  className={`py-6 transition-all duration-300 group ${
                    isSelected ? "bg-white/[0.02] pl-3" : "pl-0"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono-meta text-xs text-white/40">[{release.number}]</span>
                      <h3 className="font-display text-xl sm:text-2xl text-white group-hover:text-amber-100 transition-colors">
                        {release.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono-meta text-xs text-amber-200/70">{release.type}</span>
                      <span className="font-mono-meta text-xs text-white/40">{release.year}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <span className="font-mono-meta text-[11px] text-[#888888]">
                      {release.role} · {release.label}
                    </span>

                    {/* Quick Preview Button */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handlePlayTrack(release, release.tracks[0])}
                        data-cursor={isCurrentlyPlayingThis ? "PAUSE" : "LISTEN"}
                        className={`inline-flex items-center gap-2 border px-3 py-1 font-mono-meta text-[10px] tracking-wider transition-colors ${
                          isCurrentlyPlayingThis
                            ? "border-amber-300 bg-amber-300/10 text-amber-200"
                            : "border-white/20 text-white/80 hover:border-white hover:text-white"
                        }`}
                      >
                        <span>{isCurrentlyPlayingThis ? "⏸ PAUSE" : "▶ PREVIEW"}</span>
                        <span className="text-white/40">({release.tracks[0]?.duration})</span>
                      </button>

                      <Link
                        href="/music"
                        className="font-mono-meta text-[10px] text-white/40 hover:text-white transition-colors"
                      >
                        DETAILS ↗
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Artwork Preview & Sticky Audio Player */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            {hoveredRelease && (
              <div className="border border-white/15 bg-[#121212] p-6 space-y-6 transition-all duration-500">
                <div className="relative aspect-square w-full overflow-hidden border border-white/10 bg-black">
                  <img
                    src={hoveredRelease.coverImage}
                    alt={hoveredRelease.title}
                    className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 font-mono-meta text-[10px] text-white border border-white/20">
                    CAT. {hoveredRelease.catalogNumber}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-meta text-[10px] text-amber-200/80 uppercase">
                      {hoveredRelease.type}
                    </span>
                    <span className="font-mono-meta text-[10px] text-white/40">
                      RELEASE: {hoveredRelease.year}
                    </span>
                  </div>

                  <h4 className="font-display text-xl text-white">
                    {hoveredRelease.title}
                  </h4>

                  <p className="text-xs text-[#9E9E9E] leading-relaxed">
                    {hoveredRelease.description}
                  </p>
                </div>

                {/* Minimal Track List */}
                <div className="border-t border-white/10 pt-4 space-y-2">
                  <span className="font-mono-meta text-[10px] text-white/40 block mb-2">TRACKLIST EXCERPT</span>
                  {hoveredRelease.tracks.slice(0, 3).map((tr) => (
                    <div
                      key={tr.number}
                      onClick={() => handlePlayTrack(hoveredRelease, tr)}
                      className="flex items-center justify-between py-1 px-2 hover:bg-white/5 cursor-pointer font-mono-meta text-xs transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-white/40">{tr.number}</span>
                        <span className="text-white/90 hover:text-amber-200">{tr.title}</span>
                      </div>
                      <span className="text-white/40">{tr.duration}</span>
                    </div>
                  ))}
                </div>

                {/* Inline Minimal Player Status */}
                {activeTrack && (
                  <div className="border border-amber-300/30 bg-amber-300/[0.03] p-3 space-y-2">
                    <div className="flex items-center justify-between font-mono-meta text-[11px]">
                      <span className="text-amber-200 truncate max-w-[200px]">
                        ▶ {activeTrack.track.title}
                      </span>
                      <span className="text-white/60">{activeTrack.track.duration}</span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full bg-white/10 h-1 relative overflow-hidden">
                      <div
                        className="bg-amber-300 h-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
