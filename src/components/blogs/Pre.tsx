// @ts-nocheck

import React, { FC } from "react";
import CopyButton from "./CopyButton";
import clsx from "clsx";

const Pre: FC = ({
  children,
  raw,
  buttonClasses = "absolute top-3 right-3 bg-zinc-900",
  ...props
}) => {
  return (
    <pre {...props} className={clsx("relative", props.className)}>
      {children}
      <CopyButton text={raw} className={buttonClasses} />
    </pre>
  );
};

export default Pre;
