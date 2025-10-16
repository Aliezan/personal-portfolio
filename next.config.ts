import withPlaiceholder from "@plaiceholder/next";
import createMDX from "@next/mdx";
import { preProcess, postProcess } from "./src/lib/rehype-pre-raw";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    rehypePlugins: [preProcess, rehypeCodeTitles, rehypePrism, postProcess],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    typedEnv: true,
  },
  output: "standalone",
};

export default withMDX(withPlaiceholder(nextConfig));

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
