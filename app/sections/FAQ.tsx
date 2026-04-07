import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    question: "I am a designer. Will I actually design?",
    answer:
      "More intentionally than before. Your tool shifts from a mouse to language, which means every decision has to be explicit. You cannot drag something \"a little to the left.\" You have to know why it should be left, by how much, and what it communicates. That precision is what this challenge trains.",
  },
  {
    question: "I am not a designer. Can I do this?",
    answer:
      "Yes, and you might get more out of it than someone who is. You are not unlearning old habits. You are building the right ones from day one. The challenge does not assume design knowledge. It builds design thinking through daily practice. By Day 10 you will understand why login screens fail. By Day 20 you will know how to fix them.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Pencil is a canvas design tool that lives inside your IDE. You open your `.pen` file in Cursor, type your prompt in the chat, and the design appears on the canvas. When you are happy with it, you tell Cursor to build it and your browser renders it live with real hover states and animations. Your job is to direct the output, not produce it.",
  },
  {
    question: "What tools do I need?",
    answer:
      "Cursor and Pencil. Pencil is a canvas design tool that lives inside your IDE. Your `.pen` design files sit in your project folder alongside your code, version controlled with the rest of your work. No separate design software, no switching windows, no exporting assets.",
  },
  {
    question: "What exactly lands in my inbox each day?",
    answer:
      "A UX problem, the component you are building, and for the first 20 days structured prompts to guide your direction. The prompts gradually disappear as you progress. By Day 21 you are writing everything yourself. That is intentional. The goal is not to follow instructions forever. It is to not need them.",
  },
  {
    question: "What if I miss a day?",
    answer:
      "The emails are yours to keep. Pick up where you left off. The only thing that resets is the streak, and streaks are rebuilt one day at a time. Missing one day is not failure. Deciding not to continue is.",
  },
  {
    question: "What do I have at the end of Day 30?",
    answer:
      "30 live, interactive interfaces. Real components that run in a browser, not static mockups. A habit of daily execution. And a way of thinking about UX problems that does not go away when the challenge ends.",
  },
  {
    question: "Why $24.99?",
    answer:
      "One payment. No subscription. 30 days of structured practice, a real AI-native workflow, and a portfolio you can show. The math is straightforward.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="w-full scroll-mt-[72px] bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="font-serif text-[clamp(2.5rem,9vw+0.5rem,6.5rem)] font-normal tracking-[-0.02em] text-[#1A1A1A] max-sm:leading-[1.05] sm:text-5xl md:mx-auto md:max-w-4xl md:text-6xl md:leading-[1.08]">
            FAQ
          </h2>
        </div>
        <Accordion className="w-full" defaultValue={["faq-0"]}>
          {items.map((item, i) => (
            <AccordionItem key={item.question} value={`faq-${i}`}>
              <AccordionTrigger className="py-4 text-left text-base font-medium text-[#1A1A1A] hover:no-underline sm:text-[17px]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-sans text-sm leading-relaxed text-[#666666] sm:text-[15px]">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
