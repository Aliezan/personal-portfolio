// @ts-nocheck
import React, { FC } from "react";
import CopyButton from "./CopyButton";
import clsx from "clsx";

const Pre: FC = ({ children, raw, ...props }) => {
  return (
    <div className="relative">
      <pre
        {...props}
        className={clsx("border-gray overflow-auto", props.className)}
      >
        {children}
      </pre>
      <div className="absolute right-3 top-3">
        <CopyButton text={raw} />
      </div>
    </div>
  );
};

export default Pre;
