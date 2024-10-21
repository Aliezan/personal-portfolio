"use client";

import React, { FC } from "react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

type BlocksRendererClientProps = {
  BlogTextContent: BlocksContent;
};

const BlocksRendererClient: FC<BlocksRendererClientProps> = ({
  BlogTextContent,
}) => (
  <BlocksRenderer
    content={BlogTextContent}
    blocks={{
      paragraph: ({ children }) => <p>{children}</p>,
      heading: ({ children, level }) => {
        switch (level) {
          case 1:
            return <h1>{children}</h1>;
          case 2:
            return <h2>{children}</h2>;
          case 3:
            return <h3>{children}</h3>;
          case 4:
            return <h4>{children}</h4>;
          case 5:
            return <h5>{children}</h5>;
          case 6:
            return <h6>{children}</h6>;
          default:
            return <h1>{children}</h1>;
        }
      },
      link: ({ children, url }) => <Link href={url}>{children}</Link>,
    }}
    modifiers={{
      bold: ({ children }) => <strong>{children}</strong>,
      italic: ({ children }) => <span className="italic">{children}</span>,
    }}
  />
);

export default BlocksRendererClient;
