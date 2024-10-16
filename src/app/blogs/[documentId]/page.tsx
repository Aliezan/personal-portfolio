import React, { FC } from "react";
import { getClient } from "@/lib/apollo-server";
import { getBlogPost } from "@/query/schema";
import dateFormatter from "@/utils/dateFormatter";
import { SpaceGrotesk } from "@/utils/font";

export const revalidate = process.env.NODE_ENV === "development" ? 0 : 60;

const Blog: FC<{ params: { documentId: string } }> = async ({ params }) => {
  const { documentId } = params;
  const { data } = await getClient().query({
    query: getBlogPost,
    variables: {
      documentId,
    },
  });

  return (
    <main className="grid px-[40px] sm:px-[80px]">
      <div className="grid gap-2">
        <h1 className={`${SpaceGrotesk.className} text-5xl`}>
          {data.blog?.title}
        </h1>
        <p className="text-sm">{dateFormatter(data?.blog?.createdAt)}</p>
      </div>
    </main>
  );
};

export default Blog;
