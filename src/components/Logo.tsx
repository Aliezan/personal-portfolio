import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

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
}) => (
  <>
    <div className="dark:hidden">
      <Link href="/" className="flex gap-3">
        <Image
          src="/aliezn-icon-light.webp"
          width={logoWidth}
          height={logoHeight}
          alt="aliezan-logo"
          className="mt-1"
        />
        <Image
          src="/aliezn-light.svg"
          width={fontWidth}
          height={fontHeight}
          alt="aliezan-light"
        />
      </Link>
    </div>

    <div className="hidden dark:block">
      <Link href="/" className="flex gap-3">
        <Image
          src="/aliezn-icon-dark.webp"
          width={logoWidth}
          height={logoHeight}
          alt="aliezan-logo"
          className="mt-1"
        />
        <Image
          src="/aliezn-dark.svg"
          width={fontWidth}
          height={fontHeight}
          alt="aliezan-dark"
        />
      </Link>
    </div>
  </>
);
export default Logo;
