import React, { FC } from 'react';
import { SpaceGrotesk } from '@/utils/font';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import { Newspaper, BookOpen } from 'lucide-react';
import certs from '@/data/certs';
import JourneyLabel from './JourneyLabel';
import CertsAccordion from './CertsAccordion';

const Journey: FC = () => (
  <div className='mt-[100px]'>
    <div className='flex items-center justify-center'>
      <h1 className={`${SpaceGrotesk.className} font-medium text-[40px]`}>
        Journey into greatness
      </h1>
    </div>
    <div className='flex items-center justify-center mt-3'>
      <p className='text-center w-[550px]'>
        Every journey has a start, each step shaped me into a good devs.
        Countless hours and those sleepless nights, I&apos;ve been through it
        all.
      </p>
    </div>
    <div className='flex items-center justify-center mt-[100px]'>
      <div className='space-y-[150px]'>
        <div className='flex gap-[200px]'>
          <div className='flex items-center'>
            <div>
              <div className='flex gap-3'>
                <Image
                  src='/dicoding.jpeg'
                  width={50}
                  height={20}
                  alt='dicoding'
                />
                <h1
                  className={`${SpaceGrotesk.className} font-medium text-[30px]`}
                >
                  Dicoding Indonesia
                </h1>
              </div>
              <p className='w-[400px] mt-3'>
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
          <Card className='w-[500px] h-[400px]'>
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
        <div className='flex gap-[200px]'>
          <div className='flex items-center'>
            <div>
              <div className='flex gap-3'>
                <Image
                  src='/alterra-academy.png'
                  width={75}
                  height={10}
                  alt='dicoding'
                />
                <h1
                  className={`${SpaceGrotesk.className} font-medium text-[30px]`}
                >
                  Alterra Academy
                </h1>
              </div>
              <p className='w-[420px] mt-3'>
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
                    src='/km.png'
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
            </div>
          </div>
          <Card className='w-[500px] h-[400px]'>
            <CardHeader className='pt-6 pl-6'>
              <p className='text-tiny uppercase dark:text-white/60 text-black/60'>
                programme description
              </p>
            </CardHeader>
            <CardBody>
              <div className='p-2'>
                <p>From </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Journey;
