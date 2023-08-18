import { FC } from 'react';

interface NavbarProps {
  logo: string;
}

const Navbar: FC<NavbarProps> = ({ logo }) => (
  <div className='flex'>
    <h1 className='text-zinc-500'>{logo}</h1>
  </div>
);

export default Navbar;
