import { cn } from "@/lib/utils";

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800",
      className,
    )}
    {...props}
  />
);

export { Skeleton };
