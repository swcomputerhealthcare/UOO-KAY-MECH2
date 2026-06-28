import AboutClient from "./AboutClient";

export const metadata = {
  title: "About UK MECH Industries | Precision Manufacturing Since 2004",
  description: "Learn about UK MECH Industries, a trusted manufacturer of custom machined components, tooling, and assemblies serving India's tier-1 industrial clients since 2004.",
  alternates: {
    canonical: "https://uookaymechindustries.com/about",
  },
  openGraph: {
    title: "About UK MECH Industries | Precision Manufacturing Since 2004",
    description: "Learn about UK MECH Industries, a trusted manufacturer of custom machined components, tooling, and assemblies serving India's tier-1 industrial clients since 2004.",
    url: "https://uookaymechindustries.com/about",
    type: "website",
  }
};

export default function AboutPage() {
  return <AboutClient />;
}


