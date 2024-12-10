import React, { FC, Suspense, cache } from "react";
import BlogList from "@/components/blogs/BlogList";
import BlogHero from "@/components/blogs/BlogHero";
import { getClient } from "@/lib/apollo-server";
import { getAllBlogPosts } from "@/query/schema";
import { Metadata } from "next";
import BlogListSkeleton from "@/components/blogs/BlogListSkeleton";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights about my personal and dev life, and in the betweens",
  twitter: {
    card: "summary_large_image",
  },
};

const getBlogPostsCached = cache(async (page: string) => {
  const { data, error } = await getClient().query({
    query: getAllBlogPosts,
    variables: {
      pagination: {
        page: +page,
        pageSize: 5,
      },
    },
  });

  return {
    data,
    error,
  };
});

const Blogs: FC<{
  searchParams?: { [key: string]: string | undefined };
}> = async ({ searchParams }) => {
  const params = await searchParams;
  const page = params?.page || "1";

  const { data, error } = await getBlogPostsCached(page);

  return (
    <main>
      <BlogHero />
      <Suspense fallback={<BlogListSkeleton />}>
        <BlogList page={page} data={data} error={error} />
      </Suspense>
    </main>
  );
};
export default Blogs;
