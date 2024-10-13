"use client";

import React, { FC } from "react";
import ImgPlaceholder from "@/components/blogs/ImgPlaceholder";
import Image from "next/image";
import Link from "next/link";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

type BlogCardProps = {
  date: string;
  imgUrl: string;
  alt: string;
  title: string;
  slug: string;
  content: BlocksContent;
};

const BlogCard: FC<BlogCardProps> = ({
  date,
  imgUrl,
  alt,
  title,
  slug,
  content,
}) => (
  <div className="grid h-fit">
    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-16">
      <div className="mt-4 max-w-[500px] space-y-2 md:space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:gap-4 md:space-y-0">
          <p className="text-tiny text-[#232E52] dark:text-white">{date}</p>
        </div>
        <div className="flex items-center">
          <Link href={`/blogs/${slug}`}>
            <h1 className="line-clamp-2 text-2xl font-bold text-[#232E52] hover:underline-offset-8 dark:text-white">
              {title}
            </h1>
          </Link>
        </div>
        <BlocksRenderer
          content={content}
          blocks={{
            paragraph: ({ children }) => (
              <p className="line-clamp-3 w-full whitespace-pre-line text-xs sm:w-[500px]">
                {children}
              </p>
            ),
          }}
          modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => (
              <span className="italic">{children}</span>
            ),
          }}
        />
      </div>
      {imgUrl && alt ? (
        <Image
          src={imgUrl}
          alt={alt}
          width={320}
          height={180}
          className="order-first h-[180px] w-full object-cover md:order-last"
        />
      ) : (
        <ImgPlaceholder />
      )}
    </div>
  </div>
);

export default BlogCard;
