import { SpaceGrotesk } from "@/lib/font";
import React, { FC } from "react";

const BlogHero: FC = () => (
  <div className="relative flex items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-black" />
    <div className="px-7 py-16">
      <p className={SpaceGrotesk.className}>Dev Blog</p>
      <h1 className="font-bold sm:max-w-[500px] sm:text-2xl">
        Insights about my personal and dev life, and in the betweens
      </h1>
    </div>
  </div>
);

export default BlogHero;
