import React, { FC } from "react";
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";

const MainStacks: FC = () => (
  <Card className="relative h-[255.5px] p-2">
    <div className="absolute bottom-[-338px] right-[300px] h-[391px] w-[919px] bg-[#0034EB] blur-[80px]" />
    <div className="absolute bottom-[-338px] left-[-300px] h-[391px] w-[919px] bg-[#00F3F9] blur-[80px]" />

    <CardBody>
      <div className="flex flex-col overflow-hidden sm:flex-row sm:gap-[100px]">
        <div className="mb-3 flex items-center md:mb-0">
          <h1 className="ml-0 text-[15px] font-medium sm:text-[20px] md:ml-[30px]">
            Main Stacks
          </h1>
        </div>
        <div className="space-y-3">
          <div className="flex h-[35px] items-center justify-start gap-16 overflow-hidden rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black sm:w-[280px] md:h-[45px]">
            <Image
              src="/next-js.svg"
              width={120}
              height={120}
              alt="nextjs"
              className="ml-3 h-fit object-cover"
            />
            <p className="mr-2 text-small text-white">Next.js</p>
          </div>
          <div className="flex h-[35px] items-center justify-start gap-16 overflow-hidden rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black sm:w-[280px] md:h-[45px]">
            <Image
              src="/react.svg"
              width={120}
              height={120}
              alt="react"
              className="ml-3 h-fit object-cover"
            />
            <p className="mr-2 text-small text-white">React.js</p>
          </div>
          <div className="flex h-[35px] items-center justify-start gap-16 overflow-hidden rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black sm:w-[280px] md:h-[45px]">
            <Image
              src="/prisma-3.svg"
              width={120}
              height={120}
              alt="prisma-orm"
              className="ml-3 h-fit object-cover"
            />
            <p className="mr-2 text-small text-white">Prisma</p>
          </div>
          <div className="flex h-[35px] items-center justify-start gap-16 overflow-hidden rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black sm:w-[280px] md:h-[45px]">
            <Image
              src="/trpc.svg"
              width={120}
              height={120}
              alt="trpc"
              className="ml-3 h-fit object-cover"
            />
            <p className="mr-2 text-small text-white">tRPC</p>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
);

export default MainStacks;
