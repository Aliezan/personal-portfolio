import { gql } from "@/gql";

export const getBlogPosts = gql(`
query BlogsQuery($pagination: PaginationArg) {
    blogs(pagination: $pagination) {
      documentId
      title
      content
      date
      image {
        url
      }
      slug
    }
    blogs_connection {
      pageInfo {
        page
        pageSize
        pageCount
        total
      }
    }
  } 
  `);
