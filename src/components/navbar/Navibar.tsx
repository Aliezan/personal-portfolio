'use client';

import React, { FC, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { SpaceGrotesk } from '@/utils/font';
import { Link } from 'react-scroll/modules';
import Logo from '../Logo';
import ThemeButton from './ThemeButton';
import { Button } from '../ui/button';

const Navibar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar
      position='sticky'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='sm:hidden'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarContent justify='start'>
        <NavbarBrand>
          <Logo width={100} height={100} />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Button variant='link'>
            <Link
              to='hero'
              className={SpaceGrotesk.className}
              spy
              smooth
              offset={-70}
              duration={500}
            >
              home
            </Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button variant='link'>
            <Link
              to='about'
              className={SpaceGrotesk.className}
              spy
              smooth
              offset={60}
              duration={500}
            >
              about
            </Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button variant='link'>
            <Link
              to='test'
              className={SpaceGrotesk.className}
              spy
              smooth
              duration={500}
            >
              works
            </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Button variant='link'>
            <Link to='home' spy smooth duration={500}>
              home
            </Link>
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button variant='link'>
            <Link to='about' spy smooth duration={500}>
              about
            </Link>
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button variant='link'>
            <Link to='test' spy smooth duration={500}>
              works
            </Link>
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Navibar;
