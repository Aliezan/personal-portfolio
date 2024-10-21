import React, { FC } from "react";
import Image from "next/image";
import { env } from "@/env/server";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlocksRendererClient from "./BlocksRendererClient";

const STRAPI_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : env.NEXT_PUBLIC_STRAPI_URL;

type BlogSectionProps = {
  imageUrl?: string;
  BlogTextContent: BlocksContent;
};

const BlogSection: FC<BlogSectionProps> = ({ imageUrl, BlogTextContent }) => (
  <section className="my-8">
    {imageUrl && (
      <div className="relative mb-6 h-0 w-full pb-[56.25%]">
        <Image
          src={STRAPI_URL.concat(imageUrl)}
          alt="Blog section image"
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    )}
    <div className="prose prose-lg max-w-none">
      <BlocksRendererClient BlogTextContent={BlogTextContent} />
    </div>
  </section>
);

export default BlogSection;
