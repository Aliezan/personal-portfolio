import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Chip,
  CardFooter,
} from "@nextui-org/react";
import { SpaceGrotesk } from "@/utils/font";
import { ExternalLink, StickyNote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const WorksCard: FC = () => (
  <div className="mt-10 grid grid-cols-1 gap-10 sm:grid sm:grid-cols-2 sm:gap-10">
    <Card
      className="relative h-[500px] sm:h-[600px] sm:w-[650px]"
      isFooterBlurred
    >
      <div className="absolute right-[-500px] h-[300px] w-[750px] rotate-[95deg] bg-[#390099] blur-[80px]" />
      <div className="absolute bottom-[-500px] left-64 h-[750px] w-[900px] rotate-[-10deg] rounded-[100%] bg-[#9e0059] blur-[80px]" />
      <div className="absolute bottom-[-350px] right-[-200px] h-96 w-[750px] rotate-[-30deg] rounded-[100%] bg-[#ff0054] blur-[80px]" />
      <CardHeader className="flex-col !items-start space-y-2 p-5">
        <div className="flex gap-3">
          <Image
            src="/squadspacelogo.svg"
            alt="squadspace"
            width={35}
            height={35}
          />
          <p className={`${SpaceGrotesk.className} text-[28px] font-medium`}>
            Squad Space
          </p>
        </div>
        <p className="text-small text-black/60 dark:text-white/60">
          Admin app companion for Squad Space App
        </p>
        <div className="flex gap-2">
          <Chip
            size="sm"
            className="bg-black text-white dark:bg-white dark:text-black"
          >
            <ExternalLink size={12} className="mr-1 inline" />
            <Link
              href="https://capstone-frontend-steel.vercel.app/"
              className="hover:underline"
            >
              Demo Link
            </Link>
          </Chip>
          <Chip size="sm" variant="faded">
            Dashboard App
          </Chip>
          <Chip size="sm" variant="faded">
            Single Page App
          </Chip>
          <Chip size="sm" variant="faded">
            Frontend
          </Chip>
          <Chip
            size="sm"
            className="bg-black text-white dark:bg-white dark:text-black"
          >
            <ExternalLink size={12} className="mr-1 inline" />
            <Link
              href="https://github.com/Aliezan/capstone-frontend"
              data-umami-event="capstone-fe repo visited"
              className="hover:underline"
            >
              Github
            </Link>
          </Chip>
        </div>
      </CardHeader>
      <CardBody className="relative flex items-center">
        <Image
          src="/SquadSpaceMC.png"
          alt="squadspace"
          width={500}
          height={500}
        />
      </CardBody>
      <CardFooter className="absolute bottom-0 left-0 z-10 border-t-1 border-white/20 before:bg-white/100">
        <div className="space-y-3 p-2">
          <p className="text-tiny font-semibold text-black dark:text-white">
            Made with
          </p>
          <div className="flex gap-2">
            <Image src="/react.svg" alt="react" width={23} height={23} />
            <Image
              src="/tailwindcss.svg"
              alt="tailwind"
              width={23}
              height={23}
            />
            <Image src="/zustand.png" alt="react" width={23} height={23} />
            <Image src="/formik.svg" alt="formik" width={23} height={23} />
            <p className="mt-1 text-small font-bold">+4 more</p>
          </div>
        </div>
      </CardFooter>
    </Card>

    <Card className="relative h-[540px] w-full sm:h-[600px]" isFooterBlurred>
      <div className="absolute right-[-500px] h-[300px] w-[750px] rotate-[95deg] bg-[#f94144] blur-[80px]" />
      <div className="absolute bottom-[-500px] left-64 h-[750px] w-[900px] rotate-[-10deg] rounded-[100%] bg-[#f3722c] blur-[80px]" />
      <div className="absolute bottom-[-350px] right-[-200px] h-96 w-[750px] rotate-[-30deg] rounded-[100%] bg-[#f8961e] blur-[80px]" />
      <CardHeader className="flex-col !items-start space-y-2 p-5">
        <div className="flex gap-3">
          <StickyNote size={35} />
          <p className={`${SpaceGrotesk.className} text-[28px] font-medium`}>
            Habit Tracker App
          </p>
        </div>
        <p className="text-small text-black/60 dark:text-white/60">
          Habit tracking app that allows you to track your habits and your
          progress
        </p>
        <div className="flex gap-2">
          <Chip size="sm" variant="faded">
            Mobile Optimized View
          </Chip>
          <Chip size="sm" variant="faded">
            Single Page App
          </Chip>
          <Chip size="sm" variant="faded">
            Fullstack
          </Chip>
          <Chip
            size="sm"
            className="bg-black text-white dark:bg-white dark:text-black"
          >
            <ExternalLink size={12} className="mr-1 inline" />
            <Link
              href="https://github.com/Aliezan/habits-tracker-app"
              data-umami-event="habits-tracker-app repo visited"
              className="hover:underline"
            >
              Github
            </Link>
          </Chip>
        </div>
      </CardHeader>
      <CardBody className="relative flex items-center">
        <Image
          src="/HabitTrackerMC.png"
          alt="HabitTracker"
          width={500}
          height={500}
        />
      </CardBody>
      <CardFooter className="absolute bottom-0 left-0 z-10 border-t-1 border-white/20 before:bg-white/100">
        <div className="space-y-3 p-2">
          <p className="text-tiny font-semibold text-black dark:text-white">
            Made with
          </p>
          <div className="flex gap-2">
            <Image src="/react.svg" alt="react" width={23} height={23} />
            <Image
              src="/tailwindcss.svg"
              alt="tailwind"
              width={23}
              height={23}
            />
            <Image src="/graphql.svg" alt="graphql" width={23} height={23} />
            <Image src="/apollo.svg" alt="apollo" width={23} height={23} />
            <Image src="/formik.svg" alt="formik" width={23} height={23} />
            <p className="mt-1 text-small font-bold">+4 more</p>
          </div>
        </div>
      </CardFooter>
    </Card>
    <Card
      className="relative h-[400px] w-full sm:col-span-2 sm:h-[600px]"
      isFooterBlurred
    >
      <div className="absolute bottom-[-150px] left-[-200px] h-96 w-[750px] rotate-[-30deg] rounded-[100%] bg-[#07913f] blur-[80px]" />
      <CardHeader className="flex-col !items-start space-y-2 p-5">
        <div className="flex gap-3">
          <Image src="/fav.svg" alt="identify-logo" width={35} height={35} />
          <p className={`${SpaceGrotesk.className} text-[28px] font-medium`}>
            Identify
          </p>
        </div>
        <p className="text-small text-black/60 dark:text-white/60">
          Roasts the user spotify listening history based powered by Gemini AI
          API and Vercel AI SDK (Not yet deployed due to API extension pending
          approval from spotify)
        </p>
        <div className="flex gap-2">
          <Chip size="sm" variant="faded">
            Dashboard App
          </Chip>
          <Chip size="sm" variant="faded">
            Frontend
          </Chip>
          <Chip size="sm" variant="faded">
            AI Generation
          </Chip>
          <Chip
            size="sm"
            className="bg-black text-white dark:bg-white dark:text-black"
          >
            <ExternalLink size={12} className="mr-1 inline" />
            <Link
              href="https://github.com/Aliezan/identify"
              data-umami-event="identify repo visited"
              className="hover:underline"
            >
              Github
            </Link>
          </Chip>
        </div>
        <CardBody className="relative flex items-center">
          <Image
            src="/IdentifyMC.png"
            alt="squadspace"
            width={800}
            height={800}
          />
        </CardBody>
        <CardFooter className="absolute bottom-0 left-0 z-10 border-t-1 border-white/20 before:bg-white/100">
          <div className="space-y-3 p-2">
            <p className="text-tiny font-semibold text-black dark:text-white">
              Made with
            </p>
            <div className="flex">
              <div className="flex gap-2">
                <Image src="/next-js.svg" alt="next" width={23} height={23} />
                <Image
                  src="/tailwindcss.svg"
                  alt="tailwind"
                  width={23}
                  height={23}
                />
                <Image
                  src="/react-query-icon.svg"
                  alt="react-query"
                  width={23}
                  height={23}
                />
                <Image src="/typescript.svg" alt="ts" width={23} height={23} />
                <Image src="/next-auth.png" alt="ts" width={23} height={23} />
                <p className="mt-1 text-small font-bold">+4 more</p>
              </div>
            </div>
          </div>
        </CardFooter>
      </CardHeader>
    </Card>
    <Card className="relative h-full w-full" isFooterBlurred>
      <div className="absolute bottom-[-100px] left-[-100px] h-[300px] w-[500px] rounded-full bg-gradient-to-tr from-red-500 to-red-400 opacity-50 blur-[40px]" />
      <CardHeader className="flex-col !items-start space-y-2 p-5">
        <div className="flex gap-3">
          <Image src="/ase.webp" alt="identify-logo" width={120} height={35} />
          <p className={`${SpaceGrotesk.className} text-[28px] font-medium`}>
            PT. Agra Sapta Energi
          </p>
        </div>
        <p className="text-small text-black/60 dark:text-white/60">
          Company Profile webpage for PT. Agra Sapta Energi, a coal mining
          company.
        </p>
        <div className="flex gap-2">
          <Chip size="sm" variant="faded">
            Frontend
          </Chip>
        </div>
      </CardHeader>
      <CardBody className="relative grid justify-center">
        <Image src="/aseproj.svg" alt="HabitTracker" width={500} height={500} />
      </CardBody>
      <CardFooter className="absolute bottom-0 left-0 z-10 border-t-1 border-white/20 before:bg-white/100">
        <div className="space-y-3 p-2">
          <p className="text-tiny font-semibold text-black dark:text-white">
            Made with
          </p>
          <div className="flex gap-2">
            <Image src="/react.svg" alt="react" width={23} height={23} />
            <Image src="/javascript.svg" alt="js" width={23} height={23} />
            <Image src="/laravel.svg" alt="js" width={23} height={23} />
            <Image src="/framer.svg" alt="next" width={23} height={23} />
          </div>
        </div>
      </CardFooter>
    </Card>

    <Card className="relative h-[500px] w-full" isFooterBlurred>
      <div className="absolute bottom-[-100px] left-[-100px] h-[300px] w-[500px] rounded-full bg-gradient-to-tr from-orange-500 to-orange-400 opacity-50 blur-[40px]" />
      <CardHeader className="flex-col !items-start space-y-2 p-5">
        <div className="flex gap-3">
          <Image
            src="/djangos.svg"
            alt="identify-logo"
            width={50}
            height={35}
          />
          <p className={`${SpaceGrotesk.className} text-[28px] font-medium`}>
            Django’s Restaurant
          </p>
        </div>
        <p className="text-small text-black/60 dark:text-white/60">
          Landing page for Django’s BBQ Restaurant based on Kelapa Gading, North
          Jakarta
        </p>
        <div className="flex gap-2">
          <Chip size="sm" variant="faded">
            Frontend
          </Chip>
        </div>
      </CardHeader>
      <CardBody className="relative grid justify-center">
        <Image
          src="/djangos-prev.svg"
          alt="HabitTracker"
          width={500}
          height={500}
        />
      </CardBody>
      <CardFooter className="absolute bottom-0 left-0 z-10 border-t-1 border-white/20 before:bg-white/100">
        <div className="space-y-3 p-2">
          <p className="text-tiny font-semibold text-black dark:text-white">
            Made with
          </p>
          <div className="flex gap-2">
            <Image src="/next-js.svg" alt="next" width={23} height={23} />
            <Image src="/typescript.svg" alt="next" width={23} height={23} />
            <Image src="/framer.svg" alt="next" width={23} height={23} />
            <Image
              src="/tailwindcss.svg"
              alt="tailwind"
              width={23}
              height={23}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  </div>
);

export default WorksCard;
