import React, { FC } from 'react';
import { Chip } from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';
import MainStacks from '@/app/_about/MainStacks';
import LibraryCard from '@/app/_about/LibraryCard';
import StoryCard from '@/app/_about/StoryCard';
import Journey from '@/app/_about/Journey';

const About: FC = () => (
  <section className='h-[2300px] flex items-center justify-center' id='about'>
    <div>
      <div className='flex items-center justify-center mt-10'>
        <Chip size='lg'>About</Chip>
      </div>
      <div className='mt-4'>
        <div className='flex justify-center items-center'>
          <h1 className={`${SpaceGrotesk.className} font-medium text-[40px]`}>
            Every developer has their own chosen path
          </h1>
        </div>
        <div className='flex justify-center items-center mt-3 mb-[55px]'>
          <p className='text-center w-[550px]'>
            So as me, the Frontend world always been my interest since I started
            learning React as my main library in the JavaScript world of
            libraries.
          </p>
        </div>
      </div>
      <div className='flex gap-[60px]'>
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
