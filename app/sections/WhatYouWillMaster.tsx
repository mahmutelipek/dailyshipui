import {
  ChatBubbleBottomCenterTextIcon,
  BoltIcon,
  ArrowPathIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: "Prompt engineering for UI",
    description:
      "Learn how to dictate visual hierarchy, spacing, and logic to AI. You don't code; you command.",
  },
  {
    icon: BoltIcon,
    title: "Rapid prototyping",
    description:
      "Turn ideas into functional, clickable interfaces in minutes, not days.",
  },
  {
    icon: ArrowPathIcon,
    title: "AI-native workflow",
    description:
      'Escape the static canvas. Master the modern "design-to-live-code" loop.',
  },
  {
    icon: PuzzlePieceIcon,
    title: "Real-world UX logic",
    description:
      "Solve 30 actual product challenges—from complex dashboards to seamless onboarding flows.",
  },
  {
    icon: RocketLaunchIcon,
    title: 'The "ship" mindset',
    description:
      "Break free from perfectionism. Build the discipline of shipping a working product every single day.",
  },
  {
    icon: RectangleStackIcon,
    title: "A live portfolio",
    description:
      "By Day 30, you won't just have new skills; you'll have a portfolio of 30 interactive, AI-built interfaces.",
  },
];

export default function WhatYouWillMaster() {
  return (
    <section
      id="what-you-will-master"
      className="w-full scroll-mt-[72px] bg-[#F3F3F3] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-[clamp(2.5rem,9vw+0.5rem,6.5rem)] font-normal tracking-[-0.02em] text-[#1A1A1A] max-sm:leading-[1.05] sm:mb-16 sm:text-5xl md:max-w-4xl md:mx-auto md:text-6xl md:leading-[1.08]">
          What you will master?
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 sm:gap-5">
              <item.icon
                className="h-9 w-9 shrink-0 text-[#1A1A1A] sm:h-10 sm:w-10"
                aria-hidden
              />
              <div className="min-w-0 space-y-2">
                <h3 className="font-sans text-[17px] font-medium leading-snug text-[#1A1A1A] sm:text-lg">
                  {item.title}
                </h3>
                <p className="font-sans text-sm font-medium leading-relaxed text-[#666666] sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
