import {
  PaintBrushIcon,
  ChatBubbleBottomCenterTextIcon,
  PuzzlePieceIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    icon: PaintBrushIcon,
    title: "Art direction",
    description:
      "Learn to direct AI the way a senior designer directs a junior. With precision, intent, and an eye for what is missing.",
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: "Prompt engineering",
    description:
      "Write instructions that produce consistent, professional-quality UI. Vague prompts produce vague results. You will stop writing vague prompts.",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Real-world UX",
    description:
      "Solve 30 actual product challenges: login flows, error states, empty states, pricing tables, date pickers, form inputs, and more. Problems that appear in every product you will ever work on.",
  },
  {
    icon: ArrowPathIcon,
    title: "AI-Native workflow",
    description:
      "Master the loop: open your `.pen` file in Cursor, type a prompt in the chat, watch the design generate on the canvas, tell Cursor to build it, review it live in the browser, iterate. Your design and code live in the same folder. Same repo, same version control, same window.",
  },
  {
    icon: RocketLaunchIcon,
    title: "The ship mindset",
    description:
      "Daily execution is a skill. Thirty consecutive days of shipping something real builds the kind of discipline that separates people who talk about design from people who do it.",
  },
  {
    icon: RectangleStackIcon,
    title: "Live portfolio",
    description:
      "30 interactive, AI-directed interfaces. Built and directed by you. Ready to show.",
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
                className="h-8 w-8 shrink-0 text-[#1A1A1A]"
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
