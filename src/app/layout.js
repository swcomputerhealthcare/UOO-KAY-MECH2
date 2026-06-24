import { Montserrat, Roboto, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
  title: "UOO Kay Mech Industries | Precision Fabrication & Machining in Thane",
  description: "UOO Kay Mech Industries provides industrial fabrication, precision machining, stainless steel fabrication, tooling, dies, fixtures and custom engineering solutions in Thane, Maharashtra. Serving industry since 2004.",
  keywords: "UOO Kay Mech Industries, fabrication company in Thane, precision machining Thane, industrial fabrication Thane, stainless steel fabrication, machined components, tool room components, punch dies, custom fixtures, machine frames, fabricated structures, Kolshet Road Thane, Pomal Industrial Estate",
  metadataBase: new URL("https://uookaymechindustries.com"),
  alternates: {
    canonical: "https://uookaymechindustries.com",
  },
  robots: {
    index: true,
    follow: true,
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
  openGraph: {
    title: "UOO Kay Mech Industries | Precision Fabrication & Machining in Thane",
    description: "UOO Kay Mech Industries provides industrial fabrication, precision machining, stainless steel fabrication, tooling, dies, fixtures and custom engineering solutions in Thane, Maharashtra. Serving industry since 2004.",
    url: "https://uookaymechindustries.com",
    siteName: "UOO Kay Mech Industries",
    images: [
      {
        url: "/images/products/machines and fabricated components 1.webp",
        width: 1200,
        height: 630,
        alt: "UOO Kay Mech Industries Precision Engineering Workshop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UOO Kay Mech Industries | Precision Fabrication & Machining in Thane",
    description: "UOO Kay Mech Industries provides industrial fabrication, precision machining, stainless steel fabrication, tooling, dies, fixtures and custom engineering solutions in Thane, Maharashtra. Serving industry since 2004.",
    images: ["/images/products/machines and fabricated components 1.webp"],
  },
};

export const viewport = {
  themeColor: "#17375E",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "UOO Kay Mech Industries",
  "image": "https://uookaymechindustries.com/images/products/machines and fabricated components 1.webp",
  "@id": "https://uookaymechindustries.com/#localbusiness",
  "url": "https://uookaymechindustries.com",
  "telephone": ["+91 99878 49605", "+91 98330 53809"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "08 Pomal Industrial Estate, Kolshet Road",
    "addressLocality": "Thane",
    "addressRegion": "Maharashtra",
    "postalCode": "400607",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.228591,
    "longitude": 72.9854787
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Thane" },
    { "@type": "AdministrativeArea", "name": "Mumbai" },
    { "@type": "AdministrativeArea", "name": "Maharashtra" },
    { "@type": "AdministrativeArea", "name": "India" }
  ],
  "knowsAbout": [
    "Industrial Fabrication",
    "Precision Machining",
    "Stainless Steel Fabrication",
    "Tooling & Dies",
    "Custom Fixtures",
    "Machine Frames",
    "Fabricated Structures",
    "Brass Components",
    "Special Purpose Components"
  ],
  "foundingDate": "2004"
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${montserrat.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Header />
          <main className="flex-grow pt-16 md:pt-[104px]">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}


