import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    process.env.NODE_ENV === "development"
      ? "http://localhost:1337/graphql"
      : `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
  documents: "src/query/schema.ts",
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        enumsAsTypes: true,
      },
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
