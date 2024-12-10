import type { Schema, Struct } from "@strapi/strapi";

export interface ContentsContentSection extends Struct.ComponentSchema {
  collectionName: "components_contents_content_sections";
  info: {
    description: "";
    displayName: "content-section";
    icon: "bulletList";
  };
  attributes: {
    blogTextContent: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<"images" | "files">;
  };
}

export interface ContentsContentSectionMarkdown extends Struct.ComponentSchema {
  collectionName: "components_contents_content_section_markdowns";
  info: {
    description: "";
    displayName: "content-section-markdown";
  };
  attributes: {
    blogTextContent: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "contents.content-section": ContentsContentSection;
      "contents.content-section-markdown": ContentsContentSectionMarkdown;
    }
  }
}
