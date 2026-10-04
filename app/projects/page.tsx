"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData, Project } from "../../data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["All", "Symphonic", "Vocal Solo", "Spatial Installation", "Chamber Ensemble", "Electroacoustic"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 md:pb-36 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-meta text-xs text-white/40">[ WORKS & COMMISSIONS ]</span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="font-mono-meta text-xs text-amber-200/80">CATALOG 2023–2026</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-display text-[clamp(44px,7vw,110px)] text-[#F4F2ED] uppercase tracking-tight leading-[0.88]">
              PROJECTS &
              <br />
              COMMISSIONS
            </h1>

            <p className="font-mono-meta text-xs text-[#888888] max-w-md leading-relaxed">
              Explore symphonic scores, extended vocal soliloquies, multi-channel brutalist sound installations, and electroacoustic collaborations.
            </p>
          </div>
        </div>

        {/* Filter & View Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-6 mb-16 gap-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 font-mono-meta text-xs tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-white text-black font-bold"
                    : "border border-white/20 text-white/60 hover:border-white/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 border border-white/20 p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1 font-mono-meta text-[11px] ${
                viewMode === "grid" ? "bg-white text-black font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              GRID VIEW
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1 font-mono-meta text-[11px] ${
                viewMode === "list" ? "bg-white text-black font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              LIST VIEW
            </button>
          </div>
        </div>

        {/* Projects View */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.slug} className="group space-y-4">
                <Link
                  href={`/projects/${project.slug}`}
                  data-cursor="VIEW"
                  className="block editorial-img-container aspect-[4/3] border border-white/15"
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="editorial-img"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 font-mono-meta text-[10px] text-white border border-white/10">
                    [{project.number}]
                  </div>
                </Link>

                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono-meta text-xs">
                    <span className="text-amber-200/80">{project.category}</span>
                    <span className="text-white/40">{project.year}</span>
                  </div>

                  <Link href={`/projects/${project.slug}`} className="block">
                    <h3 className="font-display text-xl text-white group-hover:text-amber-100 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#888888] line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-mono-meta text-xs text-white/80 hover:text-white inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                    >
                      <span>DISCOVER PROJECT</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="py-8 group hover:bg-white/[0.02] px-3 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-1">
                    <span className="font-mono-meta text-sm text-white/40">[{project.number}]</span>
                  </div>

                  <div className="md:col-span-6 space-y-1">
                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="font-display text-2xl text-white group-hover:text-amber-100 transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="font-mono-meta text-xs text-white/50">{project.subtitle}</p>
                  </div>

                  <div className="md:col-span-3 space-y-1">
                    <span className="font-mono-meta text-xs text-amber-200/80 block">{project.category}</span>
                    <span className="font-mono-meta text-xs text-white/40 block">{project.location}</span>
                  </div>

                  <div className="md:col-span-2 flex justify-end">
                    <Link
                      href={`/projects/${project.slug}`}
                      data-cursor="VIEW"
                      className="border border-white/20 px-4 py-2 font-mono-meta text-xs text-white hover:border-white hover:bg-white hover:text-black transition-colors"
                    >
                      EXPLORE →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
