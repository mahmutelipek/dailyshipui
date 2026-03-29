import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    question: "No code?",
    answer:
      "Zero code required. AI handles syntax, you handle vision.",
  },
  {
    question: "Tools?",
    answer: "Just a laptop, Cursor, and Pencil.",
  },
  {
    question: "Miss a day?",
    answer:
      "The emails are yours forever. Catch up anytime.",
  },
  {
    question: "Start date?",
      answer:
        "Your 30 day sprint starts the morning after you join.",
  },
  {
    question: "Why $24.99?",
      answer:
        "Low barrier to start, enough to keep you committed.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="w-full scroll-mt-[72px] bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-[clamp(2.5rem,9vw+0.5rem,6.5rem)] font-normal tracking-[-0.02em] text-[#1A1A1A] max-sm:leading-[1.05] sm:mb-16 sm:text-5xl md:mx-auto md:max-w-4xl md:text-6xl md:leading-[1.08]">
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
