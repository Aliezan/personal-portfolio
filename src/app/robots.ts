import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
    },
  ],
  sitemap: "https://aliezan.is-a.dev/sitemap.xml",
});

export default robots;
