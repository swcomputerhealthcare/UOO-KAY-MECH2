import InfrastructureClient from "./InfrastructureClient";

export const metadata = {
  title: "Advanced CNC Infrastructure & Equipment | UK MECH Industries",
  description: "Review our facility machinery layout including ACE Micromatic MCV450 CNC centres, heavy-duty lathes, radial drills, surface grinders, and Mitutoyo metrology gear.",
  alternates: {
    canonical: "https://uookaymechindustries.com/infrastructure",
  },
  openGraph: {
    title: "Advanced CNC Infrastructure & Equipment | UK MECH Industries",
    description: "Review our facility machinery layout including ACE Micromatic MCV450 CNC centres, heavy-duty lathes, radial drills, surface grinders, and Mitutoyo metrology gear.",
    url: "https://uookaymechindustries.com/infrastructure",
    type: "website",
  }
};

export default function InfrastructurePage() {
  return <InfrastructureClient />;
}


