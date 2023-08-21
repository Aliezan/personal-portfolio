import Image from 'next/image';
import HeroLayout from '@/layouts/HeroLayout';
import ChevronNav from '@/components/ChevronNav';
import TechStacksLayout from '@/layouts/TechStacksLayout';

const Home = () => (
  <main>
    <HeroLayout>
      <div className='flex justify-center h-[600px] items-center'>
        <div>
          <div className='flex gap-[120px]'>
            <div className='w-[720px]'>
              <h1 className='text-[50px] font-bold text-black dark:text-white'>
                Hi, I&apos;m Muhammad Alieza Nuriman a Frontend Developer based
                in Bogor, Indonesia.
              </h1>
              <h2 className='font-semibold text-gray-500 text-[20px]'>
                I made highly interactive websites primarly using React.js and
                strive to learn new things everyday.
              </h2>
            </div>
            <div
              style={{
                position: 'relative',
                width: '400px',
                height: '400px',
              }}
            >
              <Image
                src='/aliezn-pfp.jpg'
                alt='pfp'
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
          <ChevronNav />
        </div>
      </div>
    </HeroLayout>
    <TechStacksLayout>
      <div className='flex justify-center items-center h-[200px]'>
        <div className='flex justify-between'>TODO: Tech Stacks with grid</div>
      </div>
    </TechStacksLayout>
  </main>
);

export default Home;
