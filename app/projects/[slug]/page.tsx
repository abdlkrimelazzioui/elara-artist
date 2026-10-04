import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "../../../data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug
  }));
}

export default async function SingleProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="pt-32 pb-24 md:pb-36 bg-[#0A0A0A]">
      <div className="editorial-container space-y-16 md:space-y-24">
        {/* Back Link & Category Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 gap-4">
          <Link
            href="/projects"
            data-cursor="BACK"
            className="font-mono-meta text-xs text-white/50 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <span>← ALL PROJECTS</span>
          </Link>

          <div className="flex items-center gap-4 font-mono-meta text-xs">
            <span className="text-white/40">[{project.number}]</span>
            <span className="text-amber-200/80">{project.category}</span>
            <span className="text-white/40">YEAR {project.year}</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-6">
          <h1 className="font-display text-[clamp(40px,7vw,100px)] text-[#F4F2ED] uppercase tracking-tight leading-[0.9]">
            {project.title}
          </h1>
          <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-white/80 font-light max-w-4xl">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Full-width Media */}
        <div className="editorial-img-container aspect-[21/10] sm:aspect-[2.2/1] border border-white/15 w-full">
          <img
            src={project.heroImage}
            alt={project.title}
            className="editorial-img"
          />
        </div>

        {/* Project Meta Info Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10 font-mono-meta text-xs">
          <div>
            <span className="text-white/40 block mb-1">DURATION</span>
            <span className="text-white font-medium">{project.duration}</span>
          </div>
          <div>
            <span className="text-white/40 block mb-1">LOCATION / PREMIERE</span>
            <span className="text-white font-medium">{project.location}</span>
          </div>
          <div>
            <span className="text-white/40 block mb-1">DISCIPLINE</span>
            <span className="text-amber-200 font-medium">{project.category}</span>
          </div>
          <div>
            <span className="text-white/40 block mb-1">YEAR COMMISSIONED</span>
            <span className="text-white font-medium">{project.year}</span>
          </div>
        </div>

        {/* Synopsis & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 space-y-6">
            <span className="font-mono-meta text-xs text-white/40 block">[ ARTISTIC CONCEPT ]</span>
            <blockquote className="font-editorial text-2xl text-white italic border-l border-amber-300/40 pl-6">
              “{project.artisticVision}”
            </blockquote>

            {project.pressSnippet && (
              <div className="border border-white/10 bg-white/5 p-4 space-y-2 mt-8">
                <p className="font-editorial text-sm text-[#CCCCCC]">
                  “{project.pressSnippet.quote}”
                </p>
                <span className="font-mono-meta text-[10px] text-white/40 block">
                  — {project.pressSnippet.source}
                </span>
              </div>
            )}
          </div>

          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono-meta text-xs text-white/40 block">[ COMPOSITION SYNOPSIS ]</span>
            <div className="space-y-4">
              {project.synopsis.map((paragraph, idx) => (
                <p key={idx} className="text-base sm:text-lg text-[#B8B8B8] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Audio Preview Box if available */}
        {project.audioPreview && (
          <div className="border border-white/15 bg-[#121212] p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono-meta text-xs text-amber-200/80">
                AUDIO ARCHIVE EXCERPT · 96KHZ MASTER
              </span>
              <span className="font-mono-meta text-[10px] text-white/40">
                TUNING: {project.audioPreview.tuning}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div>
                <h4 className="font-display text-xl text-white">{project.audioPreview.trackTitle}</h4>
                <p className="font-mono-meta text-xs text-white/50">{project.audioPreview.sampleRate}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  data-cursor="LISTEN"
                  onClick={() => alert(`Playing excerpt for: ${project.audioPreview?.trackTitle}`)}
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 font-mono-meta text-xs font-bold hover:bg-amber-200 transition-colors"
                >
                  <span>▶ PLAY EXCERPT</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* High-Resolution Project Gallery */}
        {project.galleryImages.length > 0 && (
          <div className="space-y-8">
            <span className="font-mono-meta text-xs text-white/40 block">[ ARCHITECTURAL DOCUMENTATION ]</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.galleryImages.map((imgUrl, gIdx) => (
                <div key={gIdx} className="editorial-img-container aspect-[16/10] border border-white/15">
                  <img src={imgUrl} alt={`${project.title} gallery ${gIdx + 1}`} className="editorial-img" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Credits & Specifications Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-white/10">
          {/* Credits */}
          <div className="space-y-6">
            <span className="font-mono-meta text-xs text-white/40 block">[ CREDITS & ENSEMBLE ]</span>
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {project.credits.map((credit, idx) => (
                <div key={idx} className="py-3 flex justify-between font-mono-meta text-xs">
                  <span className="text-white/50">{credit.role}</span>
                  <span className="text-white font-medium">{credit.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-6">
            <span className="font-mono-meta text-xs text-white/40 block">[ SPECIFICATIONS & SCORES ]</span>
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {project.specifications.map((spec, idx) => (
                <div key={idx} className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1 font-mono-meta text-xs">
                  <span className="text-white/50">{spec.label}</span>
                  <span className="text-white sm:text-right max-w-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Previous / Next Project Navigation Bar */}
        <div className="pt-16 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link
            href={`/projects/${prevProject.slug}`}
            data-cursor="PREV"
            className="group border border-white/15 p-6 hover:bg-white/[0.02] transition-colors space-y-2 block"
          >
            <span className="font-mono-meta text-[10px] text-white/40 block">← PREVIOUS WORK</span>
            <h4 className="font-display text-xl text-white group-hover:text-amber-200 transition-colors">
              {prevProject.title}
            </h4>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            data-cursor="NEXT"
            className="group border border-white/15 p-6 hover:bg-white/[0.02] transition-colors space-y-2 block text-left sm:text-right"
          >
            <span className="font-mono-meta text-[10px] text-white/40 block">NEXT WORK →</span>
            <h4 className="font-display text-xl text-white group-hover:text-amber-200 transition-colors">
              {nextProject.title}
            </h4>
          </Link>
        </div>
      </div>
    </article>
  );
}
