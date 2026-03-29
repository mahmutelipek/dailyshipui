"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { scrollToTopImmediate } from "@/lib/scroll-root";

/** Scroll to top on route change and first load; disables browser scroll restoration. */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    scrollToTopImmediate();
  }, [pathname]);

  return null;
}
