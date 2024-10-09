import { gql } from "@/gql";

export const getBlogPosts = gql(`
 query BlogsQuery {
  blogs {
    documentId
    title
    content
    date
    image {
      url
    }
    slug
  }
}
  `);
