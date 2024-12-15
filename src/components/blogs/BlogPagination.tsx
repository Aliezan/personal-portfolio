import React, { FC } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "../ui/pagination";

const BlogPagination: FC<{ totalPages: number; page: number }> = ({
  totalPages,
  page,
}) => {
  const roundTotalPages = (num: number) => {
    const result = Math.ceil(num / 5);
    return Math.max(1, result);
  };

  const modifiedTotalPages = roundTotalPages(totalPages);

  const startPage = Math.floor((page - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, modifiedTotalPages);

  return (
    <Pagination className="mt-7">
      <PaginationContent>
        {page > 6 && (
          <PaginationItem>
            <PaginationPrevious
              href={page === 2 ? "/blogs" : `/blogs/${page - 1}`}
            />
          </PaginationItem>
        )}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map((pageNum) => (
          <PaginationItem key={pageNum}>
            <PaginationLink
              href={pageNum === 1 ? "/blogs" : `/blogs/${pageNum}`}
              isActive={pageNum === page}
            >
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}
        {page < modifiedTotalPages && modifiedTotalPages > 5 && (
          <PaginationItem>
            <PaginationNext href={`/blogs/${page + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
