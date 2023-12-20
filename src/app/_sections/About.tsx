import React, { FC } from 'react';
import { Chip } from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';
import MainStacks from '@/components/about/MainStacks';
import LibraryCard from '@/components/about/LibraryCard';
import StoryCard from '@/components/about/StoryCard';
import Journey from '@/components/about/Journey';

const About: FC = () => (
  <section
    className='h-[3700px] mt-5 sm:h-[2300px] flex justify-center dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative'
    id='about'
  >
    <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)] sm:[mask-image:radial-gradient(ellipse_at_center,transparent_63%,black)]' />
    <div className='w-[500px] sm:w-full'>
      <div className='flex items-center justify-center mt-10'>
        <Chip size='lg'>About</Chip>
      </div>
      <div className='mt-4'>
        <div className='flex justify-center items-center'>
          <h1
            className={`${SpaceGrotesk.className} text-[20px] sm:text-[40px] font-medium`}
          >
            Every developer has their own chosen path
          </h1>
        </div>
        <div className='flex justify-center items-center mt-3 mb-[55px]'>
          <p className='text-[13px] w-[300px] sm:w-[550px] text-center'>
            So as me, the Frontend world always been my interest since I started
            learning React as my main library in the JavaScript world of
            libraries.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 justify-items-center sm:flex sm:justify-center sm:items-center gap-[30px]'>
        <StoryCard />
        <div className='space-y-[30px]'>
          <MainStacks />
          <LibraryCard />
        </div>
      </div>
      <Journey />
    </div>
  </section>
);

export default About;
