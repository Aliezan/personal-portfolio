import React, { FC } from 'react';
import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';

const MainStacks: FC = () => (
  <Card className='w-[521px] h-[255.5px] p-2 relative'>
    <div className='absolute bottom-[-338px] right-[300px] w-[919px] h-[391px] bg-[#0034EB] blur-[80px]' />
    <div className='absolute bottom-[-338px] left-[-300px] w-[919px] h-[391px] bg-[#00F3F9] blur-[80px]' />

    <CardBody>
      <div className='flex overflow-hidden gap-[100px]'>
        <div className='flex items-center'>
          <h1 className='ml-[30px] text-[20px] font-medium'>Main Stacks</h1>
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
);

export default MainStacks;
