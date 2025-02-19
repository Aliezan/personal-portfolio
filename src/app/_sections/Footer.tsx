import React, { FC } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

type SocialIconProps = {
  href: string;
  lightSrc: string;
  darkSrc: string;
  alt: string;
  tooltip: string;
  dataUmamiEvent: string;
};

const SocialIcon: FC<SocialIconProps> = ({
  href,
  lightSrc,
  darkSrc,
  alt,
  tooltip,
  dataUmamiEvent,
}) => (
  <Tooltip content={tooltip}>
    <Link href={href} data-umami-event={dataUmamiEvent}>
      <div className="dark:hidden">
        <Image src={lightSrc} height={22} width={22} alt={alt} />
      </div>
      <div className="hidden dark:block">
        <Image src={darkSrc} height={22} width={22} alt={alt} />
      </div>
    </Link>
  </Tooltip>
);

const Footer: FC = () => (
  <footer className="relative flex h-[250px] w-full items-center justify-center sm:h-[120px] sm:p-[80px]">
    <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:items-center sm:gap-[90px]">
      <div className="flex flex-col items-center sm:items-start">
        <Logo logoWidth={20} logoHeight={20} fontHeight={70} fontWidth={70} />
        <p className="mt-1 text-tiny">Let&apos;s collaborate</p>
        <div className="mt-2 flex gap-3">
          <SocialIcon
            href="https://github.com/Aliezan"
            lightSrc="/github-mark.svg"
            darkSrc="/github-mark-white.svg"
            alt="gh"
            tooltip="Github"
            dataUmamiEvent="github profile clicked"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/muhammad-alieza-nuriman/"
            lightSrc="/linkedin-light.svg"
            darkSrc="/linkedin-dark.svg"
            alt="linkedin"
            tooltip="LinkedIn"
            dataUmamiEvent="linkedin profile visited"
          />
          <SocialIcon
            href="mailto:muhammadalieza4@gmail.com"
            lightSrc="/gmail-light.svg"
            darkSrc="/gmail-dark.svg"
            alt="gmail"
            tooltip="Email-me"
            dataUmamiEvent="attempted contact by email"
          />
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-tiny text-black/60 dark:text-white/60">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
