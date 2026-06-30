export default function manifest() {
  return {
    name: "UK Mech Industries",
    short_name: "UK Mech",
    description: "UK Mech Industries provides precision machining, CNC components, industrial parts and engineering solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F7F8",
    theme_color: "#14429E",
    icons: [
      {
        src: "/uk-mech-logo-v3.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      }
    ],
  };
}
