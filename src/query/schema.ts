import { gql } from "@/gql";

export const getBlogPosts = gql(`
 query BlogsQuery {
  blogs {
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
