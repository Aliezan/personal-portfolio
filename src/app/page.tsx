import Image from 'next/image';

const Home = () => (
  <main>
    <div className='flex justify-between mt-[60px] ml-[120px]'>
      <div className='w-[720px]'>
        <h1 className='text-[50px] font-bold text-black dark:text-white'>
          Hi, I&apos;m Muhammad Alieza Nuriman a Frontend Developer based in
          Bogor, Indonesia.
        </h1>
        <h2 className='font-semibold text-gray-500'>
          Undergraduate student who passionate a
        </h2>
      </div>
      <div
        style={{
          position: 'relative',
          width: '400px',
          height: '400px',
        }}
        className='mr-[130px]'
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
  </main>
);

export default Home;
