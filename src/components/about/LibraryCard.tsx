import React, { FC } from 'react';
import { Card, CardBody, Tooltip, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { prefix } from '@/utils/prefix';

const LibraryCard: FC = () => (
  <Card className='w-[521px] h-[255.5px] relative p-2'>
    <div className='absolute bottom-[-242px] left-[176px] rounded-l-[20px] w-[919px] h-[391px] bg-[#007BFF] blur-[80px]' />
    <CardHeader>
      <p className='text-[20px]'>Supporting libraries and tools</p>
    </CardHeader>
    <CardBody>
      <div className='flex items-center justify-center mt-[5px]'>
        <div className='grid grid-cols-5 gap-[30px]'>
          <Tooltip content='TailwindCSS'>
            <Link href='https://tailwindcss.com/'>
              <Image
                src={`${prefix}/tailwindcss.svg`}
                width={50}
                height={50}
                className='mt-[8px]'
                alt='tailwind'
              />
            </Link>
          </Tooltip>
          <Tooltip content='TypeScript'>
            <Link href='https://www.typescriptlang.org/'>
              <Image
                src={`${prefix}/typescript.svg`}
                width={50}
                height={50}
                alt='ts'
              />
            </Link>
          </Tooltip>
          <Tooltip content='Redux Toolkit'>
            <Link href='https://redux-toolkit.js.org/'>
              <Image
                src={`${prefix}/redux.svg`}
                width={50}
                height={50}
                alt='redux'
              />
            </Link>
          </Tooltip>
          <Tooltip content='PostgreSQL'>
            <Link href='https://www.postgresql.org/'>
              <Image
                src={`${prefix}/postgresql.svg`}
                width={50}
                height={50}
                alt='postgresql'
              />
            </Link>
          </Tooltip>
          <Tooltip content='TanStack Query'>
            <Link href='https://tanstack.com/query/latest'>
              <Image
                src={`${prefix}/react-query-icon.svg`}
                width={50}
                height={50}
                alt='react-query'
              />
            </Link>
          </Tooltip>
          <Tooltip content='React Hook Form'>
            <Link href='https://react-hook-form.com/'>
              <Image
                src={`${prefix}/rhf.svg`}
                width={50}
                height={50}
                alt='react-hooks-form'
              />
            </Link>
          </Tooltip>
          <Tooltip content='Zustand'>
            <Link href='https://zustand-demo.pmnd.rs/'>
              <Image
                src={`${prefix}/zustand.png`}
                width={50}
                height={50}
                alt='zustand'
              />
            </Link>
          </Tooltip>
          <Tooltip content='Zod'>
            <Link href='https://zod.dev/'>
              <Image
                src={`${prefix}/zod.svg`}
                width={50}
                height={50}
                alt='zod'
                className='mt-1'
              />
            </Link>
          </Tooltip>
          <Tooltip content='Ubuntu'>
            <Link href='https://ubuntu.com/'>
              <Image
                src={`${prefix}/ubuntu-logo.png`}
                width={50}
                height={50}
                alt='ubuntu'
                className='mt-1'
              />
            </Link>
          </Tooltip>
          <Tooltip content='Docker'>
            <Link href='https://www.docker.com/'>
              <Image
                src={`${prefix}/docker.svg`}
                width={50}
                height={50}
                alt='docker'
                className='mt-1'
              />
            </Link>
          </Tooltip>
        </div>
      </div>
    </CardBody>
  </Card>
);

export default LibraryCard;
