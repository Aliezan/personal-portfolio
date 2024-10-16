import { gql } from "@/gql";

export const getBlogPosts = gql(`
query BlogsQuery($pagination: PaginationArg) {
  blogs(pagination: $pagination) {
    documentId
    title
    createdAt
    blogTag
    previewImage {
      url
    }
    blogDescription
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

export const getBlogPost = gql(`
  query BlogPost($documentId: ID!) {
  blog(documentId: $documentId) {
    title
    createdAt
    blogTag
    blogContentSection {
      image {
        url
      }
      blogTextContent
    }
  }
}
  `);
