import React, { FC } from "react";
import BlogList from "@/components/blogs/BlogList";
import BlogHero from "@/components/blogs/BlogHero";
import { getClient } from "@/lib/apollo-server";
import { getBlogPosts } from "@/query/schema";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 60;

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
  });

  return (
    <main>
      <BlogHero />
      <BlogList page={page} data={data} error={error} />
    </main>
  );
};
export default Blogs;
