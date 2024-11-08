import React, { FC } from "react";
import Image from "next/image";
import { env } from "@/env/server";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { getBase64 } from "@/lib/getBase64";
import BlocksRendererClient from "./BlocksRendererClient";

const STRAPI_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : env.NEXT_PUBLIC_STRAPI_URL;

type BlogSectionProps = {
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  BlogTextContent: BlocksContent;
};

const BlogSection: FC<BlogSectionProps> = async ({
  imageUrl,
  imageAlt,
  imageCaption,
  BlogTextContent,
}) => {
  const blurDataUrl = imageUrl
    ? await getBase64(STRAPI_URL.concat(imageUrl))
    : null;

  return (
    <section className="my-8">
      {imageUrl && (
        <>
          <div className="relative mb-6 aspect-[16/9] w-full">
            <Image
              src={STRAPI_URL.concat(imageUrl)}
              alt={imageAlt}
              fill
              className="rounded-lg object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              {...(blurDataUrl && {
                placeholder: "blur",
                blurDataURL: blurDataUrl,
              })}
            />
          </div>
          {imageCaption && (
            <p className="prose prose-lg mb-4 text-center text-sm italic text-gray-600">
              {imageCaption}
            </p>
          )}
        </>
      )}
      <div className="prose prose-lg max-w-none">
        <BlocksRendererClient BlogTextContent={BlogTextContent} />
      </div>
    </section>
  );
};

export default BlogSection;
