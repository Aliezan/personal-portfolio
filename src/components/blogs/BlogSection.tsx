import React, { FC } from "react";
import BlogCard from "@/components/blogs/BlogCard";
// import BlogPagination from "@/components/blogs/BlogPagination";
import { getClient } from "@/lib/apollo-server";
import { getBlogPosts } from "@/query/schema";

export const revalidate = 0;

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const BlogSection: FC<{ page: string }> = async () => {
  const { data, error } = await getClient().query({
    query: getBlogPosts,
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="mt-5 px-7">
      <div className="flex justify-center">
        <div className="grid h-[1900px] gap-6 md:h-[1060px]">
          {data?.blogs?.map((blog) => {
            const paragraph = blog?.content.filter(
              (item: { type: string }) => item.type === "paragraph",
            );
            return (
              <BlogCard
                key={blog?.documentId}
                date={blog?.date ?? "NO DATE"}
                imgUrl={STRAPI_URL.concat(blog?.image?.[0]?.url!)}
                alt={blog?.image?.[0]?.url ?? "NO ALT PROVIDED"}
                title={blog?.title ?? "UNTITLED"}
                slug={blog?.slug ?? "NO SLUG"}
                content={paragraph}
              />
            );
          })}
        </div>
      </div>
      {/* <BlogPagination
      pageCount={data?.blogs?.meta?.pagination?.pageCount ?? 1}
      page={+page}
    /> */}
    </section>
  );
};
export default BlogSection;
