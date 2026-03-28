"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const [footerInView, setFooterInView] = useState(false);

  const onLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
    <>
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-[72px] w-full min-w-0 items-center justify-between gap-2 border-b border-black/[0.06] bg-[#F3F3F3] px-3 transition-transform duration-300 ease-out sm:gap-3 sm:px-8 lg:px-16 xl:px-20",
        footerInView && "-translate-y-full pointer-events-none"
      )}
    >
      <Link
        href="/"
        onClick={onLogoClick}
        className="hidden shrink-0 items-center sm:flex"
        aria-label="DailyShipUI"
      >
        <Image
          src="/logo.svg"
          alt=""
          width={200}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </Link>

      <div className="ml-auto flex min-w-0 shrink-0 items-center gap-2 sm:ml-0 sm:gap-6 lg:gap-8">
        <Link
          href="#how-it-works"
          className="hidden whitespace-nowrap font-sans text-[11px] font-medium text-[#666666] transition-colors hover:text-[#1A1A1A] sm:inline-block sm:text-[13px]"
        >
          Nasıl Çalışır?
        </Link>
        <Button nativeButton={false} render={<Link href="#footer" />}>
          Start Shipping
        </Button>
      </div>
    </nav>

      {/* Mobil: logo altta sabit (üst nav’da logo yok); footer görünürken üst bar gibi gizlenir */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 flex items-end justify-center border-t border-black/[0.06] bg-[#F3F3F3] px-3 pt-0 pb-[max(4px,env(safe-area-inset-bottom,0px))] transition-transform duration-300 ease-out sm:hidden",
          footerInView && "translate-y-full pointer-events-none"
        )}
      >
        <Link
          href="/"
          onClick={onLogoClick}
          className="flex translate-y-0.5 items-end leading-none"
          aria-label="DailyShipUI"
        >
          <Image
            src="/logo.svg"
            alt=""
            width={200}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
      </div>
    </>
  );
}
