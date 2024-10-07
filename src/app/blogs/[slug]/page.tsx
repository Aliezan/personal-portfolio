import React, { FC } from "react";

const Blog: FC<{ params: { slug: string } }> = ({ params }) => (
  <div>{params.slug}</div>
);

export default Blog;
