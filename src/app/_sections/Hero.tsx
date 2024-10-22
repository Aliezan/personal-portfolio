"use client";

import React, { useState, useEffect, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { useTheme } from "next-themes";

type SocialIconProps = {
  href: string;
  lightSrc: string;
  darkSrc: string;
  alt: string;
  event: string;
};

const SocialIcon: FC<SocialIconProps> = ({
  href,
  lightSrc,
  darkSrc,
  alt,
  event,
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Tooltip content={alt}>
      <Link href={href} data-umami-event={event}>
        <div className="relative h-8 w-8 sm:h-10 sm:w-10">
          <Image
            src={lightSrc}
            fill
            alt={`${alt} light`}
            className={`transition-opacity duration-300 ${
              mounted && resolvedTheme === "light" ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src={darkSrc}
            fill
            alt={`${alt} dark`}
            className={`transition-opacity duration-300 ${
              mounted && resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </Link>
    </Tooltip>
  );
};

const Hero: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full" id="hero">
      <div className="absolute inset-0 z-0">
        <Image
          src="/dark_gradient.svg"
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            mounted && resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
          }`}
          fill
          alt="Dark background"
          priority
        />
        <Image
          src="/light_gradient.svg"
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            mounted && resolvedTheme === "light" ? "opacity-100" : "opacity-0"
          }`}
          fill
          alt="Light background"
          priority
        />
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-0">
        <div className="text-center">
          <p className="font-extralight">
            Hello{" "}
            <span>
              <Image
                className="inline-block"
                src="/waving-hand.png"
                width={22}
                height={22}
                alt="waving"
              />
            </span>
            {"  "} I&apos;m Muhammad Alieza Nuriman
          </p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            a Full-stack sorcerer with a{" "}
            <span className="gradient-text font-bold">TypeScript</span> wand
          </h1>
          <div className="mt-6 flex justify-center gap-5">
            <SocialIcon
              href="https://github.com/Aliezan"
              lightSrc="/github-mark.svg"
              darkSrc="/github-mark-white.svg"
              alt="GitHub"
              event="github profile visited"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/muhammad-alieza-nuriman/"
              lightSrc="/linkedin-light.svg"
              darkSrc="/linkedin-dark.svg"
              alt="LinkedIn"
              event="linkedin profile visited"
            />
            <SocialIcon
              href="mailto:muhammadalieza4@gmail.com"
              lightSrc="/gmail-light.svg"
              darkSrc="/gmail-dark.svg"
              alt="Email"
              event="attempted contact by email"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
