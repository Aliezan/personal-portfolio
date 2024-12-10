import React, { FC } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrism from "rehype-prism-plus";
import { SpaceGrotesk } from "@/utils/font";
import rehypeCodeTitles from "rehype-code-titles";
import { preProcess, postProcess } from "@/lib/rehype-pre-raw";
import Pre from "./Pre";

type MDXRendererProps = {
  source: string;
};

const options = {
  mdxOptions: {
    rehypePlugins: [preProcess, rehypeCodeTitles, rehypePrism, postProcess],
  },
};

const components = {
  h1: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>,
  ) => (
    <h1 {...props} className={`${SpaceGrotesk.className} text-3xl font-bold`}>
      {props.children}
    </h1>
  ),
  h2: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLHeadingElement> &
      React.HTMLAttributes<HTMLHeadingElement>,
  ) => (
    <h2 {...props} className={`${SpaceGrotesk.className} text-xl`}>
      {props.children}
    </h2>
  ),
  ol: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLOListElement> &
      React.HTMLAttributes<HTMLOListElement>,
  ) => (
    <ol {...props} className="mx-5 list-decimal">
      {props.children}
    </ol>
  ),
  ul: (
    props: React.JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLUListElement> &
      React.HTMLAttributes<HTMLUListElement>,
  ) => (
    <ul {...props} className="mx-5 list-disc">
      {props.children}
    </ul>
  ),
  pre: (props: React.JSX.IntrinsicAttributes) => <Pre {...props} />,
};

const MDXRenderer: FC<MDXRendererProps> = ({ source }) => (
  // @ts-expect-error
  <MDXRemote source={source} options={options} components={components} />
);

export default MDXRenderer;
