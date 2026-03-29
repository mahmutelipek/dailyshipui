import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    question: "Do I need to know how to code?",
    answer:
      "Zero code required. The AI handles the syntax; you handle the vision, hierarchy, and UX.",
  },
  {
    question: "What tools do I need to start?",
    answer:
      "Just a laptop, a Cursor subscription (or free trial), and Pencil. No complex developer environments required.",
  },
  {
    question: "Is this for beginners or pro designers?",
    answer:
      'Both. If you’re a pro, you’ll 10x your speed. If you’re a beginner, you’ll bypass the "static" era and go straight to building interactive products.',
  },
  {
    question: "What if I miss a day?",
    answer:
      "The emails are yours forever. The daily streak is the goal, but you can always catch up at your own pace.",
  },
  {
    question: "Is there a specific start date?",
    answer:
      "Your personal 30-day sprint begins the moment you join. Your first brief will arrive in your inbox the very next morning at 09:00 AM.",
  },
  {
    question: "Why is it $24.99?",
    answer:
      "I want to lower the barrier for designers to evolve. It’s affordable enough to start today, but enough of an investment to keep you committed for 30 days.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="w-full scroll-mt-[72px] bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-[clamp(2.5rem,9vw+0.5rem,6.5rem)] font-normal tracking-[-0.02em] text-[#1A1A1A] max-sm:leading-[1.05] sm:mb-16 sm:text-5xl md:text-6xl">
          FAQ
        </h2>
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
