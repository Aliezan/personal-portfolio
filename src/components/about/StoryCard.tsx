import React, { FC } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Footprints } from 'lucide-react';

const StoryCard: FC = () => (
  <Card className='w-[500px] sm:w-[521px] h-[541px] relative'>
    <div className='absolute right-[-500px] w-[750px] h-[300px] rotate-[95deg] bg-[#FF0095] blur-[80px]' />
    <div className='absolute left-64 bottom-[-500px] rounded-[100%] w-[900px] h-[750px] rotate-[-10deg] bg-[#8349FF] blur-[80px]' />
    <div className='absolute right-[-200px] bottom-[-350px] rounded-[100%] w-[750px] h-96 rotate-[-30deg] bg-[#FFCDFF] blur-[80px]' />
    <CardHeader className='pt-10 pl-12 space-y-6'>
      <Footprints size={90} />
    </CardHeader>
    <CardBody>
      <p className='w-[440px] p-8 text-[25px] font-medium'>
        Started as a hobby, developing visually appealing and functional
        websites on the frontend has been my goal since the beginning.{' '}
        <span className='text-gray-500'>
          As I dive deeper, the JavaScript world always amazes me with how
          things can be made.
        </span>
      </p>
    </CardBody>
  </Card>
);

export default StoryCard;
