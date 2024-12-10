import { visit } from "unist-util-visit";

// @ts-expect-error
export const preProcess = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;

      if (codeEl.tagName !== "code") return;

      node.raw = codeEl.children?.[0].value;
    }
  });
};

// @ts-expect-error
export const postProcess = () => (tree) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw;
    }
  });
};
