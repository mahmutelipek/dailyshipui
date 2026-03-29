"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToTopImmediate } from "@/lib/scroll-root";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
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
            // min(18vh, 220px); IntersectionObserver rootMargin accepts px/% only
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
      <Link
        href="/"
        scroll={false}
        className="flex shrink-0 items-center"
        aria-label="DailyShipUI"
        onClick={(e) => {
          if (pathname !== "/") return;
          e.preventDefault();
          scrollToTopImmediate();
          router.refresh();
        }}
      >
        <Image
          src="/icon.svg"
          alt=""
          width={134}
          height={48}
          className="h-12 w-auto"
          priority
        />
      </Link>

      <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-6 lg:gap-8">
        <Link
          href="#how-it-works"
          className="hidden whitespace-nowrap font-sans text-[11px] font-medium text-[#666666] transition-colors hover:text-[#1A1A1A] sm:inline-block sm:text-[13px]"
        >
          How it works?
        </Link>
        <Link
          href="#faq"
          className="hidden whitespace-nowrap font-sans text-[11px] font-medium text-[#666666] transition-colors hover:text-[#1A1A1A] sm:inline-block sm:text-[13px]"
        >
          FAQ?
        </Link>
        <Button nativeButton={false} render={<Link href="#footer" />}>
          Start shipping
        </Button>
      </div>
    </nav>
  );
}
