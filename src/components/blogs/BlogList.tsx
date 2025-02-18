import React, { FC } from "react";
import BlogCard from "@/components/blogs/BlogCard";
import BlogPagination from "@/components/blogs/BlogPagination";
import { SpaceGrotesk } from "@/lib/font";
import { CircleAlert } from "lucide-react";
import { getImagesData } from "@/lib/getBase64";
import type blogData from "@/data/blogList";
import paginateArray from "@/lib/paginateArray";

type BlogListProps = {
  data: typeof blogData;
  page?: number;
};

const ITEMS_PER_PAGE = 5;

const BlogList: FC<BlogListProps> = async ({ data, page = 1 }) => {
  const paginatedData = paginateArray(data, ITEMS_PER_PAGE, page);
  const imageUrls = paginatedData.map((blog) => blog.thumbnailURL);
  const imagesData = await getImagesData(imageUrls);

  if (!data || data.length === 0) {
    <div className="flex min-h-screen flex-col">
      <section className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <CircleAlert size={50} className="mb-4" />
            <h1
              className={`${SpaceGrotesk.className} mb-4 text-3xl sm:text-4xl md:text-5xl`}
            >
              No blog posts available
            </h1>
            <p className="text-lg">Check back later for new content!</p>
          </div>
        </div>
      </section>
    </div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <section className="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8">
            {paginatedData.map((blog, index) => (
              <BlogCard
                key={blog.documentId}
                date={blog.createdAt}
                imgUrl={imageUrls[index]}
                blurDataUrl={imagesData[index].blurDataUrl}
                alt={blog.thumbnailURL}
                title={blog.title}
                blogDescription={blog.description}
                blogTag={blog.tags}
                slug={blog.slug}
              />
            ))}
          </div>
        </div>
      </section>
      <footer className="mt-auto">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <BlogPagination totalPages={data.length} page={page} />
        </div>
      </footer>
    </div>
  );
};

export default BlogList;
