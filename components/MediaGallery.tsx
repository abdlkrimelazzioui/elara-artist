"use client";

import React, { useState, useEffect, useCallback } from "react";
import { mediaGallery, MediaItem } from "../data/media";

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Performance", "Portraits", "Backstage & Studio", "Architecture"];

  const filteredMedia = activeCategory === "All"
    ? mediaGallery
    : mediaGallery.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredMedia.length);
    }
  }, [lightboxIndex, filteredMedia.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredMedia.length) % filteredMedia.length);
    }
  }, [lightboxIndex, filteredMedia.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section className="py-24 md:py-36 lg:py-44 border-b border-white/10 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
          <div>
            <span className="font-mono-meta text-xs text-white/40 block mb-2">[ 06 / VISUAL ARCHIVE ]</span>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] text-[#F4F2ED] uppercase tracking-tight leading-none">
              PHOTOGRAPHY & MEDIA
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 font-mono-meta text-[11px] tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-white text-black font-bold"
                    : "border border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {filteredMedia.map((item, idx) => {
            const isWide = item.aspectRatio === "landscape" && idx % 3 === 0;
            const colSpan = isWide ? "sm:col-span-2 lg:col-span-8" : "sm:col-span-1 lg:col-span-4";

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                data-cursor={item.type === "video" ? "PLAY" : "EXPAND"}
                className={`${colSpan} group cursor-pointer space-y-2`}
              >
                <div className="editorial-img-container aspect-[4/3] sm:aspect-[16/11] border border-white/15">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="editorial-img"
                  />

                  {/* Video Badge if video */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-black/80 text-white transition-transform group-hover:scale-110">
                        <svg className="h-4 w-4 fill-current ml-0.5" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 font-mono-meta text-[9px] text-white/70 border border-white/10">
                    {item.location} · {item.year}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono-meta text-xs text-white/90 group-hover:text-amber-200 transition-colors truncate max-w-[240px]">
                    {item.title}
                  </span>
                  <span className="font-mono-meta text-[10px] text-white/40">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Lightbox */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md animate-fadeIn">
            {/* Top Toolbar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white border-b border-white/10 pb-4">
              <span className="font-mono-meta text-xs text-white/50">
                ARCHIVE {lightboxIndex + 1} / {filteredMedia.length} — {filteredMedia[lightboxIndex]?.location}
              </span>
              <button
                onClick={closeLightbox}
                data-cursor="CLOSE"
                className="flex h-10 w-10 items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors"
                aria-label="Close Lightbox"
              >
                ✕
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              data-cursor="PREV"
              className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Previous image"
            >
              ←
            </button>

            {/* Centered Image / Video Container */}
            <div className="max-h-[78vh] max-w-5xl flex flex-col items-center justify-center space-y-4">
              {filteredMedia[lightboxIndex]?.type === "video" ? (
                <div className="aspect-video w-full max-w-4xl border border-white/20 bg-black">
                  <iframe
                    src={filteredMedia[lightboxIndex]?.videoUrl}
                    title={filteredMedia[lightboxIndex]?.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={filteredMedia[lightboxIndex]?.src}
                  alt={filteredMedia[lightboxIndex]?.title}
                  className="max-h-[68vh] w-auto object-contain border border-white/15"
                />
              )}

              <div className="text-center space-y-1">
                <h4 className="font-display text-lg text-white">
                  {filteredMedia[lightboxIndex]?.title}
                </h4>
                <p className="font-mono-meta text-xs text-[#888888] max-w-lg">
                  {filteredMedia[lightboxIndex]?.caption}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              data-cursor="NEXT"
              className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Next image"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
