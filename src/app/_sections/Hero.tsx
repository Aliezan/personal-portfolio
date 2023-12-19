import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from '@nextui-org/react';
import { prefix } from '@/utils/prefix';

const Hero: FC = () => (
  <section
    className='relative h-[700px] flex items-center justify-center'
    id='hero'
  >
    <Image
      src={`${prefix}/minimal.svg`}
      fill
      alt='Background Image'
      quality={100}
      className='absolute inset-0 z-[-1] dark:hidden object-cover w-full h-full'
    />
    <Image
      src={`${prefix}/minimal-black.svg`}
      alt='Background Image'
      fill
      quality={100}
      className='absolute inset-0 z-[-1] dark:block hidden object-cover w-full h-full'
    />
    <div className='bg-[#fcfaf8] dark:bg-black'>
      <div className='w-[1300px] h-[450px] flex items-center pl-10 relative'>
        {' '}
        <div>
          <p className='font-extralight text-[30px]'>
            Hello{' '}
            <span>
              <Image
                className='inline-block'
                src={`${prefix}/waving-hand.png`}
                width={22}
                height={22}
                alt='waving'
              />
            </span>
            {'  '} I&apos;m Muhammad Alieza Nuriman
          </p>
          <div>
            <h1 className='text-[60px] font-semibold w-[850px]'>
              Web Developer and{' '}
              <span className='font-bold text-[64px] gradient-text'>
                JavaScript
              </span>{' '}
              enthusiast
            </h1>
          </div>
          <div className='flex absolute left-[1085px] gap-5 mt-[20px]'>
            {' '}
            <div className='dark:hidden'>
              <Tooltip content='Github'>
                <Link href='https://github.com/Aliezan'>
                  <Image
                    src={`${prefix}/github-mark.svg`}
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
                    src={`${prefix}/github-mark-white.svg`}
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
                    src={`${prefix}/linkedin-light.svg`}
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
                    src={`${prefix}/linkedin-dark.svg`}
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
                    src={`${prefix}/gmail-light.svg`}
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
                    src={`${prefix}/gmail-dark.svg`}
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
