import React, { FC, cache } from "react";
import { getClient } from "@/lib/apollo-server";
import { getBlogPost } from "@/query/schema";
import dateFormatter from "@/utils/dateFormatter";
import { SpaceGrotesk } from "@/utils/font";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { env } from "@/env/server";
import BlogSection from "@/components/blogs/BlogSection";
import { Link } from "@nextui-org/react";

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
    <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <header className="mb-8">
          <Link href="/blogs" className="mb-2 text-blue-500">
            <span>← Back to Blogs</span>
          </Link>
          <h1
            className={`${SpaceGrotesk.className} mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl`}
          >
            {blogPost.blog?.title}
          </h1>
          <p className="text-sm text-gray-600">
            {dateFormatter(blogPost?.blog?.createdAt)}
          </p>
        </header>
        <div className="prose prose-lg max-w-none">
          {blogPost.blog?.blogContentSection.map((section, index) => (
            <BlogSection
              key={index}
              imageUrl={section?.image?.url}
              BlogTextContent={section?.blogTextContent}
            />
          ))}
        </div>
      </article>
    </main>
  );
};

export default Blog;
