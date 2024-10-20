import React, { FC, cache } from "react";
import { getClient } from "@/lib/apollo-server";
import { getBlogPost } from "@/query/schema";
import dateFormatter from "@/utils/dateFormatter";
import { SpaceGrotesk } from "@/utils/font";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { env } from "@/env/server";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 60;

const STRAPI_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : env.NEXT_PUBLIC_STRAPI_URL;

const getBlogPostCached = cache(async (documentId: string) => {
  const { data, error } = await getClient().query({
    query: getBlogPost,
    variables: {
      documentId,
    },
  });

  return {
    blog: data?.blog,
    error,
  };
});

export const generateMetadata = async ({
  params,
}: {
  params: { documentId: string };
}): Promise<Metadata> => {
  const { documentId } = params;
  const blogPost = await getBlogPostCached(documentId);

  if (blogPost.error) {
    notFound();
  }

  return {
    title: blogPost.blog?.title,
    description: blogPost.blog?.blogDescription,
    openGraph: {
      title: blogPost.blog?.title,
      description: blogPost.blog?.blogDescription,
      images: STRAPI_URL.concat(blogPost.blog?.previewImage.url!),
    },
    twitter: {
      card: "summary_large_image",
      title: blogPost.blog?.title,
      description: blogPost.blog?.blogDescription,
      images: STRAPI_URL.concat(blogPost.blog?.previewImage.url!),
    },
  };
};

const Blog: FC<{ params: { documentId: string } }> = async ({ params }) => {
  const { documentId } = params;
  const blogPost = await getBlogPostCached(documentId);

  return (
    <main className="grid px-[40px] sm:px-[80px]">
      <div className="grid gap-2">
        <h1 className={`${SpaceGrotesk.className} text-5xl`}>
          {blogPost.blog?.title}
        </h1>
        <p className="text-sm">{dateFormatter(blogPost?.blog?.createdAt)}</p>
      </div>
    </main>
  );
};

export default Blog;
