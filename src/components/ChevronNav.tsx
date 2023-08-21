'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const ChevronNav = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className='flex justify-center mt-[40px]'>
      <Link href='#works'>
        <ChevronDown color={theme === 'light' ? 'black' : 'white'} />
      </Link>
    </div>
  );
};

export default ChevronNav;
