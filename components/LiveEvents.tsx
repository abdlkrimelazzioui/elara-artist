"use client";

import React, { useState } from "react";
import Link from "next/link";
import { upcomingEvents, TourEvent } from "../data/events";

export default function LiveEvents() {
  const [selectedEvent, setSelectedEvent] = useState<TourEvent | null>(null);

  return (
    <section className="py-24 md:py-36 lg:py-44 border-b border-white/10 bg-[#0A0A0A]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono-meta text-xs text-white/40">[ 05 / LIVE CALENDAR ]</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono-meta text-[10px] text-emerald-400">SEASON 2026/2027</span>
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] text-[#F4F2ED] uppercase tracking-tight leading-none">
              PERFORMANCES & TOURS
            </h2>
          </div>
          <Link
            href="/live"
            data-cursor="CALENDAR"
            className="group inline-flex items-center gap-3 font-mono-meta text-xs text-white tracking-widest hover:text-amber-200 transition-colors"
          >
            <span>FULL CALENDAR & ARCHIVE</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </div>

        {/* Editorial Events Table / List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {upcomingEvents.slice(0, 6).map((evt) => {
            const isSoldOut = evt.status === "Sold Out";
            const isFewTickets = evt.status === "Few Tickets Left";

            return (
              <div
                key={evt.id}
                className="group py-7 sm:py-9 transition-all duration-300 hover:bg-white/[0.03] px-2 sm:px-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                  {/* Date & Country */}
                  <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start justify-between">
                    <span className="font-display text-2xl sm:text-3xl text-white group-hover:text-amber-100 transition-colors tracking-tight">
                      {evt.date}
                    </span>
                    <span className="font-mono-meta text-xs text-white/40">
                      {evt.city}, {evt.country}
                    </span>
                  </div>

                  {/* Venue & Event Program */}
                  <div className="md:col-span-6 space-y-1">
                    <h3 className="font-editorial text-lg sm:text-xl text-white font-medium">
                      {evt.eventName}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 font-mono-meta text-xs text-[#888888]">
                      <span className="text-white/80">{evt.venue}</span>
                      <span>·</span>
                      <span className="truncate max-w-md">{evt.program}</span>
                    </div>
                  </div>

                  {/* Status & Ticket CTA */}
                  <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0">
                    <span
                      className={`font-mono-meta text-[10px] px-2.5 py-1 border ${
                        isSoldOut
                          ? "border-red-500/40 text-red-400 bg-red-950/20"
                          : isFewTickets
                          ? "border-amber-400/40 text-amber-300 bg-amber-950/20"
                          : "border-white/20 text-white/70"
                      }`}
                    >
                      {evt.status}
                    </span>

                    <button
                      onClick={() => setSelectedEvent(evt)}
                      data-cursor="DETAILS"
                      className="group/btn inline-flex items-center gap-2 border border-white/30 bg-transparent px-4 py-2 font-mono-meta text-xs text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                    >
                      <span>DETAILS</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Event Details */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-xl border border-white/20 bg-[#121212] p-6 sm:p-8 space-y-6 text-[#F4F2ED]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono-meta text-xs text-amber-200/80 block">
                    CONCERT DETAILS · {selectedEvent.date}
                  </span>
                  <h3 className="font-display text-2xl text-white mt-1">
                    {selectedEvent.city}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  data-cursor="CLOSE"
                  className="flex h-8 w-8 items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="font-mono-meta text-[10px] text-white/40 block">VENUE & LOCATION</span>
                  <p className="text-base text-white font-medium">{selectedEvent.venue}</p>
                  <p className="font-mono-meta text-xs text-[#888888]">{selectedEvent.calendarDetails.location}</p>
                </div>

                <div>
                  <span className="font-mono-meta text-[10px] text-white/40 block">PROGRAM & ENSEMBLE</span>
                  <p className="text-sm text-[#CCCCCC]">{selectedEvent.program}</p>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="font-mono-meta text-xs text-white/60">STATUS: {selectedEvent.status}</span>
                  <span className="font-mono-meta text-xs text-amber-300">DOORS: 19:30 / START: 20:00</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedEvent.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="TICKETS"
                  className="w-full sm:w-auto flex-1 text-center bg-white text-black py-3 px-6 font-mono-meta text-xs font-bold tracking-widest hover:bg-amber-200 transition-colors"
                >
                  OFFICIAL TICKET PORTAL ↗
                </a>
                <button
                  onClick={() => {
                    const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${selectedEvent.calendarDetails.title}\nDESCRIPTION:${selectedEvent.calendarDetails.description}\nLOCATION:${selectedEvent.calendarDetails.location}\nEND:VEVENT\nEND:VCALENDAR`;
                    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", `${selectedEvent.id}.ics`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="w-full sm:w-auto border border-white/30 py-3 px-4 font-mono-meta text-xs text-white hover:border-white hover:bg-white/10 transition-colors"
                >
                  ADD TO CALENDAR (.ICS)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
