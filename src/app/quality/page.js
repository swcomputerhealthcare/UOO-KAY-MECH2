import QualityClient from "./QualityClient";

export const metadata = {
  title: "Quality Assurance & Metrology Inspection | UK MECH Industries",
  description: "Our Thane tool room utilizes NABL calibrated instruments, Grade-0 granite flat plates, and a 4-stage quality control process to guarantee drawing-compliance.",
  alternates: {
    canonical: "https://uookaymechindustries.com/quality",
  },
  openGraph: {
    title: "Quality Assurance & Metrology Inspection | UK MECH Industries",
    description: "Our Thane tool room utilizes NABL calibrated instruments, Grade-0 granite flat plates, and a 4-stage quality control process to guarantee drawing-compliance.",
    url: "https://uookaymechindustries.com/quality",
    type: "website",
  }
};

export default function QualityPage() {
  return <QualityClient />;
}


