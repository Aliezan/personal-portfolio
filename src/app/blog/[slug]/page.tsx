import React, { FC } from "react";
import { SpaceGrotesk } from "@/lib/font";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BackButton from "@/components/blogs/BackButton";
import blogData from "@/data/blogList";

// export const dynamicParams = false;

export const generateStaticParams = () => [{ slug: "easy-vps-setup-coolify" }];

type Params = { params: Promise<{ slug: string }> };

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const slug = (await params).slug;
  const blogPost = blogData.find((blog) => blog.slug === slug);

  if (!blogPost) {
    notFound();
  }

  return {
    title: blogPost.title,
    description: blogPost.description,
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      images: blogPost.thumbnailURL,
    },
    twitter: {
      card: "summary_large_image",
      title: blogPost.title,
      description: blogPost.description,
      images: blogPost.thumbnailURL,
    },
  };
};

const Blog: FC<Params> = async ({ params }) => {
  const slug = (await params).slug;
  const blogPost = blogData.find((blog) => blog.slug === slug);
  const { default: Post } = await import(`@/contents/${slug}.mdx`);

  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <header className="mb-8">
          <BackButton />
          <h1
            className={`${SpaceGrotesk.className} mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl`}
          >
            {blogPost?.title}
          </h1>
          <p className="text-sm text-gray-600">{blogPost?.createdAt}</p>
        </header>
        <div className="prose prose-lg max-w-none">
          <Post />
        </div>
        <BackButton />
      </article>
    </main>
  );
};

export default Blog;
