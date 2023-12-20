import React, { FC } from 'react';
import { Chip } from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';
import WorksCard from '@/components/works/WorksCard';

const Works: FC = () => (
  <section
    className='h-[2800px] sm:h-[1650px] flex justify-center dark:bg-[#fcfaf8] bg-[#171a26]'
    id='works'
  >
    <div>
      <div className='flex items-center justify-center mt-[50px]'>
        <Chip size='lg'>Works</Chip>
      </div>
      <div className='mt-4'>
        <div className='flex justify-center items-center'>
          <h1
            className={`${SpaceGrotesk.className} text-[20px] sm:text-[40px] font-medium dark:text-black text-white`}
          >
            Selection of my works
          </h1>
        </div>
        <div className='flex justify-center items-center mt-3'>
          <p className='text-[13px] w-[300px] sm:w-[550px] text-center dark:text-black text-white'>
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
