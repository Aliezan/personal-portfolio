import React, { FC, cache } from "react";
import { getClient } from "@/lib/apollo-server";
import { getBlogPost } from "@/query/schema";
import dateFormatter from "@/utils/dateFormatter";
import { SpaceGrotesk } from "@/utils/font";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { env } from "@/env/server";
import BlogSection from "@/components/blogs/BlogSection";
import BackButton from "@/components/blogs/BackButton";
import { TriangleAlert } from "lucide-react";

export const dynamic = "force-static";
export const dynamicParams = true;

export const generateStaticParams = () => [];

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

const STRAPI_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : env.NEXT_PUBLIC_STRAPI_URL;

type Params = { params: Promise<{ documentId: string }> };

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const { documentId } = await params;
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
      images: STRAPI_URL.concat(blogPost.blog?.previewImage.url ?? ""),
    },
    twitter: {
      card: "summary_large_image",
      title: blogPost.blog?.title,
      description: blogPost.blog?.blogDescription,
      images: STRAPI_URL.concat(blogPost.blog?.previewImage.url ?? ""),
    },
  };
};

const Blog: FC<Params> = async ({ params }) => {
  const { documentId } = await params;
  const blogPost = await getBlogPostCached(documentId);

  if (blogPost.error) {
    return (
      <main className="mt-5 grid h-screen items-center">
        <div className="grid grid-rows-2 gap-3">
          <div className="flex justify-center gap-4">
            <TriangleAlert size={50} />
            <h1 className={`${SpaceGrotesk.className} text-center text-5xl`}>
              Uh oh. Something went wrong!
            </h1>
          </div>
          <p className={`${SpaceGrotesk.className} text-center`}>
            Please try again.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <header className="mb-8">
          <BackButton />
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
          {blogPost.blog?.blogContentSection?.map((section, index) => (
            <BlogSection
              key={index}
              imageUrl={section?.image?.url ?? ""}
              imageAlt={section?.image?.alternativeText ?? ""}
              imageCaption={section?.image?.caption ?? ""}
              BlogTextContent={section?.blogTextContent ?? ""}
            />
          ))}
        </div>
        <BackButton />
      </article>
    </main>
  );
};

export default Blog;
