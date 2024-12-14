import { MetadataRoute } from "next";
import { env } from "@/env/server";
import { getClient } from "@/lib/apollo-server";
import { getAllBlogPosts } from "@/query/schema";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const { data, error } = await getClient().query({
    query: getAllBlogPosts,
  });

  if (!data || error) {
    return [
      {
        url: `${env.NEXT_PUBLIC_BASE_URL}/`,
        lastModified: new Date(),
      },
    ];
  }

  const BlogPosts = data.blogs.map((blog) => ({
    url: `${env.NEXT_PUBLIC_BASE_URL}/blogs/${blog?.documentId}`,
    lastModified: new Date(blog?.updatedAt),
  }));

  return [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/blogs`,
      lastModified: new Date(),
    },
    ...BlogPosts,
  ];
};

export default sitemap;
