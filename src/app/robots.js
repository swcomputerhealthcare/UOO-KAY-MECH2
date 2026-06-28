export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/", "/admin/"],
    },
    sitemap: "https://uookaymechindustries.com/sitemap.xml",
  };
}


