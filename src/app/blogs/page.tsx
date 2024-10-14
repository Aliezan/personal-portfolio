import React, { FC } from "react";
import BlogSection from "@/components/blogs/BlogSection";
import BlogHero from "@/components/blogs/BlogHero";
import { getClient } from "@/lib/apollo-server";
import { getBlogPosts } from "@/query/schema";

export const revalidate = process.env.NODE_ENV === "development" ? 5 : 5;

const Blogs: FC<{
  searchParams?: { [key: string]: string | undefined };
}> = async ({ searchParams }) => {
  const page = searchParams?.page ?? "1";

  const { data, error } = await getClient().query({
    query: getBlogPosts,
    variables: {
      pagination: {
        page: +page,
        pageSize: 5,
      },
    },
    fetchPolicy: "network-only",
  });

  return (
    <main>
      <BlogHero />
      <BlogSection page={page} data={data} error={error} />
    </main>
  );
};
export default Blogs;
