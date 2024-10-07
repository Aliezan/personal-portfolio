import React, { FC } from "react";
import BlogCard from "@/components/blogs/BlogCard";
import BlogPagination from "@/components/blogs/BlogPagination";
import { env } from "@/env/client";
import { getClient } from "@/lib/apollo-server";
import { getBlogPosts } from "@/query/schema";

export const revalidate = 60;

const BlogSection: FC<{ page: string }> = async ({ page }) => {
  const { data } = await getClient().query({
    query: getBlogPosts,
  });

  return (
    <section className="mt-5 px-7">
      <div className="flex justify-center">
        <div className="grid h-[1900px] gap-6 md:h-[1060px]">
          {data?.blogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              tags={blog?.attributes?.Tags}
              createdAt={blog?.attributes?.createdAt ?? "NO DATE"}
              imgUrl={env.NEXT_PUBLIC_STRAPI_URL.concat(
                blog?.attributes?.Picture?.data?.attributes?.url!,
              )}
              alt={
                blog?.attributes?.Picture?.data?.attributes?.alternativeText ??
                "NO ALT PROVIDED"
              }
              title={blog?.attributes?.Title ?? "UNTTILED"}
              slug={blog?.attributes?.slug ?? "NO SLUG"}
              content={blog?.attributes?.Paragraph}
            />
          ))}
        </div>
      </div>
      <BlogPagination
        pageCount={data?.blogs?.meta?.pagination?.pageCount ?? 1}
        page={+page}
      />
    </section>
  );
};
export default BlogSection;
