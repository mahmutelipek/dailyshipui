import type { ReactNode } from "react";
import Link from "next/link";

import Footer from "@/app/sections/Footer";
import Navigation from "@/app/sections/Navigation";

export default function LegalPageShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#F3F3F3] pt-[72px]">
      <Navigation />
      <article className="mx-auto w-full min-w-0 max-w-3xl px-3 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 md:px-10 md:pt-12 lg:px-16 xl:px-20">
        <p className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center font-sans text-[12px] font-medium text-[rgba(26,26,26,0.5)] transition-colors hover:text-[#1A1A1A] sm:min-h-0 sm:text-[13px]"
          >
            ← Back to home
          </Link>
        </p>
        <h1 className="mb-8 text-balance font-serif text-[clamp(1.875rem,6.5vw+0.5rem,3rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[#1A1A1A] sm:mb-10 sm:text-5xl sm:leading-[1.05]">
          {title}
        </h1>
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-11">{children}</div>
      </article>

      <section id="footer" className="scroll-mt-[72px] w-full">
        <Footer />
      </section>
    </main>
  );
}
