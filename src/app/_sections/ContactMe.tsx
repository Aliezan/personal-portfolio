import React, { FC } from 'react';
import Image from 'next/image';
import { Button, Link } from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';

const ContactMe: FC = () => (
  <section className='h-[400px] dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'>
    <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]' />
    <div className='flex justify-between gap-[300px]'>
      <div>
        <h1 className={`${SpaceGrotesk.className} font-medium text-[45px]`}>
          Get in touch!
        </h1>
        <p className='text-small w-[500px]'>
          If you want to just connect with me in Linkedin or want to know me
          more, here&apos;s my personal CV for you to look at.
        </p>
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
        <p className='text-tiny italic mt-10 w-[350px]'>
          *The CV that provided on the link above is with censored personal
          info, if you want to see the full version, please contact me.
        </p>
      </div>
      <div
        className='flex h-[200px] w-[200px]'
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
    </div>
  </section>
);

export default ContactMe;
