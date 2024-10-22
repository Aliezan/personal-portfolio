import { MetadataRoute } from "next";
import { env } from "@/env/server";

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
    },
  ],
  sitemap: `${env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
});

export default robots;
