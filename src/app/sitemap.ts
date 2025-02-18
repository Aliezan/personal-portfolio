import { MetadataRoute } from "next";
import blogData from "@/data/blogList";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const BlogPosts = blogData.map((blog) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.lastModified),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date(),
    },
    ...BlogPosts,
  ];
};

export default sitemap;
