import QualityClient from "./QualityClient";

export const metadata = {
  title: "Quality Inspection Standards & Compliance | Uoo Kay Mech Industries",
  description: "We enforce high-tolerance inspection protocols: Mitutoyo height measurements, thread plug verification, and granite plate flatness calibration.",
  alternates: {
    canonical: "/quality",
  },
  openGraph: {
    title: "Quality Inspection Standards & Compliance | Uoo Kay Mech Industries",
    description: "We enforce high-tolerance inspection protocols: Mitutoyo height measurements, thread plug verification, and granite plate flatness calibration.",
    url: "https://uookaymechindustries.com/quality",
    type: "website",
  }
};

export default function QualityPage() {
  return <QualityClient />;
}


