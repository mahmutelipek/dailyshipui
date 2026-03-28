import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#F3F3F3] pb-[calc(40px+env(safe-area-inset-bottom,0px))] pt-[72px] sm:pb-0">
      <Navigation />
      <Hero />
      <section id="how-it-works" className="scroll-mt-[72px]">
        <HowItWorks />
      </section>
      <section id="footer" className="scroll-mt-[72px]">
        <Footer />
      </section>
    </main>
  );
}
