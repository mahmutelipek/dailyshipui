import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DailyShipUI - Ship UIs with AI",
  description:
    "A fresh challenge every morning. Become an AI-native designer in 30 days with DailyShipUI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
