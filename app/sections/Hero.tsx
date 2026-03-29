"use client";

import { BlurText } from "@/components/BlurText";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const heroFadeTransition = {
  duration: 0.55,
  delay: 0,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Hero() {
  const heroCopyRef = useRef<HTMLDivElement>(null);
  const heroCopyInView = useInView(heroCopyRef, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();

  const fadeOpacity = reduceMotion || heroCopyInView ? 1 : 0;
  const fadeInitial = reduceMotion ? 1 : 0;

  return (
    <section className="relative flex min-h-[calc(100dvh-72px)] w-full flex-col items-center bg-[#F3F3F3] px-4 pb-0 pt-12 max-sm:h-[calc(100dvh-72px)] max-sm:min-h-[calc(100dvh-72px)] max-sm:max-h-[calc(100dvh-72px)] max-sm:overflow-hidden max-sm:justify-start sm:justify-center sm:px-8 sm:pt-16 sm:pb-0 md:pt-20 md:pb-0 lg:px-16 lg:pb-0 lg:pt-32">
      {/* Content */}
      <div
        ref={heroCopyRef}
        className="mx-auto mb-8 mt-16 flex max-w-4xl shrink-0 flex-col items-center gap-4 px-4 text-center max-sm:min-h-0 sm:min-h-[266px] sm:px-6 lg:px-8"
      >
        <motion.div
          className="w-full"
          initial={{ opacity: fadeInitial }}
          animate={{ opacity: fadeOpacity }}
          transition={heroFadeTransition}
        >
          <BlurText
            as="h1"
            text="Ship UIs with AI."
            animateBy="letters"
            direction="bottom"
            delayMs={50}
            stepDuration={0.35}
            className="mx-auto max-w-[18ch] font-serif text-[clamp(2.5rem,9vw+0.5rem,6.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-black"
          />
        </motion.div>

        <motion.p
          className="mx-auto max-w-xl font-sans text-sm font-medium leading-relaxed text-[#666666]"
          initial={{ opacity: fadeInitial }}
          animate={{ opacity: fadeOpacity }}
          transition={heroFadeTransition}
        >
          30 days. 30 challenges. Become an AI native designer.
        </motion.p>

        <motion.div
          className="inline-block"
          initial={{ opacity: fadeInitial }}
          animate={{ opacity: fadeOpacity }}
          transition={heroFadeTransition}
        >
          <Button nativeButton={false} render={<Link href="#footer" />}>
            Start shipping
          </Button>
        </motion.div>
        <motion.p
          className="max-w-md font-sans text-[13px] leading-relaxed text-black/50"
          initial={{ opacity: fadeInitial }}
          animate={{ opacity: fadeOpacity }}
          transition={heroFadeTransition}
        >
          $24.99 one time payment. Secure checkout via Stripe.
        </motion.p>
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
