import { InboxIcon, SparklesIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

/** The daily rhythm — parent `section#how-it-works` lives in `app/page.tsx`. */
export default function HowItWorks() {
  const steps = [
    {
      icon: InboxIcon,
      title: "The Brief",
      description:
        "A fresh UX problem lands in your inbox every morning. The first 10 days, you get everything: a foundation prompt and an art direction prompt. After that, you write your own.",
    },
    {
      icon: SparklesIcon,
      title: "The Execution",
      description:
        "Open Cursor. Launch Pencil. Direct the AI with precise language until the interface matches your vision. No code. Just direction.",
    },
    {
      icon: RocketLaunchIcon,
      title: "The Ship",
      description:
        "Your browser renders a live, interactive prototype with hover states, animations, and real interactions. That is your output for the day.",
    },
  ];

  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center font-serif text-[clamp(2.5rem,9vw+0.5rem,6.5rem)] font-normal tracking-[-0.02em] text-[#1A1A1A] max-sm:leading-[1.05] sm:text-5xl md:max-w-4xl md:mx-auto md:text-6xl md:leading-[1.08]">
          The daily rhythm
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center gap-3 sm:gap-4">
              <step.icon className="h-9 w-9 text-[#1A1A1A] sm:h-10 sm:w-10" />
              <h3 className="font-sans text-[18px] font-medium leading-snug text-[#1A1A1A] sm:leading-normal">
                {step.title}
              </h3>
              <p className="mx-auto max-w-md font-sans text-sm font-medium leading-relaxed text-[#666666] md:max-w-none">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
