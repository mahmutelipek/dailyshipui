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

/**
 * Apex → www 307 veriyorsa OG crawler’lar görseli çoğu zaman alamaz; doğrudan
 * canonical host’u kullan. Farklı domain için NEXT_PUBLIC_SITE_URL ayarla.
 */
const FALLBACK_ORIGIN_PRODUCTION = "https://www.dailyshipui.com";

function resolvedOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    const withProto = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    return new URL(withProto).origin;
  }
  if (process.env.NODE_ENV === "production") {
    return new URL(FALLBACK_ORIGIN_PRODUCTION).origin;
  }
  return "http://localhost:3000";
}

const siteOrigin = resolvedOrigin();

const siteTitle = "DailyShipUI - Ship UIs with AI";
const siteDescription =
  "30 days. 30 challenges. Become an AI-native designer. A fresh challenge every morning.";

/** ASCII; bazı crawler’lar fancy tirede takılabiliyor. */
const ogImageAlt = "DailyShipUI - The 30 day AI design challenge";

/**
 * Sorgu (?v) ve `/og/…` yolu bazı ortamlarda sorun çıkarıyor (engelleyici / istemci yönlendirme).
 * Kökte açık isim: güncelleyince `public/opengraph-v5.png` ekle ve yolu değiştir.
 */
const OG_IMAGE_VERSION_PATH = "/opengraph-v4.png";

const ogImageUrl = (() => {
  const cdn = process.env.NEXT_PUBLIC_OG_IMAGE_URL?.trim();
  if (cdn) {
    const u = /^https?:\/\//i.test(cdn) ? cdn : `https://${cdn}`;
    const sep = u.includes("?") ? "&" : "?";
    return `${u}${sep}v=4`;
  }
  return `${siteOrigin}${OG_IMAGE_VERSION_PATH}`;
})();

const canonicalUrl = `${siteOrigin}/`;

const twitterDomain = new URL(canonicalUrl).hostname.replace(/^www\./, "");

/** Relative URL’ler (favicon) için; OG ayrıca aşağıda elle yazılıyor. */
const metadataBase = new URL(
  siteOrigin === "http://localhost:3000"
    ? "http://localhost:3000/"
    : `${siteOrigin}/`
);

/**
 * openGraph / twitter burada YOK: `output: "export"` + Metadata API ile LinkedIn /
 * WhatsApp bazen yanlış veya eksik etiket üretiyor. Aşağıdaki <head> tek kaynak.
 */
export const metadata: Metadata = {
  metadataBase,
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
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
      <head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="DailyShipUI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content={twitterDomain} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:width" content="2400" />
        <meta name="twitter:image:height" content="1260" />
        <meta name="twitter:image:alt" content={ogImageAlt} />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
