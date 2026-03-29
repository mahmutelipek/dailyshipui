import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import WhatYouWillMaster from "./sections/WhatYouWillMaster";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#F3F3F3] pt-[72px]">
      <Navigation />
      <Hero />
      <section id="how-it-works" className="scroll-mt-[72px]">
        <HowItWorks />
      </section>
      <WhatYouWillMaster />
      {/* FAQ section uses id="faq" in app/sections/FAQ.tsx (nav link target) */}
      <FAQ />
      <section id="footer" className="scroll-mt-[72px]">
        <Footer />
      </section>
    </main>
  );
}
