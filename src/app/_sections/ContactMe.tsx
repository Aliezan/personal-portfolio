import React, { FC } from "react";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { SpaceGrotesk } from "@/lib/font";

const ContactMe: FC = () => (
  <section className="relative flex h-fit items-center justify-center bg-white p-7 bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-black" />
    <div className="relative grid grid-cols-1 items-center justify-center justify-items-center space-y-10 px-7 sm:flex sm:justify-between sm:gap-[100px]">
      <div
        className="h-[200px] w-[200px]"
        style={{
          position: "relative",
        }}
      >
        <Image
          src="/profilepic.jpg"
          alt="image"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "100px",
          }}
        />
      </div>
      <div className="sm:mb-4">
        <h1
          className={`${SpaceGrotesk.className} text-center text-[30px] font-medium sm:text-[45px]`}
        >
          Get in touch!
        </h1>
        <div className="grid gap-3 sm:w-[500px]">
          <p className="text-center text-small">
            If you want to just connect with me in Linkedin or want to know me
            more, here&apos;s my personal CV for you to look at.
          </p>
          <p className="text-center text-xs italic text-gray-400">
            pssst... for privacy reasons, all personal info is redacted. For
            further info you could contact me!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button
            data-umami-event="CV Downloaded"
            color="success"
            radius="sm"
            className="mt-3"
            as={Link}
            href="https://drive.google.com/uc?export=download&id=11XYOb5cGoK4jarRzTUGHHCgGc3LIv5U1"
            showAnchorIcon
          >
            Download CV
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMe;
