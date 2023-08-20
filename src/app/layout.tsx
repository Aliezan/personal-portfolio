import { FC } from 'react';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import ThemeProvider from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Alieza Nuriman - Portfolio',
  description: 'NEXT',
  icons: {
    icon: '/aliezn-ico.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang='en' suppressHydrationWarning>
    <body className={manrope.className}>
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
