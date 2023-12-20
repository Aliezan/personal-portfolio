import React, { FC } from 'react';
import Image from 'next/image';
import { Button, Link } from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';

const ContactMe: FC = () => (
  <section className='h-[600px] sm:h-[400px] dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'>
    <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]' />
    <div className='grid grid-cols-1 space-y-10 items-center justify-center justify-items-center relative sm:flex sm:justify-between sm:gap-[100px]'>
      <div
        className='h-[200px] w-[200px]'
        style={{
          position: 'relative',
        }}
      >
        <Image
          src='/profilepic.jpg'
          alt='image'
          fill
          style={{
            objectFit: 'cover',
            borderRadius: '100px',
          }}
        />
      </div>
      <div className='sm:mb-4'>
        <h1
          className={`${SpaceGrotesk.className} font-medium text-[30px] text-center sm:text-[45px] sm:text-normal`}
        >
          Get in touch!
        </h1>
        <p className='text-center text-small sm:w-[500px] w-[400px]'>
          If you want to just connect with me in Linkedin or want to know me
          more, here&apos;s my personal CV for you to look at.
        </p>
        <div className='flex justify-center items-center'>
          <Button
            color='success'
            radius='sm'
            className='mt-3'
            as={Link}
            href='/'
            showAnchorIcon
          >
            View CV
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMe;
