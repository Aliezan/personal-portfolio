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
    const result = num / 5;
    if (num % 5 === 0) {
      return result;
    }
    return result + 1;
  };

  const modifiedTotalPages = roundTotalPages(totalPages);

  const startPage = Math.floor((page - 1) / 5) * 5 + 1;
  let endPage = startPage + 4;

  endPage = endPage > modifiedTotalPages ? modifiedTotalPages : endPage;

  return (
    <Pagination className="mt-7">
      <PaginationContent>
        {startPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`?page=${startPage - 1}`} />
          </PaginationItem>
        )}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map((pageNum) => (
          <PaginationItem key={pageNum}>
            <PaginationLink
              href={`?page=${pageNum}`}
              isActive={pageNum === +page}
            >
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPage < modifiedTotalPages && (
          <PaginationItem>
            <PaginationNext href={`?page=${endPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
