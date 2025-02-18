import React from "react";
import BlogList from "@/components/blogs/BlogList";
import BlogHero from "@/components/blogs/BlogHero";
import { Metadata } from "next";
import blogData from "@/data/blogList";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights about my personal and dev life, and in the betweens",
  twitter: {
    card: "summary_large_image",
  },
};

const Blogs = () => {
  return (
    <main>
      <BlogHero />
      <BlogList data={blogData} page={1} />
    </main>
  );
};

export default Blogs;
