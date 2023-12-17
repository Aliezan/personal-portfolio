import React, { FC } from 'react';
import { Chip } from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';

const Works: FC = () => (
  <section
    className='h-[2000px] flex items-center justify-center bg-[#fcfaf8]'
    id='works'
  >
    <div>
      <div className='flex items-center justify-center'>
        <Chip size='lg'>Works</Chip>
      </div>
      <div className='mt-4'>
        <div className='flex justify-center items-center'>
          <h1 className={`${SpaceGrotesk.className} font-medium text-[40px]`}>
            Selection of my works
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export default Works;
