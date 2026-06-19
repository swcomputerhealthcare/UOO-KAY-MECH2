import { Barlow_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Precision Engineering & Fabrication in Thane | UOO KAY MECH INDUSTRIES",
  description: "Manufacturer of Machine Safety Guards, Precision Machined Components, Industrial Ladders, and Structural Fabrication solutions. Serving Tier-1 clients since 2004.",
  keywords: "precision machining, industrial fabrication, machine safety guards, crane shafts, pinion shafts, gears, ladders, Thane, Maharashtra",
  metadataBase: new URL("https://uookaymechindustries.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Precision Engineering & Fabrication in Thane | UOO KAY MECH INDUSTRIES",
    description: "Manufacturer of Machine Safety Guards, Precision Machined Components, Industrial Ladders, and Structural Fabrication solutions. Serving Tier-1 clients since 2004.",
    url: "https://uookaymechindustries.com",
    siteName: "UOO KAY MECH INDUSTRIES",
    images: [
      {
        url: "/images/products/machines and fabricated components 1.jpg",
        width: 1200,
        height: 630,
        alt: "UOO KAY MECH INDUSTRIES Precision Engineering Workshop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision Engineering & Fabrication in Thane | UOO KAY MECH INDUSTRIES",
    description: "Manufacturer of Machine Safety Guards, Precision Machined Components, Industrial Ladders, and Structural Fabrication solutions. Serving Tier-1 clients since 2004.",
    images: ["/images/products/machines and fabricated components 1.jpg"],
  },
};

export const viewport = {
  themeColor: "#C46A2D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-text-primary">
        <Header />
        <main className="flex-grow pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
