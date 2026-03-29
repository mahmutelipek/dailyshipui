"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { scrollToTopImmediate } from "@/lib/scroll-root";

/** Route değişince ve ilk yüklemede scroll’u en üste alır; tarayıcı scroll restore’u kapatır. */
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
