import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "Precision CNC Machining & Custom Tooling | UK Mech Industries",
  description: "Browse our precision engineering capabilities: CNC components, custom shafts, spur gears, tooling, dies, and custom machining solutions.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Precision CNC Machining & Custom Tooling | UK Mech Industries",
    description: "Browse our precision engineering capabilities: CNC components, custom shafts, spur gears, tooling, dies, and custom machining solutions.",
    url: "https://uookaymechindustries.com/products",
    type: "website",
  }
};

export default function ProductsPage() {
  return <ProductsClient />;
}


