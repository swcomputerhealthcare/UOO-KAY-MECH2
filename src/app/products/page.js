import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "Precision Machined Components | CNC Products | UK MECH Industries",
  description: "Explore our catalog of 40+ precision machined parts, custom shafts, tooling, fixtures, and structural fabrications made to custom tolerances.",
  alternates: {
    canonical: "https://uookaymechindustries.com/products",
  },
  openGraph: {
    title: "Precision Machined Components | CNC Products | UK MECH Industries",
    description: "Explore our catalog of 40+ precision machined parts, custom shafts, tooling, fixtures, and structural fabrications made to custom tolerances.",
    url: "https://uookaymechindustries.com/products",
    type: "website",
  }
};

export default function ProductsPage() {
  return <ProductsClient />;
}


