import Image from 'next/image';

const Navbar = () => (
  <div className='grid grid-cols-12 h-[96px] bg-[#27282d]'>
    <div className='col-start-2 mt-[30px]'>
      <Image src='/aliezan.svg' alt='logo' width={150} height={150} />
    </div>
    <div className='col-start-10 flex gap-4 mt-[30px]'>
      <a href='#home'>HOME</a>
      <a href='#work'>WORK</a>
      <a href='#about'>ABOUT</a>
    </div>
  </div>
);

export default Navbar;
