import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: FC = () => (
  <section className='h-[700px] flex items-center justify-center dark:bg-[url("/minimal-black.svg")] bg-[url("/minimal.svg")] bg-cover'>
    <div className='bg-white dark:bg-black'>
      <div className='w-[1300px] h-[450px] flex items-center pl-10 relative'>
        {' '}
        <div>
          <p className='font-extralight text-[30px]'>
            Hello{' '}
            <span>
              <Image
                className='inline-block'
                src='/waving-hand.png'
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
              <Link href='https://github.com/Aliezan'>
                <Image src='github-mark.svg' height={30} width={30} alt='gh' />
              </Link>
            </div>
            <div className='hidden dark:block'>
              <Link href='https://github.com/Aliezan'>
                <Image
                  src='github-mark-white.svg'
                  height={30}
                  width={30}
                  alt='gh'
                />
              </Link>
            </div>
            <div className='dark:hidden'>
              <Link href='https://www.linkedin.com/in/muhammad-alieza-nuriman/'>
                <Image
                  src='linkedin-light.svg'
                  height={30}
                  width={30}
                  alt='linkedin'
                />
              </Link>
            </div>
            <div className='hidden dark:block'>
              <Link href='https://www.linkedin.com/in/muhammad-alieza-nuriman/'>
                <Image
                  src='linkedin-dark.svg'
                  height={30}
                  width={30}
                  alt='linkedin'
                />
              </Link>
            </div>
            <div className='dark:hidden'>
              <Link href='mailto:muhammadalieza4@gmail.com'>
                <Image
                  src='gmail-light.svg'
                  height={30}
                  width={30}
                  alt='gmail'
                />
              </Link>
            </div>
            <div className='hidden dark:block'>
              <Link href='mailto:muhammadalieza4@gmail.com'>
                <Image
                  src='gmail-dark.svg'
                  height={30}
                  width={30}
                  alt='gmail'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
