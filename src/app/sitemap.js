import { PRODUCTS } from "@/data/products";

export default function sitemap() {
  const baseUrl = "https://uookaymechindustries.com";
  const staticRoutes = ["", "/about", "/products", "/infrastructure", "/quality", "/clients", "/contact"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productEntries = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries];
}


