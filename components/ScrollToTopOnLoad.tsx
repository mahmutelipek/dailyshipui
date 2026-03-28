"use client";

import { useLayoutEffect } from "react";

/** Refresh / ilk yüklemede tarayıcının scroll restore’unu kapatıp en üste alır. */
export default function ScrollToTopOnLoad() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
  return null;
}
