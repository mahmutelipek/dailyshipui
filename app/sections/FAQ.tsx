import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    question: "I am a designer. Will I actually design or just type text?",
    answer:
      "You will still design, but your primary tool is now language. You remain in full control of visual hierarchy, spacing, and typography. The AI simply translates your creative vision into a live and clickable interface.",
  },
  {
    question: "Do I need to learn how to code?",
    answer:
      "Absolutely not. You will not write a single line of code. You will act as the creative director. The AI handles all the complex syntax while you focus on the user experience.",
  },
  {
    question: "What tools do I need to start?",
    answer:
      "Just your laptop and a free Cursor account. We skip all the complex developer setups. You will see your designs come to life instantly in a preview window.",
  },
  {
    question: "I feel like I missed the AI wave. Is it too late?",
    answer:
      "You are here because you see other designers shipping real products while you are still on a static canvas. You have been saying you need to look into AI for months. It is not too late, but the gap is widening. This sprint is the aggressive push you need to catch up and dominate the new workflow.",
  },
  {
    question: "What if I miss a day?",
    answer:
      "The emails do not stop. They hit your inbox every single morning. There is no pause button. If you fall behind, the briefs will simply wait for you in your inbox. But let us be real: the daily pressure is exactly why this works. Stop procrastinating and let the daily momentum force you to evolve.",
  },
  {
    question: "Why is it $24.99?",
    answer:
      "It is a low barrier to start today, but enough of a financial investment to keep you psychologically committed to finishing the full 30 days.",
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
