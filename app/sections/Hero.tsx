"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-72px)] w-full flex-col items-center max-sm:justify-start sm:justify-center bg-[#F3F3F3] px-4 pt-12 pb-0 max-sm:min-h-[calc(100dvh-72px+4rem)] sm:px-8 sm:pt-16 sm:pb-0 md:pt-20 md:pb-0 lg:px-16 lg:pb-0 lg:pt-32">
      {/* Content */}
      <div className="mx-auto mb-8 mt-16 flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto mb-4 max-w-[18ch] font-serif text-[clamp(2.5rem,9vw+0.5rem,6.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-black sm:mb-6">
          Ship UIs with AI.
        </h1>

        <p className="mx-auto mb-6 max-w-xl font-sans text-sm font-medium leading-relaxed text-[#666666] sm:mb-8">
          30 days. 30 challenges. Become an AI native designer.
        </p>

        <Button nativeButton={false} render={<Link href="#footer" />}>
          Start shipping
        </Button>
        <p className="mt-4 max-w-md font-sans text-[13px] leading-relaxed text-black/50">
          $24.99 one time payment. Secure checkout via Stripe.
        </p>
      </div>

      {/* Image — mobile: mt-auto pins block to section bottom; sm+ centered stack */}
      <div className="flex w-full shrink-0 self-stretch justify-center max-sm:mt-auto max-sm:pb-0 sm:mt-0 sm:pb-0">
        <div className="relative aspect-[16/10] max-h-[min(92vh,640px)] w-[150vw] max-w-none shrink-0 sm:w-full sm:max-w-[1470px] sm:max-h-[45vh]">
        <Image
          src="/herosectionbg.png"
          alt=""
          fill
          className="object-contain max-sm:object-bottom sm:object-[center_bottom]"
          priority
        />
        </div>
      </div>
    </section>
  );
}
