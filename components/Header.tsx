"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "DE">("EN");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Overview" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/music", label: "Music" },
    { href: "/live", label: "Live" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-5"
            : "bg-transparent py-7 lg:py-9"
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            data-cursor="HOME"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-display text-xl lg:text-2xl font-bold tracking-tight text-[#F4F2ED] transition-transform duration-300 group-hover:translate-x-1">
              KAIROS VOSS
            </span>
            <span className="font-mono-meta text-[10px] text-white/50 tracking-widest -mt-1 hidden sm:block">
              VOCAL ARCHITECTURE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-11">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor="EXPLORE"
                  className={`font-mono-meta text-xs tracking-widest transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-[#F4F2ED] font-semibold"
                      : "text-[#A3A3A3] hover:text-[#F4F2ED]"
                  }`}
                >
                  <span className="hover-underline">{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#F4F2ED]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Utilities: Language & Booking CTA & Hamburger */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Language Switch */}
            <div className="hidden sm:flex items-center gap-1 border-r border-white/15 pr-4">
              <button
                onClick={() => setLang("EN")}
                className={`font-mono-meta text-[11px] px-1 transition-colors ${
                  lang === "EN" ? "text-white font-bold" : "text-white/40 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-white/20 text-xs">/</span>
              <button
                onClick={() => setLang("DE")}
                className={`font-mono-meta text-[11px] px-1 transition-colors ${
                  lang === "DE" ? "text-white font-bold" : "text-white/40 hover:text-white"
                }`}
              >
                DE
              </button>
            </div>

            {/* Quick Live Link */}
            <Link
              href="/live"
              data-cursor="TOUR"
              className="hidden md:flex items-center gap-2 border border-white/20 px-3.5 py-1.5 transition-all duration-300 hover:border-white hover:bg-white hover:text-black group"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono-meta text-[11px] tracking-wider text-inherit">
                TOUR 2026/27
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              data-cursor="MENU"
              className="lg:hidden flex flex-col items-end justify-center w-9 h-9 space-y-1.5 p-1 focus:outline-none"
              aria-label="Open mobile menu"
            >
              <span className="w-7 h-[1.5px] bg-white transition-all duration-300" />
              <span className="w-5 h-[1.5px] bg-white transition-all duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
