import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "CNC Machining, Gears & Machine Safety Guards | Uoo Kay Mech Industries",
  description: "Browse our precision engineering capabilities: custom machine safety guards, crane shafts, spur gears, MS/SS ladders, and structural fabrications.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "CNC Machining, Gears & Machine Safety Guards | Uoo Kay Mech Industries",
    description: "Browse our precision engineering capabilities: custom machine safety guards, crane shafts, spur gears, MS/SS ladders, and structural fabrications.",
    url: "https://uookaymechindustries.com/products",
    type: "website",
  }
};

export default function ProductsPage() {
  return <ProductsClient />;
}


