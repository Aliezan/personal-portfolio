"use client";

import React, { FC } from "react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { SpaceGrotesk } from "@/utils/font";
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
            return (
              <h1 className={`${SpaceGrotesk.className} text-3xl font-bold`}>
                {children}
              </h1>
            );
          case 2:
            return (
              <h2 className={`${SpaceGrotesk.className} text-xl`}>
                {children}
              </h2>
            );
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
      list: ({ children, format }) => {
        if (format === "ordered") {
          return <ol className="mx-5 list-decimal">{children}</ol>;
        }
        return <ul className="mx-5 list-disc">{children}</ul>;
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
