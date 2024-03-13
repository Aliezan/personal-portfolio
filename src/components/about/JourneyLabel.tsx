import React, { FC } from "react";

interface JourneyLabelProps {
  children: React.ReactNode;
}

const JourneyLabel: FC<JourneyLabelProps> = ({ children }) => (
  <div className="mt-6 w-[160px] rounded-md bg-white ring ring-gray-200 ring-offset-0 dark:bg-[#18181b] dark:ring-gray-800">
    <div className="flex gap-3 p-2">{children}</div>
  </div>
);

export default JourneyLabel;
