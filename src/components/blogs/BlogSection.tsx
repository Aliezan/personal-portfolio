/* eslint-disable no-nested-ternary */
import React, { FC } from "react";
import BlogCard from "@/components/blogs/BlogCard";
import BlogPagination from "@/components/blogs/BlogPagination";
import { getClient } from "@/lib/apollo-server";
import { getBlogPosts } from "@/query/schema";
import { env } from "@/env/server";
import { SpaceGrotesk } from "@/utils/font";
import { CircleAlert, TriangleAlert } from "lucide-react";

const STRAPI_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : env.NEXT_PUBLIC_STRAPI_URL;

const BlogSection: FC<{ page: string }> = async ({ page }) => {
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
    <section className="mt-5 px-7">
      <div className="grid justify-center">
        <div className="grid h-[996px] grid-rows-5 gap-6">
          {error ? (
            <div className="mt-40">
              <div className="flex gap-4">
                <TriangleAlert size={50} />
                <h1
                  className={`${SpaceGrotesk.className} text-center text-5xl`}
                >
                  Uh oh. Something went wrong!
                </h1>
              </div>
              <p className="text-center">{error.message}</p>
            </div>
          ) : !data || !data.blogs || data.blogs.length === 0 ? (
            <div className="mt-40">
              <div className="flex gap-4">
                <CircleAlert size={50} />
                <h1
                  className={`${SpaceGrotesk.className} text-center text-5xl`}
                >
                  No blog posts available
                </h1>
              </div>
              <p className="mt-3 text-center">
                Check back later for new content!
              </p>
            </div>
          ) : (
            data.blogs.map((blog) => {
              const paragraph = blog?.content.filter(
                (item: { type: string }) => item.type === "paragraph",
              );

              return (
                <BlogCard
                  key={blog?.documentId}
                  date={blog?.date ?? "NO DATE"}
                  imgUrl={STRAPI_URL.concat(blog?.image?.[0]?.url ?? "")}
                  alt={blog?.image?.[0]?.url ?? "NO ALT PROVIDED"}
                  title={blog?.title ?? "UNTITLED"}
                  slug={blog?.slug ?? "NO SLUG"}
                  content={paragraph[0].children[0].text}
                />
              );
            })
          )}
        </div>
      </div>
      <BlogPagination
        totalPages={data?.blogs_connection?.pageInfo.total!}
        page={+page}
      />
    </section>
  );
};

export default BlogSection;
