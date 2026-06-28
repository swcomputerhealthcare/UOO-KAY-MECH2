import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  title: {
    default: "Precision CNC Machining Company in India | UK MECH Industries",
    template: "%s | UK MECH Industries",
  },
  description: "UK MECH Industries is a trusted CNC machining and precision engineering company based in Thane, Maharashtra. Manufacturing custom machined components, hinges, shafts, tooling, fabricated assemblies and industrial solutions since 2004.",
  keywords: "UK Mech Industries, precision CNC machining India, precision engineering Thane, custom machined components, CNC parts, tool room components, custom fixtures, machine base frames, industrial fabrications, Thane, Maharashtra",
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
      { url: "/uk-mech-logo-v3.png", sizes: "any" },
      { url: "/uk-mech-logo-v3.png", sizes: "32x32", type: "image/png" },
      { url: "/uk-mech-logo-v3.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/uk-mech-logo-v3.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Precision CNC Machining Company in India | UK MECH Industries",
    description: "UK MECH Industries is a trusted CNC machining and precision engineering company based in Thane, Maharashtra. Manufacturing custom machined components, hinges, shafts, tooling, fabricated assemblies and industrial solutions since 2004.",
    url: "https://uookaymechindustries.com",
    siteName: "UK MECH Industries",
    images: [
      {
        url: "/uk-mech-logo-v3.png",
        width: 1200,
        height: 630,
        alt: "UK MECH Industries Precision Machined Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision CNC Machining Company in India | UK MECH Industries",
    description: "UK MECH Industries is a trusted CNC machining and precision engineering company based in Thane, Maharashtra. Manufacturing custom machined components, hinges, shafts, tooling, fabricated assemblies and industrial solutions since 2004.",
    images: ["/uk-mech-logo-v3.png"],
  },
};

export const viewport = {
  themeColor: "#09285F",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "UK Mech Industries",
  "image": "https://uookaymechindustries.com/images/products/highly-precision-1.jpeg",
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
    "latitude": 19.22867202758789,
    "longitude": 72.98545837402344
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
    "Precision Machining",
    "CNC Components",
    "Tooling & Dies",
    "Custom Fixtures",
    "Machine Frames",
    "Brass Components",
    "Special Purpose Components",
    "Industrial Machining Solutions"
  ],
  "foundingDate": "2004"
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-brand-bg text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}


