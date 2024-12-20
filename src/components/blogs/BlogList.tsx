import React, { FC } from "react";
import BlogCard from "@/components/blogs/BlogCard";
import BlogPagination from "@/components/blogs/BlogPagination";
import { SpaceGrotesk } from "@/utils/font";
import { CircleAlert, TriangleAlert } from "lucide-react";
import { GetAllBlogPostsQuery } from "@/gql/graphql";
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
  data: GetAllBlogPostsQuery;
  error: ApolloError | undefined;
};

const BlogList: FC<BlogSectionProps> = async ({ page, data, error }) => {
  const imageUrls = data.blogs.map((blog) =>
    STRAPI_URL.concat(blog?.previewImage.url ?? ""),
  );
  const imagesData = await getImagesData(imageUrls);

  if (error) {
    return (
      <div className="flex min-h-screen flex-col">
        <section className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
              <TriangleAlert size={50} className="mb-4" />
              <h1
                className={`${SpaceGrotesk.className} mb-4 text-3xl sm:text-4xl md:text-5xl`}
              >
                Uh oh. Something went wrong! Please try again.
              </h1>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!data || !data.blogs || data.blogs.length === 0) {
    <div className="flex min-h-screen flex-col">
      <section className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <CircleAlert size={50} className="mb-4" />
            <h1
              className={`${SpaceGrotesk.className} mb-4 text-3xl sm:text-4xl md:text-5xl`}
            >
              No blog posts available
            </h1>
            <p className="text-lg">Check back later for new content!</p>
          </div>
        </div>
      </section>
    </div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <section className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8">
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
        </div>
      </section>
      <footer className="mt-auto">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <BlogPagination
            totalPages={data?.blogs_connection?.pageInfo.total ?? 1}
            page={+page}
          />
        </div>
      </footer>
    </div>
  );
};

export default BlogList;
