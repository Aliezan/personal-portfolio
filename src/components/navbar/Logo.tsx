import Image from 'next/image';

const Logo = () => (
  <>
    <div className='dark:hidden'>
      <Image
        src='aliezn-light.svg'
        width={100}
        height={100}
        alt='aliezan-light'
      />
    </div>

    <div className='hidden dark:block'>
      <Image
        src='/aliezn-dark.svg'
        width={100}
        height={100}
        alt='aliezan-dark'
      />
    </div>
  </>
);
export default Logo;
