import ContactClient from "./ContactClient";

export const metadata = {
  title: "Get in Touch & Request Quotation (RFQ) | Uoo Kay Mech Industries",
  description: "Contact our sales engineering team for precision machining, gears, or safety guards RFQs. Visit our engineering workshop at Kolshet Road, Thane, Maharashtra, India.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Get in Touch & Request Quotation (RFQ) | Uoo Kay Mech Industries",
    description: "Contact our sales engineering team for precision machining, gears, or safety guards RFQs. Visit our engineering workshop at Kolshet Road, Thane, Maharashtra, India.",
    url: "https://uookaymechindustries.com/contact",
    type: "website",
  }
};

export default function ContactPage() {
  return <ContactClient />;
}


