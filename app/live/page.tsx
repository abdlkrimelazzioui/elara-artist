"use client";

import React, { useState } from "react";
import Link from "next/link";
import { upcomingEvents, pastEventsArchive, TourEvent } from "../../data/events";

export default function LivePage() {
  const [selectedYear, setSelectedYear] = useState<"ALL" | "2026" | "2027" | "ARCHIVE">("ALL");
  const [activeModalEvent, setActiveModalEvent] = useState<TourEvent | null>(null);

  const filteredEvents = upcomingEvents.filter((evt) => {
    if (selectedYear === "ALL") return true;
    if (selectedYear === "2026") return evt.rawDate.startsWith("2026");
    if (selectedYear === "2027") return evt.rawDate.startsWith("2027");
    return true;
  });

  return (
    <div className="pt-32 pb-24 md:pb-36 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-meta text-xs text-white/40">[ CONCERT SCHEDULE & TOURS ]</span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="font-mono-meta text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SEASON 2026/2027
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-display text-[clamp(44px,7vw,110px)] text-[#F4F2ED] uppercase tracking-tight leading-[0.88]">
              LIVE &
              <br />
              PERFORMANCES
            </h1>

            <p className="font-mono-meta text-xs text-[#888888] max-w-md leading-relaxed">
              Upcoming international orchestral appearances, solo vocal multiphonic recitals, and spatial sound activations worldwide.
            </p>
          </div>
        </div>

        {/* Year Filter Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-6 mb-12">
          {(["ALL", "2026", "2027", "ARCHIVE"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedYear(tab)}
              className={`px-4 py-2 font-mono-meta text-xs tracking-wider transition-all ${
                selectedYear === tab
                  ? "bg-white text-black font-bold"
                  : "border border-white/20 text-white/60 hover:border-white/60 hover:text-white"
              }`}
            >
              {tab === "ARCHIVE" ? "PAST ARCHIVE (2023–2025)" : tab}
            </button>
          ))}
        </div>

        {/* Upcoming Concerts List */}
        {selectedYear !== "ARCHIVE" ? (
          <div className="divide-y divide-white/10 border-t border-b border-white/10 mb-20">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="group py-8 transition-all duration-300 hover:bg-white/[0.03] px-3 sm:px-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-3 space-y-1">
                    <span className="font-display text-3xl text-white group-hover:text-amber-100 transition-colors tracking-tight block">
                      {evt.date}
                    </span>
                    <span className="font-mono-meta text-xs text-white/50 block">
                      {evt.city}, {evt.country}
                    </span>
                  </div>

                  <div className="lg:col-span-6 space-y-1.5">
                    <h3 className="font-editorial text-xl sm:text-2xl text-white font-medium">
                      {evt.eventName}
                    </h3>
                    <p className="font-mono-meta text-xs text-white/70 font-light">{evt.venue}</p>
                    <p className="font-mono-meta text-xs text-[#888888]">{evt.program}</p>
                  </div>

                  <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-4 pt-3 lg:pt-0">
                    <span className="font-mono-meta text-[10px] px-2.5 py-1 border border-white/20 text-white/70">
                      {evt.status}
                    </span>

                    <button
                      onClick={() => setActiveModalEvent(evt)}
                      data-cursor="TICKETS"
                      className="border border-white/30 bg-transparent px-5 py-2 font-mono-meta text-xs text-white hover:border-white hover:bg-white hover:text-black transition-colors"
                    >
                      DETAILS / TICKETS →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Past Performance Archive */
          <div className="space-y-6 mb-20">
            <span className="font-mono-meta text-xs text-white/40 block">[ HISTORICAL PERFORMANCES ]</span>
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {pastEventsArchive.map((past, idx) => (
                <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-2 font-mono-meta text-sm text-amber-200">
                    {past.year}
                  </div>
                  <div className="md:col-span-5 space-y-1">
                    <h4 className="font-display text-lg text-white">{past.event}</h4>
                    <p className="font-mono-meta text-xs text-white/40">{past.venue}, {past.city}</p>
                  </div>
                  <div className="md:col-span-5 font-mono-meta text-xs text-[#888888]">
                    {past.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Promoter Booking Note */}
        <div className="border border-white/15 bg-white/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono-meta text-[10px] text-amber-200/80 uppercase block mb-1">
              CONCERT PROMOTERS & FESTIVALS
            </span>
            <h4 className="font-display text-xl text-white">BOOKING INQUIRIES FOR 2027/2028</h4>
            <p className="font-mono-meta text-xs text-[#888888] mt-1">
              Submit venue dates, orchestra availability, and technical rider inquiries.
            </p>
          </div>

          <Link
            href="/contact"
            data-cursor="BOOKING"
            className="bg-white text-black px-6 py-3 font-mono-meta text-xs font-bold tracking-widest hover:bg-amber-200 transition-colors whitespace-nowrap"
          >
            INQUIRE BOOKING →
          </Link>
        </div>

        {/* Event Detail Modal */}
        {activeModalEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-xl border border-white/20 bg-[#121212] p-8 space-y-6 text-[#F4F2ED]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono-meta text-xs text-amber-200/80 block">
                    PERFORMANCE · {activeModalEvent.date}
                  </span>
                  <h3 className="font-display text-2xl text-white mt-1">
                    {activeModalEvent.city} — {activeModalEvent.venue}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalEvent(null)}
                  data-cursor="CLOSE"
                  className="flex h-8 w-8 items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 font-mono-meta text-xs">
                <div>
                  <span className="text-white/40 block mb-1">PROGRAM</span>
                  <p className="text-sm text-white font-medium">{activeModalEvent.program}</p>
                </div>
                <div>
                  <span className="text-white/40 block mb-1">ADDRESS</span>
                  <p className="text-white/80">{activeModalEvent.calendarDetails.location}</p>
                </div>
                <div>
                  <span className="text-white/40 block mb-1">TICKETING STATUS</span>
                  <p className="text-amber-300">{activeModalEvent.status}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={activeModalEvent.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 text-center bg-white text-black py-3 px-6 font-mono-meta text-xs font-bold hover:bg-amber-200 transition-colors"
                >
                  OFFICIAL TICKET PORTAL ↗
                </a>
                <button
                  onClick={() => setActiveModalEvent(null)}
                  className="w-full sm:w-auto border border-white/30 py-3 px-4 font-mono-meta text-xs text-white hover:bg-white/10 transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
