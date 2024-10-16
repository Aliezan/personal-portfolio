/* eslint-disable no-nested-ternary */
import React, { FC } from "react";
import BlogCard from "@/components/blogs/BlogCard";
import BlogPagination from "@/components/blogs/BlogPagination";
import { SpaceGrotesk } from "@/utils/font";
import { CircleAlert, TriangleAlert } from "lucide-react";
import { BlogsQueryQuery } from "@/gql/graphql";
import type { ApolloError } from "@apollo/client";
import { env } from "@/env/server";
import dateFormatter from "@/utils/dateFormatter";

const STRAPI_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : env.NEXT_PUBLIC_STRAPI_URL;

type BlogSectionProps = {
  page: string;
  data: BlogsQueryQuery;
  error: ApolloError | undefined;
};

const BlogList: FC<BlogSectionProps> = ({ page, data, error }) => (
  <section className="mt-5 px-7">
    <div className="grid justify-center">
      <div className="grid grid-rows-5 gap-6">
        {error ? (
          <div className="mt-40">
            <div className="flex gap-4">
              <TriangleAlert size={50} />
              <h1 className={`${SpaceGrotesk.className} text-center text-5xl`}>
                Uh oh. Something went wrong!
              </h1>
            </div>
            <p className="text-center">{error.message}</p>
          </div>
        ) : !data || !data.blogs || data.blogs.length === 0 ? (
          <div className="mt-40">
            <div className="flex gap-4">
              <CircleAlert size={50} />
              <h1 className={`${SpaceGrotesk.className} text-center text-5xl`}>
                No blog posts available
              </h1>
            </div>
            <p className="mt-3 text-center">
              Check back later for new content!
            </p>
          </div>
        ) : (
          data.blogs.map((blog) => (
            <BlogCard
              key={blog?.documentId}
              documentID={blog?.documentId}
              date={dateFormatter(blog?.createdAt) ?? "NO DATE"}
              imgUrl={STRAPI_URL.concat(blog?.previewImage.url ?? "")}
              alt={blog?.previewImage.url ?? "NO ALT PROVIDED"}
              title={blog?.title ?? "UNTITLED"}
              blogDescription={blog?.blogDescription ?? "NO DESCRIPTION"}
              blogTag={blog?.blogTag}
            />
          ))
        )}
      </div>
    </div>
    <BlogPagination
      totalPages={data?.blogs_connection?.pageInfo.total!}
      page={+page}
    />
  </section>
);

export default BlogList;
