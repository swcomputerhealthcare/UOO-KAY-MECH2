import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | UK Mech Industries - Precision Engineering",
  description: "Established in 2004, UK Mech Industries delivers custom precision machining, safety guards, and tooling solutions. Learn about our legacy of trust.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | UK Mech Industries - Precision Engineering",
    description: "Established in 2004, UK Mech Industries delivers custom precision machining, safety guards, and tooling solutions. Learn about our legacy of trust.",
    url: "https://uookaymechindustries.com/about",
    type: "website",
  }
};

export default function AboutPage() {
  return <AboutClient />;
}


