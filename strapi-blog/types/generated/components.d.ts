import type { Struct, Schema } from "@strapi/strapi";

export interface ContentsContentSection extends Struct.ComponentSchema {
  collectionName: "components_contents_content_sections";
  info: {
    displayName: "content-section";
    icon: "bulletList";
    description: "";
  };
  attributes: {
    image: Schema.Attribute.Media<"images" | "files">;
    blogTextContent: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "contents.content-section": ContentsContentSection;
    }
  }
}
