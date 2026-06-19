import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | Uoo Kay Mech Industries - Precision Engineering",
  description: "Established in 2004, Uoo Kay Mech Industries delivers custom precision machining, safety guards, and structural fabrication. Learn about our legacy of trust.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Uoo Kay Mech Industries - Precision Engineering",
    description: "Established in 2004, Uoo Kay Mech Industries delivers custom precision machining, safety guards, and structural fabrication. Learn about our legacy of trust.",
    url: "https://uookaymechindustries.com/about",
    type: "website",
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
