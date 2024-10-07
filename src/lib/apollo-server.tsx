import { env } from "@/env/server";
import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const STRAPI_URL = env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: `${STRAPI_URL}/graphql`,
      }),
    }),
);
