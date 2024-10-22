import { gql } from "@/gql";

export const getBlogPosts = gql(`
query BlogsQuery($pagination: PaginationArg) {
  blogs(pagination: $pagination) {
    documentId
    title
    createdAt
    updatedAt
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
    previewImage {
      url
    }
    blogDescription
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
