'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from '@nextui-org/react';
import BackgroundBeams from '@/components/hero/BackgroundBeams';

const Hero: FC = () => (
  <section
    className='h-[700px] relative flex items-center justify-center bg-neutral-50 dark:bg-neutral-950'
    id='hero'
  >
    <BackgroundBeams />
    <div>
      <div className='w-[400px] sm:w-[1300px] h-[450px] flex items-center pl-10 relative'>
        <div>
          <p className='text-[15px] sm:text-[30px] font-extralight'>
            Hello{' '}
            <span>
              <Image
                className='inline-block'
                src='./waving-hand.png'
                width={22}
                height={22}
                alt='waving'
              />
            </span>
            {'  '} I&apos;m Muhammad Alieza Nuriman
          </p>
          <div className='relative'>
            <h1 className='text-[30px] sm:text-[60px] sm:w-[850px] font-semibold '>
              Web Developer and{' '}
              <span className='font-bold sm:text-[64px] gradient-text'>
                JavaScript
              </span>{' '}
              enthusiast
            </h1>
          </div>
          <div className='flex gap-5 mt-[20px]'>
            {' '}
            <div className='dark:hidden'>
              <Tooltip content='Github'>
                <Link href='https://github.com/Aliezan'>
                  <Image
                    src='./github-mark.svg'
                    height={30}
                    width={30}
                    alt='gh'
                  />
                </Link>
              </Tooltip>
            </div>
            <div className='hidden dark:block'>
              <Tooltip content='Github'>
                <Link href='https://github.com/Aliezan'>
                  <Image
                    src='./github-mark-white.svg'
                    height={30}
                    width={30}
                    alt='gh'
                  />
                </Link>
              </Tooltip>
            </div>
            <div className='dark:hidden'>
              <Tooltip content='LinkedIn'>
                <Link href='https://www.linkedin.com/in/muhammad-alieza-nuriman/'>
                  <Image
                    src='./linkedin-light.svg'
                    height={30}
                    width={30}
                    alt='linkedin'
                  />
                </Link>
              </Tooltip>
            </div>
            <div className='hidden dark:block'>
              <Tooltip content='LinkedIn'>
                <Link href='https://www.linkedin.com/in/muhammad-alieza-nuriman/'>
                  <Image
                    src='./linkedin-dark.svg'
                    height={30}
                    width={30}
                    alt='linkedin'
                  />
                </Link>
              </Tooltip>
            </div>
            <div className='dark:hidden'>
              <Tooltip content='Email-me'>
                <Link href='mailto:muhammadalieza4@gmail.com'>
                  <Image
                    src='./gmail-light.svg'
                    height={30}
                    width={30}
                    alt='gmail'
                  />
                </Link>
              </Tooltip>
            </div>
            <div className='hidden dark:block'>
              <Tooltip content='Email-me'>
                <Link href='mailto:muhammadalieza4@gmail.com'>
                  <Image
                    src='./gmail-dark.svg'
                    height={30}
                    width={30}
                    alt='gmail'
                  />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
