import type Lenis from "lenis";

let lenisRef: Lenis | null = null;

export function registerLenis(instance: Lenis | null) {
  lenisRef = instance;
}

/** Scroll to top immediately via Lenis when available, else native window scroll. */
export function scrollToTopImmediate() {
  if (typeof window === "undefined") return;
  lenisRef?.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
