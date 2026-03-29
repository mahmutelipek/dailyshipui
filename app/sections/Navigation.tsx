"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let raf = 0;
    let attempts = 0;

    const setup = () => {
      const el = document.getElementById("footer-nav-hide");
      if (el) {
        const bottomInset = Math.min(
          Math.round(window.innerHeight * 0.18),
          220
        );
        observer = new IntersectionObserver(
          ([entry]) => setFooterInView(entry.isIntersecting),
          {
            // min(18vh, 220px) — API yalnızca px/% kabul eder; değer JS ile hesaplanır
            rootMargin: `0px 0px -${bottomInset}px 0px`,
            threshold: 0,
          }
        );
        observer.observe(el);
        return;
      }
      if (attempts++ < 30) {
        raf = requestAnimationFrame(setup);
      }
    };

    setup();
    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-[72px] w-full min-w-0 items-center justify-between gap-2 border-b border-black/[0.06] bg-[#F3F3F3] px-3 transition-transform duration-300 ease-out sm:gap-3 sm:px-8 lg:px-16 xl:px-20",
        footerInView && "-translate-y-full pointer-events-none"
      )}
    >
      <Link href="/" className="flex shrink-0 items-center" aria-label="DailyShipUI">
        <Image
          src="/logo.svg"
          alt=""
          width={200}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </Link>

      <div className="flex shrink-0 items-center">
        <Button nativeButton={false} render={<Link href="#footer" />}>
          Start Shipping
        </Button>
      </div>
    </nav>
  );
}
