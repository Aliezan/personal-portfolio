import React, { FC } from "react";
import BlogList from "@/components/blogs/BlogList";
import BlogHero from "@/components/blogs/BlogHero";
import { getClient } from "@/lib/apollo-server";
import { getBlogPosts } from "@/query/schema";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights about my personal and dev life, and in the betweens",
  twitter: {
    card: "summary_large_image",
  },
};

const Blogs: FC<{
  searchParams?: { [key: string]: string | undefined };
}> = async ({ searchParams }) => {
  const params = await searchParams;
  const page = params?.page || "1";

  const { data, error } = await getClient().query({
    query: getBlogPosts,
    variables: {
      pagination: {
        page: +page,
        pageSize: 5,
      },
    },
  });

  return (
    <main>
      <BlogHero />
      <BlogList page={page} data={data} error={error} />
    </main>
  );
};
export default Blogs;
