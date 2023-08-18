import { FC } from 'react';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import ThemeProvider from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

const WorkSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Alieza Nuriman - Portfolio',
  description: 'NEXT',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang='en' suppressHydrationWarning>
    <body className={WorkSans.className}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <nav>
          <Navbar />
        </nav>
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
