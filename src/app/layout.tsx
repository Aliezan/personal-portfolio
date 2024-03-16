import { FC } from "react";
import { GeistSans } from "geist/font/sans";
import ThemeProvider from "@/utils/theme-provider";
import UIProvider from "@/utils/UIProvider";
import "@/styles/globals.css";
import Navibar from "@/components/navbar/Navibar";

interface RootLayoutProps {
  children: React.ReactNode;
}

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
