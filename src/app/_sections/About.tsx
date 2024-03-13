import React, { FC } from "react";
import { Chip } from "@nextui-org/react";
import { SpaceGrotesk } from "@/utils/font";
import MainStacks from "@/components/about/MainStacks";
import LibraryCard from "@/components/about/LibraryCard";
import StoryCard from "@/components/about/StoryCard";
import Journey from "@/components/about/Journey";

const About: FC = () => (
  <section
    className="relative flex min-h-screen justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
    id="about"
  >
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)] dark:bg-black sm:[mask-image:radial-gradient(ellipse_at_center,transparent_63%,black)]" />
    <div className="overflow-hidden p-7">
      <div className="mt-10 flex items-center justify-center">
        <Chip size="lg">About</Chip>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-center">
          <h1
            className={`${SpaceGrotesk.className} w-[300px] text-center text-[17px] font-medium md:w-fit lg:text-[40px]`}
          >
            Every developer has their own chosen path
          </h1>
        </div>
        <div className="mb-[55px] mt-3 flex items-center justify-center">
          <p className="w-fit px-7 text-center text-[13px]">
            So as me, the Web Developer world always been my interest since I
            started learning React as my main library in the JavaScript world of
            libraries.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col justify-items-center gap-[30px] sm:max-w-[1200px] sm:flex-row">
        <StoryCard />
        <div className="space-y-[30px]">
          <MainStacks />
          <LibraryCard />
        </div>
      </div>
      <Journey />
    </div>
  </section>
);

export default About;
