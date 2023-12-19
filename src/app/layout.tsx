import { FC } from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import ThemeProvider from '@/utils/theme-provider';
import UIProvider from '@/utils/UIProvider';
import '@/styles/globals.css';
import Navibar from '@/components/navbar/Navibar';

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Alieza Nuriman - Portfolio',
    template: '%s | Alieza Nuriman - Portfolio',
  },
  description:
    'Personal Portfolio of Muhammad Alieza Nuriman, Web Developer and Undergraduate Student at Politeknik Negeri Jakarta. Currently learning JavaScript modern web frameworks',
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
