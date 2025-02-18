"use client";

import React, { FC } from "react";
import { SpaceGrotesk } from "@/lib/font";
import { TriangleAlert } from "lucide-react";
import { Button } from "@nextui-org/react";

const Error: FC<{ error: Error & { digest?: string }; reset: () => void }> = ({
  error,
  reset,
}) => (
  <main className="mt-5 grid h-screen items-center">
    <div className="grid grid-rows-2 gap-3">
      <div className="flex justify-center gap-4">
        <TriangleAlert size={50} />
        <h1 className={`${SpaceGrotesk.className} text-center text-5xl`}>
          Uh oh. Something went wrong!
        </h1>
      </div>
      <p className={`${SpaceGrotesk.className} text-center`}>
        Please try again.
      </p>
      <p className="text-center">Error message: {error.message}</p>
      <div className="flex items-center justify-center">
        <Button
          color="secondary"
          className="w-40"
          type="button"
          onClick={() => reset()}
        >
          Reload Tab
        </Button>
      </div>
    </div>
  </main>
);

export default Error;
