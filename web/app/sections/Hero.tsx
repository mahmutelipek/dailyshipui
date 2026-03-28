"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] w-full flex-col items-center justify-center bg-white px-4 py-12 sm:px-8 sm:py-16 md:py-20 lg:px-16 lg:pb-24 lg:pt-32">
      {/* Content */}
      <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto mb-4 max-w-[18ch] font-serif text-[clamp(2.5rem,9vw+0.5rem,6.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-black sm:mb-6">
          Ship UIs with AI.
        </h1>

        <p className="mb-6 max-w-xl font-sans text-sm font-medium leading-relaxed text-[#666666] sm:mb-8">
          You’re not late. I’m here to make you an AI-native designer in 30 days.
        </p>

        <Button nativeButton={false} render={<Link href="#footer" />}>
          Start Shipping
        </Button>
        <p className="mt-4 font-sans text-[13px] text-[#64748B]">
          $19 one-time payment. 30 days of challenges.
        </p>
      </div>

      {/* Image - preserve aspect ratio */}
      <div className="relative aspect-[16/10] max-h-[45vh] w-full max-w-[980px]">
        <Image
          src="/herosectionbg.png"
          alt=""
          fill
          className="object-contain"
          style={{ objectPosition: "center bottom" }}
          priority
        />
      </div>
    </section>
  );
}
