import { InboxIcon, SparklesIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function HowItWorks() {
  const steps = [
    {
      icon: InboxIcon,
      title: "Get the Brief",
      description: "Every morning at 9:00 AM, a new UX problem and design prompt drops into your inbox.",
    },
    {
      icon: SparklesIcon,
      title: "Direct the AI",
      description: "Open Cursor and Pencil. Use our prompt frameworks to guide the AI, iterate, and refine every pixel of the UI.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Ship the Code",
      description: "Turn your design vision into a live interface instantly and share it with #DailyShipUI.",
    },
  ];

  return (
    <section className="w-full py-32 bg-[#F3F3F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.02em] text-[#1A1A1A] text-center mb-16">
          What to Expect
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center gap-4">
              <step.icon className="h-10 w-10 text-[#1A1A1A]" />
              <h3 className="font-sans text-[22px] font-medium leading-snug text-[#1A1A1A] sm:text-2xl sm:leading-normal">
                {step.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed max-w-xs font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
