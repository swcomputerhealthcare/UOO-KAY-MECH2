import ClientsClient from "./ClientsClient";

export const metadata = {
  title: "Tier-1 Industrial Clients & Partners | UK Mech Industries",
  description: "UK Mech Industries is a trusted vendor partner for global manufacturers including L&T, Emerson, Godfrey Phillips, and Parle Elizabeth Tools.",
  alternates: {
    canonical: "/clients",
  },
  openGraph: {
    title: "Tier-1 Industrial Clients & Partners | UK Mech Industries",
    description: "UK Mech Industries is a trusted vendor partner for global manufacturers including L&T, Emerson, Godfrey Phillips, and Parle Elizabeth Tools.",
    url: "https://uookaymechindustries.com/clients",
    type: "website",
  }
};

export default function ClientsPage() {
  return <ClientsClient />;
}


