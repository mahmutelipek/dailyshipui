import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    question:
      "I am a Figma veteran. Will I actually learn to build or just chat with a bot?",
    answer:
      "You will learn the modern design to code pipeline. You are not just copy pasting prompts. You will learn how to structure layout logic, debug visual errors, and command AI to write clean production ready code.",
  },
  {
    question: "What tech stack are we actually using?",
    answer:
      "React and Tailwind CSS. The absolute industry standard. You will generate code that real developers actually use, not just static prototypes or fake UI components.",
  },
  {
    question: "Are there any hidden costs? Do I need paid AI accounts?",
    answer:
      "No. You can complete the entire 30 day sprint using the free tier of Cursor. No hidden API costs. Just bring your laptop and your design vision.",
  },
  {
    question: "Is 30 minutes a day really enough to ship?",
    answer:
      "Yes. The prompt frameworks I provide do the heavy lifting for the initial build. Your 30 minutes are spent iterating, tweaking the visual hierarchy, and refining the UX. It is about daily momentum, not endless polishing.",
  },
  {
    question:
      "I do not know how to use the terminal or GitHub. Is that a problem?",
    answer:
      "Zero developer environment setup required. We keep it strictly in Cursor. You will see your UI live in the built in browser immediately. No dev ops anxiety.",
  },
  {
    question: "What if life gets in the way and I miss a day?",
    answer:
      "The emails and frameworks are yours forever. The daily streak is the goal, but you can always pause and catch up at your own pace.",
  },
  {
    question: "Why $24.99?",
    answer:
      "It is a low barrier to start today, but enough of an investment to keep you committed to finishing all 30 days.",
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
          <p className="mt-3 font-sans text-sm font-medium text-[#666666] sm:mt-4 sm:text-base">
            The Reality Check
          </p>
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
