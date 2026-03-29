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
    title: "Prompt engineering",
    description:
      "Command AI to build complex visual hierarchies.",
  },
  {
    icon: BoltIcon,
    title: "Rapid prototyping",
    description:
      "Ideas to functional interfaces in minutes.",
  },
  {
    icon: ArrowPathIcon,
    title: "AI native workflow",
    description:
      "Master the design to live code loop.",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Real world UX",
    description:
      "Solve 30 actual product challenges.",
  },
  {
    icon: RocketLaunchIcon,
    title: "The ship mindset",
    description:
      "Build the discipline of daily execution.",
  },
  {
    icon: RectangleStackIcon,
    title: "Live portfolio",
    description:
      "30 interactive, AI built interfaces by Day 30.",
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
          What you will master
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
