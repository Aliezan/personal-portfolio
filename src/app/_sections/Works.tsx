import React, { FC } from "react";
import { Chip } from "@nextui-org/react";
import { SpaceGrotesk } from "@/lib/font";
import WorksCard from "@/components/works/WorksCard";

const Works: FC = () => (
  <section
    className="relative flex min-h-screen justify-center bg-[#171a26] bg-grid-small-white/[0.2] dark:bg-[#fcfaf8] dark:bg-grid-small-black/[0.2]"
    id="works"
  >
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
    <div className="p-7">
      <div className="mt-[50px] flex items-center justify-center">
        <Chip size="lg">Works</Chip>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-center">
          <h1
            className={`${SpaceGrotesk.className} text-[20px] font-medium text-white dark:text-black sm:text-[40px]`}
          >
            Selection of my works
          </h1>
        </div>
        <div className="mt-3 flex items-center justify-center">
          <p className="w-[300px] text-center text-[13px] text-white dark:text-black sm:w-[550px]">
            I have been working on some projects, mostly are personal projects I
            love to work on projects that are challenging and fun to do.
          </p>
        </div>
        <WorksCard />
      </div>
    </div>
  </section>
);

export default Works;
