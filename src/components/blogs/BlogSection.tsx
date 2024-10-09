import React, { FC } from "react";
import BlogCard from "@/components/blogs/BlogCard";
// import BlogPagination from "@/components/blogs/BlogPagination";
import { env } from "@/env/client";
import { getClient } from "@/lib/apollo-server";
import { getBlogPosts } from "@/query/schema";

export const revalidate = 120;

const BlogSection: FC<{ page: string }> = async () => {
  const { data } = await getClient().query({
    query: getBlogPosts,
  });

  return (
    <section className="mt-5 px-7">
      <div className="flex justify-center">
        <div className="grid h-[1900px] gap-6 md:h-[1060px]">
          {data?.blogs?.map((blog) => (
            <BlogCard
              key={blog?.documentId}
              date={blog?.date ?? "NO DATE"}
              imgUrl={env.NEXT_PUBLIC_STRAPI_URL.concat(blog?.image?.[0]?.url!)}
              alt={blog?.image?.[0]?.url ?? "NO ALT PROVIDED"}
              title={blog?.title ?? "UNTTILED"}
              slug={blog?.slug ?? "NO SLUG"}
              content={blog?.content}
            />
          ))}
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
