import React, { FC } from "react";
import ImgPlaceholder from "@/components/blogs/ImgPlaceholder";
import Image from "next/image";
import Link from "next/link";
import { Chip } from "@nextui-org/react";

type BlogCardProps = {
  date: string;
  imgUrl: string;
  alt: string;
  title: string;
  documentID: string | undefined;
  blogDescription: string | undefined;
  blogTag: { name: string }[];
  blurDataUrl: string;
};

const BlogCard: FC<BlogCardProps> = ({
  date,
  imgUrl,
  alt,
  title,
  documentID,
  blogDescription,
  blogTag,
  blurDataUrl,
}) => (
  <div className="h-full">
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
      <div className="order-first md:order-last md:flex-shrink-0">
        {imgUrl && alt ? (
          <Image
            src={imgUrl}
            alt={alt}
            width={320}
            height={180}
            blurDataURL={blurDataUrl}
            placeholder="blur"
            className="h-auto w-full rounded-lg object-cover md:w-[320px]"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        ) : (
          <ImgPlaceholder />
        )}
      </div>
      <div className="mt-4 w-full space-y-2 md:mt-0 md:flex-grow md:space-y-4">
        <div className="flex flex-wrap gap-2">
          <p className="text-md text-[#232E52] dark:text-white">{date}</p>
          {blogTag?.map((tag) => (
            <Chip color="secondary" key={tag.name} size="sm">
              {tag.name}
            </Chip>
          ))}
        </div>
        <div className="flex items-center">
          <Link
            href={`/posts/${documentID}`}
            className="hover:underline hover:underline-offset-8"
          >
            <h1 className="line-clamp-2 text-2xl font-bold text-[#232E52] hover:underline hover:underline-offset-8 dark:text-white">
              {title}
            </h1>
          </Link>
        </div>
        <p className="line-clamp-3 w-full whitespace-pre-line text-xs">
          {blogDescription}
        </p>
      </div>
    </div>
  </div>
);
export default BlogCard;
