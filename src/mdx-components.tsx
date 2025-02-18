import type { MDXComponents } from "mdx/types";
import Pre from "./components/blogs/Pre";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl">{children}</h2>,
    ol: ({ children }) => <ol className="mx-5 list-decimal">{children}</ol>,
    ul: ({ children }) => <ul className="mx-5 list-disc">{children}</ul>,
    pre: (props) => <Pre {...props} />,
    ...components,
  };
};
