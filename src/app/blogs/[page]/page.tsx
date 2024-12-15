import React, { FC } from "react";
import { notFound } from "next/navigation";
import BlogList from "@/components/blogs/BlogList";
import BlogHero from "@/components/blogs/BlogHero";
import { getClient } from "@/lib/apollo-server";
import { getAllBlogPosts } from "@/query/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights about my personal and dev life, and in the betweens",
  twitter: {
    card: "summary_large_image",
  },
};

export const dynamic = "force-static";
export const dynamicParams = true;

const POSTS_PER_PAGE = 5;

export const generateStaticParams = () => [];

const Blogs: FC<{ params: Promise<{ page: string }> }> = async ({ params }) => {
  const { page } = await params;
  const pageInt = parseInt(page, 10);
  const { data, error } = await getClient().query({
    query: getAllBlogPosts,
    variables: {
      pagination: {
        page: pageInt,
        pageSize: POSTS_PER_PAGE,
      },
    },
  });

  if (!data.blogs || error) {
    notFound();
  }

  return (
    <main>
      <BlogHero />
      <BlogList page={page.toString()} data={data} error={error} />
    </main>
  );
};
export default Blogs;
