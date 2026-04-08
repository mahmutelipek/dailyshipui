"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { scrollToTopImmediate } from "@/lib/scroll-root";

/** Scroll to top on route change and first load; disables browser scroll restoration. */
export default function ScrollToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToTopImmediate();
  }, [pathname]);

  return null;
}
