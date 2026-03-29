"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-72px)] w-full flex-col items-center bg-[#F3F3F3] px-4 pb-0 pt-12 max-sm:h-[calc(100dvh-72px)] max-sm:min-h-[calc(100dvh-72px)] max-sm:max-h-[calc(100dvh-72px)] max-sm:overflow-hidden max-sm:justify-start sm:justify-center sm:px-8 sm:pt-16 sm:pb-0 md:pt-20 md:pb-0 lg:px-16 lg:pb-0 lg:pt-32">
      {/* Content */}
      <div className="mx-auto mb-8 mt-16 flex max-w-4xl shrink-0 flex-col items-center px-4 text-center sm:px-6 lg:px-8">
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

      {/* Image — mobile: flex-1 fills remaining viewport; sm+ fixed aspect */}
      <div className="flex w-full min-h-0 max-sm:flex-1 max-sm:flex-col max-sm:justify-end sm:shrink-0 self-stretch justify-center sm:mt-0 sm:pb-0">
        <div className="relative mx-auto h-full min-h-0 w-full max-w-none max-sm:max-h-full sm:aspect-[16/10] sm:h-auto sm:min-h-0 sm:w-full sm:max-w-[1470px] sm:max-h-[45vh]">
        <Image
          src="/herosectionbg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom sm:object-contain sm:object-[center_bottom]"
          priority
        />
        </div>
      </div>
    </section>
  );
}
