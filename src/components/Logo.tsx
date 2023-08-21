'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return theme === 'light' ? (
    <Image
      src='aliezn-light.svg'
      width={100}
      height={100}
      alt='aliezan-light'
    />
  ) : (
    <Image src='/aliezn-dark.svg' width={100} height={100} alt='aliezan-dark' />
  );
};

export default Logo;
