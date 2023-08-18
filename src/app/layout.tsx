import { FC } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Alieza Nuriman - Portfolio',
  description: 'NEXT',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <html lang='en'>
    <body className={inter.className}>
      <nav>
        <Navbar logo='Muhammad Alieza Nuriman' />
      </nav>
      {children}
    </body>
  </html>
);

export default RootLayout;
