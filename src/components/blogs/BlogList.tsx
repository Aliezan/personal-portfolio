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
import { getImagesData } from "@/lib/getBase64";

const STRAPI_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : env.NEXT_PUBLIC_STRAPI_URL;

type BlogSectionProps = {
  page: string;
  data: BlogsQueryQuery;
  error: ApolloError | undefined;
};

const BlogList: FC<BlogSectionProps> = async ({ page, data, error }) => {
  const imageUrls = data.blogs.map(
    (blog) => STRAPI_URL.concat(blog?.previewImage.url ?? ""),
    // eslint-disable-next-line function-paren-newline
  );

  const imagesData = await getImagesData(imageUrls);

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {error ? (
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <TriangleAlert size={50} className="mb-4" />
            <h1
              className={`${SpaceGrotesk.className} mb-4 text-3xl sm:text-4xl md:text-5xl`}
            >
              Uh oh. Something went wrong!
            </h1>
            <p className="text-lg">{error.message}</p>
          </div>
        ) : !data || !data.blogs || data.blogs.length === 0 ? (
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <CircleAlert size={50} className="mb-4" />
            <h1
              className={`${SpaceGrotesk.className} mb-4 text-3xl sm:text-4xl md:text-5xl`}
            >
              No blog posts available
            </h1>
            <p className="text-lg">Check back later for new content!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {data.blogs.map((blog, index) => (
              <BlogCard
                key={blog?.documentId}
                documentID={blog?.documentId}
                date={dateFormatter(blog?.createdAt) ?? "NO DATE"}
                imgUrl={imageUrls[index]}
                blurDataUrl={imagesData[index].blurDataUrl}
                alt={blog?.previewImage.url ?? "NO ALT PROVIDED"}
                title={blog?.title ?? "UNTITLED"}
                blogDescription={blog?.blogDescription ?? "NO DESCRIPTION"}
                blogTag={blog?.blogTag}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-8">
        <BlogPagination
          totalPages={data?.blogs_connection?.pageInfo.total!}
          page={+page}
        />
      </div>
    </section>
  );
};

export default BlogList;
