import React, { FC } from "react";
import BlogSection from "@/components/blogs/BlogSection";
import BlogHero from "@/components/blogs/BlogHero";

const Blogs: FC<{
  searchParams?: { [key: string]: string | undefined };
}> = ({ searchParams }) => (
  <main>
    <BlogHero />
    <BlogSection page={searchParams?.page ?? "1"} />
  </main>
);
export default Blogs;
