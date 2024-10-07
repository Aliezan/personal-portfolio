import React, { FC } from "react";

const ImgPlaceholder: FC = () => (
  <div className="order-first flex h-[180px] w-[320px] items-center justify-center bg-gray-200 md:order-last">
    <p className="dark:text-black">NO IMAGE PROVIDED</p>
  </div>
);
export default ImgPlaceholder;
