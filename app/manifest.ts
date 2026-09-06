import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ANOX",
    short_name: "ANOX",
    description: "AI, cybersecurity, software and cloud technology.",
    start_url: "/en",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#030712",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
