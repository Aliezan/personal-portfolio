import React, { FC } from 'react';
import { SpaceGrotesk } from '@/utils/font';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import { Newspaper, BookOpen, ExternalLink, TrendingUp } from 'lucide-react';
import certs from '@/data/certs';
import Link from 'next/link';
import JourneyLabel from './JourneyLabel';
import CertsAccordion from './CertsAccordion';

const Journey: FC = () => (
  <div className='mt-[100px]'>
    <div className='flex items-center justify-center'>
      <h1
        className={`${SpaceGrotesk.className} text-[30px] sm:text-[40px] font-medium`}
      >
        Journey into greatness
      </h1>
    </div>
    <div className='flex items-center justify-center mt-3'>
      <p className='text-[13px] w-[300px] sm:w-[550px] text-center'>
        Every journey has a start, each step shaped me into a good devs.
        Countless hours and those sleepless nights, I&apos;ve been through it
        all.
      </p>
    </div>
    <div className='flex items-center justify-center mt-[100px]'>
      <div className='space-y-[150px]'>
        <div className='grid grid-cols-1 justify-items-center sm:flex gap-[200px]'>
          <div className='flex items-center'>
            <div>
              <div className='flex gap-3'>
                <Image
                  src='./dicoding.jpeg'
                  width={50}
                  height={20}
                  alt='dicoding'
                />
                <h1
                  className={`${SpaceGrotesk.className} font-medium text-[20px] mt-2 sm:text-[30px] sm:mt-0`}
                >
                  Dicoding Indonesia
                </h1>
              </div>
              <p className='w-[400px] mt-3 text-small'>
                Dicoding is developer end-to-end platform comprises of online
                learning program & platform in Indonesia. &nbsp; I&apos;ve been
                getting over 10+ certifications from beginner to advanced levels
                course
              </p>
              <JourneyLabel>
                <Newspaper size={20} />
                <p className={SpaceGrotesk.className}>Certifications</p>
              </JourneyLabel>
            </div>
          </div>
          <Card className='w-[480px] sm:w-[500px] h-[400px]'>
            <CardHeader className='pt-6 pl-6'>
              <p className='text-tiny uppercase dark:text-white/60 text-black/60'>
                List of certificates
              </p>
            </CardHeader>
            <CardBody>
              <div className='p-2'>
                <CertsAccordion certs={certs} />
              </div>
            </CardBody>
            <CardFooter className='absolute dark:bg-white bg-[#54f362] bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
              <div className='p-1'>
                <p className='text-black text-tiny font-semibold'>
                  Did you know?
                </p>
                <p className='text-black text-tiny'>
                  I&apos;ve got all this courses and certs for free through many
                  scholarship programme
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className='grid grid-cols-1 justify-items-center sm:flex gap-[200px]'>
          <div className='flex items-center'>
            <div>
              <div className='flex gap-3'>
                <Image
                  src='./alterra-academy.png'
                  width={75}
                  height={10}
                  alt='alterra'
                />
                <h1
                  className={`${SpaceGrotesk.className} font-medium text-[20px] mt-2 sm:text-[30px] sm:mt-0`}
                >
                  Alterra Academy
                </h1>
              </div>
              <p className='w-[420px] mt-3 text-small'>
                Alterra Academy is one of the Kampus Merdeka partners that
                allowed me to learn extensively about React Ecosystem in a
                4-month programme complete with Individual and Capstone Project
              </p>
              <div className='flex gap-3'>
                <JourneyLabel>
                  <BookOpen size={20} className='mt-[5px]' />
                  <p className={`${SpaceGrotesk.className} text-tiny`}>
                    Independent Study
                  </p>
                </JourneyLabel>
                <JourneyLabel>
                  <Image
                    src='./km.png'
                    alt='kmk'
                    width={30}
                    height={10}
                    className='mt-[5px]'
                  />
                  <p className={`${SpaceGrotesk.className} text-tiny mt-[5px]`}>
                    Kampus Merdeka
                  </p>
                </JourneyLabel>
              </div>
              <JourneyLabel>
                <Newspaper size={20} />
                <p className={SpaceGrotesk.className}>Certifications</p>
              </JourneyLabel>
            </div>
          </div>
          <Card
            className='w-[480px] sm:w-[500px] h-[400px] relative'
            isFooterBlurred
          >
            <div className='absolute bottom-[-200px] left-[50px] rounded-l-[20px] w-[919px] h-[391px] bg-[#FE7600] blur-[80px]' />
            <CardHeader className='pt-6 pl-6'>
              <p className='text-tiny uppercase dark:text-white/60 text-black/60'>
                programme description
              </p>
            </CardHeader>
            <CardBody className='relative'>
              <div className='w-[300px] space-y-3 p-5'>
                <p className='text-[16px] font-medium'>
                  This program wasn&apos;t just about React basics; it took me
                  all the way to global state management with seamless
                  serverless API integration.
                </p>
                <p className='text-[16px] font-medium'>
                  Moreover, i got the chance to lead a frontend team to build a
                  capstone project
                </p>
                <TrendingUp
                  className='absolute right-[50px] top-[60px]'
                  size={100}
                />
              </div>
            </CardBody>
            <CardFooter className='before:bg-white/10 border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
              <Link
                href='https://drive.google.com/uc?export=download&id=1Gb2X9izrRHjlqW4CJ5SYihJZNrnZigXi'
                className='flex justify-between gap-[10px]'
              >
                <p className='text-tiny font-semibold hover:underline'>
                  Certification Link
                </p>
                <ExternalLink size={15} />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Journey;
