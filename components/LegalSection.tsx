import type { ReactNode } from "react";

/** One numbered block on Privacy / Terms — tuned for small screens. */
export default function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="min-w-0">
      <h2 className="mb-2.5 font-sans text-[15px] font-semibold leading-snug tracking-tight text-[#1A1A1A] sm:mb-3 sm:text-[17px] md:text-lg">
        {title}
      </h2>
      <p className="text-pretty text-[14px] font-medium leading-[1.65] text-[#333333] sm:text-[15px] sm:leading-relaxed">
        {children}
      </p>
    </section>
  );
}
