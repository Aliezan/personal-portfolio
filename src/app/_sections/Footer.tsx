import React, { FC } from 'react';
import Logo from '@/components/Logo';
import Link from 'next/link';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';

const Footer: FC = () => (
  <div className='flex h-[120px] w-full items-center justify-center relative'>
    <div className='w-full flex justify-between p-[60px] gap-[90px] ml-[40px]'>
      <div className='space-y-3'>
        <Logo width={70} height={70} />
        <p className='text-tiny'>Let&apos;s collaborate</p>
        <div className='flex gap-3'>
          <div className='dark:hidden'>
            <Tooltip content='Github'>
              <Link href='https://github.com/Aliezan'>
                <Image
                  src='./github-mark.svg'
                  height={22}
                  width={22}
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
                  height={22}
                  width={22}
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
                  height={22}
                  width={22}
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
                  height={22}
                  width={22}
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
                  height={22}
                  width={22}
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
                  height={22}
                  width={22}
                  alt='gmail'
                />
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className='space-y-3 mt-10'>
        <p className='dark:text-white/60 text-black/60 text-medium'>
          &copy; 2023 all rights reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
