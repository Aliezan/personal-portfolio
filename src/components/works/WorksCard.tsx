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
  <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
    <Card className="relative h-auto" isFooterBlurred>
      <div className="absolute inset-0 bg-gradient-to-br from-[#390099] via-[#9e0059] to-[#ff0054] opacity-20" />
      <CardHeader className="flex-col !items-start space-y-2 p-5">
        <div className="flex items-center gap-3">
          <Image
            src="/squadspacelogo.svg"
            alt="squadspace"
            width={35}
            height={35}
          />
          <p
            className={`${SpaceGrotesk.className} text-xl font-medium sm:text-2xl lg:text-[28px]`}
          >
            Squad Space
          </p>
        </div>
        <p className="text-sm text-default-600">
          Admin app companion for Squad Space App
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip size="sm" className="bg-default text-default-foreground">
            <ExternalLink size={12} className="mr-1 inline" />
            <Link
              href="https://capstone-frontend-steel.vercel.app/"
              className="hover:underline"
            >
              Demo Link
            </Link>
          </Chip>
          <Chip size="sm" variant="flat">
            Dashboard App
          </Chip>
          <Chip size="sm" variant="flat">
            Single Page App
          </Chip>
          <Chip size="sm" variant="flat">
            Frontend
          </Chip>
          <Chip size="sm" className="bg-default text-default-foreground">
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
      <CardBody className="p-0">
        <div className="relative mb-6 h-0 w-full pb-[56.25%]">
          <Image
            src="/SquadSpaceMC.png"
            alt="squadspace"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardBody>
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-200 bg-black/40 backdrop-blur-md">
        <div className="space-y-2">
          <p className="text-tiny font-semibold text-white">Made with</p>
          <div className="flex flex-wrap gap-2">
            <Image src="/react.svg" alt="react" width={23} height={23} />
            <Image
              src="/tailwindcss.svg"
              alt="tailwind"
              width={23}
              height={23}
            />
            <Image src="/zustand.png" alt="zustand" width={23} height={23} />
            <Image src="/formik.svg" alt="formik" width={23} height={23} />
            <p className="text-tiny font-bold text-white">+4 more</p>
          </div>
        </div>
      </CardFooter>
    </Card>

    <Card className="relative h-auto" isFooterBlurred>
      <div className="absolute inset-0 bg-gradient-to-br from-[#f94144] via-[#f3722c] to-[#f8961e] opacity-20" />
      <CardHeader className="flex-col !items-start space-y-2 p-5">
        <div className="flex items-center gap-3">
          <StickyNote size={35} />
          <p
            className={`${SpaceGrotesk.className} text-xl font-medium sm:text-2xl lg:text-[28px]`}
          >
            Habit Tracker App
          </p>
        </div>
        <p className="text-sm text-default-600">
          Habit tracking app that allows you to track your habits and your
          progress
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip size="sm" variant="flat">
            Mobile Optimized View
          </Chip>
          <Chip size="sm" variant="flat">
            Single Page App
          </Chip>
          <Chip size="sm" variant="flat">
            Fullstack
          </Chip>
          <Chip size="sm" className="bg-default text-default-foreground">
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
      <CardBody className="p-0">
        <div className="relative mb-6 h-0 w-full pb-[56.25%]">
          <Image
            src="/HabitTrackerMC.png"
            alt="HabitTracker"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardBody>
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-200 bg-black/40 backdrop-blur-md">
        <div className="space-y-2">
          <p className="text-tiny font-semibold text-white">Made with</p>
          <div className="flex flex-wrap gap-2">
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
            <p className="text-tiny font-bold text-white">+4 more</p>
          </div>
        </div>
      </CardFooter>
    </Card>

    <Card
      className="relative h-auto sm:col-span-2 lg:col-span-1"
      isFooterBlurred
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#07913f] to-[#04d361] opacity-20" />
      <CardHeader className="flex-col !items-start space-y-2 p-5">
        <div className="flex items-center gap-3">
          <Image src="/fav.svg" alt="identify-logo" width={35} height={35} />
          <p
            className={`${SpaceGrotesk.className} text-xl font-medium sm:text-2xl lg:text-[28px]`}
          >
            Identify
          </p>
        </div>
        <p className="text-sm text-default-600">
          Roasts the user spotify listening history based powered by Gemini AI
          API and Vercel AI SDK (Not yet deployed due to API extension pending
          approval from spotify)
        </p>
        <div className="flex flex-wrap gap-2">
          <Chip size="sm" variant="flat">
            Dashboard App
          </Chip>
          <Chip size="sm" variant="flat">
            Frontend
          </Chip>
          <Chip size="sm" variant="flat">
            AI Generation
          </Chip>
          <Chip size="sm" className="bg-default text-default-foreground">
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
      </CardHeader>
      <CardBody className="p-0">
        <div className="relative mb-6 h-0 w-full pb-[56.25%]">
          <Image
            src="/IdentifyMC.png"
            alt="Identify"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
          />
        </div>
      </CardBody>
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-200 bg-black/40 backdrop-blur-md">
        <div className="space-y-2">
          <p className="text-tiny font-semibold text-white">Made with</p>
          <div className="flex flex-wrap gap-2">
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
            <Image
              src="/next-auth.png"
              alt="next-auth"
              width={23}
              height={23}
            />
            <p className="text-tiny font-bold text-white">+4 more</p>
          </div>
        </div>
      </CardFooter>
    </Card>

    <Card className="relative h-auto" isFooterBlurred>
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-400 opacity-20" />
      <CardHeader className="flex-col !items-start space-y-2 p-5">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <div className="relative h-[35px] w-[120px]">
            <Image
              src="/ase.webp"
              alt="ase-logo"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 120px, 120px"
            />
          </div>
          <p
            className={`${SpaceGrotesk.className} text-xl font-medium sm:text-2xl lg:text-[28px]`}
          >
            PT. Agra Sapta Energi
          </p>
        </div>
        <p className="text-sm text-default-600">
          Company Profile webpage for PT. Agra Sapta Energi, a coal mining
          company.
        </p>
        <div className="flex gap-2">
          <Chip size="sm" variant="flat">
            Frontend
          </Chip>
          <Chip size="sm" className="bg-default text-default-foreground">
            <ExternalLink size={12} className="mr-1 inline" />
            <Link href="https://aseholdco.com" className="hover:underline">
              Website Link
            </Link>
          </Chip>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="relative mb-6 w-full pb-[56.25%]">
          <Image
            src="/aseproj.svg"
            alt="ASE Project"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardBody>
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-200 bg-black/40 backdrop-blur-md">
        <div className="space-y-2">
          <p className="text-tiny font-semibold text-white">Made with</p>
          <div className="flex flex-wrap gap-2">
            <Image src="/react.svg" alt="react" width={23} height={23} />
            <Image src="/javascript.svg" alt="js" width={23} height={23} />
            <Image src="/laravel.svg" alt="laravel" width={23} height={23} />
            <Image src="/framer.svg" alt="framer" width={23} height={23} />
          </div>
        </div>
      </CardFooter>
    </Card>

    <Card className="relative h-auto" isFooterBlurred>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-400 opacity-20" />
      <CardHeader className="flex-col !items-start space-y-2 p-5">
        <div className="flex items-center gap-3">
          <Image src="/djangos.svg" alt="djangos-logo" width={50} height={35} />
          <p
            className={`${SpaceGrotesk.className} text-xl font-medium sm:text-2xl lg:text-[28px]`}
          >
            Django&apos;s Restaurant
          </p>
        </div>
        <p className="text-sm text-default-600">
          Landing page for Django&apos;s BBQ Restaurant based on Kelapa Gading,
          North Jakarta
        </p>
        <div className="flex gap-2">
          <Chip size="sm" variant="flat">
            Frontend
          </Chip>
          <Chip size="sm" className="bg-default text-default-foreground">
            <ExternalLink size={12} className="mr-1 inline" />
            <Link href="https://djangos.id" className="hover:underline">
              Website Link
            </Link>
          </Chip>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="relative mb-6 w-full pb-[56.25%]">
          <Image
            src="/djangos-prev.svg"
            alt="Django's Restaurant"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardBody>
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-200 bg-black/40 backdrop-blur-md">
        <div className="space-y-2">
          <p className="text-tiny font-semibold text-white">Made with</p>
          <div className="flex flex-wrap gap-2">
            <Image src="/next-js.svg" alt="next" width={23} height={23} />
            <Image
              src="/typescript.svg"
              alt="typescript"
              width={23}
              height={23}
            />
            <Image src="/framer.svg" alt="framer" width={23} height={23} />
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
