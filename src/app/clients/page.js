import ClientsClient from "./ClientsClient";

export const metadata = {
  title: "Trusted Manufacturing Partner & Approved Supplier | UK MECH Industries",
  description: "UK MECH Industries is an approved vendor supplier to enterprise conglomerates including Larsen & Toubro, Emerson India, and Parle Elizabeth Tools.",
  alternates: {
    canonical: "https://uookaymechindustries.com/clients",
  },
  openGraph: {
    title: "Trusted Manufacturing Partner & Approved Supplier | UK MECH Industries",
    description: "UK MECH Industries is an approved vendor supplier to enterprise conglomerates including Larsen & Toubro, Emerson India, and Parle Elizabeth Tools.",
    url: "https://uookaymechindustries.com/clients",
    type: "website",
  }
};

export default function ClientsPage() {
  return <ClientsClient />;
}


