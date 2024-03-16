import { FC } from "react";
import { GeistSans } from "geist/font/sans";
import ThemeProvider from "@/utils/theme-provider";
import UIProvider from "@/utils/UIProvider";
import "@/styles/globals.css";
import Navibar from "@/components/navbar/Navibar";
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://aliezan.is-a.dev"),
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={GeistSans.className}>
      <UIProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navibar />
          {children}
        </ThemeProvider>
      </UIProvider>
    </body>
  </html>
);

export default RootLayout;
