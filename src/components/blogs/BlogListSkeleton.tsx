import { Skeleton } from "@/components/ui/skeleton";

const BlogListSkeleton = () => (
  <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl">
      <div className="space-y-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex h-full flex-col gap-2 md:flex-row md:justify-between md:gap-16"
          >
            <div className="mt-4 w-full space-y-2 md:mt-0 md:space-y-4">
              <div className="flex gap-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-8 w-3/4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
            <Skeleton className="order-first h-[180px] w-full md:order-last md:h-[180px] md:w-[320px]" />
          </div>
        ))}
      </div>
    </div>
    <div className="mt-8 flex justify-center">
      <Skeleton className="h-10 w-64" />
    </div>
  </section>
);

export default BlogListSkeleton;
