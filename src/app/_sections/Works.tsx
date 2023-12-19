import React, { FC } from 'react';
import { Chip } from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';
import WorksCard from '@/components/works/WorksCard';

const Works: FC = () => (
  <section
    className='h-[2000px] flex justify-center dark:bg-[#fcfaf8] bg-[#171a26]'
    id='works'
  >
    <div>
      <div className='flex items-center justify-center mt-[50px]'>
        <Chip size='lg'>Works</Chip>
      </div>
      <div className='mt-4'>
        <div className='flex justify-center items-center'>
          <h1
            className={`${SpaceGrotesk.className} font-medium text-[40px] dark:text-black text-white`}
          >
            Selection of my works
          </h1>
        </div>
        <div className='flex justify-center items-center mt-3 mb-[55px]'>
          <p className='text-center w-[500px] dark:text-black text-white'>
            I have been working on some projects, mostly are personal projects I
            love to work on projects that are challenging and fun to do.
          </p>
        </div>
        <div className='grid grid-cols-2 mt-10 gap-5'>
          <WorksCard />
        </div>
      </div>
    </div>
  </section>
);

export default Works;
