import React, { FC } from "react";

const BlogTag: FC<{ tag: string }> = ({ tag }) => (
  <div className="flex h-full w-fit items-center justify-center rounded-md bg-[#1a1a1a]">
    <p className="px-4 text-center text-tiny font-bold text-white">{tag}</p>
  </div>
);

export default BlogTag;
