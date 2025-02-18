import React, { FC } from "react";
import { SpaceGrotesk } from "@/lib/font";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Newspaper, BookOpen, ExternalLink, TrendingUp } from "lucide-react";
import certs from "@/data/certs";
import Link from "next/link";
import JourneyLabel from "./JourneyLabel";
import CertsAccordion from "./CertsAccordion";

const Journey: FC = () => (
  <div className="mt-[100px] w-full">
    <div className="flex items-center justify-center">
      <h1
        className={`${SpaceGrotesk.className} text-center text-[30px] font-medium sm:text-[40px]`}
      >
        Journey into greatness
      </h1>
    </div>
    <div className="mt-3 flex items-center justify-center">
      <p className="w-[300px] text-center text-[13px] sm:w-[550px]">
        Every journey has a start, each step shaped me into a good devs.
        Countless hours and those sleepless nights, I&apos;ve been through it
        all.
      </p>
    </div>
    <div className="mt-[100px] flex items-center justify-center">
      <div className="space-y-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-[200px]">
          <div className="flex items-center">
            <div>
              <div className="flex gap-3">
                <Image
                  src="/dicoding.jpeg"
                  width={50}
                  height={20}
                  alt="dicoding"
                />
                <h1
                  className={`${SpaceGrotesk.className} mt-2 text-[20px] font-medium sm:mt-0 sm:text-[30px]`}
                >
                  Dicoding Indonesia
                </h1>
              </div>
              <p className="mt-3 text-small md:w-[400px]">
                Dicoding is developer end-to-end platform comprises of online
                learning program & platform in Indonesia. &nbsp;I&apos;ve been
                getting over 10+ certifications from beginner to advanced levels
                course
              </p>
              <JourneyLabel>
                <Newspaper size={20} />
                <p className={SpaceGrotesk.className}>Certifications</p>
              </JourneyLabel>
            </div>
          </div>
          <Card className="h-[400px] w-full sm:w-[500px]">
            <CardHeader className="pl-6 pt-6">
              <p className="text-tiny uppercase text-black/60 dark:text-white/60">
                List of certificates
              </p>
            </CardHeader>
            <CardBody>
              <div className="p-2">
                <CertsAccordion certs={certs} />
              </div>
            </CardBody>
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-[#54f362] dark:bg-white">
              <div className="p-1">
                <p className="text-tiny font-semibold text-black">
                  Did you know?
                </p>
                <p className="text-tiny text-black">
                  I&apos;ve got all this courses and certs for free through many
                  scholarship programme
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-10 sm:gap-[200px] md:flex-row md:justify-between">
          <div className="flex items-center">
            <div>
              <div className="flex gap-3">
                <Image
                  src="/alterra-academy.png"
                  width={75}
                  height={10}
                  alt="alterra"
                />
                <h1
                  className={`${SpaceGrotesk.className} mt-2 text-[20px] font-medium sm:mt-0 sm:text-[30px]`}
                >
                  Alterra Academy
                </h1>
              </div>
              <p className="mt-3 text-small md:w-[400px]">
                Alterra Academy is one of the Kampus Merdeka partners that
                allowed me to learn extensively about React Ecosystem in a
                4-month programme complete with Individual and Capstone Project
              </p>
              <div className="flex gap-3">
                <JourneyLabel>
                  <BookOpen size={20} className="mt-[5px]" />
                  <p className={`${SpaceGrotesk.className} text-tiny`}>
                    Independent Study
                  </p>
                </JourneyLabel>
                <JourneyLabel>
                  <Image
                    src="/km.png"
                    alt="kmk"
                    width={30}
                    height={10}
                    className="mt-[5px]"
                  />
                  <p className={`${SpaceGrotesk.className} mt-[5px] text-tiny`}>
                    Kampus Merdeka
                  </p>
                </JourneyLabel>
              </div>
              <JourneyLabel>
                <Newspaper size={20} />
                <p className={SpaceGrotesk.className}>Certifications</p>
              </JourneyLabel>
            </div>
          </div>
          <Card
            className="relative h-[400px] w-full sm:w-[500px]"
            isFooterBlurred
          >
            <div className="absolute bottom-[-200px] left-[50px] h-[391px] w-[919px] rounded-l-[20px] bg-[#FE7600] blur-[80px]" />
            <CardHeader className="pl-6 pt-6">
              <p className="text-tiny uppercase text-black/60 dark:text-white/60">
                programme description
              </p>
            </CardHeader>
            <CardBody className="relative">
              <div className="w-[300px] space-y-3 p-5">
                <p className="text-[16px] font-medium">
                  This program wasn&apos;t just about React basics; it took me
                  all the way to global state management with seamless
                  serverless API integration.
                </p>
                <p className="text-[16px] font-medium">
                  Moreover, i got the chance to lead a frontend team to build a
                  capstone project
                </p>
                <div className="hidden md:block">
                  <TrendingUp
                    className="absolute right-[50px] top-[60px]"
                    size={100}
                  />
                </div>
              </div>
            </CardBody>
            <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] overflow-hidden rounded-large border-1 border-white/20 py-3 shadow-small before:rounded-xl before:bg-white/10">
              <Link
                href="https://drive.google.com/uc?export=download&id=1Gb2X9izrRHjlqW4CJ5SYihJZNrnZigXi"
                className="flex justify-between gap-[10px]"
              >
                <p className="text-tiny font-semibold hover:underline">
                  Certification Link
                </p>
                <ExternalLink size={15} />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Journey;
