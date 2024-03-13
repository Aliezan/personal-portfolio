import React, { FC } from "react";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: FC<LogoProps> = ({ width, height }) => (
  <>
    <div className="dark:hidden">
      <Image
        src="./aliezn-light.svg"
        width={width}
        height={height}
        alt="aliezan-light"
      />
    </div>

    <div className="hidden dark:block">
      <Image
        src="./aliezn-dark.svg"
        width={width}
        height={height}
        alt="aliezan-dark"
      />
    </div>
  </>
);
export default Logo;
