import React, { FC } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Chip,
  CardFooter,
} from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const WorksCard: FC = () => (
  <>
    <Card className='w-[650px] h-[600px] relative' isFooterBlurred>
      <div className='absolute right-[-500px] w-[750px] h-[300px] rotate-[95deg] bg-[#390099] blur-[80px]' />
      <div className='absolute left-64 bottom-[-500px] rounded-[100%] w-[900px] h-[750px] rotate-[-10deg] bg-[#9e0059] blur-[80px]' />
      <div className='absolute right-[-200px] bottom-[-350px] rounded-[100%] w-[750px] h-96 rotate-[-30deg] bg-[#ff0054] blur-[80px]' />
      <CardHeader className='flex-col !items-start p-5 space-y-2'>
        <div className='flex gap-3'>
          <Image
            src='./squadspacelogo.svg'
            alt='squadspace'
            width={35}
            height={35}
          />
          <p className={`${SpaceGrotesk.className} font-medium text-[28px]`}>
            Squad Space
          </p>
        </div>
        <p className='text-small dark:text-white/60 text-black/60'>
          Admin app companion for Squad Space App
        </p>
        <div className='flex gap-2'>
          <Chip
            size='sm'
            className='bg-black dark:bg-white text-white dark:text-black'
          >
            <ExternalLink size={12} className='inline mr-1' />
            <Link href='/' className='hover:underline'>
              Demo Link
            </Link>
          </Chip>
          <Chip size='sm' variant='faded'>
            Dashboard App
          </Chip>
          <Chip size='sm' variant='faded'>
            Single Page App
          </Chip>
          <Chip size='sm' variant='faded'>
            Frontend
          </Chip>
        </div>
        <CardBody />
        <CardFooter className='absolute left-0 bottom-0 border-t-1 z-10 before:bg-white/100 border-white/20'>
          <div className='p-2 space-y-3'>
            <p className='text-black dark:text-white text-tiny font-semibold'>
              Built with
            </p>
            <div className='flex gap-2'>
              <Image src='./react.svg' alt='react' width={23} height={23} />
              <Image
                src='./tailwindcss.svg'
                alt='tailwind'
                width={23}
                height={23}
              />
              <Image src='./zustand.png' alt='react' width={23} height={23} />
              <Image src='./formik.svg' alt='formik' width={23} height={23} />
              <p className='text-small font-bold mt-1'>+4 more</p>
            </div>
          </div>
        </CardFooter>
      </CardHeader>
    </Card>
    <Card className='w-[650px] h-[600px] relative'>
      <div className='absolute right-[-500px] w-[750px] h-[300px] rotate-[95deg] bg-[#f94144] blur-[80px]' />
      <div className='absolute left-64 bottom-[-500px] rounded-[100%] w-[900px] h-[750px] rotate-[-10deg] bg-[#f3722c] blur-[80px]' />
      <div className='absolute right-[-200px] bottom-[-350px] rounded-[100%] w-[750px] h-96 rotate-[-30deg] bg-[#f8961e] blur-[80px]' />
      <CardHeader className='flex-col !items-start p-5 space-y-2'>
        <div className='flex gap-3'>
          <Image
            src='./squadspacelogo.svg'
            alt='squadspace'
            width={35}
            height={35}
          />
          <p className={`${SpaceGrotesk.className} font-medium text-[28px]`}>
            Habit Tracker App
          </p>
        </div>
        <p className='text-small dark:text-white/60 text-black/60'>
          Admin app companion for Squad Space App
        </p>
        <div className='flex gap-2'>
          <Chip
            size='sm'
            className='bg-black dark:bg-white text-white dark:text-black'
          >
            <ExternalLink size={12} className='inline mr-1' />
            <Link href='/' className='hover:underline'>
              Demo Link
            </Link>
          </Chip>
          <Chip size='sm' variant='faded'>
            Mobile Optimized View
          </Chip>
          <Chip size='sm' variant='faded'>
            Single Page App
          </Chip>
          <Chip size='sm' variant='faded'>
            Fullstack
          </Chip>
        </div>
      </CardHeader>
      <CardFooter className='absolute left-0 bottom-0 border-t-1 z-10 before:bg-white/100 border-white/20'>
        <div className='p-2 space-y-3'>
          <p className='text-black dark:text-white text-tiny font-semibold'>
            Built with
          </p>
          <div className='flex gap-2'>
            <Image src='./react.svg' alt='react' width={23} height={23} />
            <Image
              src='./tailwindcss.svg'
              alt='tailwind'
              width={23}
              height={23}
            />
            <Image src='./zustand.png' alt='react' width={23} height={23} />
            <Image src='./formik.svg' alt='formik' width={23} height={23} />
            <p className='text-small font-bold mt-1'>+4 more</p>
          </div>
        </div>
      </CardFooter>
    </Card>
    <Card className='w-[1330px] h-[600px] relative col-span-2'>
      <div className='absolute left-[200px] bottom-[-500px] rounded-[100%] w-[900px] h-[750px] rotate-[-10deg] bg-[#008000] blur-[80px]' />
      <CardHeader className='flex-col !items-start p-5 space-y-2'>
        <div className='flex gap-3'>
          <Image
            src='./squadspacelogo.svg'
            alt='squadspace'
            width={35}
            height={35}
          />
          <p className={`${SpaceGrotesk.className} font-medium text-[28px]`}>
            Identify
          </p>
        </div>
        <p className='text-small dark:text-white/60 text-black/60'>
          Admin app companion for Squad Space App
        </p>
        <div className='flex gap-2'>
          <Chip
            size='sm'
            className='bg-black dark:bg-white text-white dark:text-black'
          >
            <ExternalLink size={12} className='inline mr-1' />
            <Link href='/' className='hover:underline'>
              Demo Link
            </Link>
          </Chip>
          <Chip size='sm' variant='faded'>
            Dashboard App
          </Chip>
          <Chip size='sm' variant='faded'>
            Single Page App
          </Chip>
          <Chip size='sm' variant='faded'>
            Frontend
          </Chip>
        </div>
        <CardBody />
        <CardFooter className='absolute left-0 bottom-0 border-t-1 z-10 before:bg-white/100 border-white/20'>
          <div className='p-2 space-y-3'>
            <p className='text-black dark:text-white text-tiny font-semibold'>
              Built with
            </p>
            <div className='flex gap-2'>
              <Image src='./react.svg' alt='react' width={23} height={23} />
              <Image
                src='./tailwindcss.svg'
                alt='tailwind'
                width={23}
                height={23}
              />
              <Image src='./zustand.png' alt='react' width={23} height={23} />
              <Image src='./formik.svg' alt='formik' width={23} height={23} />
              <p className='text-small font-bold mt-1'>+4 more</p>
            </div>
          </div>
        </CardFooter>
      </CardHeader>
    </Card>
  </>
);

export default WorksCard;
