"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export type BlurTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "p" | "span";
  /** `blur` = blur + slide; `dissolve` = opacity only (no blur). */
  effect?: "blur" | "dissolve";
  animateBy?: "letters" | "words";
  direction?: "top" | "bottom";
  /** Delay between each letter/word (ms), matches React Bits. */
  delayMs?: number;
  /** Duration of each segment’s tween (seconds). */
  stepDuration?: number;
  /** Extra delay before this block’s first segment (ms). */
  baseDelayMs?: number;
};

/**
 * Letter/word reveal in view. `effect="blur"` matches React Bits (blur + slide);
 * `effect="dissolve"` staggers opacity only.
 */
export function BlurText({
  text,
  className,
  as: Tag = "p",
  effect = "blur",
  animateBy = "letters",
  direction = "bottom",
  delayMs = 50,
  stepDuration = 0.35,
  baseDelayMs = 0,
}: BlurTextProps) {
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement>(
    null
  );
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();

  const segments =
    animateBy === "letters"
      ? text.split("")
      : text.split(/(\s+)/u).filter((s) => s.length > 0);

  const y = direction === "bottom" ? 14 : -14;
  const blurPx = 10;
  const isDissolve = effect === "dissolve";

  if (reduceMotion) {
    return (
      <Tag ref={ref as never} className={className}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag ref={ref as never} className={className}>
      {segments.map((segment, i) => {
        const key = `${animateBy}-${i}-${segment}`;
        const delay = (baseDelayMs + i * delayMs) / 1000;
        return (
          <motion.span
            key={key}
            className={cn(
              "inline-block",
              animateBy === "letters" && segment === " " && "w-[0.25em]"
            )}
            initial={
              isDissolve
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    filter: `blur(${blurPx}px)`,
                    y,
                  }
            }
            animate={
              isInView
                ? isDissolve
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0,
                    }
                : isDissolve
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      filter: `blur(${blurPx}px)`,
                      y,
                    }
            }
            transition={{
              duration: stepDuration,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {segment}
          </motion.span>
        );
      })}
    </Tag>
  );
}
