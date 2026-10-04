import React from "react";
import Hero from "../components/Hero";
import Statement from "../components/Statement";
import AboutTeaser from "../components/AboutTeaser";
import ProjectsShowcase from "../components/ProjectsShowcase";
import MusicDiscography from "../components/MusicDiscography";
import LiveEvents from "../components/LiveEvents";
import MediaGallery from "../components/MediaGallery";
import QuoteSection from "../components/QuoteSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* 01: 100svh Hero */}
      <Hero />

      {/* 02: Editorial Statement */}
      <Statement />

      {/* 03: About Artist & Methodology Teaser */}
      <AboutTeaser />

      {/* 04: Alternating Projects & Commissions Showcase */}
      <ProjectsShowcase />

      {/* 05: Music Discography & Hover Artwork Player */}
      <MusicDiscography />

      {/* 06: Live Performances & Tour Dates 2026/27 */}
      <LiveEvents />

      {/* 07: Photography & Video Media Gallery with Lightbox */}
      <MediaGallery />

      {/* 08: Philosophical Dictum / Quote */}
      <QuoteSection />

      {/* 09: Contact, Management & Booking Inquiry Form */}
      <ContactSection />
    </div>
  );
}
