import React, { FC } from 'react';
import { Chip } from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';
import WorksCard from '@/components/works/WorksCard';

const Works: FC = () => (
  <section
    className='h-[2800px] sm:h-[1650px] flex justify-center dark:bg-[#fcfaf8] bg-[#171a26] dark:bg-grid-small-black/[0.2] bg-grid-small-white/[0.2] relative'
    id='works'
  >
    <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
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
