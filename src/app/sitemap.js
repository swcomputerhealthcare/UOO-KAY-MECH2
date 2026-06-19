export default function sitemap() {
  const baseUrl = "https://uookaymechindustries.com";
  const routes = ["", "/about", "/products", "/infrastructure", "/quality", "/clients", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
