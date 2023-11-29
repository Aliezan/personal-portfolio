import React, { FC } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const About: FC = () => (
  <section className='h-[700px] flex items-center justify-center'>
    <div className='flex gap-[60px]'>
      <Card className='w-[521px] h-[541px]' />
      <div className='space-y-[30px]'>
        <Card className='w-[521px] h-[255.5px] bg-[#E0FF00] p-2'>
          <CardBody>
            <div className='flex overflow-hidden gap-[100px]'>
              <div className='flex items-center'>
                <h1 className='ml-[30px] text-black text-[20px]'>
                  Main Stacks
                </h1>
              </div>
              <div className='space-y-3'>
                <div className='w-[280px] h-[45px] rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black flex items-center justify-start overflow-hidden gap-16'>
                  <Image
                    src='/next-js.svg'
                    width={120}
                    height={120}
                    alt='trpc'
                    className='max-w-full max-h-full object-cover ml-3'
                  />
                  <p className='mr-2 text-white'>Next.js</p>
                </div>
                <div className='w-[280px] h-[45px] rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black flex items-center justify-start overflow-hidden gap-16'>
                  <Image
                    src='/react.svg'
                    width={120}
                    height={120}
                    alt='trpc'
                    className='max-w-full max-h-full object-cover ml-3'
                  />
                  <p className='mr-2 text-white'>React.js</p>
                </div>
                <div className='w-[280px] h-[45px] rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black flex items-center justify-start overflow-hidden gap-16'>
                  <Image
                    src='/prisma-3.svg'
                    width={120}
                    height={120}
                    alt='trpc'
                    className='max-w-full max-h-full object-cover ml-3'
                  />
                  <p className='mr-2 text-white'>Prisma</p>
                </div>
                <div className='w-[280px] h-[45px] rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black flex items-center justify-start overflow-hidden gap-16'>
                  <Image
                    src='/trpc.svg'
                    width={120}
                    height={120}
                    alt='trpc'
                    className='max-w-full max-h-full object-cover ml-3'
                  />
                  <p className='mr-2 text-white'>tRPC</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className='w-[521px] h-[255.5px] bg-gradient-to-r from-orange-400 to-rose-400 p-2'>
          <CardBody>
            <p className='text-[20px] text-white'>Supporting libraries</p>
            <div className='flex items-center justify-center mt-[50px]'>
              <div className='grid grid-cols-5 gap-[20px]'>
                <Link href='https://tailwindcss.com/'>
                  <Image
                    src='/tailwindcss.svg'
                    width={55}
                    height={55}
                    className='mt-[8px]'
                    alt='tailwind'
                  />
                </Link>
                <Link href='https://www.typescriptlang.org/'>
                  <Image
                    src='/typescript.svg'
                    width={55}
                    height={55}
                    alt='ts'
                  />
                </Link>
                <Link href='https://.org/'>
                  <Image src='/redux.svg' width={50} height={50} alt='trpc' />
                </Link>
                <Link href='/postgres'>
                  <Image
                    src='/postgresql.svg'
                    width={55}
                    height={55}
                    alt='trpc'
                  />
                </Link>
                <Link href='https://.org/'>
                  <Image
                    src='/react-query-icon.svg'
                    width={55}
                    height={55}
                    alt='trpc'
                  />
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  </section>
);

export default About;
