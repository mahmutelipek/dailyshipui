import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    question: "Is this for beginners?",
    answer:
      'If you know your way around a design tool, you’re ready. I’m not teaching you "what a button is"—I’m teaching you how to build that button using AI.',
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Zero code required. You’ll use Cursor and Pencil like a creative director. AI handles the syntax; you handle the vision.",
  },
  {
    question: "What if I miss a day?",
    answer:
      "No stress. You own the challenges forever. Life happens—pick up where you left off whenever you're ready.",
  },
  {
    question: "Why $24.99?",
    answer:
      "Because I want you to actually start. It’s cheap enough to be an impulse buy, but expensive enough to make you commit to the 30 days.",
  },
  {
    question: "What tools do I need?",
    answer:
      "Just a laptop, a Cursor subscription (or free trial), and Pencil. No complex dev environments or terminal commands.",
  },
  {
    question: "Is there a community?",
    answer:
      "We use the #DailyShipUI tag on X (Twitter) and LinkedIn. Ship your work, get feedback from the cohort, and build your network while you build your portfolio.",
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
