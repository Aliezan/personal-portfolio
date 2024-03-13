import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Footprints } from "lucide-react";

const StoryCard: FC = () => (
  <Card className="relative h-[541px] w-full">
    <div className="absolute right-[-500px] h-[300px] w-[750px] rotate-[95deg] bg-[#FF0095] blur-[80px]" />
    <div className="absolute bottom-[-500px] left-64 h-[750px] w-[900px] rotate-[-10deg] rounded-[100%] bg-[#8349FF] blur-[80px]" />
    <div className="absolute bottom-[-350px] right-[-200px] h-96 w-[750px] rotate-[-30deg] rounded-[100%] bg-[#FFCDFF] blur-[80px]" />
    <CardHeader className="space-y-6 pl-12 pt-10">
      <Footprints size={90} />
    </CardHeader>
    <CardBody>
      <p className="p-5 text-[20px] font-medium sm:text-[25px]">
        Started as a hobby, developing visually appealing and functional
        websites on the frontend has been my goal since the beginning. <br />
        <span className="text-gray-500">
          As I dive deeper, the JavaScript world always amazes me with how
          things can be made.
        </span>
      </p>
    </CardBody>
  </Card>
);

export default StoryCard;
