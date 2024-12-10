"use client";

import React, { FC, useState } from "react";
import clsx from "clsx";
import { Clipboard, CheckIcon } from "lucide-react";

type CopyButtonProps = {
  text: string;
  className?: string;
};

const buttonClasses =
  "flex items-center text-xs font-medium text-white rounded";

const CopyButton: FC<CopyButtonProps> = ({ text, className }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  const Icon = isCopied ? CheckIcon : Clipboard;

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className={clsx(buttonClasses, className)}
    >
      <Icon className="mr-1 h-4 w-4" />
      <span>{isCopied ? "Copied!" : "Copy"}</span>
    </button>
  );
};

export default CopyButton;
