"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

import { registerLenis } from "@/lib/scroll-root";

/** Lenis: smooth wheel + touch scroll; smooth #anchor navigation. */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      syncTouch: true,
      lerp: 0.09,
    });
    registerLenis(lenis);

    return () => {
      registerLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
