"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

const Hero: FC = () => (
  <section
    className="relative flex h-screen w-full items-center justify-center p-4 sm:p-0"
    id="hero"
  >
    <Image
      src="./dark_gradient.svg"
      className="hidden: absolute object-cover dark:block"
      fill
      alt="bg"
    />
    <Image
      src="./light_gradient.svg"
      className="absolute object-cover dark:hidden"
      alt="bg"
      fill
    />
    <div>
      <div className="relative flex items-center">
        <div>
          <p className="font-extralight">
            Hello{" "}
            <span>
              <Image
                className="inline-block"
                src="./waving-hand.png"
                width={22}
                height={22}
                alt="waving"
              />
            </span>
            {"  "} I&apos;m Muhammad Alieza Nuriman
          </p>
          <div className="relative">
            <h1 className="text-[30px] font-semibold lg:text-[40px]">
              Web Developer and{" "}
              <span className="gradient-text font-bold">TypeScript</span>{" "}
              enthusiast
            </h1>
          </div>
          <div className="mt-[20px] flex gap-5">
            {" "}
            <div className="dark:hidden">
              <Tooltip content="Github">
                <Link href="https://github.com/Aliezan">
                  <Image
                    src="./github-mark.svg"
                    height={30}
                    width={30}
                    alt="gh"
                  />
                </Link>
              </Tooltip>
            </div>
            <div className="hidden dark:block">
              <Tooltip content="Github">
                <Link href="https://github.com/Aliezan">
                  <Image
                    src="./github-mark-white.svg"
                    height={30}
                    width={30}
                    alt="gh"
                  />
                </Link>
              </Tooltip>
            </div>
            <div className="dark:hidden">
              <Tooltip content="LinkedIn">
                <Link href="https://www.linkedin.com/in/muhammad-alieza-nuriman/">
                  <Image
                    src="./linkedin-light.svg"
                    height={30}
                    width={30}
                    alt="linkedin"
                  />
                </Link>
              </Tooltip>
            </div>
            <div className="hidden dark:block">
              <Tooltip content="LinkedIn">
                <Link href="https://www.linkedin.com/in/muhammad-alieza-nuriman/">
                  <Image
                    src="./linkedin-dark.svg"
                    height={30}
                    width={30}
                    alt="linkedin"
                  />
                </Link>
              </Tooltip>
            </div>
            <div className="dark:hidden">
              <Tooltip content="Email-me">
                <Link href="mailto:muhammadalieza4@gmail.com">
                  <Image
                    src="./gmail-light.svg"
                    height={30}
                    width={30}
                    alt="gmail"
                  />
                </Link>
              </Tooltip>
            </div>
            <div className="hidden dark:block">
              <Tooltip content="Email-me">
                <Link href="mailto:muhammadalieza4@gmail.com">
                  <Image
                    src="./gmail-dark.svg"
                    height={30}
                    width={30}
                    alt="gmail"
                  />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
