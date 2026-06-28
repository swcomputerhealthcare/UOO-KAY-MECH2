import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact UK MECH Industries | Request RFQ & Technical Enquiries",
  description: "Submit blueprints, drawings, or RFQs for custom precision components. Our Thane engineering team responds to B2B enquiries within 24 hours.",
  alternates: {
    canonical: "https://uookaymechindustries.com/contact",
  },
  openGraph: {
    title: "Contact UK MECH Industries | Request RFQ & Technical Enquiries",
    description: "Submit blueprints, drawings, or RFQs for custom precision components. Our Thane engineering team responds to B2B enquiries within 24 hours.",
    url: "https://uookaymechindustries.com/contact",
    type: "website",
  }
};

export default function ContactPage() {
  return <ContactClient />;
}


