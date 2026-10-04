"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "../data/projects";

export default function ProjectsShowcase() {
  const featured = projectsData.slice(0, 4);

  return (
    <section className="py-24 md:py-36 lg:py-44 border-b border-white/10 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-8 mb-20 gap-6">
          <div>
            <span className="font-mono-meta text-xs text-white/40 block mb-2">[ 03 / WORKS & COMMISSIONS ]</span>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] text-[#F4F2ED] uppercase tracking-tight leading-none">
              SELECTED PROJECTS
            </h2>
          </div>
          <Link
            href="/projects"
            data-cursor="ALL WORKS"
            className="group inline-flex items-center gap-3 font-mono-meta text-xs text-white tracking-widest hover:text-amber-200 transition-colors"
          >
            <span>VIEW ALL ({projectsData.length})</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </div>

        {/* Editorial Alternating Layouts */}
        <div className="space-y-28 md:space-y-40">
          {featured.map((project, index) => {
            // Project 01: Large Image Left / Text Right
            if (project.featuredLayout === "left-image") {
              return (
                <div
                  key={project.slug}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group"
                >
                  <div className="lg:col-span-7">
                    <Link
                      href={`/projects/${project.slug}`}
                      data-cursor="VIEW"
                      className="block editorial-img-container aspect-[16/10] border border-white/15"
                    >
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="editorial-img"
                      />
                    </Link>
                  </div>

                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-mono-meta text-xs text-white/40">[{project.number}]</span>
                      <span className="font-mono-meta text-xs text-amber-200/80">{project.category}</span>
                      <span className="font-mono-meta text-xs text-white/40">{project.year}</span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="block">
                      <h3 className="font-display text-2xl sm:text-4xl text-white group-hover:text-amber-100 transition-colors leading-[0.95]">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        data-cursor="EXPLORE"
                        className="group/link inline-flex items-center gap-3 font-mono-meta text-xs text-white tracking-widest uppercase font-bold"
                      >
                        <span className="hover-underline">VIEW PROJECT ARCHIVE</span>
                        <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            // Project 02: Text Left / Large Image Right
            if (project.featuredLayout === "right-image") {
              return (
                <div
                  key={project.slug}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group"
                >
                  <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-mono-meta text-xs text-white/40">[{project.number}]</span>
                      <span className="font-mono-meta text-xs text-amber-200/80">{project.category}</span>
                      <span className="font-mono-meta text-xs text-white/40">{project.year}</span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="block">
                      <h3 className="font-display text-2xl sm:text-4xl text-white group-hover:text-amber-100 transition-colors leading-[0.95]">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        data-cursor="EXPLORE"
                        className="group/link inline-flex items-center gap-3 font-mono-meta text-xs text-white tracking-widest uppercase font-bold"
                      >
                        <span className="hover-underline">VIEW PROJECT ARCHIVE</span>
                        <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      data-cursor="VIEW"
                      className="block editorial-img-container aspect-[16/10] border border-white/15"
                    >
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="editorial-img"
                      />
                    </Link>
                  </div>
                </div>
              );
            }

            // Project 03: Full-Width Panoramic Feature
            if (project.featuredLayout === "full-width") {
              return (
                <div key={project.slug} className="space-y-8 group">
                  <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-4 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono-meta text-xs text-white/40">[{project.number}]</span>
                        <span className="font-mono-meta text-xs text-amber-200/80">{project.category}</span>
                        <span className="font-mono-meta text-xs text-white/40">{project.year}</span>
                      </div>
                      <Link href={`/projects/${project.slug}`} className="block">
                        <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl text-white group-hover:text-amber-100 transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      data-cursor="EXPLORE"
                      className="group/btn inline-flex items-center gap-3 font-mono-meta text-xs text-white tracking-widest uppercase"
                    >
                      <span className="hover-underline">EXPLORE INSTALLATION</span>
                      <span>→</span>
                    </Link>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    data-cursor="VIEW"
                    className="block editorial-img-container aspect-[21/9] sm:aspect-[2.4/1] border border-white/15"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="editorial-img"
                    />
                  </Link>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                    <div className="md:col-span-8">
                      <p className="text-base text-[#A3A3A3] leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>
                    <div className="md:col-span-4 flex md:justify-end items-center">
                      <span className="font-mono-meta text-xs text-white/50">{project.location}</span>
                    </div>
                  </div>
                </div>
              );
            }

            // Project 04: Asymmetric Grid
            return (
              <div
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group"
              >
                <div className="lg:col-span-6">
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
                  </Link>
                </div>

                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono-meta text-xs text-white/40">[{project.number}]</span>
                    <span className="font-mono-meta text-xs text-amber-200/80">{project.category}</span>
                    <span className="font-mono-meta text-xs text-white/40">{project.year}</span>
                  </div>

                  <Link href={`/projects/${project.slug}`} className="block">
                    <h3 className="font-display text-2xl sm:text-4xl text-white group-hover:text-amber-100 transition-colors leading-[0.95]">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-sm sm:text-base text-[#9E9E9E] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      data-cursor="EXPLORE"
                      className="group/link inline-flex items-center gap-3 font-mono-meta text-xs text-white tracking-widest uppercase font-bold"
                    >
                      <span className="hover-underline">VIEW PROJECT ARCHIVE</span>
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
