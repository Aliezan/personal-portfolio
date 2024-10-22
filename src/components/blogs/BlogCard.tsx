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
    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-16">
      <div className="mt-4 max-w-[500px] space-y-2 md:space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:gap-4 md:space-y-0">
          <p className="text-md text-[#232E52] dark:text-white">{date}</p>
          {blogTag &&
            blogTag.map((tag) => (
              <Chip color="secondary" key={tag.name} size="sm">
                {tag.name}
              </Chip>
            ))}
        </div>
        <div className="flex items-center">
          <Link href={`/blogs/${documentID}`}>
            <h1 className="line-clamp-2 text-2xl font-bold text-[#232E52] hover:underline-offset-8 dark:text-white">
              {title}
            </h1>
          </Link>
        </div>
        <p className="line-clamp-3 w-full whitespace-pre-line text-xs sm:w-[500px]">
          {blogDescription}
        </p>
      </div>
      {imgUrl && alt ? (
        <Image
          src={imgUrl}
          alt={alt}
          width={320}
          height={180}
          blurDataURL={blurDataUrl}
          placeholder="blur"
          className="order-first h-[180px] w-full object-cover md:order-last"
        />
      ) : (
        <ImgPlaceholder />
      )}
    </div>
  </div>
);

export default BlogCard;
