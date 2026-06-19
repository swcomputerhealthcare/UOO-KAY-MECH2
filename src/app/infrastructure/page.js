import InfrastructureClient from "./InfrastructureClient";

export const metadata = {
  title: "Manufacturing Infrastructure & CNC Assets | Uoo Kay Mech Industries",
  description: "Explore our machining facility in Maharashtra, India equipped with ACE Micromatic CNC machining centres, lathe assets, and Mitutoyo metrology tools.",
  alternates: {
    canonical: "/infrastructure",
  },
  openGraph: {
    title: "Manufacturing Infrastructure & CNC Assets | Uoo Kay Mech Industries",
    description: "Explore our machining facility in Maharashtra, India equipped with ACE Micromatic CNC machining centres, lathe assets, and Mitutoyo metrology tools.",
    url: "https://uookaymechindustries.com/infrastructure",
    type: "website",
  }
};

export default function InfrastructurePage() {
  return <InfrastructureClient />;
}
