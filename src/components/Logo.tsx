"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

interface LogoProps {
  logoWidth: number;
  logoHeight: number;
  fontWidth: number;
  fontHeight: number;
}

const Logo: FC<LogoProps> = ({
  logoWidth,
  logoHeight,
  fontWidth,
  fontHeight,
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href="/" className="flex items-center gap-3">
      <div
        style={{ width: logoWidth, height: logoHeight }}
        className="relative"
      >
        <Image
          src="/aliezn-icon-light.webp"
          fill
          alt="aliezan-logo-light"
          className={`absolute left-0 top-0 transition-opacity duration-300 ${
            mounted && resolvedTheme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src="/aliezn-icon-dark.webp"
          fill
          alt="aliezan-logo-dark"
          className={`absolute left-0 top-0 transition-opacity duration-300 ${
            mounted && resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div
        style={{ width: fontWidth, height: fontHeight }}
        className="relative"
      >
        <Image
          src="/aliezn-light.svg"
          fill
          alt="aliezan-light"
          className={`absolute left-0 top-0 transition-opacity duration-300 ${
            mounted && resolvedTheme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src="/aliezn-dark.svg"
          fill
          alt="aliezan-dark"
          className={`absolute left-0 top-0 transition-opacity duration-300 ${
            mounted && resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </Link>
  );
};
export default Logo;
