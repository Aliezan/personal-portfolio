import { MetadataRoute } from "next";
import { env } from "@/env/server";
// import { getClient } from "@/lib/apollo-server";
// import { getBlogPosts } from "@/query/schema";

const sitemap = async (): Promise<MetadataRoute.Sitemap> =>
  // const { data } = await getClient().query({
  //   query: getBlogPosts,
  // });

  // const BlogPosts = data.blogs.map((blog) => ({
  //   url: `${env.NEXT_PUBLIC_BASE_URL}/blogs/${blog?.documentId}`,
  //   lastModified: new Date(blog?.updatedAt),
  // }));

  [
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/blogs`,
      lastModified: new Date(),
    },
    // ...BlogPosts,
  ];
export default sitemap;
