import React, { FC } from "react";
import Image from "next/image";
import { getBase64 } from "@/lib/getBase64";

type BlogImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

const BlogImage: FC<BlogImageProps> = async ({ src, alt, caption }) => {
  const blurDataUrl = await getBase64(src);

  return (
    <>
      <div className="relative mb-6 aspect-[16/9] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="rounded-lg object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...(blurDataUrl && {
            placeholder: "blur",
            blurDataURL: blurDataUrl,
          })}
        />
      </div>
      {caption && (
        <p className="prose prose-lg mb-4 text-center text-sm italic text-gray-600">
          {caption}
        </p>
      )}
    </>
  );
};

export default BlogImage;
