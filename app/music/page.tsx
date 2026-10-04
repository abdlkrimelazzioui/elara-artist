"use client";

import React, { useState } from "react";
import { releasesData, Release, Track } from "../../data/releases";

export default function MusicPage() {
  const [selectedRelease, setSelectedRelease] = useState<Release>(releasesData[0]);
  const [activePlayingTrack, setActivePlayingTrack] = useState<{ releaseId: string; track: Track } | null>(null);

  const handleTrackClick = (release: Release, track: Track) => {
    setSelectedRelease(release);
    setActivePlayingTrack({ releaseId: release.catalogNumber, track });
  };

  return (
    <div className="pt-32 pb-24 md:pb-36 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Header */}
        <div className="border-b border-white/10 pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-meta text-xs text-white/40">[ DISCOGRAPHY & SOUND WORKS ]</span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="font-mono-meta text-xs text-amber-200/80">VINYL · HI-RES · SCORES</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-display text-[clamp(44px,7vw,110px)] text-[#F4F2ED] uppercase tracking-tight leading-[0.88]">
              DISCOGRAPHY &
              <br />
              AUDIO EDITIONS
            </h1>

            <p className="font-mono-meta text-xs text-[#888888] max-w-md leading-relaxed">
              Official releases across ECM Records, Sub Rosa, and ACT Music. Available on audiophile 180g vinyl, 96kHz master downloads, and streaming.
            </p>
          </div>
        </div>

        {/* Selected Featured Release Hero */}
        <div className="border border-white/15 bg-[#121212] p-8 sm:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Album Cover */}
            <div className="lg:col-span-5">
              <div className="editorial-img-container aspect-square border border-white/15">
                <img
                  src={selectedRelease.coverImage}
                  alt={selectedRelease.title}
                  className="editorial-img"
                />
              </div>
            </div>

            {/* Release Info & Track Player */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono-meta text-xs">
                <span className="text-amber-200/80">{selectedRelease.type}</span>
                <span className="text-white/40">CAT: {selectedRelease.catalogNumber} · {selectedRelease.year}</span>
              </div>

              <div className="space-y-2">
                <h2 className="font-display text-3xl sm:text-4xl text-white">
                  {selectedRelease.title}
                </h2>
                <p className="font-mono-meta text-xs text-[#888888]">
                  {selectedRelease.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                {selectedRelease.description}
              </p>

              {/* Complete Tracklist */}
              <div className="border-t border-b border-white/10 py-4 space-y-2">
                <span className="font-mono-meta text-[10px] text-white/40 block mb-2">COMPLETE TRACKS</span>
                {selectedRelease.tracks.map((track) => {
                  const isThisPlaying = activePlayingTrack?.track.title === track.title;
                  return (
                    <div
                      key={track.number}
                      onClick={() => handleTrackClick(selectedRelease, track)}
                      data-cursor={isThisPlaying ? "PAUSE" : "PLAY"}
                      className={`flex items-center justify-between p-2.5 font-mono-meta text-xs cursor-pointer transition-colors ${
                        isThisPlaying
                          ? "bg-amber-300/10 text-amber-200 border border-amber-300/30"
                          : "hover:bg-white/5 text-white/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-white/40">{track.number}</span>
                        <span className="font-medium">{track.title}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-white/40">{track.duration}</span>
                        <span className="text-xs">{isThisPlaying ? "⏸" : "▶"}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Purchase / Stream Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={selectedRelease.streamingUrls.vinyl || "https://bandcamp.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="ORDER"
                  className="bg-white text-black px-6 py-3 font-mono-meta text-xs font-bold tracking-widest hover:bg-amber-200 transition-colors"
                >
                  ORDER 180G VINYL LP ↗
                </a>
                <a
                  href={selectedRelease.streamingUrls.spotify || "https://spotify.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 px-5 py-3 font-mono-meta text-xs text-white hover:border-white hover:bg-white/5 transition-colors"
                >
                  SPOTIFY ↗
                </a>
                <a
                  href={selectedRelease.streamingUrls.apple || "https://apple.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 px-5 py-3 font-mono-meta text-xs text-white hover:border-white hover:bg-white/5 transition-colors"
                >
                  APPLE MUSIC ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Catalog Grid of All Releases */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-mono-meta text-xs text-white/40">[ COMPLETE DISCOGRAPHY ARCHIVE ]</span>
            <span className="font-mono-meta text-xs text-white/40">{releasesData.length} EDITIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {releasesData.map((rel) => (
              <div
                key={rel.catalogNumber}
                onClick={() => setSelectedRelease(rel)}
                data-cursor="SELECT"
                className="border border-white/15 bg-[#121212] p-6 space-y-4 cursor-pointer hover:border-white/50 transition-colors group"
              >
                <div className="editorial-img-container aspect-square border border-white/10">
                  <img src={rel.coverImage} alt={rel.title} className="editorial-img" />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 font-mono-meta text-[9px] text-white/80">
                    {rel.year}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono-meta text-[10px] text-amber-200/80 uppercase block">
                    {rel.type} · {rel.label}
                  </span>
                  <h3 className="font-display text-xl text-white group-hover:text-amber-100 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="font-mono-meta text-[11px] text-[#888888] line-clamp-2">
                    {rel.subtitle}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-3 flex items-center justify-between font-mono-meta text-[11px]">
                  <span className="text-white/40">CAT: {rel.catalogNumber}</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform">SELECT RELEASE →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
