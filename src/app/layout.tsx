import { FC } from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import ThemeProvider from '@/components/theme-provider';
import UIProvider from '@/utils/UIProvider';
import '@/styles/globals.css';
import Navibar from '@/components/Navibar';

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
    <body className={GeistSans.className}>
      <UIProvider>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navibar />
          {children}
        </ThemeProvider>
      </UIProvider>
    </body>
  </html>
);

export default RootLayout;
