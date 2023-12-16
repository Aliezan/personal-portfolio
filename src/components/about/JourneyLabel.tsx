import React, { FC } from 'react';

interface JourneyLabelProps {
  children: React.ReactNode;
}

const JourneyLabel: FC<JourneyLabelProps> = ({ children }) => (
  <div className='rounded-md mt-6 dark:bg-[#18181b] w-[160px] bg-white ring ring-gray-200 dark:ring-gray-800 ring-offset-0'>
    <div className='flex p-2 gap-3'>{children}</div>
  </div>
);

export default JourneyLabel;
