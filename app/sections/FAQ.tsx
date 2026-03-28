"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Is this for beginners?",
      answer:
        "If you know your way around a design tool, you're ready. I'm not teaching you \"what a button is\"—I'm teaching you how to build that button using AI.",
    },
    {
      question: "Do I need to know how to code?",
      answer:
        "Zero code required. You'll use Cursor and Pencil like a creative director. AI handles the syntax; you handle the vision.",
    },
    {
      question: "What if I miss a day?",
      answer:
        "No stress. You own the challenges forever. Life happens—pick up where you left off whenever you're ready.",
    },
    {
      question: "Why $19?",
      answer:
        "Because I want you to actually start. It's cheap enough to be an impulse buy, but expensive enough to make you commit to the 30 days.",
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

  return (
    <section className="w-full py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-4xl font-normal tracking-[-0.02em] text-[#1A1A1A] sm:text-5xl md:text-6xl">
          DailyShipUI: The FAQ
        </h2>
        
        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-t border-[#F3F3F3] last:border-b"
            >
              <AccordionTrigger className="text-base font-medium text-[#1A1A1A] hover:no-underline py-5 font-sans">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#666666] leading-relaxed pb-5 font-sans">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
