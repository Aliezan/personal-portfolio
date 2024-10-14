import React, { FC } from "react";
import BlogSection from "@/components/blogs/BlogSection";
import BlogHero from "@/components/blogs/BlogHero";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 5;

const Blogs: FC<{
  searchParams?: { [key: string]: string | undefined };
}> = ({ searchParams }) => (
  <main>
    <BlogHero />
    <BlogSection page={searchParams?.page ?? "1"} />
  </main>
);
export default Blogs;
