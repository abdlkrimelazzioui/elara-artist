"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device is touch-enabled
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check for elements with data-cursor attribute
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
        if (cursorEl) {
          const text = cursorEl.getAttribute("data-cursor") || "";
          setCursorText(text);
          setIsHovered(true);
        } else {
          // Check standard interactive elements
          const isInteractive = target.closest("a, button, input, textarea, [role='button'], .cursor-hover");
          if (isInteractive) {
            setCursorText("");
            setIsHovered(true);
          } else {
            setCursorText("");
            setIsHovered(false);
          }
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp for outer ring
  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId: number;

    const followMouse = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18
        };
      });
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden transition-opacity duration-300">
      {/* Small Precision Dot */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? "4px" : "6px",
          height: isHovered ? "4px" : "6px",
          mixBlendMode: "difference"
        }}
      />

      {/* Trailing Responsive Circle */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-white/60 transition-all duration-200 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: cursorText ? "80px" : isHovered ? "48px" : "28px",
          height: cursorText ? "80px" : isHovered ? "48px" : "28px",
          backgroundColor: cursorText ? "rgba(244, 242, 237, 0.95)" : isHovered ? "rgba(255, 255, 255, 0.12)" : "transparent",
          backdropFilter: cursorText ? "blur(4px)" : "none",
          transform: "translate(-50%, -50%)",
          color: cursorText ? "#0A0A0A" : "#FFFFFF"
        }}
      >
        {cursorText && (
          <span className="font-mono-meta text-[10px] font-bold tracking-widest text-black">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
