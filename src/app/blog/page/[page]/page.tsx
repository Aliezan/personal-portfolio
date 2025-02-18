import { notFound } from "next/navigation";
import BlogHero from "@/components/blogs/BlogHero";
import BlogList from "@/components/blogs/BlogList";
import blogData from "@/data/blogList";
import { FC } from "react";

const ITEMS_PER_PAGE = 5;

type BlogPageProps = {
  params: Promise<{ page: string }>;
};

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
};

const BlogPage: FC<BlogPageProps> = async ({ params }) => {
  const pageStr = (await params).page;
  const page = parseInt(pageStr);

  if (
    isNaN(page) ||
    page < 1 ||
    page > Math.ceil(blogData.length / ITEMS_PER_PAGE)
  ) {
    notFound();
  }

  return (
    <main>
      <BlogHero />
      <BlogList data={blogData} page={page} />
    </main>
  );
};

export default BlogPage;
