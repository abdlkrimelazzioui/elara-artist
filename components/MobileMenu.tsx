"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { artistData } from "../data/artist";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0A0A0A] text-[#F4F2ED] p-6 sm:p-10 lg:hidden overflow-y-auto animate-fadeIn">
      {/* Top Bar with Logo & Close Button */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          KAIROS VOSS
        </Link>
        <button
          onClick={onClose}
          data-cursor="CLOSE"
          className="flex h-10 w-10 items-center justify-center rounded-none border border-white/20 text-white hover:border-white hover:bg-white hover:text-black transition-colors"
          aria-label="Close menu"
        >
          <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="my-auto py-10 flex flex-col space-y-5">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="overflow-hidden">
              <Link
                href={link.href}
                onClick={onClose}
                className="group flex items-baseline justify-between border-b border-white/5 py-3 transition-colors hover:text-white"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono-meta text-xs text-white/30">
                    [0{index + 1}]
                  </span>
                  <span
                    className={`font-display text-3xl sm:text-5xl uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2 ${
                      isActive ? "text-[#F4F2ED] underline underline-offset-8 decoration-1" : "text-white/70"
                    }`}
                  >
                    {link.label}
                  </span>
                </div>
                <span className="font-mono-meta text-xs text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
                  →
                </span>
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Footer Info & Contacts */}
      <div className="border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <span className="font-mono-meta text-[10px] text-white/40 block mb-2">MANAGEMENT & BOOKING</span>
          <p className="font-mono-meta text-xs text-white/80">Aura Sound Arts International</p>
          <a
            href="mailto:elena@aurasoundarts.com"
            className="font-mono-meta text-xs text-white hover:underline mt-1 inline-block"
          >
            elena@aurasoundarts.com
          </a>
        </div>

        <div className="flex flex-wrap gap-4 items-end">
          {artistData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-meta text-xs text-white/60 hover:text-white transition-colors"
            >
              {social.name} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
